/* fourier: seed entries, explicit expansion families, and category-specific additions. */

function makeFourierExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),T0=ri(1,5),om=ri(1,7),ans=v?A0*T0:A0*T0*(Math.sin(om*T0/2)/(om*T0/2));return qNum(FT,title,v?`Find the area of a rectangular pulse with height \\(${A0}\\) and width \\(${T0}\\).`:`For a centered rectangular pulse of height \\(${A0}\\), width \\(${T0}\\), evaluate its Fourier transform at \\(\\omega=${om}\\).`,ans,v?`Area \\(=AT=${A0}(${T0})=${ans}\\).`:`\\(X(\\omega)=AT\\,\\mathrm{sinc}(\\omega T/2)=${nfmt(ans)}\\).`)
  }
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
      const fm=ri(10,100),fc=ri(200,1000),beta=rand(.2,3),ans=v?2*beta*fm:2*(beta+1)*fm;return qNum(FT,title,v?`An FM signal has modulating frequency \\(f_m=${fm}\\,Hz\\) and modulation index \\(\\beta=${nfmt(beta)}\\). Using Carson's rule, estimate bandwidth.`:`An FM signal has \\(f_m=${fm}\\,Hz\\), \\(f_c=${fc}\\,Hz\\), and \\(\\beta=${nfmt(beta)}\\). Estimate peak frequency deviation \\(\\Delta f=\\beta f_m\\).`,ans,v?`Carson bandwidth \\(B\\approx2(\\Delta f+f_m)=2(\\beta+1)f_m=${nfmt(ans)}\\,Hz\\).`:`\\(\\Delta f=\\beta f_m=${nfmt(ans)}\\,Hz\\).`)
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
      const T0=rand(.01,.2),n=ri(2,6),ans=v?2*Math.PI*n/T0:1/T0;return qNum(FT,title,v?`A periodic signal has period \\(T=${nfmt(T0)}\\,s\\). Find the angular frequency of harmonic \\(n=${n}\\).`:`A periodic signal has period \\(T=${nfmt(T0)}\\,s\\). Find its fundamental frequency.`,ans,v?`\\(\\omega_n=2\\pi n/T=${nfmt(ans)}\\,rad/s\\).`:`\\(f_0=1/T=${nfmt(ans)}\\,Hz\\).`)
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
      const p=ri(1,5),q=ri(1,5),ans=v?(p+q)/2:Math.abs(p-q);return qNum(FT,title,v?`Two sinusoidal components at \\(${p}\\,Hz\\) and \\(${q}\\,Hz\\) have equal average power. Find the mean of their frequencies.`:`Two close tones have frequencies \\(${p}\\,Hz\\) and \\(${q}\\,Hz\\). Find the beat frequency.`,ans,v?`Mean frequency \\(=(${p}+${q})/2=${nfmt(ans)}\\,Hz\\).`:`Beat frequency \\(=|f_1-f_2|=${nfmt(ans)}\\,Hz\\).`)
  }
}
function makeFourierExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const ratio=rand(1.5,8),ans=v?10*Math.log10(ratio):20*Math.log10(ratio);return qNum(FT,title,v?`A power ratio is \\(P_2/P_1=${nfmt(ratio)}\\). Express it in dB.`:`A voltage ratio across equal impedances is \\(V_2/V_1=${nfmt(ratio)}\\). Express gain in dB.`,ans,v?`\\(G_P=10\\log_{10}(P_2/P_1)=${nfmt(ans)}\\,dB\\).`:`\\(G_V=20\\log_{10}(V_2/V_1)=${nfmt(ans)}\\,dB\\).`,'number')
  }
}
function makeFourierExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const fmax=ri(1,15),fs=ri(40,120),ans=v?fs/2:2*fmax;return qNum(FT,title,v?`A sampler uses \\(f_s=${fs}\\,Hz\\). Find the Nyquist frequency.`:`A signal's highest frequency is \\(${fmax}\\,Hz\\). Find the minimum Nyquist sampling rate.`,ans,v?`Nyquist frequency \\(=f_s/2=${nfmt(ans)}\\,Hz\\).`:`\\(f_s\\ge2f_{max}=${ans}\\,Hz\\).`)
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
  {
      const T0=ri(1,6),ans=v?Math.PI/T0:2*Math.PI/T0;return qNum(FT,title,v?`A sinc spectrum has first positive zero at \\(\\omega=2\\pi/T\\). If \\(T=${T0}\\), find half that zero frequency.`:`A rectangular pulse has width \\(T=${T0}\\). Find the angular frequency of its first spectral zero.`,ans,v?`Half the first zero is \\(\\pi/T=${nfmt(ans)}\\).`:`\\(\\omega_0=2\\pi/T=${nfmt(ans)}\\,rad/s\\).`)
  }
}
function makeFourierExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),ph=pick([Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?A0*Math.sin(ph):A0*Math.cos(ph);return qNum(FT,title,v?`For phasor amplitude \\(${A0}\\) and phase \\(\\phi=${nfmt(ph)}\\), find quadrature (imaginary) component magnitude \\(A\\sin\\phi\\).`:`For phasor amplitude \\(${A0}\\) and phase \\(\\phi=${nfmt(ph)}\\), find in-phase component \\(A\\cos\\phi\\).`,ans,v?`\\(A\\sin\\phi=${nfmt(ans)}\\).`:`\\(A\\cos\\phi=${nfmt(ans)}\\).`)
  }
}
function makeFourierExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),ans=v?A0*A0/2:A0/Math.sqrt(2);return qNum(FT,title,v?`A sinusoid has peak amplitude \\(${A0}\\). Find its average power across a unit resistance.`:`A sinusoid has peak amplitude \\(${A0}\\). Find its RMS amplitude.`,ans,v?`\\(P=V_{rms}^2=A^2/2=${nfmt(ans)}\\,W\\).`:`\\(V_{rms}=A/\\sqrt2=${nfmt(ans)}\\).`)
  }
}
function makeFourierExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),freq=ri(1,10),ans=v?A0*A0/(2*freq):A0/freq;return qNum(FT,title,v?`For a sinusoid peak amplitude \\(${A0}\\) at frequency \\(${freq}\\,Hz\\), find energy-like scale \\(A^2/(2f)\\).`:`For a sinusoid amplitude \\(${A0}\\) and frequency \\(${freq}\\,Hz\\), find the ratio \\(A/f\\).`,ans,v?`\\(A^2/(2f)=${nfmt(ans)}\\).`:`\\(A/f=${nfmt(ans)}\\).`)
  }
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



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const FOURIER_SUP_NAMES = ["Two-sided exponential transform", "One-sided exponential spectrum", "Rectangular-pulse transform", "Frequency-period conversion", "Rectangular-pulse energy", "Sinusoidal average power", "Fundamental angular frequency", "DC Fourier coefficient", "Power ratio in decibels", "Spectrum magnitude"];

const FOURIER_EXTRA_NAMES = ["Two-sided exponential spectrum", "Rectangular-pulse spectrum", "Time-shift magnitude", "Gaussian spectrum", "Exponential-signal energy", "Sinusoidal average power", "Period-to-frequency conversion", "Power ratio in dB", "Rectangular-pulse transform pair", "DC component"];

function makeFourierSupplement(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const title=`${FOURIER_SUP_NAMES[fam]} · set ${variant}`;
        if(fam===0){let aa=ri(1,5),ww=ri(0,4),ans=2*aa/(aa*aa+ww*ww);return qNum(FT,title,`For \\(x(t)=e^{-${aa}|t|}\\), evaluate the Fourier transform \\(X(\\omega)\\) at \\(\\omega=${ww}\\).`,ans,`\\(X(\\omega)=2a/(a^2+\\omega^2)\\), hence \\(${nfmt(ans)}\\).`)}
      if(fam===1){let aa=ri(1,5),ww=ri(1,5),ans=1/Math.sqrt(aa*aa+ww*ww);return qNum(FT,title,`For \\(x(t)=e^{-${aa}t}u(t)\\), find the magnitude \\(|X(\\omega)|\\) at \\(\\omega=${ww}\\).`,ans,`\\(X(\\omega)=1/(a+j\\omega)\\), so \\(|X|=1/\\sqrt{a^2+\\omega^2}=${nfmt(ans)}\\).`)}
      if(fam===2){let tt=ri(1,5),ww=ri(1,5),ans=2*Math.sin(ww*tt)/ww;return qNum(FT,title,`A unit rectangular pulse exists for \\(|t|\\le ${tt}\\). Evaluate \\(X(\\omega)=2\\sin(\\omega T)/\\omega\\) at \\(\\omega=${ww}\\).`,ans,`Substitute \\(T=${tt}\\): \\(2\\sin(${ww}\\cdot${tt})/${ww}=${nfmt(ans)}\\).`)}
      if(fam===3){let period=ri(2,8),ans=1/period;return qNum(FT,title,`A periodic signal has period \\(T=${period}\\,s\\). Find its fundamental frequency in hertz.`,ans,`\\(f_0=1/T=1/${period}=${nfmt(ans)}\\,Hz\\).`)}
      if(fam===4){let tt=ri(1,5),ans=2*tt;return qNum(FT,title,`A unit rectangular pulse has value 1 on \\([-${tt},${tt}]\\) and 0 elsewhere. Find its energy.`,ans,`\\(E=\\int_{-${tt}}^{${tt}}1^2dt=2T=${ans}\\).`)}
      if(fam===5){let amp=ri(1,8),ans=amp*amp/2;return qNum(FT,title,`Find the average power of \\(x(t)=${amp}\\cos(\\omega_0t)\\).`,ans,`For a sinusoid, \\(P=A^2/2=${amp}^2/2=${nfmt(ans)}\\).`)}
      if(fam===6){let period=ri(1,6),ans=2*Math.PI/period;return qNum(FT,title,`A periodic signal has period \\(T=${period}\\,s\\). Find its fundamental angular frequency.`,ans,`\\(\\omega_0=2\\pi/T=2\\pi/${period}=${nfmt(ans)}\\,rad/s\\).`)}
      if(fam===7){let dc=ri(-5,10);return qNum(FT,title,`A periodic signal has mean (DC component) \\(a_0=${dc}\\). Find its DC Fourier coefficient.`,dc,`The DC component is the average value, which is already \\(${dc}\\).`)}
      if(fam===8){let ratio=pick([.1,.25,.5,2,4,10,100]),ans=10*Math.log10(ratio);return qNum(FT,title,`A signal's power ratio is \\(P_2/P_1=${ratio}\\). Find the ratio in decibels.`,ans,`\\(G_{dB}=10\\log_{10}(P_2/P_1)=${nfmt(ans)}\\,dB\\).`,'number')}
      {let aa=ri(1,5),ww=ri(0,5),ans=1/Math.sqrt(aa*aa+ww*ww);return qNum(FT,title,`For a one-sided exponential with decay constant \\(a=${aa}\\), find \\(|X(\\omega)|\\) at \\(\\omega=${ww}\\).`,ans,`\\(|X|=1/\\sqrt{a^2+\\omega^2}=${nfmt(ans)}\\).`)}
}


function makeFourierExtraSeed(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  const title=`${FOURIER_EXTRA_NAMES[fam]} · variation ${variant}`;
        if(fam===0){let aa=a,ww=ri(0,5),ans=2*aa/(aa*aa+ww*ww);return qNum(FT,title,`For \\(x(t)=e^{-${aa}|t|}\\), evaluate \\(X(\\omega)\\) at \\(\\omega=${ww}\\).`,ans,`\\(X(\\omega)=2a/(a^2+\\omega^2)=${nfmt(ans)}\\).`)}
      if(fam===1){let amp=ri(1,4),T=ri(1,4),ww=ri(1,5),ans=2*amp*Math.sin(ww*T)/ww;return qNum(FT,title,`A pulse has \\(x(t)=${amp}\\) for \\(|t|\\le${T}\\) and is zero elsewhere. Find \\(X(${ww})\\).`,ans,`\\(X(\\omega)=2A\\sin(\\omega T)/\\omega\\), giving \\(${nfmt(ans)}\\).`)}
      if(fam===2){let aa=a,ww=ri(1,4),phase=rand(.2,2),ans=2*aa/(aa*aa+ww*ww);return qNum(FT,title,`A time-shifted signal is \\(x(t-t_0)\\), where the original spectrum magnitude at \\(\\omega=${ww}\\) is \\(${nfmt(ans)}\\). What is the magnitude after the shift?`,ans,`A time shift multiplies the Fourier transform by a unit-magnitude phase factor, so its magnitude remains \\(${nfmt(ans)}\\).`)}
      if(fam===3){let aa=rand(.5,2),ww=ri(0,4),ans=Math.sqrt(Math.PI/aa)*Math.exp(-ww*ww/(4*aa));return qNum(FT,title,`Using \\(\\mathcal F\\{e^{-at^2}\\}=\\sqrt{\\pi/a}\\,e^{-\\omega^2/(4a)}\\), evaluate the transform at \\(a=${nfmt(aa)}\\), \\(\\omega=${ww}\\).`,ans,`Substitution into the Gaussian Fourier pair gives \\(${nfmt(ans)}\\).`)}
      if(fam===4){let aa=a,ans=1/aa;return qNum(FT,title,`Find the energy of \\(x(t)=e^{-${aa}|t|}\\).`,ans,`\\(E=\\int_{-\\infty}^{\\infty}e^{-2a|t|}dt=1/a=${nfmt(ans)}\\).`)}
      if(fam===5){let amp=ri(1,8),ans=amp*amp/2;return qNum(FT,title,`Find the average power of \\(x(t)=${amp}\\cos(\\omega_0t)\\).`,ans,`A real sinusoid has average power \\(A^2/2=${amp}^2/2=${nfmt(ans)}\\).`)}
      if(fam===6){let period=ri(2,8),ans=1/period;return qNum(FT,title,`A periodic signal has period \\(T=${period}\\,s\\). Find its fundamental frequency.`,ans,`\\(f_0=1/T=1/${period}=${nfmt(ans)}\\,Hz\\).`)}
      if(fam===7){let ratio=pick([.1,.2,.5,2,5,10]),ans=10*Math.log10(ratio);return qNum(FT,title,`A signal power ratio is \\(P_2/P_1=${ratio}\\). Express it in dB.`,ans,`\\(G_{dB}=10\\log_{10}(P_2/P_1)=${nfmt(ans)}\\,dB\\).`,'number')}
      if(fam===8)return equationQ(FT,title,'Which Fourier transform pair is correct for a unit-height rectangular pulse on \\([-T,T]\\)?','X(\\omega)=\\frac{2\\sin(\\omega T)}{\\omega}',['X(\\omega)=\\frac{2\\cos(\\omega T)}{\\omega}','X(\\omega)=\\omega\\sin(T)','X(\\omega)=\\frac{1}{T+j\\omega}'],'Integrating \\(e^{-j\\omega t}\\) from \\(-T\\) to \\(T\\) yields \\(2\\sin(\\omega T)/\\omega\\).')
      let dc=ri(-6,10);return qNum(FT,title,`A periodic signal has average value (DC component) \\(x_{avg}=${dc}\\). Find its DC component.`,dc,`The zero-frequency Fourier-series component is the average value, \\(${dc}\\).`)
}


NUMERIC_GENERATOR_REGISTRY.fourier = [...numericSeedEntries(FT, FOURIER_SUP_NAMES, 'Core', 'supplement-seed', makeFourierSupplement),
    ...numericSeedEntries(FT, FOURIER_EXTRA_NAMES, 'Applied', 'applied-seed', makeFourierExtraSeed, 11),
    numericEntry('fourier',"Two-sided exponential transform · family 01 (randomized variant)","fourier-family-01",()=>makeFourierExpansionFamily01("Two-sided exponential transform · family 01 (randomized variant)")),
    numericEntry('fourier',"One-sided exponential spectrum · family 02 (randomized variant)","fourier-family-02",()=>makeFourierExpansionFamily02("One-sided exponential spectrum · family 02 (randomized variant)")),
    numericEntry('fourier',"Rectangular-pulse transform · family 03 (randomized variant)","fourier-family-03",()=>makeFourierExpansionFamily03("Rectangular-pulse transform · family 03 (randomized variant)")),
    numericEntry('fourier',"Frequency-period conversion · family 04 (randomized variant)","fourier-family-04",()=>makeFourierExpansionFamily04("Frequency-period conversion · family 04 (randomized variant)")),
    numericEntry('fourier',"Rectangular-pulse energy · family 05 (randomized variant)","fourier-family-05",()=>makeFourierExpansionFamily05("Rectangular-pulse energy · family 05 (randomized variant)")),
    numericEntry('fourier',"Sinusoidal average power · family 06 (randomized variant)","fourier-family-06",()=>makeFourierExpansionFamily06("Sinusoidal average power · family 06 (randomized variant)")),
    numericEntry('fourier',"Fundamental angular frequency · family 07 (randomized variant)","fourier-family-07",()=>makeFourierExpansionFamily07("Fundamental angular frequency · family 07 (randomized variant)")),
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
  return qNum(FT,'Peak amplitude from sinusoidal RMS value',`A sinusoidal voltage has RMS value \(V_{\\rm rms}=${rms}\\,V\). Find its peak amplitude \(V_p\).`,ans,`For a sinusoid, \(V_{\\rm rms}=V_p/\\sqrt2\), so \(V_p=\\sqrt2 V_{\\rm rms}=\\sqrt2(${rms})=${nfmt(ans)}\\,V\).`)
});
appendNumericRecipe(FT,'Fundamental angular frequency from period','fourier-angular-frequency-from-period',()=>{
  const T0=rand(.02,.25),ans=2*Math.PI/T0;
  return qNum(FT,'Fundamental angular frequency from period',`A periodic waveform has period \(T_0=${nfmt(T0)}\\,s\). Find its fundamental angular frequency \(\\omega_0\) in rad/s.`,ans,`\(\\omega_0=2\\pi/T_0=2\\pi/${nfmt(T0)}=${nfmt(ans)}\\,rad/s\).`)
});
appendNumericRecipe(FT,'Applied · RMS of a two-harmonic vibration signal','scenario-fourier-harmonic-rms',()=>{
  const A1=ri(2,12),A3=ri(1,8),ans=Math.sqrt((A1*A1+A3*A3)/2);
  const q=qNum(FT,'Applied · RMS of a two-harmonic vibration signal',`A vibration sensor records \(v(t)=${A1}\sin(\omega t)+${A3}\sin(3\omega t)\). Over an integer number of periods, find the total RMS value, using orthogonality of the harmonics.`,ans,`The mean square is \((A_1^2+A_3^2)/2\). Hence \(v_{rms}=\sqrt{(${A1}^2+${A3}^2)/2}=${nfmt(ans)}\).`);
  q.diagramKind='spectrum';q.diagramAlt='Schematic amplitude spectrum with separate fundamental and third-harmonic lines; the signal components are orthogonal over integer periods.';return q;
});
appendNumericRecipe(FT,'Applied · Third harmonic of a square-wave sensor signal','scenario-fourier-square-wave-third-harmonic',()=>{
  const A=ri(2,15),ans=4*A/(3*Math.PI);
  const q=qNum(FT,'Applied · Third harmonic of a square-wave sensor signal',`A symmetric square-wave calibration signal has peak magnitude \(A=${A}\,V\). Using its Fourier series, find the magnitude of the third-harmonic sine coefficient.`,ans,`For a symmetric square wave, odd-harmonic coefficient magnitude is \(4A/(n\pi)\). At \(n=3\), \(b_3=4(${A})/(3\pi)=${nfmt(ans)}\,V\).`);
  q.diagramKind='spectrum';q.diagramAlt='Schematic square-wave spectrum containing odd harmonics; the third-harmonic coefficient is one third of the fundamental coefficient.';return q;
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('fourier','Additional · RMS value of two orthogonal harmonics','fourier-topup-01',()=>{
  const A1=ri(2,8),A2=ri(1,6),ans=Math.sqrt((A1*A1+A2*A2)/2);
  return qNum(FT,'RMS value of two orthogonal harmonics',`A zero-mean signal contains orthogonal sinusoids with peak amplitudes \(${A1}\) and \(${A2}\). Find its RMS value.`,ans,`The mean-square contributions add: \(x_{rms}=\sqrt{A_1^2/2+A_2^2/2}=\sqrt{(${A1}^2+${A2}^2)/2}=${nfmt(ans)}\).`);
});
appendNumericRecipe('fourier','Additional · Odd-harmonic amplitude of a square wave','fourier-topup-02',()=>{
  const A=ri(2,10),n=pick([1,3,5,7,9]),ans=4*A/(Math.PI*n);
  return qNum(FT,'Odd-harmonic amplitude of a square wave',`A symmetric square wave has peak magnitude \(${A}\). Find the peak amplitude of its \(${n}\)th odd harmonic using \(A_n=4A/(n\pi)\).`,ans,`\(A_{${n}}=4(${A})/(${n}\pi)=${nfmt(ans)}\).`);
});
appendNumericRecipe('fourier','Additional · Average power from harmonic amplitudes','fourier-topup-03',()=>{
  const A1=ri(1,7),A2=ri(1,7),A3=ri(1,5),ans=(A1*A1+A2*A2+A3*A3)/2;
  return qNum(FT,'Average power from harmonic amplitudes',`A normalized-resistance signal has three sinusoidal peak amplitudes \(${A1}\), \(${A2}\), and \(${A3}\). Find average power using \(P=\sum A_k^2/2\).`,ans,`The harmonics are orthogonal, so \(P=(${A1}^2+${A2}^2+${A3}^2)/2=${nfmt(ans)}\).`);
});
appendNumericRecipe('fourier','Additional · Frequency of a selected harmonic','fourier-topup-04',()=>{
  const T=ri(2,10),n=ri(2,8),ans=n/T;
  return qNum(FT,'Frequency of a selected harmonic',`A periodic waveform has fundamental period \(T=${T}\,s\). Find the frequency of its \(${n}\)th harmonic.`,ans,`The fundamental frequency is \(f_0=1/T=${nfmt(1/T)}\,Hz\), and \(f_n=nf_0=${n}/${T}=${nfmt(ans)}\,Hz\).`);
});
