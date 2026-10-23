/* fourier: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_FOURIER = 'fourier';
const FT = NAMESPACE_FOURIER;
function makeFourierExpansionFamily01(title){
  const v=ri(0,1)===1;
  const amplitude=ri(2,8),width=ri(1,5),omega=ri(1,7),sincValue=Math.sin(omega*width/2)/(omega*width/2),answer=v?amplitude*width:amplitude*width*sincValue;
  const prompt=v?`A rectangular pulse has normalized, dimensionless height \\(A=${amplitude}\\) and width \\(T=${width}\\,\\mathrm{s}\\). Find its area.`:`A centered rectangular pulse has normalized, dimensionless height \\(A=${amplitude}\\) and width \\(T=${width}\\,\\mathrm{s}\\). Evaluate its Fourier transform at \\(\\omega=${omega}\\,\\mathrm{rad}/\\mathrm{s}\\), using \\(X(\\omega)=AT\\,\\mathrm{sinc}(\\omega T/2)\\).`;
  const explanation=v?`Area is \\(AT=${amplitude}(${width})=${nfmt(answer)}\\,\\mathrm{s}\\).`:`\\(X(\\omega)=AT\\,\\mathrm{sinc}(\\omega T/2)=${nfmt(answer)}\\,\\mathrm{s}\\).`;
  return qNum(FT,title,prompt,answer,explanation,'number',{quantUnit:'s'});
}
function makeFourierExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const sig=rand(.5,2),om=ri(1,6),ans=v?sig*Math.sqrt(2*Math.PI):sig*Math.sqrt(2*Math.PI)*Math.exp(-.5*sig*sig*om*om);return qNum(FT,title,v?`For a Gaussian with standard deviation \\(\\sigma=${nfmt(sig)}\\), find the spectrum value at zero frequency.`:`For \\(x(t)=e^{-t^2/(2\\sigma^2)}\\), \\(\\sigma=${nfmt(sig)}\\), find \\(|X(${om})|\\).`,ans,v?`\\(X(0)=\\sigma\\sqrt{2\\pi}=${nfmt(ans)}\\).`:`\\(|X(\\omega)|=\\sigma\\sqrt{2\\pi}e^{-\\sigma^2\\omega^2/2}=${nfmt(ans)}\\).`)
  }
}
function makeFourierExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,7),om=ri(1,6),ans=v?A0*om:A0*om*om;return qNum(FT,title,v?`A signal derivative has amplitude \\(${A0}\\cdot\\omega\\). If the original sinusoid amplitude is \\(${A0}\\) and \\(\\omega=${om}\\), find derivative amplitude.`:`For a sinusoid with amplitude \\(${A0}\\) and angular frequency \\(${om}\\), find the amplitude of its second derivative.`,ans,v?`Differentiation multiplies spectral magnitude by \\(|\\omega|\\), yielding \\(${A0}(${om})=${ans}\\).`:`Two derivatives multiply amplitude by \\(\\omega^2\\): \\(${A0}(${om})^2=${ans}\\).`)
  }
}
function makeFourierExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const fm=ri(10,100),fc=ri(200,1000),beta=rand(.2,3),ans=v?2*beta*fm:2*(beta+1)*fm;return qNum(FT,title,v?`An FM signal has modulating frequency \\(f_m=${fm}\\,\\mathrm{Hz}\\) and modulation index \\(\\beta=${nfmt(beta)}\\). Using Carson's rule, estimate bandwidth.`:`An FM signal has \\(f_m=${fm}\\,\\mathrm{Hz}\\), \\(f_c=${fc}\\,\\mathrm{Hz}\\), and \\(\\beta=${nfmt(beta)}\\). Estimate peak frequency deviation \\(\\Delta f=\\beta f_m\\).`,ans,v?`Carson bandwidth \\(B\\approx2(\\Delta f+f_m)=2(\\beta+1)f_m=${nfmt(ans)}\\,\\mathrm{Hz}\\).`:`\\(\\Delta f=\\beta f_m=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeFourierExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),aa=ri(1,4),ans=v?A0*A0/(2*aa):A0/aa;return qNum(FT,title,v?`For \\(x(t)=${A0}e^{-${aa}t}u(t)\\), find signal energy \\(E=\\int_0^\\infty |x(t)|^2dt\\).`:`For \\(x(t)=${A0}e^{-${aa}t}u(t)\\), find \\(X(0)=\\int_0^\\infty x(t)dt\\).`,ans,v?`\\(E=A^2/(2a)=${nfmt(ans)}\\).`:`\\(X(0)=A/a=${nfmt(ans)}\\).`)
  }
}
function makeFourierExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,10),n=pick([1,3,5,7]),ans=v?4*A0/(Math.PI*n):4*A0/Math.PI;return qNum(FT,title,v?`A square wave has levels \\(\\pm${A0}\\). Find the sine coefficient magnitude of odd harmonic \\(n=${n}\\).`:`A symmetric square wave has levels \\(\\pm${A0}\\). Find the fundamental sine coefficient.` ,ans,v?`\\(|b_n|=4A/(\\pi n)=${nfmt(ans)}\\).`:`\\(b_1=4A/\\pi=${nfmt(ans)}\\).`)
  }
}
function makeFourierExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const T0=rand(.01,.2),n=ri(2,6),ans=v?2*Math.PI*n/T0:1/T0;return qNum(FT,title,v?`A periodic signal has period \\(T=${nfmt(T0)}\\,\\mathrm{s}\\). Find the angular frequency of harmonic \\(n=${n}\\).`:`A periodic signal has period \\(T=${nfmt(T0)}\\,\\mathrm{s}\\). Find its fundamental frequency.`,ans,v?`\\(\\omega_n=2\\pi n/T=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`:`\\(f_0=1/T=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeFourierExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),T0=ri(1,5),ans=v?A0*A0*T0:A0*T0;return qNum(FT,title,v?`A rectangular pulse has amplitude \\(${A0}\\) and duration \\(${T0}\\). Find its energy.`:`For a rectangular pulse of amplitude \\(${A0}\\) and duration \\(${T0}\\), find its zero-frequency Fourier-transform value.`,ans,v?`\\(E=A^2T=${A0}^2(${T0})=${ans}\\).`:`\\(X(0)=\\int x(t)dt=AT=${ans}\\).`)
  }
}
function makeFourierExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const p=ri(1,5),q=ri(1,5),ans=v?(p+q)/2:Math.abs(p-q);return qNum(FT,title,v?`Two sinusoidal components at \\(${p}\\,\\mathrm{Hz}\\) and \\(${q}\\,\\mathrm{Hz}\\) have equal average power. Find the mean of their frequencies.`:`Two close tones have frequencies \\(${p}\\,\\mathrm{Hz}\\) and \\(${q}\\,\\mathrm{Hz}\\). Find the beat frequency.`,ans,v?`Mean frequency \\(=(${p}+${q})/2=${nfmt(ans)}\\,\\mathrm{Hz}\\).`:`Beat frequency \\(=|f_1-f_2|=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeFourierExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const ratio=rand(1.5,8),ans=v?10*Math.log10(ratio):20*Math.log10(ratio);return qNum(FT,title,v?`A power ratio is \\(P_2/P_1=${nfmt(ratio)}\\). Express it in dB.`:`A voltage ratio across equal impedances is \\(V_2/V_1=${nfmt(ratio)}\\). Express gain in dB.`,ans,v?`\\(G_P=10\\log_{10}(P_2/P_1)=${nfmt(ans)}\\,\\mathrm{dB}\\).`:`\\(G_V=20\\log_{10}(V_2/V_1)=${nfmt(ans)}\\,\\mathrm{dB}\\).`,'number')
  }
}
function makeFourierExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const fmax=ri(1,15),fs=ri(40,120),ans=v?fs/2:2*fmax;return qNum(FT,title,v?`A sampler uses \\(f_s=${fs}\\,\\mathrm{Hz}\\). Find the Nyquist frequency.`:`A signal's highest frequency is \\(${fmax}\\,\\mathrm{Hz}\\). Find the minimum Nyquist sampling rate.`,ans,v?`Nyquist frequency \\(=f_s/2=${nfmt(ans)}\\,\\mathrm{Hz}\\).`:`\\(f_s\\ge2f_{max}=${ans}\\,\\mathrm{Hz}\\).`)
  }
}
function makeFourierExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),om=ri(1,6),ans=v?A0*om:A0/(om||1);return qNum(FT,title,v?`A sinusoid \\(A\\cos(\\omega t)\\) has \\(A=${A0}\\), \\(\\omega=${om}\\). Find derivative amplitude.`:`For sinusoid \\(A\\cos(\\omega t)\\), \\(A=${A0},\\omega=${om}\\), find amplitude of its time integral with zero integration constant in magnitude scale \\(A/\\omega\\).`,ans,v?`Derivative amplitude \\(A\\omega=${ans}\\).`:`Integral amplitude \\(A/\\omega=${nfmt(ans)}\\).`)
  }
}
function makeFourierExpansionFamily13(title){
  const v=ri(0,1)===1;
  const width=ri(1,6),answer=v?Math.PI/width:2*Math.PI/width;
  const prompt=v?`A sinc spectrum has first positive zero at \\(\\omega_0=2\\pi/T\\) for pulse width \\(T=${width}\\,\\mathrm{s}\\). Find half the first zero angular frequency.`:`A rectangular pulse has width \\(T=${width}\\,\\mathrm{s}\\). Find the angular frequency of its first spectral zero.`;
  const explanation=v?`Half the first zero is \\(\\omega_0/2=\\pi/T=${nfmt(answer)}\\,\\mathrm{rad}/\\mathrm{s}\\).`:`\\(\\omega_0=2\\pi/T=${nfmt(answer)}\\,\\mathrm{rad}/\\mathrm{s}\\).`;
  return qNum(FT,title,prompt,answer,explanation,'number',{quantUnit:'rad/s'});
}
function makeFourierExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),ph=pick([Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?A0*Math.sin(ph):A0*Math.cos(ph);return qNum(FT,title,v?`For phasor amplitude \\(${A0}\\) and phase \\(\\phi=${nfmt(ph)}\\), find quadrature (imaginary) component magnitude \\(A\\sin\\phi\\).`:`For phasor amplitude \\(${A0}\\) and phase \\(\\phi=${nfmt(ph)}\\), find in-phase component \\(A\\cos\\phi\\).`,ans,v?`\\(A\\sin\\phi=${nfmt(ans)}\\).`:`\\(A\\cos\\phi=${nfmt(ans)}\\).`)
  }
}
function makeFourierExpansionFamily15(title){
  const v=ri(0,1)===1;
  const peakVoltage=ri(2,8),answer=v?peakVoltage*peakVoltage/2:peakVoltage/Math.sqrt(2);
  const prompt=v?`A sinusoidal voltage has peak amplitude \\(V_p=${peakVoltage}\\,\\mathrm{V}\\) across a \\(1\\,\\Omega\\) resistor. Find average power.`:`A sinusoidal voltage has peak amplitude \\(V_p=${peakVoltage}\\,\\mathrm{V}\\). Find its RMS voltage.`;
  const explanation=v?`\\(P=V_{rms}^2/R=V_p^2/(2R)=${nfmt(answer)}\\,\\mathrm{W}\\).`:`\\(V_{rms}=V_p/\\sqrt2=${nfmt(answer)}\\,\\mathrm{V}\\).`;
  return qNum(FT,title,prompt,answer,explanation,'number',{quantUnit:v?'W':'V'});
}
function makeFourierExpansionFamily16(title){
  const v=ri(0,1)===1;
  const amplitude=ri(2,8),frequency=ri(1,10),answer=v?amplitude*amplitude/(2*frequency):amplitude/frequency;
  const prompt=v?`A normalized sinusoid has dimensionless peak amplitude \\(A=${amplitude}\\) and frequency \\(f=${frequency}\\,\\mathrm{Hz}\\). Find the energy-like scale \\(A^2/(2f)\\).`:`A normalized sinusoid has dimensionless amplitude \\(A=${amplitude}\\) and frequency \\(f=${frequency}\\,\\mathrm{Hz}\\). Find the ratio \\(A/f\\).`;
  const explanation=v?`\\(A^2/(2f)=${nfmt(answer)}\\,\\mathrm{s}\\).`:`\\(A/f=${nfmt(answer)}\\,\\mathrm{s}\\).`;
  return qNum(FT,title,prompt,answer,explanation,'number',{quantUnit:'s'});
}
function makeFourierExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),om=ri(1,6),ans=v?A0*om*om:A0*om;return qNum(FT,title,v?`For \\(x(t)=${A0}\\sin(${om}t)\\), find the magnitude of its second derivative amplitude.`:`For \\(x(t)=${A0}\\sin(${om}t)\\), find the magnitude of its first derivative amplitude.`,ans,v?`Second derivative amplitude \\(A\\omega^2=${ans}\\).`:`Derivative amplitude \\(A\\omega=${ans}\\).`)
  }
}
function makeFourierExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),B0=ri(1,5),ans=v?A0*B0:A0+B0;return qNum(FT,title,v?`Two signals have transform amplitudes \\(${A0}\\) and \\(${B0}\\). By the convolution theorem, find the product amplitude.`:`Two aligned spectral components have amplitudes \\(${A0}\\) and \\(${B0}\\). Find their sum amplitude.`,ans,v?`The Fourier transform of a convolution multiplies spectra: \\(${A0}(${B0})=${ans}\\).`:`\\(${A0}+${B0}=${ans}\\).`)
  }
}
function makeFourierExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(1,5),T0=ri(1,5),ans=v?A0*T0/2:A0*T0;return qNum(FT,title,v?`A symmetric triangular pulse has base width \\(${T0}\\) and height \\(${A0}\\). Find its area.`:`A rectangular pulse has width \\(${T0}\\) and height \\(${A0}\\). Find its area, equal to its transform at zero frequency.`,ans,v?`Triangle area \\(=\\frac12AT=${nfmt(ans)}\\).`:`Rectangle area \\(=AT=${ans}\\).`)
  }
}
function makeFourierExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const sig=rand(.5,2),om=ri(1,5),ans=v?Math.exp(-sig*om):Math.exp(-sig*sig*om*om/2);return qNum(FT,title,v?`For a two-sided exponential spectrum envelope \\(e^{-a|\\omega|}\\), with \\(a=${nfmt(sig)}\\), evaluate at \\(\\omega=${om}\\).`:`For a Gaussian spectrum envelope \\(e^{-\\sigma^2\\omega^2/2}\\), with \\(\\sigma=${nfmt(sig)}\\), evaluate at \\(\\omega=${om}\\).`,ans,v?`\\(e^{-a|\\omega|}=${nfmt(ans)}\\).`:`\\(e^{-\\sigma^2\\omega^2/2}=${nfmt(ans)}\\).`)
  }
}



/* Additional category-local family variant implementations, adjacent to the main numeric family makers. */




/* Individual family variant implementations; no indexed dispatch remains. */
function makeFourierFamily21VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let aa=ri(1,5),ww=ri(0,4),ans=2*aa/(aa*aa+ww*ww);
    return qNum(FT,title,`For \\(x(t)=e^{-${aa}|t|}\\), evaluate the Fourier transform \\(X(\\omega)\\) at \\(\\omega=${ww}\\).`,ans,`\\(X(\\omega)=2a/(a^2+\\omega^2)\\), hence \\(${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily22VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let aa=ri(1,5),ww=ri(1,5),ans=1/Math.sqrt(aa*aa+ww*ww);
    return qNum(FT,title,`For \\(x(t)=e^{-${aa}t}u(t)\\), find the magnitude \\(|X(\\omega)|\\) at \\(\\omega=${ww}\\).`,ans,`\\(X(\\omega)=1/(a+j\\omega)\\), so \\(|X|=1/\\sqrt{a^2+\\omega^2}=${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily23VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let tt=ri(1,5),ww=ri(1,5),ans=2*Math.sin(ww*tt)/ww;
    return qNum(FT,title,`A unit rectangular pulse exists for \\(|t|\\le ${tt}\\). Evaluate \\(X(\\omega)=2\\sin(\\omega T)/\\omega\\) at \\(\\omega=${ww}\\).`,ans,`Substitute \\(T=${tt}\\): \\(2\\sin(${ww}\\cdot${tt})/${ww}=${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily24VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let period=ri(2,8),ans=1/period;
    return qNum(FT,title,`A periodic signal has period \\(T=${period}\\,\\mathrm{s}\\). Find its fundamental frequency in hertz.`,ans,`\\(f_0=1/T=1/${period}=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeFourierFamily25VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let tt=ri(1,5),ans=2*tt;
    return qNum(FT,title,`A unit rectangular pulse has value 1 on \\([-${tt},${tt}]\\) and 0 elsewhere. Find its energy.`,ans,`\\(E=\\int_{-${tt}}^{${tt}}1^2dt=2T=${ans}\\).`)
  }
}
function makeFourierFamily26VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let amp=ri(1,8),ans=amp*amp/2;
    return qNum(FT,title,`Find the average power of \\(x(t)=${amp}\\cos(\\omega_0t)\\).`,ans,`For a sinusoid, \\(P=A^2/2=${amp}^2/2=${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily27VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let period=ri(1,6),ans=2*Math.PI/period;
    return qNum(FT,title,`A periodic signal has period \\(T=${period}\\,\\mathrm{s}\\). Find its fundamental angular frequency.`,ans,`\\(\\omega_0=2\\pi/T=2\\pi/${period}=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`)
  }
}
function makeFourierFamily28VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let dc=ri(-5,10);
    return qNum(FT,title,`A periodic signal has mean (DC component) \\(a_0=${dc}\\). Find its DC Fourier coefficient.`,dc,`The DC component is the average value, which is already \\(${dc}\\).`)
  }
}
function makeFourierFamily29VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let ratio=pick([.1,.25,.5,2,4,10,100]),ans=10*Math.log10(ratio);
    return qNum(FT,title,`A signal's power ratio is \\(P_2/P_1=${ratio}\\). Find the ratio in decibels.`,ans,`\\(G_{dB}=10\\log_{10}(P_2/P_1)=${nfmt(ans)}\\,\\mathrm{dB}\\).`,'number')
  }
}
function makeFourierFamily30VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    {let aa=ri(1,5),ww=ri(0,5),ans=1/Math.sqrt(aa*aa+ww*ww);return qNum(FT,title,`For a one-sided exponential with decay constant \\(a=${aa}\\), find \\(|X(\\omega)|\\) at \\(\\omega=${ww}\\).`,ans,`\\(|X|=1/\\sqrt{a^2+\\omega^2}=${nfmt(ans)}\\).`)}
  }
}


/* Individual family variant implementations; no indexed dispatch remains. */
function makeFourierFamily31VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let aa=a,ww=ri(0,5),ans=2*aa/(aa*aa+ww*ww);
    return qNum(FT,title,`For \\(x(t)=e^{-${aa}|t|}\\), evaluate \\(X(\\omega)\\) at \\(\\omega=${ww}\\).`,ans,`\\(X(\\omega)=2a/(a^2+\\omega^2)=${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily32VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let amp=ri(1,4),T=ri(1,4),ww=ri(1,5),ans=2*amp*Math.sin(ww*T)/ww;
    return qNum(FT,title,`A pulse has \\(x(t)=${amp}\\) for \\(|t|\\le${T}\\) and is zero elsewhere. Find \\(X(${ww})\\).`,ans,`\\(X(\\omega)=2A\\sin(\\omega T)/\\omega\\), giving \\(${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily33VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let aa=a,ww=ri(1,4),phase=rand(.2,2),ans=2*aa/(aa*aa+ww*ww);
    return qNum(FT,title,`A time-shifted signal is \\(x(t-t_0)\\), where the original spectrum magnitude at \\(\\omega=${ww}\\) is \\(${nfmt(ans)}\\). What is the magnitude after the shift?`,ans,`A time shift multiplies the Fourier transform by a unit-magnitude phase factor, so its magnitude remains \\(${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily34VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let aa=rand(.5,2),ww=ri(0,4),ans=Math.sqrt(Math.PI/aa)*Math.exp(-ww*ww/(4*aa));
    return qNum(FT,title,`Using \\(\\mathcal F\\{e^{-at^2}\\}=\\sqrt{\\pi/a}\\,e^{-\\omega^2/(4a)}\\), evaluate the transform at \\(a=${nfmt(aa)}\\), \\(\\omega=${ww}\\).`,ans,`Substitution into the Gaussian Fourier pair gives \\(${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily35VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let aa=a,ans=1/aa;
    return qNum(FT,title,`Find the energy of \\(x(t)=e^{-${aa}|t|}\\).`,ans,`\\(E=\\int_{-\\infty}^{\\infty}e^{-2a|t|}dt=1/a=${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily36VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let amp=ri(1,8),ans=amp*amp/2;
    return qNum(FT,title,`Find the average power of \\(x(t)=${amp}\\cos(\\omega_0t)\\).`,ans,`A real sinusoid has average power \\(A^2/2=${amp}^2/2=${nfmt(ans)}\\).`)
  }
}
function makeFourierFamily37VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let period=ri(2,8),ans=1/period;
    return qNum(FT,title,`A periodic signal has period \\(T=${period}\\,\\mathrm{s}\\). Find its fundamental frequency.`,ans,`\\(f_0=1/T=1/${period}=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeFourierFamily38VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let ratio=pick([.1,.2,.5,2,5,10]),ans=10*Math.log10(ratio);
    return qNum(FT,title,`A signal power ratio is \\(P_2/P_1=${ratio}\\). Express it in dB.`,ans,`\\(G_{dB}=10\\log_{10}(P_2/P_1)=${nfmt(ans)}\\,\\mathrm{dB}\\).`,'number')
  }
}
function makeFourierFamily39VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    return equationQ(FT,title,'Which Fourier transform pair is correct for a unit-height rectangular pulse on \\([-T,T]\\)?','X(\\omega)=\\frac{2\\sin(\\omega T)}{\\omega}',['X(\\omega)=\\frac{2\\cos(\\omega T)}{\\omega}','X(\\omega)=\\omega\\sin(T)','X(\\omega)=\\frac{1}{T+j\\omega}'],'Integrating \\(e^{-j\\omega t}\\) from \\(-T\\) to \\(T\\) yields \\(2\\sin(\\omega T)/\\omega\\).')
  }
}
function makeFourierFamily40VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let dc=ri(-6,10);
    return qNum(FT,title,`A periodic signal has average value (DC component) \\(x_{avg}=${dc}\\). Find its DC component.`,dc,`The zero-frequency Fourier-series component is the average value, \\(${dc}\\).`)
  }
}


/* Numbered family makers choose between two complete category-local question recipes. */
/* Family 21: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily21(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily21VariantA(title):makeFourierExpansionFamily01(title);q.title=title;return q;}
/* Family 22: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily22(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily22VariantA(title):makeFourierExpansionFamily02(title);q.title=title;return q;}
/* Family 23: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily23(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily23VariantA(title):makeFourierExpansionFamily03(title);q.title=title;return q;}
/* Family 24: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily24(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily24VariantA(title):makeFourierExpansionFamily04(title);q.title=title;return q;}
/* Family 25: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily25(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily25VariantA(title):makeFourierExpansionFamily05(title);q.title=title;return q;}
/* Family 26: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily26(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily26VariantA(title):makeFourierExpansionFamily06(title);q.title=title;return q;}
/* Family 27: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily27(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily27VariantA(title):makeFourierExpansionFamily07(title);q.title=title;return q;}
/* Family 28: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily28(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily28VariantA(title):makeFourierExpansionFamily08(title);q.title=title;return q;}
/* Family 29: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily29(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily29VariantA(title):makeFourierExpansionFamily09(title);q.title=title;return q;}
/* Family 30: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily30(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily30VariantA(title):makeFourierExpansionFamily10(title);q.title=title;return q;}
/* Family 31: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily31(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily31VariantA(title):makeFourierExpansionFamily11(title);q.title=title;return q;}
/* Family 32: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily32(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily32VariantA(title):makeFourierExpansionFamily12(title);q.title=title;return q;}
/* Family 33: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily33(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily33VariantA(title):makeFourierExpansionFamily13(title);q.title=title;return q;}
/* Family 34: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily34(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily34VariantA(title):makeFourierExpansionFamily14(title);q.title=title;return q;}
/* Family 35: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily35(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily35VariantA(title):makeFourierExpansionFamily15(title);q.title=title;return q;}
/* Family 36: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily36(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily36VariantA(title):makeFourierExpansionFamily16(title);q.title=title;return q;}
/* Family 37: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily37(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily37VariantA(title):makeFourierExpansionFamily17(title);q.title=title;return q;}
/* Family 38: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily38(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily38VariantA(title):makeFourierExpansionFamily18(title);q.title=title;return q;}
/* Family 39: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily39(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily39VariantA(title):makeFourierExpansionFamily19(title);q.title=title;return q;}
/* Family 40: a named seed recipe and its paired randomized expansion variant. */
function makeFourierFamily40(title){const useSeed=ri(0,1)===1;const q=useSeed?makeFourierFamily40VariantA(title):makeFourierExpansionFamily20(title);q.title=title;return q;}

NUMERIC_GENERATOR_REGISTRY.fourier = [numericEntry('fourier',"Two-sided exponential transform · family 21 (randomized variant)",'fourier-family-21',()=>makeFourierFamily21("Two-sided exponential transform · family 21 (randomized variant)")),
    numericEntry('fourier',"One-sided exponential spectrum · family 22 (randomized variant)",'fourier-family-22',()=>makeFourierFamily22("One-sided exponential spectrum · family 22 (randomized variant)")),
    numericEntry('fourier',"Rectangular-pulse transform · family 23 (randomized variant)",'fourier-family-23',()=>makeFourierFamily23("Rectangular-pulse transform · family 23 (randomized variant)")),
    numericEntry('fourier',"Frequency-period conversion · family 24 (randomized variant)",'fourier-family-24',()=>makeFourierFamily24("Frequency-period conversion · family 24 (randomized variant)")),
    numericEntry('fourier',"Rectangular-pulse energy · family 25 (randomized variant)",'fourier-family-25',()=>makeFourierFamily25("Rectangular-pulse energy · family 25 (randomized variant)")),
    numericEntry('fourier',"Sinusoidal average power · family 26 (randomized variant)",'fourier-family-26',()=>makeFourierFamily26("Sinusoidal average power · family 26 (randomized variant)")),
    numericEntry('fourier',"Fundamental and harmonic frequency · family 27 (randomized variant)",'fourier-family-27',()=>makeFourierFamily27("Fundamental and harmonic frequency · family 27 (randomized variant)")),
    numericEntry('fourier',"DC Fourier coefficient · family 28 (randomized variant)",'fourier-family-28',()=>makeFourierFamily28("DC Fourier coefficient · family 28 (randomized variant)")),
    numericEntry('fourier',"Power ratio in decibels · family 29 (randomized variant)",'fourier-family-29',()=>makeFourierFamily29("Power ratio in decibels · family 29 (randomized variant)")),
    numericEntry('fourier',"Spectrum magnitude · family 30 (randomized variant)",'fourier-family-30',()=>makeFourierFamily30("Spectrum magnitude · family 30 (randomized variant)")),
    numericEntry('fourier',"Two-sided exponential spectrum · family 31 (randomized variant)",'fourier-family-31',()=>makeFourierFamily31("Two-sided exponential spectrum · family 31 (randomized variant)")),
    numericEntry('fourier',"Rectangular-pulse spectrum · family 32 (randomized variant)",'fourier-family-32',()=>makeFourierFamily32("Rectangular-pulse spectrum · family 32 (randomized variant)")),
    numericEntry('fourier',"Time-shift magnitude · family 33 (randomized variant)",'fourier-family-33',()=>makeFourierFamily33("Time-shift magnitude · family 33 (randomized variant)")),
    numericEntry('fourier',"Gaussian spectrum · family 34 (randomized variant)",'fourier-family-34',()=>makeFourierFamily34("Gaussian spectrum · family 34 (randomized variant)")),
    numericEntry('fourier',"Exponential-signal energy · family 35 (randomized variant)",'fourier-family-35',()=>makeFourierFamily35("Exponential-signal energy · family 35 (randomized variant)")),
    numericEntry('fourier',"Sinusoidal average power · family 36 (randomized variant)",'fourier-family-36',()=>makeFourierFamily36("Sinusoidal average power · family 36 (randomized variant)")),
    numericEntry('fourier',"Period-to-frequency conversion · family 37 (randomized variant)",'fourier-family-37',()=>makeFourierFamily37("Period-to-frequency conversion · family 37 (randomized variant)")),
    numericEntry('fourier',"Power ratio in dB · family 38 (randomized variant)",'fourier-family-38',()=>makeFourierFamily38("Power ratio in dB · family 38 (randomized variant)")),
    numericEntry('fourier',"Rectangular-pulse transform pair · family 39 (randomized variant)",'fourier-family-39',()=>makeFourierFamily39("Rectangular-pulse transform pair · family 39 (randomized variant)")),
    numericEntry('fourier',"DC component · family 40 (randomized variant)",'fourier-family-40',()=>makeFourierFamily40("DC component · family 40 (randomized variant)")),
    numericEntry('fourier',"Two-sided exponential transform · family 01 (randomized variant)","fourier-family-01",()=>makeFourierExpansionFamily01("Two-sided exponential transform · family 01 (randomized variant)")),
    numericEntry('fourier',"One-sided exponential spectrum · family 02 (randomized variant)","fourier-family-02",()=>makeFourierExpansionFamily02("One-sided exponential spectrum · family 02 (randomized variant)")),
    numericEntry('fourier',"Rectangular-pulse transform · family 03 (randomized variant)","fourier-family-03",()=>makeFourierExpansionFamily03("Rectangular-pulse transform · family 03 (randomized variant)")),
    numericEntry('fourier',"Frequency-period conversion · family 04 (randomized variant)","fourier-family-04",()=>makeFourierExpansionFamily04("Frequency-period conversion · family 04 (randomized variant)")),
    numericEntry('fourier',"Rectangular-pulse energy · family 05 (randomized variant)","fourier-family-05",()=>makeFourierExpansionFamily05("Rectangular-pulse energy · family 05 (randomized variant)")),
    numericEntry('fourier',"Sinusoidal average power · family 06 (randomized variant)","fourier-family-06",()=>makeFourierExpansionFamily06("Sinusoidal average power · family 06 (randomized variant)")),
    numericEntry('fourier',"Fundamental and harmonic frequency · family 07 (randomized variant)","fourier-family-07",()=>makeFourierExpansionFamily07("Fundamental and harmonic frequency · family 07 (randomized variant)")),
    numericEntry('fourier',"DC Fourier coefficient · family 08 (randomized variant)","fourier-family-08",()=>makeFourierExpansionFamily08("DC Fourier coefficient · family 08 (randomized variant)")),
    numericEntry('fourier',"Power ratio in decibels · family 09 (randomized variant)","fourier-family-09",()=>makeFourierExpansionFamily09("Power ratio in decibels · family 09 (randomized variant)")),
    numericEntry('fourier',"Spectrum magnitude · family 10 (randomized variant)","fourier-family-10",()=>makeFourierExpansionFamily10("Spectrum magnitude · family 10 (randomized variant)")),
    numericEntry('fourier',"FM bandwidth · family 11 (randomized variant)","fourier-family-11",()=>makeFourierExpansionFamily11("FM bandwidth · family 11 (randomized variant)")),
    numericEntry('fourier',"Fourier-series harmonic · family 12 (randomized variant)","fourier-family-12",()=>makeFourierExpansionFamily12("Fourier-series harmonic · family 12 (randomized variant)")),
    numericEntry('fourier',"Rectangular-pulse first zero · family 13 (randomized variant)","fourier-family-13",()=>makeFourierExpansionFamily13("Rectangular-pulse first zero · family 13 (randomized variant)")),
    numericEntry('fourier',"Energy spectral relation · family 14 (randomized variant)","fourier-family-14",()=>makeFourierExpansionFamily14("Energy spectral relation · family 14 (randomized variant)")),
    numericEntry('fourier',"Sinusoidal RMS quantity · family 15 (randomized variant)","fourier-family-15",()=>makeFourierExpansionFamily15("Sinusoidal RMS quantity · family 15 (randomized variant)")),
    numericEntry('fourier',"Frequency-scaling property · family 16 (randomized variant)","fourier-family-16",()=>makeFourierExpansionFamily16("Frequency-scaling property · family 16 (randomized variant)")),
    numericEntry('fourier',"Derivative amplitude spectrum · family 17 (randomized variant)","fourier-family-17",()=>makeFourierExpansionFamily17("Derivative amplitude spectrum · family 17 (randomized variant)")),
    numericEntry('fourier',"Time-delay phase shift · family 18 (randomized variant)","fourier-family-18",()=>makeFourierExpansionFamily18("Time-delay phase shift · family 18 (randomized variant)")),
    numericEntry('fourier',"Gaussian spectrum value · family 19 (randomized variant)","fourier-family-19",()=>makeFourierExpansionFamily19("Gaussian spectrum value · family 19 (randomized variant)")),
    numericEntry('fourier',"Parseval energy comparison · family 20 (randomized variant)","fourier-family-20",()=>makeFourierExpansionFamily20("Parseval energy comparison · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(FT,'Peak amplitude from sinusoidal RMS value','fourier-rms-to-peak-amplitude',()=>{
  const rms=ri(2,24),ans=Math.sqrt(2)*rms;
  return qNum(FT,'Peak amplitude from sinusoidal RMS value',`A sinusoidal voltage has RMS value \\(V_{\\rm rms}=${rms}\\,\\mathrm{V}\\). Find its peak amplitude \\(V_p\\).`,ans,`For a sinusoid, \\(V_{\\rm rms}=V_p/\\sqrt2\\), so \\(V_p=\\sqrt2 V_{\\rm rms}=\\sqrt2(${rms})=${nfmt(ans)}\\,\\mathrm{V}\\).`)
});
appendNumericRecipe(FT,'Fundamental angular frequency from period','fourier-angular-frequency-from-period',()=>{
  const T0=rand(.02,.25),ans=2*Math.PI/T0;
  return qNum(FT,'Fundamental angular frequency from period',`A periodic waveform has period \\(T_0=${nfmt(T0)}\\,\\mathrm{s}\\). Find its fundamental angular frequency \\(\\omega_0\\) in rad/s.`,ans,`\\(\\omega_0=2\\pi/T_0=2\\pi/${nfmt(T0)}=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`)
});
appendNumericRecipe(FT,'Applied · RMS of a two-harmonic vibration signal','scenario-fourier-harmonic-rms',()=>{
  const A1=ri(2,12),A3=ri(1,8),ans=Math.sqrt((A1*A1+A3*A3)/2);
  const q=qNum(FT,'Applied · RMS of a two-harmonic vibration signal',`A vibration sensor records \\(v(t)=${A1}\\sin(\\omega t)+${A3}\\sin(3\\omega t)\\). Over an integer number of periods, find the total RMS value, using orthogonality of the harmonics.`,ans,`The mean square is \\((A_1^2+A_3^2)/2\\). Hence \\(v_{rms}=\\sqrt{(${A1}^2+${A3}^2)/2}=${nfmt(ans)}\\).`);
  q.diagramKind='spectrum';q.diagramAlt='Schematic amplitude spectrum with separate fundamental and third-harmonic lines; the signal components are orthogonal over integer periods.';return q;
});
appendNumericRecipe(FT,'Applied · Third harmonic of a square-wave sensor signal','scenario-fourier-square-wave-third-harmonic',()=>{
  const A=ri(2,15),ans=4*A/(3*Math.PI);
  const q=qNum(FT,'Applied · Third harmonic of a square-wave sensor signal',`A symmetric square-wave calibration signal has peak magnitude \\(A=${A}\\,\\mathrm{V}\\). Using its Fourier series, find the magnitude of the third-harmonic sine coefficient.`,ans,`For a symmetric square wave, odd-harmonic coefficient magnitude is \\(4A/(n\\pi)\\). At \\(n=3\\), \\(b_3=4(${A})/(3\\pi)=${nfmt(ans)}\\,\\mathrm{V}\\).`);
  q.diagramKind='spectrum';q.diagramAlt='Schematic square-wave spectrum containing odd harmonics; the third-harmonic coefficient is one third of the fundamental coefficient.';return q;
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('fourier','Additional · RMS value of two orthogonal harmonics','fourier-topup-01',()=>{
  const A1=ri(2,8),A2=ri(1,6),ans=Math.sqrt((A1*A1+A2*A2)/2);
  return qNum(FT,'RMS value of two orthogonal harmonics',`A zero-mean signal contains orthogonal sinusoids with peak amplitudes \\(${A1}\\) and \\(${A2}\\). Find its RMS value.`,ans,`The mean-square contributions add: \\(x_{rms}=\\sqrt{A_1^2/2+A_2^2/2}=\\sqrt{(${A1}^2+${A2}^2)/2}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('fourier','Additional · Odd-harmonic amplitude of a square wave','fourier-topup-02',()=>{
  const A=ri(2,10),n=pick([1,3,5,7,9]),ans=4*A/(Math.PI*n);
  return qNum(FT,'Odd-harmonic amplitude of a square wave',`A symmetric square wave has peak magnitude \\(${A}\\). Find the peak amplitude of its \\(${n}\\)th odd harmonic using \\(A_n=4A/(n\\pi)\\).`,ans,`\\(A_{${n}}=4(${A})/(${n}\\pi)=${nfmt(ans)}\\).`);
});
appendNumericRecipe('fourier','Additional · Average power from harmonic amplitudes','fourier-topup-03',()=>{
  const A1=ri(1,7),A2=ri(1,7),A3=ri(1,5),ans=(A1*A1+A2*A2+A3*A3)/2;
  return qNum(FT,'Average power from harmonic amplitudes',`A normalized-resistance signal has three sinusoidal peak amplitudes \\(${A1}\\), \\(${A2}\\), and \\(${A3}\\). Find average power using \\(P=\\sum A_k^2/2\\).`,ans,`The harmonics are orthogonal, so \\(P=(${A1}^2+${A2}^2+${A3}^2)/2=${nfmt(ans)}\\).`);
});
appendNumericRecipe('fourier','Additional · Frequency of a selected harmonic','fourier-topup-04',()=>{
  const T=ri(2,10),n=ri(2,8),ans=n/T;
  return qNum(FT,'Frequency of a selected harmonic',`A periodic waveform has fundamental period \\(T=${T}\\,\\mathrm{s}\\). Find the frequency of its \\(${n}\\)th harmonic.`,ans,`The fundamental frequency is \\(f_0=1/T=${nfmt(1/T)}\\,\\mathrm{Hz}\\), and \\(f_n=nf_0=${n}/${T}=${nfmt(ans)}\\,\\mathrm{Hz}\\).`);
});

/* Category-owned tree generators. Prompts, data dictionaries, SVGs and formula logic live here. */
function makeFourierScenarioSetup(){const A=ri(4,10),alpha=pick([1,2,3]);return {category:NAMESPACE_FOURIER,title:'Symmetric pulse spectrum measurement',prompt:String.raw`A monitoring node transmits the symmetric pulse \(x(t)=A e^{-\alpha|t|}\), where amplitude \(A=${A}\) is in normalized signal units and decay rate \(\alpha=${alpha}\,\mathrm{s^{-1}}\). Use the bilateral Fourier-transform convention \(X(\omega)=\int_{-\infty}^{\infty}x(t)e^{-i\omega t}\,dt\). The receiver inspects the spectrum at zero frequency and at \(\omega_{\mathrm{test}}=2\,\mathrm{rad/s}\).`,transferData:{A: A,alpha: alpha,omega_test: 2},illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 120"><path d="M20 95 H320 M170 108 V14" stroke="currentColor" stroke-width="1.4" fill="none"/><path d="M25 93 C58 95 83 103 115 115" fill="none" stroke="currentColor" stroke-width="0"/><path d="M25 92 C70 92 98 90 130 60 S160 20 170 18 S180 20 210 60 S270 92 315 92" fill="none" stroke="#2d83c5" stroke-width="2.7"/><text x="180" y="23" fill="currentColor" font-size="12">x(t)</text><text x="285" y="111" fill="currentColor" font-size="11">time</text></svg>`,alt:'A symmetric exponentially decaying pulse is highest at time zero and decays toward zero on both sides.'}],custom:false};}
function makeFourierScenarioA(dto={}){const d=dto?.['fourier-pulse-root-v18']||{};const A=Number(d.A),a=Number(d.alpha),ans=2*A/a;const q=qNum(FT,'Zero-frequency pulse spectrum',String.raw`Evaluate the spectrum value \(X(0)\) for the transmitted pulse.`,ans,String.raw`\(X(\omega)=\frac{2A\alpha}{\alpha^2+\omega^2}\), so \(X(0)=2A/\alpha=2(${A})/${a}=${nfmt(ans)}\).`);q.transferData={X0: ans};return q;}
function makeFourierScenarioB(dto={}){const d=dto?.['fourier-pulse-root-v18']||{};const A=Number(d.A),a=Number(d.alpha),w=Number(d.omega_test),ans=2*A*a/(a*a+w*w);const q=qNum(FT,'Spectrum at the specified nonzero frequency',String.raw`Evaluate the spectrum value \(X(\omega_{\mathrm{test}})\) at the stated nonzero frequency.`,ans,String.raw`\(X(\omega_{test})=\frac{2A\alpha}{\alpha^2+\omega_{test}^2}=\frac{2(${A})(${a})}{${a}^2+${w}^2}=${nfmt(ans)}\).`);q.transferData={X2: ans};return q;}
function makeFourierScenarioBA(dto={}){const dt=dto||{};const x0=Number(dt['fourier-pulse-a-v18']?.X0),x2=Number(dt['fourier-pulse-b-v18']?.X2),ans=x2/x0;const q=qNum(FT,'Relative spectral amplitude at the test frequency',String.raw`Find the normalized spectral ratio \(X(\omega_{\mathrm{test}})/X(0)\).`,ans,String.raw`\(X(\omega_{test})/X(0)=${nfmt(x2)}/${nfmt(x0)}=${nfmt(ans)}\).`);q.transferData={spectralRatio: ans};return q;}
function makeFourierScenarioBB(dto={}){const d=dto?.['fourier-pulse-root-v18']||{};const A=Number(d.A),a=Number(d.alpha),ans=A*A/a;const q=qNum(FT,'Energy of the exponential pulse',String.raw`Find the pulse energy \(E_x=\int_{-\infty}^{\infty}|x(t)|^2\,dt\).`,ans,String.raw`\(E_x=A^2\int_{-\infty}^{\infty}e^{-2\alpha|t|}dt=A^2/\alpha=${A}^2/${a}=${nfmt(ans)}\).`);q.transferData={pulseEnergy: ans};return q;}
function registerFourierScenarioTree(){
  const rootKey='fourier-pulse-root-v18',aKey='fourier-pulse-a-v18',bKey='fourier-pulse-b-v18',baKey='fourier-pulse-ba-v18',bbKey='fourier-pulse-bb-v18';
  setupRecipe(NAMESPACE_FOURIER,'Fourier analysis · Pulse spectrum tree',rootKey,makeFourierScenarioSetup,3,{treeChildrenRecipeKeys:[aKey]});
  appendNumericRecipe(NAMESPACE_FOURIER,'Fourier · Calculation A',aKey,makeFourierScenarioA,3,{parentRecipeKey:rootKey,treeChildrenRecipeKeys:[bKey]});
  appendNumericRecipe(NAMESPACE_FOURIER,'Fourier · Calculation B',bKey,makeFourierScenarioB,3,{parentRecipeKey:aKey,treeChildrenRecipeKeys:[baKey,bbKey]});
  appendNumericRecipe(NAMESPACE_FOURIER,'Fourier · Follow-up A',baKey,makeFourierScenarioBA,3,{parentRecipeKey:bKey});
  appendNumericRecipe(NAMESPACE_FOURIER,'Fourier · Follow-up B',bbKey,makeFourierScenarioBB,3,{parentRecipeKey:bKey});
}
registerFourierScenarioTree();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const FOURIER_CONCEPT_CARDS = [
    [
      "Fourier transform",
      "A representation that expresses a signal in terms of its continuous frequency content."
    ],
    [
      "Inverse Fourier transform",
      "The operation that reconstructs the time signal from its frequency-domain representation."
    ],
    [
      "Fourier series",
      "A representation of a periodic signal as a sum of harmonically related sinusoids or complex exponentials."
    ],
    [
      "Fundamental period",
      "The smallest positive time shift after which a nonconstant periodic signal repeats."
    ],
    [
      "Fundamental angular frequency",
      "For a periodic signal with period T, the angular frequency equal to two pi divided by T."
    ],
    [
      "Harmonic",
      "A sinusoidal component whose frequency is an integer multiple of the fundamental frequency."
    ],
    [
      "DC component",
      "The constant or zero-frequency component of a signal."
    ],
    [
      "Magnitude spectrum",
      "The magnitude of a signal transform as a function of frequency."
    ],
    [
      "Phase spectrum",
      "The phase angle of a complex Fourier transform as a function of frequency."
    ],
    [
      "Parseval theorem",
      "A relation equating signal energy in time to appropriately normalized energy in the frequency domain."
    ],
    [
      "Energy spectral density",
      "The squared magnitude of the Fourier transform of an energy signal."
    ],
    [
      "Bandwidth",
      "A measure of the frequency span occupied or required by a signal."
    ],
    [
      "Even-signal symmetry",
      "A signal is even when its value at negative time equals its value at positive time."
    ],
    [
      "Odd-signal symmetry",
      "A signal is odd when its value at negative time is the negative of its value at positive time."
    ],
    [
      "Time-shifting property",
      "A time delay changes Fourier-transform phase by a frequency-dependent factor but does not change magnitude."
    ],
    [
      "Frequency-shifting property",
      "Multiplication by a complex exponential shifts the Fourier spectrum in frequency."
    ],
    [
      "Convolution theorem",
      "Time-domain convolution corresponds to multiplication of Fourier transforms."
    ],
    [
      "Orthogonality of harmonics",
      "Over a full period, distinct integer harmonics have zero inner product under the usual Fourier-series integral."
    ],
    [
      "Gibbs phenomenon",
      "The persistent overshoot near a jump when a discontinuous function is approximated by partial Fourier sums."
    ],
    [
      "Sampling theorem",
      "A bandlimited signal can be ideally reconstructed when uniformly sampled above twice its highest frequency."
    ],
    [
      "Angular frequency",
      "Frequency measured in radians per second, related to ordinary frequency by omega equals 2 pi f."
    ],
    [
      "Fundamental period — extended concept",
      "The smallest positive period of a nonconstant periodic signal."
    ],
    [
      "Harmonic — extended concept",
      "A sinusoidal component whose frequency is an integer multiple of a fundamental frequency."
    ],
    [
      "Fourier series — extended concept",
      "A representation of a periodic signal as a weighted sum of harmonically related complex exponentials or sines and cosines."
    ],
    [
      "Fourier transform pair",
      "A convention-specific mapping between a time-domain function and its frequency-domain spectrum."
    ],
    [
      "Frequency translation",
      "Multiplying a signal by a complex exponential shifts its Fourier spectrum in frequency."
    ],
    [
      "Time scaling property",
      "Compressing a signal in time expands its spectrum in frequency and changes the amplitude scaling according to the transform convention."
    ],
    [
      "Parseval relation",
      "An identity relating signal energy in time to integrated spectral energy, with constants depending on convention."
    ],
    [
      "Even signal",
      "A signal satisfying x(-t)=x(t); its Fourier transform has a corresponding symmetry."
    ],
    [
      "Odd signal",
      "A signal satisfying x(-t)=-x(t); its Fourier transform has a corresponding symmetry."
    ],
    [
      "Conjugate symmetry",
      "The Fourier transform of a real-valued signal satisfies X(-omega)=conjugate(X(omega))."
    ],
    [
      "Bandwidth — extended concept",
      "A measure of the frequency range occupied or passed by a signal or system, defined according to context."
    ],
    [
      "Ideal low-pass filter",
      "An idealized system that passes frequencies below a cutoff and rejects frequencies above it."
    ],
    [
      "Spectral leakage",
      "Spreading of energy across frequency bins when a finite observation window does not align with signal periodicity."
    ],
    [
      "Window function",
      "A finite-duration weighting function used to reduce leakage or shape a spectral estimate."
    ],
    [
      "Impulse-train sampling",
      "Multiplication by a periodic train of impulses, which produces periodic spectral replicas under standard Fourier conventions."
    ],
    [
      "Modulation theorem",
      "A property describing how multiplication or mixing in one domain shifts or combines spectra in the other domain."
    ],
    [
      "Correlation spectrum",
      "The Fourier-transform relationship between autocorrelation and power spectral density under suitable assumptions."
    ],
    [
      "Power spectral density",
      "A frequency-domain description of how the average power of a stationary process is distributed by frequency."
    ],
    [
      "Fourier transform of a Gaussian",
      "Under common conventions, a Gaussian transforms to another Gaussian, with reciprocal width scaling."
    ]
  ];
registerConceptGeneratorsForCategory(NAMESPACE_FOURIER, FOURIER_CONCEPT_CARDS);
