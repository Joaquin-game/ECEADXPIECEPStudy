/* related: seed entries, explicit expansion families, and category-specific additions. */

function makeRelatedExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const r=ri(2,8),dr=rand(.2,1.5),ans=v?2*Math.PI*r*dr:Math.PI*r*r;return qNum(RR,title,v?`A circular oil spill radius is \\(${r}\\,m\\) and grows at \\(dr/dt=${nfmt(dr)}\\,m/s\\). Find area growth rate.`:`A circular spill has radius \\(${r}\\,m\\). Find its area.`,ans,v?`\\(dA/dt=2\\pi r\\,dr/dt=${nfmt(ans)}\\,m^2/s\\).`:`\\(A=\\pi r^2=${nfmt(ans)}\\,m^2\\).`)
  }
}
function makeRelatedExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const r=ri(2,7),dr=rand(.1,.8),ans=v?4*Math.PI*r*r*dr:4*Math.PI*r**3/3;return qNum(RR,title,v?`A sphere has radius \\(${r}\\,cm\\), increasing at \\(${nfmt(dr)}\\,cm/s\\). Find \\(dV/dt\\).`:`Find volume of a sphere of radius \\(${r}\\,cm\\).`,ans,v?`\\(dV/dt=4\\pi r^2dr/dt=${nfmt(ans)}\\,cm^3/s\\).`:`\\(V=4\\pi r^3/3=${nfmt(ans)}\\,cm^3\\).`)
  }
}
function makeRelatedExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const r=ri(2,6),h=ri(3,10),dr=rand(.1,.7),dh=rand(.2,.8),ans=v?Math.PI*(r*r*dh+2*r*h*dr)/3:Math.PI*r*r*h/3;return qNum(RR,title,v?`A cone has \\(r=${r}\\,cm, h=${h}\\,cm\\), with \\(dr/dt=${nfmt(dr)}\\), \\(dh/dt=${nfmt(dh)}\\). Find \\(dV/dt\\).`:`Find cone volume for radius \\(${r}\\,cm\\) and height \\(${h}\\,cm\\).`,ans,v?`\\(V=\\pi r^2h/3\\), so \\(dV/dt=\\pi(2rh\\dot r+r^2\\dot h)/3=${nfmt(ans)}\\).`:`\\(V=\\pi r^2h/3=${nfmt(ans)}\\,cm^3\\).`)
  }
}
function makeRelatedExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(10,20),x=ri(3,Math.floor(L0*.7)),y=Math.sqrt(L0*L0-x*x),dy=rand(.1,.8),ans=v?(y/x)*dy:Math.sqrt(L0*L0-x*x);return qNum(RR,title,v?`A \\(${L0}\\,m\\) ladder has base distance \\(x=${x}\\,m\\), height \\(y=${nfmt(y)}\\,m\\). The top slides down at \\(${nfmt(dy)}\\,m/s\\). Find \\(dx/dt\\).`:`A \\(${L0}\\,m\\) ladder has base distance \\(x=${x}\\,m\\) from the wall. Find top height.` ,ans,v?`From \\(x^2+y^2=L^2\\), \\(dx/dt=-(y/x)dy/dt=${nfmt(ans)}\\,m/s\\) when y decreases.`:`\\(y=\\sqrt{L^2-x^2}=${nfmt(ans)}\\,m\\).`)
  }
}
function makeRelatedExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const x=ri(3,12),y=ri(4,12),dx=rand(.2,1.2),dy=rand(.2,1.2),ans=v?(x*dx+y*dy)/Math.hypot(x,y):Math.hypot(x,y);return qNum(RR,title,v?`A radar measures \\(x=${x}\\,m\\), \\(y=${y}\\,m\\), \\(dx/dt=${nfmt(dx)}\\), \\(dy/dt=${nfmt(dy)}\\). Find range rate \\(dr/dt\\).`:`A point has coordinates \\(x=${x},y=${y}\\). Find its distance from the origin.`,ans,v?`\\(r=\\sqrt{x^2+y^2}\\), so \\(dr/dt=(x\\dot x+y\\dot y)/r=${nfmt(ans)}\\).`:`\\(r=\\sqrt{x^2+y^2}=${nfmt(ans)}\\).`)
  }
}
function makeRelatedExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const h=ri(1,5),x=ri(2,8),dx=rand(.2,1),ans=v? h*dx/(x*x):h/x;return qNum(RR,title,v?`A \\(${h}\\,m\\) object casts a shadow when the distance to a lamp is \\(x=${x}\\,m\\) and grows at \\(${nfmt(dx)}\\,m/s\\). Find \\(|d(h/x)/dt|\\).`:`Compute ratio \\(h/x\\) for object height \\(${h}\\) and horizontal distance \\(${x}\\).`,ans,v?`Derivative magnitude \\(h\\dot x/x^2=${nfmt(ans)}\\).`:`\\(h/x=${nfmt(ans)}\\).`)
  }
}
function makeRelatedExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const r=ri(2,8),dr=rand(.1,1),ans=v?2*Math.PI*dr:2*Math.PI*r;return qNum(RR,title,v?`A circle radius grows at \\(dr/dt=${nfmt(dr)}\\,cm/s\\). Find circumference growth rate.`:`Find circumference for circle radius \\(${r}\\,cm\\).`,ans,v?`\\(dC/dt=2\\pi dr/dt=${nfmt(ans)}\\,cm/s\\).`:`\\(C=2\\pi r=${nfmt(ans)}\\,cm\\).`)
  }
}
function makeRelatedExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(2,8),da=rand(.1,.8),ans=v?3*a0*a0*da:a0**3;return qNum(RR,title,v?`Cube edge is \\(${a0}\\,cm\\), increasing at \\(${nfmt(da)}\\,cm/s\\). Find volume rate.`:`Find volume of a cube with edge \\(${a0}\\,cm\\).`,ans,v?`\\(dV/dt=3a^2da/dt=${nfmt(ans)}\\,cm^3/s\\).`:`\\(V=a^3=${ans}\\,cm^3\\).`)
  }
}
function makeRelatedExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const V0=ri(5,24),I=ri(2,10),dV=rand(.2,1.4),dI=rand(.1,.8),ans=v?V0*dI+I*dV:V0*I;return qNum(RR,title,v?`A circuit has \\(V=${V0}\\,V, I=${I}\\,A\\), with \\(dV/dt=${nfmt(dV)}\\) and \\(dI/dt=${nfmt(dI)}\\). Find \\(dP/dt\\).`:`Find electrical power for \\(V=${V0}\\,V\\) and \\(I=${I}\\,A\\).`,ans,v?`Since \\(P=VI\\), \\(dP/dt=V\\dot I+I\\dot V=${nfmt(ans)}\\,W/s\\).`:`\\(P=VI=${ans}\\,W\\).`)
  }
}
function makeRelatedExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const theta=pick([Math.PI/6,Math.PI/4,Math.PI/3]),omega=rand(.2,1.5),r=ri(2,8),ans=v?r*omega*Math.cos(theta):r*omega;return qNum(RR,title,v?`A point rotates at radius \\(${r}\\,m\\), angular speed \\(${nfmt(omega)}\\,rad/s\\), with angle \\(${nfmt(theta)}\\,rad\\). Find horizontal speed magnitude \\(r\\omega\\cos\\theta\\).`:`A point rotates at radius \\(${r}\\,m\\) and angular speed \\(${nfmt(omega)}\\,rad/s\\). Find tangential speed.`,ans,v?`\\(|dx/dt|=r\\omega|\\cos\\theta|=${nfmt(ans)}\\,m/s\\).`:`\\(v=r\\omega=${nfmt(ans)}\\,m/s\\).`)
  }
}
function makeRelatedExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const side=ri(2,8),dside=rand(.1,.8),ans=v?4*side*dside:side*side;return qNum(RR,title,v?`A square side is \\(${side}\\,m\\), increasing at \\(${nfmt(dside)}\\,m/s\\). Find area growth rate.`:`Find area of square with side \\(${side}\\,m\\).`,ans,v?`\\(dA/dt=2s\\,ds/dt=${nfmt(ans)}\\,m^2/s\\).`:`\\(A=s^2=${ans}\\,m^2\\).`)
  }
}
function makeRelatedExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const r=ri(2,8),dr=rand(.1,.7),ans=v?4*Math.PI*r*dr:4*Math.PI*r*r*dr;return qNum(RR,title,v?`A sphere has radius \\(${r}\\,cm\\) increasing at \\(${nfmt(dr)}\\,cm/s\\). Find surface-area rate.`:`For the same sphere, find volume rate.`,ans,v?`\\(A=4\\pi r^2\\), so \\(dA/dt=8\\pi r\\dot r=${nfmt(ans)}\\).`:`\\(dV/dt=4\\pi r^2\\dot r=${nfmt(ans)}\\).`)
  }
}
function makeRelatedExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const radius=ri(2,7),dr=rand(.1,.6),ans=v?2*Math.PI*radius*dr:Math.PI*radius*radius;return qNum(RR,title,v?`A circle's radius \\(${radius}\\,m\\) increases at \\(${nfmt(dr)}\\,m/s\\). Find circumference rate.`:`Find disk area with radius \\(${radius}\\,m\\).`,ans,v?`\\(dC/dt=2\\pi\\dot r=${nfmt(ans)}\\,m/s\\).`:`\\(A=\\pi r^2=${nfmt(ans)}\\,m^2\\).`)
  }
}
function makeRelatedExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const x=ri(3,10),y=ri(4,12),dx=rand(.2,1),dy=rand(.2,1),r=Math.hypot(x,y),ans=v?(x*dx+y*dy)/r:r;return qNum(RR,title,v?`A ship is at \\((x,y)=(${x},${y})\\,km\\), with \\(dx/dt=${nfmt(dx)}\\), \\(dy/dt=${nfmt(dy)}\\). Find range rate.`:`Find distance from origin for coordinates \\((${x},${y})\\).`,ans,v?`\\(dr/dt=(x\\dot x+y\\dot y)/r=${nfmt(ans)}\\,km/h\\).`:`\\(r=\\sqrt{x^2+y^2}=${nfmt(ans)}\\,km\\).`)
  }
}
function makeRelatedExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const q=ri(2,8),v0=ri(2,10),dq=rand(.1,1),dv=rand(.1,1),ans=v? q*dv+v0*dq:q*v0;return qNum(RR,title,v?`Charge \\(q=${q}\\,C\\), voltage \\(V=${v0}\\,V\\); \\(dq/dt=${nfmt(dq)}\\), \\(dV/dt=${nfmt(dv)}\\). Find \\(d(qV)/dt\\).`:`Find electrical energy-like product \\(qV\\) for \\(q=${q}\\,C\\) and \\(V=${v0}\\,V\\).`,ans,v?`Product rule: \\(d(qV)/dt=V\\dot q+q\\dot V=${nfmt(ans)}\\).`:`\\(qV=${ans}\\,J\\).`)
  }
}
function makeRelatedExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const x=ri(2,7),y=ri(3,9),dy=rand(.1,.6),ans=v?(y/x)*dy:Math.sqrt(x*x+y*y);return qNum(RR,title,v?`A fixed-length ladder has base distance \\(${x}\\) and height \\(${y}\\). If top descends at \\(${nfmt(dy)}\\), find base speed magnitude.`:`Find ladder length for right triangle legs \\(${x}\\) and \\(${y}\\).`,ans,v?`\\(|dx/dt|=(y/x)|dy/dt|=${nfmt(Math.abs(ans))}\\).`:`\\(L=\\sqrt{x^2+y^2}=${nfmt(ans)}\\).`)
  }
}
function makeRelatedExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?2*Math.PI*a0*b0:Math.PI*a0*b0;return qNum(RR,title,v?`A cone/cylinder interface has radius \\(${a0}\\) and height \\(${b0}\\); find lateral cylindrical area.`:`A circular base has radius \\(${a0}\\) and a matching length \\(${b0}\\). Find \\(\\pi rh\\).`,ans,v?`Cylindrical lateral area \\(=2\\pi rh=${nfmt(ans)}\\).`:`\\(\\pi rh=${nfmt(ans)}\\).`)
  }
}
function makeRelatedExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const r=ri(2,8),dr=rand(.1,.7),ans=v?8*Math.PI*r*dr:4*Math.PI*r*r;return qNum(RR,title,v?`Sphere radius \\(${r}\\) grows at \\(${nfmt(dr)}\\). Find rate of change of sphere surface area.`:`Find sphere surface area at radius \\(${r}\\).`,ans,v?`\\(dA/dt=8\\pi r\\dot r=${nfmt(ans)}\\).`:`\\(A=4\\pi r^2=${nfmt(ans)}\\).`)
  }
}
function makeRelatedExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(2,7),da=rand(.1,.7),ans=v?2*a0*da:a0*a0;return qNum(RR,title,v?`A cube edge \\(${a0}\\) grows at \\(${nfmt(da)}\\). Find rate of change of one square face area.`:`Find area of one square face with side \\(${a0}\\).`,ans,v?`\\(dA/dt=2a\\dot a=${nfmt(ans)}\\).`:`\\(A=a^2=${ans}\\).`)
  }
}
function makeRelatedExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const v0=ri(3,12),dv=rand(.2,1.2),a0=ri(1,6),ans=v?2*a0*dv:a0*dv;return qNum(RR,title,v?`A square side has length \\(${a0}\\) and grows at \\(${nfmt(dv)}\\). Find area rate.`:`A rectangle width \\(${a0}\\) is fixed and length grows at \\(${nfmt(dv)}\\). Find area rate.`,ans,v?`\\(dA/dt=2s\\dot s=${nfmt(ans)}\\).`:`\\(dA/dt=w\\dot l=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const RELATED_SUP_NAMES = ["Circle-area related rate", "Sphere-volume related rate", "Cone-volume related rate", "Ladder related rate", "Distance related rate", "Shadow-length related rate", "Circumference rate", "Cube-volume related rate", "Electrical power rate", "Angular-position rate"];

const RELATED_EXTRA_NAMES = ["Circle-area rate", "Sphere-volume rate", "Distance rate", "Ladder horizontal rate", "Cube-volume rate", "Current rate from voltage", "Electrical power rate", "Cone-volume rate", "Angular rate", "Circumference rate"];

function makeRelatedSupplement(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const title=`${RELATED_SUP_NAMES[fam]} · set ${variant}`;
        if(fam===0){let r=ri(2,8),rate=rand(.2,3),ans=2*Math.PI*r*rate;return qNum(RR,title,`A circle radius increases at \\(dr/dt=${nfmt(rate)}\\,m/s\\). Find \\(dA/dt\\) when \\(r=${r}\\,m\\).`,ans,`\\(A=\\pi r^2\\Rightarrow dA/dt=2\\pi r(dr/dt)=${nfmt(ans)}\\,m^2/s\\).`)}
      if(fam===1){let r=ri(1,5),rate=rand(.1,1.8),ans=4*Math.PI*r*r*rate;return qNum(RR,title,`A sphere radius grows at \\(dr/dt=${nfmt(rate)}\\,cm/s\\). Find \\(dV/dt\\) when \\(r=${r}\\,cm\\).`,ans,`\\(V=4\\pi r^3/3\\Rightarrow dV/dt=4\\pi r^2dr/dt=${nfmt(ans)}\\,cm^3/s\\).`)}
      if(fam===2){let r=ri(1,5),rate=rand(.1,1.5),ans=2*Math.PI*r*r*rate;return qNum(RR,title,`A cone always has height twice its radius, so \\(V=2\\pi r^3/3\\). If \\(dr/dt=${nfmt(rate)}\\) and \\(r=${r}\\), find \\(dV/dt\\).`,ans,`Differentiate \\(V=2\\pi r^3/3\\): \\(dV/dt=2\\pi r^2dr/dt=${nfmt(ans)}\\).`)}
      if(fam===3){let length=ri(5,15),xx=ri(1,length-1),yy=Math.sqrt(length*length-xx*xx),dx=rand(.1,1.5),ans=-xx/yy*dx;return qNum(RR,title,`A ladder of length \\(${length}\\,m\\) rests against a wall. At a moment, the foot is \\(x=${xx}\\,m\\) from the wall and moves away at \\(dx/dt=${nfmt(dx)}\\,m/s\\). Find \\(dy/dt\\).`,ans,`From \\(x^2+y^2=L^2\\), \\(x dx/dt+y dy/dt=0\\). Here \\(y=\\sqrt{L^2-x^2}=${nfmt(yy)}\\), so \\(dy/dt=-x(dx/dt)/y=${nfmt(ans)}\\).`)}
      if(fam===4){let xx=ri(3,10),yy=ri(3,10),dx=rand(.2,2),dy=rand(.2,2),rr=Math.sqrt(xx*xx+yy*yy),ans=(xx*dx+yy*dy)/rr;return qNum(RR,title,`Two coordinates satisfy \\(r=\\sqrt{x^2+y^2}\\). At an instant, \\(x=${xx}, y=${yy}, dx/dt=${nfmt(dx)}, dy/dt=${nfmt(dy)}\\). Find \\(dr/dt\\).`,ans,`\\(dr/dt=(x dx/dt+y dy/dt)/r=${nfmt(ans)}\\).`)}
      if(fam===5){let person=ri(1,2),light=ri(5,10),distance=ri(2,8),ds=rand(.2,1.5),ans=person/(light-person)*ds;return qNum(RR,title,`A person of height \\(${person}\\,m\\) walks away from a lamp of height \\(${light}\\,m\\) at \\(ds/dt=${nfmt(ds)}\\,m/s\\). Using similar triangles, find the rate of change of shadow length.`,ans,`Let shadow length be \\(x\\). Similar triangles give \\(x=hs/(H-h)\\); hence \\(dx/dt=h/(H-h)ds/dt=${nfmt(ans)}\\,m/s\\).`)}
      if(fam===6){let rate=rand(.2,2.5);return qNum(RR,title,`A circle's radius grows at \\(dr/dt=${nfmt(rate)}\\,cm/s\\). Find the rate of change of circumference.`,2*Math.PI*rate,`\\(C=2\\pi r\\Rightarrow dC/dt=2\\pi dr/dt=${nfmt(2*Math.PI*rate)}\\,cm/s\\).`)}
      if(fam===7){let side=ri(2,8),rate=rand(.1,1.5),ans=3*side*side*rate;return qNum(RR,title,`A cube side grows at \\(ds/dt=${nfmt(rate)}\\,cm/s\\). Find \\(dV/dt\\) when \\(s=${side}\\,cm\\).`,ans,`\\(V=s^3\\Rightarrow dV/dt=3s^2ds/dt=${nfmt(ans)}\\,cm^3/s\\).`)}
      if(fam===8){let cur=ri(1,8),res=ri(2,20),rate=rand(.1,3),ans=cur*cur*rate;return qNum(RR,title,`Current is constant at \\(I=${cur}\\,A\\). Resistance changes at \\(dR/dt=${nfmt(rate)}\\,\\Omega/s\\). Find \\(dP/dt\\) for \\(P=I^2R\\).`,ans,`With constant current, \\(dP/dt=I^2(dR/dt)=${cur}^2(${nfmt(rate)})=${nfmt(ans)}\\,W/s\\).`)}
      {let xx=ri(2,10),yy=ri(2,10),dx=rand(.1,1.5),dy=rand(.1,1.5),ans=(xx*dy-yy*dx)/(xx*xx+yy*yy);return qNum(RR,title,`A point has \\(x=${xx}, y=${yy}\\), with \\(dx/dt=${nfmt(dx)}, dy/dt=${nfmt(dy)}\\). Find \\(d\\theta/dt\\) for \\(\\theta=\\operatorname{atan2}(y,x)\\).`,ans,`\\(d\\theta/dt=(x(dy/dt)-y(dx/dt))/(x^2+y^2)=${nfmt(ans)}\\,rad/s\\).`)}
}


function makeRelatedExtraSeed(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  const title=`${RELATED_EXTRA_NAMES[fam]} · variation ${variant}`;
        if(fam===0){let r=ri(2,8),dr=ri(1,5),ans=2*Math.PI*r*dr;return qNum(RR,title,`A circle's radius is \\(r=${r}\\,m\\) and grows at \\(dr/dt=${dr}\\,m/s\\). Find \\(dA/dt\\).`,ans,`\\(A=\\pi r^2\\), so \\(dA/dt=2\\pi r(dr/dt)=2\\pi(${r})(${dr})=${nfmt(ans)}\\,m^2/s\\).`)}
      if(fam===1){let r=ri(2,7),dr=ri(1,4),ans=4*Math.PI*r*r*dr;return qNum(RR,title,`A sphere has radius \\(r=${r}\\,m\\) increasing at \\(dr/dt=${dr}\\,m/s\\). Find \\(dV/dt\\).`,ans,`\\(V=4\\pi r^3/3\\), so \\(dV/dt=4\\pi r^2(dr/dt)=${nfmt(ans)}\\,m^3/s\\).`)}
      if(fam===2){let xx=ri(3,8),yy=ri(4,9),dx=ri(1,3),dy=ri(1,3),r=Math.hypot(xx,yy),ans=(xx*dx+yy*dy)/r;return qNum(RR,title,`A point has \\(x=${xx}\\), \\(y=${yy}\\), with \\(dx/dt=${dx}\\) and \\(dy/dt=${dy}\\). For \\(r=\\sqrt{x^2+y^2}\\), find \\(dr/dt\\).`,ans,`Differentiate: \\(dr/dt=(x\\dot x+y\\dot y)/r=(${xx}(${dx})+${yy}(${dy}))/${nfmt(r)}=${nfmt(ans)}\\).`)}
      if(fam===3){let L=13,xp=5,yp=12,dy=-ri(1,3),ans=-yp/xp*dy;return qNum(RR,title,`A \\(${L}\\)-m ladder has foot distance \\(x=${xp}\\,m\\) and height \\(y=${yp}\\,m\\). If the top descends at \\(dy/dt=${dy}\\,m/s\\), find \\(dx/dt\\).`,ans,`From \\(x^2+y^2=L^2\\), \\(x\\dot x+y\\dot y=0\\), so \\(\\dot x=-(y/x)\\dot y=${nfmt(ans)}\\,m/s\\).`)}
      if(fam===4){let side=ri(2,8),ds=ri(1,4),ans=3*side*side*ds;return qNum(RR,title,`A cube has side \\(s=${side}\\,m\\) increasing at \\(ds/dt=${ds}\\,m/s\\). Find volume rate.`,ans,`\\(V=s^3\\), so \\(dV/dt=3s^2(ds/dt)=3(${side})^2(${ds})=${ans}\\,m^3/s\\).`)}
      if(fam===5){let r=ri(2,8),dv=ri(2,10),ans=dv/r;return qNum(RR,title,`A resistor has fixed \\(R=${r}\\,\\Omega\\), while voltage changes at \\(dV/dt=${dv}\\,V/s\\). Find \\(dI/dt\\).`,ans,`By Ohm's law \\(I=V/R\\), \\(dI/dt=(1/R)dV/dt=${dv}/${r}=${nfmt(ans)}\\,A/s\\).`)}
      if(fam===6){let I=ri(2,8),R=ri(2,10),di=ri(1,4),ans=2*I*R*di;return qNum(RR,title,`For a fixed resistor \\(R=${R}\\,\\Omega\\), current is \\(I=${I}\\,A\\) and increasing at \\(dI/dt=${di}\\,A/s\\). Find \\(dP/dt\\) for \\(P=I^2R\\).`,ans,`\\(dP/dt=2IR(dI/dt)=2(${I})(${R})(${di})=${ans}\\,W/s\\).`)}
      if(fam===7){let h=ri(2,8),dh=ri(1,4),ans=Math.PI*h*h*dh/4;return qNum(RR,title,`Water rises in a cone whose radius is always half its height. When \\(h=${h}\\,m\\) and \\(dh/dt=${dh}\\,m/s\\), find \\(dV/dt\\).`,ans,`With \\(r=h/2\\), \\(V=\\pi r^2h/3=\\pi h^3/12\\), so \\(dV/dt=\\pi h^2(dh/dt)/4=${nfmt(ans)}\\,m^3/s\\).`)}
      if(fam===8){let xx=ri(2,8),yy=ri(2,9),dy=ri(1,4),ans=xx/(xx*xx+yy*yy)*dy;return qNum(RR,title,`A point has fixed horizontal distance \\(x=${xx}\\,m\\), vertical position \\(y=${yy}\\,m\\), and \\(dy/dt=${dy}\\,m/s\\). For \\(\\theta=\\tan^{-1}(y/x)\\), find \\(d\\theta/dt\\).`,ans,`\\(d\\theta/dt=x\\dot y/(x^2+y^2)=${xx}(${dy})/(${xx*xx}+${yy*yy})=${nfmt(ans)}\\,rad/s\\).`)}
      let r=ri(2,8),dr=ri(1,4),ans=2*Math.PI*dr;return qNum(RR,title,`A circle's circumference is \\(C=2\\pi r\\) and radius increases at \\(dr/dt=${dr}\\,m/s\\). Find \\(dC/dt\\).`,ans,`\\(dC/dt=2\\pi(dr/dt)=2\\pi(${dr})=${nfmt(ans)}\\,m/s\\).`)
}


function makeRelatedScenario(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const person=pick(['Maya','Luis','Ari','Nina','Sam','Leah','Rafael','Tessa','Noah','Ivy']);
      if(fam===0){const r=ri(2,10),rate=ri(1,5)/10,ans=2*Math.PI*r*rate;return attachDiagram(qNum(RR,`Related rates: circle ${variant}`,`A circular water surface has radius \\(r=${r}\\,m\\) increasing at \\(dr/dt=${nfmt(rate)}\\,m/s\\). Find \\(dA/dt\\).`,ans,`From \\(A=\\pi r^2\\), \\(dA/dt=2\\pi r(dr/dt)=2\\pi(${r})(${nfmt(rate)})=${nfmt(ans)}\\,m^2/s\\).`),'relatedCircle','Top view of a circle with radius r; the radius is increasing at dr/dt and the area changes at dA/dt.')}
    if(fam===1){const r=ri(2,8),rate=ri(1,5)/10,ans=4*Math.PI*r*r*rate;return attachDiagram(qNum(RR,`Related rates: sphere ${variant}`,`A spherical balloon has radius \\(r=${r}\\,cm\\) increasing at \\(dr/dt=${nfmt(rate)}\\,cm/s\\). Find \\(dV/dt\\).`,ans,`\\(V=\\frac43\\pi r^3\\), so \\(dV/dt=4\\pi r^2(dr/dt)=4\\pi(${r})^2(${nfmt(rate)})=${nfmt(ans)}\\,cm^3/s\\).`),'relatedSphere','A sphere with radius r expands; radial growth dr/dt changes volume V.')}
    if(fam===2){const length=13,y=ri(3,8),x=Math.sqrt(length*length-y*y),ydot=-(ri(1,4)),ans=-y/x*ydot;return attachDiagram(qNum(RR,`Related rates: ladder ${variant}`,`A \\(${length}\\,m\\) ladder leans against a wall. Its foot is \\(x=${nfmt(x)}\\,m\\) from the wall while the top is \\(y=${y}\\,m\\) high and slides down at \\(dy/dt=${ydot}\\,m/s\\). Find \\(dx/dt\\).`,ans,`\\(x^2+y^2=L^2\\). Differentiate: \\(2x\\,dx/dt+2y\\,dy/dt=0\\), so \\(dx/dt=-(y/x)(dy/dt)=${nfmt(ans)}\\,m/s\\).`),'ladder','Right triangle formed by a wall, floor, and rigid ladder of fixed length; x is the foot distance and y is the height.')}
    if(fam===3){const r=ri(2,8),h=ri(5,20),rate=ri(1,4)/10,ans=2*Math.PI*r*h*rate;return qNum(RR,`Related rates: cylinder ${variant}`,`A cylinder has fixed height \\(h=${h}\\,m\\) and radius \\(r=${r}\\,m\\) increasing at \\(dr/dt=${nfmt(rate)}\\,m/s\\). Find \\(dV/dt\\).`,ans,`\\(V=\\pi r^2h\\), so \\(dV/dt=2\\pi rh(dr/dt)=2\\pi(${r})(${h})(${nfmt(rate)})=${nfmt(ans)}\\,m^3/s\\).`)}
    if(fam===4){const d=ri(20,80),dd=ri(1,8),ans=dd;return qNum(RR,`Related rates: separation ${variant}`,`Two robots move along perpendicular straight tracks. Their separation is \\(s=\\sqrt{x^2+y^2}\\). At an instant \\(x=3\\), \\(y=4\\), \\(dx/dt=0\\), and \\(dy/dt=${dd}\\). Find \\(ds/dt\\).`,ans,`Differentiate \\(s^2=x^2+y^2\\): \\(ds/dt=(x\\dot x+y\\dot y)/s=(3(0)+4(${dd}))/5=${nfmt(ans)}\\).`)}
    const r=ri(2,9),rate=ri(1,5)/10,ans=2*Math.PI*r*rate;return qNum(RR,`Related rates: circumference ${variant}`,`A circular track has radius \\(${r}\\,m\\) growing at \\(${nfmt(rate)}\\,m/s\\). Find rate of change of circumference.`,ans,`\\(C=2\\pi r\\), so \\(dC/dt=2\\pi dr/dt=2\\pi(${nfmt(rate)})=${nfmt(ans)}\\,m/s\\).`)
}


NUMERIC_GENERATOR_REGISTRY.related = [...numericSeedEntries(RR, RELATED_SUP_NAMES, 'Core', 'supplement-seed', makeRelatedSupplement),
    ...numericSeedEntries(RR, RELATED_EXTRA_NAMES, 'Applied', 'applied-seed', makeRelatedExtraSeed, 11),
    numericEntry('related',"Circle-area related rate · family 01 (randomized variant)","related-family-01",()=>makeRelatedExpansionFamily01("Circle-area related rate · family 01 (randomized variant)")),
    numericEntry('related',"Sphere-volume related rate · family 02 (randomized variant)","related-family-02",()=>makeRelatedExpansionFamily02("Sphere-volume related rate · family 02 (randomized variant)")),
    numericEntry('related',"Cone-volume related rate · family 03 (randomized variant)","related-family-03",()=>makeRelatedExpansionFamily03("Cone-volume related rate · family 03 (randomized variant)")),
    numericEntry('related',"Ladder related rate · family 04 (randomized variant)","related-family-04",()=>makeRelatedExpansionFamily04("Ladder related rate · family 04 (randomized variant)")),
    numericEntry('related',"Distance and range rate · family 05 (randomized variant)","related-family-05",()=>makeRelatedExpansionFamily05("Distance and range rate · family 05 (randomized variant)")),
    numericEntry('related',"Shadow-length related rate · family 06 (randomized variant)","related-family-06",()=>makeRelatedExpansionFamily06("Shadow-length related rate · family 06 (randomized variant)")),
    numericEntry('related',"Circumference rate · family 07 (randomized variant)","related-family-07",()=>makeRelatedExpansionFamily07("Circumference rate · family 07 (randomized variant)")),
    numericEntry('related',"Cube-volume related rate · family 08 (randomized variant)","related-family-08",()=>makeRelatedExpansionFamily08("Cube-volume related rate · family 08 (randomized variant)")),
    numericEntry('related',"Electrical power rate · family 09 (randomized variant)","related-family-09",()=>makeRelatedExpansionFamily09("Electrical power rate · family 09 (randomized variant)")),
    numericEntry('related',"Angular-position rate · family 10 (randomized variant)","related-family-10",()=>makeRelatedExpansionFamily10("Angular-position rate · family 10 (randomized variant)")),
    numericEntry('related',"Square-area rate · family 11 (randomized variant)","related-family-11",()=>makeRelatedExpansionFamily11("Square-area rate · family 11 (randomized variant)")),
    numericEntry('related',"Sphere surface-area rate · family 12 (randomized variant)","related-family-12",()=>makeRelatedExpansionFamily12("Sphere surface-area rate · family 12 (randomized variant)")),
    numericEntry('related',"Disk area and circumference rate · family 13 (randomized variant)","related-family-13",()=>makeRelatedExpansionFamily13("Disk area and circumference rate · family 13 (randomized variant)")),
    numericEntry('related',"Radar range rate · family 14 (randomized variant)","related-family-14",()=>makeRelatedExpansionFamily14("Radar range rate · family 14 (randomized variant)")),
    numericEntry('related',"Charge-voltage product rate · family 15 (randomized variant)","related-family-15",()=>makeRelatedExpansionFamily15("Charge-voltage product rate · family 15 (randomized variant)")),
    numericEntry('related',"Ladder speed magnitude · family 16 (randomized variant)","related-family-16",()=>makeRelatedExpansionFamily16("Ladder speed magnitude · family 16 (randomized variant)")),
    numericEntry('related',"Cylinder lateral area · family 17 (randomized variant)","related-family-17",()=>makeRelatedExpansionFamily17("Cylinder lateral area · family 17 (randomized variant)")),
    numericEntry('related',"Sphere surface-area rate · family 18 (randomized variant)","related-family-18",()=>makeRelatedExpansionFamily18("Sphere surface-area rate · family 18 (randomized variant)")),
    numericEntry('related',"Square face-area rate · family 19 (randomized variant)","related-family-19",()=>makeRelatedExpansionFamily19("Square face-area rate · family 19 (randomized variant)")),
    numericEntry('related',"Rectangle and square area rate · family 20 (randomized variant)","related-family-20",()=>makeRelatedExpansionFamily20("Rectangle and square area rate · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(RR,'Field scenario · Ladder clearance rate','scenario-related-rates-ladder-clearance',()=>makeRelatedScenario(2));
appendNumericRecipe(RR,'Field scenario · Expanding water-surface area','scenario-related-rates-water-surface',()=>makeRelatedScenario(0));
appendNumericRecipe(RR,'Field scenario · Spherical weather balloon volume rate','scenario-related-rates-weather-balloon',()=>makeRelatedScenario(1));

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('related','Additional · Rate of change of circular area','related-topup-01',()=>{
  const r=rand(1,12),dr=rand(.1,2),ans=2*Math.PI*r*dr;
  return qNum(RR,'Rate of change of circular area',`A circular sensor footprint has radius \(r=${nfmt(r)}\,m\) growing at \(dr/dt=${nfmt(dr)}\,m/s\). Find \(dA/dt\).`,ans,`Since \(A=\pi r^2\), \(dA/dt=2\pi r\,dr/dt=2\pi(${nfmt(r)})(${nfmt(dr)})=${nfmt(ans)}\,m^2/s\).`);
});
appendNumericRecipe('related','Additional · Rate of change of spherical volume','related-topup-02',()=>{
  const r=rand(.5,8),dr=rand(.05,1.5),ans=4*Math.PI*r*r*dr;
  return qNum(RR,'Rate of change of spherical volume',`A spherical weather balloon has radius \(r=${nfmt(r)}\,m\) increasing at \(dr/dt=${nfmt(dr)}\,m/s\). Find \(dV/dt\).`,ans,`For \(V=4\pi r^3/3\), \(dV/dt=4\pi r^2 dr/dt=4\pi(${nfmt(r)})^2(${nfmt(dr)})=${nfmt(ans)}\,m^3/s\).`);
});
appendNumericRecipe('related','Additional · Rate of change of a fixed-height cylinder volume','related-topup-03',()=>{
  const r=rand(.5,6),h=ri(2,15),dr=rand(.1,1.2),ans=2*Math.PI*r*h*dr;
  return qNum(RR,'Rate of change of a fixed-height cylinder volume',`A cylindrical tank has fixed height \(h=${h}\,m\), radius \(r=${nfmt(r)}\,m\), and radius growth rate \(dr/dt=${nfmt(dr)}\,m/s\). Find \(dV/dt\).`,ans,`With \(V=\pi r^2h\) and constant \(h\), \(dV/dt=2\pi rh\,dr/dt=2\pi(${nfmt(r)})(${h})(${nfmt(dr)})=${nfmt(ans)}\,m^3/s\).`);
});
appendNumericRecipe('related','Additional · Vertical speed of a sliding ladder','related-topup-04',()=>{
  const L=ri(5,15),x=ri(2,L-2),dx=rand(.1,1.5),y=Math.sqrt(L*L-x*x),ans=-x/y*dx;
  return qNum(RR,'Vertical speed of a sliding ladder',`A ladder of length \(${L}\,m\) has its foot \(x=${x}\,m\) from a wall and is sliding outward at \(dx/dt=${nfmt(dx)}\,m/s\). Find the signed vertical rate \(dy/dt\).`,ans,`From \(x^2+y^2=L^2\), differentiate: \(dy/dt=-(x/y)(dx/dt)\). Here \(y=\sqrt{${L}^2-${x}^2}=${nfmt(y)}\), so \(dy/dt=${nfmt(ans)}\,m/s\).`);
});
appendNumericRecipe('related','Additional · Rate of change of spherical surface area','related-topup-05',()=>{
  const r=rand(.8,9),dr=rand(.05,1.2),ans=8*Math.PI*r*dr;
  return qNum(RR,'Rate of change of spherical surface area',`A spherical tank has radius \(r=${nfmt(r)}\,m\) increasing at \(dr/dt=${nfmt(dr)}\,m/s\). Find the rate of change of surface area.`,ans,`For \(A=4\pi r^2\), \(dA/dt=8\pi r\,dr/dt=8\pi(${nfmt(r)})(${nfmt(dr)})=${nfmt(ans)}\,m^2/s\).`);
});
