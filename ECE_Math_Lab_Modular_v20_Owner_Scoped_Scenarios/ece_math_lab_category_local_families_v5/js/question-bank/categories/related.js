/* related: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_RELATED = 'related';
const RR = NAMESPACE_RELATED;
function makeRelatedExpansionFamily01(title){
  const v=ri(0,1)===1;
  const radius=ri(2,8),radiusRate=rand(.2,1.5),answer=v?2*Math.PI*radius*radiusRate:Math.PI*radius*radius;
  const prompt=v?`A circular oil spill has radius \\(r=${radius}\\,\\mathrm{m}\\) and the radius increases at \\(dr/dt=${nfmt(radiusRate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the area growth rate \\(dA/dt\\).`:`A circular oil spill has radius \\(r=${radius}\\,\\mathrm{m}\\). Find its area \\(A\\).`;
  const explanation=v?`Since \\(A=\\pi r^2\\), \\(dA/dt=2\\pi r(dr/dt)=${nfmt(answer)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`:`\\(A=\\pi r^2=${nfmt(answer)}\\,\\mathrm{m}^2\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'m^2/s':'m^2'});
}
function makeRelatedExpansionFamily02(title){
  const v=ri(0,1)===1;
  const radius=ri(2,7),radiusRate=rand(.1,.8),answer=v?4*Math.PI*radius*radius*radiusRate:4*Math.PI*radius**3/3;
  const prompt=v?`A sphere has radius \\(r=${radius}\\,\\mathrm{cm}\\), increasing at \\(dr/dt=${nfmt(radiusRate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find its volume rate \\(dV/dt\\).`:`Find the volume of a sphere with radius \\(r=${radius}\\,\\mathrm{cm}\\).`;
  const explanation=v?`\\(dV/dt=4\\pi r^2(dr/dt)=${nfmt(answer)}\\,\\mathrm{cm}^3/\\mathrm{s}\\).`:`\\(V=\\frac43\\pi r^3=${nfmt(answer)}\\,\\mathrm{cm}^3\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'cm^3/s':'cm^3'});
}
function makeRelatedExpansionFamily03(title){
  const v=ri(0,1)===1;
  const radius=ri(2,6),height=ri(3,10),radiusRate=rand(.1,.7),heightRate=rand(.2,.8);
  const answer=v?Math.PI*(radius*radius*heightRate+2*radius*height*radiusRate)/3:Math.PI*radius*radius*height/3;
  const prompt=v?`A cone has radius \\(r=${radius}\\,\\mathrm{cm}\\) and height \\(h=${height}\\,\\mathrm{cm}\\). At this instant, \\(dr/dt=${nfmt(radiusRate)}\\,\\mathrm{cm}/\\mathrm{s}\\) and \\(dh/dt=${nfmt(heightRate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find \\(dV/dt\\).`:`Find the volume of a cone with radius \\(r=${radius}\\,\\mathrm{cm}\\) and height \\(h=${height}\\,\\mathrm{cm}\\).`;
  const explanation=v?`From \\(V=\\pi r^2h/3\\), \\(dV/dt=\\pi(2rh\\,dr/dt+r^2\\,dh/dt)/3=${nfmt(answer)}\\,\\mathrm{cm}^3/\\mathrm{s}\\).`:`\\(V=\\pi r^2h/3=${nfmt(answer)}\\,\\mathrm{cm}^3\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'cm^3/s':'cm^3'});
}
function makeRelatedExpansionFamily04(title){
  const v=ri(0,1)===1;
  const ladder=ri(10,20),base=ri(3,Math.floor(ri(10,20)*.7));
  const baseSafe=Math.min(base,Math.floor(ladder*.7)),height=Math.sqrt(ladder*ladder-baseSafe*baseSafe),heightGiven=roundSigNumber(height,4),downwardSpeed=rand(.1,.8);
  const answer=v?(heightGiven/baseSafe)*downwardSpeed:Math.sqrt(ladder*ladder-baseSafe*baseSafe);
  const prompt=v?`A \\(${ladder}\\,\\mathrm{m}\\) ladder leans against a wall. Its foot is \\(x=${baseSafe}\\,\\mathrm{m}\\) from the wall and its top is \\(y=${nfmt(heightGiven)}\\,\\mathrm{m}\\) high. The top slides down at \\(dy/dt=-${nfmt(downwardSpeed)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the outward speed \\(dx/dt\\).`:`A \\(${ladder}\\,\\mathrm{m}\\) ladder leans against a wall. Its foot is \\(x=${baseSafe}\\,\\mathrm{m}\\) from the wall. Find the height \\(y\\) of its top.`;
  const explanation=v?`Differentiate \\(x^2+y^2=L^2\\): \\(dx/dt=-(y/x)(dy/dt)=${nfmt(answer)}\\,\\mathrm{m}/\\mathrm{s}\\).`:`\\(y=\\sqrt{L^2-x^2}=${nfmt(answer)}\\,\\mathrm{m}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'m/s':'m'});
}
function makeRelatedExpansionFamily05(title){
  const v=ri(0,1)===1;
  const x=ri(3,12),y=ri(4,12),dx=rand(.2,1.2),dy=rand(.2,1.2),range=Math.hypot(x,y);
  const answer=v?(x*dx+y*dy)/range:range;
  const prompt=v?`A radar tracks a target at coordinates \\(x=${x}\\,\\mathrm{m}\\), \\(y=${y}\\,\\mathrm{m}\\). Its coordinates change at \\(dx/dt=${nfmt(dx)}\\,\\mathrm{m}/\\mathrm{s}\\) and \\(dy/dt=${nfmt(dy)}\\,\\mathrm{m}/\\mathrm{s}\\). Find range rate \\(dr/dt\\).`:`A target is at coordinates \\(x=${x}\\,\\mathrm{m}\\), \\(y=${y}\\,\\mathrm{m}\\). Find its range \\(r\\) from the origin.`;
  const explanation=v?`With \\(r=\\sqrt{x^2+y^2}\\), \\(dr/dt=(x\\,dx/dt+y\\,dy/dt)/r=${nfmt(answer)}\\,\\mathrm{m}/\\mathrm{s}\\).`:`\\(r=\\sqrt{x^2+y^2}=${nfmt(answer)}\\,\\mathrm{m}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'m/s':'m'});
}
function makeRelatedExpansionFamily06(title){
  const v=ri(0,1)===1;
  const height=ri(1,5),distance=ri(2,8),distanceRate=rand(.2,1),answer=v?height*distanceRate/(distance*distance):height/distance;
  const prompt=v?`An object of fixed height \\(h=${height}\\,\\mathrm{m}\\) is observed from a point whose horizontal distance is \\(x=${distance}\\,\\mathrm{m}\\) and is increasing at \\(dx/dt=${nfmt(distanceRate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the magnitude of the rate of change of the ratio \\(h/x\\).`:`Compute the dimensionless ratio \\(h/x\\) for object height \\(h=${height}\\,\\mathrm{m}\\) and horizontal distance \\(x=${distance}\\,\\mathrm{m}\\).`;
  const explanation=v?`\\(\\left|d(h/x)/dt\\right|=h(dx/dt)/x^2=${nfmt(answer)}\\,\\mathrm{s}^{-1}\\).`:`\\(h/x=${nfmt(answer)}\\) (dimensionless).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'s^-1':''});
}
function makeRelatedExpansionFamily07(title){
  const v=ri(0,1)===1;
  const radius=ri(2,8),radiusRate=rand(.1,1),answer=v?2*Math.PI*radiusRate:2*Math.PI*radius;
  const prompt=v?`A circle's radius grows at \\(dr/dt=${nfmt(radiusRate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find its circumference growth rate \\(dC/dt\\).`:`Find the circumference of a circle with radius \\(r=${radius}\\,\\mathrm{cm}\\).`;
  const explanation=v?`Since \\(C=2\\pi r\\), \\(dC/dt=2\\pi(dr/dt)=${nfmt(answer)}\\,\\mathrm{cm}/\\mathrm{s}\\).`:`\\(C=2\\pi r=${nfmt(answer)}\\,\\mathrm{cm}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'cm/s':'cm'});
}
function makeRelatedExpansionFamily08(title){
  const v=ri(0,1)===1;
  const edge=ri(2,8),edgeRate=rand(.1,.8),answer=v?3*edge*edge*edgeRate:edge**3;
  const prompt=v?`A cube has edge length \\(a=${edge}\\,\\mathrm{cm}\\), increasing at \\(da/dt=${nfmt(edgeRate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find volume rate \\(dV/dt\\).`:`Find the volume of a cube with edge length \\(a=${edge}\\,\\mathrm{cm}\\).`;
  const explanation=v?`\\(V=a^3\\), so \\(dV/dt=3a^2(da/dt)=${nfmt(answer)}\\,\\mathrm{cm}^3/\\mathrm{s}\\).`:`\\(V=a^3=${nfmt(answer)}\\,\\mathrm{cm}^3\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'cm^3/s':'cm^3'});
}
function makeRelatedExpansionFamily09(title){
  const v=ri(0,1)===1;
  const voltage=ri(5,24),current=ri(2,10),voltageRate=rand(.2,1.4),currentRate=rand(.1,.8),answer=v?voltage*currentRate+current*voltageRate:voltage*current;
  const prompt=v?`A circuit has \\(V=${voltage}\\,\\mathrm{V}\\), \\(I=${current}\\,\\mathrm{A}\\), \\(dV/dt=${nfmt(voltageRate)}\\,\\mathrm{V}/\\mathrm{s}\\), and \\(dI/dt=${nfmt(currentRate)}\\,\\mathrm{A}/\\mathrm{s}\\). Find \\(dP/dt\\).`:`Find electrical power for voltage \\(V=${voltage}\\,\\mathrm{V}\\) and current \\(I=${current}\\,\\mathrm{A}\\).`;
  const explanation=v?`Since \\(P=VI\\), \\(dP/dt=V(dI/dt)+I(dV/dt)=${nfmt(answer)}\\,\\mathrm{W}/\\mathrm{s}\\).`:`\\(P=VI=${nfmt(answer)}\\,\\mathrm{W}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'W/s':'W'});
}
function makeRelatedExpansionFamily10(title){
  const v=ri(0,1)===1;
  const theta=pick([Math.PI/6,Math.PI/4,Math.PI/3]),omega=rand(.2,1.5),radius=ri(2,8),answer=v?radius*omega*Math.cos(theta):radius*omega;
  const prompt=v?`A point moves on a circle of radius \\(r=${radius}\\,\\mathrm{m}\\) at angular speed \\(\\omega=${nfmt(omega)}\\,\\mathrm{rad}/\\mathrm{s}\\). At angle \\(\\theta=${nfmt(theta)}\\,\\mathrm{rad}\\), find the magnitude of its horizontal velocity component \\(r\\omega\\cos\\theta\\).`:`A point moves on a circle of radius \\(r=${radius}\\,\\mathrm{m}\\) at angular speed \\(\\omega=${nfmt(omega)}\\,\\mathrm{rad}/\\mathrm{s}\\). Find its tangential speed.`;
  const explanation=v?`\\(|v_x|=r\\omega|\\cos\\theta|=${nfmt(answer)}\\,\\mathrm{m}/\\mathrm{s}\\).`:`\\(v_t=r\\omega=${nfmt(answer)}\\,\\mathrm{m}/\\mathrm{s}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:'m/s'});
}
function makeRelatedExpansionFamily11(title){
  const v=ri(0,1)===1;
  const side=ri(2,8),sideRate=rand(.1,.8),answer=v?2*side*sideRate:side*side;
  const prompt=v?`A square has side length \\(s=${side}\\,\\mathrm{m}\\), increasing at \\(ds/dt=${nfmt(sideRate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find its area growth rate.`:`Find the area of a square with side length \\(s=${side}\\,\\mathrm{m}\\).`;
  const explanation=v?`\\(A=s^2\\), so \\(dA/dt=2s(ds/dt)=${nfmt(answer)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`:`\\(A=s^2=${nfmt(answer)}\\,\\mathrm{m}^2\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'m^2/s':'m^2'});
}
function makeRelatedExpansionFamily12(title){
  const v=ri(0,1)===1;
  const radius=ri(2,8),radiusRate=rand(.1,.7),answer=v?8*Math.PI*radius*radiusRate:4*Math.PI*radius*radius*radiusRate;
  const prompt=v?`A sphere has radius \\(r=${radius}\\,\\mathrm{cm}\\), increasing at \\(dr/dt=${nfmt(radiusRate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find its surface-area rate \\(dA/dt\\).`:`A sphere has radius \\(r=${radius}\\,\\mathrm{cm}\\), increasing at \\(dr/dt=${nfmt(radiusRate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find its volume rate \\(dV/dt\\).`;
  const explanation=v?`For \\(A=4\\pi r^2\\), \\(dA/dt=8\\pi r(dr/dt)=${nfmt(answer)}\\,\\mathrm{cm}^2/\\mathrm{s}\\).`:`For \\(V=\\frac43\\pi r^3\\), \\(dV/dt=4\\pi r^2(dr/dt)=${nfmt(answer)}\\,\\mathrm{cm}^3/\\mathrm{s}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'cm^2/s':'cm^3/s'});
}
function makeRelatedExpansionFamily13(title){
  const v=ri(0,1)===1;
  const radius=ri(2,7),radiusRate=rand(.1,.6),answer=v?2*Math.PI*radiusRate:Math.PI*radius*radius;
  const prompt=v?`A circle has radius \\(r=${radius}\\,\\mathrm{m}\\), increasing at \\(dr/dt=${nfmt(radiusRate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find circumference rate \\(dC/dt\\).`:`Find the area of a disk with radius \\(r=${radius}\\,\\mathrm{m}\\).`;
  const explanation=v?`Since \\(C=2\\pi r\\), \\(dC/dt=2\\pi(dr/dt)=${nfmt(answer)}\\,\\mathrm{m}/\\mathrm{s}\\).`:`\\(A=\\pi r^2=${nfmt(answer)}\\,\\mathrm{m}^2\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'m/s':'m^2'});
}
function makeRelatedExpansionFamily14(title){
  const v=ri(0,1)===1;
  const x=ri(3,10),y=ri(4,12),dx=rand(.2,1),dy=rand(.2,1),range=Math.hypot(x,y),answer=v?(x*dx+y*dy)/range:range;
  const prompt=v?`A ship is at \\(x=${x}\\,\\mathrm{km}\\), \\(y=${y}\\,\\mathrm{km}\\). Its coordinates change at \\(dx/dt=${nfmt(dx)}\\,\\mathrm{km}/\\mathrm{h}\\) and \\(dy/dt=${nfmt(dy)}\\,\\mathrm{km}/\\mathrm{h}\\). Find its range rate \\(dr/dt\\).`:`A ship is at coordinates \\(x=${x}\\,\\mathrm{km}\\), \\(y=${y}\\,\\mathrm{km}\\). Find its distance from the origin.`;
  const explanation=v?`\\(dr/dt=(x(dx/dt)+y(dy/dt))/r=${nfmt(answer)}\\,\\mathrm{km}/\\mathrm{h}\\).`:`\\(r=\\sqrt{x^2+y^2}=${nfmt(answer)}\\,\\mathrm{km}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'km/h':'km'});
}
function makeRelatedExpansionFamily15(title){
  const v=ri(0,1)===1;
  const charge=ri(2,8),voltage=ri(2,10),chargeRate=rand(.1,1),voltageRate=rand(.1,1),answer=v?charge*voltageRate+voltage*chargeRate:charge*voltage;
  const prompt=v?`Charge and voltage change with time. At this instant, \\(q=${charge}\\,\\mathrm{C}\\), \\(V=${voltage}\\,\\mathrm{V}\\), \\(dq/dt=${nfmt(chargeRate)}\\,\\mathrm{C}/\\mathrm{s}\\), and \\(dV/dt=${nfmt(voltageRate)}\\,\\mathrm{V}/\\mathrm{s}\\). Find \\(d(qV)/dt\\).`:`Find the electrical energy \\(U=qV\\) for charge \\(q=${charge}\\,\\mathrm{C}\\) at potential difference \\(V=${voltage}\\,\\mathrm{V}\\).`;
  const explanation=v?`By the product rule, \\(d(qV)/dt=V(dq/dt)+q(dV/dt)=${nfmt(answer)}\\,\\mathrm{W}\\).`:`\\(U=qV=${nfmt(answer)}\\,\\mathrm{J}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'W':'J'});
}
function makeRelatedExpansionFamily16(title){
  const v=ri(0,1)===1;
  const x=ri(2,7),y=ri(3,9),downwardSpeed=rand(.1,.6),answer=v?(y/x)*downwardSpeed:Math.sqrt(x*x+y*y);
  const prompt=v?`A fixed-length ladder has base distance \\(x=${x}\\,\\mathrm{m}\\) and height \\(y=${y}\\,\\mathrm{m}\\). The top descends at \\(dy/dt=-${nfmt(downwardSpeed)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the magnitude of the base speed.`:`A ladder forms a right triangle with base distance \\(x=${x}\\,\\mathrm{m}\\) and height \\(y=${y}\\,\\mathrm{m}\\). Find its length.`;
  const explanation=v?`Differentiating \\(x^2+y^2=L^2\\) gives \\(|dx/dt|=(y/x)|dy/dt|=${nfmt(answer)}\\,\\mathrm{m}/\\mathrm{s}\\).`:`\\(L=\\sqrt{x^2+y^2}=${nfmt(answer)}\\,\\mathrm{m}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'m/s':'m'});
}
function makeRelatedExpansionFamily17(title){
  const v=ri(0,1)===1;
  const radius=ri(1,5),height=ri(1,5),answer=v?2*Math.PI*radius*height:Math.PI*radius*height;
  const prompt=v?`A cylindrical surface has radius \\(r=${radius}\\,\\mathrm{m}\\) and height \\(h=${height}\\,\\mathrm{m}\\). Find its lateral area \\(2\\pi rh\\).`:`A circular region has radius \\(r=${radius}\\,\\mathrm{m}\\) and an associated length \\(h=${height}\\,\\mathrm{m}\\). Evaluate \\(\\pi rh\\).`;
  const explanation=v?`Lateral cylindrical area is \\(2\\pi rh=${nfmt(answer)}\\,\\mathrm{m}^2\\).`:`\\(\\pi rh=${nfmt(answer)}\\,\\mathrm{m}^2\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:'m^2'});
}
function makeRelatedExpansionFamily18(title){
  const v=ri(0,1)===1;
  const radius=ri(2,8),radiusRate=rand(.1,.7),answer=v?8*Math.PI*radius*radiusRate:4*Math.PI*radius*radius;
  const prompt=v?`A sphere has radius \\(r=${radius}\\,\\mathrm{m}\\) increasing at \\(dr/dt=${nfmt(radiusRate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the surface-area growth rate.`:`Find the surface area of a sphere of radius \\(r=${radius}\\,\\mathrm{m}\\).`;
  const explanation=v?`For \\(A=4\\pi r^2\\), \\(dA/dt=8\\pi r(dr/dt)=${nfmt(answer)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`:`\\(A=4\\pi r^2=${nfmt(answer)}\\,\\mathrm{m}^2\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'m^2/s':'m^2'});
}
function makeRelatedExpansionFamily19(title){
  const v=ri(0,1)===1;
  const edge=ri(2,7),edgeRate=rand(.1,.7),answer=v?2*edge*edgeRate:edge*edge;
  const prompt=v?`A cube has edge length \\(a=${edge}\\,\\mathrm{m}\\), increasing at \\(da/dt=${nfmt(edgeRate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the rate of change of one square face's area.`:`Find the area of one square face of a cube with edge length \\(a=${edge}\\,\\mathrm{m}\\).`;
  const explanation=v?`For face area \\(A=a^2\\), \\(dA/dt=2a(da/dt)=${nfmt(answer)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`:`\\(A=a^2=${nfmt(answer)}\\,\\mathrm{m}^2\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:v?'m^2/s':'m^2'});
}
function makeRelatedExpansionFamily20(title){
  const v=ri(0,1)===1;
  const side=ri(1,6),lengthRate=rand(.2,1.2),answer=v?2*side*lengthRate:side*lengthRate;
  const prompt=v?`A square has side length \\(s=${side}\\,\\mathrm{m}\\), increasing at \\(ds/dt=${nfmt(lengthRate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find its area growth rate.`:`A rectangle has fixed width \\(w=${side}\\,\\mathrm{m}\\); its length grows at \\(d\ell/dt=${nfmt(lengthRate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the area growth rate.`;
  const explanation=v?`\\(A=s^2\\), so \\(dA/dt=2s(ds/dt)=${nfmt(answer)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`:`\\(A=w\\ell\\), so \\(dA/dt=w(d\ell/dt)=${nfmt(answer)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`;
  return qNum(RR,title,prompt,answer,explanation,'number',{quantUnit:'m^2/s'});
}
/* Additional category-local family variant implementations, adjacent to the main numeric family makers. */




/* Individual family variant implementations; no indexed dispatch remains. */
function makeRelatedFamily21VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let r=ri(2,8),rate=rand(.2,3),ans=2*Math.PI*r*rate;
    return qNum(RR,title,`A circle radius increases at \\(dr/dt=${nfmt(rate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dA/dt\\) when \\(r=${r}\\,\\mathrm{m}\\).`,ans,`\\(A=\\pi r^2\\Rightarrow dA/dt=2\\pi r(dr/dt)=${nfmt(ans)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`)
  }
}
function makeRelatedFamily22VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let r=ri(1,5),rate=rand(.1,1.8),ans=4*Math.PI*r*r*rate;
    return qNum(RR,title,`A sphere radius grows at \\(dr/dt=${nfmt(rate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find \\(dV/dt\\) when \\(r=${r}\\,\\mathrm{cm}\\).`,ans,`\\(V=4\\pi r^3/3\\Rightarrow dV/dt=4\\pi r^2dr/dt=${nfmt(ans)}\\,\\mathrm{cm}^3/s\\).`)
  }
}
function makeRelatedFamily23VariantA(title){
  const radius=ri(1,5),radiusRate=rand(.1,1.5),answer=2*Math.PI*radius*radius*radiusRate;
  return qNum(RR,title,`A cone always has height twice its radius, so its volume is \\(V=2\\pi r^3/3\\). At an instant, its radius is \\(r=${radius}\\,\\mathrm{cm}\\) and increases at \\(dr/dt=${nfmt(radiusRate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find \\(dV/dt\\).`,answer,`Differentiate \\(V=2\\pi r^3/3\\): \\(dV/dt=2\\pi r^2(dr/dt)=${nfmt(answer)}\\,\\mathrm{cm}^3/\\mathrm{s}\\).`,'number',{quantUnit:'cm^3/s'});
}
function makeRelatedFamily24VariantA(title){
  const length=ri(5,15),base=ri(1,length-1),height=Math.sqrt(length*length-base*base),baseSpeed=rand(.1,1.5),answer=-base/height*baseSpeed;
  return qNum(RR,title,`A ladder of length \\(L=${length}\\,\\mathrm{m}\\) rests against a wall. At this instant the foot is \\(x=${base}\\,\\mathrm{m}\\) from the wall and moves away at \\(dx/dt=${nfmt(baseSpeed)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the signed vertical velocity \\(dy/dt\\) of the top.`,answer,`From \\(x^2+y^2=L^2\\), \\(y=\\sqrt{L^2-x^2}=${nfmt(height)}\\,\\mathrm{m}\\) and \\(dy/dt=-x(dx/dt)/y=${nfmt(answer)}\\,\\mathrm{m}/\\mathrm{s}\\).`,'number',{quantUnit:'m/s'});
}
function makeRelatedFamily25VariantA(title){
  const x=ri(3,10),y=ri(3,10),xRate=rand(.2,2),yRate=rand(.2,2),range=Math.hypot(x,y),answer=(x*xRate+y*yRate)/range;
  return qNum(RR,title,`A moving point has coordinates \\(x=${x}\\,\\mathrm{m}\\) and \\(y=${y}\\,\\mathrm{m}\\), with \\(dx/dt=${nfmt(xRate)}\\,\\mathrm{m}/\\mathrm{s}\\) and \\(dy/dt=${nfmt(yRate)}\\,\\mathrm{m}/\\mathrm{s}\\). If \\(r=\\sqrt{x^2+y^2}\\), find \\(dr/dt\\).`,answer,`\\(dr/dt=(x(dx/dt)+y(dy/dt))/r=${nfmt(answer)}\\,\\mathrm{m}/\\mathrm{s}\\).`,'number',{quantUnit:'m/s'});
}
function makeRelatedFamily26VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let person=ri(1,2),light=ri(5,10),distance=ri(2,8),ds=rand(.2,1.5),ans=person/(light-person)*ds;
    return qNum(RR,title,`A person of height \\(${person}\\,\\mathrm{m}\\) walks away from a lamp of height \\(${light}\\,\\mathrm{m}\\) at \\(ds/dt=${nfmt(ds)}\\,\\mathrm{m}/\\mathrm{s}\\). Using similar triangles, find the rate of change of shadow length.`,ans,`Let shadow length be \\(x\\). Similar triangles give \\(x=hs/(H-h)\\); hence \\(dx/dt=h/(H-h)ds/dt=${nfmt(ans)}\\,\\mathrm{m}/\\mathrm{s}\\).`)
  }
}
function makeRelatedFamily27VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let rate=rand(.2,2.5);
    return qNum(RR,title,`A circle's radius grows at \\(dr/dt=${nfmt(rate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find the rate of change of circumference.`,2*Math.PI*rate,`\\(C=2\\pi r\\Rightarrow dC/dt=2\\pi dr/dt=${nfmt(2*Math.PI*rate)}\\,\\mathrm{cm}/\\mathrm{s}\\).`)
  }
}
function makeRelatedFamily28VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let side=ri(2,8),rate=rand(.1,1.5),ans=3*side*side*rate;
    return qNum(RR,title,`A cube side grows at \\(ds/dt=${nfmt(rate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find \\(dV/dt\\) when \\(s=${side}\\,\\mathrm{cm}\\).`,ans,`\\(V=s^3\\Rightarrow dV/dt=3s^2ds/dt=${nfmt(ans)}\\,\\mathrm{cm}^3/s\\).`)
  }
}
function makeRelatedFamily29VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let cur=ri(1,8),res=ri(2,20),rate=rand(.1,3),ans=cur*cur*rate;
    return qNum(RR,title,`Current is constant at \\(I=${cur}\\,\\mathrm{A}\\). Resistance changes at \\(dR/dt=${nfmt(rate)}\\,\\Omega/s\\). Find \\(dP/dt\\) for \\(P=I^2R\\).`,ans,`With constant current, \\(dP/dt=I^2(dR/dt)=${cur}^2(${nfmt(rate)})=${nfmt(ans)}\\,\\mathrm{W}/s\\).`)
  }
}
function makeRelatedFamily30VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    {let xx=ri(2,10),yy=ri(2,10),dx=rand(.1,1.5),dy=rand(.1,1.5),ans=(xx*dy-yy*dx)/(xx*xx+yy*yy);return qNum(RR,title,`A point has \\(x=${xx}, y=${yy}\\), with \\(dx/dt=${nfmt(dx)}, dy/dt=${nfmt(dy)}\\). Find \\(d\\theta/dt\\) for \\(\\theta=\\operatorname{atan2}(y,x)\\).`,ans,`\\(d\\theta/dt=(x(dy/dt)-y(dx/dt))/(x^2+y^2)=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`)}
  }
}


/* Individual family variant implementations; no indexed dispatch remains. */
function makeRelatedFamily31VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let r=ri(2,8),dr=ri(1,5),ans=2*Math.PI*r*dr;
    return qNum(RR,title,`A circle's radius is \\(r=${r}\\,\\mathrm{m}\\) and grows at \\(dr/dt=${dr}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dA/dt\\) in square metres per second.`,ans,`\\(A=\\pi r^2\\), so \\(dA/dt=2\\pi r(dr/dt)=2\\pi(${r})(${dr})=${nfmt(ans)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`)
  }
}
function makeRelatedFamily32VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let r=ri(2,7),dr=ri(1,4),ans=4*Math.PI*r*r*dr;
    return qNum(RR,title,`A sphere has radius \\(r=${r}\\,\\mathrm{m}\\) increasing at \\(dr/dt=${dr}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dV/dt\\).`,ans,`\\(V=4\\pi r^3/3\\), so \\(dV/dt=4\\pi r^2(dr/dt)=${nfmt(ans)}\\,\\mathrm{m}^3/\\mathrm{s}\\).`)
  }
}
function makeRelatedFamily33VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let xx=ri(3,8),yy=ri(4,9),dx=ri(1,3),dy=ri(1,3),r=Math.hypot(xx,yy),ans=(xx*dx+yy*dy)/r;
    return qNum(RR,title,`A point has \\(x=${xx}\\), \\(y=${yy}\\), with \\(dx/dt=${dx}\\) and \\(dy/dt=${dy}\\). For \\(r=\\sqrt{x^2+y^2}\\), find \\(dr/dt\\).`,ans,`Differentiate: \\(dr/dt=(x\\dot x+y\\dot y)/r=(${xx}(${dx})+${yy}(${dy}))/${nfmt(r)}=${nfmt(ans)}\\).`)
  }
}
function makeRelatedFamily34VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let L=13,xp=5,yp=12,dy=-ri(1,3),ans=-yp/xp*dy;
    return qNum(RR,title,`A \\(${L}\\)-m ladder has foot distance \\(x=${xp}\\,\\mathrm{m}\\) and height \\(y=${yp}\\,\\mathrm{m}\\). If the top descends at \\(dy/dt=${dy}\\,\\mathrm{m}/\\mathrm{s}\\), find \\(dx/dt\\).`,ans,`From \\(x^2+y^2=L^2\\), \\(x\\dot x+y\\dot y=0\\), so \\(\\dot x=-(y/x)\\dot y=${nfmt(ans)}\\,\\mathrm{m}/\\mathrm{s}\\).`)
  }
}
function makeRelatedFamily35VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let side=ri(2,8),ds=ri(1,4),ans=3*side*side*ds;
    return qNum(RR,title,`A cube has side \\(s=${side}\\,\\mathrm{m}\\) increasing at \\(ds/dt=${ds}\\,\\mathrm{m}/\\mathrm{s}\\). Find volume rate.`,ans,`\\(V=s^3\\), so \\(dV/dt=3s^2(ds/dt)=3(${side})^2(${ds})=${ans}\\,\\mathrm{m}^3/\\mathrm{s}\\).`)
  }
}
function makeRelatedFamily36VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let r=ri(2,8),dv=ri(2,10),ans=dv/r;
    return qNum(RR,title,`A resistor has fixed \\(R=${r}\\,\\Omega\\), while voltage changes at \\(dV/dt=${dv}\\,\\mathrm{V}/s\\). Find \\(dI/dt\\).`,ans,`By Ohm's law \\(I=V/R\\), \\(dI/dt=(1/R)dV/dt=${dv}/${r}=${nfmt(ans)}\\,\\mathrm{A}/s\\).`)
  }
}
function makeRelatedFamily37VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let I=ri(2,8),R=ri(2,10),di=ri(1,4),ans=2*I*R*di;
    return qNum(RR,title,`For a fixed resistor \\(R=${R}\\,\\Omega\\), current is \\(I=${I}\\,\\mathrm{A}\\) and increasing at \\(dI/dt=${di}\\,\\mathrm{A}/s\\). Find \\(dP/dt\\) for \\(P=I^2R\\).`,ans,`\\(dP/dt=2IR(dI/dt)=2(${I})(${R})(${di})=${ans}\\,\\mathrm{W}/s\\).`)
  }
}
function makeRelatedFamily38VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let h=ri(2,8),dh=ri(1,4),ans=Math.PI*h*h*dh/4;
    return qNum(RR,title,`Water rises in a cone whose radius is always half its height. When \\(h=${h}\\,\\mathrm{m}\\) and \\(dh/dt=${dh}\\,\\mathrm{m}/\\mathrm{s}\\), find \\(dV/dt\\).`,ans,`With \\(r=h/2\\), \\(V=\\pi r^2h/3=\\pi h^3/12\\), so \\(dV/dt=\\pi h^2(dh/dt)/4=${nfmt(ans)}\\,\\mathrm{m}^3/\\mathrm{s}\\).`)
  }
}
function makeRelatedFamily39VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let xx=ri(2,8),yy=ri(2,9),dy=ri(1,4),ans=xx/(xx*xx+yy*yy)*dy;
    return qNum(RR,title,`A point has fixed horizontal distance \\(x=${xx}\\,\\mathrm{m}\\), vertical position \\(y=${yy}\\,\\mathrm{m}\\), and \\(dy/dt=${dy}\\,\\mathrm{m}/\\mathrm{s}\\). For \\(\\theta=\\tan^{-1}(y/x)\\), find \\(d\\theta/dt\\).`,ans,`\\(d\\theta/dt=x\\dot y/(x^2+y^2)=${xx}(${dy})/(${xx*xx}+${yy*yy})=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`)
  }
}
function makeRelatedFamily40VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let r=ri(2,8),dr=ri(1,4),ans=2*Math.PI*dr;
    return qNum(RR,title,`A circle's circumference is \\(C=2\\pi r\\) and radius increases at \\(dr/dt=${dr}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dC/dt\\).`,ans,`\\(dC/dt=2\\pi(dr/dt)=2\\pi(${dr})=${nfmt(ans)}\\,\\mathrm{m}/\\mathrm{s}\\).`)
  }
}


function makeRelatedScenario(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const person=pick(['Maya','Luis','Ari','Nina','Sam','Leah','Rafael','Tessa','Noah','Ivy']);
      if(fam===0){const r=ri(2,10),rate=ri(1,5)/10,ans=2*Math.PI*r*rate;return attachDiagram(qNum(RR,`Related rates: circle ${variant}`,`A circular water surface has radius \\(r=${r}\\,\\mathrm{m}\\) increasing at \\(dr/dt=${nfmt(rate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dA/dt\\) in square metres per second.`,ans,`From \\(A=\\pi r^2\\), \\(dA/dt=2\\pi r(dr/dt)=2\\pi(${r})(${nfmt(rate)})=${nfmt(ans)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`),'relatedCircle','Top view of a circle with radius r; the radius is increasing at dr/dt and the area changes at dA/dt.')}
    if(fam===1){const r=ri(2,8),rate=ri(1,5)/10,ans=4*Math.PI*r*r*rate;return attachDiagram(qNum(RR,`Related rates: sphere ${variant}`,`A spherical balloon has radius \\(r=${r}\\,\\mathrm{cm}\\) increasing at \\(dr/dt=${nfmt(rate)}\\,\\mathrm{cm}/\\mathrm{s}\\). Find \\(dV/dt\\).`,ans,`\\(V=\\frac43\\pi r^3\\), so \\(dV/dt=4\\pi r^2(dr/dt)=4\\pi(${r})^2(${nfmt(rate)})=${nfmt(ans)}\\,\\mathrm{cm}^3/s\\).`),'relatedSphere','A sphere with radius r expands; radial growth dr/dt changes volume V.')}
    if(fam===2){const length=13,y=ri(3,8),x=Math.sqrt(length*length-y*y),ydot=-(ri(1,4)),ans=-y/x*ydot;return attachDiagram(qNum(RR,`Related rates: ladder ${variant}`,`A \\(${length}\\,\\mathrm{m}\\) ladder leans against a wall. Its foot is \\(x=${nfmt(x)}\\,\\mathrm{m}\\) from the wall while the top is \\(y=${y}\\,\\mathrm{m}\\) high and slides down at \\(dy/dt=${ydot}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dx/dt\\).`,ans,`\\(x^2+y^2=L^2\\). Differentiate: \\(2x\\,dx/dt+2y\\,dy/dt=0\\), so \\(dx/dt=-(y/x)(dy/dt)=${nfmt(ans)}\\,\\mathrm{m}/\\mathrm{s}\\).`),'ladder','Right triangle formed by a wall, floor, and rigid ladder of fixed length; x is the foot distance and y is the height.')}
    if(fam===3){const r=ri(2,8),h=ri(5,20),rate=ri(1,4)/10,ans=2*Math.PI*r*h*rate;return qNum(RR,`Related rates: cylinder ${variant}`,`A cylinder has fixed height \\(h=${h}\\,\\mathrm{m}\\) and radius \\(r=${r}\\,\\mathrm{m}\\) increasing at \\(dr/dt=${nfmt(rate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dV/dt\\).`,ans,`\\(V=\\pi r^2h\\), so \\(dV/dt=2\\pi rh(dr/dt)=2\\pi(${r})(${h})(${nfmt(rate)})=${nfmt(ans)}\\,\\mathrm{m}^3/\\mathrm{s}\\).`)}
    if(fam===4){const d=ri(20,80),dd=ri(1,8),ans=dd;return qNum(RR,`Related rates: separation ${variant}`,`Two robots move along perpendicular straight tracks. Their separation is \\(s=\\sqrt{x^2+y^2}\\). At an instant \\(x=3\\), \\(y=4\\), \\(dx/dt=0\\), and \\(dy/dt=${dd}\\). Find \\(ds/dt\\).`,ans,`Differentiate \\(s^2=x^2+y^2\\): \\(ds/dt=(x\\dot x+y\\dot y)/s=(3(0)+4(${dd}))/5=${nfmt(ans)}\\).`)}
    const r=ri(2,9),rate=ri(1,5)/10,ans=2*Math.PI*r*rate;return qNum(RR,`Related rates: circumference ${variant}`,`A circular track has radius \\(${r}\\,\\mathrm{m}\\) growing at \\(${nfmt(rate)}\\,\\mathrm{m}/\\mathrm{s}\\). Find rate of change of circumference.`,ans,`\\(C=2\\pi r\\), so \\(dC/dt=2\\pi dr/dt=2\\pi(${nfmt(rate)})=${nfmt(ans)}\\,\\mathrm{m}/\\mathrm{s}\\).`)
}


/* Numbered family makers choose between two complete category-local question recipes. */
/* Family 21: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily21(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily21VariantA(title):makeRelatedExpansionFamily01(title);q.title=title;return q;}
/* Family 22: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily22(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily22VariantA(title):makeRelatedExpansionFamily02(title);q.title=title;return q;}
/* Family 23: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily23(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily23VariantA(title):makeRelatedExpansionFamily03(title);q.title=title;return q;}
/* Family 24: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily24(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily24VariantA(title):makeRelatedExpansionFamily04(title);q.title=title;return q;}
/* Family 25: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily25(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily25VariantA(title):makeRelatedExpansionFamily05(title);q.title=title;return q;}
/* Family 26: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily26(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily26VariantA(title):makeRelatedExpansionFamily06(title);q.title=title;return q;}
/* Family 27: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily27(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily27VariantA(title):makeRelatedExpansionFamily07(title);q.title=title;return q;}
/* Family 28: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily28(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily28VariantA(title):makeRelatedExpansionFamily08(title);q.title=title;return q;}
/* Family 29: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily29(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily29VariantA(title):makeRelatedExpansionFamily09(title);q.title=title;return q;}
/* Family 30: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily30(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily30VariantA(title):makeRelatedExpansionFamily10(title);q.title=title;return q;}
/* Family 31: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily31(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily31VariantA(title):makeRelatedExpansionFamily11(title);q.title=title;return q;}
/* Family 32: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily32(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily32VariantA(title):makeRelatedExpansionFamily12(title);q.title=title;return q;}
/* Family 33: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily33(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily33VariantA(title):makeRelatedExpansionFamily13(title);q.title=title;return q;}
/* Family 34: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily34(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily34VariantA(title):makeRelatedExpansionFamily14(title);q.title=title;return q;}
/* Family 35: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily35(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily35VariantA(title):makeRelatedExpansionFamily15(title);q.title=title;return q;}
/* Family 36: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily36(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily36VariantA(title):makeRelatedExpansionFamily16(title);q.title=title;return q;}
/* Family 37: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily37(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily37VariantA(title):makeRelatedExpansionFamily17(title);q.title=title;return q;}
/* Family 38: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily38(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily38VariantA(title):makeRelatedExpansionFamily18(title);q.title=title;return q;}
/* Family 39: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily39(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily39VariantA(title):makeRelatedExpansionFamily19(title);q.title=title;return q;}
/* Family 40: a named seed recipe and its paired randomized expansion variant. */
function makeRelatedFamily40(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelatedFamily40VariantA(title):makeRelatedExpansionFamily20(title);q.title=title;return q;}

NUMERIC_GENERATOR_REGISTRY.related = [numericEntry('related',"Circle-area related rate · family 21 (randomized variant)",'related-family-21',()=>makeRelatedFamily21("Circle-area related rate · family 21 (randomized variant)")),
    numericEntry('related',"Sphere-volume related rate · family 22 (randomized variant)",'related-family-22',()=>makeRelatedFamily22("Sphere-volume related rate · family 22 (randomized variant)")),
    numericEntry('related',"Cone-volume related rate · family 23 (randomized variant)",'related-family-23',()=>makeRelatedFamily23("Cone-volume related rate · family 23 (randomized variant)")),
    numericEntry('related',"Ladder related rate · family 24 (randomized variant)",'related-family-24',()=>makeRelatedFamily24("Ladder related rate · family 24 (randomized variant)")),
    numericEntry('related',"Distance related rate · family 25 (randomized variant)",'related-family-25',()=>makeRelatedFamily25("Distance related rate · family 25 (randomized variant)")),
    numericEntry('related',"Shadow-length related rate · family 26 (randomized variant)",'related-family-26',()=>makeRelatedFamily26("Shadow-length related rate · family 26 (randomized variant)")),
    numericEntry('related',"Circumference rate · family 27 (randomized variant)",'related-family-27',()=>makeRelatedFamily27("Circumference rate · family 27 (randomized variant)")),
    numericEntry('related',"Cube-volume related rate · family 28 (randomized variant)",'related-family-28',()=>makeRelatedFamily28("Cube-volume related rate · family 28 (randomized variant)")),
    numericEntry('related',"Electrical power rate · family 29 (randomized variant)",'related-family-29',()=>makeRelatedFamily29("Electrical power rate · family 29 (randomized variant)")),
    numericEntry('related',"Angular-position rate · family 30 (randomized variant)",'related-family-30',()=>makeRelatedFamily30("Angular-position rate · family 30 (randomized variant)")),
    numericEntry('related',"Circle-area rate · family 31 (randomized variant)",'related-family-31',()=>makeRelatedFamily31("Circle-area rate · family 31 (randomized variant)")),
    numericEntry('related',"Sphere-volume rate · family 32 (randomized variant)",'related-family-32',()=>makeRelatedFamily32("Sphere-volume rate · family 32 (randomized variant)")),
    numericEntry('related',"Distance rate · family 33 (randomized variant)",'related-family-33',()=>makeRelatedFamily33("Distance rate · family 33 (randomized variant)")),
    numericEntry('related',"Ladder horizontal rate · family 34 (randomized variant)",'related-family-34',()=>makeRelatedFamily34("Ladder horizontal rate · family 34 (randomized variant)")),
    numericEntry('related',"Cube-volume rate · family 35 (randomized variant)",'related-family-35',()=>makeRelatedFamily35("Cube-volume rate · family 35 (randomized variant)")),
    numericEntry('related',"Current rate from voltage · family 36 (randomized variant)",'related-family-36',()=>makeRelatedFamily36("Current rate from voltage · family 36 (randomized variant)")),
    numericEntry('related',"Electrical power rate · family 37 (randomized variant)",'related-family-37',()=>makeRelatedFamily37("Electrical power rate · family 37 (randomized variant)")),
    numericEntry('related',"Cone-volume rate · family 38 (randomized variant)",'related-family-38',()=>makeRelatedFamily38("Cone-volume rate · family 38 (randomized variant)")),
    numericEntry('related',"Angular rate · family 39 (randomized variant)",'related-family-39',()=>makeRelatedFamily39("Angular rate · family 39 (randomized variant)")),
    numericEntry('related',"Circumference rate · family 40 (randomized variant)",'related-family-40',()=>makeRelatedFamily40("Circumference rate · family 40 (randomized variant)")),
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
  return qNum(RR,'Rate of change of circular area',`A circular sensor footprint has radius \\(r=${nfmt(r)}\\,\\mathrm{m}\\) growing at \\(dr/dt=${nfmt(dr)}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dA/dt\\) in square metres per second.`,ans,`Since \\(A=\\pi r^2\\), \\(dA/dt=2\\pi r\\,dr/dt=2\\pi(${nfmt(r)})(${nfmt(dr)})=${nfmt(ans)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`);
});
appendNumericRecipe('related','Additional · Rate of change of spherical volume','related-topup-02',()=>{
  const r=rand(.5,8),dr=rand(.05,1.5),ans=4*Math.PI*r*r*dr;
  return qNum(RR,'Rate of change of spherical volume',`A spherical weather balloon has radius \\(r=${nfmt(r)}\\,\\mathrm{m}\\) increasing at \\(dr/dt=${nfmt(dr)}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dV/dt\\).`,ans,`For \\(V=4\\pi r^3/3\\), \\(dV/dt=4\\pi r^2 dr/dt=4\\pi(${nfmt(r)})^2(${nfmt(dr)})=${nfmt(ans)}\\,\\mathrm{m}^3/\\mathrm{s}\\).`);
});
appendNumericRecipe('related','Additional · Rate of change of a fixed-height cylinder volume','related-topup-03',()=>{
  const r=rand(.5,6),h=ri(2,15),dr=rand(.1,1.2),ans=2*Math.PI*r*h*dr;
  return qNum(RR,'Rate of change of a fixed-height cylinder volume',`A cylindrical tank has fixed height \\(h=${h}\\,\\mathrm{m}\\), radius \\(r=${nfmt(r)}\\,\\mathrm{m}\\), and radius growth rate \\(dr/dt=${nfmt(dr)}\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(dV/dt\\).`,ans,`With \\(V=\\pi r^2h\\) and constant \\(h\\), \\(dV/dt=2\\pi rh\\,dr/dt=2\\pi(${nfmt(r)})(${h})(${nfmt(dr)})=${nfmt(ans)}\\,\\mathrm{m}^3/\\mathrm{s}\\).`);
});
appendNumericRecipe('related','Additional · Vertical speed of a sliding ladder','related-topup-04',()=>{
  const L=ri(5,15),x=ri(2,L-2),dx=rand(.1,1.5),y=Math.sqrt(L*L-x*x),ans=-x/y*dx;
  return qNum(RR,'Vertical speed of a sliding ladder',`A ladder of length \\(${L}\\,\\mathrm{m}\\) has its foot \\(x=${x}\\,\\mathrm{m}\\) from a wall and is sliding outward at \\(dx/dt=${nfmt(dx)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the signed vertical rate \\(dy/dt\\).`,ans,`From \\(x^2+y^2=L^2\\), differentiate: \\(dy/dt=-(x/y)(dx/dt)\\). Here \\(y=\\sqrt{${L}^2-${x}^2}=${nfmt(y)}\\), so \\(dy/dt=${nfmt(ans)}\\,\\mathrm{m}/\\mathrm{s}\\).`);
});
appendNumericRecipe('related','Additional · Rate of change of spherical surface area','related-topup-05',()=>{
  const r=rand(.8,9),dr=rand(.05,1.2),ans=8*Math.PI*r*dr;
  return qNum(RR,'Rate of change of spherical surface area',`A spherical tank has radius \\(r=${nfmt(r)}\\,\\mathrm{m}\\) increasing at \\(dr/dt=${nfmt(dr)}\\,\\mathrm{m}/\\mathrm{s}\\). Find the rate of change of surface area.`,ans,`For \\(A=4\\pi r^2\\), \\(dA/dt=8\\pi r\\,dr/dt=8\\pi(${nfmt(r)})(${nfmt(dr)})=${nfmt(ans)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`);
});

/* Category-owned tree generators. Prompts, data dictionaries, SVGs and formula logic live here. */
function makeRelatedScenarioSetup(){const r0=2,v=pick([.2,.5,1]),t=3;return {category:NAMESPACE_RELATED,title:'Constant-rate circular reservoir filling',prompt:String.raw`A circular reservoir's water radius is increasing at the constant rate \(dr/dt=v=${v}\,\mathrm{m/s}\). At the start of the observation, the radius is \(r_0=${r0}\,\mathrm{m}\); the observation interval is \(t=${t}\,\mathrm{s}\). Model the wet cross-section as a circle with area \(A=\pi r^2\), and assume the radius rate remains constant during the short interval.`,transferData:{r0: r0,v: v,t: t},illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 115"><circle cx="105" cy="58" r="39" fill="none" stroke="#2d83c5" stroke-width="2.2"/><circle cx="105" cy="58" r="25" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 4"/><path d="M105 58 H144 M136 52 L144 58 L136 64" stroke="currentColor" stroke-width="1.4" fill="none"/><text x="124" y="49" fill="currentColor" font-size="12">r(t)</text><text x="180" y="55" fill="currentColor" font-size="12">dr/dt = constant</text><text x="180" y="75" fill="currentColor" font-size="12">A = πr²</text></svg>`,alt:'A circular reservoir cross-section shows the radius expanding outward at a constant rate.'}],custom:false};}
function makeRelatedScenarioA(dto={}){const d=dto?.['related-reservoir-root-v18']||{};const r=Number(d.r0),v=Number(d.v),ans=2*Math.PI*r*v;const q=qNum(RR,'Instantaneous area growth rate',String.raw`Find the instantaneous area growth rate \(dA/dt\) at the start of the observation.`,ans,String.raw`\(dA/dt=2\pi r\,dr/dt=2\pi(${r})(${v})=${nfmt(ans)}\,\mathrm{m^2/s}\).`,'number',{quantUnit:'m^2/s'});q.transferData={A_dot0: ans};return q;}
function makeRelatedScenarioB(dto={}){const d=dto?.['related-reservoir-root-v18']||{};const r=Number(d.r0),v=Number(d.v),t=Number(d.t),ans=r+v*t;const q=qNum(RR,'Radius at the end of the observation',String.raw`Determine the reservoir radius \(r_t\) at the end of the observation interval.`,ans,String.raw`\(r_t=r_0+vt=${r}+(${v})(${t})=${nfmt(ans)}\,\mathrm{m}\).`,'number',{quantUnit:'m'});q.transferData={r_t: ans};return q;}
function makeRelatedScenarioBA(dto={}){const dt=dto||{};const r0=Number(dt['related-reservoir-root-v18']?.r0),rt=Number(dt['related-reservoir-b-v18']?.r_t),ans=Math.PI*(rt*rt-r0*r0);const q=qNum(RR,'Increase in wetted cross-sectional area',String.raw`Find the change in cross-sectional area \(\Delta A\) over the observation interval.`,ans,String.raw`\(\Delta A=\pi(r_t^2-r_0^2)=\pi(${nfmt(rt)}^2-${r0}^2)=${nfmt(ans)}\,\mathrm{m^2}\).`,'number',{quantUnit:'m^2'});q.transferData={deltaA: ans};return q;}
function makeRelatedScenarioBB(dto={}){const rt=Number(dto?.['related-reservoir-b-v18']?.r_t),ans=2*Math.PI*rt;const q=qNum(RR,'Circumference at the end of the observation',String.raw`Find the circumference \(C_t\) of the reservoir's water boundary at the end of the interval.`,ans,String.raw`\(C_t=2\pi r_t=2\pi(${nfmt(rt)})=${nfmt(ans)}\,\mathrm{m}\).`,'number',{quantUnit:'m'});q.transferData={C_t: ans};return q;}
function registerRelatedScenarioTree(){
  const rootKey='related-reservoir-root-v18',aKey='related-reservoir-a-v18',bKey='related-reservoir-b-v18',baKey='related-reservoir-ba-v18',bbKey='related-reservoir-bb-v18';
  setupRecipe(NAMESPACE_RELATED,'Related rates · Reservoir filling tree',rootKey,makeRelatedScenarioSetup,3,{treeChildrenRecipeKeys:[aKey]});
  appendNumericRecipe(NAMESPACE_RELATED,'Related · Calculation A',aKey,makeRelatedScenarioA,3,{parentRecipeKey:rootKey,treeChildrenRecipeKeys:[bKey]});
  appendNumericRecipe(NAMESPACE_RELATED,'Related · Calculation B',bKey,makeRelatedScenarioB,3,{parentRecipeKey:aKey,treeChildrenRecipeKeys:[baKey,bbKey]});
  appendNumericRecipe(NAMESPACE_RELATED,'Related · Follow-up A',baKey,makeRelatedScenarioBA,3,{parentRecipeKey:bKey});
  appendNumericRecipe(NAMESPACE_RELATED,'Related · Follow-up B',bbKey,makeRelatedScenarioBB,3,{parentRecipeKey:bKey});
}
registerRelatedScenarioTree();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const RELATED_CONCEPT_CARDS = [
    [
      "Related-rates problem",
      "A problem that links rates of change of several quantities through a common equation."
    ],
    [
      "Chain rule",
      "The rule that differentiates a dependent quantity by multiplying derivatives along the dependency chain."
    ],
    [
      "Implicit differentiation",
      "Differentiation of an equation relating variables without first solving explicitly for one variable."
    ],
    [
      "Geometric constraint",
      "An equation connecting dimensions in a geometric configuration, such as lengths in a right triangle."
    ],
    [
      "Sphere-volume relation",
      "The volume of a sphere depends on radius as four-thirds pi times the radius cubed."
    ],
    [
      "Sphere-surface-area relation",
      "The surface area of a sphere equals four pi times radius squared."
    ],
    [
      "Circle-area relation",
      "The area of a circle is pi times radius squared."
    ],
    [
      "Ladder constraint",
      "For a ladder against a wall, the squared horizontal and vertical distances sum to the fixed squared ladder length."
    ],
    [
      "Shadow geometry",
      "A similar-triangle relation used to connect the heights and lengths of an object and its shadow."
    ],
    [
      "Cone-volume relation",
      "The volume of a cone is one-third of its base area times its height."
    ],
    [
      "Cylinder-volume relation",
      "The volume of a circular cylinder is pi times radius squared times height."
    ],
    [
      "Angular velocity",
      "The time derivative of angular position, usually measured in radians per second."
    ],
    [
      "Radial velocity",
      "The time derivative of radial distance from a chosen origin."
    ],
    [
      "Instantaneous velocity",
      "The time derivative of position."
    ],
    [
      "Acceleration",
      "The time derivative of velocity, or second derivative of position."
    ],
    [
      "Sign convention",
      "A consistent choice of positive direction used to interpret rates and avoid sign errors."
    ],
    [
      "Dimensional consistency",
      "The requirement that terms added in an equation have matching physical units."
    ],
    [
      "Differentiate the constraint",
      "The step of taking a time derivative of a relation after all quantities are treated as time-dependent."
    ],
    [
      "Sensitivity",
      "The rate at which an output changes with respect to a parameter or input."
    ],
    [
      "Rate at an instant",
      "The derivative evaluated at the specific time or configuration described in the problem."
    ],
    [
      "Related-rates method",
      "Differentiate an equation connecting changing quantities with respect to time and substitute known values afterward."
    ],
    [
      "Implicit differentiation — extended concept",
      "Differentiating an equation involving dependent and independent variables without first solving explicitly for the dependent variable."
    ],
    [
      "Radius rate",
      "The time derivative of a circle or sphere radius."
    ],
    [
      "Area growth rate",
      "The time derivative of area, such as dA/dt for a changing circle."
    ],
    [
      "Volume growth rate",
      "The time derivative of a volume, such as dV/dt for an expanding sphere."
    ],
    [
      "Ladder problem",
      "A geometric related-rates model for a rigid ladder sliding against a wall."
    ],
    [
      "Shadow-length model",
      "A similar-triangle relationship used to connect positions and rates of a moving object and its shadow."
    ],
    [
      "Cone filling model",
      "A fluid-volume problem that links water height and surface radius through similar triangles."
    ],
    [
      "Sign convention in rates",
      "A consistent choice of positive direction that determines whether a quantity is increasing or decreasing."
    ],
    [
      "Instantaneous rate",
      "The derivative of a quantity with respect to time at a particular instant."
    ],
    [
      "Chain rule in time",
      "For a composite quantity Q(x(t)), its time rate is dQ/dt=(dQ/dx)(dx/dt)."
    ],
    [
      "Pythagorean constraint",
      "A geometric relation such as x squared plus y squared equals a constant squared for a right triangle."
    ],
    [
      "Similar triangles",
      "Triangles with equal corresponding angles and proportional side lengths."
    ],
    [
      "Moving-point distance",
      "Distance between objects can be modeled as a function of their time-varying coordinates."
    ],
    [
      "Separation rate",
      "The derivative of the distance between two moving objects."
    ],
    [
      "Angle rate",
      "The time derivative of an angle, often related to tangent or trigonometric geometry."
    ],
    [
      "Lateral area rate",
      "The derivative of a surface-area expression for a changing solid."
    ],
    [
      "Constraint equation",
      "An equation that restricts multiple changing variables to move consistently with a fixed geometric or physical relation."
    ],
    [
      "Evaluate-after-differentiating rule",
      "In related-rates work, differentiate the symbolic constraint first, then insert the instantaneous geometric values."
    ],
    [
      "Dimensional check for rates",
      "A units check ensuring a calculated derivative has units of the quantity per unit time."
    ]
  ];
registerConceptGeneratorsForCategory(NAMESPACE_RELATED, RELATED_CONCEPT_CARDS);
