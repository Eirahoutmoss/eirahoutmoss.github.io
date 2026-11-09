(()=>{var Rp=Object.defineProperty;var Cp=(n,e)=>{for(var t in e)Rp(n,t,{get:e[t],enumerable:!0})};var ks={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pp=0,Hu=1,Lp=2;var xd=1,kp=2,Pi=3,Qi=0,Yt=1,dn=2;var ui=0,pr=1,kt=2,Vu=3,Gu=4,Ip=5,Ms=100,Dp=101,Up=102,Wu=103,qu=104,Np=200,zp=201,Op=202,Fp=203,tc=204,nc=205,Bp=206,Hp=207,Vp=208,Gp=209,Wp=210,qp=211,Xp=212,Yp=213,Kp=214,Zp=0,jp=1,Jp=2,To=3,$p=4,Qp=5,em=6,tm=7,_d=0,nm=1,im=2,$i=0,sm=1,rm=2,am=3,om=4,lm=5,cm=6;var bd=300,vr=301,yr=302,ic=303,sc=304,Yo=306,Ii=1e3,Qn=1001,rc=1002,rn=1003,Xu=1004;var wl=1005;var nn=1006,um=1007;var aa=1008;var hi=1009,hm=1010,dm=1011,zc=1012,Md=1013,ji=1014,Ji=1015,In=1016,Sd=1017,wd=1018,Es=1020,fm=1021,ei=1023,pm=1024,mm=1025,Ts=1026,xr=1027,gm=1028,Ed=1029,vm=1030,Td=1031,Ad=1033,El=33776,Tl=33777,Al=33778,Rl=33779,Yu=35840,Ku=35841,Zu=35842,ju=35843,Rd=36196,Ju=37492,$u=37496,Qu=37808,eh=37809,th=37810,nh=37811,ih=37812,sh=37813,rh=37814,ah=37815,oh=37816,lh=37817,ch=37818,uh=37819,hh=37820,dh=37821,Cl=36492,fh=36494,ph=36495,ym=36283,mh=36284,gh=36285,vh=36286;var Ao=2300,Ro=2301,Pl=2302,yh=2400,xh=2401,_h=2402;var Cd=3e3,As=3001,xm=3200,_m=3201,bm=0,Mm=1,sn="",an="srgb",Di="srgb-linear",Oc="display-p3",Ko="display-p3-linear",Co="linear",Lt="srgb",Po="rec709",Lo="p3";var Xs=7680;var bh=519,Sm=512,wm=513,Em=514,Pd=515,Tm=516,Am=517,Rm=518,Cm=519,ac=35044;var Mh="300 es",oc=1035,Li=2e3,ko=2001,di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=1234567,na=Math.PI/180,oa=180/Math.PI;function ki(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function hn(n,e,t){return Math.max(e,Math.min(t,n))}function Fc(n,e){return(n%e+e)%e}function Pm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Lm(n,e,t){return n!==e?(t-n)/(e-n):0}function ia(n,e,t){return(1-t)*n+t*e}function km(n,e,t,i){return ia(n,e,1-Math.exp(-t*i))}function Im(n,e=1){return e-Math.abs(Fc(n,e*2)-e)}function Dm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Um(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Nm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zm(n,e){return n+Math.random()*(e-n)}function Om(n){return n*(.5-Math.random())}function Fm(n){n!==void 0&&(Sh=n);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bm(n){return n*na}function Hm(n){return n*oa}function lc(n){return(n&n-1)===0&&n!==0}function Vm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Io(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gm(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ma={DEG2RAD:na,RAD2DEG:oa,generateUUID:ki,clamp:hn,euclideanModulo:Fc,mapLinear:Pm,inverseLerp:Lm,lerp:ia,damp:km,pingpong:Im,smoothstep:Dm,smootherstep:Um,randInt:Nm,randFloat:zm,randFloatSpread:Om,seededRandom:Fm,degToRad:Bm,radToDeg:Hm,isPowerOfTwo:lc,ceilPowerOfTwo:Vm,floorPowerOfTwo:Io,setQuaternionFromProperEuler:Gm,normalize:St,denormalize:ci},we=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],b=s[4],I=s[7],B=s[2],S=s[5],_=s[8];return r[0]=o*v+a*M+l*B,r[3]=o*m+a*b+l*S,r[6]=o*p+a*I+l*_,r[1]=c*v+u*M+d*B,r[4]=c*m+u*b+d*S,r[7]=c*p+u*I+d*_,r[2]=h*v+f*M+g*B,r[5]=h*m+f*b+g*S,r[8]=h*p+f*I+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ll=new dt;function Ld(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wm(){let n=la("canvas");return n.style.display="block",n}var wh={};function sa(n){n in wh||(wh[n]=!0,console.warn(n))}var Eh=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Th=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[Di]:{transfer:Co,primaries:Po,toReference:n=>n,fromReference:n=>n},[an]:{transfer:Lt,primaries:Po,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ko]:{transfer:Co,primaries:Lo,toReference:n=>n.applyMatrix3(Th),fromReference:n=>n.applyMatrix3(Eh)},[Oc]:{transfer:Lt,primaries:Lo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Th),fromReference:n=>n.applyMatrix3(Eh).convertLinearToSRGB()}},qm=new Set([Di,Ko]),wt={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ja[e].toReference,s=ja[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ja[n].primaries},getTransfer:function(n){return n===sn?Co:ja[n].transfer}};function mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ys,Do=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ys===void 0&&(Ys=la("canvas")),Ys.width=e.width,Ys.height=e.height;let i=Ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=la("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mr(t[i]/255)*255):t[i]=mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xm=0,Uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Il(s[o].image)):r.push(Il(s[o]))}else r=Il(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Il(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Do.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ym=0,Tn=class n extends di{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qn,s=Qn,r=nn,o=aa,a=ei,l=hi,c=n.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=ki(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===As?an:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?As:Cd}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===As?an:sn}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=bd;Tn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,I=(f+1)/2,B=(p+1)/2,S=(u+h)/4,_=(d+v)/4,L=(g+m)/4;return b>I&&b>B?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=S/i,r=_/i):I>B?I<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),i=S/s,r=L/s):B<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),i=_/r,s=L/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===As?an:sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends cc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},No=class extends Tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uc=class extends Tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==g){let m=1-a,p=l*h+c*f+u*g+d*v,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let B=Math.sqrt(b),S=Math.atan2(B,p*M);m=Math.sin(m*S)/B,a=Math.sin(a*S)/B}let I=a*M;if(l=l*m+h*I,c=c*m+f*I,u=u*m+g*I,d=d*m+v*I,m===1-a){let B=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=B,c*=B,u*=B,d*=B}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dl=new U,Ah=new Zt,Rs=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),$a.subVectors(this.max,Zr),Ks.subVectors(e.a,Zr),Zs.subVectors(e.b,Zr),js.subVectors(e.c,Zr),qi.subVectors(Zs,Ks),Xi.subVectors(js,Zs),vs.subVectors(Ks,js);let t=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-vs.z,vs.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,vs.z,0,-vs.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-vs.y,vs.x,0];return!Ul(t,Ks,Zs,js,$a)||(t=[1,0,0,0,1,0,0,0,1],!Ul(t,Ks,Zs,js,$a))?!1:(Qa.crossVectors(qi,Xi),t=[Qa.x,Qa.y,Qa.z],Ul(t,Ks,Zs,js,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ei=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,Ja=new Rs,Ks=new U,Zs=new U,js=new U,qi=new U,Xi=new U,vs=new U,Zr=new U,$a=new U,Qa=new U,ys=new U;function Ul(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ys.fromArray(n,r);let a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),u=i.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Km=new Rs,jr=new U,Nl=new U,Ui=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Km.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(jr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Nl)),this.expandByPoint(jr.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new U,zl=new U,eo=new U,Yi=new U,Ol=new U,to=new U,Fl=new U,es=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zl.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(zl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(eo),a=Yi.dot(this.direction),l=-Yi.dot(eo),c=Yi.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zl).addScaledVector(eo,h),f}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,s,r){Ol.subVectors(t,e),to.subVectors(i,e),Fl.crossVectors(Ol,to);let o=this.direction.dot(Fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(to.crossVectors(Yi,to));if(l<0)return null;let c=a*this.direction.dot(Ol.cross(Yi));if(c<0||l+c>o)return null;let u=-a*Yi.dot(Fl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),o=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zm,e,jm)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ki.crossVectors(i,Ln),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ki.crossVectors(i,Ln)),Ki.normalize(),no.crossVectors(Ln,Ki),s[0]=Ki.x,s[4]=no.x,s[8]=Ln.x,s[1]=Ki.y,s[5]=no.y,s[9]=Ln.y,s[2]=Ki.z,s[6]=no.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],b=i[7],I=i[11],B=i[15],S=s[0],_=s[4],L=s[8],y=s[12],x=s[1],T=s[5],V=s[9],W=s[13],N=s[2],P=s[6],H=s[10],O=s[14],G=s[3],q=s[7],se=s[11],re=s[15];return r[0]=o*S+a*x+l*N+c*G,r[4]=o*_+a*T+l*P+c*q,r[8]=o*L+a*V+l*H+c*se,r[12]=o*y+a*W+l*O+c*re,r[1]=u*S+d*x+h*N+f*G,r[5]=u*_+d*T+h*P+f*q,r[9]=u*L+d*V+h*H+f*se,r[13]=u*y+d*W+h*O+f*re,r[2]=g*S+v*x+m*N+p*G,r[6]=g*_+v*T+m*P+p*q,r[10]=g*L+v*V+m*H+p*se,r[14]=g*y+v*W+m*O+p*re,r[3]=M*S+b*x+I*N+B*G,r[7]=M*_+b*T+I*P+B*q,r[11]=M*L+b*V+I*H+B*se,r[15]=M*y+b*W+I*O+B*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*f-i*l*f)+v*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*u-r*l*u)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*u-i*c*u)+p*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=d*m*c-v*h*c+v*l*f-a*m*f-d*l*p+a*h*p,b=g*h*c-u*m*c-g*l*f+o*m*f+u*l*p-o*h*p,I=u*v*c-g*d*c+g*a*f-o*v*f-u*a*p+o*d*p,B=g*d*l-u*v*l-g*a*h+o*v*h+u*a*m-o*d*m,S=t*M+i*b+s*I+r*B;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/S;return e[0]=M*_,e[1]=(v*h*r-d*m*r-v*s*f+i*m*f+d*s*p-i*h*p)*_,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*_,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*f-i*l*f)*_,e[4]=b*_,e[5]=(u*m*r-g*h*r+g*s*f-t*m*f-u*s*p+t*h*p)*_,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*_,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*f+t*l*f)*_,e[8]=I*_,e[9]=(g*d*r-u*v*r-g*i*f+t*v*f+u*i*p-t*d*p)*_,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*p+t*a*p)*_,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*f-t*a*f)*_,e[12]=B*_,e[13]=(u*v*s-g*d*s+g*i*h-t*v*h-u*i*m+t*d*m)*_,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*_,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*_,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,v=o*u,m=o*d,p=a*d,M=l*c,b=l*u,I=l*d,B=i.x,S=i.y,_=i.z;return s[0]=(1-(v+p))*B,s[1]=(f+I)*B,s[2]=(g-b)*B,s[3]=0,s[4]=(f-I)*S,s[5]=(1-(h+p))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+b)*_,s[9]=(m-M)*_,s[10]=(1-(h+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Js.set(s[0],s[1],s[2]).length(),o=Js.set(s[4],s[5],s[6]).length(),a=Js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jn.copy(this);let c=1/r,u=1/o,d=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Li){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s),f,g;if(a===Li)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ko)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Li){let l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),h=(t+e)*c,f=(i+s)*u,g,v;if(a===Li)g=(o+r)*d,v=-2*d;else if(a===ko)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Js=new U,jn=new Kt,Zm=new U(0,0,0),jm=new U(1,1,1),Ki=new U,no=new U,Ln=new U,Rh=new Kt,Ch=new Zt,_r=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_r.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jm=0,Ph=new U,$s=new Zt,Ai=new Kt,io=new U,Jr=new U,$m=new U,Qm=new Zt,Lh=new U(1,0,0),kh=new U(0,1,0),Ih=new U(0,0,1),e0={type:"added"},t0={type:"removed"},fn=class n extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new _r,i=new Zt,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new dt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?io.copy(e):io.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Jr,io,this.up):Ai.lookAt(io,Jr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ai),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(e0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,$m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};fn.DEFAULT_UP=new U(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new U,Ri=new U,Bl=new U,Ci=new U,Qs=new U,er=new U,Dh=new U,Hl=new U,Vl=new U,Gl=new U,so=!1,ws=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),Ri.subVectors(i,t),Bl.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(Ri),l=Jn.dot(Bl),c=Ri.dot(Ri),u=Ri.dot(Bl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,t,i,s,r,o,a,l){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),Ri.subVectors(e,t),Jn.cross(Ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Jn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Qs.subVectors(s,i),er.subVectors(r,i),Hl.subVectors(e,i);let l=Qs.dot(Hl),c=er.dot(Hl);if(l<=0&&c<=0)return t.copy(i);Vl.subVectors(e,s);let u=Qs.dot(Vl),d=er.dot(Vl);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Qs,o);Gl.subVectors(e,r);let f=Qs.dot(Gl),g=er.dot(Gl);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(er,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Dh.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Dh,a);let p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(Qs,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=wt.workingColorSpace){if(e=Fc(e,1),t=hn(t,0,1),i=hn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Wl(o,r,e+1/3),this.g=Wl(o,r,e),this.b=Wl(o,r,e-1/3)}return wt.toWorkingColorSpace(this,s),this}setStyle(e,t=an){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let i=kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=kl(e.r),this.g=kl(e.g),this.b=kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return wt.fromWorkingColorSpace(un.copy(this),e),Math.round(hn(un.r*255,0,255))*65536+Math.round(hn(un.g*255,0,255))*256+Math.round(hn(un.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(un.copy(this),t);let i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=an){wt.fromWorkingColorSpace(un.copy(this),e);let t=un.r,i=un.g,s=un.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(ro);let i=ia(Zi.h,ro.h,t),s=ia(Zi.s,ro.s,t),r=ia(Zi.l,ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new et;et.NAMES=kd;var n0=0,Ni=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=pr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tc&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},An=class extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new U,ao=new we,Ot=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ac,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),e}};var zo=class extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Oo=class extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Nt=class extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}};var i0=0,Vn=new Kt,ql=new fn,tr=new U,kn=new Rs,$r=new Rs,tn=new U,Ut=class n extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Oo:zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new dt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(kn.min,$r.min),kn.expandByPoint(tn),tn.addVectors(kn.max,$r.max),kn.expandByPoint(tn)):(kn.expandByPoint($r.min),kn.expandByPoint($r.max))}kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(e,c),tn.add(tr)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<a;x++)c[x]=new U,u[x]=new U;let d=new U,h=new U,f=new U,g=new we,v=new we,m=new we,p=new U,M=new U;function b(x,T,V){d.fromArray(s,x*3),h.fromArray(s,T*3),f.fromArray(s,V*3),g.fromArray(o,x*2),v.fromArray(o,T*2),m.fromArray(o,V*2),h.sub(d),f.sub(d),v.sub(g),m.sub(g);let W=1/(v.x*m.y-m.x*v.y);isFinite(W)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(W),M.copy(f).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(W),c[x].add(p),c[T].add(p),c[V].add(p),u[x].add(M),u[T].add(M),u[V].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let x=0,T=I.length;x<T;++x){let V=I[x],W=V.start,N=V.count;for(let P=W,H=W+N;P<H;P+=3)b(i[P+0],i[P+1],i[P+2])}let B=new U,S=new U,_=new U,L=new U;function y(x){_.fromArray(r,x*3),L.copy(_);let T=c[x];B.copy(T),B.sub(_.multiplyScalar(_.dot(T))).normalize(),S.crossVectors(L,T);let W=S.dot(u[x])<0?-1:1;l[x*4]=B.x,l[x*4+1]=B.y,l[x*4+2]=B.z,l[x*4+3]=W}for(let x=0,T=I.length;x<T;++x){let V=I[x],W=V.start,N=V.count;for(let P=W,H=W+N;P<H;P+=3)y(i[P+0]),y(i[P+1]),y(i[P+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Ot(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=new Kt,xs=new es,oo=new Ui,Nh=new U,nr=new U,ir=new U,sr=new U,Xl=new U,lo=new U,co=new we,uo=new we,ho=new we,zh=new U,Oh=new U,Fh=new U,fo=new U,po=new U,yt=class extends fn{constructor(e=new Ut,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Xl.fromBufferAttribute(d,e),o?lo.addScaledVector(Xl,u):lo.addScaledVector(Xl.sub(t),u))}t.add(lo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(oo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(oo,Nh)===null||xs.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),xs.copy(e.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let I=M,B=b;I<B;I+=3){let S=a.getX(I),_=a.getX(I+1),L=a.getX(I+2);s=mo(this,p,e,i,c,u,d,S,_,L),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=a.getX(m),b=a.getX(m+1),I=a.getX(m+2);s=mo(this,o,e,i,c,u,d,M,b,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let I=M,B=b;I<B;I+=3){let S=I,_=I+1,L=I+2;s=mo(this,p,e,i,c,u,d,S,_,L),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,b=m+1,I=m+2;s=mo(this,o,e,i,c,u,d,M,b,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function s0(n,e,t,i,s,r,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qi,a),l===null)return null;po.copy(a),po.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:n}}function mo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,nr),n.getVertexPosition(l,ir),n.getVertexPosition(c,sr);let u=s0(n,e,t,i,nr,ir,sr,fo);if(u){s&&(co.fromBufferAttribute(s,a),uo.fromBufferAttribute(s,l),ho.fromBufferAttribute(s,c),u.uv=ws.getInterpolation(fo,nr,ir,sr,co,uo,ho,new we)),r&&(co.fromBufferAttribute(r,a),uo.fromBufferAttribute(r,l),ho.fromBufferAttribute(r,c),u.uv1=ws.getInterpolation(fo,nr,ir,sr,co,uo,ho,new we),u.uv2=u.uv1),o&&(zh.fromBufferAttribute(o,a),Oh.fromBufferAttribute(o,l),Fh.fromBufferAttribute(o,c),u.normal=ws.getInterpolation(fo,nr,ir,sr,zh,Oh,Fh,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};ws.getNormal(nr,ir,sr,d.normal),u.face=d}return u}var ua=class n extends Ut{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(d,2));function g(v,m,p,M,b,I,B,S,_,L,y){let x=I/_,T=B/L,V=I/2,W=B/2,N=S/2,P=_+1,H=L+1,O=0,G=0,q=new U;for(let se=0;se<H;se++){let re=se*T-W;for(let fe=0;fe<P;fe++){let Z=fe*x-V;q[v]=Z*M,q[m]=re*b,q[p]=N,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=S>0?1:-1,u.push(q.x,q.y,q.z),d.push(fe/_),d.push(1-se/L),O+=1}}for(let se=0;se<L;se++)for(let re=0;re<_;re++){let fe=h+re+P*se,Z=h+re+P*(se+1),oe=h+(re+1)+P*(se+1),Me=h+(re+1)+P*se;l.push(fe,Z,Me),l.push(Z,oe,Me),G+=6}a.addGroup(f,G,y),f+=G,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function br(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function _n(n){let e={};for(let t=0;t<n.length;t++){let i=br(n[t]);for(let s in i)e[s]=i[s]}return e}function r0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Id(n){return n.getRenderTarget()===null?n.outputColorSpace:wt.workingColorSpace}var Ar={clone:br,merge:_n},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Fo=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},on=class extends Fo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rr=-90,ar=1,hc=class extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(rr,ar,e,t);s.layers=this.layers,this.add(s);let r=new on(rr,ar,e,t);r.layers=this.layers,this.add(r);let o=new on(rr,ar,e,t);o.layers=this.layers,this.add(o);let a=new on(rr,ar,e,t);a.layers=this.layers,this.add(a);let l=new on(rr,ar,e,t);l.layers=this.layers,this.add(l);let c=new on(rr,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Bo=class extends Tn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:vr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dc=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===As?an:sn),this.texture=new Bo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ua(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:ui});r.uniforms.tEquirect.value=t;let o=new yt(s,r),a=t.minFilter;return t.minFilter===aa&&(t.minFilter=nn),new hc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Yl=new U,l0=new U,c0=new dt,$n=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Yl.subVectors(i,t).cross(l0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Yl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||c0.getNormalMatrix(e),s=this.coplanarPoint(Yl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new Ui,go=new U,Ho=class{constructor(e=new $n,t=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],b=s[14],I=s[15];if(i[0].setComponents(l-r,h-c,m-f,I-p).normalize(),i[1].setComponents(l+r,h+c,m+f,I+p).normalize(),i[2].setComponents(l+o,h+u,m+g,I+M).normalize(),i[3].setComponents(l-o,h-u,m-g,I-M).normalize(),i[4].setComponents(l-a,h-d,m-v,I-b).normalize(),t===Li)i[5].setComponents(l+a,h+d,m+v,I+b).normalize();else if(t===ko)i[5].setComponents(a,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function u0(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let d=c.array,h=c.usage,f=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,d){let h=u.array,f=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),f.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];t?n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}var Mr=class n extends Ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let M=p*h-o;for(let b=0;b<c;b++){let I=b*d-r;g.push(I,-M,0),v.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let b=M+c*p,I=M+c*(p+1),B=M+1+c*(p+1),S=M+1+c*p;f.push(b,I,S),f.push(I,B,S)}this.setIndex(f),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,G0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ug=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Av=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:h0,alphahash_pars_fragment:d0,alphamap_fragment:f0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:v0,aomap_pars_fragment:y0,batching_pars_vertex:x0,batching_vertex:_0,begin_vertex:b0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:w0,bumpmap_pars_fragment:E0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:L0,color_pars_vertex:k0,color_vertex:I0,common:D0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:N0,displacementmap_pars_vertex:z0,displacementmap_vertex:O0,emissivemap_fragment:F0,emissivemap_pars_fragment:B0,colorspace_fragment:H0,colorspace_pars_fragment:V0,envmap_fragment:G0,envmap_common_pars_fragment:W0,envmap_pars_fragment:q0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:sg,envmap_vertex:Y0,fog_vertex:K0,fog_pars_vertex:Z0,fog_fragment:j0,fog_pars_fragment:J0,gradientmap_pars_fragment:$0,lightmap_fragment:Q0,lightmap_pars_fragment:eg,lights_lambert_fragment:tg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:rg,lights_toon_pars_fragment:ag,lights_phong_fragment:og,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:ug,lights_fragment_begin:hg,lights_fragment_maps:dg,lights_fragment_end:fg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:vg,map_fragment:yg,map_pars_fragment:xg,map_particle_fragment:_g,map_particle_pars_fragment:bg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphcolor_vertex:wg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Lg,normal_vertex:kg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:zg,opaque_fragment:Og,packing:Fg,premultiplied_alpha_fragment:Bg,project_vertex:Hg,dithering_fragment:Vg,dithering_pars_fragment:Gg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Xg,shadowmap_pars_vertex:Yg,shadowmap_vertex:Kg,shadowmask_pars_fragment:Zg,skinbase_vertex:jg,skinning_pars_vertex:Jg,skinning_vertex:$g,skinnormal_vertex:Qg,specularmap_fragment:ev,specularmap_pars_fragment:tv,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:sv,transmission_pars_fragment:rv,uv_pars_fragment:av,uv_pars_vertex:ov,uv_vertex:lv,worldpos_vertex:cv,background_vert:uv,background_frag:hv,backgroundCube_vert:dv,backgroundCube_frag:fv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:vv,distanceRGBA_vert:yv,distanceRGBA_frag:xv,equirect_vert:_v,equirect_frag:bv,linedashed_vert:Mv,linedashed_frag:Sv,meshbasic_vert:wv,meshbasic_frag:Ev,meshlambert_vert:Tv,meshlambert_frag:Av,meshmatcap_vert:Rv,meshmatcap_frag:Cv,meshnormal_vert:Pv,meshnormal_frag:Lv,meshphong_vert:kv,meshphong_frag:Iv,meshphysical_vert:Dv,meshphysical_frag:Uv,meshtoon_vert:Nv,meshtoon_frag:zv,points_vert:Ov,points_frag:Fv,shadow_vert:Bv,shadow_frag:Hv,sprite_vert:Vv,sprite_frag:Gv},Ce={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},li={basic:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:_n([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:_n([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:_n([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:_n([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:_n([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:_n([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:_n([Ce.common,Ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:_n([Ce.lights,Ce.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};li.physical={uniforms:_n([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var vo={r:0,b:0,g:0};function Wv(n,e,t,i,s,r,o){let a=new et(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(m,p){let M=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?t:e).get(b)),b===null?v(a,l):b&&b.isColor&&(v(b,1),M=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Yo)?(u===void 0&&(u=new yt(new ua(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:br(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=wt.getTransfer(b.colorSpace)!==Lt,(d!==b||h!==b.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new yt(new Mr(2,2),new ft({name:"BackgroundMaterial",uniforms:br(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=wt.getTransfer(b.colorSpace)!==Lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(vo,Id(n)),i.buffers.color.setClear(vo.r,vo.g,vo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function qv(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,u=!1;function d(N,P,H,O,G){let q=!1;if(o){let se=v(O,H,P);c!==se&&(c=se,f(c.object)),q=p(N,O,H,G),q&&M(N,O,H,G)}else{let se=P.wireframe===!0;(c.geometry!==O.id||c.program!==H.id||c.wireframe!==se)&&(c.geometry=O.id,c.program=H.id,c.wireframe=se,q=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,L(N,P,H,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(N){return i.isWebGL2?n.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?n.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function v(N,P,H){let O=H.wireframe===!0,G=a[N.id];G===void 0&&(G={},a[N.id]=G);let q=G[P.id];q===void 0&&(q={},G[P.id]=q);let se=q[O];return se===void 0&&(se=m(h()),q[O]=se),se}function m(N){let P=[],H=[],O=[];for(let G=0;G<s;G++)P[G]=0,H[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:O,object:N,attributes:{},index:null}}function p(N,P,H,O){let G=c.attributes,q=P.attributes,se=0,re=H.getAttributes();for(let fe in re)if(re[fe].location>=0){let oe=G[fe],Me=q[fe];if(Me===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),oe===void 0||oe.attribute!==Me||Me&&oe.data!==Me.data)return!0;se++}return c.attributesNum!==se||c.index!==O}function M(N,P,H,O){let G={},q=P.attributes,se=0,re=H.getAttributes();for(let fe in re)if(re[fe].location>=0){let oe=q[fe];oe===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor));let Me={};Me.attribute=oe,oe&&oe.data&&(Me.data=oe.data),G[fe]=Me,se++}c.attributes=G,c.attributesNum=se,c.index=O}function b(){let N=c.newAttributes;for(let P=0,H=N.length;P<H;P++)N[P]=0}function I(N){B(N,0)}function B(N,P){let H=c.newAttributes,O=c.enabledAttributes,G=c.attributeDivisors;H[N]=1,O[N]===0&&(n.enableVertexAttribArray(N),O[N]=1),G[N]!==P&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,P),G[N]=P)}function S(){let N=c.newAttributes,P=c.enabledAttributes;for(let H=0,O=P.length;H<O;H++)P[H]!==N[H]&&(n.disableVertexAttribArray(H),P[H]=0)}function _(N,P,H,O,G,q,se){se===!0?n.vertexAttribIPointer(N,P,H,G,q):n.vertexAttribPointer(N,P,H,O,G,q)}function L(N,P,H,O){if(i.isWebGL2===!1&&(N.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let G=O.attributes,q=H.getAttributes(),se=P.defaultAttributeValues;for(let re in q){let fe=q[re];if(fe.location>=0){let Z=G[re];if(Z===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){let oe=Z.normalized,Me=Z.itemSize,Ee=t.get(Z);if(Ee===void 0)continue;let Ue=Ee.buffer,Xe=Ee.type,He=Ee.bytesPerElement,Ve=i.isWebGL2===!0&&(Xe===n.INT||Xe===n.UNSIGNED_INT||Z.gpuType===Md);if(Z.isInterleavedBufferAttribute){let nt=Z.data,J=nt.stride,At=Z.offset;if(nt.isInstancedInterleavedBuffer){for(let Ie=0;Ie<fe.locationSize;Ie++)B(fe.location+Ie,nt.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ie=0;Ie<fe.locationSize;Ie++)I(fe.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Ie=0;Ie<fe.locationSize;Ie++)_(fe.location+Ie,Me/fe.locationSize,Xe,oe,J*He,(At+Me/fe.locationSize*Ie)*He,Ve)}else{if(Z.isInstancedBufferAttribute){for(let nt=0;nt<fe.locationSize;nt++)B(fe.location+nt,Z.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let nt=0;nt<fe.locationSize;nt++)I(fe.location+nt);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let nt=0;nt<fe.locationSize;nt++)_(fe.location+nt,Me/fe.locationSize,Xe,oe,Me*He,Me/fe.locationSize*nt*He,Ve)}}else if(se!==void 0){let oe=se[re];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(fe.location,oe);break;case 3:n.vertexAttrib3fv(fe.location,oe);break;case 4:n.vertexAttrib4fv(fe.location,oe);break;default:n.vertexAttrib1fv(fe.location,oe)}}}}S()}function y(){V();for(let N in a){let P=a[N];for(let H in P){let O=P[H];for(let G in O)g(O[G].object),delete O[G];delete P[H]}delete a[N]}}function x(N){if(a[N.id]===void 0)return;let P=a[N.id];for(let H in P){let O=P[H];for(let G in O)g(O[G].object),delete O[G];delete P[H]}delete a[N.id]}function T(N){for(let P in a){let H=a[P];if(H[N.id]===void 0)continue;let O=H[N.id];for(let G in O)g(O[G].object),delete O[G];delete H[N.id]}}function V(){W(),u=!0,c!==l&&(c=l,f(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:W,dispose:y,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:I,disableUnusedAttributes:S}}function Xv(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{f.multiDrawArraysWEBGL(r,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Yv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=h>0,I=o||e.has("OES_texture_float"),B=b&&I,S=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:b,floatFragmentTextures:I,floatVertexTextures:B,maxSamples:S}}function Kv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new $n,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let M=r?0:i,b=M*4,I=p.clippingState||null;l.value=I,I=u(g,h,b,f);for(let B=0;B!==b;++B)I[B]=t[B];p.clippingState=I,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,I=f;b!==v;++b,I+=4)o.copy(d[b]).applyMatrix4(M,a),o.normal.toArray(m,I),m[I+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Zv(n){let e=new WeakMap;function t(o,a){return a===ic?o.mapping=vr:a===sc&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ic||a===sc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new dc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ts=class extends Fo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dr=4,Bh=[.125,.215,.35,.446,.526,.582],Ss=20,Kl=new ts,Hh=new et,Zl=null,jl=0,Jl=0,bs=(1+Math.sqrt(5))/2,or=1/bs,Vh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,bs,or),new U(0,bs,-or),new U(or,0,bs),new U(-or,0,bs),new U(bs,or,0),new U(-bs,or,0)],Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Zl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,jl,Jl),e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:In,format:ei,colorSpace:Di,depthBuffer:!1},s=Gh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(r)),this._blurMaterial=Jv(r,e,t)}return s}_compileMaterial(e){let t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Kl)}_sceneToCubeUV(e,t,i,s){let a=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Hh),u.toneMapping=$i,u.autoClear=!1;let f=new An({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new yt(new ua,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Hh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;yo(s,M*b,p>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===vr||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;yo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vh[(s-1)%Vh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new yt(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);let p=[],M=0;for(let _=0;_<Ss;++_){let L=_/v,y=Math.exp(-L*L/2);p.push(y),_===0?M+=y:_<m&&(M+=2*y)}for(let _=0;_<p.length;_++)p[_]=p[_]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;let I=this._sizeLods[s],B=3*I*(s>b-dr?s-b+dr:0),S=4*(this._cubeSize-I);yo(t,B,S,3*I,2*I),l.setRenderTarget(t),l.render(d,Kl)}};function jv(n){let e=[],t=[],i=[],s=n,r=n-dr+1+Bh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-dr?l=Bh[o-n+dr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),b=new Float32Array(m*g*f),I=new Float32Array(p*g*f);for(let S=0;S<f;S++){let _=S%3*2/3-1,L=S>2?0:-1,y=[_,L,0,_+2/3,L,0,_+2/3,L+1,0,_,L,0,_+2/3,L+1,0,_,L+1,0];M.set(y,v*g*S),b.set(h,m*g*S);let x=[S,S,S,S,S,S];I.set(x,p*g*S)}let B=new Ut;B.setAttribute("position",new Ot(M,v)),B.setAttribute("uv",new Ot(b,m)),B.setAttribute("faceIndex",new Ot(I,p)),e.push(B),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gh(n,e,t){let i=new ln(n,e,t);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Jv(n,e,t){let i=new Float32Array(Ss),s=new U(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Wh(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function qh(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $v(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ic||l===sc,u=l===vr||l===yr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Vo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Vo(n));let h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Qv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ey(n,e,t,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let b=0,I=M.length;b<I;b+=3){let B=M[b+0],S=M[b+1],_=M[b+2];h.push(B,S,S,_,_,B)}}else if(g!==void 0){let M=g.array;v=g.version;for(let b=0,I=M.length/3-1;b<I;b+=3){let B=b+0,S=b+1,_=b+2;h.push(B,S,S,_,_,B)}}else return;let m=new(Ld(h)?Oo:zo)(h,1);m.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function ty(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){n.drawElements(r,g,a,f*l),t.update(g,r,1)}function d(f,g,v){if(v===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,v),t.update(g,r,v)}function h(f,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,v);let p=0;for(let M=0;M<v;M++)p+=g[M];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function ny(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function iy(n,e){return n[0]-e[0]}function sy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ry(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0,v=r.get(u);if(v===void 0||v.count!==g){let N=function(){V.dispose(),r.delete(u),u.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();let M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,B=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],_=u.morphAttributes.color||[],L=0;M===!0&&(L=1),b===!0&&(L=2),I===!0&&(L=3);let y=u.attributes.position.count*L,x=1;y>e.maxTextureSize&&(x=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*x*4*g),V=new No(T,y,x,g);V.type=Ji,V.needsUpdate=!0;let W=L*4;for(let P=0;P<g;P++){let H=B[P],O=S[P],G=_[P],q=y*x*4*P;for(let se=0;se<H.count;se++){let re=se*W;M===!0&&(o.fromBufferAttribute(H,se),T[q+re+0]=o.x,T[q+re+1]=o.y,T[q+re+2]=o.z,T[q+re+3]=0),b===!0&&(o.fromBufferAttribute(O,se),T[q+re+4]=o.x,T[q+re+5]=o.y,T[q+re+6]=o.z,T[q+re+7]=0),I===!0&&(o.fromBufferAttribute(G,se),T[q+re+8]=o.x,T[q+re+9]=o.y,T[q+re+10]=o.z,T[q+re+11]=G.itemSize===4?o.w:1)}}v={count:g,texture:V,size:new we(y,x)},r.set(u,v),u.addEventListener("dispose",N)}let m=0;for(let M=0;M<h.length;M++)m+=h[M];let p=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",p),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let f=h===void 0?0:h.length,g=i[u.id];if(g===void 0||g.length!==f){g=[];for(let b=0;b<f;b++)g[b]=[b,0];i[u.id]=g}for(let b=0;b<f;b++){let I=g[b];I[0]=b,I[1]=h[b]}g.sort(sy);for(let b=0;b<8;b++)b<f&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(iy);let v=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let b=0;b<8;b++){let I=a[b],B=I[0],S=I[1];B!==Number.MAX_SAFE_INTEGER&&S?(v&&u.getAttribute("morphTarget"+b)!==v[B]&&u.setAttribute("morphTarget"+b,v[B]),m&&u.getAttribute("morphNormal"+b)!==m[B]&&u.setAttribute("morphNormal"+b,m[B]),s[b]=S,p+=S):(v&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),m&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}let M=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function ay(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Go=class extends Tn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Ts,u!==Ts&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ts&&(i=ji),i===void 0&&u===xr&&(i=Es),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ud=new Tn,Nd=new Go(1,1);Nd.compareFunction=Pd;var zd=new No,Od=new uc,Fd=new Bo,Xh=[],Yh=[],Kh=new Float32Array(16),Zh=new Float32Array(9),jh=new Float32Array(4);function Rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Xh[s];if(r===void 0&&(r=new Float32Array(s),Xh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zo(n,e){let t=Yh[e];t===void 0&&(t=new Int32Array(e),Yh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function cy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function uy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function hy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;jh.set(i),n.uniformMatrix2fv(this.addr,!1,jh),Jt(t,i)}}function dy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;Zh.set(i),n.uniformMatrix3fv(this.addr,!1,Zh),Jt(t,i)}}function fy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;Kh.set(i),n.uniformMatrix4fv(this.addr,!1,Kh),Jt(t,i)}}function py(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function my(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function yy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function _y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function by(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function My(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Nd:Ud;t.setTexture2D(e||r,s)}function Sy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Od,s)}function wy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Fd,s)}function Ey(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zd,s)}function Ty(n){switch(n){case 5126:return oy;case 35664:return ly;case 35665:return cy;case 35666:return uy;case 35674:return hy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return vy;case 5125:return yy;case 36294:return xy;case 36295:return _y;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ey}}function Ay(n,e){n.uniform1fv(this.addr,e)}function Ry(n,e){let t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Cy(n,e){let t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function Py(n,e){let t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ly(n,e){let t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ky(n,e){let t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Iy(n,e){let t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dy(n,e){n.uniform1iv(this.addr,e)}function Uy(n,e){n.uniform2iv(this.addr,e)}function Ny(n,e){n.uniform3iv(this.addr,e)}function zy(n,e){n.uniform4iv(this.addr,e)}function Oy(n,e){n.uniform1uiv(this.addr,e)}function Fy(n,e){n.uniform2uiv(this.addr,e)}function By(n,e){n.uniform3uiv(this.addr,e)}function Hy(n,e){n.uniform4uiv(this.addr,e)}function Vy(n,e,t){let i=this.cache,s=e.length,r=Zo(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ud,r[o])}function Gy(n,e,t){let i=this.cache,s=e.length,r=Zo(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Od,r[o])}function Wy(n,e,t){let i=this.cache,s=e.length,r=Zo(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fd,r[o])}function qy(n,e,t){let i=this.cache,s=e.length,r=Zo(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zd,r[o])}function Xy(n){switch(n){case 5126:return Ay;case 35664:return Ry;case 35665:return Cy;case 35666:return Py;case 35674:return Ly;case 35675:return ky;case 35676:return Iy;case 5124:case 35670:return Dy;case 35667:case 35671:return Uy;case 35668:case 35672:return Ny;case 35669:case 35673:return zy;case 5125:return Oy;case 36294:return Fy;case 36295:return By;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return qy}}var fc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ty(t.type)}},pc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xy(t.type)}},mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},$l=/(\w+)(\])?(\[|\.)?/g;function Jh(n,e){n.seq.push(e),n.map[e.id]=e}function Yy(n,e,t){let i=n.name,s=i.length;for($l.lastIndex=0;;){let r=$l.exec(i),o=$l.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jh(t,c===void 0?new fc(a,n,e):new pc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new mc(a),Jh(t,d)),t=d}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Yy(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function $h(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ky=37297,Zy=0;function jy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Jy(n){let e=wt.getPrimaries(wt.workingColorSpace),t=wt.getPrimaries(n),i;switch(e===t?i="":e===Lo&&t===Po?i="LinearDisplayP3ToLinearSRGB":e===Po&&t===Lo&&(i="LinearSRGBToLinearDisplayP3"),n){case Di:case Ko:return[i,"LinearTransferOETF"];case an:case Oc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Qh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+jy(n.getShaderSource(e),o)}else return s}function $y(n,e){let t=Jy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qy(n,e){let t;switch(e){case sm:t="Linear";break;case rm:t="Reinhard";break;case am:t="OptimizedCineon";break;case om:t="ACESFilmic";break;case cm:t="AgX";break;case lm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ex(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function tx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(fr).join(`
`)}function nx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ix(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fr(n){return n!==""}function ed(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(sx,ax)}var rx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ax(n,e){let t=ct[e];if(t===void 0){let i=rx.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}var ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(n){return n.replace(ox,lx)}function lx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function ux(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vr:case yr:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===yr&&(e="ENVMAP_MODE_REFRACTION"),e}function dx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case nm:e="ENVMAP_BLENDING_MIX";break;case im:e="ENVMAP_BLENDING_ADD";break}return e}function fx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function px(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=cx(t),c=ux(t),u=hx(t),d=dx(t),h=fx(t),f=t.isWebGL2?"":ex(t),g=tx(t),v=nx(r),m=s.createProgram(),p,M,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(fr).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(fr).join(`
`),M.length>0&&(M+=`
`)):(p=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),M=[f,id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?ct.tonemapping_pars_fragment:"",t.toneMapping!==$i?Qy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,$y("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=gc(o),o=ed(o,t),o=td(o,t),a=gc(a),a=ed(a,t),a=td(a,t),o=nd(o),a=nd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let I=b+p+o,B=b+M+a,S=$h(s,s.VERTEX_SHADER,I),_=$h(s,s.FRAGMENT_SHADER,B);s.attachShader(m,S),s.attachShader(m,_),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(V){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),N=s.getShaderInfoLog(S).trim(),P=s.getShaderInfoLog(_).trim(),H=!0,O=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,S,_);else{let G=Qh(s,S,"vertex"),q=Qh(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+G+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(N===""||P==="")&&(O=!1);O&&(V.diagnostics={runnable:H,programLog:W,vertexShader:{log:N,prefix:p},fragmentShader:{log:P,prefix:M}})}s.deleteShader(S),s.deleteShader(_),y=new gr(s,m),x=ix(s,m)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let x;this.getAttributes=function(){return x===void 0&&L(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(m,Ky)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=_,this}var mx=0,vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new yc(e),t.set(e,i)),i}},yc=class{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}};function gx(n,e,t,i,s,r,o){let a=new ca,l=new vc,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function m(y,x,T,V,W){let N=V.fog,P=W.geometry,H=y.isMeshStandardMaterial?V.environment:null,O=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),G=O&&O.mapping===Yo?O.image.height:null,q=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let se=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,re=se!==void 0?se.length:0,fe=0;P.morphAttributes.position!==void 0&&(fe=1),P.morphAttributes.normal!==void 0&&(fe=2),P.morphAttributes.color!==void 0&&(fe=3);let Z,oe,Me,Ee;if(q){let ht=li[q];Z=ht.vertexShader,oe=ht.fragmentShader}else Z=y.vertexShader,oe=y.fragmentShader,l.update(y),Me=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);let Ue=n.getRenderTarget(),Xe=W.isInstancedMesh===!0,He=W.isBatchedMesh===!0,Ve=!!y.map,nt=!!y.matcap,J=!!O,At=!!y.aoMap,Ie=!!y.lightMap,Ke=!!y.bumpMap,Ne=!!y.normalMap,gt=!!y.displacementMap,Ze=!!y.emissiveMap,R=!!y.metalnessMap,E=!!y.roughnessMap,K=y.anisotropy>0,ve=y.clearcoat>0,he=y.iridescence>0,ge=y.sheen>0,De=y.transmission>0,Se=K&&!!y.anisotropyMap,Re=ve&&!!y.clearcoatMap,qe=ve&&!!y.clearcoatNormalMap,Ye=ve&&!!y.clearcoatRoughnessMap,D=he&&!!y.iridescenceMap,ae=he&&!!y.iridescenceThicknessMap,w=ge&&!!y.sheenColorMap,X=ge&&!!y.sheenRoughnessMap,ie=!!y.specularMap,$=!!y.specularColorMap,ne=!!y.specularIntensityMap,Pe=De&&!!y.transmissionMap,Te=De&&!!y.thicknessMap,_e=!!y.gradientMap,ce=!!y.alphaMap,F=y.alphaTest>0,le=!!y.alphaHash,de=!!y.extensions,ze=!!P.attributes.uv1,ye=!!P.attributes.uv2,xe=!!P.attributes.uv3,Ge=$i;return y.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Ge=n.toneMapping),{isWebGL2:u,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:oe,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:He,instancing:Xe,instancingColor:Xe&&W.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ue===null?n.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Di,map:Ve,matcap:nt,envMap:J,envMapMode:J&&O.mapping,envMapCubeUVHeight:G,aoMap:At,lightMap:Ie,bumpMap:Ke,normalMap:Ne,displacementMap:h&&gt,emissiveMap:Ze,normalMapObjectSpace:Ne&&y.normalMapType===Mm,normalMapTangentSpace:Ne&&y.normalMapType===bm,metalnessMap:R,roughnessMap:E,anisotropy:K,anisotropyMap:Se,clearcoat:ve,clearcoatMap:Re,clearcoatNormalMap:qe,clearcoatRoughnessMap:Ye,iridescence:he,iridescenceMap:D,iridescenceThicknessMap:ae,sheen:ge,sheenColorMap:w,sheenRoughnessMap:X,specularMap:ie,specularColorMap:$,specularIntensityMap:ne,transmission:De,transmissionMap:Pe,thicknessMap:Te,gradientMap:_e,opaque:y.transparent===!1&&y.blending===pr,alphaMap:ce,alphaTest:F,alphaHash:le,combine:y.combine,mapUv:Ve&&v(y.map.channel),aoMapUv:At&&v(y.aoMap.channel),lightMapUv:Ie&&v(y.lightMap.channel),bumpMapUv:Ke&&v(y.bumpMap.channel),normalMapUv:Ne&&v(y.normalMap.channel),displacementMapUv:gt&&v(y.displacementMap.channel),emissiveMapUv:Ze&&v(y.emissiveMap.channel),metalnessMapUv:R&&v(y.metalnessMap.channel),roughnessMapUv:E&&v(y.roughnessMap.channel),anisotropyMapUv:Se&&v(y.anisotropyMap.channel),clearcoatMapUv:Re&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:w&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:X&&v(y.sheenRoughnessMap.channel),specularMapUv:ie&&v(y.specularMap.channel),specularColorMapUv:$&&v(y.specularColorMap.channel),specularIntensityMapUv:ne&&v(y.specularIntensityMap.channel),transmissionMapUv:Pe&&v(y.transmissionMap.channel),thicknessMapUv:Te&&v(y.thicknessMap.channel),alphaMapUv:ce&&v(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ne||K),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:ye,vertexUv3s:xe,pointsUvs:W.isPoints===!0&&!!P.attributes.uv&&(Ve||ce),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ve&&y.map.isVideoTexture===!0&&wt.getTransfer(y.map.colorSpace)===Lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dn,flipSided:y.side===Yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:de&&y.extensions.derivatives===!0,extensionFragDepth:de&&y.extensions.fragDepth===!0,extensionDrawBuffers:de&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(let T in y.defines)x.push(T),x.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(M(x,y),b(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){a.disableAll(),x.isWebGL2&&a.enable(0),x.supportsVertexTextures&&a.enable(1),x.instancing&&a.enable(2),x.instancingColor&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function I(y){let x=g[y.type],T;if(x){let V=li[x];T=Ar.clone(V.uniforms)}else T=y.uniforms;return T}function B(y,x){let T;for(let V=0,W=c.length;V<W;V++){let N=c[V];if(N.cacheKey===x){T=N,++T.usedTimes;break}}return T===void 0&&(T=new px(n,x,y,r),c.push(T)),T}function S(y){if(--y.usedTimes===0){let x=c.indexOf(y);c[x]=c[c.length-1],c.pop(),y.destroy()}}function _(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:I,acquireProgram:B,releaseProgram:S,releaseShaderCache:_,programs:c,dispose:L}}function vx(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function yx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function sd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,f,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||yx),i.length>1&&i.sort(h||sd),s.length>1&&s.sort(h||sd)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function xx(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new rd,n.set(i,[o])):s>=r.length?(o=new rd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _x(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new et};break;case"SpotLight":t={position:new U,direction:new U,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function bx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Mx=0;function Sx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wx(n,e){let t=new _x,i=bx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new U);let r=new U,o=new Kt,a=new Kt;function l(u,d){let h=0,f=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let v=0,m=0,p=0,M=0,b=0,I=0,B=0,S=0,_=0,L=0,y=0;u.sort(Sx);let x=d===!0?Math.PI:1;for(let V=0,W=u.length;V<W;V++){let N=u[V],P=N.color,H=N.intensity,O=N.distance,G=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=P.r*H*x,f+=P.g*H*x,g+=P.b*H*x;else if(N.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(N.sh.coefficients[q],H);y++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){let se=N.shadow,re=i.get(N);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,s.directionalShadow[v]=re,s.directionalShadowMap[v]=G,s.directionalShadowMatrix[v]=N.shadow.matrix,I++}s.directional[v]=q,v++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(P).multiplyScalar(H*x),q.distance=O,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,s.spot[p]=q;let se=N.shadow;if(N.map&&(s.spotLightMap[_]=N.map,_++,se.updateMatrices(N),N.castShadow&&L++),s.spotLightMatrix[p]=se.matrix,N.castShadow){let re=i.get(N);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,s.spotShadow[p]=re,s.spotShadowMap[p]=G,S++}p++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(P).multiplyScalar(H),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=q,M++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*x),q.distance=N.distance,q.decay=N.decay,N.castShadow){let se=N.shadow,re=i.get(N);re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,re.shadowCameraNear=se.camera.near,re.shadowCameraFar=se.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=N.shadow.matrix,B++}s.point[m]=q,m++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(H*x),q.groundColor.copy(N.groundColor).multiplyScalar(H*x),s.hemi[b]=q,b++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=g;let T=s.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==M||T.hemiLength!==b||T.numDirectionalShadows!==I||T.numPointShadows!==B||T.numSpotShadows!==S||T.numSpotMaps!==_||T.numLightProbes!==y)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=b,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=S+_-L,s.spotLightMap.length=_,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=y,T.directionalLength=v,T.pointLength=m,T.spotLength=p,T.rectAreaLength=M,T.hemiLength=b,T.numDirectionalShadows=I,T.numPointShadows=B,T.numSpotShadows=S,T.numSpotMaps=_,T.numLightProbes=y,s.version=Mx++)}function c(u,d){let h=0,f=0,g=0,v=0,m=0,p=d.matrixWorldInverse;for(let M=0,b=u.length;M<b;M++){let I=u[M];if(I.isDirectionalLight){let B=s.directional[h];B.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(p),h++}else if(I.isSpotLight){let B=s.spot[g];B.position.setFromMatrixPosition(I.matrixWorld),B.position.applyMatrix4(p),B.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(p),g++}else if(I.isRectAreaLight){let B=s.rectArea[v];B.position.setFromMatrixPosition(I.matrixWorld),B.position.applyMatrix4(p),a.identity(),o.copy(I.matrixWorld),o.premultiply(p),a.extractRotation(o),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),B.halfWidth.applyMatrix4(a),B.halfHeight.applyMatrix4(a),v++}else if(I.isPointLight){let B=s.point[f];B.position.setFromMatrixPosition(I.matrixWorld),B.position.applyMatrix4(p),f++}else if(I.isHemisphereLight){let B=s.hemi[m];B.direction.setFromMatrixPosition(I.matrixWorld),B.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function ad(n,e){let t=new wx(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ex(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new ad(n,e),t.set(r,[l])):o>=a.length?(l=new ad(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var xc=class extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_c=class extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rx(n,e,t){let i=new Ho,s=new we,r=new we,o=new _t,a=new xc({depthPacking:_m}),l=new _c,c={},u=t.maxTextureSize,d={[Qi]:Yt,[Yt]:Qi,[dn]:dn},h=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Tx,fragmentShader:Ax}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new yt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let p=this.type;this.render=function(S,_,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let y=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ui),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let W=p!==Pi&&this.type===Pi,N=p===Pi&&this.type!==Pi;for(let P=0,H=S.length;P<H;P++){let O=S[P],G=O.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let q=G.getFrameExtents();if(s.multiply(q),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,G.mapSize.y=r.y)),G.map===null||W===!0||N===!0){let re=this.type!==Pi?{minFilter:rn,magFilter:rn}:{};G.map!==null&&G.map.dispose(),G.map=new ln(s.x,s.y,re),G.map.texture.name=O.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let se=G.getViewportCount();for(let re=0;re<se;re++){let fe=G.getViewport(re);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),V.viewport(o),G.updateMatrices(O,re),i=G.getFrustum(),I(_,L,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Pi&&M(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,T)};function M(S,_){let L=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ln(s.x,s.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(_,null,L,h,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(_,null,L,f,v,null)}function b(S,_,L,y){let x=null,T=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)x=T;else if(x=L.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let V=x.uuid,W=_.uuid,N=c[V];N===void 0&&(N={},c[V]=N);let P=N[W];P===void 0&&(P=x.clone(),N[W]=P,_.addEventListener("dispose",B)),x=P}if(x.visible=_.visible,x.wireframe=_.wireframe,y===Pi?x.side=_.shadowSide!==null?_.shadowSide:_.side:x.side=_.shadowSide!==null?_.shadowSide:d[_.side],x.alphaMap=_.alphaMap,x.alphaTest=_.alphaTest,x.map=_.map,x.clipShadows=_.clipShadows,x.clippingPlanes=_.clippingPlanes,x.clipIntersection=_.clipIntersection,x.displacementMap=_.displacementMap,x.displacementScale=_.displacementScale,x.displacementBias=_.displacementBias,x.wireframeLinewidth=_.wireframeLinewidth,x.linewidth=_.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let V=n.properties.get(x);V.light=L}return x}function I(S,_,L,y,x){if(S.visible===!1)return;if(S.layers.test(_.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Pi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let W=e.update(S),N=S.material;if(Array.isArray(N)){let P=W.groups;for(let H=0,O=P.length;H<O;H++){let G=P[H],q=N[G.materialIndex];if(q&&q.visible){let se=b(S,q,y,x);S.onBeforeShadow(n,S,_,L,W,se,G),n.renderBufferDirect(L,null,W,se,S,G),S.onAfterShadow(n,S,_,L,W,se,G)}}}else if(N.visible){let P=b(S,N,y,x);S.onBeforeShadow(n,S,_,L,W,P,null),n.renderBufferDirect(L,null,W,P,S,null),S.onAfterShadow(n,S,_,L,W,P,null)}}let V=S.children;for(let W=0,N=V.length;W<N;W++)I(V[W],_,L,y,x)}function B(S){S.target.removeEventListener("dispose",B);for(let L in c){let y=c[L],x=S.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function Cx(n,e,t){let i=t.isWebGL2;function s(){let F=!1,le=new _t,de=null,ze=new _t(0,0,0,0);return{setMask:function(ye){de!==ye&&!F&&(n.colorMask(ye,ye,ye,ye),de=ye)},setLocked:function(ye){F=ye},setClear:function(ye,xe,Ge,ot,ht){ht===!0&&(ye*=ot,xe*=ot,Ge*=ot),le.set(ye,xe,Ge,ot),ze.equals(le)===!1&&(n.clearColor(ye,xe,Ge,ot),ze.copy(le))},reset:function(){F=!1,de=null,ze.set(-1,0,0,0)}}}function r(){let F=!1,le=null,de=null,ze=null;return{setTest:function(ye){ye?He(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(ye){le!==ye&&!F&&(n.depthMask(ye),le=ye)},setFunc:function(ye){if(de!==ye){switch(ye){case Zp:n.depthFunc(n.NEVER);break;case jp:n.depthFunc(n.ALWAYS);break;case Jp:n.depthFunc(n.LESS);break;case To:n.depthFunc(n.LEQUAL);break;case $p:n.depthFunc(n.EQUAL);break;case Qp:n.depthFunc(n.GEQUAL);break;case em:n.depthFunc(n.GREATER);break;case tm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ye}},setLocked:function(ye){F=ye},setClear:function(ye){ze!==ye&&(n.clearDepth(ye),ze=ye)},reset:function(){F=!1,le=null,de=null,ze=null}}}function o(){let F=!1,le=null,de=null,ze=null,ye=null,xe=null,Ge=null,ot=null,ht=null;return{setTest:function(st){F||(st?He(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(st){le!==st&&!F&&(n.stencilMask(st),le=st)},setFunc:function(st,bt,zt){(de!==st||ze!==bt||ye!==zt)&&(n.stencilFunc(st,bt,zt),de=st,ze=bt,ye=zt)},setOp:function(st,bt,zt){(xe!==st||Ge!==bt||ot!==zt)&&(n.stencilOp(st,bt,zt),xe=st,Ge=bt,ot=zt)},setLocked:function(st){F=st},setClear:function(st){ht!==st&&(n.clearStencil(st),ht=st)},reset:function(){F=!1,le=null,de=null,ze=null,ye=null,xe=null,Ge=null,ot=null,ht=null}}}let a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap,h={},f={},g=new WeakMap,v=[],m=null,p=!1,M=null,b=null,I=null,B=null,S=null,_=null,L=null,y=new et(0,0,0),x=0,T=!1,V=null,W=null,N=null,P=null,H=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,q=0,se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(se)[1]),G=q>=1):se.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),G=q>=2);let re=null,fe={},Z=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Me=new _t().fromArray(Z),Ee=new _t().fromArray(oe);function Ue(F,le,de,ze){let ye=new Uint8Array(4),xe=n.createTexture();n.bindTexture(F,xe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<de;Ge++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(le+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return xe}let Xe={};Xe[n.TEXTURE_2D]=Ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Xe[n.TEXTURE_CUBE_MAP]=Ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Xe[n.TEXTURE_2D_ARRAY]=Ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Xe[n.TEXTURE_3D]=Ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),He(n.DEPTH_TEST),l.setFunc(To),Ze(!1),R(Hu),He(n.CULL_FACE),Ne(ui);function He(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Ve(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function nt(F,le){return f[F]!==le?(n.bindFramebuffer(F,le),f[F]=le,i&&(F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function J(F,le){let de=v,ze=!1;if(F)if(de=g.get(le),de===void 0&&(de=[],g.set(le,de)),F.isWebGLMultipleRenderTargets){let ye=F.texture;if(de.length!==ye.length||de[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ge=ye.length;xe<Ge;xe++)de[xe]=n.COLOR_ATTACHMENT0+xe;de.length=ye.length,ze=!0}}else de[0]!==n.COLOR_ATTACHMENT0&&(de[0]=n.COLOR_ATTACHMENT0,ze=!0);else de[0]!==n.BACK&&(de[0]=n.BACK,ze=!0);ze&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function At(F){return m!==F?(n.useProgram(F),m=F,!0):!1}let Ie={[Ms]:n.FUNC_ADD,[Dp]:n.FUNC_SUBTRACT,[Up]:n.FUNC_REVERSE_SUBTRACT};if(i)Ie[Wu]=n.MIN,Ie[qu]=n.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(Ie[Wu]=F.MIN_EXT,Ie[qu]=F.MAX_EXT)}let Ke={[Np]:n.ZERO,[zp]:n.ONE,[Op]:n.SRC_COLOR,[tc]:n.SRC_ALPHA,[Wp]:n.SRC_ALPHA_SATURATE,[Vp]:n.DST_COLOR,[Bp]:n.DST_ALPHA,[Fp]:n.ONE_MINUS_SRC_COLOR,[nc]:n.ONE_MINUS_SRC_ALPHA,[Gp]:n.ONE_MINUS_DST_COLOR,[Hp]:n.ONE_MINUS_DST_ALPHA,[qp]:n.CONSTANT_COLOR,[Xp]:n.ONE_MINUS_CONSTANT_COLOR,[Yp]:n.CONSTANT_ALPHA,[Kp]:n.ONE_MINUS_CONSTANT_ALPHA};function Ne(F,le,de,ze,ye,xe,Ge,ot,ht,st){if(F===ui){p===!0&&(Ve(n.BLEND),p=!1);return}if(p===!1&&(He(n.BLEND),p=!0),F!==Ip){if(F!==M||st!==T){if((b!==Ms||S!==Ms)&&(n.blendEquation(n.FUNC_ADD),b=Ms,S=Ms),st)switch(F){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kt:n.blendFunc(n.ONE,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}I=null,B=null,_=null,L=null,y.set(0,0,0),x=0,M=F,T=st}return}ye=ye||le,xe=xe||de,Ge=Ge||ze,(le!==b||ye!==S)&&(n.blendEquationSeparate(Ie[le],Ie[ye]),b=le,S=ye),(de!==I||ze!==B||xe!==_||Ge!==L)&&(n.blendFuncSeparate(Ke[de],Ke[ze],Ke[xe],Ke[Ge]),I=de,B=ze,_=xe,L=Ge),(ot.equals(y)===!1||ht!==x)&&(n.blendColor(ot.r,ot.g,ot.b,ht),y.copy(ot),x=ht),M=F,T=!1}function gt(F,le){F.side===dn?Ve(n.CULL_FACE):He(n.CULL_FACE);let de=F.side===Yt;le&&(de=!de),Ze(de),F.blending===pr&&F.transparent===!1?Ne(ui):Ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let ze=F.stencilWrite;c.setTest(ze),ze&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),K(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?He(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(F){V!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),V=F)}function R(F){F!==Pp?(He(n.CULL_FACE),F!==W&&(F===Hu?n.cullFace(n.BACK):F===Lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),W=F}function E(F){F!==N&&(G&&n.lineWidth(F),N=F)}function K(F,le,de){F?(He(n.POLYGON_OFFSET_FILL),(P!==le||H!==de)&&(n.polygonOffset(le,de),P=le,H=de)):Ve(n.POLYGON_OFFSET_FILL)}function ve(F){F?He(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function he(F){F===void 0&&(F=n.TEXTURE0+O-1),re!==F&&(n.activeTexture(F),re=F)}function ge(F,le,de){de===void 0&&(re===null?de=n.TEXTURE0+O-1:de=re);let ze=fe[de];ze===void 0&&(ze={type:void 0,texture:void 0},fe[de]=ze),(ze.type!==F||ze.texture!==le)&&(re!==de&&(n.activeTexture(de),re=de),n.bindTexture(F,le||Xe[F]),ze.type=F,ze.texture=le)}function De(){let F=fe[re];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function w(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(F){Me.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Me.copy(F))}function Pe(F){Ee.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ee.copy(F))}function Te(F,le){let de=d.get(le);de===void 0&&(de=new WeakMap,d.set(le,de));let ze=de.get(F);ze===void 0&&(ze=n.getUniformBlockIndex(le,F.name),de.set(F,ze))}function _e(F,le){let ze=d.get(le).get(F);u.get(le)!==ze&&(n.uniformBlockBinding(le,ze,F.__bindingPointIndex),u.set(le,ze))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},re=null,fe={},f={},g=new WeakMap,v=[],m=null,p=!1,M=null,b=null,I=null,B=null,S=null,_=null,L=null,y=new et(0,0,0),x=0,T=!1,V=null,W=null,N=null,P=null,H=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:He,disable:Ve,bindFramebuffer:nt,drawBuffers:J,useProgram:At,setBlending:Ne,setMaterial:gt,setFlipSided:Ze,setCullFace:R,setLineWidth:E,setPolygonOffset:K,setScissorTest:ve,activeTexture:he,bindTexture:ge,unbindTexture:De,compressedTexImage2D:Se,compressedTexImage3D:Re,texImage2D:ie,texImage3D:$,updateUBOMapping:Te,uniformBlockBinding:_e,texStorage2D:w,texStorage3D:X,texSubImage2D:qe,texSubImage3D:Ye,compressedTexSubImage2D:D,compressedTexSubImage3D:ae,scissor:ne,viewport:Pe,reset:ce}}function Px(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return f?new OffscreenCanvas(R,E):la("canvas")}function v(R,E,K,ve){let he=1;if((R.width>ve||R.height>ve)&&(he=ve/Math.max(R.width,R.height)),he<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ge=E?Io:Math.floor,De=ge(he*R.width),Se=ge(he*R.height);d===void 0&&(d=g(De,Se));let Re=K?g(De,Se):d;return Re.width=De,Re.height=Se,Re.getContext("2d").drawImage(R,0,0,De,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+De+"x"+Se+")."),Re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return lc(R.width)&&lc(R.height)}function p(R){return a?!1:R.wrapS!==Qn||R.wrapT!==Qn||R.minFilter!==rn&&R.minFilter!==nn}function M(R,E){return R.generateMipmaps&&E&&R.minFilter!==rn&&R.minFilter!==nn}function b(R){n.generateMipmap(R)}function I(R,E,K,ve,he=!1){if(a===!1)return E;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge=E;if(E===n.RED&&(K===n.FLOAT&&(ge=n.R32F),K===n.HALF_FLOAT&&(ge=n.R16F),K===n.UNSIGNED_BYTE&&(ge=n.R8)),E===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(ge=n.R8UI),K===n.UNSIGNED_SHORT&&(ge=n.R16UI),K===n.UNSIGNED_INT&&(ge=n.R32UI),K===n.BYTE&&(ge=n.R8I),K===n.SHORT&&(ge=n.R16I),K===n.INT&&(ge=n.R32I)),E===n.RG&&(K===n.FLOAT&&(ge=n.RG32F),K===n.HALF_FLOAT&&(ge=n.RG16F),K===n.UNSIGNED_BYTE&&(ge=n.RG8)),E===n.RGBA){let De=he?Co:wt.getTransfer(ve);K===n.FLOAT&&(ge=n.RGBA32F),K===n.HALF_FLOAT&&(ge=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ge=De===Lt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function B(R,E,K){return M(R,K)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){return R===rn||R===Xu||R===wl?n.NEAREST:n.LINEAR}function _(R){let E=R.target;E.removeEventListener("dispose",_),y(E),E.isVideoTexture&&u.delete(E)}function L(R){let E=R.target;E.removeEventListener("dispose",L),T(E)}function y(R){let E=i.get(R);if(E.__webglInit===void 0)return;let K=R.source,ve=h.get(K);if(ve){let he=ve[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&x(R),Object.keys(ve).length===0&&h.delete(K)}i.remove(R)}function x(R){let E=i.get(R);n.deleteTexture(E.__webglTexture);let K=R.source,ve=h.get(K);delete ve[E.__cacheKey],o.memory.textures--}function T(R){let E=R.texture,K=i.get(R),ve=i.get(E);if(ve.__webglTexture!==void 0&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(K.__webglFramebuffer[he]))for(let ge=0;ge<K.__webglFramebuffer[he].length;ge++)n.deleteFramebuffer(K.__webglFramebuffer[he][ge]);else n.deleteFramebuffer(K.__webglFramebuffer[he]);K.__webglDepthbuffer&&n.deleteRenderbuffer(K.__webglDepthbuffer[he])}else{if(Array.isArray(K.__webglFramebuffer))for(let he=0;he<K.__webglFramebuffer.length;he++)n.deleteFramebuffer(K.__webglFramebuffer[he]);else n.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&n.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&n.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let he=0;he<K.__webglColorRenderbuffer.length;he++)K.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(K.__webglColorRenderbuffer[he]);K.__webglDepthRenderbuffer&&n.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let he=0,ge=E.length;he<ge;he++){let De=i.get(E[he]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(E[he])}i.remove(E),i.remove(R)}let V=0;function W(){V=0}function N(){let R=V;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),V+=1,R}function P(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function H(R,E){let K=i.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){let ve=R.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(K,R,E);return}}t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+E)}function O(R,E){let K=i.get(R);if(R.version>0&&K.__version!==R.version){Me(K,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+E)}function G(R,E){let K=i.get(R);if(R.version>0&&K.__version!==R.version){Me(K,R,E);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+E)}function q(R,E){let K=i.get(R);if(R.version>0&&K.__version!==R.version){Ee(K,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+E)}let se={[Ii]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},re={[rn]:n.NEAREST,[Xu]:n.NEAREST_MIPMAP_NEAREST,[wl]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[um]:n.LINEAR_MIPMAP_NEAREST,[aa]:n.LINEAR_MIPMAP_LINEAR},fe={[Sm]:n.NEVER,[Cm]:n.ALWAYS,[wm]:n.LESS,[Pd]:n.LEQUAL,[Em]:n.EQUAL,[Rm]:n.GEQUAL,[Tm]:n.GREATER,[Am]:n.NOTEQUAL};function Z(R,E,K){if(K?(n.texParameteri(R,n.TEXTURE_WRAP_S,se[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,se[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,se[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,re[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,re[E.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Qn||E.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,S(E.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==rn&&E.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ve=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===rn||E.minFilter!==wl&&E.minFilter!==aa||E.type===Ji&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===In&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(R,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function oe(R,E){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",_));let ve=E.source,he=h.get(ve);he===void 0&&(he={},h.set(ve,he));let ge=P(E);if(ge!==R.__cacheKey){he[ge]===void 0&&(he[ge]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,K=!0),he[ge].usedTimes++;let De=he[R.__cacheKey];De!==void 0&&(he[R.__cacheKey].usedTimes--,De.usedTimes===0&&x(E)),R.__cacheKey=ge,R.__webglTexture=he[ge].texture}return K}function Me(R,E,K){let ve=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=n.TEXTURE_3D);let he=oe(R,E),ge=E.source;t.bindTexture(ve,R.__webglTexture,n.TEXTURE0+K);let De=i.get(ge);if(ge.version!==De.__version||he===!0){t.activeTexture(n.TEXTURE0+K);let Se=wt.getPrimaries(wt.workingColorSpace),Re=E.colorSpace===sn?null:wt.getPrimaries(E.colorSpace),qe=E.colorSpace===sn||Se===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ye=p(E)&&m(E.image)===!1,D=v(E.image,Ye,!1,s.maxTextureSize);D=Ze(E,D);let ae=m(D)||a,w=r.convert(E.format,E.colorSpace),X=r.convert(E.type),ie=I(E.internalFormat,w,X,E.colorSpace,E.isVideoTexture);Z(ve,E,ae);let $,ne=E.mipmaps,Pe=a&&E.isVideoTexture!==!0&&ie!==Rd,Te=De.__version===void 0||he===!0,_e=B(E,D,ae);if(E.isDepthTexture)ie=n.DEPTH_COMPONENT,a?E.type===Ji?ie=n.DEPTH_COMPONENT32F:E.type===ji?ie=n.DEPTH_COMPONENT24:E.type===Es?ie=n.DEPTH24_STENCIL8:ie=n.DEPTH_COMPONENT16:E.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ts&&ie===n.DEPTH_COMPONENT&&E.type!==zc&&E.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ji,X=r.convert(E.type)),E.format===xr&&ie===n.DEPTH_COMPONENT&&(ie=n.DEPTH_STENCIL,E.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Es,X=r.convert(E.type))),Te&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,ie,D.width,D.height):t.texImage2D(n.TEXTURE_2D,0,ie,D.width,D.height,0,w,X,null));else if(E.isDataTexture)if(ne.length>0&&ae){Pe&&Te&&t.texStorage2D(n.TEXTURE_2D,_e,ie,ne[0].width,ne[0].height);for(let ce=0,F=ne.length;ce<F;ce++)$=ne[ce],Pe?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,$.width,$.height,w,X,$.data):t.texImage2D(n.TEXTURE_2D,ce,ie,$.width,$.height,0,w,X,$.data);E.generateMipmaps=!1}else Pe?(Te&&t.texStorage2D(n.TEXTURE_2D,_e,ie,D.width,D.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,D.width,D.height,w,X,D.data)):t.texImage2D(n.TEXTURE_2D,0,ie,D.width,D.height,0,w,X,D.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ie,ne[0].width,ne[0].height,D.depth);for(let ce=0,F=ne.length;ce<F;ce++)$=ne[ce],E.format!==ei?w!==null?Pe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,$.width,$.height,D.depth,w,$.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ie,$.width,$.height,D.depth,0,$.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,$.width,$.height,D.depth,w,X,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ie,$.width,$.height,D.depth,0,w,X,$.data)}else{Pe&&Te&&t.texStorage2D(n.TEXTURE_2D,_e,ie,ne[0].width,ne[0].height);for(let ce=0,F=ne.length;ce<F;ce++)$=ne[ce],E.format!==ei?w!==null?Pe?t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,$.width,$.height,w,$.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ie,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,$.width,$.height,w,X,$.data):t.texImage2D(n.TEXTURE_2D,ce,ie,$.width,$.height,0,w,X,$.data)}else if(E.isDataArrayTexture)Pe?(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ie,D.width,D.height,D.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,w,X,D.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ie,D.width,D.height,D.depth,0,w,X,D.data);else if(E.isData3DTexture)Pe?(Te&&t.texStorage3D(n.TEXTURE_3D,_e,ie,D.width,D.height,D.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,w,X,D.data)):t.texImage3D(n.TEXTURE_3D,0,ie,D.width,D.height,D.depth,0,w,X,D.data);else if(E.isFramebufferTexture){if(Te)if(Pe)t.texStorage2D(n.TEXTURE_2D,_e,ie,D.width,D.height);else{let ce=D.width,F=D.height;for(let le=0;le<_e;le++)t.texImage2D(n.TEXTURE_2D,le,ie,ce,F,0,w,X,null),ce>>=1,F>>=1}}else if(ne.length>0&&ae){Pe&&Te&&t.texStorage2D(n.TEXTURE_2D,_e,ie,ne[0].width,ne[0].height);for(let ce=0,F=ne.length;ce<F;ce++)$=ne[ce],Pe?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,w,X,$):t.texImage2D(n.TEXTURE_2D,ce,ie,w,X,$);E.generateMipmaps=!1}else Pe?(Te&&t.texStorage2D(n.TEXTURE_2D,_e,ie,D.width,D.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,w,X,D)):t.texImage2D(n.TEXTURE_2D,0,ie,w,X,D);M(E,ae)&&b(ve),De.__version=ge.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ee(R,E,K){if(E.image.length!==6)return;let ve=oe(R,E),he=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+K);let ge=i.get(he);if(he.version!==ge.__version||ve===!0){t.activeTexture(n.TEXTURE0+K);let De=wt.getPrimaries(wt.workingColorSpace),Se=E.colorSpace===sn?null:wt.getPrimaries(E.colorSpace),Re=E.colorSpace===sn||De===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let qe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,D=[];for(let ce=0;ce<6;ce++)!qe&&!Ye?D[ce]=v(E.image[ce],!1,!0,s.maxCubemapSize):D[ce]=Ye?E.image[ce].image:E.image[ce],D[ce]=Ze(E,D[ce]);let ae=D[0],w=m(ae)||a,X=r.convert(E.format,E.colorSpace),ie=r.convert(E.type),$=I(E.internalFormat,X,ie,E.colorSpace),ne=a&&E.isVideoTexture!==!0,Pe=ge.__version===void 0||ve===!0,Te=B(E,ae,w);Z(n.TEXTURE_CUBE_MAP,E,w);let _e;if(qe){ne&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,$,ae.width,ae.height);for(let ce=0;ce<6;ce++){_e=D[ce].mipmaps;for(let F=0;F<_e.length;F++){let le=_e[F];E.format!==ei?X!==null?ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F,0,0,le.width,le.height,X,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F,$,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F,0,0,le.width,le.height,X,ie,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F,$,le.width,le.height,0,X,ie,le.data)}}}else{_e=E.mipmaps,ne&&Pe&&(_e.length>0&&Te++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,$,D[0].width,D[0].height));for(let ce=0;ce<6;ce++)if(Ye){ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,D[ce].width,D[ce].height,X,ie,D[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,$,D[ce].width,D[ce].height,0,X,ie,D[ce].data);for(let F=0;F<_e.length;F++){let de=_e[F].image[ce].image;ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F+1,0,0,de.width,de.height,X,ie,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F+1,$,de.width,de.height,0,X,ie,de.data)}}else{ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,X,ie,D[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,$,X,ie,D[ce]);for(let F=0;F<_e.length;F++){let le=_e[F];ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F+1,0,0,X,ie,le.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F+1,$,X,ie,le.image[ce])}}}M(E,w)&&b(n.TEXTURE_CUBE_MAP),ge.__version=he.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ue(R,E,K,ve,he,ge){let De=r.convert(K.format,K.colorSpace),Se=r.convert(K.type),Re=I(K.internalFormat,De,Se,K.colorSpace);if(!i.get(E).__hasExternalTextures){let Ye=Math.max(1,E.width>>ge),D=Math.max(1,E.height>>ge);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,ge,Re,Ye,D,E.depth,0,De,Se,null):t.texImage2D(he,ge,Re,Ye,D,0,De,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ne(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,he,i.get(K).__webglTexture,0,Ke(E)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ve,he,i.get(K).__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(R,E,K){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ve=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(K||Ne(E)){let he=E.depthTexture;he&&he.isDepthTexture&&(he.type===Ji?ve=n.DEPTH_COMPONENT32F:he.type===ji&&(ve=n.DEPTH_COMPONENT24));let ge=Ke(E);Ne(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,ve,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ve,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ve,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){let ve=Ke(E);K&&Ne(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,n.DEPTH24_STENCIL8,E.width,E.height):Ne(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{let ve=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let he=0;he<ve.length;he++){let ge=ve[he],De=r.convert(ge.format,ge.colorSpace),Se=r.convert(ge.type),Re=I(ge.internalFormat,De,Se,ge.colorSpace),qe=Ke(E);K&&Ne(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Re,E.width,E.height):Ne(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,Re,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Re,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);let ve=i.get(E.depthTexture).__webglTexture,he=Ke(E);if(E.depthTexture.format===Ts)Ne(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(E.depthTexture.format===xr)Ne(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ve(R){let E=i.get(R),K=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");He(E.__webglFramebuffer,R)}else if(K){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]=n.createRenderbuffer(),Xe(E.__webglDepthbuffer[ve],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Xe(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(R,E,K){let ve=i.get(R);E!==void 0&&Ue(ve.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&Ve(R)}function J(R){let E=R.texture,K=i.get(R),ve=i.get(E);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture()),ve.__version=E.version,o.memory.textures++);let he=R.isWebGLCubeRenderTarget===!0,ge=R.isWebGLMultipleRenderTargets===!0,De=m(R)||a;if(he){K.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[Se]=[];for(let Re=0;Re<E.mipmaps.length;Re++)K.__webglFramebuffer[Se][Re]=n.createFramebuffer()}else K.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)K.__webglFramebuffer[Se]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(ge)if(s.drawBuffers){let Se=R.texture;for(let Re=0,qe=Se.length;Re<qe;Re++){let Ye=i.get(Se[Re]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ne(R)===!1){let Se=ge?E:[E];K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Re=0;Re<Se.length;Re++){let qe=Se[Re];K.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);let Ye=r.convert(qe.format,qe.colorSpace),D=r.convert(qe.type),ae=I(qe.internalFormat,Ye,D,qe.colorSpace,R.isXRRenderTarget===!0),w=Ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,w,ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,K.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),Z(n.TEXTURE_CUBE_MAP,E,De);for(let Se=0;Se<6;Se++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)Ue(K.__webglFramebuffer[Se][Re],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re);else Ue(K.__webglFramebuffer[Se],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);M(E,De)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){let Se=R.texture;for(let Re=0,qe=Se.length;Re<qe;Re++){let Ye=Se[Re],D=i.get(Ye);t.bindTexture(n.TEXTURE_2D,D.__webglTexture),Z(n.TEXTURE_2D,Ye,De),Ue(K.__webglFramebuffer,R,Ye,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),M(Ye,De)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?Se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,ve.__webglTexture),Z(Se,E,De),a&&E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)Ue(K.__webglFramebuffer[Re],R,E,n.COLOR_ATTACHMENT0,Se,Re);else Ue(K.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,Se,0);M(E,De)&&b(Se),t.unbindTexture()}R.depthBuffer&&Ve(R)}function At(R){let E=m(R)||a,K=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ve=0,he=K.length;ve<he;ve++){let ge=K[ve];if(M(ge,E)){let De=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(ge).__webglTexture;t.bindTexture(De,Se),b(De),t.unbindTexture()}}}function Ie(R){if(a&&R.samples>0&&Ne(R)===!1){let E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],K=R.width,ve=R.height,he=n.COLOR_BUFFER_BIT,ge=[],De=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(R),Re=R.isWebGLMultipleRenderTargets===!0;if(Re)for(let qe=0;qe<E.length;qe++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let qe=0;qe<E.length;qe++){ge.push(n.COLOR_ATTACHMENT0+qe),R.depthBuffer&&ge.push(De);let Ye=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(Ye===!1&&(R.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[qe]),Ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[De]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[De])),Re){let D=i.get(E[qe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,K,ve,0,0,K,ve,he,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let qe=0;qe<E.length;qe++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.RENDERBUFFER,Se.__webglColorRenderbuffer[qe]);let Ye=i.get(E[qe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function Ke(R){return Math.min(s.maxSamples,R.samples)}function Ne(R){let E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(R){let E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Ze(R,E){let K=R.colorSpace,ve=R.format,he=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===oc||K!==Di&&K!==sn&&(wt.getTransfer(K)===Lt?a===!1?e.has("EXT_sRGB")===!0&&ve===ei?(R.format=oc,R.minFilter=nn,R.generateMipmaps=!1):E=Do.sRGBToLinear(E):(ve!==ei||he!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}this.allocateTextureUnit=N,this.resetTextureUnits=W,this.setTexture2D=H,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=nt,this.setupRenderTarget=J,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ne}function Lx(n,e,t){let i=t.isWebGL2;function s(r,o=sn){let a,l=wt.getTransfer(o);if(r===hi)return n.UNSIGNED_BYTE;if(r===Sd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===wd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===hm)return n.BYTE;if(r===dm)return n.SHORT;if(r===zc)return n.UNSIGNED_SHORT;if(r===Md)return n.INT;if(r===ji)return n.UNSIGNED_INT;if(r===Ji)return n.FLOAT;if(r===In)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===fm)return n.ALPHA;if(r===ei)return n.RGBA;if(r===pm)return n.LUMINANCE;if(r===mm)return n.LUMINANCE_ALPHA;if(r===Ts)return n.DEPTH_COMPONENT;if(r===xr)return n.DEPTH_STENCIL;if(r===oc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===gm)return n.RED;if(r===Ed)return n.RED_INTEGER;if(r===vm)return n.RG;if(r===Td)return n.RG_INTEGER;if(r===Ad)return n.RGBA_INTEGER;if(r===El||r===Tl||r===Al||r===Rl)if(l===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===El)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===El)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yu||r===Ku||r===Zu||r===ju)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ku)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ju)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ju||r===$u)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ju)return l===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$u)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qu||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===ah||r===oh||r===lh||r===ch||r===uh||r===hh||r===dh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Qu)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===th)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ih)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ah)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===oh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ch)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dh)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl||r===fh||r===ph)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Cl)return l===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ym||r===mh||r===gh||r===vh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Cl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===mh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Es?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var bc=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bn=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},kx={type:"move"},ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Mc=class extends di{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,v=t.getContextAttributes(),m=null,p=null,M=[],b=[],I=new we,B=null,S=new on;S.layers.enable(1),S.viewport=new _t;let _=new on;_.layers.enable(2),_.viewport=new _t;let L=[S,_],y=new bc;y.layers.enable(1),y.layers.enable(2);let x=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=M[Z];return oe===void 0&&(oe=new ra,M[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=M[Z];return oe===void 0&&(oe=new ra,M[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=M[Z];return oe===void 0&&(oe=new ra,M[Z]=oe),oe.getHandSpace()};function V(Z){let oe=b.indexOf(Z.inputSource);if(oe===-1)return;let Me=M[oe];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",N);for(let Z=0;Z<M.length;Z++){let oe=b[Z];oe!==null&&(b[Z]=null,M[Z].disconnect(oe))}x=null,T=null,e.setRenderTarget(m),f=null,h=null,d=null,s=null,p=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let oe={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ln(f.framebufferWidth,f.framebufferHeight,{format:ei,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let oe=null,Me=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?xr:Ts,Me=v.stencil?Es:ji);let Ue={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Ue),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new ln(h.textureWidth,h.textureHeight,{format:ei,type:hi,depthTexture:new Go(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Xe=e.properties.get(p);Xe.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(Z){for(let oe=0;oe<Z.removed.length;oe++){let Me=Z.removed[oe],Ee=b.indexOf(Me);Ee>=0&&(b[Ee]=null,M[Ee].disconnect(Me))}for(let oe=0;oe<Z.added.length;oe++){let Me=Z.added[oe],Ee=b.indexOf(Me);if(Ee===-1){for(let Xe=0;Xe<M.length;Xe++)if(Xe>=b.length){b.push(Me),Ee=Xe;break}else if(b[Xe]===null){b[Xe]=Me,Ee=Xe;break}if(Ee===-1)break}let Ue=M[Ee];Ue&&Ue.connect(Me)}}let P=new U,H=new U;function O(Z,oe,Me){P.setFromMatrixPosition(oe.matrixWorld),H.setFromMatrixPosition(Me.matrixWorld);let Ee=P.distanceTo(H),Ue=oe.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,He=Ue[14]/(Ue[10]-1),Ve=Ue[14]/(Ue[10]+1),nt=(Ue[9]+1)/Ue[5],J=(Ue[9]-1)/Ue[5],At=(Ue[8]-1)/Ue[0],Ie=(Xe[8]+1)/Xe[0],Ke=He*At,Ne=He*Ie,gt=Ee/(-At+Ie),Ze=gt*-At;oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let R=He+gt,E=Ve+gt,K=Ke-Ze,ve=Ne+(Ee-Ze),he=nt*Ve/E*R,ge=J*Ve/E*R;Z.projectionMatrix.makePerspective(K,ve,he,ge,R,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function G(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;y.near=_.near=S.near=Z.near,y.far=_.far=S.far=Z.far,(x!==y.near||T!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),x=y.near,T=y.far);let oe=Z.parent,Me=y.cameras;G(y,oe);for(let Ee=0;Ee<Me.length;Ee++)G(Me[Ee],oe);Me.length===2?O(y,S,_):y.projectionMatrix.copy(S.projectionMatrix),q(Z,y,oe)};function q(Z,oe,Me){Me===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=oa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)};let se=null;function re(Z,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){let Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ee=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,Ee=!0);for(let Ue=0;Ue<Me.length;Ue++){let Xe=Me[Ue],He=null;if(f!==null)He=f.getViewport(Xe);else{let nt=d.getViewSubImage(h,Xe);He=nt.viewport,Ue===0&&(e.setRenderTargetTextures(p,nt.colorTexture,h.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(p))}let Ve=L[Ue];Ve===void 0&&(Ve=new on,Ve.layers.enable(Ue),Ve.viewport=new _t,L[Ue]=Ve),Ve.matrix.fromArray(Xe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Xe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),Ue===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ee===!0&&y.cameras.push(Ve)}}for(let Me=0;Me<M.length;Me++){let Ee=b[Me],Ue=M[Me];Ee!==null&&Ue!==void 0&&Ue.update(Ee,oe,c||o)}se&&se(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let fe=new Dd;fe.setAnimationLoop(re),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}};function Ix(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Id(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,b,I){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,I)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dx(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,b){let I=b.program;i.uniformBlockBinding(M,I)}function c(M,b){let I=s[M.id];I===void 0&&(g(M),I=u(M),s[M.id]=I,M.addEventListener("dispose",m));let B=b.program;i.updateUBOMapping(M,B);let S=e.render.frame;r[M.id]!==S&&(h(M),r[M.id]=S)}function u(M){let b=d();M.__bindingPointIndex=b;let I=n.createBuffer(),B=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,B,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,I),I}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let b=s[M.id],I=M.uniforms,B=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,_=I.length;S<_;S++){let L=Array.isArray(I[S])?I[S]:[I[S]];for(let y=0,x=L.length;y<x;y++){let T=L[y];if(f(T,S,y,B)===!0){let V=T.__offset,W=Array.isArray(T.value)?T.value:[T.value],N=0;for(let P=0;P<W.length;P++){let H=W[P],O=v(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,V+N,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,N),N+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,b,I,B){let S=M.value,_=b+"_"+I;if(B[_]===void 0)return typeof S=="number"||typeof S=="boolean"?B[_]=S:B[_]=S.clone(),!0;{let L=B[_];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return B[_]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(M){let b=M.uniforms,I=0,B=16;for(let _=0,L=b.length;_<L;_++){let y=Array.isArray(b[_])?b[_]:[b[_]];for(let x=0,T=y.length;x<T;x++){let V=y[x],W=Array.isArray(V.value)?V.value:[V.value];for(let N=0,P=W.length;N<P;N++){let H=W[N],O=v(H),G=I%B;G!==0&&B-G<O.boundary&&(I+=B-G),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=I,I+=O.storage}}}let S=I%B;return S>0&&(I+=B-S),M.__size=I,M.__cache={},this}function v(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){let b=M.target;b.removeEventListener("dispose",m);let I=o.indexOf(b.__bindingPointIndex);o.splice(I,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var fi=class{constructor(e={}){let{canvas:t=Wm(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=$i,this.toneMappingExposure=1;let b=this,I=!1,B=0,S=0,_=null,L=-1,y=null,x=new _t,T=new _t,V=null,W=new et(0),N=0,P=t.width,H=t.height,O=1,G=null,q=null,se=new _t(0,0,P,H),re=new _t(0,0,P,H),fe=!1,Z=new Ho,oe=!1,Me=!1,Ee=null,Ue=new Kt,Xe=new we,He=new U,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return _===null?O:1}let J=i;function At(A,Y){for(let ee=0;ee<A.length;ee++){let te=A[ee],Q=t.getContext(te,Y);if(Q!==null)return Q}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",le,!1),J===null){let Y=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&Y.shift(),J=At(Y,A),J===null)throw At(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ie,Ke,Ne,gt,Ze,R,E,K,ve,he,ge,De,Se,Re,qe,Ye,D,ae,w,X,ie,$,ne,Pe;function Te(){Ie=new Qv(J),Ke=new Yv(J,Ie,e),Ie.init(Ke),$=new Lx(J,Ie,Ke),Ne=new Cx(J,Ie,Ke),gt=new ny(J),Ze=new vx,R=new Px(J,Ie,Ne,Ze,Ke,$,gt),E=new Zv(b),K=new $v(b),ve=new u0(J,Ke),ne=new qv(J,Ie,ve,Ke),he=new ey(J,ve,gt,ne),ge=new ay(J,he,ve,gt),w=new ry(J,Ke,R),Ye=new Kv(Ze),De=new gx(b,E,K,Ie,Ke,ne,Ye),Se=new Ix(b,Ze),Re=new xx,qe=new Ex(Ie,Ke),ae=new Wv(b,E,K,Ne,ge,h,l),D=new Rx(b,ge,Ke),Pe=new Dx(J,gt,Ke,Ne),X=new Xv(J,Ie,gt,Ke),ie=new ty(J,Ie,gt,Ke),gt.programs=De.programs,b.capabilities=Ke,b.extensions=Ie,b.properties=Ze,b.renderLists=Re,b.shadowMap=D,b.state=Ne,b.info=gt}Te();let _e=new Mc(b,J);this.xr=_e,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(P,H,!1))},this.getSize=function(A){return A.set(P,H)},this.setSize=function(A,Y,ee=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,H=Y,t.width=Math.floor(A*O),t.height=Math.floor(Y*O),ee===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(P*O,H*O).floor()},this.setDrawingBufferSize=function(A,Y,ee){P=A,H=Y,O=ee,t.width=Math.floor(A*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,Y,ee,te){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,Y,ee,te),Ne.viewport(x.copy(se).multiplyScalar(O).floor())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,Y,ee,te){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,Y,ee,te),Ne.scissor(T.copy(re).multiplyScalar(O).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){Ne.setScissorTest(fe=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(A=!0,Y=!0,ee=!0){let te=0;if(A){let Q=!1;if(_!==null){let ke=_.texture.format;Q=ke===Ad||ke===Td||ke===Ed}if(Q){let ke=_.texture.type,Oe=ke===hi||ke===ji||ke===zc||ke===Es||ke===Sd||ke===wd,Be=ae.getClearColor(),Fe=ae.getClearAlpha(),rt=Be.r,$e=Be.g,Je=Be.b;Oe?(f[0]=rt,f[1]=$e,f[2]=Je,f[3]=Fe,J.clearBufferuiv(J.COLOR,0,f)):(g[0]=rt,g[1]=$e,g[2]=Je,g[3]=Fe,J.clearBufferiv(J.COLOR,0,g))}else te|=J.COLOR_BUFFER_BIT}Y&&(te|=J.DEPTH_BUFFER_BIT),ee&&(te|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Re.dispose(),qe.dispose(),Ze.dispose(),E.dispose(),K.dispose(),ge.dispose(),ne.dispose(),Pe.dispose(),De.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",ht),_e.removeEventListener("sessionend",st),Ee&&(Ee.dispose(),Ee=null),bt.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let A=gt.autoReset,Y=D.enabled,ee=D.autoUpdate,te=D.needsUpdate,Q=D.type;Te(),gt.autoReset=A,D.enabled=Y,D.autoUpdate=ee,D.needsUpdate=te,D.type=Q}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function de(A){let Y=A.target;Y.removeEventListener("dispose",de),ze(Y)}function ze(A){ye(A),Ze.remove(A)}function ye(A){let Y=Ze.get(A).programs;Y!==void 0&&(Y.forEach(function(ee){De.releaseProgram(ee)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ee,te,Q,ke){Y===null&&(Y=Ve);let Oe=Q.isMesh&&Q.matrixWorld.determinant()<0,Be=Ga(A,Y,ee,te,Q);Ne.setMaterial(te,Oe);let Fe=ee.index,rt=1;if(te.wireframe===!0){if(Fe=he.getWireframeAttribute(ee),Fe===void 0)return;rt=2}let $e=ee.drawRange,Je=ee.attributes.position,Rt=$e.start*rt,Wt=($e.start+$e.count)*rt;ke!==null&&(Rt=Math.max(Rt,ke.start*rt),Wt=Math.min(Wt,(ke.start+ke.count)*rt)),Fe!==null?(Rt=Math.max(Rt,0),Wt=Math.min(Wt,Fe.count)):Je!=null&&(Rt=Math.max(Rt,0),Wt=Math.min(Wt,Je.count));let Dt=Wt-Rt;if(Dt<0||Dt===1/0)return;ne.setup(Q,te,Be,ee,Fe);let En,Mt=X;if(Fe!==null&&(En=ve.get(Fe),Mt=ie,Mt.setIndex(En)),Q.isMesh)te.wireframe===!0?(Ne.setLineWidth(te.wireframeLinewidth*nt()),Mt.setMode(J.LINES)):Mt.setMode(J.TRIANGLES);else if(Q.isLine){let at=te.linewidth;at===void 0&&(at=1),Ne.setLineWidth(at*nt()),Q.isLineSegments?Mt.setMode(J.LINES):Q.isLineLoop?Mt.setMode(J.LINE_LOOP):Mt.setMode(J.LINE_STRIP)}else Q.isPoints?Mt.setMode(J.POINTS):Q.isSprite&&Mt.setMode(J.TRIANGLES);if(Q.isBatchedMesh)Mt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Mt.renderInstances(Rt,Dt,Q.count);else if(ee.isInstancedBufferGeometry){let at=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Wr=Math.min(ee.instanceCount,at);Mt.renderInstances(Rt,Dt,Wr)}else Mt.render(Rt,Dt)};function xe(A,Y,ee){A.transparent===!0&&A.side===dn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,gs(A,Y,ee),A.side=Qi,A.needsUpdate=!0,gs(A,Y,ee),A.side=dn):gs(A,Y,ee)}this.compile=function(A,Y,ee=null){ee===null&&(ee=A),m=qe.get(ee),m.init(),M.push(m),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),A!==ee&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(b._useLegacyLights);let te=new Set;return A.traverse(function(Q){let ke=Q.material;if(ke)if(Array.isArray(ke))for(let Oe=0;Oe<ke.length;Oe++){let Be=ke[Oe];xe(Be,ee,Q),te.add(Be)}else xe(ke,ee,Q),te.add(ke)}),M.pop(),m=null,te},this.compileAsync=function(A,Y,ee=null){let te=this.compile(A,Y,ee);return new Promise(Q=>{function ke(){if(te.forEach(function(Oe){Ze.get(Oe).currentProgram.isReady()&&te.delete(Oe)}),te.size===0){Q(A);return}setTimeout(ke,10)}Ie.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Ge=null;function ot(A){Ge&&Ge(A)}function ht(){bt.stop()}function st(){bt.start()}let bt=new Dd;bt.setAnimationLoop(ot),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(A){Ge=A,_e.setAnimationLoop(A),A===null?bt.stop():bt.start()},_e.addEventListener("sessionstart",ht),_e.addEventListener("sessionend",st),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(Y),Y=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,Y,_),m=qe.get(A,M.length),m.init(),M.push(m),Ue.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Z.setFromProjectionMatrix(Ue),Me=this.localClippingEnabled,oe=Ye.init(this.clippingPlanes,Me),v=Re.get(A,p.length),v.init(),p.push(v),zt(A,Y,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(G,q),this.info.render.frame++,oe===!0&&Ye.beginShadows();let ee=m.state.shadowsArray;if(D.render(ee,A,Y),oe===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(v,A),m.setupLights(b._useLegacyLights),Y.isArrayCamera){let te=Y.cameras;for(let Q=0,ke=te.length;Q<ke;Q++){let Oe=te[Q];$t(v,A,Oe,Oe.viewport)}}else $t(v,A,Y);_!==null&&(R.updateMultisampleRenderTarget(_),R.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(b,A,Y),ne.resetDefaultState(),L=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function zt(A,Y,ee,te){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){te&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ue);let Oe=ge.update(A),Be=A.material;Be.visible&&v.push(A,Oe,Be,ee,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){let Oe=ge.update(A),Be=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),He.copy(Oe.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(Ue)),Array.isArray(Be)){let Fe=Oe.groups;for(let rt=0,$e=Fe.length;rt<$e;rt++){let Je=Fe[rt],Rt=Be[Je.materialIndex];Rt&&Rt.visible&&v.push(A,Oe,Rt,ee,He.z,Je)}}else Be.visible&&v.push(A,Oe,Be,ee,He.z,null)}}let ke=A.children;for(let Oe=0,Be=ke.length;Oe<Be;Oe++)zt(ke[Oe],Y,ee,te)}function $t(A,Y,ee,te){let Q=A.opaque,ke=A.transmissive,Oe=A.transparent;m.setupLightsView(ee),oe===!0&&Ye.setGlobalState(b.clippingPlanes,ee),ke.length>0&&xl(Q,ke,Y,ee),te&&Ne.viewport(x.copy(te)),Q.length>0&&Gi(Q,Y,ee),ke.length>0&&Gi(ke,Y,ee),Oe.length>0&&Gi(Oe,Y,ee),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function xl(A,Y,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;let ke=Ke.isWebGL2;Ee===null&&(Ee=new ln(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?In:hi,minFilter:aa,samples:ke?4:0})),b.getDrawingBufferSize(Xe),ke?Ee.setSize(Xe.x,Xe.y):Ee.setSize(Io(Xe.x),Io(Xe.y));let Oe=b.getRenderTarget();b.setRenderTarget(Ee),b.getClearColor(W),N=b.getClearAlpha(),N<1&&b.setClearColor(16777215,.5),b.clear();let Be=b.toneMapping;b.toneMapping=$i,Gi(A,ee,te),R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee);let Fe=!1;for(let rt=0,$e=Y.length;rt<$e;rt++){let Je=Y[rt],Rt=Je.object,Wt=Je.geometry,Dt=Je.material,En=Je.group;if(Dt.side===dn&&Rt.layers.test(te.layers)){let Mt=Dt.side;Dt.side=Yt,Dt.needsUpdate=!0,Gs(Rt,ee,te,Wt,Dt,En),Dt.side=Mt,Dt.needsUpdate=!0,Fe=!0}}Fe===!0&&(R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee)),b.setRenderTarget(Oe),b.setClearColor(W,N),b.toneMapping=Be}function Gi(A,Y,ee){let te=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,ke=A.length;Q<ke;Q++){let Oe=A[Q],Be=Oe.object,Fe=Oe.geometry,rt=te===null?Oe.material:te,$e=Oe.group;Be.layers.test(ee.layers)&&Gs(Be,Y,ee,Fe,rt,$e)}}function Gs(A,Y,ee,te,Q,ke){A.onBeforeRender(b,Y,ee,te,Q,ke),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(b,Y,ee,te,A,ke),Q.transparent===!0&&Q.side===dn&&Q.forceSinglePass===!1?(Q.side=Yt,Q.needsUpdate=!0,b.renderBufferDirect(ee,Y,te,Q,A,ke),Q.side=Qi,Q.needsUpdate=!0,b.renderBufferDirect(ee,Y,te,Q,A,ke),Q.side=dn):b.renderBufferDirect(ee,Y,te,Q,A,ke),A.onAfterRender(b,Y,ee,te,Q,ke)}function gs(A,Y,ee){Y.isScene!==!0&&(Y=Ve);let te=Ze.get(A),Q=m.state.lights,ke=m.state.shadowsArray,Oe=Q.state.version,Be=De.getParameters(A,Q.state,ke,Y,ee),Fe=De.getProgramCacheKey(Be),rt=te.programs;te.environment=A.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(A.isMeshStandardMaterial?K:E).get(A.envMap||te.environment),rt===void 0&&(A.addEventListener("dispose",de),rt=new Map,te.programs=rt);let $e=rt.get(Fe);if($e!==void 0){if(te.currentProgram===$e&&te.lightsStateVersion===Oe)return Gr(A,Be),$e}else Be.uniforms=De.getUniforms(A),A.onBuild(ee,Be,b),A.onBeforeCompile(Be,b),$e=De.acquireProgram(Be,Fe),rt.set(Fe,$e),te.uniforms=Be.uniforms;let Je=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ye.uniform),Gr(A,Be),te.needsLights=bl(A),te.lightsStateVersion=Oe,te.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.directionalShadowMap.value=Q.state.directionalShadowMap,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotShadowMap.value=Q.state.spotShadowMap,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMap.value=Q.state.pointShadowMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=$e,te.uniformsList=null,$e}function Vr(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=gr.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Gr(A,Y){let ee=Ze.get(A);ee.outputColorSpace=Y.outputColorSpace,ee.batching=Y.batching,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}function Ga(A,Y,ee,te,Q){Y.isScene!==!0&&(Y=Ve),R.resetTextureUnits();let ke=Y.fog,Oe=te.isMeshStandardMaterial?Y.environment:null,Be=_===null?b.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Di,Fe=(te.isMeshStandardMaterial?K:E).get(te.envMap||Oe),rt=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,$e=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Je=!!ee.morphAttributes.position,Rt=!!ee.morphAttributes.normal,Wt=!!ee.morphAttributes.color,Dt=$i;te.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Dt=b.toneMapping);let En=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Mt=En!==void 0?En.length:0,at=Ze.get(te),Wr=m.state.lights;if(oe===!0&&(Me===!0||A!==y)){let Qt=A===y&&te.id===L;Ye.setState(te,A,Qt)}let Ct=!1;te.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Wr.state.version||at.outputColorSpace!==Be||Q.isBatchedMesh&&at.batching===!1||!Q.isBatchedMesh&&at.batching===!0||Q.isInstancedMesh&&at.instancing===!1||!Q.isInstancedMesh&&at.instancing===!0||Q.isSkinnedMesh&&at.skinning===!1||!Q.isSkinnedMesh&&at.skinning===!0||Q.isInstancedMesh&&at.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&at.instancingColor===!1&&Q.instanceColor!==null||at.envMap!==Fe||te.fog===!0&&at.fog!==ke||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Ye.numPlanes||at.numIntersection!==Ye.numIntersection)||at.vertexAlphas!==rt||at.vertexTangents!==$e||at.morphTargets!==Je||at.morphNormals!==Rt||at.morphColors!==Wt||at.toneMapping!==Dt||Ke.isWebGL2===!0&&at.morphTargetsCount!==Mt)&&(Ct=!0):(Ct=!0,at.__version=te.version);let Mi=at.currentProgram;Ct===!0&&(Mi=gs(te,Y,Q));let Wa=!1,Xn=!1,qr=!1,qt=Mi.getUniforms(),Si=at.uniforms;if(Ne.useProgram(Mi.program)&&(Wa=!0,Xn=!0,qr=!0),te.id!==L&&(L=te.id,Xn=!0),Wa||y!==A){qt.setValue(J,"projectionMatrix",A.projectionMatrix),qt.setValue(J,"viewMatrix",A.matrixWorldInverse);let Qt=qt.map.cameraPosition;Qt!==void 0&&Qt.setValue(J,He.setFromMatrixPosition(A.matrixWorld)),Ke.logarithmicDepthBuffer&&qt.setValue(J,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&qt.setValue(J,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Xn=!0,qr=!0)}if(Q.isSkinnedMesh){qt.setOptional(J,Q,"bindMatrix"),qt.setOptional(J,Q,"bindMatrixInverse");let Qt=Q.skeleton;Qt&&(Ke.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),qt.setValue(J,"boneTexture",Qt.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(qt.setOptional(J,Q,"batchingTexture"),qt.setValue(J,"batchingTexture",Q._matricesTexture,R));let wi=ee.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0&&Ke.isWebGL2===!0)&&w.update(Q,ee,Mi),(Xn||at.receiveShadow!==Q.receiveShadow)&&(at.receiveShadow=Q.receiveShadow,qt.setValue(J,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Si.envMap.value=Fe,Si.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Xn&&(qt.setValue(J,"toneMappingExposure",b.toneMappingExposure),at.needsLights&&_l(Si,qr),ke&&te.fog===!0&&Se.refreshFogUniforms(Si,ke),Se.refreshMaterialUniforms(Si,te,O,H,Ee),gr.upload(J,Vr(at),Si,R)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(gr.upload(J,Vr(at),Si,R),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&qt.setValue(J,"center",Q.center),qt.setValue(J,"modelViewMatrix",Q.modelViewMatrix),qt.setValue(J,"normalMatrix",Q.normalMatrix),qt.setValue(J,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Qt=te.uniformsGroups;for(let Xr=0,Ml=Qt.length;Xr<Ml;Xr++)if(Ke.isWebGL2){let qa=Qt[Xr];Pe.update(qa,Mi),Pe.bind(qa,Mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mi}function _l(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function bl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,Y,ee){Ze.get(A.texture).__webglTexture=Y,Ze.get(A.depthTexture).__webglTexture=ee;let te=Ze.get(A);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,Y){let ee=Ze.get(A);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,ee=0){_=A,B=Y,S=ee;let te=!0,Q=null,ke=!1,Oe=!1;if(A){let Fe=Ze.get(A);Fe.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(J.FRAMEBUFFER,null),te=!1):Fe.__webglFramebuffer===void 0?R.setupRenderTarget(A):Fe.__hasExternalTextures&&R.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);let rt=A.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Oe=!0);let $e=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[Y])?Q=$e[Y][ee]:Q=$e[Y],ke=!0):Ke.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?Q=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?Q=$e[ee]:Q=$e,x.copy(A.viewport),T.copy(A.scissor),V=A.scissorTest}else x.copy(se).multiplyScalar(O).floor(),T.copy(re).multiplyScalar(O).floor(),V=fe;if(Ne.bindFramebuffer(J.FRAMEBUFFER,Q)&&Ke.drawBuffers&&te&&Ne.drawBuffers(A,Q),Ne.viewport(x),Ne.scissor(T),Ne.setScissorTest(V),ke){let Fe=Ze.get(A.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ee)}else if(Oe){let Fe=Ze.get(A.texture),rt=Y||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Fe.__webglTexture,ee||0,rt)}L=-1},this.readRenderTargetPixels=function(A,Y,ee,te,Q,ke,Oe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){Ne.bindFramebuffer(J.FRAMEBUFFER,Be);try{let Fe=A.texture,rt=Fe.format,$e=Fe.type;if(rt!==ei&&$.convert(rt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Je=$e===In&&(Ie.has("EXT_color_buffer_half_float")||Ke.isWebGL2&&Ie.has("EXT_color_buffer_float"));if($e!==hi&&$.convert($e)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Ji&&(Ke.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-te&&ee>=0&&ee<=A.height-Q&&J.readPixels(Y,ee,te,Q,$.convert(rt),$.convert($e),ke)}finally{let Fe=_!==null?Ze.get(_).__webglFramebuffer:null;Ne.bindFramebuffer(J.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(A,Y,ee=0){let te=Math.pow(2,-ee),Q=Math.floor(Y.image.width*te),ke=Math.floor(Y.image.height*te);R.setTexture2D(Y,0),J.copyTexSubImage2D(J.TEXTURE_2D,ee,0,0,A.x,A.y,Q,ke),Ne.unbindTexture()},this.copyTextureToTexture=function(A,Y,ee,te=0){let Q=Y.image.width,ke=Y.image.height,Oe=$.convert(ee.format),Be=$.convert(ee.type);R.setTexture2D(ee,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ee.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ee.unpackAlignment),Y.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,te,A.x,A.y,Q,ke,Oe,Be,Y.image.data):Y.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,te,A.x,A.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Oe,Y.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,te,A.x,A.y,Oe,Be,Y.image),te===0&&ee.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,ee,te,Q=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ke=A.max.x-A.min.x+1,Oe=A.max.y-A.min.y+1,Be=A.max.z-A.min.z+1,Fe=$.convert(te.format),rt=$.convert(te.type),$e;if(te.isData3DTexture)R.setTexture3D(te,0),$e=J.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)R.setTexture2DArray(te,0),$e=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,te.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,te.unpackAlignment);let Je=J.getParameter(J.UNPACK_ROW_LENGTH),Rt=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Wt=J.getParameter(J.UNPACK_SKIP_PIXELS),Dt=J.getParameter(J.UNPACK_SKIP_ROWS),En=J.getParameter(J.UNPACK_SKIP_IMAGES),Mt=ee.isCompressedTexture?ee.mipmaps[Q]:ee.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Mt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Mt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,A.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,A.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,A.min.z),ee.isDataTexture||ee.isData3DTexture?J.texSubImage3D($e,Q,Y.x,Y.y,Y.z,ke,Oe,Be,Fe,rt,Mt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D($e,Q,Y.x,Y.y,Y.z,ke,Oe,Be,Fe,Mt.data)):J.texSubImage3D($e,Q,Y.x,Y.y,Y.z,ke,Oe,Be,Fe,rt,Mt),J.pixelStorei(J.UNPACK_ROW_LENGTH,Je),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Rt),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Wt),J.pixelStorei(J.UNPACK_SKIP_ROWS,Dt),J.pixelStorei(J.UNPACK_SKIP_IMAGES,En),Q===0&&te.generateMipmaps&&J.generateMipmap($e),Ne.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Ne.unbindTexture()},this.resetState=function(){B=0,S=0,_=null,Ne.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Oc?"display-p3":"srgb",t.unpackColorSpace=wt.workingColorSpace===Ko?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?As:Cd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===As?an:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Sc=class extends fi{};Sc.prototype.isWebGL1Renderer=!0;var pi=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},wc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ac,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new U,Wo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dn=class extends Ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lr,Qr=new U,cr=new U,ur=new U,hr=new we,ea=new we,Bd=new Kt,xo=new U,ta=new U,_o=new U,od=new we,Ql=new we,ld=new we,Gn=class extends fn{constructor(e=new Dn){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wc(t,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new Wo(i,3,0,!1)),lr.setAttribute("uv",new Wo(i,2,3,!1))}this.geometry=lr,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),Bd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-ur.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;bo(xo.set(-.5,-.5,0),ur,o,cr,s,r),bo(ta.set(.5,-.5,0),ur,o,cr,s,r),bo(_o.set(.5,.5,0),ur,o,cr,s,r),od.set(0,0),Ql.set(1,0),ld.set(1,1);let a=e.ray.intersectTriangle(xo,ta,_o,!1,Qr);if(a===null&&(bo(ta.set(-.5,.5,0),ur,o,cr,s,r),Ql.set(0,1),a=e.ray.intersectTriangle(xo,_o,ta,!1,Qr),a===null))return;let l=e.ray.origin.distanceTo(Qr);l<e.near||l>e.far||t.push({distance:l,point:Qr.clone(),uv:ws.getInterpolation(Qr,xo,ta,_o,od,Ql,ld,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function bo(n,e,t,i,s,r){hr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ea.x=r*hr.x-s*hr.y,ea.y=s*hr.x+r*hr.y):ea.copy(hr),n.copy(e),n.x+=ea.x,n.y+=ea.y,n.applyMatrix4(Bd)}var Sr=class extends Tn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=rn,u=rn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zi=class extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cd=new U,ud=new U,hd=new Kt,ec=new es,Mo=new Ui,Cs=class extends fn{constructor(e=new Ut,t=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)cd.fromBufferAttribute(t,s-1),ud.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=cd.distanceTo(ud);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;hd.copy(s).invert(),ec.copy(e.ray).applyMatrix4(hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,d=new U,h=new U,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let b=p,I=M-1;b<I;b+=f){let B=g.getX(b),S=g.getX(b+1);if(c.fromBufferAttribute(m,B),u.fromBufferAttribute(m,S),ec.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let b=p,I=M-1;b<I;b+=f){if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,b+1),ec.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},dd=new U,fd=new U,qo=class extends Cs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)dd.fromBufferAttribute(t,s),fd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dd.distanceTo(fd);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ha=class extends Ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pd=new Kt,Ec=new es,So=new Ui,wo=new U,wr=class extends fn{constructor(e=new Ut,t=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;pd.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,v=f;g<v;g++){let m=c.getX(g);wo.fromBufferAttribute(d,m),md(wo,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,v=f;g<v;g++)wo.fromBufferAttribute(d,g),md(wo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function md(n,e,t,i,s,r,o){let a=Ec.distanceSqToPoint(n);if(a<t){let l=new U;Ec.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var ns=class extends Tn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mi=class n extends Ut{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new U,g=new we;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let M=p+m,b=M,I=M+i+1,B=M+i+2,S=M+1;a.push(b,I,S),a.push(I,B,S)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Un=class n extends Ut{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new U,h=new U,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let M=[],b=p/i,I=0;p===0&&o===0?I=.5/t:p===i&&l===Math.PI&&(I=-.5/t);for(let B=0;B<=t;B++){let S=B/t;d.x=-e*Math.cos(s+S*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+S*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(S+I,1-b),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let b=u[p][M+1],I=u[p][M],B=u[p+1][M],S=u[p+1][M+1];(p!==0||o>0)&&f.push(b,I,S),(p!==i-1||l<Math.PI)&&f.push(I,B,S)}this.setIndex(f),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Eo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ux(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Er=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tc=class extends Er{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=e,a=2*t-i;break;case _h:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:o=e,l=2*i-t;break;case _h:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,M=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,I=f*m-f*v;for(let B=0;B!==a;++B)r[B]=p*o[u+B]+M*o[c+B]+b*o[l+B]+I*o[d+B];return r}},Ac=class extends Er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Rc=class extends Er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Eo(t,this.TimeBufferType),this.values=Eo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Eo(e.times,Array),values:Eo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ux(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Ro;var Ps=class extends ti{};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Ao;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends ti{};Cc.prototype.ValueTypeName="color";var Pc=class extends ti{};Pc.prototype.ValueTypeName="number";var Lc=class extends Er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Zt.slerpFlat(r,0,o,c-a,o,c,l);return r}},da=class extends ti{InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}};da.prototype.ValueTypeName="quaternion";da.prototype.DefaultInterpolation=Ro;da.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends ti{};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Ao;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends ti{};kc.prototype.ValueTypeName="vector";var gd={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ic=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Nx=new Ic,fa=class{constructor(e){this.manager=e!==void 0?e:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dc=class extends fa{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=gd.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=la("img");function l(){u(),gd.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var is=class extends fa{constructor(e){super(e)}load(e,t,i,s){let r=new Tn,o=new Dc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}};var Xo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=vd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function vd(){return(typeof performance>"u"?Date:performance).now()}var Hc="\\[\\]\\.:\\/",zx=new RegExp("["+Hc+"]","g"),Vc="[^"+Hc+"]",Ox="[^"+Hc.replace("\\.","")+"]",Fx=/((?:WC+[\/:])*)/.source.replace("WC",Vc),Bx=/(WCOD+)?/.source.replace("WCOD",Ox),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),Vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),Gx=new RegExp("^"+Fx+Bx+Hx+Vx+"$"),Wx=["material","materials","bones","map"],Uc=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zx,"")}static parseTrackName(e){let t=Gx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Uc;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var T_=new Float32Array(1);var Tr=class{constructor(e,t,i=0,s=1/0){this.ray=new es(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Nc(e,this,i,t),i.sort(yd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nc(e[s],this,i,t);return i.sort(yd),i}};function yd(n,e){return n.distance-e.distance}function Nc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Nc(s[r],e,t,!0)}}var pa=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(hn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var jo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ni=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},qx=new ts(-1,1,1,-1,0,1),Gc=class extends Ut{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}},Xx=new Gc,Cr=class{constructor(e){this._mesh=new yt(Xx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ds=class extends ni{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ar.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ga=class extends ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jo=class extends ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $o=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new we);this._width=i.width,this._height=i.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ds(jo),this.copyPass.material.blending=ui,this.clock=new Xo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ga!==void 0&&(o instanceof ga?i=!0:o instanceof Jo&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Qo=class extends ni{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Hd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Pr=class n extends ni{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(r,o,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let h=new ln(r,o,{type:In});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new ln(r,o,{type:In});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Hd;this.highPassUniforms=Ar.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new we(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=jo;this.copyUniforms=Ar.clone(u.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new et,this.oldClearAlpha=1,this.basic=new An,this.fsQuad=new Cr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new we(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Pr.BlurDirectionX=new we(1,0);Pr.BlurDirectionY=new we(0,1);function Rn(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ut(n){let e=0,t=0;for(;!e;)e=n();for(;!t;)t=n();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function vi(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function ss(n){return n<0?0:n>1?1:n}function Wn(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Wc(n,e,t){let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function Vd(n){let e=Rn(n.seed);n.twist=3+e()*2.4,n.spin=(.006+e()*.012)*(e()<.5?-1:1),n.clumps=[];for(let t=0;t<4;t++)n.clumps.push([ut(e)*n.R*.35,ut(e)*n.R*.08,ut(e)*n.R*.35]);return n}function Gd(n,e,t,i,s){let r=t*2*Math.PI/n.arms+e*n.twist+ut(i)*(.08+.2*e)*s,o=n.R*(.12+.88*e)*(1+ut(i)*.035*s);return[Math.cos(r)*o,ut(i)*n.R*.02*s*(1-.5*e),Math.sin(r)*o]}function Wd(n,e){let t=Rn(n.seed*7+1),i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e);for(let a=0;a<e;a++){let l,c;if(n.kind==="spiral")if(t()<.2){let f=Math.abs(ut(t))*n.R*.13,g=t()*6.283,v=Math.acos(2*t()-1);l=[f*Math.sin(v)*Math.cos(g),f*Math.cos(v)*.7,f*Math.sin(v)*Math.sin(g)],c=f/n.R}else{let f=Math.pow(t(),.75);l=Gd(n,f,Math.floor(t()*n.arms),t,1),c=.12+.88*f}else if(n.kind==="elliptical")l=[ut(t)*n.R*.34,ut(t)*n.R*.22,ut(t)*n.R*.3],c=Math.min(1,Math.hypot(l[0],l[1],l[2])/n.R);else{let f=n.clumps[Math.floor(t()*4)];l=[f[0]+ut(t)*n.R*.2,f[1]+ut(t)*n.R*.08,f[2]+ut(t)*n.R*.2],c=Math.min(1,Math.hypot(l[0],l[2])/n.R)}i[a*3]=l[0],i[a*3+1]=l[1],i[a*3+2]=l[2];let u=Math.min(1,c),d=n.tint,h=.45+.4*(1-u*.6);s[a*3]=((1-.38*u)*.72+d[0]*.28)*h,s[a*3+1]=((.84-.08*u+0)*.72+d[1]*.28)*h+.05*u,s[a*3+2]=((.62+.38*u)*.72+d[2]*.28)*h,r[a]=(1.2+t()*2.2)*(1+(1-u)*.3),o[a]=t()*6.283}return{pos:i,col:s,sz:r,ph:o}}function qd(n,e,t,i){let s=Rn(Wn(e));if(n.kind==="spiral"){let l=.3+.6*((t+.5)/Math.max(i,1));return Gd(n,l,t%n.arms,s,.5)}let r=s()*6.283,o=Math.acos(2*s()-1),a=n.R*(.2+.5*s());return[a*Math.sin(o)*Math.cos(r),a*Math.cos(o)*.35,a*Math.sin(o)*Math.sin(r)]}function el(n){n=n.toLowerCase();let e=t=>t.test(n);return/volkan|lav|magma|pirosferik|ateş/.test(n.replace(/su altı volkan\S*|volkanik kül\S*/g,""))?{a:[1,.47,.16],b:[.35,.07,.04],atm:[1,.58,.27],type:3}:e(/buz|buzul|fiyort|donmuş/)?{a:[.86,.94,1],b:[.43,.63,.8],atm:[.67,.84,1],type:4}:e(/okyanus|su altı|su dünyası|akuatik|sıvı|akışkan/)?{a:[.27,.59,.9],b:[.04,.18,.43],atm:[.43,.7,1],type:2}:e(/çöl|kum/)?{a:[.9,.72,.43],b:[.55,.31,.16],atm:[.92,.75,.5],type:0}:e(/orman|bitki|ağaç|biyosfer|tarımsal/)?{a:[.35,.75,.43],b:[.07,.27,.18],atm:[.55,.9,.6],type:2}:e(/gaz dev|gaz halka|gaz tabaka|gaz gezegeni|atmosfer gezegeni|bulut/)?{a:[.92,.78,.59],b:[.59,.35,.24],atm:[.94,.78,.63],type:1}:e(/kristal|prizma|spektr/)?{a:[.47,.9,.82],b:[.67,.31,.75],atm:[.63,.92,.88],type:0}:e(/neon|ışık|foton|radyant|lüminesans|aurora/)?{a:[.67,.55,1],b:[.16,.24,.59],atm:[.7,.67,1],type:1}:e(/vakum|karanlık|tekillik|boşluk|sessiz/)?{a:[.43,.35,.59],b:[.06,.04,.12],atm:[.55,.43,.75],type:0}:{a:[.59,.63,.73],b:[.12,.16,.27],atm:[.75,.72,.5],type:0}}var Xd=`varying vec3 vO;varying vec3 vN;varying vec3 vW;
void main(){vO=position;vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,Yd=`precision highp float;varying vec3 vO;varying vec3 vN;varying vec3 vW;
uniform vec3 uA,uB,uAtm,uL,uRn,uPC;uniform float uType,uSeed;uniform sampler2D uMap;uniform vec4 uOc[3];uniform vec4 uRg;
float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float n3(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n3(p);p=p*2.03+7.1;a*=.5;}return s;}
void main(){
 vec3 N=normalize(vN),V=normalize(cameraPosition-vW),L=normalize(uL),D=normalize(vO),P=D*1.0+uSeed;
 float diff=smoothstep(-.06,.42,dot(N,L)), h=fbm(P*2.6), land=1., cloud=0.;
 float shad=1.;
 for(int i=0;i<3;i++){ vec4 o=uOc[i]; if(o.w>0.){ vec3 m=o.xyz-vW; float tq=dot(m,L); if(tq>0.){ float d=length(m-L*tq), pen=o.w*.1+tq*.012; shad*=1.-.96*(1.-smoothstep(o.w-pen,o.w+pen,d)); } } }
 if(uRg.z>.5){ float dn=dot(L,uRn); if(abs(dn)>.03){ float tr=dot(uPC-vW,uRn)/dn; if(tr>0.){ vec3 H=vW+L*tr; float rr=length(H-uPC)/uRg.w; if(rr>uRg.x&&rr<uRg.y){ float tt=(rr-uRg.x)/(uRg.y-uRg.x); float dens=.55+.35*sin(tt*70.+sin(tt*19.)*3.); shad*=1.-.8*dens*smoothstep(0.,.04,tt)*(1.-smoothstep(.95,1.,tt)); } } } }
 diff*=shad;
 vec3 col, emis=vec3(0.);
 if(uType<.5){ col=mix(uB,uA,smoothstep(.3,.72,h)); col*=.78+.4*fbm(P*14.); float cr=fbm(P*7.+3.); col*=1.-.35*smoothstep(.62,.7,cr); }
 else if(uType<1.5){ float lat=D.y; float w=fbm(vec3(lat*3.,P.x*.6,P.z*.6)*2.)*2.2; float b=.5+.5*sin(lat*16.+w*5.+fbm(P*5.)*2.);
   col=mix(uB,uA,b); col=mix(col,col*1.25,smoothstep(.6,.9,fbm(P*9.))); land=0.; }
 else if(uType<2.5){ land=smoothstep(.52,.56,h); vec3 oc=mix(uB,uA,clamp(h*1.5,0.,1.)); vec3 lc=mix(vec3(.30,.42,.22),vec3(.52,.44,.30),smoothstep(.55,.8,h))*(.7+.5*fbm(P*12.)); col=mix(oc,lc,land);
   col=mix(col,vec3(.92,.95,1.),smoothstep(.86,.97,abs(D.y))); cloud=smoothstep(.5,.78,fbm(P*3.8+vec3(7.))); col=mix(col,vec3(1.),cloud*.8); }
 else if(uType<3.5){ vec3 cr=mix(uB,vec3(.07,.05,.045),h); float k=smoothstep(.035,.0,abs(h-.5)); k+=smoothstep(.03,.0,abs(fbm(P*5.+2.)-.5))*.6; col=cr; emis=uA*k*2.4; }
 else if(uType<4.5){ col=mix(uA,uB,smoothstep(.35,.7,h)); col=mix(col,vec3(1.),smoothstep(.6,.8,fbm(P*6.))*.6); land=0.; }
 else { float u=.5-atan(D.z,D.x)/6.2832,v=asin(clamp(D.y,-1.,1.))/3.1416+.5; col=texture2D(uMap,vec2(u,v)).rgb*1.15; cloud=smoothstep(.55,.8,fbm(P*3.2+vec3(5.))); col=mix(col,vec3(1.),cloud*.55); }
 float lit=diff*1.15+.012;
 vec3 c=col*lit;
 if(uType>1.5&&(uType<2.5||uType>4.5)){ float nl=smoothstep(.68,.76,fbm(P*16.))*land*(1.-diff)*(1.-cloud); c+=vec3(1.,.78,.4)*nl*(uType>4.5?1.4:.9); }
 c+=emis;
 float f=pow(1.-max(dot(N,V),0.),3.); c+=uAtm*f*(.12+1.05*diff)*(uType==1.?.7:1.);
 gl_FragColor=vec4(1.-exp(-c*1.35),1.);
}`,Yx="varying vec3 vN;varying vec3 vW;void main(){vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",Kx=`varying vec3 vN;varying vec3 vW;uniform vec3 uAtm,uL;void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW);float f=pow(max(dot(-N,V)*.5+.5-.18,0.),2.6)*1.6;
 float d=smoothstep(-.35,.5,dot(N,normalize(uL)));gl_FragColor=vec4(uAtm*f*d*1.4,f*d);}`,Xc=new Sr(new Uint8Array([0,0,0,255]),1,1);Xc.needsUpdate=!0;var ya=null;function Zd(n){ya=new is().load(n),ya.wrapS=Ii,ya.colorSpace=sn}var qc=new Un(1,64,40);function jd(n){let e=el((n.desc||"")+" "+n.title),t=e.type;n.key==="dunya"&&(Object.assign(e,{a:[.27,.59,.9],b:[.04,.18,.43],atm:[.43,.7,1]}),t=2),n.key==="eirahoutmoss"&&ya&&(t=5,e.atm=[.62,.7,1]);let i={uA:{value:new U(...e.a)},uB:{value:new U(...e.b)},uAtm:{value:new U(...e.atm)},uL:{value:new U(1,.3,.2)},uType:{value:t},uSeed:{value:Wn(n.key)%997/97},uMap:{value:t===5?ya:Xc},uOc:{value:[new _t,new _t,new _t]},uRg:{value:new _t(1.5,2.7,0,1)},uRn:{value:new U(0,1,0)},uPC:{value:new U}},s=new yt(qc,new ft({uniforms:i,vertexShader:Xd,fragmentShader:Yd})),r=new yt(qc,new ft({uniforms:{uAtm:i.uAtm,uL:i.uL},vertexShader:Yx,fragmentShader:Kx,transparent:!0,depthWrite:!1,side:Yt,blending:kt}));r.scale.setScalar(1.09),s.add(r),s.userData.U=i;let o=Wn(n.key);if(t!==1&&o%3!==0&&n.key!=="eirahoutmoss"){s.userData.moons=[];for(let l=0;l<1+o%2;l++){let c=new fn;c.rotation.set(.25*l,o%6,.3+.2*l);let u=new yt(qc,new ft({uniforms:{uA:{value:new U(.66,.63,.6)},uB:{value:new U(.27,.26,.28)},uAtm:{value:new U(0,0,0)},uL:i.uL,uType:{value:0},uSeed:{value:l*3.1+o%50},uMap:{value:Xc},uOc:{value:[new _t,new _t,new _t]},uRg:{value:new _t(1.5,2.7,0,1)},uRn:{value:new U(0,1,0)},uPC:{value:new U}},vertexShader:Xd,fragmentShader:Yd}));u.scale.setScalar(.2+.07*l),u.position.x=2.3+l*1.1,c.rotation.y=o%7,c.add(u),s.add(c),s.userData.moons.push({pivot:c,sp:.055/(1+l*.7),mm:u,U:u.material.uniforms})}}let a=/gaz dev|gaz halka|gaz tabaka|gaz gezegeni/i.test(n.desc||"");if(n.key==="gyrax"||a&&n.key!=="annulon"&&o%3===0){i.uRg.value.set(1.5,2.7,1,1);let c=new yt(new mi(1.5,2.7,160,1),new ft({uniforms:{uA:i.uA,uB:i.uB,uL:i.uL,uPC:i.uPC,uRn:i.uRn,uPR:{value:1}},transparent:!0,depthWrite:!1,side:dn,vertexShader:"varying vec3 vP;varying vec3 vW;void main(){vP=position;vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"varying vec3 vP;varying vec3 vW;uniform vec3 uA,uB,uL,uPC,uRn;uniform float uPR;void main(){float t=(length(vP.xy)-1.5)/1.2;float b=.5+.5*sin(t*70.+sin(t*19.)*3.);float gap=1.-.92*smoothstep(.5,.53,t)*(1.-smoothstep(.58,.61,t));float a=.9*(.35+.65*b)*gap*smoothstep(0.,.05,t)*(1.-smoothstep(.93,1.,t));vec3 L=normalize(uL),V=normalize(cameraPosition-vW);float bb=dot(uPC-vW,L);float sh=1.;if(bb>0.){float d=length(uPC-vW-L*bb);sh=smoothstep(uPR*.97,uPR*1.03,d);}float side=dot(uRn,L)*dot(uRn,V)>0.?1.:.38;float lit=(.07+.93*sh)*side;gl_FragColor=vec4(mix(uB,uA,b)*1.15*lit,a);}"})),u=-(1+o%40/100),d=(o>>3)%60/100-.3;c.userData.tilt=new Zt().setFromEuler(new _r(u,0,d)),s.add(c),s.userData.ring=c}s.userData.type=t,s.userData.sizeK=(t===1?1.45:t===3||t===0?.85:1)*(.88+o%25/100);{let l=(o%1e3/1e3-.5)*2.2,c=((o>>5)%100/100-.5)*.8,u=new U(0,.3,.95).normalize();u.applyAxisAngle(new U(1,0,0),-c),u.applyAxisAngle(new U(0,1,0),l),i.uL.value.copy(u)}return s}var Kd=new Zt,va=new U,Zx=new U;function Jd(n){let e=n.userData,t=e.U.uniforms||e.U,i=n.getWorldScale(va).x;n.getWorldPosition(t.uPC.value);let s=e.moons||[];s.forEach((r,o)=>{r.mm.getWorldPosition(va);let a=r.mm.getWorldScale(Zx).x;t.uOc.value[o].set(va.x,va.y,va.z,a)});for(let r=s.length;r<3;r++)t.uOc.value[r].set(0,0,0,0);t.uRg.value.w=i,e.ring&&(e.ring.getWorldQuaternion(Kd),t.uRn.value.set(0,0,1).applyQuaternion(Kd),e.ring.material.uniforms.uPR.value=i),s.forEach((r,o)=>{let a=r.U;a.uL.value.copy(t.uL.value),a.uOc.value[0].set(t.uPC.value.x,t.uPC.value.y,t.uPC.value.z,i),s[1-o]?a.uOc.value[1].copy(t.uOc.value[1-o]):a.uOc.value[1].set(0,0,0,0),a.uOc.value[2].set(0,0,0,0)})}var Yc=["medusa","pillars","ring","ribbon","crab","cloud"],Oi=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t];function jx(n,e,t,i,s,r){let o=t.length,a=new Float32Array(o*3),l=new Float32Array(o*3);t.forEach((d,h)=>{a.set(d.p,h*3),l.set([d.c[0]*d.a*2,d.c[1]*d.a*2,d.c[2]*d.a*2],h*3)});let c=new Ut;c.setAttribute("position",new Ot(a,3)),c.setAttribute("color",new Ot(l,3));let u=new wr(c,new ha({map:e,size:i*1.6,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:s,depthWrite:!1,blending:kt}));return u.frustumCulled=!1,r&&(u.onBeforeRender=()=>r(u,performance.now()/1e3)),n.add(u),u}var Jx={cloud(n,e,t){let i=Oi(t,[1,.4,.7],.5),s=Oi(t,[.3,.7,1],.5),r=[],o=[],a=[0,1,2].map(()=>[ut(n)*.5,ut(n)*.15,ut(n)*.5]);for(let l=0;l<260;l++){let c=a[l%3];r.push({p:[c[0]+ut(n)*.45,c[1]+ut(n)*.16,c[2]+ut(n)*.45],c:l%2?i:s,a:.2+n()*.25})}for(let l=0;l<120;l++){let c=a[l%3];o.push({p:[c[0]+ut(n)*.5,c[1]+ut(n)*.18,c[2]+ut(n)*.5],c:[1,.95,.9],a:.5+n()*.5})}return[{pts:r,size:.55,op:.5},{pts:o,size:.07,op:.9}]},medusa(n,e,t){let i=[],s=[],r=[],o=[.4,.85,1],a=[1,.45,.8];for(let l=0;l<300;l++){let c=n()*6.283,u=Math.acos(n()),d=.9+ut(n)*.04,h=Math.pow(1-u/1.5708,2);i.push({p:[Math.sin(u)*Math.cos(c)*d,Math.cos(u)*d*.75,Math.sin(u)*Math.sin(c)*d],c:Oi(o,a,h),a:.35+.65*(1-Math.cos(u))})}for(let l=0;l<120;l++){let c=n()*6.283,u=n()*1.4,d=n()*.85;s.push({p:[Math.sin(u)*Math.cos(c)*d,Math.cos(u)*d*.7,Math.sin(u)*Math.sin(c)*d],c:Oi([.5,.4,1],o,n()),a:.18})}for(let l=0;l<16;l++){let c=l/16*6.283+ut(n)*.1,u=.78+n()*.15,d=n()*6.283,h=1.8+n()*1.6;for(let f=0;f<28;f++){let g=f/27;r.push({p:[Math.cos(c)*(u*(1-.4*g))+Math.sin(g*7+d)*.1*g,-g*h*1+.05,Math.sin(c)*(u*(1-.4*g))+Math.cos(g*6+d)*.1*g],c:Oi(a,o,g),a:(1-g)*.85})}}return[{pts:s,size:.7,op:.35},{pts:i,size:.07,op:.95,spin:(l,c)=>{l.scale.y=1+.05*Math.sin(c*.9)}},{pts:r,size:.05,op:.9,spin:(l,c)=>{l.rotation.y=Math.sin(c*.15)*.25}}]},pillars(n,e,t){let i=[],s=[],r=[.75,.4,.25],o=[.3,.8,.7],a=[1,.85,.6];return[[-.5,0,1.3],[0,.2,1.8],[.55,-.1,1.1]].forEach(([l,c,u],d)=>{for(let h=0;h<120;h++){let f=Math.pow(n(),.8),g=.13*(1-.55*f)+.03;i.push({p:[l+ut(n)*g,f*u,c+ut(n)*g],c:Oi(r,o,f*.7),a:.28+.3*(1-f)})}for(let h=0;h<26;h++)s.push({p:[l+ut(n)*.07,u+ut(n)*.05,c+ut(n)*.07],c:a,a:.8})}),[{pts:i,size:.34,op:.6},{pts:s,size:.12,op:.95,spin:(l,c)=>{l.material.opacity=.85+.1*Math.sin(c*1.7)}}]},ring(n,e,t){let i=[],s=[],r=[],o=[.45,.9,.95],a=[1,.45,.35];for(let l=0;l<340;l++){let c=n()*6.283,u=1+ut(n)*.07;i.push({p:[Math.cos(c)*u,ut(n)*.04,Math.sin(c)*u*.78],c:Oi(o,a,Math.min(1,Math.abs(u-1)*7)),a:.3+n()*.4})}for(let l=0;l<46;l++){let c=n()*6.283,u=1.02+ut(n)*.03;s.push({p:[Math.cos(c)*u,ut(n)*.03,Math.sin(c)*u*.78],c:[1,1,1],a:.9})}for(let l=0;l<4;l++)r.push({p:[0,0,0],c:[.85,.92,1],a:1});for(let l=0;l<120;l++){let c=n()*6.283,u=n()*.95;i.push({p:[Math.cos(c)*u,ut(n)*.03,Math.sin(c)*u*.78],c:o,a:.07})}return[{pts:i,size:.2,op:.75},{pts:s,size:.07,op:.95},{pts:r,size:.28,op:1}]},ribbon(n,e,t){let i=[],s=[],r=[1,.8,.45],o=[.4,.65,1];for(let l=0;l<2;l++)for(let c=0;c<220;c++){let u=c/219,d=u*6*Math.PI+l*Math.PI,h=.32+.12*Math.sin(u*9);(l?s:i).push({p:[(u-.5)*3.4,Math.cos(d)*h,Math.sin(d)*h],c:l?o:r,a:.35+.65*Math.sin(Math.PI*u)})}let a=[];for(let l=0;l<110;l++){let c=n();a.push({p:[(c-.5)*3.4+ut(n)*.1,ut(n)*.3,ut(n)*.3],c:Oi(r,o,c),a:.12})}return[{pts:a,size:.5,op:.4},{pts:i.concat(s),size:.07,op:.95,spin:(l,c)=>{l.rotation.x=c*.12}}]},crab(n,e,t){let i=[],s=[],r=[1,.55,.25],o=[.4,.6,1];for(let a=0;a<34;a++){let l=n()*6.283,c=(n()-.5)*1.2,u=.5+n()*.8,d=ut(n)*.5;for(let h=0;h<22;h++){let f=h/21,g=Math.cos(l+d*f)*Math.cos(c)*u*f*1.4,v=Math.sin(c)*u*f*.8,m=Math.sin(l+d*f)*Math.cos(c)*u*f*1.4;i.push({p:[g,v,m],c:Oi(o,r,f),a:.2+.6*(1-Math.abs(f-.5)*1.4)})}}for(let a=0;a<3;a++)s.push({p:[0,0,0],c:[.7,.85,1],a:1});return[{pts:i,size:.1,op:.85},{pts:s,size:.3,op:1,spin:(a,l)=>{a.material.opacity=.6+.4*Math.abs(Math.sin(l*3.3))}}]}};function $d(n,e,t){if(e.bg)return;let i=Wn(e.id),s=e.kind==="veil"||e.kind==="mist"?1:1+(i>>3)%3,r=e.tint||[.7,.8,1],o=[];for(let a=0;a<s;a++){let l=(i+a*2+(i>>5)%3*a)%Yc.length,c=0;for(;o.includes(l)&&c++<6;)l=(l+1)%Yc.length;o.push(l);let u=Rn((e.seed||1)*13+a*101+7),d=Yc[l],h=new bn,f=u()*6.283,g=e.R*(.28+.5*u());h.position.set(Math.cos(f)*g,(u()-.5)*e.R*.1,Math.sin(f)*g),h.rotation.set((u()-.5)*.7,u()*6.283,(u()-.5)*.7),h.scale.setScalar(e.R*(.1+.09*u())),Jx[d](u,e,r).forEach(v=>jx(h,t,v.pts,v.size,v.op,v.spin)),h.userData.neb=d,n.add(h)}}var Qd=new Zt,Kc=new U,rs=new U,fb=new U,pb=new U,ue=(function(){let n,e,t,i,s,r,o,a,l,c=null,u=!1,d=1,h=0,f=0,g=1,v=!1,m=0,p=[],M=[],b={},I=[],B=[],S=[],_={},L={},y=null,x=[],T={sector:15251531,itf:8376750,draft:10132142,home:5227496,eira:12099839,esik:10132152},V="rgba(232,184,75,0.95)",W=`attribute float aSize;attribute float aPhase;attribute vec3 aColor;varying vec3 vC;varying float vT;uniform float uTime;uniform float uPR;
  void main(){vC=aColor;vec4 mv=modelViewMatrix*vec4(position,1.0);vT=0.78+0.22*sin(uTime*0.9+aPhase);
  float s=aSize*uPR*(520.0/max(-mv.z,1.0));gl_PointSize=clamp(s,1.4*uPR,22.0*uPR);gl_Position=projectionMatrix*mv;}`,N=`attribute float aSize;attribute float aPhase;attribute vec3 aColor;varying vec3 vC;varying float vT;uniform float uTime;uniform float uPR;
  void main(){vC=aColor;vT=0.65+0.35*sin(uTime*0.7+aPhase);gl_PointSize=aSize*uPR;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,P="varying vec3 vC;varying float vT;void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=pow(1.0-d,1.7);gl_FragColor=vec4(vC*vT,a*0.85);}",H="varying vec2 vP;void main(){vP=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",O=`varying vec2 vP;uniform float uTime,uIn,uOut;void main(){float r=length(vP);float t=(r-uIn)/(uOut-uIn);float a=atan(vP.y,vP.x);
  float sw=0.5+0.5*sin(a*4.0-t*18.0+uTime*1.6)*(0.6+0.4*sin(a*9.0+t*30.0-uTime*2.3));float beam=0.55+0.45*cos(a-0.6);
  float fall=pow(max(1.0-t,0.0),1.6)*smoothstep(0.0,0.06,t);vec3 hot=mix(vec3(1.0,0.95,0.8),vec3(1.0,0.45,0.1),smoothstep(0.0,0.7,t));hot=mix(hot,vec3(0.5,0.1,0.05),smoothstep(0.6,1.0,t));
  gl_FragColor=vec4(hot*(0.35+0.9*sw)*beam*fall*1.6,fall);}`,G="varying vec2 vP;uniform float uIn,uOut;void main(){float t=(length(vP)-uIn)/(uOut-uIn);float c=exp(-t*9.0);gl_FragColor=vec4(vec3(1.0,0.78,0.5)*c*1.8,c);}";function q(){let D=document.createElement("canvas");D.width=D.height=128;let ae=D.getContext("2d"),w=ae.createRadialGradient(64,64,0,64,64,64);return w.addColorStop(0,"rgba(255,255,255,1)"),w.addColorStop(.25,"rgba(255,255,255,.4)"),w.addColorStop(1,"rgba(255,255,255,0)"),ae.fillStyle=w,ae.fillRect(0,0,128,128),new ns(D)}function se(D){let ae=document.createElement("canvas");ae.width=640,ae.height=96;let w=ae.getContext("2d");w.font="44px Georgia, serif",w.textAlign="center",w.fillStyle=V,w.shadowColor="#000",w.shadowBlur=8,w.fillText(D,320,60);let X=new Dn({map:new ns(ae),transparent:!0,depthWrite:!1,depthTest:!1}),ie=new Gn(X);return ie.renderOrder=10,ie}function re(D,ae){let w=new Ut;w.setAttribute("position",new Ot(D.pos,3)),w.setAttribute("aColor",new Ot(D.col,3)),w.setAttribute("aSize",new Ot(D.sz,1)),w.setAttribute("aPhase",new Ot(D.ph,1));let X=new wr(w,ae);return X.frustumCulled=!1,X}function fe(D,ae){n=new pi,e=new on(50,innerWidth/innerHeight,.5,8e4),e.position.set(2600,3400,9600);{let $=[{antialias:!0},{antialias:!1},{antialias:!1,powerPreference:"low-power"},{antialias:!1,powerPreference:"high-performance"}],ne=null;window.__qulCtxTry=[];for(let Pe of $)try{t=new fi(Pe),window.__qulCtxTry.push(JSON.stringify(Pe)+" \u2713");break}catch(Te){ne=Te,t=null,window.__qulCtxTry.push(JSON.stringify(Pe)+" \u2717")}if(!t)throw ne}t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setSize(innerWidth,innerHeight),t.setClearColor(263178,1),D.appendChild(t.domElement),t.domElement.addEventListener("webglcontextlost",$=>{$.preventDefault();try{localStorage.setItem("qsafe",String(Date.now()))}catch{}window.__qulCtxLost=(window.__qulCtxLost||0)+1;try{window.__crumb&&window.__crumb("WEBGL BA\u011ELAMI KAYBOLDU")}catch{}});try{let $=t.getContext(),ne=$.getExtension("WEBGL_debug_renderer_info");window.__qulGpu={webgl:t.capabilities.isWebGL2?"WebGL2":"WebGL1",gpu:ne?$.getParameter(ne.UNMASKED_RENDERER_WEBGL):$.getParameter($.RENDERER),vendor:ne?$.getParameter(ne.UNMASKED_VENDOR_WEBGL):"",maxPoint:Array.from($.getParameter($.ALIASED_POINT_SIZE_RANGE)).join("-"),halfFloat:t.extensions.has("EXT_color_buffer_half_float")||t.extensions.has("EXT_color_buffer_float"),floatLinear:t.extensions.has("OES_texture_float_linear"),dpr:devicePixelRatio,ua:navigator.userAgent.slice(0,120)}}catch{}i=new $o(t),i.addPass(new Qo(n,e)),i.addPass(new Ds({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv;uniform sampler2D tDiffuse;void main(){vec4 c=texture2D(tDiffuse,vUv);if(isnan(c.r)||isnan(c.g)||isnan(c.b)||isnan(c.a))c=vec4(0.,0.,0.,1.);gl_FragColor=vec4(clamp(c.rgb,0.,24.),1.);}"})),a=new Pr(new we(innerWidth,innerHeight),.55,.45,.78),i.addPass(a),l=new Ds({uniforms:{tDiffuse:{value:null},uT:{value:0},uBH:{value:new we(.5,.5)},uRs:{value:.1},uLens:{value:0},uWarp:{value:0},uFall:{value:0},uGray:{value:0},uHolo:{value:0},uAsp:{value:innerWidth/innerHeight}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv;uniform sampler2D tDiffuse;uniform float uT,uRs,uLens,uWarp,uAsp,uFall,uGray,uHolo;uniform vec2 uBH;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uT)*43758.5453);}void main(){vec2 uv=vUv;if(uLens>0.){vec2 A=vec2(uAsp,1.);vec2 d=(uv-uBH)*A;float r=max(length(d),1e-4);float f=uLens*(1.-smoothstep(1.2*uRs,5.*uRs,r));uv=uBH+(d/r)*(r-f*uRs*uRs/r)/A;}vec4 c;if(uWarp>0.){c=vec4(0.);for(int i=0;i<10;i++){float k=1.-uWarp*.13*float(i)/10.;c+=texture2D(tDiffuse,vec2(.5)+(uv-vec2(.5))*k);}c/=10.;}else c=texture2D(tDiffuse,uv);if(isnan(c.r)||isnan(c.g)||isnan(c.b))c=vec4(0.,0.,0.,1.);float l=dot(c.rgb,vec3(.299,.587,.114));c.rgb=mix(vec3(l),c.rgb,.9*(1.-uGray))*vec3(.95,.985,1.06);float v=distance(vUv,vec2(.5));c.rgb*=1.-smoothstep(.35,.95,v)*.7;c.rgb+=(h(vUv*1500.)-.5)*.022;if(uFall>0.){c.rgb=mix(c.rgb,c.rgb*vec3(1.3,.55,.3),uFall*.85);c.rgb*=1.-uFall*smoothstep(.15,.85,distance(vUv,vec2(.5)))*1.3;c.rgb*=1.-uFall*uFall*.97;}if(uHolo>0.){float lm=dot(c.rgb,vec3(.299,.587,.114));vec3 hc=vec3(.1,.55,.9)*lm*1.7+vec3(0.,.035,.075);float sl=.93+.07*sin(vUv.y*900.);float gr=max(step(.988,fract(vUv.x*uAsp*22.)),step(.988,fract(vUv.y*22.)));hc=hc*sl+vec3(0.,.25,.4)*gr*.4;c.rgb=mix(c.rgb,hc,uHolo);}gl_FragColor=c;}"}),i.addPass(l);let w=t.getPixelRatio();s=new ft({uniforms:{uTime:{value:0},uPR:{value:w}},vertexShader:W,fragmentShader:P,transparent:!0,depthWrite:!1,blending:kt}),r=new ft({uniforms:{uTime:{value:0},uPR:{value:w}},vertexShader:N,fragmentShader:P,transparent:!0,depthWrite:!1,blending:kt}),o=new Tr,ae.eiraTex&&Zd(ae.eiraTex);let X=q();Z(X),oe(ae.galaxies,X);let ie={};ae.planets.forEach($=>{(ie[$.gal]=ie[$.gal]||[]).push($)}),ae.galaxies.forEach($=>Ee($,ie[$.id]||[],X)),addEventListener("resize",()=>{e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),i.setSize(innerWidth,innerHeight),l.uniforms.uAsp.value=innerWidth/innerHeight})}function Z(D){let ae=Rn(99),w=3200,X=new Float32Array(w*3),ie=new Float32Array(w*3),$=new Float32Array(w),ne=new Float32Array(w),Pe=[[.78,.86,1],[1,.97,.9],[1,.84,.63],[1,.67,.47]];for(let _e=0;_e<w;_e++){let ce=ae()*6.283,F=Math.acos(2*ae()-1),le=26e3+ae()*6e3;X[_e*3]=le*Math.sin(F)*Math.cos(ce),X[_e*3+1]=le*Math.cos(F),X[_e*3+2]=le*Math.sin(F)*Math.sin(ce);let de=Pe[_e%4],ze=.35+ae()*.55;ie[_e*3]=de[0]*ze,ie[_e*3+1]=de[1]*ze,ie[_e*3+2]=de[2]*ze,$[_e]=1.2+ae()*1.8,ne[_e]=ae()*6.283}n.add(re({pos:X,col:ie,sz:$,ph:ne},r)),[[4026296,-9e3,3e3,-9e3],[12076943,1e4,-2e3,-8e3],[4176032,2e3,6e3,-12e3],[8015800,-11e3,-4e3,6e3],[12076943,8e3,-5e3,9e3],[4026296,0,-8e3,-11e3]].forEach(_e=>{let ce=new Dn({map:D,color:_e[0],transparent:!0,opacity:.16,depthWrite:!1,blending:kt}),F=new Gn(ce);F.position.set(_e[1],_e[2],_e[3]),F.scale.set(9e3,9e3,1),n.add(F)})}function oe(D,ae){let w=Rn(5),X=D.filter(xe=>!xe.bg),ie=[],$=[];D.forEach((xe,Ge)=>{D.map((ht,st)=>[st,Math.hypot(ht.pos[0]-xe.pos[0],ht.pos[1]-xe.pos[1],ht.pos[2]-xe.pos[2])]).filter(ht=>ht[0]!==Ge).sort((ht,st)=>ht[1]-st[1]).slice(0,2).forEach(([ht,st])=>{if(ht<Ge||st>3800)return;let bt=D[ht],zt=[0,1,2].map($t=>(xe.pos[$t]+bt.pos[$t])/2+(w()-.5)*st*.22);[[xe.pos,zt],[zt,bt.pos]].forEach($t=>{ie.push(...$t[0],...$t[1])})})});let ne=new Ut;ne.setAttribute("position",new Nt(ie,3)),n.add(new qo(ne,new zi({color:2771578,transparent:!0,opacity:.2,depthWrite:!1,blending:kt})));let Pe=3500,Te=new Float32Array(Pe*3),_e=new Float32Array(Pe*3),ce=new Float32Array(Pe),F=new Float32Array(Pe);for(let xe=0;xe<Pe;xe++){let Ge=X[w()*X.length|0],ot=w()*6.283,ht=Math.acos(2*w()-1),st=Ge.R*(1+w()*3.5);Te[xe*3]=Ge.pos[0]+st*Math.sin(ht)*Math.cos(ot),Te[xe*3+1]=Ge.pos[1]+st*Math.cos(ht)*.6,Te[xe*3+2]=Ge.pos[2]+st*Math.sin(ht)*Math.sin(ot);let bt=.12+w()*.2;_e[xe*3]=.5*bt,_e[xe*3+1]=.7*bt,_e[xe*3+2]=bt*1.3,ce[xe]=.35+w()*.5,F[xe]=w()*6.283}n.add(re({pos:Te,col:_e,sz:ce,ph:F},s));let le=[];for(let xe=0;xe<ie.length;xe+=6)le.push([new U(ie[xe],ie[xe+1],ie[xe+2]),new U(ie[xe+3],ie[xe+4],ie[xe+5])]);let de=48,ye={pos:new Float32Array(de*3),col:new Float32Array(de*3).fill(.55),sz:new Float32Array(de).fill(2.2),ph:new Float32Array(de)};for(let xe=0;xe<de*3;xe+=3)ye.col[xe]=.45,ye.col[xe+1]=.85,ye.col[xe+2]=1;b.points=re(ye,s),b.list=Array.from({length:de},()=>({s:le[w()*le.length|0],t:w(),v:.02+w()*.04})),b.segs=le,n.add(b.points);for(let xe=0;xe<3;xe++){let Ge=new Gn(new Dn({map:ae,color:13624575,transparent:!0,opacity:0,depthWrite:!1,blending:kt}));n.add(Ge),I.push({s:Ge,t:-1,next:3+xe*4})}I.real=X}function Me(D){let ae=b;if(ae.points){let w=ae.points.geometry.attributes.position;ae.list.forEach((X,ie)=>{X.t+=X.v*D,X.t>1&&(X.t=0,X.s=ae.segs[Math.random()*ae.segs.length|0]),rs.lerpVectors(X.s[0],X.s[1],X.t),w.setXYZ(ie,rs.x,rs.y,rs.z)}),w.needsUpdate=!0}I.forEach(w=>{if(w.next-=D,w.t<0&&w.next<=0){let X=I.real[Math.random()*I.real.length|0],ie=Math.random()*6.283,$=X.R*Math.random()*.8;w.s.position.set(X.pos[0]+Math.cos(ie)*$,X.pos[1]+(Math.random()-.5)*X.R*.1,X.pos[2]+Math.sin(ie)*$),w.t=0,w.R=X.R}if(w.t>=0){w.t+=D/4.5;let X=w.t,ie=X<.08?X/.08:Math.pow(1-(X-.08)/.92,2.2);w.s.material.opacity=Math.max(0,ie)*.95;let $=w.R*(.15+.5*Math.sqrt(X));w.s.scale.set($,$,1),X>=1&&(w.t=-1,w.s.material.opacity=0,w.next=7+Math.random()*9)}})}function Ee(D,ae,w){Vd(D);let X=[],ie=new bn;ie.position.set(D.pos[0],D.pos[1],D.pos[2]),ie.rotation.set(D.tilt[0],0,D.tilt[1]);let $=new bn;ie.add($);let ne=D.bg?1300:D.id==="home"?7e3:D.kind==="veil"?700:D.kind==="mist"?300:3600,Pe=Wd(D,ne);if(D.kind==="veil"||D.kind==="mist")for(let xe=0;xe<Pe.col.length;xe++)Pe.col[xe]*=.4;$.add(re(Pe,s));let Te=new Gn(new Dn({map:w,color:new et(D.tint[0],D.tint[1],D.tint[2]),transparent:!0,depthWrite:!1,blending:kt,opacity:.4}));Te.position.copy(ie.position);let _e=D.R*(D.bg?2.4:3.2);Te.scale.set(_e,_e,1),n.add(Te),(D.kind==="veil"||D.kind==="mist")&&[[0,0,0,1],[.35,.1,-.2,.7],[-.3,-.05,.3,.8]].forEach(xe=>{let Ge=new Gn(new Dn({map:w,color:new et(D.tint[0]*.8,D.tint[1]*.7,D.tint[2]),transparent:!0,depthWrite:!1,blending:kt,opacity:D.kind==="veil"?.22:.14}));Ge.position.set(D.pos[0]+xe[0]*D.R,D.pos[1]+xe[1]*D.R,D.pos[2]+xe[2]*D.R);let ot=D.R*5.5*xe[3];Ge.scale.set(ot,ot,1),n.add(Ge),X.push(Ge)}),$d($,D,w);let ce=new yt(new Un(1,12,8),new An({visible:!1}));ce.scale.setScalar(D.R*1.05),ce.userData.gid=D.id,ie.add(ce);let F=null;D.bg||(F=se(D.name),F.position.set(D.pos[0],D.pos[1]+D.R*.62,D.pos[2]),F.scale.set(D.R*2.6,D.R*.39,1),n.add(F)),n.add(ie);let le={g:D,outer:ie,inner:$,glow:Te,label:F,pick:ce,planets:[],fogs:X,fogA:X.map(xe=>xe.material.opacity),eg:1,el:1,egT:1,elT:1};if(S.push(le),_[D.id]=le,["itf","unas","eira","esik"].includes(D.id)||Ue(le),D.sector!=null||D.id==="home"){let xe=()=>{let Ge=new yt(new mi(1,1.09,128),new An({color:9426687,transparent:!0,opacity:0,depthWrite:!1,side:dn,blending:kt}));return Ge.rotation.x=-Math.PI/2,Ge.scale.setScalar(D.R*1.1),Ge.visible=!1,ie.add(Ge),Ge};le.care={ring:xe(),rip:xe(),ph:(D.id.length*.37+(D.sector||0)*.61)%1,order:D.sector||0,a:0},p.push(le)}let de=new Un(1,14,10),ze=new An({visible:!1}),ye=Math.max(2.4,D.R*.016);ae.forEach((xe,Ge)=>{let ot=jd(xe);M.push(ot);let ht=qd(D,xe.key,Ge,ae.length);ot.position.set(ht[0],ht[1],ht[2]),ot.scale.setScalar(ye*1.25*(ot.userData.sizeK||1)),ot.visible=!1;let st=new Gn(new Dn({map:w,color:T[xe.kind]||16777215,transparent:!0,depthWrite:!1,blending:kt,opacity:.22}));st.scale.set(5,5,1),ot.add(st);let bt=new yt(de,ze);bt.scale.setScalar(4.6),ot.add(bt),Object.assign(ot.userData,{key:xe.key,gid:D.id,hit:bt}),$.add(ot),le.planets.push(ot),L[xe.key]={mesh:ot,gid:D.id}})}function Ue(D){let ae=D.g,w=ae.R*.018,X=new bn,ie=new yt(new Un(w,24,16),new An({color:0})),$=(_e,ce,F)=>new ft({uniforms:{uTime:{value:0},uIn:{value:_e},uOut:{value:ce}},vertexShader:H,fragmentShader:F,transparent:!0,depthWrite:!1,side:dn,blending:kt}),ne=new yt(new mi(w*1.7,w*7,160,1),$(w*1.7,w*7,O));ne.rotation.x=-Math.PI/2;let Pe=new yt(new mi(w*1.02,w*2.6,96,1),$(w*1.02,w*2.6,G));X.add(ie,ne,Pe),X.visible=!1,D.outer.add(X);let Te=new yt(new Un(1,10,8),new An({visible:!1}));Te.scale.setScalar(w*9),Te.userData.bh=ae.id,D.outer.add(Te),B.push(Te),D.bh={grp:X,disk:ne,halo:Pe,rh:w}}function Xe(D){y=D,x=[],S.forEach(ae=>ae.planets.forEach(w=>{let X=ae.g.id===D;w.visible=X,X&&x.push(w.userData.hit)}))}let He=new U,Ve=new U,nt=Math.min(devicePixelRatio,2),J=[{pr:nt,b:1},{pr:Math.min(nt,1.25),b:1},{pr:1,b:1},{pr:.75,b:0}],At=(()=>{try{let D=location.search;if(/[?&]guvenli=0/.test(D))return localStorage.removeItem("qsafe"),!1;if(/[?&]guvenli=1/.test(D))return!0;let ae=+localStorage.getItem("qsafe")||0;return ae>0&&Date.now()-ae<7*864e5}catch{return!1}})();window.__qulSafe=At;let Ie=0,Ke=0,Ne=0,gt=90,Ze=D=>{Ie=D,window.__qulQL=D;let ae=J[D];t.setPixelRatio(ae.pr),i.setPixelRatio(ae.pr),t.setSize(innerWidth,innerHeight),i.setSize(innerWidth,innerHeight),s&&(s.uniforms.uPR.value=ae.pr),r&&(r.uniforms.uPR.value=ae.pr),a.enabled=!!ae.b};window.__qulSetL=Ze;function R(D,ae){if(u)return;ae*=d,h+=ae;{let ne=l.uniforms.uHolo;ne.value+=(f-ne.value)*Math.min(1,.05+ae*2.2)}s.uniforms.uTime.value=h,l.uniforms.uT.value=D/1e3%7,r.uniforms.uTime.value=h;let w=e.position;S.forEach(ne=>{ne.inner.rotation.y+=ne.g.spin*ae*g;let Pe=w.distanceTo(ne.outer.position),Te=ne.g.R;{let _e=Math.min(1,ae*2.5+.02);ne.eg+=(ne.egT*(ne.g.id===Re?1.6:1)-ne.eg)*_e,ne.el+=(ne.elT-ne.el)*_e}if(ne.glow.material.opacity=.42*(ne.g.id===c?1.5:1)*ss((Pe-Te*.6)/(Te*1.6))*ne.eg,ne.fogs.forEach((_e,ce)=>{_e.material.opacity=ne.fogA[ce]*ss((Pe-Te*.3)/(Te*2.5))}),ne.label&&(ne.label.material.opacity=.9*ss((Pe-Te*3)/(Te*3))*(y&&y!==ne.g.id?.12:1)*ne.el),ne.bh){let _e=Pe<Te*14;ne.bh.grp.visible=_e,_e&&(ne.bh.disk.material.uniforms.uTime.value=D/1e3,ne.outer.getWorldQuaternion(Qd),ne.bh.halo.quaternion.copy(Qd.invert().multiply(e.quaternion)))}}),Me(ae);{let ne=D/1e3-m;p.forEach(Pe=>{let Te=Pe.care,_e=w.distanceTo(Pe.outer.position),ce=Pe.g.R,F=ss((_e-ce*1.8)/(ce*3)),le=v?ss((ne-Te.order*.28)/1.4):0;Te.a+=(le-Te.a)*Math.min(1,ae*(v?4:3));let de=Te.a>.01;if(Te.ring.visible=Te.rip.visible=de,de){let ze=(ne*.32+Te.ph)%1;Te.ring.material.opacity=Math.min(1,Te.a*F*(.95+.3*Math.sin(ne*1.6+Te.ph*6))),Te.rip.scale.setScalar(ce*(1.1+.75*ze)),Te.rip.material.opacity=Te.a*F*(1-ze)*.9}})}let X=null,ie=1e9;S.forEach(ne=>{if(!ne.bh)return;let Pe=w.distanceTo(ne.outer.position)/ne.bh.rh;Pe<ie&&(ie=Pe,X=ne)});let $=l.uniforms;if($.uLens.value=0,X&&ie<60&&(rs.copy(X.outer.position).project(e),rs.z<1)){let ne=X.bh.rh/w.distanceTo(X.outer.position)/Math.tan(e.fov*Math.PI/360)/2;$.uBH.value.set(rs.x*.5+.5,rs.y*.5+.5),$.uRs.value=Math.min(.3,ne*1.7),$.uLens.value=ss((60-ie)/40)*(1+$.uFall.value*1.5)}if(X&&$.uLens.value>0){let ne=w.distanceTo(X.outer.position),Pe=Math.tan(e.fov*Math.PI/360),Te=$.uAsp.value;M.forEach(_e=>{if(!_e.visible)return;_e.getWorldPosition(Kc);let ce=w.distanceTo(Kc);if(ce>=ne||(He.copy(Kc).project(e),He.z>=1))return;_e.geometry.boundingSphere||_e.geometry.computeBoundingSphere();let F=_e.geometry.boundingSphere.radius*_e.getWorldScale(Ve).x*1.12,le=F/ce/Pe/2,de=(He.x*.5+.5-$.uBH.value.x)*Te,ze=He.y*.5+.5-$.uBH.value.y,ye=ss((Math.hypot(de,ze)-le)/Math.max(.01,5*$.uRs.value));$.uLens.value*=ye})}if(M.forEach(ne=>{ne.visible&&(ne.rotation.y+=ae*.04,ne.userData.moons&&ne.userData.moons.forEach(Pe=>{Pe.pivot.rotation.y+=ae*Pe.sp}),ne.userData.ring&&ne.userData.ring.quaternion.copy(ne.quaternion).invert().multiply(ne.userData.ring.userData.tilt),Jd(ne))}),i.render(),E||(E=!0,window.__qulQL=0,(At||/swiftshader|software|llvmpipe|basic render/i.test((window.__qulGpu||{}).gpu||""))&&Ze(3)),Ke+=ae,Ne++,gt>0&&gt--,Ne>=40){let ne=Ke/Ne;Ke=0,Ne=0,!gt&&Ie<3&&ne>.034&&(Ze(ne>.07?Math.min(3,Ie+2):Ie+1),gt=70)}}let E=!1;function K(D,ae){return o.setFromCamera(new we(D.x,D.y),e),o.intersectObjects(ae,!1)}function ve(D){let ae=K(D,x);return ae.length?ae[0].object.parent.userData.key:null}function he(D){let ae=K(D,S.map(w=>w.pick));return ae.length?ae[0].object.userData.gid:null}function ge(D){let ae=K(D,B);return ae.length?ae[0].object.userData.bh:null}function De(D){return _[D].outer.position.clone()}function Se(D){return L[D].mesh.getWorldPosition(new U)}let Re=null;function qe(D,ae){S.forEach(w=>{w.egT=D(w.g),w.elT=ae(w.g)})}function Ye(D){S.forEach(ae=>{ae.c0||(ae.c0=ae.glow.material.color.clone());let w=D?D(ae.g):null;ae.glow.material.color.copy(w?new et(w[0],w[1],w[2]):ae.c0)})}return{setTint:Ye,setEra:qe,setMine:D=>{Re=D},init:fe,frame:R,setFocus:Xe,pickPlanet:ve,pickGalaxy:he,pickBH:ge,bhWorld:De,planetWorld:Se,pause:D=>{u=D},setGray:D=>{l.uniforms.uGray.value=D},setTimeK:D=>{d=D},setHolo:D=>{f=D},snapshot:()=>(i.render(),t.domElement.toDataURL("image/png")),setCare:D=>{v=D,m=performance.now()/1e3},careCount:()=>v?p.filter(D=>D.care.a>.95).length:0,fx:()=>({lens:l.uniforms.uLens.value,warp:l.uniforms.uWarp.value,fall:l.uniforms.uFall.value}),setFall:D=>{l.uniforms.uFall.value=D},setSpin:D=>{g=D},makeLight:()=>{let D=new Gn(new Dn({map:q(),color:15267071,transparent:!0,depthWrite:!1,blending:kt}));return n.add(D),D},removeObj:D=>n.remove(D),addObj:D=>n.add(D),setBloom:D=>{a.strength=D},setWarp:D=>{l.uniforms.uWarp.value=D},setFov:D=>{e.fov=D,e.updateProjectionMatrix()},setHover:D=>{c=D},galaxies:()=>S.map(D=>D.g),galaxy:D=>_[D],planetGalaxy:D=>L[D]&&L[D].gid,planetsOf:D=>_[D].planets.map(ae=>ae.userData.key),getCamera:()=>e,getRenderer:()=>t}})();var ef={type:"change"},Zc={type:"start"},tf={type:"end"},tl=new es,nf=new $n,$x=Math.cos(70*ma.DEG2RAD),Lr=class extends di{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",ge),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ge),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ef),i.update(),r=s.NONE},this.update=(function(){let w=new U,X=new Zt().setFromUnitVectors(e.up,new U(0,1,0)),ie=X.clone().invert(),$=new U,ne=new Zt,Pe=new U,Te=2*Math.PI;return function(ce=null){let F=i.object.position;w.copy(F).sub(i.target),w.applyQuaternion(X),a.setFromVector3(w),i.autoRotate&&r===s.NONE&&T(y(ce)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let le=i.minAzimuthAngle,de=i.maxAzimuthAngle;isFinite(le)&&isFinite(de)&&(le<-Math.PI?le+=Te:le>Math.PI&&(le-=Te),de<-Math.PI?de+=Te:de>Math.PI&&(de-=Te),le<=de?a.theta=Math.max(le,Math.min(de,a.theta)):a.theta=a.theta>(le+de)/2?Math.max(le,a.theta):Math.min(de,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&S||i.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*c),w.setFromSpherical(a),w.applyQuaternion(ie),F.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ze=!1;if(i.zoomToCursor&&S){let ye=null;if(i.object.isPerspectiveCamera){let xe=w.length();ye=q(xe*c);let Ge=xe-ye;i.object.position.addScaledVector(I,Ge),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let xe=new U(B.x,B.y,0);xe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ze=!0;let Ge=new U(B.x,B.y,0);Ge.unproject(i.object),i.object.position.sub(Ge).add(xe),i.object.updateMatrixWorld(),ye=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ye).add(i.object.position):(tl.origin.copy(i.object.position),tl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(tl.direction))<$x?e.lookAt(i.target):(nf.setFromNormalAndCoplanarPoint(i.object.up,i.target),tl.intersectPlane(nf,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ze=!0);return c=1,S=!1,ze||$.distanceToSquared(i.object.position)>o||8*(1-ne.dot(i.object.quaternion))>o||Pe.distanceToSquared(i.target)>0?(i.dispatchEvent(ef),$.copy(i.object.position),ne.copy(i.object.quaternion),Pe.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Re),i.domElement.removeEventListener("pointerdown",Ze),i.domElement.removeEventListener("pointercancel",E),i.domElement.removeEventListener("wheel",he),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",E),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ge),i._domElementKeyEvents=null)};let i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new pa,l=new pa,c=1,u=new U,d=new we,h=new we,f=new we,g=new we,v=new we,m=new we,p=new we,M=new we,b=new we,I=new U,B=new we,S=!1,_=[],L={};function y(w){return w!==null?2*Math.PI/60*i.autoRotateSpeed*w:2*Math.PI/60/60*i.autoRotateSpeed}function x(w){let X=Math.abs(w)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*X)}function T(w){l.theta-=w}function V(w){l.phi-=w}let W=(function(){let w=new U;return function(ie,$){w.setFromMatrixColumn($,0),w.multiplyScalar(-ie),u.add(w)}})(),N=(function(){let w=new U;return function(ie,$){i.screenSpacePanning===!0?w.setFromMatrixColumn($,1):(w.setFromMatrixColumn($,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(ie),u.add(w)}})(),P=(function(){let w=new U;return function(ie,$){let ne=i.domElement;if(i.object.isPerspectiveCamera){let Pe=i.object.position;w.copy(Pe).sub(i.target);let Te=w.length();Te*=Math.tan(i.object.fov/2*Math.PI/180),W(2*ie*Te/ne.clientHeight,i.object.matrix),N(2*$*Te/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(W(ie*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),N($*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function H(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(w,X){if(!i.zoomToCursor)return;S=!0;let ie=i.domElement.getBoundingClientRect(),$=w-ie.left,ne=X-ie.top,Pe=ie.width,Te=ie.height;B.x=$/Pe*2-1,B.y=-(ne/Te)*2+1,I.set(B.x,B.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(w){return Math.max(i.minDistance,Math.min(i.maxDistance,w))}function se(w){d.set(w.clientX,w.clientY)}function re(w){G(w.clientX,w.clientX),p.set(w.clientX,w.clientY)}function fe(w){g.set(w.clientX,w.clientY)}function Z(w){h.set(w.clientX,w.clientY),f.subVectors(h,d).multiplyScalar(i.rotateSpeed);let X=i.domElement;T(2*Math.PI*f.x/X.clientHeight),V(2*Math.PI*f.y/X.clientHeight),d.copy(h),i.update()}function oe(w){M.set(w.clientX,w.clientY),b.subVectors(M,p),b.y>0?H(x(b.y)):b.y<0&&O(x(b.y)),p.copy(M),i.update()}function Me(w){v.set(w.clientX,w.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),P(m.x,m.y),g.copy(v),i.update()}function Ee(w){G(w.clientX,w.clientY),w.deltaY<0?O(x(w.deltaY)):w.deltaY>0&&H(x(w.deltaY)),i.update()}function Ue(w){let X=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(0,i.keyPanSpeed),X=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(0,-i.keyPanSpeed),X=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(i.keyPanSpeed,0),X=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(-i.keyPanSpeed,0),X=!0;break}X&&(w.preventDefault(),i.update())}function Xe(w){if(_.length===1)d.set(w.pageX,w.pageY);else{let X=ae(w),ie=.5*(w.pageX+X.x),$=.5*(w.pageY+X.y);d.set(ie,$)}}function He(w){if(_.length===1)g.set(w.pageX,w.pageY);else{let X=ae(w),ie=.5*(w.pageX+X.x),$=.5*(w.pageY+X.y);g.set(ie,$)}}function Ve(w){let X=ae(w),ie=w.pageX-X.x,$=w.pageY-X.y,ne=Math.sqrt(ie*ie+$*$);p.set(0,ne)}function nt(w){i.enableZoom&&Ve(w),i.enablePan&&He(w)}function J(w){i.enableZoom&&Ve(w),i.enableRotate&&Xe(w)}function At(w){if(_.length==1)h.set(w.pageX,w.pageY);else{let ie=ae(w),$=.5*(w.pageX+ie.x),ne=.5*(w.pageY+ie.y);h.set($,ne)}f.subVectors(h,d).multiplyScalar(i.rotateSpeed);let X=i.domElement;T(2*Math.PI*f.x/X.clientHeight),V(2*Math.PI*f.y/X.clientHeight),d.copy(h)}function Ie(w){if(_.length===1)v.set(w.pageX,w.pageY);else{let X=ae(w),ie=.5*(w.pageX+X.x),$=.5*(w.pageY+X.y);v.set(ie,$)}m.subVectors(v,g).multiplyScalar(i.panSpeed),P(m.x,m.y),g.copy(v)}function Ke(w){let X=ae(w),ie=w.pageX-X.x,$=w.pageY-X.y,ne=Math.sqrt(ie*ie+$*$);M.set(0,ne),b.set(0,Math.pow(M.y/p.y,i.zoomSpeed)),H(b.y),p.copy(M);let Pe=(w.pageX+X.x)*.5,Te=(w.pageY+X.y)*.5;G(Pe,Te)}function Ne(w){i.enableZoom&&Ke(w),i.enablePan&&Ie(w)}function gt(w){i.enableZoom&&Ke(w),i.enableRotate&&At(w)}function Ze(w){i.enabled!==!1&&(_.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",E)),qe(w),w.pointerType==="touch"?De(w):K(w))}function R(w){i.enabled!==!1&&(w.pointerType==="touch"?Se(w):ve(w))}function E(w){Ye(w),_.length===0&&(i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",E)),i.dispatchEvent(tf),r=s.NONE}function K(w){let X;switch(w.button){case 0:X=i.mouseButtons.LEFT;break;case 1:X=i.mouseButtons.MIDDLE;break;case 2:X=i.mouseButtons.RIGHT;break;default:X=-1}switch(X){case ks.DOLLY:if(i.enableZoom===!1)return;re(w),r=s.DOLLY;break;case ks.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;fe(w),r=s.PAN}else{if(i.enableRotate===!1)return;se(w),r=s.ROTATE}break;case ks.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;se(w),r=s.ROTATE}else{if(i.enablePan===!1)return;fe(w),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Zc)}function ve(w){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;Z(w);break;case s.DOLLY:if(i.enableZoom===!1)return;oe(w);break;case s.PAN:if(i.enablePan===!1)return;Me(w);break}}function he(w){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(w.preventDefault(),i.dispatchEvent(Zc),Ee(w),i.dispatchEvent(tf))}function ge(w){i.enabled===!1||i.enablePan===!1||Ue(w)}function De(w){switch(D(w),_.length){case 1:switch(i.touches.ONE){case Is.ROTATE:if(i.enableRotate===!1)return;Xe(w),r=s.TOUCH_ROTATE;break;case Is.PAN:if(i.enablePan===!1)return;He(w),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Is.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;nt(w),r=s.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;J(w),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Zc)}function Se(w){switch(D(w),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;At(w),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;Ie(w),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ne(w),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;gt(w),i.update();break;default:r=s.NONE}}function Re(w){i.enabled!==!1&&w.preventDefault()}function qe(w){_.push(w.pointerId)}function Ye(w){delete L[w.pointerId];for(let X=0;X<_.length;X++)if(_[X]==w.pointerId){_.splice(X,1);return}}function D(w){let X=L[w.pointerId];X===void 0&&(X=new we,L[w.pointerId]=X),X.set(w.pageX,w.pageY)}function ae(w){let X=w.pointerId===_[0]?_[1]:_[0];return L[X]}i.domElement.addEventListener("contextmenu",Re),i.domElement.addEventListener("pointerdown",Ze),i.domElement.addEventListener("pointercancel",E),i.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}};var sf={"solar.btn":"\u2600 G\xFCne\u015F Sistemi","solar.fail":"G\xFCne\u015F Sistemi bu cihazda a\xE7\u0131lamad\u0131.","drift.home":"Evin'e uzakl\u0131k","drift.trav":"Katedilen","drift.seen":"G\xF6r\xFClen gezegen","drift.unit":"\u0131\u015F\u0131k y\u0131l\u0131","ui.drift":"\u26F6 Galaksi Gezintisi","ui.driftStop":"\u25A0 Gezintiyi durdur","drift.t":"Galaksiler","ui.pageTitle":"Galaksi Konfederasyonu \u2014 Qul Efsaneleri","ui.title":"Galaksi Konfederasyonu","ui.sub":"100+ galaksi \xB7 her galaksi bir sekt\xF6r \xB7 s\xFCr\xFCkle, tekerlekle yakla\u015F, galaksiye veya kara deli\u011Fe t\u0131kla","leg.home":"D\xFCnya","leg.sector":"Sekt\xF6r gezegeni","leg.itf":"\u0130TF kolonisi","leg.draft":"Sekt\xF6r\xFC atanmam\u0131\u015F","leg.eira":"E\u015Flenik Evren","ui.search":"Gezegen veya galaksi ara\u2026","ui.tour":"\u25B6 Sinematik Tur","ui.tourStop":"\u25A0 Turu durdur","ui.homeBtn":"\u2302 Ana Sayfa","ui.back":"\u2922 T\xFCm Evren","ui.loading":"Evren y\xFCkleniyor\u2026","ui.hush":"\u25CC Sessizlik","ui.hushOn":"\u25C9 Sessizlik a\xE7\u0131k","ui.lang":"Dil","intro.1.h":"Sessizlik","intro.1.s":"Burada ses yoktur. Yaln\u0131zca \xE7ok eski \u0131\u015F\u0131k.","intro.2.h":"Her \u0131\u015F\u0131k noktas\u0131 bir galaksi","intro.2.s":"Y\xFCz milyarlarca g\xFCne\u015Ften olu\u015Fmu\u015F birer ada \xB7 aralar\u0131nda milyonlarca y\u0131ll\u0131k bo\u015Fluk","intro.3.h":"Galaksi Konfederasyonu","intro.3.s":"100+ galaksi \xB7 her galaksi bir sekt\xF6r \xB7 bug\xFCnden yakla\u015F\u0131k 15.000 y\u0131l sonras\u0131n\u0131n haritas\u0131","tour.t1":"Evren","gal.eira":"Hen\xFCz bir gizem \xB7 bilinen tek gezegen: Eirahoutmoss","gal.esik":"\u0130ki evren aras\u0131ndaki e\u015Fik","gal.unreg":"Hen\xFCz kay\u0131tl\u0131 de\u011Fil","gal.count":"{n} gezegen kay\u0131tl\u0131","gal.light":"I\u015F\u0131\u011F\u0131 Samanyolu'na {y} y\u0131lda ula\u015F\u0131r","tip.bh":"Kara delik \xB7 {name}","tip.gal":"{name} \xB7 {n} gezegen","panel.concept":"Konsept g\xF6rsel","panel.conceptNC":"Konsept g\xF6rsel \xB7 kanon \xE7izimi de\u011Fil","panel.guide":"Konfederasyon Rehberi g\xF6rseli","panel.enlarge":"{note} \xB7 b\xFCy\xFCtmek i\xE7in t\u0131kla","row.colony":"Koloni kodu","row.code":"Kay\u0131t kodu","row.nocode":"Sekt\xF6r kodu hen\xFCz atanmam\u0131\u015F","row.region":"B\xF6lge","row.galaxy":"Galaksi","row.status":"Durum","row.settle":"Yerle\u015Fim durumu","row.dipl":"Diplomatik durum","row.axiom":"Aksiyom","row.est":"{v} (tahmini)","btn.kisura":"\u25B6 Kisura'ya gir \xB7 sinematik","chips.none0":"Hen\xFCz kay\u0131tl\u0131 gezegen yok","chips.none1":"Bu galaksinin gezegenleri hen\xFCz yaz\u0131lmad\u0131","search.bh":"Kara delik","search.gal":"Galaksi","dist.label":"Samanyolu'na uzakl\u0131k","dist.unit":"\u0131\u015F\u0131k y\u0131l\u0131","dist.million":"milyon","cin.c1":"E\u015Flenik Evren \xB7 Eirahoutmoss","cin.h1":"Kisura","cin.p1":"Kronolitler \u015Eehri","cin.c2":"Kisura","cin.h2":"\u015Eehir kronolitlere aittir","cin.p2":"\u0130nsanlar misafir.","cin.h3":"Kronolitler \u015Eehri","cin.p3":"Ta\u015F de\u011Fil de donmu\u015F \u0131\u015F\u0131k.","cin.close":"\u2715 Kapat","btn.land":"\u25BC Y\xFCzeye in","light.btn":"\u2726 I\u015F\u0131\u011F\u0131 izle","light.start":"Bu \u0131\u015F\u0131k {y} y\u0131l \xF6nce yola \xE7\u0131kt\u0131","light.endH":"\u015Eimdi g\xF6rd\xFC\u011F\xFCn\xFCz ge\xE7mi\u015Ftir","light.endS":"I\u015F\u0131k y\u0131ldan y\u0131la sessizce yol al\u0131r; var\u0131\u015Ft\u0131\u011F\u0131nda kayna\u011F\u0131 art\u0131k ba\u015Fkad\u0131r.","row.assign":"Sekt\xF6r atamas\u0131","val.draft":"Taslak \xB7 yazar onay\u0131 bekliyor","fall.btn":"\u25C9 Olay ufkuna d\xFC\u015F","fall.1h":"Olay ufku","fall.1s":"I\u015F\u0131\u011F\u0131n bile geri d\xF6nemedi\u011Fi s\u0131n\u0131r","fall.2h":"Zaman yava\u015Fl\u0131yor","fall.2s":"D\u0131\u015Far\u0131daki galaksi senin i\xE7in h\u0131zlan\u0131yor: senin bir saniyen, onun binlerce y\u0131l\u0131.","fall.3h":"I\u015F\u0131k k\u0131zar\u0131yor","fall.3s":"Her foton geride kal\u0131yor; renkler uzun dalgaya \xE7ekiliyor.","fall.4h":"Buradan sonras\u0131","fall.4s":"Bu e\u015Fi\u011Fin \xF6tesini hi\xE7bir kay\u0131t anlatm\u0131yor.","fall.5h":"Sessizlik","fall.5s":"I\u015F\u0131k geri d\xF6nemedi. Sen d\xF6nebilirsin.","scale.btn":"\u221E \xD6l\xE7ek Yolculu\u011Fu","scale.2h":"Bir gezegen","scale.2s":"Eirahoutmoss: E\u015Flenik Evren'in bilinen tek d\xFCnyas\u0131.","scale.3h":"Bir evren","scale.3s":"Trilyonlarca galaksiden olu\u015Fuyor; yaln\u0131zca tek bir gezegeni biliniyor.","scale.4h":"G\xF6k adalar","scale.4s":"Her \u0131\u015F\u0131k noktas\u0131, y\xFCz milyarlarca g\xFCne\u015Ften olu\u015Fan bir galaksi.","scale.5h":"Galaksi Konfederasyonu","scale.5s":"Hepsi, ayn\u0131 sessizli\u011Fin i\xE7inde.","care.btn":"\u25CE Temsil katman\u0131","care.btnOn":"\u25CE Temsil katman\u0131: a\xE7\u0131k","care.1h":"Sorumluluk","care.1s":"Trilyonlarca galaksi var. Konfederasyon, her birinin sorumlulu\u011Funu \xFCstlenmek i\xE7in ko\u015Fu\u015Fan \xFCst bilin\xE7li t\xFCrlerin a\u011F\u0131d\u0131r.","care.count":"Temsilcisi olan galaksi: {n}","care.note":"Her halka, bir galaksinin sorumlulu\u011Funu \xFCstlenen \xFCst bilin\xE7li bir t\xFCr\xFC g\xF6sterir.","th.btn":"\u27C1 E\u015Fik Ge\xE7i\u015Fi","th.1h":"Araf","th.1s":"Evrenin bitti\u011Fi gri b\xF6lge.","th.2h":"Cherqa","th.2s":"Ge\xE7i\u015F ve ar\u0131nma boyutu. Zaman burada akmaz.","th.3h":"E\u015Flenik Evren","th.3s":"Bilinen tek gezegeni Eirahoutmoss; gerisi hen\xFCz bir gizem.","cmd.btn":"\u25A6 Komuta Masas\u0131","cmd.on":"\u25A6 Komuta Masas\u0131: a\xE7\u0131k","cmd.1h":"Komuta Masas\u0131","cmd.1s":"Konfederasyon, tepeden: her halka bir sekt\xF6r, her sekt\xF6r bir sorumluluk.","snap.btn":"\u25C9 Kare yakala","snap.mark":"Qul Efsaneleri","snap.done":"Kare indirildi (sinema oran\u0131).","nar.btn":"\u266B Anlat\u0131c\u0131: kapal\u0131","nar.on":"\u266B Anlat\u0131c\u0131: a\xE7\u0131k","pair.btn":"\u21CC E\u015Fleme","pair.1h":"Yeremya","pair.1s":"D\xFCnya, Yeremya evreninde. Eirahoutmoss ile e\u015Fleniktir.","pair.2h":"\u0130ki evren, bir e\u015Fleme","pair.2s":"Aralar\u0131nda Araf ve Cherqa var.","pair.3h":"Eirahoutmoss","pair.3s":'Elementlerin ve hen\xFCz bilinmeyen "ard\u0131l bilgiler"in aktif oldu\u011Fu kadim gezegen.',"btn.map":"\u25A6 Haritay\u0131 a\xE7","map.close":"\u2715 Kapat","map.hint":"S\xFCr\xFCkle \xB7 tekerlekle yak\u0131nla\u015F \xB7 bir yere t\u0131kla","map.unwritten":"Bu b\xF6lge i\xE7in kay\u0131t hen\xFCz eklenmedi.","map.kis":"Kronolitlerin g\xF6\u011Fe y\xFCkseldi\u011Fi, g\xF6lgeleri takvim olan \u015Fehir.","map.enter":"\u25B6 Kisura'ya gir","tools.btn":"\u2630 Ara\xE7lar","btn.surface":"\u25C7 Y\xFCzey u\xE7u\u015Fu","surf.fail":"Bu cihazda y\xFCzey g\xF6r\xFCnt\xFCs\xFC ba\u015Flat\u0131lamad\u0131 (grafik s\xFCr\xFCc\xFCs\xFC hatas\u0131). Galaksi haritas\u0131n\u0131 kullanmaya devam edebilirsin.","surf.note":"Prosed\xFCrel konsept y\xFCzey \xB7 kanon \xE7izimi de\u011Fil","surf.hint":"Fare: bak \xB7 s\xFCr\xFCkle / Q E: d\xF6n \xB7 W A S D: y\xFCr\xFC \xB7 Bo\u015Fluk / C: y\xFCkseklik \xB7 Shift: h\u0131zlan \xB7 F: oto-s\xFCz\xFClme \xB7 T: g\xFCn d\xF6ng\xFCs\xFC \xB7 P: foto\u011Fraf \xB7 K: kalite \xB7 V: bak\u0131\u015F \xB7 O: y\xF6r\xFCnge \xB7 R: video \xB7 M: g\xF6k haritas\u0131 \xB7 L: g\xF6zlem arac\u0131","surf.close":"\u2715 Gezegene d\xF6n","surf.dive":" \xB7 X: dal\u0131\u015F","surf.photo":"\u25C9 Foto\u011Fraf","surf.load":"Gezegene ini\u015F yap\u0131l\u0131yor\u2026 ekran birka\xE7 saniye hareketsiz kalabilir, l\xFCtfen bekle.","esik.note":"Fare: derinli\u011Fe bak \xB7 Esc: \xE7\u0131k","esik.close":"\u2715 Gezegene d\xF6n","esik.eyebrow":"E\u015Fik b\xF6lgeleri","esik.a.t":"Araf","esik.a.1":"Evrenin bitti\u011Fi gri b\xF6lge.","esik.c.t":"Cherqa","esik.c.1":"Ge\xE7i\u015F ve ar\u0131nma boyutu.","esik.c.2":"Zaman akmaz.","esik.c.3":"Bilgi Nehri buradan akar.","esik.c.4":"Burada bir se\xE7im yap\u0131l\u0131r.","esik.cross":"E\u015Fi\u011Fi ge\xE7 \u203A","esik.back":"\u2039 Araf'a d\xF6n","btn.esik":"\u25C7 E\u015Fi\u011Fe yakla\u015F","surf.q":"Kalite","surf.q0":"D\xFC\u015F\xFCk","surf.q1":"Orta","surf.q2":"Y\xFCksek","surf.lat":"Enlem","surf.N":"K","surf.S":"G","surf.s0":"\u0130lkbahar","surf.s1":"Yaz","surf.s2":"Sonbahar","surf.s3":"K\u0131\u015F","surf.w0":"A\xE7\u0131k","surf.w1":"Bulutlu","surf.w2":"Ya\u011Fmurlu","surf.w3":"F\u0131rt\u0131na","surf.wDust":"Toz f\u0131rt\u0131nas\u0131","surf.poi":"\u0130z","surf.poiHint":"Ufuktaki \u0131\u015F\u0131k s\xFCtunlar\u0131 bu d\xFCnyaya ait kay\u0131tlar\u0131 ta\u015F\u0131r. Yakla\u015F ve oku.","surf.view":"Bak\u0131\u015F","surf.v.gezgin":"Gezgin","surf.v.yerli":"Yerli","surf.v.gozlemci":"G\xF6zlemci","surf.touch":"Sol taraf: hareket \xB7 Sa\u011F taraf: bak \xB7 \u25B2\u25BC: y\xFCkseklik","log.btn":"\u25C8 K\xE2\u015Fif defteri","log.eyebrow":"Galaksi Konfederasyonu","log.title":"K\xE2\u015Fif Defteri","log.worlds":"d\xFCnya","log.traces":"iz","log.photos":"foto\u011Fraf","log.row":"{v} ziyaret \xB7 {f} iz \xB7 {p} foto\u011Fraf","log.empty":'Hen\xFCz hi\xE7bir d\xFCnyaya inmedin. Bir gezegende "Y\xFCzey u\xE7u\u015Fu"nu dene; ziyaretlerin ve buldu\u011Fun izler burada birikir.',"ortak.n":"\u015Eu an {n} k\xE2\u015Fif g\xF6ky\xFCz\xFCnde","ortak.here":"{n} ki\u015Fi bu sekt\xF6rde","surf.nbP":"Bu sekt\xF6rdeki kom\u015Fu d\xFCnya \u2014 t\u0131kla ve oraya in","surf.nbG":"Kom\u015Fu galaksi \u2014 t\u0131kla ve haritada ona git","surf.calm":"Sakin mod","surf.calmOn":"Sakin mod a\xE7\u0131k","surf.video":"10 sn video","surf.videoNo":"Bu taray\u0131c\u0131 video kayd\u0131n\u0131 desteklemiyor.","surf.warp":"Y\xF6r\xFCngeye \xE7\u0131k\u0131l\u0131yor","surf.orbit":"Y\xF6r\xFCnge","surf.orbitHint":"Gezegenin bir noktas\u0131na t\u0131kla, tam oraya in. O: geri d\xF6n.","surf.map":"G\xF6k haritas\u0131","surf.mapOn":"Y\xF6n \xE7izgileri ve g\xF6k cisimlerinin adlar\u0131 a\xE7\u0131k. M: kapat.","surf.mapOff":"Kapand\u0131.","surf.sun":"G\xFCne\u015F","surf.sunTwin":"\u0130kiz y\u0131ld\u0131z","surf.moon":"Uydu","surf.cN":"K","surf.cE":"D","surf.cS":"G","surf.cW":"B","log.gallery":"Galeri","ui.atlas":"\u2630 Atlas","era.label":"Zaman katman\u0131","era.now.y":"G\xFCn\xFCm\xFCz","era.now.n":"Yeremya \xB7 D\xFCnya","era.now.d":"Maddi d\xFCnya: her \u015Fey frekans ve titre\u015Fim fizi\u011Fiyle i\u015Fler. Hik\xE2yenin ba\u015Flad\u0131\u011F\u0131 yer.","era.itf.y":"+2600 y\u0131l","era.itf.n":"\u0130lk Tohum Filosu","era.itf.d":"\u0130lk koloni gemisi dalgas\u0131. Galaksi Konfederasyonu hen\xFCz yok; koloniciler zorlu d\xFCnyalara genetik uyumla tutunuyor.","era.conf.y":"+15.000 y\u0131l","era.conf.n":"Galaksi Konfederasyonu","era.conf.d":"Yakla\u015F\u0131k 1000 gezegenden olu\u015Fan siyasal yap\u0131; en etkin y\xFCz kadar\u0131 bu haritada.","id.explorer":"K\xE2\u015Fif","id.home":"D\xFCnya (Yeremya)","id.itf":"\u0130lk Tohum Filosu","id.title":"K\xE2\u015Fif Kimli\u011Fi","id.lead":"Konfederasyon kayd\u0131na kendini yaz: bir ad, geldi\u011Fin sekt\xF6r ve sana en yak\u0131n aksiyom. Yaln\u0131zca bu taray\u0131c\u0131da saklan\u0131r.","id.name":"K\xE2\u015Fif ad\u0131 (iste\u011Fe ba\u011Fl\u0131)","id.sector":"K\xF6ken sekt\xF6r\xFC","id.axiom":"Sana en yak\u0131n aksiyom","id.save":"Kaydet","id.card":"Kimlik kart\u0131n\u0131 indir","id.close":"Kapat","id.stats":"{w} d\xFCnya ziyaret edildi \xB7 {f} iz bulundu","id.none":"Hen\xFCz bir k\xE2\u015Fif kimli\u011Fin yok.","id.create":"Kimlik olu\u015Ftur","id.edit":"Kimli\u011Fi d\xFCzenle","id.yours":"senin aksiyomun","surf.tideUp":"Gelgit y\xFCkseliyor","surf.tideDn":"Gelgit \xE7ekiliyor","surf.cave":"Ma\u011Fara giri\u015Fi","surf.caveHint1":"Par\u0131ldayan mantarlar\u0131n ayd\u0131nlatt\u0131\u011F\u0131 yeralt\u0131 ma\u011Faralar\u0131. G: gir.","surf.caveHint2":"Buzullar\u0131n alt\u0131ndaki gizemli ma\u011Faralar. G: gir.","surf.caveHint3":"Yeralt\u0131 madenci kolonicilerin t\xFCnelleri. G: gir.","surf.caveIn":"Ma\u011Fara \xB7 {m} m","surf.caveIn2":"Fener a\xE7\u0131k. W/S: ilerle \xB7 Q/E: d\xF6n \xB7 G ya da geri y\xFCr\xFC: \xE7\u0131k.","sergi.scan":"Telefonunla tara, evreni ke\u015Ffet","sergi.resume":"\u25B6 G\xF6sterimi s\xFCrd\xFCr","log.community":"Topluluk \xB7 bu ay en \xE7ok iz bulunan d\xFCnyalar","log.found":"{n} iz","mec.btn":"\u2696 Meclis","mec.eyebrow":"Konfederasyon Meclisi","mec.next":"Sonraki","mec.total":"{n} k\xE2\u015Fif oy verdi.","mec.thanks":"Tutumun kaydedildi.","mec.anon":"Oylar anonimdir.","let.title":"K\xE2\u015Fif mektuplar\u0131","let.anon":"imzas\u0131z bir k\xE2\u015Fif","let.write":"Konfederasyon'a mektup","let.world":"Hangi d\xFCnyadan yaz\u0131yorsun?","let.text":"Mektubun","let.note":"Mektubun yazara iletilir; onaylan\u0131rsa o d\xFCnyan\u0131n sayfas\u0131nda, k\xE2\u015Fif ad\u0131nla yer al\u0131r.","let.send":"G\xF6nder","let.ok":"\u0130letildi. Te\u015Fekk\xFCrler.","let.err":"G\xF6nderilemedi, sonra yeniden dene.","aks.btn":"\u25D0 Aksiyomlar","aks.title":"Bask\u0131n aksiyom","aks.1":"Anlam, \u0130li\u015Fkiden Do\u011Far","aks.2":"Ger\xE7eklik, Tutarl\u0131l\u0131kt\u0131r","aks.3":"Ama\xE7, De\u011Fer Yaratmakt\u0131r","aks.count":"{n} d\xFCnya ({e} tahmini)","aks.note":"Her galaksi, kay\u0131tl\u0131 d\xFCnyalar\u0131nda en s\u0131k g\xF6r\xFClen aksiyomun rengini al\u0131r. Gri: aksiyomu bilinmeyen.","surf.scan":"G\xF6zlem arac\u0131","surf.scT":"Termal","surf.scM":"Manyetik alan","surf.scS":"Spektrum","surf.r.t":"Y\xFCzey s\u0131cakl\u0131\u011F\u0131","surf.r.p":"Bas\u0131n\xE7","surf.r.o2":"Oksijen","surf.r.g":"Yer\xE7ekimi","surf.r.mag":"Manyetik alan","surf.r.rad":"Radyasyon","surf.src.kanon":"kanon","surf.src.tahmini":"tahmini","surf.src.temsili":"temsili","surf.src.yok":"veri yok","surf.scNote1":"Yapay renkli termal g\xF6r\xFCnt\xFC: s\u0131cakl\u0131klar gezegen t\xFCr\xFCnden ve g\xFCne\u015F alan y\xFCzeyden tahmin edilir.","surf.scNote2":"Manyetik alan \xE7izgileri ve kutup b\xF6lgeleri (temsili). G\xFCc\xFC kanondaki ifadeye g\xF6re ayarlan\u0131r.","surf.scNote3":"Atmosfer so\u011Furma \xE7izgileri: kanonda ad\u0131 ge\xE7en bile\u015Fenlerin ger\xE7ek dalga boylar\u0131.","surf.prep":"Y\xFCzey u\xE7u\u015Fu arka planda haz\u0131rlan\u0131yor\u2026 sen gezmeye devam et.","surf.ready":"Haz\u0131r \u2014 y\xFCzeye in","surf.ready2":"Y\xFCzey u\xE7u\u015Fu haz\u0131r.","ui.driftHide":"Gezinti d\xFC\u011Fmesini gizle","ui.driftHide2":"Gezinti d\xFC\u011Fmesini gizle","ui.driftShow":"Gezinti d\xFC\u011Fmesini g\xF6ster"};var xa=window.QUL_LANG||{code:"tr",dir:"ltr",s:{}},pn=xa.code,k=(n,e)=>{let t=xa.s[n];return t==null&&(t=sf[n]),t==null&&(t=n),e?t.replace(/\{(\w+)\}/g,(i,s)=>e[s]!=null?e[s]:i):t},_a=n=>Math.round(n).toLocaleString(pn);function e1(n,e){n.planets.forEach(t=>{let i="planet."+t.key+".";["title","eyebrow","desc","imgNote"].forEach(r=>t[r]!=null&&e(i+r,t,r));let s=t.card||{};["durum","aksiyom"].forEach(r=>s[r]!=null&&e(i+"card."+r,s,r)),(s.extra||[]).forEach((r,o)=>{e(i+"extra."+o+".h",r,"h"),r.items.forEach((a,l)=>e(i+"extra."+o+".i."+l,r.items,l))})}),n.galaxies.forEach(t=>t.name!=null&&e("galaxy."+t.id+".name",t,"name")),Object.keys(n.bh).forEach(t=>{let i=n.bh[t];["title","eyebrow","desc"].forEach(s=>i[s]!=null&&e("bh."+t+"."+s,i,s)),(i.rows||[]).forEach((s,r)=>[0,1].forEach(o=>e("bh."+t+".row."+r+"."+o,s,o)))})}function rf(n){pn!=="tr"&&(e1(n,(e,t,i)=>{xa.s[e]!=null&&(t[i]=xa.s[e])}),document.documentElement.lang=pn,document.documentElement.dir=xa.dir||"ltr",document.title=k("ui.pageTitle"),document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=k(e.dataset.i18n)),document.querySelectorAll("[data-i18n-ph]").forEach(e=>e.placeholder=k(e.dataset.i18nPh)))}var Le=(function(){let n,e,t,i={},s=null,r=null,o=[],a=null,l=null;function c(){if(a){a=null;let P=l;l=null,P&&P()}}let u=new U(2600,3400,9600),d=new U(2600,0,0),h={active:!1,t:0,dur:2.4,fromP:new U,fromT:new U,dest:null,arc:0,done:null};function f(P,H,O){e=H,t=P.domElement,i=O,n=new Lr(e,t),n.enableDamping=!0,n.dampingFactor=.07,n.minDistance=10,n.maxDistance=3e4,n.target.copy(d);let G=null;t.addEventListener("pointerdown",q=>{c(),G=[q.clientX,q.clientY],i.onUser&&i.onUser()}),t.addEventListener("pointerup",q=>{if(!G)return;let se=Math.hypot(q.clientX-G[0],q.clientY-G[1]);G=null,se<5&&B(q)}),t.addEventListener("pointermove",S),addEventListener("keydown",q=>{q.key==="Escape"&&(i.onUser&&i.onUser(),L())})}let g=P=>{let H=t.getBoundingClientRect();return{x:(P.clientX-H.left)/H.width*2-1,y:-((P.clientY-H.top)/H.height)*2+1}};function v(P,H,O,G){c(),h.fromP.copy(e.position),h.fromT.copy(n.target),h.dest=P,h.t=0,h.dur=G||Math.min(4,Math.max(2.2,1.9+H/6e3*1.4)),h.arc=H*.08,h.active=!0,h.done=O||null,r=null}let m=(P,H)=>{let O=e.position.clone().sub(P).normalize();return O.y=Math.max(O.y,H),O.normalize()};function p(P){if(P===s)return;s=P,ue.setFocus(P);let H=P&&ue.galaxy(P);i.onFocus&&i.onFocus(H?H.g:null,H?ue.planetsOf(P):[])}function M(P){let H=ue.galaxy(P),O=H.outer.position.clone(),G=m(O,.3),q=O.clone().addScaledVector(G,Math.max(H.g.R*2.6,120));p(P),v(()=>({pos:q,target:O}),e.position.distanceTo(q),()=>i.onGalaxy&&i.onGalaxy(H.g))}function b(P){let H=ue.galaxy(P),O=ue.bhWorld(P),G=m(O,.2),q=O.clone().addScaledVector(G,Math.max(H.bh.rh*15,40));p(P),v(()=>({pos:q,target:O}),e.position.distanceTo(q),()=>i.onBH&&i.onBH(P))}function I(P){let H=ue.planetGalaxy(P);if(!H)return;p(H);let O=ue.galaxy(H),G=ue.planetWorld(P),q=m(G,.25),se=Math.max(O.g.R*.16,16);v(()=>{let re=ue.planetWorld(P);return{pos:re.clone().addScaledVector(q,se),target:re}},e.position.distanceTo(G),()=>i.onPlanet&&i.onPlanet(P)),r=P}function B(P){let H=g(P),O=ue.pickPlanet(H);if(O){I(O);return}let G=ue.pickBH(H);if(G){b(G);return}let q=ue.pickGalaxy(H);q&&q!==s&&M(q)}function S(P){let H=g(P),O=ue.pickPlanet(H),G=null,q=null;if(O)G=i.titleOf(O);else{let se=ue.pickBH(H);if(se)G=k("tip.bh",{name:i.bhTitle(se)});else{let re=ue.pickGalaxy(H);if(re){q=re;let fe=ue.galaxy(re).g;G=fe.bg?k("gal.unreg"):k("tip.gal",{name:fe.name,n:ue.planetsOf(re).length})}}}ue.setHover(q),t.style.cursor=G?"pointer":"grab",i.tip&&i.tip(G,P.clientX,P.clientY)}function _(P){if(h.active){h.t=Math.min(1,h.t+P/h.dur);let H=vi(h.t),O=h.dest();if(e.position.lerpVectors(h.fromP,O.pos,H),e.position.y+=Math.sin(Math.PI*H)*h.arc,n.target.lerpVectors(h.fromT,O.target,H),i.onFlight&&i.onFlight(H),h.t>=1){e.position.copy(O.pos),n.target.copy(O.target),h.active=!1,i.onFlight&&i.onFlight(null);let G=h.done;h.done=null,G&&G(),o.splice(0).forEach(q=>q())}}else if(a)a(P)===!1&&c();else if(r){let H=ue.planetWorld(r);e.position.add(H.clone().sub(n.target)),n.target.copy(H)}n.update()}function L(){p(null),v(()=>({pos:u,target:d}),e.position.distanceTo(u),()=>i.onHome&&i.onHome())}function y(){e.position.set(2600,6500,22e3),n.target.copy(d),v(()=>({pos:u,target:d}),0,()=>i.onIntroDone&&i.onIntroDone(),16)}let x=()=>n.target;function T(P,H){p(null);let O=new U(...P),G=new U(...H);v(()=>({pos:O,target:G}),e.position.distanceTo(O))}function V(P,H){c(),r=null,a=P,l=H||null}function W(P,H){V(O=>{if(h.active)return;if(H){let Z=ue.planetWorld(H);e.position.add(Z.clone().sub(n.target)),n.target.copy(Z)}let G=n.target,q=e.position.clone().sub(G),se=P*O,re=Math.cos(se),fe=Math.sin(se);e.position.set(G.x+q.x*re-q.z*fe,G.y+q.y+Math.sin(performance.now()/6e3)*P*O*q.length()*.15,G.z+q.x*fe+q.z*re)})}return{orbit:W,view:T,target:x,drive:V,init:f,update:_,reset:L,intro:y,focusGalaxy:M,focusBH:b,flyToPlanet:I,whenIdle:()=>new Promise(P=>{h.active?o.push(P):P()})}})();var as=n=>document.getElementById(n),yi=(function(){let n=null,e=[],t=null,i=(u,d)=>e.push(setTimeout(d,u));function s(u){try{parent.postMessage({qulDuck:u},"*")}catch{}}function r(){n=document.createElement("div"),n.id="kis",n.innerHTML='<div class="kmap"><img src="img/eirahoutmoss.jpg" alt=""></div><video id="kv" playsinline preload="auto" poster="img/kisura-poster.jpg"></video><div class="kvg"></div><div class="kfl"></div><div class="kcap"><small id="kc1"></small><h2 id="kc2"></h2><p id="kc3"></p></div><button id="kx"></button>',document.body.appendChild(n),as("kx").onclick=c,as("kx").textContent=k("cin.close")}function o(u,d,h){let f=document.querySelector(".kcap");f.classList.remove("on"),f.offsetWidth,as("kc1").textContent=u,as("kc2").textContent=d,as("kc3").textContent=h||"",f.classList.add("on")}function a(u){return new Promise(d=>{t=d,n||r(),n.classList.remove("land"),n.querySelector(".kmap img").src="img/eirahoutmoss.jpg";let h=as("kv");h.src="img/kisura.mp4",h.currentTime=0,h.classList.remove("on"),n.classList.remove("vid"),n.classList.add("on"),document.documentElement.style.setProperty("--bar","9vh"),s(!0);let f=n.querySelector(".kmap img");f.style.animation="none",f.offsetWidth,f.style.animation="",o(k("cin.c1"),k("cin.h1"),k("cin.p1")),i(5200,()=>{n.classList.add("vid"),h.classList.add("on"),h.muted=!1;let g=h.play();g&&g.catch&&g.catch(()=>{h.muted=!0,h.play().catch(()=>{})}),o(k("cin.c2"),k("cin.h2"),k("cin.p2"))}),h.onended=()=>{o(k("cin.c2"),k("cin.h3"),k("cin.p3")),u&&u.auto&&i(4500,c)}})}function l(u){n||r(),as("kv").classList.remove("on"),n.classList.remove("vid"),n.querySelector(".kmap img").src=u.img,n.classList.add("land","on"),document.documentElement.style.setProperty("--bar","9vh"),o(u.eyebrow||"",u.title,(u.desc||"").split(". ")[0].replace(/\.$/,"")+".")}function c(){if(!n||!n.classList.contains("on"))return;if(e.forEach(clearTimeout),e=[],as("kv").pause(),n.classList.remove("on"),document.documentElement.style.setProperty("--bar","0vh"),s(!!window.__hush),t){let d=t;t=null,d()}}return{kisura:a,land:l,close:c}})();var _i={};Cp(_i,{chips:()=>nu,closePanel:()=>mt,flight:()=>Dr,initSearch:()=>iu,openItem:()=>nl,setup:()=>eu,tip:()=>tu,titleCard:()=>xt,titleDur:()=>Sa,toast:()=>Ir});var kr=()=>{let n=window.QUL_ORTAK;return n?n.replace(/^wss:/,"https:").replace(/^ws:/,"http:").replace(/\/$/,""):""},jc=(n,e)=>fetch(kr()+n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(t=>t.json()),Jc={},xi=null,$c=null,af=0,os=null,t1=n=>{os||(os=document.createElement("div"),os.id="ortak",document.body.appendChild(os)),os.textContent=k("ortak.n",{n:n.n})+(n.here>1?" \xB7 "+k("ortak.here",{n:n.here-1}):""),os.classList.add("on")},of=()=>{try{xi&&xi.readyState===1&&$c&&xi.send(JSON.stringify({s:$c}))}catch{}},lf=()=>{let n=window.QUL_ORTAK;if(n){try{xi=new WebSocket(n)}catch{return}xi.onopen=()=>{af=0,of()},xi.onmessage=e=>{try{let t=JSON.parse(e.data);t.top&&(window.__qulTop=t.top),t1(t)}catch{}},xi.onclose=()=>{os&&os.classList.remove("on"),setTimeout(lf,Math.min(6e4,2e3*Math.pow(2,af++)))}}},cf=n=>{try{xi&&xi.readyState===1&&xi.send(JSON.stringify({f:String(n)}))}catch{}};addEventListener("qulFound",n=>cf(n.detail));var mn={start(){lf()},where(n){$c=String(n||""),of()},found:cf,on:()=>!!kr(),letters(n){return kr()?Jc[n]?Promise.resolve(Jc[n]):fetch(kr()+"/api/mektuplar?k="+encodeURIComponent(n)).then(e=>e.json()).then(e=>Jc[n]=Array.isArray(e)?e:[]).catch(()=>[]):Promise.resolve([])},sendLetter:(n,e,t)=>jc("/api/mektup",{k:n,m:e,i:t}),vote:(n,e)=>jc("/api/meclis",{q:n,o:e}),results:()=>fetch(kr()+"/api/meclis").then(n=>n.json()).catch(()=>({})),measure:(n,e,t)=>{if(!(!kr()||navigator.doNotTrack==="1"||window.doNotTrack==="1"))try{jc("/api/olcum",{fps:n,q:e,m:t}).catch(()=>{})}catch{}}};var ba=!1,Qc=n=>{try{parent.postMessage({qulDuck:n},"*")}catch{}},Ma={get on(){return ba},ok:!1,toggle(){return ba=!ba,!ba&&window.speechSynthesis&&(speechSynthesis.cancel(),Qc(!!window.__hush)),ba},say(n,e){}};var pt=n=>document.getElementById(n),Fi=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),uf=n=>"rgb("+n.join(",")+")",hf=(n,e,t)=>n.map((i,s)=>Math.round(i+(e[s]-i)*t)),ff={};function eu(n){n.galaxies.forEach(e=>ff[e.id]=e.name),pt("lb").onclick=()=>pt("lb").classList.remove("on")}function n1(n){n=n.toLowerCase();let e=t=>t.test(n);return e(/volkan|lav|magma|pirosferik|ateş/)?{a:[255,120,40],b:[90,18,10],atm:"255,150,70"}:e(/buz|buzul|fiyort|donmuş/)?{a:[220,240,255],b:[110,160,200],atm:"170,215,255"}:e(/okyanus|su altı|su dünyası|akuatik|sıvı|akışkan/)?{a:[70,150,230],b:[10,45,110],atm:"110,180,255"}:e(/çöl|kum/)?{a:[230,185,110],b:[140,80,40],atm:"235,190,130"}:e(/orman|bitki|ağaç|biyosfer|tarımsal/)?{a:[90,190,110],b:[18,70,45],atm:"140,230,150"}:e(/gaz dev|gaz halka|gaz tabaka|gaz gezegeni|atmosfer gezegeni|bulut/)?{a:[235,200,150],b:[150,90,60],atm:"240,200,160",bands:!0}:e(/kristal|prizma|spektr/)?{a:[120,230,210],b:[170,80,190],atm:"160,235,225"}:e(/neon|ışık|foton|radyant|lüminesans|aurora/)?{a:[170,140,255],b:[40,60,150],atm:"180,170,255"}:e(/vakum|karanlık|tekillik|boşluk|sessiz/)?{a:[110,90,150],b:[15,10,30],atm:"140,110,190"}:{a:[150,160,185],b:[30,40,70],atm:"232,184,75"}}function pf(n,e,t,i){n.fillStyle="#05050a",n.fillRect(0,0,e,t);for(let s=0;s<110;s++)n.fillStyle="rgba(216,201,168,"+(.15+i()*.6)+")",n.fillRect(i()*e,i()*t,1+i()*1.4,1+i()*1.4)}function i1(n,e){let t=n.getContext("2d"),i=n.width,s=n.height,r=Rn(Wn(e.key)),o=n1((e.desc||"")+" "+e.title);pf(t,i,s,r);let a=i*.5,l=s*.52,c=s*.36;t.save(),t.beginPath(),t.arc(a,l,c,0,6.2832),t.clip();let u=t.createLinearGradient(a-c,l-c,a+c,l+c);if(u.addColorStop(0,uf(o.a)),u.addColorStop(1,uf(o.b)),t.fillStyle=u,t.fillRect(a-c,l-c,2*c,2*c),o.bands)for(let h=0;h<14;h++)t.fillStyle="rgba("+hf(o.a,o.b,r()).join(",")+","+(.25+r()*.3)+")",t.fillRect(a-c,l-c+h/14*2*c+r()*6,2*c,6+r()*c*.12);for(let h=0;h<46;h++){let f=a+(r()*2-1)*c,g=l+(r()*2-1)*c,v=c*(.08+r()*.3),m=hf(o.a,o.b,r()).join(","),p=t.createRadialGradient(f,g,0,f,g,v);p.addColorStop(0,"rgba("+m+",.30)"),p.addColorStop(1,"rgba("+m+",0)"),t.fillStyle=p,t.fillRect(f-v,g-v,2*v,2*v)}let d=t.createRadialGradient(a-c*.4,l-c*.35,c*.1,a,l,c*1.05);d.addColorStop(0,"rgba(255,255,255,.18)"),d.addColorStop(.45,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,.82)"),t.fillStyle=d,t.fillRect(a-c,l-c,2*c,2*c),t.restore(),t.save(),t.strokeStyle="rgba("+o.atm+",.55)",t.lineWidth=3,t.shadowColor="rgba("+o.atm+",.9)",t.shadowBlur=26,t.beginPath(),t.arc(a,l,c,0,6.2832),t.stroke(),t.restore(),o.bands&&r()<.6&&(t.save(),t.translate(a,l),t.rotate(-.35),t.strokeStyle="rgba(230,210,170,.4)",t.lineWidth=7,t.beginPath(),t.ellipse(0,0,c*1.6,c*.38,0,0,6.2832),t.stroke(),t.restore())}function s1(n){let e=n.getContext("2d"),t=n.width,i=n.height,s=Rn(7);pf(e,t,i,s);let r=t*.5,o=i*.52,a=i*.13,l=e.createRadialGradient(r,o,a*1.1,r,o,a*3.6);l.addColorStop(0,"rgba(255,215,140,.95)"),l.addColorStop(.4,"rgba(255,110,30,.4)"),l.addColorStop(1,"rgba(255,80,20,0)"),e.save(),e.translate(r,o),e.scale(1,.26),e.translate(-r,-o),e.fillStyle=l,e.beginPath(),e.arc(r,o,a*3.6,0,6.2832),e.fill(),e.restore(),e.save(),e.strokeStyle="rgba(255,215,160,.9)",e.lineWidth=a*.1,e.shadowColor="rgba(255,170,80,1)",e.shadowBlur=30,e.beginPath(),e.arc(r,o,a*1.18,0,6.2832),e.stroke(),e.restore(),e.fillStyle="#000",e.beginPath(),e.arc(r,o,a,0,6.2832),e.fill(),e.save(),e.translate(r,o),e.scale(1,.26),e.translate(-r,-o),e.strokeStyle="rgba(255,190,110,.55)",e.lineWidth=a*.5,e.beginPath(),e.arc(r,o,a*1.7,0,Math.PI),e.stroke(),e.restore()}function nl(n){pt("pe").textContent=n.eyebrow,pt("pt").textContent=n.title,pt("pd").textContent=n.desc;let e=pt("cv"),t=pt("img"),i=pt("artnote");n.img?(e.style.display="none",t.style.display="block",t.src=n.img,t.onclick=()=>{pt("lbi").src=n.img,pt("lb").classList.add("on")},i.textContent=k("panel.enlarge",{note:n.imgNote||k("panel.guide")})):(t.style.display="none",e.style.display="block",n.bh?s1(e):i1(e,n),i.textContent=n.bh?k("panel.concept"):k("panel.conceptNC"));let s=n.card||{},r=[];if(n.bh)(s.rows||[]).forEach(o=>r.push(o));else{let o=n.gal==="eira"||n.gal==="esik";!o&&n.key!=="dunya"&&r.push([s.kod&&/^İTF/.test(s.kod)?k("row.colony"):k("row.code"),s.kod||k("row.nocode")]),n.gal!=="unas"&&n.gal!=="itf"&&r.push([o?k("row.region"):k("row.galaxy"),ff[n.gal]]),s.durum&&r.push([o||n.key==="dunya"?k("row.status"):/^İTF/.test(s.kod||"")?k("row.settle"):k("row.dipl"),s.durum]),s.taslak&&r.length&&r.splice(1,0,[k("row.assign"),k("val.draft")]),s.aksiyom&&r.push([k("row.axiom"),s.tahmini?k("row.est",{v:s.aksiyom}):s.aksiyom])}pt("card").innerHTML=r.map(o=>'<div class="row"><span>'+Fi(o[0])+"</span><b>"+Fi(o[1])+"</b></div>").join(""),pt("extra").innerHTML=(s.extra||[]).map(o=>"<h3>"+Fi(o.h)+"</h3><ul>"+o.items.map(a=>"<li>"+Fi(a)+"</li>").join("")+"</ul>").join(""),n.key&&mn.on()&&mn.letters(n.key).then(o=>{!o.length||!pt("extra")||pt("extra").insertAdjacentHTML("beforeend","<h3>"+Fi(k("let.title"))+"</h3>"+o.slice(-6).reverse().map(a=>'<blockquote class="klet">'+Fi(a.m)+"<cite>\u2014 "+Fi(a.i||k("let.anon"))+"</cite></blockquote>").join(""))}),n.key==="eirahoutmoss"&&(pt("extra").insertAdjacentHTML("afterbegin",'<button id="kbtn">'+k("btn.kisura")+'</button><button id="mbtn" class="kb">'+k("btn.map")+"</button>"),pt("kbtn").onclick=()=>window.dispatchEvent(new Event("kisura")),pt("mbtn").onclick=()=>window.dispatchEvent(new Event("emap"))),!n.bh&&n.kind!=="esik"&&!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(n.key)&&(pt("extra").insertAdjacentHTML("afterbegin",'<button id="sbtn" class="kb">'+k("btn.surface")+"</button>"),pt("sbtn").onclick=()=>window.dispatchEvent(new CustomEvent("surface",{detail:n}))),n.key==="araf-cherqa"&&(pt("extra").insertAdjacentHTML("afterbegin",'<button id="sbtn" class="kb">'+k("btn.esik")+"</button>"),pt("sbtn").onclick=()=>window.dispatchEvent(new CustomEvent("esik",{detail:n}))),n.img&&!n.bh&&n.key!=="eirahoutmoss"&&(pt("extra").insertAdjacentHTML("afterbegin",'<button id="lbtn" class="kb">'+k("btn.land")+"</button>"),pt("lbtn").onclick=()=>window.dispatchEvent(new CustomEvent("land",{detail:n}))),n.bh&&n.gal&&(pt("extra").insertAdjacentHTML("afterbegin",'<button id="fbtn" class="kb">'+k("fall.btn")+"</button>"),pt("fbtn").onclick=()=>window.dispatchEvent(new CustomEvent("fall",{detail:n.gal})));try{window.dispatchEvent(new CustomEvent("qulVisit",{detail:{key:n.key,gal:n.gal}}))}catch{}pt("panel").classList.add("open"),pt("panel").scrollTop=0}var mt=()=>pt("panel").classList.remove("open"),Sa=(n,e)=>Math.min(17,Math.max(8,6.5+((n||"").length+(e||"").length)*.08));function xt(n,e){pt("th").textContent=n,pt("ts").textContent=e||"";let t=pt("title");return t.classList.remove("on"),t.style.animationDuration=Sa(n,e)+"s",t.offsetWidth,t.classList.add("on"),Ma.say(n,e),Sa(n,e)}function Ir(n){let e=pt("toast");e.textContent=n,e.classList.add("on"),clearTimeout(e._t),e._t=setTimeout(()=>e.classList.remove("on"),3500)}function Dr(n){let e=document.documentElement.style;if(n===null){e.setProperty("--bar","0vh"),ue.setFov(50),ue.setBloom(.55),ue.setWarp(0);return}let t=Math.sin(Math.PI*n),i=Wc(0,.12,n)*(1-Wc(.88,1,n));e.setProperty("--bar",(i*7).toFixed(2)+"vh"),ue.setFov(50+14*t),ue.setBloom(.55+.55*t),ue.setWarp(.9*t*t)}function tu(n,e,t){let i=pt("tip");if(!n){i.classList.remove("on");return}i.textContent=n,i.style.left=e+16+"px",i.style.top=t+12+"px",i.classList.add("on")}function nu(n,e,t,i,s){pt("where").textContent=n?n.name:"";let r=pt("chips");if(r.innerHTML="",!!n){if(s[n.id]){let o=document.createElement("button");o.className="bhc",o.textContent="\u25CF "+s[n.id].title,o.onclick=()=>t.bh(n.id),r.appendChild(o)}if(t.light&&!["home","eira","esik","itf","unas"].includes(n.id)){let o=document.createElement("button");o.className="bhc",o.textContent=k("light.btn"),o.onclick=()=>t.light(n.id),r.appendChild(o)}if(!e.length){let o=document.createElement("span");o.textContent=n.bg?k("chips.none0"):k("chips.none1"),r.appendChild(o);return}e.forEach(o=>{let a=document.createElement("button");a.textContent=i[o].title,a.onclick=()=>t.planet(o),r.appendChild(a)})}}var df=n=>n.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/ı/g,"i");function iu(n,e,t){let i=n.planets.map(l=>l.key==="dunya"?{t:"sol",id:"earth",key:"dunya",label:l.title,sub:"G\xFCne\u015F Sistemi \xB7 Earth",alias:"earth world dunya yolculuk solar system"}:{t:"planet",key:l.key,label:l.title,sub:l.eyebrow}).concat([{t:"bh",id:"home",label:n.bh.home.title,sub:k("search.bh")}]).concat(n.galaxies.filter(l=>!l.bg&&l.id!=="home").map(l=>({t:"galaxy",id:l.id,label:l.name,sub:k("search.gal")}))).concat(t||[]),s=pt("q"),r=pt("sres"),o=[],a=l=>{r.innerHTML="",s.value="",s.blur(),e(l)};s.addEventListener("input",()=>{let l=df(s.value.trim());r.innerHTML="",o=[],l&&(o=i.filter(c=>df(c.label+" "+(c.alias||"")).includes(l)).slice(0,8),o.forEach(c=>{let u=document.createElement("button");u.innerHTML=Fi(c.label)+" <small>"+Fi(c.sub)+"</small>",u.onclick=()=>a(c),r.appendChild(u)}))}),s.addEventListener("keydown",l=>{l.key==="Enter"&&o[0]&&a(o[0]),l.stopPropagation()})}var il=(function(){let n=!1,e=null,t=null,i={},s=["aetherium","event-horizon","bio-nexus","javelin","nihil","ethos"],r=u=>new Promise(d=>{e=setTimeout(d,u)}),o=()=>mt();function a(){n&&(n=!1,clearTimeout(e),t.textContent=k("ui.tour"))}async function l(){if(n=!0,t.textContent=k("ui.tourStop"),mt(),Le.reset(),await Le.whenIdle(),!!n&&(xt(k("tour.t1"),k("ui.title")),await r(6500),!!n&&(Le.focusBH("home"),await Le.whenIdle(),!!n))){await r(6500);for(let u of s){if(!n)return;let d=i[u];if(d){if(Le.focusGalaxy(d.gal),await Le.whenIdle(),!n||(await r(6500),!n)||(Le.flyToPlanet(u),await Le.whenIdle(),!n))return;await r(7500)}}n&&(Le.focusGalaxy("eira"),await Le.whenIdle(),n&&(await r(6500),n&&(Le.flyToPlanet("eirahoutmoss"),await Le.whenIdle(),n&&(await r(4e3),n&&(o(),await yi.kisura({auto:!0}),n&&n&&(a(),mt(),Le.reset()))))))}}function c(u,d){t=u,d.planets.forEach(h=>i[h.key]=h),t.onclick=()=>n?a():l()}return{init:c,stop:a}})();var su=(function(){let n=!1,e=null,t=null,i=null,s=null,r=null,o=!1,a=!1,l=232.6,c=(S,_)=>{let L=k(S);return L&&L!==S?L:_},u=S=>Math.round(S).toLocaleString(document.documentElement.lang==="en"?"en-US":"tr-TR"),d=S=>new Promise(_=>{let L=0,y=()=>{if(!n||a){_();return}if(o||(L+=200),L>=S){_();return}e=setTimeout(y,200)};y()}),h=()=>document.fullscreenElement||document.webkitFullscreenElement;function f(){try{let S=document.documentElement,_=S.requestFullscreen||S.webkitRequestFullscreen;if(_){let L=_.call(S);L&&L.catch&&L.catch(()=>{})}}catch{}}function g(){try{if(h()){let S=document.exitFullscreen||document.webkitExitFullscreen;if(S){let _=S.call(document);_&&_.catch&&_.catch(()=>{})}}}catch{}}function v(){t.textContent=n?c("ui.driftStop","\u25A0 Gezintiyi durdur"):c("ui.drift","\u26F6 Galaksi Gezintisi")}function m(){if(n){n=!1,o=!1,a=!1,clearTimeout(e),document.body.classList.remove("drift");try{s&&s.release()}catch{}s=null,g(),v()}}let p=(S,_)=>Math.hypot(S.pos[0]-_.pos[0],S.pos[1]-_.pos[1],S.pos[2]-_.pos[2])*l;function M(){let S=i.galaxies.filter(T=>!T.bg&&T.id&&T.pos),_=i.galaxies.find(T=>T.id==="home")||S[0],L=S.filter(T=>T!==_),y=[],x=_;for(S.includes(_)&&y.push(_);L.length;){let T=0,V=1e18;L.forEach((W,N)=>{let P=p(x,W);P<V&&(V=P,T=N)}),x=L.splice(T,1)[0],y.push(x)}return y}function b(S,_,L,y,x){let T=i.galaxies.find(V=>V.id==="home");r.innerHTML="<b>"+(S.name||"")+"</b><span>"+c("drift.home","Evin'e uzakl\u0131k")+": "+u(p(S,T))+" "+c("drift.unit","\u0131\u015F\u0131k y\u0131l\u0131")+"</span><span>"+c("drift.trav","Katedilen")+": "+u(_)+" "+c("drift.unit","\u0131\u015F\u0131k y\u0131l\u0131")+"</span><span>"+c("drift.seen","G\xF6r\xFClen gezegen")+": "+L+"</span><span>"+y+" / "+x+"</span>"}async function I(){n=!0,o=!1,a=!1,v(),f(),document.body.classList.add("drift"),mt();try{navigator.wakeLock&&(s=await navigator.wakeLock.request("screen"))}catch{}if(Le.reset(),await Le.whenIdle(),!n)return;xt(c("drift.t","Galaksiler"),c("ui.title","Qul Efsaneleri")),await d(5e3);let S=M(),_=0,L=0,y=S[0],x=!1;for(;n;){for(let T=0;T<S.length;T++){let V=S[T];if(!n)return;a=!1;try{Le.focusGalaxy(V.id)}catch{continue}if(_+=p(y,V),y=V,b(V,_,L,T+1,S.length),await Le.whenIdle(),!n)return;mt(),Le.orbit(.05),await d(6500);let W=i.planets.filter(P=>P.gal===V.id&&P.desc).sort(()=>Math.random()-.5).slice(0,3),N=!1;for(let P of W){if(a){N=!0;break}try{Le.flyToPlanet(P.key)}catch{continue}if(await Le.whenIdle(),!n||(L++,b(V,_,L,T+1,S.length),Le.orbit(.09,P.key),await d(8e3+Math.min(6e3,String(P.desc).length*18)),!n))return;mt(),await d(900)}if(a&&(N=!0,a=!1),!n)return;if(W.length&&!N){try{Le.focusGalaxy(V.id)}catch{}if(await Le.whenIdle(),!n)return;mt()}}if(!n)return;S=S.slice().reverse(),y=S[0]}}function B(S,_){t=S,i=_,v(),r=document.createElement("div"),r.id="dlog",document.body.appendChild(r),t.onclick=x=>{x.stopPropagation(),n?m():I()},document.addEventListener("keydown",x=>{n&&(x.key==="Escape"?m():x.key===" "?(x.preventDefault(),o=!o):x.key==="ArrowRight"&&(a=!0))});let L=!1,y=()=>{let x=!!h();n&&L&&!x&&m(),L=x};document.addEventListener("fullscreenchange",y),document.addEventListener("webkitfullscreenchange",y)}return{init:B,stop:m,get on(){return n}}})();var mf="qdriftpos",gf="qdrifthide",sl={g(n){try{return localStorage.getItem(n)}catch{return null}},s(n,e){try{e==null?localStorage.removeItem(n):localStorage.setItem(n,e)}catch{}}};function vf(n){let e=document.createElement("button");e.id="driftx",e.type="button",e.textContent="\u2715",e.title=k("ui.driftHide"),e.setAttribute("aria-label",k("ui.driftHide")),document.body.appendChild(e);let t=(g,v)=>{let m=innerWidth,p=innerHeight,M=n.getBoundingClientRect();g=Math.max(4,Math.min(m-M.width-4,g)),v=Math.max(4,Math.min(p-M.height-4,v)),n.style.left=g+"px",n.style.top=v+"px",n.style.right="auto",n.style.bottom="auto",e.style.left=g+M.width-8+"px",e.style.top=v-8+"px"},i=()=>{try{let g=JSON.parse(sl.g(mf)||"null");g?t(g[0],g[1]):s()}catch{s()}},s=()=>{let g=n.getBoundingClientRect();e.style.left=g.right-8+"px",e.style.top=g.top-8+"px"},r,o,a,l,c=!1,u=!1;n.addEventListener("pointerdown",g=>{u=!0,c=!1,r=g.clientX,o=g.clientY;let v=n.getBoundingClientRect();a=v.left,l=v.top;try{n.setPointerCapture(g.pointerId)}catch{}}),n.addEventListener("pointermove",g=>{if(!u)return;let v=g.clientX-r,m=g.clientY-o;!c&&Math.hypot(v,m)>8&&(c=!0),c&&(n.style.transform="none",t(a+v,l+m))});let d=()=>{if(u&&(u=!1,c)){let g=n.getBoundingClientRect();sl.s(mf,JSON.stringify([Math.round(g.left),Math.round(g.top)])),setTimeout(()=>{c=!1},0)}};n.addEventListener("pointerup",d),n.addEventListener("pointercancel",d),n.addEventListener("click",g=>{c&&(g.stopImmediatePropagation(),g.preventDefault())},!0);let h=g=>{n.style.display=g?"":"none",e.style.display=g?"":"none",sl.s(gf,g?null:"1"),g&&i()};e.addEventListener("click",g=>{g.stopPropagation(),h(!1)}),addEventListener("resize",()=>{n.style.display!=="none"&&i()});let f=document.getElementById("tools");if(f){let g=document.createElement("button");g.id="drift0",g.type="button";let v=()=>{g.textContent=n.style.display==="none"?k("ui.driftShow"):k("ui.driftHide2")};g.onclick=()=>{h(n.style.display==="none"),v()},f.appendChild(g),v(),g.addEventListener("click",v)}h(sl.g(gf)!=="1"),setTimeout(()=>{n.style.display!=="none"&&i()},50)}var Ur=function(n,e){let s=n,r=wa[e],o=null,a=0,l=null,c=[],u={},d=function(_,L){a=s*4+17,o=(function(y){let x=new Array(y);for(let T=0;T<y;T+=1){x[T]=new Array(y);for(let V=0;V<y;V+=1)x[T][V]=null}return x})(a),h(0,0),h(a-7,0),h(0,a-7),v(),g(),p(_,L),s>=7&&m(_),l==null&&(l=I(s,r,c)),M(l,L)},h=function(_,L){for(let y=-1;y<=7;y+=1)if(!(_+y<=-1||a<=_+y))for(let x=-1;x<=7;x+=1)L+x<=-1||a<=L+x||(0<=y&&y<=6&&(x==0||x==6)||0<=x&&x<=6&&(y==0||y==6)||2<=y&&y<=4&&2<=x&&x<=4?o[_+y][L+x]=!0:o[_+y][L+x]=!1)},f=function(){let _=0,L=0;for(let y=0;y<8;y+=1){d(!0,y);let x=cs.getLostPoint(u);(y==0||_>x)&&(_=x,L=y)}return L},g=function(){for(let _=8;_<a-8;_+=1)o[_][6]==null&&(o[_][6]=_%2==0);for(let _=8;_<a-8;_+=1)o[6][_]==null&&(o[6][_]=_%2==0)},v=function(){let _=cs.getPatternPosition(s);for(let L=0;L<_.length;L+=1)for(let y=0;y<_.length;y+=1){let x=_[L],T=_[y];if(o[x][T]==null)for(let V=-2;V<=2;V+=1)for(let W=-2;W<=2;W+=1)V==-2||V==2||W==-2||W==2||V==0&&W==0?o[x+V][T+W]=!0:o[x+V][T+W]=!1}},m=function(_){let L=cs.getBCHTypeNumber(s);for(let y=0;y<18;y+=1){let x=!_&&(L>>y&1)==1;o[Math.floor(y/3)][y%3+a-8-3]=x}for(let y=0;y<18;y+=1){let x=!_&&(L>>y&1)==1;o[y%3+a-8-3][Math.floor(y/3)]=x}},p=function(_,L){let y=r<<3|L,x=cs.getBCHTypeInfo(y);for(let T=0;T<15;T+=1){let V=!_&&(x>>T&1)==1;T<6?o[T][8]=V:T<8?o[T+1][8]=V:o[a-15+T][8]=V}for(let T=0;T<15;T+=1){let V=!_&&(x>>T&1)==1;T<8?o[8][a-T-1]=V:T<9?o[8][15-T-1+1]=V:o[8][15-T-1]=V}o[a-8][8]=!_},M=function(_,L){let y=-1,x=a-1,T=7,V=0,W=cs.getMaskFunction(L);for(let N=a-1;N>0;N-=2)for(N==6&&(N-=1);;){for(let P=0;P<2;P+=1)if(o[x][N-P]==null){let H=!1;V<_.length&&(H=(_[V]>>>T&1)==1),W(x,N-P)&&(H=!H),o[x][N-P]=H,T-=1,T==-1&&(V+=1,T=7)}if(x+=y,x<0||a<=x){x-=y,y=-y;break}}},b=function(_,L){let y=0,x=0,T=0,V=new Array(L.length),W=new Array(L.length);for(let O=0;O<L.length;O+=1){let G=L[O].dataCount,q=L[O].totalCount-G;x=Math.max(x,G),T=Math.max(T,q),V[O]=new Array(G);for(let Z=0;Z<V[O].length;Z+=1)V[O][Z]=255&_.getBuffer()[Z+y];y+=G;let se=cs.getErrorCorrectPolynomial(q),fe=Ea(V[O],se.getLength()-1).mod(se);W[O]=new Array(se.getLength()-1);for(let Z=0;Z<W[O].length;Z+=1){let oe=Z+fe.getLength()-W[O].length;W[O][Z]=oe>=0?fe.getAt(oe):0}}let N=0;for(let O=0;O<L.length;O+=1)N+=L[O].totalCount;let P=new Array(N),H=0;for(let O=0;O<x;O+=1)for(let G=0;G<L.length;G+=1)O<V[G].length&&(P[H]=V[G][O],H+=1);for(let O=0;O<T;O+=1)for(let G=0;G<L.length;G+=1)O<W[G].length&&(P[H]=W[G][O],H+=1);return P},I=function(_,L,y){let x=yf.getRSBlocks(_,L),T=xf();for(let W=0;W<y.length;W+=1){let N=y[W];T.put(N.getMode(),4),T.put(N.getLength(),cs.getLengthInBits(N.getMode(),_)),N.write(T)}let V=0;for(let W=0;W<x.length;W+=1)V+=x[W].dataCount;if(T.getLengthInBits()>V*8)throw"code length overflow. ("+T.getLengthInBits()+">"+V*8+")";for(T.getLengthInBits()+4<=V*8&&T.put(0,4);T.getLengthInBits()%8!=0;)T.putBit(!1);for(;!(T.getLengthInBits()>=V*8||(T.put(236,8),T.getLengthInBits()>=V*8));)T.put(17,8);return b(T,x)};u.addData=function(_,L){L=L||"Byte";let y=null;switch(L){case"Numeric":y=r1(_);break;case"Alphanumeric":y=a1(_);break;case"Byte":y=o1(_);break;case"Kanji":y=l1(_);break;default:throw"mode:"+L}c.push(y),l=null},u.isDark=function(_,L){if(_<0||a<=_||L<0||a<=L)throw _+","+L;return o[_][L]},u.getModuleCount=function(){return a},u.make=function(){if(s<1){let _=1;for(;_<40;_++){let L=yf.getRSBlocks(_,r),y=xf();for(let T=0;T<c.length;T++){let V=c[T];y.put(V.getMode(),4),y.put(V.getLength(),cs.getLengthInBits(V.getMode(),_)),V.write(y)}let x=0;for(let T=0;T<L.length;T++)x+=L[T].dataCount;if(y.getLengthInBits()<=x*8)break}s=_}d(!1,f())},u.createTableTag=function(_,L){_=_||2,L=typeof L>"u"?_*4:L;let y="";y+='<table style="',y+=" border-width: 0px; border-style: none;",y+=" border-collapse: collapse;",y+=" padding: 0px; margin: "+L+"px;",y+='">',y+="<tbody>";for(let x=0;x<u.getModuleCount();x+=1){y+="<tr>";for(let T=0;T<u.getModuleCount();T+=1)y+='<td style="',y+=" border-width: 0px; border-style: none;",y+=" border-collapse: collapse;",y+=" padding: 0px; margin: 0px;",y+=" width: "+_+"px;",y+=" height: "+_+"px;",y+=" background-color: ",y+=u.isDark(x,T)?"#000000":"#ffffff",y+=";",y+='"/>';y+="</tr>"}return y+="</tbody>",y+="</table>",y},u.createSvgTag=function(_,L,y,x){let T={};typeof arguments[0]=="object"&&(T=arguments[0],_=T.cellSize,L=T.margin,y=T.alt,x=T.title),_=_||2,L=typeof L>"u"?_*4:L,y=typeof y=="string"?{text:y}:y||{},y.text=y.text||null,y.id=y.text?y.id||"qrcode-description":null,x=typeof x=="string"?{text:x}:x||{},x.text=x.text||null,x.id=x.text?x.id||"qrcode-title":null;let V=u.getModuleCount()*_+L*2,W,N,P,H,O="",G;for(G="l"+_+",0 0,"+_+" -"+_+",0 0,-"+_+"z ",O+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',O+=T.scalable?"":' width="'+V+'px" height="'+V+'px"',O+=' viewBox="0 0 '+V+" "+V+'" ',O+=' preserveAspectRatio="xMinYMin meet"',O+=x.text||y.text?' role="img" aria-labelledby="'+B([x.id,y.id].join(" ").trim())+'"':"",O+=">",O+=x.text?'<title id="'+B(x.id)+'">'+B(x.text)+"</title>":"",O+=y.text?'<description id="'+B(y.id)+'">'+B(y.text)+"</description>":"",O+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',O+='<path d="',P=0;P<u.getModuleCount();P+=1)for(H=P*_+L,W=0;W<u.getModuleCount();W+=1)u.isDark(P,W)&&(N=W*_+L,O+="M"+N+","+H+G);return O+='" stroke="transparent" fill="black"/>',O+="</svg>",O},u.createDataURL=function(_,L){_=_||2,L=typeof L>"u"?_*4:L;let y=u.getModuleCount()*_+L*2,x=L,T=y-L;return d1(y,y,function(V,W){if(x<=V&&V<T&&x<=W&&W<T){let N=Math.floor((V-x)/_),P=Math.floor((W-x)/_);return u.isDark(P,N)?0:1}else return 1})},u.createImgTag=function(_,L,y){_=_||2,L=typeof L>"u"?_*4:L;let x=u.getModuleCount()*_+L*2,T="";return T+="<img",T+=' src="',T+=u.createDataURL(_,L),T+='"',T+=' width="',T+=x,T+='"',T+=' height="',T+=x,T+='"',y&&(T+=' alt="',T+=B(y),T+='"'),T+="/>",T};let B=function(_){let L="";for(let y=0;y<_.length;y+=1){let x=_.charAt(y);switch(x){case"<":L+="&lt;";break;case">":L+="&gt;";break;case"&":L+="&amp;";break;case'"':L+="&quot;";break;default:L+=x;break}}return L},S=function(_){_=typeof _>"u"?2:_;let y=u.getModuleCount()*1+_*2,x=_,T=y-_,V,W,N,P,H,O={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},G={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},q="";for(V=0;V<y;V+=2){for(N=Math.floor((V-x)/1),P=Math.floor((V+1-x)/1),W=0;W<y;W+=1)H="\u2588",x<=W&&W<T&&x<=V&&V<T&&u.isDark(N,Math.floor((W-x)/1))&&(H=" "),x<=W&&W<T&&x<=V+1&&V+1<T&&u.isDark(P,Math.floor((W-x)/1))?H+=" ":H+="\u2588",q+=_<1&&V+1>=T?G[H]:O[H];q+=`
`}return y%2&&_>0?q.substring(0,q.length-y-1)+Array(y+1).join("\u2580"):q.substring(0,q.length-1)};return u.createASCII=function(_,L){if(_=_||1,_<2)return S(L);_-=1,L=typeof L>"u"?_*2:L;let y=u.getModuleCount()*_+L*2,x=L,T=y-L,V,W,N,P,H=Array(_+1).join("\u2588\u2588"),O=Array(_+1).join("  "),G="",q="";for(V=0;V<y;V+=1){for(N=Math.floor((V-x)/_),q="",W=0;W<y;W+=1)P=1,x<=W&&W<T&&x<=V&&V<T&&u.isDark(N,Math.floor((W-x)/_))&&(P=0),q+=P?H:O;for(N=0;N<_;N+=1)G+=q+`
`}return G.substring(0,G.length-1)},u.renderTo2dContext=function(_,L){L=L||2;let y=u.getModuleCount();for(let x=0;x<y;x++)for(let T=0;T<y;T++)_.fillStyle=u.isDark(x,T)?"black":"white",_.fillRect(T*L,x*L,L,L)},u};Ur.stringToBytes=function(n){let e=[];for(let t=0;t<n.length;t+=1){let i=n.charCodeAt(t);e.push(i&255)}return e};Ur.createStringToBytes=function(n,e){let t=(function(){let s=u1(n),r=function(){let l=s.read();if(l==-1)throw"eof";return l},o=0,a={};for(;;){let l=s.read();if(l==-1)break;let c=r(),u=r(),d=r(),h=String.fromCharCode(l<<8|c),f=u<<8|d;a[h]=f,o+=1}if(o!=e)throw o+" != "+e;return a})(),i=63;return function(s){let r=[];for(let o=0;o<s.length;o+=1){let a=s.charCodeAt(o);if(a<128)r.push(a);else{let l=t[s.charAt(o)];typeof l=="number"?(l&255)==l?r.push(l):(r.push(l>>>8),r.push(l&255)):r.push(i)}}return r}};var gn={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},wa={L:1,M:0,Q:3,H:2},ls={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},cs=(function(){let n=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,t=7973,i=21522,s={},r=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return s.getBCHTypeInfo=function(o){let a=o<<10;for(;r(a)-r(e)>=0;)a^=e<<r(a)-r(e);return(o<<10|a)^i},s.getBCHTypeNumber=function(o){let a=o<<12;for(;r(a)-r(t)>=0;)a^=t<<r(a)-r(t);return o<<12|a},s.getPatternPosition=function(o){return n[o-1]},s.getMaskFunction=function(o){switch(o){case ls.PATTERN000:return function(a,l){return(a+l)%2==0};case ls.PATTERN001:return function(a,l){return a%2==0};case ls.PATTERN010:return function(a,l){return l%3==0};case ls.PATTERN011:return function(a,l){return(a+l)%3==0};case ls.PATTERN100:return function(a,l){return(Math.floor(a/2)+Math.floor(l/3))%2==0};case ls.PATTERN101:return function(a,l){return a*l%2+a*l%3==0};case ls.PATTERN110:return function(a,l){return(a*l%2+a*l%3)%2==0};case ls.PATTERN111:return function(a,l){return(a*l%3+(a+l)%2)%2==0};default:throw"bad maskPattern:"+o}},s.getErrorCorrectPolynomial=function(o){let a=Ea([1],0);for(let l=0;l<o;l+=1)a=a.multiply(Ea([1,us.gexp(l)],0));return a},s.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case gn.MODE_NUMBER:return 10;case gn.MODE_ALPHA_NUM:return 9;case gn.MODE_8BIT_BYTE:return 8;case gn.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case gn.MODE_NUMBER:return 12;case gn.MODE_ALPHA_NUM:return 11;case gn.MODE_8BIT_BYTE:return 16;case gn.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case gn.MODE_NUMBER:return 14;case gn.MODE_ALPHA_NUM:return 13;case gn.MODE_8BIT_BYTE:return 16;case gn.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},s.getLostPoint=function(o){let a=o.getModuleCount(),l=0;for(let d=0;d<a;d+=1)for(let h=0;h<a;h+=1){let f=0,g=o.isDark(d,h);for(let v=-1;v<=1;v+=1)if(!(d+v<0||a<=d+v))for(let m=-1;m<=1;m+=1)h+m<0||a<=h+m||v==0&&m==0||g==o.isDark(d+v,h+m)&&(f+=1);f>5&&(l+=3+f-5)}for(let d=0;d<a-1;d+=1)for(let h=0;h<a-1;h+=1){let f=0;o.isDark(d,h)&&(f+=1),o.isDark(d+1,h)&&(f+=1),o.isDark(d,h+1)&&(f+=1),o.isDark(d+1,h+1)&&(f+=1),(f==0||f==4)&&(l+=3)}for(let d=0;d<a;d+=1)for(let h=0;h<a-6;h+=1)o.isDark(d,h)&&!o.isDark(d,h+1)&&o.isDark(d,h+2)&&o.isDark(d,h+3)&&o.isDark(d,h+4)&&!o.isDark(d,h+5)&&o.isDark(d,h+6)&&(l+=40);for(let d=0;d<a;d+=1)for(let h=0;h<a-6;h+=1)o.isDark(h,d)&&!o.isDark(h+1,d)&&o.isDark(h+2,d)&&o.isDark(h+3,d)&&o.isDark(h+4,d)&&!o.isDark(h+5,d)&&o.isDark(h+6,d)&&(l+=40);let c=0;for(let d=0;d<a;d+=1)for(let h=0;h<a;h+=1)o.isDark(h,d)&&(c+=1);let u=Math.abs(100*c/a/a-50)/5;return l+=u*10,l},s})(),us=(function(){let n=new Array(256),e=new Array(256);for(let i=0;i<8;i+=1)n[i]=1<<i;for(let i=8;i<256;i+=1)n[i]=n[i-4]^n[i-5]^n[i-6]^n[i-8];for(let i=0;i<255;i+=1)e[n[i]]=i;let t={};return t.glog=function(i){if(i<1)throw"glog("+i+")";return e[i]},t.gexp=function(i){for(;i<0;)i+=255;for(;i>=256;)i-=255;return n[i]},t})(),Ea=function(n,e){if(typeof n.length>"u")throw n.length+"/"+e;let t=(function(){let s=0;for(;s<n.length&&n[s]==0;)s+=1;let r=new Array(n.length-s+e);for(let o=0;o<n.length-s;o+=1)r[o]=n[o+s];return r})(),i={};return i.getAt=function(s){return t[s]},i.getLength=function(){return t.length},i.multiply=function(s){let r=new Array(i.getLength()+s.getLength()-1);for(let o=0;o<i.getLength();o+=1)for(let a=0;a<s.getLength();a+=1)r[o+a]^=us.gexp(us.glog(i.getAt(o))+us.glog(s.getAt(a)));return Ea(r,0)},i.mod=function(s){if(i.getLength()-s.getLength()<0)return i;let r=us.glog(i.getAt(0))-us.glog(s.getAt(0)),o=new Array(i.getLength());for(let a=0;a<i.getLength();a+=1)o[a]=i.getAt(a);for(let a=0;a<s.getLength();a+=1)o[a]^=us.gexp(us.glog(s.getAt(a))+r);return Ea(o,0).mod(s)},i},yf=(function(){let n=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(s,r){let o={};return o.totalCount=s,o.dataCount=r,o},t={},i=function(s,r){switch(r){case wa.L:return n[(s-1)*4+0];case wa.M:return n[(s-1)*4+1];case wa.Q:return n[(s-1)*4+2];case wa.H:return n[(s-1)*4+3];default:return}};return t.getRSBlocks=function(s,r){let o=i(s,r);if(typeof o>"u")throw"bad rs block @ typeNumber:"+s+"/errorCorrectionLevel:"+r;let a=o.length/3,l=[];for(let c=0;c<a;c+=1){let u=o[c*3+0],d=o[c*3+1],h=o[c*3+2];for(let f=0;f<u;f+=1)l.push(e(d,h))}return l},t})(),xf=function(){let n=[],e=0,t={};return t.getBuffer=function(){return n},t.getAt=function(i){let s=Math.floor(i/8);return(n[s]>>>7-i%8&1)==1},t.put=function(i,s){for(let r=0;r<s;r+=1)t.putBit((i>>>s-r-1&1)==1)},t.getLengthInBits=function(){return e},t.putBit=function(i){let s=Math.floor(e/8);n.length<=s&&n.push(0),i&&(n[s]|=128>>>e%8),e+=1},t},r1=function(n){let e=gn.MODE_NUMBER,t=n,i={};i.getMode=function(){return e},i.getLength=function(o){return t.length},i.write=function(o){let a=t,l=0;for(;l+2<a.length;)o.put(s(a.substring(l,l+3)),10),l+=3;l<a.length&&(a.length-l==1?o.put(s(a.substring(l,l+1)),4):a.length-l==2&&o.put(s(a.substring(l,l+2)),7))};let s=function(o){let a=0;for(let l=0;l<o.length;l+=1)a=a*10+r(o.charAt(l));return a},r=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return i},a1=function(n){let e=gn.MODE_ALPHA_NUM,t=n,i={};i.getMode=function(){return e},i.getLength=function(r){return t.length},i.write=function(r){let o=t,a=0;for(;a+1<o.length;)r.put(s(o.charAt(a))*45+s(o.charAt(a+1)),11),a+=2;a<o.length&&r.put(s(o.charAt(a)),6)};let s=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return i},o1=function(n){let e=gn.MODE_8BIT_BYTE,t=n,i=Ur.stringToBytes(n),s={};return s.getMode=function(){return e},s.getLength=function(r){return i.length},s.write=function(r){for(let o=0;o<i.length;o+=1)r.put(i[o],8)},s},l1=function(n){let e=gn.MODE_KANJI,t=n,i=Ur.stringToBytes;(function(o,a){let l=i(o);if(l.length!=2||(l[0]<<8|l[1])!=a)throw"sjis not supported."})("\u53CB",38726);let s=i(n),r={};return r.getMode=function(){return e},r.getLength=function(o){return~~(s.length/2)},r.write=function(o){let a=s,l=0;for(;l+1<a.length;){let c=(255&a[l])<<8|255&a[l+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(l+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),l+=2}if(l<a.length)throw"illegal char at "+(l+1)},r},_f=function(){let n=[],e={};return e.writeByte=function(t){n.push(t&255)},e.writeShort=function(t){e.writeByte(t),e.writeByte(t>>>8)},e.writeBytes=function(t,i,s){i=i||0,s=s||t.length;for(let r=0;r<s;r+=1)e.writeByte(t[r+i])},e.writeString=function(t){for(let i=0;i<t.length;i+=1)e.writeByte(t.charCodeAt(i))},e.toByteArray=function(){return n},e.toString=function(){let t="";t+="[";for(let i=0;i<n.length;i+=1)i>0&&(t+=","),t+=n[i];return t+="]",t},e},c1=function(){let n=0,e=0,t=0,i="",s={},r=function(a){i+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return s.writeByte=function(a){for(n=n<<8|a&255,e+=8,t+=1;e>=6;)r(n>>>e-6),e-=6},s.flush=function(){if(e>0&&(r(n<<6-e),n=0,e=0),t%3!=0){let a=3-t%3;for(let l=0;l<a;l+=1)i+="="}},s.toString=function(){return i},s},u1=function(n){let e=n,t=0,i=0,s=0,r={};r.read=function(){for(;s<8;){if(t>=e.length){if(s==0)return-1;throw"unexpected end of file./"+s}let l=e.charAt(t);if(t+=1,l=="=")return s=0,-1;if(l.match(/^\s$/))continue;i=i<<6|o(l.charCodeAt(0)),s+=6}let a=i>>>s-8&255;return s-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return r},h1=function(n,e){let t=n,i=e,s=new Array(n*e),r={};r.setPixel=function(c,u,d){s[u*t+c]=d},r.write=function(c){c.writeString("GIF87a"),c.writeShort(t),c.writeShort(i),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(t),c.writeShort(i),c.writeByte(0);let u=2,d=a(u);c.writeByte(u);let h=0;for(;d.length-h>255;)c.writeByte(255),c.writeBytes(d,h,255),h+=255;c.writeByte(d.length-h),c.writeBytes(d,h,d.length-h),c.writeByte(0),c.writeString(";")};let o=function(c){let u=c,d=0,h=0,f={};return f.write=function(g,v){if(g>>>v)throw"length over";for(;d+v>=8;)u.writeByte(255&(g<<d|h)),v-=8-d,g>>>=8-d,h=0,d=0;h=g<<d|h,d=d+v},f.flush=function(){d>0&&u.writeByte(h)},f},a=function(c){let u=1<<c,d=(1<<c)+1,h=c+1,f=l();for(let M=0;M<u;M+=1)f.add(String.fromCharCode(M));f.add(String.fromCharCode(u)),f.add(String.fromCharCode(d));let g=_f(),v=o(g);v.write(u,h);let m=0,p=String.fromCharCode(s[m]);for(m+=1;m<s.length;){let M=String.fromCharCode(s[m]);m+=1,f.contains(p+M)?p=p+M:(v.write(f.indexOf(p),h),f.size()<4095&&(f.size()==1<<h&&(h+=1),f.add(p+M)),p=M)}return v.write(f.indexOf(p),h),v.write(d,h),v.flush(),g.toByteArray()},l=function(){let c={},u=0,d={};return d.add=function(h){if(d.contains(h))throw"dup key:"+h;c[h]=u,u+=1},d.size=function(){return u},d.indexOf=function(h){return c[h]},d.contains=function(h){return typeof c[h]<"u"},d};return r},d1=function(n,e,t){let i=h1(n,e);for(let a=0;a<e;a+=1)for(let l=0;l<n;l+=1)i.setPixel(l,a,t(l,a));let s=_f();i.write(s);let r=c1(),o=s.toByteArray();for(let a=0;a<o.length;a+=1)r.writeByte(o[a]);return r.flush(),"data:image/gif;base64,"+r},rl=Ur,Yb=Ur.stringToBytes;var bf=pn==="tr",me=(n,e)=>bf?n:e,zs=n=>document.getElementById(n),Nn={g(n,e){try{let t=localStorage.getItem(n);return t==null?e:JSON.parse(t)}catch{return e}},s(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},bi=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Bs,Aa=null;function qn(n,e){Os();let t=document.createElement("div");return t.id="xp",t.className=e||"",t.innerHTML='<div class="xb"><button class="xx" aria-label="\u2715">\u2715</button>'+n+"</div>",document.body.appendChild(t),t.querySelector(".xx").onclick=Os,t.addEventListener("pointerdown",i=>{i.target===t&&Os()}),t.addEventListener("keydown",i=>i.stopPropagation()),t.querySelector(".xb")}function Os(){let n=zs("xp");n&&n.remove()}addEventListener("keydown",n=>{n.key==="Escape"&&Os()});var Mf=()=>Nn.g("qpass",[]);addEventListener("qulVisit",n=>{let e=n.detail||{};if(!e.key)return;Aa=e;let t=Mf();t.some(i=>i.k===e.key)||(t.push({k:e.key,g:e.gal||"",t:Date.now()}),Nn.s("qpass",t)),Nn.g("qsesli",!1)&&y1(e.key),wf()});var al=n=>{let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0},Fs=n=>{let e=Bs.planets.find(t=>t.key===n);return e?e.title:n};function f1(){let n=Mf(),e=Bs.planets.length,t=new Set(n.map(l=>l.g).filter(Boolean)),i=Bs.galaxies.filter(l=>!l.bg).length,s=qn("<h3>"+me("Evren Pasaportu","Universe Passport")+'</h3><p class="xs">'+n.length+" / "+e+me(" gezegen \xB7 "," planets \xB7 ")+t.size+" / "+i+me(" galaksi"," galaxies")+'</p><div class="xbar"><u style="width:'+Math.round(n.length/e*100)+'%"></u></div><div class="xst">'+(n.map(l=>"<span>"+bi(Fs(l.k))+"</span>").join("")||"<em>"+me("Hen\xFCz damga yok. Bir gezegenin kart\u0131n\u0131 a\xE7.","No stamps yet. Open a planet card.")+"</em>")+'</div><canvas id="xc" width="720" height="440"></canvas><button class="xgo">'+me("Tak\u0131my\u0131ld\u0131z\u0131m\u0131 kaydet","Save my constellation")+"</button>"),r=s.querySelector("#xc"),o=r.getContext("2d");o.fillStyle="#05060d",o.fillRect(0,0,720,440);for(let l=0;l<90;l++){let c=al("s"+l);o.fillStyle="rgba(255,255,255,"+(.15+c%50/100)+")",o.fillRect(c%720,(c>>10)%440,1,1)}let a=n.map(l=>{let c=al(l.k),u=al(l.k+"y");return[50+c%620,50+u%340,l.k]});o.strokeStyle="rgba(232,196,106,.55)",o.lineWidth=1.2,o.beginPath(),a.forEach((l,c)=>c?o.lineTo(l[0],l[1]):o.moveTo(l[0],l[1])),o.stroke(),a.forEach(l=>{let c=2.5+al(l[2]+"r")%30/10;o.fillStyle="#fff6d6",o.shadowColor="#e8c46a",o.shadowBlur=12,o.beginPath(),o.arc(l[0],l[1],c,0,7),o.fill()}),o.shadowBlur=0,o.fillStyle="#e8c46a",o.font="italic 22px Georgia",o.fillText(me("Benim Tak\u0131my\u0131ld\u0131z\u0131m","My Constellation"),24,38),o.fillStyle="#9a917a",o.font="13px Georgia",o.fillText(a.length+me(" durak \xB7 Qul Efsaneleri"," stops \xB7 Legends of the Qul"),24,422),s.querySelector(".xgo").onclick=()=>r.toBlob(l=>{let c=document.createElement("a");c.href=URL.createObjectURL(l),c.download="takimyildizim.png",c.click(),setTimeout(()=>URL.revokeObjectURL(c.href),4e3)})}var Sf=()=>Nn.g("qkaps",[]);function p1(){let n=Aa?Aa.key:"",e=qn("<h3>"+me("Zaman Kaps\xFCl\xFC","Time Capsule")+'</h3><p class="xs">'+(n?bi(Fs(n))+me(" i\xE7in bir not b\u0131rak; se\xE7ti\u011Fin zaman geldi\u011Finde sana hat\u0131rlat\u0131l\u0131r.",": leave a note; it will resurface at the chosen time."):me("\xD6nce bir gezegenin kart\u0131n\u0131 a\xE7, sonra not b\u0131rak.","Open a planet card first, then leave a note."))+'</p><textarea maxlength="400" rows="4"></textarea><select><option value="7">'+me("1 hafta sonra","in 1 week")+'</option><option value="30">'+me("1 ay sonra","in 1 month")+'</option><option value="365">'+me("1 y\u0131l sonra","in 1 year")+'</option></select><button class="xgo">'+me("Kaps\xFCle koy","Seal it")+"</button>");e.querySelector(".xgo").onclick=()=>{let t=e.querySelector("textarea").value.trim();if(!t||!n)return;let i=Sf();i.push({k:n,tx:t,at:Date.now()+ +e.querySelector("select").value*864e5,w:Date.now()}),Nn.s("qkaps",i),Os()}}function wf(){let n=Sf(),e=Date.now(),t=n.filter(s=>s.at<=e);if(!t.length)return;Nn.s("qkaps",n.filter(s=>s.at>e));let i=qn("<h3>"+me("Ge\xE7mi\u015Ften bir not","A note from the past")+"</h3>"+t.map(s=>'<p class="xq">\u201C'+bi(s.tx)+"\u201D<small>"+bi(Fs(s.k))+" \xB7 "+new Date(s.w).toLocaleDateString()+"</small></p>").join(""))}var Us=null;function m1(){if(Us){ou();return}qn("<h3>"+me("Gece Gezintisi","Night Drift")+'</h3><p class="xs">'+me("Galaksi gezintisi ba\u015Flar; ses ve \u0131\u015F\u0131k yava\u015F\xE7a k\u0131s\u0131l\u0131r, s\xFCre bitince kapan\u0131r. Ekrana dokununca iptal olur.","The galaxy drift starts; sound and light fade slowly and stop when time is up. Touch the screen to cancel.")+'</p><div class="xrow">'+[15,30,60].map(e=>'<button class="xgo" data-m="'+e+'">'+e+me(" dk"," min")+"</button>").join("")+"</div>").querySelectorAll("[data-m]").forEach(e=>e.onclick=()=>{Os(),g1(+e.dataset.m)})}function g1(n){let e=document.createElement("div");e.id="uyku",document.body.appendChild(e);let t=Date.now(),i=n*6e4,s=zs("drift");s&&!document.body.classList.contains("drift")&&s.click(),Us={dv:e,iv:setInterval(()=>{let r=Math.min(1,(Date.now()-t)/i);e.style.opacity=String(r*.93),r>=1&&(!window.__hush&&zs("hush")&&zs("hush").click(),ou(!0))},5e3)},setTimeout(()=>addEventListener("pointerdown",v1,{once:!0,capture:!0}),1200)}function v1(n){Us&&ou()}function ou(n){if(!Us)return;clearInterval(Us.iv);let e=Us.dv;if(Us=null,n){e.style.opacity="1",setTimeout(()=>e.remove(),6e5),e.onclick=()=>e.remove();let t=zs("drift");document.body.classList.contains("drift")&&t&&t.click()}else e.remove()}function y1(n){try{let e=window.speechSynthesis;if(!e)return;let t=Bs.planets.find(s=>s.key===n);if(!t)return;e.cancel();let i=new SpeechSynthesisUtterance(t.title+". "+String(t.desc||"").split(/(?<=[.!?])\s/).slice(0,2).join(" "));i.lang=bf?"tr-TR":pn||"en",i.rate=.95,e.speak(i)}catch{}}function x1(n){let e=!Nn.g("qsesli",!1);if(Nn.s("qsesli",e),n.textContent=e?me("\u{1F508} Sesli betimleme: a\xE7\u0131k","\u{1F508} Narration: on"):me("\u{1F508} Sesli betimleme: kapal\u0131","\u{1F508} Narration: off"),!e)try{speechSynthesis.cancel()}catch{}}function _1(){let n=qn("<h3>"+me("Ard\u0131l Bilgi Laboratuvar\u0131","Lab of Derived Knowledge")+'</h3><p class="xs">'+me("Ger\xE7ek fizik form\xFClleri; kurgudan ba\u011F\u0131ms\u0131z hesap tezg\xE2h\u0131.","Real physics formulas; a bench independent of the fiction.")+'</p><div class="xl"><b>'+me("Roche s\u0131n\u0131r\u0131","Roche limit")+"</b><label>"+me("Gezegen yo\u011Funlu\u011Fu (g/cm\xB3)","Planet density (g/cm\xB3)")+'<input id="l1" type="number" value="5.5" step="any"></label><label>'+me("Uydu yo\u011Funlu\u011Fu (g/cm\xB3)","Moon density (g/cm\xB3)")+'<input id="l2" type="number" value="3.3" step="any"></label><output id="lo1"></output></div><div class="xl"><b>'+me("Kara delik","Black hole")+"</b><label>"+me("K\xFCtle (G\xFCne\u015F k\xFCtlesi)","Mass (solar masses)")+'<input id="l3" type="number" value="10" step="any"></label><output id="lo2"></output></div><div class="xl"><b>'+me("Kepler y\xF6r\xFCnge periyodu","Kepler orbital period")+"</b><label>"+me("Yar\u0131 b\xFCy\xFCk eksen (AU)","Semi-major axis (AU)")+'<input id="l4" type="number" value="1" step="any"></label><label>'+me("Merkez k\xFCtle (G\xFCne\u015F k\xFCtlesi)","Central mass (solar)")+'<input id="l5" type="number" value="1" step="any"></label><output id="lo3"></output></div><div class="xl"><b>'+me("I\u015F\u0131k gecikmesi","Light delay")+"</b><label>"+me("Mesafe (\u0131\u015F\u0131k y\u0131l\u0131)","Distance (light-years)")+'<input id="l6" type="number" value="4.37" step="any"></label><output id="lo4"></output></div><div class="xl"><b>'+me("Ka\xE7\u0131\u015F h\u0131z\u0131","Escape velocity")+"</b><label>"+me("K\xFCtle (D\xFCnya k\xFCtlesi)","Mass (Earth masses)")+'<input id="l7" type="number" value="1" step="any"></label><label>'+me("Yar\u0131\xE7ap (D\xFCnya yar\u0131\xE7ap\u0131)","Radius (Earth radii)")+'<input id="l8" type="number" value="1" step="any"></label><output id="lo5"></output></div>'),e=r=>parseFloat(n.querySelector("#"+r).value),t=(r,o)=>(r>=1e6||r<.01&&r>0?r.toExponential(2):r.toLocaleString(void 0,{maximumFractionDigits:2}))+" "+o,i=(r,o)=>{n.querySelector("#"+r).textContent=o},s=()=>{i("lo1",me("Kat\u0131 uydu i\xE7in d \u2248 ","Rigid satellite d \u2248 ")+(1.26*Math.cbrt(e("l1")/e("l2"))).toFixed(2)+me(" gezegen yar\u0131\xE7ap\u0131 \xB7 ak\u0131\u015Fkan i\xE7in "," planet radii \xB7 fluid ")+(2.44*Math.cbrt(e("l1")/e("l2"))).toFixed(2));let r=e("l3"),o=2.953*r;i("lo2",me("Olay ufku yar\u0131\xE7ap\u0131 ","Horizon radius ")+t(o,"km")+" \xB7 "+me("foton k\xFCresi ","photon sphere ")+t(1.5*o,"km")+" \xB7 ISCO "+t(3*o,"km")),i("lo3",me("Periyot \u2248 ","Period \u2248 ")+t(Math.sqrt(Math.pow(e("l4"),3)/e("l5")),me("y\u0131l","years")));let a=e("l6");i("lo4",me("I\u015F\u0131k ","Light takes ")+t(a,me("y\u0131l s\xFCrer","years"))+" \xB7 "+me("bir mektup en az bu kadar yolda kal\u0131r","a letter needs at least that long")),i("lo5",t(11.186*Math.sqrt(e("l7")/e("l8")),"km/s"))};n.querySelectorAll("input").forEach(r=>r.oninput=s),s()}var ru=[["G\xFCne\u015F","Sun",695700],["Merk\xFCr","Mercury",2439.7],["Ven\xFCs","Venus",6051.8],["D\xFCnya","Earth",6371],["Ay","Moon",1737.4],["Mars","Mars",3389.5],["J\xFCpiter","Jupiter",69911],["Sat\xFCrn","Saturn",58232],["Uran\xFCs","Uranus",25362],["Nept\xFCn","Neptune",24622]];function b1(){let n=ru.map((s,r)=>'<option value="'+r+'">'+me(s[0],s[1])+"</option>").join(""),e=qn("<h3>"+me("K\u0131yas Tezg\xE2h\u0131","Comparison Bench")+'</h3><p class="xs">'+me("Ger\xE7ek yar\u0131\xE7aplarla, \xF6l\xE7ekli.","True radii, to scale.")+'</p><div class="xrow"><select id="c1">'+n+'</select><select id="c2">'+n+'</select></div><canvas id="cc" width="720" height="360"></canvas><output id="co"></output>');e.querySelector("#c1").value="6",e.querySelector("#c2").value="3";let t=s=>s>=100?Math.round(s).toLocaleString():s.toFixed(2),i=()=>{let s=ru[+e.querySelector("#c1").value],r=ru[+e.querySelector("#c2").value],o=e.querySelector("#cc"),a=o.getContext("2d");a.fillStyle="#05060d",a.fillRect(0,0,720,360);let l=Math.max(s[2],r[2]),c=150,u=s[2]/l*c,d=r[2]/l*c,h=(g,v,m,p)=>{a.fillStyle=m,a.beginPath(),a.arc(g,190,Math.max(v,1.2),0,7),a.fill(),a.fillStyle="#e8dcc0",a.font="14px Georgia",a.textAlign="center",a.fillText(p,g,350)};h(190,u,"#c9a86a",me(s[0],s[1])),h(540,d,"#6fa8dc",me(r[0],r[1]));let f=s[2]/r[2];e.querySelector("#co").textContent=me(s[0]+" yar\u0131\xE7ap\u0131 "+t(s[2])+" km; "+r[0]+" yar\u0131\xE7ap\u0131 "+t(r[2])+" km \u2192 ","Radius "+t(s[2])+" km vs "+t(r[2])+" km \u2192 ")+(f>=1?"\xD7"+f.toFixed(2):"\xD7"+(1/f).toFixed(2)+me(" k\xFC\xE7\xFCk"," smaller"))+" \xB7 "+me("hacim oran\u0131 ","volume ratio ")+t(Math.pow(f,3))};e.querySelectorAll("select").forEach(s=>s.onchange=i),i()}function M1(){let n=[["Medusa Bulutsusu (Abell 21)","Medusa Nebula (Abell 21)","\u0130kizler tak\u0131my\u0131ld\u0131z\u0131nda bir gezegenimsi bulutsu; \xF6lmekte olan bir y\u0131ld\u0131z\u0131n d\u0131\u015Far\u0131 att\u0131\u011F\u0131 gaz. Yakla\u015F\u0131k 1.500 \u0131\u015F\u0131k y\u0131l\u0131 uzakta.","A planetary nebula in Gemini: gas shed by a dying star, roughly 1,500 light-years away."],["Yenge\xE7 Bulutsusu","Crab Nebula","1054 y\u0131l\u0131nda g\xF6zlenen bir s\xFCpernovan\u0131n kal\u0131nt\u0131s\u0131; merkezinde saniyede yakla\u015F\u0131k 30 kez d\xF6nen bir pulsar var.","Remnant of the supernova seen in 1054; a pulsar at its centre spins about 30 times a second."],["Yarat\u0131l\u0131\u015F S\xFCtunlar\u0131","Pillars of Creation","Kartal Bulutsusu i\xE7indeki, yeni y\u0131ld\u0131zlar\u0131n do\u011Fdu\u011Fu so\u011Fuk gaz ve toz s\xFCtunlar\u0131 (yakla\u015F\u0131k 6.500 \u0131\u015F\u0131k y\u0131l\u0131).","Columns of cold gas and dust in the Eagle Nebula where new stars form (about 6,500 light-years)."],["S\u0131cak J\xFCpiterler","Hot Jupiters","51 Pegasi b (1995) gibi, y\u0131ld\u0131z\u0131na birka\xE7 g\xFCnde dolanan dev gaz gezegenler ger\xE7ekten ke\u015Ffedildi.","Giant gas planets orbiting their star in days, like 51 Pegasi b (1995), have really been found."],["\xC7ift y\u0131ld\u0131z\u0131 dolanan gezegenler","Circumbinary planets","Kepler-16b gibi, iki g\xFCne\u015Fin etraf\u0131nda dolanan gezegenler g\xF6zlemlendi.","Planets orbiting two suns, such as Kepler-16b, have been observed."],["Ba\u015F\u0131bo\u015F gezegenler","Rogue planets","Hi\xE7bir y\u0131ld\u0131za ba\u011Fl\u0131 olmayan gezegen adaylar\u0131 k\xFCtle\xE7ekimsel mikromercekle saptan\u0131yor.","Planet candidates bound to no star are detected through gravitational microlensing."],["Kara delik g\xF6lgesi","Black hole shadow","M87* (2019) ve Samanyolu'nun merkezi Sgr A* (2022) Olay Ufku Teleskobu ile g\xF6r\xFCnt\xFClendi.","M87* (2019) and the Milky Way's Sgr A* (2022) were imaged by the Event Horizon Telescope."],["Dev halka sistemleri","Giant ring systems","J1407b adl\u0131 cismin halka sisteminin Sat\xFCrn'\xFCnkinden \xE7ok daha b\xFCy\xFCk oldu\u011Fu tahmin ediliyor.","The ring system of J1407b is estimated to be far larger than Saturn's."]];qn("<h3>"+me("Ger\xE7ekte Var","It Really Exists")+'</h3><p class="xs">'+me("G\xF6rsel \xF6\u011Felerin ger\xE7ek evrendeki kar\u015F\u0131l\u0131klar\u0131.","Real-universe counterparts of the visuals.")+"</p>"+n.map(e=>'<div class="xl"><b>'+me(e[0],e[1])+"</b><span>"+me(e[2],e[3])+"</span></div>").join(""))}function S1(){let n=[[1,"7.6\u20138.0","Samanyolu g\xF6lge d\xFC\u015F\xFCr\xFCr; zodyak \u0131\u015F\u0131\u011F\u0131 \xE7ok belirgin.","The Milky Way casts shadows; zodiacal light is vivid."],[2,"7.1\u20137.5","Samanyolu ayr\u0131nt\u0131l\u0131; g\xF6ky\xFCz\xFC \xE7ok karanl\u0131k.","Detailed Milky Way; very dark sky."],[3,"6.6\u20137.0","K\u0131rsal g\xF6ky\xFCz\xFC; ufukta hafif \u0131\u015F\u0131k kirlili\u011Fi.","Rural sky; faint light pollution at the horizon."],[4,"6.2\u20136.5","K\u0131rsal\u2013banliy\xF6; Samanyolu h\xE2l\xE2 rahat g\xF6r\xFCl\xFCr.","Rural/suburban; the Milky Way is still easy."],[5,"5.6\u20136.1","Banliy\xF6; Samanyolu zay\u0131f.","Suburban; the Milky Way is faint."],[6,"5.1\u20135.5","Parlak banliy\xF6; Samanyolu ancak tepede se\xE7ilir.","Bright suburban; the Milky Way barely at the zenith."],[7,"4.6\u20135.0","Banliy\xF6\u2013kent ge\xE7i\u015Fi; Samanyolu g\xF6r\xFCnmez.","Suburban/urban; no Milky Way."],[8,"4.1\u20134.5","Kent g\xF6\u011F\xFC; yaln\u0131zca parlak y\u0131ld\u0131zlar.","City sky; only bright stars."],[9,"\u22484.0","Kent merkezi; birka\xE7 y\xFCz y\u0131ld\u0131zdan az\u0131.","Inner city; only a few hundred stars at most."]],e=qn("<h3>"+me("Senin G\xF6\u011F\xFCn","Your Sky")+'</h3><p class="xs">'+me("Bortle \xF6l\xE7e\u011Fi: bulundu\u011Fun yerin \u0131\u015F\u0131k kirlili\u011Fine g\xF6re g\xF6ky\xFCz\xFCn\xFCn nas\u0131l g\xF6r\xFCnd\xFC\u011F\xFC.","Bortle scale: how the sky looks under your local light pollution.")+'</p><input type="range" id="bs" min="1" max="9" value="5"><canvas id="bc" width="720" height="300"></canvas><output id="bo"></output>'),t=()=>{let i=+e.querySelector("#bs").value,s=n[i-1],r=[7.8,7.3,6.8,6.35,5.85,5.3,4.8,4.3,4][i-1],o=e.querySelector("#bc"),a=o.getContext("2d");a.fillStyle="rgb("+(5+i*7)+","+(6+i*6)+","+(14+i*5)+")",a.fillRect(0,0,720,300);let l=12345,c=()=>(l=l*1664525+1013904223>>>0)/4294967296;for(let u=0;u<2400;u++){let d=c()*720,h=c()*300,f=7.8-Math.pow(c(),.28)*7.2;if(f>r)continue;a.fillStyle="rgba(255,255,255,"+Math.min(1,.25+(r-f)/5)+")";let g=f<2?1.8:f<4?1.1:.7;a.beginPath(),a.arc(d,h,g,0,7),a.fill()}if(i<=5){let u=a.createLinearGradient(0,300,720,0);u.addColorStop(.3,"rgba(200,190,170,0)"),u.addColorStop(.5,"rgba(200,190,170,"+(.28-i*.04)+")"),u.addColorStop(.7,"rgba(200,190,170,0)"),a.fillStyle=u,a.fillRect(0,0,720,300)}e.querySelector("#bo").textContent="Bortle "+i+" \xB7 "+me("en s\xF6n\xFCk y\u0131ld\u0131z \u2248 ","limiting magnitude \u2248 ")+s[1]+" \xB7 "+me(s[2],s[3])};e.querySelector("#bs").oninput=t,t()}function w1(){let n=[["Neden Ay hep ayn\u0131 y\xFCz\xFCn\xFC g\xF6sterir?","Why does the Moon always show the same face?","Gelgit kilitlenmesi: Ay'\u0131n kendi ekseni etraf\u0131nda d\xF6nme s\xFCresi, D\xFCnya \xE7evresinde dolanma s\xFCresine e\u015Fitlendi.","Tidal locking: the Moon's rotation period has become equal to its orbital period."],["Neden b\xFCy\xFCk g\xF6kcisimleri yuvarlakt\u0131r?","Why are large bodies round?","Yeterince b\xFCy\xFCk k\xFCtlede kendi \xE7ekimi, kayay\u0131 k\xFCreye yak\u0131n bir bi\xE7ime \xE7eker; k\xFC\xE7\xFCk asteroitler bu e\u015Fi\u011Fin alt\u0131nda kal\u0131r.","Above a certain mass, self-gravity pulls rock toward a sphere; small asteroids fall below that threshold."],["Neden uzay sessizdir?","Why is space silent?","Ses bir ortamda titre\u015Fim olarak yay\u0131l\u0131r; uzay neredeyse bo\u015Fluk oldu\u011Fu i\xE7in ta\u015F\u0131yacak ortam yoktur.","Sound travels as vibrations in a medium; space is nearly a vacuum."],["Neden Sat\xFCrn'\xFCn halkalar\u0131 var?","Why does Saturn have rings?","Roche s\u0131n\u0131r\u0131 yak\u0131n\u0131nda buz par\xE7ac\u0131klar\u0131 bir araya gelip uyduya d\xF6n\xFC\u015Femiyor. K\xF6kenleri h\xE2l\xE2 tart\u0131\u015F\u0131l\u0131yor.","Near the Roche limit, ice particles cannot clump into a moon. Their origin is still debated."],["Neden g\xF6ky\xFCz\xFC g\xFCnd\xFCz mavidir?","Why is the sky blue by day?","Atmosferdeki molek\xFCller k\u0131sa dalga boylu mavi \u0131\u015F\u0131\u011F\u0131 daha \xE7ok sa\xE7ar (Rayleigh sa\xE7\u0131lmas\u0131).","Air molecules scatter short-wavelength blue light more strongly (Rayleigh scattering)."],["Neden Ven\xFCs Merk\xFCr'den s\u0131cakt\u0131r?","Why is Venus hotter than Mercury?","Yo\u011Fun karbondioksit atmosferinin sera etkisi y\xFCzeyi yakla\u015F\u0131k 460 \xB0C'ye \xE7\u0131kar\u0131r.","A thick carbon-dioxide atmosphere creates a greenhouse effect of about 460 \xB0C."],["Neden y\u0131ld\u0131zlar g\xF6z k\u0131rpar?","Why do stars twinkle?","Atmosferdeki t\xFCrb\xFClans noktasal y\u0131ld\u0131z \u0131\u015F\u0131\u011F\u0131n\u0131 s\xFCrekli sapt\u0131r\u0131r; gezegenler k\xFC\xE7\xFCk disk oldu\u011Fu i\xE7in daha az titrer.","Atmospheric turbulence keeps bending pinpoint starlight; planets are tiny discs and twinkle less."]];qn("<h3>"+me("Neden?","Why?")+'</h3><p class="xs">'+me("Merakl\u0131 sorular\u0131n k\u0131sa, ger\xE7ek cevaplar\u0131.","Short, real answers to curious questions.")+"</p>"+n.map(e=>'<details class="xl"><summary>'+me(e[0],e[1])+"</summary><p>"+me(e[2],e[3])+"</p></details>").join(""))}function E1(){let n=qn("<h3>"+me("Bilim Raf\u0131","Science Shelf")+'</h3><div class="xrow"><button class="xgo" data-f="c">'+me("\u2696 K\u0131yas Tezg\xE2h\u0131","\u2696 Comparison Bench")+'</button><button class="xgo" data-f="r">'+me("\u2728 Ger\xE7ekte Var","\u2728 It Really Exists")+'</button><button class="xgo" data-f="b">'+me("\u{1F30C} Senin G\xF6\u011F\xFCn","\u{1F30C} Your Sky")+'</button><button class="xgo" data-f="w">'+me("\u2753 Neden?","\u2753 Why?")+"</button></div>"),e={c:b1,r:M1,b:S1,w:w1};n.querySelectorAll("[data-f]").forEach(t=>t.onclick=()=>e[t.dataset.f]())}var Ta=null,Ns=null;function Ef(n){if(au(),!n.length||!Ta)return;let e=0,t=document.createElement("button");t.id="rstop",t.textContent=me("\u25A0 Rotay\u0131 durdur","\u25A0 Stop route"),t.onclick=au,document.body.appendChild(t);let i=()=>{if(Ns){if(e>=n.length){au();return}try{Ta.flyToPlanet(n[e])}catch{}e++,Ns.tm=setTimeout(i,11e3)}};Ns={tm:0,bt:t},i()}function au(){Ns&&(clearTimeout(Ns.tm),Ns.bt.remove(),Ns=null)}function T1(){let n=[],e=qn("<h3>"+me("Rota Planlay\u0131c\u0131","Route Planner")+'</h3><p class="xs">'+me("Duraklar\u0131n\u0131 s\u0131rayla se\xE7; rota otomatik gezilir, ba\u011Flant\u0131 ya da QR ile payla\u015F\u0131l\u0131r.","Pick stops in order; the route plays automatically and can be shared by link or QR.")+'</p><input id="rq" placeholder="'+me("ara\u2026","search\u2026")+'"><div class="rl"></div><div class="xs" id="rs"></div><div class="xrow"><button class="xgo" id="rgo">'+me("\u25B6 Ba\u015Flat","\u25B6 Start")+'</button><button class="xgo" id="rsh">'+me("\u{1F517} Payla\u015F (QR)","\u{1F517} Share (QR)")+'</button><button class="xgo" id="rcl">'+me("Temizle","Clear")+'</button></div><div id="rqr"></div>'),t=e.querySelector(".rl"),i=()=>{e.querySelector("#rs").textContent=n.length?n.map(r=>Fs(r)).join(" \u2192 "):"",t.querySelectorAll("button").forEach(r=>r.classList.toggle("on",n.includes(r.dataset.k)))},s=r=>{t.innerHTML=Bs.planets.filter(o=>!r||(o.title||"").toLowerCase().includes(r)).map(o=>'<button type="button" data-k="'+bi(o.key)+'">'+bi(o.title)+"</button>").join(""),t.querySelectorAll("button").forEach(o=>o.onclick=()=>{let a=n.indexOf(o.dataset.k);a>=0?n.splice(a,1):n.length<20&&n.push(o.dataset.k),i()}),i()};s(""),e.querySelector("#rq").oninput=r=>s(r.target.value.toLowerCase()),e.querySelector("#rcl").onclick=()=>{n.length=0,i(),e.querySelector("#rqr").innerHTML=""},e.querySelector("#rgo").onclick=()=>{if(n.length){let r=n.slice();Os(),Ef(r)}},e.querySelector("#rsh").onclick=()=>{if(!n.length)return;let r=location.origin+location.pathname+"?rota="+n.join(","),o=e.querySelector("#rqr");o.innerHTML='<input readonly value="'+bi(r)+'" onclick="this.select()">';let a=rl(0,"M");a.addData(r),a.make();let l=document.createElement("img");l.src=a.createDataURL(6),l.style.cssText="display:block;margin:8px auto;background:#fff;padding:8px;border-radius:6px;width:min(300px,80%)",o.appendChild(l)}}function A1(){let n=Nn.g("qnot",{}),e=Aa?Aa.key:"",t=qn("<h3>"+me("Notlar\u0131m","My Notes")+"</h3>"+(e?'<p class="xs">'+bi(Fs(e))+'</p><textarea rows="4" maxlength="1200"></textarea><button class="xgo" id="ns">'+me("Kaydet","Save")+"</button>":'<p class="xs">'+me("Not almak i\xE7in \xF6nce bir gezegenin kart\u0131n\u0131 a\xE7.","Open a planet card first to take notes.")+"</p>")+'<div id="nl"></div><button class="xgo" id="nx">'+me("Hepsini .txt indir","Download all as .txt")+"</button>"),i=t.querySelector("textarea");i&&(i.value=n[e]||"");let s=()=>{t.querySelector("#nl").innerHTML=Object.keys(n).filter(r=>n[r]).map(r=>'<div class="xl"><b>'+bi(Fs(r))+"</b><span>"+bi(n[r])+"</span></div>").join("")};s(),i&&(t.querySelector("#ns").onclick=()=>{n[e]=i.value.trim(),n[e]||delete n[e],Nn.s("qnot",n),s()}),t.querySelector("#nx").onclick=()=>{let r=Object.keys(n).map(a=>Fs(a)+`
`+n[a]).join(`

`),o=document.createElement("a");o.href=URL.createObjectURL(new Blob([r],{type:"text/plain;charset=utf-8"})),o.download="atlas-notlarim.txt",o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),4e3)}}function R1(){document.body.classList.add("duvar");let n=zs("drift");n&&!document.body.classList.contains("drift")&&n.click();let e=new MutationObserver(()=>{document.body.classList.contains("drift")||(document.body.classList.remove("duvar"),e.disconnect())});e.observe(document.body,{attributes:!0,attributeFilter:["class"]})}var Nr=null;function C1(n){if(Nr){Nr.stop();return}let e=document.querySelector("#gl canvas");if(!e||!e.captureStream||!window.MediaRecorder){n.textContent=me("\u23FA Bu taray\u0131c\u0131 desteklemiyor","\u23FA Not supported");return}let t=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(o=>MediaRecorder.isTypeSupported(o))||"",i=[],s=new MediaRecorder(e.captureStream(30),t?{mimeType:t,videoBitsPerSecond:5e6}:{}),r=setTimeout(()=>{Nr&&Nr.stop()},3e5);s.ondataavailable=o=>{o.data.size&&i.push(o.data)},s.onstop=()=>{clearTimeout(r),Nr=null,n.textContent=me("\u23FA Tur kayd\u0131","\u23FA Record tour");let o=document.createElement("a");o.href=URL.createObjectURL(new Blob(i,{type:"video/webm"})),o.download="qul-gezinti.webm",o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),8e3)},s.start(1e3),Nr=s,n.textContent=me("\u23F9 Kayd\u0131 bitir (en \xE7ok 5 dk)","\u23F9 Stop recording (max 5 min)")}function P1(n){let e=document.body.classList.toggle("sinif");Nn.s("qsinif",e),n.textContent=e?me("\u{1F3EB} S\u0131n\u0131f modu: a\xE7\u0131k","\u{1F3EB} Classroom: on"):me("\u{1F3EB} S\u0131n\u0131f modu: kapal\u0131","\u{1F3EB} Classroom: off")}var ol=null;function L1(n){if(ol){ol.stop(),ol=null,n.textContent=me("\u{1F4FB} Evren Radyosu","\u{1F4FB} Universe Radio");return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e,i=t.createGain();i.gain.value=0,i.gain.linearRampToValueAtTime(.5,t.currentTime+4);let s=t.createDelay(1.5);s.delayTime.value=.9;let r=t.createGain();r.gain.value=.55,s.connect(r),r.connect(s);let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=1800,i.connect(o),o.connect(t.destination),i.connect(s),s.connect(o);let a=55*Math.pow(2,Math.floor(Math.random()*5)/12),l=[0,2,4,7,9,12,14,16],c=(d,h,f)=>{let g=t.createOscillator(),v=t.createGain();g.type="sine",g.frequency.value=d,v.gain.setValueAtTime(0,t.currentTime),v.gain.linearRampToValueAtTime(f,t.currentTime+h*.35),v.gain.linearRampToValueAtTime(0,t.currentTime+h),g.connect(v),v.connect(i),g.start(),g.stop(t.currentTime+h+.1)};c(a,40,.12),c(a*1.5,40,.07);let u=setInterval(()=>{let d=a*2*Math.pow(2,l[Math.floor(Math.random()*l.length)]/12);c(d,5+Math.random()*4,.06+Math.random()*.05),Math.random()<.12&&c(a*Math.pow(2,l[Math.floor(Math.random()*4)]/12),22,.07)},2600);ol={stop(){clearInterval(u),i.gain.cancelScheduledValues(t.currentTime),i.gain.linearRampToValueAtTime(0,t.currentTime+2),setTimeout(()=>t.close(),2500)}},n.textContent=me("\u{1F4FB} Radyoyu kapat","\u{1F4FB} Radio off")}function Tf(n,e){Bs=n,Ta=e;let t=zs("tools");if(!t)return;let i=(a,l,c)=>{let u=document.createElement("button");return u.id=a,u.type="button",u.textContent=l,u.onclick=()=>c(u),t.appendChild(u),u};i("pass0",me("\u{1F6C2} Pasaport","\u{1F6C2} Passport"),f1),i("kaps0",me("\u23F3 Zaman Kaps\xFCl\xFC","\u23F3 Time Capsule"),p1),i("uyku0",me("\u{1F319} Gece Gezintisi","\u{1F319} Night Drift"),m1),i("lab0",me("\u{1F52C} Ard\u0131l Bilgi Lab.","\u{1F52C} Derived Lab"),_1);let s=i("sesli0","",x1);s.textContent=Nn.g("qsesli",!1)?me("\u{1F508} Sesli betimleme: a\xE7\u0131k","\u{1F508} Narration: on"):me("\u{1F508} Sesli betimleme: kapal\u0131","\u{1F508} Narration: off"),i("shelf0",me("\u{1F9EA} Bilim Raf\u0131","\u{1F9EA} Science Shelf"),E1),i("plan0",me("\u{1F9ED} Rota Planlay\u0131c\u0131","\u{1F9ED} Route Planner"),T1),i("not0",me("\u{1F4D3} Notlar\u0131m","\u{1F4D3} My Notes"),A1),i("duvar0",me("\u{1F5BC} Duvar ka\u011F\u0131d\u0131 modu","\u{1F5BC} Wallpaper mode"),R1),i("rec0",me("\u23FA Tur kayd\u0131","\u23FA Record tour"),C1);let r=i("sinif0","",P1),o=Nn.g("qsinif",!1);o&&document.body.classList.add("sinif"),r.textContent=o?me("\u{1F3EB} S\u0131n\u0131f modu: a\xE7\u0131k","\u{1F3EB} Classroom: on"):me("\u{1F3EB} S\u0131n\u0131f modu: kapal\u0131","\u{1F3EB} Classroom: off"),i("radyo0",me("\u{1F4FB} Evren Radyosu","\u{1F4FB} Universe Radio"),L1);try{let a=new URLSearchParams(location.search).get("rota");if(a&&Ta){let l=a.split(",").filter(c=>Bs.planets.some(u=>u.key===c));l.length&&Ta.whenIdle().then(()=>setTimeout(()=>Ef(l),1500))}}catch{}setTimeout(wf,4e3)}var it=pn==="en";var k1="img/sol/",Bf=n=>80*Math.pow(n,.62),Af=14,I1=23.4393*Math.PI/180,ds=[{id:"sun",tr:"G\xFCne\u015F",en:"Sun",r:18,tex:null,blurb:{tr:"G2V t\xFCr\xFC bir y\u0131ld\u0131z. Sistemdeki k\xFCtlenin %99,86's\u0131 onda. Burada boyutu ger\xE7ek orandan (109 D\xFCnya yar\u0131\xE7ap\u0131) k\xFC\xE7\xFClt\xFClm\xFC\u015Ft\xFCr.",en:"A G2V star holding 99.86% of the system's mass. Shown smaller than its true size (109 Earth radii)."},facts:[["diam","1.392.700 km"],["surf",pn==="en"?"about 5,500 \xB0C":"yakla\u015F\u0131k 5.500 \xB0C"],["age",pn==="en"?"4.6 billion years":"4,6 milyar y\u0131l"]]},{id:"mercury",tr:"Merk\xFCr",en:"Mercury",r:.383,a:.387,L0:252.2503,n:4.092339,tilt:.03,per:1407.6,tex:"mercury",soft:.08,atm:0,blurb:{tr:"G\xFCne\u015F'e en yak\u0131n, en k\xFC\xE7\xFCk gezegen. Atmosferi yok; y\xFCzeyi kraterlerle kapl\u0131. (Doku: Ay haritas\u0131ndan t\xFCretilmi\u015F yakla\u015F\u0131k g\xF6r\xFCn\xFCm.)",en:"The closest and smallest planet. No real atmosphere; cratered surface. (Texture: approximated from the Moon map.)"},d:{diam:4879,au:.387,mkm:57.9,year:87.97,moons:0,tmin:-173,tmax:427,g:3.7}},{id:"venus",tr:"Ven\xFCs",en:"Venus",r:.949,a:.723,L0:181.9791,n:1.602131,tilt:177.4,per:-5832.5,tex:null,mode:1,soft:.4,atm:.5,atmc:[1,.85,.55],blurb:{tr:"Yo\u011Fun karbondioksit atmosferi ve k\xFCk\xFCrt asidi bulutlar\u0131yla kapl\u0131; y\xFCzeyi kur\u015Funu eritecek kadar s\u0131cak. Ters y\xF6nde d\xF6ner.",en:"Wrapped in a dense CO\u2082 atmosphere and sulfuric-acid clouds; hot enough to melt lead. Spins backwards."},d:{diam:12104,au:.723,mkm:108.2,year:224.7,moons:0,tmean:464,g:8.87}},{id:"earth",tr:"D\xFCnya",en:"Earth",r:1,a:1,L0:100.4646,n:.985609,tilt:23.44,per:23.934,tex:"earth",mode:9,moons:1,blurb:{tr:"Bilinen tek ya\u015Fam ta\u015F\u0131yan d\xFCnya. Y\xFCzeyinin yakla\u015F\u0131k %71'i okyanus. Gece-g\xFCnd\xFCz \xE7izgisi \u015Fu anki ger\xE7ek saate g\xF6redir.",en:"The only world known to host life. About 71% of its surface is ocean. The day/night line follows the real current time."},d:{diam:12742,au:1,mkm:149.6,year:365.26,moons:1,tmean:15,g:9.81}},{id:"moon",tr:"Ay",en:"Moon",r:.2727,tex:"moon",soft:.07,atm:0,blurb:{tr:"D\xFCnya'n\u0131n tek do\u011Fal uydusu. Hep ayn\u0131 y\xFCz\xFCn\xFC D\xFCnya'ya \xE7evirir; \u015Fu anki evresi ger\xE7ektir. G\xF6rsel y\xF6r\xFCnge yar\u0131\xE7ap\u0131 yakla\u015F\u0131k 4 kat s\u0131k\u0131\u015Ft\u0131r\u0131lm\u0131\u015Ft\u0131r.",en:"Earth's only natural satellite. Always shows the same face; its current phase is real. Orbit radius is compressed about 4\xD7."},d:{diam:3474,dist:384400,year:27.32,tmin:-173,tmax:127,g:1.62,per:655.7}},{id:"mars",tr:"Mars",en:"Mars",r:.532,a:1.524,L0:355.4533,n:.524033,tilt:25.2,per:24.623,tex:"mars",soft:.25,atm:.18,atmc:[.9,.6,.4],blurb:{tr:"Demir oksit tozundan k\u0131z\u0131l g\xF6r\xFCn\xFCr. \u0130nce atmosferi ve kutup buzullar\u0131 vard\u0131r; Olympus Mons G\xFCne\u015F Sistemi'nin en y\xFCksek volkan\u0131d\u0131r.",en:"Red from iron-oxide dust. Thin atmosphere and polar caps; Olympus Mons is the tallest volcano in the Solar System."},d:{diam:6779,au:1.524,mkm:227.9,year:686.98,moons:2,tmean:-63,g:3.71}},{id:"jupiter",tr:"J\xFCpiter",en:"Jupiter",r:10.97,a:5.203,L0:34.3964,n:.083091,tilt:3.1,per:9.925,tex:"jupiter",soft:.4,atm:.25,atmc:[.9,.8,.6],blurb:{tr:"En b\xFCy\xFCk gezegen; k\xFCtlesi di\u011Fer t\xFCm gezegenlerin toplam\u0131n\u0131n iki kat\u0131ndan fazla. B\xFCy\xFCk K\u0131rm\u0131z\u0131 Leke y\xFCzy\u0131llard\u0131r s\xFCren bir f\u0131rt\u0131nad\u0131r.",en:"The largest planet, more than twice the mass of all others combined. The Great Red Spot is a storm lasting centuries."},d:{diam:139820,au:5.203,mkm:778.5,year:4332.6,moons:"90+",tmean:-108,tnote:1,g:24.79}},{id:"saturn",tr:"Sat\xFCrn",en:"Saturn",r:9.14,a:9.537,L0:49.9542,n:.033471,tilt:26.7,per:10.656,tex:"saturn",soft:.4,atm:.2,atmc:[.95,.85,.6],ring:!0,blurb:{tr:"Halkalar\u0131 buz ve kaya par\xE7ac\u0131klar\u0131ndan olu\u015Fur; \xE7o\u011Fu birka\xE7 metre kal\u0131nl\u0131\u011F\u0131nda bir d\xFCzlemde toplanm\u0131\u015Ft\u0131r. Yo\u011Funlu\u011Fu sudan d\xFC\u015F\xFCkt\xFCr.",en:"Its rings are ice and rock particles confined to a plane only meters thick. Less dense than water."},d:{diam:116460,au:9.537,mkm:1434,year:10759,moons:"140+",tmean:-139,tnote:1,g:10.44}},{id:"uranus",tr:"Uran\xFCs",en:"Uranus",r:3.98,a:19.19,L0:313.2381,n:.011732,tilt:97.8,per:-17.24,tex:null,mode:2,soft:.4,atm:.3,atmc:[.6,.9,.95],blurb:{tr:"Yan yatm\u0131\u015F h\xE2lde (eksen e\u011Fikli\u011Fi 98\xB0) G\xFCne\u015F'in \xE7evresinde yuvarlan\u0131r. G\xF6r\xFCn\xFCr \u0131\u015F\u0131kta neredeyse \xF6zelliksiz, soluk camg\xF6be\u011Fi bir buz devidir.",en:"Rolls around the Sun on its side (98\xB0 tilt). Nearly featureless pale cyan ice giant in visible light."},d:{diam:50724,au:19.19,mkm:2871,year:30687,moons:28,tmean:-195,tnote:1,g:8.69}},{id:"neptune",tr:"Nept\xFCn",en:"Neptune",r:3.86,a:30.07,L0:304.88,n:.005982,tilt:28.3,per:16.11,tex:"neptune",soft:.4,atm:.3,atmc:[.5,.7,1],blurb:{tr:"En uzak gezegen. G\xFCne\u015F sistemindeki en h\u0131zl\u0131 r\xFCzg\xE2rlar (saatte 2.000 km'ye yak\u0131n) buradad\u0131r. G\xFCne\u015F'in \xE7evresinde bir turu yakla\u015F\u0131k 165 y\u0131lda tamamlar.",en:"The farthest planet, with the fastest winds in the Solar System (nearly 2,000 km/h). One orbit takes about 165 years."},d:{diam:49244,au:30.07,mkm:4495,year:60190,moons:16,tmean:-201,tnote:1,g:11.15}}],Fr={};ds.forEach(n=>Fr[n.id]=n);var ii=it?{diam:"Diameter",surf:"Surface",age:"Age",au:"Distance from Sun",year:"Orbital period",day:"Rotation",moons:"Moons",temp:"Temperature",g:"Surface gravity",dist:"Distance from Earth",ret:"retrograde"}:{diam:"\xC7ap",surf:"Y\xFCzey",age:"Ya\u015F",au:"G\xFCne\u015F'e uzakl\u0131k",year:"Y\xF6r\xFCnge s\xFCresi",day:"D\xF6n\xFC\u015F",moons:"Uydu",temp:"S\u0131cakl\u0131k",g:"Y\xFCzey \xE7ekimi",dist:"D\xFCnya'ya uzakl\u0131k",ret:"ters y\xF6nde"},Ra=n=>Math.round(n).toLocaleString(it?"en-US":"tr-TR"),Br=(n,e)=>n.toLocaleString(it?"en-US":"tr-TR",{maximumFractionDigits:e});function D1(n){return n>700?Br(n/365.25,1)+(it?" years":" y\u0131l"):Br(n,1)+(it?" days":" g\xFCn")}function U1(n){let e=Math.abs(n),t=Math.floor(e),i=Math.round((e-t)*60);return e>=48?Br(e/24,1)+(it?" days":" g\xFCn")+(n<0?" ("+ii.ret+")":""):t+(it?" h ":" sa ")+i+(it?" min":" dk")+(n<0?" ("+ii.ret+")":"")}function N1(n){if(n.facts)return n.facts.map(([i,s])=>[ii[i]||i,s]);let e=n.d,t=[[ii.diam,Ra(e.diam)+" km"]];return e.au&&t.push([ii.au,Br(e.au,3)+" AU ("+Br(e.mkm,1)+(it?" M km)":" mn km)")]),e.dist&&t.push([ii.dist,Ra(e.dist)+" km"]),t.push([ii.year,D1(e.year)]),t.push([ii.day,U1(n.per!=null?n.per:e.per)]),e.moons!=null&&t.push([ii.moons,String(e.moons)]),t.push([ii.temp,e.tmean!=null?Ra(e.tmean)+" \xB0C"+(e.tnote?it?" (1 bar level)":" (1 bar d\xFCzeyi)":it?" (mean)":" (ortalama)"):Ra(e.tmin)+" \u2026 "+Ra(e.tmax)+" \xB0C"]),t.push([ii.g,Br(e.g,2)+" m/s\xB2"]),t}var hu=`float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float n3(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n3(p);p=p*2.03+7.1;a*=.5;}return s;}`,ll=`varying vec3 vN;varying vec3 vW;varying vec3 vO;varying vec2 vUv;
void main(){vO=position;vUv=uv;vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,z1=`precision highp float;varying vec3 vN;varying vec3 vW;varying vec3 vO;uniform float uT;${hu}
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW),p=normalize(vO);float g=fbm(p*7.+uT*.05)+.5*fbm(p*19.-uT*.07);
 vec3 c=mix(vec3(1.,.42,.06),vec3(1.,.9,.55),smoothstep(.3,1.,g));float mu=max(dot(N,V),0.);c*=.4+.6*pow(mu,.55);gl_FragColor=vec4(c*1.7,1.);}`,O1=`precision highp float;varying vec3 vN;varying vec3 vW;varying vec3 vO;varying vec2 vUv;
uniform sampler2D uMap,uRing;uniform vec3 uL,uTint,uAtm,uPC,uAx,uEs;uniform float uPR,uMode,uAtmK,uT,uSoft;uniform vec4 uRg;${hu}
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW),L=normalize(uL),p=normalize(vO);float d=dot(N,L);
 float diff=smoothstep(-uSoft*.35,uSoft,d);vec3 col;
 if(uMode<.5) col=texture2D(uMap,vUv).rgb*uTint;
 else if(uMode<1.5){float s=fbm(vec3(p.x*1.6,p.y*6.5,p.z*1.6)+uT*.015);col=mix(vec3(.86,.74,.5),vec3(.98,.95,.84),s);col*=.9+.2*fbm(p*10.+uT*.01);}
 else {float lat=abs(p.y);col=mix(vec3(.55,.8,.84),vec3(.7,.9,.9),lat*lat)*(.96+.06*fbm(vec3(p.x*1.4,p.y*9.,p.z*1.4)));}
 float shad=1.;
 if(uRg.z>.5){float dn=dot(L,uAx);if(abs(dn)>.03){float tr=dot(uPC-vW,uAx)/dn;if(tr>0.){vec3 H=vW+L*tr;float rr=length(H-uPC)/uPR;if(rr>uRg.x&&rr<uRg.y){float u=(rr-uRg.x)/(uRg.y-uRg.x);shad*=1.-.88*texture2D(uRing,vec2(u,.5)).a;}}}}
 vec3 c=col*(diff*shad*1.12+.006+.05*max(dot(N,uEs),0.)*(1.-diff));
 float f=pow(1.-max(dot(N,V),0.),3.);c+=uAtm*f*uAtmK*(.08+diff*shad);gl_FragColor=vec4(c,1.);}`,F1=`precision highp float;varying vec3 vN;varying vec3 vW;varying vec3 vO;varying vec2 vUv;
uniform sampler2D tDay,tNight,tWater;uniform vec3 uL;uniform float uT;${hu}
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW),L=normalize(uL),p=normalize(vO);float d=dot(N,L);
 float day=smoothstep(-.08,.22,d);vec3 base=texture2D(tDay,vUv).rgb;float wat=texture2D(tWater,vUv).r;
 float cl=smoothstep(.5,.74,fbm(p*3.4+vec3(uT*.0015,0.,0.))*(.6+.4*fbm(p*9.+3.)));cl*=1.-.55*smoothstep(.0,.35,abs(p.y)-.82);
 vec3 c=base*(1.-cl*.28)*(max(d,0.)*1.12+.012)*day+vec3(.0);
 vec3 R=reflect(-L,N);float sp=pow(max(dot(R,V),0.),220.)*wat*.55*step(0.,d);c+=vec3(1.,.97,.9)*sp;
 vec3 cloudC=vec3(1.)*(max(d,0.)*1.08+.02);c=mix(c,cloudC*day+vec3(.01),cl*.82);
 vec3 night=texture2D(tNight,vUv).rgb;float nm=1.-smoothstep(-.06,.16,d);c+=night*night.r*0.0+night*1.9*nm*(1.-cl*.8);
 c+=vec3(1.,.45,.2)*exp(-pow(d*5.5,2.))*.1*(1.-cl*.5);
 float f=pow(1.-max(dot(N,V),0.),3.);c+=vec3(.32,.58,1.)*f*(.12+1.1*smoothstep(-.25,.5,d))*1.15;
 gl_FragColor=vec4(c,1.);}`,B1=`precision highp float;varying vec3 vN;varying vec3 vW;uniform vec3 uAtm,uL;
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW);float f=pow(max(dot(-N,V)*.5+.5-.16,0.),2.6)*1.6;float d=smoothstep(-.3,.45,dot(N,normalize(uL)));gl_FragColor=vec4(uAtm*f*d*1.3,f*d);}`,H1=`precision highp float;varying vec3 vP;varying vec3 vW;uniform sampler2D uRing;uniform vec3 uL,uPC,uAx;uniform float uPR;uniform vec2 uR;
void main(){float rr=length(vP.xy);float u=(rr-uR.x)/(uR.y-uR.x);vec4 t=texture2D(uRing,vec2(u,.5));
 vec3 L=normalize(uL),V=normalize(cameraPosition-vW);float bb=dot(uPC-vW,L),sh=1.;if(bb>0.){float dd=length(uPC-vW-L*bb);sh=smoothstep(uPR*.985,uPR*1.01,dd);}
 float side=dot(uAx,L)*dot(uAx,V)>0.?1.:.4;float lit=(.05+.95*sh)*side;gl_FragColor=vec4(t.rgb*lit*1.05,t.a);}`;function V1(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,.55)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new ns(n)}function G1(){let e=document.createElement("canvas");e.width=1024,e.height=2;let t=e.getContext("2d"),i=t.createImageData(1024,2),s=1.24,r=2.27;for(let a=0;a<1024;a++){let l=s+(r-s)*a/1023,c=0,u=.8;l<1.53?(c=.18+.12*Math.sin(l*90),u=.55):l<1.95?(c=.82+.14*Math.sin(l*140)+.06*Math.sin(l*37),u=.95):l<2.03?(c=.06+.05*Math.sin(l*60),u=.6):(c=.6+.2*Math.sin(l*120),u=.8,l>2.2&&l<2.215&&(c=.03)),c=Math.max(0,Math.min(1,c));let d=[225*u+20,200*u+14,160*u+8];for(let h=0;h<2;h++){let f=(h*1024+a)*4;i.data[f]=d[0],i.data[f+1]=d[1],i.data[f+2]=d[2],i.data[f+3]=c*255}}t.putImageData(i,0,0);let o=new ns(e);return o.minFilter=nn,o}var Hr=null,ul,Mn,Ft,cl,zr,We={},On={},du=0,Bi=!1,Bn=0,lu=null,Rf=0,Cf="",hs=0,cu=0,vn=null,Fn=null,Pa=0,tM=new U,Hf=[1,600,21600,259200],Or=it?["real time","1 s = 10 min","1 s = 6 h","1 s = 3 days"]:["ger\xE7ek zaman","1 sn = 10 dk","1 sn = 6 sa","1 sn = 3 g\xFCn"],W1=new is,Ca=(n,e)=>{let t=W1.load(k1+n+".jpg");return t.colorSpace=sn,t.anisotropy=window.__qulSafe?1:8,t.wrapS=Ii,t},uu=new Sr(new Uint8Array([90,90,90,255]),1,1);uu.needsUpdate=!0;var La=n=>it?n.en:n.tr;function q1(){zr=document.createElement("canvas"),Hr=new fi({canvas:zr,antialias:!window.__qulSafe,powerPreference:"high-performance"}),Hr.setPixelRatio(Math.min(devicePixelRatio||1,window.__qulSafe?1:matchMedia("(pointer:coarse)").matches?1.5:2)),ul=new pi,Mn=new on(42,1,.08,14e3),cl=new bn,ul.add(cl);let n=new yt(new Un(9e3,48,32),new An({map:Ca("stars"),side:Yt,depthWrite:!1,fog:!1,toneMapped:!1,color:14540253}));lu=n,n.rotation.order="YXZ",n.rotation.x=.45,n.renderOrder=-10,ul.add(n);let e=V1();ds.forEach(s=>{let r=new bn,o=new Un(s.r,s.id==="sun"?64:96,s.id==="sun"?40:64),a={},l;s.id==="sun"?l=new ft({uniforms:{uT:{value:0}},vertexShader:ll,fragmentShader:z1}):s.id==="earth"?l=new ft({uniforms:{tDay:{value:Ca("earth_day")},tNight:{value:Ca("earth_night")},tWater:{value:Ca("earth_water")},uL:{value:new U(1,0,0)},uT:{value:0}},vertexShader:ll,fragmentShader:F1}):l=new ft({uniforms:{uMap:{value:s.tex?Ca(s.tex):uu},uRing:{value:uu},uL:{value:new U(1,0,0)},uEs:{value:new U},uTint:{value:new U(1,1,1)},uAtm:{value:new U(...s.atmc||[.5,.6,.8])},uPC:{value:new U},uAx:{value:new U(0,1,0)},uPR:{value:s.r},uMode:{value:s.mode||0},uAtmK:{value:s.atm||0},uT:{value:0},uSoft:{value:s.soft||.3},uRg:{value:new _t(1.24,2.27,s.ring?1:0,1)}},vertexShader:ll,fragmentShader:O1});let c=new yt(o,l);r.add(c),cl.add(r);let u={b:s,grp:r,mesh:c,mat:l,pos:new U};if(On[s.id]=u,s.id==="earth"){let d=new yt(new Un(1.03,64,48),new ft({uniforms:{uAtm:{value:new U(.35,.6,1)},uL:l.uniforms.uL},vertexShader:ll,fragmentShader:B1,transparent:!0,depthWrite:!1,side:Yt,blending:kt}));r.add(d),u.atm=d}if(s.id==="sun"&&[[70,16752704,.9],[170,16747056,.35],[420,16742944,.12]].forEach(([d,h,f])=>{let g=new Gn(new Dn({map:e,color:h,transparent:!0,depthWrite:!1,blending:kt,opacity:f}));g.scale.set(d,d,1),r.add(g)}),s.ring){let d=G1();l.uniforms.uRing.value=d;let h=new yt(new mi(s.r*1.24,s.r*2.27,192,1),new ft({uniforms:{uRing:{value:d},uL:l.uniforms.uL,uPC:l.uniforms.uPC,uAx:l.uniforms.uAx,uPR:{value:s.r},uR:{value:new we(s.r*1.24,s.r*2.27)}},vertexShader:"varying vec3 vP;varying vec3 vW;void main(){vP=position;vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:H1,transparent:!0,depthWrite:!1,side:dn}));h.rotation.x=-Math.PI/2,u.ring=h,c.add(h),h.userData.noSpin=!0}if(s.a){let d=[],h=Bf(s.a);for(let g=0;g<=256;g++){let v=g/256*Math.PI*2;d.push(new U(Math.cos(v)*h,0,-Math.sin(v)*h))}let f=new Cs(new Ut().setFromPoints(d),new zi({color:8228275,transparent:!0,opacity:.26,depthWrite:!1}));cl.add(f),u.orbit=f}}),Ft=new Lr(Mn,zr),Ft.enableDamping=!0,Ft.dampingFactor=.07,Ft.enablePan=!1,Ft.maxDistance=3200,Ft.minDistance=.5,Ft.rotateSpeed=.7,Ft.zoomSpeed=.9;let t=document.createElement("div");t.id="sol",t.innerHTML='<div class="sc0"></div><div class="si"><h2></h2><p class="sb"></p><dl></dl><div class="sn"></div></div><div class="sx"><button class="sclose">\u2715</button><button class="stime"></button><div class="sdate"></div></div><div class="sj"></div><div id="slab"></div><div class="sch"></div><button class="sland"></button><div class="stp"><div class="sty"></div><input type="range" class="syr" min="-3000" max="2100" step="1" aria-label="year"><div class="sbt"><button class="snow"></button><button class="smes"></button></div><form class="sdt"><select class="de"><option value="ad">MS</option><option value="bc">M\xD6</option></select><input class="dy" type="number" min="1" max="9999" placeholder="y\u0131l" aria-label="year"><input class="dm" type="number" min="1" max="12" placeholder="ay" aria-label="month"><input class="dd" type="number" min="1" max="31" placeholder="g\xFCn" aria-label="day"><button type="submit" class="dgo">\u25B6</button></form><div class="sev"><select class="evs"><option value="nm"></option><option value="fm"></option><option value="se"></option><option value="le"></option><option value="eq"></option></select><button type="button" class="evp">\u25C0</button><button type="button" class="evn">\u25B6</button></div><div class="sevt"></div><div class="spole"></div><div class="ssun"></div><div class="slt"></div><div class="siss"></div></div>',t.querySelector(".sc0").appendChild(zr),document.body.appendChild(t),We={el:t,h:t.querySelector("h2"),p:t.querySelector(".sb"),dl:t.querySelector("dl"),nt:t.querySelector(".sn"),time:t.querySelector(".stime"),date:t.querySelector(".sdate"),j:t.querySelector(".sj"),lab:t.querySelector("#slab"),ch:t.querySelector(".sch"),land:t.querySelector(".sland"),yr:t.querySelector(".syr"),yl:t.querySelector(".sty"),now:t.querySelector(".snow"),mes:t.querySelector(".smes"),pole:t.querySelector(".spole"),sun:t.querySelector(".ssun"),evs:t.querySelector(".evs"),evt:t.querySelector(".sevt"),lt:t.querySelector(".slt"),de:t.querySelector(".de"),dy:t.querySelector(".dy"),dm:t.querySelector(".dm"),dd:t.querySelector(".dd"),dform:t.querySelector(".sdt"),iss:t.querySelector(".siss"),close:t.querySelector(".sclose")},We.close.onclick=hl,We.time.onclick=()=>{hs=(hs+1)%Hf.length,We.time.textContent="\u23F1 "+Or[hs]},We.now.textContent=it?"Today":"Bug\xFCn",We.mes.textContent=it?"Mesopotamian sky (2800 BC)":"Mezopotamya g\xF6\u011F\xFC (M\xD6 2800)",We.dform.onsubmit=s=>{s.preventDefault(),K1()},We.dform.addEventListener("keydown",s=>s.stopPropagation()),We.dy.placeholder=it?"year":"y\u0131l",We.dm.placeholder=it?"mo":"ay",We.dd.placeholder=it?"day":"g\xFCn",We.de.options[1].text=it?"BC":"M\xD6",We.de.options[0].text=it?"AD":"MS",[it?"New Moon":"Yeni Ay",it?"Full Moon":"Dolunay",it?"Solar eclipse":"G\xFCne\u015F tutulmas\u0131",it?"Lunar eclipse":"Ay tutulmas\u0131",it?"Equinox / solstice":"Ekinoks / g\xFCnd\xF6n\xFCm\xFC"].forEach((s,r)=>{We.evs.options[r].text=s}),t.querySelector(".evp").onclick=()=>zf(-1),t.querySelector(".evn").onclick=()=>zf(1),We.yr.oninput=()=>Of(+We.yr.value),We.now.onclick=()=>{Bn=Date.now(),hs=0,We.time.textContent="\u23F1 "+Or[0]},We.mes.onclick=()=>{Of(-2799),hs=0,We.time.textContent="\u23F1 "+Or[0]},We.time.textContent="\u23F1 "+Or[0],We.land.textContent=it?"\u2193 Descend to Earth's surface":"\u2193 D\xFCnya y\xFCzeyine in",We.land.onclick=()=>{let s=(window.QUL&&window.QUL.planets||[]).find(r=>r.key==="dunya");hl(),s&&window.dispatchEvent(new CustomEvent("surface",{detail:s}))},We.nt.textContent=it?"Planet sizes are true to each other; distances are compressed. Positions are for the current date.":"Gezegen boyutlar\u0131 birbirine g\xF6re ger\xE7ektir; mesafeler s\u0131k\u0131\u015Ft\u0131r\u0131lm\u0131\u015Ft\u0131r. Konumlar bug\xFCn\xFCn tarihine g\xF6redir.",ds.forEach(s=>{let r=document.createElement("button");if(r.textContent=La(s),r.dataset.id=s.id,r.onclick=()=>dl(s.id,4.5),We.ch.appendChild(r),s.id!=="moon"){let o=document.createElement("button");o.className="slb",o.textContent=La(s),o.dataset.id=s.id,o.onclick=()=>dl(s.id,4.5),We.lab.appendChild(o),On[s.id].lab=o}});let i=null;zr.addEventListener("pointerdown",s=>{i=[s.clientX,s.clientY],vn=null,Ft.enabled=!0}),zr.addEventListener("pointerup",s=>{if(!i)return;let r=Math.hypot(s.clientX-i[0],s.clientY-i[1]);i=null,r<5&&X1(s)}),addEventListener("resize",Vf),addEventListener("keydown",s=>{Bi&&s.key==="Escape"&&hl()})}function Vf(){if(!Hr)return;let n=innerWidth,e=innerHeight;Hr.setSize(n,e),Mn.aspect=n/e,Mn.updateProjectionMatrix()}var Pf=new Tr,Lf=new we,kf=new Ui,zn=new U;function X1(n){Lf.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),Pf.setFromCamera(Lf,Mn);let e=null,t=1e9;ds.forEach(i=>{On[i.id].grp.getWorldPosition(zn);let r=zn.distanceTo(Mn.position);kf.set(zn,Math.max(i.r*1.15,r*.018)),Pf.ray.intersectSphere(kf,new U)&&r<t&&(t=r,e=i.id)}),e&&dl(e,4.5)}var Gf=n=>n/864e5+24405875e-1,Cn=n=>n*Math.PI/180,If=[[0,"Bal\u0131k","Pisces"],[28.7,"Ko\xE7","Aries"],[53.5,"Bo\u011Fa","Taurus"],[90.4,"\u0130kizler","Gemini"],[118.2,"Yenge\xE7","Cancer"],[138.2,"Aslan","Leo"],[174.1,"Ba\u015Fak","Virgo"],[217.8,"Terazi","Libra"],[241.1,"Akrep","Scorpius"],[248,"Y\u0131lanc\u0131","Ophiuchus"],[266.4,"Yay","Sagittarius"],[299.7,"O\u011Flak","Capricornus"],[327.5,"Kova","Aquarius"],[351.6,"Bal\u0131k","Pisces"]],Df=n=>{n=(n%360+360)%360;let e=If[0];return If.forEach(t=>{n>=t[0]&&(e=t)}),it?e[2]:e[1]};function Y1(n,e){let t=-(n-2e3)*50.29/3600,i=((280.46+.9856474*e)%360+360)%360;return(it?"Spring equinox point: ":"Bahar noktas\u0131: ")+Df(t)+" \xB7 "+(it?"Sun in: ":"G\xFCne\u015F: ")+Df(i+t)}function K1(){let n=parseInt(We.dy.value,10),e=parseInt(We.dm.value,10),t=parseInt(We.dd.value,10);if(!isFinite(n))return;n=Math.max(1,Math.min(9999,n)),We.de.value==="bc"&&(n=1-n),e=Math.max(1,Math.min(12,e||1)),t=Math.max(1,Math.min(31,t||1));let i=new Date(0);i.setUTCFullYear(n,e-1,t),i.setUTCHours(12,0,0,0),Bn=i.getTime(),hs=0,We.time.textContent="\u23F1 "+Or[0]}var Uf=n=>(n-24405875e-1)*864e5,Z1=n=>n/864e5+24405875e-1;function j1(n,e){let t=n/1236.85,i=1-.002516*t-74e-7*t*t,s=Math.PI/180,r=Math.sin,o=(2.5534+29.1053567*n)*s,a=(201.5643+385.81693528*n)*s,l=(160.7108+390.67050284*n)*s,c=245155009766e-5+29.530588861*n+15437e-8*t*t;c+=e?-.40614*r(a)+.17302*i*r(o)+.01614*r(2*a)+.01043*r(2*l)+.00734*i*r(a-o)-.00515*i*r(a+o)+.00209*i*i*r(2*o):-.4072*r(a)+.17241*i*r(o)+.01608*r(2*a)+.01039*r(2*l)+.00739*i*r(a-o)-.00514*i*r(a+o)+.00208*i*i*r(2*o);let u=(l/s%180+180)%180;return{jd:c,dn:Math.min(u,180-u)}}function Nf(n){let e=(n-2451545)/36525,t=Math.PI/180,i=(357.52911+35999.05029*e)*t,s=(1.914602-.004817*e)*Math.sin(i)+.019993*Math.sin(2*i)+289e-6*Math.sin(3*i);return((280.46646+36000.76983*e+s-.00569)%360+360)%360}function J1(n,e){let t=Z1(Bn)+e*.002,i=(t-245155009766e-5)/29.530588861;if(n==="eq"){let r=Nf(t),o=e>0?(Math.floor(r/90)+1)*90:(Math.ceil(r/90)-1)*90,a=t;for(let c=0;c<6;c++){let u=Nf(a);a+=((o-u+540)%360-180)/.9856474}let l=(Math.round(o/90)%4+4)%4;return{ms:Uf(a),tr:["Mart ekinoksu","Haziran g\xFCnd\xF6n\xFCm\xFC","Eyl\xFCl ekinoksu","Aral\u0131k g\xFCnd\xF6n\xFCm\xFC"][l],en:["March equinox","June solstice","September equinox","December solstice"][l]}}let s=e>0?Math.ceil(i*2):Math.floor(i*2);for(let r=0;r<400;r++,s+=e){let o=(s%2+2)%2===1,a=s/2,l=j1(a,o),c=Uf(l.jd);if(!(e>0?c<=Bn+6e4:c>=Bn-6e4)){if(n==="nm"&&!o)return{ms:c,tr:"Yeni Ay",en:"New Moon"};if(n==="fm"&&o)return{ms:c,tr:"Dolunay",en:"Full Moon"};if(n==="se"&&!o&&l.dn<14)return{ms:c,tr:"G\xFCne\u015F tutulmas\u0131",en:"Solar eclipse"};if(n==="le"&&o&&l.dn<14)return{ms:c,tr:"Ay tutulmas\u0131",en:"Lunar eclipse"}}}return null}function zf(n){let e=J1(We.evs.value,n);if(!e){We.evt.textContent=it?"Not found":"Bulunamad\u0131";return}Bn=e.ms,hs=0,We.time.textContent="\u23F1 "+Or[0],We.evt.textContent=(it?e.en:e.tr)+(it?" (approx., TT)":" (yakla\u015F\u0131k, TT)")}function $1(){if(!Fn||Fn==="earth")return"";let n=Fr[Fn],e=Gf(Bn)-2451545,t;if(Fn==="moon")t=384400/1495978707e-1;else if(Fn==="sun")t=1;else{let r=Fr.earth,o=r.a,a=n.a,l=Cn((r.L0+r.n*e)%360),c=Cn((n.L0+n.n*e)%360);t=Math.sqrt(o*o+a*a-2*o*a*Math.cos(l-c))}let i=t*499.005;return(it?"Light from Earth takes ":"I\u015F\u0131k D\xFCnya'dan buraya ")+(r=>r<90?r.toFixed(r<10?2:0)+(it?" s":" sn"):r<5400?(r/60).toFixed(1)+(it?" min":" dk"):(r/3600).toFixed(2)+(it?" h":" sa"))(i)+(it?"":" s\xFCrede ula\u015F\u0131r")}function Of(n){let e=new Date(Date.now());e.setUTCFullYear(n),Bn=e.getTime()}var Ff=n=>n<1?it?1-n+" BC":"M\xD6 "+(1-n):String(n),Q1=(()=>{let n=Cn(23.4393);return[["Polaris",2.5303,89.264],["Thuban",14.0731,64.376],["Kochab",14.8451,74.156],["Vega",18.6156,38.784],["Deneb",20.6905,45.28],["Alderamin",21.3096,62.585]].map(([t,i,s])=>{i=Cn(i*15),s=Cn(s);let r=Math.cos(s)*Math.cos(i),o=Math.cos(s)*Math.sin(i),a=Math.sin(s);return{n:t,v:[r,o*Math.cos(n)+a*Math.sin(n),-o*Math.sin(n)+a*Math.cos(n)]}})})();function e_(n){let e=-(n-2e3)*50.29/3600*Math.PI/180,t=Cn(23.4393),i=[-Math.sin(t)*Math.sin(e),Math.sin(t)*Math.cos(e),Math.cos(t)],s=null;return Q1.forEach(r=>{let o=Math.acos(Math.max(-1,Math.min(1,r.v[0]*i[0]+r.v[1]*i[1]+r.v[2]*i[2])))*180/Math.PI;(!s||o<s.dd)&&(s={n:r.n,dd:o})}),s.dd<8?(it?"Pole star: ":"Kutup y\u0131ld\u0131z\u0131: ")+s.n+" ("+s.dd.toFixed(1)+"\xB0)":(it?"No bright pole star (nearest: ":"Parlak kutup y\u0131ld\u0131z\u0131 yok (en yak\u0131n: ")+s.n+", "+s.dd.toFixed(0)+"\xB0)"}function t_(n){let e=performance.now();if(!(!n||e-Rf<6e3)){Rf=e;try{fetch("https://api.wheretheiss.at/v1/satellites/25544").then(t=>t.json()).then(t=>{t&&t.latitude!=null&&(We.iss.textContent="ISS \xB7 "+t.latitude.toFixed(1)+"\xB0, "+t.longitude.toFixed(1)+"\xB0 \xB7 "+Math.round(t.altitude)+" km \xB7 "+Math.round(t.velocity)+" km/h")}).catch(()=>{We.iss.textContent=""})}catch{We.iss.textContent=""}}}function Wf(n){Bn+=n*1e3*Hf[hs],Pa+=n;let e=Gf(Bn)-2451545,t=On.sun;t.mat.uniforms.uT.value=Pa,ds.forEach(f=>{let g=On[f.id];if(!f.a)return;let v=Cn((f.L0+f.n*e)%360),m=Bf(f.a);g.pos.set(Math.cos(v)*m,0,-Math.sin(v)*m),g.grp.position.copy(g.pos)});let i=On.earth,s=On.moon,r=Cn((218.316+13.176396*e)%360);s.pos.set(i.pos.x+Math.cos(r)*Af,0,i.pos.z-Math.sin(r)*Af),s.grp.position.copy(s.pos),s.mesh.rotation.y=r+Math.PI;let o=Cn(((280.46061837+360.98564736629*e)%360+360)%360);i.mesh.quaternion.setFromAxisAngle(new U(1,0,0),I1).multiply(new Zt().setFromAxisAngle(new U(0,1,0),o)),ds.forEach(f=>{if(f.id==="sun"||f.id==="earth"||f.id==="moon")return;let g=On[f.id],v=Cn(24*e/f.per*360%360)*1;g.mesh.quaternion.setFromAxisAngle(new U(1,0,0),Cn(f.tilt)).multiply(new Zt().setFromAxisAngle(new U(0,1,0),v));let m=g.mat.uniforms;m.uL.value.copy(g.pos).negate().normalize(),m.uPC.value.copy(g.pos),m.uAx.value.set(0,Math.cos(Cn(f.tilt)),Math.sin(Cn(f.tilt))),m.uT.value=Pa}),i.mat.uniforms.uL.value.copy(i.pos).negate().normalize(),i.mat.uniforms.uT.value=Pa;{let f=s.mat.uniforms;f.uL.value.copy(s.pos).negate().normalize(),f.uPC.value.copy(s.pos),f.uEs.value.copy(i.pos).sub(s.pos).normalize()}let a=new Date(Bn),l=a.getUTCFullYear(),c=f=>String(f).padStart(2,"0");We.date.textContent=(l<1?Ff(l):l)+"-"+c(a.getUTCMonth()+1)+"-"+c(a.getUTCDate())+" "+c(a.getUTCHours())+":"+c(a.getUTCMinutes())+" UTC";let u=2e3+e/365.25;lu&&(lu.rotation.y=Cn((u-2e3)*50.29/3600)),document.activeElement!==We.yr&&(We.yr.value=Math.max(-3e3,Math.min(2100,l))),We.yl.textContent=Ff(l),We.sun.textContent=Y1(u,e),We.lt.textContent=$1();let d=e_(u);d!==Cf&&(Cf=d,We.pole.textContent=d);let h=Math.abs(Bn-Date.now())<36e5;h||(We.iss.textContent=""),t_(h)}function n_(){ds.forEach(n=>{let e=On[n.id];if(!e.lab)return;zn.copy(e.pos);let t=zn.distanceTo(Mn.position);zn.project(Mn);let i=zn.z<1&&Math.abs(zn.x)<1.05&&Math.abs(zn.y)<1.05&&t>n.r*3&&!(n.id==="earth"&&Fn==="moon"&&!1);e.lab.style.display=i?"block":"none",i&&(e.lab.style.transform="translate("+(zn.x*.5+.5)*innerWidth+"px,"+(-zn.y*.5+.5)*innerHeight+"px)",e.lab.classList.toggle("on",Fn===n.id),Fn===n.id&&(e.lab.style.display="none"))}),We.ch.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.id===Fn))}function qf(n){We.h.textContent=La(n),We.p.textContent=it?n.blurb.en:n.blurb.tr,We.dl.innerHTML=N1(n).map(([e,t])=>"<div><dt>"+e+"</dt><dd>"+t+"</dd></div>").join(""),We.land.style.display=n.id==="earth"?"block":"none"}var i_=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Xf(n,e){let t=On[n],i=t.b,s=t.pos.clone(),r=s.clone().negate();if(r.lengthSq()<1e-6&&r.set(1,0,0),r.normalize(),n==="moon"){let c=On.earth.pos.clone().sub(s).normalize(),u=new U().crossVectors(c,new U(0,1,0)).normalize(),d=u.dot(r)>=0?1:-1,h=c.clone().multiplyScalar(.62).addScaledVector(new U(0,1,0),.16).addScaledVector(u,.78*d).normalize();return{pos:s.clone().addScaledVector(h,i.r*5.2),target:s}}let o=new U().crossVectors(r,new U(0,1,0)).normalize(),a=r.clone().multiplyScalar(.78).addScaledVector(new U(0,1,0),.28).addScaledVector(o,.5).normalize(),l=i.r*(n==="sun"?3.6:n==="saturn"||n==="moon"?5.2:e);return{pos:s.clone().addScaledVector(a,l),target:s}}function dl(n,e,t){Fn=n;let i=On[n];qf(i.b);let s=Xf(n,e||4.5);vn={t:0,dur:t||3.2,p0:Mn.position.clone(),t0:Ft.target.clone(),id:n,mult:e||4.5,arc:Mn.position.distanceTo(s.pos)*.06},Ft.enabled=!1,Ft.minDistance=i.b.r*1.25}function s_(n){let e=0,t=()=>{if(!Bi||e>=n.length){We.j.classList.remove("on");return}We.j.textContent=n[e++],We.j.classList.remove("on"),We.j.offsetWidth,We.j.classList.add("on"),setTimeout(t,2600)};t()}function Yf(n){if(!Bi)return;du=requestAnimationFrame(Yf);let e=Math.min(.1,(n-cu)/1e3||.016);if(cu=n,Wf(e),vn){vn.t=Math.min(1,vn.t+e/vn.dur);let t=i_(vn.t),i=Xf(vn.id,vn.mult);Mn.position.lerpVectors(vn.p0,i.pos,t),Mn.position.y+=Math.sin(Math.PI*t)*vn.arc,Ft.target.lerpVectors(vn.t0,i.target,t),vn.t>=1&&(vn=null,Ft.enabled=!0)}else if(Fn){let t=On[Fn].pos;zn.copy(t).sub(Ft.target),Mn.position.add(zn),Ft.target.copy(t)}Ft.update(),n_(),Hr.render(ul,Mn)}function r_(n){if(n=n||{},Bi)return!0;try{Hr||q1()}catch(t){try{console.error("[Qul] G\xFCne\u015F Sistemi ba\u015Flat\u0131lamad\u0131:",t)}catch{}return!1}Bi=!0,ue.pause(!0),Vf(),Bn=Date.now(),Pa=0,Wf(0),We.el.classList.add("on"),document.documentElement.style.setProperty("--bar","0vh");let e=n.focus||"earth";return Mn.position.set(0,1250,1750),Ft.target.set(0,0,0),Ft.minDistance=.5,Fn=null,vn=null,Ft.enabled=!1,Ft.update(),qf(Fr[e]),s_(it?["Milky Way \xB7 Orion Arm","The Solar System \xB7 26,000 light-years from the galactic center","The Sun \xB7 eight planets \xB7 real positions for today",La(Fr[e])]:["Samanyolu \xB7 Orion Kolu","G\xFCne\u015F Sistemi \xB7 galaktik merkezden yakla\u015F\u0131k 26.000 \u0131\u015F\u0131k y\u0131l\u0131 uzakta","G\xFCne\u015F \xB7 sekiz gezegen \xB7 bug\xFCn\xFCn ger\xE7ek konumlar\u0131",La(Fr[e])]),setTimeout(()=>{Bi&&dl(e,4.5,7.5)},1800),cu=performance.now(),du=requestAnimationFrame(Yf),!0}function hl(){Bi&&(Bi=!1,cancelAnimationFrame(du),vn=null,We.el.classList.remove("on"),ue.pause(!1),window.dispatchEvent(new Event("qulSolarClosed")))}var fu={open:r_,close:hl,get on(){return Bi},ids:ds.map(n=>({id:n.id,tr:n.tr,en:n.en}))};var Kf=window.AudioContext||window.webkitAudioContext,yn=null,ka=null,Zf=[];function a_(){if(yn||!Kf)return;yn=new Kf;let n=yn.createGain();n.gain.value=0,n.connect(yn.destination),[[34,"sine",1],[51.2,"sine",.55],[102,"triangle",.12],[68.4,"sine",.3]].forEach(([l,c,u])=>{let d=yn.createOscillator();d.type=c,d.frequency.value=l;let h=yn.createGain();h.gain.value=u,d.connect(h),h.connect(n),d.start(),Zf.push(d)});let e=yn.createOscillator();e.frequency.value=.07;let t=yn.createGain();t.gain.value=.25,e.connect(t),t.connect(n.gain),e.start();let i=yn.createBuffer(1,yn.sampleRate*2,yn.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;let r=yn.createBufferSource();r.buffer=i,r.loop=!0;let o=yn.createBiquadFilter();o.type="bandpass",o.frequency.value=300,o.Q.value=.5;let a=yn.createGain();a.gain.value=0,r.connect(o),o.connect(a),a.connect(yn.destination),r.start(),ka={hum:n,wg:a,bp:o}}var pu={init(){["pointerdown","keydown"].forEach(n=>addEventListener(n,a_,{once:!0}))},update(n,e,t=0){if(!ka)return;let i=window.__hush?0:1,s=yn.currentTime;ka.hum.gain.setTargetAtTime(.2*n*(1+t*1.8)*i*(1-t*t*.85),s,.35),Zf.forEach(r=>r.detune.setTargetAtTime(-1100*t,s,.5)),ka.wg.gain.setTargetAtTime(.09*e*i,s,.15),ka.bp.frequency.setTargetAtTime(250+1e3*e,s,.2)}};var mu={c:[["Andromeda","Andromeda",.75,43,1],["Pompa","Antlia",156,-36,3],["Cennetku\u015Fu","Apus",-120,-74,3],["Kova","Aquarius",-22.5,-5,2],["Kartal","Aquila",-69,8,1],["Sunak","Ara",-102,-56,3],["Ko\xE7","Aries",42,22,1],["Arabac\u0131","Auriga",82.5,37,1],["\xC7oban","Bootes",-136.5,35,1],["\xC7elikkalem","Caelum",73.5,-42,3],["Z\xFCrafa","Camelopardalis",84,72,2],["Yenge\xE7","Cancer",128.25,27,2],["Av\u2005K\xF6pekleri","Canes\u2005Venatici",-168,43,2],["B\xFCy\xFCk\u2005K\xF6pek","Canis\u2005Maior",97.5,-26,1],["K\xFC\xE7\xFCk\u2005K\xF6pek","Canis\u2005Minor",109.5,5,2],["O\u011Flak","Capricornus",-45,-22,2],["Karina","Carina",144,-66,1],["Koltuk","Cassiopeia",-6,55.5,1],["Erbo\u011Fa","Centaurus",-160.5,-40,1],["Kral","Cepheus",-22.5,71,2],["Balina","Cetus",28.5,-5,1],["Bukalemun","Chamaeleon",-171,-81,3],["Pergel","Circinus",-142.5,-67,3],["G\xFCvercin","Columba",85.5,-39,3],["Berenis'in\u2005Sa\xE7\u0131","Coma\u2005Berenices",-166.5,24,3],["G\xFCneytac\u0131","Corona\u2005Australis",-78,-40,3],["Kuzeytac\u0131","Corona\u2005Borealis",-121.5,32,2],["Karga","Corvus",-174,-19.5,3],["Kupa","Crater",174.75,-15,3],["Ha\xE7","Crux",-166.5,-62,2],["Ku\u011Fu","Cygnus",-52.5,50,1],["Yunus","Delphinus",-51,6,3],["K\u0131l\u0131\xE7bal\u0131\u011F\u0131","Dorado",76.5,-64,3],["Ejderha","Draco",-91.5,64,2],["Tay","Equuleus",-39.75,11.5,3],["Irmak","Eridanus",52.5,-18,1],["Ocak","Fornax",40.5,-28,3],["\u0130kizler","Gemini",107.25,23.5,1],["Turna","Grus",-18,-41.5,3],["Herk\xFCl","Hercules",-106.5,35,2],["Saat","Horologium",51,-52,3],["Suy\u0131lan\u0131","Hydra",150,-22,2],["K\xFC\xE7\xFCk suy\u0131lan\u0131","Hydrus",34.5,-72,3],["Hintli","Indus",-42,-55.5,3],["Kertenkele","Lacerta",-18,47,3],["Aslan","Leo",159,15,1],["K\xFC\xE7\xFCk\u2005Aslan","Leo\u2005Minor",157.5,30,3],["Tav\u015Fan","Lepus",88.5,-25,3],["Terazi","Libra",-129,-26,2],["Kurt","Lupus",-131.25,-35,3],["Va\u015Fak","Lynx",121.5,49,3],["\xC7alg\u0131","Lyra",-81,30,2],["Masa","Mensa",82.5,-80,3],["Mikroskop","Microscopium",-43.5,-37,3],["Tekboynuz","Monoceros",114.75,-6,2],["Sinek","Musca",-165,-73,3],["Cetvel","Norma",-117,-52,3],["Sekizlik","Octans",-60,-80,3],["Y\u0131lanc\u0131","Ophiuchus",-102,3,2],["Avc\u0131","Orion",84,13,1],["Tavus","Pavo",-63,-62,2],["Kanatl\u0131at","Pegasus",-25.5,16,1],["Kahraman","Perseus",66,45,1],["Anka","Phoenix",16.5,-43,2],["Ressam","Pictor",82.5,-50,3],["Bal\u0131k","Pisces",19.5,15,2],["G\xFCneybal\u0131\u011F\u0131","Piscis\u2005Austrinus",-27,-29,2],["Pupa","Puppis",111,-46,2],["Kumpas","Pyxis",132,-24,3],["A\u011Fc\u0131k","Reticulum",55.5,-61,3],["Ok\xE7uk","Sagitta",-69,18,3],["Yay","Sagittarius",-67.5,-34,1],["Akrep","Scorpius",-111,-38,1],["Heykeltra\u015F","Sculptor",1.5,-33,3],["Kalkan","Scutum",-78,-12.5,3],["Y\u0131lan","Serpens",-127.5,5,3],["Y\u0131lan","Serpens",-79.5,3,3],["Alt\u0131l\u0131k","Sextans",157.5,-7,3],["Bo\u011Fa","Taurus",54,15,1],["D\xFCrb\xFCn","Telescopium",-82.5,-54,3],["\xDC\xE7gen","Triangulum",27,34,3],["G\xFCney\u2005\xDC\xE7geni","Triangulum\u2005Australe",-120,-67.5,2],["Tukan","Tucana",-12,-64,3],["B\xFCy\xFCk\u2005Ay\u0131","Ursa\u2005Maior",165,48,1],["K\xFC\xE7\xFCk\u2005Ay\u0131","Ursa\u2005Minor",-133.5,68,2],["Yelken","Vela",143.25,-46,2],["Ba\u015Fak","Virgo",-160.5,-4,1],["U\xE7anbal\u0131k","Volans",111,-73,3],["Tilkicik","Vulpecula",-64.5,21,3]],s:[["Achernar",24.43,-57.24,.45],["Aldebaran",68.98,16.51,.87],["Rigel",78.63,-8.2,.18],["Capella",79.17,46,.08],["Betelgeuse",88.79,7.41,.45],["Canopus",95.99,-52.7,-.62],["Sirius",101.29,-16.72,-1.44],["Adhara",104.66,-28.97,1.5],["Castor",113.65,31.89,1.58],["Procyon",114.83,5.22,.4],["Pollux",116.33,28.03,1.16],["Regulus",152.09,11.97,1.36],["Acrux",-173.35,-63.1,.77],["Gacrux",-172.21,-57.11,1.59],["Mimosa",-168.07,-59.69,1.25],["Spica",-158.7,-11.16,.98],["Hadar",-149.04,-60.37,.61],["Arcturus",-146.08,19.18,-.05],["Toliman",-140.1,-60.84,1.35],["Rigil Kentaurus",-140.1,-60.83,-.01],["Antares",-112.65,-26.43,1.06],["Vega",-80.77,38.78,.03],["Altair",-62.3,8.87,.76],["Deneb",-49.64,45.28,1.25],["Fomalhaut",-15.59,-29.62,1.17]]};var Hn=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),gu=["Aksiyom 1 \u2014 Anlam, \u0130li\u015Fkiden Do\u011Far","Aksiyom 2 \u2014 Ger\xE7eklik, Tutarl\u0131l\u0131kt\u0131r","Aksiyom 3 \u2014 Ama\xE7, De\u011Fer Yaratmakt\u0131r"],Ia=()=>{try{return JSON.parse(localStorage.getItem("qid")||"null")}catch{return null}};function jf(n,e,t,i,s){n.save(),n.strokeStyle=s,n.lineWidth=Math.max(1,i*.06),n.lineCap="round",n.beginPath(),n.moveTo(e,t-i*1.55),n.lineTo(e,t+i*1.75),n.stroke(),n.beginPath(),n.arc(e,t-i*.35,i*.75,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(e-i*.9,t+i*.55),n.lineTo(e+i*.9,t+i*.55),n.moveTo(e-i*.7,t+i*.8),n.lineTo(e+i*.7,t+i*.8),n.stroke(),n.beginPath(),n.arc(e,t+i*.95,i*.55,Math.PI*.1,Math.PI*.9),n.stroke(),n.restore()}var Sn={get:Ia,label(){let n=Ia();return n?[n.n?k("id.explorer")+" "+n.n:k("id.explorer"),n.sn,n.a?gu[n.a-1].split(" \u2014 ")[0]:""].filter(Boolean).join(" \xB7 "):""},apply(){let n=Ia();ue.setMine(n&&n.s?n.s:null)},edit(n,e){let t=Ia()||{},i=[["home",k("id.home")],["itf",k("id.itf")]].concat(n.filter(l=>l.sector!=null).sort((l,c)=>l.sector-c.sector).map(l=>[l.id,l.name])),s=document.createElement("div");s.id="kimlik",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby","kmh"),s.innerHTML='<form class="kb"><button type="button" class="kx" aria-label="'+Hn(k("id.close"))+'">\u2715</button><canvas width="96" height="120" aria-hidden="true"></canvas><small>'+Hn(k("log.eyebrow"))+'</small><h2 id="kmh">'+Hn(k("id.title"))+"</h2><p>"+Hn(k("id.lead"))+"</p><label>"+Hn(k("id.name"))+'<input name="n" maxlength="24" autocomplete="nickname" value="'+Hn(t.n)+'"></label><label>'+Hn(k("id.sector"))+'<select name="s">'+i.map(l=>'<option value="'+Hn(l[0])+'"'+(l[0]===t.s?" selected":"")+">"+Hn(l[1])+"</option>").join("")+"</select></label><fieldset><legend>"+Hn(k("id.axiom"))+"</legend>"+gu.map((l,c)=>'<label class="ka"><input type="radio" name="a" value="'+(c+1)+'"'+(t.a===c+1?" checked":"")+"><span>"+Hn(l)+"</span></label>").join("")+'</fieldset><div class="kr"><button type="submit" class="ok">'+Hn(k("id.save"))+"</button>"+(t.s?'<button type="button" class="kc">'+Hn(k("id.card"))+"</button>":"")+"</div></form>",document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("on"));let r=s.querySelector("canvas");jf(r.getContext("2d"),48,52,26,"#e8c46a");let o=()=>{s.classList.remove("on"),setTimeout(()=>s.remove(),400)};s.querySelector(".kx").onclick=o,s.addEventListener("keydown",l=>{l.key==="Escape"&&o()}),s.querySelector("form").onsubmit=l=>{l.preventDefault();let c=l.target,u=c.s.value,d=i.find(f=>f[0]===u),h={n:c.n.value.trim().slice(0,24),s:u,sn:d?d[1]:"",a:c.a.value?+c.a.value:0,since:t.since||Date.now()};try{localStorage.setItem("qid",JSON.stringify(h))}catch{}Sn.apply(),o(),e&&e(h)};let a=s.querySelector(".kc");a&&(a.onclick=()=>Sn.card()),setTimeout(()=>{let l=s.querySelector("input[name=n]");l&&l.focus()},60)},card(){let n=Ia();if(!n)return;let e=1200,t=750,i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d"),r=s.createRadialGradient(e*.3,t*.4,40,e*.5,t*.5,e*.75);r.addColorStop(0,"#1b1730"),r.addColorStop(1,"#05050a"),s.fillStyle=r,s.fillRect(0,0,e,t);for(let u=0;u<420;u++){let d=Math.random();s.fillStyle="rgba(255,240,220,"+(.15+d*.6)+")",s.fillRect(Math.random()*e,Math.random()*t,d*2,d*2)}s.strokeStyle="rgba(232,196,106,.6)",s.lineWidth=2,s.strokeRect(24,24,e-48,t-48),jf(s,e*.18,t*.48,80,"#e8c46a"),s.fillStyle="#8f8570",s.font="22px Georgia,serif",s.fillText(k("log.eyebrow").toUpperCase(),e*.33,t*.26),s.fillStyle="#e8c46a",s.font="64px Georgia,serif",s.fillText(n.n||k("id.explorer"),e*.33,t*.4),s.fillStyle="#efe6d0",s.font="italic 30px Georgia,serif",s.fillText(n.sn||"",e*.33,t*.52),n.a&&(s.fillStyle="#d8c9a8",s.font="26px Georgia,serif",s.fillText(gu[n.a-1],e*.33,t*.62));let o={};try{o=JSON.parse(localStorage.getItem("qlog")||"{}")||{}}catch{}let a=Object.keys(o).length,l=Object.values(o).reduce((u,d)=>u+(d.f||[]).length,0);s.fillStyle="#9d927a",s.font="22px Georgia,serif",s.fillText(k("id.stats",{w:a,f:l}),e*.33,t*.74),s.textAlign="right",s.fillStyle="#8f8570",s.font="18px Georgia,serif",s.fillText("QUL EFSANELER\u0130 \xB7 "+(location.host||"qul"),e-60,t-56);let c=document.createElement("a");c.download="qul-kasif-kimligi.png",c.href=i.toDataURL("image/png"),c.click()}};var fl=`precision highp float;
vec3 san(vec3 c){ if(isnan(c.r)||isnan(c.g)||isnan(c.b)) return vec3(0.); return clamp(c,0.,6e3); }
uniform vec2 uRes,uLook,uJit;
uniform vec2 uPos;uniform float uHead,uAlt;
uniform float uT,uDist,uType,uAmp,uFreq,uPow,uSea,uFog,uStars,uNight,uCrack,uRing,uMoons,uAur,uTwin,uSeed,uRidge,uSnow,uClear,uCloud,uWave,uCycle,uHeat,uPart,uFlock,uFlash,uDive,uCity,uStruct,uForest,uErode;
uniform vec3 uLo,uHi,uW1,uW2,uSkyH,uSkyZ,uSunC,uSun,uBR,uPH,uPZ,uPC;uniform float uBM,uSI,uPhys,uQ,uWet,uLat,uSeason,uAut,uLights,uOrb,uCalm,uWind,uEcl,uGrid,uTide,uTideA,uReal,uLST,uLatR,uCave,uCS,uCX,uCYaw,uSig,uScan,uTb,uMag;uniform sampler2D tSky;uniform vec3 uMoon0;uniform vec3 uPoi[5];uniform vec4 uNb[9];uniform vec3 uNc[9];
vec3 gH,gZ,gC;float gT=3.;
float hs(vec2 p){p=fract(p*vec2(.1031,.1030)+uSeed*.0137);p+=dot(p,p.yx+33.33);return fract((p.x+p.y)*p.x);}
float nz(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*f*(f*(f*6.-15.)+10.);return mix(mix(hs(i),hs(i+vec2(1,0)),f.x),mix(hs(i+vec2(0,1)),hs(i+vec2(1,1)),f.x),f.y);}
vec3 nzd(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*f*(f*(f*6.-15.)+10.),du=30.*f*f*(f*(f-2.)+1.);
  float a=hs(i),b=hs(i+vec2(1,0)),c=hs(i+vec2(0,1)),d=hs(i+vec2(1,1));float k1=b-a,k2=c-a,k4=a-b-c+d;
  return vec3(a+k1*u.x+k2*u.y+k4*u.x*u.y,du*vec2(k1+k4*u.y,k2+k4*u.x));}
float fb(vec2 p,int o){float s=0.,a=.5;for(int i=0;i<7;i++){if(i>=o)break;s+=a*nz(p);p=p*2.03+vec2(17.1,9.2);a*=.5;}return s;}
float SEA(){return uSea<0.?-1e3:uSea*uAmp+uTide;}
vec3 stc(vec2 p){
  if(uStruct<=0.)return vec3(0.);
  vec2 ci=floor(p/26.);float r=hs(ci+vec2(3.,5.));if(r<.62)return vec3(0.);
  vec2 ct=(ci+.5+(vec2(hs(ci+1.),hs(ci+2.))-.5)*.5)*26.;vec2 d=p-ct;
  float hg=(5.+r*9.)*uStruct;bool sq=hs(ci+9.)>.5;
  float q=sq?max(abs(d.x),abs(d.y)):length(d)*1.3;float st=hg-q*(sq?.9:1.4);
  if(st<=0.)return vec3(0.);
  return vec3(floor(st*1.5)/1.5,ct);
}
float Hb(vec2 p,int o){
  vec2 q=p*uFreq;float s=0.,a=.5,n=0.;vec2 dd=vec2(0.);
  for(int i=0;i<7;i++){if(i>=o)break;vec3 v=nzd(q);
    if(uRidge>.5){float t=2.*v.x-1.;v=vec3(1.-abs(t),-2.*sign(t)*v.yz);}
    dd+=v.yz;s+=a*v.x/(1.+uErode*dot(dd,dd));n+=a;q=q*2.03+vec2(17.1,9.2);a*=.5;}
  float h=uAmp*pow(clamp(s/n*1.25,0.,1.3),uPow);float sl=uSea*uAmp;
  if(uDive>0.&&uSea>0.&&h<sl)h=sl-(sl-h)*(1.+uDive*4.);
  return h;
}
float spire(vec2 p){vec2 ci=floor(p/30.);float r=hs(ci+71.);if(r<.55)return 0.;vec2 ct=(ci+.5+(vec2(hs(ci+72.),hs(ci+73.))-.5)*.5)*30.;vec2 d=p-ct;
  float a=hs(ci+74.)*3.14;d=mat2(cos(a),-sin(a),sin(a),cos(a))*d;float q=max(abs(d.x)*1.3,abs(d.y))+abs(d.x)*.35;float hg=12.+r*16.;return max(0.,hg*(1.-q/(2.6+r*2.)));}
float H(vec2 p,int o){
  float h=Hb(p,o);vec3 s=stc(p);
  if(s.x>0.)h=max(h,Hb(s.yz,2)+s.x);
  if(uSig==1.){float sp=spire(p);if(sp>0.)h=max(h,Hb(p,2)+sp);}
  return h;
}

float h1(float n){return fract(sin(n)*43758.5453);}
float n3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);float n=i.x+i.y*57.+i.z*113.;
  return mix(mix(mix(h1(n),h1(n+1.),f.x),mix(h1(n+57.),h1(n+58.),f.x),f.y),mix(mix(h1(n+113.),h1(n+114.),f.x),mix(h1(n+170.),h1(n+171.),f.x),f.y),f.z);}
vec2 rsi(vec3 o,vec3 d,float r){float b=dot(o,d),c=dot(o,o)-r*r,h=b*b-c;if(h<0.)return vec2(1e9,-1e9);h=sqrt(h);return vec2(-b-h,-b+h);}
vec3 atmo(vec3 rd,vec3 sd){
  vec3 o=vec3(0.,min(6360.25+uOrb*.06,6417.),0.);rd=normalize(vec3(rd.x,max(rd.y,0.),rd.z));
  float tm=rsi(o,rd,6420.).y,oR=0.,oM=0.;vec3 sR=vec3(0.),sM=vec3(0.);
  for(int i=0;i<10;i++){float a=(float(i)+.5)*.1,sg=tm*.2*a;vec3 p=o+rd*(tm*a*a);float h=length(p)-6360.;
    float dR=exp(-h*.125)*sg,dM=exp(-h/1.2)*sg;oR+=dR;oM+=dM;
    float sl=rsi(p,sd,6420.).y*.25,lR=0.,lM=0.;bool ok=true;
    for(int j=0;j<4;j++){vec3 q=p+sd*(sl*(float(j)+.5));float hq=length(q)-6360.;if(hq<0.){ok=false;break;}lR+=exp(-hq*.125)*sl;lM+=exp(-hq/1.2)*sl;}
    if(ok){vec3 at=exp(-(uBR*(oR+lR)+uBM*1.1*(oM+lM)));sR+=at*dR;sM+=at*dM;}}
  float mu=dot(rd,sd),g=.76,g2=g*g;
  return uSI*(sR*uBR*.0597*(1.+mu*mu)+sM*uBM*.1194*((1.-g2)*(1.+mu*mu))/((2.+g2)*pow(1.+g2-2.*g*mu,1.5)));
}
const float CB=40.,CT=78.;
float wm(vec2 x){float cv=clamp(uCloud,0.,1.6);return smoothstep(.72-.42*cv,1.02-.42*cv,fb(x*.0045+vec2(uT*.004,uT*.0025)+uSeed,4));}
float cden(vec3 p,bool hi){float hf=(p.y-CB)/(CT-CB);if(hf<0.||hf>1.)return 0.;
  float b=wm(p.xz)*smoothstep(0.,.12,hf)*smoothstep(1.,.45,hf);if(b<.02)return 0.;
  vec3 q=p*.055+vec3(uT*.02,0.,uT*.012);float dt=n3(q);if(hi)dt=dt*.62+n3(q*2.7)*.38;
  return clamp(b-(1.-dt)*.6*(1.-b*.4),0.,1.)*1.6;}
float hg(float m,float g){return (1.-g*g)/pow(1.+g*g-2.*g*m,1.5);}
vec3 vclouds(vec3 ro,vec3 rd,vec3 col){
  if(rd.y<.015)return col;
  float t0=(CB-ro.y)/rd.y;if(t0>2200.||t0<0.)return col;float t1=min((CT-ro.y)/rd.y,t0+500.);
  float ns=uQ>1.5?18.:10.,st=(t1-t0)/ns,j=hs(gl_FragCoord.xy+fract(uT*7.)*91.);
  float mu=dot(rd,uSun),ph=mix(hg(mu,.6),hg(mu,-.25),.35);
  float T=1.;vec3 L=vec3(0.),amb=mix(gZ,gH,.4)*1.1;
  for(int i=0;i<18;i++){if(float(i)>=ns)break;vec3 p=ro+rd*(t0+st*(float(i)+j));float d=cden(p,true);
    if(d>.001){float ls=cden(p+uSun*3.,false)+cden(p+uSun*8.,false)+cden(p+uSun*15.,false);float hf=(p.y-CB)/(CT-CB);
      vec3 lum=gC*exp(-ls*2.2)*(1.-exp(-d*6.))*ph*2.2+amb*(.35+.65*hf);
      float a=1.-exp(-d*st*.11);L+=T*a*lum;T*=1.-a;if(T<.02)break;}}
  float fa=exp(-t0*.0011);
  return col*T+mix(col*(1.-T),L,fa);
}

vec3 nbs(vec3 rd){vec3 a=vec3(0.);for(int i=0;i<9;i++){vec4 b=uNb[i];if(b.w<.5)continue;float d=dot(rd,b.xyz);if(d<.99)continue;float an=acos(min(d,1.));
  if(b.w<1.5)a+=uNc[i]*(smoothstep(.006,.0025,an)*3.+exp(-an*90.)*.22);
  else{vec3 e1=normalize(cross(b.xyz,vec3(0.,1.,.3)));vec3 e2=cross(b.xyz,e1);vec3 q=rd-b.xyz*d;vec2 l=vec2(dot(q,e1),dot(q,e2))/.045;l.y*=1.8;float rr=length(l);float ang=atan(l.y,l.x)+rr*2.6;
    a+=uNc[i]*(exp(-rr*2.2)*(.25+.6*pow(.5+.5*cos(2.*ang),2.))+exp(-rr*rr*14.)*.8)*.6;}}
  return a;}
vec4 rsky(vec3 rd){float sp=sin(uLatR),cp=cos(uLatR);vec3 P=vec3(0.,sp,cp),M=vec3(0.,cp,-sp);float sd=clamp(dot(rd,P),-1.,1.);
  float ha=atan(-rd.x,dot(rd,M));float ra=uLST-ha;vec4 t=texture2D(tSky,vec2(fract(ra/6.2832),.5+asin(sd)/3.14159));t.rgb*=t.rgb*4.;return t;}
vec3 space(vec3 rd){if(uReal>0.){vec4 t=rsky(rd);float sd0=max(dot(rd,uSun),0.);return t.rgb*1.3+vec3(.001,.0015,.003)+vec3(1.,.97,.92)*(pow(sd0,3000.)*30.+pow(sd0,80.)*.12)+nbs(rd);}
  vec3 c=vec3(.0015,.002,.004);vec2 sp=vec2(atan(rd.x,rd.z),asin(clamp(rd.y,-1.,1.)))*70.;vec2 ci=floor(sp);float r=hs(ci);
  if(r>.975){vec2 off=(vec2(hs(ci+7.),hs(ci+13.))-.5)*.6;c+=mix(vec3(.8,.9,1.),vec3(1.,.85,.7),hs(ci+3.))*smoothstep(.22,0.,length(fract(sp)-.5-off))*1.2;}
  vec3 nm=normalize(vec3(.3,.8,.5));float mw=exp(-pow(dot(rd,nm)*5.5,2.));float ds=fb(rd.xz*4.+rd.y*3.+uSeed,5);c+=mix(vec3(.45,.5,.8),vec3(.9,.7,.6),ds)*mw*(.25+.75*ds)*.12;
  float sd=max(dot(rd,uSun),0.);c+=vec3(1.,.97,.92)*(pow(sd,3000.)*30.+pow(sd,80.)*.12);
  return c+nbs(rd);}
vec3 orbit(vec3 ro,vec3 rd){
  if(uSig==9.)return space(rd);
  float R=8000.;vec3 C=vec3(ro.x,-R,ro.z);vec3 col=space(rd);
  float ak=clamp(uFog*60.,0.,1.);vec3 ac=uPhys>0.?normalize(uBR+1e-5)*vec3(.6,.75,1.)*.9:uSkyZ*1.6+uSkyH*.4;
  vec2 hp=rsi(ro-C,rd,R),ha=rsi(ro-C,rd,R+160.);
  if(hp.x>0.){vec3 p=ro+rd*hp.x;vec3 n=normalize(p-C);vec2 q=p.xz;
    float m=fb(q*.0011+uSeed*.1,6);float sf=uSea<0.?-1.:.32+uSea*.42;bool wa=m<sf;
    vec3 land=mix(uLo,uHi,smoothstep(.3,.85,m));if(uForest>0.)land=mix(land,vec3(.07,.2,.05),.55);
    float pole=smoothstep(.55,.85,abs(q.y)/5000.+.15*fb(q*.003,3));if(uType!=3.&&uPhys>0.)land=mix(land,vec3(.9),pole);
    vec3 alb=wa?uW2*.55+uW1*.08:land;float dif=max(dot(n,uSun),0.);
    vec3 c=alb*(vec3(1.,.97,.92)*dif*1.25+vec3(.015));
    if(wa)c+=vec3(1.,.95,.85)*pow(max(dot(reflect(rd,n),uSun),0.),80.)*.9*dif;
    if(uType==3.)c+=uW1*smoothstep(.56,.62,m)*1.6;
    if(uCloud>0.){float cl=wm(q);c=mix(c,vec3(1.)*(dif*1.1+.02),cl*.9);}
    if(uLights>0.&&!wa)c+=vec3(1.,.7,.4)*step(.85,hs(floor(q*.04)))*clamp(-dot(n,uSun)*4.,0.,1.)*.7;
    float mu=max(dot(n,-rd),0.);c=mix(c,ac*(dif*.9+.03),(1.-mu*mu)*.55*ak);
    col=c;}
  if(ha.y>0.&&ak>0.){float t0=max(ha.x,0.),t1=hp.x>0.?hp.x:ha.y;float tl=clamp((t1-t0)/900.,0.,1.);vec3 pm=ro+rd*(t0+t1)*.5;
    float lit=clamp(dot(normalize(pm-C),uSun)*1.6+.35,0.,1.);float fw=pow(max(dot(rd,uSun),0.),6.);
    col+=ac*tl*lit*.9*ak+vec3(1.,.6,.35)*tl*fw*lit*.5*ak;}
  return col;}
vec3 sky(vec3 rd){
  float y=clamp(rd.y,0.,1.);
  vec3 c=uPhys>0.?atmo(rd,uSun)*(1.-.6*clamp((uCloud-1.)/.6,0.,1.))*(1.-.9*uEcl):mix(gH,gZ,pow(y,.45));
  float day=clamp(dot(gZ,vec3(.33))*3.,0.,1.);
  float sd=max(dot(rd,uSun),0.);
  float atm=clamp(dot(gH+gZ,vec3(.5))*4.+.05,0.,1.);
  c+=gC*(pow(sd,1400.)*7.+(uPhys>0.?pow(sd,300.)*.6:1.)*atm*(pow(sd,28.)*.3+pow(sd,4.)*.1*(1.-uNight)));
  if(uEcl>0.){float an=acos(clamp(dot(rd,uSun),-1.,1.));c+=vec3(1.,.93,.82)*exp(-max(an-.05,0.)*28.)*uEcl*.9*(.8+.2*nz(vec2(atan(rd.x,rd.z)*20.,an*40.)));}
  if(uTwin>0.){vec3 s2=normalize(uSun+vec3(.34,.1,.08));float d2=max(dot(rd,s2),0.);c+=gC.zyx*(pow(d2,900.)*4.+pow(d2,22.)*.22);}
  if(uReal>0.&&rd.y>-.05){vec4 t=rsky(rd);c+=t.rgb*1.25*(1.-day)*(.92+.08*sin(uT*4.+t.r*60.));if(uGrid>0.)c+=vec3(.35,.55,1.)*t.a*.22*uGrid*(1.-day*.6);}
  else if(uStars>0.&&rd.y>-.05){
    vec2 sp=vec2(atan(rd.x,rd.z),asin(clamp(rd.y,-1.,1.)))*70.;vec2 ci=floor(sp);float r=hs(ci);
    if(r>.982){vec2 off=(vec2(hs(ci+7.),hs(ci+13.))-.5)*.6;float st=smoothstep(.22,.0,length(fract(sp)-.5-off));
      c+=mix(vec3(.8,.9,1.),vec3(1.,.85,.7),hs(ci+3.))*st*(.6+.4*sin(uT*3.+r*80.))*uStars*(1.-day);}
    c+=vec3(.05,.06,.1)*uStars*(1.-day)*smoothstep(.55,.9,fb(rd.xz*3.+rd.y*2.,4))*.5;
    vec3 nm=normalize(vec3(.3,.8,.5));float mw=exp(-pow(dot(rd,nm)*5.5,2.));float dust=fb(rd.xz*4.+rd.y*3.+uSeed,5);
    c+=mix(vec3(.45,.5,.8),vec3(.9,.7,.6),dust)*mw*(.25+.75*dust)*.16*uStars*(1.-day)*(1.-.5*smoothstep(.5,.8,fb(rd.xz*9.+rd.y*7.,4)));
  }
  if(rd.y>-.02)c+=nbs(rd)*(1.-day*.85);
  if(uGrid>0.&&rd.y>-.01){float el=asin(clamp(rd.y,-1.,1.)),az=atan(rd.x,rd.z);float g1=smoothstep(.0035,0.,abs(fract(el/.2618+.5)-.5)*.2618),g2=smoothstep(.0035,0.,abs(fract(az/.5236+.5)-.5)*.5236*cos(el))*step(el,1.3);
    c+=vec3(.55,.7,1.)*max(g1,g2)*.22*uGrid+vec3(.9,.8,.5)*smoothstep(.004,0.,abs(el))*.4*uGrid;}
  if(uAur>0.&&rd.y>0.){
    float cu=pow(max(0.,sin(rd.x*5.+nz(vec2(rd.x*3.,uT*.08))*5.)),3.)*smoothstep(.05,.35,rd.y)*smoothstep(.95,.4,rd.y);
    cu*=.6+.4*nz(vec2(rd.x*40.,uT*.3));
    vec3 auc=uSig==4.?(.5+.5*cos(6.2832*(rd.x*.35+rd.y*.6+uT*.015+vec3(0.,.33,.67))))*1.2:mix(vec3(.15,1.,.55),vec3(.6,.25,1.),clamp(rd.y*1.6,0.,1.));
    c+=auc*cu*uAur*.9;
  }
  if(uRing>0.){
    vec3 nr=normalize(vec3(.22,.62,-.18));float f=abs(dot(rd,nr));
    float al=smoothstep(.03,.05,f)*smoothstep(.19,.15,f);al*=.55+.45*sin(f*160.+nz(vec2(f*40.,1.))*3.);al*=smoothstep(-.03,.06,rd.y);
    c=mix(c,mix(uHi,vec3(.9,.85,.75),.5)*.9,al*.65*uRing);
  }
  for(int i=0;i<2;i++){
    if(float(i)>=uMoons)break;
    vec3 m=normalize(i==0?uMoon0:vec3(-.62,.34,.55));float rad=i==0?.055:.03;float dm=dot(rd,m);
    if(dm>0.){vec3 q=rd-m*dm;float r=length(q)/rad;
      if(r<1.){float z=sqrt(1.-r*r);vec3 nn=normalize(q/rad+m*z);float l=clamp(dot(nn,uSun)*1.3+.12*(1.-uEcl),0.,1.);
        vec3 mc=mix(vec3(.45,.43,.42),vec3(.82,.8,.76),fb(nn.xz*6.+nn.y*3.+float(i)*9.,4));
        c=mix(c,mc*l*1.2,smoothstep(1.,.93,r));}}
  }
  if(uFlock>0.&&rd.y>.04&&day>.15){
    vec2 sp=vec2(atan(rd.x,rd.z),rd.y);float vis=day*uFlock;
    for(int i=0;i<16;i++){float fi=float(i);vec2 c0=vec2(sin(uT*.04+uSeed)*.9,.3+.08*sin(uT*.06));
      vec2 off=(vec2(hs(vec2(fi,2.)),hs(vec2(fi,5.)))-.5)*vec2(.34,.1);off.x-=abs(off.y)*1.2;
      vec2 q=sp-(c0+off+vec2(sin(uT*.9+fi)*.003,0.));float fl=.35+.65*abs(sin(uT*7.+fi*2.3));
      float e=length(vec2(q.x/.014,q.y/(.0035+.008*fl)));c=mix(c,c*.12,smoothstep(1.,.6,e)*vis);}
  }
  if((uPhys<.5||uQ<.5)&&uCloud>0.&&rd.y>.02){
    vec2 cp=rd.xz/(rd.y+.12)*1.3+vec2(uT*.01,uT*.006)+uSeed;float cd=fb(cp,5)+max(uCloud-1.,0.)*.45;float cl=smoothstep(.48,.85,cd)*smoothstep(.02,.2,rd.y);
    float cs=fb(cp+uSun.xz*.35,4);float lt=clamp(.55+(cd-cs)*3.2,.15,1.);
    vec3 cc=mix(vec3(.55,.58,.68)*(.3+.7*day),mix(vec3(1.),gC,.35)*(.5+1.1*day),lt);cc=mix(cc,gH,.15);cc*=1.-.62*clamp((uCloud-1.)*1.7,0.,1.);c=mix(c,cc,min(1.,cl*uCloud));
  }
  return c;
}

float h3(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7))+uSeed)*43758.5453);}
vec3 cpath(float z){return vec3(sin(z*.11)*6.+sin(z*.037)*10.,sin(z*.07)*2.5,z);}
float crad(float z){float ch=smoothstep(.75,1.,.5+.5*sin(z*.105+1.3));return 3.+ch*4.5+(nz(vec2(z*.2,uSeed))-.5)*1.4;}
float cmapC(vec3 p){vec3 c=cpath(p.z);float r=crad(p.z);float d=r-length(p.xy-c.xy);d+=(n3(p*.55)-.5)*1.3+(n3(p*1.6)-.5)*.4;
  return min(d,p.y-(c.y-r*.62)+(n3(p*.9)-.5)*.35);}
vec3 caveCol(vec3 ro,vec3 rd,vec3 fwc){
  float t=.05;bool hit=false;for(int i=0;i<90;i++){vec3 p=ro+rd*t;float d=cmapC(p);if(d<.01+t*.002){hit=true;break;}t+=d*.6;if(t>60.)break;}
  vec3 fogc=uCave<1.5?vec3(.02,.03,.025):uCave<2.5?vec3(.03,.07,.11):vec3(.03,.025,.02);
  if(!hit)return fogc;
  vec3 p=ro+rd*t;float e=.04;vec3 n=normalize(vec3(cmapC(p+vec3(e,0.,0.))-cmapC(p-vec3(e,0.,0.)),cmapC(p+vec3(0.,e,0.))-cmapC(p-vec3(0.,e,0.)),cmapC(p+vec3(0.,0.,e))-cmapC(p-vec3(0.,0.,e))));
  vec3 Lv=ro-p;float ld=length(Lv);Lv/=ld;float spot=smoothstep(.8,.97,dot(-Lv,fwc));float fl=max(dot(n,Lv),0.)*(.2+.8*spot)/(1.+ld*ld*.03)*2.4*(1.-uCalm*.3);
  float rn=n3(p*2.1),rn2=n3(p*7.);vec3 col;
  if(uCave<1.5){
    vec3 alb=vec3(.14,.12,.1)*(.55+.7*rn)*(.8+.4*rn2);vec3 q=p*1.4;vec3 qi=floor(q);float hb=h3(qi);float gl=step(.84,hb)*smoothstep(.38,.08,length(fract(q)-.5-(vec3(h3(qi+1.),h3(qi+2.),h3(qi+3.))-.5)*.4));
    vec3 fc=mix(vec3(1.,.55,.15),vec3(.2,.95,.85),step(.5,h3(qi+7.)));float pul=.7+.3*sin(uT*1.5+hb*30.);
    vec3 amb=mix(vec3(.9,.5,.2),vec3(.2,.8,.7),.5+.5*sin(p.z*.15))*.07;
    col=alb*(vec3(1.,.95,.85)*fl+amb)+fc*gl*pul*2.4*smoothstep(.0,.4,n.y+.6);
  }else if(uCave<2.5){
    float fr=pow(1.-abs(dot(n,rd)),3.);vec3 alb=mix(vec3(.45,.68,.85),vec3(.75,.9,1.),rn);
    col=alb*(vec3(.9,.95,1.)*fl+vec3(.05,.12,.2))+vec3(.08,.35,.6)*(.3+.7*fr)*(.25+.2*rn2)+vec3(.9,.97,1.)*pow(max(dot(reflect(rd,n),Lv),0.),50.)*spot*1.4/(1.+ld*.2);
    col+=vec3(.2,.6,1.)*.12*smoothstep(.55,.75,n3(p*.3+vec3(0.,0.,uT*.02)));
  }else{
    vec3 alb=vec3(.21,.18,.15)*(.6+.6*rn);vec3 c0=cpath(p.z);float rr=crad(p.z);
    float sup=smoothstep(.05,.0,abs(fract(p.z/8.)-.5)-.44);if(sup>0.&&length(p.xy-c0.xy)>rr*.7)alb=mix(alb,vec3(.32,.2,.1)*(.7+.5*rn2),sup);
    float rail=smoothstep(.06,.0,abs(abs(p.x-c0.x)-.6))*step(p.y,c0.y-rr*.55);alb=mix(alb,vec3(.4,.38,.36),rail*.8);
    col=alb*(vec3(1.,.95,.85)*fl+vec3(.02));
    float lz=floor(p.z/16.+.5)*16.;for(int k=-1;k<=1;k++){float z=lz+float(k)*16.;vec3 lp=cpath(z)+vec3(0.,crad(z)*.55,0.);vec3 dl=lp-p;float dd=length(dl);col+=alb*vec3(1.,.72,.38)*max(dot(n,dl/dd),0.)*3./(1.+dd*dd*.08);}
  }
  float lz2=floor(ro.z/16.+.5)*16.;if(uCave>2.5){for(int k=0;k<3;k++){float z=lz2+float(k)*16.;vec3 lp=cpath(z)+vec3(0.,crad(z)*.55,0.);vec3 w=lp-ro;float tc=dot(w,rd);if(tc>0.&&tc<t){float dm=length(w-rd*tc);col+=vec3(1.,.75,.4)*exp(-dm*dm*40.)*2.;}}}
  return mix(fogc,col,exp(-t*.045));
}
void camera(vec2 cx,float head,vec2 lk,float al,float T,float orb,out vec3 ro,out vec3 fw,out vec3 rt,out vec3 up){
  float dsc=exp(-T*.5);vec2 hd=vec2(sin(head),cos(head));float sea=SEA();
  float g0=max(H(cx,3),sea),g1=max(H(cx+hd*7.,3),sea),g2=max(H(cx+hd*15.,3),sea),g3=max(H(cx+hd*25.,3),sea);
  float camY=max(.4*g0+.3*g1+.2*g2+.1*g3,g0+uClear*.5)+uClear*.5+orb;
  if(uDive>0.){float fh=H(cx,3);fh=.6*fh+.4*max(H(cx+hd*5.,3),fh);
    float cd=mix(min(fh+1.8,sea-.35),fh+1.2,smoothstep(sea-1.4,sea-.4,fh));camY=mix(camY,cd,uDive);}
  camY+=al*(1.-uDive);
  ro=vec3(cx.x,camY,cx.y);
  float yaw=head+lk.x*.85,pit=-lk.y*.4-.05-.65*smoothstep(0.,2600.,orb)-.2*smoothstep(0.,150.,orb);
  fw=vec3(sin(yaw)*cos(pit),sin(pit),cos(yaw)*cos(pit));
  rt=normalize(cross(vec3(0,1,0),fw));up=cross(fw,rt);
}
void main(){
  gH=uSkyH;gZ=uSkyZ;gC=uSunC;
  if(uPhys>0.){float oc=clamp((uCloud-1.)/.6,0.,1.);gH=uPH*(1.-.45*oc);gZ=uPZ*(1.-.55*oc);gC=uPC*(1.-.8*oc);}
  if(uEcl>0.){gC*=1.-.96*uEcl;gH*=1.-.85*uEcl;gZ*=1.-.9*uEcl;}
  else if(uCycle>0.){float dk=clamp(uSun.y*4.+.35,0.,1.);float tw=smoothstep(.45,.0,abs(uSun.y-.03));
    gH=mix(gH*.04+vec3(.008,.01,.03),gH,dk)+vec3(1.,.42,.18)*tw*.7;gZ=mix(gZ*.03+vec3(0.,.004,.02),gZ,dk)+vec3(.12,.05,.1)*tw*.3;
    gC=mix(vec3(1.,.42,.18)*gC.x*.9,gC,smoothstep(0.,.3,uSun.y));}
  float dsc=exp(-uT*.5);
  vec2 uv=(gl_FragCoord.xy+uJit-.5*uRes)/uRes.y;
  float sea=SEA();vec3 ro,fw,rt,up;camera(uPos,uHead,uLook,uAlt,uT,uOrb,ro,fw,rt,up);
  vec3 rd=normalize(fw+(uv.x*rt+uv.y*up)*1.25);
  if(uCave>0.){vec3 T=normalize(cpath(uCS+1.)-cpath(uCS)),R=normalize(cross(vec3(0.,1.,0.),T));vec3 cro=cpath(uCS)+R*uCX;cro.y=cpath(uCS).y-crad(uCS)*.62+1.7;
    float yw=uCYaw+uLook.x*.9,pt=-uLook.y*.6;vec3 f0=T*cos(yw)+R*sin(yw);vec3 fwc=normalize(f0*cos(pt)+vec3(0.,1.,0.)*sin(pt));vec3 rtc=normalize(cross(vec3(0.,1.,0.),fwc)),upc=cross(fwc,rtc);
    gl_FragColor=vec4(san(caveCol(cro,normalize(fwc+(uv.x*rtc+uv.y*upc)*1.25),fwc)),6e4);return;}
  vec3 sun=uSun;
  bool uw=uDive>0.&&ro.y<sea;float ts=1e9;if(uw&&rd.y>.001)ts=(sea-ro.y)/rd.y;bool surf=false;
  float tt=.2,tmax=uSig==9.?0.:uOrb>90.?0.:(uType==1.?90.:80.)+max(0.,ro.y-uAmp*1.5)*3.;bool hit=false;
  for(int i=0;i<110;i++){
    vec3 p=ro+rd*tt;vec2 dq=p.xz-ro.xz;float d=p.y+dot(dq,dq)/16000.-(uw?H(p.xz,4):max(H(p.xz,4),sea));
    if(uw&&tt>=ts){surf=true;break;}
    if(d<.012*tt){hit=true;break;}
    tt+=max(d*.5,.02*tt+.01);if(uw&&tt>ts)tt=ts;if(tt>tmax)break;
  }
  vec3 col;
  vec3 fogc=mix(gH,gZ,.12)+gC*pow(max(dot(rd,sun),0.),6.)*.25*(1.-uNight);
  if(uw){
    float day=clamp(uSun.y*3.+.5,.15,1.);
    vec3 Tr=exp(-tt*vec3(.16,.065,.04));
    vec3 wcol=mix(uW2,uW1,clamp(.5+.5*rd.y,0.,1.))*(.35+.65*day);
    float rays=pow(max(rd.y,0.),2.)*(.4+.6*nz(vec2(atan(rd.x,rd.z)*8.,uT*.2)))*day;
    vec3 base=wcol*.7+gC*rays*.4;
    if(hit){
      vec3 p=ro+rd*tt;float h=H(p.xz,4),e=.02*tt+.01;
      vec3 n=normalize(vec3(H(p.xz-vec2(e,0),5)-H(p.xz+vec2(e,0),5),2.*e,H(p.xz-vec2(0,e),5)-H(p.xz+vec2(0,e),5)));
      float dn=fb(p.xz*uFreq*5.,3);vec3 c=mix(uLo,uHi,smoothstep(.0,.6,h/uAmp+.2*(dn-.5)))*(.7+.5*dn);
      float c1=nz(p.xz*1.1+vec2(uT*.2,0.)),c2=nz(p.xz*1.43-vec2(0.,uT*.17)+5.);float ca=smoothstep(.12,.0,abs(c1-c2));
      float dl=exp(-max(sea-p.y,0.)*.22);
      base=c*(.2+.9*max(n.y,0.))*dl*(1.+ca*1.6)*vec3(.55,.9,1.)*day;
      if(uCity>0.){vec2 cc=floor(p.xz*.45);if(hs(cc+7.)>.72){vec2 ct=(cc+.5+(vec2(hs(cc+1.),hs(cc+2.))-.5)*.4)/.45;float dd=length(p.xz-ct);
        base+=vec3(1.,.8,.4)*smoothstep(.55,.1,dd)*step(.5,hs(floor(p.xz*9.)+cc))*1.8+vec3(.2,.7,1.)*smoothstep(1.3,.3,dd)*.3;}}
    }else if(surf){
      float win=smoothstep(.62,.78,rd.y);
      base=mix(wcol*.9,sky(normalize(vec3(rd.x*.7,rd.y*1.3+.1,rd.z*.7)))*1.2,win)+gC*rays*.3;
    }
    col=base*Tr+wcol*(1.-Tr);gT=uTb-12.;
    if(uSea>0.){float tl=(hit||surf)?tt:60.,tk=1e9;vec3 kc=vec3(0.);vec2 o=ro.xz/3.,dr=rd.xz;vec2 cl=floor(o),sg=sign(dr+1e-6),tD=abs(1./max(abs(dr),vec2(1e-4))),tM=(sg*(cl-o)+sg*.5+.5)*tD;
      for(int i=0;i<14;i++){float r=hs(cl+41.);
        if(r>.6){vec2 c=(cl+.5+(vec2(hs(cl+42.),hs(cl+43.))-.5)*.6)*3.;float hb=H(c,3),top=min(hb+2.5+r*3.,sea-.3);
          if(top>hb+.5){vec2 d0=ro.xz-c;float a2=max(dot(rd.xz,rd.xz),1e-5),tc=-dot(d0,rd.xz)/a2;
            if(tc>0.&&tc<tl&&tc<tk){float y=ro.y+rd.y*tc,f=clamp((y-hb)/(top-hb),0.,1.);vec2 pc=d0+rd.xz*tc+vec2(sin(uT*1.1+y*1.3+r*9.),cos(uT*.9+y+r*5.))*.3*f;float dm=length(pc);
              if(dm<.17&&y>hb&&y<top){tk=tc;kc=mix(vec3(.04,.14,.05),vec3(.2,.34,.1),.5+.5*sin(y*6.+r*10.))*(.35+.65*day)*(1.-dm*3.5)*(.6+.6*f);}}}}
        if(tM.x<tM.y){tM.x+=tD.x;cl.x+=sg.x;}else{tM.y+=tD.y;cl.y+=sg.y;}}
      if(tk<1e8){vec3 Tk=exp(-tk*vec3(.16,.065,.04));col=kc*Tk+wcol*(1.-Tk);}}
  }else if(hit){
    vec3 p=ro+rd*tt;float h=H(p.xz,4);
    vec3 amb=(mix(gZ,gH,.5)*.42+vec3(.02,.025,.04));
    if(h>=sea){
      float e=.02*tt+.01;
      float hx0=H(p.xz-vec2(e,0),6),hx1=H(p.xz+vec2(e,0),6),hz0=H(p.xz-vec2(0,e),6),hz1=H(p.xz+vec2(0,e),6),hc=H(p.xz,6);
      vec3 n=normalize(vec3(hx0-hx1,2.*e,hz0-hz1));
      float lap=(hx0+hx1+hz0+hz1)*.25-hc,k=1.8/(e+.04);float ao=1.-clamp(lap*k,0.,.5)+clamp(-lap*k,0.,.12);
      if(tt<55.&&uQ>.5){float hao=0.;for(int i=0;i<6;i++){float an=float(i)*1.0472+.5;vec2 dd=vec2(cos(an),sin(an));hao+=max(0.,H(p.xz+dd*1.2,3)-hc)/1.2+max(0.,H(p.xz+dd*3.5,3)-hc)/3.5*.7;}ao*=mix(clamp(1.-hao*.12,.25,1.),1.,smoothstep(35.,55.,tt));}
      vec2 bg=p.xz*14.;float bf=exp(-tt*.07);n=normalize(n+vec3(nz(bg)-.5,0.,nz(bg+9.)-.5)*.35*bf);
      vec2 bg2=p.xz*55.;n=normalize(n+vec3(nz(bg2)-.5,0.,nz(bg2+4.)-.5)*.25*exp(-tt*.2));
      if(uErode<.5&&uType==0.){float rp=cos((p.x*.8+p.z*.35+fb(p.xz*.7,2)*5.)*14.);n=normalize(n+vec3(rp*.12*bf,0.,rp*.05*bf));}
      float alt=h/uAmp,dn=fb(p.xz*uFreq*5.,3),slope=1.-n.y;
      vec3 c=mix(uLo,uHi,smoothstep(.12,.7,alt+.25*(dn-.5)));
      if(uType==1.){float b=.5+.5*sin(p.x*.22+fb(p.xz*uFreq*1.3,4)*7.);c=mix(uLo,uHi,b);}
      else{c=mix(c,uHi*.55+.05,smoothstep(.28,.6,slope));c=mix(c,c*.68,smoothstep(.4,.6,sin(h*14.+dn*3.)*.5+.5)*smoothstep(.25,.55,slope));c=mix(c,c*vec3(1.1,.95,.85),fb(p.xz*.01+uSeed,3));}
      float sl=(uSnow>0.?uSnow:(uType==2.||uType==0.)&&uPhys>0.?1.25:9.)-.75*abs(uLat)+.1*uSeason;if(uSig==6.)sl=9.;float snw=0.;if(sl<1.2){snw=smoothstep(sl,sl+.12,alt+.12*dn-slope*.7);c=mix(c,vec3(.85,.9,.95),snw);}
      if(uType==2.&&uSea>0.){vec3 gr=mix(vec3(.1,.26,.06),vec3(.32,.36,.12),fb(p.xz*.6,3));gr=mix(gr,vec3(.42,.3,.1),uAut*.65);gr*=1.+.16*uWind*sin(dot(p.xz,vec2(.8,.5))*.9-uT*2.2+fb(p.xz*.15,2)*4.)*exp(-tt*.04);c=mix(c,gr,smoothstep(.32,.12,slope)*smoothstep(uSea+.04,uSea+.12,alt)*smoothstep(.78,.5,alt)*.75*(1.-.8*abs(uLat))*(1.-snw));}
      if(sea>-100.&&alt<uSea+.05)c=mix(c,vec3(.45,.38,.24),smoothstep(uSea+.05,uSea,alt)*.7);
      if(sea>-100.){float hiT=uSea*uAmp+uTideA;float wb=smoothstep(hiT+.03*uAmp,hiT-.02,h);c*=mix(1.,.6,wb);c=mix(c,c*vec3(.8,.95,.75),wb*step(.82,hs(floor(p.xz*9.)))*.7);}
      c*=.75+.5*dn;
      c*=.9+.2*mix(.5,nz(p.xz*22.),exp(-tt*.05));
      float near=exp(-tt*.10);
      c*=1.+(.3*hs(floor(p.xz*30.))-.15)*smoothstep(.18,.32,slope)*smoothstep(.6,.42,slope)*near*2.;
      c*=1.-.18*near+.36*near*fb(p.xz*70.,2);
      if(tt<40.&&uType!=1.&&slope<.5){vec2 pg=p.xz*8.,pi=floor(pg);float pr=hs(pi+21.);vec2 po=(vec2(hs(pi+3.),hs(pi+5.))-.5)*.5;float pd=length(fract(pg)-.5-po);
        c=mix(c,c*(.55+.9*(1.-pd*3.)),smoothstep(.2+.1*pr,.08,pd)*step(.55,pr)*near);}
      c*=1.-.35*smoothstep(.02,.0,abs(fb(p.xz*3.5+uSeed,3)-.5))*near*smoothstep(.3,.0,slope)*(1.-uForest);
      if(uForest>0.&&alt>uSea+.03&&slope<.45){
        vec2 g=p.xz*1.4,gi=floor(g);float r1=hs(gi);vec2 off=(vec2(hs(gi+4.),hs(gi+8.))-.5)*.5+vec2(sin(uT*1.7+gi.x*1.3+gi.y*.7),cos(uT*1.3+gi.y*1.1))*.035*uWind*exp(-tt*.05);float dd=length(fract(g)-.5-off);
        float tr=smoothstep(.42,.12,dd)*step(.35,r1);vec3 can=mix(vec3(.04,.18,.04),vec3(.2,.5,.12),hs(gi+2.));can=mix(can,mix(vec3(.55,.28,.05),vec3(.6,.45,.08),hs(gi+5.)),uAut*.7*step(.35,hs(gi+11.)));
        float dens=smoothstep(.75,.2,alt+.2*(dn-.5))*(1.-.75*abs(uLat))*(1.-snw);
        c=mix(c,can*(.5+.7*(1.-dd*2.)),tr*dens*.95);c=mix(c,vec3(.12,.32,.09),dens*.4);}
      float isS=(stc(p.xz).x>.02&&uStruct>0.)?1.:0.;
      if(isS>0.)c=mix(c,vec3(.52,.47,.4)*(.8+.4*hs(floor(p.xz*1.5)+floor(p.y*1.5))),.9);
      float sh=1.;
      if(sun.y>.02){float st=.15;for(int i=0;i<22;i++){vec3 q=p+n*.03+sun*st;float hh=max(H(q.xz,3),sea);sh=min(sh,clamp(6.*(q.y-hh)/st,0.,1.));st+=.25+st*.18;if(q.y>uAmp*2.+2.)break;}}
      if(uCloud>0.&&uPhys>0.)sh*=1.-.8*wm(p.xz+sun.xz/max(sun.y,.12)*(CB-p.y));
      else if(uCloud>0.)sh*=1.-.55*smoothstep(.45,.8,fb(p.xz*.03+vec2(uT*.03,0.)+uSeed,4))*uCloud;
      float dif=max(dot(n,sun),0.)*sh;
      float d2=uTwin>0.?max(dot(n,normalize(sun+vec3(.34,.1,.08))),0.)*.45:0.;
      amb*=.55+.45*n.y;
      c*=mix(1.,.62,uWet*smoothstep(.5,.1,slope)*(1.-snw));
      col=c*(gC*(dif+d2)*1.35*(.6+.4*ao)+amb*ao);
      gT=uTb+28.*dif*sh-h*5.-snw*25.+uWet*-6.;
      if(uWet>.03){vec3 rr=reflect(rd,mix(n,vec3(0.,1.,0.),.7));vec3 rc=mix(gH,gZ,pow(max(rr.y,0.),.45));float flat_=smoothstep(.3,.05,slope)*(1.-snw);
        float pud=smoothstep(.1,.28,lap*k+.06*(fb(p.xz*1.3,3)-.5))*smoothstep(.35,.9,uWet)*flat_;
        col=mix(col,rc*.75+gC*pow(max(dot(rr,sun),0.),200.)*2.,pud*.85);
        col+=rc*pow(1.-max(dot(-rd,n),0.),5.)*uWet*.35*flat_;}
      if(uSig>0.){float nfS=clamp(1.-dot(gC,vec3(.5))*1.6,.25,1.);
        if(uSig==1.){vec2 dj=normalize(vec2(.8,.6));float ln=abs(fract(dot(p.xz,dj)/24.)-.5)*24.;float ch=smoothstep(.35,.0,ln)*smoothstep(.4,.1,slope);
          float pu=pow(fract(dot(p.xz,vec2(-dj.y,dj.x))*.04-uT*.6),6.);col+=vec3(.3,.85,1.)*ch*(.25+2.2*pu)*nfS;
          float sp=spire(p.xz);if(sp>1.){col*=.38;col+=vec3(.3,.8,1.)*smoothstep(.06,.0,abs(fract(p.y*.5)-.5)-.44)*.25*nfS;}}
        else if(uSig==2.){vec2 g=p.xz*.9,gi=floor(g),gf=fract(g);float on=step(.45,hs(gi+81.));float lx=smoothstep(.06,.0,abs(gf.y-.5))*step(.5,hs(gi+82.)),lz=smoothstep(.06,.0,abs(gf.x-.5))*step(.5,hs(gi+83.));
          float tr=max(lx,lz)*on;float nd=smoothstep(.16,.08,length(gf-.5))*step(.7,hs(gi+84.));float pu=.5+.5*sin(uT*3.+gi.x*.7+gi.y*1.3);
          col+=mix(vec3(.1,1.,.55),vec3(.2,.7,1.),hs(gi+85.))*(tr*(.25+.9*pu)+nd*1.6*pu)*smoothstep(.45,.15,slope)*nfS*(1.-snw);}
        else if(uSig==3.){vec2 g=p.xz*.35;vec2 gi=floor(g),gf=fract(g);float f1=9.,f2=9.;vec2 id=vec2(0.);
          for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){vec2 o=vec2(float(i),float(j));vec2 pt=o+vec2(hs(gi+o+91.),hs(gi+o+92.))-gf;float d=dot(pt,pt);if(d<f1){f2=f1;f1=d;id=gi+o;}else if(d<f2)f2=d;}
          float ed=smoothstep(.06,.0,sqrt(f2)-sqrt(f1));float pu=pow(.5+.5*sin(uT*2.5+hs(id+93.)*30.+length(p.xz)*.15),8.);
          col+=vec3(.75,.35,1.)*ed*(.18+1.8*pu)*nfS+vec3(.5,.3,.9)*smoothstep(.08,.0,sqrt(f1))*pu*1.5*nfS;}
        else if(uSig==5.||uSig==6.){vec3 rr=reflect(rd,n);vec3 env=mix(gH,gZ,pow(max(rr.y,0.),.45));float fr=pow(1.-max(dot(-rd,n),0.),4.);
          if(uSig==6.){col*=.25;col+=env*(.02+.3*fr)+gC*pow(max(dot(rr,sun),0.),220.)*2.*sh;}
          else{col=mix(col,col*vec3(.75,.8,.9),.5);col+=env*(.12+.5*fr)*vec3(.85,.9,1.)+gC*pow(max(dot(rr,sun),0.),50.)*1.1*sh;}}}
      if(uLights>0.){float nf=clamp(1.-dot(gC,vec3(.5))*2.5,0.,1.);if(nf>.01){vec2 cc=floor(p.xz/22.);float r=hs(cc+31.);
        if(r>.62){vec2 ct=(cc+.5+(vec2(hs(cc+32.),hs(cc+33.))-.5)*.5)*22.;float dd=length(p.xz-ct)/(5.+r*7.);
          vec2 lg=p.xz*2.2,li=floor(lg);float ls=smoothstep(.16+.0025*tt,.0,length(fract(lg)-.5-(vec2(hs(li+1.),hs(li+2.))-.5)*.6));vec2 lg2=p.xz*1.1,li2=floor(lg2);float ls2=smoothstep(.14+.002*tt,.0,length(fract(lg2)-.5));
          float pts=step(.74,hs(li))*ls*smoothstep(1.,.2,dd)+step(.95,hs(li2+7.))*ls2*smoothstep(1.7,1.,dd)*.6;
          col+=(vec3(1.,.72,.38)*pts*2.6+vec3(1.,.6,.3)*smoothstep(1.3,0.,dd)*.05)*nf*smoothstep(.45,.1,slope)*(1.-snw*.5);}}}
      col+=gC*pow(max(dot(n,normalize(sun-rd)),0.),40.)*sh*snw*.35;
      col+=gC*step(.992,hs(floor(p.xz*140.)))*snw*sh*near*2.;
      if(isS>0.&&(uNight>0.||uCrack>0.))col+=vec3(1.,.8,.5)*step(.9,hs(floor(p.xz*2.5)+floor(p.y*2.5)*7.))*.9;
      if(uCrack>0.){float cr=fb(p.xz*uFreq*2.4+3.,4);float k=smoothstep(.014,.0,abs(cr-.5))+.5*smoothstep(.012,.0,abs(fb(p.xz*uFreq*5.+11.,3)-.5));
        col+=uW1*k*uCrack*(.9+.4*sin(uT*1.2+cr*30.));}
    }else{
      float fade=exp(-tt*.03);vec2 gr=vec2(0.);
      for(int i=0;i<5;i++){float fi=float(i),an=fi*1.7+uSeed;vec2 dir=vec2(cos(an),sin(an));float fr=.35*pow(1.7,fi),am=.6/pow(1.9,fi);
        gr+=dir*cos(dot(p.xz,dir)*fr+uT*sqrt(9.8*fr)*.5)*fr*am;}
      vec2 wq=p.xz*2.3+uT*.4;gr+=vec2(nz(wq)-nz(wq+vec2(.05,0.)),nz(wq.yx)-nz(wq.yx+vec2(0.,.05)))*8.*fade;
      float wk=uWave*.22*mix(.35,1.,fade);vec3 n=normalize(vec3(-gr.x*wk,1.,-gr.y*wk));
      vec3 rf=reflect(rd,n);rf.y=abs(rf.y);
      float fr=.02+.98*pow(1.-max(dot(-rd,n),0.),5.);
      float dep=clamp((sea-h)/(uAmp*.18+.001),0.,1.);
      if(uType==3.){
        float cr=fb(p.xz*.35+vec2(0,uT*.05),5);vec3 lv=mix(uW2,uW1*1.8,smoothstep(.35,.65,cr));
        lv=mix(lv,vec3(.01,.005,.005),smoothstep(.55,.7,fb(p.xz*.8,3))*.85);
        col=lv*(1.3+.4*sin(uT+cr*9.))+sky(rf)*fr*.15;gT=1050.+300.*smoothstep(.35,.65,cr);
      }else{
        vec3 rc=uPhys>0.?mix(gH,gZ,pow(clamp(rf.y,0.,1.),.45)):sky(rf);
        if(uQ>1.5&&tt<70.){float rt=.4;bool rh=false;vec3 o2=p+vec3(0.,.03,0.);
          for(int i=0;i<24;i++){vec3 q=o2+rf*rt;float d=q.y-H(q.xz,3);if(d<.02*rt){rh=true;break;}rt+=max(d*.6,.05+rt*.06);if(rt>60.)break;}
          if(rh){vec3 q=o2+rf*rt;float ha=H(q.xz,3)/uAmp;vec3 tc=mix(uLo,uHi,smoothstep(.12,.7,ha));if(uForest>0.)tc=mix(tc,vec3(.06,.2,.05),.6*smoothstep(.75,.25,ha));
            tc*=amb*1.3+gC*.55;float fx=exp(-rt*.02);rc=mix(rc,tc,fx);}}
        col=mix(uW1,uW2,dep)*(amb+gC*max(dot(n,sun),0.)*.55);gT=uTb-6.-dep*6.;
        col+=uW1*gC*pow(max(dot(-rd,sun)*.5+.5,0.),4.)*.18*smoothstep(.0,.4,n.y-.85);
        col=mix(col,rc*.85,fr);
        col+=gC*pow(max(dot(rf,sun),0.),mix(80.,700.,fade))*mix(1.5,4.,fade)*(1.-uNight*.9);
        if(uWave>.5){float sd=(sea-h)/(uAmp*.08+.001);float fo=smoothstep(.6,0.,sd)*(.5+.5*sin(sd*12.-uT*1.6+nz(p.xz*.8)*4.))*smoothstep(.3,.6,nz(p.xz*3.+uT*.2));
          col=mix(col,vec3(.92)*(amb+gC*.8),clamp(fo,0.,1.)*.8);}
      }
    }
    if(uPhys>0.){vec3 ex=exp(-(uBR+uBM*1.1)*tt*.06*(1.+.5*exp(-max(p.y,0.)*.2))*exp(-uOrb*.03));col=col*ex+atmo(normalize(vec3(rd.x,max(rd.y,0.)+.03,rd.z)),sun)*(1.-ex);}
    else{vec3 ex=exp(-tt*uFog*(1.+.4*exp(-max(p.y,0.)*.2))*vec3(1.,1.12,1.35));
    col=col*ex+fogc*(1.-ex);}
  }else{
    if(uSig==9.){vec3 w=vec3(0.);for(int i=0;i<4;i++){float fi=float(i);vec3 k=normalize(vec3(sin(fi*2.1+uSeed),cos(fi*1.7)*.6,cos(fi*2.1+uSeed)));
        w+=vec3(.5+.5*cos(fi*1.9),.45,.9)*pow(.5+.5*cos(dot(rd,k)*(18.+fi*7.)-uT*(.4+fi*.13)),6.);}
      col=vec3(.002,.002,.006)+w*.05*(.6+.4*sin(uT*.3))+space(rd)*.35;}
    else if(uOrb>90.)col=vec3(0.);
    else if(uOrb>4.&&rd.y<0.)col=orbit(ro,rd);
    else if(uPhys>0.){col=sky(rd);if(uCloud>0.&&uQ>.5)col=vclouds(ro,rd,col);}
    else col=mix(sky(rd),fogc,smoothstep(.18,.0,rd.y)*clamp(uFog*40.,0.,1.));
  }
  if(uOrb>25.)col=mix(uOrb>90.?vec3(0.):col,orbit(ro,rd),smoothstep(25.,90.,uOrb));
  for(int i=0;i<5;i++){vec3 pi=uPoi[i];if(pi.z<.5||uOrb>300.)continue;vec2 d0=ro.xz-pi.xy;float a2=max(dot(rd.xz,rd.xz),1e-5);float tc=-dot(d0,rd.xz)/a2;
    if(tc<0.||((hit||surf)&&tc>tt))continue;float dm=length(d0+rd.xz*tc);float yb=ro.y+rd.y*tc;float hb=H(pi.xy,3);
    vec3 bc=pi.z>2.5?vec3(.35,.9,1.)*.8:pi.z>1.5?vec3(.35,.5,.6)*.3:vec3(1.,.82,.5);
    col+=bc*(exp(-dm*dm*4.)*1.6+exp(-dm*.6)*.12)*smoothstep(hb-1.,hb+1.,yb)*(1.-smoothstep(hb+50.,hb+90.,yb))/(1.+tc*.02)*(.85+.15*sin(uT*2.+float(i)));}
  if(!uw&&uNight<.5&&sun.y>0.){
    float sf=dot(sun,fw);
    if(sf>.1){vec2 sp=vec2(dot(sun,rt),dot(sun,up))/sf/1.25;
      float occ=1.;float st=.5;for(int i=0;i<20;i++){vec3 q=ro+sun*st;if(q.y<max(H(q.xz,2),sea)){occ=0.;break;}st+=1.5+st*.35;}
      if(occ>0.){vec2 dv=uv-sp;float edge=smoothstep(1.2,.5,length(sp))*clamp(sun.y*6.,0.,1.)*(1.-uCalm);
        for(int k=1;k<4;k++){float fk=float(k);vec2 gp=sp*(-.35*fk);float gr=length(uv-gp);
          col+=gC*(smoothstep(.015,.0,abs(gr-.05*fk))+smoothstep(.03*fk,.0,gr)*.4)*.05*edge*vec3(1.,.8+.1*fk,.6+.2*fk);}
        col+=gC*pow(max(0.,1.-abs(dv.y)*14.),4.)*smoothstep(.6,.0,abs(dv.x))*.05*edge;}}
  }
  if(uPart>0.){
    float ff=(uPart==4.||uPart==6.)?1.:0.;
    for(int L=0;L<3;L++){float fl=float(L);vec2 u2=uv*(7.+fl*6.);float k=1.+fl*.6;
      if(uPart==5.)u2.y+=uT*3.5*k;else if(uPart==1.)u2.y+=uT*.5*k;else if(uPart==2.||uPart==7.){u2.y-=uT*.7*k;if(uPart==7.)u2.x+=uT*.35*k;}else if(uPart==3.)u2.x+=uT*(.8+fl*.4);else u2+=vec2(sin(uT*.3+fl),cos(uT*.25+fl))*.6;
      if(uPart==1.||uPart==7.||ff>0.)u2.x+=sin(uT*.5+fl*2.+u2.y*.3)*.25;
      vec2 ci=floor(u2),f=fract(u2)-.5;float r=hs(ci+fl*31.);
      vec2 dd=f-(vec2(hs(ci+3.),hs(ci+9.))-.5)*.6;if(uPart==5.)dd*=vec2(1.,.1);if(uPart==3.)dd*=vec2(.2,1.);
      float sz=(ff>0.?.12:uPart==5.?.05:.08)*(1.-.15*fl);float a=smoothstep(sz,0.,length(dd))*step(.55,r);
      if(ff>0.)a*=.5+.5*sin(uT*3.+r*40.);
      vec3 pc=uPart==1.?vec3(.9,.95,1.):uPart==2.?vec3(1.,.5,.15)*2.:uPart==3.?vec3(.9,.75,.5)*.5:uPart==4.?uW1*3.:uPart==5.?vec3(.7,.8,1.)*.45:uPart==7.?vec3(.6,.9,1.)*.8:vec3(1.,.95,.7)*.8;
      if(uPhys>0.&&uPart!=2.&&uPart!=4.)pc*=clamp(dot(gC,vec3(.4))+.06,.05,1.);
      col+=pc*a*.5/(1.+fl*.3)*(1.-smoothstep(15.,90.,uOrb))*(1.-uCalm*.75);}
  }
  col+=vec3(.55,.65,1.)*uFlash*(1.-uCalm*.85)*(.2+.5*smoothstep(0.,.9,uv.y+.5));
  if(uHeat>0.){float hr=pow(clamp(length(uv)*1.3,0.,1.5),2.);col+=vec3(1.,.45,.12)*dsc*uHeat*hr*(.5+.5*nz(vec2(atan(uv.y,uv.x)*6.,uT*14.)))*.9;}
  if(uScan>.5){
    if(uScan<1.5){if(!hit&&!uw)gT=3.+(uPhys>0.?uTb*.75:20.)*exp(-max(rd.y,0.)*4.);float tq=clamp((gT-(uTb-45.))/110.,0.,1.);if(gT>600.)tq=1.;
      vec3 th=tq<.25?mix(vec3(0.,0.,.02),vec3(.3,0.,.45),tq*4.):tq<.5?mix(vec3(.3,0.,.45),vec3(.85,.1,.15),(tq-.25)*4.):tq<.75?mix(vec3(.85,.1,.15),vec3(1.,.6,0.),(tq-.5)*4.):mix(vec3(1.,.6,0.),vec3(1.,1.,.85),(tq-.75)*4.);
      th*=.85+.15*smoothstep(.0,.06,abs(fract(gT/15.)-.5));col=th*1.2;}
    else if(uScan<2.5){float sp=sin(uLatR+.2),cp=cos(uLatR+.2);vec3 A=normalize(vec3(.12,sp,cp)),B1=normalize(cross(A,vec3(1.,0.,0.))),B2=cross(A,B1);
      float lo=atan(dot(rd,B2),dot(rd,B1)),la=asin(clamp(dot(rd,A),-1.,1.));float mer=smoothstep(.02,.0,abs(fract(lo*6./3.14159)-.5)-.47)*(1.-smoothstep(1.2,1.5,abs(la)));
      float fl=pow(fract(la*2.5-uT*.25*uMag+lo*.3),10.);col=col*.55+vec3(.25,.75,1.)*mer*(.35+fl*1.6)*uMag+vec3(.3,1.,.6)*smoothstep(1.,1.35,abs(la))*.25*uMag*(.7+.3*sin(uT*2.+lo*4.));}
    else{col=mix(vec3(dot(col,vec3(.3,.59,.11))),col,.35)*.8;}}
  gl_FragColor=vec4(san(col),(hit||surf)&&uOrb<25.?min(tt,6e4):6e4);
}`,l_="varying vec2 vUv;void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}",c_="varying vec2 vUv;uniform sampler2D tex;uniform vec2 texel;uniform float pre;vec3 f(vec2 u){vec3 c=texture2D(tex,u).rgb;if(isnan(c.r)||isnan(c.g)||isnan(c.b))c=vec3(0.);c=clamp(c,0.,6e3);if(pre>0.){float b=max(max(c.r,c.g),c.b);c*=max(b-1.5,0.)/max(b,1e-4);}return c;}void main(){vec3 c=f(vUv+texel*vec2(-1.,-1.))+f(vUv+texel*vec2(1.,-1.))+f(vUv+texel*vec2(-1.,1.))+f(vUv+texel*vec2(1.,1.));c+=4.*f(vUv);gl_FragColor=vec4(c/8.,1.);}",u_="varying vec2 vUv;uniform sampler2D tex,add;uniform vec2 texel;void main(){vec3 c=vec3(0.);c+=texture2D(tex,vUv+texel*vec2(-1.,-1.)).rgb+texture2D(tex,vUv+texel*vec2(1.,-1.)).rgb+texture2D(tex,vUv+texel*vec2(-1.,1.)).rgb+texture2D(tex,vUv+texel*vec2(1.,1.)).rgb;c+=2.*(texture2D(tex,vUv+texel*vec2(-1.,0.)).rgb+texture2D(tex,vUv+texel*vec2(1.,0.)).rgb+texture2D(tex,vUv+texel*vec2(0.,-1.)).rgb+texture2D(tex,vUv+texel*vec2(0.,1.)).rgb);c+=4.*texture2D(tex,vUv).rgb;gl_FragColor=vec4(c/16.+texture2D(add,vUv).rgb,1.);}",h_="varying vec2 vUv;uniform sampler2D tS,tB;uniform vec2 texel,sunUV;uniform float uT,str,rays,sat;uniform vec3 tint;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uT)*43758.5453);}vec3 S(vec2 u){vec3 s=texture2D(tS,u).rgb;if(isnan(s.r)||isnan(s.g)||isnan(s.b))s=vec3(0.);return clamp(s,0.,6e3);}void main(){vec2 uv=vUv,cc=uv-.5;float ca=dot(cc,cc)*.010;vec3 c=vec3(S(uv+cc*ca).r,S(uv).g,S(uv-cc*ca).b);vec3 b=(S(uv+vec2(texel.x,0.))+S(uv-vec2(texel.x,0.))+S(uv+vec2(0.,texel.y))+S(uv-vec2(0.,texel.y)))*.25;c+=(c-b)*.35;c+=texture2D(tB,uv).rgb*str;if(rays>0.){vec3 gr=vec3(0.);vec2 dl=(sunUV-uv)/14.,sq=uv;float wt=1.;for(int i=0;i<14;i++){sq+=dl;gr+=texture2D(tB,sq).rgb*wt;wt*=.93;}c+=gr*rays*.012;}if(isnan(c.r)||isnan(c.g)||isnan(c.b))c=vec3(0.);c=mix(vec3(dot(c,vec3(.299,.587,.114))),c,sat)*tint;c=(c*(2.51*c+.03))/(c*(2.43*c+.59)+.14);c=pow(clamp(c,0.,1.),vec3(.4545));float q=16.*uv.x*uv.y*(1.-uv.x)*(1.-uv.y);c*=.72+.28*pow(q,.25);c+=(h(uv*1500.)-.5)*.025;c*=min(1.,uT/1.5);gl_FragColor=vec4(c,1.);}",d_=`
uniform sampler2D tCur,tHist;uniform vec2 uPP,uPL;uniform float uPH0,uPA,uPT,uRst,uPO;
void main(){
  vec2 q=gl_FragCoord.xy/uRes;vec4 c=texture2D(tCur,q);c.rgb=san(c.rgb);
  if(uRst>0.){gl_FragColor=c;return;}
  vec3 ro,fw,rt,up;camera(uPos,uHead,uLook,uAlt,uT,uOrb,ro,fw,rt,up);
  vec2 uv=(gl_FragCoord.xy-.5*uRes)/uRes.y;vec3 rd=normalize(fw+(uv.x*rt+uv.y*up)*1.25);
  vec3 o2,f2,r2,u2;camera(uPP,uPH0,uPL,uPA,uPT,uPO,o2,f2,r2,u2);
  vec3 v=c.a>5e4?rd:ro+rd*c.a-o2;float z=dot(v,f2);
  vec3 mn=c.rgb,mx=c.rgb;vec2 px=1./uRes;
  for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){vec3 s=san(texture2D(tCur,q+vec2(float(i),float(j))*px).rgb);mn=min(mn,s);mx=max(mx,s);}
  float w=.12;vec3 h=c.rgb;
  if(z>.001){vec2 sp=vec2(dot(v,r2),dot(v,u2))/z/1.25;vec2 pq=(sp*uRes.y+.5*uRes)/uRes;
    if(pq.x>0.&&pq.y>0.&&pq.x<1.&&pq.y<1.){h=clamp(san(texture2D(tHist,pq).rgb),mn,mx);w=mix(.12,.35,clamp(length((pq-q)*uRes)*.08,0.,1.));}else w=1.;}else w=1.;
  gl_FragColor=vec4(san(mix(h,c.rgb,w)),c.a);
}`,vu="void main(){gl_Position=vec4(position.xy,0.,1.);}",Da=(n,e,t)=>n.map((i,s)=>i+(e[s]-i)*t),yu=(()=>{let n=(s,r)=>s[0]*r[0]+s[1]*r[1]+s[2]*r[2],e=(s,r,o)=>{let a=n(s,r),l=n(s,s)-o*o,c=a*a-l;if(c<0)return[1e9,-1e9];let u=Math.sqrt(c);return[-a-u,-a+u]};return{atmo:(s,r,o,a,l)=>{s=[s[0],Math.max(s[1],0),s[2]];let c=Math.hypot(...s);s=s.map(B=>B/c);let u=[0,6360.25,0],d=e(u,s,6420)[1],h=0,f=0,g=[0,0,0],v=[0,0,0];for(let B=0;B<10;B++){let S=(B+.5)*.1,_=d*.2*S,L=u.map((H,O)=>H+s[O]*d*S*S),y=Math.hypot(...L)-6360,x=Math.exp(-y*.125)*_,T=Math.exp(-y/1.2)*_;h+=x,f+=T;let V=e(L,r,6420)[1]*.25,W=0,N=0,P=!0;for(let H=0;H<4;H++){let O=L.map((q,se)=>q+r[se]*V*(H+.5)),G=Math.hypot(...O)-6360;if(G<0){P=!1;break}W+=Math.exp(-G*.125)*V,N+=Math.exp(-G/1.2)*V}if(P)for(let H=0;H<3;H++){let O=Math.exp(-(o[H]*(h+W)+a*1.1*(f+N)));g[H]+=O*x,v[H]+=O*T}}let m=n(s,r),p=.76,M=p*p,b=.0597*(1+m*m),I=.1194*((1-M)*(1+m*m))/((2+M)*Math.pow(1+M-2*p*m,1.5));return[0,1,2].map(B=>l*(g[B]*o[B]*b+v[B]*a*I))},trans:(s,r,o)=>{let a=[0,6360.25,0],l=e(a,s,6420)[1],c=l/16,u=0,d=0;for(let h=0;h<16;h++){let f=a.map((v,m)=>v+s[m]*c*(h+.5)),g=Math.hypot(...f)-6360;if(g<0)return[0,0,0];u+=Math.exp(-g*.125)*c,d+=Math.exp(-g/1.2)*c}return r.map(h=>Math.exp(-(h*u+o*1.1*d)))}}})(),Hs=n=>new et(...n.map(e=>Math.pow(Math.max(0,Math.min(1,e)),2.2))),si=(n,e)=>n.map(t=>t*e);function Jf(n){let e=((n.desc||"")+" "+(n.title||"")+" "+(n.eyebrow||"")).toLowerCase(),t=O=>O.test(e),i=el(e),s=Wn(n.key||n.title||"x"),r=Rn(s);t(/okyanus (dış )?gezegen|su altı (uygarlık|şehir)/)&&Object.assign(i,{a:[.27,.59,.9],b:[.04,.18,.43],atm:[.43,.7,1],type:2});let o=t(/gaz dev|gaz halka|gaz tabaka|gaz gezegeni|atmosfer gezegeni|bulut/),a=i.type;a===1&&!o&&(a=0);let l=n.key==="obsidian";l&&(a=0);let c=t(/neon|gece|lüminesans|foton|radyant/),u=t(/alacakaranlık|şafak|gün batımı/),d=t(/vakum|boşluk|sessiz/),h={uType:a,uAmp:5,uFreq:.085,uPow:1.5,uSea:-1,uFog:.018,uStars:.9,uNight:0,uCrack:0,uRing:0,uMoons:0,uAur:0,uTwin:0,uSeed:r()*50,uRidge:0,uSnow:0,uClear:2.4,uCloud:.15,uWave:1,uCycle:0,uHeat:1,uPart:0,uFlock:0,uFlash:0,uDive:0,uCity:0,uStruct:0,uForest:0,uErode:.9,speed:1.5},f=Da(i.b,i.a,.25),g=i.a,v=[.2,.5,.6],m=[.02,.1,.2],p=Da(i.atm,[1,1,1],.35),M=si(Da(i.atm,i.b,.6),.55),b=[1,.93,.8],I=[-.38,.3,.87];a===0?(t(/çöl|kum/)?(Object.assign(h,{uPow:1,uAmp:3.4,uFreq:.06,uCloud:.05}),f=Da(i.b,i.a,.5),p=[.95,.8,.6],M=[.35,.45,.62]):t(/kristal|prizma|spektr/)?(Object.assign(h,{uRidge:1,uAmp:8,uFreq:.11,uCrack:.55}),v=si(i.a,1.3)):Object.assign(h,{uRidge:1,uAmp:6}),d&&(Object.assign(h,{uFog:.002,uStars:2,uCloud:0}),p=[0,0,0],M=[0,0,0],b=[1.2,1.1,1],I=[-.4,.12,.9])):a===1?(Object.assign(h,{uAmp:1.4,uFreq:.06,uPow:1.3,uFog:.04,uClear:4,uStars:0,uCloud:0,speed:2.2}),f=i.b,g=i.a,p=si(i.atm,.8),M=si(i.atm,.5)):a===2?t(/orman|bitki|ağaç|biyosfer|tarımsal/)?(Object.assign(h,{uSea:.22,uAmp:5.5,uPow:1.7,uCloud:.4,uStars:0,uSnow:.85,uFog:.011}),f=[.1,.3,.08],g=[.36,.34,.2],p=[.62,.78,.95],M=[.16,.38,.78],v=[.15,.45,.5],m=[.02,.12,.2]):(Object.assign(h,{uSea:.55,uAmp:3.2,uPow:1.8,uWave:1.3,uCloud:.5,uStars:0}),f=[.5,.45,.32],g=[.25,.45,.25],v=i.a,m=i.b,p=[.7,.86,.96],M=[.25,.5,.85]):a===3?(Object.assign(h,{uSea:.38,uRidge:1,uAmp:6,uCrack:1.1,uFog:.05,uStars:.3,uCloud:0,uWave:.3}),f=[.05,.04,.04],g=[.22,.12,.09],v=[1,.42,.1],m=[.35,.06,.02],p=[.5,.18,.08],M=[.08,.03,.03],b=[1,.55,.3],I=[-.2,.12,.9]):a===4&&(Object.assign(h,{uRidge:1,uAmp:6,uSea:.22,uSnow:.1,uWave:.06,uCloud:.4}),f=[.7,.82,.92],g=[.95,.98,1],v=[.5,.75,.9],m=[.1,.3,.5],p=[.8,.9,1],M=[.35,.55,.85],b=[.95,.97,1]),l&&(f=[.03,.03,.04],g=[.13,.12,.15],p=[.3,.27,.33],M=[.09,.08,.12],h.uFog=.03,h.uCrack=0,h.uRidge=1,h.uAmp=6.5),u&&(I=[-.5,.07,.85],b=[1,.6,.35],p=[1,.55,.35],M=[.15,.18,.4],h.uCrack=Math.max(h.uCrack,.45),v=si(i.a,1.5),h.uStars=1.2),c&&(Object.assign(h,{uNight:1,uStars:1.6,uCloud:0,uCrack:Math.max(h.uCrack,.9)}),I=[-.3,.22,.9],b=[.15,.2,.4],p=[.02,.03,.08],M=[.005,.01,.04],f=si(i.b,.8),g=si(i.a,.6),v=si(i.a,1.5)),t(/ikiz|çift yıldız/)&&(h.uTwin=1);let B=n.key==="dunya";h.uReal=B?1:0;let S={javelin:1,"bio-nexus":2,synapto:3,celestia:4,ferrum:5,obsidian:6,chronos:7,dreamoria:8,nihil:9};h.uSig=S[n.key]||0,t(/aurora|kutup ışık/)&&(h.uAur=1),t(/halka/)&&a!==1&&(h.uRing=1),t(/sis|pus|duman/)&&(h.uFog*=2.2),a!==1&&s%3!==0&&(h.uMoons=1+(s>>3)%2),B&&(h.uMoons=1,h.uTwin=0,h.uRing=0),d&&(h.uHeat=0),a===2&&h.uSea>0&&t(/su altı (şehir|uygarlık)/)&&(h.uCity=1),!d&&a!==1&&t(/kalıntı|tapınak|piramit|şehir|kule|(^|\s)anıt|yapılarla|kompleks/)&&(h.uStruct=t(/piramit/)?1.3:.75),a===2&&h.uSea>0&&h.uSea<.4&&(h.uForest=1),a===3||a===4?h.uErode=1.2:t(/çöl|kum/)&&a===0?h.uErode=.45:a===1&&(h.uErode=.3);let _=!d&&/yağış|yağmur/.test(e.replace(/yağmur orman\S*/g,""));_&&(h.uCloud=1.6,h.uFog*=1.8,p=si(p,.5),M=si(M,.4),b=si(b,.3));let L=!d&&t(/fırtına|şimşek|elektrik|yıldırım|plazma|iyonize/);d||(a===4?h.uPart=1:a===3?h.uPart=2:a===0&&t(/çöl|kum/)||a===1?h.uPart=3:c||u?h.uPart=4:_?h.uPart=5:a===2&&h.uSea<.4&&(h.uPart=6),!c&&t(/uçan|kuş|gökyüzü balina|gök balina|akbaba|kanat|uçma|hava canlı|havada/)&&(h.uFlock=1)),!c&&!d&&!u&&a!==3&&(h.uCycle=1);let y=!c&&!d&&a!==3,x=1;a===0&&t(/çöl|kum|toz/)&&(x=2),a===1&&(x=3),a===2&&(x=h.uForest?1.2:1.5),a===4&&(x=.8),t(/sis|pus|duman/)&&(x*=2.2),_&&(x*=2.5);let T=a===0&&t(/çöl|kum/),V=T?Da([.4,.6,1],i.atm,.08):i.atm;T&&(x=1.3);let W=Math.max(...V,.01),N=V.map(O=>Math.max(.0015,.0331*Math.pow(Math.max(0,O)/W,2)));h.uLights=!d&&t(/şehir|uygarlık|yerleşim|koloni|medeniyet|nüfus|halk|kent|metropol/)?1:0,h.uPhys=y?1:0,n.key==="obsidian"&&(x=1),h.uQ=(()=>{try{let O=localStorage.getItem("qsq");return O==null?window.__qulSafe?0:matchMedia("(pointer:coarse)").matches?1:window.__qulQL>=2?0:window.__qulQL===1?1:2:+O}catch{return 2}})(),h.uBM=.004*x,h.uSI=n.key==="obsidian"?3:11,h.uSig===4&&(h.uAur=1,h.uCycle=0,I=[-.5,.06,.86]),h.uSig===2&&(h.uForest=Math.max(h.uForest,1)),h.uSig===9&&(h.uPhys=0,h.uCloud=0,h.uPart=0,h.uStars=1.4);let P=Math.hypot(...I);return I=I.map(O=>O/P),{scan:(()=>{let O={},G=(n.desc||"")+" "+JSON.stringify(n.card||{}),q=G.toLowerCase(),se=Me=>parseFloat(String(Me).replace(",",".")),re=G.match(/(\d+(?:[.,]\d+)?)\s*bar\b/i);O.p=re?[re[1].replace(".",",")+" bar","kanon"]:null,re=G.match(/%\s*(\d+(?:[.,]\d+)?)\s*oksijen/i),O.o2=re?["%"+re[1],"kanon"]:/oksijen/.test(q)?["var (oran belirtilmemi\u015F)","kanon"]:null,re=G.match(/(\d+(?:[.,]\d+)?)\s*g\b/),O.g=re?[re[1].replace(".",",")+" g","kanon"]:null,O.mag=/zayıf manyetik/.test(q)?["zay\u0131f","kanon",.3]:/manyetik fırtına|manyetik/.test(q)?["g\xFC\xE7l\xFC, f\u0131rt\u0131nal\u0131","kanon",1.3]:["veri yok","temsili",.6],O.rad=/yüksek radyasyon|radyasyon/.test(q)?["y\xFCksek","kanon"]:null;let fe=d&&/vakum|madde içermeyen/.test(q)?3:a===3?900:a===4?190:a===1?160:a===0&&/çöl|kum/.test(q)?315:288;O.t=[fe===3?"\u22483 K (bo\u015Fluk)":"\u2248"+(fe-25)+"\u2013"+(fe+30)+" K","tahmini"],O.tb=fe;let Z=[],oe=(Me,Ee,Ue,Xe)=>{Me.test(q)&&Z.push([Ee,Ue,Xe])};return oe(/oksijen/,"O\u2082","oksijen",[687,760]),oe(/nem|buhar|yağış|bulut|okyanus|su altı|\bsu\b/,"H\u2082O","su buhar\u0131",[720,820,940]),oe(/metan/,"CH\u2084","metan",[619,727,890]),oe(/amonyak/,"NH\u2083","amonyak",[645,790]),oe(/karbondioksit|co2|karbon/,"CO\u2082","karbon bile\u015Fikleri",[]),oe(/hidrojen/,"H\u2082","hidrojen",[656]),oe(/sülfür|kükürt/,"S","s\xFClf\xFCr bile\u015Fikleri",[]),oe(/azot|nitrojen/,"N\u2082","azot",[]),oe(/aether|eter\b/,"?","tan\u0131mlanamayan bile\u015Fen (aether) \u2014 ard\u0131 bekliyor",[]),O.gas=Z,O})(),aco:{harmony:"h",echoes:"e",belvior:"b"}[n.key]||"",seedH:s,bR:N,dive:a===2&&h.uSea>0,storm:L,c:h,col:{uLo:Hs(f),uHi:Hs(g),uW1:Hs(v),uW2:Hs(m),uSkyH:Hs(p),uSkyZ:Hs(M),uSunC:Hs(b)},sun:I,type:a,night:c,vac:d,forest:a===2&&h.uSea<.4}}function f_(n){if(window.__hush)return null;let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t=new e,i=t.createGain();i.gain.value=0;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2e4,i.connect(s),s.connect(t.destination);let r=t.sampleRate*3,o=t.createBuffer(1,r,t.sampleRate),a=o.getChannelData(0);for(let S=0;S<r;S++)a[S]=Math.random()*2-1;let l=()=>{let S=t.createBufferSource();return S.buffer=o,S.loop=!0,S.start(),S},c=(S,_,L,y)=>{let x=t.createOscillator(),T=t.createGain();return x.frequency.value=_,T.gain.value=L,S.value=y,x.connect(T),T.connect(S),x.start(),x},u=(S,_,L,y,x)=>{let T=t.createBiquadFilter(),V=t.createGain();return T.type=_,T.frequency.value=L,T.Q.value=y,V.gain.value=x,S.connect(T),T.connect(V),V.connect(i),{fl:T,gn:V}},d=(S,_,L="sine")=>{let y=t.createOscillator(),x=t.createGain();return y.type=L,y.frequency.value=S,x.gain.value=_,y.connect(x),x.connect(i),y.start(),{o:y,gn:x}},h=null,f=n.type;if(n.vac)d(38,.05);else if(f===1){let S=d(55,.08),_=d(82.4,.05),L=d(110.3,.03);c(S.gn.gain,.07,.03,.08),c(_.gn.gain,.05,.02,.05),u(l(),"lowpass",260,.5,.25)}else if(f===3){u(l(),"lowpass",110,.7,.9),u(l(),"bandpass",380,.6,.12);let S=()=>{let _=t.createBufferSource(),L=t.createGain(),y=t.createBiquadFilter();_.buffer=o,y.type="bandpass",y.frequency.value=2e3+Math.random()*3500,y.Q.value=1.2;let x=t.currentTime,T=.03+Math.random()*.07;L.gain.setValueAtTime(.05+Math.random()*.08,x),L.gain.exponentialRampToValueAtTime(5e-4,x+T),_.connect(y),y.connect(L),L.connect(i),_.start(x,Math.random()*2,T+.02),h=setTimeout(S,140+Math.random()*460)};S()}else{let S=u(l(),"bandpass",f===4?700:420,.7,.5);if(c(S.gn.gain,.07,.25,.5),c(S.fl.frequency,.05,150,f===4?700:420),u(l(),"lowpass",160,.5,.18),f===2){let _=u(l(),"lowpass",520,.6,.25);c(_.gn.gain,.11,.22,.25);let L=u(l(),"bandpass",900,.8,.08);c(L.gn.gain,.083,.07,.08)}}if(!n.vac){let S=u(l(),"bandpass",3200,.9,.5),_=t.currentTime;S.fl.frequency.setValueAtTime(3200,_),S.fl.frequency.exponentialRampToValueAtTime(260,_+7),S.gn.gain.setValueAtTime(.5,_),S.gn.gain.linearRampToValueAtTime(0,_+8)}if(!n.vac){let S=[[0,1,4,5,7,8,11],[0,2,4,5,7,9,10],[0,1,3,5,7,8,10],[0,2,4,7,9],[0,2,4,6,7,9,11],[0,2,3,5,7,8,10]],_=n.seedH>>>0,L=n.aco==="h"?[0,4,7,12,16]:n.aco==="b"?[0,2,3,7,9]:S[_%S.length],y=f===3?98:f===4?392:f===2?196:f===1?130.8:261.6,x=t.createDelay(1.5),T=t.createGain(),V=t.createGain();x.delayTime.value=n.aco==="e"?.18:.37+_%7*.05,T.gain.value=n.aco==="e"?.78:.55,V.gain.value=.5,x.connect(T),T.connect(x),x.connect(V),V.connect(i);let W=0,N=()=>{if(!t||t.state==="closed")return;let P=t.currentTime,H=L[Math.floor(Math.random()*L.length)],O=Math.random()<.3?2:1,G=y*O*Math.pow(2,H/12),q=t.createOscillator(),se=t.createGain();if(q.type="sine",q.frequency.value=G,se.gain.setValueAtTime(0,P),se.gain.linearRampToValueAtTime(.022,P+.02),se.gain.exponentialRampToValueAtTime(4e-4,P+3.5),q.connect(se),se.connect(i),se.connect(x),q.start(P),q.stop(P+3.6),n.aco==="h"){let re=t.createOscillator(),fe=t.createGain();re.frequency.value=G*1.5,fe.gain.setValueAtTime(0,P+.12),fe.gain.linearRampToValueAtTime(.012,P+.15),fe.gain.exponentialRampToValueAtTime(4e-4,P+3.2),re.connect(fe),fe.connect(i),fe.connect(x),re.start(P+.12),re.stop(P+3.3)}n.aco==="e"&&(q.frequency.value=G*2),W=setTimeout(N,n.aco==="h"?1400+Math.random()*2200:n.aco==="b"?900+Math.random()*900:2800+Math.random()*5200)};W=setTimeout(N,6e3),n._chimeStop=()=>clearTimeout(W)}if(n.night){let S=d(174.6,.012,"triangle"),_=d(261.6,.008,"triangle");c(S.gn.gain,.09,.008,.012),c(_.gn.gain,.06,.006,.008)}i.gain.linearRampToValueAtTime(.55,t.currentTime+3);let g=()=>{let S=t.currentTime,_=t.createBiquadFilter(),L=t.createGain(),y=t.createBufferSource();y.buffer=o,_.type="lowpass",_.frequency.setValueAtTime(900,S),_.frequency.exponentialRampToValueAtTime(70,S+2.5),L.gain.setValueAtTime(0,S),L.gain.linearRampToValueAtTime(1.3,S+.05),L.gain.exponentialRampToValueAtTime(.001,S+3),y.connect(_),_.connect(L),L.connect(t.destination),y.start(S,Math.random()*.5,3.1)},v=l(),m=t.createBiquadFilter(),p=t.createGain();m.type="highpass",m.frequency.value=900,p.gain.value=0,v.connect(m),m.connect(p),p.connect(i);let M=null,b=0,I=0;return{cave:(S,_)=>{let L=t.currentTime;if(i.gain.cancelScheduledValues(L),i.gain.setTargetAtTime(S?.1:.55,L,.8),S){if(!M){M=t.createGain(),M.gain.value=0;let x=t.createConvolver(),T=t.sampleRate*2.6,V=t.createBuffer(2,T,t.sampleRate);for(let P=0;P<2;P++){let H=V.getChannelData(P);for(let O=0;O<T;O++)H[O]=(Math.random()*2-1)*Math.pow(1-O/T,3.2)}x.buffer=V,M.connect(x),x.connect(t.destination);let W=t.createOscillator(),N=t.createGain();W.frequency.value=_===3?58:46,W.type=_===3?"sawtooth":"sine",N.gain.value=_===3?.006:.015,W.connect(N),N.connect(M),W.start()}M.gain.setTargetAtTime(1,L,.8);let y=()=>{if(!M)return;let x=t.currentTime,T=t.createOscillator(),V=t.createGain(),W=(_===2?1800:900)+Math.random()*1400;T.frequency.setValueAtTime(W,x),T.frequency.exponentialRampToValueAtTime(W*.45,x+.08),V.gain.setValueAtTime(.05,x),V.gain.exponentialRampToValueAtTime(5e-4,x+.12),T.connect(V),V.connect(M),T.start(x),T.stop(x+.15),b=setTimeout(y,600+Math.random()*2600)};if(clearTimeout(b),b=setTimeout(y,800),_===3){let x=()=>{if(!M)return;let T=t.currentTime,V=t.createBufferSource(),W=t.createBiquadFilter(),N=t.createGain();V.buffer=o,W.type="bandpass",W.frequency.value=1500+Math.random()*1500,W.Q.value=8,N.gain.setValueAtTime(.12,T),N.gain.exponentialRampToValueAtTime(5e-4,T+.35),V.connect(W),W.connect(N),N.connect(M),V.start(T,Math.random()*2,.4),I=setTimeout(x,3500+Math.random()*6e3)};clearTimeout(I),I=setTimeout(x,2500)}}else M&&(M.gain.setTargetAtTime(0,L,.6),clearTimeout(b),clearTimeout(I))},rain(S){p.gain.setTargetAtTime(S*.45,t.currentTime,1.5)},thunder:g,uw(S){s.frequency.setTargetAtTime(S?420:2e4,t.currentTime,.6)},stop(){n._chimeStop&&n._chimeStop();try{i.gain.cancelScheduledValues(t.currentTime),i.gain.setValueAtTime(i.gain.value,t.currentTime),i.gain.linearRampToValueAtTime(0,t.currentTime+1.2)}catch{}clearTimeout(h),h={},setTimeout(()=>{try{t.close()}catch{}},1500)}}}var $f=n=>{try{parent.postMessage({qulDuck:n},"*")}catch{}},je=null,Pn={open(n){if(je)return;let e=Jf(n),t=document.createElement("div");t.id="surf";let i=String(n.desc||"").split(/(?<=[.!?])\s/)[0],s=C=>String(C||"").replace(/[&<>"]/g,z=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[z]);t.innerHTML='<canvas></canvas><div class="sv"></div><div class="sc"><small>'+s(n.eyebrow)+"</small><h2>"+s(n.title)+"</h2><p>"+s(i)+'</p></div><div class="sw"></div><div class="sk" role="status" aria-live="polite"></div><div class="sn" style="text-align:right">'+s(k("surf.note"))+"<br>"+s(k("surf.hint"))+(e.dive?s(k("surf.dive")):"")+'</div><button class="sgz"></button><div class="ssc" role="status" aria-live="polite"></div><button class="sv2" aria-label="video"></button><button class="sca"></button><button class="sb"></button><button class="sq"></button><div class="stc"><button class="su">\u25B2</button><button class="sd">\u25BC</button></div><div class="sj"></div><button class="sp">'+s(k("surf.photo"))+'</button><button class="sx">'+s(k("surf.close"))+"</button>",document.body.appendChild(t);let r;try{r=new fi({canvas:t.querySelector("canvas"),antialias:!1,powerPreference:"high-performance"})}catch{t.remove();return}r.setPixelRatio(1);let o=!1,a=C=>{if(!o){o=!0;try{localStorage.setItem("qsafe",String(Date.now()))}catch{}try{console.error("[Qul] y\xFCzey ba\u015Flat\u0131lamad\u0131:",C)}catch{}if(window.__qulSurfFail=C,je)Pn.close();else{t.remove();try{r.dispose()}catch{}ue.pause(!1)}window.dispatchEvent(new CustomEvent("qulSurfaceFail",{detail:String(C).slice(0,200)}))}};r.debug.onShaderError=(C,z)=>{let pe="";try{pe=C.getProgramInfoLog(z)||""}catch{}a("shader: "+pe.slice(0,300))},r.domElement.addEventListener("webglcontextlost",C=>{C.preventDefault(),a("ba\u011Flam kayb\u0131 (GPU s\u0131f\u0131rland\u0131)")});let l=document.createElement("div");l.id="surfld",l.innerHTML="<b>"+k("surf.prep")+'</b><i><u></u></i><button type="button" class="go" hidden>'+k("surf.ready")+'</button><button type="button" class="x" aria-label="\u2715">\u2715</button>',document.body.appendChild(l);let c=0;l.querySelector(".x").addEventListener("click",()=>Pn.close());let u={uScan:{value:0},uTb:{value:e.scan.tb},uMag:{value:e.scan.mag[2]},uCave:{value:0},uCS:{value:0},uCX:{value:0},uCYaw:{value:0},uLST:{value:0},uLatR:{value:0},tSky:{value:null},uTide:{value:0},uTideA:{value:0},uGrid:{value:0},uCalm:{value:0},uWind:{value:.3},uEcl:{value:0},uMoon0:{value:new U(.46,.5,.74).normalize()},uWet:{value:0},uLat:{value:0},uSeason:{value:0},uAut:{value:0},uJit:{value:new we},uRes:{value:new we(1,1)},uLook:{value:new we},uT:{value:0},uDist:{value:0},uPos:{value:new we},uHead:{value:0},uAlt:{value:0},uSun:{value:new U(...e.sun)}};for(let C in e.c)C!=="speed"&&(u[C]={value:e.c[C]});for(let C in e.col)u[C]={value:e.col[C]};u.uBR={value:new U(...e.bR)},u.uPH={value:new U},u.uPZ={value:new U},u.uPC={value:new U};let d=()=>{if(!e.c.uPhys)return;let C=u.uSun.value,z=[C.x,C.y,C.z],pe=e.bR,j=e.c.uBM,Ae=e.c.uSI,be=yu.atmo([0,1,0],z,pe,j,Ae),Qe=[0,0,0];for(let vt=0;vt<4;vt++){let Tt=vt*1.5708,Ht=yu.atmo([Math.cos(Tt),.06,Math.sin(Tt)],z,pe,j,Ae);for(let Xt=0;Xt<3;Xt++)Qe[Xt]+=Ht[Xt]*.25}let lt=yu.trans(z,pe,j);u.uPZ.value.set(be[0]+.004,be[1]+.006,be[2]+.012),u.uPH.value.set(Qe[0]+.006,Qe[1]+.008,Qe[2]+.014),u.uPC.value.set(lt[0]*1.25+.02,lt[1]*1.25+.025,lt[2]*1.25+.04)};d();let h=0,f=(()=>{try{return JSON.parse(localStorage.getItem("qlog")||"{}")||{}}catch{return{}}})(),g=f[n.key]=f[n.key]||{v:0,f:[],ph:0};g.t=n.title,g.v=(g.v||0)+1,g.last=Date.now(),g.f=g.f||[];let v=()=>{try{localStorage.setItem("qlog",JSON.stringify(f))}catch{}};v();let m=n.card||{},p=String(n.desc||"").split(/(?<=[.!?])\s/).slice(1).filter(C=>C.trim().length>12);if((m.extra||[]).forEach(C=>(C.items||[]).forEach(z=>p.push((C.h?C.h+": ":"")+z))),m.durum&&p.push(m.durum),m.aksiyom){let C=Sn.get(),z=C&&C.a&&String(m.aksiyom).startsWith("Aksiyom "+C.a);p.push((m.tahmini?k("row.est",{v:m.aksiyom}):m.aksiyom)+(z?" \xB7 "+k("id.yours"):""))}let M=p.slice(0,4).map((C,z)=>{let pe=e.seedH%628/100+z*2.1+.4,j=60+z*45;return{x:Math.sin(pe)*j,z:Math.cos(pe)*j,txt:C,found:g.f.includes(z)}}),b=window.QUL||{},I=b.galaxies||[],B=I.find(C=>C.id===n.gal)||{pos:[0,0,0]},S=[];(b.planets||[]).filter(C=>C.gal===n.gal&&C.key!==n.key&&!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(C.key)).slice(0,5).forEach(C=>{let z=Wn(C.key),pe=z%628/100,j=.14+(z>>>8)%40/100,Ae=el(((C.desc||"")+" "+(C.title||"")).toLowerCase()).a;S.push({type:1,dir:[Math.cos(j)*Math.sin(pe),Math.sin(j),Math.cos(j)*Math.cos(pe)],col:Ae.map(be=>Math.pow(be,2.2)*1.6),name:C.title,key:C.key})}),I.filter(C=>C.id!==n.gal&&!C.bg&&C.pos).map(C=>({g:C,d:Math.hypot(C.pos[0]-B.pos[0],C.pos[1]-B.pos[1],C.pos[2]-B.pos[2])||1})).sort((C,z)=>C.d-z.d).slice(0,4).forEach(({g:C,d:z})=>{let pe=[(C.pos[0]-B.pos[0])/z,(C.pos[1]-B.pos[1])/z,(C.pos[2]-B.pos[2])/z];pe[1]=.12+Math.abs(pe[1])*.7;let j=Math.hypot(...pe);pe=pe.map(Ae=>Ae/j),S.push({type:2,dir:pe,col:(C.tint||[1,1,1]).map(Ae=>Ae*.35),name:C.name,gal:C.id})}),u.uNb={value:Array.from({length:9},(C,z)=>S[z]?new _t(...S[z].dir,S[z].type):new _t)},u.uNc={value:Array.from({length:9},(C,z)=>S[z]?new U(...S[z].col):new U)},u.uOrb={value:2600},e.c.uReal&&new is().load("img/gok.png",C=>{C.wrapS=Ii,C.minFilter=nn,C.generateMipmaps=!1,C.colorSpace=sn,u.tSky.value=C}),u.uPoi={value:[0,1,2,3].map(C=>new U(M[C]?M[C].x:0,M[C]?M[C].z:0,M[C]?M[C].found?2:1:0))};let _={jallom:1,kaelum:2,fulgur:3},L=_[n.key]||0,y=L?(()=>{let C=e.seedH%314/50+1.1;return{x:Math.sin(C)*38,z:Math.cos(C)*38}})():null;u.uPoi.value.push(new U(y?y.x:0,y?y.z:0,y?3:0));let x=new ft({vertexShader:vu,fragmentShader:fl,uniforms:u,depthTest:!1,depthWrite:!1}),T=new pi,V=new ts(-1,1,1,-1,0,1),W=new yt(new Mr(2,2),x);W.frustumCulled=!1,T.add(W);let N=1,P=2600,H=0,O=!1,G=0,q=0,se=(C,z,pe)=>{let j=Math.max(0,Math.min(1,(pe-C)/(z-C)));return j*j*(3-2*j)},re=()=>{let C=u.uHead.value+u.uLook.value.x*.85,z=-u.uLook.value.y*.4-.05-.65*se(0,2600,P)-.2*se(0,150,P),pe=[Math.sin(C)*Math.cos(z),Math.sin(z),Math.cos(C)*Math.cos(z)],j=[pe[2],0,-pe[0]],Ae=Math.hypot(j[0],j[2])||1;return j[0]/=Ae,j[2]/=Ae,{fw:pe,rt:j,up:[pe[1]*j[2]-pe[2]*j[1],pe[2]*j[0]-pe[0]*j[2],pe[0]*j[1]-pe[1]*j[0]]}},fe=0,Z=0,oe=0,Me=0,Ee=0,Ue=!0,Xe=!1,He=0,Ve=0,nt=!1,J=.6,At=!0,Ie=window.__qulSafe?.3:Math.min(.4,[.7,.6,.5,.38][window.__qulQL|0]||.7),Ke=0,Ne=performance.now(),gt=0,Ze=0,R=0,E=1,K={x:0,y:0,lx:0,ly:0},ve=r.extensions.has("EXT_color_buffer_float")||r.extensions.has("EXT_color_buffer_half_float"),he=(C,z)=>new ln(Math.max(2,C|0),Math.max(2,z|0),{type:ve?In:hi,minFilter:nn,magFilter:nn,depthBuffer:!1}),ge=(C,z)=>new ft({vertexShader:l_,fragmentShader:C,uniforms:z,depthTest:!1,depthWrite:!1}),De=ge(c_,{tex:{value:null},texel:{value:new we},pre:{value:0}}),Se=ge(u_,{tex:{value:null},add:{value:null},texel:{value:new we}}),Re=ge(h_,{tS:{value:null},tB:{value:null},texel:{value:new we},uT:u.uT,str:{value:.22},sunUV:{value:new we(.5,.5)},rays:{value:0},sat:{value:1},tint:{value:new U(1,1,1)}}),qe=null,Ye=[],D=[],ae=[null,null],w=0,X=1,ie=ve&&!window.__qulSafe,$=ie?new ft({vertexShader:vu,fragmentShader:fl.slice(0,fl.indexOf(`void main(){
  gH=uSkyH;`))+d_,uniforms:Object.assign({},u,{tCur:{value:null},tHist:{value:null},uPP:{value:new we},uPL:{value:new we},uPH0:{value:0},uPA:{value:0},uPT:{value:0},uRst:{value:1},uPO:{value:0}}),depthTest:!1,depthWrite:!1}):null,ne=[[.5,.333],[.25,.667],[.75,.111],[.125,.444],[.625,.778],[.375,.222],[.875,.556],[.0625,.889]],Pe=0,Te=()=>{[qe,...Ye,...D,...ae].forEach(C=>C&&C.dispose())},_e=(C,z,pe)=>{Te();let j=Math.max(2,Math.round(C*pe)),Ae=Math.max(2,Math.round(z*pe));r.setSize(C,z,!1),u.uRes.value.set(j,Ae),qe=he(j,Ae),ie&&(ae=[he(j,Ae),he(j,Ae)],X=1),Ye=[],D=[];for(let be=1;be<=4;be++)Ye.push(he(C/(1<<be+1),z/(1<<be+1)));for(let be=3;be>=1;be--)D.push(he(C/(1<<be),z/(1<<be)));Re.uniforms.texel.value.set(1/C,1/z)},ce=(C,z)=>{W.material=C,r.setRenderTarget(z),r.render(T,V)},F=()=>{if(ie){let z=ne[Pe++%8];u.uJit.value.set(z[0]-.5,z[1]-.5)}else u.uJit.value.set(0,0);ce(x,qe);let C=qe;if(ie){let z=$.uniforms;z.tCur.value=qe.texture,z.tHist.value=ae[w].texture,z.uRst.value=X||u.uOrb.value>8||u.uCave.value>0?1:0,z.uPO.value=u.uOrb.value,ce($,ae[1-w]),w=1-w,C=ae[w],X=0,z.uPP.value.copy(u.uPos.value),z.uPL.value.copy(u.uLook.value),z.uPH0.value=u.uHead.value,z.uPA.value=u.uAlt.value,z.uPT.value=u.uT.value}De.uniforms.tex.value=C.texture,De.uniforms.pre.value=1,De.uniforms.texel.value.set(1/C.width,1/C.height),ce(De,Ye[0]),De.uniforms.pre.value=0;for(let z=1;z<4;z++)De.uniforms.tex.value=Ye[z-1].texture,De.uniforms.texel.value.set(1/Ye[z-1].width,1/Ye[z-1].height),ce(De,Ye[z]);for(let z=0;z<3;z++){let pe=z===0?Ye[3]:D[z-1],j=Ye[2-z];Se.uniforms.tex.value=pe.texture,Se.uniforms.add.value=j.texture,Se.uniforms.texel.value.set(1/pe.width,1/pe.height),ce(Se,D[z])}{let z=u.uSun.value,pe=re(),j=pe.fw,Ae=pe.rt,be=pe.up,Qe=z.x*j[0]+z.y*j[1]+z.z*j[2],lt=(z.x*Ae[0]+z.y*Ae[1]+z.z*Ae[2])/Qe/1.25,vt=(z.x*be[0]+z.y*be[1]+z.z*be[2])/Qe/1.25,Tt=innerHeight/innerWidth;Re.uniforms.sunUV.value.set(.5+lt*Tt,.5+vt),Re.uniforms.rays.value=Qe<.15||z.y<.02||u.uNight.value>.5?0:Math.min(1,(Qe-.15)*2.5)*Math.min(1,z.y*5)}Re.uniforms.tS.value=C.texture,Re.uniforms.tB.value=D[2].texture,ce(Re,null)},le=()=>_e(Math.min(1920,innerWidth),Math.round(Math.min(1920,innerWidth)*innerHeight/innerWidth),Ie);le();let de=C=>{K.x=(C.clientX/innerWidth-.5)*2,K.y=(C.clientY/innerHeight-.5)*2},ze=C=>{E=Math.max(.3,Math.min(4,E*(C.deltaY<0?1.12:.89)))},ye={},xe=C=>{let z=C.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(z)&&C.preventDefault(),ye[z]=!0,z==="escape"?Pn.close():z==="t"?At=!At:z==="p"?ot():z==="k"?t.querySelector(".sq").click():z==="v"?t.querySelector(".sb").click():z==="o"?H=H>0?0:2600:z==="r"?t.querySelector(".sv2").click():z==="m"?wp():z==="l"?t.querySelector(".sgz").click():z==="g"&&L?Je?Ct():Rt&&Wr():z==="f"?Ue=!Ue:z==="x"&&e.dive&&(He=He?0:1)},Ge=C=>{ye[C.key.toLowerCase()]=!1};t.addEventListener("pointerdown",C=>{if(!(C.target.closest("button")||C.pointerType==="touch")){Xe=!0;try{t.setPointerCapture(C.pointerId)}catch{}}}),t.addEventListener("pointerup",()=>{Xe=!1}),t.addEventListener("pointermove",C=>{Xe&&(fe+=(C.movementX||0)*.004)}),t.addEventListener("pointermove",de),t.addEventListener("wheel",ze,{passive:!0}),addEventListener("keydown",xe),addEventListener("keyup",Ge),addEventListener("resize",le);let ot=()=>{g.ph=(g.ph||0)+1,v();let C=Math.min(window.__qulSafe?1280:2048,Math.round(innerWidth*Math.min(devicePixelRatio||1,2))),z=Math.round(C*innerHeight/innerWidth);_e(C,z,1);for(let vt=0;vt<(ie?6:1);vt++){F();try{r.getContext().finish()}catch{}}let pe=document.createElement("canvas");pe.width=C,pe.height=z;let j=pe.getContext("2d");j.drawImage(r.domElement,0,0,C,z);let Ae=j.createLinearGradient(0,z*.6,0,z);Ae.addColorStop(0,"rgba(0,0,0,0)"),Ae.addColorStop(1,"rgba(0,0,0,.8)"),j.fillStyle=Ae,j.fillRect(0,z*.6,C,z*.4);let be=Math.round(z*.018);j.strokeStyle="rgba(232,196,106,.55)",j.lineWidth=Math.max(1,z*.0018),j.strokeRect(be,be,C-be*2,z-be*2),j.fillStyle="#e8c46a",j.font=Math.round(z*.062)+"px Georgia,serif",j.fillText(n.title||"",C*.05,z*.82);let Qe=String(n.desc||"").split(/(?<=[.!?])\s/)[0];j.fillStyle="#efe6d0",j.font="italic "+Math.round(z*.024)+"px Georgia,serif";{let vt=Qe.split(" "),Tt=[],Ht="";vt.forEach(Xt=>{let Yn=Ht?Ht+" "+Xt:Xt;j.measureText(Yn).width>C*.6&&Ht?(Tt.push(Ht),Ht=Xt):Ht=Yn}),Ht&&Tt.push(Ht),Tt.slice(0,3).forEach((Xt,Yn)=>j.fillText(Xt,C*.05,z*.87+Yn*z*.032))}j.fillStyle="#b8ab8e",j.font=Math.round(z*.017)+"px Georgia,serif",j.textAlign="right",j.fillText("QUL EFSANELER\u0130 \xB7 "+(location.host||"qul"),C*.95,z*.95);{let vt=Sn.label();vt&&(j.fillStyle="#e8c46a",j.font=Math.round(z*.016)+"px Georgia,serif",j.fillText(vt,C*.95,z*.92))}j.textAlign="left";try{let vt=document.createElement("canvas");vt.width=360,vt.height=Math.round(360*z/C),vt.getContext("2d").drawImage(pe,0,0,vt.width,vt.height);let Tt=[];try{Tt=JSON.parse(localStorage.getItem("qgal")||"[]")||[]}catch{}for(Tt.unshift({k:n.key,t:n.title,d:Date.now(),i:vt.toDataURL("image/jpeg",.72)});Tt.length>16;)Tt.pop();localStorage.setItem("qgal",JSON.stringify(Tt))}catch{}let lt=document.createElement("a");lt.download="qul-"+(n.key||"gezegen")+".png",lt.href=pe.toDataURL("image/png"),lt.click(),le()};t.querySelector(".sp").onclick=ot;let ht=t.querySelector(".sca"),st=()=>{ht.textContent=(u.uCalm.value?"\u25D0 ":"\u25D1 ")+k(u.uCalm.value?"surf.calmOn":"surf.calm"),ht.setAttribute("aria-pressed",u.uCalm.value?"true":"false")},bt=C=>{u.uCalm.value=C?1:0;try{localStorage.setItem("qcalm",C?"1":"0")}catch{}st()};{let C=null;try{C=localStorage.getItem("qcalm")}catch{}bt(C==null?matchMedia("(prefers-reduced-motion: reduce)").matches:C==="1")}ht.onclick=()=>bt(!u.uCalm.value);let zt=t.querySelector(".sv2"),$t=null;zt.textContent="\u25CF "+k("surf.video");let xl=()=>{if($t){$t.stop();return}let C=r.domElement;if(!C.captureStream||!window.MediaRecorder){oi(k("surf.video"),k("surf.videoNo"));return}let z=["video/mp4;codecs=avc1","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(Qe=>MediaRecorder.isTypeSupported(Qe));if(!z){oi(k("surf.video"),k("surf.videoNo"));return}let pe=C.captureStream(30),j=[];$t=new MediaRecorder(pe,{mimeType:z,videoBitsPerSecond:12e6}),$t.ondataavailable=Qe=>{Qe.data.size&&j.push(Qe.data)},$t.onstop=()=>{let Qe=new Blob(j,{type:z.split(";")[0]}),lt=document.createElement("a");lt.download="qul-"+(n.key||"gezegen")+(z.includes("mp4")?".mp4":".webm"),lt.href=URL.createObjectURL(Qe),lt.click(),setTimeout(()=>URL.revokeObjectURL(lt.href),4e3),$t=null,zt.classList.remove("on"),zt.textContent="\u25CF "+k("surf.video"),g.ph=(g.ph||0)+1,v()},$t.start(),zt.classList.add("on");let Ae=10;zt.textContent="\u25A0 "+Ae+" sn";let be=setInterval(()=>{if(!$t){clearInterval(be);return}Ae--,zt.textContent="\u25A0 "+Ae+" sn",Ae<=0&&(clearInterval(be),$t.stop())},1e3)};zt.onclick=xl;let Gi=t.querySelector(".sgz"),Gs=t.querySelector(".ssc"),gs=["","surf.scT","surf.scM","surf.scS"],Vr=()=>{let C=u.uScan.value,z=e.scan;if(Gi.textContent="\u2316 "+(C?k(gs[C]):k("surf.scan")),Gi.classList.toggle("on",C>0),!C){Gs.classList.remove("on");return}let pe=(Ae,be)=>"<tr><td>"+s(k(Ae))+"</td><td>"+(be?s(be[0])+' <i class="'+be[1]+'">'+s(k("surf.src."+be[1]))+"</i>":'<i class="yok">'+s(k("surf.src.yok"))+"</i>")+"</td></tr>",j="<small>"+s(k("surf.scan"))+" \xB7 "+s(k(gs[C]))+"</small><table>"+pe("surf.r.t",z.t)+pe("surf.r.p",z.p)+pe("surf.r.o2",z.o2)+pe("surf.r.g",z.g)+pe("surf.r.mag",z.mag)+pe("surf.r.rad",z.rad)+"</table>";if(C===3){let be=Qe=>Math.round((Qe-380)/620*260);j+='<div class="spc"><div class="spb"></div>'+z.gas.flatMap(Qe=>Qe[2].map(lt=>'<i style="left:'+be(lt)+'px" title="'+s(Qe[0])+" "+lt+' nm"></i>')).join("")+'</div><div class="spl"><span>380 nm</span><span>1000 nm</span></div><p>'+(z.gas.length?z.gas.map(Qe=>"<b>"+s(Qe[0])+"</b> "+s(Qe[1])).join(" \xB7 "):s(k("surf.src.yok")))+"</p>"}j+='<p class="scn">'+s(k("surf.scNote"+C))+"</p>",Gs.innerHTML=j,Gs.classList.add("on")};Gi.onclick=()=>{u.uScan.value=(u.uScan.value+1)%4,Vr()},Vr();let Gr=t.querySelector(".sq"),Ga=()=>{Gr.textContent=k("surf.q")+": "+k("surf.q"+u.uQ.value)},_l=C=>{u.uQ.value=C;try{localStorage.setItem("qsq",C)}catch{}Ga(),C<1&&Ie>.75&&(Ie=.75,le())};Gr.onclick=()=>_l((u.uQ.value+2)%3),Ga();let bl=["gezgin","yerli","gozlemci"],A={gezgin:[1,[1,1,1],1,30],yerli:[1.12,[1.07,1,.9],.5,2],gozlemci:[.72,[.9,.98,1.1],1.7,24]},Y=0,ee=30,te=t.querySelector(".sb"),Q=C=>{Y=C;let z=bl[C],pe=A[z];Re.uniforms.sat.value=pe[0],Re.uniforms.tint.value.set(...pe[1]),N=pe[2],ee=pe[3],z==="yerli"&&(Ee=0),z==="gozlemci"&&(Ee=Math.max(Ee,20)),te.textContent=k("surf.view")+": "+k("surf.v."+z);let j=((window.QUL_BAKIS||{})[n.key]||{})[z];j&&oi(k("surf.v."+z),j)},ke=document.createElement("div");ke.className="snb",t.appendChild(ke);let Oe=null,Be=!1,Fe=null,rt=!1,$e=null,Je=!1,Rt=!1,Wt=0,Dt=0,En=0,Mt=0,at=C=>{let z=document.createElement("div");z.className="sfd",t.appendChild(z),requestAnimationFrame(()=>z.classList.add("on")),setTimeout(()=>{C(),z.classList.remove("on"),setTimeout(()=>z.remove(),700)},650)};var Wr=()=>at(()=>{Je=!0,Wt=2,Dt=0,En=0,Mt=0,u.uCave.value=L,ke.style.display="none",g.cave=!0,v(),je&&je.audio&&je.audio.cave&&je.audio.cave(!0,L),oi(k("surf.cave"),k("surf.caveIn2"))}),Ct=()=>at(()=>{Je=!1,u.uCave.value=0,ke.style.display="",je&&je.audio&&je.audio.cave&&je.audio.cave(!1)}),Mi=C=>{let z=(ye.w||ye.arrowup?1:0)-(ye.s||ye.arrowdown?1:0)+(Pt.on?-Pt.y:0),pe=1-Math.exp(-C*3);Mt+=(z*1.7*(ye.shift?2.2:1)-Mt)*pe,Wt+=Mt*C,Dt=Math.max(-1.3,Math.min(1.3,Dt+((ye.d?1:0)-(ye.a?1:0))*C*1.2)),En=Math.max(-1.3,Math.min(1.3,En+((ye.e||ye.arrowright?1:0)-(ye.q||ye.arrowleft?1:0)+(Pt.on?Pt.x:0))*C*1.1)),u.uCS.value=Wt,u.uCX.value=Dt,u.uCYaw.value=En,Wt<0&&Mt<0&&Ct()};let Wa=S.map(C=>{let z=document.createElement("button");return z.textContent=C.name,z.className=C.type===1?"np":"ng",z.title=k(C.type===1?"surf.nbP":"surf.nbG"),z.onclick=()=>{C.type===1?(Oe=C.key,H=2600,oi(k("surf.warp"),C.name)):window.dispatchEvent(new CustomEvent("qulGo",{detail:{gal:C.gal}}))},ke.appendChild(z),z}),Xn=(C,z)=>{let pe=document.createElement("span");return pe.textContent=C,pe.className="sml "+z,ke.appendChild(pe),pe},qr=Xn(k(e.c.uTwin?"surf.sunTwin":"surf.sun"),"ms"),qt=e.c.uMoons>=1?Xn(k("surf.moon"),"ms"):null,Si=[["surf.cN",[0,.02,1]],["surf.cE",[1,.02,0]],["surf.cS",[0,.02,-1]],["surf.cW",[-1,.02,0]]].map(([C,z])=>({d:z,e:Xn(k(C),"mc")})),wi=(C,z,pe)=>{let j=C[0]*z.fw[0]+C[1]*z.fw[1]+C[2]*z.fw[2];if(j<.2)return null;let Ae=(C[0]*z.rt[0]+C[1]*z.rt[1]+C[2]*z.rt[2])/j/1.25,be=(C[0]*z.up[0]+C[1]*z.up[1]+C[2]*z.up[2])/j/1.25,Qe=(.5+Ae*pe)*innerWidth,lt=(.5-be)*innerHeight;return Qe<0||Qe>innerWidth||lt<0||lt>innerHeight?null:[Qe,lt]},Qt=(C,z,pe,j)=>{if(!z||pe<=0){C.style.opacity=0,j&&(C.style.pointerEvents="none");return}C.style.transform="translate("+Math.round(z[0])+"px,"+Math.round(z[1]+12)+"px) translateX(-50%)",C.style.opacity=pe.toFixed(2),j&&(C.style.pointerEvents="auto")},Xr=0;var Ml=()=>{if(++Xr%2)return;let C=re(),z=innerHeight/innerWidth,pe=e.c.uPhys?Math.max(0,1-(u.uPZ.value.x+u.uPZ.value.y+u.uPZ.value.z)*1.6):1,j=Be?1:.3+.7*Math.max(pe,se(150,900,P));S.forEach((be,Qe)=>Qt(Wa[Qe],wi(be.dir,C,z),j,!0));let Ae=u.uSun.value;if(Qt(qr,Be?wi([Ae.x,Ae.y,Ae.z],C,z):null,1,!1),qt){let be=u.uMoon0.value;Qt(qt,Be&&be.y>-.02?wi([be.x,be.y,be.z],C,z):null,1,!1)}if(Si.forEach(be=>Qt(be.e,Be&&P<200?wi(be.d,C,z):null,.9,!1)),e.c.uReal&&(Be&&!$e&&($e=mu.c.map(be=>({ra:be[2]*Math.PI/180,de:be[3]*Math.PI/180,e:Xn(pn==="tr"?be[0]:be[1],"mk")})).concat(mu.s.map(be=>({ra:be[1]*Math.PI/180,de:be[2]*Math.PI/180,e:Xn(be[0],"mst")})))),$e)){let be=u.uLatR.value,Qe=Math.sin(be),lt=Math.cos(be),vt=u.uLST.value;$e.forEach(Tt=>{if(!Be){Tt.e.style.opacity=0;return}let Ht=vt-Tt.ra,Xt=Math.cos(Tt.de),Yn=Math.sin(Tt.de),Kn=Xt*Math.cos(Ht),Wi=[-Xt*Math.sin(Ht),Kn*lt+Yn*Qe,-Kn*Qe+Yn*lt];Qt(Tt.e,Wi[1]>.03?wi(Wi,C,z):null,.85,!1)})}};let qa=(C,z)=>{let pe=re(),j=innerHeight,Ae=innerWidth,be=(C-Ae/2)/j,Qe=(j/2-z)/j,lt=[0,1,2].map(Wi=>pe.fw[Wi]+(be*pe.rt[Wi]+Qe*pe.up[Wi])*1.25),vt=Math.hypot(...lt);lt=lt.map(Wi=>Wi/vt);let Tt=8e3,Ht=Tt+P+8,Xt=Ht*lt[1],Yn=Ht*Ht-Tt*Tt,Kn=Xt*Xt-Yn;if(Kn<0)return!1;let Za=-Xt-Math.sqrt(Kn);return Za<0?!1:(Fe={x0:u.uPos.value.x,z0:u.uPos.value.y,x1:u.uPos.value.x+lt[0]*Za,z1:u.uPos.value.y+lt[2]*Za,k:0},H=0,!0)},Yr=null;t.addEventListener("pointerdown",C=>{Yr=[C.clientX,C.clientY]}),t.addEventListener("pointerup",C=>{if(!Yr||C.target.closest("button"))return;let z=Math.hypot(C.clientX-Yr[0],C.clientY-Yr[1]);Yr=null,z<6&&P>300&&H>0&&qa(C.clientX,C.clientY)});var Sp=C=>{if(P>1500&&H>0&&!rt&&!Oe&&(rt=!0,oi(k("surf.orbit"),k("surf.orbitHint"))),Oe&&P>1300){let z=Oe;Oe=null,window.dispatchEvent(new CustomEvent("qulGo",{detail:{planet:z,warp:!0}}))}if(Fe){Fe.k=Math.min(1,Fe.k+C*.2);let z=Fe.k*Fe.k*(3-2*Fe.k);u.uPos.value.set(Fe.x0+(Fe.x1-Fe.x0)*z,Fe.z0+(Fe.z1-Fe.z0)*z),Z=0,Fe.k>=1&&(Fe=null)}},wp=()=>{Be=!Be,u.uGrid.value=Be?1:0,oi(k("surf.map"),k(Be?"surf.mapOn":"surf.mapOff"))};te.onclick=()=>Q((Y+1)%3),te.textContent=k("surf.view")+": "+k("surf.v.gezgin");let Pt={on:!1,id:-1,ox:0,oy:0,x:0,y:0},ai={id:-1,x:0,y:0},Xa=t.querySelector(".sj");t.addEventListener("pointerdown",C=>{C.pointerType!=="touch"||C.target.closest("button")||(C.clientX<innerWidth*.45&&!Pt.on?(Pt.on=!0,Pt.id=C.pointerId,Pt.ox=C.clientX,Pt.oy=C.clientY,Pt.x=Pt.y=0,Xa.style.left=C.clientX+"px",Xa.style.top=C.clientY+"px",Xa.classList.add("on")):(ai.id=C.pointerId,ai.x=C.clientX,ai.y=C.clientY))}),t.addEventListener("pointermove",C=>{C.pointerType==="touch"&&(C.pointerId===Pt.id?(Pt.x=Math.max(-1,Math.min(1,(C.clientX-Pt.ox)/60)),Pt.y=Math.max(-1,Math.min(1,(C.clientY-Pt.oy)/60))):C.pointerId===ai.id&&(K.x=Math.max(-1,Math.min(1,K.x+(C.clientX-ai.x)/innerWidth*2.4)),K.y=Math.max(-1,Math.min(1,K.y+(C.clientY-ai.y)/innerHeight*2.4)),ai.x=C.clientX,ai.y=C.clientY))});let Ru=C=>{C.pointerId===Pt.id&&(Pt.on=!1,Pt.id=-1,Pt.x=Pt.y=0,Xa.classList.remove("on")),C.pointerId===ai.id&&(ai.id=-1)};t.addEventListener("pointerup",Ru),t.addEventListener("pointercancel",Ru);let Cu=(C,z)=>{C.addEventListener("pointerdown",pe=>{pe.preventDefault(),ye[z]=!0}),["pointerup","pointerleave","pointercancel"].forEach(pe=>C.addEventListener(pe,()=>{ye[z]=!1}))};if(Cu(t.querySelector(".su")," "),Cu(t.querySelector(".sd"),"c"),matchMedia("(pointer:coarse)").matches){t.classList.add("touch");let C=t.querySelector(".sn");C&&(C.textContent=k("surf.touch"))}t.querySelector(".sx").onclick=()=>Pn.close();let Ya=e.c.uSea>0?.07*e.c.uAmp*(e.c.uMoons>=1?1:.4):0,Pu=0,Lu=0;u.uTideA.value=Ya;let ku=()=>{if(!Ya)return;let C=u.uMoon0.value,z=u.uSun.value,pe=e.c.uMoons>=1?2*C.y*C.y-1:0,j=Ya*(pe+.46*(2*z.y*z.y-1))/1.46;Lu=j-Pu,Pu=j,u.uTide.value=j},Sl=e.c.uPart,Ka=0,Iu=0,Du=0,Kr=2.2+Math.random()*2,oi=(C,z)=>{let pe=t.querySelector(".sk");pe&&(pe.innerHTML="<small>"+s(C)+"</small><p>"+s(z)+"</p>",pe.classList.add("on"),clearTimeout(Du),Du=setTimeout(()=>pe.classList.remove("on"),11e3))};M.length&&M.some(C=>!C.found)&&setTimeout(()=>{je&&oi(k("surf.poi"),k("surf.poiHint"))},7e3);let Ws=e.type===0&&e.c.uPart===3,en=e.c.uPhys&&!e.vac&&e.type!==1?{v:e.c.uPart===5?.8:.15,tg:.15,t:25+Math.random()*30,bm:e.c.uBM}:null,Ep=Math.random()*6.283;window.__qulDbg={wx:en,U:u,setWet:C=>{Ka=C},orb:(C,z)=>{P=C,z!=null&&(H=z)},ecl:C=>{Kr=C}};let Tp=C=>{Sp(C);{let j=Math.log(1+P);P=Math.max(0,Math.exp(j+(Math.log(1+H)-j)*(1-Math.exp(-C*.5)))-1),H===0&&P<.05&&(P=0),u.uOrb.value=P,Ml()}let z=Math.max(-1,Math.min(1,u.uPos.value.y/1200+(e.c.uReal?39/80:0)));u.uLat.value=z;let pe=u.uT.value*6.2832/480+Ep+(z<0?Math.PI:0);if(u.uSeason.value=Math.sin(pe),u.uAut.value=Math.max(0,-Math.cos(pe)),en){en.t-=C,en.t<=0&&(en.tg=e.storm&&Math.random()<.6?.65+Math.random()*.35:Math.random()<.5?Math.random()*.4:.4+Math.random()*.6,en.t=50+Math.random()*70),en.v+=(en.tg-en.v)*(1-Math.exp(-C*.03));let j=en.v;Ws?(e.c.uBM=en.bm*(1+3*Math.max(0,j-.4)/.6),u.uBM.value=e.c.uBM):u.uCloud.value=e.c.uCloud+Math.max(0,j-.25)/.75*(1.6-e.c.uCloud);let Ae=!Ws&&e.type!==4&&j>.62;Sl=Ae?5:Ws&&j>.5?3:e.c.uPart,Ka=Math.max(0,Math.min(1,Ka+(Ae?C*.05:-C*.012))),u.uWet.value=Ka,je&&je.audio&&je.audio.rain&&je.audio.rain(Ae?(j-.62)/.38:0),!Ws&&j>.85&&Math.random()<C*.12&&je&&je.bolt(),en.w=j,en.rain=Ae,u.uWind.value=.3+j*1.1}if(e.c.uMoons>=1){Kr+=C*.0175;let j=u.uSun.value,Ae=[j.x,j.y,j.z],be=[Ae[1]*0-Ae[2]*1,Ae[2]*0-Ae[0]*0,Ae[0]*1-Ae[1]*0],Qe=Math.hypot(...be)||1;be=be.map(Kn=>Kn/Qe);let lt=[Ae[1]*be[2]-Ae[2]*be[1],Ae[2]*be[0]-Ae[0]*be[2],Ae[0]*be[1]-Ae[1]*be[0]],vt=.09*Math.sin(Kr*.37+1.3),Tt=Math.cos(Kr),Ht=Math.sin(Kr),Xt=[0,1,2].map(Kn=>Tt*Ae[Kn]+Ht*(be[Kn]*Math.cos(vt)+lt[Kn]*Math.sin(vt)));u.uMoon0.value.set(...Xt).normalize(),ku();let Yn=Math.acos(Math.max(-1,Math.min(1,u.uMoon0.value.dot(j))));u.uEcl.value=j.y>0?1-se(.018,.085,Yn):0}if(e.c.uReal||(u.uLatR.value=z*80*Math.PI/180),e.c.uReal){u.uLatR.value=z*80*Math.PI/180,u.uLST.value=J*1.0027+1.9;let j=Math.max(0,1-(u.uPZ.value.x+u.uPZ.value.y+u.uPZ.value.z)*2);u.uAur.value=Math.abs(z)>.72?j:0}e.c.uMoons<1&&ku();for(let j=0;j<M.length;j++){let Ae=M[j];if(!Ae.found&&Math.hypot(u.uPos.value.x-Ae.x,u.uPos.value.y-Ae.z)<11){Ae.found=!0,u.uPoi.value[j].z=2,g.f.includes(j)||g.f.push(j),v();try{window.dispatchEvent(new CustomEvent("qulFound",{detail:n.key}))}catch{}oi(k("surf.poi")+" \xB7 "+M.filter(be=>be.found).length+"/"+M.length,Ae.txt)}}if(y&&!Je){let j=Math.hypot(u.uPos.value.x-y.x,u.uPos.value.y-y.z)<9;j&&!Rt&&oi(k("surf.cave"),k("surf.caveHint"+L)),Rt=j}if((Iu-=C)<=0){Iu=1;let j=t.querySelector(".sw");if(j){let Ae=Math.round(Math.abs(z)*80),be=(pe%6.2832+6.2832)%6.2832,Qe=k("surf.s"+Math.floor(be/1.5708)),lt="";if(en){let vt=en.w||0;lt=" \xB7 "+k(Ws?vt>.55?"surf.wDust":"surf.w0":en.rain?vt>.85?"surf.w3":"surf.w2":vt>.35?"surf.w1":"surf.w0")}j.textContent=k("surf.lat")+" "+Ae+"\xB0 "+k(z>=0?"surf.N":"surf.S")+" \xB7 "+Qe+lt+(Ya?" \xB7 "+k(Lu>=0?"surf.tideUp":"surf.tideDn"):"")+(M.length?" \xB7 "+k("surf.poi")+" "+M.filter(vt=>vt.found).length+"/"+M.length:""),Je&&(j.textContent=k("surf.caveIn",{m:Math.round(Wt)}))}}},Uu=C=>{if(o)return;Ke=requestAnimationFrame(Uu);let z=Math.min(.1,(C-Ne)/1e3);if(Ne=C,u.uT.value+=z,e.c.uCycle&&At&&++h%3===0&&d(),e.dive){Ve+=(He-Ve)*(1-Math.exp(-z*.7)),u.uDive.value=Ve;let j=Ve>.5;u.uPart.value=j?7:Sl,j!==nt&&(nt=j,je&&je.audio&&je.audio.uw(j))}if(je&&(u.uFlash.value=je.flash(),je.decay(Math.exp(-z*5))),e.dive||(u.uPart.value=Sl),Tp(z),e.c.uCycle&&At){J+=z*.03*(e.c.uSig===7?Math.sin(u.uT.value*.07)*2.2+Math.sin(u.uT.value*.031)*1.4:1);let j=Math.abs(u.uLat.value),Ae=.42*Math.cos(J)*(1-.4*j)-.15*j,be=Math.sqrt(1-Ae*Ae);u.uSun.value.set(-.418*be,Ae,.909*be)}if(Je)Mi(z);else{let j=e.c.speed*E*N*(1+P*.03),Ae=ye.shift?2:1,be=Pt.on?-Pt.y*2.2*j*Ae:ye.w||ye.arrowup?2.2*j*Ae:ye.s||ye.arrowdown?-.6*j:Ue?j*Ae:0,Qe=((ye.d?1:0)-(ye.a?1:0))*.9*j*Ae,lt=1-Math.exp(-z*2.5);Z+=(be-Z)*lt,oe+=(Qe-oe)*lt,fe+=((ye.e||ye.arrowright?1:0)-(ye.q||ye.arrowleft?1:0))*z*1.1+(Pt.on?Pt.x*z*1.3:0),u.uPos.value.x+=(Math.sin(fe)*Z+Math.cos(fe)*oe)*z,u.uPos.value.y+=(Math.cos(fe)*Z-Math.sin(fe)*oe)*z,u.uHead.value=fe,Ee=Math.max(0,Math.min(ee,Ee+((ye[" "]?1:0)-(ye.c?1:0))*z*9)),Me+=(Ee-Me)*lt,u.uAlt.value=Me}let pe=1-Math.exp(-z*3);if(K.lx+=(K.x-K.lx)*pe,K.ly+=(K.y-K.ly)*pe,u.uLook.value.set(K.lx,K.ly),e.c.uSig===8){let j=u.uT.value*.05;Re.uniforms.tint.value.set(1+.08*Math.sin(j),1+.06*Math.sin(j+2.1),1+.1*Math.sin(j+4.2)),Re.uniforms.str.value=.42}if(F(),l.isConnected&&++c===4&&l.remove(),O||(G+=z,q++,G>25&&(O=!0,mn.measure(Math.round(q/G),u.uQ.value,matchMedia("(pointer:coarse)").matches))),gt+=z,Ze++,R>0&&R--,Ze>=30){let j=gt/Ze;gt=0,Ze=0,!R&&j>.09&&Ie>.2?(Ie=Math.max(.2,Ie*.6),le(),R=20):!R&&j>.05&&Ie>.2?(Ie=Math.max(.2,Ie*.75),le(),R=30):!R&&j>.026&&Ie>.3?(Ie*=.88,le(),R=45):!R&&j<.0175&&Ie<(u.uQ.value<1?.75:1)&&(Ie=Math.min(u.uQ.value<1?.75:1,Ie*(j<.011?1.16:1.06)),le(),R=j<.011?20:45)}};if(je={mTaa:$,ld:l,kill:Te,el:t,rdr:r,mat:x,onKey:xe,onUp:Ge,onMove:de,size:le,audio:null,quiet:setTimeout(()=>{let C=t.querySelector(".sc");C&&(C.style.transition="opacity 3s",C.style.opacity="0")},15e3)},o){Pn.close();return}let qs=0,Nu=0;if(e.storm){let C=()=>{Nu=setTimeout(()=>{(!en||!Ws&&en.w>.6)&&(qs=1,setTimeout(()=>{qs=.8},130),je&&je.audio&&setTimeout(()=>{je&&je.audio&&je.audio.thunder()},500+Math.random()*1500)),C()},5e3+Math.random()*8e3)};C()}je.bolt=()=>{qs=1,setTimeout(()=>{qs=.8},130),je.audio&&setTimeout(()=>{je&&je.audio&&je.audio.thunder()},500+Math.random()*1500)},je.flashStop=()=>clearTimeout(Nu),je.flash=()=>qs,je.decay=C=>{qs*=C};let Ap=performance.now(),zu=!1,Ou=l.querySelector("u"),Fu=l.querySelector(".go"),Bu=()=>{zu||!je||o||(zu=!0,l.remove(),$f(!0),je.audio=f_(e),je.pz=setTimeout(()=>ue.pause(!0),1700),requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("on"))),Ke=requestAnimationFrame(Uu))};Fu.addEventListener("click",Bu),je.seek=C=>{u.uT.value+=C,J+=C*.03},setTimeout(()=>{(async()=>{try{if(r.compileAsync){let z=[x,$,De,Se,Re].filter(Boolean),pe=0,j=Promise.all(z.map(Ae=>{let be=new pi,Qe=new yt(W.geometry,Ae);return Qe.frustumCulled=!1,be.add(Qe),r.compileAsync(be,V).then(()=>{pe++,Ou.style.width=Math.round(pe/z.length*92)+"%"})}));await Promise.race([j,new Promise(Ae=>setTimeout(Ae,4e4))])}}catch{}if(!je||o)return;if(Ou.style.width="100%",l.classList.add("ok"),performance.now()-Ap<1500)Bu();else{Fu.hidden=!1,l.querySelector("b").textContent=k("surf.ready2");try{navigator.vibrate&&navigator.vibrate(60)}catch{}}})()},150),je.stopLoop=()=>cancelAnimationFrame(Ke)},seek(n){je&&je.seek(n)},warm(){if(!(je||Pn._w)){Pn._w=!0;try{let n=Jf({key:"warm",desc:"",title:"w",eyebrow:""}),e=document.createElement("canvas");e.width=e.height=8;let t=new fi({canvas:e,antialias:!1}),i={uRes:{value:new we(8,8)},uLook:{value:new we},uT:{value:5},uDist:{value:0},uPos:{value:new we},uHead:{value:0},uAlt:{value:0},uSun:{value:new U(...n.sun)}};for(let a in n.c)a!=="speed"&&(i[a]={value:n.c[a]});for(let a in n.col)i[a]={value:n.col[a]};let s=new pi,r=new ts(-1,1,1,-1,0,1),o=new ft({vertexShader:vu,fragmentShader:fl,uniforms:i,depthTest:!1});s.add(new yt(new Mr(2,2),o)),t.render(s,r),t.getContext().finish(),o.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss()}catch{}}},close(){if(!je)return;let n=je;je=null,n.ld&&n.ld.remove(),clearTimeout(n.pz),clearTimeout(n.quiet),n.flashStop&&n.flashStop(),n.el.classList.remove("on"),ue.pause(!1),n.audio&&n.audio.stop(),$f(!!window.__hush),removeEventListener("keydown",n.onKey),removeEventListener("keyup",n.onUp),removeEventListener("resize",n.size),setTimeout(()=>{n.stopLoop();try{n.kill(),n.rdr.dispose(),n.mat.dispose(),n.mTaa&&n.mTaa.dispose()}catch{}n.el.remove()},1700)}};var Qf=n=>{try{parent.postMessage({qulDuck:n},"*")}catch{}},Ua=null;function p_(){if(window.__hush)return null;let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;let e=new n,t=e.createGain(),i=e.createGain(),s=e.createGain();t.gain.value=1,i.gain.value=0,s.gain.value=0,t.connect(s),i.connect(s),s.connect(e.destination);let r=(v,m,p,M="sine")=>{let b=e.createOscillator(),I=e.createGain();return b.type=M,b.frequency.value=m,I.gain.value=p,b.connect(I),I.connect(v),b.start(),{o:b,gn:I}},o=(v,m,p)=>{let M=e.createOscillator(),b=e.createGain();M.frequency.value=m,b.gain.value=p,M.connect(b),b.connect(v),M.start()},a=e.sampleRate*3,l=e.createBuffer(1,a,e.sampleRate),c=l.getChannelData(0);for(let v=0;v<a;v++)c[v]=Math.random()*2-1;let u=(v,m,p)=>{let M=e.createBufferSource();M.buffer=l,M.loop=!0;let b=e.createBiquadFilter(),I=e.createGain();b.type="bandpass",b.frequency.value=m,b.Q.value=.6,I.gain.value=p,M.connect(b),b.connect(I),I.connect(v),M.start(),o(b.frequency,.05,m*.3),o(I.gain,.07,p*.6)},d=r(t,41.2,.14),h=r(t,43.1,.1),f=r(t,82.4,.04,"triangle");o(d.gn.gain,.04,.05),o(f.gn.gain,.07,.02),u(t,320,.22),[[110,.07],[164.8,.05],[220,.04],[329.6,.025],[493.9,.012]].forEach(([v,m],p)=>{let M=r(i,v,m,p>2?"sine":"triangle");o(M.gn.gain,.03+p*.011,m*.5)});let g=r(i,1318.5,.004);return o(g.gn.gain,.17,.004),u(i,900,.05),s.gain.linearRampToValueAtTime(.5,e.currentTime+4),{to(v){let m=e.currentTime;t.gain.cancelScheduledValues(m),i.gain.cancelScheduledValues(m),t.gain.setValueAtTime(t.gain.value,m),i.gain.setValueAtTime(i.gain.value,m),t.gain.linearRampToValueAtTime(v?0:1,m+3.5),i.gain.linearRampToValueAtTime(v?1:0,m+3.5)},stop(){try{s.gain.cancelScheduledValues(e.currentTime),s.gain.setValueAtTime(s.gain.value,e.currentTime),s.gain.linearRampToValueAtTime(0,e.currentTime+1.4)}catch{}setTimeout(()=>{try{e.close()}catch{}},1700)}}}var Na=[{id:"araf",img:"img/esik-araf.jpg",gate:[.49,.47],title:"esik.a.t",lines:["esik.a.1"],origin:"50% 55%"},{id:"cherqa",img:"img/esik-cherqa.jpg",gate:[.5,.4],title:"esik.c.t",lines:["esik.c.1","esik.c.2","esik.c.3","esik.c.4"],origin:"50% 45%"}],pl={open(){if(Ua)return;let n=document.createElement("div");n.id="esik",n.innerHTML=Na.map(W=>'<div class="es" data-s="'+W.id+'"><div class="far" style="background-image:url('+W.img+')"></div><div class="near" style="background-image:url('+W.img+')"></div></div>').join("")+'<canvas class="em"></canvas><div class="ev"></div><div class="ef"></div><div class="et"><small></small><h2></h2><p></p></div><div class="en">'+k("esik.note")+'</div><button class="ex">'+k("esik.close")+'</button><button class="eg"></button>',document.body.appendChild(n);let e={};n.querySelectorAll(".es").forEach(W=>{e[W.dataset.s]=W});let t=n.querySelector("canvas"),i=t.getContext("2d"),s=n.querySelector(".et"),r=n.querySelector(".ef"),o=n.querySelector(".eg"),a=0,l=0,c=0,u=0,d=0,h=0,f=performance.now(),g=f,v=!1,m=[],p=0,M=0,b=0,I=p_(),B=()=>{M=t.width=innerWidth,b=t.height=innerHeight};B();let S=Array.from({length:70},()=>({x:Math.random(),y:Math.random(),z:.2+Math.random()*.8,v:.01+Math.random()*.03,ph:Math.random()*6.28})),_=(W,N)=>{let P=setTimeout(W,N);return m.push(P),P},L=()=>{m.forEach(clearTimeout),m=[]},y=W=>{a=W;let N=Na[W];n.dataset.cur=N.id,s.classList.remove("on"),_(()=>{s.querySelector("small").textContent=k("esik.eyebrow"),s.querySelector("h2").textContent=k(N.title);let P=s.querySelector("p");P.innerHTML="",s.classList.add("on"),N.lines.forEach((H,O)=>{let G=document.createElement("span");G.textContent=k(H),P.appendChild(G),_(()=>G.classList.add("on"),1800+O*4200)}),_(()=>{o.textContent=k(W?"esik.back":"esik.cross"),o.classList.add("on")},3e3+N.lines.length*2200)},1400),o.classList.remove("on")};o.onclick=()=>{if(v)return;v=!0,o.classList.remove("on"),s.classList.remove("on");let W=a?0:1;L(),n.classList.add("cross"),I&&I.to(W===1),_(()=>{r.style.opacity=1},2600),_(()=>{e[Na[a].id].classList.remove("on"),e[Na[W].id].classList.add("on"),p=0},3500),_(()=>{r.style.opacity=0,n.classList.remove("cross"),v=!1,y(W)},3700)},e.araf.classList.add("on");let x=W=>{let N=W.touches?W.touches[0]:W;l=N.clientX/innerWidth*2-1,c=N.clientY/innerHeight*2-1},T=W=>{W.key==="Escape"&&pl.close()};addEventListener("mousemove",x),addEventListener("touchmove",x,{passive:!0}),addEventListener("keydown",T),addEventListener("resize",B),n.querySelector(".ex").onclick=()=>pl.close();let V=W=>{h=requestAnimationFrame(V);let N=Math.min(.1,(W-g)/1e3),P=(W-f)/1e3;g=W,u+=(l-u)*(1-Math.exp(-N*2.2)),d+=(c-d)*(1-Math.exp(-N*2.2)),v&&(p=Math.min(1,p+N/2.8));let H=Na[a],O=e[H.id],G=p*p*(3-2*p),q=1.04+Math.min(P*.0012,.06),se=O.querySelector(".far"),re=O.querySelector(".near"),fe=q+G*5.2,Z=q*1.06+G*7.5,oe=H.gate[0]*100+"% "+H.gate[1]*100+"%";se.style.transformOrigin=re.style.transformOrigin=G>0?oe:H.origin,se.style.transform="translate("+-u*1.1+"%,"+-d*.8+"%) scale("+fe+")",re.style.transform="translate("+-u*2.6+"%,"+-d*1.6+"%) scale("+Z+")",i.clearRect(0,0,M,b);let Me=a?"255,214,140":"230,200,150";for(let Ee of S){Ee.y-=Ee.v*N*(a?1:.5),Ee.x+=Math.sin(P*.3+Ee.ph)*4e-4,Ee.y<-.05&&(Ee.y=1.05,Ee.x=Math.random());let Ue=(Ee.x-u*.03*Ee.z)*M,Xe=Ee.y*b,He=(1+Ee.z*2.4)*(b/900),Ve=(.18+.5*Ee.z)*(.6+.4*Math.sin(P*1.3+Ee.ph))*(1-G*.7),nt=i.createRadialGradient(Ue,Xe,0,Ue,Xe,He*3);nt.addColorStop(0,"rgba("+Me+","+Ve+")"),nt.addColorStop(1,"rgba("+Me+",0)"),i.fillStyle=nt,i.fillRect(Ue-He*3,Xe-He*3,He*6,He*6)}};Ua={el:n,audio:I,raf:0,cleanup(){L(),cancelAnimationFrame(h),removeEventListener("mousemove",x),removeEventListener("touchmove",x),removeEventListener("keydown",T),removeEventListener("resize",B)}},Qf(!0),ue.pause(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.add("on"),y(0),h=requestAnimationFrame(V)}))},close(){if(!Ua)return;let n=Ua;Ua=null,n.cleanup(),n.el.classList.remove("on"),ue.pause(!1),n.audio&&n.audio.stop(),Qf(!!window.__hush),setTimeout(()=>n.el.remove(),1700)}};var Et=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),xu={open(n,e){let t={};try{t=JSON.parse(localStorage.getItem("qlog")||"{}")||{}}catch{}let i=Object.keys(t).filter(h=>n[h]).sort((h,f)=>(t[f].last||0)-(t[h].last||0)),s=Object.keys(n).length,r=i.reduce((h,f)=>h+(t[f].f||[]).length,0),o=i.reduce((h,f)=>h+(t[f].ph||0),0),a=[];try{a=JSON.parse(localStorage.getItem("qgal")||"[]")||[]}catch{}let l=document.createElement("div");l.id="defter",l.innerHTML='<div class="db"><button class="dx">\u2715</button><small>'+Et(k("log.eyebrow"))+"</small><h2>"+Et(k("log.title"))+'</h2><div class="did">'+(Sn.get()?"<span>"+Et(Sn.label())+"</span>":"<span>"+Et(k("id.none"))+"</span>")+'<button class="dk">'+Et(k(Sn.get()?"id.edit":"id.create"))+"</button>"+(Sn.get()?'<button class="dc">'+Et(k("id.card"))+"</button>":"")+'</div><div class="ds"><b>'+i.length+"</b> / "+s+" "+Et(k("log.worlds"))+" \xB7 <b>"+r+"</b> "+Et(k("log.traces"))+" \xB7 <b>"+o+"</b> "+Et(k("log.photos"))+"</div>"+(i.length?"<ol>"+i.map(h=>{let f=t[h];return'<li data-k="'+Et(h)+'"><span>'+Et(n[h].title)+"</span><i>"+Et(k("log.row",{v:f.v||1,f:(f.f||[]).length,p:f.ph||0}))+"</i></li>"}).join("")+"</ol>":"<p>"+Et(k("log.empty"))+"</p>")+((window.__qulTop||[]).length?"<h3>"+Et(k("log.community"))+'</h3><ol class="dt">'+window.__qulTop.filter(h=>n[h[0]]).map(h=>'<li data-k="'+Et(h[0])+'"><span>'+Et(n[h[0]].title)+"</span><i>"+Et(k("log.found",{n:h[1]}))+"</i></li>").join("")+"</ol>":"")+(a.length?"<h3>"+Et(k("log.gallery"))+'</h3><div class="dg">'+a.map((h,f)=>'<figure data-i="'+f+'"><img src="'+h.i+'" alt="'+Et(h.t)+'" loading="lazy"><figcaption>'+Et(h.t)+"</figcaption></figure>").join("")+"</div>":"")+(mn.on()?"<h3>"+Et(k("let.write"))+'</h3><form class="dl"><label>'+Et(k("let.world"))+'<select name="k">'+Object.values(n).filter(h=>!["eirahoutmoss","araf-cherqa"].includes(h.key)).sort((h,f)=>h.title.localeCompare(f.title,"tr")).map(h=>'<option value="'+Et(h.key)+'">'+Et(h.title)+"</option>").join("")+"</select></label><label>"+Et(k("let.text"))+'<textarea name="m" maxlength="900" minlength="20" required></textarea></label><p class="dn">'+Et(k("let.note"))+'</p><button type="submit">'+Et(k("let.send"))+'</button><span class="ds2" role="status"></span></form>':"")+"</div>",document.body.appendChild(l),l.querySelectorAll("figure").forEach(h=>h.onclick=()=>{let f=a[+h.dataset.i],g=document.createElement("div");g.className="dlb",g.innerHTML='<img src="'+f.i+'" alt=""><p>'+Et(f.t)+" \xB7 "+new Date(f.d).toLocaleDateString()+"</p>",g.onclick=()=>g.remove(),l.appendChild(g)}),requestAnimationFrame(()=>l.classList.add("on"));let c=()=>{l.classList.remove("on"),setTimeout(()=>l.remove(),500)};l.querySelector(".dx").onclick=c;let u=l.querySelector("form.dl");u&&(u.onsubmit=async h=>{h.preventDefault();let f=Sn.get(),g=u.querySelector(".ds2");g.textContent="\u2026";let v=await mn.sendLetter(u.k.value,u.m.value,f&&f.n||"").catch(()=>null);g.textContent=v&&v.tamam?k("let.ok"):k("let.err"),v&&v.tamam&&(u.m.value="")}),l.querySelector(".dk").onclick=()=>{c(),Sn.edit((window.QUL||{}).galaxies||[],()=>xu.open(n,e))};let d=l.querySelector(".dc");d&&(d.onclick=()=>Sn.card()),l.onclick=h=>{h.target===l&&c()},l.querySelectorAll("li").forEach(h=>h.onclick=()=>{c(),e(h.dataset.k)})}};var _u=[{k:"now",glow:n=>n.id==="home"?1.5:.45,label:n=>n.id==="home"?1:0},{k:"itf",glow:n=>n.id==="home"||n.id==="itf"?1.5:.45,label:n=>n.id==="home"||n.id==="itf"?1:0},{k:"conf",glow:()=>1,label:()=>1}],ep=2,tp={init(n){let e=document.createElement("div");e.id="zaman",e.setAttribute("role","radiogroup"),e.setAttribute("aria-label",k("era.label")),e.innerHTML="<small>"+k("era.label")+'</small><div class="zt">'+_u.map((i,s)=>'<button role="radio" data-i="'+s+'"><b>'+k("era."+i.k+".y")+"</b><span>"+k("era."+i.k+".n")+"</span></button>").join("")+"</div>",document.body.appendChild(e);let t=(i,s)=>{ep=i;let r=_u[i];ue.setEra(r.glow,r.label),e.querySelectorAll("button").forEach((o,a)=>{o.classList.toggle("on",a===i),o.setAttribute("aria-checked",a===i?"true":"false")}),document.body.dataset.era=r.k,!s&&n&&n(k("era."+r.k+".n"),k("era."+r.k+".d"))};e.querySelectorAll("button").forEach(i=>i.onclick=()=>t(+i.dataset.i)),t(2,!0)},era(){return _u[ep].k}};var np=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ml=n=>new Promise(e=>setTimeout(e,n)),ip={on:!1,start({planets:n,Interaction:e,Surface:t,UI:i,stopAll:s}){if(this.on)return;this.on=!0,document.body.classList.add("sergi");let r=location.origin+location.pathname.replace(/galaksi\/index\.html$/,"");try{top!==self&&top.location.origin===location.origin&&(r=top.location.origin+top.location.pathname)}catch{}r=r.replace(/index\.html$/,"");let o=rl(0,"M");o.addData(r),o.make();let a=document.createElement("div");a.id="sergi",a.innerHTML='<div class="sq">'+o.createSvgTag({cellSize:4,margin:2,scalable:!0})+"<span>"+np(k("sergi.scan"))+'</span></div><div class="sc"><small></small><h2></h2><p></p></div><button class="sr">'+np(k("sergi.resume"))+"</button>",document.body.appendChild(a);let l=(m,p,M)=>{let b=a.querySelector(".sc");b.classList.remove("on"),setTimeout(()=>{b.querySelector("small").textContent=m||"",b.querySelector("h2").textContent=p||"",b.querySelector("p").textContent=M||"",b.classList.add("on")},600)},c=n.filter(m=>!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(m.key)&&m.kind!=="esik"),u=!1,d=0,h=0,f=()=>{this.on&&(u=!0,a.classList.add("paused"),document.body.classList.add("sergip"),clearTimeout(d),d=setTimeout(g,9e4))},g=()=>{u=!1,a.classList.remove("paused"),document.body.classList.remove("sergip"),v(++h)};a.querySelector(".sr").onclick=m=>{m.stopPropagation(),g()},["pointerdown","keydown","wheel"].forEach(m=>addEventListener(m,p=>{if(!(p.target&&p.target.closest&&p.target.closest("#sergi .sr"))&&!u){f(),h++;try{t.close()}catch{}}},{capture:!0,passive:!0}));let v=async m=>{for(;this.on&&!u&&m===h;){let p=c[Math.floor(Math.random()*c.length)];if(s(),i.closePanel(),e.flyToPlanet(p.key),await ml(600),await e.whenIdle(),u||m!==h||(l(p.eyebrow,p.title,String(p.desc||"").split(/(?<=[.!?])\s/)[0]),await ml(7e3),u||m!==h)||(i.closePanel(),t.open(p),await ml(3e4),u||m!==h))return;t.close(),await ml(2200)}};setTimeout(()=>v(h),1500)}};var fs=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),sp=()=>{try{return JSON.parse(localStorage.getItem("qmeclis")||"{}")||{}}catch{return{}}},bu={has(){return(window.QUL_MECLIS||[]).length>0},async open(){let n=window.QUL_MECLIS||[];if(!n.length)return;let e=0,t=mn.on()?await mn.results():{},i=document.createElement("div");i.id="meclis",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("on"));let s=()=>{i.classList.remove("on"),setTimeout(()=>i.remove(),400)},r=()=>{let o=n[e],a=sp()[o.id],l=t[o.id]||[],c=l.reduce((h,f)=>h+f,0);i.innerHTML='<div class="mb"><button class="mx" aria-label="'+fs(k("id.close"))+'">\u2715</button><small>'+fs(k("mec.eyebrow"))+" \xB7 "+(e+1)+"/"+n.length+"</small><h2>"+fs(o.baslik)+'</h2><p class="mg">'+fs(o.baglam)+'</p><p class="mq">'+fs(o.soru)+'</p><div class="mo">'+o.secenekler.map((h,f)=>'<button data-j="'+f+'" class="'+(a===f?"on":"")+'"'+(a!=null?" disabled":"")+"><span>"+fs(h)+"</span>"+(a!=null&&c?'<i style="width:'+Math.round(100*(l[f]||0)/c)+'%"></i><b>%'+Math.round(100*(l[f]||0)/c)+"</b>":"")+"</button>").join("")+'</div><p class="mn">'+fs(a!=null?c?k("mec.total",{n:c}):k("mec.thanks"):k("mec.anon"))+'</p><div class="mr">'+(e>0?'<button class="mp">\u2039</button>':"")+(e<n.length-1?'<button class="mnx">'+fs(k("mec.next"))+" \u203A</button>":"")+"</div></div>",i.querySelector(".mx").onclick=s;let u=i.querySelector(".mp"),d=i.querySelector(".mnx");u&&(u.onclick=()=>{e--,r()}),d&&(d.onclick=()=>{e++,r()}),i.querySelectorAll(".mo button").forEach(h=>h.onclick=async()=>{let f=+h.dataset.j,g=sp();g[o.id]=f;try{localStorage.setItem("qmeclis",JSON.stringify(g))}catch{}if(mn.on()){let v=await mn.vote(o.id,f).catch(()=>null);v&&v.sonuc&&(t[o.id]=v.sonuc)}r()})};i.addEventListener("keydown",o=>{o.key==="Escape"&&s()}),r()}};var rp={1:[1,.62,.3],2:[.45,.65,1],3:[.4,1,.55]},ap={init(n,e){let t={},i={1:0,2:0,3:0},s={1:0,2:0,3:0};n.planets.forEach(l=>{let c=((l.card||{}).aksiyom||"").match(/Aksiyom (\d)/);if(!c)return;let u=+c[1];(t[l.gal]=t[l.gal]||{1:0,2:0,3:0})[u]++,i[u]++,(l.card||{}).tahmini&&s[u]++});let r=l=>{let c=t[l];return c?[1,2,3].sort((u,d)=>c[d]-c[u])[0]:0},o=!1,a=document.createElement("div");a.id="akl",a.setAttribute("aria-live","polite"),a.innerHTML="<small>"+k("aks.title")+"</small>"+[1,2,3].map(l=>'<div><i style="background:rgb('+rp[l].map(c=>Math.round(c*255)).join(",")+')"></i><b>'+k("aks."+l)+"</b><span>"+k("aks.count",{n:i[l],e:s[l]})+"</span></div>").join("")+"<p>"+k("aks.note")+"</p>",document.body.appendChild(a),e.textContent=k("aks.btn"),e.onclick=()=>{o=!o,a.classList.toggle("on",o),e.classList.toggle("on",o),ue.setTint(o?l=>{let c=r(l.id);return c?rp[c]:l.bg?null:[.3,.3,.35]}:null)}}};var op=document.documentElement.style,m_=n=>new Promise(e=>setTimeout(e,n)),za=0,Oa=[];function gl(){Oa.forEach(n=>ue.removeObj(n)),Oa=[],ue.setFov(50),op.setProperty("--bar","0vh")}var Mu={stop(){za&&(za++,gl())},async start(){let n=++za,e=()=>n===za;if(mt(),gl(),Le.flyToPlanet("dunya"),await Le.whenIdle(),!e()||(mt(),xt(k("pair.1h"),k("pair.1s")),await m_(9e3),!e()))return;let t=ue.planetWorld("dunya"),i=ue.planetWorld("eirahoutmoss"),s=t.clone().add(i).multiplyScalar(.5),r=t.distanceTo(i),o=ue.getCamera(),a=new U(0,1,0),l=b=>{let I=[];for(let B=0;B<=80;B++){let S=B/80,_=Math.sin(Math.PI*S)*r*.22*b;I.push(new U().lerpVectors(t,i,S).add(new U(0,_,0)))}return I},c=[l(1),l(-1)],u=c.map(b=>{let I=new Cs(new Ut().setFromPoints(b),new zi({color:12099839,transparent:!0,opacity:0,blending:kt,depthWrite:!1}));return ue.addObj(I),Oa.push(I),I}),d=[t,i].map(b=>{let I=ue.makeLight();return I.position.copy(b),I.scale.set(r*.09,r*.09,1),Oa.push(I),I}),h=[];[0,1].forEach(b=>[0,.5].forEach(I=>[0,1].forEach(B=>{let S=ue.makeLight();S.scale.set(r*.035,r*.035,1),S.material.color.set(B?12099839:8376831),Oa.push(S),h.push({s:S,ci:b,o:I,dir:B})})));let f=o.position.clone(),g=Le.target().clone(),v=s.clone().add(new U(0,r*.3,r*.95)),m=0,p=0,M=0;op.setProperty("--bar","7vh"),Le.drive(b=>{M+=b,m=Math.min(1,m+b/16);let I=vi(m);o.position.lerpVectors(f,v,I),Le.target().lerpVectors(g,s,I),ue.setFov(50+6*Math.sin(Math.PI*I));let B=Math.min(1,m*2.2);if(u.forEach(S=>S.material.opacity=.55*B),d.forEach((S,_)=>S.material.opacity=.9*B),h.forEach(S=>{let _=(M*.06+S.o)%1,L=c[S.ci],y=(S.dir?1-_:_)*80,x=Math.min(79,Math.floor(y));S.s.position.lerpVectors(L[x],L[x+1],y-x),S.s.material.opacity=B*Math.sin(Math.PI*_)}),p<1&&m>.35&&(p=1,xt(k("pair.2h"),k("pair.2s"))),m>=1&&((!p||p<2)&&(p=2),M>27))return!1},async()=>{if(!e()){gl();return}za=0,gl(),Le.flyToPlanet("eirahoutmoss"),await Le.whenIdle(),xt(k("pair.3h"),k("pair.3s"))})}};var lp=[["Ate\u015F Denizi",9,15],["Co\u015Fkun Deniz",17,35],["Yealem Krall\u0131\u011F\u0131",34,49.5],["Kisura",34.5,62],["Nehi \xC7\xF6lleri",26,71],["Ebed Denizi",60,43],["G\xFCm\xFC\u015F Deniz",89,37],["Ann Da\u011F\u0131 / Pla Tepesi",61,65],["Malu \xC7\xF6lleri",49,68],["Hpohri",55,73.5],["Sessizlik Orman\u0131",64,78],["Luya Kay\u0131p \u015Eehir",54,87]],Bt=null,ri=1,ps=0,ms=0;function vl(){let n=Bt.querySelector(".mw");n.style.transform=`translate(${ps}px,${ms}px) scale(${ri})`,n.style.setProperty("--z",ri)}function g_(){Bt=document.createElement("div"),Bt.id="emap",Bt.innerHTML='<div class="mw"><img src="img/eirahoutmoss.jpg" alt="" draggable="false">'+lp.map((t,i)=>`<i class="hs" data-i="${i}" style="left:${t[1]}%;top:${t[2]}%"></i>`).join("")+'</div><div class="mi"><b></b><span></span><button></button></div><div class="mh"></div><button class="mx"></button>',document.body.appendChild(Bt),Bt.querySelector(".mx").onclick=cp,Bt.querySelector(".mh").textContent=k("map.hint"),Bt.querySelector(".mx").textContent=k("map.close");let n=null,e=0;Bt.addEventListener("pointerdown",t=>{n=[t.clientX,t.clientY,ps,ms],e=0}),addEventListener("pointermove",t=>{!n||!Bt.classList.contains("on")||(e=Math.hypot(t.clientX-n[0],t.clientY-n[1]),ps=n[2]+t.clientX-n[0],ms=n[3]+t.clientY-n[1],vl())}),addEventListener("pointerup",()=>{n=null}),Bt.addEventListener("wheel",t=>{t.preventDefault();let i=t.deltaY<0?1.18:1/1.18,s=Math.min(8,Math.max(1,ri*i)),r=Bt.getBoundingClientRect(),o=t.clientX-r.width/2,a=t.clientY-r.height/2;ps=o-(o-ps)*s/ri,ms=a-(a-ms)*s/ri,ri=s,ri===1&&(ps=0,ms=0),vl()},{passive:!1}),Bt.querySelectorAll(".hs").forEach(t=>t.addEventListener("click",i=>{e>5||(i.stopPropagation(),v_(+t.dataset.i))}))}function v_(n){let e=lp[n],t=Bt.querySelector(".mi"),i=Bt.getBoundingClientRect(),s=Bt.querySelector(".mw"),r=s.offsetWidth,o=s.offsetHeight;ri=2.6,ps=-((e[1]/100-.5)*r)*ri,ms=-((e[2]/100-.5)*o)*ri,vl(),t.querySelector("b").textContent=e[0];let a=t.querySelector("span"),l=t.querySelector("button");e[0]==="Kisura"?(a.textContent=k("map.kis"),l.style.display="inline-block",l.textContent=k("map.enter"),l.onclick=()=>{cp(),yi.kisura()}):(a.textContent=k("map.unwritten"),l.style.display="none"),t.classList.add("on")}function cp(){Bt&&(Bt.classList.remove("on"),Bt.querySelector(".mi").classList.remove("on"))}var up={open(){Bt||g_(),ri=1,ps=0,ms=0,vl(),Bt.classList.add("on")}};var dp=document.documentElement.style,Fa=0;function hp(){ue.setGray(0),ue.setTimeK(1),ue.setWarp(0),ue.setFov(50),dp.setProperty("--bar","0vh")}var Su={stop(){Fa&&(Fa++,hp())},start(){let n=++Fa;mt();let e=ue.getCamera(),t=ue.galaxy("esik").outer.position.clone(),i=ue.galaxy("eira").outer.position.clone(),s=i.clone().sub(t).normalize(),r=e.position.clone(),o=t.clone().add(new U(0,40,0)),a=i.clone().addScaledVector(s,-ue.galaxy("eira").g.R*2.4).add(new U(0,300,0)),l=0,c=0,u=!1,d=!1;dp.setProperty("--bar","7vh"),Le.drive(h=>{l=Math.min(1,l+h/46);let f=vi(l),g=1-f;e.position.set(g*g*r.x+2*g*f*o.x+f*f*a.x,g*g*r.y+2*g*f*o.y+f*f*a.y,g*g*r.z+2*g*f*o.z+f*f*a.z),Le.target().lerpVectors(t,i,ma.smoothstep(f,.45,.9));let v=e.position.distanceTo(t),m=1-ma.smoothstep(v,900,2600);if(v<300&&(u=!0),ue.setGray(m),ue.setTimeK(Math.max(0,1-m*1.05)),ue.setWarp(.1*(1-m)),c<1&&m>.3&&(c=1,xt(k("th.1h"),k("th.1s"))),c<2&&v<420&&(c=2,xt(k("th.2h"),k("th.2s"))),u&&!d&&m<.45){d=!0;let p=document.getElementById("flash");p.classList.remove("on"),p.offsetWidth,p.classList.add("on")}if(u&&c<3&&m<.25&&(c=3,xt(k("th.3h"),k("th.3s"))),l>=1)return!1},()=>{hp(),n===Fa&&(Fa=0,Le.focusGalaxy("eira"))})}};var fp=document.documentElement.style,y_=n=>new Promise(e=>setTimeout(e,n)),Ba=0;function wu(){ue.setWarp(0),ue.setFov(50),fp.setProperty("--bar","0vh")}var yl={stop(){Ba&&(Ba++,yi.close(),wu())},async start(){let n=++Ba,e=()=>n===Ba;if(mt(),Le.focusGalaxy("eira"),await Le.whenIdle(),!e()||(Le.flyToPlanet("eirahoutmoss"),await Le.whenIdle(),!e())||(await y_(1200),!e())||(await yi.kisura({auto:!0}),!e()))return;let t=ue.getCamera(),i=ue.planetWorld("eirahoutmoss"),s=t.position.clone().sub(i),r=s.length(),o=24e3,a=s.clone().normalize(),l=new U(2600,0,0),c=i.clone(),u=new U(0,1,0),d=0,h=1;mt(),fp.setProperty("--bar","7vh"),ue.setWarp(.16),xt(k("scale.2h"),k("scale.2s")),Le.drive(f=>{d=Math.min(1,d+f/50);let g=vi(d),v=r*Math.pow(o/r,g),m=a.clone().applyAxisAngle(u,g*.9);if(t.position.copy(i).addScaledVector(m,v),Le.target().lerpVectors(c,l,Math.pow(g,2.2)),ue.setFov(50+8*Math.sin(Math.PI*g)),h<2&&v>1200&&(h=2,xt(k("scale.3h"),k("scale.3s"))),h<3&&v>6e3&&(h=3,xt(k("scale.4h"),k("scale.4s"))),h<4&&v>16e3&&(h=4,xt(k("scale.5h"),k("scale.5s"))),d>=1)return!1},()=>{if(!e()){wu();return}wu(),Ba=0,Le.reset()})}};var mp=document.documentElement.style;function pp(){ue.setFall(0),ue.setSpin(1),ue.setFov(50),mp.setProperty("--bar","0vh")}function gp(n){let e=ue.galaxy(n);if(!e||!e.bh)return;let t=e.outer.position.clone(),i=e.bh.rh,s=ue.getCamera(),r=s.position.clone().sub(t),o=Math.max(r.length(),i*15),a=Math.atan2(r.z,r.x),l=0,c=!1,u=0;mt(),xt(k("fall.1h"),k("fall.1s")),Le.drive(d=>{l=Math.min(1,l+d/34);let h=Math.pow(l,1.5),f=i*(1.22+(o/i-1.22)*Math.pow(1-h,2.3)),g=a+h*11;if(s.position.set(t.x+Math.cos(g)*f,t.y+f*.2*(1-h)+i*.04,t.z+Math.sin(g)*f),Le.target().copy(t),ue.setFall(Math.pow(Math.max(0,(l-.4)/.6),1.3)),ue.setSpin(1+60*h*h*h),ue.setFov(50+26*h),mp.setProperty("--bar",(7*Math.min(1,l*8)).toFixed(2)+"vh"),u<1&&l>.26&&(u=1,xt(k("fall.2h"),k("fall.2s"))),u<2&&l>.52&&(u=2,xt(k("fall.3h"),k("fall.3s"))),u<3&&l>.8&&(u=3,xt(k("fall.4h"),k("fall.4s"))),l>=1)return c=!0,!1},()=>{if(!c){pp();return}ue.setFall(1),setTimeout(()=>xt(k("fall.5h"),k("fall.5s")),1500),setTimeout(()=>{let d=1,h=setInterval(()=>{d-=.02,ue.setFall(Math.max(0,d)),d<=0&&(clearInterval(h),pp(),Le.focusBH(n))},40)},12e3)})}function vp(n){let e=ue.galaxy(n),t=ue.galaxy("home");if(!e||!t)return;let i=e.outer.position.clone(),s=t.outer.position.clone(),r=s.clone().sub(i).normalize(),o=i.distanceTo(s)*232.6,a=ue.makeLight();a.scale.set(220,220,1);let l=0,c=new U,u=ue.getCamera();mt(),xt(e.g.name,k("light.start",{y:_a(o)}));let d=!0;Le.drive(h=>{if(l=Math.min(1,l+h/18),c.lerpVectors(i,s,vi(l)),a.position.copy(c),u.position.copy(c).addScaledVector(r,-520).add(new U(0,150,0)),Le.target().copy(c).addScaledVector(r,400),d&&(d=!1,document.documentElement.style.setProperty("--bar","7vh"),ue.setFov(58)),l>=1)return Dr(null),ue.removeObj(a),xt(k("light.endH"),k("light.endS")),!1},()=>{Dr(null),ue.removeObj(a)})}function Gt(){il.stop(),yl.stop(),Su.stop(),Mu.stop()}var wn=window.QUL,tt=n=>document.getElementById(n);rf(wn);var x_=n=>{let e=wn.galaxies.find(i=>i.id==="home").pos,t=Math.hypot(n.pos[0]-e[0],n.pos[1]-e[1],n.pos[2]-e[2])*232.6;return t>=1e6?(t/1e6).toFixed(1).replace(".",",")+" "+k("dist.million"):_a(t)},Vi={};wn.planets.forEach(n=>Vi[n.key]=n);var __=n=>{let e=wn.bh[n];return{key:"bh-"+n,gal:n,bh:!0,title:e.title,eyebrow:e.eyebrow,desc:e.desc,card:{rows:e.rows.concat([["Galaksi",wn.galaxies.find(t=>t.id===n).name]])}}},Vs=n=>{try{window.__crumb&&window.__crumb(n)}catch{}};Vs("veri haz\u0131r");eu(wn);Vs("aray\xFCz haz\u0131r");ue.init(tt("gl"),wn);Vs("Render.init bitti");Le.init(ue.getRenderer(),ue.getCamera(),{titleOf:n=>Vi[n].title,bhTitle:n=>wn.bh[n].title,onUser:()=>Gt(),onFlight:Dr,tip:tu,onPlanet:n=>nl(Vi[n]),onBH:n=>nl(__(n)),onGalaxy:n=>xt(n.name,n.id==="eira"?k("gal.eira"):n.id==="esik"?k("gal.esik"):n.bg?k("gal.unreg"):k("gal.count",{n:ue.planetsOf(n.id).length})+(n.id==="home"?"":" \xB7 "+k("gal.light",{y:x_(n)}))),onFocus:(n,e)=>{try{mn.where(n&&(n.id||n.key||n.name))}catch{}mt(),nu(n,e,{planet:t=>Le.flyToPlanet(t),bh:t=>Le.focusBH(t),light:t=>{Gt(),vp(t)}},Vi,wn.bh)}});tt("pc").onclick=mt;tt("back").onclick=()=>{Gt(),mt(),Le.reset()};document.addEventListener("pointerdown",n=>{n.target.id!=="tour"&&il.stop(),n.target.id!=="drift"&&su.stop(),n.target.closest("#kis,#scl")||yl.stop()});il.init(tt("tour"),wn);{let n=document.createElement("button");n.id="drift",document.body.appendChild(n),su.init(n,wn),vf(n)}try{Tf(wn,Le)}catch{}tt("tour").textContent=k("ui.tour");tt("hush").textContent=k("ui.hush");tt("lang").title=k("ui.lang");var b_=fu.ids.filter(n=>n.id!=="earth").map(n=>({t:"sol",id:n.id,label:pn==="en"?n.en:n.tr,sub:"G\xFCne\u015F Sistemi",alias:n.tr+" "+n.en+(n.id==="sun"?" solar system gunes sistemi":"")}));async function _p(n){Gt(),mt();try{Le.focusGalaxy("home"),await Le.whenIdle()}catch{}fu.open({focus:n})||Ir&&Ir(k("solar.fail"))}iu(wn,n=>{if(n.t==="sol"){_p(n.id);return}Gt(),n.t==="planet"?Le.flyToPlanet(n.key):n.t==="bh"?Le.focusBH(n.id):Le.focusGalaxy(n.id)},b_);{let n=document.getElementById("sol0");n&&(n.textContent=k("solar.btn"),n.onclick=()=>_p("earth"))}var Eu=performance.now(),Tu=0;(function n(e){let t=Math.min(.1,(e-Eu)/1e3);Eu=e;let i=performance.now();if(Le.update(t),ue.frame(e,t),Tu<6){Tu++;try{ue.getRenderer().getContext().finish()}catch{}Vs("kare "+Tu+": "+Math.round(performance.now()-i)+" ms")}{let s=ue.fx();pu.update(s.lens,s.warp,s.fall)}requestAnimationFrame(n)})(Eu);tt("load").classList.add("hide");var yp=0;[1,2,3].forEach(n=>{let e=k("intro."+n+".h"),t=k("intro."+n+".s");setTimeout(()=>xt(e,t),yp),yp+=Sa(e,t)*1e3*.97});Vs("ses ba\u015Fl\u0131yor");pu.init();Vs("ses haz\u0131r");Le.intro();Vs("a\xE7\u0131l\u0131\u015F ba\u015Flad\u0131");try{tp.init((n,e)=>xt(n,e)),Sn.apply()}catch{}/[?&]sergi=1/.test(location.search)&&Le.whenIdle().then(()=>ip.start({planets:wn.planets,Interaction:Le,Surface:Pn,UI:_i,stopAll:Gt}));{let n=new URLSearchParams(location.search),e=n.get("planet");e&&Vi[e]&&Le.whenIdle().then(()=>{Le.flyToPlanet(e),n.get("yuzey")==="1"&&!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(e)&&setTimeout(()=>Le.whenIdle().then(()=>{Gt(),mt(),Pn.open(Vi[e])}),300)})}window.addEventListener("fall",n=>{Gt(),mt(),gp(n.detail)});window.addEventListener("land",n=>{Gt(),mt(),yi.land(n.detail)});window.addEventListener("kisura",()=>{Gt(),mt(),yi.kisura()});var xp,bp=()=>{document.body.classList.remove("idle"),clearTimeout(xp),xp=setTimeout(()=>document.body.classList.add("idle"),7e3)};["pointermove","pointerdown","keydown","wheel"].forEach(n=>addEventListener(n,bp));bp();var M_=ue.getCamera(),S_=n=>n>=1e6?(n/1e6).toFixed(1).replace(".",",")+" "+k("dist.million"):_a(n);setInterval(()=>{Hi&&(tt("carec").innerHTML=k("care.count",{n:ue.careCount()})+"<small>"+k("care.note")+"</small>");let n=M_.position.distanceTo(ue.bhWorld("home"))*232.6;tt("dist").innerHTML=k("dist.label")+"<b>"+S_(n)+" "+k("dist.unit")+"</b><i>2,7 K</i>"},250);var Hi=!1;tt("care").textContent=k("care.btn");tt("care").onclick=()=>{Hi=!Hi,tt("care").textContent=k(Hi?"care.btnOn":"care.btn"),tt("carec").classList.toggle("on",Hi),ue.setCare(Hi),Hi&&(Gt(),mt(),Le.reset(),xt(k("care.1h"),k("care.1s")))};tt("pair").textContent=k("pair.btn");tt("pair").onclick=()=>{Gt(),Mu.start()};window.__Surface=Pn;window.__qul={Interaction:Le,Render:ue};window.addEventListener("esik",()=>{Gt(),mt(),pl.open()});var Mp=()=>{let n=document.getElementById("tani");if(n){n.remove();return}n=document.createElement("pre"),n.id="tani",n.style.cssText="position:fixed;left:8px;top:8px;z-index:99;max-width:92vw;max-height:80vh;overflow:auto;margin:0;padding:10px 12px;background:#000d;color:#9fe;font:11px/1.45 monospace;border:1px solid #365;white-space:pre-wrap;user-select:all",n.textContent=`QUL TANI
`+JSON.stringify(window.__qulGpu||{},null,1)+`
hata: `+JSON.stringify(window.__qulErr||[])+`
y\xFCzey: `+(window.__qulSurfFail||"-")+`
(kapatmak i\xE7in F9; bu metni bana g\xF6nder)`,document.body.appendChild(n)};addEventListener("keydown",n=>{n.key==="F9"&&(n.preventDefault(),Mp())});/[?&]tani=1/.test(location.search)&&setTimeout(Mp,2500);window.addEventListener("qulSurfaceFail",()=>{let n=document.getElementById("warp");n&&n.remove();try{ue.pause(!1)}catch{}Ir(k("surf.fail"))});window.addEventListener("qulGo",n=>{let e=n.detail||{};if(e.warp){let t=document.createElement("div");t.id="warp",document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("on")),setTimeout(()=>t.classList.remove("on"),4200),setTimeout(()=>t.remove(),5200)}Pn.close(),e.planet&&Vi[e.planet]?setTimeout(()=>Pn.open(Vi[e.planet]),1900):e.gal&&setTimeout(()=>{try{Le.focusGalaxy(e.gal)}catch{}},400)});window.addEventListener("surface",n=>{Gt(),mt(),Pn.open(n.detail)});window.addEventListener("emap",()=>{Gt(),mt(),up.open()});tt("tt").textContent=k("tools.btn");tt("tt").onclick=()=>tt("tools").classList.toggle("open");tt("tools").addEventListener("click",n=>{let e=n.target.closest("button");e&&e.id!=="tt"&&setTimeout(()=>tt("tools").classList.remove("open"),120)});document.addEventListener("pointerdown",n=>{n.target.closest("#tools")||tt("tools").classList.remove("open")});tt("thr").textContent=k("th.btn");tt("thr").onclick=()=>{Gt(),Su.start()};var Ha=!1,Au=!1;tt("cmd").textContent=k("cmd.btn");tt("cmd").onclick=()=>{Ha=!Ha,Gt(),mt(),ue.setHolo(Ha?1:0),tt("cmd").textContent=k(Ha?"cmd.on":"cmd.btn"),Ha?(Le.view([2600,16500,1100],[2600,0,0]),xt(k("cmd.1h"),k("cmd.1s")),Hi||(Au=!0,tt("care").click())):(Le.reset(),Au&&Hi&&tt("care").click(),Au=!1)};tt("snap").textContent=k("snap.btn");{let n=tt("mec");n&&(bu.has()?(n.textContent=k("mec.btn"),n.onclick=()=>{Gt(),bu.open()}):n.remove())}{let n=tt("aks");if(n)try{ap.init(wn,n)}catch{}}tt("log").textContent=k("log.btn");tt("log").onclick=()=>{Gt(),xu.open(Vi,n=>Le.flyToPlanet(n))};try{mn.start()}catch{}tt("snap").onclick=()=>{let n=new Image;n.onload=()=>{let e=n.width,t=n.height,i=Math.round(e/2.39),s=Math.round((t-i)/2),r=document.createElement("canvas");r.width=e,r.height=i;let o=r.getContext("2d");o.drawImage(n,0,s,e,i,0,0,e,i);let a=e/1600;o.fillStyle="rgba(0,0,0,.4)",o.fillRect(0,i-92*a,e,92*a),o.fillStyle="#e8b84b",o.font=26*a+"px Georgia, serif",o.fillText(k("snap.mark").toUpperCase().split("").join(" "),40*a,i-50*a),o.fillStyle="#d3c7a8",o.font=18*a+"px Georgia, serif",o.fillText((tt("where").textContent||k("ui.title"))+" \xB7 "+tt("dist").innerText.replace(/\n+/g," \xB7 "),40*a,i-18*a);let l=document.createElement("a");l.href=r.toDataURL("image/png"),l.download="qul-efsaneleri.png",l.click(),Ir(k("snap.done"))},n.src=ue.snapshot()};tt("nar").textContent=k("nar.btn");Ma.ok||(tt("nar").style.display="none");tt("nar").onclick=()=>{tt("nar").textContent=k(Ma.toggle()?"nar.on":"nar.btn")};tt("scl").textContent=k("scale.btn");tt("scl").onclick=()=>{Gt(),yl.start()};tt("hush").onclick=()=>{window.__hush=!window.__hush,tt("hush").textContent=k(window.__hush?"ui.hushOn":"ui.hush");try{parent.postMessage({qulDuck:!!window.__hush},"*")}catch{}};var Va=tt("lang");(window.QUL_LANGS||[{c:"tr",n:"T\xFCrk\xE7e"}]).forEach(n=>{let e=document.createElement("option");e.value=n.c,e.textContent=n.n,Va.appendChild(e)});Va.value=window.QUL_CODE||"tr";Va.onchange=()=>{try{localStorage.setItem("qlang",Va.value)}catch{}let n=new URL(location.href);n.searchParams.set("lang",Va.value),location.href=n.toString()};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
