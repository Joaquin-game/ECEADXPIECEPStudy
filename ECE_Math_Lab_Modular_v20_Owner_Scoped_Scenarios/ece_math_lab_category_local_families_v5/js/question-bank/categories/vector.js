/* vector: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_VECTOR = 'vector';
const V = NAMESPACE_VECTOR;
function makeVectorExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=v?Math.sqrt(a0*a0+b0*b0+c0*c0):a0+b0+c0;return qNum(V,title,v?`Find magnitude of vector \\(\\mathbf A=\\langle ${a0},${b0},${c0}\\rangle\\).`:`For \\(\\mathbf A=\\langle ${a0},${b0},${c0}\\rangle\\), find the sum of its components.`,ans,v?`\\(|\\mathbf A|=\\sqrt{a^2+b^2+c^2}=${nfmt(ans)}\\).`:`Component sum \\(=${ans}\\).`)
  }
}
function makeVectorExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=a0+b0+c0;return qNum(V,title,v?`For \\(\\mathbf F=\\langle ${a0}x,${b0}y,${c0}z\\rangle\\), find divergence at any point.`:`For \\(\\mathbf F=\\langle ${a0}x,${b0}y,${c0}z\\rangle\\), find \\(\\nabla\\cdot\\mathbf F\\).`,ans,v?`\\(\\nabla\\cdot F=${a0}+${b0}+${c0}=${ans}\\).`:`\\(\\nabla\\cdot F=${a0}+${b0}+${c0}=${ans}\\).`)
  }
}
function makeVectorExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=v?Math.sqrt(a0*a0+b0*b0+c0*c0):a0*b0+a0*c0+b0*c0;return qNum(V,title,v?`Find norm of \\(\\nabla \\phi=\\langle ${a0},${b0},${c0}\\rangle\\).`:`For gradient components \\(${a0},${b0},${c0}\\), find the sum of pairwise products.`,ans,v?`\\(|\\nabla\\phi|=\\sqrt{a^2+b^2+c^2}=${nfmt(ans)}\\).`:`Pairwise sum \\(ab+ac+bc=${ans}\\).`)
  }
}
function makeVectorExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),d0=ri(1,5),ans=v?a0*d0-b0*c0:a0*c0+b0*d0;return qNum(V,title,v?`Find the 2D determinant \\(\\begin{vmatrix}${a0}&${b0}\\\\${c0}&${d0}\\end{vmatrix}\\).`:`For vectors \\(\\langle${a0},${b0}\\rangle\\) and \\(\\langle${c0},${d0}\\rangle\\), find their dot product.`,ans,v?`Determinant \\(=ad-bc=${ans}\\).`:`Dot product \\(=ac+bd=${ans}\\).`)
  }
}
function makeVectorExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=v?Math.hypot(a0,b0,c0):a0*a0+b0*b0+c0*c0;return qNum(V,title,v?`Find magnitude of \\(\\mathbf A=\\langle ${a0},${b0},${c0}\\rangle\\).`:`Find squared magnitude of \\(\\mathbf A=\\langle ${a0},${b0},${c0}\\rangle\\).`,ans,v?`\\(|A|=\\sqrt{a^2+b^2+c^2}=${nfmt(ans)}\\).`:`\\(|A|^2=a^2+b^2+c^2=${ans}\\).`)
  }
}
function makeVectorExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),d0=ri(1,5),ans=v?a0*d0-b0*c0:a0*c0+b0*d0;return qNum(V,title,v?`Find the 2D cross-product z component for \\(\\mathbf A=\\langle${a0},${b0}\\rangle\\), \\(\\mathbf B=\\langle${c0},${d0}\\rangle\\).`:`Find the dot product of \\(\\mathbf A=\\langle${a0},${b0}\\rangle\\), \\(\\mathbf B=\\langle${c0},${d0}\\rangle\\).`,ans,v?`\\((A\\times B)_z=ad-bc=${ans}\\).`:`\\(A\\cdot B=ac+bd=${ans}\\).`)
  }
}
function makeVectorExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),dx=rand(.1,1),dy=rand(.1,1),dz=rand(.1,1),ans=v?a0*dx+b0*dy+c0*dz:(a0*dx+b0*dy+c0*dz)/Math.hypot(dx,dy,dz);return qNum(V,title,v?`For constant gradient \\(\\langle${a0},${b0},${c0}\\rangle\\) and direction \\(\\langle${nfmt(dx)},${nfmt(dy)},${nfmt(dz)}\\rangle\\), find directional derivative along this vector without normalization.`:`For gradient \\(\\nabla f=\\langle${a0},${b0},${c0}\\rangle\\) and direction \\(v=\\langle${nfmt(dx)},${nfmt(dy)},${nfmt(dz)}\\rangle\\), find directional derivative along the unit direction.`,ans,v?`Dot product \\(=\\nabla f\\cdot v=${nfmt(ans)}\\).`:`Normalize direction and dot with gradient: \\(${nfmt(ans)}\\).`)
  }
}
function makeVectorExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),len=ri(2,8),ans=v?len*Math.hypot(a0,b0,c0):len*(a0+b0+c0);return qNum(V,title,v?`A constant vector field \\(\\mathbf F=\\langle${a0},${b0},${c0}\\rangle\\) is integrated along a straight segment of length \\(${len}\\) parallel to the field. Find work if aligned.`:`For constant vector field \\(\\mathbf F=\\langle${a0},${b0},${c0}\\rangle\\), find the sum of component contributions along the unit direction \\(\\langle1,1,1\\rangle\\) over parameter length \\(${len}\\).`,ans,v?`Work aligned with the field is \\(|F|L=${nfmt(ans)}\\).`:`Component sum times length \\(=${nfmt(ans)}\\).`)
  }
}
function makeVectorExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const r=ri(2,8),h=ri(1,6),ans=v?2*Math.PI*r*h:Math.PI*r*r;return qNum(V,title,v?`Find lateral surface area of a cylinder with radius \\(${r}\\) and height \\(${h}\\), a flux-area factor.`:`Find the area of a disk of radius \\(${r}\\).`,ans,v?`\\(A_{lat}=2\\pi rh=${nfmt(ans)}\\).`:`\\(A=\\pi r^2=${nfmt(ans)}\\).`)
  }
}
function makeVectorExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),vol=ri(1,5),ans=v?(a0+b0+c0)*vol:(a0+b0+c0);return qNum(V,title,v?`A constant field has divergence \\(${a0}+${b0}+${c0}\\) in a volume \\(${vol}\\). Find outward flux by divergence theorem.`:`A diagonal linear field has coefficients \\(${a0},${b0},${c0}\\). Find its divergence.`,ans,v?`\\(\\Phi=V\\nabla\\cdot F=${vol}(${a0}+${b0}+${c0})=${ans}\\).`:`\\(\\nabla\\cdot F=${a0}+${b0}+${c0}=${ans}\\).`)
  }
}
function makeVectorExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=v?0:c0;return qNum(V,title,v?`For \\(\\mathbf F=\\langle0,${c0}x,${b0}y\\rangle\\), find the x-component of curl.`:`For \\(\\mathbf F=\\langle0,${c0}x,${b0}y\\rangle\\), find \\(\\partial F_y/\\partial x-\\partial F_x/\\partial y\\).`,ans,v?`\\((\\nabla\\times F)_x=0\\).`:`\\((\\nabla\\times F)_z=\\partial F_y/\\partial x-\\partial F_x/\\partial y=${c0}\\).`)
  }
}
function makeVectorExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),len=ri(2,7),ans=v?a0*len:a0*len+b0*len;return qNum(V,title,v?`A constant field has component \\(${a0}\\) along a straight displacement of length \\(${len}\\). Find line integral when aligned.`:`A field contributes components \\(${a0}\\) and \\(${b0}\\) along equal displacement \\(${len}\\). Find total work.`,ans,v?`\\(\\int F\\cdot dr=FL=${ans}\\).`:`\\(W=(F_x+F_y)L=${ans}\\).`)
  }
}
function makeVectorExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=2*(a0+b0+c0);return qNum(V,title,v?`For scalar potential \\(\\phi=ax^2+by^2+cz^2\\), coefficients \\(${a0},${b0},${c0}\\), find divergence of \\(\\nabla\\phi\\).`:`For \\(\\phi=ax^2+by^2+cz^2\\), evaluate \\(\\nabla\\phi\\) component sum at point \\((1,1,1)\\).`,ans,v?`\\(\\nabla^2\\phi=2a+2b+2c=${ans}\\).`:`Gradient at (1,1,1) is \\(\\langle2a,2b,2c\\rangle\\); component sum is \\(${nfmt(ans)}\\).`)
  }
}
function makeVectorExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=v?a0*b0*c0:a0*b0;return qNum(V,title,v?`For orthogonal edge lengths \\(${a0},${b0},${c0}\\), find parallelepiped volume.`:`For a rectangle with side lengths \\(${a0}\\) and \\(${b0}\\), find area.`,ans,v?`\\(V=abc=${ans}\\).`:`\\(A=ab=${ans}\\).`)
  }
}
function makeVectorExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=v?0:c0;return qNum(V,title,v?`For \\(\\mathbf F=\\langle0,${c0}x,${b0}y\\rangle\\), find the x-component of curl.`:`For \\(\\mathbf F=\\langle0,${c0}x,${b0}y\\rangle\\), find the z-component of curl.`,ans,v?`\\((\\nabla\\times F)_x=0\\) for this field; coefficients affect the z component only.`:`\\((\\nabla\\times F)_z=\\partial F_y/\\partial x-\\partial F_x/\\partial y=${c0}-0=${c0}\\).`)
  }
}
function makeVectorExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),len=ri(1,5),ans=v?b0*len:a0*len;return qNum(V,title,v?`A constant vector field has y-component \\(${b0}\\) and displacement \\(\\Delta y=${len}\\). Find the y-contribution to line integral.`:`A constant vector field has x-component \\(${a0}\\) and displacement \\(\\Delta x=${len}\\). Find x-contribution to line integral.`,ans,v?`\\(F_y\\Delta y=${ans}\\).`:`\\(F_x\\Delta x=${ans}\\).`)
  }
}
function makeVectorExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=v?2*(a0+b0+c0):a0+b0+c0;return qNum(V,title,v?`For \\(\\phi=${a0}x^2+${b0}y^2+${c0}z^2\\), find \\(\\nabla^2\\phi\\).`:`For \\(\\mathbf F=\\langle${a0}x,${b0}y,${c0}z\\rangle\\), find divergence.`,ans,v?`\\(\\nabla^2\\phi=2(${a0}+${b0}+${c0})=${ans}\\).`:`\\(\\nabla\\cdot F=${a0}+${b0}+${c0}=${ans}\\).`)
  }
}
function makeVectorExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.hypot(a0,b0):a0*b0;return qNum(V,title,v?`A right triangle has perpendicular vector components \\(${a0}\\) and \\(${b0}\\). Find resultant magnitude.`:`A rectangular surface has edge lengths \\(${a0}\\) and \\(${b0}\\). Find area magnitude.`,ans,v?`\\(|R|=\\sqrt{a^2+b^2}=${nfmt(ans)}\\).`:`\\(A=ab=${ans}\\).`)
  }
}
function makeVectorExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),x=ri(1,5),ans=v?c0*x:a0*x+b0*x;return qNum(V,title,v?`For \\(\\mathbf F=\\langle${a0}x,${b0}y,${c0}z\\rangle\\), evaluate z-component at \\(z=${x}\\).`:`For \\(\\mathbf F=\\langle${a0}x,${b0}y,${c0}z\\rangle\\) at \\(x=y=${x}\\), find sum of x/y components.`,ans,v?`\\(F_z=${c0}(${x})=${ans}\\).`:`\\(F_x+F_y=(${a0}+${b0})${x}=${ans}\\).`)
  }
}
function makeVectorExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),ans=v?Math.sqrt(a0*a0+b0*b0+c0*c0):Math.abs(a0)+Math.abs(b0)+Math.abs(c0);return qNum(V,title,v?`Find Euclidean norm of vector \\(\\langle${a0},${b0},${c0}\\rangle\\).`:`Find the L1 norm of vector \\(\\langle${a0},${b0},${c0}\\rangle\\).`,ans,v?`\\(\\|v\\|_2=\\sqrt{a^2+b^2+c^2}=${nfmt(ans)}\\).`:`\\(\\|v\\|_1=|a|+|b|+|c|=${ans}\\).`)
  }
}



/* Additional numbered numeric families, registered alongside the other families below. */
/* Category-local named numeric families 21–40 (formerly core seed templates). */
function makeVectorFamily21(){
  let a=ri(-5,8),b=ri(-5,8),c=ri(-5,8),d=ri(-5,8),e=ri(-5,8),f=ri(-5,8),ans=a*d+b*e+c*f;
  return qNum(V,'Vector dot product',`Find \\(\\mathbf a\\cdot\\mathbf b\\) for \\(\\mathbf a=\\langle${a},${b},${c}\\rangle\\) and \\(\\mathbf b=\\langle${d},${e},${f}\\rangle\\).`,ans,`Multiply corresponding components and add: \\(${a}(${d})+${b}(${e})+${c}(${f})=${ans}\\).`)
}

function makeVectorFamily22(){
  let x=ri(-8,8),y=ri(-8,8),z=ri(1,8),ans=Math.hypot(x,y,z);
  return qNum(V,'Vector magnitude',`Find \\(\\lVert\\mathbf v\\rVert\\) for \\(\\mathbf v=\\langle${x},${y},${z}\\rangle\\).`,ans,`\\(\\lVert\\mathbf v\\rVert=\\sqrt{${x}^2+${y}^2+${z}^2}=${nfmt(ans)}\\).`)
}

function makeVectorFamily23(){
  let a=ri(1,7),b=ri(1,7),c=ri(1,7),d=ri(1,7),e=ri(1,7),f=ri(1,7),cx=b*f-c*e,cy=c*d-a*f,cz=a*e-b*d,ans=Math.hypot(cx,cy,cz);
  return qNum(V,'Cross-product magnitude',`For \\(\\mathbf a=\\langle${a},${b},${c}\\rangle\\), \\(\\mathbf b=\\langle${d},${e},${f}\\rangle\\), find \\(\\lVert\\mathbf a\\times\\mathbf b\\rVert\\).`,ans,`The cross product is \\(\\langle${cx},${cy},${cz}\\rangle\\), whose magnitude is \\(${nfmt(ans)}\\).`)
}

function makeVectorFamily24(){
  let a=ri(1,7),b=ri(1,7),x=ri(1,7),y=ri(1,7),dot=a*x+b*y,den=Math.hypot(a,b)*Math.hypot(x,y),ans=Math.acos(Math.max(-1,Math.min(1,dot/den)))*180/Math.PI;
  return qNum(V,'Angle between vectors',`Find the angle between \\(\\mathbf a=\\langle${a},${b}\\rangle\\) and \\(\\mathbf b=\\langle${x},${y}\\rangle\\) in degrees.`,ans,`\\(\\cos\\theta=(\\mathbf a\\cdot\\mathbf b)/(\\lVert a\\rVert\\lVert b\\rVert)\\); therefore \\(\\theta=${nfmt(ans)}^\\circ\\).`,'degrees')
}

function makeVectorFamily25(){
  let a=ri(-5,7),b=ri(-5,7),c=ri(-5,7),ans=a+b+c;
  return qNum(V,'Divergence',`Find \\(\\nabla\\cdot\\mathbf F\\) for \\(\\mathbf F=\\langle${a}x,${b}y,${c}z\\rangle\\).`,ans,`\\(\\nabla\\cdot F=\\partial_x(${a}x)+\\partial_y(${b}y)+\\partial_z(${c}z)=${a}+${b}+${c}=${ans}\\).`)
}

function makeVectorFamily26(){
  let a=ri(-6,6),b=ri(-6,6),ans=b+a;
  return qNum(V,'Curl z-component',`For \\(\\mathbf F=\\langle-${a}y,${b}x,0\\rangle\\), find the z-component of \\(\\nabla\\times\\mathbf F\\).`,ans,`\\((\\nabla\\times F)_z=\\partial F_y/\\partial x-\\partial F_x/\\partial y=${b}-(${-a})=${ans}\\).`)
}

function makeVectorFamily27(){
  let a=ri(1,5),b=ri(1,5),x=ri(1,5),y=ri(1,5),ans=Math.hypot(2*a*x,2*b*y);
  return qNum(V,'Gradient magnitude',`For \\(\\phi(x,y)=${a}x^2+${b}y^2\\), find \\(\\lVert\\nabla\\phi\\rVert\\) at \\((x,y)=(${x},${y})\\).`,ans,`\\(\\nabla\\phi=\\langle2${a}x,2${b}y\\rangle\\); at the point this is \\(\\langle${2*a*x},${2*b*y}\\rangle\\), magnitude \\(${nfmt(ans)}\\).`)
}

function makeVectorFamily28(){
  let a=ri(1,4),b=ri(1,4),x=ri(1,5),y=ri(1,5),ux=1/Math.sqrt(2),uy=1/Math.sqrt(2),ans=2*a*x*ux+2*b*y*uy;
  return qNum(V,'Directional derivative',`For \\(f(x,y)=${a}x^2+${b}y^2\\), find the directional derivative at \\((${x},${y})\\) toward unit vector \\(\\mathbf u=\\langle1/\\sqrt2,1/\\sqrt2\\rangle\\).`,ans,`\\(D_uf=\\nabla f\\cdot u=2${a}(${x})/\\sqrt2+2${b}(${y})/\\sqrt2=${nfmt(ans)}\\).`)
}

function makeVectorFamily29(){
  let a=ri(1,8),x=ri(-5,5),y=ri(-5,5),ans=2*a*x;
  return qNum(V,'Directional derivative on x-axis',`For \\(f(x,y)=${a}x^2+3y^2\\), find the x-directional derivative at \\((${x},${y})\\).`,ans,`\\(D_{\\mathbf i}f=\\partial f/\\partial x=2${a}x\\), so the value is \\(${ans}\\).`)
}

function makeVectorFamily30(){
  let a=ri(1,9),b=ri(1,9),area=ri(1,10),ans=a*area;
  return qNum(V,'Planar flux',`A constant vector field has normal component \\(F_n=${a}\\). Find its flux through a plane of area \\(A=${area}\\).`,ans,`\\(\\Phi=\\mathbf F\\cdot\\hat n A=F_n A=${a}(${area})=${ans}\\).`)
}

function makeVectorFamily31(){
  let fx=ri(-8,8),fy=ri(-8,8),dx=ri(-6,6),dy=ri(-6,6),ans=fx*dx+fy*dy;
  return qNum(V,'Work integral',`A constant field \\(\\mathbf F=\\langle${fx},${fy}\\rangle\\) acts along displacement \\(\\Delta\\mathbf r=\\langle${dx},${dy}\\rangle\\). Find the line integral \\(\\int F\\cdot dr\\).`,ans,`For a constant field, work is the dot product: \\(${fx}(${dx})+${fy}(${dy})=${ans}\\).`)
}

function makeVectorFamily32(){
  let ax=ri(1,7),ay=ri(1,7),bx=ri(1,7),by=ri(1,7),ans=Math.abs(ax*by-ay*bx)/2;
  return qNum(V,'Triangle area',`Find the area of the triangle formed by vectors \\(\\mathbf a=\\langle${ax},${ay}\\rangle\\) and \\(\\mathbf b=\\langle${bx},${by}\\rangle\\).`,ans,`\\(A=\\frac12\\lvert a_xb_y-a_yb_x\\rvert=\\frac12\\lvert${ax}(${by})-${ay}(${bx})\\rvert=${nfmt(ans)}\\).`)
}

function makeVectorFamily33(){
  let a=ri(1,5),b=ri(1,5),c=ri(1,5),ans=2*(a+b+c);
  return qNum(V,'Laplacian',`Find \\(\\nabla^2\\phi\\) for \\(\\phi=${a}x^2+${b}y^2+${c}z^2\\).`,ans,`The second partial derivatives are \\(2${a},2${b},2${c}\\); their sum is \\(${ans}\\).`)
}

function makeVectorFamily34(){
  let a=ri(1,5),b=ri(1,5),c=ri(1,5),l=ri(1,4),ans=(a+b+c)*Math.pow(l,3);
  return qNum(V,'Divergence theorem',`For \\(F=\\langle${a}x,${b}y,${c}z\\rangle\\), find total outward flux from a cube \\(0\\leq x,y,z\\leq${l}\\).`,ans,`Divergence is \\(${a}+${b}+${c}=${a+b+c}\\). By the divergence theorem, flux is \\((\\nabla\\cdot F)V=${a+b+c}(${l}^3)=${ans}\\).`)
}

function makeVectorFamily35(){
  let curl=ri(1,9),area=ri(1,8),ans=curl*area;
  return qNum(V,'Stokes theorem',`A surface has constant normal curl component \\( (\\nabla\\times F)\\cdot n=${curl}\\) and area \\(A=${area}\\). Find the circulation around its boundary.`,ans,`By Stokes' theorem, \\(\\oint F\\cdot dr=\\iint (\\nabla\\times F)\\cdot n\\,dS=${curl}(${area})=${ans}\\).`)
}

function makeVectorFamily36(){
  let a=ri(1,8),ans=2*a;
  return qNum(V,'Rotational field curl',`For \\(F=\\langle-${a}y,${a}x,0\\rangle\\), find \\(\\lVert\\nabla\\times F\\rVert\\).`,ans,`The curl is \\(\\langle0,0,2${a}\\rangle\\), so its magnitude is \\(${ans}\\).`)
}

function makeVectorFamily37(){
  let a=ri(1,5),b=ri(1,5),x=ri(1,5),y=ri(1,5),vx=ri(-3,3)||1,vy=ri(-3,3)||2,ans=2*a*x*vx+2*b*y*vy;
  return qNum(V,'Scalar change along vector',`For \\(f=${a}x^2+${b}y^2\\), find \\(\\nabla f\\cdot v\\) at \\((${x},${y})\\) for \\(v=\\langle${vx},${vy}\\rangle\\).`,ans,`\\(\\nabla f=\\langle${2*a*x},${2*b*y}\\rangle\\); dot with v gives \\(${ans}\\).`)
}

function makeVectorFamily38(){
  let a=ri(1,7),b=ri(1,7),c=ri(1,7),d=ri(1,7),ans=Math.abs(a*d-b*c);
  return qNum(V,'Parallelogram area',`Find the parallelogram area spanned by \\(\\mathbf a=\\langle${a},${b}\\rangle\\) and \\(\\mathbf b=\\langle${c},${d}\\rangle\\).`,ans,`Area is the absolute determinant: \\(|${a}(${d})-${b}(${c})|=${ans}\\).`)
}

function makeVectorFamily39(){
  let a=ri(1,8),b=ri(1,8),c=ri(1,8);
  return qNum(V,'Parallelepiped volume',`Vectors \\(\\langle${a},0,0\\rangle\\), \\(\\langle0,${b},0\\rangle\\), and \\(\\langle0,0,${c}\\rangle\\) span a parallelepiped. Find its volume.`,a*b*c,`The absolute scalar triple product is \\(${a}\\cdot${b}\\cdot${c}=${a*b*c}\\).`)
}

function makeVectorFamily40(){
  let a=ri(1,8),b=ri(1,8),c=ri(1,8),x=ri(-4,4),y=ri(-4,4),z=ri(-4,4),ans=a+b+c;
  return qNum(V,'Divergence at a point',`For \\(F=\\langle${a}x+${y},${b}y+${z},${c}z+${x}\\rangle\\), find divergence at \\((${x},${y},${z})\\).`,ans,`The constants vanish under differentiation; \\(\\nabla\\cdot F=${a}+${b}+${c}=${ans}\\).`)
}

NUMERIC_GENERATOR_REGISTRY.vector = [numericEntry('vector',"Dot product · family 21 (randomized variant)",'vector-family-21',()=>makeVectorFamily21()),
    numericEntry('vector',"Vector magnitude · family 22 (randomized variant)",'vector-family-22',()=>makeVectorFamily22()),
    numericEntry('vector',"Cross-product magnitude · family 23 (randomized variant)",'vector-family-23',()=>makeVectorFamily23()),
    numericEntry('vector',"Angle between two vectors · family 24 (randomized variant)",'vector-family-24',()=>makeVectorFamily24()),
    numericEntry('vector',"Divergence of a vector field · family 25 (randomized variant)",'vector-family-25',()=>makeVectorFamily25()),
    numericEntry('vector',"Curl z-component · family 26 (randomized variant)",'vector-family-26',()=>makeVectorFamily26()),
    numericEntry('vector',"Gradient of a scalar field · family 27 (randomized variant)",'vector-family-27',()=>makeVectorFamily27()),
    numericEntry('vector',"Directional derivative · family 28 (randomized variant)",'vector-family-28',()=>makeVectorFamily28()),
    numericEntry('vector',"Directional derivative along x-axis · family 29 (randomized variant)",'vector-family-29',()=>makeVectorFamily29()),
    numericEntry('vector',"Flux through a planar surface · family 30 (randomized variant)",'vector-family-30',()=>makeVectorFamily30()),
    numericEntry('vector',"Work along a straight displacement · family 31 (randomized variant)",'vector-family-31',()=>makeVectorFamily31()),
    numericEntry('vector',"Area of a triangle from vectors · family 32 (randomized variant)",'vector-family-32',()=>makeVectorFamily32()),
    numericEntry('vector',"Laplacian of a quadratic field · family 33 (randomized variant)",'vector-family-33',()=>makeVectorFamily33()),
    numericEntry('vector',"Flux by divergence theorem · family 34 (randomized variant)",'vector-family-34',()=>makeVectorFamily34()),
    numericEntry('vector',"Stokes circulation for constant curl · family 35 (randomized variant)",'vector-family-35',()=>makeVectorFamily35()),
    numericEntry('vector',"Curl magnitude of a rotational field · family 36 (randomized variant)",'vector-family-36',()=>makeVectorFamily36()),
    numericEntry('vector',"Scalar change along a vector · family 37 (randomized variant)",'vector-family-37',()=>makeVectorFamily37()),
    numericEntry('vector',"Area of a parallelogram · family 38 (randomized variant)",'vector-family-38',()=>makeVectorFamily38()),
    numericEntry('vector',"Triple product volume · family 39 (randomized variant)",'vector-family-39',()=>makeVectorFamily39()),
    numericEntry('vector',"Divergence at a point · family 40 (randomized variant)",'vector-family-40',()=>makeVectorFamily40()),
    numericEntry('vector',"Gradient component · family 01 (randomized variant)","vector-family-01",()=>makeVectorExpansionFamily01("Gradient component · family 01 (randomized variant)")),
    numericEntry('vector',"Linear-field divergence · family 02 (randomized variant)","vector-family-02",()=>makeVectorExpansionFamily02("Linear-field divergence · family 02 (randomized variant)")),
    numericEntry('vector',"Curl component · family 03 (randomized variant)","vector-family-03",()=>makeVectorExpansionFamily03("Curl component · family 03 (randomized variant)")),
    numericEntry('vector',"Dot product and determinant · family 04 (randomized variant)","vector-family-04",()=>makeVectorExpansionFamily04("Dot product and determinant · family 04 (randomized variant)")),
    numericEntry('vector',"Vector magnitude · family 05 (randomized variant)","vector-family-05",()=>makeVectorExpansionFamily05("Vector magnitude · family 05 (randomized variant)")),
    numericEntry('vector',"Cross-product component · family 06 (randomized variant)","vector-family-06",()=>makeVectorExpansionFamily06("Cross-product component · family 06 (randomized variant)")),
    numericEntry('vector',"Directional derivative · family 07 (randomized variant)","vector-family-07",()=>makeVectorExpansionFamily07("Directional derivative · family 07 (randomized variant)")),
    numericEntry('vector',"Constant-field line integral · family 08 (randomized variant)","vector-family-08",()=>makeVectorExpansionFamily08("Constant-field line integral · family 08 (randomized variant)")),
    numericEntry('vector',"Surface area factor · family 09 (randomized variant)","vector-family-09",()=>makeVectorExpansionFamily09("Surface area factor · family 09 (randomized variant)")),
    numericEntry('vector',"Divergence-theorem flux · family 10 (randomized variant)","vector-family-10",()=>makeVectorExpansionFamily10("Divergence-theorem flux · family 10 (randomized variant)")),
    numericEntry('vector',"Curl component · family 11 (randomized variant)","vector-family-11",()=>makeVectorExpansionFamily11("Curl component · family 11 (randomized variant)")),
    numericEntry('vector',"Line integral contribution · family 12 (randomized variant)","vector-family-12",()=>makeVectorExpansionFamily12("Line integral contribution · family 12 (randomized variant)")),
    numericEntry('vector',"Laplacian of scalar potential · family 13 (randomized variant)","vector-family-13",()=>makeVectorExpansionFamily13("Laplacian of scalar potential · family 13 (randomized variant)")),
    numericEntry('vector',"Parallelepiped volume · family 14 (randomized variant)","vector-family-14",()=>makeVectorExpansionFamily14("Parallelepiped volume · family 14 (randomized variant)")),
    numericEntry('vector',"Curl of a linear field · family 15 (randomized variant)","vector-family-15",()=>makeVectorExpansionFamily15("Curl of a linear field · family 15 (randomized variant)")),
    numericEntry('vector',"Vector-field work · family 16 (randomized variant)","vector-family-16",()=>makeVectorExpansionFamily16("Vector-field work · family 16 (randomized variant)")),
    numericEntry('vector',"Divergence versus Laplacian · family 17 (randomized variant)","vector-family-17",()=>makeVectorExpansionFamily17("Divergence versus Laplacian · family 17 (randomized variant)")),
    numericEntry('vector',"Resultant magnitude · family 18 (randomized variant)","vector-family-18",()=>makeVectorExpansionFamily18("Resultant magnitude · family 18 (randomized variant)")),
    numericEntry('vector',"Vector-field component value · family 19 (randomized variant)","vector-family-19",()=>makeVectorExpansionFamily19("Vector-field component value · family 19 (randomized variant)")),
    numericEntry('vector',"Euclidean and L1 norms · family 20 (randomized variant)","vector-family-20",()=>makeVectorExpansionFamily20("Euclidean and L1 norms · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(V,'Flux of a linear field through a sphere','vector-linear-field-sphere-flux',()=>{
  const a=ri(1,5),b=ri(1,5),c=ri(1,5),R=ri(1,4),ans=(a+b+c)*(4*Math.PI*R**3/3);
  return qNum(V,'Flux of a linear field through a sphere',`For \\(\\mathbf F=\\langle ${a}x,${b}y,${c}z\\rangle\\), find the outward flux through the sphere \\(x^2+y^2+z^2=${R*R}\\) using the divergence theorem.`,ans,`\\(\\nabla\\cdot\\mathbf F=${a}+${b}+${c}=${a+b+c}\\). The sphere volume is \\(4\\pi R^3/3\\), so flux \\(=(${a+b+c})4\\pi(${R})^3/3=${nfmt(ans)}\\).`)
});
appendNumericRecipe(V,'Field scenario · Work done on a three-axis inspection robot','scenario-vector-3d-work',()=>{
  const F=[ri(-5,7),ri(-5,7),ri(-5,7)],d=[ri(-4,6),ri(-4,6),ri(-4,6)],ans=F.reduce((sum,val,i)=>sum+val*d[i],0);
  const q=qNum(V,'Field scenario · Work done on a three-axis inspection robot',`An inspection robot experiences force \\(\\mathbf F=\\langle${F.join(',')}\\rangle\\,\\mathrm{N}\\) while its small displacement is \\(\\Delta\\mathbf r=\\langle${d.join(',')}\\rangle\\,\\mathrm{m}\\). Find the work \\(W=\\mathbf F\\cdot\\Delta\\mathbf r\\).`,ans,`\\(W=F_x\\Delta x+F_y\\Delta y+F_z\\Delta z=${F[0]}(${d[0]})+${F[1]}(${d[1]})+${F[2]}(${d[2]})=${ans}\\,\\mathrm{J}\\).`);
  return attachDiagram(q,'vector3d','Three coordinate axes x, y, z with a force vector and displacement vector in three dimensions. Work equals the dot product of the two vectors.');
});
appendNumericRecipe(V,'Applied · Divergence of a measured airflow field','scenario-vector-airflow-divergence',()=>{
  const a=ri(-3,5),b=ri(-3,5),c=ri(-3,5),ans=a+b+c;
  return qNum(V,'Applied · Divergence of a measured airflow field',`A local velocity model around a sensor enclosure is \\(\\mathbf u(x,y,z)=\\langle ${a}x, ${b}y, ${c}z\\rangle\\,\\mathrm{m}/\\mathrm{s}\\). Find \\(\\nabla\\cdot\\mathbf u\\) at any point.`,ans,`\\(\\nabla\\cdot\\mathbf u=\\partial u_x/\\partial x+\\partial u_y/\\partial y+\\partial u_z/\\partial z=${a}+(${b})+(${c})=${ans}\\,\\mathrm{s}^{-1}\\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('vector','Additional · Dot product of two measured vectors','vector-topup-01',()=>{
  const ax=ri(-5,8),ay=ri(-5,8),az=ri(-5,8),bx=ri(-5,8),by=ri(-5,8),bz=ri(-5,8),ans=ax*bx+ay*by+az*bz;
  return qNum(V,'Dot product of two measured vectors',`Find \\(\\mathbf a\\cdot\\mathbf b\\) for \\(\\mathbf a=(${ax},${ay},${az})\\) and \\(\\mathbf b=(${bx},${by},${bz})\\).`,ans,`\\(\\mathbf a\\cdot\\mathbf b=${ax}(${bx})+${ay}(${by})+${az}(${bz})=${ans}\\).`);
});
appendNumericRecipe('vector','Additional · Magnitude of a planar cross product','vector-topup-02',()=>{
  const ax=ri(-6,7),ay=ri(-6,7),bx=ri(-6,7),by=ri(-6,7),ans=Math.abs(ax*by-ay*bx);
  return qNum(V,'Magnitude of a planar cross product',`For \\(\\mathbf a=(${ax},${ay},0)\\) and \\(\\mathbf b=(${bx},${by},0)\\), find \\(|\\mathbf a\\times\\mathbf b|\\).`,ans,`The z-component is \\(a_xb_y-a_yb_x=${ax}(${by})-${ay}(${bx})\\). Its magnitude is \\(${ans}\\).`);
});
appendNumericRecipe('vector','Additional · Scalar projection onto a direction vector','vector-topup-03',()=>{
  const ax=ri(-5,8),ay=ri(-5,8),bx=ri(1,6),by=ri(1,6),dot=ax*bx+ay*by,ans=dot/Math.hypot(bx,by);
  return qNum(V,'Scalar projection onto a direction vector',`Find the scalar projection of \\(\\mathbf a=(${ax},${ay})\\) onto \\(\\mathbf b=(${bx},${by})\\).`,ans,`The scalar projection is \\((\\mathbf a\\cdot\\mathbf b)/|\\mathbf b|=${dot}/\\sqrt{${bx}^2+${by}^2}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('vector','Additional · Flux of a constant vector through a tilted surface','vector-topup-04',()=>{
  const F=ri(2,15),area=ri(1,10),theta=pick([0,30,45,60,90]),ans=F*area*Math.cos(theta*Math.PI/180);
  return qNum(V,'Flux of a constant vector through a tilted surface',`A constant vector field has magnitude \\(${F}\\), and a flat surface has area \\(${area}\\). The field makes angle \\(${theta}^\\circ\\) with the surface normal. Find flux.`,ans,`\\(\\Phi=FA\\cos\\theta=${F}(${area})\\cos(${theta}^\\circ)=${nfmt(ans)}\\).`);
});
appendNumericRecipe('vector','Additional · Directional derivative of a scalar field','vector-topup-05',()=>{
  const x=ri(-3,5),theta=pick([0,30,45,60,90]),ans=6*x*Math.cos(theta*Math.PI/180)+2*Math.sin(theta*Math.PI/180);
  return qNum(V,'Directional derivative of a scalar field',`For \\(f(x,y)=3x^2+2y\\), find the directional derivative at \\((x,y)=(${x},1)\\) in the unit direction \\(\\mathbf u=(\\cos${theta}^\\circ,\\sin${theta}^\\circ)\\).`,ans,`\\(\\nabla f=(6x,2)\\), so \\(D_{\\mathbf u}f=(6x,2)\\cdot\\mathbf u=6(${x})\\cos${theta}^\\circ+2\\sin${theta}^\\circ=${nfmt(ans)}\\).`);
});

/* Category-owned tree generators. Prompts, data dictionaries, SVGs and formula logic live here. */
function makeVectorScenarioSetup(){const a=ri(2,6);return {category:NAMESPACE_VECTOR,title:'Airflow vector-field survey',prompt:String.raw`A localized airflow model near a sensor array is represented by \(\mathbf F(x,y,z)=\langle axy, yz, 2xz\rangle\), with dimensionless coefficient \(a=${a}\). All coordinates are normalized. The survey point is \(P=(x_P,y_P,z_P)=(1,2,3)\). The divergence and curl at this point describe local expansion and rotational tendency of the model field.`,transferData:{a: a,x_P: 1,y_P: 2,z_P: 3},illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 125"><path d="M40 100 L160 100 L160 20 M40 100 L10 70" stroke="currentColor" stroke-width="1.4" fill="none"/><path d="M40 100 L112 57 L184 30" stroke="#2d83c5" stroke-width="2.4" fill="none"/><path d="M177 28 L184 30 L180 37" stroke="#2d83c5" stroke-width="2.4" fill="none"/><circle cx="112" cy="57" r="4" fill="#df9a30"/><text x="121" y="51" fill="currentColor" font-size="12">P</text><text x="166" y="16" fill="currentColor" font-size="11">z</text><text x="170" y="114" fill="currentColor" font-size="11">x</text><text x="8" y="64" fill="currentColor" font-size="11">y</text></svg>`,alt:'A three-dimensional coordinate sketch marks point P and a representative vector in the airflow field.'}],custom:false};}
function makeVectorScenarioA(dto={}){const d=dto?.['vector-airflow-root-v18']||{};const a=Number(d.a),y=Number(d.y_P),z=Number(d.z_P),x=Number(d.x_P),ans=a*y+z+2*x;const q=qNum(V,'Divergence at the survey point',String.raw`Calculate \(\nabla\cdot\mathbf F\) at \(P\).`,ans,String.raw`\(\nabla\cdot\mathbf F=ay+z+2x\); at \(P\), this is \(${a}(${y})+${z}+2(${x})=${ans}\).`);q.transferData={divF: ans};return q;}
function makeVectorScenarioB(dto={}){const d=dto?.['vector-airflow-root-v18']||{};const a=Number(d.a),x=Number(d.x_P),y=Number(d.y_P),z=Number(d.z_P),cx=-y,cy=-2*z,cz=-a*x,ans=Math.hypot(cx,cy,cz);const q=qNum(V,'Curl magnitude at the survey point',String.raw`Find the magnitude \(|\nabla\times\mathbf F|\) at \(P\).`,ans,String.raw`\(\nabla\times\mathbf F=\langle-y,-2z,-ax\rangle=\langle ${cx},${cy},${cz}\rangle\), so the magnitude is \(\sqrt{${cx}^2+${cy}^2+${cz}^2}=${nfmt(ans)}\).`);q.transferData={curlMagnitude: ans,curl_x: cx,curl_y: cy,curl_z: cz};return q;}
function makeVectorScenarioBA(dto = {}) {
  const divergence = Number(dto['vector-airflow-a-v18']?.divF);
  const curlMagnitude = Number(dto['vector-airflow-b-v18']?.curlMagnitude);
  const ratio = curlMagnitude / divergence;
  const q = qNum(V, 'Rotation-to-expansion ratio', String.raw`Compare rotational intensity with local expansion by finding the dimensionless ratio \(\rho=|\nabla\times\mathbf F|/(\nabla\cdot\mathbf F)\).`, ratio,
    String.raw`\(\rho=|\nabla\times\mathbf F|/(\nabla\cdot\mathbf F)=${nfmt(curlMagnitude)}/${nfmt(divergence)}=${nfmt(ratio)}\).`);
  q.transferData = { rotationExpansionRatio: ratio };
  return q;
}
function makeVectorScenarioBB(dto={}){const dt=dto||{};const a=Number(dt['vector-airflow-root-v18']?.a),mag=Number(dt['vector-airflow-b-v18']?.curlMagnitude),ans=Math.acos(a/mag);const q=qNum(V,'Curl angle relative to the negative vertical axis',String.raw`Find the acute angle between the curl vector and the negative vertical axis, in radians.`,ans,String.raw`\(\cos\theta=\frac{a}{|\nabla\times\mathbf F|}=\frac{${a}}{${nfmt(mag)}}\), so \(\theta=\arccos(${nfmt(a/mag)})=${nfmt(ans)}\,\mathrm{rad}\).`,'number',{quantUnit:'rad'});q.transferData={curlAxisAngle: ans};return q;}
function registerVectorScenarioTree(){
  const rootKey='vector-airflow-root-v18',aKey='vector-airflow-a-v18',bKey='vector-airflow-b-v18',baKey='vector-airflow-ba-v18',bbKey='vector-airflow-bb-v18';
  setupRecipe(NAMESPACE_VECTOR,'Vector calculus · Airflow field tree',rootKey,makeVectorScenarioSetup,3,{treeChildrenRecipeKeys:[aKey]});
  appendNumericRecipe(NAMESPACE_VECTOR,'Vector · Calculation A',aKey,makeVectorScenarioA,3,{parentRecipeKey:rootKey,treeChildrenRecipeKeys:[bKey]});
  appendNumericRecipe(NAMESPACE_VECTOR,'Vector · Calculation B',bKey,makeVectorScenarioB,3,{parentRecipeKey:aKey,treeChildrenRecipeKeys:[baKey,bbKey]});
  appendNumericRecipe(NAMESPACE_VECTOR,'Vector · Follow-up A',baKey,makeVectorScenarioBA,3,{parentRecipeKey:bKey});
  appendNumericRecipe(NAMESPACE_VECTOR,'Vector · Follow-up B',bbKey,makeVectorScenarioBB,3,{parentRecipeKey:bKey});
}
registerVectorScenarioTree();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const VECTOR_CONCEPT_CARDS = [
    [
      "Scalar field",
      "A function assigning one scalar value to each point in a region."
    ],
    [
      "Vector field",
      "A function assigning a vector to each point in a region."
    ],
    [
      "Gradient",
      "A vector of partial derivatives pointing in the direction of greatest local increase of a scalar field."
    ],
    [
      "Directional derivative",
      "The rate of change of a scalar field in a specified unit direction."
    ],
    [
      "Divergence",
      "A scalar differential operator measuring local outward flux density of a vector field."
    ],
    [
      "Curl",
      "A vector differential operator measuring local rotation of a vector field."
    ],
    [
      "Conservative field",
      "A vector field expressible as the gradient of a potential function on the region."
    ],
    [
      "Potential function",
      "A scalar function whose gradient equals a given conservative vector field."
    ],
    [
      "Line integral",
      "An integral accumulated along a curve, possibly weighting a scalar field or a vector field along the path."
    ],
    [
      "Surface integral",
      "An integral over a surface, often involving a scalar density or a vector flux."
    ],
    [
      "Flux",
      "The amount of a vector field crossing an oriented surface, measured through its normal component."
    ],
    [
      "Green theorem",
      "A theorem relating a planar closed-curve line integral to a double integral over the enclosed region."
    ],
    [
      "Stokes theorem",
      "A theorem relating the circulation around a boundary curve to the surface integral of curl."
    ],
    [
      "Divergence theorem",
      "A theorem relating outward flux across a closed surface to the volume integral of divergence."
    ],
    [
      "Unit normal vector",
      "A vector of length one perpendicular to a surface or curve at a specified point."
    ],
    [
      "Irrotational field",
      "A vector field whose curl is zero throughout the region."
    ],
    [
      "Solenoidal field",
      "A vector field whose divergence is zero throughout the region."
    ],
    [
      "Jacobian matrix",
      "The matrix of first-order partial derivatives of a vector-valued function."
    ],
    [
      "Laplacian",
      "The scalar differential operator formed by the divergence of a gradient."
    ],
    [
      "Path independence",
      "The property that a line integral of a conservative field depends only on endpoints, not on the path."
    ],
    [
      "Scalar field — extended concept",
      "A function assigning a scalar value to each point in a region of space."
    ],
    [
      "Vector field — extended concept",
      "A function assigning a vector to each point in a region of space."
    ],
    [
      "Gradient — extended concept",
      "The vector of partial derivatives of a scalar field, pointing in the direction of steepest local increase."
    ],
    [
      "Divergence — extended concept",
      "A scalar differential operator measuring local source strength or net outward flow per unit volume."
    ],
    [
      "Curl — extended concept",
      "A vector differential operator describing local circulation of a vector field."
    ],
    [
      "Directional derivative — extended concept",
      "The rate of change of a scalar field in a specified unit direction."
    ],
    [
      "Conservative vector field",
      "A field expressible as the gradient of a potential on the domain, with path-independent line integrals there."
    ],
    [
      "Potential function — extended concept",
      "A scalar function whose gradient equals a given conservative vector field."
    ],
    [
      "Flux integral",
      "An integral of the normal component of a vector field through an oriented surface."
    ],
    [
      "Line integral — extended concept",
      "An integral accumulated along a curve, using either a scalar weight or a vector field dotted with a path differential."
    ],
    [
      "Surface integral — extended concept",
      "An integral over a two-dimensional surface, often used to calculate mass, area-weighted quantities, or flux."
    ],
    [
      "Volume integral",
      "An integral over a three-dimensional region."
    ],
    [
      "Divergence theorem — extended concept",
      "The outward flux across a closed surface equals the volume integral of divergence inside, under suitable regularity."
    ],
    [
      "Stokes theorem — extended concept",
      "The circulation around a closed boundary curve equals the flux of curl through an oriented spanning surface."
    ],
    [
      "Green theorem — extended concept",
      "A planar circulation or flux line integral can be related to a double integral over the enclosed region."
    ],
    [
      "Laplacian — extended concept",
      "The divergence of the gradient; in Cartesian coordinates it is the sum of second partial derivatives."
    ],
    [
      "Jacobian matrix — extended concept",
      "The matrix of first partial derivatives of a vector-valued map."
    ],
    [
      "Coordinate transformation",
      "A change of variables that maps points between coordinate descriptions, with appropriate scaling factors in integrals."
    ],
    [
      "Unit normal vector — extended concept",
      "A vector of magnitude one perpendicular to a surface at a regular point."
    ],
    [
      "Triple product",
      "A scalar or vector expression combining three vectors, commonly used for volume and cross-product identities."
    ]
  ];
registerConceptGeneratorsForCategory(NAMESPACE_VECTOR, VECTOR_CONCEPT_CARDS);
