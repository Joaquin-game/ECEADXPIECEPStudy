/* signals: seed entries, explicit expansion families, and category-specific additions. */

function makeSignalsExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const f=ri(5,40),T0=1/f,ans=v?T0:2*f;return qNum(S,title,v?`A periodic signal has frequency \\(${f}\\,Hz\\). Find its period.`:`A signal has highest frequency \\(${f}\\,Hz\\). Find its minimum Nyquist sampling rate.`,ans,v?`\\(T=1/f=${nfmt(ans)}\\,s\\).`:`\\(f_s\\ge2f_{max}=${ans}\\,Hz\\).`)
  }
}
function makeSignalsExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,12),ans=v?A0/Math.sqrt(2):A0*Math.sqrt(2);return qNum(S,title,v?`A sinusoid has peak amplitude \\(${A0}\\,V\\). Find RMS amplitude.`:`A sinusoid has RMS amplitude \\(${nfmt(A0/Math.sqrt(2))}\\,V\\). Recover peak amplitude.`,ans,v?`\\(V_{rms}=V_p/\\sqrt2=${nfmt(ans)}\\,V\\).`:`\\(V_p=\\sqrt2V_{rms}=${nfmt(ans)}\\,V\\).`)
  }
}
function makeSignalsExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,10),T0=rand(.1,1),ans=v?A0*A0*T0/2:A0*T0;return qNum(S,title,v?`A rectangular pulse has amplitude \\(${A0}\\) and duration \\(${nfmt(T0)}\\). Find energy under \\(x^2(t)\\).`:`A rectangular pulse has amplitude \\(${A0}\\) and duration \\(${nfmt(T0)}\\). Find its area.` ,ans,v?`\\(E=A^2T=${nfmt(ans)}\\).`:`\\(Area=AT=${nfmt(ans)}\\).`)
  }
}
function makeSignalsExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const N=ri(3,12),bits=Math.ceil(Math.log2(N)),ans=v?2**bits:N;return qNum(S,title,v?`An ADC distinguishes \\(${N}\\) levels. How many binary codes are needed when using the next power-of-two code count?`:`An ADC uses \\(${N}\\) levels. Find minimum bits required.`,ans,v?`The allocated code count is \\(2^{\\lceil\\log_2N\\rceil}=${ans}\\).`:`\\(b=\\lceil\\log_2N\\rceil=${bits}\\) bits.` ,v?'number':'number')
  }
}
function makeSignalsExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const q=ri(2,8),delta=rand(.2,1),ans=v?delta*delta/12:delta/Math.sqrt(12);return qNum(S,title,v?`A uniform quantizer has step size \\(\\Delta=${nfmt(delta)}\\). Find quantization-noise variance.`:`A uniform quantizer has step size \\(\\Delta=${nfmt(delta)}\\). Find quantization-noise RMS.` ,ans,v?`\\(\\sigma_q^2=\\Delta^2/12=${nfmt(ans)}\\).`:`\\(\\sigma_q=\\Delta/\\sqrt{12}=${nfmt(ans)}\\).`)
  }
}
function makeSignalsExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const f=ri(100,2000),dt=rand(.001,.01),ans=v?360*f*dt:f*dt;return qNum(S,title,v?`A sinusoid at \\(${f}\\,Hz\\) is delayed by \\(${nfmt(dt)}\\,s\\). Find phase shift magnitude in degrees.`:`A sinusoid at \\(${f}\\,Hz\\) is delayed by \\(${nfmt(dt)}\\,s\\). Find cycles of phase delay.`,ans,v?`\\(\\phi=360f\\Delta t=${nfmt(ans)}^\\circ\\).`:`Number of cycles \\(=f\\Delta t=${nfmt(ans)}\\).`)
  }
}
function makeSignalsExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const fm=ri(1,6),fc=ri(50,200),beta=rand(.2,3),ans=v?beta*fm:2*(beta+1)*fm;return qNum(S,title,v?`An FM signal has \\(f_m=${fm}\\,Hz\\) and \\(\\beta=${nfmt(beta)}\\). Find peak frequency deviation.`:`For the same FM signal, estimate Carson bandwidth.`,ans,v?`\\(\\Delta f=\\beta f_m=${nfmt(ans)}\\,Hz\\).`:`\\(B\\approx2(\\Delta f+f_m)=${nfmt(ans)}\\,Hz\\).`)
  }
}
function makeSignalsExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),B0=ri(1,5),ans=v?20*Math.log10(A0/B0):A0/B0;return qNum(S,title,v?`Signal voltage amplitude is \\(${A0}\\,V\\), noise RMS amplitude \\(${B0}\\,V\\), equal impedances. Find SNR in dB.`:`Signal amplitude is \\(${A0}\\), noise amplitude \\(${B0}\\). Find amplitude ratio.`,ans,v?`\\(SNR_{dB}=20\\log_{10}(A/N)=${nfmt(ans)}\\,dB\\).`:`\\(A/N=${nfmt(ans)}\\).`)
  }
}
function makeSignalsExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const fs=ri(100,1000),fin=rand(.55*fs,.95*fs),alias=Math.abs(fin-Math.round(fin/fs)*fs),ans=v?alias:fin-fs/2;return qNum(S,title,v?`A sample rate is \\(${fs}\\,Hz\\), input frequency \\(${nfmt(fin)}\\,Hz\\). Find signed baseband alias magnitude using nearest integer multiple of \\(f_s\\).`:`A sample rate is \\(${fs}\\,Hz\\), input frequency \\(${nfmt(fin)}\\,Hz\\). Find the frequency above Nyquist by which the tone exceeds \\(f_s/2\\).`,ans,v?`\\(f_a=|f_{in}-k f_s|=${nfmt(ans)}\\,Hz\\) for nearest integer \\(k\\).`:`\\(f_{in}-f_s/2=${nfmt(ans)}\\,Hz\\).`)
  }
}
function makeSignalsExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,9),f=ri(5,50),ans=v?A0*A0/2:A0/Math.sqrt(2);return qNum(S,title,v?`A sinusoidal voltage has peak amplitude \\(${A0}\\,V\\) across \\(1\\,\\Omega\\). Find average power.`:`A sinusoid has peak amplitude \\(${A0}\\,V\\). Find RMS voltage.`,ans,v?`\\(P=V_{rms}^2/R=A^2/(2R)=${nfmt(ans)}\\,W\\).`:`\\(V_{rms}=A/\\sqrt2=${nfmt(ans)}\\,V\\).`)
  }
}
function makeSignalsExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const m=ri(1,5),n=ri(2,6),ans=v?m*n:m+n;return qNum(S,title,v?`Two sinusoidal tones are mixed by a product modulator. Their frequencies are \\(${m}\\) and \\(${n}\\) kHz. Find upper sideband frequency.`:`Two sinusoidal tones are mixed additively. Frequencies are \\(${m}\\) and \\(${n}\\) kHz. Find sum frequency.`,ans,v?`Upper sideband \\(f_c+f_m=${ans}\\,kHz\\).`:`Sum frequency \\(=${m}+${n}=${ans}\\,kHz\\).`)
  }
}
function makeSignalsExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const fs=ri(100,1000),bits=ri(4,12),ans=v?fs*bits:2**bits;return qNum(S,title,v?`PCM samples at \\(${fs}\\) samples/s using \\(${bits}\\) bits/sample. Find bit rate.`:`A uniform quantizer uses \\(${bits}\\) bits/sample. Find the number of quantization levels.`,ans,v?`\\(R_b=f_s b=${ans}\\,bit/s\\).`:`\\(L=2^b=${ans}\\) levels.`)
  }
}
function makeSignalsExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),ratio=rand(1.2,5),ans=v?20*Math.log10(ratio):A0*ratio;return qNum(S,title,v?`A voltage ratio is \\(${nfmt(ratio)}\\). Express it in dB.`:`Input signal amplitude is \\(${A0}\\) V and voltage gain is \\(${nfmt(ratio)}\\). Find output amplitude.`,ans,v?`\\(G_{dB}=20\\log_{10}(${nfmt(ratio)})=${nfmt(ans)}\\,dB\\).`:`\\(A_o=A_iG=${nfmt(ans)}\\,V\\).`)
  }
}
function makeSignalsExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,9),f=ri(1,8),ans=v?A0*f:A0/(2*Math.PI*f);return qNum(S,title,v?`A signal has amplitude \\(${A0}\\) and frequency \\(${f}\\,Hz\\). Find amplitude-times-frequency rate.`:`A sinusoid with amplitude \\(${A0}\\) and frequency \\(${f}\\,Hz\\) has integrated amplitude scale \\(A/(2\\pi f)\\). Find this scale.`,ans,v?`\\(Af=${ans}\\).`:`\\(A/(2\\pi f)=${nfmt(ans)}\\).`)
  }
}
function makeSignalsExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const duty=pick([.1,.2,.25,.4,.5,.75]),period=ri(2,10),ans=v?duty*period:duty*100;return qNum(S,title,v?`A pulse train has period \\(${period}\\,ms\\) and duty cycle \\(${duty}\\). Find pulse width.`:`A pulse train has duty cycle \\(${duty}\\). Express duty cycle as a percentage.`,ans,v?`\\(t_{on}=DT=${nfmt(ans)}\\,ms\\).`:`\\(100D=${nfmt(ans)}\\%\\).`)
  }
}
function makeSignalsExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,10),f=ri(1,10),ans=v?2*Math.PI*f*A0:f*A0;return qNum(S,title,v?`A sinusoid has amplitude \\(${A0}\\) and frequency \\(${f}\\,Hz\\). Find derivative amplitude \\(A\\omega\\).`:`A sinusoid has amplitude \\(${A0}\\) and frequency \\(${f}\\,Hz\\). Find \\(Af\\).`,ans,v?`\\(A\\omega=A(2\\pi f)=${nfmt(ans)}\\).`:`\\(Af=${ans}\\).`)
  }
}
function makeSignalsExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),tau=rand(.2,2),t0=rand(.2,2),ans=v?A0*Math.exp(-t0/tau):A0*A0*tau*(1-Math.exp(-2*t0/tau))/2;return qNum(S,title,v?`For a decaying signal \\(x(t)=${A0}e^{-t/${nfmt(tau)}}u(t)\\), find its value at \\(t=${nfmt(t0)}\\).`:`For the same decaying signal, find energy-like integrated squared envelope \\(\\int_0^T x^2(t)dt\\) up to \\(T=${nfmt(t0)}\\).`,ans,v?`\\(x(${nfmt(t0)})=${nfmt(ans)}\\).`:`\\(E_T=A^2\\tau(1-e^{-2T/\\tau})/2=${nfmt(ans)}\\).`)
  }
}
function makeSignalsExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(2,8),b0=ri(1,5),ans=v?b0/a0:Math.abs(a0-b0);return qNum(S,title,v?`A sinusoidal detector has output amplitude \\(${b0}\\) and input amplitude \\(${a0}\\). Find amplitude ratio.`:`Two tones are at \\(${a0}\\,kHz\\) and \\(${b0}\\,kHz\\). Find their absolute frequency separation.`,ans,v?`Ratio \\(=B/A=${nfmt(ans)}\\).`:`\\(\\Delta f=|f_1-f_2|=${ans}\\,kHz\\).`)
  }
}
function makeSignalsExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const fs=ri(100,1000),N0=ri(4,16),ans=v?N0/fs:1/fs;return qNum(S,title,v?`A sampler runs at \\(${fs}\\,Hz\\) and captures \\(${N0}\\) samples. Find record duration.`:`A sampler runs at \\(${fs}\\,Hz\\). Find time between adjacent samples.`,ans,v?`\\(T=N/f_s=${nfmt(ans)}\\,s\\).`:`\\(T_s=1/f_s=${nfmt(ans)}\\,s\\).`)
  }
}
function makeSignalsExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),B0=ri(2,8),ans=v?Math.hypot(A0,B0):(A0+B0)/2;return qNum(S,title,v?`Two orthogonal sinusoidal RMS components are \\(${A0}\\) and \\(${B0}\\). Find combined RMS magnitude.`:`Two measurement amplitudes are \\(${A0}\\) and \\(${B0}\\). Find their arithmetic mean.`,ans,v?`Combined RMS \\(=\\sqrt{A^2+B^2}=${nfmt(ans)}\\).`:`Mean \\(=(${A0}+${B0})/2=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const SIGNALS_CORE_SEEDS = [
['Period from frequency',()=>{let f=ri(5,120),ans=1/f;return qNum(S,'Signal period',`A periodic signal has frequency \\(f=${f}\\,Hz\\). Find its period in seconds.`,ans,`\\(T=1/f=1/${f}=${nfmt(ans)}\\,s\\).`)}],
['Angular frequency',()=>{let f=ri(2,40),ans=2*Math.PI*f;return qNum(S,'Angular frequency',`A sinusoid has frequency \\(f=${f}\\,Hz\\). Find angular frequency \\(\\omega=2\\pi f\\) in rad/s.`,ans,`\\(\\omega=2\\pi(${f})=${nfmt(ans)}\\,rad/s\\).`)}],
['Peak-to-peak voltage',()=>{let a=ri(2,24);return qNum(S,'Peak-to-peak voltage',`A sinusoidal signal has peak amplitude \\(A=${a}\\,V\\). Find its peak-to-peak voltage.`,2*a,`\\(V_{pp}=2A=2(${a})=${2*a}\\,V\\).`)}],
['RMS value of a sinusoid',()=>{let a=ri(2,22),ans=a/Math.sqrt(2);return qNum(S,'Sinusoidal RMS value',`A sine wave has peak amplitude \\(A=${a}\\,V\\). Find its RMS value.`,ans,`\\(V_{rms}=A/\\sqrt2=${a}/\\sqrt2=${nfmt(ans)}\\,V\\).`)}],
['Average of a full-wave rectified sine',()=>{let a=ri(2,20),ans=2*a/Math.PI;return qNum(S,'Rectified-sine average',`A sine wave has peak amplitude \\(A=${a}\\,V\\). Find the average of its full-wave-rectified waveform, \\(2A/\\pi\\).`,ans,`\\(V_{avg}=2A/\\pi=2(${a})/\\pi=${nfmt(ans)}\\,V\\).`)}],
['Nyquist frequency',()=>{let fs=ri(20,200)*100;return qNum(S,'Nyquist frequency',`A signal is sampled at \\(f_s=${fs}\\,Hz\\). Find its Nyquist frequency.`,fs/2,`\\(f_N=f_s/2=${fs}/2=${fs/2}\\,Hz\\).`)}],
['Minimum sampling rate',()=>{let fm=ri(1,30)*100;return qNum(S,'Minimum sampling rate',`The highest frequency component is \\(f_{max}=${fm}\\,Hz\\). By the Nyquist criterion, what minimum sampling rate avoids aliasing for an ideal band-limited signal?`,2*fm,`\\(f_s\\geq2f_{max}=2(${fm})=${2*fm}\\,samples/s\\).`)}],
['Sampling period',()=>{let fs=ri(2,50)*1000,ans=1/fs;return qNum(S,'Sampling period',`A digital system samples at \\(f_s=${fs}\\,Hz\\). Find the sampling period in seconds.`,ans,`\\(T_s=1/f_s=1/${fs}=${nfmt(ans)}\\,s\\).`)}],
['Samples per signal period',()=>{let f=ri(5,25),fs=f*ri(4,15);return qNum(S,'Samples per period',`A signal has frequency \\(f=${f}\\,Hz\\) and sampling frequency \\(f_s=${fs}\\,Hz\\). How many samples occur per signal period?`,fs/f,`\\(N=f_s/f=${fs}/${f}=${fs/f}\\).`)}],
['Power of a sinusoid across a resistor',()=>{let a=ri(2,18),r=ri(2,20),ans=(a*a/2)/r;return qNum(S,'Sinusoidal load power',`A sinusoid with peak voltage \\(A=${a}\\,V\\) is applied across \\(R=${r}\\,\\Omega\\). Find average power.`,ans,`\\(P=V_{rms}^2/R=(A^2/2)/R=${nfmt(ans)}\\,W\\).`)}],
['Power level in dBm',()=>{let p=ri(1,100),ans=10*Math.log10(p);return qNum(S,'Power level in dBm',`A signal power is \\(P=${p}\\,mW\\). Find its power level in dBm using \\(10\\log_{10}(P_{mW})\\).`,ans,`\\(P_{dBm}=10\\log_{10}(${p})=${nfmt(ans)}\\,dBm\\).`)}],
['Signal-to-noise ratio',()=>{let ps=ri(5,50),pn=ri(1,4),ans=10*Math.log10(ps/pn);return qNum(S,'Signal-to-noise ratio',`Signal power is \\(P_s=${ps}\\,mW\\), and noise power is \\(P_n=${pn}\\,mW\\). Find SNR in dB.`,ans,`\\(SNR_{dB}=10\\log_{10}(P_s/P_n)=10\\log_{10}(${ps}/${pn})=${nfmt(ans)}\\,dB\\).`)}],
['Amplitude ratio from decibels',()=>{let db=ri(6,36),ans=Math.pow(10,db/20);return qNum(S,'Amplitude ratio from dB',`A voltage gain is \\(${db}\\,dB\\). Find its linear amplitude ratio \\(10^{G_{dB}/20}\\).`,ans,`\\(A_2/A_1=10^{${db}/20}=${nfmt(ans)}\\).`)}],
['Phase shift from a time delay',()=>{let f=ri(2,30),dt=rand(.001,.02),ans=360*f*dt;return qNum(S,'Phase shift from time delay',`A \\(${f}\\,Hz\\) signal is delayed by \\(\\Delta t=${nfmt(dt)}\\,s\\). Find the phase shift magnitude in degrees.`,ans,`\\(\\phi=360f\\Delta t=360(${f})(${nfmt(dt)})=${nfmt(ans)}^\\circ\\).`,'degrees')}],
['Wavelength at RF',()=>{let f=ri(30,900),ans=300/f;return qNum(S,'RF wavelength',`An electromagnetic signal has frequency \\(f=${f}\\,MHz\\). Using \\(c\\approx3\\times10^8\\,m/s\\), find wavelength in meters.`,ans,`\\(\\lambda=c/f=300/${f}=${nfmt(ans)}\\,m\\) when frequency is in MHz.`)}],
['Magnitude of a complex sinusoid coefficient',()=>{let x=ri(-9,9)||3,y=ri(1,9),ans=Math.hypot(x,y);return qNum(S,'Complex coefficient magnitude',`A phasor coefficient is \\(X=${x}+j${y}\\). Find its magnitude \\(\\lvert X\\rvert\\).`,ans,`\\(\\lvert X\\rvert=\\sqrt{${x}^2+${y}^2}=${nfmt(ans)}\\).`)}],
['Phase angle of a complex coefficient',()=>{let x=ri(1,9),y=ri(1,9),ans=Math.atan2(y,x)*180/Math.PI;return qNum(S,'Complex coefficient phase',`A phasor is \\(X=${x}+j${y}\\). Find its phase in degrees.`,ans,`\\(\\theta=\\tan^{-1}(${y}/${x})=${nfmt(ans)}^\\circ\\).`,'degrees')}],
['In-phase sinusoid addition',()=>{let a=ri(2,18),b=ri(2,15);return qNum(S,'In-phase sinusoid addition',`Two same-frequency, in-phase sinusoids have amplitudes \\(${a}\\,V\\) and \\(${b}\\,V\\). Find the resultant amplitude.`,a+b,`In phase, amplitudes add: \\(A_R=${a}+${b}=${a+b}\\,V\\).`)}],
['Beat frequency',()=>{let f1=ri(30,200),f2=ri(20,195);if(f1===f2)f2+=7;return qNum(S,'Beat frequency',`Two nearby tones have frequencies \\(f_1=${f1}\\,Hz\\) and \\(f_2=${f2}\\,Hz\\). Find beat frequency.`,Math.abs(f1-f2),`\\(f_b=\\lvert f_1-f_2\\rvert=\\lvert ${f1}-${f2}\\rvert=${Math.abs(f1-f2)}\\,Hz\\).`)}],
['Pulse duty cycle',()=>{let ton=ri(1,9),toff=ri(1,10),ans=100*ton/(ton+toff);return qNum(S,'Pulse duty cycle',`A pulse is high for \\(t_{on}=${ton}\\,ms\\) and low for \\(t_{off}=${toff}\\,ms\\). Find duty cycle in percent.`,ans,`\\(D=100t_{on}/(t_{on}+t_{off})=${nfmt(ans)}\\%\\).`,'percent') }]
];

NUMERIC_GENERATOR_REGISTRY.signals = [...coreSeedEntries(S, SIGNALS_CORE_SEEDS),
    numericEntry('signals',"Frequency from period · family 01 (randomized variant)","signals-family-01",()=>makeSignalsExpansionFamily01("Frequency from period · family 01 (randomized variant)")),
    numericEntry('signals',"Angular frequency conversion · family 02 (randomized variant)","signals-family-02",()=>makeSignalsExpansionFamily02("Angular frequency conversion · family 02 (randomized variant)")),
    numericEntry('signals',"Sinusoidal RMS amplitude · family 03 (randomized variant)","signals-family-03",()=>makeSignalsExpansionFamily03("Sinusoidal RMS amplitude · family 03 (randomized variant)")),
    numericEntry('signals',"Mean absolute sinusoid · family 04 (randomized variant)","signals-family-04",()=>makeSignalsExpansionFamily04("Mean absolute sinusoid · family 04 (randomized variant)")),
    numericEntry('signals',"Nyquist sampling rate · family 05 (randomized variant)","signals-family-05",()=>makeSignalsExpansionFamily05("Nyquist sampling rate · family 05 (randomized variant)")),
    numericEntry('signals',"Quantization levels · family 06 (randomized variant)","signals-family-06",()=>makeSignalsExpansionFamily06("Quantization levels · family 06 (randomized variant)")),
    numericEntry('signals',"PCM bit rate · family 07 (randomized variant)","signals-family-07",()=>makeSignalsExpansionFamily07("PCM bit rate · family 07 (randomized variant)")),
    numericEntry('signals',"Voltage gain in decibels · family 08 (randomized variant)","signals-family-08",()=>makeSignalsExpansionFamily08("Voltage gain in decibels · family 08 (randomized variant)")),
    numericEntry('signals',"Phase from time shift · family 09 (randomized variant)","signals-family-09",()=>makeSignalsExpansionFamily09("Phase from time shift · family 09 (randomized variant)")),
    numericEntry('signals',"Energy of a decaying signal · family 10 (randomized variant)","signals-family-10",()=>makeSignalsExpansionFamily10("Energy of a decaying signal · family 10 (randomized variant)")),
    numericEntry('signals',"Mixer sideband frequency · family 11 (randomized variant)","signals-family-11",()=>makeSignalsExpansionFamily11("Mixer sideband frequency · family 11 (randomized variant)")),
    numericEntry('signals',"PCM quantization code count · family 12 (randomized variant)","signals-family-12",()=>makeSignalsExpansionFamily12("PCM quantization code count · family 12 (randomized variant)")),
    numericEntry('signals',"Voltage ratio and dB · family 13 (randomized variant)","signals-family-13",()=>makeSignalsExpansionFamily13("Voltage ratio and dB · family 13 (randomized variant)")),
    numericEntry('signals',"Signal slope scale · family 14 (randomized variant)","signals-family-14",()=>makeSignalsExpansionFamily14("Signal slope scale · family 14 (randomized variant)")),
    numericEntry('signals',"Pulse duty cycle · family 15 (randomized variant)","signals-family-15",()=>makeSignalsExpansionFamily15("Pulse duty cycle · family 15 (randomized variant)")),
    numericEntry('signals',"Derivative amplitude · family 16 (randomized variant)","signals-family-16",()=>makeSignalsExpansionFamily16("Derivative amplitude · family 16 (randomized variant)")),
    numericEntry('signals',"Exponentially decaying signal energy · family 17 (randomized variant)","signals-family-17",()=>makeSignalsExpansionFamily17("Exponentially decaying signal energy · family 17 (randomized variant)")),
    numericEntry('signals',"Amplitude ratio · family 18 (randomized variant)","signals-family-18",()=>makeSignalsExpansionFamily18("Amplitude ratio · family 18 (randomized variant)")),
    numericEntry('signals',"Sampling interval and record duration · family 19 (randomized variant)","signals-family-19",()=>makeSignalsExpansionFamily19("Sampling interval and record duration · family 19 (randomized variant)")),
    numericEntry('signals',"Orthogonal signal RMS combination · family 20 (randomized variant)","signals-family-20",()=>makeSignalsExpansionFamily20("Orthogonal signal RMS combination · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(S,'Field scenario · Sampling rate for a vibration logger','scenario-signals-vibration-nyquist',()=>{
  const fs=ri(4,24)*1000,ans=fs/2;
  const q=qNum(S,'Field scenario · Sampling rate for a vibration logger',`A maintenance team configures a vibration logger at sampling rate \\(f_s=${fs}\\,samples/s\\). By the Nyquist criterion, what is the highest sinusoidal frequency that can be represented without aliasing under ideal assumptions?`,ans,`The Nyquist frequency is \\(f_N=f_s/2=${fs}/2=${nfmt(ans)}\\,Hz\\). Components above this limit can alias into lower frequencies.`);
  q.diagramKind='sampleWave';q.diagramAlt='A continuous sinusoid is shown with sample markers taken at regular time intervals; the Nyquist limit is half the sampling rate.';return q;
});
appendNumericRecipe(S,'Applied · ADC quantization step size','scenario-signals-adc-lsb',()=>{
  const bits=pick([8,10,12]),Vref=pick([3.3,5,10]),ans=Vref/(2**bits);
  return qNum(S,'Applied · ADC quantization step size',`An embedded data logger uses an ideal ${bits}-bit ADC with input range \\(0\\) to \\(${Vref}\\,V\\). Using \\(\\Delta V=V_{ref}/2^{N}\\), find one least-significant-bit step in volts.`,ans,`There are \\(2^{${bits}}=${2**bits}\\) quantization intervals, so \\(\\Delta V=${Vref}/2^{${bits}}=${nfmt(ans)}\\,V\\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('signals','Additional · Nyquist minimum sampling rate','signals-topup-01',()=>{
  const fmax=ri(2,120),ans=2*fmax;
  return qNum(S,'Nyquist minimum sampling rate',`A band-limited signal has highest frequency \\(${fmax}\\,Hz\\). Find the Nyquist minimum sampling rate.`,ans,`Nyquist requires \\(f_s\\ge2f_{max}\\), so the theoretical minimum is \\(2(${fmax})=${ans}\\,samples/s\\).`);
});
appendNumericRecipe('signals','Additional · Number of ADC quantization levels','signals-topup-02',()=>{
  const bits=ri(3,12),ans=2**bits;
  return qNum(S,'Number of ADC quantization levels',`An ideal ADC has \\(${bits}\\) bits. How many distinct quantization levels are available?`,ans,`An \\(N\\)-bit converter has \\(2^N\\) levels, so \\(2^{${bits}}=${ans}\\).`);
});
appendNumericRecipe('signals','Additional · RMS of a symmetric square wave','signals-topup-03',()=>{
  const A=ri(2,20),ans=A;
  return qNum(S,'RMS of a symmetric square wave',`A symmetric square wave alternates between \\(+${A}\\,V\\) and \\(-${A}\\,V\\). Find its RMS voltage.`,ans,`The magnitude is constantly \\(${A}\\,V\\), so \\(V_{rms}=\\sqrt{\\operatorname{mean}(v^2)}=${A}\\,V\\).`);
});
appendNumericRecipe('signals','Additional · Pulse duty cycle','signals-topup-04',()=>{
  const ton=ri(1,8),off=ri(1,12),T=ton+off,ans=100*ton/T;
  return qNum(S,'Pulse duty cycle',`A digital pulse is high for \\(${ton}\\,ms\\) and low for \\(${off}\\,ms\\). Find duty cycle in percent.`,ans,`The period is \\(T=${ton}+${off}=${T}\\,ms\\). Duty cycle is \\(100t_{on}/T=100(${ton}/${T})=${nfmt(ans)}\\%\\).`,'percent');
});
appendNumericRecipe('signals','Additional · Energy of a causal exponential pulse','signals-topup-05',()=>{
  const A=ri(1,8),a=ri(1,6),ans=A*A/(2*a);
  return qNum(S,'Energy of a causal exponential pulse',`For \\(x(t)=${A}e^{-${a}t}u(t)\\), find its total energy \\(E=\\int_0^\\infty x^2(t)\\,dt\\).`,ans,`\\(E=${A}^2\\int_0^\\infty e^{-2${a}t}dt=${A}^2/(2${a})=${nfmt(ans)}\\).`);
});
appendNumericRecipe('signals','Additional · Beat frequency of two sinusoids','signals-topup-06',()=>{
  const f1=ri(20,180),f2=ri(20,180),ans=Math.abs(f1-f2);
  return qNum(S,'Beat frequency of two sinusoids',`Two nearby tones have frequencies \\(${f1}\\,Hz\\) and \\(${f2}\\,Hz\\). Find their beat frequency.`,ans,`The beat frequency is the absolute difference: \\(f_b=|f_1-f_2|=|${f1}-${f2}|=${ans}\\,Hz\\).`);
});
