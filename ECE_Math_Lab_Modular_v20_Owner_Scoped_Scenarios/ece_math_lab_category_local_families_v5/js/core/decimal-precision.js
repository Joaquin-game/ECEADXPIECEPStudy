/*
 * ECE Math Lab decimal arithmetic helper.
 * Exact base-10 add/subtract/multiply, precision-rounded division, integer powers,
 * square roots, decimal parsing, scientific/engineering formatting, and tolerance checks.
 * Transcendental functions intentionally use the browser Math implementation; their output
 * is converted back into this decimal representation. This keeps ordinary transcendental
 * accuracy at IEEE-754 level while avoiding fixed-decimal display and comparison loss.
 */
(function (root) {
  'use strict';
  const PRECISION = 40;
  const MAX_SCALE_SHIFT = 100000;
  const POW10_CACHE = [1n];
  function pow10(n) {
    if (!Number.isInteger(n) || n < 0 || n > MAX_SCALE_SHIFT) throw new Error('Decimal exponent is outside the supported range.');
    while (POW10_CACHE.length <= n) POW10_CACHE.push(POW10_CACHE[POW10_CACHE.length - 1] * 10n);
    return POW10_CACHE[n];
  }
  function digits(n) { return (n < 0n ? -n : n).toString().length; }
  function roundQuotient(numerator, denominator) {
    if (denominator === 0n) throw new Error('Division by zero.');
    const negative = (numerator < 0n) !== (denominator < 0n);
    const a = numerator < 0n ? -numerator : numerator;
    const b = denominator < 0n ? -denominator : denominator;
    let q = a / b;
    const r = a % b;
    if (r * 2n >= b) q++;
    return negative ? -q : q;
  }

  class PrecisionDecimal {
    constructor(value, scale) {
      if (value instanceof PrecisionDecimal) { this.c = value.c; this.s = value.s; return; }
      if (typeof value === 'bigint') { this.c = value; this.s = Number.isInteger(scale) ? scale : 0; this._normalise(); return; }
      const source = String(value ?? '').trim().replace(/\u2212/g, '-').replace(/\u2013|\u2014/g, '-');
      const m = source.match(/^([+-]?)(?:(\d+)(?:\.(\d*))?|\.(\d+))(?:[eE]([+-]?\d+))?$/);
      if (!m) throw new Error('Invalid decimal value: ' + source);
      const intPart = m[2] || '0';
      const fracPart = m[3] !== undefined ? m[3] : (m[4] || '');
      const exponent = Number(m[5] || 0);
      if (!Number.isSafeInteger(exponent) || Math.abs(exponent) > MAX_SCALE_SHIFT) throw new Error('Decimal exponent is outside the supported range.');
      let coeff = BigInt((intPart + fracPart).replace(/^0+(?=\d)/, '') || '0');
      if (m[1] === '-') coeff = -coeff;
      this.c = coeff;
      this.s = fracPart.length - exponent;
      this._normalise();
    }
    _normalise() {
      if (this.c === 0n) { this.s = 0; return this; }
      while (this.c % 10n === 0n) { this.c /= 10n; this.s--; }
      return this;
    }
    static from(value) {
      if (value instanceof PrecisionDecimal) return value;
      if (typeof value === 'number') {
        if (!Number.isFinite(value)) throw new Error('Numeric value must be finite.');
        if (Object.is(value, -0)) return new PrecisionDecimal('0');
      }
      return new PrecisionDecimal(value);
    }
    static min(a, b) { a = PrecisionDecimal.from(a); b = PrecisionDecimal.from(b); return a.lte(b) ? a : b; }
    static max(a, b) { a = PrecisionDecimal.from(a); b = PrecisionDecimal.from(b); return a.gte(b) ? a : b; }
    static pi() { return new PrecisionDecimal('3.1415926535897932384626433832795028841971693993751'); }
    static e() { return new PrecisionDecimal('2.7182818284590452353602874713526624977572'); }
    isZero() { return this.c === 0n; }
    isNegative() { return this.c < 0n; }
    abs() { return this.c < 0n ? new PrecisionDecimal(-this.c, this.s) : this; }
    negated() { return new PrecisionDecimal(-this.c, this.s); }
    exponent10() { return this.c === 0n ? 0 : digits(this.c) - 1 - this.s; }
    toNumber() { return Number(this.toString()); }
    toJSON() { return this.toString(); }
    valueOf() { return this.toNumber(); }
    compareTo(other) {
      const b = PrecisionDecimal.from(other);
      if (this.c === b.c && this.s === b.s) return 0;
      if (this.c < 0n && b.c >= 0n) return -1;
      if (this.c >= 0n && b.c < 0n) return 1;
      const scale = Math.max(this.s, b.s);
      const aC = this.c * pow10(scale - this.s), bC = b.c * pow10(scale - b.s);
      return aC < bC ? -1 : aC > bC ? 1 : 0;
    }
    eq(other) { return this.compareTo(other) === 0; }
    lt(other) { return this.compareTo(other) < 0; }
    lte(other) { return this.compareTo(other) <= 0; }
    gt(other) { return this.compareTo(other) > 0; }
    gte(other) { return this.compareTo(other) >= 0; }
    plus(other) {
      const b = PrecisionDecimal.from(other), scale = Math.max(this.s, b.s);
      return new PrecisionDecimal(this.c * pow10(scale - this.s) + b.c * pow10(scale - b.s), scale);
    }
    minus(other) { return this.plus(PrecisionDecimal.from(other).negated()); }
    times(other) { const b = PrecisionDecimal.from(other); return new PrecisionDecimal(this.c * b.c, this.s + b.s); }
    dividedBy(other, precision = PRECISION) {
      const b = PrecisionDecimal.from(other);
      if (b.c === 0n) throw new Error('Division by zero.');
      if (this.c === 0n) return new PrecisionDecimal('0');
      const ac = this.c < 0n ? -this.c : this.c;
      const bc = b.c < 0n ? -b.c : b.c;
      const ad = digits(ac), bd = digits(bc);
      let exp = (ad - 1 - this.s) - (bd - 1 - b.s);
      if (ac * pow10(bd - 1) < bc * pow10(ad - 1)) exp--;
      const resultScale = precision - 1 - exp;
      const shift = resultScale + b.s - this.s;
      let numerator = ac, denominator = bc;
      if (shift >= 0) numerator *= pow10(shift); else denominator *= pow10(-shift);
      const coeff = roundQuotient((this.c < 0n) !== (b.c < 0n) ? -numerator : numerator, denominator);
      return new PrecisionDecimal(coeff, resultScale);
    }
    pow(power) {
      const p = PrecisionDecimal.from(power);
      if (p.s <= 0) {
        const exponent = Number(p.toString());
        if (Number.isSafeInteger(exponent) && Math.abs(exponent) <= 10000) {
          if (exponent === 0) return new PrecisionDecimal('1');
          if (exponent < 0) return new PrecisionDecimal('1').dividedBy(this.pow(-exponent));
          let base = this, e = exponent, result = new PrecisionDecimal('1');
          while (e > 0) { if (e % 2) result = result.times(base); e = Math.floor(e / 2); if (e) base = base.times(base); }
          return result;
        }
      }
      const result = Math.pow(this.toNumber(), p.toNumber());
      if (!Number.isFinite(result)) throw new Error('Power did not produce a finite real number.');
      return PrecisionDecimal.from(result);
    }
    sqrt() {
      if (this.c < 0n) throw new Error('Square root of a negative value is not real.');
      if (this.c === 0n) return this;
      const exp = this.exponent10();
      let adjustedExp = exp, mantissaDigits = (this.c < 0n ? -this.c : this.c).toString();
      let mantissa = Number(mantissaDigits[0] + (mantissaDigits.length > 1 ? '.' + mantissaDigits.slice(1, 16) : ''));
      if (adjustedExp % 2 !== 0) { mantissa *= 10; adjustedExp--; }
      const guess = new PrecisionDecimal(String(Math.sqrt(mantissa)) + 'e' + (adjustedExp / 2));
      let x = guess;
      for (let i = 0; i < 100; i++) {
        const next = x.plus(this.dividedBy(x)).dividedBy('2');
        if (next.eq(x)) return next;
        x = next;
      }
      return x;
    }
    roundToScale(targetScale) {
      if (!Number.isSafeInteger(targetScale) || Math.abs(targetScale) > MAX_SCALE_SHIFT) throw new Error('Requested decimal place is outside the supported range.');
      const shift = targetScale - this.s;
      if (shift >= 0) return new PrecisionDecimal(this.c * pow10(shift), targetScale);
      return new PrecisionDecimal(roundQuotient(this.c, pow10(-shift)), targetScale);
    }
    toSignificantDigits(count = 10) {
      if (!Number.isInteger(count) || count < 1 || count > 1000) throw new Error('Significant digits must be between 1 and 1000.');
      if (this.isZero()) return this;
      return this.roundToScale(count - 1 - this.exponent10());
    }
    toFixed(decimalPlaces = 0) {
      if (!Number.isInteger(decimalPlaces) || decimalPlaces < 0 || decimalPlaces > 1000) throw new Error('Decimal places must be between 0 and 1000.');
      const r = this.roundToScale(decimalPlaces);
      const negative = r.c < 0n, coeff = (negative ? -r.c : r.c).toString();
      const scale = decimalPlaces;
      let full = coeff;
      if (r.s < scale) full += '0'.repeat(scale - r.s);
      else if (r.s > scale) full = full.slice(0, Math.max(1, full.length - (r.s - scale)));
      if (scale > 0) {
        full = full.padStart(scale + 1, '0');
        full = full.slice(0, -scale) + '.' + full.slice(-scale);
      }
      if (negative && !/^0(?:\.0+)?$/.test(full)) full = '-' + full;
      return full;
    }
    toPlainString() {
      if (this.c === 0n) return '0';
      const negative = this.c < 0n, coeff = (negative ? -this.c : this.c).toString();
      let out;
      if (this.s <= 0) out = coeff + '0'.repeat(-this.s);
      else if (this.s >= coeff.length) out = '0.' + '0'.repeat(this.s - coeff.length) + coeff;
      else out = coeff.slice(0, coeff.length - this.s) + '.' + coeff.slice(coeff.length - this.s);
      return negative ? '-' + out : out;
    }
    toScientificString(significantDigits = 10) {
      const r = this.toSignificantDigits(significantDigits);
      if (r.c === 0n) return '0e+0';
      const negative = r.c < 0n, coeff = (negative ? -r.c : r.c).toString(), exp = r.exponent10();
      let mant = coeff[0] + (coeff.length > 1 ? '.' + coeff.slice(1) : '');
      mant = mant.replace(/\.?0+$/, '');
      return (negative ? '-' : '') + mant + 'e' + (exp >= 0 ? '+' : '') + exp;
    }
    toEngineeringString(significantDigits = 10) {
      if (this.c === 0n) return '0e+0';
      const exp = Math.floor(this.exponent10() / 3) * 3;
      const mantissa = new PrecisionDecimal(this.c, this.s + exp).toSignificantDigits(significantDigits);
      const out = mantissa.toPlainString().replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
      return out + 'e' + (exp >= 0 ? '+' : '') + exp;
    }
    toString() {
      if (this.c === 0n) return '0';
      const exp = this.exponent10();
      if (exp < -7 || exp >= 21) return this.toScientificString(PRECISION);
      return this.toPlainString();
    }
  }

  function mathUnary(fn, x) {
    const n = PrecisionDecimal.from(x).toNumber();
    const out = fn(n);
    if (!Number.isFinite(out)) throw new Error('Function did not produce a finite real number.');
    return PrecisionDecimal.from(out);
  }
  function hpEval(source, vars = {}) {
    let text = String(source ?? '').trim();
    if (!text) throw new Error('Expression is empty.');
    text = text.replace(/\\(?:times|cdot)\s*/g, '*').replace(/[×·]/g, '*').replace(/[÷]/g, '/').replace(/[−–—]/g, '-');
    text = text.replace(/10\s*\^\s*\{([^{}]+)\}/g, '10^($1)');
    text = text.replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+)/g, v => '^' + [...v].map(ch => ({'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-'}[ch])).join(''));
    text = text.replace(/\b([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?)\s*[xX]\s*10\s*\^\s*\(?([+-]?\d+)\)?/g, '$1*10^($2)');
    const tokens = text.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|[A-Za-z_]\w*|[()+\-*\/,^]/g) || [];
    if (tokens.join('').length !== text.replace(/\s/g, '').length) throw new Error('Unsupported character in expression: ' + text);
    let i = 0;
    const peek = () => tokens[i], eat = t => { if (tokens[i] === t) { i++; return true; } return false; };
    const funcs = {
      sqrt: x => PrecisionDecimal.from(x).sqrt(), abs: x => PrecisionDecimal.from(x).abs(),
      sin: x => mathUnary(Math.sin, x), cos: x => mathUnary(Math.cos, x), tan: x => mathUnary(Math.tan, x),
      asin: x => mathUnary(Math.asin, x), acos: x => mathUnary(Math.acos, x), atan: x => mathUnary(Math.atan, x),
      exp: x => {
        const v = PrecisionDecimal.from(x).toNumber();
        if (!Number.isFinite(v)) throw new Error('exp input is outside the supported Number range.');
        const log10 = v / Math.LN10;
        if (Math.abs(log10) < 300) return PrecisionDecimal.from(Math.exp(v));
        const exponent = Math.floor(log10), mant = Math.pow(10, log10 - exponent);
        return new PrecisionDecimal(String(mant) + 'e' + exponent);
      },
      log: x => { const d = PrecisionDecimal.from(x); if (d.c <= 0n) throw new Error('log requires a positive value.'); const exp = d.exponent10(); const leading = (d.c < 0n ? -d.c : d.c).toString(); const mant = Number(leading[0] + (leading.length > 1 ? '.' + leading.slice(1, 16) : '')); return PrecisionDecimal.from(Math.log(mant) + exp * Math.LN10); },
      ln: x => funcs.log(x), log10: x => { const d = PrecisionDecimal.from(x); if (d.c <= 0n) throw new Error('log10 requires a positive value.'); const exp = d.exponent10(); const leading = (d.c < 0n ? -d.c : d.c).toString(); const mant = Number(leading[0] + (leading.length > 1 ? '.' + leading.slice(1, 16) : '')); return PrecisionDecimal.from(Math.log10(mant) + exp); },
      floor: x => PrecisionDecimal.from(Math.floor(PrecisionDecimal.from(x).toNumber())),
      ceil: x => PrecisionDecimal.from(Math.ceil(PrecisionDecimal.from(x).toNumber())),
      round: x => PrecisionDecimal.from(Math.round(PrecisionDecimal.from(x).toNumber())),
      min: (...xs) => xs.map(PrecisionDecimal.from).reduce((a, b) => a.lte(b) ? a : b),
      max: (...xs) => xs.map(PrecisionDecimal.from).reduce((a, b) => a.gte(b) ? a : b),
      pow: (a, b) => PrecisionDecimal.from(a).pow(b)
    };
    function primary() {
      if (eat('(')) { const v = expr(); if (!eat(')')) throw new Error('Missing closing parenthesis.'); return v; }
      const t = peek(); if (t === undefined) throw new Error('Unexpected end of expression.');
      if (/^\d/.test(t) || /^\.\d/.test(t)) { i++; return PrecisionDecimal.from(t); }
      if (/^[A-Za-z_]/.test(t)) {
        i++; const name = t.toLowerCase();
        if (eat('(')) { const args = []; if (!eat(')')) { do { args.push(expr()); } while (eat(',')); if (!eat(')')) throw new Error('Missing ) after function.'); } if (!funcs[name]) throw new Error('Unsupported function: ' + name); return funcs[name](...args); }
        if (name === 'pi') return PrecisionDecimal.pi(); if (name === 'e') return PrecisionDecimal.e();
        if (Object.prototype.hasOwnProperty.call(vars, t)) return PrecisionDecimal.from(vars[t]);
        if (Object.prototype.hasOwnProperty.call(vars, name)) return PrecisionDecimal.from(vars[name]);
        throw new Error('Unknown variable: ' + t);
      }
      throw new Error('Unexpected token: ' + t);
    }
    function power() { let v = primary(); if (eat('^')) v = v.pow(unary()); return v; }
    function unary() { if (eat('+')) return unary(); if (eat('-')) return unary().negated(); return power(); }
    function mul() { let v = unary(); while (peek() === '*' || peek() === '/') { const op = tokens[i++], r = unary(); v = op === '*' ? v.times(r) : v.dividedBy(r); } return v; }
    function expr() { let v = mul(); while (peek() === '+' || peek() === '-') { const op = tokens[i++], r = mul(); v = op === '+' ? v.plus(r) : v.minus(r); } return v; }
    const value = expr(); if (i !== tokens.length) throw new Error('Unexpected token: ' + tokens[i]); return value;
  }

  function stripNumericWrappers(raw) {
    let s = String(raw ?? '').trim();
    if (!s) return '';
    s = s.replace(/\\\(|\\\)|\\\[|\\\]/g, '').replace(/\\text\s*\{([^}]*)\}/g, '$1').replace(/\\mathrm\s*\{([^}]*)\}/g, '$1');
    s = s.replace(/\u00a0/g, ' ').replace(/,/g, '').replace(/\s+/g, ' ').trim();
    // Check prefix+unit before removing units: otherwise e.g. "4.7 μF" loses F first.
    // The case of the captured prefix is retained so m (milli) and M (mega) differ.
    const unitPattern = '(?:ohms?|Ω|N\\/C|Wb|Hz|V|A|W|F|H|J|T|Pa|dB|C|kg|m|s)';
    const prefixScale = {f:'1e-15',p:'1e-12',n:'1e-9',u:'1e-6','µ':'1e-6','μ':'1e-6',m:'1e-3',c:'1e-2',d:'1e-1',da:'1e1',h:'1e2',k:'1e3',K:'1e3',M:'1e6',G:'1e9',T:'1e12',P:'1e15'};
    const prefixed = s.match(new RegExp('^([+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?)\\s*(da|f|p|n|u|µ|μ|m|c|d|h|k|K|M|G|T|P)\\s*(' + unitPattern + ')$', 'i'));
    if (prefixed) {
      const prefix = prefixed[2];
      let scale = prefixScale[prefix];
      if (scale === undefined) scale = prefixScale[prefix.toLowerCase()];
      if (scale) return '(' + prefixed[1] + ')*(' + scale + ')';
    }
    // For plain values with units, remove only the unit suffix (not an unattached prefix).
    s = s.replace(/[,$%°]/g, '').replace(/\s*(?:ohms?|Ω|N\/C|V|A|W|Hz|s|m|F|H|J|Wb|T|Pa|dB|kg|C)\s*$/i, '').trim();
    return s;
  }
  function parseNumericDecimal(raw) {
    const text = stripNumericWrappers(raw);
    if (!text) return null;
    try { return hpEval(text, {}); } catch { return null; }
  }
  function formatNumberLatex(value, options = {}) {
    const d = PrecisionDecimal.from(value), digits = options.significantDigits || 8, mode = options.notation || 'auto';
    const dp = Number.isInteger(options.decimalPlaces) && options.decimalPlaces >= 0 && options.decimalPlaces <= 1000 ? options.decimalPlaces : null;
    if (d.isZero()) return dp !== null && (mode === 'decimal' || mode === 'plain') ? d.toFixed(dp) : '0';
    if (mode === 'engineering') {
      const parts = d.toEngineeringString(digits).split('e');
      const exponent = Number(parts[1]); return `${parts[0]}\\times10^{${exponent}}`;
    }
    if (mode === 'decimal' || mode === 'plain') return dp === null ? d.toSignificantDigits(digits).toPlainString() : d.toFixed(dp);
    // A requested decimal-place format must never turn a nonzero target into 0.000...;
    // fall back to scientific notation if fixed-place rounding would erase the value.
    if (mode === 'auto' && dp !== null && !d.roundToScale(dp).isZero()) return d.toFixed(dp);
    const exp = d.exponent10();
    if (mode === 'scientific' || (mode === 'auto' && (exp <= -5 || exp >= 9 || (dp !== null && d.roundToScale(dp).isZero())))) {
      const parts = d.toScientificString(digits).split('e');
      const exponent = Number(parts[1]); return `${parts[0]}\\times10^{${exponent}}`;
    }
    return d.toSignificantDigits(digits).toPlainString();
  }
  function numericTolerance(answer, config = {}) {
    if (config.absoluteTolerance !== undefined) return PrecisionDecimal.from(config.absoluteTolerance).abs();
    if (config.tolerance !== undefined) return PrecisionDecimal.from(config.tolerance).abs();
    const target = PrecisionDecimal.from(answer).abs();
    if (Number.isInteger(config.decimalPlaces) && config.decimalPlaces >= 0 && config.decimalPlaces <= 1000) {
      return PrecisionDecimal.from('5e-' + (config.decimalPlaces + 1));
    }
    if (Number.isInteger(config.significantDigits) && config.significantDigits > 0 && !target.isZero()) {
      return PrecisionDecimal.from('5e' + (target.exponent10() - config.significantDigits));
    }
    if (config.relativeTolerance !== undefined) return target.times(PrecisionDecimal.from(config.relativeTolerance).abs());
    return target.isZero() ? PrecisionDecimal.from('1e-12') : target.times('0.005');
  }
  function withinTolerance(answer, submitted, tolerance) {
    try { return PrecisionDecimal.from(answer).minus(submitted).abs().lte(tolerance); } catch { return false; }
  }
  function numericNotationMatches(raw, expected) {
    const wanted = String(expected || 'any').toLowerCase();
    if (!wanted || wanted === 'any' || wanted === 'auto') return true;
    const s = String(raw ?? '').trim().replace(/\\(?:left|right)\s*/g, '').replace(/[−–—]/g, '-');
    const unit = '(?:ohms?|Ω|N\\/C|Wb|Hz|V|A|W|F|H|J|T|Pa|dB|C|kg|m|s)';
    const prefix = '(?:da|f|p|n|u|µ|μ|m|c|d|h|k|M|G|T|P)';
    const si = s.match(new RegExp('^[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)\\s*' + prefix + '\\s*' + unit + '$', 'i'));
    const scientific = s.match(/([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*(?:[eE]\s*([+-]?\d+)|(?:\\times|×|x|\\cdot|·)\s*10\s*\^\s*\{?([+-]?\d+)\}?)/);
    if (wanted === 'decimal' || wanted === 'plain' || wanted === 'standard') return !scientific && !si && !/[eE][+-]?\d+/.test(s) && !/(?:\\times|×|x)\s*10\s*\^/.test(s);
    if (wanted === 'scientific' || wanted === 'engineering') {
      if (si) return wanted === 'engineering';
      if (!scientific) return false;
      const mantissa = PrecisionDecimal.from(scientific[1]).abs();
      const exponent = Number(scientific[2] ?? scientific[3]);
      if (!Number.isSafeInteger(exponent)) return false;
      if (wanted === 'scientific') return mantissa.gte(1) && mantissa.lt(10);
      return exponent % 3 === 0 && mantissa.gte(1) && mantissa.lt(1000);
    }
    return true;
  }

  root.PrecisionDecimal = PrecisionDecimal;
  root.evalDecimalExpr = hpEval;
  root.parseNumericDecimal = parseNumericDecimal;
  root.formatNumberLatex = formatNumberLatex;
  root.numericTolerance = numericTolerance;
  root.withinNumericTolerance = withinTolerance;
  root.numericNotationMatches = numericNotationMatches;
})(typeof window !== 'undefined' ? window : globalThis);
