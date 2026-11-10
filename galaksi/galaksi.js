(()=>{var Um=Object.defineProperty;var Nm=(n,e)=>{for(var t in e)Um(n,t,{get:e[t],enumerable:!0})};var or={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Om=0,Th=1,Fm=2;var rf=1,Bm=2,es=3,Es=0,nn=1,wn=2;var Di=0,Xr=1,Ft=2,Ah=3,Rh=4,Hm=5,Js=100,Vm=101,Gm=102,Ch=103,Ph=104,Wm=200,qm=201,Xm=202,Ym=203,Ic=204,Dc=205,Km=206,Zm=207,jm=208,Jm=209,$m=210,Qm=211,e0=212,t0=213,n0=214,i0=0,s0=1,r0=2,Qo=3,a0=4,o0=5,l0=6,c0=7,af=0,u0=1,h0=2,ws=0,d0=1,f0=2,p0=3,m0=4,g0=5,v0=6;var of=300,Zr=301,jr=302,zc=303,Uc=304,_l=306,is=1e3,bi=1001,Nc=1002,fn=1003,kh=1004;var nc=1005;var un=1006,y0=1007;var La=1008;var zi=1009,x0=1010,_0=1011,mu=1012,lf=1013,Ms=1014,Ss=1015,Qn=1016,cf=1017,uf=1018,er=1020,b0=1021,Mi=1023,M0=1024,S0=1025,tr=1026,Jr=1027,w0=1028,hf=1029,E0=1030,df=1031,ff=1033,ic=33776,sc=33777,rc=33778,ac=33779,Lh=35840,Ih=35841,Dh=35842,zh=35843,pf=36196,Uh=37492,Nh=37496,Oh=37808,Fh=37809,Bh=37810,Hh=37811,Vh=37812,Gh=37813,Wh=37814,qh=37815,Xh=37816,Yh=37817,Kh=37818,Zh=37819,jh=37820,Jh=37821,oc=36492,$h=36494,Qh=36495,T0=36283,ed=36284,td=36285,nd=36286;var el=2300,tl=2301,lc=2302,id=2400,sd=2401,rd=2402;var mf=3e3,nr=3001,A0=3200,R0=3201,gf=0,C0=1,hn="",pn="srgb",ss="srgb-linear",gu="display-p3",bl="display-p3-linear",nl="linear",Ht="srgb",il="rec709",sl="p3";var wr=7680;var ad=519,P0=512,k0=513,L0=514,vf=515,I0=516,D0=517,z0=518,U0=519,Oc=35044;var od="300 es",Fc=1035,ts=2e3,rl=2001,Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=1234567,Ra=Math.PI/180,Ia=180/Math.PI;function ns(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Sn(n,e,t){return Math.max(e,Math.min(t,n))}function vu(n,e){return(n%e+e)%e}function N0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function O0(n,e,t){return n!==e?(t-n)/(e-n):0}function Ca(n,e,t){return(1-t)*n+t*e}function F0(n,e,t,i){return Ca(n,e,1-Math.exp(-t*i))}function B0(n,e=1){return e-Math.abs(vu(n,e*2)-e)}function H0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function V0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function G0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function W0(n,e){return n+Math.random()*(e-n)}function q0(n){return n*(.5-Math.random())}function X0(n){n!==void 0&&(ld=n);let e=ld+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y0(n){return n*Ra}function K0(n){return n*Ia}function Bc(n){return(n&n-1)===0&&n!==0}function Z0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function al(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function j0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+i)/2),c=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*c,l*d,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*d,a*u);break;case"ZXZ":n.set(l*d,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*f,a*u);break;case"YXY":n.set(l*f,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*f,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ba={DEG2RAD:Ra,RAD2DEG:Ia,generateUUID:ns,clamp:Sn,euclideanModulo:vu,mapLinear:N0,inverseLerp:O0,lerp:Ca,damp:F0,pingpong:B0,smoothstep:H0,smootherstep:V0,randInt:G0,randFloat:W0,randFloatSpread:q0,seededRandom:X0,degToRad:Y0,radToDeg:K0,isPowerOfTwo:Bc,ceilPowerOfTwo:Z0,floorPowerOfTwo:al,setQuaternionFromProperEuler:j0,normalize:Dt,denormalize:Ii},Oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yt=class n{constructor(e,t,i,s,r,o,a,l,u){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u)}set(e,t,i,s,r,o,a,l,u){let c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],w=s[1],M=s[4],k=s[7],I=s[2],S=s[5],_=s[8];return r[0]=o*v+a*w+l*I,r[3]=o*m+a*M+l*S,r[6]=o*p+a*k+l*_,r[1]=u*v+c*w+d*I,r[4]=u*m+c*M+d*S,r[7]=u*p+c*k+d*_,r[2]=h*v+f*w+g*I,r[5]=h*m+f*M+g*S,r[8]=h*p+f*k+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*r,f=u*r-o*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*u-c*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(c*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cc.makeScale(e,t)),this}rotate(e){return this.premultiply(cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cc=new yt;function yf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function J0(){let n=Da("canvas");return n.style.display="block",n}var cd={};function Pa(n){n in cd||(cd[n]=!0,console.warn(n))}var ud=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hd=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[ss]:{transfer:nl,primaries:il,toReference:n=>n,fromReference:n=>n},[pn]:{transfer:Ht,primaries:il,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bl]:{transfer:nl,primaries:sl,toReference:n=>n.applyMatrix3(hd),fromReference:n=>n.applyMatrix3(ud)},[gu]:{transfer:Ht,primaries:sl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(hd),fromReference:n=>n.applyMatrix3(ud).convertLinearToSRGB()}},$0=new Set([ss,bl]),zt={enabled:!0,_workingColorSpace:ss,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=wo[e].toReference,s=wo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return wo[n].primaries},getTransfer:function(n){return n===hn?nl:wo[n].transfer}};function Yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function uc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Er,ol=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=Da("canvas")),Er.width=e.width,Er.height=e.height;let i=Er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Da("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yr(t[i]/255)*255):t[i]=Yr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Q0=0,ll=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=ns(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hc(s[o].image)):r.push(hc(s[o]))}else r=hc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function hc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ol.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eg=0,Bn=class n extends Ui{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=bi,s=bi,r=un,o=La,a=Mi,l=zi,u=n.DEFAULT_ANISOTROPY,c=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=ns(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===nr?pn:hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pn?nr:mf}set encoding(e){Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===nr?pn:hn}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=of;Bn.DEFAULT_ANISOTROPY=1;var Ct=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(u+1)/2,k=(f+1)/2,I=(p+1)/2,S=(c+h)/4,_=(d+v)/4,R=(g+m)/4;return M>k&&M>I?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=S/i,r=_/i):k>I?k<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(k),i=S/s,r=R/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=_/r,s=R/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-c)*(h-c));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(h-c)/w,this.w=Math.acos((u+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hc=class extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Pa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===nr?pn:hn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Bn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ll(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Hc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},cl=class extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vc=class extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||u!==f||c!==g){let m=1-a,p=l*h+u*f+c*g+d*v,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let I=Math.sqrt(M),S=Math.atan2(I,p*w);m=Math.sin(m*S)/I,a=Math.sin(a*S)/I}let k=a*w;if(l=l*m+h*k,u=u*m+f*k,c=c*m+g*k,d=d*m+v*k,m===1-a){let I=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=I,u*=I,c*=I,d*=I}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+c*d+l*f-u*h,e[t+1]=l*g+c*h+u*d-a*f,e[t+2]=u*g+c*f+a*h-l*d,e[t+3]=c*g-a*d-l*h-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*c*d+u*f*g,this._y=u*f*d-h*c*g,this._z=u*c*g+h*f*d,this._w=u*c*d-h*f*g;break;case"YXZ":this._x=h*c*d+u*f*g,this._y=u*f*d-h*c*g,this._z=u*c*g-h*f*d,this._w=u*c*d+h*f*g;break;case"ZXY":this._x=h*c*d-u*f*g,this._y=u*f*d+h*c*g,this._z=u*c*g+h*f*d,this._w=u*c*d-h*f*g;break;case"ZYX":this._x=h*c*d-u*f*g,this._y=u*f*d+h*c*g,this._z=u*c*g-h*f*d,this._w=u*c*d+h*f*g;break;case"YZX":this._x=h*c*d+u*f*g,this._y=u*f*d+h*c*g,this._z=u*c*g-h*f*d,this._w=u*c*d-h*f*g;break;case"XZY":this._x=h*c*d-u*f*g,this._y=u*f*d-h*c*g,this._z=u*c*g+h*f*d,this._w=u*c*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-u)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+u)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-u)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*i),c=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-r*d,this.z=s+l*d+r*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dc=new B,dd=new rn,ir=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),To.subVectors(this.max,ba),Tr.subVectors(e.a,ba),Ar.subVectors(e.b,ba),Rr.subVectors(e.c,ba),vs.subVectors(Ar,Tr),ys.subVectors(Rr,Ar),Xs.subVectors(Tr,Rr);let t=[0,-vs.z,vs.y,0,-ys.z,ys.y,0,-Xs.z,Xs.y,vs.z,0,-vs.x,ys.z,0,-ys.x,Xs.z,0,-Xs.x,-vs.y,vs.x,0,-ys.y,ys.x,0,-Xs.y,Xs.x,0];return!fc(t,Tr,Ar,Rr,To)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,Tr,Ar,Rr,To))?!1:(Ao.crossVectors(vs,ys),t=[Ao.x,Ao.y,Ao.z],fc(t,Tr,Ar,Rr,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zi=[new B,new B,new B,new B,new B,new B,new B,new B],vi=new B,Eo=new ir,Tr=new B,Ar=new B,Rr=new B,vs=new B,ys=new B,Xs=new B,ba=new B,To=new B,Ao=new B,Ys=new B;function fc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ys.fromArray(n,r);let a=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=e.dot(Ys),u=t.dot(Ys),c=i.dot(Ys);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}var tg=new ir,Ma=new B,pc=new B,rs=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let t=Ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ma,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(pc)),this.expandByPoint(Ma.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ji=new B,mc=new B,Ro=new B,xs=new B,gc=new B,Co=new B,vc=new B,Ts=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){mc.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(mc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=xs.dot(this.direction),l=-xs.dot(Ro),u=xs.lengthSq(),c=Math.abs(1-o*o),d,h,f,g;if(c>0)if(d=o*l-a,h=o*a-l,g=r*c,d>=0)if(h>=-g)if(h<=g){let v=1/c;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+u;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+u):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+u);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mc).addScaledVector(Ro,h),f}intersectSphere(e,t){ji.subVectors(e.center,this.origin);let i=ji.dot(this.direction),s=ji.dot(ji)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,s=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,s=(e.min.x-h.x)*u),c>=0?(r=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,i,s,r){gc.subVectors(t,e),Co.subVectors(i,e),vc.crossVectors(gc,Co);let o=this.direction.dot(vc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xs.subVectors(this.origin,e);let l=a*this.direction.dot(Co.crossVectors(xs,Co));if(l<0)return null;let u=a*this.direction.dot(gc.cross(xs));if(u<0||l+u>o)return null;let c=-a*xs.dot(vc);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class n{constructor(e,t,i,s,r,o,a,l,u,c,d,h,f,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u,c,d,h,f,g,v,m)}set(e,t,i,s,r,o,a,l,u,c,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Cr.setFromMatrixColumn(e,0).length(),r=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*c,f=o*d,g=a*c,v=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=f+g*u,t[5]=h-v*u,t[9]=-a*l,t[2]=v-h*u,t[6]=g+f*u,t[10]=o*l}else if(e.order==="YXZ"){let h=l*c,f=l*d,g=u*c,v=u*d;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*c,f=l*d,g=u*c,v=u*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*c,t[9]=v-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*c,f=o*d,g=a*c,v=a*d;t[0]=l*c,t[4]=g*u-f,t[8]=h*u+v,t[1]=l*d,t[5]=v*u+h,t[9]=f*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*l,f=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+v,t[5]=o*c,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*c,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,i){let s=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),_s.crossVectors(i,Jn),_s.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),_s.crossVectors(i,Jn)),_s.normalize(),Po.crossVectors(Jn,_s),s[0]=_s.x,s[4]=Po.x,s[8]=Jn.x,s[1]=_s.y,s[5]=Po.y,s[9]=Jn.y,s[2]=_s.z,s[6]=Po.z,s[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],M=i[7],k=i[11],I=i[15],S=s[0],_=s[4],R=s[8],x=s[12],b=s[1],E=s[5],O=s[9],q=s[13],U=s[2],P=s[6],z=s[10],H=s[14],W=s[3],X=s[7],te=s[11],ae=s[15];return r[0]=o*S+a*b+l*U+u*W,r[4]=o*_+a*E+l*P+u*X,r[8]=o*R+a*O+l*z+u*te,r[12]=o*x+a*q+l*H+u*ae,r[1]=c*S+d*b+h*U+f*W,r[5]=c*_+d*E+h*P+f*X,r[9]=c*R+d*O+h*z+f*te,r[13]=c*x+d*q+h*H+f*ae,r[2]=g*S+v*b+m*U+p*W,r[6]=g*_+v*E+m*P+p*X,r[10]=g*R+v*O+m*z+p*te,r[14]=g*x+v*q+m*H+p*ae,r[3]=w*S+M*b+k*U+I*W,r[7]=w*_+M*E+k*P+I*X,r[11]=w*R+M*O+k*z+I*te,r[15]=w*x+M*q+k*H+I*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*u*d-r*a*h+i*u*h+s*a*f-i*l*f)+v*(+t*l*f-t*u*h+r*o*h-s*o*f+s*u*c-r*l*c)+m*(+t*u*d-t*a*f-r*o*d+i*o*f+r*a*c-i*u*c)+p*(-s*a*c-t*l*d+t*a*h+s*o*d-i*o*h+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=d*m*u-v*h*u+v*l*f-a*m*f-d*l*p+a*h*p,M=g*h*u-c*m*u-g*l*f+o*m*f+c*l*p-o*h*p,k=c*v*u-g*d*u+g*a*f-o*v*f-c*a*p+o*d*p,I=g*d*l-c*v*l-g*a*h+o*v*h+c*a*m-o*d*m,S=t*w+i*M+s*k+r*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/S;return e[0]=w*_,e[1]=(v*h*r-d*m*r-v*s*f+i*m*f+d*s*p-i*h*p)*_,e[2]=(a*m*r-v*l*r+v*s*u-i*m*u-a*s*p+i*l*p)*_,e[3]=(d*l*r-a*h*r-d*s*u+i*h*u+a*s*f-i*l*f)*_,e[4]=M*_,e[5]=(c*m*r-g*h*r+g*s*f-t*m*f-c*s*p+t*h*p)*_,e[6]=(g*l*r-o*m*r-g*s*u+t*m*u+o*s*p-t*l*p)*_,e[7]=(o*h*r-c*l*r+c*s*u-t*h*u-o*s*f+t*l*f)*_,e[8]=k*_,e[9]=(g*d*r-c*v*r-g*i*f+t*v*f+c*i*p-t*d*p)*_,e[10]=(o*v*r-g*a*r+g*i*u-t*v*u-o*i*p+t*a*p)*_,e[11]=(c*a*r-o*d*r-c*i*u+t*d*u+o*i*f-t*a*f)*_,e[12]=I*_,e[13]=(c*v*s-g*d*s+g*i*h-t*v*h-c*i*m+t*d*m)*_,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*_,e[15]=(o*d*s-c*a*s+c*i*l-t*d*l-o*i*h+t*a*h)*_,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,c=o+o,d=a+a,h=r*u,f=r*c,g=r*d,v=o*c,m=o*d,p=a*d,w=l*u,M=l*c,k=l*d,I=i.x,S=i.y,_=i.z;return s[0]=(1-(v+p))*I,s[1]=(f+k)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-k)*S,s[5]=(1-(h+p))*S,s[6]=(m+w)*S,s[7]=0,s[8]=(g+M)*_,s[9]=(m-w)*_,s[10]=(1-(h+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Cr.set(s[0],s[1],s[2]).length(),o=Cr.set(s[4],s[5],s[6]).length(),a=Cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yi.copy(this);let u=1/r,c=1/o,d=1/a;return yi.elements[0]*=u,yi.elements[1]*=u,yi.elements[2]*=u,yi.elements[4]*=c,yi.elements[5]*=c,yi.elements[6]*=c,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,t.setFromRotationMatrix(yi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ts){let l=this.elements,u=2*r/(t-e),c=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s),f,g;if(a===ts)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===rl)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ts){let l=this.elements,u=1/(t-e),c=1/(i-s),d=1/(o-r),h=(t+e)*u,f=(i+s)*c,g,v;if(a===ts)g=(o+r)*d,v=-2*d;else if(a===rl)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Cr=new B,yi=new sn,ng=new B(0,0,0),ig=new B(1,1,1),_s=new B,Po=new B,Jn=new B,fd=new sn,pd=new rn,$r=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$r.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,md=new B,Pr=new rn,Ji=new sn,ko=new B,Sa=new B,rg=new B,ag=new rn,gd=new B(1,0,0),vd=new B(0,1,0),yd=new B(0,0,1),og={type:"added"},lg={type:"removed"},En=class n extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new $r,i=new rn,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new yt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(vd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(vd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ko.copy(e):ko.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Sa,ko,this.up):Ji.lookAt(ko,Sa,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),Pr.setFromRotationMatrix(Ji),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(og)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let u in a){let c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};En.DEFAULT_UP=new B(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new B,$i=new B,yc=new B,Qi=new B,kr=new B,Lr=new B,xd=new B,xc=new B,_c=new B,bc=new B,Lo=!1,Qs=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xi.subVectors(s,t),$i.subVectors(i,t),yc.subVectors(e,t);let o=xi.dot(xi),a=xi.dot($i),l=xi.dot(yc),u=$i.dot($i),c=$i.dot(yc),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(u*l-a*c)*h,g=(o*c-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,t,i,s,r,o,a,l){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(o,Qi.y),l.addScaledVector(a,Qi.z),l)}static isFrontFacing(e,t,i,s){return xi.subVectors(i,t),$i.subVectors(e,t),xi.cross($i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),xi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;kr.subVectors(s,i),Lr.subVectors(r,i),xc.subVectors(e,i);let l=kr.dot(xc),u=Lr.dot(xc);if(l<=0&&u<=0)return t.copy(i);_c.subVectors(e,s);let c=kr.dot(_c),d=Lr.dot(_c);if(c>=0&&d<=c)return t.copy(s);let h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(kr,o);bc.subVectors(e,r);let f=kr.dot(bc),g=Lr.dot(bc);if(g>=0&&f<=g)return t.copy(r);let v=f*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Lr,a);let m=c*g-f*d;if(m<=0&&d-c>=0&&f-g>=0)return xd.subVectors(r,s),a=(d-c)/(d-c+(f-g)),t.copy(s).addScaledVector(xd,a);let p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(kr,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Mc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ot=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,zt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=zt.workingColorSpace){if(e=vu(e,1),t=Sn(t,0,1),i=Sn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Mc(o,r,e+1/3),this.g=Mc(o,r,e),this.b=Mc(o,r,e-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(e,t=pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){let i=xf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=uc(e.r),this.g=uc(e.g),this.b=uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return zt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Sn(Mn.r*255,0,255))*65536+Math.round(Sn(Mn.g*255,0,255))*256+Math.round(Sn(Mn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(Mn.copy(this),t);let i=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,u,c=(a+o)/2;if(a===o)l=0,u=0;else{let d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=pn){zt.fromWorkingColorSpace(Mn.copy(this),e);let t=Mn.r,i=Mn.g,s=Mn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+t,bs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bs),e.getHSL(Io);let i=Ca(bs.h,Io.h,t),s=Ca(bs.s,Io.s,t),r=Ca(bs.l,Io.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new ot;ot.NAMES=xf;var cg=0,Ni=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Xr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Dc,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==Es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ic&&(i.blendSrc=this.blendSrc),this.blendDst!==Dc&&(i.blendDst=this.blendDst),this.blendEquation!==Js&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hn=class extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new B,Do=new Oe,kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ss,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}};var ul=class extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var hl=class extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Bt=class extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var ug=0,ai=new sn,Sc=new En,Ir=new B,$n=new ir,wa=new ir,cn=new B,Pt=class n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?hl:ul)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new yt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wa.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors($n.min,wa.min),$n.expandByPoint(cn),cn.addVectors($n.max,wa.max),$n.expandByPoint(cn)):($n.expandByPoint(wa.min),$n.expandByPoint(wa.max))}$n.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)cn.fromBufferAttribute(a,u),l&&(Ir.fromBufferAttribute(e,u),cn.add(Ir)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,u=[],c=[];for(let b=0;b<a;b++)u[b]=new B,c[b]=new B;let d=new B,h=new B,f=new B,g=new Oe,v=new Oe,m=new Oe,p=new B,w=new B;function M(b,E,O){d.fromArray(s,b*3),h.fromArray(s,E*3),f.fromArray(s,O*3),g.fromArray(o,b*2),v.fromArray(o,E*2),m.fromArray(o,O*2),h.sub(d),f.sub(d),v.sub(g),m.sub(g);let q=1/(v.x*m.y-m.x*v.y);isFinite(q)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(q),w.copy(f).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(q),u[b].add(p),u[E].add(p),u[O].add(p),c[b].add(w),c[E].add(w),c[O].add(w))}let k=this.groups;k.length===0&&(k=[{start:0,count:i.length}]);for(let b=0,E=k.length;b<E;++b){let O=k[b],q=O.start,U=O.count;for(let P=q,z=q+U;P<z;P+=3)M(i[P+0],i[P+1],i[P+2])}let I=new B,S=new B,_=new B,R=new B;function x(b){_.fromArray(r,b*3),R.copy(_);let E=u[b];I.copy(E),I.sub(_.multiplyScalar(_.dot(E))).normalize(),S.crossVectors(R,E);let q=S.dot(c[b])<0?-1:1;l[b*4]=I.x,l[b*4+1]=I.y,l[b*4+2]=I.z,l[b*4+3]=q}for(let b=0,E=k.length;b<E;++b){let O=k[b],q=O.start,U=O.count;for(let P=q,z=q+U;P<z;P+=3)x(i[P+0]),x(i[P+1]),x(i[P+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){let u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*c;for(let p=0;p<c;p++)h[g++]=u[f++]}return new kt(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],u=e(l,i);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let l=[],u=r[a];for(let c=0,d=u.length;c<d;c++){let h=u[c],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let u=i[l];e.data.attributes[l]=u.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){let f=u[d];c.push(f.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let u in s){let c=s[u];this.setAttribute(u,c.clone(t))}let r=e.morphAttributes;for(let u in r){let c=[],d=r[u];for(let h=0,f=d.length;h<f;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,c=o.length;u<c;u++){let d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_d=new sn,Ks=new Ts,zo=new rs,bd=new B,Dr=new B,zr=new B,Ur=new B,wc=new B,Uo=new B,No=new Oe,Oo=new Oe,Fo=new Oe,Md=new B,Sd=new B,wd=new B,Bo=new B,Ho=new B,_t=class extends En{constructor(e=new Pt,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let c=a[l],d=r[l];c!==0&&(wc.fromBufferAttribute(d,e),o?Uo.addScaledVector(wc,c):Uo.addScaledVector(wc.sub(t),c))}t.add(Uo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(zo.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(zo,bd)===null||Ks.origin.distanceToSquared(bd)>(e.far-e.near)**2))&&(_d.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(_d),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let k=w,I=M;k<I;k+=3){let S=a.getX(k),_=a.getX(k+1),R=a.getX(k+2);s=Vo(this,p,e,i,u,c,d,S,_,R),s&&(s.faceIndex=Math.floor(k/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let w=a.getX(m),M=a.getX(m+1),k=a.getX(m+2);s=Vo(this,o,e,i,u,c,d,w,M,k),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let k=w,I=M;k<I;k+=3){let S=k,_=k+1,R=k+2;s=Vo(this,p,e,i,u,c,d,S,_,R),s&&(s.faceIndex=Math.floor(k/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let w=m,M=m+1,k=m+2;s=Vo(this,o,e,i,u,c,d,w,M,k),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function hg(n,e,t,i,s,r,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Es,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(n.matrixWorld);let u=t.ray.origin.distanceTo(Ho);return u<t.near||u>t.far?null:{distance:u,point:Ho.clone(),object:n}}function Vo(n,e,t,i,s,r,o,a,l,u){n.getVertexPosition(a,Dr),n.getVertexPosition(l,zr),n.getVertexPosition(u,Ur);let c=hg(n,e,t,i,Dr,zr,Ur,Bo);if(c){s&&(No.fromBufferAttribute(s,a),Oo.fromBufferAttribute(s,l),Fo.fromBufferAttribute(s,u),c.uv=Qs.getInterpolation(Bo,Dr,zr,Ur,No,Oo,Fo,new Oe)),r&&(No.fromBufferAttribute(r,a),Oo.fromBufferAttribute(r,l),Fo.fromBufferAttribute(r,u),c.uv1=Qs.getInterpolation(Bo,Dr,zr,Ur,No,Oo,Fo,new Oe),c.uv2=c.uv1),o&&(Md.fromBufferAttribute(o,a),Sd.fromBufferAttribute(o,l),wd.fromBufferAttribute(o,u),c.normal=Qs.getInterpolation(Bo,Dr,zr,Ur,Md,Sd,wd,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a,b:l,c:u,normal:new B,materialIndex:0};Qs.getNormal(Dr,zr,Ur,d.normal),c.face=d}return c}var Ua=class n extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],u=[],c=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(d,2));function g(v,m,p,w,M,k,I,S,_,R,x){let b=k/_,E=I/R,O=k/2,q=I/2,U=S/2,P=_+1,z=R+1,H=0,W=0,X=new B;for(let te=0;te<z;te++){let ae=te*E-q;for(let oe=0;oe<P;oe++){let K=oe*b-O;X[v]=K*w,X[m]=ae*M,X[p]=U,u.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=S>0?1:-1,c.push(X.x,X.y,X.z),d.push(oe/_),d.push(1-te/R),H+=1}}for(let te=0;te<R;te++)for(let ae=0;ae<_;ae++){let oe=h+ae+P*te,K=h+ae+P*(te+1),se=h+(ae+1)+P*(te+1),ce=h+(ae+1)+P*te;l.push(oe,K,ce),l.push(K,se,ce),W+=6}a.addGroup(f,W,x),f+=W,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=Qr(n[t]);for(let s in i)e[s]=i[s]}return e}function dg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _f(n){return n.getRenderTarget()===null?n.outputColorSpace:zt.workingColorSpace}var ra={clone:Qr,merge:Dn},fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},dl=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ts}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=class extends dl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nr=-90,Or=1,Gc=class extends En{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Nr,Or,e,t);s.layers=this.layers,this.add(s);let r=new mn(Nr,Or,e,t);r.layers=this.layers,this.add(r);let o=new mn(Nr,Or,e,t);o.layers=this.layers,this.add(o);let a=new mn(Nr,Or,e,t);a.layers=this.layers,this.add(a);let l=new mn(Nr,Or,e,t);l.layers=this.layers,this.add(l);let u=new mn(Nr,Or,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let u of t)this.remove(u);if(e===ts)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},fl=class extends Bn{constructor(e,t,i,s,r,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wc=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Pa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===nr?pn:hn),this.texture=new fl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ua(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Di});r.uniforms.tEquirect.value=t;let o=new _t(s,r),a=t.minFilter;return t.minFilter===La&&(t.minFilter=un),new Gc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ec=new B,mg=new B,gg=new yt,_i=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ec.subVectors(i,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ec),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||gg.getNormalMatrix(e),s=this.coplanarPoint(Ec).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new rs,Go=new B,pl=class{constructor(e=new _i,t=new _i,i=new _i,s=new _i,r=new _i,o=new _i){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ts){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],d=s[6],h=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],w=s[13],M=s[14],k=s[15];if(i[0].setComponents(l-r,h-u,m-f,k-p).normalize(),i[1].setComponents(l+r,h+u,m+f,k+p).normalize(),i[2].setComponents(l+o,h+c,m+g,k+w).normalize(),i[3].setComponents(l-o,h-c,m-g,k-w).normalize(),i[4].setComponents(l-a,h-d,m-v,k-M).normalize(),t===ts)i[5].setComponents(l+a,h+d,m+v,k+M).normalize();else if(t===rl)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){return Zs.center.set(0,0,0),Zs.radius=.7071067811865476,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Go.x=s.normal.x>0?e.max.x:e.min.x,Go.y=s.normal.y>0?e.max.y:e.min.y,Go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function vg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(u,c){let d=u.array,h=u.usage,f=d.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,d,h),u.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:f}}function r(u,c,d){let h=c.array,f=c._updateRange,g=c.updateRanges;if(n.bindBuffer(d,u),f.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];t?n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}c.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);let c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){let h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);let d=i.get(u);if(d===void 0)i.set(u,s(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}var ea=class n extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,d=e/a,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<c;p++){let w=p*h-o;for(let M=0;M<u;M++){let k=M*d-r;g.push(k,-w,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let M=w+u*p,k=w+u*(p+1),I=w+1+u*(p+1),S=w+1+u*p;f.push(M,k,S),f.push(k,I,S)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xg=`#ifdef USE_ALPHAHASH
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
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
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
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
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
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hg=`#define PI 3.141592653589793
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
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gg=`vec3 transformedNormal = objectNormal;
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
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`
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
}`,jg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rv=`#ifdef USE_GRADIENTMAP
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
}`,av=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
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
#endif`,hv=`#ifdef USE_ENVMAP
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
#endif`,dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gv=`PhysicalMaterial material;
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
#endif`,vv=`struct PhysicalMaterial {
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
}`,yv=`
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,_v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rv=`#if defined( USE_POINTS_UV )
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
#endif`,Cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lv=`#ifdef USE_MORPHNORMALS
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
#endif`,Iv=`#ifdef USE_MORPHTARGETS
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
#endif`,Dv=`#ifdef USE_MORPHTARGETS
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
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
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
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n1=`float getShadowMask() {
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
}`,i1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a1=`#ifdef USE_SKINNING
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
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
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
}`,w1=`#if DEPTH_PACKING == 3200
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
}`,E1=`#define DISTANCE
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
}`,T1=`#define DISTANCE
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`uniform float scale;
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
}`,P1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,L1=`uniform vec3 diffuse;
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
}`,I1=`#define LAMBERT
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
}`,D1=`#define LAMBERT
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
}`,z1=`#define MATCAP
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
}`,U1=`#define MATCAP
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
}`,N1=`#define NORMAL
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
}`,O1=`#define NORMAL
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
}`,F1=`#define PHONG
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
}`,B1=`#define PHONG
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
}`,H1=`#define STANDARD
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
}`,V1=`#define STANDARD
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
}`,G1=`#define TOON
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
}`,W1=`#define TOON
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
}`,q1=`uniform float size;
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
}`,X1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,K1=`uniform vec3 color;
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
}`,Z1=`uniform float rotation;
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
}`,j1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:yg,alphahash_pars_fragment:xg,alphamap_fragment:_g,alphamap_pars_fragment:bg,alphatest_fragment:Mg,alphatest_pars_fragment:Sg,aomap_fragment:wg,aomap_pars_fragment:Eg,batching_pars_vertex:Tg,batching_vertex:Ag,begin_vertex:Rg,beginnormal_vertex:Cg,bsdfs:Pg,iridescence_fragment:kg,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:zg,clipping_planes_vertex:Ug,color_fragment:Ng,color_pars_fragment:Og,color_pars_vertex:Fg,color_vertex:Bg,common:Hg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Wg,displacementmap_vertex:qg,emissivemap_fragment:Xg,emissivemap_pars_fragment:Yg,colorspace_fragment:Kg,colorspace_pars_fragment:Zg,envmap_fragment:jg,envmap_common_pars_fragment:Jg,envmap_pars_fragment:$g,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:hv,envmap_vertex:ev,fog_vertex:tv,fog_pars_vertex:nv,fog_fragment:iv,fog_pars_fragment:sv,gradientmap_pars_fragment:rv,lightmap_fragment:av,lightmap_pars_fragment:ov,lights_lambert_fragment:lv,lights_lambert_pars_fragment:cv,lights_pars_begin:uv,lights_toon_fragment:dv,lights_toon_pars_fragment:fv,lights_phong_fragment:pv,lights_phong_pars_fragment:mv,lights_physical_fragment:gv,lights_physical_pars_fragment:vv,lights_fragment_begin:yv,lights_fragment_maps:xv,lights_fragment_end:_v,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Mv,logdepthbuf_pars_vertex:Sv,logdepthbuf_vertex:wv,map_fragment:Ev,map_pars_fragment:Tv,map_particle_fragment:Av,map_particle_pars_fragment:Rv,metalnessmap_fragment:Cv,metalnessmap_pars_fragment:Pv,morphcolor_vertex:kv,morphnormal_vertex:Lv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Dv,normal_fragment_begin:zv,normal_fragment_maps:Uv,normal_pars_fragment:Nv,normal_pars_vertex:Ov,normal_vertex:Fv,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Vv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:Wv,opaque_fragment:qv,packing:Xv,premultiplied_alpha_fragment:Yv,project_vertex:Kv,dithering_fragment:Zv,dithering_pars_fragment:jv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:$v,shadowmap_pars_fragment:Qv,shadowmap_pars_vertex:e1,shadowmap_vertex:t1,shadowmask_pars_fragment:n1,skinbase_vertex:i1,skinning_pars_vertex:s1,skinning_vertex:r1,skinnormal_vertex:a1,specularmap_fragment:o1,specularmap_pars_fragment:l1,tonemapping_fragment:c1,tonemapping_pars_fragment:u1,transmission_fragment:h1,transmission_pars_fragment:d1,uv_pars_fragment:f1,uv_pars_vertex:p1,uv_vertex:m1,worldpos_vertex:g1,background_vert:v1,background_frag:y1,backgroundCube_vert:x1,backgroundCube_frag:_1,cube_vert:b1,cube_frag:M1,depth_vert:S1,depth_frag:w1,distanceRGBA_vert:E1,distanceRGBA_frag:T1,equirect_vert:A1,equirect_frag:R1,linedashed_vert:C1,linedashed_frag:P1,meshbasic_vert:k1,meshbasic_frag:L1,meshlambert_vert:I1,meshlambert_frag:D1,meshmatcap_vert:z1,meshmatcap_frag:U1,meshnormal_vert:N1,meshnormal_frag:O1,meshphong_vert:F1,meshphong_frag:B1,meshphysical_vert:H1,meshphysical_frag:V1,meshtoon_vert:G1,meshtoon_frag:W1,points_vert:q1,points_frag:X1,shadow_vert:Y1,shadow_frag:K1,sprite_vert:Z1,sprite_frag:j1},Ve={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Li={basic:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Dn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Dn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Dn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Dn([Ve.points,Ve.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Dn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Dn([Ve.common,Ve.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Dn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Dn([Ve.sprite,Ve.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Dn([Ve.common,Ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Dn([Ve.lights,Ve.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Li.physical={uniforms:Dn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Wo={r:0,b:0,g:0};function J1(n,e,t,i,s,r,o){let a=new ot(0),l=r===!0?0:1,u,c,d=null,h=0,f=null;function g(m,p){let w=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=(p.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,l):M&&M.isColor&&(v(M,1),w=!0);let k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===_l)?(c===void 0&&(c=new _t(new Ua(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Qr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=zt.getTransfer(M.colorSpace)!==Ht,(d!==M||h!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new _t(new ea(2,2),new vt({name:"BackgroundMaterial",uniforms:Qr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=zt.getTransfer(M.colorSpace)!==Ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function v(m,p){m.getRGB(Wo,_f(n)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function $1(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),u=l,c=!1;function d(U,P,z,H,W){let X=!1;if(o){let te=v(H,z,P);u!==te&&(u=te,f(u.object)),X=p(U,H,z,W),X&&w(U,H,z,W)}else{let te=P.wireframe===!0;(u.geometry!==H.id||u.program!==z.id||u.wireframe!==te)&&(u.geometry=H.id,u.program=z.id,u.wireframe=te,X=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(X||c)&&(c=!1,R(U,P,z,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(U){return i.isWebGL2?n.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function v(U,P,z){let H=z.wireframe===!0,W=a[U.id];W===void 0&&(W={},a[U.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let te=X[H];return te===void 0&&(te=m(h()),X[H]=te),te}function m(U){let P=[],z=[],H=[];for(let W=0;W<s;W++)P[W]=0,z[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:H,object:U,attributes:{},index:null}}function p(U,P,z,H){let W=u.attributes,X=P.attributes,te=0,ae=z.getAttributes();for(let oe in ae)if(ae[oe].location>=0){let se=W[oe],ce=X[oe];if(ce===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor)),se===void 0||se.attribute!==ce||ce&&se.data!==ce.data)return!0;te++}return u.attributesNum!==te||u.index!==H}function w(U,P,z,H){let W={},X=P.attributes,te=0,ae=z.getAttributes();for(let oe in ae)if(ae[oe].location>=0){let se=X[oe];se===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(se=U.instanceColor));let ce={};ce.attribute=se,se&&se.data&&(ce.data=se.data),W[oe]=ce,te++}u.attributes=W,u.attributesNum=te,u.index=H}function M(){let U=u.newAttributes;for(let P=0,z=U.length;P<z;P++)U[P]=0}function k(U){I(U,0)}function I(U,P){let z=u.newAttributes,H=u.enabledAttributes,W=u.attributeDivisors;z[U]=1,H[U]===0&&(n.enableVertexAttribArray(U),H[U]=1),W[U]!==P&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,P),W[U]=P)}function S(){let U=u.newAttributes,P=u.enabledAttributes;for(let z=0,H=P.length;z<H;z++)P[z]!==U[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function _(U,P,z,H,W,X,te){te===!0?n.vertexAttribIPointer(U,P,z,W,X):n.vertexAttribPointer(U,P,z,H,W,X)}function R(U,P,z,H){if(i.isWebGL2===!1&&(U.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let W=H.attributes,X=z.getAttributes(),te=P.defaultAttributeValues;for(let ae in X){let oe=X[ae];if(oe.location>=0){let K=W[ae];if(K===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(K=U.instanceColor)),K!==void 0){let se=K.normalized,ce=K.itemSize,fe=t.get(K);if(fe===void 0)continue;let Re=fe.buffer,De=fe.type,Ge=fe.bytesPerElement,Pe=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||K.gpuType===lf);if(K.isInterleavedBufferAttribute){let $e=K.data,Z=$e.stride,st=K.offset;if($e.isInstancedInterleavedBuffer){for(let ye=0;ye<oe.locationSize;ye++)I(oe.location+ye,$e.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let ye=0;ye<oe.locationSize;ye++)k(oe.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let ye=0;ye<oe.locationSize;ye++)_(oe.location+ye,ce/oe.locationSize,De,se,Z*Ge,(st+ce/oe.locationSize*ye)*Ge,Pe)}else{if(K.isInstancedBufferAttribute){for(let $e=0;$e<oe.locationSize;$e++)I(oe.location+$e,K.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let $e=0;$e<oe.locationSize;$e++)k(oe.location+$e);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let $e=0;$e<oe.locationSize;$e++)_(oe.location+$e,ce/oe.locationSize,De,se,ce*Ge,ce/oe.locationSize*$e*Ge,Pe)}}else if(te!==void 0){let se=te[ae];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(oe.location,se);break;case 3:n.vertexAttrib3fv(oe.location,se);break;case 4:n.vertexAttrib4fv(oe.location,se);break;default:n.vertexAttrib1fv(oe.location,se)}}}}S()}function x(){O();for(let U in a){let P=a[U];for(let z in P){let H=P[z];for(let W in H)g(H[W].object),delete H[W];delete P[z]}delete a[U]}}function b(U){if(a[U.id]===void 0)return;let P=a[U.id];for(let z in P){let H=P[z];for(let W in H)g(H[W].object),delete H[W];delete P[z]}delete a[U.id]}function E(U){for(let P in a){let z=a[P];if(z[U.id]===void 0)continue;let H=z[U.id];for(let W in H)g(H[W].object),delete H[W];delete z[U.id]}}function O(){q(),c=!0,u!==l&&(u=l,f(u.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:q,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:k,disableUnusedAttributes:S}}function Q1(n,e,t,i){let s=i.isWebGL2,r;function o(c){r=c}function a(c,d){n.drawArrays(r,c,d),t.update(d,r,1)}function l(c,d,h){if(h===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,c,d,h),t.update(d,r,h)}function u(c,d,h){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h;g++)this.render(c[g],d[g]);else{f.multiDrawArraysWEBGL(r,c,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function ey(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,k=o||e.has("OES_texture_float"),I=M&&k,S=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:k,floatVertexTextures:I,maxSamples:S}}function ty(n){let e=this,t=null,i=0,s=!1,r=!1,o=new _i,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{let w=r?0:i,M=w*4,k=p.clippingState||null;l.value=k,k=c(g,h,M,f);for(let I=0;I!==M;++I)k[I]=t[I];p.clippingState=k,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,k=f;M!==v;++M,k+=4)o.copy(d[M]).applyMatrix4(w,a),o.normal.toArray(m,k),m[k+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ny(n){let e=new WeakMap;function t(o,a){return a===zc?o.mapping=Zr:a===Uc&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===zc||a===Uc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let u=new Wc(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var As=class extends dl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wr=4,Ed=[.125,.215,.35,.446,.526,.582],$s=20,Tc=new As,Td=new ot,Ac=null,Rc=0,Cc=0,js=(1+Math.sqrt(5))/2,Fr=1/js,Ad=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,js,Fr),new B(0,js,-Fr),new B(Fr,0,js),new B(-Fr,0,js),new B(js,Fr,0),new B(-js,Fr,0)],ml=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ac,Rc,Cc),e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Qn,format:Mi,colorSpace:ss,depthBuffer:!1},s=Rd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iy(r)),this._blurMaterial=sy(r,e,t)}return s}_compileMaterial(e){let t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,i,s){let a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Td),c.toneMapping=ws,c.autoClear=!1;let f=new Hn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new _t(new Ua,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Td),v=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));let M=this._cubeSize;qo(s,w*M,p>2?M:0,M,M),c.setRenderTarget(s),v&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Zr||e.mapping===jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;qo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ad[(s-1)%Ad.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,d=new _t(this._lodPlanes[s],u),h=u.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$s-1),v=r/g,m=isFinite(r)?1+Math.floor(c*v):$s;m>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$s}`);let p=[],w=0;for(let _=0;_<$s;++_){let R=_/v,x=Math.exp(-R*R/2);p.push(x),_===0?w+=x:_<m&&(w+=2*x)}for(let _=0;_<p.length;_++)p[_]=p[_]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;let k=this._sizeLods[s],I=3*k*(s>M-Wr?s-M+Wr:0),S=4*(this._cubeSize-k);qo(t,I,S,3*k,2*k),l.setRenderTarget(t),l.render(d,Tc)}};function iy(n){let e=[],t=[],i=[],s=n,r=n-Wr+1+Ed.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Wr?l=Ed[o-n+Wr-1]:o===0&&(l=0),i.push(l);let u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),M=new Float32Array(m*g*f),k=new Float32Array(p*g*f);for(let S=0;S<f;S++){let _=S%3*2/3-1,R=S>2?0:-1,x=[_,R,0,_+2/3,R,0,_+2/3,R+1,0,_,R,0,_+2/3,R+1,0,_,R+1,0];w.set(x,v*g*S),M.set(h,m*g*S);let b=[S,S,S,S,S,S];k.set(b,p*g*S)}let I=new Pt;I.setAttribute("position",new kt(w,v)),I.setAttribute("uv",new kt(M,m)),I.setAttribute("faceIndex",new kt(k,p)),e.push(I),s>Wr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rd(n,e,t){let i=new gn(n,e,t);return i.texture.mapping=_l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sy(n,e,t){let i=new Float32Array($s),s=new B(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Cd(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Pd(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}function ry(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,u=l===zc||l===Uc,c=l===Zr||l===jr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ml(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(u&&d&&d.height>0||c&&d&&s(d)){t===null&&(t=new ml(n));let h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0,u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){let l=a.target;l.removeEventListener("dispose",r);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ay(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function oy(n,e,t,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function u(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let w=f.array;v=f.version;for(let M=0,k=w.length;M<k;M+=3){let I=w[M+0],S=w[M+1],_=w[M+2];h.push(I,S,S,_,_,I)}}else if(g!==void 0){let w=g.array;v=g.version;for(let M=0,k=w.length/3-1;M<k;M+=3){let I=M+0,S=M+1,_=M+2;h.push(I,S,S,_,_,I)}}else return;let m=new(yf(h)?hl:ul)(h,1);m.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function c(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&u(d)}else u(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function ly(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){n.drawElements(r,g,a,f*l),t.update(g,r,1)}function d(f,g,v){if(v===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,v),t.update(g,r,v)}function h(f,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,v);let p=0;for(let w=0;w<v;w++)p+=g[w];t.update(p,r,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function cy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function uy(n,e){return n[0]-e[0]}function hy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function dy(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Ct,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){let h=u.morphTargetInfluences;if(e.isWebGL2===!0){let f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=f!==void 0?f.length:0,v=r.get(c);if(v===void 0||v.count!==g){let U=function(){O.dispose(),r.delete(c),c.removeEventListener("dispose",U)};v!==void 0&&v.texture.dispose();let w=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,k=c.morphAttributes.color!==void 0,I=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],_=c.morphAttributes.color||[],R=0;w===!0&&(R=1),M===!0&&(R=2),k===!0&&(R=3);let x=c.attributes.position.count*R,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*b*4*g),O=new cl(E,x,b,g);O.type=Ss,O.needsUpdate=!0;let q=R*4;for(let P=0;P<g;P++){let z=I[P],H=S[P],W=_[P],X=x*b*4*P;for(let te=0;te<z.count;te++){let ae=te*q;w===!0&&(o.fromBufferAttribute(z,te),E[X+ae+0]=o.x,E[X+ae+1]=o.y,E[X+ae+2]=o.z,E[X+ae+3]=0),M===!0&&(o.fromBufferAttribute(H,te),E[X+ae+4]=o.x,E[X+ae+5]=o.y,E[X+ae+6]=o.z,E[X+ae+7]=0),k===!0&&(o.fromBufferAttribute(W,te),E[X+ae+8]=o.x,E[X+ae+9]=o.y,E[X+ae+10]=o.z,E[X+ae+11]=W.itemSize===4?o.w:1)}}v={count:g,texture:O,size:new Oe(x,b)},r.set(c,v),c.addEventListener("dispose",U)}let m=0;for(let w=0;w<h.length;w++)m+=h[w];let p=c.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",p),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let f=h===void 0?0:h.length,g=i[c.id];if(g===void 0||g.length!==f){g=[];for(let M=0;M<f;M++)g[M]=[M,0];i[c.id]=g}for(let M=0;M<f;M++){let k=g[M];k[0]=M,k[1]=h[M]}g.sort(hy);for(let M=0;M<8;M++)M<f&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(uy);let v=c.morphAttributes.position,m=c.morphAttributes.normal,p=0;for(let M=0;M<8;M++){let k=a[M],I=k[0],S=k[1];I!==Number.MAX_SAFE_INTEGER&&S?(v&&c.getAttribute("morphTarget"+M)!==v[I]&&c.setAttribute("morphTarget"+M,v[I]),m&&c.getAttribute("morphNormal"+M)!==m[I]&&c.setAttribute("morphNormal"+M,m[I]),s[M]=S,p+=S):(v&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),m&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),s[M]=0)}let w=c.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function fy(n,e,t,i){let s=new WeakMap;function r(l){let u=i.render.frame,c=l.geometry,d=e.get(l,c);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function a(l){let u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var gl=class extends Bn{constructor(e,t,i,s,r,o,a,l,u,c){if(c=c!==void 0?c:tr,c!==tr&&c!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===tr&&(i=Ms),i===void 0&&c===Jr&&(i=er),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mf=new Bn,Sf=new gl(1,1);Sf.compareFunction=vf;var wf=new cl,Ef=new Vc,Tf=new fl,kd=[],Ld=[],Id=new Float32Array(16),Dd=new Float32Array(9),zd=new Float32Array(4);function aa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ml(n,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function py(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function my(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function yy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;zd.set(i),n.uniformMatrix2fv(this.addr,!1,zd),on(t,i)}}function xy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Dd.set(i),n.uniformMatrix3fv(this.addr,!1,Dd),on(t,i)}}function _y(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Id.set(i),n.uniformMatrix4fv(this.addr,!1,Id),on(t,i)}}function by(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function My(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function Ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function Ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function Ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function Cy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Sf:Mf;t.setTexture2D(e||r,s)}function Py(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ef,s)}function ky(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Tf,s)}function Ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||wf,s)}function Iy(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return vy;case 35674:return yy;case 35675:return xy;case 35676:return _y;case 5124:case 35670:return by;case 35667:case 35671:return My;case 35668:case 35672:return Sy;case 35669:case 35673:return wy;case 5125:return Ey;case 36294:return Ty;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return Ly}}function Dy(n,e){n.uniform1fv(this.addr,e)}function zy(n,e){let t=aa(e,this.size,2);n.uniform2fv(this.addr,t)}function Uy(n,e){let t=aa(e,this.size,3);n.uniform3fv(this.addr,t)}function Ny(n,e){let t=aa(e,this.size,4);n.uniform4fv(this.addr,t)}function Oy(n,e){let t=aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fy(n,e){let t=aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function By(n,e){let t=aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hy(n,e){n.uniform1iv(this.addr,e)}function Vy(n,e){n.uniform2iv(this.addr,e)}function Gy(n,e){n.uniform3iv(this.addr,e)}function Wy(n,e){n.uniform4iv(this.addr,e)}function qy(n,e){n.uniform1uiv(this.addr,e)}function Xy(n,e){n.uniform2uiv(this.addr,e)}function Yy(n,e){n.uniform3uiv(this.addr,e)}function Ky(n,e){n.uniform4uiv(this.addr,e)}function Zy(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mf,r[o])}function jy(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ef,r[o])}function Jy(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tf,r[o])}function $y(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wf,r[o])}function Qy(n){switch(n){case 5126:return Dy;case 35664:return zy;case 35665:return Uy;case 35666:return Ny;case 35674:return Oy;case 35675:return Fy;case 35676:return By;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return qy;case 36294:return Xy;case 36295:return Yy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return $y}}var qc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}},Xc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qy(t.type)}},Yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Pc=/(\w+)(\])?(\[|\.)?/g;function Ud(n,e){n.seq.push(e),n.map[e.id]=e}function ex(n,e,t){let i=n.name,s=i.length;for(Pc.lastIndex=0;;){let r=Pc.exec(i),o=Pc.lastIndex,a=r[1],l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Ud(t,u===void 0?new qc(a,n,e):new Xc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Yc(a),Ud(t,d)),t=d}}}var Kr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ex(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Nd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var tx=37297,nx=0;function ix(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function sx(n){let e=zt.getPrimaries(zt.workingColorSpace),t=zt.getPrimaries(n),i;switch(e===t?i="":e===sl&&t===il?i="LinearDisplayP3ToLinearSRGB":e===il&&t===sl&&(i="LinearSRGBToLinearDisplayP3"),n){case ss:case bl:return[i,"LinearTransferOETF"];case pn:case gu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Od(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ix(n.getShaderSource(e),o)}else return s}function rx(n,e){let t=sx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ax(n,e){let t;switch(e){case d0:t="Linear";break;case f0:t="Reinhard";break;case p0:t="OptimizedCineon";break;case m0:t="ACESFilmic";break;case v0:t="AgX";break;case g0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ox(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qr).join(`
`)}function lx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qr).join(`
`)}function cx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ux(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qr(n){return n!==""}function Fd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(hx,fx)}var dx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fx(n,e){let t=pt[e];if(t===void 0){let i=dx.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}var px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(n){return n.replace(px,mx)}function mx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===es&&(e="SHADOWMAP_TYPE_VSM"),e}function vx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case jr:e="ENVMAP_TYPE_CUBE";break;case _l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===jr&&(e="ENVMAP_MODE_REFRACTION"),e}function xx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case af:e="ENVMAP_BLENDING_MULTIPLY";break;case u0:e="ENVMAP_BLENDING_MIX";break;case h0:e="ENVMAP_BLENDING_ADD";break}return e}function _x(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bx(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=gx(t),u=vx(t),c=yx(t),d=xx(t),h=_x(t),f=t.isWebGL2?"":ox(t),g=lx(t),v=cx(r),m=s.createProgram(),p,w,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qr).join(`
`),p.length>0&&(p+=`
`),w=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qr).join(`
`),w.length>0&&(w+=`
`)):(p=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),w=[f,Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ws?"#define TONE_MAPPING":"",t.toneMapping!==ws?pt.tonemapping_pars_fragment:"",t.toneMapping!==ws?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,rx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),o=Kc(o),o=Fd(o,t),o=Bd(o,t),a=Kc(a),a=Fd(a,t),a=Bd(a,t),o=Hd(o),a=Hd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let k=M+p+o,I=M+w+a,S=Nd(s,s.VERTEX_SHADER,k),_=Nd(s,s.FRAGMENT_SHADER,I);s.attachShader(m,S),s.attachShader(m,_),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function R(O){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(m).trim(),U=s.getShaderInfoLog(S).trim(),P=s.getShaderInfoLog(_).trim(),z=!0,H=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,S,_);else{let W=Od(s,S,"vertex"),X=Od(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+W+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(U===""||P==="")&&(H=!1);H&&(O.diagnostics={runnable:z,programLog:q,vertexShader:{log:U,prefix:p},fragmentShader:{log:P,prefix:w}})}s.deleteShader(S),s.deleteShader(_),x=new Kr(s,m),b=ux(s,m)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(m,tx)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=_,this}var Mx=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new jc(e),t.set(e,i)),i}},jc=class{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}};function Sx(n,e,t,i,s,r,o){let a=new za,l=new Zc,u=[],c=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,b,E,O,q){let U=O.fog,P=q.geometry,z=x.isMeshStandardMaterial?O.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),W=H&&H.mapping===_l?H.image.height:null,X=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let te=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ae=te!==void 0?te.length:0,oe=0;P.morphAttributes.position!==void 0&&(oe=1),P.morphAttributes.normal!==void 0&&(oe=2),P.morphAttributes.color!==void 0&&(oe=3);let K,se,ce,fe;if(X){let rt=Li[X];K=rt.vertexShader,se=rt.fragmentShader}else K=x.vertexShader,se=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);let Re=n.getRenderTarget(),De=q.isInstancedMesh===!0,Ge=q.isBatchedMesh===!0,Pe=!!x.map,$e=!!x.matcap,Z=!!H,st=!!x.aoMap,ye=!!x.lightMap,ze=!!x.bumpMap,Ce=!!x.normalMap,Ke=!!x.displacementMap,ke=!!x.emissiveMap,C=!!x.metalnessMap,T=!!x.roughnessMap,Y=x.anisotropy>0,pe=x.clearcoat>0,ue=x.iridescence>0,de=x.sheen>0,Te=x.transmission>0,Se=Y&&!!x.anisotropyMap,Ee=pe&&!!x.clearcoatMap,He=pe&&!!x.clearcoatNormalMap,We=pe&&!!x.clearcoatRoughnessMap,N=ue&&!!x.iridescenceMap,le=ue&&!!x.iridescenceThicknessMap,A=de&&!!x.sheenColorMap,y=de&&!!x.sheenRoughnessMap,re=!!x.specularMap,$=!!x.specularColorMap,ne=!!x.specularIntensityMap,Le=Te&&!!x.transmissionMap,Ae=Te&&!!x.thicknessMap,_e=!!x.gradientMap,me=!!x.alphaMap,V=x.alphaTest>0,he=!!x.alphaHash,ge=!!x.extensions,Ie=!!P.attributes.uv1,xe=!!P.attributes.uv2,be=!!P.attributes.uv3,Xe=ws;return x.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Xe=n.toneMapping),{isWebGL2:c,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:K,fragmentShader:se,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ge,instancing:De,instancingColor:De&&q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ss,map:Pe,matcap:$e,envMap:Z,envMapMode:Z&&H.mapping,envMapCubeUVHeight:W,aoMap:st,lightMap:ye,bumpMap:ze,normalMap:Ce,displacementMap:h&&Ke,emissiveMap:ke,normalMapObjectSpace:Ce&&x.normalMapType===C0,normalMapTangentSpace:Ce&&x.normalMapType===gf,metalnessMap:C,roughnessMap:T,anisotropy:Y,anisotropyMap:Se,clearcoat:pe,clearcoatMap:Ee,clearcoatNormalMap:He,clearcoatRoughnessMap:We,iridescence:ue,iridescenceMap:N,iridescenceThicknessMap:le,sheen:de,sheenColorMap:A,sheenRoughnessMap:y,specularMap:re,specularColorMap:$,specularIntensityMap:ne,transmission:Te,transmissionMap:Le,thicknessMap:Ae,gradientMap:_e,opaque:x.transparent===!1&&x.blending===Xr,alphaMap:me,alphaTest:V,alphaHash:he,combine:x.combine,mapUv:Pe&&v(x.map.channel),aoMapUv:st&&v(x.aoMap.channel),lightMapUv:ye&&v(x.lightMap.channel),bumpMapUv:ze&&v(x.bumpMap.channel),normalMapUv:Ce&&v(x.normalMap.channel),displacementMapUv:Ke&&v(x.displacementMap.channel),emissiveMapUv:ke&&v(x.emissiveMap.channel),metalnessMapUv:C&&v(x.metalnessMap.channel),roughnessMapUv:T&&v(x.roughnessMap.channel),anisotropyMapUv:Se&&v(x.anisotropyMap.channel),clearcoatMapUv:Ee&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:A&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:y&&v(x.sheenRoughnessMap.channel),specularMapUv:re&&v(x.specularMap.channel),specularColorMapUv:$&&v(x.specularColorMap.channel),specularIntensityMapUv:ne&&v(x.specularIntensityMap.channel),transmissionMapUv:Le&&v(x.transmissionMap.channel),thicknessMapUv:Ae&&v(x.thicknessMap.channel),alphaMapUv:me&&v(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ce||Y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:xe,vertexUv3s:be,pointsUvs:q.isPoints===!0&&!!P.attributes.uv&&(Pe||me),fog:!!U,useFog:x.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&zt.getTransfer(x.map.colorSpace)===Ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ge&&x.extensions.derivatives===!0,extensionFragDepth:ge&&x.extensions.fragDepth===!0,extensionDrawBuffers:ge&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let E in x.defines)b.push(E),b.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(w(b,x),M(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function w(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function k(x){let b=g[x.type],E;if(b){let O=Li[b];E=ra.clone(O.uniforms)}else E=x.uniforms;return E}function I(x,b){let E;for(let O=0,q=u.length;O<q;O++){let U=u[O];if(U.cacheKey===b){E=U,++E.usedTimes;break}}return E===void 0&&(E=new bx(n,b,x,r),u.push(E)),E}function S(x){if(--x.usedTimes===0){let b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),x.destroy()}}function _(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:k,acquireProgram:I,releaseProgram:S,releaseShaderCache:_,programs:u,dispose:R}}function wx(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Ex(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,f,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function u(d,h){t.length>1&&t.sort(d||Ex),i.length>1&&i.sort(h||Gd),s.length>1&&s.sort(h||Gd)}function c(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function Tx(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Wd,n.set(i,[o])):s>=r.length?(o=new Wd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ax(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ot};break;case"SpotLight":t={position:new B,direction:new B,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Rx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Cx=0;function Px(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kx(n,e){let t=new Ax,i=Rx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new B);let r=new B,o=new sn,a=new sn;function l(c,d){let h=0,f=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let v=0,m=0,p=0,w=0,M=0,k=0,I=0,S=0,_=0,R=0,x=0;c.sort(Px);let b=d===!0?Math.PI:1;for(let O=0,q=c.length;O<q;O++){let U=c[O],P=U.color,z=U.intensity,H=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=P.r*z*b,f+=P.g*z*b,g+=P.b*z*b;else if(U.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(U.sh.coefficients[X],z);x++}else if(U.isDirectionalLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){let te=U.shadow,ae=i.get(U);ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,s.directionalShadow[v]=ae,s.directionalShadowMap[v]=W,s.directionalShadowMatrix[v]=U.shadow.matrix,k++}s.directional[v]=X,v++}else if(U.isSpotLight){let X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(P).multiplyScalar(z*b),X.distance=H,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,s.spot[p]=X;let te=U.shadow;if(U.map&&(s.spotLightMap[_]=U.map,_++,te.updateMatrices(U),U.castShadow&&R++),s.spotLightMatrix[p]=te.matrix,U.castShadow){let ae=i.get(U);ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,s.spotShadow[p]=ae,s.spotShadowMap[p]=W,S++}p++}else if(U.isRectAreaLight){let X=t.get(U);X.color.copy(P).multiplyScalar(z),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),s.rectArea[w]=X,w++}else if(U.isPointLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*b),X.distance=U.distance,X.decay=U.decay,U.castShadow){let te=U.shadow,ae=i.get(U);ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,ae.shadowCameraNear=te.camera.near,ae.shadowCameraFar=te.camera.far,s.pointShadow[m]=ae,s.pointShadowMap[m]=W,s.pointShadowMatrix[m]=U.shadow.matrix,I++}s.point[m]=X,m++}else if(U.isHemisphereLight){let X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(z*b),X.groundColor.copy(U.groundColor).multiplyScalar(z*b),s.hemi[M]=X,M++}}w>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=g;let E=s.hash;(E.directionalLength!==v||E.pointLength!==m||E.spotLength!==p||E.rectAreaLength!==w||E.hemiLength!==M||E.numDirectionalShadows!==k||E.numPointShadows!==I||E.numSpotShadows!==S||E.numSpotMaps!==_||E.numLightProbes!==x)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=w,s.point.length=m,s.hemi.length=M,s.directionalShadow.length=k,s.directionalShadowMap.length=k,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=k,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=S+_-R,s.spotLightMap.length=_,s.numSpotLightShadowsWithMaps=R,s.numLightProbes=x,E.directionalLength=v,E.pointLength=m,E.spotLength=p,E.rectAreaLength=w,E.hemiLength=M,E.numDirectionalShadows=k,E.numPointShadows=I,E.numSpotShadows=S,E.numSpotMaps=_,E.numLightProbes=x,s.version=Cx++)}function u(c,d){let h=0,f=0,g=0,v=0,m=0,p=d.matrixWorldInverse;for(let w=0,M=c.length;w<M;w++){let k=c[w];if(k.isDirectionalLight){let I=s.directional[h];I.direction.setFromMatrixPosition(k.matrixWorld),r.setFromMatrixPosition(k.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),h++}else if(k.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(k.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(k.matrixWorld),r.setFromMatrixPosition(k.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),g++}else if(k.isRectAreaLight){let I=s.rectArea[v];I.position.setFromMatrixPosition(k.matrixWorld),I.position.applyMatrix4(p),a.identity(),o.copy(k.matrixWorld),o.premultiply(p),a.extractRotation(o),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),v++}else if(k.isPointLight){let I=s.point[f];I.position.setFromMatrixPosition(k.matrixWorld),I.position.applyMatrix4(p),f++}else if(k.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(k.matrixWorld),I.direction.transformDirection(p),m++}}}return{setup:l,setupView:u,state:s}}function qd(n,e){let t=new kx(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Lx(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new qd(n,e),t.set(r,[l])):o>=a.length?(l=new qd(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Jc=class extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$c=class extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
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
}`;function zx(n,e,t){let i=new pl,s=new Oe,r=new Oe,o=new Ct,a=new Jc({depthPacking:R0}),l=new $c,u={},c=t.maxTextureSize,d={[Es]:nn,[nn]:Es,[wn]:wn},h=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Ix,fragmentShader:Dx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let p=this.type;this.render=function(S,_,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let x=n.getRenderTarget(),b=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Di),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=p!==es&&this.type===es,U=p===es&&this.type!==es;for(let P=0,z=S.length;P<z;P++){let H=S[P],W=H.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let X=W.getFrameExtents();if(s.multiply(X),r.copy(W.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/X.x),s.x=r.x*X.x,W.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/X.y),s.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||q===!0||U===!0){let ae=this.type!==es?{minFilter:fn,magFilter:fn}:{};W.map!==null&&W.map.dispose(),W.map=new gn(s.x,s.y,ae),W.map.texture.name=H.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let te=W.getViewportCount();for(let ae=0;ae<te;ae++){let oe=W.getViewport(ae);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),O.viewport(o),W.updateMatrices(H,ae),i=W.getFrustum(),k(_,R,W.camera,H,this.type)}W.isPointLightShadow!==!0&&this.type===es&&w(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,b,E)};function w(S,_){let R=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new gn(s.x,s.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(_,null,R,h,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(_,null,R,f,v,null)}function M(S,_,R,x){let b=null,E=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)b=E;else if(b=R.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let O=b.uuid,q=_.uuid,U=u[O];U===void 0&&(U={},u[O]=U);let P=U[q];P===void 0&&(P=b.clone(),U[q]=P,_.addEventListener("dispose",I)),b=P}if(b.visible=_.visible,b.wireframe=_.wireframe,x===es?b.side=_.shadowSide!==null?_.shadowSide:_.side:b.side=_.shadowSide!==null?_.shadowSide:d[_.side],b.alphaMap=_.alphaMap,b.alphaTest=_.alphaTest,b.map=_.map,b.clipShadows=_.clipShadows,b.clippingPlanes=_.clippingPlanes,b.clipIntersection=_.clipIntersection,b.displacementMap=_.displacementMap,b.displacementScale=_.displacementScale,b.displacementBias=_.displacementBias,b.wireframeLinewidth=_.wireframeLinewidth,b.linewidth=_.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=n.properties.get(b);O.light=R}return b}function k(S,_,R,x,b){if(S.visible===!1)return;if(S.layers.test(_.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===es)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);let q=e.update(S),U=S.material;if(Array.isArray(U)){let P=q.groups;for(let z=0,H=P.length;z<H;z++){let W=P[z],X=U[W.materialIndex];if(X&&X.visible){let te=M(S,X,x,b);S.onBeforeShadow(n,S,_,R,q,te,W),n.renderBufferDirect(R,null,q,te,S,W),S.onAfterShadow(n,S,_,R,q,te,W)}}}else if(U.visible){let P=M(S,U,x,b);S.onBeforeShadow(n,S,_,R,q,P,null),n.renderBufferDirect(R,null,q,P,S,null),S.onAfterShadow(n,S,_,R,q,P,null)}}let O=S.children;for(let q=0,U=O.length;q<U;q++)k(O[q],_,R,x,b)}function I(S){S.target.removeEventListener("dispose",I);for(let R in u){let x=u[R],b=S.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}function Ux(n,e,t){let i=t.isWebGL2;function s(){let V=!1,he=new Ct,ge=null,Ie=new Ct(0,0,0,0);return{setMask:function(xe){ge!==xe&&!V&&(n.colorMask(xe,xe,xe,xe),ge=xe)},setLocked:function(xe){V=xe},setClear:function(xe,be,Xe,tt,rt){rt===!0&&(xe*=tt,be*=tt,Xe*=tt),he.set(xe,be,Xe,tt),Ie.equals(he)===!1&&(n.clearColor(xe,be,Xe,tt),Ie.copy(he))},reset:function(){V=!1,ge=null,Ie.set(-1,0,0,0)}}}function r(){let V=!1,he=null,ge=null,Ie=null;return{setTest:function(xe){xe?Ge(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(xe){he!==xe&&!V&&(n.depthMask(xe),he=xe)},setFunc:function(xe){if(ge!==xe){switch(xe){case i0:n.depthFunc(n.NEVER);break;case s0:n.depthFunc(n.ALWAYS);break;case r0:n.depthFunc(n.LESS);break;case Qo:n.depthFunc(n.LEQUAL);break;case a0:n.depthFunc(n.EQUAL);break;case o0:n.depthFunc(n.GEQUAL);break;case l0:n.depthFunc(n.GREATER);break;case c0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=xe}},setLocked:function(xe){V=xe},setClear:function(xe){Ie!==xe&&(n.clearDepth(xe),Ie=xe)},reset:function(){V=!1,he=null,ge=null,Ie=null}}}function o(){let V=!1,he=null,ge=null,Ie=null,xe=null,be=null,Xe=null,tt=null,rt=null;return{setTest:function(et){V||(et?Ge(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(et){he!==et&&!V&&(n.stencilMask(et),he=et)},setFunc:function(et,Fe,Mt){(ge!==et||Ie!==Fe||xe!==Mt)&&(n.stencilFunc(et,Fe,Mt),ge=et,Ie=Fe,xe=Mt)},setOp:function(et,Fe,Mt){(be!==et||Xe!==Fe||tt!==Mt)&&(n.stencilOp(et,Fe,Mt),be=et,Xe=Fe,tt=Mt)},setLocked:function(et){V=et},setClear:function(et){rt!==et&&(n.clearStencil(et),rt=et)},reset:function(){V=!1,he=null,ge=null,Ie=null,xe=null,be=null,Xe=null,tt=null,rt=null}}}let a=new s,l=new r,u=new o,c=new WeakMap,d=new WeakMap,h={},f={},g=new WeakMap,v=[],m=null,p=!1,w=null,M=null,k=null,I=null,S=null,_=null,R=null,x=new ot(0,0,0),b=0,E=!1,O=null,q=null,U=null,P=null,z=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(te)[1]),W=X>=1):te.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),W=X>=2);let ae=null,oe={},K=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),ce=new Ct().fromArray(K),fe=new Ct().fromArray(se);function Re(V,he,ge,Ie){let xe=new Uint8Array(4),be=n.createTexture();n.bindTexture(V,be),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ge;Xe++)i&&(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(he+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return be}let De={};De[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ge(n.DEPTH_TEST),l.setFunc(Qo),ke(!1),C(Th),Ge(n.CULL_FACE),Ce(Di);function Ge(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function Pe(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function $e(V,he){return f[V]!==he?(n.bindFramebuffer(V,he),f[V]=he,i&&(V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function Z(V,he){let ge=v,Ie=!1;if(V)if(ge=g.get(he),ge===void 0&&(ge=[],g.set(he,ge)),V.isWebGLMultipleRenderTargets){let xe=V.texture;if(ge.length!==xe.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let be=0,Xe=xe.length;be<Xe;be++)ge[be]=n.COLOR_ATTACHMENT0+be;ge.length=xe.length,Ie=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,Ie=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function st(V){return m!==V?(n.useProgram(V),m=V,!0):!1}let ye={[Js]:n.FUNC_ADD,[Vm]:n.FUNC_SUBTRACT,[Gm]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[Ch]=n.MIN,ye[Ph]=n.MAX;else{let V=e.get("EXT_blend_minmax");V!==null&&(ye[Ch]=V.MIN_EXT,ye[Ph]=V.MAX_EXT)}let ze={[Wm]:n.ZERO,[qm]:n.ONE,[Xm]:n.SRC_COLOR,[Ic]:n.SRC_ALPHA,[$m]:n.SRC_ALPHA_SATURATE,[jm]:n.DST_COLOR,[Km]:n.DST_ALPHA,[Ym]:n.ONE_MINUS_SRC_COLOR,[Dc]:n.ONE_MINUS_SRC_ALPHA,[Jm]:n.ONE_MINUS_DST_COLOR,[Zm]:n.ONE_MINUS_DST_ALPHA,[Qm]:n.CONSTANT_COLOR,[e0]:n.ONE_MINUS_CONSTANT_COLOR,[t0]:n.CONSTANT_ALPHA,[n0]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(V,he,ge,Ie,xe,be,Xe,tt,rt,et){if(V===Di){p===!0&&(Pe(n.BLEND),p=!1);return}if(p===!1&&(Ge(n.BLEND),p=!0),V!==Hm){if(V!==w||et!==E){if((M!==Js||S!==Js)&&(n.blendEquation(n.FUNC_ADD),M=Js,S=Js),et)switch(V){case Xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ft:n.blendFunc(n.ONE,n.ONE);break;case Ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ft:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}k=null,I=null,_=null,R=null,x.set(0,0,0),b=0,w=V,E=et}return}xe=xe||he,be=be||ge,Xe=Xe||Ie,(he!==M||xe!==S)&&(n.blendEquationSeparate(ye[he],ye[xe]),M=he,S=xe),(ge!==k||Ie!==I||be!==_||Xe!==R)&&(n.blendFuncSeparate(ze[ge],ze[Ie],ze[be],ze[Xe]),k=ge,I=Ie,_=be,R=Xe),(tt.equals(x)===!1||rt!==b)&&(n.blendColor(tt.r,tt.g,tt.b,rt),x.copy(tt),b=rt),w=V,E=!1}function Ke(V,he){V.side===wn?Pe(n.CULL_FACE):Ge(n.CULL_FACE);let ge=V.side===nn;he&&(ge=!ge),ke(ge),V.blending===Xr&&V.transparent===!1?Ce(Di):Ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);let Ie=V.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Y(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ge(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(V){O!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),O=V)}function C(V){V!==Om?(Ge(n.CULL_FACE),V!==q&&(V===Th?n.cullFace(n.BACK):V===Fm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),q=V}function T(V){V!==U&&(W&&n.lineWidth(V),U=V)}function Y(V,he,ge){V?(Ge(n.POLYGON_OFFSET_FILL),(P!==he||z!==ge)&&(n.polygonOffset(he,ge),P=he,z=ge)):Pe(n.POLYGON_OFFSET_FILL)}function pe(V){V?Ge(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function ue(V){V===void 0&&(V=n.TEXTURE0+H-1),ae!==V&&(n.activeTexture(V),ae=V)}function de(V,he,ge){ge===void 0&&(ae===null?ge=n.TEXTURE0+H-1:ge=ae);let Ie=oe[ge];Ie===void 0&&(Ie={type:void 0,texture:void 0},oe[ge]=Ie),(Ie.type!==V||Ie.texture!==he)&&(ae!==ge&&(n.activeTexture(ge),ae=ge),n.bindTexture(V,he||De[V]),Ie.type=V,Ie.texture=he)}function Te(){let V=oe[ae];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function N(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function A(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function y(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(V){ce.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ce.copy(V))}function Le(V){fe.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),fe.copy(V))}function Ae(V,he){let ge=d.get(he);ge===void 0&&(ge=new WeakMap,d.set(he,ge));let Ie=ge.get(V);Ie===void 0&&(Ie=n.getUniformBlockIndex(he,V.name),ge.set(V,Ie))}function _e(V,he){let Ie=d.get(he).get(V);c.get(he)!==Ie&&(n.uniformBlockBinding(he,Ie,V.__bindingPointIndex),c.set(he,Ie))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,oe={},f={},g=new WeakMap,v=[],m=null,p=!1,w=null,M=null,k=null,I=null,S=null,_=null,R=null,x=new ot(0,0,0),b=0,E=!1,O=null,q=null,U=null,P=null,z=null,ce.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ge,disable:Pe,bindFramebuffer:$e,drawBuffers:Z,useProgram:st,setBlending:Ce,setMaterial:Ke,setFlipSided:ke,setCullFace:C,setLineWidth:T,setPolygonOffset:Y,setScissorTest:pe,activeTexture:ue,bindTexture:de,unbindTexture:Te,compressedTexImage2D:Se,compressedTexImage3D:Ee,texImage2D:re,texImage3D:$,updateUBOMapping:Ae,uniformBlockBinding:_e,texStorage2D:A,texStorage3D:y,texSubImage2D:He,texSubImage3D:We,compressedTexSubImage2D:N,compressedTexSubImage3D:le,scissor:ne,viewport:Le,reset:me}}function Nx(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return f?new OffscreenCanvas(C,T):Da("canvas")}function v(C,T,Y,pe){let ue=1;if((C.width>pe||C.height>pe)&&(ue=pe/Math.max(C.width,C.height)),ue<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let de=T?al:Math.floor,Te=de(ue*C.width),Se=de(ue*C.height);d===void 0&&(d=g(Te,Se));let Ee=Y?g(Te,Se):d;return Ee.width=Te,Ee.height=Se,Ee.getContext("2d").drawImage(C,0,0,Te,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Te+"x"+Se+")."),Ee}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Bc(C.width)&&Bc(C.height)}function p(C){return a?!1:C.wrapS!==bi||C.wrapT!==bi||C.minFilter!==fn&&C.minFilter!==un}function w(C,T){return C.generateMipmaps&&T&&C.minFilter!==fn&&C.minFilter!==un}function M(C){n.generateMipmap(C)}function k(C,T,Y,pe,ue=!1){if(a===!1)return T;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de=T;if(T===n.RED&&(Y===n.FLOAT&&(de=n.R32F),Y===n.HALF_FLOAT&&(de=n.R16F),Y===n.UNSIGNED_BYTE&&(de=n.R8)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.R8UI),Y===n.UNSIGNED_SHORT&&(de=n.R16UI),Y===n.UNSIGNED_INT&&(de=n.R32UI),Y===n.BYTE&&(de=n.R8I),Y===n.SHORT&&(de=n.R16I),Y===n.INT&&(de=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(de=n.RG32F),Y===n.HALF_FLOAT&&(de=n.RG16F),Y===n.UNSIGNED_BYTE&&(de=n.RG8)),T===n.RGBA){let Te=ue?nl:zt.getTransfer(pe);Y===n.FLOAT&&(de=n.RGBA32F),Y===n.HALF_FLOAT&&(de=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(de=Te===Ht?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(C,T,Y){return w(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function S(C){return C===fn||C===kh||C===nc?n.NEAREST:n.LINEAR}function _(C){let T=C.target;T.removeEventListener("dispose",_),x(T),T.isVideoTexture&&c.delete(T)}function R(C){let T=C.target;T.removeEventListener("dispose",R),E(T)}function x(C){let T=i.get(C);if(T.__webglInit===void 0)return;let Y=C.source,pe=h.get(Y);if(pe){let ue=pe[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&b(C),Object.keys(pe).length===0&&h.delete(Y)}i.remove(C)}function b(C){let T=i.get(C);n.deleteTexture(T.__webglTexture);let Y=C.source,pe=h.get(Y);delete pe[T.__cacheKey],o.memory.textures--}function E(C){let T=C.texture,Y=i.get(C),pe=i.get(T);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(Y.__webglFramebuffer[ue]))for(let de=0;de<Y.__webglFramebuffer[ue].length;de++)n.deleteFramebuffer(Y.__webglFramebuffer[ue][de]);else n.deleteFramebuffer(Y.__webglFramebuffer[ue]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[ue])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ue=0;ue<Y.__webglFramebuffer.length;ue++)n.deleteFramebuffer(Y.__webglFramebuffer[ue]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ue=0;ue<Y.__webglColorRenderbuffer.length;ue++)Y.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[ue]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ue=0,de=T.length;ue<de;ue++){let Te=i.get(T[ue]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(T[ue])}i.remove(T),i.remove(C)}let O=0;function q(){O=0}function U(){let C=O;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function P(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function z(C,T){let Y=i.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let pe=C.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Y,C,T);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function H(C,T){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){ce(Y,C,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function W(C,T){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){ce(Y,C,T);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function X(C,T){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){fe(Y,C,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}let te={[is]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Nc]:n.MIRRORED_REPEAT},ae={[fn]:n.NEAREST,[kh]:n.NEAREST_MIPMAP_NEAREST,[nc]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[y0]:n.LINEAR_MIPMAP_NEAREST,[La]:n.LINEAR_MIPMAP_LINEAR},oe={[P0]:n.NEVER,[U0]:n.ALWAYS,[k0]:n.LESS,[vf]:n.LEQUAL,[L0]:n.EQUAL,[z0]:n.GEQUAL,[I0]:n.GREATER,[D0]:n.NOTEQUAL};function K(C,T,Y){if(Y?(n.texParameteri(C,n.TEXTURE_WRAP_S,te[T.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,te[T.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,te[T.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ae[T.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ae[T.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==bi||T.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,S(T.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,S(T.minFilter)),T.minFilter!==fn&&T.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===fn||T.minFilter!==nc&&T.minFilter!==La||T.type===Ss&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Qn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(C,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function se(C,T){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",_));let pe=T.source,ue=h.get(pe);ue===void 0&&(ue={},h.set(pe,ue));let de=P(T);if(de!==C.__cacheKey){ue[de]===void 0&&(ue[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ue[de].usedTimes++;let Te=ue[C.__cacheKey];Te!==void 0&&(ue[C.__cacheKey].usedTimes--,Te.usedTimes===0&&b(T)),C.__cacheKey=de,C.__webglTexture=ue[de].texture}return Y}function ce(C,T,Y){let pe=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=n.TEXTURE_3D);let ue=se(C,T),de=T.source;t.bindTexture(pe,C.__webglTexture,n.TEXTURE0+Y);let Te=i.get(de);if(de.version!==Te.__version||ue===!0){t.activeTexture(n.TEXTURE0+Y);let Se=zt.getPrimaries(zt.workingColorSpace),Ee=T.colorSpace===hn?null:zt.getPrimaries(T.colorSpace),He=T.colorSpace===hn||Se===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let We=p(T)&&m(T.image)===!1,N=v(T.image,We,!1,s.maxTextureSize);N=ke(T,N);let le=m(N)||a,A=r.convert(T.format,T.colorSpace),y=r.convert(T.type),re=k(T.internalFormat,A,y,T.colorSpace,T.isVideoTexture);K(pe,T,le);let $,ne=T.mipmaps,Le=a&&T.isVideoTexture!==!0&&re!==pf,Ae=Te.__version===void 0||ue===!0,_e=I(T,N,le);if(T.isDepthTexture)re=n.DEPTH_COMPONENT,a?T.type===Ss?re=n.DEPTH_COMPONENT32F:T.type===Ms?re=n.DEPTH_COMPONENT24:T.type===er?re=n.DEPTH24_STENCIL8:re=n.DEPTH_COMPONENT16:T.type===Ss&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===tr&&re===n.DEPTH_COMPONENT&&T.type!==mu&&T.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ms,y=r.convert(T.type)),T.format===Jr&&re===n.DEPTH_COMPONENT&&(re=n.DEPTH_STENCIL,T.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=er,y=r.convert(T.type))),Ae&&(Le?t.texStorage2D(n.TEXTURE_2D,1,re,N.width,N.height):t.texImage2D(n.TEXTURE_2D,0,re,N.width,N.height,0,A,y,null));else if(T.isDataTexture)if(ne.length>0&&le){Le&&Ae&&t.texStorage2D(n.TEXTURE_2D,_e,re,ne[0].width,ne[0].height);for(let me=0,V=ne.length;me<V;me++)$=ne[me],Le?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$.width,$.height,A,y,$.data):t.texImage2D(n.TEXTURE_2D,me,re,$.width,$.height,0,A,y,$.data);T.generateMipmaps=!1}else Le?(Ae&&t.texStorage2D(n.TEXTURE_2D,_e,re,N.width,N.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,N.width,N.height,A,y,N.data)):t.texImage2D(n.TEXTURE_2D,0,re,N.width,N.height,0,A,y,N.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Le&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,re,ne[0].width,ne[0].height,N.depth);for(let me=0,V=ne.length;me<V;me++)$=ne[me],T.format!==Mi?A!==null?Le?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$.width,$.height,N.depth,A,$.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,re,$.width,$.height,N.depth,0,$.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,$.width,$.height,N.depth,A,y,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,re,$.width,$.height,N.depth,0,A,y,$.data)}else{Le&&Ae&&t.texStorage2D(n.TEXTURE_2D,_e,re,ne[0].width,ne[0].height);for(let me=0,V=ne.length;me<V;me++)$=ne[me],T.format!==Mi?A!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,$.width,$.height,A,$.data):t.compressedTexImage2D(n.TEXTURE_2D,me,re,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(n.TEXTURE_2D,me,0,0,$.width,$.height,A,y,$.data):t.texImage2D(n.TEXTURE_2D,me,re,$.width,$.height,0,A,y,$.data)}else if(T.isDataArrayTexture)Le?(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,re,N.width,N.height,N.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,A,y,N.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,N.width,N.height,N.depth,0,A,y,N.data);else if(T.isData3DTexture)Le?(Ae&&t.texStorage3D(n.TEXTURE_3D,_e,re,N.width,N.height,N.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,A,y,N.data)):t.texImage3D(n.TEXTURE_3D,0,re,N.width,N.height,N.depth,0,A,y,N.data);else if(T.isFramebufferTexture){if(Ae)if(Le)t.texStorage2D(n.TEXTURE_2D,_e,re,N.width,N.height);else{let me=N.width,V=N.height;for(let he=0;he<_e;he++)t.texImage2D(n.TEXTURE_2D,he,re,me,V,0,A,y,null),me>>=1,V>>=1}}else if(ne.length>0&&le){Le&&Ae&&t.texStorage2D(n.TEXTURE_2D,_e,re,ne[0].width,ne[0].height);for(let me=0,V=ne.length;me<V;me++)$=ne[me],Le?t.texSubImage2D(n.TEXTURE_2D,me,0,0,A,y,$):t.texImage2D(n.TEXTURE_2D,me,re,A,y,$);T.generateMipmaps=!1}else Le?(Ae&&t.texStorage2D(n.TEXTURE_2D,_e,re,N.width,N.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,A,y,N)):t.texImage2D(n.TEXTURE_2D,0,re,A,y,N);w(T,le)&&M(pe),Te.__version=de.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function fe(C,T,Y){if(T.image.length!==6)return;let pe=se(C,T),ue=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);let de=i.get(ue);if(ue.version!==de.__version||pe===!0){t.activeTexture(n.TEXTURE0+Y);let Te=zt.getPrimaries(zt.workingColorSpace),Se=T.colorSpace===hn?null:zt.getPrimaries(T.colorSpace),Ee=T.colorSpace===hn||Te===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let He=T.isCompressedTexture||T.image[0].isCompressedTexture,We=T.image[0]&&T.image[0].isDataTexture,N=[];for(let me=0;me<6;me++)!He&&!We?N[me]=v(T.image[me],!1,!0,s.maxCubemapSize):N[me]=We?T.image[me].image:T.image[me],N[me]=ke(T,N[me]);let le=N[0],A=m(le)||a,y=r.convert(T.format,T.colorSpace),re=r.convert(T.type),$=k(T.internalFormat,y,re,T.colorSpace),ne=a&&T.isVideoTexture!==!0,Le=de.__version===void 0||pe===!0,Ae=I(T,le,A);K(n.TEXTURE_CUBE_MAP,T,A);let _e;if(He){ne&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,$,le.width,le.height);for(let me=0;me<6;me++){_e=N[me].mipmaps;for(let V=0;V<_e.length;V++){let he=_e[V];T.format!==Mi?y!==null?ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,V,0,0,he.width,he.height,y,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,V,$,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,V,0,0,he.width,he.height,y,re,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,V,$,he.width,he.height,0,y,re,he.data)}}}else{_e=T.mipmaps,ne&&Le&&(_e.length>0&&Ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,$,N[0].width,N[0].height));for(let me=0;me<6;me++)if(We){ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,N[me].width,N[me].height,y,re,N[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$,N[me].width,N[me].height,0,y,re,N[me].data);for(let V=0;V<_e.length;V++){let ge=_e[V].image[me].image;ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,V+1,0,0,ge.width,ge.height,y,re,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,V+1,$,ge.width,ge.height,0,y,re,ge.data)}}else{ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,y,re,N[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,$,y,re,N[me]);for(let V=0;V<_e.length;V++){let he=_e[V];ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,V+1,0,0,y,re,he.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,V+1,$,y,re,he.image[me])}}}w(T,A)&&M(n.TEXTURE_CUBE_MAP),de.__version=ue.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Re(C,T,Y,pe,ue,de){let Te=r.convert(Y.format,Y.colorSpace),Se=r.convert(Y.type),Ee=k(Y.internalFormat,Te,Se,Y.colorSpace);if(!i.get(T).__hasExternalTextures){let We=Math.max(1,T.width>>de),N=Math.max(1,T.height>>de);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,de,Ee,We,N,T.depth,0,Te,Se,null):t.texImage2D(ue,de,Ee,We,N,0,Te,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ce(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ue,i.get(Y).__webglTexture,0,ze(T)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ue,i.get(Y).__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(C,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let pe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||Ce(T)){let ue=T.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Ss?pe=n.DEPTH_COMPONENT32F:ue.type===Ms&&(pe=n.DEPTH_COMPONENT24));let de=ze(T);Ce(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,pe,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,de,pe,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,pe,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){let pe=ze(T);Y&&Ce(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,T.width,T.height):Ce(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let pe=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ue=0;ue<pe.length;ue++){let de=pe[ue],Te=r.convert(de.format,de.colorSpace),Se=r.convert(de.type),Ee=k(de.internalFormat,Te,Se,de.colorSpace),He=ze(T);Y&&Ce(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Ee,T.width,T.height):Ce(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,Ee,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);let pe=i.get(T.depthTexture).__webglTexture,ue=ze(T);if(T.depthTexture.format===tr)Ce(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(T.depthTexture.format===Jr)Ce(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Pe(C){let T=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ge(T.__webglFramebuffer,C)}else if(Y){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]=n.createRenderbuffer(),De(T.__webglDepthbuffer[pe],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),De(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(C,T,Y){let pe=i.get(C);T!==void 0&&Re(pe.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Pe(C)}function Z(C){let T=C.texture,Y=i.get(C),pe=i.get(T);C.addEventListener("dispose",R),C.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=T.version,o.memory.textures++);let ue=C.isWebGLCubeRenderTarget===!0,de=C.isWebGLMultipleRenderTargets===!0,Te=m(C)||a;if(ue){Y.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Se]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)Y.__webglFramebuffer[Se][Ee]=n.createFramebuffer()}else Y.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Se=0;Se<T.mipmaps.length;Se++)Y.__webglFramebuffer[Se]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(de)if(s.drawBuffers){let Se=C.texture;for(let Ee=0,He=Se.length;Ee<He;Ee++){let We=i.get(Se[Ee]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ce(C)===!1){let Se=de?T:[T];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ee=0;Ee<Se.length;Ee++){let He=Se[Ee];Y.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee]);let We=r.convert(He.format,He.colorSpace),N=r.convert(He.type),le=k(He.internalFormat,We,N,He.colorSpace,C.isXRRenderTarget===!0),A=ze(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,A,le,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),De(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),K(n.TEXTURE_CUBE_MAP,T,Te);for(let Se=0;Se<6;Se++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)Re(Y.__webglFramebuffer[Se][Ee],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee);else Re(Y.__webglFramebuffer[Se],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);w(T,Te)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){let Se=C.texture;for(let Ee=0,He=Se.length;Ee<He;Ee++){let We=Se[Ee],N=i.get(We);t.bindTexture(n.TEXTURE_2D,N.__webglTexture),K(n.TEXTURE_2D,We,Te),Re(Y.__webglFramebuffer,C,We,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),w(We,Te)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,pe.__webglTexture),K(Se,T,Te),a&&T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)Re(Y.__webglFramebuffer[Ee],C,T,n.COLOR_ATTACHMENT0,Se,Ee);else Re(Y.__webglFramebuffer,C,T,n.COLOR_ATTACHMENT0,Se,0);w(T,Te)&&M(Se),t.unbindTexture()}C.depthBuffer&&Pe(C)}function st(C){let T=m(C)||a,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let pe=0,ue=Y.length;pe<ue;pe++){let de=Y[pe];if(w(de,T)){let Te=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(de).__webglTexture;t.bindTexture(Te,Se),M(Te),t.unbindTexture()}}}function ye(C){if(a&&C.samples>0&&Ce(C)===!1){let T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,pe=C.height,ue=n.COLOR_BUFFER_BIT,de=[],Te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(C),Ee=C.isWebGLMultipleRenderTargets===!0;if(Ee)for(let He=0;He<T.length;He++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let He=0;He<T.length;He++){de.push(n.COLOR_ATTACHMENT0+He),C.depthBuffer&&de.push(Te);let We=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(We===!1&&(C.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),Ee&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[He]),We===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),Ee){let N=i.get(T[He]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,Y,pe,0,0,Y,pe,ue,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let He=0;He<T.length;He++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,Se.__webglColorRenderbuffer[He]);let We=i.get(T[He]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function ze(C){return Math.min(s.maxSamples,C.samples)}function Ce(C){let T=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(C){let T=o.render.frame;c.get(C)!==T&&(c.set(C,T),C.update())}function ke(C,T){let Y=C.colorSpace,pe=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Fc||Y!==ss&&Y!==hn&&(zt.getTransfer(Y)===Ht?a===!1?e.has("EXT_sRGB")===!0&&pe===Mi?(C.format=Fc,C.minFilter=un,C.generateMipmaps=!1):T=ol.sRGBToLinear(T):(pe!==Mi||ue!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=U,this.resetTextureUnits=q,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=$e,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ce}function Ox(n,e,t){let i=t.isWebGL2;function s(r,o=hn){let a,l=zt.getTransfer(o);if(r===zi)return n.UNSIGNED_BYTE;if(r===cf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===uf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===x0)return n.BYTE;if(r===_0)return n.SHORT;if(r===mu)return n.UNSIGNED_SHORT;if(r===lf)return n.INT;if(r===Ms)return n.UNSIGNED_INT;if(r===Ss)return n.FLOAT;if(r===Qn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===b0)return n.ALPHA;if(r===Mi)return n.RGBA;if(r===M0)return n.LUMINANCE;if(r===S0)return n.LUMINANCE_ALPHA;if(r===tr)return n.DEPTH_COMPONENT;if(r===Jr)return n.DEPTH_STENCIL;if(r===Fc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===w0)return n.RED;if(r===hf)return n.RED_INTEGER;if(r===E0)return n.RG;if(r===df)return n.RG_INTEGER;if(r===ff)return n.RGBA_INTEGER;if(r===ic||r===sc||r===rc||r===ac)if(l===Ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lh||r===Ih||r===Dh||r===zh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Lh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ih)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Uh||r===Nh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Uh)return l===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Nh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Oh||r===Fh||r===Bh||r===Hh||r===Vh||r===Gh||r===Wh||r===qh||r===Xh||r===Yh||r===Kh||r===Zh||r===jh||r===Jh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Oh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===oc||r===$h||r===Qh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===oc)return l===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===T0||r===ed||r===td||r===nd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===oc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===er?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Qc=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dn=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fx={type:"move"},ka=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),f=.02,g=.005;u.inputState.pinching&&h>f+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=f-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},eu=class extends Ui{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,f=null,g=null,v=t.getContextAttributes(),m=null,p=null,w=[],M=[],k=new Oe,I=null,S=new mn;S.layers.enable(1),S.viewport=new Ct;let _=new mn;_.layers.enable(2),_.viewport=new Ct;let R=[S,_],x=new Qc;x.layers.enable(1),x.layers.enable(2);let b=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=w[K];return se===void 0&&(se=new ka,w[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=w[K];return se===void 0&&(se=new ka,w[K]=se),se.getGripSpace()},this.getHand=function(K){let se=w[K];return se===void 0&&(se=new ka,w[K]=se),se.getHandSpace()};function O(K){let se=M.indexOf(K.inputSource);if(se===-1)return;let ce=w[se];ce!==void 0&&(ce.update(K.inputSource,K.frame,u||o),ce.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",U);for(let K=0;K<w.length;K++){let se=M[K];se!==null&&(M[K]=null,w[K].disconnect(se))}b=null,E=null,e.setRenderTarget(m),f=null,h=null,d=null,s=null,p=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",q),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let se={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new gn(f.framebufferWidth,f.framebufferHeight,{format:Mi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let se=null,ce=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?Jr:tr,ce=v.stencil?er:Ms);let Re={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Re),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new gn(h.textureWidth,h.textureHeight,{format:Mi,type:zi,depthTexture:new gl(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let De=e.properties.get(p);De.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(K){for(let se=0;se<K.removed.length;se++){let ce=K.removed[se],fe=M.indexOf(ce);fe>=0&&(M[fe]=null,w[fe].disconnect(ce))}for(let se=0;se<K.added.length;se++){let ce=K.added[se],fe=M.indexOf(ce);if(fe===-1){for(let De=0;De<w.length;De++)if(De>=M.length){M.push(ce),fe=De;break}else if(M[De]===null){M[De]=ce,fe=De;break}if(fe===-1)break}let Re=w[fe];Re&&Re.connect(ce)}}let P=new B,z=new B;function H(K,se,ce){P.setFromMatrixPosition(se.matrixWorld),z.setFromMatrixPosition(ce.matrixWorld);let fe=P.distanceTo(z),Re=se.projectionMatrix.elements,De=ce.projectionMatrix.elements,Ge=Re[14]/(Re[10]-1),Pe=Re[14]/(Re[10]+1),$e=(Re[9]+1)/Re[5],Z=(Re[9]-1)/Re[5],st=(Re[8]-1)/Re[0],ye=(De[8]+1)/De[0],ze=Ge*st,Ce=Ge*ye,Ke=fe/(-st+ye),ke=Ke*-st;se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ke),K.translateZ(Ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let C=Ge+Ke,T=Pe+Ke,Y=ze-ke,pe=Ce+(fe-ke),ue=$e*Pe/T*C,de=Z*Pe/T*C;K.projectionMatrix.makePerspective(Y,pe,ue,de,C,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function W(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;x.near=_.near=S.near=K.near,x.far=_.far=S.far=K.far,(b!==x.near||E!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,E=x.far);let se=K.parent,ce=x.cameras;W(x,se);for(let fe=0;fe<ce.length;fe++)W(ce[fe],se);ce.length===2?H(x,S,_):x.projectionMatrix.copy(S.projectionMatrix),X(K,x,se)};function X(K,se,ce){ce===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ia*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)};let te=null;function ae(K,se){if(c=se.getViewerPose(u||o),g=se,c!==null){let ce=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let fe=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,fe=!0);for(let Re=0;Re<ce.length;Re++){let De=ce[Re],Ge=null;if(f!==null)Ge=f.getViewport(De);else{let $e=d.getViewSubImage(h,De);Ge=$e.viewport,Re===0&&(e.setRenderTargetTextures(p,$e.colorTexture,h.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(p))}let Pe=R[Re];Pe===void 0&&(Pe=new mn,Pe.layers.enable(Re),Pe.viewport=new Ct,R[Re]=Pe),Pe.matrix.fromArray(De.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(De.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Re===0&&(x.matrix.copy(Pe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),fe===!0&&x.cameras.push(Pe)}}for(let ce=0;ce<w.length;ce++){let fe=M[ce],Re=w[ce];fe!==null&&Re!==void 0&&Re.update(fe,se,u||o)}te&&te(K,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let oe=new bf;oe.setAnimationLoop(ae),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}};function Bx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_f(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,k){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,k)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let M=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*M,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hx(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,M){let k=M.program;i.uniformBlockBinding(w,k)}function u(w,M){let k=s[w.id];k===void 0&&(g(w),k=c(w),s[w.id]=k,w.addEventListener("dispose",m));let I=M.program;i.updateUBOMapping(w,I);let S=e.render.frame;r[w.id]!==S&&(h(w),r[w.id]=S)}function c(w){let M=d();w.__bindingPointIndex=M;let k=n.createBuffer(),I=w.__size,S=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,k),n.bufferData(n.UNIFORM_BUFFER,I,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,k),k}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){let M=s[w.id],k=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let S=0,_=k.length;S<_;S++){let R=Array.isArray(k[S])?k[S]:[k[S]];for(let x=0,b=R.length;x<b;x++){let E=R[x];if(f(E,S,x,I)===!0){let O=E.__offset,q=Array.isArray(E.value)?E.value:[E.value],U=0;for(let P=0;P<q.length;P++){let z=q[P],H=v(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,O+U,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,U),U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,M,k,I){let S=w.value,_=M+"_"+k;if(I[_]===void 0)return typeof S=="number"||typeof S=="boolean"?I[_]=S:I[_]=S.clone(),!0;{let R=I[_];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return I[_]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(w){let M=w.uniforms,k=0,I=16;for(let _=0,R=M.length;_<R;_++){let x=Array.isArray(M[_])?M[_]:[M[_]];for(let b=0,E=x.length;b<E;b++){let O=x[b],q=Array.isArray(O.value)?O.value:[O.value];for(let U=0,P=q.length;U<P;U++){let z=q[U],H=v(z),W=k%I;W!==0&&I-W<H.boundary&&(k+=I-W),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=k,k+=H.storage}}}let S=k%I;return S>0&&(k+=I-S),w.__size=k,w.__cache={},this}function v(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){let M=w.target;M.removeEventListener("dispose",m);let k=o.indexOf(M.__bindingPointIndex);o.splice(k,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:u,dispose:p}}var Oi=class{constructor(e={}){let{canvas:t=J0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this._useLegacyLights=!1,this.toneMapping=ws,this.toneMappingExposure=1;let M=this,k=!1,I=0,S=0,_=null,R=-1,x=null,b=new Ct,E=new Ct,O=null,q=new ot(0),U=0,P=t.width,z=t.height,H=1,W=null,X=null,te=new Ct(0,0,P,z),ae=new Ct(0,0,P,z),oe=!1,K=new pl,se=!1,ce=!1,fe=null,Re=new sn,De=new Oe,Ge=new B,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return _===null?H:1}let Z=i;function st(L,j){for(let Q=0;Q<L.length;Q++){let ee=L[Q],J=t.getContext(ee,j);if(J!==null)return J}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",he,!1),Z===null){let j=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&j.shift(),Z=st(j,L),Z===null)throw st(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ye,ze,Ce,Ke,ke,C,T,Y,pe,ue,de,Te,Se,Ee,He,We,N,le,A,y,re,$,ne,Le;function Ae(){ye=new ay(Z),ze=new ey(Z,ye,e),ye.init(ze),$=new Ox(Z,ye,ze),Ce=new Ux(Z,ye,ze),Ke=new cy(Z),ke=new wx,C=new Nx(Z,ye,Ce,ke,ze,$,Ke),T=new ny(M),Y=new ry(M),pe=new vg(Z,ze),ne=new $1(Z,ye,pe,ze),ue=new oy(Z,pe,Ke,ne),de=new fy(Z,ue,pe,Ke),A=new dy(Z,ze,C),We=new ty(ke),Te=new Sx(M,T,Y,ye,ze,ne,We),Se=new Bx(M,ke),Ee=new Tx,He=new Lx(ye,ze),le=new J1(M,T,Y,Ce,de,h,l),N=new zx(M,de,ze),Le=new Hx(Z,Ke,ze,Ce),y=new Q1(Z,ye,Ke,ze),re=new ly(Z,ye,Ke,ze),Ke.programs=Te.programs,M.capabilities=ze,M.extensions=ye,M.properties=ke,M.renderLists=Ee,M.shadowMap=N,M.state=Ce,M.info=Ke}Ae();let _e=new eu(M,Z);this.xr=_e,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let L=ye.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=ye.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(P,z,!1))},this.getSize=function(L){return L.set(P,z)},this.setSize=function(L,j,Q=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=L,z=j,t.width=Math.floor(L*H),t.height=Math.floor(j*H),Q===!0&&(t.style.width=L+"px",t.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(P*H,z*H).floor()},this.setDrawingBufferSize=function(L,j,Q){P=L,z=j,H=Q,t.width=Math.floor(L*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(b)},this.getViewport=function(L){return L.copy(te)},this.setViewport=function(L,j,Q,ee){L.isVector4?te.set(L.x,L.y,L.z,L.w):te.set(L,j,Q,ee),Ce.viewport(b.copy(te).multiplyScalar(H).floor())},this.getScissor=function(L){return L.copy(ae)},this.setScissor=function(L,j,Q,ee){L.isVector4?ae.set(L.x,L.y,L.z,L.w):ae.set(L,j,Q,ee),Ce.scissor(E.copy(ae).multiplyScalar(H).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(L){Ce.setScissorTest(oe=L)},this.setOpaqueSort=function(L){W=L},this.setTransparentSort=function(L){X=L},this.getClearColor=function(L){return L.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(L=!0,j=!0,Q=!0){let ee=0;if(L){let J=!1;if(_!==null){let Ne=_.texture.format;J=Ne===ff||Ne===df||Ne===hf}if(J){let Ne=_.texture.type,Ze=Ne===zi||Ne===Ms||Ne===mu||Ne===er||Ne===cf||Ne===uf,Qe=le.getClearColor(),je=le.getClearAlpha(),ct=Qe.r,it=Qe.g,nt=Qe.b;Ze?(f[0]=ct,f[1]=it,f[2]=nt,f[3]=je,Z.clearBufferuiv(Z.COLOR,0,f)):(g[0]=ct,g[1]=it,g[2]=nt,g[3]=je,Z.clearBufferiv(Z.COLOR,0,g))}else ee|=Z.COLOR_BUFFER_BIT}j&&(ee|=Z.DEPTH_BUFFER_BIT),Q&&(ee|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ee.dispose(),He.dispose(),ke.dispose(),T.dispose(),Y.dispose(),de.dispose(),ne.dispose(),Le.dispose(),Te.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",rt),_e.removeEventListener("sessionend",et),fe&&(fe.dispose(),fe=null),Fe.stop()};function me(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let L=Ke.autoReset,j=N.enabled,Q=N.autoUpdate,ee=N.needsUpdate,J=N.type;Ae(),Ke.autoReset=L,N.enabled=j,N.autoUpdate=Q,N.needsUpdate=ee,N.type=J}function he(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ge(L){let j=L.target;j.removeEventListener("dispose",ge),Ie(j)}function Ie(L){xe(L),ke.remove(L)}function xe(L){let j=ke.get(L).programs;j!==void 0&&(j.forEach(function(Q){Te.releaseProgram(Q)}),L.isShaderMaterial&&Te.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,Q,ee,J,Ne){j===null&&(j=Pe);let Ze=J.isMesh&&J.matrixWorld.determinant()<0,Qe=yn(L,j,Q,ee,J);Ce.setMaterial(ee,Ze);let je=Q.index,ct=1;if(ee.wireframe===!0){if(je=ue.getWireframeAttribute(Q),je===void 0)return;ct=2}let it=Q.drawRange,nt=Q.attributes.position,Lt=it.start*ct,qt=(it.start+it.count)*ct;Ne!==null&&(Lt=Math.max(Lt,Ne.start*ct),qt=Math.min(qt,(Ne.start+Ne.count)*ct)),je!==null?(Lt=Math.max(Lt,0),qt=Math.min(qt,je.count)):nt!=null&&(Lt=Math.max(Lt,0),qt=Math.min(qt,nt.count));let Rt=qt-Lt;if(Rt<0||Rt===1/0)return;ne.setup(J,ee,Qe,Q,je);let Yt,wt=y;if(je!==null&&(Yt=pe.get(je),wt=re,wt.setIndex(Yt)),J.isMesh)ee.wireframe===!0?(Ce.setLineWidth(ee.wireframeLinewidth*$e()),wt.setMode(Z.LINES)):wt.setMode(Z.TRIANGLES);else if(J.isLine){let dt=ee.linewidth;dt===void 0&&(dt=1),Ce.setLineWidth(dt*$e()),J.isLineSegments?wt.setMode(Z.LINES):J.isLineLoop?wt.setMode(Z.LINE_LOOP):wt.setMode(Z.LINE_STRIP)}else J.isPoints?wt.setMode(Z.POINTS):J.isSprite&&wt.setMode(Z.TRIANGLES);if(J.isBatchedMesh)wt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)wt.renderInstances(Lt,Rt,J.count);else if(Q.isInstancedBufferGeometry){let dt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ki=Math.min(Q.instanceCount,dt);wt.renderInstances(Lt,Rt,Ki)}else wt.render(Lt,Rt)};function be(L,j,Q){L.transparent===!0&&L.side===wn&&L.forceSinglePass===!1?(L.side=nn,L.needsUpdate=!0,Zn(L,j,Q),L.side=Es,L.needsUpdate=!0,Zn(L,j,Q),L.side=wn):Zn(L,j,Q)}this.compile=function(L,j,Q=null){Q===null&&(Q=L),m=He.get(Q),m.init(),w.push(m),Q.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),L!==Q&&L.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(M._useLegacyLights);let ee=new Set;return L.traverse(function(J){let Ne=J.material;if(Ne)if(Array.isArray(Ne))for(let Ze=0;Ze<Ne.length;Ze++){let Qe=Ne[Ze];be(Qe,Q,J),ee.add(Qe)}else be(Ne,Q,J),ee.add(Ne)}),w.pop(),m=null,ee},this.compileAsync=function(L,j,Q=null){let ee=this.compile(L,j,Q);return new Promise(J=>{function Ne(){if(ee.forEach(function(Ze){ke.get(Ze).currentProgram.isReady()&&ee.delete(Ze)}),ee.size===0){J(L);return}setTimeout(Ne,10)}ye.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Xe=null;function tt(L){Xe&&Xe(L)}function rt(){Fe.stop()}function et(){Fe.start()}let Fe=new bf;Fe.setAnimationLoop(tt),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(L){Xe=L,_e.setAnimationLoop(L),L===null?Fe.stop():Fe.start()},_e.addEventListener("sessionstart",rt),_e.addEventListener("sessionend",et),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(j),j=_e.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,j,_),m=He.get(L,w.length),m.init(),w.push(m),Re.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K.setFromProjectionMatrix(Re),ce=this.localClippingEnabled,se=We.init(this.clippingPlanes,ce),v=Ee.get(L,p.length),v.init(),p.push(v),Mt(L,j,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(W,X),this.info.render.frame++,se===!0&&We.beginShadows();let Q=m.state.shadowsArray;if(N.render(Q,L,j),se===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(v,L),m.setupLights(M._useLegacyLights),j.isArrayCamera){let ee=j.cameras;for(let J=0,Ne=ee.length;J<Ne;J++){let Ze=ee[J];At(v,L,Ze,Ze.viewport)}}else At(v,L,j);_!==null&&(C.updateMultisampleRenderTarget(_),C.updateRenderTargetMipmap(_)),L.isScene===!0&&L.onAfterRender(M,L,j),ne.resetDefaultState(),R=-1,x=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Mt(L,j,Q,ee){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||K.intersectsSprite(L)){ee&&Ge.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Re);let Ze=de.update(L),Qe=L.material;Qe.visible&&v.push(L,Ze,Qe,Q,Ge.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||K.intersectsObject(L))){let Ze=de.update(L),Qe=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ge.copy(L.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Ge.copy(Ze.boundingSphere.center)),Ge.applyMatrix4(L.matrixWorld).applyMatrix4(Re)),Array.isArray(Qe)){let je=Ze.groups;for(let ct=0,it=je.length;ct<it;ct++){let nt=je[ct],Lt=Qe[nt.materialIndex];Lt&&Lt.visible&&v.push(L,Ze,Lt,Q,Ge.z,nt)}}else Qe.visible&&v.push(L,Ze,Qe,Q,Ge.z,null)}}let Ne=L.children;for(let Ze=0,Qe=Ne.length;Ze<Qe;Ze++)Mt(Ne[Ze],j,Q,ee)}function At(L,j,Q,ee){let J=L.opaque,Ne=L.transmissive,Ze=L.transparent;m.setupLightsView(Q),se===!0&&We.setGlobalState(M.clippingPlanes,Q),Ne.length>0&&di(J,Ne,j,Q),ee&&Ce.viewport(b.copy(ee)),J.length>0&&gt(J,j,Q),Ne.length>0&&gt(Ne,j,Q),Ze.length>0&&gt(Ze,j,Q),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function di(L,j,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Ne=ze.isWebGL2;fe===null&&(fe=new gn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Qn:zi,minFilter:La,samples:Ne?4:0})),M.getDrawingBufferSize(De),Ne?fe.setSize(De.x,De.y):fe.setSize(al(De.x),al(De.y));let Ze=M.getRenderTarget();M.setRenderTarget(fe),M.getClearColor(q),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear();let Qe=M.toneMapping;M.toneMapping=ws,gt(L,Q,ee),C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe);let je=!1;for(let ct=0,it=j.length;ct<it;ct++){let nt=j[ct],Lt=nt.object,qt=nt.geometry,Rt=nt.material,Yt=nt.group;if(Rt.side===wn&&Lt.layers.test(ee.layers)){let wt=Rt.side;Rt.side=nn,Rt.needsUpdate=!0,Kn(Lt,Q,ee,qt,Rt,Yt),Rt.side=wt,Rt.needsUpdate=!0,je=!0}}je===!0&&(C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe)),M.setRenderTarget(Ze),M.setClearColor(q,U),M.toneMapping=Qe}function gt(L,j,Q){let ee=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Ne=L.length;J<Ne;J++){let Ze=L[J],Qe=Ze.object,je=Ze.geometry,ct=ee===null?Ze.material:ee,it=Ze.group;Qe.layers.test(Q.layers)&&Kn(Qe,j,Q,je,ct,it)}}function Kn(L,j,Q,ee,J,Ne){L.onBeforeRender(M,j,Q,ee,J,Ne),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(M,j,Q,ee,L,Ne),J.transparent===!0&&J.side===wn&&J.forceSinglePass===!1?(J.side=nn,J.needsUpdate=!0,M.renderBufferDirect(Q,j,ee,J,L,Ne),J.side=Es,J.needsUpdate=!0,M.renderBufferDirect(Q,j,ee,J,L,Ne),J.side=wn):M.renderBufferDirect(Q,j,ee,J,L,Ne),L.onAfterRender(M,j,Q,ee,J,Ne)}function Zn(L,j,Q){j.isScene!==!0&&(j=Pe);let ee=ke.get(L),J=m.state.lights,Ne=m.state.shadowsArray,Ze=J.state.version,Qe=Te.getParameters(L,J.state,Ne,j,Q),je=Te.getProgramCacheKey(Qe),ct=ee.programs;ee.environment=L.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(L.isMeshStandardMaterial?Y:T).get(L.envMap||ee.environment),ct===void 0&&(L.addEventListener("dispose",ge),ct=new Map,ee.programs=ct);let it=ct.get(je);if(it!==void 0){if(ee.currentProgram===it&&ee.lightsStateVersion===Ze)return Pn(L,Qe),it}else Qe.uniforms=Te.getUniforms(L),L.onBuild(Q,Qe,M),L.onBeforeCompile(Qe,M),it=Te.acquireProgram(Qe,je),ct.set(je,it),ee.uniforms=Qe.uniforms;let nt=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(nt.clippingPlanes=We.uniform),Pn(L,Qe),ee.needsLights=xn(L),ee.lightsStateVersion=Ze,ee.needsLights&&(nt.ambientLightColor.value=J.state.ambient,nt.lightProbe.value=J.state.probe,nt.directionalLights.value=J.state.directional,nt.directionalLightShadows.value=J.state.directionalShadow,nt.spotLights.value=J.state.spot,nt.spotLightShadows.value=J.state.spotShadow,nt.rectAreaLights.value=J.state.rectArea,nt.ltc_1.value=J.state.rectAreaLTC1,nt.ltc_2.value=J.state.rectAreaLTC2,nt.pointLights.value=J.state.point,nt.pointLightShadows.value=J.state.pointShadow,nt.hemisphereLights.value=J.state.hemi,nt.directionalShadowMap.value=J.state.directionalShadowMap,nt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,nt.spotShadowMap.value=J.state.spotShadowMap,nt.spotLightMatrix.value=J.state.spotLightMatrix,nt.spotLightMap.value=J.state.spotLightMap,nt.pointShadowMap.value=J.state.pointShadowMap,nt.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.currentProgram=it,ee.uniformsList=null,it}function fi(L){if(L.uniformsList===null){let j=L.currentProgram.getUniforms();L.uniformsList=Kr.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function Pn(L,j){let Q=ke.get(L);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function yn(L,j,Q,ee,J){j.isScene!==!0&&(j=Pe),C.resetTextureUnits();let Ne=j.fog,Ze=ee.isMeshStandardMaterial?j.environment:null,Qe=_===null?M.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:ss,je=(ee.isMeshStandardMaterial?Y:T).get(ee.envMap||Ze),ct=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,it=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),nt=!!Q.morphAttributes.position,Lt=!!Q.morphAttributes.normal,qt=!!Q.morphAttributes.color,Rt=ws;ee.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Rt=M.toneMapping);let Yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,wt=Yt!==void 0?Yt.length:0,dt=ke.get(ee),Ki=m.state.lights;if(se===!0&&(ce===!0||L!==x)){let Kt=L===x&&ee.id===R;We.setState(ee,L,Kt)}let It=!1;ee.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Ki.state.version||dt.outputColorSpace!==Qe||J.isBatchedMesh&&dt.batching===!1||!J.isBatchedMesh&&dt.batching===!0||J.isInstancedMesh&&dt.instancing===!1||!J.isInstancedMesh&&dt.instancing===!0||J.isSkinnedMesh&&dt.skinning===!1||!J.isSkinnedMesh&&dt.skinning===!0||J.isInstancedMesh&&dt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&dt.instancingColor===!1&&J.instanceColor!==null||dt.envMap!==je||ee.fog===!0&&dt.fog!==Ne||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==We.numPlanes||dt.numIntersection!==We.numIntersection)||dt.vertexAlphas!==ct||dt.vertexTangents!==it||dt.morphTargets!==nt||dt.morphNormals!==Lt||dt.morphColors!==qt||dt.toneMapping!==Rt||ze.isWebGL2===!0&&dt.morphTargetsCount!==wt)&&(It=!0):(It=!0,dt.__version=ee.version);let _n=dt.currentProgram;It===!0&&(_n=Zn(ee,j,J));let ms=!1,kn=!1,pi=!1,Vt=_n.getUniforms(),Ln=dt.uniforms;if(Ce.useProgram(_n.program)&&(ms=!0,kn=!0,pi=!0),ee.id!==R&&(R=ee.id,kn=!0),ms||x!==L){Vt.setValue(Z,"projectionMatrix",L.projectionMatrix),Vt.setValue(Z,"viewMatrix",L.matrixWorldInverse);let Kt=Vt.map.cameraPosition;Kt!==void 0&&Kt.setValue(Z,Ge.setFromMatrixPosition(L.matrixWorld)),ze.logarithmicDepthBuffer&&Vt.setValue(Z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Vt.setValue(Z,"isOrthographic",L.isOrthographicCamera===!0),x!==L&&(x=L,kn=!0,pi=!0)}if(J.isSkinnedMesh){Vt.setOptional(Z,J,"bindMatrix"),Vt.setOptional(Z,J,"bindMatrixInverse");let Kt=J.skeleton;Kt&&(ze.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Vt.setValue(Z,"boneTexture",Kt.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Vt.setOptional(Z,J,"batchingTexture"),Vt.setValue(Z,"batchingTexture",J._matricesTexture,C));let jn=Q.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0&&ze.isWebGL2===!0)&&A.update(J,Q,_n),(kn||dt.receiveShadow!==J.receiveShadow)&&(dt.receiveShadow=J.receiveShadow,Vt.setValue(Z,"receiveShadow",J.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ln.envMap.value=je,Ln.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),kn&&(Vt.setValue(Z,"toneMappingExposure",M.toneMappingExposure),dt.needsLights&&Wt(Ln,pi),Ne&&ee.fog===!0&&Se.refreshFogUniforms(Ln,Ne),Se.refreshMaterialUniforms(Ln,ee,H,z,fe),Kr.upload(Z,fi(dt),Ln,C)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Kr.upload(Z,fi(dt),Ln,C),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Vt.setValue(Z,"center",J.center),Vt.setValue(Z,"modelViewMatrix",J.modelViewMatrix),Vt.setValue(Z,"normalMatrix",J.normalMatrix),Vt.setValue(Z,"modelMatrix",J.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let Kt=ee.uniformsGroups;for(let Ws=0,xa=Kt.length;Ws<xa;Ws++)if(ze.isWebGL2){let _r=Kt[Ws];Le.update(_r,_n),Le.bind(_r,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function Wt(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function xn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(L,j,Q){ke.get(L.texture).__webglTexture=j,ke.get(L.depthTexture).__webglTexture=Q;let ee=ke.get(L);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,j){let Q=ke.get(L);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,Q=0){_=L,I=j,S=Q;let ee=!0,J=null,Ne=!1,Ze=!1;if(L){let je=ke.get(L);je.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(Z.FRAMEBUFFER,null),ee=!1):je.__webglFramebuffer===void 0?C.setupRenderTarget(L):je.__hasExternalTextures&&C.rebindTextures(L,ke.get(L.texture).__webglTexture,ke.get(L.depthTexture).__webglTexture);let ct=L.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ze=!0);let it=ke.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(it[j])?J=it[j][Q]:J=it[j],Ne=!0):ze.isWebGL2&&L.samples>0&&C.useMultisampledRTT(L)===!1?J=ke.get(L).__webglMultisampledFramebuffer:Array.isArray(it)?J=it[Q]:J=it,b.copy(L.viewport),E.copy(L.scissor),O=L.scissorTest}else b.copy(te).multiplyScalar(H).floor(),E.copy(ae).multiplyScalar(H).floor(),O=oe;if(Ce.bindFramebuffer(Z.FRAMEBUFFER,J)&&ze.drawBuffers&&ee&&Ce.drawBuffers(L,J),Ce.viewport(b),Ce.scissor(E),Ce.setScissorTest(O),Ne){let je=ke.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+j,je.__webglTexture,Q)}else if(Ze){let je=ke.get(L.texture),ct=j||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,je.__webglTexture,Q||0,ct)}R=-1},this.readRenderTargetPixels=function(L,j,Q,ee,J,Ne,Ze){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=ke.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ze!==void 0&&(Qe=Qe[Ze]),Qe){Ce.bindFramebuffer(Z.FRAMEBUFFER,Qe);try{let je=L.texture,ct=je.format,it=je.type;if(ct!==Mi&&$.convert(ct)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let nt=it===Qn&&(ye.has("EXT_color_buffer_half_float")||ze.isWebGL2&&ye.has("EXT_color_buffer_float"));if(it!==zi&&$.convert(it)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Ss&&(ze.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-ee&&Q>=0&&Q<=L.height-J&&Z.readPixels(j,Q,ee,J,$.convert(ct),$.convert(it),Ne)}finally{let je=_!==null?ke.get(_).__webglFramebuffer:null;Ce.bindFramebuffer(Z.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(L,j,Q=0){let ee=Math.pow(2,-Q),J=Math.floor(j.image.width*ee),Ne=Math.floor(j.image.height*ee);C.setTexture2D(j,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,Q,0,0,L.x,L.y,J,Ne),Ce.unbindTexture()},this.copyTextureToTexture=function(L,j,Q,ee=0){let J=j.image.width,Ne=j.image.height,Ze=$.convert(Q.format),Qe=$.convert(Q.type);C.setTexture2D(Q,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ee,L.x,L.y,J,Ne,Ze,Qe,j.image.data):j.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ee,L.x,L.y,j.mipmaps[0].width,j.mipmaps[0].height,Ze,j.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ee,L.x,L.y,Ze,Qe,j.image),ee===0&&Q.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(L,j,Q,ee,J=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=L.max.x-L.min.x+1,Ze=L.max.y-L.min.y+1,Qe=L.max.z-L.min.z+1,je=$.convert(ee.format),ct=$.convert(ee.type),it;if(ee.isData3DTexture)C.setTexture3D(ee,0),it=Z.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)C.setTexture2DArray(ee,0),it=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ee.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ee.unpackAlignment);let nt=Z.getParameter(Z.UNPACK_ROW_LENGTH),Lt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),qt=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Rt=Z.getParameter(Z.UNPACK_SKIP_ROWS),Yt=Z.getParameter(Z.UNPACK_SKIP_IMAGES),wt=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,wt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,wt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,L.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,L.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,L.min.z),Q.isDataTexture||Q.isData3DTexture?Z.texSubImage3D(it,J,j.x,j.y,j.z,Ne,Ze,Qe,je,ct,wt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(it,J,j.x,j.y,j.z,Ne,Ze,Qe,je,wt.data)):Z.texSubImage3D(it,J,j.x,j.y,j.z,Ne,Ze,Qe,je,ct,wt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,nt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Lt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,qt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Rt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Yt),J===0&&ee.generateMipmaps&&Z.generateMipmap(it),Ce.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?C.setTextureCube(L,0):L.isData3DTexture?C.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?C.setTexture2DArray(L,0):C.setTexture2D(L,0),Ce.unbindTexture()},this.resetState=function(){I=0,S=0,_=null,Ce.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gu?"display-p3":"srgb",t.unpackColorSpace=zt.workingColorSpace===bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pn?nr:mf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===nr?pn:ss}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},tu=class extends Oi{};tu.prototype.isWebGL1Renderer=!0;var Fi=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},nu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},In=new B,vl=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ei=class extends Ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Ea=new B,Hr=new B,Vr=new B,Gr=new Oe,Ta=new Oe,Af=new sn,Xo=new B,Aa=new B,Yo=new B,Xd=new Oe,kc=new Oe,Yd=new Oe,oi=class extends En{constructor(e=new ei){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new nu(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new vl(i,3,0,!1)),Br.setAttribute("uv",new vl(i,2,3,!1))}this.geometry=Br,this.material=e,this.center=new Oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),Af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Vr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ko(Xo.set(-.5,-.5,0),Vr,o,Hr,s,r),Ko(Aa.set(.5,-.5,0),Vr,o,Hr,s,r),Ko(Yo.set(.5,.5,0),Vr,o,Hr,s,r),Xd.set(0,0),kc.set(1,0),Yd.set(1,1);let a=e.ray.intersectTriangle(Xo,Aa,Yo,!1,Ea);if(a===null&&(Ko(Aa.set(-.5,.5,0),Vr,o,Hr,s,r),kc.set(0,1),a=e.ray.intersectTriangle(Xo,Yo,Aa,!1,Ea),a===null))return;let l=e.ray.origin.distanceTo(Ea);l<e.near||l>e.far||t.push({distance:l,point:Ea.clone(),uv:Qs.getInterpolation(Ea,Xo,Aa,Yo,Xd,kc,Yd,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ko(n,e,t,i,s,r){Gr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ta.x=r*Gr.x-s*Gr.y,Ta.y=s*Gr.x+r*Gr.y):Ta.copy(Gr),n.copy(e),n.x+=Ta.x,n.y+=Ta.y,n.applyMatrix4(Af)}var ta=class extends Bn{constructor(e=null,t=1,i=1,s,r,o,a,l,u=fn,c=fn,d,h){super(null,o,a,l,u,c,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kd=new B,Zd=new B,jd=new sn,Lc=new Ts,Zo=new rs,Bi=class extends En{constructor(e=new Pt,t=new Vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Kd.fromBufferAttribute(t,s-1),Zd.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Kd.distanceTo(Zd);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;jd.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new B,c=new B,d=new B,h=new B,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let M=p,k=w-1;M<k;M+=f){let I=g.getX(M),S=g.getX(M+1);if(u.fromBufferAttribute(m,I),c.fromBufferAttribute(m,S),Lc.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),w=Math.min(m.count,o.start+o.count);for(let M=p,k=w-1;M<k;M+=f){if(u.fromBufferAttribute(m,M),c.fromBufferAttribute(m,M+1),Lc.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Jd=new B,$d=new B,na=class extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Jd.fromBufferAttribute(t,s),$d.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Jd.distanceTo($d);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sr=class extends Ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qd=new sn,iu=new Ts,jo=new rs,Jo=new B,Si=class extends En{constructor(e=new Pt,t=new sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;Qd.copy(s).invert(),iu.copy(e.ray).applyMatrix4(Qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=h,v=f;g<v;g++){let m=u.getX(g);Jo.fromBufferAttribute(d,m),ef(Jo,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,v=f;g<v;g++)Jo.fromBufferAttribute(d,g),ef(Jo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ef(n,e,t,i,s,r,o){let a=iu.distanceSqToPoint(n);if(a<t){let l=new B;iu.closestPointToPoint(n,l),l.applyMatrix4(i);let u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Rs=class extends Bn{constructor(e,t,i,s,r,o,a,l,u){super(e,t,i,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class n extends Pt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],u=[],c=[],d=e,h=(t-e)/s,f=new B,g=new Oe;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),u.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,c.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let w=p+m,M=w,k=w+i+1,I=w+i+2,S=w+1;a.push(M,k,S),a.push(k,I,S)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var zn=class n extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),u=0,c=[],d=new B,h=new B,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let w=[],M=p/i,k=0;p===0&&o===0?k=.5/t:p===i&&l===Math.PI&&(k=-.5/t);for(let I=0;I<=t;I++){let S=I/t;d.x=-e*Math.cos(s+S*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+S*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(S+k,1-M),w.push(u++)}c.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){let M=c[p][w+1],k=c[p][w],I=c[p+1][w],S=c[p+1][w+1];(p!==0||o>0)&&f.push(M,k,S),(p!==i-1||l<Math.PI)&&f.push(k,I,S)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yl=class extends Ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $o(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ia=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},su=class extends ia{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:id,endingEnd:id}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sd:r=e,a=2*t-i;break;case rd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sd:o=e,l=2*i-t;break;case rd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,w=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,k=f*m-f*v;for(let I=0;I!==a;++I)r[I]=p*o[c+I]+w*o[u+I]+M*o[l+I]+k*o[d+I];return r}},ru=class extends ia{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(s-t),d=1-c;for(let h=0;h!==a;++h)r[h]=o[u+h]*d+o[l+h]*c;return r}},au=class extends ia{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new su(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case el:t=this.InterpolantFactoryMethodDiscrete;break;case tl:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return el;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Vx(s))for(let a=0,l=s.length;a!==l;++a){let u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=tl;var rr=class extends wi{};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=el;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var ou=class extends wi{};ou.prototype.ValueTypeName="color";var lu=class extends wi{};lu.prototype.ValueTypeName="number";var cu=class extends ia{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),u=e*a;for(let c=u+a;u!==c;u+=4)rn.slerpFlat(r,0,o,u-a,o,u,l);return r}},Na=class extends wi{InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.DefaultInterpolation=tl;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends wi{};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=el;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var uu=class extends wi{};uu.prototype.ValueTypeName="vector";var tf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},hu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){let d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){let f=u[d],g=u[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},Gx=new hu,Oa=class{constructor(e){this.manager=e!==void 0?e:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var du=class extends Oa{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=tf.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Da("img");function l(){c(),tf.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(d){c(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Cs=class extends Oa{constructor(e){super(e)}load(e,t,i,s){let r=new Bn,o=new du(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}};var xl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function nf(){return(typeof performance>"u"?Date:performance).now()}var xu="\\[\\]\\.:\\/",Wx=new RegExp("["+xu+"]","g"),_u="[^"+xu+"]",qx="[^"+xu.replace("\\.","")+"]",Xx=/((?:WC+[\/:])*)/.source.replace("WC",_u),Yx=/(WCOD+)?/.source.replace("WCOD",qx),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),jx=new RegExp("^"+Xx+Yx+Kx+Zx+"$"),Jx=["material","materials","bones","map"],fu=class{constructor(e,t,i){let s=i||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(e){let t=jx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Jx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=fu;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r2=new Float32Array(1);var sa=class{constructor(e,t,i=0,s=1/0){this.ray=new Ts(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return pu(e,this,i,t),i.sort(sf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)pu(e[s],this,i,t);return i.sort(sf),i}};function sf(n,e){return n.distance-e.distance}function pu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)pu(s[r],e,t,!0)}}var Fa=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Sl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$x=new As(-1,1,1,-1,0,1),bu=class extends Pt{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}},Qx=new bu,oa=class{constructor(e){this._mesh=new _t(Qx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$x)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var cr=class extends Ei{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ra.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new oa(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ha=class extends Ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wl=class extends Ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var El=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Oe);this._width=i.width,this._height=i.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cr(Sl),this.copyPass.material.blending=Di,this.clock=new xl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ha!==void 0&&(o instanceof Ha?i=!0:o instanceof wl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tl=class extends Ei{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Rf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var la=class n extends Ei{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(r,o,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let h=new gn(r,o,{type:Qn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new gn(r,o,{type:Qn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Rf;this.highPassUniforms=ra.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=Sl;this.copyUniforms=ra.clone(c.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Ft,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new Hn,this.fsQuad=new oa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Oe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};la.BlurDirectionX=new Oe(1,0);la.BlurDirectionY=new Oe(0,1);function Gn(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function mt(n){let e=0,t=0;for(;!e;)e=n();for(;!t;)t=n();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function Vi(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function Ps(n){return n<0?0:n>1?1:n}function ci(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Mu(n,e,t){let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function Cf(n){let e=Gn(n.seed);n.twist=3+e()*2.4,n.spin=(.006+e()*.012)*(e()<.5?-1:1),n.clumps=[];for(let t=0;t<4;t++)n.clumps.push([mt(e)*n.R*.35,mt(e)*n.R*.08,mt(e)*n.R*.35]);return n}function Pf(n,e,t,i,s){let r=t*2*Math.PI/n.arms+e*n.twist+mt(i)*(.08+.2*e)*s,o=n.R*(.12+.88*e)*(1+mt(i)*.035*s);return[Math.cos(r)*o,mt(i)*n.R*.02*s*(1-.5*e),Math.sin(r)*o]}function kf(n,e){let t=Gn(n.seed*7+1),i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e);for(let a=0;a<e;a++){let l,u;if(n.kind==="spiral")if(t()<.2){let f=Math.abs(mt(t))*n.R*.13,g=t()*6.283,v=Math.acos(2*t()-1);l=[f*Math.sin(v)*Math.cos(g),f*Math.cos(v)*.7,f*Math.sin(v)*Math.sin(g)],u=f/n.R}else{let f=Math.pow(t(),.75);l=Pf(n,f,Math.floor(t()*n.arms),t,1),u=.12+.88*f}else if(n.kind==="elliptical")l=[mt(t)*n.R*.34,mt(t)*n.R*.22,mt(t)*n.R*.3],u=Math.min(1,Math.hypot(l[0],l[1],l[2])/n.R);else{let f=n.clumps[Math.floor(t()*4)];l=[f[0]+mt(t)*n.R*.2,f[1]+mt(t)*n.R*.08,f[2]+mt(t)*n.R*.2],u=Math.min(1,Math.hypot(l[0],l[2])/n.R)}i[a*3]=l[0],i[a*3+1]=l[1],i[a*3+2]=l[2];let c=Math.min(1,u),d=n.tint,h=.45+.4*(1-c*.6);s[a*3]=((1-.38*c)*.72+d[0]*.28)*h,s[a*3+1]=((.84-.08*c+0)*.72+d[1]*.28)*h+.05*c,s[a*3+2]=((.62+.38*c)*.72+d[2]*.28)*h,r[a]=(1.2+t()*2.2)*(1+(1-c)*.3),o[a]=t()*6.283}return{pos:i,col:s,sz:r,ph:o}}function Lf(n,e,t,i){let s=Gn(ci(e));if(n.kind==="spiral"){let l=.3+.6*((t+.5)/Math.max(i,1));return Pf(n,l,t%n.arms,s,.5)}let r=s()*6.283,o=Math.acos(2*s()-1),a=n.R*(.2+.5*s());return[a*Math.sin(o)*Math.cos(r),a*Math.cos(o)*.35,a*Math.sin(o)*Math.sin(r)]}function Al(n){n=n.toLowerCase();let e=t=>t.test(n);return/volkan|lav|magma|pirosferik|ateş/.test(n.replace(/su altı volkan\S*|volkanik kül\S*/g,""))?{a:[1,.47,.16],b:[.35,.07,.04],atm:[1,.58,.27],type:3}:e(/buz|buzul|fiyort|donmuş/)?{a:[.86,.94,1],b:[.43,.63,.8],atm:[.67,.84,1],type:4}:e(/okyanus|su altı|su dünyası|akuatik|sıvı|akışkan/)?{a:[.27,.59,.9],b:[.04,.18,.43],atm:[.43,.7,1],type:2}:e(/çöl|kum/)?{a:[.9,.72,.43],b:[.55,.31,.16],atm:[.92,.75,.5],type:0}:e(/orman|bitki|ağaç|biyosfer|tarımsal/)?{a:[.35,.75,.43],b:[.07,.27,.18],atm:[.55,.9,.6],type:2}:e(/gaz dev|gaz halka|gaz tabaka|gaz gezegeni|atmosfer gezegeni|bulut/)?{a:[.92,.78,.59],b:[.59,.35,.24],atm:[.94,.78,.63],type:1}:e(/kristal|prizma|spektr/)?{a:[.47,.9,.82],b:[.67,.31,.75],atm:[.63,.92,.88],type:0}:e(/neon|ışık|foton|radyant|lüminesans|aurora/)?{a:[.67,.55,1],b:[.16,.24,.59],atm:[.7,.67,1],type:1}:e(/vakum|karanlık|tekillik|boşluk|sessiz/)?{a:[.43,.35,.59],b:[.06,.04,.12],atm:[.55,.43,.75],type:0}:{a:[.59,.63,.73],b:[.12,.16,.27],atm:[.75,.72,.5],type:0}}var If=`varying vec3 vO;varying vec3 vN;varying vec3 vW;
void main(){vO=position;vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,Df=`precision highp float;varying vec3 vO;varying vec3 vN;varying vec3 vW;
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
}`,e_="varying vec3 vN;varying vec3 vW;void main(){vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",t_=`varying vec3 vN;varying vec3 vW;uniform vec3 uAtm,uL;void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW);float f=pow(max(dot(-N,V)*.5+.5-.18,0.),2.6)*1.6;
 float d=smoothstep(-.35,.5,dot(N,normalize(uL)));gl_FragColor=vec4(uAtm*f*d*1.4,f*d);}`,wu=new ta(new Uint8Array([0,0,0,255]),1,1);wu.needsUpdate=!0;var Ga=null;function Uf(n){Ga=new Cs().load(n),Ga.wrapS=is,Ga.colorSpace=hn}var Su=new zn(1,64,40);function Nf(n){let e=Al((n.desc||"")+" "+n.title),t=e.type;n.key==="dunya"&&(Object.assign(e,{a:[.27,.59,.9],b:[.04,.18,.43],atm:[.43,.7,1]}),t=2),n.key==="eirahoutmoss"&&Ga&&(t=5,e.atm=[.62,.7,1]);let i={uA:{value:new B(...e.a)},uB:{value:new B(...e.b)},uAtm:{value:new B(...e.atm)},uL:{value:new B(1,.3,.2)},uType:{value:t},uSeed:{value:ci(n.key)%997/97},uMap:{value:t===5?Ga:wu},uOc:{value:[new Ct,new Ct,new Ct]},uRg:{value:new Ct(1.5,2.7,0,1)},uRn:{value:new B(0,1,0)},uPC:{value:new B}},s=new _t(Su,new vt({uniforms:i,vertexShader:If,fragmentShader:Df})),r=new _t(Su,new vt({uniforms:{uAtm:i.uAtm,uL:i.uL},vertexShader:e_,fragmentShader:t_,transparent:!0,depthWrite:!1,side:nn,blending:Ft}));r.scale.setScalar(1.09),s.add(r),s.userData.U=i;let o=ci(n.key);if(t!==1&&o%3!==0&&n.key!=="eirahoutmoss"){s.userData.moons=[];for(let l=0;l<1+o%2;l++){let u=new En;u.rotation.set(.25*l,o%6,.3+.2*l);let c=new _t(Su,new vt({uniforms:{uA:{value:new B(.66,.63,.6)},uB:{value:new B(.27,.26,.28)},uAtm:{value:new B(0,0,0)},uL:i.uL,uType:{value:0},uSeed:{value:l*3.1+o%50},uMap:{value:wu},uOc:{value:[new Ct,new Ct,new Ct]},uRg:{value:new Ct(1.5,2.7,0,1)},uRn:{value:new B(0,1,0)},uPC:{value:new B}},vertexShader:If,fragmentShader:Df}));c.scale.setScalar(.2+.07*l),c.position.x=2.3+l*1.1,u.rotation.y=o%7,u.add(c),s.add(u),s.userData.moons.push({pivot:u,sp:.055/(1+l*.7),mm:c,U:c.material.uniforms})}}let a=/gaz dev|gaz halka|gaz tabaka|gaz gezegeni/i.test(n.desc||"");if(n.key==="gyrax"||a&&n.key!=="annulon"&&o%3===0){i.uRg.value.set(1.5,2.7,1,1);let u=new _t(new Hi(1.5,2.7,160,1),new vt({uniforms:{uA:i.uA,uB:i.uB,uL:i.uL,uPC:i.uPC,uRn:i.uRn,uPR:{value:1}},transparent:!0,depthWrite:!1,side:wn,vertexShader:"varying vec3 vP;varying vec3 vW;void main(){vP=position;vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"varying vec3 vP;varying vec3 vW;uniform vec3 uA,uB,uL,uPC,uRn;uniform float uPR;void main(){float t=(length(vP.xy)-1.5)/1.2;float b=.5+.5*sin(t*70.+sin(t*19.)*3.);float gap=1.-.92*smoothstep(.5,.53,t)*(1.-smoothstep(.58,.61,t));float a=.9*(.35+.65*b)*gap*smoothstep(0.,.05,t)*(1.-smoothstep(.93,1.,t));vec3 L=normalize(uL),V=normalize(cameraPosition-vW);float bb=dot(uPC-vW,L);float sh=1.;if(bb>0.){float d=length(uPC-vW-L*bb);sh=smoothstep(uPR*.97,uPR*1.03,d);}float side=dot(uRn,L)*dot(uRn,V)>0.?1.:.38;float lit=(.07+.93*sh)*side;gl_FragColor=vec4(mix(uB,uA,b)*1.15*lit,a);}"})),c=-(1+o%40/100),d=(o>>3)%60/100-.3;u.userData.tilt=new rn().setFromEuler(new $r(c,0,d)),s.add(u),s.userData.ring=u}s.userData.type=t,s.userData.sizeK=(t===1?1.45:t===3||t===0?.85:1)*(.88+o%25/100);{let l=(o%1e3/1e3-.5)*2.2,u=((o>>5)%100/100-.5)*.8,c=new B(0,.3,.95).normalize();c.applyAxisAngle(new B(1,0,0),-u),c.applyAxisAngle(new B(0,1,0),l),i.uL.value.copy(c)}return s}var zf=new rn,Va=new B,n_=new B;function Of(n){let e=n.userData,t=e.U.uniforms||e.U,i=n.getWorldScale(Va).x;n.getWorldPosition(t.uPC.value);let s=e.moons||[];s.forEach((r,o)=>{r.mm.getWorldPosition(Va);let a=r.mm.getWorldScale(n_).x;t.uOc.value[o].set(Va.x,Va.y,Va.z,a)});for(let r=s.length;r<3;r++)t.uOc.value[r].set(0,0,0,0);t.uRg.value.w=i,e.ring&&(e.ring.getWorldQuaternion(zf),t.uRn.value.set(0,0,1).applyQuaternion(zf),e.ring.material.uniforms.uPR.value=i),s.forEach((r,o)=>{let a=r.U;a.uL.value.copy(t.uL.value),a.uOc.value[0].set(t.uPC.value.x,t.uPC.value.y,t.uPC.value.z,i),s[1-o]?a.uOc.value[1].copy(t.uOc.value[1-o]):a.uOc.value[1].set(0,0,0,0),a.uOc.value[2].set(0,0,0,0)})}var Eu=["medusa","pillars","ring","ribbon","crab","cloud"],as=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t];function i_(n,e,t,i,s,r){let o=t.length,a=new Float32Array(o*3),l=new Float32Array(o*3);t.forEach((d,h)=>{a.set(d.p,h*3),l.set([d.c[0]*d.a*2,d.c[1]*d.a*2,d.c[2]*d.a*2],h*3)});let u=new Pt;u.setAttribute("position",new kt(a,3)),u.setAttribute("color",new kt(l,3));let c=new Si(u,new sr({map:e,size:i*1.6,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:s,depthWrite:!1,blending:Ft}));return c.frustumCulled=!1,r&&(c.onBeforeRender=()=>r(c,performance.now()/1e3)),n.add(c),c}var s_={cloud(n,e,t){let i=as(t,[1,.4,.7],.5),s=as(t,[.3,.7,1],.5),r=[],o=[],a=[0,1,2].map(()=>[mt(n)*.5,mt(n)*.15,mt(n)*.5]);for(let l=0;l<260;l++){let u=a[l%3];r.push({p:[u[0]+mt(n)*.45,u[1]+mt(n)*.16,u[2]+mt(n)*.45],c:l%2?i:s,a:.2+n()*.25})}for(let l=0;l<120;l++){let u=a[l%3];o.push({p:[u[0]+mt(n)*.5,u[1]+mt(n)*.18,u[2]+mt(n)*.5],c:[1,.95,.9],a:.5+n()*.5})}return[{pts:r,size:.55,op:.5},{pts:o,size:.07,op:.9}]},medusa(n,e,t){let i=[],s=[],r=[],o=[.4,.85,1],a=[1,.45,.8];for(let l=0;l<300;l++){let u=n()*6.283,c=Math.acos(n()),d=.9+mt(n)*.04,h=Math.pow(1-c/1.5708,2);i.push({p:[Math.sin(c)*Math.cos(u)*d,Math.cos(c)*d*.75,Math.sin(c)*Math.sin(u)*d],c:as(o,a,h),a:.35+.65*(1-Math.cos(c))})}for(let l=0;l<120;l++){let u=n()*6.283,c=n()*1.4,d=n()*.85;s.push({p:[Math.sin(c)*Math.cos(u)*d,Math.cos(c)*d*.7,Math.sin(c)*Math.sin(u)*d],c:as([.5,.4,1],o,n()),a:.18})}for(let l=0;l<16;l++){let u=l/16*6.283+mt(n)*.1,c=.78+n()*.15,d=n()*6.283,h=1.8+n()*1.6;for(let f=0;f<28;f++){let g=f/27;r.push({p:[Math.cos(u)*(c*(1-.4*g))+Math.sin(g*7+d)*.1*g,-g*h*1+.05,Math.sin(u)*(c*(1-.4*g))+Math.cos(g*6+d)*.1*g],c:as(a,o,g),a:(1-g)*.85})}}return[{pts:s,size:.7,op:.35},{pts:i,size:.07,op:.95,spin:(l,u)=>{l.scale.y=1+.05*Math.sin(u*.9)}},{pts:r,size:.05,op:.9,spin:(l,u)=>{l.rotation.y=Math.sin(u*.15)*.25}}]},pillars(n,e,t){let i=[],s=[],r=[.75,.4,.25],o=[.3,.8,.7],a=[1,.85,.6];return[[-.5,0,1.3],[0,.2,1.8],[.55,-.1,1.1]].forEach(([l,u,c],d)=>{for(let h=0;h<120;h++){let f=Math.pow(n(),.8),g=.13*(1-.55*f)+.03;i.push({p:[l+mt(n)*g,f*c,u+mt(n)*g],c:as(r,o,f*.7),a:.28+.3*(1-f)})}for(let h=0;h<26;h++)s.push({p:[l+mt(n)*.07,c+mt(n)*.05,u+mt(n)*.07],c:a,a:.8})}),[{pts:i,size:.34,op:.6},{pts:s,size:.12,op:.95,spin:(l,u)=>{l.material.opacity=.85+.1*Math.sin(u*1.7)}}]},ring(n,e,t){let i=[],s=[],r=[],o=[.45,.9,.95],a=[1,.45,.35];for(let l=0;l<340;l++){let u=n()*6.283,c=1+mt(n)*.07;i.push({p:[Math.cos(u)*c,mt(n)*.04,Math.sin(u)*c*.78],c:as(o,a,Math.min(1,Math.abs(c-1)*7)),a:.3+n()*.4})}for(let l=0;l<46;l++){let u=n()*6.283,c=1.02+mt(n)*.03;s.push({p:[Math.cos(u)*c,mt(n)*.03,Math.sin(u)*c*.78],c:[1,1,1],a:.9})}for(let l=0;l<4;l++)r.push({p:[0,0,0],c:[.85,.92,1],a:1});for(let l=0;l<120;l++){let u=n()*6.283,c=n()*.95;i.push({p:[Math.cos(u)*c,mt(n)*.03,Math.sin(u)*c*.78],c:o,a:.07})}return[{pts:i,size:.2,op:.75},{pts:s,size:.07,op:.95},{pts:r,size:.28,op:1}]},ribbon(n,e,t){let i=[],s=[],r=[1,.8,.45],o=[.4,.65,1];for(let l=0;l<2;l++)for(let u=0;u<220;u++){let c=u/219,d=c*6*Math.PI+l*Math.PI,h=.32+.12*Math.sin(c*9);(l?s:i).push({p:[(c-.5)*3.4,Math.cos(d)*h,Math.sin(d)*h],c:l?o:r,a:.35+.65*Math.sin(Math.PI*c)})}let a=[];for(let l=0;l<110;l++){let u=n();a.push({p:[(u-.5)*3.4+mt(n)*.1,mt(n)*.3,mt(n)*.3],c:as(r,o,u),a:.12})}return[{pts:a,size:.5,op:.4},{pts:i.concat(s),size:.07,op:.95,spin:(l,u)=>{l.rotation.x=u*.12}}]},crab(n,e,t){let i=[],s=[],r=[1,.55,.25],o=[.4,.6,1];for(let a=0;a<34;a++){let l=n()*6.283,u=(n()-.5)*1.2,c=.5+n()*.8,d=mt(n)*.5;for(let h=0;h<22;h++){let f=h/21,g=Math.cos(l+d*f)*Math.cos(u)*c*f*1.4,v=Math.sin(u)*c*f*.8,m=Math.sin(l+d*f)*Math.cos(u)*c*f*1.4;i.push({p:[g,v,m],c:as(o,r,f),a:.2+.6*(1-Math.abs(f-.5)*1.4)})}}for(let a=0;a<3;a++)s.push({p:[0,0,0],c:[.7,.85,1],a:1});return[{pts:i,size:.1,op:.85},{pts:s,size:.3,op:1,spin:(a,l)=>{a.material.opacity=.6+.4*Math.abs(Math.sin(l*3.3))}}]}};function Ff(n,e,t){if(e.bg)return;let i=ci(e.id),s=e.kind==="veil"||e.kind==="mist"?1:1+(i>>3)%3,r=e.tint||[.7,.8,1],o=[];for(let a=0;a<s;a++){let l=(i+a*2+(i>>5)%3*a)%Eu.length,u=0;for(;o.includes(l)&&u++<6;)l=(l+1)%Eu.length;o.push(l);let c=Gn((e.seed||1)*13+a*101+7),d=Eu[l],h=new dn,f=c()*6.283,g=e.R*(.28+.5*c());h.position.set(Math.cos(f)*g,(c()-.5)*e.R*.1,Math.sin(f)*g),h.rotation.set((c()-.5)*.7,c()*6.283,(c()-.5)*.7),h.scale.setScalar(e.R*(.1+.09*c())),s_[d](c,e,r).forEach(v=>i_(h,t,v.pts,v.size,v.op,v.spin)),h.userData.neb=d,n.add(h)}}var Bf=new rn,Tu=new B,ks=new B,X2=new B,Y2=new B,ve=(function(){let n,e,t,i,s,r,o,a,l,u=null,c=!1,d=1,h=0,f=0,g=1,v=!1,m=0,p=[],w=[],M={},k=[],I=[],S=[],_={},R={},x=null,b=[],E={sector:15251531,itf:8376750,draft:10132142,home:5227496,eira:12099839,esik:10132152},O="rgba(232,184,75,0.95)",q=`attribute float aSize;attribute float aPhase;attribute vec3 aColor;varying vec3 vC;varying float vT;uniform float uTime;uniform float uPR;
  void main(){vC=aColor;vec4 mv=modelViewMatrix*vec4(position,1.0);vT=0.78+0.22*sin(uTime*0.9+aPhase);
  float s=aSize*uPR*(520.0/max(-mv.z,1.0));gl_PointSize=clamp(s,1.4*uPR,22.0*uPR);gl_Position=projectionMatrix*mv;}`,U=`attribute float aSize;attribute float aPhase;attribute vec3 aColor;varying vec3 vC;varying float vT;uniform float uTime;uniform float uPR;
  void main(){vC=aColor;vT=0.65+0.35*sin(uTime*0.7+aPhase);gl_PointSize=aSize*uPR;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,P="varying vec3 vC;varying float vT;void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=pow(1.0-d,1.7);gl_FragColor=vec4(vC*vT,a*0.85);}",z="varying vec2 vP;void main(){vP=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",H=`varying vec2 vP;uniform float uTime,uIn,uOut;void main(){float r=length(vP);float t=(r-uIn)/(uOut-uIn);float a=atan(vP.y,vP.x);
  float sw=0.5+0.5*sin(a*4.0-t*18.0+uTime*1.6)*(0.6+0.4*sin(a*9.0+t*30.0-uTime*2.3));float beam=0.55+0.45*cos(a-0.6);
  float fall=pow(max(1.0-t,0.0),1.6)*smoothstep(0.0,0.06,t);vec3 hot=mix(vec3(1.0,0.95,0.8),vec3(1.0,0.45,0.1),smoothstep(0.0,0.7,t));hot=mix(hot,vec3(0.5,0.1,0.05),smoothstep(0.6,1.0,t));
  gl_FragColor=vec4(hot*(0.35+0.9*sw)*beam*fall*1.6,fall);}`,W="varying vec2 vP;uniform float uIn,uOut;void main(){float t=(length(vP)-uIn)/(uOut-uIn);float c=exp(-t*9.0);gl_FragColor=vec4(vec3(1.0,0.78,0.5)*c*1.8,c);}";function X(){let N=document.createElement("canvas");N.width=N.height=128;let le=N.getContext("2d"),A=le.createRadialGradient(64,64,0,64,64,64);return A.addColorStop(0,"rgba(255,255,255,1)"),A.addColorStop(.25,"rgba(255,255,255,.4)"),A.addColorStop(1,"rgba(255,255,255,0)"),le.fillStyle=A,le.fillRect(0,0,128,128),new Rs(N)}function te(N){let le=document.createElement("canvas");le.width=640,le.height=96;let A=le.getContext("2d");A.font="44px Georgia, serif",A.textAlign="center",A.fillStyle=O,A.shadowColor="#000",A.shadowBlur=8,A.fillText(N,320,60);let y=new ei({map:new Rs(le),transparent:!0,depthWrite:!1,depthTest:!1}),re=new oi(y);return re.renderOrder=10,re}function ae(N,le){let A=new Pt;A.setAttribute("position",new kt(N.pos,3)),A.setAttribute("aColor",new kt(N.col,3)),A.setAttribute("aSize",new kt(N.sz,1)),A.setAttribute("aPhase",new kt(N.ph,1));let y=new Si(A,le);return y.frustumCulled=!1,y}function oe(N,le){n=new Fi,e=new mn(50,innerWidth/innerHeight,.5,8e4),e.position.set(2600,3400,9600);{let $=[{antialias:!0},{antialias:!1},{antialias:!1,powerPreference:"low-power"},{antialias:!1,powerPreference:"high-performance"}],ne=null;window.__qulCtxTry=[];for(let Le of $)try{t=new Oi(Le),window.__qulCtxTry.push(JSON.stringify(Le)+" \u2713");break}catch(Ae){ne=Ae,t=null,window.__qulCtxTry.push(JSON.stringify(Le)+" \u2717")}if(!t)throw ne}t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setSize(innerWidth,innerHeight),t.setClearColor(263178,1),N.appendChild(t.domElement),t.domElement.addEventListener("webglcontextlost",$=>{$.preventDefault();try{localStorage.setItem("qsafe",String(Date.now()))}catch{}window.__qulCtxLost=(window.__qulCtxLost||0)+1;try{window.__crumb&&window.__crumb("WEBGL BA\u011ELAMI KAYBOLDU")}catch{}});try{let $=t.getContext(),ne=$.getExtension("WEBGL_debug_renderer_info");window.__qulGpu={webgl:t.capabilities.isWebGL2?"WebGL2":"WebGL1",gpu:ne?$.getParameter(ne.UNMASKED_RENDERER_WEBGL):$.getParameter($.RENDERER),vendor:ne?$.getParameter(ne.UNMASKED_VENDOR_WEBGL):"",maxPoint:Array.from($.getParameter($.ALIASED_POINT_SIZE_RANGE)).join("-"),halfFloat:t.extensions.has("EXT_color_buffer_half_float")||t.extensions.has("EXT_color_buffer_float"),floatLinear:t.extensions.has("OES_texture_float_linear"),dpr:devicePixelRatio,ua:navigator.userAgent.slice(0,120)}}catch{}i=new El(t),i.addPass(new Tl(n,e)),i.addPass(new cr({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv;uniform sampler2D tDiffuse;void main(){vec4 c=texture2D(tDiffuse,vUv);if(isnan(c.r)||isnan(c.g)||isnan(c.b)||isnan(c.a))c=vec4(0.,0.,0.,1.);gl_FragColor=vec4(clamp(c.rgb,0.,24.),1.);}"})),a=new la(new Oe(innerWidth,innerHeight),.55,.45,.78),i.addPass(a),l=new cr({uniforms:{tDiffuse:{value:null},uT:{value:0},uBH:{value:new Oe(.5,.5)},uRs:{value:.1},uLens:{value:0},uWarp:{value:0},uFall:{value:0},uGray:{value:0},uHolo:{value:0},uAsp:{value:innerWidth/innerHeight}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv;uniform sampler2D tDiffuse;uniform float uT,uRs,uLens,uWarp,uAsp,uFall,uGray,uHolo;uniform vec2 uBH;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uT)*43758.5453);}void main(){vec2 uv=vUv;if(uLens>0.){vec2 A=vec2(uAsp,1.);vec2 d=(uv-uBH)*A;float r=max(length(d),1e-4);float f=uLens*(1.-smoothstep(1.2*uRs,5.*uRs,r));uv=uBH+(d/r)*(r-f*uRs*uRs/r)/A;}vec4 c;if(uWarp>0.){c=vec4(0.);for(int i=0;i<10;i++){float k=1.-uWarp*.13*float(i)/10.;c+=texture2D(tDiffuse,vec2(.5)+(uv-vec2(.5))*k);}c/=10.;}else c=texture2D(tDiffuse,uv);if(isnan(c.r)||isnan(c.g)||isnan(c.b))c=vec4(0.,0.,0.,1.);float l=dot(c.rgb,vec3(.299,.587,.114));c.rgb=mix(vec3(l),c.rgb,.9*(1.-uGray))*vec3(.95,.985,1.06);float v=distance(vUv,vec2(.5));c.rgb*=1.-smoothstep(.35,.95,v)*.7;c.rgb+=(h(vUv*1500.)-.5)*.022;if(uFall>0.){c.rgb=mix(c.rgb,c.rgb*vec3(1.3,.55,.3),uFall*.85);c.rgb*=1.-uFall*smoothstep(.15,.85,distance(vUv,vec2(.5)))*1.3;c.rgb*=1.-uFall*uFall*.97;}if(uHolo>0.){float lm=dot(c.rgb,vec3(.299,.587,.114));vec3 hc=vec3(.1,.55,.9)*lm*1.7+vec3(0.,.035,.075);float sl=.93+.07*sin(vUv.y*900.);float gr=max(step(.988,fract(vUv.x*uAsp*22.)),step(.988,fract(vUv.y*22.)));hc=hc*sl+vec3(0.,.25,.4)*gr*.4;c.rgb=mix(c.rgb,hc,uHolo);}gl_FragColor=c;}"}),i.addPass(l);let A=t.getPixelRatio();s=new vt({uniforms:{uTime:{value:0},uPR:{value:A}},vertexShader:q,fragmentShader:P,transparent:!0,depthWrite:!1,blending:Ft}),r=new vt({uniforms:{uTime:{value:0},uPR:{value:A}},vertexShader:U,fragmentShader:P,transparent:!0,depthWrite:!1,blending:Ft}),o=new sa,le.eiraTex&&Uf(le.eiraTex);let y=X();K(y),se(le.galaxies,y);let re={};le.planets.forEach($=>{(re[$.gal]=re[$.gal]||[]).push($)}),le.galaxies.forEach($=>fe($,re[$.id]||[],y)),addEventListener("resize",()=>{e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),i.setSize(innerWidth,innerHeight),l.uniforms.uAsp.value=innerWidth/innerHeight})}function K(N){let le=Gn(99),A=3200,y=new Float32Array(A*3),re=new Float32Array(A*3),$=new Float32Array(A),ne=new Float32Array(A),Le=[[.78,.86,1],[1,.97,.9],[1,.84,.63],[1,.67,.47]];for(let _e=0;_e<A;_e++){let me=le()*6.283,V=Math.acos(2*le()-1),he=26e3+le()*6e3;y[_e*3]=he*Math.sin(V)*Math.cos(me),y[_e*3+1]=he*Math.cos(V),y[_e*3+2]=he*Math.sin(V)*Math.sin(me);let ge=Le[_e%4],Ie=.35+le()*.55;re[_e*3]=ge[0]*Ie,re[_e*3+1]=ge[1]*Ie,re[_e*3+2]=ge[2]*Ie,$[_e]=1.2+le()*1.8,ne[_e]=le()*6.283}n.add(ae({pos:y,col:re,sz:$,ph:ne},r)),[[4026296,-9e3,3e3,-9e3],[12076943,1e4,-2e3,-8e3],[4176032,2e3,6e3,-12e3],[8015800,-11e3,-4e3,6e3],[12076943,8e3,-5e3,9e3],[4026296,0,-8e3,-11e3]].forEach(_e=>{let me=new ei({map:N,color:_e[0],transparent:!0,opacity:.16,depthWrite:!1,blending:Ft}),V=new oi(me);V.position.set(_e[1],_e[2],_e[3]),V.scale.set(9e3,9e3,1),n.add(V)})}function se(N,le){let A=Gn(5),y=N.filter(be=>!be.bg),re=[],$=[];N.forEach((be,Xe)=>{N.map((rt,et)=>[et,Math.hypot(rt.pos[0]-be.pos[0],rt.pos[1]-be.pos[1],rt.pos[2]-be.pos[2])]).filter(rt=>rt[0]!==Xe).sort((rt,et)=>rt[1]-et[1]).slice(0,2).forEach(([rt,et])=>{if(rt<Xe||et>3800)return;let Fe=N[rt],Mt=[0,1,2].map(At=>(be.pos[At]+Fe.pos[At])/2+(A()-.5)*et*.22);[[be.pos,Mt],[Mt,Fe.pos]].forEach(At=>{re.push(...At[0],...At[1])})})});let ne=new Pt;ne.setAttribute("position",new Bt(re,3)),n.add(new na(ne,new Vn({color:2771578,transparent:!0,opacity:.2,depthWrite:!1,blending:Ft})));let Le=3500,Ae=new Float32Array(Le*3),_e=new Float32Array(Le*3),me=new Float32Array(Le),V=new Float32Array(Le);for(let be=0;be<Le;be++){let Xe=y[A()*y.length|0],tt=A()*6.283,rt=Math.acos(2*A()-1),et=Xe.R*(1+A()*3.5);Ae[be*3]=Xe.pos[0]+et*Math.sin(rt)*Math.cos(tt),Ae[be*3+1]=Xe.pos[1]+et*Math.cos(rt)*.6,Ae[be*3+2]=Xe.pos[2]+et*Math.sin(rt)*Math.sin(tt);let Fe=.12+A()*.2;_e[be*3]=.5*Fe,_e[be*3+1]=.7*Fe,_e[be*3+2]=Fe*1.3,me[be]=.35+A()*.5,V[be]=A()*6.283}n.add(ae({pos:Ae,col:_e,sz:me,ph:V},s));let he=[];for(let be=0;be<re.length;be+=6)he.push([new B(re[be],re[be+1],re[be+2]),new B(re[be+3],re[be+4],re[be+5])]);let ge=48,xe={pos:new Float32Array(ge*3),col:new Float32Array(ge*3).fill(.55),sz:new Float32Array(ge).fill(2.2),ph:new Float32Array(ge)};for(let be=0;be<ge*3;be+=3)xe.col[be]=.45,xe.col[be+1]=.85,xe.col[be+2]=1;M.points=ae(xe,s),M.list=Array.from({length:ge},()=>({s:he[A()*he.length|0],t:A(),v:.02+A()*.04})),M.segs=he,n.add(M.points);for(let be=0;be<3;be++){let Xe=new oi(new ei({map:le,color:13624575,transparent:!0,opacity:0,depthWrite:!1,blending:Ft}));n.add(Xe),k.push({s:Xe,t:-1,next:3+be*4})}k.real=y}function ce(N){let le=M;if(le.points){let A=le.points.geometry.attributes.position;le.list.forEach((y,re)=>{y.t+=y.v*N,y.t>1&&(y.t=0,y.s=le.segs[Math.random()*le.segs.length|0]),ks.lerpVectors(y.s[0],y.s[1],y.t),A.setXYZ(re,ks.x,ks.y,ks.z)}),A.needsUpdate=!0}k.forEach(A=>{if(A.next-=N,A.t<0&&A.next<=0){let y=k.real[Math.random()*k.real.length|0],re=Math.random()*6.283,$=y.R*Math.random()*.8;A.s.position.set(y.pos[0]+Math.cos(re)*$,y.pos[1]+(Math.random()-.5)*y.R*.1,y.pos[2]+Math.sin(re)*$),A.t=0,A.R=y.R}if(A.t>=0){A.t+=N/4.5;let y=A.t,re=y<.08?y/.08:Math.pow(1-(y-.08)/.92,2.2);A.s.material.opacity=Math.max(0,re)*.95;let $=A.R*(.15+.5*Math.sqrt(y));A.s.scale.set($,$,1),y>=1&&(A.t=-1,A.s.material.opacity=0,A.next=7+Math.random()*9)}})}function fe(N,le,A){Cf(N);let y=[],re=new dn;re.position.set(N.pos[0],N.pos[1],N.pos[2]),re.rotation.set(N.tilt[0],0,N.tilt[1]);let $=new dn;re.add($);let ne=N.bg?1300:N.id==="home"?7e3:N.kind==="veil"?700:N.kind==="mist"?300:3600,Le=kf(N,ne);if(N.kind==="veil"||N.kind==="mist")for(let be=0;be<Le.col.length;be++)Le.col[be]*=.4;$.add(ae(Le,s));let Ae=new oi(new ei({map:A,color:new ot(N.tint[0],N.tint[1],N.tint[2]),transparent:!0,depthWrite:!1,blending:Ft,opacity:.4}));Ae.position.copy(re.position);let _e=N.R*(N.bg?2.4:3.2);Ae.scale.set(_e,_e,1),n.add(Ae),(N.kind==="veil"||N.kind==="mist")&&[[0,0,0,1],[.35,.1,-.2,.7],[-.3,-.05,.3,.8]].forEach(be=>{let Xe=new oi(new ei({map:A,color:new ot(N.tint[0]*.8,N.tint[1]*.7,N.tint[2]),transparent:!0,depthWrite:!1,blending:Ft,opacity:N.kind==="veil"?.22:.14}));Xe.position.set(N.pos[0]+be[0]*N.R,N.pos[1]+be[1]*N.R,N.pos[2]+be[2]*N.R);let tt=N.R*5.5*be[3];Xe.scale.set(tt,tt,1),n.add(Xe),y.push(Xe)}),Ff($,N,A);let me=new _t(new zn(1,12,8),new Hn({visible:!1}));me.scale.setScalar(N.R*1.05),me.userData.gid=N.id,re.add(me);let V=null;N.bg||(V=te(N.name),V.position.set(N.pos[0],N.pos[1]+N.R*.62,N.pos[2]),V.scale.set(N.R*2.6,N.R*.39,1),n.add(V)),n.add(re);let he={g:N,outer:re,inner:$,glow:Ae,label:V,pick:me,planets:[],fogs:y,fogA:y.map(be=>be.material.opacity),eg:1,el:1,egT:1,elT:1};if(S.push(he),_[N.id]=he,["itf","unas","eira","esik"].includes(N.id)||Re(he),N.sector!=null||N.id==="home"){let be=()=>{let Xe=new _t(new Hi(1,1.09,128),new Hn({color:9426687,transparent:!0,opacity:0,depthWrite:!1,side:wn,blending:Ft}));return Xe.rotation.x=-Math.PI/2,Xe.scale.setScalar(N.R*1.1),Xe.visible=!1,re.add(Xe),Xe};he.care={ring:be(),rip:be(),ph:(N.id.length*.37+(N.sector||0)*.61)%1,order:N.sector||0,a:0},p.push(he)}let ge=new zn(1,14,10),Ie=new Hn({visible:!1}),xe=Math.max(2.4,N.R*.016);le.forEach((be,Xe)=>{let tt=Nf(be);w.push(tt);let rt=Lf(N,be.key,Xe,le.length);tt.position.set(rt[0],rt[1],rt[2]),tt.scale.setScalar(xe*1.25*(tt.userData.sizeK||1)),tt.visible=!1;let et=new oi(new ei({map:A,color:E[be.kind]||16777215,transparent:!0,depthWrite:!1,blending:Ft,opacity:.22}));et.scale.set(5,5,1),tt.add(et);let Fe=new _t(ge,Ie);Fe.scale.setScalar(4.6),tt.add(Fe),Object.assign(tt.userData,{key:be.key,gid:N.id,hit:Fe}),$.add(tt),he.planets.push(tt),R[be.key]={mesh:tt,gid:N.id}})}function Re(N){let le=N.g,A=le.R*.018,y=new dn,re=new _t(new zn(A,24,16),new Hn({color:0})),$=(_e,me,V)=>new vt({uniforms:{uTime:{value:0},uIn:{value:_e},uOut:{value:me}},vertexShader:z,fragmentShader:V,transparent:!0,depthWrite:!1,side:wn,blending:Ft}),ne=new _t(new Hi(A*1.7,A*7,160,1),$(A*1.7,A*7,H));ne.rotation.x=-Math.PI/2;let Le=new _t(new Hi(A*1.02,A*2.6,96,1),$(A*1.02,A*2.6,W));y.add(re,ne,Le),y.visible=!1,N.outer.add(y);let Ae=new _t(new zn(1,10,8),new Hn({visible:!1}));Ae.scale.setScalar(A*9),Ae.userData.bh=le.id,N.outer.add(Ae),I.push(Ae),N.bh={grp:y,disk:ne,halo:Le,rh:A}}function De(N){x=N,b=[],S.forEach(le=>le.planets.forEach(A=>{let y=le.g.id===N;A.visible=y,y&&b.push(A.userData.hit)}))}let Ge=new B,Pe=new B,$e=Math.min(devicePixelRatio,2),Z=[{pr:$e,b:1},{pr:Math.min($e,1.25),b:1},{pr:1,b:1},{pr:.75,b:0}],st=(()=>{try{let N=location.search;if(/[?&]guvenli=0/.test(N))return localStorage.removeItem("qsafe"),!1;if(/[?&]guvenli=1/.test(N))return!0;let le=+localStorage.getItem("qsafe")||0;return le>0&&Date.now()-le<7*864e5}catch{return!1}})();window.__qulSafe=st;let ye=0,ze=0,Ce=0,Ke=90,ke=N=>{ye=N,window.__qulQL=N;let le=Z[N];t.setPixelRatio(le.pr),i.setPixelRatio(le.pr),t.setSize(innerWidth,innerHeight),i.setSize(innerWidth,innerHeight),s&&(s.uniforms.uPR.value=le.pr),r&&(r.uniforms.uPR.value=le.pr),a.enabled=!!le.b};window.__qulSetL=ke;function C(N,le){if(c)return;le*=d,h+=le;{let ne=l.uniforms.uHolo;ne.value+=(f-ne.value)*Math.min(1,.05+le*2.2)}s.uniforms.uTime.value=h,l.uniforms.uT.value=N/1e3%7,r.uniforms.uTime.value=h;let A=e.position;S.forEach(ne=>{ne.inner.rotation.y+=ne.g.spin*le*g;let Le=A.distanceTo(ne.outer.position),Ae=ne.g.R;{let _e=Math.min(1,le*2.5+.02);ne.eg+=(ne.egT*(ne.g.id===Ee?1.6:1)-ne.eg)*_e,ne.el+=(ne.elT-ne.el)*_e}if(ne.glow.material.opacity=.42*(ne.g.id===u?1.5:1)*Ps((Le-Ae*.6)/(Ae*1.6))*ne.eg,ne.fogs.forEach((_e,me)=>{_e.material.opacity=ne.fogA[me]*Ps((Le-Ae*.3)/(Ae*2.5))}),ne.label&&(ne.label.material.opacity=.9*Ps((Le-Ae*3)/(Ae*3))*(x&&x!==ne.g.id?.12:1)*ne.el),ne.bh){let _e=Le<Ae*14;ne.bh.grp.visible=_e,_e&&(ne.bh.disk.material.uniforms.uTime.value=N/1e3,ne.outer.getWorldQuaternion(Bf),ne.bh.halo.quaternion.copy(Bf.invert().multiply(e.quaternion)))}}),ce(le);{let ne=N/1e3-m;p.forEach(Le=>{let Ae=Le.care,_e=A.distanceTo(Le.outer.position),me=Le.g.R,V=Ps((_e-me*1.8)/(me*3)),he=v?Ps((ne-Ae.order*.28)/1.4):0;Ae.a+=(he-Ae.a)*Math.min(1,le*(v?4:3));let ge=Ae.a>.01;if(Ae.ring.visible=Ae.rip.visible=ge,ge){let Ie=(ne*.32+Ae.ph)%1;Ae.ring.material.opacity=Math.min(1,Ae.a*V*(.95+.3*Math.sin(ne*1.6+Ae.ph*6))),Ae.rip.scale.setScalar(me*(1.1+.75*Ie)),Ae.rip.material.opacity=Ae.a*V*(1-Ie)*.9}})}let y=null,re=1e9;S.forEach(ne=>{if(!ne.bh)return;let Le=A.distanceTo(ne.outer.position)/ne.bh.rh;Le<re&&(re=Le,y=ne)});let $=l.uniforms;if($.uLens.value=0,y&&re<60&&(ks.copy(y.outer.position).project(e),ks.z<1)){let ne=y.bh.rh/A.distanceTo(y.outer.position)/Math.tan(e.fov*Math.PI/360)/2;$.uBH.value.set(ks.x*.5+.5,ks.y*.5+.5),$.uRs.value=Math.min(.3,ne*1.7),$.uLens.value=Ps((60-re)/40)*(1+$.uFall.value*1.5)}if(y&&$.uLens.value>0){let ne=A.distanceTo(y.outer.position),Le=Math.tan(e.fov*Math.PI/360),Ae=$.uAsp.value;w.forEach(_e=>{if(!_e.visible)return;_e.getWorldPosition(Tu);let me=A.distanceTo(Tu);if(me>=ne||(Ge.copy(Tu).project(e),Ge.z>=1))return;_e.geometry.boundingSphere||_e.geometry.computeBoundingSphere();let V=_e.geometry.boundingSphere.radius*_e.getWorldScale(Pe).x*1.12,he=V/me/Le/2,ge=(Ge.x*.5+.5-$.uBH.value.x)*Ae,Ie=Ge.y*.5+.5-$.uBH.value.y,xe=Ps((Math.hypot(ge,Ie)-he)/Math.max(.01,5*$.uRs.value));$.uLens.value*=xe})}if(w.forEach(ne=>{ne.visible&&(ne.rotation.y+=le*.04,ne.userData.moons&&ne.userData.moons.forEach(Le=>{Le.pivot.rotation.y+=le*Le.sp}),ne.userData.ring&&ne.userData.ring.quaternion.copy(ne.quaternion).invert().multiply(ne.userData.ring.userData.tilt),Of(ne))}),i.render(),T||(T=!0,window.__qulQL=0,(st||/swiftshader|software|llvmpipe|basic render/i.test((window.__qulGpu||{}).gpu||""))&&ke(3)),ze+=le,Ce++,Ke>0&&Ke--,Ce>=40){let ne=ze/Ce;ze=0,Ce=0,!Ke&&ye<3&&ne>.034&&(ke(ne>.07?Math.min(3,ye+2):ye+1),Ke=70)}}let T=!1;function Y(N,le){return o.setFromCamera(new Oe(N.x,N.y),e),o.intersectObjects(le,!1)}function pe(N){let le=Y(N,b);return le.length?le[0].object.parent.userData.key:null}function ue(N){let le=Y(N,S.map(A=>A.pick));return le.length?le[0].object.userData.gid:null}function de(N){let le=Y(N,I);return le.length?le[0].object.userData.bh:null}function Te(N){return _[N].outer.position.clone()}function Se(N){return R[N].mesh.getWorldPosition(new B)}let Ee=null;function He(N,le){S.forEach(A=>{A.egT=N(A.g),A.elT=le(A.g)})}function We(N){S.forEach(le=>{le.c0||(le.c0=le.glow.material.color.clone());let A=N?N(le.g):null;le.glow.material.color.copy(A?new ot(A[0],A[1],A[2]):le.c0)})}return{setTint:We,setEra:He,setMine:N=>{Ee=N},init:oe,frame:C,setFocus:De,pickPlanet:pe,pickGalaxy:ue,pickBH:de,bhWorld:Te,planetWorld:Se,pause:N=>{c=N},setGray:N=>{l.uniforms.uGray.value=N},setTimeK:N=>{d=N},setHolo:N=>{f=N},snapshot:()=>(i.render(),t.domElement.toDataURL("image/png")),setCare:N=>{v=N,m=performance.now()/1e3},careCount:()=>v?p.filter(N=>N.care.a>.95).length:0,fx:()=>({lens:l.uniforms.uLens.value,warp:l.uniforms.uWarp.value,fall:l.uniforms.uFall.value}),setFall:N=>{l.uniforms.uFall.value=N},setSpin:N=>{g=N},makeLight:()=>{let N=new oi(new ei({map:X(),color:15267071,transparent:!0,depthWrite:!1,blending:Ft}));return n.add(N),N},removeObj:N=>n.remove(N),addObj:N=>n.add(N),setBloom:N=>{a.strength=N},setWarp:N=>{l.uniforms.uWarp.value=N},setFov:N=>{e.fov=N,e.updateProjectionMatrix()},setHover:N=>{u=N},galaxies:()=>S.map(N=>N.g),galaxy:N=>_[N],planetGalaxy:N=>R[N]&&R[N].gid,planetsOf:N=>_[N].planets.map(le=>le.userData.key),getCamera:()=>e,getRenderer:()=>t}})();var Hf={type:"change"},Au={type:"start"},Vf={type:"end"},Rl=new Ts,Gf=new _i,r_=Math.cos(70*Ba.DEG2RAD),ca=class extends Ui{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",de),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Hf),i.update(),r=s.NONE},this.update=(function(){let A=new B,y=new rn().setFromUnitVectors(e.up,new B(0,1,0)),re=y.clone().invert(),$=new B,ne=new rn,Le=new B,Ae=2*Math.PI;return function(me=null){let V=i.object.position;A.copy(V).sub(i.target),A.applyQuaternion(y),a.setFromVector3(A),i.autoRotate&&r===s.NONE&&E(x(me)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let he=i.minAzimuthAngle,ge=i.maxAzimuthAngle;isFinite(he)&&isFinite(ge)&&(he<-Math.PI?he+=Ae:he>Math.PI&&(he-=Ae),ge<-Math.PI?ge+=Ae:ge>Math.PI&&(ge-=Ae),he<=ge?a.theta=Math.max(he,Math.min(ge,a.theta)):a.theta=a.theta>(he+ge)/2?Math.max(he,a.theta):Math.min(ge,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&S||i.object.isOrthographicCamera?a.radius=X(a.radius):a.radius=X(a.radius*u),A.setFromSpherical(a),A.applyQuaternion(re),V.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let Ie=!1;if(i.zoomToCursor&&S){let xe=null;if(i.object.isPerspectiveCamera){let be=A.length();xe=X(be*u);let Xe=be-xe;i.object.position.addScaledVector(k,Xe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let be=new B(I.x,I.y,0);be.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ie=!0;let Xe=new B(I.x,I.y,0);Xe.unproject(i.object),i.object.position.sub(Xe).add(be),i.object.updateMatrixWorld(),xe=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;xe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(xe).add(i.object.position):(Rl.origin.copy(i.object.position),Rl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Rl.direction))<r_?e.lookAt(i.target):(Gf.setFromNormalAndCoplanarPoint(i.object.up,i.target),Rl.intersectPlane(Gf,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ie=!0);return u=1,S=!1,Ie||$.distanceToSquared(i.object.position)>o||8*(1-ne.dot(i.object.quaternion))>o||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(Hf),$.copy(i.object.position),ne.copy(i.object.quaternion),Le.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ee),i.domElement.removeEventListener("pointerdown",ke),i.domElement.removeEventListener("pointercancel",T),i.domElement.removeEventListener("wheel",ue),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",T),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",de),i._domElementKeyEvents=null)};let i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Fa,l=new Fa,u=1,c=new B,d=new Oe,h=new Oe,f=new Oe,g=new Oe,v=new Oe,m=new Oe,p=new Oe,w=new Oe,M=new Oe,k=new B,I=new Oe,S=!1,_=[],R={};function x(A){return A!==null?2*Math.PI/60*i.autoRotateSpeed*A:2*Math.PI/60/60*i.autoRotateSpeed}function b(A){let y=Math.abs(A)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*y)}function E(A){l.theta-=A}function O(A){l.phi-=A}let q=(function(){let A=new B;return function(re,$){A.setFromMatrixColumn($,0),A.multiplyScalar(-re),c.add(A)}})(),U=(function(){let A=new B;return function(re,$){i.screenSpacePanning===!0?A.setFromMatrixColumn($,1):(A.setFromMatrixColumn($,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(re),c.add(A)}})(),P=(function(){let A=new B;return function(re,$){let ne=i.domElement;if(i.object.isPerspectiveCamera){let Le=i.object.position;A.copy(Le).sub(i.target);let Ae=A.length();Ae*=Math.tan(i.object.fov/2*Math.PI/180),q(2*re*Ae/ne.clientHeight,i.object.matrix),U(2*$*Ae/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(re*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),U($*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function z(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(A,y){if(!i.zoomToCursor)return;S=!0;let re=i.domElement.getBoundingClientRect(),$=A-re.left,ne=y-re.top,Le=re.width,Ae=re.height;I.x=$/Le*2-1,I.y=-(ne/Ae)*2+1,k.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function X(A){return Math.max(i.minDistance,Math.min(i.maxDistance,A))}function te(A){d.set(A.clientX,A.clientY)}function ae(A){W(A.clientX,A.clientX),p.set(A.clientX,A.clientY)}function oe(A){g.set(A.clientX,A.clientY)}function K(A){h.set(A.clientX,A.clientY),f.subVectors(h,d).multiplyScalar(i.rotateSpeed);let y=i.domElement;E(2*Math.PI*f.x/y.clientHeight),O(2*Math.PI*f.y/y.clientHeight),d.copy(h),i.update()}function se(A){w.set(A.clientX,A.clientY),M.subVectors(w,p),M.y>0?z(b(M.y)):M.y<0&&H(b(M.y)),p.copy(w),i.update()}function ce(A){v.set(A.clientX,A.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),P(m.x,m.y),g.copy(v),i.update()}function fe(A){W(A.clientX,A.clientY),A.deltaY<0?H(b(A.deltaY)):A.deltaY>0&&z(b(A.deltaY)),i.update()}function Re(A){let y=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(0,i.keyPanSpeed),y=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(0,-i.keyPanSpeed),y=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?E(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(i.keyPanSpeed,0),y=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?E(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(-i.keyPanSpeed,0),y=!0;break}y&&(A.preventDefault(),i.update())}function De(A){if(_.length===1)d.set(A.pageX,A.pageY);else{let y=le(A),re=.5*(A.pageX+y.x),$=.5*(A.pageY+y.y);d.set(re,$)}}function Ge(A){if(_.length===1)g.set(A.pageX,A.pageY);else{let y=le(A),re=.5*(A.pageX+y.x),$=.5*(A.pageY+y.y);g.set(re,$)}}function Pe(A){let y=le(A),re=A.pageX-y.x,$=A.pageY-y.y,ne=Math.sqrt(re*re+$*$);p.set(0,ne)}function $e(A){i.enableZoom&&Pe(A),i.enablePan&&Ge(A)}function Z(A){i.enableZoom&&Pe(A),i.enableRotate&&De(A)}function st(A){if(_.length==1)h.set(A.pageX,A.pageY);else{let re=le(A),$=.5*(A.pageX+re.x),ne=.5*(A.pageY+re.y);h.set($,ne)}f.subVectors(h,d).multiplyScalar(i.rotateSpeed);let y=i.domElement;E(2*Math.PI*f.x/y.clientHeight),O(2*Math.PI*f.y/y.clientHeight),d.copy(h)}function ye(A){if(_.length===1)v.set(A.pageX,A.pageY);else{let y=le(A),re=.5*(A.pageX+y.x),$=.5*(A.pageY+y.y);v.set(re,$)}m.subVectors(v,g).multiplyScalar(i.panSpeed),P(m.x,m.y),g.copy(v)}function ze(A){let y=le(A),re=A.pageX-y.x,$=A.pageY-y.y,ne=Math.sqrt(re*re+$*$);w.set(0,ne),M.set(0,Math.pow(w.y/p.y,i.zoomSpeed)),z(M.y),p.copy(w);let Le=(A.pageX+y.x)*.5,Ae=(A.pageY+y.y)*.5;W(Le,Ae)}function Ce(A){i.enableZoom&&ze(A),i.enablePan&&ye(A)}function Ke(A){i.enableZoom&&ze(A),i.enableRotate&&st(A)}function ke(A){i.enabled!==!1&&(_.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",C),i.domElement.addEventListener("pointerup",T)),He(A),A.pointerType==="touch"?Te(A):Y(A))}function C(A){i.enabled!==!1&&(A.pointerType==="touch"?Se(A):pe(A))}function T(A){We(A),_.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",T)),i.dispatchEvent(Vf),r=s.NONE}function Y(A){let y;switch(A.button){case 0:y=i.mouseButtons.LEFT;break;case 1:y=i.mouseButtons.MIDDLE;break;case 2:y=i.mouseButtons.RIGHT;break;default:y=-1}switch(y){case or.DOLLY:if(i.enableZoom===!1)return;ae(A),r=s.DOLLY;break;case or.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;oe(A),r=s.PAN}else{if(i.enableRotate===!1)return;te(A),r=s.ROTATE}break;case or.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;te(A),r=s.ROTATE}else{if(i.enablePan===!1)return;oe(A),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Au)}function pe(A){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;K(A);break;case s.DOLLY:if(i.enableZoom===!1)return;se(A);break;case s.PAN:if(i.enablePan===!1)return;ce(A);break}}function ue(A){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(A.preventDefault(),i.dispatchEvent(Au),fe(A),i.dispatchEvent(Vf))}function de(A){i.enabled===!1||i.enablePan===!1||Re(A)}function Te(A){switch(N(A),_.length){case 1:switch(i.touches.ONE){case lr.ROTATE:if(i.enableRotate===!1)return;De(A),r=s.TOUCH_ROTATE;break;case lr.PAN:if(i.enablePan===!1)return;Ge(A),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case lr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$e(A),r=s.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Z(A),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Au)}function Se(A){switch(N(A),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;st(A),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;ye(A),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(A),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ke(A),i.update();break;default:r=s.NONE}}function Ee(A){i.enabled!==!1&&A.preventDefault()}function He(A){_.push(A.pointerId)}function We(A){delete R[A.pointerId];for(let y=0;y<_.length;y++)if(_[y]==A.pointerId){_.splice(y,1);return}}function N(A){let y=R[A.pointerId];y===void 0&&(y=new Oe,R[A.pointerId]=y),y.set(A.pageX,A.pageY)}function le(A){let y=A.pointerId===_[0]?_[1]:_[0];return R[y]}i.domElement.addEventListener("contextmenu",Ee),i.domElement.addEventListener("pointerdown",ke),i.domElement.addEventListener("pointercancel",T),i.domElement.addEventListener("wheel",ue,{passive:!1}),this.update()}};var Wf={"solar.btn":"\u2600 G\xFCne\u015F Sistemi","solar.fail":"G\xFCne\u015F Sistemi bu cihazda a\xE7\u0131lamad\u0131.","drift.home":"Evin'e uzakl\u0131k","drift.trav":"Katedilen","drift.seen":"G\xF6r\xFClen gezegen","drift.unit":"\u0131\u015F\u0131k y\u0131l\u0131","ui.drift":"\u26F6 Galaksi Gezintisi","ui.driftStop":"\u25A0 Gezintiyi durdur","drift.t":"Galaksiler","ui.pageTitle":"Galaksi Konfederasyonu \u2014 Qul Efsaneleri","ui.title":"Galaksi Konfederasyonu","ui.sub":"100+ galaksi \xB7 her galaksi bir sekt\xF6r \xB7 s\xFCr\xFCkle, tekerlekle yakla\u015F, galaksiye veya kara deli\u011Fe t\u0131kla","leg.home":"D\xFCnya","leg.sector":"Sekt\xF6r gezegeni","leg.itf":"\u0130TF kolonisi","leg.draft":"Sekt\xF6r\xFC atanmam\u0131\u015F","leg.eira":"E\u015Flenik Evren","ui.search":"Gezegen veya galaksi ara\u2026","ui.tour":"\u25B6 Sinematik Tur","ui.tourStop":"\u25A0 Turu durdur","ui.homeBtn":"\u2302 Ana Sayfa","ui.back":"\u2922 T\xFCm Evren","ui.loading":"Evren y\xFCkleniyor\u2026","ui.hush":"\u25CC Sessizlik","ui.hushOn":"\u25C9 Sessizlik a\xE7\u0131k","ui.lang":"Dil","intro.1.h":"Sessizlik","intro.1.s":"Burada ses yoktur. Yaln\u0131zca \xE7ok eski \u0131\u015F\u0131k.","intro.2.h":"Her \u0131\u015F\u0131k noktas\u0131 bir galaksi","intro.2.s":"Y\xFCz milyarlarca g\xFCne\u015Ften olu\u015Fmu\u015F birer ada \xB7 aralar\u0131nda milyonlarca y\u0131ll\u0131k bo\u015Fluk","intro.3.h":"Galaksi Konfederasyonu","intro.3.s":"100+ galaksi \xB7 her galaksi bir sekt\xF6r \xB7 bug\xFCnden yakla\u015F\u0131k 15.000 y\u0131l sonras\u0131n\u0131n haritas\u0131","tour.t1":"Evren","gal.eira":"Hen\xFCz bir gizem \xB7 bilinen tek gezegen: Eirahoutmoss","gal.esik":"\u0130ki evren aras\u0131ndaki e\u015Fik","gal.unreg":"Hen\xFCz kay\u0131tl\u0131 de\u011Fil","gal.count":"{n} gezegen kay\u0131tl\u0131","gal.light":"I\u015F\u0131\u011F\u0131 Samanyolu'na {y} y\u0131lda ula\u015F\u0131r","tip.bh":"Kara delik \xB7 {name}","tip.gal":"{name} \xB7 {n} gezegen","panel.concept":"Konsept g\xF6rsel","panel.conceptNC":"Konsept g\xF6rsel \xB7 kanon \xE7izimi de\u011Fil","panel.guide":"Konfederasyon Rehberi g\xF6rseli","panel.enlarge":"{note} \xB7 b\xFCy\xFCtmek i\xE7in t\u0131kla","row.colony":"Koloni kodu","row.code":"Kay\u0131t kodu","row.nocode":"Sekt\xF6r kodu hen\xFCz atanmam\u0131\u015F","row.region":"B\xF6lge","row.galaxy":"Galaksi","row.status":"Durum","row.settle":"Yerle\u015Fim durumu","row.dipl":"Diplomatik durum","row.axiom":"Aksiyom","row.est":"{v} (tahmini)","btn.kisura":"\u25B6 Kisura'ya gir \xB7 sinematik","chips.none0":"Hen\xFCz kay\u0131tl\u0131 gezegen yok","chips.none1":"Bu galaksinin gezegenleri hen\xFCz yaz\u0131lmad\u0131","search.bh":"Kara delik","search.gal":"Galaksi","dist.label":"Samanyolu'na uzakl\u0131k","dist.unit":"\u0131\u015F\u0131k y\u0131l\u0131","dist.million":"milyon","cin.c1":"E\u015Flenik Evren \xB7 Eirahoutmoss","cin.h1":"Kisura","cin.p1":"Kronolitler \u015Eehri","cin.c2":"Kisura","cin.h2":"\u015Eehir kronolitlere aittir","cin.p2":"\u0130nsanlar misafir.","cin.h3":"Kronolitler \u015Eehri","cin.p3":"Ta\u015F de\u011Fil de donmu\u015F \u0131\u015F\u0131k.","cin.close":"\u2715 Kapat","btn.land":"\u25BC Y\xFCzeye in","light.btn":"\u2726 I\u015F\u0131\u011F\u0131 izle","light.start":"Bu \u0131\u015F\u0131k {y} y\u0131l \xF6nce yola \xE7\u0131kt\u0131","light.endH":"\u015Eimdi g\xF6rd\xFC\u011F\xFCn\xFCz ge\xE7mi\u015Ftir","light.endS":"I\u015F\u0131k y\u0131ldan y\u0131la sessizce yol al\u0131r; var\u0131\u015Ft\u0131\u011F\u0131nda kayna\u011F\u0131 art\u0131k ba\u015Fkad\u0131r.","row.assign":"Sekt\xF6r atamas\u0131","val.draft":"Taslak \xB7 yazar onay\u0131 bekliyor","fall.btn":"\u25C9 Olay ufkuna d\xFC\u015F","fall.1h":"Olay ufku","fall.1s":"I\u015F\u0131\u011F\u0131n bile geri d\xF6nemedi\u011Fi s\u0131n\u0131r","fall.2h":"Zaman yava\u015Fl\u0131yor","fall.2s":"D\u0131\u015Far\u0131daki galaksi senin i\xE7in h\u0131zlan\u0131yor: senin bir saniyen, onun binlerce y\u0131l\u0131.","fall.3h":"I\u015F\u0131k k\u0131zar\u0131yor","fall.3s":"Her foton geride kal\u0131yor; renkler uzun dalgaya \xE7ekiliyor.","fall.4h":"Buradan sonras\u0131","fall.4s":"Bu e\u015Fi\u011Fin \xF6tesini hi\xE7bir kay\u0131t anlatm\u0131yor.","fall.5h":"Sessizlik","fall.5s":"I\u015F\u0131k geri d\xF6nemedi. Sen d\xF6nebilirsin.","scale.btn":"\u221E \xD6l\xE7ek Yolculu\u011Fu","scale.2h":"Bir gezegen","scale.2s":"Eirahoutmoss: E\u015Flenik Evren'in bilinen tek d\xFCnyas\u0131.","scale.3h":"Bir evren","scale.3s":"Trilyonlarca galaksiden olu\u015Fuyor; yaln\u0131zca tek bir gezegeni biliniyor.","scale.4h":"G\xF6k adalar","scale.4s":"Her \u0131\u015F\u0131k noktas\u0131, y\xFCz milyarlarca g\xFCne\u015Ften olu\u015Fan bir galaksi.","scale.5h":"Galaksi Konfederasyonu","scale.5s":"Hepsi, ayn\u0131 sessizli\u011Fin i\xE7inde.","care.btn":"\u25CE Temsil katman\u0131","care.btnOn":"\u25CE Temsil katman\u0131: a\xE7\u0131k","care.1h":"Sorumluluk","care.1s":"Trilyonlarca galaksi var. Konfederasyon, her birinin sorumlulu\u011Funu \xFCstlenmek i\xE7in ko\u015Fu\u015Fan \xFCst bilin\xE7li t\xFCrlerin a\u011F\u0131d\u0131r.","care.count":"Temsilcisi olan galaksi: {n}","care.note":"Her halka, bir galaksinin sorumlulu\u011Funu \xFCstlenen \xFCst bilin\xE7li bir t\xFCr\xFC g\xF6sterir.","th.btn":"\u27C1 E\u015Fik Ge\xE7i\u015Fi","th.1h":"Araf","th.1s":"Evrenin bitti\u011Fi gri b\xF6lge.","th.2h":"Cherqa","th.2s":"Ge\xE7i\u015F ve ar\u0131nma boyutu. Zaman burada akmaz.","th.3h":"E\u015Flenik Evren","th.3s":"Bilinen tek gezegeni Eirahoutmoss; gerisi hen\xFCz bir gizem.","cmd.btn":"\u25A6 Komuta Masas\u0131","cmd.on":"\u25A6 Komuta Masas\u0131: a\xE7\u0131k","cmd.1h":"Komuta Masas\u0131","cmd.1s":"Konfederasyon, tepeden: her halka bir sekt\xF6r, her sekt\xF6r bir sorumluluk.","snap.btn":"\u25C9 Kare yakala","snap.mark":"Qul Efsaneleri","snap.done":"Kare indirildi (sinema oran\u0131).","nar.btn":"\u266B Anlat\u0131c\u0131: kapal\u0131","nar.on":"\u266B Anlat\u0131c\u0131: a\xE7\u0131k","pair.btn":"\u21CC E\u015Fleme","pair.1h":"Yeremya","pair.1s":"D\xFCnya, Yeremya evreninde. Eirahoutmoss ile e\u015Fleniktir.","pair.2h":"\u0130ki evren, bir e\u015Fleme","pair.2s":"Aralar\u0131nda Araf ve Cherqa var.","pair.3h":"Eirahoutmoss","pair.3s":'Elementlerin ve hen\xFCz bilinmeyen "ard\u0131l bilgiler"in aktif oldu\u011Fu kadim gezegen.',"btn.map":"\u25A6 Haritay\u0131 a\xE7","map.close":"\u2715 Kapat","map.hint":"S\xFCr\xFCkle \xB7 tekerlekle yak\u0131nla\u015F \xB7 bir yere t\u0131kla","map.unwritten":"Bu b\xF6lge i\xE7in kay\u0131t hen\xFCz eklenmedi.","map.kis":"Kronolitlerin g\xF6\u011Fe y\xFCkseldi\u011Fi, g\xF6lgeleri takvim olan \u015Fehir.","map.enter":"\u25B6 Kisura'ya gir","tools.btn":"\u2630 Ara\xE7lar","btn.surface":"\u25C7 Y\xFCzey u\xE7u\u015Fu","surf.fail":"Bu cihazda y\xFCzey g\xF6r\xFCnt\xFCs\xFC ba\u015Flat\u0131lamad\u0131 (grafik s\xFCr\xFCc\xFCs\xFC hatas\u0131). Galaksi haritas\u0131n\u0131 kullanmaya devam edebilirsin.","surf.note":"Prosed\xFCrel konsept y\xFCzey \xB7 kanon \xE7izimi de\u011Fil","surf.hint":"Fare: bak \xB7 s\xFCr\xFCkle / Q E: d\xF6n \xB7 W A S D: y\xFCr\xFC \xB7 Bo\u015Fluk / C: y\xFCkseklik \xB7 Shift: h\u0131zlan \xB7 F: oto-s\xFCz\xFClme \xB7 T: g\xFCn d\xF6ng\xFCs\xFC \xB7 P: foto\u011Fraf \xB7 K: kalite \xB7 V: bak\u0131\u015F \xB7 O: y\xF6r\xFCnge \xB7 R: video \xB7 M: g\xF6k haritas\u0131 \xB7 L: g\xF6zlem arac\u0131","surf.close":"\u2715 Gezegene d\xF6n","surf.dive":" \xB7 X: dal\u0131\u015F","surf.photo":"\u25C9 Foto\u011Fraf","surf.load":"Gezegene ini\u015F yap\u0131l\u0131yor\u2026 ekran birka\xE7 saniye hareketsiz kalabilir, l\xFCtfen bekle.","esik.note":"Fare: derinli\u011Fe bak \xB7 Esc: \xE7\u0131k","esik.close":"\u2715 Gezegene d\xF6n","esik.eyebrow":"E\u015Fik b\xF6lgeleri","esik.a.t":"Araf","esik.a.1":"Evrenin bitti\u011Fi gri b\xF6lge.","esik.c.t":"Cherqa","esik.c.1":"Ge\xE7i\u015F ve ar\u0131nma boyutu.","esik.c.2":"Zaman akmaz.","esik.c.3":"Bilgi Nehri buradan akar.","esik.c.4":"Burada bir se\xE7im yap\u0131l\u0131r.","esik.cross":"E\u015Fi\u011Fi ge\xE7 \u203A","esik.back":"\u2039 Araf'a d\xF6n","btn.esik":"\u25C7 E\u015Fi\u011Fe yakla\u015F","surf.q":"Kalite","surf.q0":"D\xFC\u015F\xFCk","surf.q1":"Orta","surf.q2":"Y\xFCksek","surf.lat":"Enlem","surf.N":"K","surf.S":"G","surf.s0":"\u0130lkbahar","surf.s1":"Yaz","surf.s2":"Sonbahar","surf.s3":"K\u0131\u015F","surf.w0":"A\xE7\u0131k","surf.w1":"Bulutlu","surf.w2":"Ya\u011Fmurlu","surf.w3":"F\u0131rt\u0131na","surf.wDust":"Toz f\u0131rt\u0131nas\u0131","surf.poi":"\u0130z","surf.poiHint":"Ufuktaki \u0131\u015F\u0131k s\xFCtunlar\u0131 bu d\xFCnyaya ait kay\u0131tlar\u0131 ta\u015F\u0131r. Yakla\u015F ve oku.","surf.view":"Bak\u0131\u015F","surf.v.gezgin":"Gezgin","surf.v.yerli":"Yerli","surf.v.gozlemci":"G\xF6zlemci","surf.touch":"Sol taraf: hareket \xB7 Sa\u011F taraf: bak \xB7 \u25B2\u25BC: y\xFCkseklik","log.btn":"\u25C8 K\xE2\u015Fif defteri","log.eyebrow":"Galaksi Konfederasyonu","log.title":"K\xE2\u015Fif Defteri","log.worlds":"d\xFCnya","log.traces":"iz","log.photos":"foto\u011Fraf","log.row":"{v} ziyaret \xB7 {f} iz \xB7 {p} foto\u011Fraf","log.empty":'Hen\xFCz hi\xE7bir d\xFCnyaya inmedin. Bir gezegende "Y\xFCzey u\xE7u\u015Fu"nu dene; ziyaretlerin ve buldu\u011Fun izler burada birikir.',"ortak.n":"\u015Eu an {n} k\xE2\u015Fif g\xF6ky\xFCz\xFCnde","ortak.here":"{n} ki\u015Fi bu sekt\xF6rde","surf.nbP":"Bu sekt\xF6rdeki kom\u015Fu d\xFCnya \u2014 t\u0131kla ve oraya in","surf.nbG":"Kom\u015Fu galaksi \u2014 t\u0131kla ve haritada ona git","surf.calm":"Sakin mod","surf.calmOn":"Sakin mod a\xE7\u0131k","surf.video":"10 sn video","surf.videoNo":"Bu taray\u0131c\u0131 video kayd\u0131n\u0131 desteklemiyor.","surf.warp":"Y\xF6r\xFCngeye \xE7\u0131k\u0131l\u0131yor","surf.orbit":"Y\xF6r\xFCnge","surf.orbitHint":"Gezegenin bir noktas\u0131na t\u0131kla, tam oraya in. O: geri d\xF6n.","surf.map":"G\xF6k haritas\u0131","surf.mapOn":"Y\xF6n \xE7izgileri ve g\xF6k cisimlerinin adlar\u0131 a\xE7\u0131k. M: kapat.","surf.mapOff":"Kapand\u0131.","surf.sun":"G\xFCne\u015F","surf.sunTwin":"\u0130kiz y\u0131ld\u0131z","surf.moon":"Uydu","surf.cN":"K","surf.cE":"D","surf.cS":"G","surf.cW":"B","log.gallery":"Galeri","ui.atlas":"\u2630 Atlas","era.label":"Zaman katman\u0131","era.now.y":"G\xFCn\xFCm\xFCz","era.now.n":"Yeremya \xB7 D\xFCnya","era.now.d":"Maddi d\xFCnya: her \u015Fey frekans ve titre\u015Fim fizi\u011Fiyle i\u015Fler. Hik\xE2yenin ba\u015Flad\u0131\u011F\u0131 yer.","era.itf.y":"+2600 y\u0131l","era.itf.n":"\u0130lk Tohum Filosu","era.itf.d":"\u0130lk koloni gemisi dalgas\u0131. Galaksi Konfederasyonu hen\xFCz yok; koloniciler zorlu d\xFCnyalara genetik uyumla tutunuyor.","era.conf.y":"+15.000 y\u0131l","era.conf.n":"Galaksi Konfederasyonu","era.conf.d":"Yakla\u015F\u0131k 1000 gezegenden olu\u015Fan siyasal yap\u0131; en etkin y\xFCz kadar\u0131 bu haritada.","id.explorer":"K\xE2\u015Fif","id.home":"D\xFCnya (Yeremya)","id.itf":"\u0130lk Tohum Filosu","id.title":"K\xE2\u015Fif Kimli\u011Fi","id.lead":"Konfederasyon kayd\u0131na kendini yaz: bir ad, geldi\u011Fin sekt\xF6r ve sana en yak\u0131n aksiyom. Yaln\u0131zca bu taray\u0131c\u0131da saklan\u0131r.","id.name":"K\xE2\u015Fif ad\u0131 (iste\u011Fe ba\u011Fl\u0131)","id.sector":"K\xF6ken sekt\xF6r\xFC","id.axiom":"Sana en yak\u0131n aksiyom","id.save":"Kaydet","id.card":"Kimlik kart\u0131n\u0131 indir","id.close":"Kapat","id.stats":"{w} d\xFCnya ziyaret edildi \xB7 {f} iz bulundu","id.none":"Hen\xFCz bir k\xE2\u015Fif kimli\u011Fin yok.","id.create":"Kimlik olu\u015Ftur","id.edit":"Kimli\u011Fi d\xFCzenle","id.yours":"senin aksiyomun","surf.tideUp":"Gelgit y\xFCkseliyor","surf.tideDn":"Gelgit \xE7ekiliyor","surf.cave":"Ma\u011Fara giri\u015Fi","surf.caveHint1":"Par\u0131ldayan mantarlar\u0131n ayd\u0131nlatt\u0131\u011F\u0131 yeralt\u0131 ma\u011Faralar\u0131. G: gir.","surf.caveHint2":"Buzullar\u0131n alt\u0131ndaki gizemli ma\u011Faralar. G: gir.","surf.caveHint3":"Yeralt\u0131 madenci kolonicilerin t\xFCnelleri. G: gir.","surf.caveIn":"Ma\u011Fara \xB7 {m} m","surf.caveIn2":"Fener a\xE7\u0131k. W/S: ilerle \xB7 Q/E: d\xF6n \xB7 G ya da geri y\xFCr\xFC: \xE7\u0131k.","sergi.scan":"Telefonunla tara, evreni ke\u015Ffet","sergi.resume":"\u25B6 G\xF6sterimi s\xFCrd\xFCr","log.community":"Topluluk \xB7 bu ay en \xE7ok iz bulunan d\xFCnyalar","log.found":"{n} iz","mec.btn":"\u2696 Meclis","mec.eyebrow":"Konfederasyon Meclisi","mec.next":"Sonraki","mec.total":"{n} k\xE2\u015Fif oy verdi.","mec.thanks":"Tutumun kaydedildi.","mec.anon":"Oylar anonimdir.","let.title":"K\xE2\u015Fif mektuplar\u0131","let.anon":"imzas\u0131z bir k\xE2\u015Fif","let.write":"Konfederasyon'a mektup","let.world":"Hangi d\xFCnyadan yaz\u0131yorsun?","let.text":"Mektubun","let.note":"Mektubun yazara iletilir; onaylan\u0131rsa o d\xFCnyan\u0131n sayfas\u0131nda, k\xE2\u015Fif ad\u0131nla yer al\u0131r.","let.send":"G\xF6nder","let.ok":"\u0130letildi. Te\u015Fekk\xFCrler.","let.err":"G\xF6nderilemedi, sonra yeniden dene.","aks.btn":"\u25D0 Aksiyomlar","aks.title":"Bask\u0131n aksiyom","aks.1":"Anlam, \u0130li\u015Fkiden Do\u011Far","aks.2":"Ger\xE7eklik, Tutarl\u0131l\u0131kt\u0131r","aks.3":"Ama\xE7, De\u011Fer Yaratmakt\u0131r","aks.count":"{n} d\xFCnya ({e} tahmini)","aks.note":"Her galaksi, kay\u0131tl\u0131 d\xFCnyalar\u0131nda en s\u0131k g\xF6r\xFClen aksiyomun rengini al\u0131r. Gri: aksiyomu bilinmeyen.","surf.scan":"G\xF6zlem arac\u0131","surf.scT":"Termal","surf.scM":"Manyetik alan","surf.scS":"Spektrum","surf.r.t":"Y\xFCzey s\u0131cakl\u0131\u011F\u0131","surf.r.p":"Bas\u0131n\xE7","surf.r.o2":"Oksijen","surf.r.g":"Yer\xE7ekimi","surf.r.mag":"Manyetik alan","surf.r.rad":"Radyasyon","surf.src.kanon":"kanon","surf.src.tahmini":"tahmini","surf.src.temsili":"temsili","surf.src.yok":"veri yok","surf.scNote1":"Yapay renkli termal g\xF6r\xFCnt\xFC: s\u0131cakl\u0131klar gezegen t\xFCr\xFCnden ve g\xFCne\u015F alan y\xFCzeyden tahmin edilir.","surf.scNote2":"Manyetik alan \xE7izgileri ve kutup b\xF6lgeleri (temsili). G\xFCc\xFC kanondaki ifadeye g\xF6re ayarlan\u0131r.","surf.scNote3":"Atmosfer so\u011Furma \xE7izgileri: kanonda ad\u0131 ge\xE7en bile\u015Fenlerin ger\xE7ek dalga boylar\u0131.","surf.prep":"Y\xFCzey u\xE7u\u015Fu arka planda haz\u0131rlan\u0131yor\u2026 sen gezmeye devam et.","surf.ready":"Haz\u0131r \u2014 y\xFCzeye in","surf.ready2":"Y\xFCzey u\xE7u\u015Fu haz\u0131r.","ui.driftHide":"Gezinti d\xFC\u011Fmesini gizle","ui.driftHide2":"Gezinti d\xFC\u011Fmesini gizle","ui.driftShow":"Gezinti d\xFC\u011Fmesini g\xF6ster"};var Wa=window.QUL_LANG||{code:"tr",dir:"ltr",s:{}},vn=Wa.code,F=(n,e)=>{let t=Wa.s[n];return t==null&&(t=Wf[n]),t==null&&(t=n),e?t.replace(/\{(\w+)\}/g,(i,s)=>e[s]!=null?e[s]:i):t},qa=n=>Math.round(n).toLocaleString(vn);function o_(n,e){n.planets.forEach(t=>{let i="planet."+t.key+".";["title","eyebrow","desc","imgNote"].forEach(r=>t[r]!=null&&e(i+r,t,r));let s=t.card||{};["durum","aksiyom"].forEach(r=>s[r]!=null&&e(i+"card."+r,s,r)),(s.extra||[]).forEach((r,o)=>{e(i+"extra."+o+".h",r,"h"),r.items.forEach((a,l)=>e(i+"extra."+o+".i."+l,r.items,l))})}),n.galaxies.forEach(t=>t.name!=null&&e("galaxy."+t.id+".name",t,"name")),Object.keys(n.bh).forEach(t=>{let i=n.bh[t];["title","eyebrow","desc"].forEach(s=>i[s]!=null&&e("bh."+t+"."+s,i,s)),(i.rows||[]).forEach((s,r)=>[0,1].forEach(o=>e("bh."+t+".row."+r+"."+o,s,o)))})}function qf(n){vn!=="tr"&&(o_(n,(e,t,i)=>{Wa.s[e]!=null&&(t[i]=Wa.s[e])}),document.documentElement.lang=vn,document.documentElement.dir=Wa.dir||"ltr",document.title=F("ui.pageTitle"),document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=F(e.dataset.i18n)),document.querySelectorAll("[data-i18n-ph]").forEach(e=>e.placeholder=F(e.dataset.i18nPh)))}var qe=(function(){let n,e,t,i={},s=null,r=null,o=[],a=null,l=null;function u(){if(a){a=null;let P=l;l=null,P&&P()}}let c=new B(2600,3400,9600),d=new B(2600,0,0),h={active:!1,t:0,dur:2.4,fromP:new B,fromT:new B,dest:null,arc:0,done:null};function f(P,z,H){e=z,t=P.domElement,i=H,n=new ca(e,t),n.enableDamping=!0,n.dampingFactor=.07,n.minDistance=10,n.maxDistance=3e4,n.target.copy(d);let W=null;t.addEventListener("pointerdown",X=>{u(),W=[X.clientX,X.clientY],i.onUser&&i.onUser()}),t.addEventListener("pointerup",X=>{if(!W)return;let te=Math.hypot(X.clientX-W[0],X.clientY-W[1]);W=null,te<5&&I(X)}),t.addEventListener("pointermove",S),addEventListener("keydown",X=>{X.key==="Escape"&&(i.onUser&&i.onUser(),R())})}let g=P=>{let z=t.getBoundingClientRect();return{x:(P.clientX-z.left)/z.width*2-1,y:-((P.clientY-z.top)/z.height)*2+1}};function v(P,z,H,W){u(),h.fromP.copy(e.position),h.fromT.copy(n.target),h.dest=P,h.t=0,h.dur=W||Math.min(4,Math.max(2.2,1.9+z/6e3*1.4)),h.arc=z*.08,h.active=!0,h.done=H||null,r=null}let m=(P,z)=>{let H=e.position.clone().sub(P).normalize();return H.y=Math.max(H.y,z),H.normalize()};function p(P){if(P===s)return;s=P,ve.setFocus(P);let z=P&&ve.galaxy(P);i.onFocus&&i.onFocus(z?z.g:null,z?ve.planetsOf(P):[])}function w(P){let z=ve.galaxy(P),H=z.outer.position.clone(),W=m(H,.3),X=H.clone().addScaledVector(W,Math.max(z.g.R*2.6,120));p(P),v(()=>({pos:X,target:H}),e.position.distanceTo(X),()=>i.onGalaxy&&i.onGalaxy(z.g))}function M(P){let z=ve.galaxy(P),H=ve.bhWorld(P),W=m(H,.2),X=H.clone().addScaledVector(W,Math.max(z.bh.rh*15,40));p(P),v(()=>({pos:X,target:H}),e.position.distanceTo(X),()=>i.onBH&&i.onBH(P))}function k(P){let z=ve.planetGalaxy(P);if(!z)return;p(z);let H=ve.galaxy(z),W=ve.planetWorld(P),X=m(W,.25),te=Math.max(H.g.R*.16,16);v(()=>{let ae=ve.planetWorld(P);return{pos:ae.clone().addScaledVector(X,te),target:ae}},e.position.distanceTo(W),()=>i.onPlanet&&i.onPlanet(P)),r=P}function I(P){let z=g(P),H=ve.pickPlanet(z);if(H){k(H);return}let W=ve.pickBH(z);if(W){M(W);return}let X=ve.pickGalaxy(z);X&&X!==s&&w(X)}function S(P){let z=g(P),H=ve.pickPlanet(z),W=null,X=null;if(H)W=i.titleOf(H);else{let te=ve.pickBH(z);if(te)W=F("tip.bh",{name:i.bhTitle(te)});else{let ae=ve.pickGalaxy(z);if(ae){X=ae;let oe=ve.galaxy(ae).g;W=oe.bg?F("gal.unreg"):F("tip.gal",{name:oe.name,n:ve.planetsOf(ae).length})}}}ve.setHover(X),t.style.cursor=W?"pointer":"grab",i.tip&&i.tip(W,P.clientX,P.clientY)}function _(P){if(h.active){h.t=Math.min(1,h.t+P/h.dur);let z=Vi(h.t),H=h.dest();if(e.position.lerpVectors(h.fromP,H.pos,z),e.position.y+=Math.sin(Math.PI*z)*h.arc,n.target.lerpVectors(h.fromT,H.target,z),i.onFlight&&i.onFlight(z),h.t>=1){e.position.copy(H.pos),n.target.copy(H.target),h.active=!1,i.onFlight&&i.onFlight(null);let W=h.done;h.done=null,W&&W(),o.splice(0).forEach(X=>X())}}else if(a)a(P)===!1&&u();else if(r){let z=ve.planetWorld(r);e.position.add(z.clone().sub(n.target)),n.target.copy(z)}n.update()}function R(){p(null),v(()=>({pos:c,target:d}),e.position.distanceTo(c),()=>i.onHome&&i.onHome())}function x(){e.position.set(2600,6500,22e3),n.target.copy(d),v(()=>({pos:c,target:d}),0,()=>i.onIntroDone&&i.onIntroDone(),16)}let b=()=>n.target;function E(P,z){p(null);let H=new B(...P),W=new B(...z);v(()=>({pos:H,target:W}),e.position.distanceTo(H))}function O(P,z){u(),r=null,a=P,l=z||null}function q(P,z){O(H=>{if(h.active)return;if(z){let K=ve.planetWorld(z);e.position.add(K.clone().sub(n.target)),n.target.copy(K)}let W=n.target,X=e.position.clone().sub(W),te=P*H,ae=Math.cos(te),oe=Math.sin(te);e.position.set(W.x+X.x*ae-X.z*oe,W.y+X.y+Math.sin(performance.now()/6e3)*P*H*X.length()*.15,W.z+X.x*oe+X.z*ae)})}return{orbit:q,view:E,target:b,drive:O,init:f,update:_,reset:R,intro:x,focusGalaxy:w,focusBH:M,flyToPlanet:k,whenIdle:()=>new Promise(P=>{h.active?o.push(P):P()})}})();var Ls=n=>document.getElementById(n),Gi=(function(){let n=null,e=[],t=null,i=(c,d)=>e.push(setTimeout(d,c));function s(c){try{parent.postMessage({qulDuck:c},"*")}catch{}}function r(){n=document.createElement("div"),n.id="kis",n.innerHTML='<div class="kmap"><img src="img/eirahoutmoss.jpg" alt=""></div><video id="kv" playsinline preload="auto" poster="img/kisura-poster.jpg"></video><div class="kvg"></div><div class="kfl"></div><div class="kcap"><small id="kc1"></small><h2 id="kc2"></h2><p id="kc3"></p></div><button id="kx"></button>',document.body.appendChild(n),Ls("kx").onclick=u,Ls("kx").textContent=F("cin.close")}function o(c,d,h){let f=document.querySelector(".kcap");f.classList.remove("on"),f.offsetWidth,Ls("kc1").textContent=c,Ls("kc2").textContent=d,Ls("kc3").textContent=h||"",f.classList.add("on")}function a(c){return new Promise(d=>{t=d,n||r(),n.classList.remove("land"),n.querySelector(".kmap img").src="img/eirahoutmoss.jpg";let h=Ls("kv");h.src="img/kisura.mp4",h.currentTime=0,h.classList.remove("on"),n.classList.remove("vid"),n.classList.add("on"),document.documentElement.style.setProperty("--bar","9vh"),s(!0);let f=n.querySelector(".kmap img");f.style.animation="none",f.offsetWidth,f.style.animation="",o(F("cin.c1"),F("cin.h1"),F("cin.p1")),i(5200,()=>{n.classList.add("vid"),h.classList.add("on"),h.muted=!1;let g=h.play();g&&g.catch&&g.catch(()=>{h.muted=!0,h.play().catch(()=>{})}),o(F("cin.c2"),F("cin.h2"),F("cin.p2"))}),h.onended=()=>{o(F("cin.c2"),F("cin.h3"),F("cin.p3")),c&&c.auto&&i(4500,u)}})}function l(c){n||r(),Ls("kv").classList.remove("on"),n.classList.remove("vid"),n.querySelector(".kmap img").src=c.img,n.classList.add("land","on"),document.documentElement.style.setProperty("--bar","9vh"),o(c.eyebrow||"",c.title,(c.desc||"").split(". ")[0].replace(/\.$/,"")+".")}function u(){if(!n||!n.classList.contains("on"))return;if(e.forEach(clearTimeout),e=[],Ls("kv").pause(),n.classList.remove("on"),document.documentElement.style.setProperty("--bar","0vh"),s(!!window.__hush),t){let d=t;t=null,d()}}return{kisura:a,land:l,close:u}})();var qi={};Nm(qi,{chips:()=>Du,closePanel:()=>bt,flight:()=>da,initSearch:()=>zu,openItem:()=>Cl,setup:()=>Lu,tip:()=>Iu,titleCard:()=>Et,titleDur:()=>Ka,toast:()=>ha});var ua=()=>{let n=window.QUL_ORTAK;return n?n.replace(/^wss:/,"https:").replace(/^ws:/,"http:").replace(/\/$/,""):""},Ru=(n,e)=>fetch(ua()+n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(t=>t.json()),Cu={},Wi=null,Pu=null,Xf=0,Is=null,l_=n=>{Is||(Is=document.createElement("div"),Is.id="ortak",document.body.appendChild(Is)),Is.textContent=F("ortak.n",{n:n.n})+(n.here>1?" \xB7 "+F("ortak.here",{n:n.here-1}):""),Is.classList.add("on")},Yf=()=>{try{Wi&&Wi.readyState===1&&Pu&&Wi.send(JSON.stringify({s:Pu}))}catch{}},Kf=()=>{let n=window.QUL_ORTAK;if(n){try{Wi=new WebSocket(n)}catch{return}Wi.onopen=()=>{Xf=0,Yf()},Wi.onmessage=e=>{try{let t=JSON.parse(e.data);t.top&&(window.__qulTop=t.top),l_(t)}catch{}},Wi.onclose=()=>{Is&&Is.classList.remove("on"),setTimeout(Kf,Math.min(6e4,2e3*Math.pow(2,Xf++)))}}},Zf=n=>{try{Wi&&Wi.readyState===1&&Wi.send(JSON.stringify({f:String(n)}))}catch{}};addEventListener("qulFound",n=>Zf(n.detail));var Tn={start(){Kf()},where(n){Pu=String(n||""),Yf()},found:Zf,on:()=>!!ua(),letters(n){return ua()?Cu[n]?Promise.resolve(Cu[n]):fetch(ua()+"/api/mektuplar?k="+encodeURIComponent(n)).then(e=>e.json()).then(e=>Cu[n]=Array.isArray(e)?e:[]).catch(()=>[]):Promise.resolve([])},sendLetter:(n,e,t)=>Ru("/api/mektup",{k:n,m:e,i:t}),vote:(n,e)=>Ru("/api/meclis",{q:n,o:e}),results:()=>fetch(ua()+"/api/meclis").then(n=>n.json()).catch(()=>({})),measure:(n,e,t)=>{if(!(!ua()||navigator.doNotTrack==="1"||window.doNotTrack==="1"))try{Ru("/api/olcum",{fps:n,q:e,m:t}).catch(()=>{})}catch{}}};var Xa=!1,ku=n=>{try{parent.postMessage({qulDuck:n},"*")}catch{}},Ya={get on(){return Xa},ok:!1,toggle(){return Xa=!Xa,!Xa&&window.speechSynthesis&&(speechSynthesis.cancel(),ku(!!window.__hush)),Xa},say(n,e){}};var xt=n=>document.getElementById(n),os=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),jf=n=>"rgb("+n.join(",")+")",Jf=(n,e,t)=>n.map((i,s)=>Math.round(i+(e[s]-i)*t)),Qf={};function Lu(n){n.galaxies.forEach(e=>Qf[e.id]=e.name),xt("lb").onclick=()=>xt("lb").classList.remove("on")}function c_(n){n=n.toLowerCase();let e=t=>t.test(n);return e(/volkan|lav|magma|pirosferik|ateş/)?{a:[255,120,40],b:[90,18,10],atm:"255,150,70"}:e(/buz|buzul|fiyort|donmuş/)?{a:[220,240,255],b:[110,160,200],atm:"170,215,255"}:e(/okyanus|su altı|su dünyası|akuatik|sıvı|akışkan/)?{a:[70,150,230],b:[10,45,110],atm:"110,180,255"}:e(/çöl|kum/)?{a:[230,185,110],b:[140,80,40],atm:"235,190,130"}:e(/orman|bitki|ağaç|biyosfer|tarımsal/)?{a:[90,190,110],b:[18,70,45],atm:"140,230,150"}:e(/gaz dev|gaz halka|gaz tabaka|gaz gezegeni|atmosfer gezegeni|bulut/)?{a:[235,200,150],b:[150,90,60],atm:"240,200,160",bands:!0}:e(/kristal|prizma|spektr/)?{a:[120,230,210],b:[170,80,190],atm:"160,235,225"}:e(/neon|ışık|foton|radyant|lüminesans|aurora/)?{a:[170,140,255],b:[40,60,150],atm:"180,170,255"}:e(/vakum|karanlık|tekillik|boşluk|sessiz/)?{a:[110,90,150],b:[15,10,30],atm:"140,110,190"}:{a:[150,160,185],b:[30,40,70],atm:"232,184,75"}}function ep(n,e,t,i){n.fillStyle="#05050a",n.fillRect(0,0,e,t);for(let s=0;s<110;s++)n.fillStyle="rgba(216,201,168,"+(.15+i()*.6)+")",n.fillRect(i()*e,i()*t,1+i()*1.4,1+i()*1.4)}function u_(n,e){let t=n.getContext("2d"),i=n.width,s=n.height,r=Gn(ci(e.key)),o=c_((e.desc||"")+" "+e.title);ep(t,i,s,r);let a=i*.5,l=s*.52,u=s*.36;t.save(),t.beginPath(),t.arc(a,l,u,0,6.2832),t.clip();let c=t.createLinearGradient(a-u,l-u,a+u,l+u);if(c.addColorStop(0,jf(o.a)),c.addColorStop(1,jf(o.b)),t.fillStyle=c,t.fillRect(a-u,l-u,2*u,2*u),o.bands)for(let h=0;h<14;h++)t.fillStyle="rgba("+Jf(o.a,o.b,r()).join(",")+","+(.25+r()*.3)+")",t.fillRect(a-u,l-u+h/14*2*u+r()*6,2*u,6+r()*u*.12);for(let h=0;h<46;h++){let f=a+(r()*2-1)*u,g=l+(r()*2-1)*u,v=u*(.08+r()*.3),m=Jf(o.a,o.b,r()).join(","),p=t.createRadialGradient(f,g,0,f,g,v);p.addColorStop(0,"rgba("+m+",.30)"),p.addColorStop(1,"rgba("+m+",0)"),t.fillStyle=p,t.fillRect(f-v,g-v,2*v,2*v)}let d=t.createRadialGradient(a-u*.4,l-u*.35,u*.1,a,l,u*1.05);d.addColorStop(0,"rgba(255,255,255,.18)"),d.addColorStop(.45,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,.82)"),t.fillStyle=d,t.fillRect(a-u,l-u,2*u,2*u),t.restore(),t.save(),t.strokeStyle="rgba("+o.atm+",.55)",t.lineWidth=3,t.shadowColor="rgba("+o.atm+",.9)",t.shadowBlur=26,t.beginPath(),t.arc(a,l,u,0,6.2832),t.stroke(),t.restore(),o.bands&&r()<.6&&(t.save(),t.translate(a,l),t.rotate(-.35),t.strokeStyle="rgba(230,210,170,.4)",t.lineWidth=7,t.beginPath(),t.ellipse(0,0,u*1.6,u*.38,0,0,6.2832),t.stroke(),t.restore())}function h_(n){let e=n.getContext("2d"),t=n.width,i=n.height,s=Gn(7);ep(e,t,i,s);let r=t*.5,o=i*.52,a=i*.13,l=e.createRadialGradient(r,o,a*1.1,r,o,a*3.6);l.addColorStop(0,"rgba(255,215,140,.95)"),l.addColorStop(.4,"rgba(255,110,30,.4)"),l.addColorStop(1,"rgba(255,80,20,0)"),e.save(),e.translate(r,o),e.scale(1,.26),e.translate(-r,-o),e.fillStyle=l,e.beginPath(),e.arc(r,o,a*3.6,0,6.2832),e.fill(),e.restore(),e.save(),e.strokeStyle="rgba(255,215,160,.9)",e.lineWidth=a*.1,e.shadowColor="rgba(255,170,80,1)",e.shadowBlur=30,e.beginPath(),e.arc(r,o,a*1.18,0,6.2832),e.stroke(),e.restore(),e.fillStyle="#000",e.beginPath(),e.arc(r,o,a,0,6.2832),e.fill(),e.save(),e.translate(r,o),e.scale(1,.26),e.translate(-r,-o),e.strokeStyle="rgba(255,190,110,.55)",e.lineWidth=a*.5,e.beginPath(),e.arc(r,o,a*1.7,0,Math.PI),e.stroke(),e.restore()}function Cl(n){xt("pe").textContent=n.eyebrow,xt("pt").textContent=n.title,xt("pd").textContent=n.desc;let e=xt("cv"),t=xt("img"),i=xt("artnote");n.img?(e.style.display="none",t.style.display="block",t.src=n.img,t.onclick=()=>{xt("lbi").src=n.img,xt("lb").classList.add("on")},i.textContent=F("panel.enlarge",{note:n.imgNote||F("panel.guide")})):(t.style.display="none",e.style.display="block",n.bh?h_(e):u_(e,n),i.textContent=n.bh?F("panel.concept"):F("panel.conceptNC"));let s=n.card||{},r=[];if(n.bh)(s.rows||[]).forEach(o=>r.push(o));else{let o=n.gal==="eira"||n.gal==="esik";!o&&n.key!=="dunya"&&r.push([s.kod&&/^İTF/.test(s.kod)?F("row.colony"):F("row.code"),s.kod||F("row.nocode")]),n.gal!=="unas"&&n.gal!=="itf"&&r.push([o?F("row.region"):F("row.galaxy"),Qf[n.gal]]),s.durum&&r.push([o||n.key==="dunya"?F("row.status"):/^İTF/.test(s.kod||"")?F("row.settle"):F("row.dipl"),s.durum]),s.taslak&&r.length&&r.splice(1,0,[F("row.assign"),F("val.draft")]),s.aksiyom&&r.push([F("row.axiom"),s.tahmini?F("row.est",{v:s.aksiyom}):s.aksiyom])}xt("card").innerHTML=r.map(o=>'<div class="row"><span>'+os(o[0])+"</span><b>"+os(o[1])+"</b></div>").join(""),xt("extra").innerHTML=(s.extra||[]).map(o=>"<h3>"+os(o.h)+"</h3><ul>"+o.items.map(a=>"<li>"+os(a)+"</li>").join("")+"</ul>").join(""),n.key&&Tn.on()&&Tn.letters(n.key).then(o=>{!o.length||!xt("extra")||xt("extra").insertAdjacentHTML("beforeend","<h3>"+os(F("let.title"))+"</h3>"+o.slice(-6).reverse().map(a=>'<blockquote class="klet">'+os(a.m)+"<cite>\u2014 "+os(a.i||F("let.anon"))+"</cite></blockquote>").join(""))}),n.key==="eirahoutmoss"&&(xt("extra").insertAdjacentHTML("afterbegin",'<button id="kbtn">'+F("btn.kisura")+'</button><button id="mbtn" class="kb">'+F("btn.map")+"</button>"),xt("kbtn").onclick=()=>window.dispatchEvent(new Event("kisura")),xt("mbtn").onclick=()=>window.dispatchEvent(new Event("emap"))),!n.bh&&n.kind!=="esik"&&!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(n.key)&&(xt("extra").insertAdjacentHTML("afterbegin",'<button id="sbtn" class="kb">'+F("btn.surface")+"</button>"),xt("sbtn").onclick=()=>window.dispatchEvent(new CustomEvent("surface",{detail:n}))),n.key==="araf-cherqa"&&(xt("extra").insertAdjacentHTML("afterbegin",'<button id="sbtn" class="kb">'+F("btn.esik")+"</button>"),xt("sbtn").onclick=()=>window.dispatchEvent(new CustomEvent("esik",{detail:n}))),n.img&&!n.bh&&n.key!=="eirahoutmoss"&&(xt("extra").insertAdjacentHTML("afterbegin",'<button id="lbtn" class="kb">'+F("btn.land")+"</button>"),xt("lbtn").onclick=()=>window.dispatchEvent(new CustomEvent("land",{detail:n}))),n.bh&&n.gal&&(xt("extra").insertAdjacentHTML("afterbegin",'<button id="fbtn" class="kb">'+F("fall.btn")+"</button>"),xt("fbtn").onclick=()=>window.dispatchEvent(new CustomEvent("fall",{detail:n.gal})));try{window.dispatchEvent(new CustomEvent("qulVisit",{detail:{key:n.key,gal:n.gal}}))}catch{}xt("panel").classList.add("open"),xt("panel").scrollTop=0}var bt=()=>xt("panel").classList.remove("open"),Ka=(n,e)=>Math.min(17,Math.max(8,6.5+((n||"").length+(e||"").length)*.08));function Et(n,e){xt("th").textContent=n,xt("ts").textContent=e||"";let t=xt("title");return t.classList.remove("on"),t.style.animationDuration=Ka(n,e)+"s",t.offsetWidth,t.classList.add("on"),Ya.say(n,e),Ka(n,e)}function ha(n){let e=xt("toast");e.textContent=n,e.classList.add("on"),clearTimeout(e._t),e._t=setTimeout(()=>e.classList.remove("on"),3500)}function da(n){let e=document.documentElement.style;if(n===null){e.setProperty("--bar","0vh"),ve.setFov(50),ve.setBloom(.55),ve.setWarp(0);return}let t=Math.sin(Math.PI*n),i=Mu(0,.12,n)*(1-Mu(.88,1,n));e.setProperty("--bar",(i*7).toFixed(2)+"vh"),ve.setFov(50+14*t),ve.setBloom(.55+.55*t),ve.setWarp(.9*t*t)}function Iu(n,e,t){let i=xt("tip");if(!n){i.classList.remove("on");return}i.textContent=n,i.style.left=e+16+"px",i.style.top=t+12+"px",i.classList.add("on")}function Du(n,e,t,i,s){xt("where").textContent=n?n.name:"";let r=xt("chips");if(r.innerHTML="",!!n){if(s[n.id]){let o=document.createElement("button");o.className="bhc",o.textContent="\u25CF "+s[n.id].title,o.onclick=()=>t.bh(n.id),r.appendChild(o)}if(t.light&&!["home","eira","esik","itf","unas"].includes(n.id)){let o=document.createElement("button");o.className="bhc",o.textContent=F("light.btn"),o.onclick=()=>t.light(n.id),r.appendChild(o)}if(!e.length){let o=document.createElement("span");o.textContent=n.bg?F("chips.none0"):F("chips.none1"),r.appendChild(o);return}e.forEach(o=>{let a=document.createElement("button");a.textContent=i[o].title,a.onclick=()=>t.planet(o),r.appendChild(a)})}}var $f=n=>n.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/ı/g,"i");function zu(n,e,t){let i=n.planets.map(l=>l.key==="dunya"?{t:"sol",id:"earth",key:"dunya",label:l.title,sub:"G\xFCne\u015F Sistemi \xB7 Earth",alias:"earth world dunya yolculuk solar system"}:{t:"planet",key:l.key,label:l.title,sub:l.eyebrow}).concat([{t:"bh",id:"home",label:n.bh.home.title,sub:F("search.bh")}]).concat(n.galaxies.filter(l=>!l.bg&&l.id!=="home").map(l=>({t:"galaxy",id:l.id,label:l.name,sub:F("search.gal")}))).concat(t||[]),s=xt("q"),r=xt("sres"),o=[],a=l=>{r.innerHTML="",s.value="",s.blur(),e(l)};s.addEventListener("input",()=>{let l=$f(s.value.trim());r.innerHTML="",o=[],l&&(o=i.filter(u=>$f(u.label+" "+(u.alias||"")).includes(l)).slice(0,8),o.forEach(u=>{let c=document.createElement("button");c.innerHTML=os(u.label)+" <small>"+os(u.sub)+"</small>",c.onclick=()=>a(u),r.appendChild(c)}))}),s.addEventListener("keydown",l=>{l.key==="Enter"&&o[0]&&a(o[0]),l.stopPropagation()})}var Pl=(function(){let n=!1,e=null,t=null,i={},s=["aetherium","event-horizon","bio-nexus","javelin","nihil","ethos"],r=c=>new Promise(d=>{e=setTimeout(d,c)}),o=()=>bt();function a(){n&&(n=!1,clearTimeout(e),t.textContent=F("ui.tour"))}async function l(){if(n=!0,t.textContent=F("ui.tourStop"),bt(),qe.reset(),await qe.whenIdle(),!!n&&(Et(F("tour.t1"),F("ui.title")),await r(6500),!!n&&(qe.focusBH("home"),await qe.whenIdle(),!!n))){await r(6500);for(let c of s){if(!n)return;let d=i[c];if(d){if(qe.focusGalaxy(d.gal),await qe.whenIdle(),!n||(await r(6500),!n)||(qe.flyToPlanet(c),await qe.whenIdle(),!n))return;await r(7500)}}n&&(qe.focusGalaxy("eira"),await qe.whenIdle(),n&&(await r(6500),n&&(qe.flyToPlanet("eirahoutmoss"),await qe.whenIdle(),n&&(await r(4e3),n&&(o(),await Gi.kisura({auto:!0}),n&&n&&(a(),bt(),qe.reset()))))))}}function u(c,d){t=c,d.planets.forEach(h=>i[h.key]=h),t.onclick=()=>n?a():l()}return{init:u,stop:a}})();var Uu=(function(){let n=!1,e=null,t=null,i=null,s=null,r=null,o=!1,a=!1,l=232.6,u=(S,_)=>{let R=F(S);return R&&R!==S?R:_},c=S=>Math.round(S).toLocaleString(document.documentElement.lang==="en"?"en-US":"tr-TR"),d=S=>new Promise(_=>{let R=0,x=()=>{if(!n||a){_();return}if(o||(R+=200),R>=S){_();return}e=setTimeout(x,200)};x()}),h=()=>document.fullscreenElement||document.webkitFullscreenElement;function f(){try{let S=document.documentElement,_=S.requestFullscreen||S.webkitRequestFullscreen;if(_){let R=_.call(S);R&&R.catch&&R.catch(()=>{})}}catch{}}function g(){try{if(h()){let S=document.exitFullscreen||document.webkitExitFullscreen;if(S){let _=S.call(document);_&&_.catch&&_.catch(()=>{})}}}catch{}}function v(){t.textContent=n?u("ui.driftStop","\u25A0 Gezintiyi durdur"):u("ui.drift","\u26F6 Galaksi Gezintisi")}function m(){if(n){n=!1,o=!1,a=!1,clearTimeout(e),document.body.classList.remove("drift");try{s&&s.release()}catch{}s=null,g(),v()}}let p=(S,_)=>Math.hypot(S.pos[0]-_.pos[0],S.pos[1]-_.pos[1],S.pos[2]-_.pos[2])*l;function w(){let S=i.galaxies.filter(E=>!E.bg&&E.id&&E.pos),_=i.galaxies.find(E=>E.id==="home")||S[0],R=S.filter(E=>E!==_),x=[],b=_;for(S.includes(_)&&x.push(_);R.length;){let E=0,O=1e18;R.forEach((q,U)=>{let P=p(b,q);P<O&&(O=P,E=U)}),b=R.splice(E,1)[0],x.push(b)}return x}function M(S,_,R,x,b){let E=i.galaxies.find(O=>O.id==="home");r.innerHTML="<b>"+(S.name||"")+"</b><span>"+u("drift.home","Evin'e uzakl\u0131k")+": "+c(p(S,E))+" "+u("drift.unit","\u0131\u015F\u0131k y\u0131l\u0131")+"</span><span>"+u("drift.trav","Katedilen")+": "+c(_)+" "+u("drift.unit","\u0131\u015F\u0131k y\u0131l\u0131")+"</span><span>"+u("drift.seen","G\xF6r\xFClen gezegen")+": "+R+"</span><span>"+x+" / "+b+"</span>"}async function k(){n=!0,o=!1,a=!1,v(),f(),document.body.classList.add("drift"),bt();try{navigator.wakeLock&&(s=await navigator.wakeLock.request("screen"))}catch{}if(qe.reset(),await qe.whenIdle(),!n)return;Et(u("drift.t","Galaksiler"),u("ui.title","Qul Efsaneleri")),await d(5e3);let S=w(),_=0,R=0,x=S[0],b=!1;for(;n;){for(let E=0;E<S.length;E++){let O=S[E];if(!n)return;a=!1;try{qe.focusGalaxy(O.id)}catch{continue}if(_+=p(x,O),x=O,M(O,_,R,E+1,S.length),await qe.whenIdle(),!n)return;bt(),qe.orbit(.05),await d(6500);let q=i.planets.filter(P=>P.gal===O.id&&P.desc).sort(()=>Math.random()-.5).slice(0,3),U=!1;for(let P of q){if(a){U=!0;break}try{qe.flyToPlanet(P.key)}catch{continue}if(await qe.whenIdle(),!n||(R++,M(O,_,R,E+1,S.length),qe.orbit(.09,P.key),await d(8e3+Math.min(6e3,String(P.desc).length*18)),!n))return;bt(),await d(900)}if(a&&(U=!0,a=!1),!n)return;if(q.length&&!U){try{qe.focusGalaxy(O.id)}catch{}if(await qe.whenIdle(),!n)return;bt()}}if(!n)return;S=S.slice().reverse(),x=S[0]}}function I(S,_){t=S,i=_,v(),r=document.createElement("div"),r.id="dlog",document.body.appendChild(r),t.onclick=b=>{b.stopPropagation(),n?m():k()},document.addEventListener("keydown",b=>{n&&(b.key==="Escape"?m():b.key===" "?(b.preventDefault(),o=!o):b.key==="ArrowRight"&&(a=!0))});let R=!1,x=()=>{let b=!!h();n&&R&&!b&&m(),R=b};document.addEventListener("fullscreenchange",x),document.addEventListener("webkitfullscreenchange",x)}return{init:I,stop:m,get on(){return n}}})();var tp="qdriftpos",np="qdrifthide",kl={g(n){try{return localStorage.getItem(n)}catch{return null}},s(n,e){try{e==null?localStorage.removeItem(n):localStorage.setItem(n,e)}catch{}}};function ip(n){let e=document.createElement("button");e.id="driftx",e.type="button",e.textContent="\u2715",e.title=F("ui.driftHide"),e.setAttribute("aria-label",F("ui.driftHide")),document.body.appendChild(e);let t=(g,v)=>{let m=innerWidth,p=innerHeight,w=n.getBoundingClientRect();g=Math.max(4,Math.min(m-w.width-4,g)),v=Math.max(4,Math.min(p-w.height-4,v)),n.style.left=g+"px",n.style.top=v+"px",n.style.right="auto",n.style.bottom="auto",e.style.left=g+w.width-8+"px",e.style.top=v-8+"px"},i=()=>{try{let g=JSON.parse(kl.g(tp)||"null");g?t(g[0],g[1]):s()}catch{s()}},s=()=>{let g=n.getBoundingClientRect();e.style.left=g.right-8+"px",e.style.top=g.top-8+"px"},r,o,a,l,u=!1,c=!1;n.addEventListener("pointerdown",g=>{c=!0,u=!1,r=g.clientX,o=g.clientY;let v=n.getBoundingClientRect();a=v.left,l=v.top;try{n.setPointerCapture(g.pointerId)}catch{}}),n.addEventListener("pointermove",g=>{if(!c)return;let v=g.clientX-r,m=g.clientY-o;!u&&Math.hypot(v,m)>8&&(u=!0),u&&(n.style.transform="none",t(a+v,l+m))});let d=()=>{if(c&&(c=!1,u)){let g=n.getBoundingClientRect();kl.s(tp,JSON.stringify([Math.round(g.left),Math.round(g.top)])),setTimeout(()=>{u=!1},0)}};n.addEventListener("pointerup",d),n.addEventListener("pointercancel",d),n.addEventListener("click",g=>{u&&(g.stopImmediatePropagation(),g.preventDefault())},!0);let h=g=>{n.style.display=g?"":"none",e.style.display=g?"":"none",kl.s(np,g?null:"1"),g&&i()};e.addEventListener("click",g=>{g.stopPropagation(),h(!1)}),addEventListener("resize",()=>{n.style.display!=="none"&&i()});let f=document.getElementById("tools");if(f){let g=document.createElement("button");g.id="drift0",g.type="button";let v=()=>{g.textContent=n.style.display==="none"?F("ui.driftShow"):F("ui.driftHide2")};g.onclick=()=>{h(n.style.display==="none"),v()},f.appendChild(g),v(),g.addEventListener("click",v)}h(kl.g(np)!=="1"),setTimeout(()=>{n.style.display!=="none"&&i()},50)}var fa=function(n,e){let s=n,r=Za[e],o=null,a=0,l=null,u=[],c={},d=function(_,R){a=s*4+17,o=(function(x){let b=new Array(x);for(let E=0;E<x;E+=1){b[E]=new Array(x);for(let O=0;O<x;O+=1)b[E][O]=null}return b})(a),h(0,0),h(a-7,0),h(0,a-7),v(),g(),p(_,R),s>=7&&m(_),l==null&&(l=k(s,r,u)),w(l,R)},h=function(_,R){for(let x=-1;x<=7;x+=1)if(!(_+x<=-1||a<=_+x))for(let b=-1;b<=7;b+=1)R+b<=-1||a<=R+b||(0<=x&&x<=6&&(b==0||b==6)||0<=b&&b<=6&&(x==0||x==6)||2<=x&&x<=4&&2<=b&&b<=4?o[_+x][R+b]=!0:o[_+x][R+b]=!1)},f=function(){let _=0,R=0;for(let x=0;x<8;x+=1){d(!0,x);let b=zs.getLostPoint(c);(x==0||_>b)&&(_=b,R=x)}return R},g=function(){for(let _=8;_<a-8;_+=1)o[_][6]==null&&(o[_][6]=_%2==0);for(let _=8;_<a-8;_+=1)o[6][_]==null&&(o[6][_]=_%2==0)},v=function(){let _=zs.getPatternPosition(s);for(let R=0;R<_.length;R+=1)for(let x=0;x<_.length;x+=1){let b=_[R],E=_[x];if(o[b][E]==null)for(let O=-2;O<=2;O+=1)for(let q=-2;q<=2;q+=1)O==-2||O==2||q==-2||q==2||O==0&&q==0?o[b+O][E+q]=!0:o[b+O][E+q]=!1}},m=function(_){let R=zs.getBCHTypeNumber(s);for(let x=0;x<18;x+=1){let b=!_&&(R>>x&1)==1;o[Math.floor(x/3)][x%3+a-8-3]=b}for(let x=0;x<18;x+=1){let b=!_&&(R>>x&1)==1;o[x%3+a-8-3][Math.floor(x/3)]=b}},p=function(_,R){let x=r<<3|R,b=zs.getBCHTypeInfo(x);for(let E=0;E<15;E+=1){let O=!_&&(b>>E&1)==1;E<6?o[E][8]=O:E<8?o[E+1][8]=O:o[a-15+E][8]=O}for(let E=0;E<15;E+=1){let O=!_&&(b>>E&1)==1;E<8?o[8][a-E-1]=O:E<9?o[8][15-E-1+1]=O:o[8][15-E-1]=O}o[a-8][8]=!_},w=function(_,R){let x=-1,b=a-1,E=7,O=0,q=zs.getMaskFunction(R);for(let U=a-1;U>0;U-=2)for(U==6&&(U-=1);;){for(let P=0;P<2;P+=1)if(o[b][U-P]==null){let z=!1;O<_.length&&(z=(_[O]>>>E&1)==1),q(b,U-P)&&(z=!z),o[b][U-P]=z,E-=1,E==-1&&(O+=1,E=7)}if(b+=x,b<0||a<=b){b-=x,x=-x;break}}},M=function(_,R){let x=0,b=0,E=0,O=new Array(R.length),q=new Array(R.length);for(let H=0;H<R.length;H+=1){let W=R[H].dataCount,X=R[H].totalCount-W;b=Math.max(b,W),E=Math.max(E,X),O[H]=new Array(W);for(let K=0;K<O[H].length;K+=1)O[H][K]=255&_.getBuffer()[K+x];x+=W;let te=zs.getErrorCorrectPolynomial(X),oe=ja(O[H],te.getLength()-1).mod(te);q[H]=new Array(te.getLength()-1);for(let K=0;K<q[H].length;K+=1){let se=K+oe.getLength()-q[H].length;q[H][K]=se>=0?oe.getAt(se):0}}let U=0;for(let H=0;H<R.length;H+=1)U+=R[H].totalCount;let P=new Array(U),z=0;for(let H=0;H<b;H+=1)for(let W=0;W<R.length;W+=1)H<O[W].length&&(P[z]=O[W][H],z+=1);for(let H=0;H<E;H+=1)for(let W=0;W<R.length;W+=1)H<q[W].length&&(P[z]=q[W][H],z+=1);return P},k=function(_,R,x){let b=sp.getRSBlocks(_,R),E=rp();for(let q=0;q<x.length;q+=1){let U=x[q];E.put(U.getMode(),4),E.put(U.getLength(),zs.getLengthInBits(U.getMode(),_)),U.write(E)}let O=0;for(let q=0;q<b.length;q+=1)O+=b[q].dataCount;if(E.getLengthInBits()>O*8)throw"code length overflow. ("+E.getLengthInBits()+">"+O*8+")";for(E.getLengthInBits()+4<=O*8&&E.put(0,4);E.getLengthInBits()%8!=0;)E.putBit(!1);for(;!(E.getLengthInBits()>=O*8||(E.put(236,8),E.getLengthInBits()>=O*8));)E.put(17,8);return M(E,b)};c.addData=function(_,R){R=R||"Byte";let x=null;switch(R){case"Numeric":x=d_(_);break;case"Alphanumeric":x=f_(_);break;case"Byte":x=p_(_);break;case"Kanji":x=m_(_);break;default:throw"mode:"+R}u.push(x),l=null},c.isDark=function(_,R){if(_<0||a<=_||R<0||a<=R)throw _+","+R;return o[_][R]},c.getModuleCount=function(){return a},c.make=function(){if(s<1){let _=1;for(;_<40;_++){let R=sp.getRSBlocks(_,r),x=rp();for(let E=0;E<u.length;E++){let O=u[E];x.put(O.getMode(),4),x.put(O.getLength(),zs.getLengthInBits(O.getMode(),_)),O.write(x)}let b=0;for(let E=0;E<R.length;E++)b+=R[E].dataCount;if(x.getLengthInBits()<=b*8)break}s=_}d(!1,f())},c.createTableTag=function(_,R){_=_||2,R=typeof R>"u"?_*4:R;let x="";x+='<table style="',x+=" border-width: 0px; border-style: none;",x+=" border-collapse: collapse;",x+=" padding: 0px; margin: "+R+"px;",x+='">',x+="<tbody>";for(let b=0;b<c.getModuleCount();b+=1){x+="<tr>";for(let E=0;E<c.getModuleCount();E+=1)x+='<td style="',x+=" border-width: 0px; border-style: none;",x+=" border-collapse: collapse;",x+=" padding: 0px; margin: 0px;",x+=" width: "+_+"px;",x+=" height: "+_+"px;",x+=" background-color: ",x+=c.isDark(b,E)?"#000000":"#ffffff",x+=";",x+='"/>';x+="</tr>"}return x+="</tbody>",x+="</table>",x},c.createSvgTag=function(_,R,x,b){let E={};typeof arguments[0]=="object"&&(E=arguments[0],_=E.cellSize,R=E.margin,x=E.alt,b=E.title),_=_||2,R=typeof R>"u"?_*4:R,x=typeof x=="string"?{text:x}:x||{},x.text=x.text||null,x.id=x.text?x.id||"qrcode-description":null,b=typeof b=="string"?{text:b}:b||{},b.text=b.text||null,b.id=b.text?b.id||"qrcode-title":null;let O=c.getModuleCount()*_+R*2,q,U,P,z,H="",W;for(W="l"+_+",0 0,"+_+" -"+_+",0 0,-"+_+"z ",H+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',H+=E.scalable?"":' width="'+O+'px" height="'+O+'px"',H+=' viewBox="0 0 '+O+" "+O+'" ',H+=' preserveAspectRatio="xMinYMin meet"',H+=b.text||x.text?' role="img" aria-labelledby="'+I([b.id,x.id].join(" ").trim())+'"':"",H+=">",H+=b.text?'<title id="'+I(b.id)+'">'+I(b.text)+"</title>":"",H+=x.text?'<description id="'+I(x.id)+'">'+I(x.text)+"</description>":"",H+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',H+='<path d="',P=0;P<c.getModuleCount();P+=1)for(z=P*_+R,q=0;q<c.getModuleCount();q+=1)c.isDark(P,q)&&(U=q*_+R,H+="M"+U+","+z+W);return H+='" stroke="transparent" fill="black"/>',H+="</svg>",H},c.createDataURL=function(_,R){_=_||2,R=typeof R>"u"?_*4:R;let x=c.getModuleCount()*_+R*2,b=R,E=x-R;return x_(x,x,function(O,q){if(b<=O&&O<E&&b<=q&&q<E){let U=Math.floor((O-b)/_),P=Math.floor((q-b)/_);return c.isDark(P,U)?0:1}else return 1})},c.createImgTag=function(_,R,x){_=_||2,R=typeof R>"u"?_*4:R;let b=c.getModuleCount()*_+R*2,E="";return E+="<img",E+=' src="',E+=c.createDataURL(_,R),E+='"',E+=' width="',E+=b,E+='"',E+=' height="',E+=b,E+='"',x&&(E+=' alt="',E+=I(x),E+='"'),E+="/>",E};let I=function(_){let R="";for(let x=0;x<_.length;x+=1){let b=_.charAt(x);switch(b){case"<":R+="&lt;";break;case">":R+="&gt;";break;case"&":R+="&amp;";break;case'"':R+="&quot;";break;default:R+=b;break}}return R},S=function(_){_=typeof _>"u"?2:_;let x=c.getModuleCount()*1+_*2,b=_,E=x-_,O,q,U,P,z,H={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},W={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},X="";for(O=0;O<x;O+=2){for(U=Math.floor((O-b)/1),P=Math.floor((O+1-b)/1),q=0;q<x;q+=1)z="\u2588",b<=q&&q<E&&b<=O&&O<E&&c.isDark(U,Math.floor((q-b)/1))&&(z=" "),b<=q&&q<E&&b<=O+1&&O+1<E&&c.isDark(P,Math.floor((q-b)/1))?z+=" ":z+="\u2588",X+=_<1&&O+1>=E?W[z]:H[z];X+=`
`}return x%2&&_>0?X.substring(0,X.length-x-1)+Array(x+1).join("\u2580"):X.substring(0,X.length-1)};return c.createASCII=function(_,R){if(_=_||1,_<2)return S(R);_-=1,R=typeof R>"u"?_*2:R;let x=c.getModuleCount()*_+R*2,b=R,E=x-R,O,q,U,P,z=Array(_+1).join("\u2588\u2588"),H=Array(_+1).join("  "),W="",X="";for(O=0;O<x;O+=1){for(U=Math.floor((O-b)/_),X="",q=0;q<x;q+=1)P=1,b<=q&&q<E&&b<=O&&O<E&&c.isDark(U,Math.floor((q-b)/_))&&(P=0),X+=P?z:H;for(U=0;U<_;U+=1)W+=X+`
`}return W.substring(0,W.length-1)},c.renderTo2dContext=function(_,R){R=R||2;let x=c.getModuleCount();for(let b=0;b<x;b++)for(let E=0;E<x;E++)_.fillStyle=c.isDark(b,E)?"black":"white",_.fillRect(E*R,b*R,R,R)},c};fa.stringToBytes=function(n){let e=[];for(let t=0;t<n.length;t+=1){let i=n.charCodeAt(t);e.push(i&255)}return e};fa.createStringToBytes=function(n,e){let t=(function(){let s=v_(n),r=function(){let l=s.read();if(l==-1)throw"eof";return l},o=0,a={};for(;;){let l=s.read();if(l==-1)break;let u=r(),c=r(),d=r(),h=String.fromCharCode(l<<8|u),f=c<<8|d;a[h]=f,o+=1}if(o!=e)throw o+" != "+e;return a})(),i=63;return function(s){let r=[];for(let o=0;o<s.length;o+=1){let a=s.charCodeAt(o);if(a<128)r.push(a);else{let l=t[s.charAt(o)];typeof l=="number"?(l&255)==l?r.push(l):(r.push(l>>>8),r.push(l&255)):r.push(i)}}return r}};var An={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},Za={L:1,M:0,Q:3,H:2},Ds={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},zs=(function(){let n=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,t=7973,i=21522,s={},r=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return s.getBCHTypeInfo=function(o){let a=o<<10;for(;r(a)-r(e)>=0;)a^=e<<r(a)-r(e);return(o<<10|a)^i},s.getBCHTypeNumber=function(o){let a=o<<12;for(;r(a)-r(t)>=0;)a^=t<<r(a)-r(t);return o<<12|a},s.getPatternPosition=function(o){return n[o-1]},s.getMaskFunction=function(o){switch(o){case Ds.PATTERN000:return function(a,l){return(a+l)%2==0};case Ds.PATTERN001:return function(a,l){return a%2==0};case Ds.PATTERN010:return function(a,l){return l%3==0};case Ds.PATTERN011:return function(a,l){return(a+l)%3==0};case Ds.PATTERN100:return function(a,l){return(Math.floor(a/2)+Math.floor(l/3))%2==0};case Ds.PATTERN101:return function(a,l){return a*l%2+a*l%3==0};case Ds.PATTERN110:return function(a,l){return(a*l%2+a*l%3)%2==0};case Ds.PATTERN111:return function(a,l){return(a*l%3+(a+l)%2)%2==0};default:throw"bad maskPattern:"+o}},s.getErrorCorrectPolynomial=function(o){let a=ja([1],0);for(let l=0;l<o;l+=1)a=a.multiply(ja([1,Us.gexp(l)],0));return a},s.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case An.MODE_NUMBER:return 10;case An.MODE_ALPHA_NUM:return 9;case An.MODE_8BIT_BYTE:return 8;case An.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case An.MODE_NUMBER:return 12;case An.MODE_ALPHA_NUM:return 11;case An.MODE_8BIT_BYTE:return 16;case An.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case An.MODE_NUMBER:return 14;case An.MODE_ALPHA_NUM:return 13;case An.MODE_8BIT_BYTE:return 16;case An.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},s.getLostPoint=function(o){let a=o.getModuleCount(),l=0;for(let d=0;d<a;d+=1)for(let h=0;h<a;h+=1){let f=0,g=o.isDark(d,h);for(let v=-1;v<=1;v+=1)if(!(d+v<0||a<=d+v))for(let m=-1;m<=1;m+=1)h+m<0||a<=h+m||v==0&&m==0||g==o.isDark(d+v,h+m)&&(f+=1);f>5&&(l+=3+f-5)}for(let d=0;d<a-1;d+=1)for(let h=0;h<a-1;h+=1){let f=0;o.isDark(d,h)&&(f+=1),o.isDark(d+1,h)&&(f+=1),o.isDark(d,h+1)&&(f+=1),o.isDark(d+1,h+1)&&(f+=1),(f==0||f==4)&&(l+=3)}for(let d=0;d<a;d+=1)for(let h=0;h<a-6;h+=1)o.isDark(d,h)&&!o.isDark(d,h+1)&&o.isDark(d,h+2)&&o.isDark(d,h+3)&&o.isDark(d,h+4)&&!o.isDark(d,h+5)&&o.isDark(d,h+6)&&(l+=40);for(let d=0;d<a;d+=1)for(let h=0;h<a-6;h+=1)o.isDark(h,d)&&!o.isDark(h+1,d)&&o.isDark(h+2,d)&&o.isDark(h+3,d)&&o.isDark(h+4,d)&&!o.isDark(h+5,d)&&o.isDark(h+6,d)&&(l+=40);let u=0;for(let d=0;d<a;d+=1)for(let h=0;h<a;h+=1)o.isDark(h,d)&&(u+=1);let c=Math.abs(100*u/a/a-50)/5;return l+=c*10,l},s})(),Us=(function(){let n=new Array(256),e=new Array(256);for(let i=0;i<8;i+=1)n[i]=1<<i;for(let i=8;i<256;i+=1)n[i]=n[i-4]^n[i-5]^n[i-6]^n[i-8];for(let i=0;i<255;i+=1)e[n[i]]=i;let t={};return t.glog=function(i){if(i<1)throw"glog("+i+")";return e[i]},t.gexp=function(i){for(;i<0;)i+=255;for(;i>=256;)i-=255;return n[i]},t})(),ja=function(n,e){if(typeof n.length>"u")throw n.length+"/"+e;let t=(function(){let s=0;for(;s<n.length&&n[s]==0;)s+=1;let r=new Array(n.length-s+e);for(let o=0;o<n.length-s;o+=1)r[o]=n[o+s];return r})(),i={};return i.getAt=function(s){return t[s]},i.getLength=function(){return t.length},i.multiply=function(s){let r=new Array(i.getLength()+s.getLength()-1);for(let o=0;o<i.getLength();o+=1)for(let a=0;a<s.getLength();a+=1)r[o+a]^=Us.gexp(Us.glog(i.getAt(o))+Us.glog(s.getAt(a)));return ja(r,0)},i.mod=function(s){if(i.getLength()-s.getLength()<0)return i;let r=Us.glog(i.getAt(0))-Us.glog(s.getAt(0)),o=new Array(i.getLength());for(let a=0;a<i.getLength();a+=1)o[a]=i.getAt(a);for(let a=0;a<s.getLength();a+=1)o[a]^=Us.gexp(Us.glog(s.getAt(a))+r);return ja(o,0).mod(s)},i},sp=(function(){let n=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(s,r){let o={};return o.totalCount=s,o.dataCount=r,o},t={},i=function(s,r){switch(r){case Za.L:return n[(s-1)*4+0];case Za.M:return n[(s-1)*4+1];case Za.Q:return n[(s-1)*4+2];case Za.H:return n[(s-1)*4+3];default:return}};return t.getRSBlocks=function(s,r){let o=i(s,r);if(typeof o>"u")throw"bad rs block @ typeNumber:"+s+"/errorCorrectionLevel:"+r;let a=o.length/3,l=[];for(let u=0;u<a;u+=1){let c=o[u*3+0],d=o[u*3+1],h=o[u*3+2];for(let f=0;f<c;f+=1)l.push(e(d,h))}return l},t})(),rp=function(){let n=[],e=0,t={};return t.getBuffer=function(){return n},t.getAt=function(i){let s=Math.floor(i/8);return(n[s]>>>7-i%8&1)==1},t.put=function(i,s){for(let r=0;r<s;r+=1)t.putBit((i>>>s-r-1&1)==1)},t.getLengthInBits=function(){return e},t.putBit=function(i){let s=Math.floor(e/8);n.length<=s&&n.push(0),i&&(n[s]|=128>>>e%8),e+=1},t},d_=function(n){let e=An.MODE_NUMBER,t=n,i={};i.getMode=function(){return e},i.getLength=function(o){return t.length},i.write=function(o){let a=t,l=0;for(;l+2<a.length;)o.put(s(a.substring(l,l+3)),10),l+=3;l<a.length&&(a.length-l==1?o.put(s(a.substring(l,l+1)),4):a.length-l==2&&o.put(s(a.substring(l,l+2)),7))};let s=function(o){let a=0;for(let l=0;l<o.length;l+=1)a=a*10+r(o.charAt(l));return a},r=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return i},f_=function(n){let e=An.MODE_ALPHA_NUM,t=n,i={};i.getMode=function(){return e},i.getLength=function(r){return t.length},i.write=function(r){let o=t,a=0;for(;a+1<o.length;)r.put(s(o.charAt(a))*45+s(o.charAt(a+1)),11),a+=2;a<o.length&&r.put(s(o.charAt(a)),6)};let s=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return i},p_=function(n){let e=An.MODE_8BIT_BYTE,t=n,i=fa.stringToBytes(n),s={};return s.getMode=function(){return e},s.getLength=function(r){return i.length},s.write=function(r){for(let o=0;o<i.length;o+=1)r.put(i[o],8)},s},m_=function(n){let e=An.MODE_KANJI,t=n,i=fa.stringToBytes;(function(o,a){let l=i(o);if(l.length!=2||(l[0]<<8|l[1])!=a)throw"sjis not supported."})("\u53CB",38726);let s=i(n),r={};return r.getMode=function(){return e},r.getLength=function(o){return~~(s.length/2)},r.write=function(o){let a=s,l=0;for(;l+1<a.length;){let u=(255&a[l])<<8|255&a[l+1];if(33088<=u&&u<=40956)u-=33088;else if(57408<=u&&u<=60351)u-=49472;else throw"illegal char at "+(l+1)+"/"+u;u=(u>>>8&255)*192+(u&255),o.put(u,13),l+=2}if(l<a.length)throw"illegal char at "+(l+1)},r},ap=function(){let n=[],e={};return e.writeByte=function(t){n.push(t&255)},e.writeShort=function(t){e.writeByte(t),e.writeByte(t>>>8)},e.writeBytes=function(t,i,s){i=i||0,s=s||t.length;for(let r=0;r<s;r+=1)e.writeByte(t[r+i])},e.writeString=function(t){for(let i=0;i<t.length;i+=1)e.writeByte(t.charCodeAt(i))},e.toByteArray=function(){return n},e.toString=function(){let t="";t+="[";for(let i=0;i<n.length;i+=1)i>0&&(t+=","),t+=n[i];return t+="]",t},e},g_=function(){let n=0,e=0,t=0,i="",s={},r=function(a){i+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return s.writeByte=function(a){for(n=n<<8|a&255,e+=8,t+=1;e>=6;)r(n>>>e-6),e-=6},s.flush=function(){if(e>0&&(r(n<<6-e),n=0,e=0),t%3!=0){let a=3-t%3;for(let l=0;l<a;l+=1)i+="="}},s.toString=function(){return i},s},v_=function(n){let e=n,t=0,i=0,s=0,r={};r.read=function(){for(;s<8;){if(t>=e.length){if(s==0)return-1;throw"unexpected end of file./"+s}let l=e.charAt(t);if(t+=1,l=="=")return s=0,-1;if(l.match(/^\s$/))continue;i=i<<6|o(l.charCodeAt(0)),s+=6}let a=i>>>s-8&255;return s-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return r},y_=function(n,e){let t=n,i=e,s=new Array(n*e),r={};r.setPixel=function(u,c,d){s[c*t+u]=d},r.write=function(u){u.writeString("GIF87a"),u.writeShort(t),u.writeShort(i),u.writeByte(128),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(255),u.writeByte(255),u.writeByte(255),u.writeString(","),u.writeShort(0),u.writeShort(0),u.writeShort(t),u.writeShort(i),u.writeByte(0);let c=2,d=a(c);u.writeByte(c);let h=0;for(;d.length-h>255;)u.writeByte(255),u.writeBytes(d,h,255),h+=255;u.writeByte(d.length-h),u.writeBytes(d,h,d.length-h),u.writeByte(0),u.writeString(";")};let o=function(u){let c=u,d=0,h=0,f={};return f.write=function(g,v){if(g>>>v)throw"length over";for(;d+v>=8;)c.writeByte(255&(g<<d|h)),v-=8-d,g>>>=8-d,h=0,d=0;h=g<<d|h,d=d+v},f.flush=function(){d>0&&c.writeByte(h)},f},a=function(u){let c=1<<u,d=(1<<u)+1,h=u+1,f=l();for(let w=0;w<c;w+=1)f.add(String.fromCharCode(w));f.add(String.fromCharCode(c)),f.add(String.fromCharCode(d));let g=ap(),v=o(g);v.write(c,h);let m=0,p=String.fromCharCode(s[m]);for(m+=1;m<s.length;){let w=String.fromCharCode(s[m]);m+=1,f.contains(p+w)?p=p+w:(v.write(f.indexOf(p),h),f.size()<4095&&(f.size()==1<<h&&(h+=1),f.add(p+w)),p=w)}return v.write(f.indexOf(p),h),v.write(d,h),v.flush(),g.toByteArray()},l=function(){let u={},c=0,d={};return d.add=function(h){if(d.contains(h))throw"dup key:"+h;u[h]=c,c+=1},d.size=function(){return c},d.indexOf=function(h){return u[h]},d.contains=function(h){return typeof u[h]<"u"},d};return r},x_=function(n,e,t){let i=y_(n,e);for(let a=0;a<e;a+=1)for(let l=0;l<n;l+=1)i.setPixel(l,a,t(l,a));let s=ap();i.write(s);let r=g_(),o=s.toByteArray();for(let a=0;a<o.length;a+=1)r.writeByte(o[a]);return r.flush(),"data:image/gif;base64,"+r},Ll=fa,TM=fa.stringToBytes;var Zt=Math.PI,Tt=Zt*2,Ns=Zt/180,op=180/Zt,lp=1440,__=398600.8,Un=6378.135,ui=60/Math.sqrt(Un*Un*Un/__),Il=Un*ui/60,cp=1/ui,Xi=.001082616,b_=-253881e-11,up=-165597e-11,ls=b_/Xi,cs=2/3,Dl=1440/(2*Zt);function dp(n,e){let t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),s=1,r=0;for(;i>r+t[s-1]&&s<12;)r+=t[s-1],s+=1;let o=s,a=i-r,l=(e-i)*24,u=Math.floor(l);l=(l-u)*60;let c=Math.floor(l),d=(l-c)*60;return{mon:o,day:a,hr:u,minute:c,sec:d}}function hp(n,e,t,i,s,r,o=0){return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((o/6e4+r/60+s)/60+i)/24}function ur(n,e,t,i,s,r,o=0){if(n instanceof Date){let a=n;return hp(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return hp(n,e,t,i,s,r,o)}function zl(n,e){let{e3:t,ee2:i,peo:s,pgho:r,pho:o,pinco:a,plo:l,se2:u,se3:c,sgh2:d,sgh3:h,sgh4:f,sh2:g,sh3:v,si2:m,si3:p,sl2:w,sl3:M,sl4:k,t:I,xgh2:S,xgh3:_,xgh4:R,xh2:x,xh3:b,xi2:E,xi3:O,xl2:q,xl3:U,xl4:P,zmol:z,zmos:H}=n,{init:W,opsmode:X}=e,{ep:te,inclp:ae,nodep:oe,argpp:K,mp:se}=e,ce,fe,Re,De,Ge,Pe,$e,Z,st,ye,ze,Ce,Ke,ke,C,T,Y,pe,ue,de,Te,Se=119459e-10,Ee=.01675,He=.00015835218,We=.0549;Te=H+Se*I,W==="y"&&(Te=H),de=Te+2*Ee*Math.sin(Te),Y=Math.sin(de),ye=.5*Y*Y-.25,ze=-.5*Y*Math.cos(de);let N=u*ye+c*ze,le=m*ye+p*ze,A=w*ye+M*ze+k*Y,y=d*ye+h*ze+f*Y,re=g*ye+v*ze;Te=z+He*I,W==="y"&&(Te=z),de=Te+2*We*Math.sin(Te),Y=Math.sin(de),ye=.5*Y*Y-.25,ze=-.5*Y*Math.cos(de);let $=i*ye+t*ze,ne=E*ye+O*ze,Le=q*ye+U*ze+P*Y,Ae=S*ye+_*ze+R*Y,_e=x*ye+b*ze;return Ce=N+$,C=le+ne,T=A+Le,Ke=y+Ae,ke=re+_e,W==="n"&&(Ce-=s,C-=a,T-=l,Ke-=r,ke-=o,ae+=C,te+=Ce,De=Math.sin(ae),Re=Math.cos(ae),ae>=.2?(ke/=De,Ke-=Re*ke,K+=Ke,oe+=ke,se+=T):(Pe=Math.sin(oe),Ge=Math.cos(oe),ce=De*Pe,fe=De*Ge,$e=ke*Ge+C*Re*Pe,Z=-ke*Pe+C*Re*Ge,ce+=$e,fe+=Z,oe%=Tt,oe<0&&X==="a"&&(oe+=Tt),pe=se+K+Re*oe,st=T+Ke-C*oe*De,pe+=st,ue=oe,oe=Math.atan2(ce,fe),oe<0&&X==="a"&&(oe+=Tt),Math.abs(ue-oe)>Zt&&(oe<ue?oe+=Tt:oe-=Tt),se+=T,K=pe-se-Re*oe)),{ep:te,inclp:ae,nodep:oe,argpp:K,mp:se}}function fp(n){let{epoch:e,ep:t,argpp:i,tc:s,inclp:r,nodep:o,np:a}=n,l,u,c,d,h,f,g,v,m,p,w,M,k,I,S,_,R,x,b,E,O,q,U,P,z,H,W,X,te,ae,oe,K,se,ce,fe,Re,De,Ge,Pe,$e,Z,st,ye,ze,Ce,Ke,ke,C,T,Y,pe,ue,de,Te,Se,Ee,He,We,N,le,A,y,re,$=.01675,ne=.0549,Le=29864797e-13,Ae=47968065e-14,_e=.39785416,me=.91744867,V=.1945905,he=-.98088458,ge=a,Ie=t,xe=Math.sin(o),be=Math.cos(o),Xe=Math.sin(i),tt=Math.cos(i),rt=Math.sin(r),et=Math.cos(r),Fe=Ie*Ie,Mt=1-Fe,At=Math.sqrt(Mt),di=0,gt=0,Kn=0,Zn=0,fi=0,Pn=e+18261.5+s/1440,yn=(4.523602-.00092422029*Pn)%Tt,Wt=Math.sin(yn),xn=Math.cos(yn),L=.91375164-.03568096*xn,j=Math.sqrt(1-L*L),Q=.089683511*Wt/j,ee=Math.sqrt(1-Q*Q),J=5.8351514+.001944368*Pn,Ne=.39785416*Wt/j,Ze=ee*xn+.91744867*Q*Wt;Ne=Math.atan2(Ne,Ze),Ne+=J-yn;let Qe=Math.cos(Ne),je=Math.sin(Ne);E=V,O=he,P=me,z=_e,q=be,U=xe,w=Le;let ct=1/ge,it=0;for(;it<2;)it+=1,l=E*q+O*P*U,c=-O*q+E*P*U,g=-E*U+O*P*q,v=O*z,m=O*U+E*P*q,p=E*z,u=et*g+rt*v,d=et*m+rt*p,h=-rt*g+et*v,f=-rt*m+et*p,M=l*tt+u*Xe,k=c*tt+d*Xe,I=-l*Xe+u*tt,S=-c*Xe+d*tt,_=h*Xe,R=f*Xe,x=h*tt,b=f*tt,A=12*M*M-3*I*I,y=24*M*k-6*I*S,re=12*k*k-3*S*S,ue=3*(l*l+u*u)+A*Fe,de=6*(l*c+u*d)+y*Fe,Te=3*(c*c+d*d)+re*Fe,Se=-6*l*h+Fe*(-24*M*x-6*I*_),Ee=-6*(l*f+c*h)+Fe*(-24*(k*x+M*b)+-6*(I*R+S*_)),He=-6*c*f+Fe*(-24*k*b-6*S*R),We=6*u*h+Fe*(24*M*_-6*I*x),N=6*(d*h+u*f)+Fe*(24*(k*_+M*R)-6*(S*x+I*b)),le=6*d*f+Fe*(24*k*R-6*S*b),ue=ue+ue+Mt*A,de=de+de+Mt*y,Te=Te+Te+Mt*re,ke=w*ct,Ke=-.5*ke/At,C=ke*At,Ce=-15*Ie*C,T=M*I+k*S,Y=k*I+M*S,pe=k*S-M*I,it===1&&(H=Ce,W=Ke,X=ke,te=C,ae=T,oe=Y,K=pe,se=ue,ce=de,fe=Te,Re=Se,De=Ee,Ge=He,Pe=We,$e=N,Z=le,st=A,ye=y,ze=re,E=Qe,O=je,P=L,z=j,q=ee*be+Q*xe,U=xe*ee-be*Q,w=Ae);let nt=(4.7199672+(.2299715*Pn-J))%Tt,Lt=(6.2565837+.017201977*Pn)%Tt,qt=2*H*oe,Rt=2*H*K,Yt=2*W*De,wt=2*W*(Ge-Re),dt=-2*X*ce,Ki=-2*X*(fe-se),It=-2*X*(-21-9*Fe)*$,_n=2*te*ye,ms=2*te*(ze-st),kn=-18*te*$,pi=-2*W*$e,Vt=-2*W*(Z-Pe),Ln=2*Ce*Y,jn=2*Ce*pe,Kt=2*Ke*Ee,Ws=2*Ke*(He-Se),xa=-2*ke*de,_r=-2*ke*(Te-ue),qs=-2*ke*(-21-9*Fe)*ne,Ql=2*C*y,ec=2*C*(re-A),Nt=-18*C*ne,ri=-2*Ke*N,br=-2*Ke*(le-We);return{snodm:xe,cnodm:be,sinim:rt,cosim:et,sinomm:Xe,cosomm:tt,day:Pn,e3:jn,ee2:Ln,em:Ie,emsq:Fe,gam:J,peo:di,pgho:Zn,pho:fi,pinco:gt,plo:Kn,rtemsq:At,se2:qt,se3:Rt,sgh2:_n,sgh3:ms,sgh4:kn,sh2:pi,sh3:Vt,si2:Yt,si3:wt,sl2:dt,sl3:Ki,sl4:It,s1:Ce,s2:Ke,s3:ke,s4:C,s5:T,s6:Y,s7:pe,ss1:H,ss2:W,ss3:X,ss4:te,ss5:ae,ss6:oe,ss7:K,sz1:se,sz2:ce,sz3:fe,sz11:Re,sz12:De,sz13:Ge,sz21:Pe,sz22:$e,sz23:Z,sz31:st,sz32:ye,sz33:ze,xgh2:Ql,xgh3:ec,xgh4:Nt,xh2:ri,xh3:br,xi2:Kt,xi3:Ws,xl2:xa,xl3:_r,xl4:qs,nm:ge,z1:ue,z2:de,z3:Te,z11:Se,z12:Ee,z13:He,z21:We,z22:N,z23:le,z31:A,z32:y,z33:re,zmol:nt,zmos:Lt}}function pp(n){let{cosim:e,argpo:t,s1:i,s2:s,s3:r,s4:o,s5:a,sinim:l,ss1:u,ss2:c,ss3:d,ss4:h,ss5:f,sz1:g,sz3:v,sz11:m,sz13:p,sz21:w,sz23:M,sz31:k,sz33:I,t:S,tc:_,gsto:R,mo:x,mdot:b,no:E,nodeo:O,nodedot:q,xpidot:U,z1:P,z3:z,z11:H,z13:W,z21:X,z23:te,z31:ae,z33:oe,ecco:K,eccsq:se}=n,{emsq:ce,em:fe,argpm:Re,inclm:De,mm:Ge,nm:Pe,nodem:$e,irez:Z,atime:st,d2201:ye,d2211:ze,d3210:Ce,d3222:Ke,d4410:ke,d4422:C,d5220:T,d5232:Y,d5421:pe,d5433:ue,dedt:de,didt:Te,dmdt:Se,dnodt:Ee,domdt:He,del1:We,del2:N,del3:le,xfact:A,xlamo:y,xli:re,xni:$}=n,ne,Le,Ae,_e,me,V,he,ge,Ie,xe,be,Xe,tt,rt,et,Fe,Mt,At,di,gt,Kn,Zn,fi,Pn,yn,Wt,xn,L,j,Q,ee,J,Ne=17891679e-13,Ze=21460748e-13,Qe=22123015e-14,je=17891679e-13,ct=73636953e-16,it=21765803e-16,nt=.0043752690880113,Lt=37393792e-14,qt=11428639e-14,Rt=.00015835218,Yt=119459e-10;Z=0,Pe<.0052359877&&Pe>.0034906585&&(Z=1),Pe>=.00826&&Pe<=.00924&&fe>=.5&&(Z=2);let wt=u*Yt*f,dt=c*Yt*(m+p),Ki=-Yt*d*(g+v-14-6*ce),It=h*Yt*(k+I-6),_n=-Yt*c*(w+M);(De<.052359877||De>Zt-.052359877)&&(_n=0),l!==0&&(_n/=l);let ms=It-e*_n;de=wt+i*Rt*a,Te=dt+s*Rt*(H+W),Se=Ki-Rt*r*(P+z-14-6*ce);let kn=o*Rt*(ae+oe-6),pi=-Rt*s*(X+te);(De<.052359877||De>Zt-.052359877)&&(pi=0),He=ms+kn,Ee=_n,l!==0&&(He-=e/l*pi,Ee+=pi/l);let Vt=0,Ln=(R+_*nt)%Tt;if(fe+=de*S,De+=Te*S,Re+=He*S,$e+=Ee*S,Ge+=Se*S,Z!==0){if(Q=(Pe/ui)**cs,Z===2){ee=e*e;let jn=fe;fe=K;let Kt=ce;ce=se,J=fe*ce,rt=-.306-(fe-.64)*.44,fe<=.65?(et=3.616-13.247*fe+16.29*ce,Mt=-19.302+117.39*fe-228.419*ce+156.591*J,At=-18.9068+109.7927*fe-214.6334*ce+146.5816*J,di=-41.122+242.694*fe-471.094*ce+313.953*J,gt=-146.407+841.88*fe-1629.014*ce+1083.435*J,Kn=-532.114+3017.977*fe-5740.032*ce+3708.276*J):(et=-72.099+331.819*fe-508.738*ce+266.724*J,Mt=-346.844+1582.851*fe-2415.925*ce+1246.113*J,At=-342.585+1554.908*fe-2366.899*ce+1215.972*J,di=-1052.797+4758.686*fe-7193.992*ce+3651.957*J,gt=-3581.69+16178.11*fe-24462.77*ce+12422.52*J,fe>.715?Kn=-5149.66+29936.92*fe-54087.36*ce+31324.56*J:Kn=1464.74-4664.75*fe+3763.64*ce),fe<.7?(Pn=-919.2277+4988.61*fe-9064.77*ce+5542.21*J,Zn=-822.71072+4568.6173*fe-8491.4146*ce+5337.524*J,fi=-853.666+4690.25*fe-8624.77*ce+5341.4*J):(Pn=-37995.78+161616.52*fe-229838.2*ce+109377.94*J,Zn=-51752.104+218913.95*fe-309468.16*ce+146349.42*J,fi=-40023.88+170470.89*fe-242699.48*ce+115605.82*J),yn=l*l,ne=.75*(1+2*e+ee),Le=1.5*yn,_e=1.875*l*(1-2*e-3*ee),me=-1.875*l*(1+2*e-3*ee),he=35*yn*ne,ge=39.375*yn*yn,Ie=9.84375*l*(yn*(1-2*e-5*ee)+.33333333*(-2+4*e+6*ee)),xe=l*(4.92187512*yn*(-2-4*e+10*ee)+6.56250012*(1+2*e-3*ee)),be=29.53125*l*(2-8*e+ee*(-12+8*e+10*ee)),Xe=29.53125*l*(-2-8*e+ee*(12+8*e-10*ee)),L=Pe*Pe,j=Q*Q,xn=3*L*j,Wt=xn*je,ye=Wt*ne*rt,ze=Wt*Le*et,xn*=Q,Wt=xn*Lt,Ce=Wt*_e*Mt,Ke=Wt*me*At,xn*=Q,Wt=2*xn*ct,ke=Wt*he*di,C=Wt*ge*gt,xn*=Q,Wt=xn*qt,T=Wt*Ie*Kn,Y=Wt*xe*fi,Wt=2*xn*it,pe=Wt*be*Zn,ue=Wt*Xe*Pn,y=(x+O+O-(Ln+Ln))%Tt,A=b+Se+2*(q+Ee-nt)-E,fe=jn,ce=Kt}Z===1&&(tt=1+ce*(-2.5+.8125*ce),Mt=1+2*ce,Fe=1+ce*(-6+6.60937*ce),ne=.75*(1+e)*(1+e),Ae=.9375*l*l*(1+3*e)-.75*(1+e),V=1+e,V=1.875*V*V*V,We=3*Pe*Pe*Q*Q,N=2*We*ne*tt*Ne,le=3*We*V*Fe*Qe*Q,We=We*Ae*Mt*Ze*Q,y=(x+O+t-Ln)%Tt,A=b+U+Se+He+Ee-(E+nt)),re=y,$=E,st=0,Pe=E+Vt}return{em:fe,argpm:Re,inclm:De,mm:Ge,nm:Pe,nodem:$e,irez:Z,atime:st,d2201:ye,d2211:ze,d3210:Ce,d3222:Ke,d4410:ke,d4422:C,d5220:T,d5232:Y,d5421:pe,d5433:ue,dedt:de,didt:Te,dmdt:Se,dndt:Vt,dnodt:Ee,domdt:He,del1:We,del2:N,del3:le,xfact:A,xlamo:y,xli:re,xni:$}}function Nu(n){let e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Ns/240%Tt,t<0&&(t+=Tt),t}function Ja(n,e,t,i,s,r,o){return n instanceof Date?Nu(ur(n)):Nu(e!==void 0?ur(n,e,t,i,s,r,o):n)}function mp(n){let{ecco:e,epoch:t,inclo:i,opsmode:s}=n,{no:r}=n,o=e*e,a=1-o,l=Math.sqrt(a),u=Math.cos(i),c=u*u,d=(ui/r)**cs,h=.75*Xi*(3*c-1)/(l*a),f=h/(d*d),g=d*(1-f*f-f*(1/3+134*f*f/81));f=h/(g*g),r/=1+f;let v=(ui/r)**cs,m=Math.sin(i),p=v*a,w=1-5*c,M=-w-c-c,k=1/v,I=p*p,S=v*(1-e),_="n",R;if(s==="a"){let x=t-7305,b=Math.floor(x+1e-8),E=x-b,O=.017202791694070362,q=1.7321343856509375,U=5075514194322695e-30,P=O+Tt;R=(q+O*b+P*E+x*x*U)%Tt,R<0&&(R+=Tt)}else R=Ja(t+24332815e-1);return{no:r,method:_,ainv:k,ao:v,con41:M,con42:w,cosio:u,cosio2:c,eccsq:o,omeosq:a,posq:I,rp:S,rteosq:l,sinio:m,gsto:R}}function gp(n){let{irez:e,d2201:t,d2211:i,d3210:s,d3222:r,d4410:o,d4422:a,d5220:l,d5232:u,d5421:c,d5433:d,dedt:h,del1:f,del2:g,del3:v,didt:m,dmdt:p,dnodt:w,domdt:M,argpo:k,argpdot:I,t:S,tc:_,gsto:R,xfact:x,xlamo:b,no:E}=n,{atime:O,em:q,argpm:U,inclm:P,xli:z,mm:H,xni:W,nodem:X,nm:te}=n,ae=.13130908,oe=2.8843198,K=.37448087,se=5.7686396,ce=.95240898,fe=1.8014998,Re=1.050833,De=4.4108898,Ge=.0043752690880113,Pe=720,$e=-720,Z=259200,st,ye,ze,Ce,Ke,ke,C,T,Y=0,pe=0,ue=(R+_*Ge)%Tt;if(q+=h*S,P+=m*S,U+=M*S,X+=w*S,H+=p*S,e!==0){(O===0||S*O<=0||Math.abs(S)<Math.abs(O))&&(O=0,W=E,z=b),S>0?st=Pe:st=$e;let de=381;for(;de===381;)e!==2?(C=f*Math.sin(z-ae)+g*Math.sin(2*(z-oe))+v*Math.sin(3*(z-K)),Ke=W+x,ke=f*Math.cos(z-ae)+2*g*Math.cos(2*(z-oe))+3*v*Math.cos(3*(z-K)),ke*=Ke):(T=k+I*O,ze=T+T,ye=z+z,C=t*Math.sin(ze+z-se)+i*Math.sin(z-se)+s*Math.sin(T+z-ce)+r*Math.sin(-T+z-ce)+o*Math.sin(ze+ye-fe)+a*Math.sin(ye-fe)+l*Math.sin(T+z-Re)+u*Math.sin(-T+z-Re)+c*Math.sin(T+ye-De)+d*Math.sin(-T+ye-De),Ke=W+x,ke=t*Math.cos(ze+z-se)+i*Math.cos(z-se)+s*Math.cos(T+z-ce)+r*Math.cos(-T+z-ce)+l*Math.cos(T+z-Re)+u*Math.cos(-T+z-Re)+2*(o*Math.cos(ze+ye-fe)+a*Math.cos(ye-fe)+c*Math.cos(T+ye-De)+d*Math.cos(-T+ye-De)),ke*=Ke),Math.abs(S-O)>=Pe?de=381:(pe=S-O,de=0),de===381&&(z+=Ke*st+C*Z,W+=C*st+ke*Z,O+=st);te=W+C*pe+ke*pe*pe*.5,Ce=z+Ke*pe+C*pe*pe*.5,e!==1?(H=Ce-2*X+2*ue,Y=te-E):(H=Ce-X-U+ue,Y=te-E),te=E+Y}return{atime:O,em:q,argpm:U,inclm:P,xli:z,mm:H,xni:W,nodem:X,dndt:Y,nm:te}}var Ti;(function(n){n[n.None=0]="None",n[n.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",n[n.MeanMotionBelowZero=2]="MeanMotionBelowZero",n[n.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",n[n.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",n[n.Decayed=6]="Decayed"})(Ti||(Ti={}));function $a(n,e){let t,i,s,r,o,a,l,u,c,d,h,f,g,v,m,p,w,M,k,I,S,_,R,x,b,E,O;n.t=e,n.error=Ti.None;let U=n.mo+n.mdot*n.t,P=n.argpo+n.argpdot*n.t,z=n.nodeo+n.nodedot*n.t;c=P,S=U;let H=n.t*n.t;if(R=z+n.nodecf*H,w=1-n.cc1*n.t,M=n.bstar*n.cc4*n.t,k=n.t2cof*H,n.isimp!==1){l=n.omgcof*n.t;let Ie=1+n.eta*Math.cos(U);a=n.xmcof*(Ie*Ie*Ie-n.delmo),p=l+a,S=U+p,c=P-p,f=H*n.t,g=f*n.t,w=w-n.d2*H-n.d3*f-n.d4*g,M+=n.bstar*n.cc5*(Math.sin(S)-n.sinmao),k=k+n.t3cof*f+g*(n.t4cof+n.t*n.t5cof)}n.tempa=w,_=n.no;let W=n.ecco;if(I=n.inclo,n.method==="d"){v=n.t;let Ie={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:v,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:W,argpm:c,inclm:I,xli:n.xli,mm:S,xni:n.xni,nodem:R,nm:_};({em:W,argpm:c,inclm:I,mm:S,nodem:R,nm:_}=gp(Ie))}if(_<=0)return n.error=Ti.MeanMotionBelowZero,null;let X=(ui/_)**cs*w*w;if(_=ui/X**1.5,W-=M,W>=1||W<-.001)return n.error=Ti.MeanEccentricityOutOfRange,null;W<1e-6&&(W=1e-6),S+=n.no*k,b=S+c+R,R%=Tt,c%=Tt,b%=Tt,S=(b-c-R)%Tt;let te={am:X,em:W,im:I,Om:R,om:c,mm:S,nm:_},ae=Math.sin(I),oe=Math.cos(I),K=W;if(x=I,d=c,O=R,E=S,r=ae,s=oe,n.method==="d"){let Ie={inclo:n.inclo,init:"n",ep:K,inclp:x,nodep:O,argpp:d,mp:E,opsmode:n.operationmode},xe=zl(n,Ie);if({ep:K,nodep:O,argpp:d,mp:E}=xe,x=xe.inclp,x<0&&(x=-x,O+=Zt,d-=Zt),K<0||K>1)return n.error=Ti.PerturbedEccentricityOutOfRange,null}n.method==="d"&&(r=Math.sin(x),s=Math.cos(x),n.aycof=-.5*ls*r,Math.abs(s+1)>15e-13?n.xlcof=-.25*ls*r*(3+5*s)/(1+s):n.xlcof=-.25*ls*r*(3+5*s)/15e-13);let se=K*Math.cos(d);p=1/(X*(1-K*K));let ce=K*Math.sin(d)+p*n.aycof,Re=(E+d+O+p*n.xlcof*se-O)%Tt;u=Re,m=9999.9;let De=1;for(;Math.abs(m)>=1e-12&&De<=10;)i=Math.sin(u),t=Math.cos(u),m=1-t*se-i*ce,m=(Re-ce*t+se*i-u)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),u+=m,De+=1;let Ge=se*t+ce*i,Pe=se*i-ce*t,$e=se*se+ce*ce,Z=X*(1-$e);if(Z<0)return n.error=Ti.SemiLatusRectumBelowZero,null;let st=X*(1-Ge),ye=Math.sqrt(X)*Pe/st,ze=Math.sqrt(Z)/st,Ce=Math.sqrt(1-$e);p=Pe/(1+Ce);let Ke=X/st*(i-ce-se*p),ke=X/st*(t-se+ce*p);h=Math.atan2(Ke,ke);let C=(ke+ke)*Ke,T=1-2*Ke*Ke;p=1/Z;let Y=.5*Xi*p,pe=Y*p;n.method==="d"&&(o=s*s,n.con41=3*o-1,n.x1mth2=1-o,n.x7thm1=7*o-1);let ue=st*(1-1.5*pe*Ce*n.con41)+.5*Y*n.x1mth2*T;if(ue<1)return n.error=Ti.Decayed,null;h-=.25*pe*n.x7thm1*C;let de=O+1.5*pe*s*C,Te=x+1.5*pe*s*r*T,Se=ye-_*Y*n.x1mth2*C/ui,Ee=ze+_*Y*(n.x1mth2*T+1.5*n.con41)/ui,He=Math.sin(h),We=Math.cos(h),N=Math.sin(de),le=Math.cos(de),A=Math.sin(Te),y=Math.cos(Te),re=-N*y,$=le*y,ne=re*He+le*We,Le=$*He+N*We,Ae=A*He,_e=re*We-le*He,me=$*We-N*He,V=A*We,he={x:ue*ne*Un,y:ue*Le*Un,z:ue*Ae*Un},ge={x:(Se*ne+Ee*_e)*Il,y:(Se*Le+Ee*me)*Il,z:(Se*Ae+Ee*V)*Il};return{position:he,velocity:ge,meanElements:te}}function vp(n,e){let{opsmode:t,satn:i,epoch:s,xbstar:r,xecco:o,xargpo:a,xinclo:l,xmo:u,xno:c,xnodeo:d}=e,h,f,g,v,m,p,w,M,k,I,S,_,R,x,b,E,O,q,U,P,z,H,W,X,te,ae,oe,K,se,ce,fe,Re,De,Ge,Pe,$e,Z,st,ye,ze,Ce,Ke,ke,C,T,Y,pe,ue,de,Te,Se,Ee,He,We,N,le,A=15e-13,y=n;y.isimp=0,y.method="n",y.aycof=0,y.con41=0,y.cc1=0,y.cc4=0,y.cc5=0,y.d2=0,y.d3=0,y.d4=0,y.delmo=0,y.eta=0,y.argpdot=0,y.omgcof=0,y.sinmao=0,y.t=0,y.t2cof=0,y.t3cof=0,y.t4cof=0,y.t5cof=0,y.x1mth2=0,y.x7thm1=0,y.mdot=0,y.nodedot=0,y.xlcof=0,y.xmcof=0,y.nodecf=0,y.irez=0,y.d2201=0,y.d2211=0,y.d3210=0,y.d3222=0,y.d4410=0,y.d4422=0,y.d5220=0,y.d5232=0,y.d5421=0,y.d5433=0,y.dedt=0,y.del1=0,y.del2=0,y.del3=0,y.didt=0,y.dmdt=0,y.dnodt=0,y.domdt=0,y.e3=0,y.ee2=0,y.peo=0,y.pgho=0,y.pho=0,y.pinco=0,y.plo=0,y.se2=0,y.se3=0,y.sgh2=0,y.sgh3=0,y.sgh4=0,y.sh2=0,y.sh3=0,y.si2=0,y.si3=0,y.sl2=0,y.sl3=0,y.sl4=0,y.gsto=0,y.xfact=0,y.xgh2=0,y.xgh3=0,y.xgh4=0,y.xh2=0,y.xh3=0,y.xi2=0,y.xi3=0,y.xl2=0,y.xl3=0,y.xl4=0,y.xlamo=0,y.zmol=0,y.zmos=0,y.atime=0,y.xli=0,y.xni=0,y.bstar=r,y.ecco=o,y.argpo=a,y.inclo=l,y.mo=u,y.no=c,y.nokozai=c,y.nodeo=d,y.operationmode=t;let re=78/Un+1,$=42/Un,ne=$*$*$*$;y.init="y",y.t=0;let Le={satn:i,ecco:y.ecco,epoch:s,inclo:y.inclo,no:y.no,method:y.method,opsmode:y.operationmode},Ae=mp(Le),{ao:_e,con42:me,cosio:V,cosio2:he,eccsq:ge,omeosq:Ie,posq:xe,rp:be,rteosq:Xe,sinio:tt}=Ae;if(y.no=Ae.no,y.con41=Ae.con41,y.gsto=Ae.gsto,y.a=(y.no*cp)**(-2/3),y.alta=y.a*(1+y.ecco)-1,y.altp=y.a*(1-y.ecco)-1,y.error=0,Ie>=0||y.no>=0){if(y.isimp=0,be<220/Un+1&&(y.isimp=1),oe=re,z=ne,q=(be-1)*Un,q<156){oe=q-78,q<98&&(oe=20);let et=(120-oe)/Un;z=et*et*et*et,oe=oe/Un+1}U=1/xe,Y=1/(_e-oe),y.eta=_e*y.ecco*Y,_=y.eta*y.eta,S=y.ecco*y.eta,P=Math.abs(1-_),p=z*Y**4,w=p/P**3.5,v=w*y.no*(_e*(1+1.5*_+S*(4+_))+.375*Xi*Y/P*y.con41*(8+3*_*(8+_))),y.cc1=y.bstar*v,m=0,y.ecco>1e-4&&(m=-2*p*Y*ls*y.no*tt/y.ecco),y.x1mth2=1-he,y.cc4=2*y.no*w*_e*Ie*(y.eta*(2+.5*_)+y.ecco*(.5+2*_)-Xi*Y/(_e*P)*(-3*y.con41*(1-2*S+_*(1.5-.5*S))+.75*y.x1mth2*(2*_-S*(1+_))*Math.cos(2*y.argpo))),y.cc5=2*w*_e*Ie*(1+2.75*(_+S)+S*_),M=he*he,ke=1.5*Xi*U*y.no,C=.5*ke*Xi*U,T=-.46875*up*U*U*y.no,y.mdot=y.no+.5*ke*Xe*y.con41+.0625*C*Xe*(13-78*he+137*M),y.argpdot=-.5*ke*me+.0625*C*(7-114*he+395*M)+T*(3-36*he+49*M),ue=-ke*V,y.nodedot=ue+(.5*C*(4-19*he)+2*T*(3-7*he))*V,pe=y.argpdot+y.nodedot,y.omgcof=y.bstar*m*Math.cos(y.argpo),y.xmcof=0,y.ecco>1e-4&&(y.xmcof=-cs*p*y.bstar/S),y.nodecf=3.5*Ie*ue*y.cc1,y.t2cof=1.5*y.cc1,Math.abs(V+1)>15e-13?y.xlcof=-.25*ls*tt*(3+5*V)/(1+V):y.xlcof=-.25*ls*tt*(3+5*V)/A,y.aycof=-.5*ls*tt;let rt=1+y.eta*Math.cos(y.mo);if(y.delmo=rt*rt*rt,y.sinmao=Math.sin(y.mo),y.x7thm1=7*he-1,2*Zt/y.no>=225){y.method="d",y.isimp=1,Ce=0,b=y.inclo;let et={epoch:s,ep:y.ecco,argpp:y.argpo,tc:Ce,inclp:y.inclo,nodep:y.nodeo,np:y.no,e3:y.e3,ee2:y.ee2,peo:y.peo,pgho:y.pgho,pho:y.pho,pinco:y.pinco,plo:y.plo,se2:y.se2,se3:y.se3,sgh2:y.sgh2,sgh3:y.sgh3,sgh4:y.sgh4,sh2:y.sh2,sh3:y.sh3,si2:y.si2,si3:y.si3,sl2:y.sl2,sl3:y.sl3,sl4:y.sl4,xgh2:y.xgh2,xgh3:y.xgh3,xgh4:y.xgh4,xh2:y.xh2,xh3:y.xh3,xi2:y.xi2,xi3:y.xi3,xl2:y.xl2,xl3:y.xl3,xl4:y.xl4,zmol:y.zmol,zmos:y.zmos},Fe=fp(et);y.e3=Fe.e3,y.ee2=Fe.ee2,y.peo=Fe.peo,y.pgho=Fe.pgho,y.pho=Fe.pho,y.pinco=Fe.pinco,y.plo=Fe.plo,y.se2=Fe.se2,y.se3=Fe.se3,y.sgh2=Fe.sgh2,y.sgh3=Fe.sgh3,y.sgh4=Fe.sgh4,y.sh2=Fe.sh2,y.sh3=Fe.sh3,y.si2=Fe.si2,y.si3=Fe.si3,y.sl2=Fe.sl2,y.sl3=Fe.sl3,y.sl4=Fe.sl4,{sinim:f,cosim:h,em:k,emsq:I,s1:H,s2:W,s3:X,s4:te,s5:ae,ss1:K,ss2:se,ss3:ce,ss4:fe,ss5:Re,sz1:De,sz3:Ge,sz11:Pe,sz13:$e,sz21:Z,sz23:st,sz31:ye,sz33:ze}=Fe,y.xgh2=Fe.xgh2,y.xgh3=Fe.xgh3,y.xgh4=Fe.xgh4,y.xh2=Fe.xh2,y.xh3=Fe.xh3,y.xi2=Fe.xi2,y.xi3=Fe.xi3,y.xl2=Fe.xl2,y.xl3=Fe.xl3,y.xl4=Fe.xl4,y.zmol=Fe.zmol,y.zmos=Fe.zmos,{nm:O,z1:de,z3:Te,z11:Se,z13:Ee,z21:He,z23:We,z31:N,z33:le}=Fe;let Mt={inclo:b,init:y.init,ep:y.ecco,inclp:y.inclo,nodep:y.nodeo,argpp:y.argpo,mp:y.mo,opsmode:y.operationmode},At=zl(y,Mt);y.ecco=At.ep,y.inclo=At.inclp,y.nodeo=At.nodep,y.argpo=At.argpp,y.mo=At.mp,R=0,x=0,E=0;let di={cosim:h,emsq:I,argpo:y.argpo,s1:H,s2:W,s3:X,s4:te,s5:ae,sinim:f,ss1:K,ss2:se,ss3:ce,ss4:fe,ss5:Re,sz1:De,sz3:Ge,sz11:Pe,sz13:$e,sz21:Z,sz23:st,sz31:ye,sz33:ze,t:y.t,tc:Ce,gsto:y.gsto,mo:y.mo,mdot:y.mdot,no:y.no,nodeo:y.nodeo,nodedot:y.nodedot,xpidot:pe,z1:de,z3:Te,z11:Se,z13:Ee,z21:He,z23:We,z31:N,z33:le,ecco:y.ecco,eccsq:ge,em:k,argpm:R,inclm:b,mm:E,nm:O,nodem:x,irez:y.irez,atime:y.atime,d2201:y.d2201,d2211:y.d2211,d3210:y.d3210,d3222:y.d3222,d4410:y.d4410,d4422:y.d4422,d5220:y.d5220,d5232:y.d5232,d5421:y.d5421,d5433:y.d5433,dedt:y.dedt,didt:y.didt,dmdt:y.dmdt,dnodt:y.dnodt,domdt:y.domdt,del1:y.del1,del2:y.del2,del3:y.del3,xfact:y.xfact,xlamo:y.xlamo,xli:y.xli,xni:y.xni},gt=pp(di);y.irez=gt.irez,y.atime=gt.atime,y.d2201=gt.d2201,y.d2211=gt.d2211,y.d3210=gt.d3210,y.d3222=gt.d3222,y.d4410=gt.d4410,y.d4422=gt.d4422,y.d5220=gt.d5220,y.d5232=gt.d5232,y.d5421=gt.d5421,y.d5433=gt.d5433,y.dedt=gt.dedt,y.didt=gt.didt,y.dmdt=gt.dmdt,y.dnodt=gt.dnodt,y.domdt=gt.domdt,y.del1=gt.del1,y.del2=gt.del2,y.del3=gt.del3,y.xfact=gt.xfact,y.xlamo=gt.xlamo,y.xli=gt.xli,y.xni=gt.xni}y.isimp!==1&&(g=y.cc1*y.cc1,y.d2=4*_e*Y*g,Ke=y.d2*Y*y.cc1/3,y.d3=(17*_e+oe)*Ke,y.d4=.5*Ke*_e*Y*(221*_e+31*oe)*y.cc1,y.t3cof=y.d2+2*g,y.t4cof=.25*(3*y.d3+y.cc1*(12*y.d2+10*g)),y.t5cof=.2*(3*y.d4+12*y.cc1*y.d3+6*y.d2*y.d2+15*g*(2*y.d2+g)))}$a(y,0),y.init="n"}function M_(n,e){vp(n,{opsmode:e,satn:n.satnum,epoch:n.jdsatepoch-24332815e-1,xbstar:n.bstar,xecco:n.ecco,xargpo:n.argpo,xinclo:n.inclo,xmo:n.mo,xno:n.no,xnodeo:n.nodeo})}function yp(n,e){let s=n.substring(2,7),r=parseInt(n.substring(18,20),10),o=parseFloat(n.substring(20,32)),a=parseFloat(n.substring(33,43)),l=parseFloat(`${n.substring(44,45)}.${n.substring(45,50)}E${n.substring(50,52)}`),u=parseFloat(`${n.substring(53,54)}.${n.substring(54,59)}E${n.substring(59,61)}`),c=parseFloat(e.substring(8,16))*Ns,d=parseFloat(e.substring(17,25))*Ns,h=parseFloat(`.${e.substring(26,33).replace(/\s/g,"0")}`),f=parseFloat(e.substring(34,42))*Ns,g=parseFloat(e.substring(43,51))*Ns,v=parseFloat(e.substring(52,63))/Dl;a/=Dl*1440,l/=Dl*1440*1440;let m=r<57?r+2e3:r+1900,p=dp(m,o),{mon:w,day:M,hr:k,minute:I,sec:S}=p,_=ur(m,w,M,k,I,S),R={error:0,satnum:s,epochyr:r,epochdays:o,ndot:a,nddot:l,bstar:u,inclo:c,nodeo:d,ecco:h,argpo:f,mo:g,no:v,jdsatepoch:_};return M_(R,"i"),R}var xp=n=>n.tempa<=0;function Ou(n,...e){let t=e.at(-1),i=typeof t=="object"&&!(t instanceof Date)?t:void 0,s=i?e.slice(0,-1):e,o=(ur(...s)-n.jdsatepoch)*lp,a=$a(n,o);return i?.communityDecayCheckEnabled&&a&&xp(n)?(n.error=Ti.Decayed,null):a}function _p(n){return n*op}function bp(n){if(n<-Zt/2||n>Zt/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return _p(n)}function Mp(n){if(n<-Zt||n>Zt)throw new RangeError("Longitude radians must be in range [-pi; pi].");return _p(n)}function Sp(n,e){let i=6356.7523142,s=Math.sqrt(n.x*n.x+n.y*n.y),r=(6378.137-i)/6378.137,o=2*r-r*r,a=((Math.atan2(n.y,n.x)-e+Zt)%Tt+Tt)%Tt-Zt,l=20,u=0,c=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d=0;for(;u++<l;)d=1/Math.sqrt(1-o*(Math.sin(c)*Math.sin(c))),c=Math.atan2(n.z+6378.137*d*o*Math.sin(c),s);let h=s/Math.cos(c)-6378.137*d;return{longitude:a,latitude:c,height:h}}var S_="attribute vec2 a; void main(){ gl_Position = vec4(a,0.,1.); }",w_=`precision highp float;
uniform vec2 res; uniform vec3 cam, fwd, rgt, upv; uniform float tf, tm, disk;
float h1(vec3 p){ p = fract(p*.3183099+.1); p *= 17.; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
vec3 sky(vec3 d){
  vec3 c = vec3(.004,.005,.01);
  vec3 q = d*60.; vec3 g = floor(q); vec3 f = fract(q)-.5;
  float s = h1(g); if(s > .965){ float r = length(f); float b = smoothstep(.2,.0,r)*(s-.965)*28.; vec3 sc = mix(vec3(.7,.8,1.), vec3(1.,.85,.6), h1(g+7.)); c += sc*b; }
  q = d*140.; g = floor(q); f = fract(q)-.5; s = h1(g+3.); if(s > .985){ c += vec3(.9)*smoothstep(.18,.0,length(f))*(s-.985)*30.; }
  float band = exp(-pow(d.y*2.6,2.)); c += vec3(.05,.045,.04)*band*(.6+.4*sin(d.x*5.+d.z*3.));
  return c;
}
vec3 bb(float t){ t = clamp(t,0.,2.); return vec3(1., .35+.5*t, .08+.55*t*t) * (.4+.6*t); }
void main(){
  vec2 p = (gl_FragCoord.xy - .5*res)/res.y;
  vec3 d = normalize(fwd + (p.x*rgt + p.y*upv)*tf);
  vec3 pos = cam; float r0 = length(pos); vec3 e1 = pos/r0;
  vec3 n = cross(e1, d); float nl = length(n);
  if(nl < 1e-4){ n = normalize(cross(e1, vec3(0.,1.,.001))); nl = 1.; } else n /= nl;
  vec3 e2 = cross(n, e1);
  float cA = dot(d,e1), sA = max(dot(d,e2), 1e-4);
  float u = 1./r0, du = -u*cA/sA, phi = 0.;
  vec3 col = vec3(0.); float tr = 1.; bool cap = false, esc = false; float hs = .07;
  vec3 pp = e1*r0;
  for(int i=0;i<170;i++){
    float k1u = du, k1d = -u + 3.*u*u;
    float u2 = u + .5*hs*k1u, d2 = du + .5*hs*k1d; float k2u = d2, k2d = -u2 + 3.*u2*u2;
    float u3 = u + .5*hs*k2u, d3 = du + .5*hs*k2d; float k3u = d3, k3d = -u3 + 3.*u3*u3;
    float u4 = u + hs*k3u, d4 = du + hs*k3d; float k4u = d4, k4d = -u4 + 3.*u4*u4;
    float un = u + hs/6.*(k1u + 2.*k2u + 2.*k3u + k4u), dn = du + hs/6.*(k1d + 2.*k2d + 2.*k3d + k4d);
    float ph = phi + hs;
    if(un >= .5){ cap = true; break; }
    vec3 pn = (cos(ph)*e1 + sin(ph)*e2)/un;
    if(disk > .5 && pp.y*pn.y < 0.){
      float t = pp.y/(pp.y - pn.y); vec3 pc = mix(pp, pn, t); float rc = length(pc.xz);
      if(rc > 6. && rc < 16.){
        float T = pow(6./rc, .75);
        vec3 vd = normalize(cross(vec3(0.,1.,0.), pc)); float v = sqrt(1./(rc-2.));
        vec3 nph = -normalize(pn - pp);
        float g = sqrt(max(.01,1.-v*v))/(1. - v*dot(vd, nph)) * sqrt(max(.01,1.-2./rc));
        float I = pow(g,3.)*pow(T,3.5)*3.4;
        float ang = atan(pc.z, pc.x); float ring = .8+.2*sin(rc*3.2 - ang*2. + tm*.6) * sin(ang*5.+rc);
        col += tr*.9*bb(T*g)*I*ring; tr *= .12;
        if(tr < .02){ cap = true; break; }
      }
    }
    pp = pn; u = un; du = dn; phi = ph;
    if(u < .012 && du < 0.){ esc = true; break; }
  }
  if(!cap){
    float al = atan(u, -du); vec3 rh = cos(phi)*e1 + sin(phi)*e2, ph2 = -sin(phi)*e1 + cos(phi)*e2;
    vec3 od = normalize(cos(al)*rh + sin(al)*ph2); col += tr*sky(od);
  }
  col = 1. - exp(-col*1.25); col = pow(col, vec3(.85));
  gl_FragColor = vec4(col,1.);
}`;function wp(n){let e=n==="tr",t=(E,O)=>e?E:O,i=document.createElement("div");i.id="bh",i.innerHTML='<canvas></canvas><button class="bx" aria-label="\u2715">\u2715</button><div class="bi">'+t("Schwarzschild kara deli\u011Fi \xB7 \u0131\u015F\u0131k yollar\u0131 ger\xE7ek denklemle \xE7\xF6z\xFCl\xFCyor \xB7 s\xFCr\xFCkle: bak, kayd\u0131r/s\u0131k\u0131\u015Ft\u0131r: yakla\u015F","Schwarzschild black hole \xB7 light paths integrated from the real equation \xB7 drag: look, scroll/pinch: zoom")+'</div><div class="bc"><label><input type="checkbox" id="bd" checked> '+t("Birikim diski","Accretion disk")+'</label><select id="bq"><option value=".45">'+t("H\u0131zl\u0131","Fast")+'</option><option value=".7" selected>'+t("Dengeli","Balanced")+'</option><option value="1">'+t("Keskin","Sharp")+"</option></select></div>",document.body.appendChild(i);let s=i.querySelector("canvas"),r=s.getContext("webgl",{antialias:!1,powerPreference:"high-performance"}),o=()=>{a=!0,cancelAnimationFrame(l);try{removeEventListener("resize",M)}catch{}i.remove();try{let E=r&&r.getExtension("WEBGL_lose_context")}catch{}},a=!1,l=0;if(!r)return i.querySelector(".bi").textContent=t("Bu cihaz WebGL desteklemiyor.","WebGL is not supported."),i.querySelector(".bx").onclick=o,o;let u=(E,O)=>{let q=r.createShader(E);if(r.shaderSource(q,O),r.compileShader(q),!r.getShaderParameter(q,r.COMPILE_STATUS))throw new Error(r.getShaderInfoLog(q));return q},c;try{c=r.createProgram(),r.attachShader(c,u(r.VERTEX_SHADER,S_)),r.attachShader(c,u(r.FRAGMENT_SHADER,w_)),r.linkProgram(c)}catch(E){return i.querySelector(".bi").textContent="Shader: "+String(E.message).slice(0,200),i.querySelector(".bx").onclick=o,o}r.useProgram(c);let d=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,d),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),r.STATIC_DRAW);let h=r.getAttribLocation(c,"a");r.enableVertexAttribArray(h),r.vertexAttribPointer(h,2,r.FLOAT,!1,0,0);let f=E=>r.getUniformLocation(c,E),g={res:f("res"),cam:f("cam"),fwd:f("fwd"),rgt:f("rgt"),upv:f("upv"),tf:f("tf"),tm:f("tm"),disk:f("disk")},v=.6,m=.16,p=34,w=.7,M=()=>{let E=innerWidth,O=innerHeight;s.width=Math.max(64,Math.floor(E*w)),s.height=Math.max(64,Math.floor(O*w)),s.style.width=E+"px",s.style.height=O+"px",r.viewport(0,0,s.width,s.height)};addEventListener("resize",M),M(),i.querySelector("#bq").onchange=E=>{w=+E.target.value,M()};let k=null,I=new Map,S=0;s.addEventListener("pointerdown",E=>{if(s.setPointerCapture(E.pointerId),I.set(E.pointerId,[E.clientX,E.clientY]),I.size===2){let O=[...I.values()];S=Math.hypot(O[0][0]-O[1][0],O[0][1]-O[1][1])}}),s.addEventListener("pointermove",E=>{if(!I.has(E.pointerId))return;let O=I.get(E.pointerId);if(I.size===1&&(v-=(E.clientX-O[0])*.005,m=Math.max(-1.45,Math.min(1.45,m+(E.clientY-O[1])*.005))),I.set(E.pointerId,[E.clientX,E.clientY]),I.size===2){let q=[...I.values()],U=Math.hypot(q[0][0]-q[1][0],q[0][1]-q[1][1]);S&&(p=Math.max(10,Math.min(90,p*S/U))),S=U}});let _=E=>{I.delete(E.pointerId),S=0};s.addEventListener("pointerup",_),s.addEventListener("pointercancel",_),s.addEventListener("wheel",E=>{E.preventDefault(),p=Math.max(10,Math.min(90,p*Math.exp(E.deltaY*.001)))},{passive:!1}),i.querySelector(".bx").onclick=o;let R=E=>{E.key==="Escape"&&(o(),removeEventListener("keydown",R))};addEventListener("keydown",R);let x=performance.now(),b=()=>{if(a)return;l=requestAnimationFrame(b);let E=Math.cos(m)*Math.sin(v)*p,O=Math.sin(m)*p,q=Math.cos(m)*Math.cos(v)*p,U=p,P=[-E/U,-O/U,-q/U],z=[P[1]*0-P[2]*1,P[2]*0-P[0]*0,P[0]*1-P[1]*0];z=[-P[2],0,P[0]];let H=Math.hypot(z[0],z[1],z[2])||1;z=[z[0]/H,z[1]/H,z[2]/H];let W=[z[1]*P[2]-z[2]*P[1],z[2]*P[0]-z[0]*P[2],z[0]*P[1]-z[1]*P[0]];r.uniform2f(g.res,s.width,s.height),r.uniform3f(g.cam,E,O,q),r.uniform3f(g.fwd,P[0],P[1],P[2]),r.uniform3f(g.rgt,z[0],z[1],z[2]),r.uniform3f(g.upv,W[0],W[1],W[2]),r.uniform1f(g.tf,Math.tan(.5*60*Math.PI/180)*2*.5*2),r.uniform1f(g.tm,(performance.now()-x)/1e3),r.uniform1f(g.disk,i.querySelector("#bd").checked?1:0),r.drawArrays(r.TRIANGLES,0,3)};return b(),o}var Bu="tr",Tp=()=>Bu==="tr",Ye=(n,e)=>Tp()?n:e,E_=n=>document.getElementById(n),T_=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ai=null;function Ul(){if(Ai){try{Ai()}catch{}Ai=null}let n=E_("xp");n&&n.remove()}function us(n){Ul();let e=document.createElement("div");return e.id="xp",e.innerHTML='<div class="xb"><button class="xx" aria-label="\u2715">\u2715</button>'+n+"</div>",document.body.appendChild(e),e.querySelector(".xx").onclick=Ul,e.addEventListener("pointerdown",t=>{t.target===e&&Ul()}),e.addEventListener("keydown",t=>t.stopPropagation()),e.querySelector(".xb")}var Qa=n=>{let e=!0,t=0,i=s=>{e&&(n(s),t=requestAnimationFrame(i))};return t=requestAnimationFrame(i),()=>{e=!1,cancelAnimationFrame(t)}};function A_(){let n=us("<h3>"+Ye("N-cisim Sim\xFClat\xF6r\xFC","N-body Simulator")+'</h3><p class="xs">'+Ye("Merkezde bir y\u0131ld\u0131z, etraf\u0131nda gezegenler. K\xFCtle\xE7ekimi ger\xE7ekten hesaplan\u0131r. Tuvale dokun: o noktaya yeni bir gezegen eklenir.","A star with planets; gravity is truly integrated. Tap the canvas to add a planet there.")+'</p><label class="xs">'+Ye("Dev gezegenin k\xFCtlesi","Giant planet mass")+' <output id="nm"></output><input id="ns" type="range" min="1" max="300" value="1"></label><div class="xrow"><button class="xgo" id="nr">'+Ye("Yeniden ba\u015Flat","Restart")+'</button><button class="xgo" id="n3">'+Ye("Sekiz \u015Fekli (3 cisim)","Figure-8 (3 bodies)")+'</button></div><canvas id="nc" width="720" height="440"></canvas>'),e=n.querySelector("#nc"),t=e.getContext("2d"),i=[],s="sys",r=1,o=()=>{if(i=[],s==="sys"){let u=+n.querySelector("#ns").value/1e3;i.push({x:0,y:0,vx:0,vy:0,m:1,c:"#ffd27a",r:6,t:[]}),[[60,1e-6,"#b9b9b9"],[95,3e-6,"#6fa8dc"],[140,3e-7,"#d9694a"],[250,u,"#d8b48a"],[380,3e-5,"#9fd8e8"]].forEach(([c,d,h],f)=>{let g=Math.sqrt(r*1/c),v=f*1.7;i.push({x:c*Math.cos(v),y:c*Math.sin(v),vx:-g*Math.sin(v),vy:g*Math.cos(v),m:d,c:h,r:f===3?4:2.4,t:[]})}),n.querySelector("#nm").textContent="\xD7"+n.querySelector("#ns").value+" ("+(u*1e3).toFixed(1)+Ye(" \u2030 y\u0131ld\u0131z"," \u2030 of star")+")"}else{let u=.97000436,c=-.24308753,d=.466203685,h=.43236573,f=(g,v,m,p,w)=>({x:g*90,y:v*90,vx:m*Math.sqrt(90),vy:p*Math.sqrt(90),m:90,c:w,r:5,t:[]});i.push(f(u,c,d,h,"#ffd27a"),f(-u,-c,d,h,"#6fa8dc"),f(0,0,-2*d,-2*h,"#d9694a"))}},a=u=>{let c=i.length;for(let d=0;d<c;d++){let h=0,f=0;for(let g=0;g<c;g++){if(d===g)continue;let v=i[g].x-i[d].x,m=i[g].y-i[d].y,p=v*v+m*m+1,w=Math.sqrt(p),M=r*i[g].m/(p*w);h+=M*v,f+=M*m}i[d].ax=h,i[d].ay=f}i.forEach(d=>{d.vx+=d.ax*u*.5,d.vy+=d.ay*u*.5,d.x+=d.vx*u,d.y+=d.vy*u});for(let d=0;d<c;d++){let h=0,f=0;for(let g=0;g<c;g++){if(d===g)continue;let v=i[g].x-i[d].x,m=i[g].y-i[d].y,p=v*v+m*m+1,w=Math.sqrt(p),M=r*i[g].m/(p*w);h+=M*v,f+=M*m}i[d].vx+=h*u*.5,i[d].vy+=f*u*.5}},l=()=>s==="sys"?1:1.35;Ai=Qa(()=>{let u=s==="sys"?.35:.01;for(let c=0;c<(s==="sys"?12:6);c++)a(u);t.fillStyle="rgba(5,6,13,.22)",t.fillRect(0,0,720,440),i.forEach(c=>{let d=360+c.x*l(),h=220+c.y*l();c.t.push(d,h),c.t.length>600&&c.t.splice(0,2),t.fillStyle=c.c,t.beginPath(),t.arc(d,h,c.r,0,7),t.fill()})}),n.querySelector("#ns").oninput=()=>{s="sys",o(),t.fillStyle="#05060d",t.fillRect(0,0,720,440)},n.querySelector("#nr").onclick=()=>{s="sys",o(),t.fillStyle="#05060d",t.fillRect(0,0,720,440)},n.querySelector("#n3").onclick=()=>{s="3",o(),t.fillStyle="#05060d",t.fillRect(0,0,720,440),n.querySelector("#nm").textContent=""},e.onpointerdown=u=>{if(s!=="sys")return;let c=e.getBoundingClientRect(),d=(u.clientX-c.left)/c.width*720-360,h=(u.clientY-c.top)/c.height*440-220,f=Math.hypot(d,h);if(f<25)return;let g=Math.sqrt(r/f);i.push({x:d,y:h,vx:-g*h/f,vy:g*d/f,m:1e-5,c:"#ffffff",r:2.6,t:[]})},t.fillStyle="#05060d",t.fillRect(0,0,720,440),o()}function R_(){let n=us("<h3>"+Ye("Gelgit ve Roche S\u0131n\u0131r\u0131","Tides and the Roche Limit")+'</h3><p class="xs">'+Ye("Uydu gezegene yakla\u015Ft\u0131k\xE7a gelgit kuvveti kendi \xE7ekimini a\u015Far ve par\xE7alan\u0131r. Basitle\u015Ftirilmi\u015F modeldir.","As the moon nears the planet, tidal force beats its self-gravity and it breaks apart. A simplified model.")+'</p><label class="xs">'+Ye("Mesafe","Distance")+' <output id="to"></output><input id="td" type="range" min="60" max="300" value="220"></label><canvas id="tc" width="720" height="320"></canvas>'),e=n.querySelector("#tc"),t=e.getContext("2d"),i=260,s=[],r=()=>{s=[];for(let a=0;a<i;a++){let l=Math.random()*6.283,u=Math.sqrt(Math.random());s.push({x:u*Math.cos(l),y:u*Math.sin(l),vx:0,vy:0})}};r();let o=100;n.querySelector("#td").oninput=()=>{r()},Ai=Qa(()=>{let a=+n.querySelector("#td").value,l=.5*Math.pow(o/a,3),u=140+a*1.6;n.querySelector("#to").textContent=(a/o).toFixed(2)+"\xD7 "+Ye("Roche mesafesi","Roche distance")+(a<o?Ye(" \u2014 par\xE7alanma"," \u2014 disruption"):"");for(let d=0;d<3;d++)s.forEach(h=>{let f=Math.hypot(h.x,h.y)||.001,g=f<1?f:1/(f*f),v=-g*h.x/f+2*l*h.x,m=-g*h.y/f-l*h.y;h.vx=(h.vx+v*.02)*.985,h.vy=(h.vy+m*.02)*.985,h.x+=h.vx*.02*8,h.y+=h.vy*.02*8,Math.abs(h.x)>40&&(h.x=Math.sign(h.x)*40)});t.fillStyle="#05060d",t.fillRect(0,0,720,320);let c=t.createRadialGradient(90,160,10,90,160,110);c.addColorStop(0,"#d8b48a"),c.addColorStop(1,"#6b4a2a"),t.fillStyle=c,t.beginPath(),t.arc(90,160,100,0,7),t.fill(),t.fillStyle="rgba(232,220,192,.85)",s.forEach(d=>{t.fillRect(u+d.x*34,160+d.y*34,2,2)})})}function C_(){let n=[["G\xFCne\u015F","Sun",158e-7],["J\xFCpiter (ort.)","Jupiter (avg.)",83e-6],["Proxima Centauri","Proxima Centauri",4.24],["Sirius","Sirius",8.6],["Vega","Vega",25],["Betelgeuse","Betelgeuse",550],["Orion Bulutsusu","Orion Nebula",1344],["Samanyolu merkezi","Galactic centre",26e3],["Andromeda G\xF6kadas\u0131","Andromeda Galaxy",2537e3],["M87","M87",535e5]],e=us("<h3>"+Ye("I\u015F\u0131k Konisi","Light Cone")+'</h3><p class="xs">'+Ye("Bir cisme bakt\u0131\u011F\u0131nda g\xF6rd\xFC\u011F\xFCn \u0131\u015F\u0131k ge\xE7mi\u015Ften gelir.","When you look at an object, you see light from the past.")+'</p><select id="ls">'+n.map((o,a)=>'<option value="'+a+'">'+Ye(o[0],o[1])+"</option>").join("")+'</select><canvas id="lc" width="720" height="220"></canvas><output id="lo"></output>'),t=e.querySelector("#lc"),i=t.getContext("2d"),s=performance.now();e.querySelector("#ls").onchange=()=>{s=performance.now()};let r=o=>o<.001?(o*525960*60).toFixed(0)+Ye(" saniye"," seconds"):o<.5?(o*525960).toFixed(1)+Ye(" dakika"," minutes"):o<1e4?(o>=100?Math.round(o).toLocaleString():o.toFixed(1))+Ye(" y\u0131l"," years"):o<1e6?Math.round(o).toLocaleString()+Ye(" y\u0131l"," years"):(o/1e6).toFixed(o<1e7?2:1)+Ye(" milyon y\u0131l"," million years");Ai=Qa(o=>{let a=n[+e.querySelector("#ls").value],l=a[2],u=Math.min(1,(performance.now()-s)/6e3);i.fillStyle="#05060d",i.fillRect(0,0,720,220),i.strokeStyle="rgba(232,196,106,.3)",i.beginPath(),i.moveTo(60,110),i.lineTo(660,110),i.stroke(),i.fillStyle="#ffd27a",i.beginPath(),i.arc(60,110,8,0,7),i.fill(),i.fillStyle="#6fa8dc",i.beginPath(),i.arc(660,110,8,0,7),i.fill(),i.fillStyle="#e8dcc0",i.font="13px Georgia",i.textAlign="center",i.fillText(Ye(a[0],a[1]),60,150),i.fillText(Ye("Sen","You"),660,150);let c=60+600*u;i.strokeStyle="rgba(255,244,200,.9)",i.lineWidth=3,i.beginPath(),i.arc(60,110,600*u,-.9,.9),i.stroke(),i.lineWidth=1,i.fillStyle="#e8c46a",i.fillText(r(l*u),360,60);let d=new Date().getFullYear()-l;e.querySelector("#lo").textContent=Ye("Bug\xFCn g\xF6rd\xFC\u011F\xFCn \u0131\u015F\u0131k ","The light you see today left ")+r(l)+Ye(" \xF6nce yola \xE7\u0131kt\u0131"," ago")+(l>1&&l<2500?" ("+(d<1?Ye("M\xD6 ","")+Math.round(1-d)+(d<1?Ye(""," BC"):""):Math.round(d))+")":"")+"."})}function P_(){let n=[["Merk\xFCr","Mercury",87.969,880],["Ven\xFCs","Venus",224.701,740],["D\xFCnya","Earth",365.256,659],["Mars","Mars",686.98,587],["J\xFCpiter","Jupiter",4332.59,440],["Sat\xFCrn","Saturn",10759.2,330],["Uran\xFCs","Uranus",30688.5,247],["Nept\xFCn","Neptune",60182,220]],e=us("<h3>"+Ye("Gezegenlerin M\xFCzi\u011Fi","Music of the Planets")+'</h3><p class="xs">'+Ye("Her gezegen ger\xE7ek y\xF6r\xFCnge h\u0131z\u0131yla bir ses \xE7alar: i\xE7tekiler h\u0131zl\u0131 ve tiz, d\u0131\u015Ftakiler yava\u015F ve pest. Zaman: 1 y\u0131l = 8 saniye.","Each planet sounds at its real orbital rate: inner ones fast and high, outer ones slow and low. Time: 1 year = 8 seconds.")+'</p><div class="xrow"><button class="xgo" id="sp">\u25B6 '+Ye("\xC7al","Play")+'</button></div><canvas id="sc" width="720" height="260"></canvas>'),t=e.querySelector("#sc"),i=t.getContext("2d"),s=null,r=null,o=n.map(()=>0);e.querySelector("#sp").onclick=()=>{if(s)return;let u=window.AudioContext||window.webkitAudioContext;if(!u)return;s=new u;let c=s.createGain();c.gain.value=.5;let d=s.createDelay(1);d.delayTime.value=.45;let h=s.createGain();h.gain.value=.4,d.connect(h),h.connect(d),c.connect(s.destination),c.connect(d),d.connect(s.destination);let f=(M,k)=>{let I=s.createOscillator(),S=s.createGain();I.type="sine",I.frequency.value=M,S.gain.setValueAtTime(0,s.currentTime),S.gain.linearRampToValueAtTime(k,s.currentTime+.03),S.gain.exponentialRampToValueAtTime(5e-4,s.currentTime+2.6),I.connect(S),S.connect(c),I.start(),I.stop(s.currentTime+2.7)},g=8,v=Date.now()/864e5,m=performance.now(),p=n.map(()=>-1),w=n.map(M=>Math.max(1,Math.round(M[2]/365.25*g/2.6)));r=setInterval(()=>{let M=(performance.now()-m)/1e3/g*365.25;n.forEach((k,I)=>{let S=M/k[2]*w[I],_=Math.floor(S);o[I]=S%1*6.283,_!==p[I]&&(p[I]>=0&&f(k[3],.13),p[I]=_)})},60)},Ai=()=>{clearInterval(r),s&&s.close(),s=null};let a=Qa(()=>{i.fillStyle="#05060d",i.fillRect(0,0,720,260),n.forEach((u,c)=>{let d=20+c*14;i.strokeStyle="rgba(232,196,106,.18)",i.beginPath(),i.arc(360,130,d,0,7),i.stroke(),i.fillStyle="#e8c46a",i.beginPath(),i.arc(360+Math.cos(o[c])*d,130+Math.sin(o[c])*d,3,0,7),i.fill()}),i.fillStyle="#ffd27a",i.beginPath(),i.arc(360,130,6,0,7),i.fill()}),l=Ai;Ai=()=>{l(),a()}}function k_(){let n=[["G\xFCne\u015F","Sun",0],["Merk\xFCr","Mercury",.387],["Ven\xFCs","Venus",.723],["D\xFCnya","Earth",1],["Mars","Mars",1.524],["J\xFCpiter","Jupiter",5.203],["Sat\xFCrn","Saturn",9.537],["Uran\xFCs","Uranus",19.19],["Nept\xFCn","Neptune",30.07]],e=107.5,t=us("<h3>"+Ye("\xD6l\xE7ek Y\xFCr\xFCy\xFC\u015F\xFC","Scale Walk")+'</h3><p class="xs">'+Ye("G\xFCne\u015F 1 metrelik bir top olsayd\u0131: gezegenler bu mesafelerde olurdu. Saatte 5 km y\xFCr\xFCrsen ne kadar s\xFCrer?","If the Sun were a 1-metre ball: planets would sit at these distances. How long to walk at 5 km/h?")+'</p><input type="range" id="ws" min="0" max="1000" value="0"><output id="wo"></output><table class="xt">'+n.map(s=>"<tr><td>"+Ye(s[0],s[1])+"</td><td>"+(s[2]*e).toFixed(s[2]*e<10?1:0)+" m</td><td>"+(s[2]*e/83.3).toFixed(1)+Ye(" dk"," min")+"</td></tr>").join("")+'</table><p class="xs">'+Ye("En yak\u0131n y\u0131ld\u0131z Proxima Centauri bu \xF6l\xE7ekte yakla\u015F\u0131k 28.800 km uzakta: ayn\u0131 tempoyla y\xFCr\xFCmek yakla\u015F\u0131k 650 y\u0131l s\xFCrer.","The nearest star, Proxima Centauri, would be about 28,800 km away at this scale \u2014 roughly 650 years of walking at the same pace.")+"</p>"),i=()=>{let s=+t.querySelector("#ws").value/1e3,r=Math.pow(s,2)*3400,o=n[0];n.forEach(a=>{a[2]*e<=r&&(o=a)}),t.querySelector("#wo").textContent=Math.round(r)+" m \xB7 "+(r/83.3).toFixed(1)+Ye(" dk y\xFCr\xFCd\xFCn \xB7 en son ge\xE7ti\u011Fin: "," min walked \xB7 last passed: ")+Ye(o[0],o[1])};t.querySelector("#ws").oninput=i,i()}var Nl=[["Merk\xFCr","Mercury",.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593,37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081],["Ven\xFCs","Venus",.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255,39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418],["D\xFCnya","Earth",1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0,562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0],["Mars","Mars",1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891,1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343],["J\xFCpiter","Jupiter",5.202887,.04838624,1.30439695,34.39644051,14.72847983,100.47390909,-116e-6,-13253e-8,-.00183714,3034.74612775,.21252668,.20469106],["Sat\xFCrn","Saturn",9.53667594,.05386179,2.48599187,49.95424423,92.59887831,113.66242448,-.0012506,-50991e-8,.00193609,1222.49362201,-.41897216,-.28867794]],Xt=Math.PI/180,Os=n=>(n%360+360)%360;function Ep(n,e){let t=n[2]+n[8]*e,i=n[3]+n[9]*e,s=(n[4]+n[10]*e)*Xt,r=Os(n[5]+n[11]*e),o=Os(n[6]+n[12]*e),a=Os(n[7]+n[13]*e),l=Os(r-o)*Xt,u=l;for(let m=0;m<30;m++)u-=(u-i*Math.sin(u)-l)/(1-i*Math.cos(u));let c=t*(Math.cos(u)-i),d=t*Math.sqrt(1-i*i)*Math.sin(u),h=(o-a)*Xt,f=a*Xt,g=c*Math.cos(h)-d*Math.sin(h),v=c*Math.sin(h)+d*Math.cos(h);return[g*Math.cos(f)-v*Math.cos(s)*Math.sin(f),g*Math.sin(f)+v*Math.cos(s)*Math.cos(f),v*Math.sin(s)]}function L_(n,e){let t=(e-2451545)/36525,i=Ep(Nl[2],t),s=Ep(Nl[n],t),r=s[0]-i[0],o=s[1]-i[1],a=s[2]-i[2],l=23.43929*Xt,u=r,c=o*Math.cos(l)-a*Math.sin(l),d=o*Math.sin(l)+a*Math.cos(l);return{ra:Os(Math.atan2(c,u)/Xt),dec:Math.asin(d/Math.hypot(r,o,a))/Xt}}function I_(n){let e=(n-2451545)/36525,t=(357.52911+35999.05029*e)*Xt,i=(1.914602-.004817*e)*Math.sin(t)+.019993*Math.sin(2*t),s=(280.46646+36000.76983*e+i-.00569)*Xt,r=23.43929*Xt;return{ra:Os(Math.atan2(Math.cos(r)*Math.sin(s),Math.cos(s))/Xt),dec:Math.asin(Math.sin(r)*Math.sin(s))/Xt}}function D_(n){let e=n-2451545,t=(218.316+13.176396*e+6.289*Math.sin((134.963+13.064993*e)*Xt))*Xt,i=5.128*Math.sin((93.272+13.22935*e)*Xt)*Xt,s=23.43929*Xt,r=Math.cos(i)*Math.cos(t),o=Math.cos(i)*Math.sin(t)*Math.cos(s)-Math.sin(i)*Math.sin(s),a=Math.cos(i)*Math.sin(t)*Math.sin(s)+Math.sin(i)*Math.cos(s);return{ra:Os(Math.atan2(o,r)/Xt),dec:Math.asin(a)/Xt}}var Fu=(n,e,t,i)=>{let s=Os(280.46061837+360.98564736629*(e-2451545)),r=(s+i-n.ra)*Xt,o=n.dec*Xt,a=t*Xt;return Math.asin(Math.sin(a)*Math.sin(o)+Math.cos(a)*Math.cos(o)*Math.cos(r))/Xt};function z_(){let n=us("<h3>"+Ye("G\xF6zlem Planlay\u0131c\u0131","Observation Planner")+'</h3><p class="xs">'+Ye("Konumunu gir (ya da cihazdan al): bug\xFCn gece G\xFCne\u015F, Ay ve gezegenler ne zaman do\u011Fup bat\u0131yor, \u015Fu an ufkun \xFCst\xFCnde mi? Konum yaln\u0131zca bu cihazda kullan\u0131l\u0131r.","Enter your location (or take it from the device): when do the Sun, Moon and planets rise and set tonight, and are they up now? Location stays on this device.")+'</p><div class="xrow"><input id="pa" type="number" step="any" placeholder="'+Ye("enlem","lat")+'"><input id="po" type="number" step="any" placeholder="'+Ye("boylam","lon")+'"><button class="xgo" id="pg">\u{1F4CD}</button></div><div id="pt"></div><p class="xs">'+Ye("Basit eleman modeli; do\u011Fu\u015F/bat\u0131\u015F dakikalar mertebesinde yakla\u015F\u0131kt\u0131r. Saatler cihaz\u0131n yerel saatindedir.","A simple element model; rise/set times are approximate to within minutes. Times are in the device's local time.")+"</p>"),e=(()=>{try{return JSON.parse(localStorage.getItem("qloc")||"null")}catch{return null}})();e&&(n.querySelector("#pa").value=e[0],n.querySelector("#po").value=e[1]);let t=()=>{let i=parseFloat(n.querySelector("#pa").value),s=parseFloat(n.querySelector("#po").value);if(!isFinite(i)||!isFinite(s))return;try{localStorage.setItem("qloc",JSON.stringify([i,s]))}catch{}let r=Date.now(),o=r/864e5+24405875e-1,a=new Date;a.setHours(0,0,0,0);let l=a.getTime()/864e5+24405875e-1,u=[[Ye("G\xFCne\u015F","Sun"),f=>I_(f),-.83],[Ye("Ay","Moon"),f=>D_(f),.125]].concat([0,1,3,4,5].map(f=>[Ye(Nl[f][0],Nl[f][1]),g=>L_(f,g),-.57])),c=f=>new Date((f-24405875e-1)*864e5).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),d=u.map(([f,g,v])=>{let m=null,p=null,w=Fu(g(l),l,i,s),M=-90,k=l;for(let S=5;S<=1440;S+=5){let _=l+S/1440,R=Fu(g(_),_,i,s);w<v&&R>=v&&!m&&(m=_),w>=v&&R<v&&!p&&(p=_),R>M&&(M=R,k=_),w=R}let I=Fu(g(o),o,i,s);return"<tr><td>"+f+"</td><td>"+(m?c(m):"\u2014")+"</td><td>"+(M>v?c(k):"\u2014")+"</td><td>"+(p?c(p):"\u2014")+"</td><td>"+(I>0?"\u2191 ":"\u2193 ")+I.toFixed(0)+"\xB0</td></tr>"}).join(""),h=(()=>{let f=o-24515501e-1,g=(f/29.530588861%1+1)%1;return Math.round((1-Math.cos(g*6.283))/2*100)})();n.querySelector("#pt").innerHTML='<table class="xt"><tr><th></th><th>'+Ye("Do\u011Fu\u015F","Rise")+"</th><th>"+Ye("Tepe","Transit")+"</th><th>"+Ye("Bat\u0131\u015F","Set")+"</th><th>"+Ye("\u015Eimdi","Now")+"</th></tr>"+d+'</table><p class="xs">'+Ye("Ay ayd\u0131nl\u0131\u011F\u0131 yakla\u015F\u0131k %","Moon illumination \u2248 ")+h+(Tp()?"":"%")+"</p>"};n.querySelector("#pg").onclick=()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(i=>{n.querySelector("#pa").value=i.coords.latitude.toFixed(3),n.querySelector("#po").value=i.coords.longitude.toFixed(3),t()},()=>{},{timeout:8e3})},n.querySelectorAll("input").forEach(i=>i.onchange=t),t()}function U_(){let n=us("<h3>"+Ye("Uzay Havas\u0131 (canl\u0131)","Space Weather (live)")+'</h3><p class="xs">'+Ye("NOAA Uzay Havas\u0131 Tahmin Merkezi'nden g\xFCne\u015F r\xFCzg\xE2r\u0131 ve jeomanyetik aktivite. Ba\u011Flant\u0131 yoksa bo\u015F kal\u0131r.","Solar wind and geomagnetic activity from NOAA SWPC. Blank when offline.")+'</p><div id="wo" class="xs">\u2026</div><canvas id="wc" width="360" height="360" style="max-width:360px;display:block;margin:auto"></canvas>'),e=n.querySelector("#wc"),t=e.getContext("2d"),i=null,s=()=>{if(t.fillStyle="#05060d",t.fillRect(0,0,360,360),t.strokeStyle="rgba(232,196,106,.25)",[60,120,170].forEach(r=>{t.beginPath(),t.arc(180,180,r,0,7),t.stroke()}),t.fillStyle="#9a917a",t.font="11px Georgia",t.textAlign="center",t.fillText(Ye("kuzey kutbu","north pole"),180,183),t.fillText("60\xB0",180,72),t.fillText("45\xB0",180,22),i!=null){let r=Math.max(40,66.5-2.2*i),o=(90-r)/50*170*(50/50);t.strokeStyle="rgba(80,255,170,.9)",t.lineWidth=6,t.beginPath(),t.arc(180,180,Math.min(170,(90-r)/45*170),0,7),t.stroke(),t.lineWidth=1,t.fillStyle="#7dffbf",t.fillText(Ye("aurora ovali, kabaca ","auroral oval, roughly ")+r.toFixed(0)+"\xB0",180,350)}};s(),Promise.all([fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json").then(r=>r.json()),fetch("https://services.swpc.noaa.gov/products/solar-wind/plasma-2-hour.json").then(r=>r.json()).catch(()=>null)]).then(([r,o])=>{let a=r[r.length-1],l=Array.isArray(a)?a:[a.time_tag,a.Kp!=null?a.Kp:a.kp_index];i=parseFloat(l[1]);let u="Kp: <b>"+i.toFixed(1)+"</b> ("+T_(l[0])+" UTC)";if(o&&o.length>1){let c=o[o.length-1];u+=" \xB7 "+Ye("r\xFCzg\xE2r h\u0131z\u0131 ","wind speed ")+"<b>"+Math.round(c[2])+" km/s</b> \xB7 "+Ye("yo\u011Funluk ","density ")+c[1]+" /cm\xB3"}n.querySelector("#wo").innerHTML=u+"<br>"+Ye("Kp \u2265 5 jeomanyetik f\u0131rt\u0131na demektir.","Kp \u2265 5 indicates a geomagnetic storm."),s()}).catch(()=>{n.querySelector("#wo").textContent=Ye("Veri al\u0131namad\u0131 (\xE7evrimd\u0131\u015F\u0131 olabilir).","No data (maybe offline).")})}function N_(){let n=us("<h3>"+Ye("Uydular (canl\u0131 konum)","Satellites (live)")+'</h3><p class="xs">'+Ye("Celestrak y\xF6r\xFCnge verisiyle, SGP4 ile bu an hesaplan\u0131r: en parlak ~150 uydu, ISS dahil. Veri al\u0131namazsa bo\u015F kal\u0131r.","Computed now with SGP4 from Celestrak orbital data: ~150 brightest satellites including the ISS. Blank if data cannot be fetched.")+'</p><canvas id="uc" width="720" height="360"></canvas><output id="uo"></output>'),e=n.querySelector("#uc"),t=e.getContext("2d"),i=new Image;i.src="img/sol/earth_day.jpg";let s=[],r=null;fetch("https://celestrak.org/NORAD/elements/gp.php?GROUP=visual&FORMAT=tle").then(o=>o.text()).then(o=>{let a=o.trim().split(/\r?\n/);for(let l=0;l+2<a.length;l+=3)try{let u=yp(a[l+1],a[l+2]),c=a[l].trim();s.push({n:c,rec:u}),/ISS \(ZARYA\)/.test(c)&&(r=s[s.length-1])}catch{}}).catch(()=>{n.querySelector("#uo").textContent=Ye("Veri al\u0131namad\u0131.","No data.")}),Ai=Qa(()=>{t.drawImage(i,0,0,720,360),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(0,0,720,360);let o=new Date,a=Ja(o),l=0;s.forEach(u=>{let c=Ou(u.rec,o);if(!c||!c.position)return;let d=Sp(c.position,a),h=bp(d.latitude),f=Mp(d.longitude),g=(f+180)/360*720,v=(90-h)/180*360;l++;let m=u===r;t.fillStyle=m?"#ffdd55":"#9fe8ff",t.beginPath(),t.arc(g,v,m?5:2,0,7),t.fill(),m&&(t.fillStyle="#fff",t.font="12px Georgia",t.fillText("ISS",g+7,v-6),n.querySelector("#uo").textContent="ISS: "+h.toFixed(1)+"\xB0, "+f.toFixed(1)+"\xB0 \xB7 "+Math.round(d.height)+" km \xB7 "+l+Ye(" uydu g\xF6r\xFCn\xFCr listede"," satellites listed"))})})}function Ap(n){Bu=n||"tr";let e=us("<h3>"+Ye("Uzay Laboratuvar\u0131","Space Lab")+'</h3><div class="xrow">'+[["n",Ye("\u{1F300} N-cisim","\u{1F300} N-body")],["t",Ye("\u{1FAA8} Gelgit / Roche","\u{1FAA8} Tides / Roche")],["c",Ye("\u{1F4A1} I\u015F\u0131k Konisi","\u{1F4A1} Light Cone")],["s",Ye("\u{1F3BC} Gezegen M\xFCzi\u011Fi","\u{1F3BC} Planet Music")],["w",Ye("\u{1F6B6} \xD6l\xE7ek Y\xFCr\xFCy\xFC\u015F\xFC","\u{1F6B6} Scale Walk")],["p",Ye("\u{1F52D} G\xF6zlem Planlay\u0131c\u0131","\u{1F52D} Observation Planner")],["k",Ye("\u2600 Uzay Havas\u0131","\u2600 Space Weather")],["u",Ye("\u{1F6F0} Uydular","\u{1F6F0} Satellites")],["h",Ye("\u26AB Kara Delik (\u0131\u015F\u0131n izleme)","\u26AB Black Hole (ray tracing)")]].map(i=>'<button class="xgo" data-f="'+i[0]+'">'+i[1]+"</button>").join("")+"</div>"),t={n:A_,t:R_,c:C_,s:P_,w:k_,p:z_,k:U_,u:N_,h:()=>{Ul(),Ai=wp(Bu)}};e.querySelectorAll("[data-f]").forEach(i=>i.onclick=()=>t[i.dataset.f]())}var Rp=vn==="tr",Me=(n,e)=>Rp?n:e,fr=n=>document.getElementById(n),ti={g(n,e){try{let t=localStorage.getItem(n);return t==null?e:JSON.parse(t)}catch{return e}},s(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},Yi=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),gr,to=null;function hi(n,e){pr();let t=document.createElement("div");return t.id="xp",t.className=e||"",t.innerHTML='<div class="xb"><button class="xx" aria-label="\u2715">\u2715</button>'+n+"</div>",document.body.appendChild(t),t.querySelector(".xx").onclick=pr,t.addEventListener("pointerdown",i=>{i.target===t&&pr()}),t.addEventListener("keydown",i=>i.stopPropagation()),t.querySelector(".xb")}function pr(){let n=fr("xp");n&&n.remove()}addEventListener("keydown",n=>{n.key==="Escape"&&pr()});var Cp=()=>ti.g("qpass",[]);addEventListener("qulVisit",n=>{let e=n.detail||{};if(!e.key)return;to=e;let t=Cp();t.some(i=>i.k===e.key)||(t.push({k:e.key,g:e.gal||"",t:Date.now()}),ti.s("qpass",t)),ti.g("qsesli",!1)&&G_(e.key),kp()});var Ol=n=>{let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0},mr=n=>{let e=gr.planets.find(t=>t.key===n);return e?e.title:n};function O_(){let n=Cp(),e=gr.planets.length,t=new Set(n.map(l=>l.g).filter(Boolean)),i=gr.galaxies.filter(l=>!l.bg).length,s=hi("<h3>"+Me("Evren Pasaportu","Universe Passport")+'</h3><p class="xs">'+n.length+" / "+e+Me(" gezegen \xB7 "," planets \xB7 ")+t.size+" / "+i+Me(" galaksi"," galaxies")+'</p><div class="xbar"><u style="width:'+Math.round(n.length/e*100)+'%"></u></div><div class="xst">'+(n.map(l=>"<span>"+Yi(mr(l.k))+"</span>").join("")||"<em>"+Me("Hen\xFCz damga yok. Bir gezegenin kart\u0131n\u0131 a\xE7.","No stamps yet. Open a planet card.")+"</em>")+'</div><canvas id="xc" width="720" height="440"></canvas><button class="xgo">'+Me("Tak\u0131my\u0131ld\u0131z\u0131m\u0131 kaydet","Save my constellation")+"</button>"),r=s.querySelector("#xc"),o=r.getContext("2d");o.fillStyle="#05060d",o.fillRect(0,0,720,440);for(let l=0;l<90;l++){let u=Ol("s"+l);o.fillStyle="rgba(255,255,255,"+(.15+u%50/100)+")",o.fillRect(u%720,(u>>10)%440,1,1)}let a=n.map(l=>{let u=Ol(l.k),c=Ol(l.k+"y");return[50+u%620,50+c%340,l.k]});o.strokeStyle="rgba(232,196,106,.55)",o.lineWidth=1.2,o.beginPath(),a.forEach((l,u)=>u?o.lineTo(l[0],l[1]):o.moveTo(l[0],l[1])),o.stroke(),a.forEach(l=>{let u=2.5+Ol(l[2]+"r")%30/10;o.fillStyle="#fff6d6",o.shadowColor="#e8c46a",o.shadowBlur=12,o.beginPath(),o.arc(l[0],l[1],u,0,7),o.fill()}),o.shadowBlur=0,o.fillStyle="#e8c46a",o.font="italic 22px Georgia",o.fillText(Me("Benim Tak\u0131my\u0131ld\u0131z\u0131m","My Constellation"),24,38),o.fillStyle="#9a917a",o.font="13px Georgia",o.fillText(a.length+Me(" durak \xB7 Qul Efsaneleri"," stops \xB7 Legends of the Qul"),24,422),s.querySelector(".xgo").onclick=()=>r.toBlob(l=>{let u=document.createElement("a");u.href=URL.createObjectURL(l),u.download="takimyildizim.png",u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),4e3)})}var Pp=()=>ti.g("qkaps",[]);function F_(){let n=to?to.key:"",e=hi("<h3>"+Me("Zaman Kaps\xFCl\xFC","Time Capsule")+'</h3><p class="xs">'+(n?Yi(mr(n))+Me(" i\xE7in bir not b\u0131rak; se\xE7ti\u011Fin zaman geldi\u011Finde sana hat\u0131rlat\u0131l\u0131r.",": leave a note; it will resurface at the chosen time."):Me("\xD6nce bir gezegenin kart\u0131n\u0131 a\xE7, sonra not b\u0131rak.","Open a planet card first, then leave a note."))+'</p><textarea maxlength="400" rows="4"></textarea><select><option value="7">'+Me("1 hafta sonra","in 1 week")+'</option><option value="30">'+Me("1 ay sonra","in 1 month")+'</option><option value="365">'+Me("1 y\u0131l sonra","in 1 year")+'</option></select><button class="xgo">'+Me("Kaps\xFCle koy","Seal it")+"</button>");e.querySelector(".xgo").onclick=()=>{let t=e.querySelector("textarea").value.trim();if(!t||!n)return;let i=Pp();i.push({k:n,tx:t,at:Date.now()+ +e.querySelector("select").value*864e5,w:Date.now()}),ti.s("qkaps",i),pr()}}function kp(){let n=Pp(),e=Date.now(),t=n.filter(s=>s.at<=e);if(!t.length)return;ti.s("qkaps",n.filter(s=>s.at>e));let i=hi("<h3>"+Me("Ge\xE7mi\u015Ften bir not","A note from the past")+"</h3>"+t.map(s=>'<p class="xq">\u201C'+Yi(s.tx)+"\u201D<small>"+Yi(mr(s.k))+" \xB7 "+new Date(s.w).toLocaleDateString()+"</small></p>").join(""))}var hr=null;function B_(){if(hr){Gu();return}hi("<h3>"+Me("Gece Gezintisi","Night Drift")+'</h3><p class="xs">'+Me("Galaksi gezintisi ba\u015Flar; ses ve \u0131\u015F\u0131k yava\u015F\xE7a k\u0131s\u0131l\u0131r, s\xFCre bitince kapan\u0131r. Ekrana dokununca iptal olur.","The galaxy drift starts; sound and light fade slowly and stop when time is up. Touch the screen to cancel.")+'</p><div class="xrow">'+[15,30,60].map(e=>'<button class="xgo" data-m="'+e+'">'+e+Me(" dk"," min")+"</button>").join("")+"</div>").querySelectorAll("[data-m]").forEach(e=>e.onclick=()=>{pr(),H_(+e.dataset.m)})}function H_(n){let e=document.createElement("div");e.id="uyku",document.body.appendChild(e);let t=Date.now(),i=n*6e4,s=fr("drift");s&&!document.body.classList.contains("drift")&&s.click(),hr={dv:e,iv:setInterval(()=>{let r=Math.min(1,(Date.now()-t)/i);e.style.opacity=String(r*.93),r>=1&&(!window.__hush&&fr("hush")&&fr("hush").click(),Gu(!0))},5e3)},setTimeout(()=>addEventListener("pointerdown",V_,{once:!0,capture:!0}),1200)}function V_(n){hr&&Gu()}function Gu(n){if(!hr)return;clearInterval(hr.iv);let e=hr.dv;if(hr=null,n){e.style.opacity="1",setTimeout(()=>e.remove(),6e5),e.onclick=()=>e.remove();let t=fr("drift");document.body.classList.contains("drift")&&t&&t.click()}else e.remove()}function G_(n){try{let e=window.speechSynthesis;if(!e)return;let t=gr.planets.find(s=>s.key===n);if(!t)return;e.cancel();let i=new SpeechSynthesisUtterance(t.title+". "+String(t.desc||"").split(/(?<=[.!?])\s/).slice(0,2).join(" "));i.lang=Rp?"tr-TR":vn||"en",i.rate=.95,e.speak(i)}catch{}}function W_(n){let e=!ti.g("qsesli",!1);if(ti.s("qsesli",e),n.textContent=e?Me("\u{1F508} Sesli betimleme: a\xE7\u0131k","\u{1F508} Narration: on"):Me("\u{1F508} Sesli betimleme: kapal\u0131","\u{1F508} Narration: off"),!e)try{speechSynthesis.cancel()}catch{}}function q_(){let n=hi("<h3>"+Me("Ard\u0131l Bilgi Laboratuvar\u0131","Lab of Derived Knowledge")+'</h3><p class="xs">'+Me("Ger\xE7ek fizik form\xFClleri; kurgudan ba\u011F\u0131ms\u0131z hesap tezg\xE2h\u0131.","Real physics formulas; a bench independent of the fiction.")+'</p><div class="xl"><b>'+Me("Roche s\u0131n\u0131r\u0131","Roche limit")+"</b><label>"+Me("Gezegen yo\u011Funlu\u011Fu (g/cm\xB3)","Planet density (g/cm\xB3)")+'<input id="l1" type="number" value="5.5" step="any"></label><label>'+Me("Uydu yo\u011Funlu\u011Fu (g/cm\xB3)","Moon density (g/cm\xB3)")+'<input id="l2" type="number" value="3.3" step="any"></label><output id="lo1"></output></div><div class="xl"><b>'+Me("Kara delik","Black hole")+"</b><label>"+Me("K\xFCtle (G\xFCne\u015F k\xFCtlesi)","Mass (solar masses)")+'<input id="l3" type="number" value="10" step="any"></label><output id="lo2"></output></div><div class="xl"><b>'+Me("Kepler y\xF6r\xFCnge periyodu","Kepler orbital period")+"</b><label>"+Me("Yar\u0131 b\xFCy\xFCk eksen (AU)","Semi-major axis (AU)")+'<input id="l4" type="number" value="1" step="any"></label><label>'+Me("Merkez k\xFCtle (G\xFCne\u015F k\xFCtlesi)","Central mass (solar)")+'<input id="l5" type="number" value="1" step="any"></label><output id="lo3"></output></div><div class="xl"><b>'+Me("I\u015F\u0131k gecikmesi","Light delay")+"</b><label>"+Me("Mesafe (\u0131\u015F\u0131k y\u0131l\u0131)","Distance (light-years)")+'<input id="l6" type="number" value="4.37" step="any"></label><output id="lo4"></output></div><div class="xl"><b>'+Me("Ka\xE7\u0131\u015F h\u0131z\u0131","Escape velocity")+"</b><label>"+Me("K\xFCtle (D\xFCnya k\xFCtlesi)","Mass (Earth masses)")+'<input id="l7" type="number" value="1" step="any"></label><label>'+Me("Yar\u0131\xE7ap (D\xFCnya yar\u0131\xE7ap\u0131)","Radius (Earth radii)")+'<input id="l8" type="number" value="1" step="any"></label><output id="lo5"></output></div>'),e=r=>parseFloat(n.querySelector("#"+r).value),t=(r,o)=>(r>=1e6||r<.01&&r>0?r.toExponential(2):r.toLocaleString(void 0,{maximumFractionDigits:2}))+" "+o,i=(r,o)=>{n.querySelector("#"+r).textContent=o},s=()=>{i("lo1",Me("Kat\u0131 uydu i\xE7in d \u2248 ","Rigid satellite d \u2248 ")+(1.26*Math.cbrt(e("l1")/e("l2"))).toFixed(2)+Me(" gezegen yar\u0131\xE7ap\u0131 \xB7 ak\u0131\u015Fkan i\xE7in "," planet radii \xB7 fluid ")+(2.44*Math.cbrt(e("l1")/e("l2"))).toFixed(2));let r=e("l3"),o=2.953*r;i("lo2",Me("Olay ufku yar\u0131\xE7ap\u0131 ","Horizon radius ")+t(o,"km")+" \xB7 "+Me("foton k\xFCresi ","photon sphere ")+t(1.5*o,"km")+" \xB7 ISCO "+t(3*o,"km")),i("lo3",Me("Periyot \u2248 ","Period \u2248 ")+t(Math.sqrt(Math.pow(e("l4"),3)/e("l5")),Me("y\u0131l","years")));let a=e("l6");i("lo4",Me("I\u015F\u0131k ","Light takes ")+t(a,Me("y\u0131l s\xFCrer","years"))+" \xB7 "+Me("bir mektup en az bu kadar yolda kal\u0131r","a letter needs at least that long")),i("lo5",t(11.186*Math.sqrt(e("l7")/e("l8")),"km/s"))};n.querySelectorAll("input").forEach(r=>r.oninput=s),s()}var Hu=[["G\xFCne\u015F","Sun",695700],["Merk\xFCr","Mercury",2439.7],["Ven\xFCs","Venus",6051.8],["D\xFCnya","Earth",6371],["Ay","Moon",1737.4],["Mars","Mars",3389.5],["J\xFCpiter","Jupiter",69911],["Sat\xFCrn","Saturn",58232],["Uran\xFCs","Uranus",25362],["Nept\xFCn","Neptune",24622]];function X_(){let n=Hu.map((s,r)=>'<option value="'+r+'">'+Me(s[0],s[1])+"</option>").join(""),e=hi("<h3>"+Me("K\u0131yas Tezg\xE2h\u0131","Comparison Bench")+'</h3><p class="xs">'+Me("Ger\xE7ek yar\u0131\xE7aplarla, \xF6l\xE7ekli.","True radii, to scale.")+'</p><div class="xrow"><select id="c1">'+n+'</select><select id="c2">'+n+'</select></div><canvas id="cc" width="720" height="360"></canvas><output id="co"></output>');e.querySelector("#c1").value="6",e.querySelector("#c2").value="3";let t=s=>s>=100?Math.round(s).toLocaleString():s.toFixed(2),i=()=>{let s=Hu[+e.querySelector("#c1").value],r=Hu[+e.querySelector("#c2").value],o=e.querySelector("#cc"),a=o.getContext("2d");a.fillStyle="#05060d",a.fillRect(0,0,720,360);let l=Math.max(s[2],r[2]),u=150,c=s[2]/l*u,d=r[2]/l*u,h=(g,v,m,p)=>{a.fillStyle=m,a.beginPath(),a.arc(g,190,Math.max(v,1.2),0,7),a.fill(),a.fillStyle="#e8dcc0",a.font="14px Georgia",a.textAlign="center",a.fillText(p,g,350)};h(190,c,"#c9a86a",Me(s[0],s[1])),h(540,d,"#6fa8dc",Me(r[0],r[1]));let f=s[2]/r[2];e.querySelector("#co").textContent=Me(s[0]+" yar\u0131\xE7ap\u0131 "+t(s[2])+" km; "+r[0]+" yar\u0131\xE7ap\u0131 "+t(r[2])+" km \u2192 ","Radius "+t(s[2])+" km vs "+t(r[2])+" km \u2192 ")+(f>=1?"\xD7"+f.toFixed(2):"\xD7"+(1/f).toFixed(2)+Me(" k\xFC\xE7\xFCk"," smaller"))+" \xB7 "+Me("hacim oran\u0131 ","volume ratio ")+t(Math.pow(f,3))};e.querySelectorAll("select").forEach(s=>s.onchange=i),i()}function Y_(){let n=[["Medusa Bulutsusu (Abell 21)","Medusa Nebula (Abell 21)","\u0130kizler tak\u0131my\u0131ld\u0131z\u0131nda bir gezegenimsi bulutsu; \xF6lmekte olan bir y\u0131ld\u0131z\u0131n d\u0131\u015Far\u0131 att\u0131\u011F\u0131 gaz. Yakla\u015F\u0131k 1.500 \u0131\u015F\u0131k y\u0131l\u0131 uzakta.","A planetary nebula in Gemini: gas shed by a dying star, roughly 1,500 light-years away."],["Yenge\xE7 Bulutsusu","Crab Nebula","1054 y\u0131l\u0131nda g\xF6zlenen bir s\xFCpernovan\u0131n kal\u0131nt\u0131s\u0131; merkezinde saniyede yakla\u015F\u0131k 30 kez d\xF6nen bir pulsar var.","Remnant of the supernova seen in 1054; a pulsar at its centre spins about 30 times a second."],["Yarat\u0131l\u0131\u015F S\xFCtunlar\u0131","Pillars of Creation","Kartal Bulutsusu i\xE7indeki, yeni y\u0131ld\u0131zlar\u0131n do\u011Fdu\u011Fu so\u011Fuk gaz ve toz s\xFCtunlar\u0131 (yakla\u015F\u0131k 6.500 \u0131\u015F\u0131k y\u0131l\u0131).","Columns of cold gas and dust in the Eagle Nebula where new stars form (about 6,500 light-years)."],["S\u0131cak J\xFCpiterler","Hot Jupiters","51 Pegasi b (1995) gibi, y\u0131ld\u0131z\u0131na birka\xE7 g\xFCnde dolanan dev gaz gezegenler ger\xE7ekten ke\u015Ffedildi.","Giant gas planets orbiting their star in days, like 51 Pegasi b (1995), have really been found."],["\xC7ift y\u0131ld\u0131z\u0131 dolanan gezegenler","Circumbinary planets","Kepler-16b gibi, iki g\xFCne\u015Fin etraf\u0131nda dolanan gezegenler g\xF6zlemlendi.","Planets orbiting two suns, such as Kepler-16b, have been observed."],["Ba\u015F\u0131bo\u015F gezegenler","Rogue planets","Hi\xE7bir y\u0131ld\u0131za ba\u011Fl\u0131 olmayan gezegen adaylar\u0131 k\xFCtle\xE7ekimsel mikromercekle saptan\u0131yor.","Planet candidates bound to no star are detected through gravitational microlensing."],["Kara delik g\xF6lgesi","Black hole shadow","M87* (2019) ve Samanyolu'nun merkezi Sgr A* (2022) Olay Ufku Teleskobu ile g\xF6r\xFCnt\xFClendi.","M87* (2019) and the Milky Way's Sgr A* (2022) were imaged by the Event Horizon Telescope."],["Dev halka sistemleri","Giant ring systems","J1407b adl\u0131 cismin halka sisteminin Sat\xFCrn'\xFCnkinden \xE7ok daha b\xFCy\xFCk oldu\u011Fu tahmin ediliyor.","The ring system of J1407b is estimated to be far larger than Saturn's."]];hi("<h3>"+Me("Ger\xE7ekte Var","It Really Exists")+'</h3><p class="xs">'+Me("G\xF6rsel \xF6\u011Felerin ger\xE7ek evrendeki kar\u015F\u0131l\u0131klar\u0131.","Real-universe counterparts of the visuals.")+"</p>"+n.map(e=>'<div class="xl"><b>'+Me(e[0],e[1])+"</b><span>"+Me(e[2],e[3])+"</span></div>").join(""))}function K_(){let n=[[1,"7.6\u20138.0","Samanyolu g\xF6lge d\xFC\u015F\xFCr\xFCr; zodyak \u0131\u015F\u0131\u011F\u0131 \xE7ok belirgin.","The Milky Way casts shadows; zodiacal light is vivid."],[2,"7.1\u20137.5","Samanyolu ayr\u0131nt\u0131l\u0131; g\xF6ky\xFCz\xFC \xE7ok karanl\u0131k.","Detailed Milky Way; very dark sky."],[3,"6.6\u20137.0","K\u0131rsal g\xF6ky\xFCz\xFC; ufukta hafif \u0131\u015F\u0131k kirlili\u011Fi.","Rural sky; faint light pollution at the horizon."],[4,"6.2\u20136.5","K\u0131rsal\u2013banliy\xF6; Samanyolu h\xE2l\xE2 rahat g\xF6r\xFCl\xFCr.","Rural/suburban; the Milky Way is still easy."],[5,"5.6\u20136.1","Banliy\xF6; Samanyolu zay\u0131f.","Suburban; the Milky Way is faint."],[6,"5.1\u20135.5","Parlak banliy\xF6; Samanyolu ancak tepede se\xE7ilir.","Bright suburban; the Milky Way barely at the zenith."],[7,"4.6\u20135.0","Banliy\xF6\u2013kent ge\xE7i\u015Fi; Samanyolu g\xF6r\xFCnmez.","Suburban/urban; no Milky Way."],[8,"4.1\u20134.5","Kent g\xF6\u011F\xFC; yaln\u0131zca parlak y\u0131ld\u0131zlar.","City sky; only bright stars."],[9,"\u22484.0","Kent merkezi; birka\xE7 y\xFCz y\u0131ld\u0131zdan az\u0131.","Inner city; only a few hundred stars at most."]],e=hi("<h3>"+Me("Senin G\xF6\u011F\xFCn","Your Sky")+'</h3><p class="xs">'+Me("Bortle \xF6l\xE7e\u011Fi: bulundu\u011Fun yerin \u0131\u015F\u0131k kirlili\u011Fine g\xF6re g\xF6ky\xFCz\xFCn\xFCn nas\u0131l g\xF6r\xFCnd\xFC\u011F\xFC.","Bortle scale: how the sky looks under your local light pollution.")+'</p><input type="range" id="bs" min="1" max="9" value="5"><canvas id="bc" width="720" height="300"></canvas><output id="bo"></output>'),t=()=>{let i=+e.querySelector("#bs").value,s=n[i-1],r=[7.8,7.3,6.8,6.35,5.85,5.3,4.8,4.3,4][i-1],o=e.querySelector("#bc"),a=o.getContext("2d");a.fillStyle="rgb("+(5+i*7)+","+(6+i*6)+","+(14+i*5)+")",a.fillRect(0,0,720,300);let l=12345,u=()=>(l=l*1664525+1013904223>>>0)/4294967296;for(let c=0;c<2400;c++){let d=u()*720,h=u()*300,f=7.8-Math.pow(u(),.28)*7.2;if(f>r)continue;a.fillStyle="rgba(255,255,255,"+Math.min(1,.25+(r-f)/5)+")";let g=f<2?1.8:f<4?1.1:.7;a.beginPath(),a.arc(d,h,g,0,7),a.fill()}if(i<=5){let c=a.createLinearGradient(0,300,720,0);c.addColorStop(.3,"rgba(200,190,170,0)"),c.addColorStop(.5,"rgba(200,190,170,"+(.28-i*.04)+")"),c.addColorStop(.7,"rgba(200,190,170,0)"),a.fillStyle=c,a.fillRect(0,0,720,300)}e.querySelector("#bo").textContent="Bortle "+i+" \xB7 "+Me("en s\xF6n\xFCk y\u0131ld\u0131z \u2248 ","limiting magnitude \u2248 ")+s[1]+" \xB7 "+Me(s[2],s[3])};e.querySelector("#bs").oninput=t,t()}function Z_(){let n=[["Neden Ay hep ayn\u0131 y\xFCz\xFCn\xFC g\xF6sterir?","Why does the Moon always show the same face?","Gelgit kilitlenmesi: Ay'\u0131n kendi ekseni etraf\u0131nda d\xF6nme s\xFCresi, D\xFCnya \xE7evresinde dolanma s\xFCresine e\u015Fitlendi.","Tidal locking: the Moon's rotation period has become equal to its orbital period."],["Neden b\xFCy\xFCk g\xF6kcisimleri yuvarlakt\u0131r?","Why are large bodies round?","Yeterince b\xFCy\xFCk k\xFCtlede kendi \xE7ekimi, kayay\u0131 k\xFCreye yak\u0131n bir bi\xE7ime \xE7eker; k\xFC\xE7\xFCk asteroitler bu e\u015Fi\u011Fin alt\u0131nda kal\u0131r.","Above a certain mass, self-gravity pulls rock toward a sphere; small asteroids fall below that threshold."],["Neden uzay sessizdir?","Why is space silent?","Ses bir ortamda titre\u015Fim olarak yay\u0131l\u0131r; uzay neredeyse bo\u015Fluk oldu\u011Fu i\xE7in ta\u015F\u0131yacak ortam yoktur.","Sound travels as vibrations in a medium; space is nearly a vacuum."],["Neden Sat\xFCrn'\xFCn halkalar\u0131 var?","Why does Saturn have rings?","Roche s\u0131n\u0131r\u0131 yak\u0131n\u0131nda buz par\xE7ac\u0131klar\u0131 bir araya gelip uyduya d\xF6n\xFC\u015Femiyor. K\xF6kenleri h\xE2l\xE2 tart\u0131\u015F\u0131l\u0131yor.","Near the Roche limit, ice particles cannot clump into a moon. Their origin is still debated."],["Neden g\xF6ky\xFCz\xFC g\xFCnd\xFCz mavidir?","Why is the sky blue by day?","Atmosferdeki molek\xFCller k\u0131sa dalga boylu mavi \u0131\u015F\u0131\u011F\u0131 daha \xE7ok sa\xE7ar (Rayleigh sa\xE7\u0131lmas\u0131).","Air molecules scatter short-wavelength blue light more strongly (Rayleigh scattering)."],["Neden Ven\xFCs Merk\xFCr'den s\u0131cakt\u0131r?","Why is Venus hotter than Mercury?","Yo\u011Fun karbondioksit atmosferinin sera etkisi y\xFCzeyi yakla\u015F\u0131k 460 \xB0C'ye \xE7\u0131kar\u0131r.","A thick carbon-dioxide atmosphere creates a greenhouse effect of about 460 \xB0C."],["Neden y\u0131ld\u0131zlar g\xF6z k\u0131rpar?","Why do stars twinkle?","Atmosferdeki t\xFCrb\xFClans noktasal y\u0131ld\u0131z \u0131\u015F\u0131\u011F\u0131n\u0131 s\xFCrekli sapt\u0131r\u0131r; gezegenler k\xFC\xE7\xFCk disk oldu\u011Fu i\xE7in daha az titrer.","Atmospheric turbulence keeps bending pinpoint starlight; planets are tiny discs and twinkle less."]];hi("<h3>"+Me("Neden?","Why?")+'</h3><p class="xs">'+Me("Merakl\u0131 sorular\u0131n k\u0131sa, ger\xE7ek cevaplar\u0131.","Short, real answers to curious questions.")+"</p>"+n.map(e=>'<details class="xl"><summary>'+Me(e[0],e[1])+"</summary><p>"+Me(e[2],e[3])+"</p></details>").join(""))}function j_(){let n=hi("<h3>"+Me("Bilim Raf\u0131","Science Shelf")+'</h3><div class="xrow"><button class="xgo" data-f="c">'+Me("\u2696 K\u0131yas Tezg\xE2h\u0131","\u2696 Comparison Bench")+'</button><button class="xgo" data-f="r">'+Me("\u2728 Ger\xE7ekte Var","\u2728 It Really Exists")+'</button><button class="xgo" data-f="b">'+Me("\u{1F30C} Senin G\xF6\u011F\xFCn","\u{1F30C} Your Sky")+'</button><button class="xgo" data-f="w">'+Me("\u2753 Neden?","\u2753 Why?")+"</button></div>"),e={c:X_,r:Y_,b:K_,w:Z_};n.querySelectorAll("[data-f]").forEach(t=>t.onclick=()=>e[t.dataset.f]())}var eo=null,dr=null;function Lp(n){if(Vu(),!n.length||!eo)return;let e=0,t=document.createElement("button");t.id="rstop",t.textContent=Me("\u25A0 Rotay\u0131 durdur","\u25A0 Stop route"),t.onclick=Vu,document.body.appendChild(t);let i=()=>{if(dr){if(e>=n.length){Vu();return}try{eo.flyToPlanet(n[e])}catch{}e++,dr.tm=setTimeout(i,11e3)}};dr={tm:0,bt:t},i()}function Vu(){dr&&(clearTimeout(dr.tm),dr.bt.remove(),dr=null)}function J_(){let n=[],e=hi("<h3>"+Me("Rota Planlay\u0131c\u0131","Route Planner")+'</h3><p class="xs">'+Me("Duraklar\u0131n\u0131 s\u0131rayla se\xE7; rota otomatik gezilir, ba\u011Flant\u0131 ya da QR ile payla\u015F\u0131l\u0131r.","Pick stops in order; the route plays automatically and can be shared by link or QR.")+'</p><input id="rq" placeholder="'+Me("ara\u2026","search\u2026")+'"><div class="rl"></div><div class="xs" id="rs"></div><div class="xrow"><button class="xgo" id="rgo">'+Me("\u25B6 Ba\u015Flat","\u25B6 Start")+'</button><button class="xgo" id="rsh">'+Me("\u{1F517} Payla\u015F (QR)","\u{1F517} Share (QR)")+'</button><button class="xgo" id="rcl">'+Me("Temizle","Clear")+'</button></div><div id="rqr"></div>'),t=e.querySelector(".rl"),i=()=>{e.querySelector("#rs").textContent=n.length?n.map(r=>mr(r)).join(" \u2192 "):"",t.querySelectorAll("button").forEach(r=>r.classList.toggle("on",n.includes(r.dataset.k)))},s=r=>{t.innerHTML=gr.planets.filter(o=>!r||(o.title||"").toLowerCase().includes(r)).map(o=>'<button type="button" data-k="'+Yi(o.key)+'">'+Yi(o.title)+"</button>").join(""),t.querySelectorAll("button").forEach(o=>o.onclick=()=>{let a=n.indexOf(o.dataset.k);a>=0?n.splice(a,1):n.length<20&&n.push(o.dataset.k),i()}),i()};s(""),e.querySelector("#rq").oninput=r=>s(r.target.value.toLowerCase()),e.querySelector("#rcl").onclick=()=>{n.length=0,i(),e.querySelector("#rqr").innerHTML=""},e.querySelector("#rgo").onclick=()=>{if(n.length){let r=n.slice();pr(),Lp(r)}},e.querySelector("#rsh").onclick=()=>{if(!n.length)return;let r=location.origin+location.pathname+"?rota="+n.join(","),o=e.querySelector("#rqr");o.innerHTML='<input readonly value="'+Yi(r)+'" onclick="this.select()">';let a=Ll(0,"M");a.addData(r),a.make();let l=document.createElement("img");l.src=a.createDataURL(6),l.style.cssText="display:block;margin:8px auto;background:#fff;padding:8px;border-radius:6px;width:min(300px,80%)",o.appendChild(l)}}function $_(){let n=ti.g("qnot",{}),e=to?to.key:"",t=hi("<h3>"+Me("Notlar\u0131m","My Notes")+"</h3>"+(e?'<p class="xs">'+Yi(mr(e))+'</p><textarea rows="4" maxlength="1200"></textarea><button class="xgo" id="ns">'+Me("Kaydet","Save")+"</button>":'<p class="xs">'+Me("Not almak i\xE7in \xF6nce bir gezegenin kart\u0131n\u0131 a\xE7.","Open a planet card first to take notes.")+"</p>")+'<div id="nl"></div><button class="xgo" id="nx">'+Me("Hepsini .txt indir","Download all as .txt")+"</button>"),i=t.querySelector("textarea");i&&(i.value=n[e]||"");let s=()=>{t.querySelector("#nl").innerHTML=Object.keys(n).filter(r=>n[r]).map(r=>'<div class="xl"><b>'+Yi(mr(r))+"</b><span>"+Yi(n[r])+"</span></div>").join("")};s(),i&&(t.querySelector("#ns").onclick=()=>{n[e]=i.value.trim(),n[e]||delete n[e],ti.s("qnot",n),s()}),t.querySelector("#nx").onclick=()=>{let r=Object.keys(n).map(a=>mr(a)+`
`+n[a]).join(`

`),o=document.createElement("a");o.href=URL.createObjectURL(new Blob([r],{type:"text/plain;charset=utf-8"})),o.download="atlas-notlarim.txt",o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),4e3)}}function Q_(){document.body.classList.add("duvar");let n=fr("drift");n&&!document.body.classList.contains("drift")&&n.click();let e=new MutationObserver(()=>{document.body.classList.contains("drift")||(document.body.classList.remove("duvar"),e.disconnect())});e.observe(document.body,{attributes:!0,attributeFilter:["class"]})}var pa=null;function eb(n){if(pa){pa.stop();return}let e=document.querySelector("#gl canvas");if(!e||!e.captureStream||!window.MediaRecorder){n.textContent=Me("\u23FA Bu taray\u0131c\u0131 desteklemiyor","\u23FA Not supported");return}let t=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(o=>MediaRecorder.isTypeSupported(o))||"",i=[],s=new MediaRecorder(e.captureStream(30),t?{mimeType:t,videoBitsPerSecond:5e6}:{}),r=setTimeout(()=>{pa&&pa.stop()},3e5);s.ondataavailable=o=>{o.data.size&&i.push(o.data)},s.onstop=()=>{clearTimeout(r),pa=null,n.textContent=Me("\u23FA Tur kayd\u0131","\u23FA Record tour");let o=document.createElement("a");o.href=URL.createObjectURL(new Blob(i,{type:"video/webm"})),o.download="qul-gezinti.webm",o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),8e3)},s.start(1e3),pa=s,n.textContent=Me("\u23F9 Kayd\u0131 bitir (en \xE7ok 5 dk)","\u23F9 Stop recording (max 5 min)")}function tb(n){let e=document.body.classList.toggle("sinif");ti.s("qsinif",e),n.textContent=e?Me("\u{1F3EB} S\u0131n\u0131f modu: a\xE7\u0131k","\u{1F3EB} Classroom: on"):Me("\u{1F3EB} S\u0131n\u0131f modu: kapal\u0131","\u{1F3EB} Classroom: off")}var Fl=null;function nb(n){if(Fl){Fl.stop(),Fl=null,n.textContent=Me("\u{1F4FB} Evren Radyosu","\u{1F4FB} Universe Radio");return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e,i=t.createGain();i.gain.value=0,i.gain.linearRampToValueAtTime(.5,t.currentTime+4);let s=t.createDelay(1.5);s.delayTime.value=.9;let r=t.createGain();r.gain.value=.55,s.connect(r),r.connect(s);let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=1800,i.connect(o),o.connect(t.destination),i.connect(s),s.connect(o);let a=55*Math.pow(2,Math.floor(Math.random()*5)/12),l=[0,2,4,7,9,12,14,16],u=(d,h,f)=>{let g=t.createOscillator(),v=t.createGain();g.type="sine",g.frequency.value=d,v.gain.setValueAtTime(0,t.currentTime),v.gain.linearRampToValueAtTime(f,t.currentTime+h*.35),v.gain.linearRampToValueAtTime(0,t.currentTime+h),g.connect(v),v.connect(i),g.start(),g.stop(t.currentTime+h+.1)};u(a,40,.12),u(a*1.5,40,.07);let c=setInterval(()=>{let d=a*2*Math.pow(2,l[Math.floor(Math.random()*l.length)]/12);u(d,5+Math.random()*4,.06+Math.random()*.05),Math.random()<.12&&u(a*Math.pow(2,l[Math.floor(Math.random()*4)]/12),22,.07)},2600);Fl={stop(){clearInterval(c),i.gain.cancelScheduledValues(t.currentTime),i.gain.linearRampToValueAtTime(0,t.currentTime+2),setTimeout(()=>t.close(),2500)}},n.textContent=Me("\u{1F4FB} Radyoyu kapat","\u{1F4FB} Radio off")}function Ip(n,e){gr=n,eo=e;let t=fr("tools");if(!t)return;let i=(a,l,u)=>{let c=document.createElement("button");return c.id=a,c.type="button",c.textContent=l,c.onclick=()=>u(c),t.appendChild(c),c};i("pass0",Me("\u{1F6C2} Pasaport","\u{1F6C2} Passport"),O_),i("kaps0",Me("\u23F3 Zaman Kaps\xFCl\xFC","\u23F3 Time Capsule"),F_),i("uyku0",Me("\u{1F319} Gece Gezintisi","\u{1F319} Night Drift"),B_),i("lab0",Me("\u{1F52C} Ard\u0131l Bilgi Lab.","\u{1F52C} Derived Lab"),q_);let s=i("sesli0","",W_);s.textContent=ti.g("qsesli",!1)?Me("\u{1F508} Sesli betimleme: a\xE7\u0131k","\u{1F508} Narration: on"):Me("\u{1F508} Sesli betimleme: kapal\u0131","\u{1F508} Narration: off"),i("shelf0",Me("\u{1F9EA} Bilim Raf\u0131","\u{1F9EA} Science Shelf"),j_),i("plan0",Me("\u{1F9ED} Rota Planlay\u0131c\u0131","\u{1F9ED} Route Planner"),J_),i("not0",Me("\u{1F4D3} Notlar\u0131m","\u{1F4D3} My Notes"),$_),i("duvar0",Me("\u{1F5BC} Duvar ka\u011F\u0131d\u0131 modu","\u{1F5BC} Wallpaper mode"),Q_),i("rec0",Me("\u23FA Tur kayd\u0131","\u23FA Record tour"),eb);let r=i("sinif0","",tb),o=ti.g("qsinif",!1);o&&document.body.classList.add("sinif"),r.textContent=o?Me("\u{1F3EB} S\u0131n\u0131f modu: a\xE7\u0131k","\u{1F3EB} Classroom: on"):Me("\u{1F3EB} S\u0131n\u0131f modu: kapal\u0131","\u{1F3EB} Classroom: off"),i("radyo0",Me("\u{1F4FB} Evren Radyosu","\u{1F4FB} Universe Radio"),nb),i("uzlab0",Me("\u{1F680} Uzay Laboratuvar\u0131","\u{1F680} Space Lab"),()=>Ap(vn));try{let a=new URLSearchParams(location.search).get("rota");if(a&&eo){let l=a.split(",").filter(u=>gr.planets.some(c=>c.key===u));l.length&&eo.whenIdle().then(()=>setTimeout(()=>Lp(l),1500))}}catch{}setTimeout(kp,4e3)}var Hl=8400,Bl=23.4392911*Math.PI/180,hs=Math.PI/180,ib="attribute vec3 col; attribute float sz; attribute float al; varying vec3 vC; varying float vA; void main(){ vC = col; vA = al; vec4 mv = modelViewMatrix * vec4(position,1.); gl_Position = projectionMatrix * mv; gl_PointSize = sz * "+Math.min(2,window.devicePixelRatio||1).toFixed(2)+"; }",sb="precision mediump float; varying vec3 vC; varying float vA; void main(){ vec2 d = gl_PointCoord - .5; float r = length(d); if(r > .5) discard; float a = smoothstep(.5,.0,r); gl_FragColor = vec4(vC, vA * a); }",zp=()=>new vt({vertexShader:ib,fragmentShader:sb,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ft}),Vl=(n,e,t)=>{let i=n*hs,s=e*hs,r=Math.cos(s)*Math.cos(i),o=Math.cos(s)*Math.sin(i),a=Math.sin(s),l=r,u=o*Math.cos(Bl)+a*Math.sin(Bl),c=-o*Math.sin(Bl)+a*Math.cos(Bl);return[l*t,c*t,-u*t]},rb=n=>{let e=Math.max(-.3,Math.min(1.9,n));if(e<.3)return[.72+e*.3,.82+e*.2,1];if(e<.8){let i=(e-.3)/.5;return[1,.96-i*.1,1-i*.3]}let t=Math.min(1,(e-.8)/1.1);return[1,.86-t*.3,.7-t*.35]};function ab(n){let e=n.byteLength/8,t=new DataView(n),i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e);for(let u=0;u<e;u++){let c=u*8,d=t.getUint16(c,!0)/100,h=t.getUint16(c+2,!0)/100-90,f=t.getInt16(c+4,!0)/100,g=t.getInt16(c+6,!0)/100,v=Vl(d,h,Hl);i[u*3]=v[0],i[u*3+1]=v[1],i[u*3+2]=v[2];let m=rb(g);s[u*3]=m[0],s[u*3+1]=m[1],s[u*3+2]=m[2],r[u]=Math.max(1.1,Math.min(6,1.2+(6.8-f)*.62)),o[u]=Math.max(.35,Math.min(1,1.05-(f-1)*.1))}let a=new Pt;a.setAttribute("position",new kt(i,3)),a.setAttribute("col",new kt(s,3)),a.setAttribute("sz",new kt(r,1)),a.setAttribute("al",new kt(o,1));let l=new Si(a,zp());return l.frustumCulled=!1,l.renderOrder=-9,l}function ob(){let e=new Float32Array(78e3),t=new Float32Array(26e3*3),i=new Float32Array(26e3),s=new Float32Array(26e3),r=192.85948*hs,o=27.12825*hs,a=122.93192*hs,l=1234567,u=()=>(l=l*1664525+1013904223>>>0)/4294967296,c=()=>{let f=0;for(let g=0;g<4;g++)f+=u();return(f-2)*1.7};for(let f=0;f<26e3;f++){let g;for(;;){g=u()*360;let _=(g+180)%360-180;if(u()<.22+.78*Math.exp(-(_/55)*(_/55)))break}let v=Math.abs((g+180)%360-180),m=c()*(6+7*Math.exp(-(v/40)*(v/40)))*hs,p=g*hs,w=Math.sin(o)*Math.sin(m)+Math.cos(o)*Math.cos(m)*Math.cos(a-p),M=Math.asin(Math.max(-1,Math.min(1,w))),k=r+Math.atan2(Math.cos(m)*Math.sin(a-p),Math.cos(o)*Math.sin(m)-Math.sin(o)*Math.cos(m)*Math.cos(a-p)),I=Vl(k/hs,M/hs,Hl*1.01);e[f*3]=I[0],e[f*3+1]=I[1],e[f*3+2]=I[2];let S=Math.exp(-(v/45)*(v/45));t[f*3]=.8+.2*S,t[f*3+1]=.84+.06*S,t[f*3+2]=1-.2*S,i[f]=5+u()*6,s[f]=.028+.03*S}let d=new Pt;d.setAttribute("position",new kt(e,3)),d.setAttribute("col",new kt(t,3)),d.setAttribute("sz",new kt(i,1)),d.setAttribute("al",new kt(s,1));let h=new Si(d,zp());return h.frustumCulled=!1,h.renderOrder=-10,h}function Dp(n,e){let t=[];n.forEach(r=>{for(let o=0;o<r.length-1;o++){let a=Vl(r[o][0],r[o][1],Hl*.99),l=Vl(r[o+1][0],r[o+1][1],Hl*.99);t.push(...a,...l)}});let i=new Pt;i.setAttribute("position",new Bt(t,3));let s=new na(i,new Vn({color:e,transparent:!0,opacity:.55,depthWrite:!1,depthTest:!1}));return s.frustumCulled=!1,s.renderOrder=-8,s.visible=!1,s}async function Up(n,e){let t=(c,d)=>fetch(e+c).then(h=>{if(!h.ok)throw new Error(c);return d?h.json():h.arrayBuffer()}),[i,s,r]=await Promise.all([t("yildiz.bin"),t("cizgi_bati.json",1),t("cizgi_cin.json",1)]),o=ob(),a=ab(i),l=Dp(s,6129348),u=Dp(r,12876125);return n.add(o),n.add(a),n.add(l),n.add(u),{setLines(c){l.visible=c==="w",u.visible=c==="c"}}}var Gl=Math.PI/180,lb=[{id:"halley",tr:"Halley Kuyruklu Y\u0131ld\u0131z\u0131",en:"Halley's Comet",a:17.834,e:.96714,i:162.26,O:58.42,w:111.33,T0:24464674e-1,r:.35,col:10475775,blurb:{tr:"Yakla\u015F\u0131k 75 y\u0131lda bir i\xE7 G\xFCne\u015F Sistemi'ne gelen, tarih boyunca kaydedilmi\u015F kuyruklu y\u0131ld\u0131z. Y\xF6r\xFCngesi G\xFCne\u015F'in z\u0131t y\xF6n\xFCnde (retrograd) dolan\u0131r; sahnedeki kuyruk daima G\xFCne\u015F'ten uza\u011Fa bakar.",en:"A comet returning to the inner Solar System about every 75 years. It orbits retrograde; its tail always points away from the Sun."},facts:[["\xC7ekirdek","\u2248 15 \xD7 8 km"],["Y\xF6r\xFCnge yar\u0131 b\xFCy\xFCk ekseni","17,8 AU"],["D\u0131\u015F merkezlik","0,967"],["Dolanma s\xFCresi","\u2248 75,3 y\u0131l"],["Son G\xFCnberi","9 \u015Eubat 1986"],["Sonraki G\xFCnberi","\u2248 28 Temmuz 2061"]],factsEn:[["Nucleus","\u2248 15 \xD7 8 km"],["Semi-major axis","17.8 AU"],["Eccentricity","0.967"],["Orbital period","\u2248 75.3 years"],["Last perihelion","9 Feb 1986"],["Next perihelion","\u2248 28 Jul 2061"]]},{id:"pluto",tr:"Pl\xFCton",en:"Pluto",a:39.482,e:.2488,i:17.16,O:110.299,w:113.834,M0:14.53,jd0:2451545,r:.186,col:14205861,tex:"mercury",blurb:{tr:"Kuiper Ku\u015Fa\u011F\u0131'n\u0131n en \xFCnl\xFC c\xFCce gezegeni. Y\xF6r\xFCngesi belirgin bi\xE7imde eliptik ve e\u011Fiktir; 1989'da G\xFCne\u015F'e en yak\u0131n noktas\u0131ndayd\u0131.",en:"The best-known dwarf planet of the Kuiper Belt, on a markedly eccentric, inclined orbit; it was at perihelion in 1989."},facts:[["\xC7ap","2.377 km"],["Y\xF6r\xFCnge yar\u0131 b\xFCy\xFCk ekseni","39,5 AU"],["D\u0131\u015F merkezlik","0,249"],["Dolanma s\xFCresi","\u2248 247,9 y\u0131l"],["Uydular","5 (Charon en b\xFCy\xFC\u011F\xFC)"],["Ortalama s\u0131cakl\u0131k","\u2248 \u2212230 \xB0C"]],factsEn:[["Diameter","2,377 km"],["Semi-major axis","39.5 AU"],["Eccentricity","0.249"],["Orbital period","\u2248 247.9 years"],["Moons","5 (Charon largest)"],["Mean temperature","\u2248 \u2212230 \xB0C"]]}],cb=(n,e)=>{let t=n;for(let i=0;i<40;i++){let s=(t-e*Math.sin(t)-n)/(1-e*Math.cos(t));if(t-=s,Math.abs(s)<1e-10)break}return t};function ub(n,e){let t=360/(Math.pow(n.a,1.5)*365.25),i=((n.T0!=null?t*(e-n.T0):n.M0+t*(e-n.jd0))%360+360)%360*Gl;return Np(n,cb(i,n.e))}function Np(n,e){let t=n.a*(Math.cos(e)-n.e),i=n.a*Math.sqrt(1-n.e*n.e)*Math.sin(e),s=n.w*Gl,r=n.i*Gl,o=n.O*Gl,a=t*Math.cos(s)-i*Math.sin(s),l=t*Math.sin(s)+i*Math.cos(s),u=a,c=l*Math.cos(r),d=l*Math.sin(r),h=u*Math.cos(o)-c*Math.sin(o),f=u*Math.sin(o)+c*Math.cos(o);return{xe:h,ye:f,ze:d}}function Op(n){let{root:e,bodies:t,BY:i,AUV:s,EN:r,chips:o,texLoader:a,TX:l}=n,u=[],c=(h,f)=>{let g=Math.hypot(h.xe,h.ye,h.ze)||1,v=s(g);return f.set(h.xe/g*v,h.ze/g*v,-h.ye/g*v)};lb.forEach(h=>{let f=new dn,g=new zn(h.r,24,16),v=new yl({color:h.col,roughness:1,metalness:0,emissive:2236962});f.add(new _t(g,v));let m=new Si(new Pt().setAttribute("position",new Bt([0,0,0],3)),new sr({color:h.col,size:7,sizeAttenuation:!1,depthWrite:!1,transparent:!0,opacity:.9}));f.add(m);let p=[],w=new B;for(let R=0;R<=400;R++){let x=R/400*Math.PI*2;p.push(c(Np(h,x),new B))}let M=new Bi(new Pt().setFromPoints(p),new Vn({color:h.col,transparent:!0,opacity:.3,depthWrite:!1}));e.add(M);let k=null;if(h.id==="halley"){let R=new Pt().setFromPoints([new B,new B(1,0,0)]);k=new Bi(R,new Vn({color:12576511,transparent:!0,opacity:.8,depthWrite:!1})),e.add(k)}e.add(f);let I={id:h.id,tr:h.tr,en:h.en,r:h.r*2.2,blurb:h.blurb,facts:(r?h.factsEn:h.facts).map(([R,x])=>[R,x])},S={b:I,grp:f,pos:new B,mat:null,mesh:f.children[0],orbit:M};t[h.id]=S,i[h.id]=I,u.push({s:h,rec:S,tail:k});let _=document.createElement("button");_.textContent=r?h.en:h.tr,_.dataset.id=h.id,_.onclick=()=>n.focus(h.id,6),o.appendChild(_)});let d=new B;return{update(h){u.forEach(({s:f,rec:g,tail:v})=>{let m=ub(f,h);if(c(m,g.pos),g.grp.position.copy(g.pos),v){let p=Math.hypot(m.xe,m.ye,m.ze),w=p<4?Math.min(60,22/Math.max(.3,p)):0,M=g.pos.clone().normalize(),k=v.geometry.attributes.position;k.setXYZ(0,g.pos.x,g.pos.y,g.pos.z),k.setXYZ(1,g.pos.x+M.x*w,g.pos.y+M.y*w,g.pos.z+M.z*w),k.needsUpdate=!0,v.visible=w>0}})}}}var lt=vn==="en";var hb="img/sol/",qu=n=>80*Math.pow(n,.62),Fp=14,db=23.4393*Math.PI/180,Bs=[{id:"sun",tr:"G\xFCne\u015F",en:"Sun",r:18,tex:null,blurb:{tr:"G2V t\xFCr\xFC bir y\u0131ld\u0131z. Sistemdeki k\xFCtlenin %99,86's\u0131 onda. Burada boyutu ger\xE7ek orandan (109 D\xFCnya yar\u0131\xE7ap\u0131) k\xFC\xE7\xFClt\xFClm\xFC\u015Ft\xFCr.",en:"A G2V star holding 99.86% of the system's mass. Shown smaller than its true size (109 Earth radii)."},facts:[["diam","1.392.700 km"],["surf",vn==="en"?"about 5,500 \xB0C":"yakla\u015F\u0131k 5.500 \xB0C"],["age",vn==="en"?"4.6 billion years":"4,6 milyar y\u0131l"]]},{id:"mercury",tr:"Merk\xFCr",en:"Mercury",r:.383,a:.387,L0:252.2503,n:4.092339,tilt:.03,per:1407.6,tex:"mercury",soft:.08,atm:0,blurb:{tr:"G\xFCne\u015F'e en yak\u0131n, en k\xFC\xE7\xFCk gezegen. Atmosferi yok; y\xFCzeyi kraterlerle kapl\u0131. (Doku: Ay haritas\u0131ndan t\xFCretilmi\u015F yakla\u015F\u0131k g\xF6r\xFCn\xFCm.)",en:"The closest and smallest planet. No real atmosphere; cratered surface. (Texture: approximated from the Moon map.)"},d:{diam:4879,au:.387,mkm:57.9,year:87.97,moons:0,tmin:-173,tmax:427,g:3.7}},{id:"venus",tr:"Ven\xFCs",en:"Venus",r:.949,a:.723,L0:181.9791,n:1.602131,tilt:177.4,per:-5832.5,tex:null,mode:1,soft:.4,atm:.5,atmc:[1,.85,.55],blurb:{tr:"Yo\u011Fun karbondioksit atmosferi ve k\xFCk\xFCrt asidi bulutlar\u0131yla kapl\u0131; y\xFCzeyi kur\u015Funu eritecek kadar s\u0131cak. Ters y\xF6nde d\xF6ner.",en:"Wrapped in a dense CO\u2082 atmosphere and sulfuric-acid clouds; hot enough to melt lead. Spins backwards."},d:{diam:12104,au:.723,mkm:108.2,year:224.7,moons:0,tmean:464,g:8.87}},{id:"earth",tr:"D\xFCnya",en:"Earth",r:1,a:1,L0:100.4646,n:.985609,tilt:23.44,per:23.934,tex:"earth",mode:9,moons:1,blurb:{tr:"Bilinen tek ya\u015Fam ta\u015F\u0131yan d\xFCnya. Y\xFCzeyinin yakla\u015F\u0131k %71'i okyanus. Gece-g\xFCnd\xFCz \xE7izgisi \u015Fu anki ger\xE7ek saate g\xF6redir.",en:"The only world known to host life. About 71% of its surface is ocean. The day/night line follows the real current time."},d:{diam:12742,au:1,mkm:149.6,year:365.26,moons:1,tmean:15,g:9.81}},{id:"moon",tr:"Ay",en:"Moon",r:.2727,tex:"moon",soft:.07,atm:0,blurb:{tr:"D\xFCnya'n\u0131n tek do\u011Fal uydusu. Hep ayn\u0131 y\xFCz\xFCn\xFC D\xFCnya'ya \xE7evirir; \u015Fu anki evresi ger\xE7ektir. G\xF6rsel y\xF6r\xFCnge yar\u0131\xE7ap\u0131 yakla\u015F\u0131k 4 kat s\u0131k\u0131\u015Ft\u0131r\u0131lm\u0131\u015Ft\u0131r.",en:"Earth's only natural satellite. Always shows the same face; its current phase is real. Orbit radius is compressed about 4\xD7."},d:{diam:3474,dist:384400,year:27.32,tmin:-173,tmax:127,g:1.62,per:655.7}},{id:"mars",tr:"Mars",en:"Mars",r:.532,a:1.524,L0:355.4533,n:.524033,tilt:25.2,per:24.623,tex:"mars",soft:.25,atm:.18,atmc:[.9,.6,.4],blurb:{tr:"Demir oksit tozundan k\u0131z\u0131l g\xF6r\xFCn\xFCr. \u0130nce atmosferi ve kutup buzullar\u0131 vard\u0131r; Olympus Mons G\xFCne\u015F Sistemi'nin en y\xFCksek volkan\u0131d\u0131r.",en:"Red from iron-oxide dust. Thin atmosphere and polar caps; Olympus Mons is the tallest volcano in the Solar System."},d:{diam:6779,au:1.524,mkm:227.9,year:686.98,moons:2,tmean:-63,g:3.71}},{id:"jupiter",tr:"J\xFCpiter",en:"Jupiter",r:10.97,a:5.203,L0:34.3964,n:.083091,tilt:3.1,per:9.925,tex:"jupiter",soft:.4,atm:.25,atmc:[.9,.8,.6],blurb:{tr:"En b\xFCy\xFCk gezegen; k\xFCtlesi di\u011Fer t\xFCm gezegenlerin toplam\u0131n\u0131n iki kat\u0131ndan fazla. B\xFCy\xFCk K\u0131rm\u0131z\u0131 Leke y\xFCzy\u0131llard\u0131r s\xFCren bir f\u0131rt\u0131nad\u0131r.",en:"The largest planet, more than twice the mass of all others combined. The Great Red Spot is a storm lasting centuries."},d:{diam:139820,au:5.203,mkm:778.5,year:4332.6,moons:"90+",tmean:-108,tnote:1,g:24.79}},{id:"saturn",tr:"Sat\xFCrn",en:"Saturn",r:9.14,a:9.537,L0:49.9542,n:.033471,tilt:26.7,per:10.656,tex:"saturn",soft:.4,atm:.2,atmc:[.95,.85,.6],ring:!0,blurb:{tr:"Halkalar\u0131 buz ve kaya par\xE7ac\u0131klar\u0131ndan olu\u015Fur; \xE7o\u011Fu birka\xE7 metre kal\u0131nl\u0131\u011F\u0131nda bir d\xFCzlemde toplanm\u0131\u015Ft\u0131r. Yo\u011Funlu\u011Fu sudan d\xFC\u015F\xFCkt\xFCr.",en:"Its rings are ice and rock particles confined to a plane only meters thick. Less dense than water."},d:{diam:116460,au:9.537,mkm:1434,year:10759,moons:"140+",tmean:-139,tnote:1,g:10.44}},{id:"uranus",tr:"Uran\xFCs",en:"Uranus",r:3.98,a:19.19,L0:313.2381,n:.011732,tilt:97.8,per:-17.24,tex:null,mode:2,soft:.4,atm:.3,atmc:[.6,.9,.95],blurb:{tr:"Yan yatm\u0131\u015F h\xE2lde (eksen e\u011Fikli\u011Fi 98\xB0) G\xFCne\u015F'in \xE7evresinde yuvarlan\u0131r. G\xF6r\xFCn\xFCr \u0131\u015F\u0131kta neredeyse \xF6zelliksiz, soluk camg\xF6be\u011Fi bir buz devidir.",en:"Rolls around the Sun on its side (98\xB0 tilt). Nearly featureless pale cyan ice giant in visible light."},d:{diam:50724,au:19.19,mkm:2871,year:30687,moons:28,tmean:-195,tnote:1,g:8.69}},{id:"neptune",tr:"Nept\xFCn",en:"Neptune",r:3.86,a:30.07,L0:304.88,n:.005982,tilt:28.3,per:16.11,tex:"neptune",soft:.4,atm:.3,atmc:[.5,.7,1],blurb:{tr:"En uzak gezegen. G\xFCne\u015F sistemindeki en h\u0131zl\u0131 r\xFCzg\xE2rlar (saatte 2.000 km'ye yak\u0131n) buradad\u0131r. G\xFCne\u015F'in \xE7evresinde bir turu yakla\u015F\u0131k 165 y\u0131lda tamamlar.",en:"The farthest planet, with the fastest winds in the Solar System (nearly 2,000 km/h). One orbit takes about 165 years."},d:{diam:49244,au:30.07,mkm:4495,year:60190,moons:16,tmean:-201,tnote:1,g:11.15}}],vr={};Bs.forEach(n=>vr[n.id]=n);var Ri=lt?{diam:"Diameter",surf:"Surface",age:"Age",au:"Distance from Sun",year:"Orbital period",day:"Rotation",moons:"Moons",temp:"Temperature",g:"Surface gravity",dist:"Distance from Earth",ret:"retrograde"}:{diam:"\xC7ap",surf:"Y\xFCzey",age:"Ya\u015F",au:"G\xFCne\u015F'e uzakl\u0131k",year:"Y\xF6r\xFCnge s\xFCresi",day:"D\xF6n\xFC\u015F",moons:"Uydu",temp:"S\u0131cakl\u0131k",g:"Y\xFCzey \xE7ekimi",dist:"D\xFCnya'ya uzakl\u0131k",ret:"ters y\xF6nde"},no=n=>Math.round(n).toLocaleString(lt?"en-US":"tr-TR"),va=(n,e)=>n.toLocaleString(lt?"en-US":"tr-TR",{maximumFractionDigits:e});function fb(n){return n>700?va(n/365.25,1)+(lt?" years":" y\u0131l"):va(n,1)+(lt?" days":" g\xFCn")}function pb(n){let e=Math.abs(n),t=Math.floor(e),i=Math.round((e-t)*60);return e>=48?va(e/24,1)+(lt?" days":" g\xFCn")+(n<0?" ("+Ri.ret+")":""):t+(lt?" h ":" sa ")+i+(lt?" min":" dk")+(n<0?" ("+Ri.ret+")":"")}function mb(n){if(n.facts)return n.facts.map(([i,s])=>[Ri[i]||i,s]);let e=n.d,t=[[Ri.diam,no(e.diam)+" km"]];return e.au&&t.push([Ri.au,va(e.au,3)+" AU ("+va(e.mkm,1)+(lt?" M km)":" mn km)")]),e.dist&&t.push([Ri.dist,no(e.dist)+" km"]),t.push([Ri.year,fb(e.year)]),t.push([Ri.day,pb(n.per!=null?n.per:e.per)]),e.moons!=null&&t.push([Ri.moons,String(e.moons)]),t.push([Ri.temp,e.tmean!=null?no(e.tmean)+" \xB0C"+(e.tnote?lt?" (1 bar level)":" (1 bar d\xFCzeyi)":lt?" (mean)":" (ortalama)"):no(e.tmin)+" \u2026 "+no(e.tmax)+" \xB0C"]),t.push([Ri.g,va(e.g,2)+" m/s\xB2"]),t}var ju=`float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float n3(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n3(p);p=p*2.03+7.1;a*=.5;}return s;}`,Wl=`varying vec3 vN;varying vec3 vW;varying vec3 vO;varying vec2 vUv;
void main(){vO=position;vUv=uv;vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,gb=`precision highp float;varying vec3 vN;varying vec3 vW;varying vec3 vO;uniform float uT;${ju}
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW),p=normalize(vO);float g=fbm(p*7.+uT*.05)+.5*fbm(p*19.-uT*.07);
 vec3 c=mix(vec3(1.,.42,.06),vec3(1.,.9,.55),smoothstep(.3,1.,g));float mu=max(dot(N,V),0.);c*=.4+.6*pow(mu,.55);gl_FragColor=vec4(c*1.7,1.);}`,vb=`precision highp float;varying vec3 vN;varying vec3 vW;varying vec3 vO;varying vec2 vUv;
uniform sampler2D uMap,uRing;uniform vec3 uL,uTint,uAtm,uPC,uAx,uEs;uniform float uPR,uMode,uAtmK,uT,uSoft;uniform vec4 uRg;${ju}
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW),L=normalize(uL),p=normalize(vO);float d=dot(N,L);
 float diff=smoothstep(-uSoft*.35,uSoft,d);vec3 col;
 if(uMode<.5) col=texture2D(uMap,vUv).rgb*uTint;
 else if(uMode<1.5){float s=fbm(vec3(p.x*1.6,p.y*6.5,p.z*1.6)+uT*.015);col=mix(vec3(.86,.74,.5),vec3(.98,.95,.84),s);col*=.9+.2*fbm(p*10.+uT*.01);}
 else {float lat=abs(p.y);col=mix(vec3(.55,.8,.84),vec3(.7,.9,.9),lat*lat)*(.96+.06*fbm(vec3(p.x*1.4,p.y*9.,p.z*1.4)));}
 float shad=1.;
 if(uRg.z>.5){float dn=dot(L,uAx);if(abs(dn)>.03){float tr=dot(uPC-vW,uAx)/dn;if(tr>0.){vec3 H=vW+L*tr;float rr=length(H-uPC)/uPR;if(rr>uRg.x&&rr<uRg.y){float u=(rr-uRg.x)/(uRg.y-uRg.x);shad*=1.-.88*texture2D(uRing,vec2(u,.5)).a;}}}}
 vec3 c=col*(diff*shad*1.12+.006+.05*max(dot(N,uEs),0.)*(1.-diff));
 float f=pow(1.-max(dot(N,V),0.),3.);c+=uAtm*f*uAtmK*(.08+diff*shad);gl_FragColor=vec4(c,1.);}`,yb=`precision highp float;varying vec3 vN;varying vec3 vW;varying vec3 vO;varying vec2 vUv;
uniform sampler2D tDay,tNight,tWater;uniform vec3 uL;uniform float uT;${ju}
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW),L=normalize(uL),p=normalize(vO);float d=dot(N,L);
 float day=smoothstep(-.08,.22,d);vec3 base=texture2D(tDay,vUv).rgb;float wat=texture2D(tWater,vUv).r;
 float cl=smoothstep(.5,.74,fbm(p*3.4+vec3(uT*.0015,0.,0.))*(.6+.4*fbm(p*9.+3.)));cl*=1.-.55*smoothstep(.0,.35,abs(p.y)-.82);
 vec3 c=base*(1.-cl*.28)*(max(d,0.)*1.12+.012)*day+vec3(.0);
 vec3 R=reflect(-L,N);float sp=pow(max(dot(R,V),0.),220.)*wat*.55*step(0.,d);c+=vec3(1.,.97,.9)*sp;
 vec3 cloudC=vec3(1.)*(max(d,0.)*1.08+.02);c=mix(c,cloudC*day+vec3(.01),cl*.82);
 vec3 night=texture2D(tNight,vUv).rgb;float nm=1.-smoothstep(-.06,.16,d);c+=night*night.r*0.0+night*1.9*nm*(1.-cl*.8);
 c+=vec3(1.,.45,.2)*exp(-pow(d*5.5,2.))*.1*(1.-cl*.5);
 float f=pow(1.-max(dot(N,V),0.),3.);c+=vec3(.32,.58,1.)*f*(.12+1.1*smoothstep(-.25,.5,d))*1.15;
 gl_FragColor=vec4(c,1.);}`,xb=`precision highp float;varying vec3 vN;varying vec3 vW;uniform vec3 uAtm,uL;
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW);float f=pow(max(dot(-N,V)*.5+.5-.16,0.),2.6)*1.6;float d=smoothstep(-.3,.45,dot(N,normalize(uL)));gl_FragColor=vec4(uAtm*f*d*1.3,f*d);}`,_b=`precision highp float;varying vec3 vP;varying vec3 vW;uniform sampler2D uRing;uniform vec3 uL,uPC,uAx;uniform float uPR;uniform vec2 uR;
void main(){float rr=length(vP.xy);float u=(rr-uR.x)/(uR.y-uR.x);vec4 t=texture2D(uRing,vec2(u,.5));
 vec3 L=normalize(uL),V=normalize(cameraPosition-vW);float bb=dot(uPC-vW,L),sh=1.;if(bb>0.){float dd=length(uPC-vW-L*bb);sh=smoothstep(uPR*.985,uPR*1.01,dd);}
 float side=dot(uAx,L)*dot(uAx,V)>0.?1.:.4;float lit=(.05+.95*sh)*side;gl_FragColor=vec4(t.rgb*lit*1.05,t.a);}`;function bb(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,.55)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Rs(n)}function Mb(){let e=document.createElement("canvas");e.width=1024,e.height=2;let t=e.getContext("2d"),i=t.createImageData(1024,2),s=1.24,r=2.27;for(let a=0;a<1024;a++){let l=s+(r-s)*a/1023,u=0,c=.8;l<1.53?(u=.18+.12*Math.sin(l*90),c=.55):l<1.95?(u=.82+.14*Math.sin(l*140)+.06*Math.sin(l*37),c=.95):l<2.03?(u=.06+.05*Math.sin(l*60),c=.6):(u=.6+.2*Math.sin(l*120),c=.8,l>2.2&&l<2.215&&(u=.03)),u=Math.max(0,Math.min(1,u));let d=[225*c+20,200*c+14,160*c+8];for(let h=0;h<2;h++){let f=(h*1024+a)*4;i.data[f]=d[0],i.data[f+1]=d[1],i.data[f+2]=d[2],i.data[f+3]=u*255}}t.putImageData(i,0,0);let o=new Rs(e);return o.minFilter=un,o}var ya=null,ro,Nn,jt,io,ma,Je={},qn={},Ju=0,ds=!1,Xn=0,Xu=null,Xl=null,Wu=null,Bp=0,Hp="",Fs=0,Yu=0,Rn=null,ii=null,ao=0,NS=new B,$p=[1,600,21600,259200],ga=lt?["real time","1 s = 10 min","1 s = 6 h","1 s = 3 days"]:["ger\xE7ek zaman","1 sn = 10 dk","1 sn = 6 sa","1 sn = 3 g\xFCn"],Sb=new Cs,so=(n,e)=>{let t=Sb.load(hb+n+".jpg");return t.colorSpace=hn,t.anisotropy=window.__qulSafe?1:8,t.wrapS=is,t},Ku=new ta(new Uint8Array([90,90,90,255]),1,1);Ku.needsUpdate=!0;var lo=n=>lt?n.en:n.tr;function wb(){ma=document.createElement("canvas"),ya=new Oi({canvas:ma,antialias:!window.__qulSafe,powerPreference:"high-performance"}),ya.setPixelRatio(Math.min(devicePixelRatio||1,window.__qulSafe?1:matchMedia("(pointer:coarse)").matches?1.5:2)),ro=new Fi,Nn=new mn(42,1,.08,14e3),io=new dn,ro.add(io);let n=new _t(new zn(9e3,48,32),new Hn({map:so("stars"),side:nn,depthWrite:!1,fog:!1,toneMapped:!1,color:14540253}));n.rotation.order="YXZ",n.rotation.x=.45,Xl=n;{let s=new dn;ro.add(s),Up(s,"data/").then(r=>{Wu=r,n.visible=!1,Xl=s,Je.ln&&r.setLines(Je.ln.value)}).catch(()=>{})}n.renderOrder=-10,ro.add(n);let e=bb();Bs.forEach(s=>{let r=new dn,o=new zn(s.r,s.id==="sun"?64:96,s.id==="sun"?40:64),a={},l;s.id==="sun"?l=new vt({uniforms:{uT:{value:0}},vertexShader:Wl,fragmentShader:gb}):s.id==="earth"?l=new vt({uniforms:{tDay:{value:so("earth_day")},tNight:{value:so("earth_night")},tWater:{value:so("earth_water")},uL:{value:new B(1,0,0)},uT:{value:0}},vertexShader:Wl,fragmentShader:yb}):l=new vt({uniforms:{uMap:{value:s.tex?so(s.tex):Ku},uRing:{value:Ku},uL:{value:new B(1,0,0)},uEs:{value:new B},uTint:{value:new B(1,1,1)},uAtm:{value:new B(...s.atmc||[.5,.6,.8])},uPC:{value:new B},uAx:{value:new B(0,1,0)},uPR:{value:s.r},uMode:{value:s.mode||0},uAtmK:{value:s.atm||0},uT:{value:0},uSoft:{value:s.soft||.3},uRg:{value:new Ct(1.24,2.27,s.ring?1:0,1)}},vertexShader:Wl,fragmentShader:vb});let u=new _t(o,l);r.add(u),io.add(r);let c={b:s,grp:r,mesh:u,mat:l,pos:new B};if(qn[s.id]=c,s.id==="earth"){let d=new _t(new zn(1.03,64,48),new vt({uniforms:{uAtm:{value:new B(.35,.6,1)},uL:l.uniforms.uL},vertexShader:Wl,fragmentShader:xb,transparent:!0,depthWrite:!1,side:nn,blending:Ft}));r.add(d),c.atm=d}if(s.id==="sun"&&[[70,16752704,.9],[170,16747056,.35],[420,16742944,.12]].forEach(([d,h,f])=>{let g=new oi(new ei({map:e,color:h,transparent:!0,depthWrite:!1,blending:Ft,opacity:f}));g.scale.set(d,d,1),r.add(g)}),s.ring){let d=Mb();l.uniforms.uRing.value=d;let h=new _t(new Hi(s.r*1.24,s.r*2.27,192,1),new vt({uniforms:{uRing:{value:d},uL:l.uniforms.uL,uPC:l.uniforms.uPC,uAx:l.uniforms.uAx,uPR:{value:s.r},uR:{value:new Oe(s.r*1.24,s.r*2.27)}},vertexShader:"varying vec3 vP;varying vec3 vW;void main(){vP=position;vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:_b,transparent:!0,depthWrite:!1,side:wn}));h.rotation.x=-Math.PI/2,c.ring=h,u.add(h),h.userData.noSpin=!0}if(s.a){let d=[],h=qu(s.a);for(let g=0;g<=256;g++){let v=g/256*Math.PI*2;d.push(new B(Math.cos(v)*h,0,-Math.sin(v)*h))}let f=new Bi(new Pt().setFromPoints(d),new Vn({color:8228275,transparent:!0,opacity:.26,depthWrite:!1}));io.add(f),c.orbit=f}}),jt=new ca(Nn,ma),jt.enableDamping=!0,jt.dampingFactor=.07,jt.enablePan=!1,jt.maxDistance=3200,jt.minDistance=.5,jt.rotateSpeed=.7,jt.zoomSpeed=.9;let t=document.createElement("div");t.id="sol",t.innerHTML='<div class="sc0"></div><div class="si"><h2></h2><p class="sb"></p><dl></dl><div class="sn"></div></div><div class="sx"><button class="sclose">\u2715</button><button class="stime"></button><div class="sdate"></div></div><div class="sj"></div><div id="slab"></div><div class="sch"></div><button class="sland"></button><div class="stp"><div class="sty"></div><input type="range" class="syr" min="-3000" max="2100" step="1" aria-label="year"><div class="sbt"><button class="snow"></button><button class="smes"></button></div><form class="sdt"><select class="de"><option value="ad">MS</option><option value="bc">M\xD6</option></select><input class="dy" type="number" min="1" max="9999" placeholder="y\u0131l" aria-label="year"><input class="dm" type="number" min="1" max="12" placeholder="ay" aria-label="month"><input class="dd" type="number" min="1" max="31" placeholder="g\xFCn" aria-label="day"><button type="submit" class="dgo">\u25B6</button></form><div class="sev"><select class="evs"><option value="nm"></option><option value="fm"></option><option value="se"></option><option value="le"></option><option value="eq"></option></select><button type="button" class="evp">\u25C0</button><button type="button" class="evn">\u25B6</button></div><div class="sevt"></div><select class="sln"><option value=""></option><option value="w"></option><option value="c"></option></select><div class="spole"></div><div class="ssun"></div><div class="slt"></div><div class="siss"></div></div>',t.querySelector(".sc0").appendChild(ma),document.body.appendChild(t),Je={el:t,h:t.querySelector("h2"),p:t.querySelector(".sb"),dl:t.querySelector("dl"),nt:t.querySelector(".sn"),time:t.querySelector(".stime"),date:t.querySelector(".sdate"),j:t.querySelector(".sj"),lab:t.querySelector("#slab"),ch:t.querySelector(".sch"),land:t.querySelector(".sland"),yr:t.querySelector(".syr"),yl:t.querySelector(".sty"),now:t.querySelector(".snow"),mes:t.querySelector(".smes"),pole:t.querySelector(".spole"),sun:t.querySelector(".ssun"),ln:t.querySelector(".sln"),evs:t.querySelector(".evs"),evt:t.querySelector(".sevt"),lt:t.querySelector(".slt"),de:t.querySelector(".de"),dy:t.querySelector(".dy"),dm:t.querySelector(".dm"),dd:t.querySelector(".dd"),dform:t.querySelector(".sdt"),iss:t.querySelector(".siss"),close:t.querySelector(".sclose")},Je.close.onclick=ql,Je.time.onclick=()=>{Fs=(Fs+1)%$p.length,Je.time.textContent="\u23F1 "+ga[Fs]},Je.now.textContent=lt?"Today":"Bug\xFCn",Je.mes.textContent=lt?"Mesopotamian sky (2800 BC)":"Mezopotamya g\xF6\u011F\xFC (M\xD6 2800)",Je.dform.onsubmit=s=>{s.preventDefault(),Ab()},Je.dform.addEventListener("keydown",s=>s.stopPropagation()),Je.dy.placeholder=lt?"year":"y\u0131l",Je.dm.placeholder=lt?"mo":"ay",Je.dd.placeholder=lt?"day":"g\xFCn",Je.de.options[1].text=lt?"BC":"M\xD6",Je.de.options[0].text=lt?"AD":"MS",[lt?"New Moon":"Yeni Ay",lt?"Full Moon":"Dolunay",lt?"Solar eclipse":"G\xFCne\u015F tutulmas\u0131",lt?"Lunar eclipse":"Ay tutulmas\u0131",lt?"Equinox / solstice":"Ekinoks / g\xFCnd\xF6n\xFCm\xFC"].forEach((s,r)=>{Je.evs.options[r].text=s}),t.querySelector(".evp").onclick=()=>Zp(-1),t.querySelector(".evn").onclick=()=>Zp(1),[lt?"Constellation lines: off":"Tak\u0131my\u0131ld\u0131z\u0131 \xE7izgileri: kapal\u0131",lt?"Western lines":"Bat\u0131 \xE7izgileri",lt?"Chinese lines":"\xC7in \xE7izgileri"].forEach((s,r)=>{Je.ln.options[r].text=s}),Je.ln.onchange=()=>{Wu&&Wu.setLines(Je.ln.value)},Je.yr.oninput=()=>jp(+Je.yr.value),Je.now.onclick=()=>{Xn=Date.now(),Fs=0,Je.time.textContent="\u23F1 "+ga[0]},Je.mes.onclick=()=>{jp(-2799),Fs=0,Je.time.textContent="\u23F1 "+ga[0]},Je.time.textContent="\u23F1 "+ga[0],Je.land.textContent=lt?"\u2193 Descend to Earth's surface":"\u2193 D\xFCnya y\xFCzeyine in",Je.land.onclick=()=>{let s=(window.QUL&&window.QUL.planets||[]).find(r=>r.key==="dunya");ql(),s&&window.dispatchEvent(new CustomEvent("surface",{detail:s}))},Je.nt.textContent=lt?"Planet sizes are true to each other; distances are compressed. Positions are for the current date.":"Gezegen boyutlar\u0131 birbirine g\xF6re ger\xE7ektir; mesafeler s\u0131k\u0131\u015Ft\u0131r\u0131lm\u0131\u015Ft\u0131r. Konumlar bug\xFCn\xFCn tarihine g\xF6redir.",Bs.forEach(s=>{let r=document.createElement("button");if(r.textContent=lo(s),r.dataset.id=s.id,r.onclick=()=>oo(s.id,4.5),Je.ch.appendChild(r),s.id!=="moon"){let o=document.createElement("button");o.className="slb",o.textContent=lo(s),o.dataset.id=s.id,o.onclick=()=>oo(s.id,4.5),Je.lab.appendChild(o),qn[s.id].lab=o}});try{Xu=Op({root:io,bodies:qn,BY:vr,AUV:qu,EN:lt,chips:Je.ch,focus:oo})}catch(s){try{console.error("[Qul] k\xFC\xE7\xFCk cisimler",s)}catch{}}let i=null;ma.addEventListener("pointerdown",s=>{i=[s.clientX,s.clientY],Rn=null,jt.enabled=!0}),ma.addEventListener("pointerup",s=>{if(!i)return;let r=Math.hypot(s.clientX-i[0],s.clientY-i[1]);i=null,r<5&&Eb(s)}),addEventListener("resize",Qp),addEventListener("keydown",s=>{ds&&s.key==="Escape"&&ql()})}function Qp(){if(!ya)return;let n=innerWidth,e=innerHeight;ya.setSize(n,e),Nn.aspect=n/e,Nn.updateProjectionMatrix()}var Vp=new sa,Gp=new Oe,Wp=new rs,ni=new B;function Eb(n){Gp.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),Vp.setFromCamera(Gp,Nn);let e=null,t=1e9;Bs.forEach(i=>{qn[i.id].grp.getWorldPosition(ni);let r=ni.distanceTo(Nn.position);Wp.set(ni,Math.max(i.r*1.15,r*.018)),Vp.ray.intersectSphere(Wp,new B)&&r<t&&(t=r,e=i.id)}),e&&oo(e,4.5)}var Zu=n=>n/864e5+24405875e-1,Wn=n=>n*Math.PI/180,qp=[[0,"Bal\u0131k","Pisces"],[28.7,"Ko\xE7","Aries"],[53.5,"Bo\u011Fa","Taurus"],[90.4,"\u0130kizler","Gemini"],[118.2,"Yenge\xE7","Cancer"],[138.2,"Aslan","Leo"],[174.1,"Ba\u015Fak","Virgo"],[217.8,"Terazi","Libra"],[241.1,"Akrep","Scorpius"],[248,"Y\u0131lanc\u0131","Ophiuchus"],[266.4,"Yay","Sagittarius"],[299.7,"O\u011Flak","Capricornus"],[327.5,"Kova","Aquarius"],[351.6,"Bal\u0131k","Pisces"]],Xp=n=>{n=(n%360+360)%360;let e=qp[0];return qp.forEach(t=>{n>=t[0]&&(e=t)}),lt?e[2]:e[1]};function Tb(n,e){let t=-(n-2e3)*50.29/3600,i=((280.46+.9856474*e)%360+360)%360;return(lt?"Spring equinox point: ":"Bahar noktas\u0131: ")+Xp(t)+" \xB7 "+(lt?"Sun in: ":"G\xFCne\u015F: ")+Xp(i+t)}function Ab(){let n=parseInt(Je.dy.value,10),e=parseInt(Je.dm.value,10),t=parseInt(Je.dd.value,10);if(!isFinite(n))return;n=Math.max(1,Math.min(9999,n)),Je.de.value==="bc"&&(n=1-n),e=Math.max(1,Math.min(12,e||1)),t=Math.max(1,Math.min(31,t||1));let i=new Date(0);i.setUTCFullYear(n,e-1,t),i.setUTCHours(12,0,0,0),Xn=i.getTime(),Fs=0,Je.time.textContent="\u23F1 "+ga[0]}var Yp=n=>(n-24405875e-1)*864e5,Rb=n=>n/864e5+24405875e-1;function Cb(n,e){let t=n/1236.85,i=1-.002516*t-74e-7*t*t,s=Math.PI/180,r=Math.sin,o=(2.5534+29.1053567*n)*s,a=(201.5643+385.81693528*n)*s,l=(160.7108+390.67050284*n)*s,u=245155009766e-5+29.530588861*n+15437e-8*t*t;u+=e?-.40614*r(a)+.17302*i*r(o)+.01614*r(2*a)+.01043*r(2*l)+.00734*i*r(a-o)-.00515*i*r(a+o)+.00209*i*i*r(2*o):-.4072*r(a)+.17241*i*r(o)+.01608*r(2*a)+.01039*r(2*l)+.00739*i*r(a-o)-.00514*i*r(a+o)+.00208*i*i*r(2*o);let c=(l/s%180+180)%180;return{jd:u,dn:Math.min(c,180-c)}}function Kp(n){let e=(n-2451545)/36525,t=Math.PI/180,i=(357.52911+35999.05029*e)*t,s=(1.914602-.004817*e)*Math.sin(i)+.019993*Math.sin(2*i)+289e-6*Math.sin(3*i);return((280.46646+36000.76983*e+s-.00569)%360+360)%360}function Pb(n,e){let t=Rb(Xn)+e*.002,i=(t-245155009766e-5)/29.530588861;if(n==="eq"){let r=Kp(t),o=e>0?(Math.floor(r/90)+1)*90:(Math.ceil(r/90)-1)*90,a=t;for(let u=0;u<6;u++){let c=Kp(a);a+=((o-c+540)%360-180)/.9856474}let l=(Math.round(o/90)%4+4)%4;return{ms:Yp(a),tr:["Mart ekinoksu","Haziran g\xFCnd\xF6n\xFCm\xFC","Eyl\xFCl ekinoksu","Aral\u0131k g\xFCnd\xF6n\xFCm\xFC"][l],en:["March equinox","June solstice","September equinox","December solstice"][l]}}let s=e>0?Math.ceil(i*2):Math.floor(i*2);for(let r=0;r<400;r++,s+=e){let o=(s%2+2)%2===1,a=s/2,l=Cb(a,o),u=Yp(l.jd);if(!(e>0?u<=Xn+6e4:u>=Xn-6e4)){if(n==="nm"&&!o)return{ms:u,tr:"Yeni Ay",en:"New Moon"};if(n==="fm"&&o)return{ms:u,tr:"Dolunay",en:"Full Moon"};if(n==="se"&&!o&&l.dn<14)return{ms:u,tr:"G\xFCne\u015F tutulmas\u0131",en:"Solar eclipse"};if(n==="le"&&o&&l.dn<14)return{ms:u,tr:"Ay tutulmas\u0131",en:"Lunar eclipse"}}}return null}function Zp(n){let e=Pb(Je.evs.value,n);if(!e){Je.evt.textContent=lt?"Not found":"Bulunamad\u0131";return}Xn=e.ms,Fs=0,Je.time.textContent="\u23F1 "+ga[0],Je.evt.textContent=(lt?e.en:e.tr)+(lt?" (approx., TT)":" (yakla\u015F\u0131k, TT)")}function kb(){if(!ii||ii==="earth")return"";let n=vr[ii],e=Zu(Xn)-2451545,t;if(ii==="moon")t=384400/1495978707e-1;else if(ii==="sun")t=1;else{let r=vr.earth,o=r.a,a=n.a,l=Wn((r.L0+r.n*e)%360),u=Wn((n.L0+n.n*e)%360);t=Math.sqrt(o*o+a*a-2*o*a*Math.cos(l-u))}let i=t*499.005;return(lt?"Light from Earth takes ":"I\u015F\u0131k D\xFCnya'dan buraya ")+(r=>r<90?r.toFixed(r<10?2:0)+(lt?" s":" sn"):r<5400?(r/60).toFixed(1)+(lt?" min":" dk"):(r/3600).toFixed(2)+(lt?" h":" sa"))(i)+(lt?"":" s\xFCrede ula\u015F\u0131r")}function jp(n){let e=new Date(Date.now());e.setUTCFullYear(n),Xn=e.getTime()}var Jp=n=>n<1?lt?1-n+" BC":"M\xD6 "+(1-n):String(n),Lb=(()=>{let n=Wn(23.4393);return[["Polaris",2.5303,89.264],["Thuban",14.0731,64.376],["Kochab",14.8451,74.156],["Vega",18.6156,38.784],["Deneb",20.6905,45.28],["Alderamin",21.3096,62.585]].map(([t,i,s])=>{i=Wn(i*15),s=Wn(s);let r=Math.cos(s)*Math.cos(i),o=Math.cos(s)*Math.sin(i),a=Math.sin(s);return{n:t,v:[r,o*Math.cos(n)+a*Math.sin(n),-o*Math.sin(n)+a*Math.cos(n)]}})})();function Ib(n){let e=-(n-2e3)*50.29/3600*Math.PI/180,t=Wn(23.4393),i=[-Math.sin(t)*Math.sin(e),Math.sin(t)*Math.cos(e),Math.cos(t)],s=null;return Lb.forEach(r=>{let o=Math.acos(Math.max(-1,Math.min(1,r.v[0]*i[0]+r.v[1]*i[1]+r.v[2]*i[2])))*180/Math.PI;(!s||o<s.dd)&&(s={n:r.n,dd:o})}),s.dd<8?(lt?"Pole star: ":"Kutup y\u0131ld\u0131z\u0131: ")+s.n+" ("+s.dd.toFixed(1)+"\xB0)":(lt?"No bright pole star (nearest: ":"Parlak kutup y\u0131ld\u0131z\u0131 yok (en yak\u0131n: ")+s.n+", "+s.dd.toFixed(0)+"\xB0)"}function Db(n){let e=performance.now();if(!(!n||e-Bp<6e3)){Bp=e;try{fetch("https://api.wheretheiss.at/v1/satellites/25544").then(t=>t.json()).then(t=>{t&&t.latitude!=null&&(Je.iss.textContent="ISS \xB7 "+t.latitude.toFixed(1)+"\xB0, "+t.longitude.toFixed(1)+"\xB0 \xB7 "+Math.round(t.altitude)+" km \xB7 "+Math.round(t.velocity)+" km/h")}).catch(()=>{Je.iss.textContent=""})}catch{Je.iss.textContent=""}}}function em(n){Xn+=n*1e3*$p[Fs],ao+=n;let e=Zu(Xn)-2451545;Xu&&Xu.update(Zu(Xn));let t=qn.sun;t.mat.uniforms.uT.value=ao,Bs.forEach(f=>{let g=qn[f.id];if(!f.a)return;let v=Wn((f.L0+f.n*e)%360),m=qu(f.a);g.pos.set(Math.cos(v)*m,0,-Math.sin(v)*m),g.grp.position.copy(g.pos)});let i=qn.earth,s=qn.moon,r=Wn((218.316+13.176396*e)%360);s.pos.set(i.pos.x+Math.cos(r)*Fp,0,i.pos.z-Math.sin(r)*Fp),s.grp.position.copy(s.pos),s.mesh.rotation.y=r+Math.PI;let o=Wn(((280.46061837+360.98564736629*e)%360+360)%360);i.mesh.quaternion.setFromAxisAngle(new B(1,0,0),db).multiply(new rn().setFromAxisAngle(new B(0,1,0),o)),Bs.forEach(f=>{if(f.id==="sun"||f.id==="earth"||f.id==="moon")return;let g=qn[f.id],v=Wn(24*e/f.per*360%360)*1;g.mesh.quaternion.setFromAxisAngle(new B(1,0,0),Wn(f.tilt)).multiply(new rn().setFromAxisAngle(new B(0,1,0),v));let m=g.mat.uniforms;m.uL.value.copy(g.pos).negate().normalize(),m.uPC.value.copy(g.pos),m.uAx.value.set(0,Math.cos(Wn(f.tilt)),Math.sin(Wn(f.tilt))),m.uT.value=ao}),i.mat.uniforms.uL.value.copy(i.pos).negate().normalize(),i.mat.uniforms.uT.value=ao;{let f=s.mat.uniforms;f.uL.value.copy(s.pos).negate().normalize(),f.uPC.value.copy(s.pos),f.uEs.value.copy(i.pos).sub(s.pos).normalize()}let a=new Date(Xn),l=a.getUTCFullYear(),u=f=>String(f).padStart(2,"0");Je.date.textContent=(l<1?Jp(l):l)+"-"+u(a.getUTCMonth()+1)+"-"+u(a.getUTCDate())+" "+u(a.getUTCHours())+":"+u(a.getUTCMinutes())+" UTC";let c=2e3+e/365.25;Xl&&(Xl.rotation.y=Wn((c-2e3)*50.29/3600)),document.activeElement!==Je.yr&&(Je.yr.value=Math.max(-3e3,Math.min(2100,l))),Je.yl.textContent=Jp(l),Je.sun.textContent=Tb(c,e),Je.lt.textContent=kb();let d=Ib(c);d!==Hp&&(Hp=d,Je.pole.textContent=d);let h=Math.abs(Xn-Date.now())<36e5;h||(Je.iss.textContent=""),Db(h)}function zb(){Bs.forEach(n=>{let e=qn[n.id];if(!e.lab)return;ni.copy(e.pos);let t=ni.distanceTo(Nn.position);ni.project(Nn);let i=ni.z<1&&Math.abs(ni.x)<1.05&&Math.abs(ni.y)<1.05&&t>n.r*3&&!(n.id==="earth"&&ii==="moon"&&!1);e.lab.style.display=i?"block":"none",i&&(e.lab.style.transform="translate("+(ni.x*.5+.5)*innerWidth+"px,"+(-ni.y*.5+.5)*innerHeight+"px)",e.lab.classList.toggle("on",ii===n.id),ii===n.id&&(e.lab.style.display="none"))}),Je.ch.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.id===ii))}function tm(n){Je.h.textContent=lo(n),Je.p.textContent=lt?n.blurb.en:n.blurb.tr,Je.dl.innerHTML=mb(n).map(([e,t])=>"<div><dt>"+e+"</dt><dd>"+t+"</dd></div>").join(""),Je.land.style.display=n.id==="earth"?"block":"none"}var Ub=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function nm(n,e){let t=qn[n],i=t.b,s=t.pos.clone(),r=s.clone().negate();if(r.lengthSq()<1e-6&&r.set(1,0,0),r.normalize(),n==="moon"){let u=qn.earth.pos.clone().sub(s).normalize(),c=new B().crossVectors(u,new B(0,1,0)).normalize(),d=c.dot(r)>=0?1:-1,h=u.clone().multiplyScalar(.62).addScaledVector(new B(0,1,0),.16).addScaledVector(c,.78*d).normalize();return{pos:s.clone().addScaledVector(h,i.r*5.2),target:s}}let o=new B().crossVectors(r,new B(0,1,0)).normalize(),a=r.clone().multiplyScalar(.78).addScaledVector(new B(0,1,0),.28).addScaledVector(o,.5).normalize(),l=i.r*(n==="sun"?3.6:n==="saturn"||n==="moon"?5.2:e);return{pos:s.clone().addScaledVector(a,l),target:s}}function oo(n,e,t){ii=n;let i=qn[n];tm(i.b);let s=nm(n,e||4.5);Rn={t:0,dur:t||3.2,p0:Nn.position.clone(),t0:jt.target.clone(),id:n,mult:e||4.5,arc:Nn.position.distanceTo(s.pos)*.06},jt.enabled=!1,jt.minDistance=i.b.r*1.25}function Nb(n){let e=0,t=()=>{if(!ds||e>=n.length){Je.j.classList.remove("on");return}Je.j.textContent=n[e++],Je.j.classList.remove("on"),Je.j.offsetWidth,Je.j.classList.add("on"),setTimeout(t,2600)};t()}function im(n){if(!ds)return;Ju=requestAnimationFrame(im);let e=Math.min(.1,(n-Yu)/1e3||.016);if(Yu=n,em(e),Rn){Rn.t=Math.min(1,Rn.t+e/Rn.dur);let t=Ub(Rn.t),i=nm(Rn.id,Rn.mult);Nn.position.lerpVectors(Rn.p0,i.pos,t),Nn.position.y+=Math.sin(Math.PI*t)*Rn.arc,jt.target.lerpVectors(Rn.t0,i.target,t),Rn.t>=1&&(Rn=null,jt.enabled=!0)}else if(ii){let t=qn[ii].pos;ni.copy(t).sub(jt.target),Nn.position.add(ni),jt.target.copy(t)}jt.update(),zb(),ya.render(ro,Nn)}function Ob(n){if(n=n||{},ds)return!0;try{ya||wb()}catch(t){try{console.error("[Qul] G\xFCne\u015F Sistemi ba\u015Flat\u0131lamad\u0131:",t)}catch{}return!1}ds=!0,ve.pause(!0),Qp(),Xn=Date.now(),ao=0,em(0),Je.el.classList.add("on"),document.documentElement.style.setProperty("--bar","0vh");let e=n.focus||"earth";return Nn.position.set(0,1250,1750),jt.target.set(0,0,0),jt.minDistance=.5,ii=null,Rn=null,jt.enabled=!1,jt.update(),tm(vr[e]),Nb(lt?["Milky Way \xB7 Orion Arm","The Solar System \xB7 26,000 light-years from the galactic center","The Sun \xB7 eight planets \xB7 real positions for today",lo(vr[e])]:["Samanyolu \xB7 Orion Kolu","G\xFCne\u015F Sistemi \xB7 galaktik merkezden yakla\u015F\u0131k 26.000 \u0131\u015F\u0131k y\u0131l\u0131 uzakta","G\xFCne\u015F \xB7 sekiz gezegen \xB7 bug\xFCn\xFCn ger\xE7ek konumlar\u0131",lo(vr[e])]),setTimeout(()=>{ds&&oo(e,4.5,7.5)},1800),Yu=performance.now(),Ju=requestAnimationFrame(im),!0}function ql(){ds&&(ds=!1,cancelAnimationFrame(Ju),Rn=null,Je.el.classList.remove("on"),ve.pause(!1),window.dispatchEvent(new Event("qulSolarClosed")))}var $u={open:Ob,close:ql,get on(){return ds},ids:Bs.map(n=>({id:n.id,tr:n.tr,en:n.en}))};var sm=window.AudioContext||window.webkitAudioContext,Cn=null,co=null,rm=[];function Fb(){if(Cn||!sm)return;Cn=new sm;let n=Cn.createGain();n.gain.value=0,n.connect(Cn.destination),[[34,"sine",1],[51.2,"sine",.55],[102,"triangle",.12],[68.4,"sine",.3]].forEach(([l,u,c])=>{let d=Cn.createOscillator();d.type=u,d.frequency.value=l;let h=Cn.createGain();h.gain.value=c,d.connect(h),h.connect(n),d.start(),rm.push(d)});let e=Cn.createOscillator();e.frequency.value=.07;let t=Cn.createGain();t.gain.value=.25,e.connect(t),t.connect(n.gain),e.start();let i=Cn.createBuffer(1,Cn.sampleRate*2,Cn.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;let r=Cn.createBufferSource();r.buffer=i,r.loop=!0;let o=Cn.createBiquadFilter();o.type="bandpass",o.frequency.value=300,o.Q.value=.5;let a=Cn.createGain();a.gain.value=0,r.connect(o),o.connect(a),a.connect(Cn.destination),r.start(),co={hum:n,wg:a,bp:o}}var Qu={init(){["pointerdown","keydown"].forEach(n=>addEventListener(n,Fb,{once:!0}))},update(n,e,t=0){if(!co)return;let i=window.__hush?0:1,s=Cn.currentTime;co.hum.gain.setTargetAtTime(.2*n*(1+t*1.8)*i*(1-t*t*.85),s,.35),rm.forEach(r=>r.detune.setTargetAtTime(-1100*t,s,.5)),co.wg.gain.setTargetAtTime(.09*e*i,s,.15),co.bp.frequency.setTargetAtTime(250+1e3*e,s,.2)}};var eh={c:[["Andromeda","Andromeda",.75,43,1],["Pompa","Antlia",156,-36,3],["Cennetku\u015Fu","Apus",-120,-74,3],["Kova","Aquarius",-22.5,-5,2],["Kartal","Aquila",-69,8,1],["Sunak","Ara",-102,-56,3],["Ko\xE7","Aries",42,22,1],["Arabac\u0131","Auriga",82.5,37,1],["\xC7oban","Bootes",-136.5,35,1],["\xC7elikkalem","Caelum",73.5,-42,3],["Z\xFCrafa","Camelopardalis",84,72,2],["Yenge\xE7","Cancer",128.25,27,2],["Av\u2005K\xF6pekleri","Canes\u2005Venatici",-168,43,2],["B\xFCy\xFCk\u2005K\xF6pek","Canis\u2005Maior",97.5,-26,1],["K\xFC\xE7\xFCk\u2005K\xF6pek","Canis\u2005Minor",109.5,5,2],["O\u011Flak","Capricornus",-45,-22,2],["Karina","Carina",144,-66,1],["Koltuk","Cassiopeia",-6,55.5,1],["Erbo\u011Fa","Centaurus",-160.5,-40,1],["Kral","Cepheus",-22.5,71,2],["Balina","Cetus",28.5,-5,1],["Bukalemun","Chamaeleon",-171,-81,3],["Pergel","Circinus",-142.5,-67,3],["G\xFCvercin","Columba",85.5,-39,3],["Berenis'in\u2005Sa\xE7\u0131","Coma\u2005Berenices",-166.5,24,3],["G\xFCneytac\u0131","Corona\u2005Australis",-78,-40,3],["Kuzeytac\u0131","Corona\u2005Borealis",-121.5,32,2],["Karga","Corvus",-174,-19.5,3],["Kupa","Crater",174.75,-15,3],["Ha\xE7","Crux",-166.5,-62,2],["Ku\u011Fu","Cygnus",-52.5,50,1],["Yunus","Delphinus",-51,6,3],["K\u0131l\u0131\xE7bal\u0131\u011F\u0131","Dorado",76.5,-64,3],["Ejderha","Draco",-91.5,64,2],["Tay","Equuleus",-39.75,11.5,3],["Irmak","Eridanus",52.5,-18,1],["Ocak","Fornax",40.5,-28,3],["\u0130kizler","Gemini",107.25,23.5,1],["Turna","Grus",-18,-41.5,3],["Herk\xFCl","Hercules",-106.5,35,2],["Saat","Horologium",51,-52,3],["Suy\u0131lan\u0131","Hydra",150,-22,2],["K\xFC\xE7\xFCk suy\u0131lan\u0131","Hydrus",34.5,-72,3],["Hintli","Indus",-42,-55.5,3],["Kertenkele","Lacerta",-18,47,3],["Aslan","Leo",159,15,1],["K\xFC\xE7\xFCk\u2005Aslan","Leo\u2005Minor",157.5,30,3],["Tav\u015Fan","Lepus",88.5,-25,3],["Terazi","Libra",-129,-26,2],["Kurt","Lupus",-131.25,-35,3],["Va\u015Fak","Lynx",121.5,49,3],["\xC7alg\u0131","Lyra",-81,30,2],["Masa","Mensa",82.5,-80,3],["Mikroskop","Microscopium",-43.5,-37,3],["Tekboynuz","Monoceros",114.75,-6,2],["Sinek","Musca",-165,-73,3],["Cetvel","Norma",-117,-52,3],["Sekizlik","Octans",-60,-80,3],["Y\u0131lanc\u0131","Ophiuchus",-102,3,2],["Avc\u0131","Orion",84,13,1],["Tavus","Pavo",-63,-62,2],["Kanatl\u0131at","Pegasus",-25.5,16,1],["Kahraman","Perseus",66,45,1],["Anka","Phoenix",16.5,-43,2],["Ressam","Pictor",82.5,-50,3],["Bal\u0131k","Pisces",19.5,15,2],["G\xFCneybal\u0131\u011F\u0131","Piscis\u2005Austrinus",-27,-29,2],["Pupa","Puppis",111,-46,2],["Kumpas","Pyxis",132,-24,3],["A\u011Fc\u0131k","Reticulum",55.5,-61,3],["Ok\xE7uk","Sagitta",-69,18,3],["Yay","Sagittarius",-67.5,-34,1],["Akrep","Scorpius",-111,-38,1],["Heykeltra\u015F","Sculptor",1.5,-33,3],["Kalkan","Scutum",-78,-12.5,3],["Y\u0131lan","Serpens",-127.5,5,3],["Y\u0131lan","Serpens",-79.5,3,3],["Alt\u0131l\u0131k","Sextans",157.5,-7,3],["Bo\u011Fa","Taurus",54,15,1],["D\xFCrb\xFCn","Telescopium",-82.5,-54,3],["\xDC\xE7gen","Triangulum",27,34,3],["G\xFCney\u2005\xDC\xE7geni","Triangulum\u2005Australe",-120,-67.5,2],["Tukan","Tucana",-12,-64,3],["B\xFCy\xFCk\u2005Ay\u0131","Ursa\u2005Maior",165,48,1],["K\xFC\xE7\xFCk\u2005Ay\u0131","Ursa\u2005Minor",-133.5,68,2],["Yelken","Vela",143.25,-46,2],["Ba\u015Fak","Virgo",-160.5,-4,1],["U\xE7anbal\u0131k","Volans",111,-73,3],["Tilkicik","Vulpecula",-64.5,21,3]],s:[["Achernar",24.43,-57.24,.45],["Aldebaran",68.98,16.51,.87],["Rigel",78.63,-8.2,.18],["Capella",79.17,46,.08],["Betelgeuse",88.79,7.41,.45],["Canopus",95.99,-52.7,-.62],["Sirius",101.29,-16.72,-1.44],["Adhara",104.66,-28.97,1.5],["Castor",113.65,31.89,1.58],["Procyon",114.83,5.22,.4],["Pollux",116.33,28.03,1.16],["Regulus",152.09,11.97,1.36],["Acrux",-173.35,-63.1,.77],["Gacrux",-172.21,-57.11,1.59],["Mimosa",-168.07,-59.69,1.25],["Spica",-158.7,-11.16,.98],["Hadar",-149.04,-60.37,.61],["Arcturus",-146.08,19.18,-.05],["Toliman",-140.1,-60.84,1.35],["Rigil Kentaurus",-140.1,-60.83,-.01],["Antares",-112.65,-26.43,1.06],["Vega",-80.77,38.78,.03],["Altair",-62.3,8.87,.76],["Deneb",-49.64,45.28,1.25],["Fomalhaut",-15.59,-29.62,1.17]]};var si=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),th=["Aksiyom 1 \u2014 Anlam, \u0130li\u015Fkiden Do\u011Far","Aksiyom 2 \u2014 Ger\xE7eklik, Tutarl\u0131l\u0131kt\u0131r","Aksiyom 3 \u2014 Ama\xE7, De\u011Fer Yaratmakt\u0131r"],uo=()=>{try{return JSON.parse(localStorage.getItem("qid")||"null")}catch{return null}};function am(n,e,t,i,s){n.save(),n.strokeStyle=s,n.lineWidth=Math.max(1,i*.06),n.lineCap="round",n.beginPath(),n.moveTo(e,t-i*1.55),n.lineTo(e,t+i*1.75),n.stroke(),n.beginPath(),n.arc(e,t-i*.35,i*.75,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(e-i*.9,t+i*.55),n.lineTo(e+i*.9,t+i*.55),n.moveTo(e-i*.7,t+i*.8),n.lineTo(e+i*.7,t+i*.8),n.stroke(),n.beginPath(),n.arc(e,t+i*.95,i*.55,Math.PI*.1,Math.PI*.9),n.stroke(),n.restore()}var On={get:uo,label(){let n=uo();return n?[n.n?F("id.explorer")+" "+n.n:F("id.explorer"),n.sn,n.a?th[n.a-1].split(" \u2014 ")[0]:""].filter(Boolean).join(" \xB7 "):""},apply(){let n=uo();ve.setMine(n&&n.s?n.s:null)},edit(n,e){let t=uo()||{},i=[["home",F("id.home")],["itf",F("id.itf")]].concat(n.filter(l=>l.sector!=null).sort((l,u)=>l.sector-u.sector).map(l=>[l.id,l.name])),s=document.createElement("div");s.id="kimlik",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby","kmh"),s.innerHTML='<form class="kb"><button type="button" class="kx" aria-label="'+si(F("id.close"))+'">\u2715</button><canvas width="96" height="120" aria-hidden="true"></canvas><small>'+si(F("log.eyebrow"))+'</small><h2 id="kmh">'+si(F("id.title"))+"</h2><p>"+si(F("id.lead"))+"</p><label>"+si(F("id.name"))+'<input name="n" maxlength="24" autocomplete="nickname" value="'+si(t.n)+'"></label><label>'+si(F("id.sector"))+'<select name="s">'+i.map(l=>'<option value="'+si(l[0])+'"'+(l[0]===t.s?" selected":"")+">"+si(l[1])+"</option>").join("")+"</select></label><fieldset><legend>"+si(F("id.axiom"))+"</legend>"+th.map((l,u)=>'<label class="ka"><input type="radio" name="a" value="'+(u+1)+'"'+(t.a===u+1?" checked":"")+"><span>"+si(l)+"</span></label>").join("")+'</fieldset><div class="kr"><button type="submit" class="ok">'+si(F("id.save"))+"</button>"+(t.s?'<button type="button" class="kc">'+si(F("id.card"))+"</button>":"")+"</div></form>",document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("on"));let r=s.querySelector("canvas");am(r.getContext("2d"),48,52,26,"#e8c46a");let o=()=>{s.classList.remove("on"),setTimeout(()=>s.remove(),400)};s.querySelector(".kx").onclick=o,s.addEventListener("keydown",l=>{l.key==="Escape"&&o()}),s.querySelector("form").onsubmit=l=>{l.preventDefault();let u=l.target,c=u.s.value,d=i.find(f=>f[0]===c),h={n:u.n.value.trim().slice(0,24),s:c,sn:d?d[1]:"",a:u.a.value?+u.a.value:0,since:t.since||Date.now()};try{localStorage.setItem("qid",JSON.stringify(h))}catch{}On.apply(),o(),e&&e(h)};let a=s.querySelector(".kc");a&&(a.onclick=()=>On.card()),setTimeout(()=>{let l=s.querySelector("input[name=n]");l&&l.focus()},60)},card(){let n=uo();if(!n)return;let e=1200,t=750,i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d"),r=s.createRadialGradient(e*.3,t*.4,40,e*.5,t*.5,e*.75);r.addColorStop(0,"#1b1730"),r.addColorStop(1,"#05050a"),s.fillStyle=r,s.fillRect(0,0,e,t);for(let c=0;c<420;c++){let d=Math.random();s.fillStyle="rgba(255,240,220,"+(.15+d*.6)+")",s.fillRect(Math.random()*e,Math.random()*t,d*2,d*2)}s.strokeStyle="rgba(232,196,106,.6)",s.lineWidth=2,s.strokeRect(24,24,e-48,t-48),am(s,e*.18,t*.48,80,"#e8c46a"),s.fillStyle="#8f8570",s.font="22px Georgia,serif",s.fillText(F("log.eyebrow").toUpperCase(),e*.33,t*.26),s.fillStyle="#e8c46a",s.font="64px Georgia,serif",s.fillText(n.n||F("id.explorer"),e*.33,t*.4),s.fillStyle="#efe6d0",s.font="italic 30px Georgia,serif",s.fillText(n.sn||"",e*.33,t*.52),n.a&&(s.fillStyle="#d8c9a8",s.font="26px Georgia,serif",s.fillText(th[n.a-1],e*.33,t*.62));let o={};try{o=JSON.parse(localStorage.getItem("qlog")||"{}")||{}}catch{}let a=Object.keys(o).length,l=Object.values(o).reduce((c,d)=>c+(d.f||[]).length,0);s.fillStyle="#9d927a",s.font="22px Georgia,serif",s.fillText(F("id.stats",{w:a,f:l}),e*.33,t*.74),s.textAlign="right",s.fillStyle="#8f8570",s.font="18px Georgia,serif",s.fillText("QUL EFSANELER\u0130 \xB7 "+(location.host||"qul"),e-60,t-56);let u=document.createElement("a");u.download="qul-kasif-kimligi.png",u.href=i.toDataURL("image/png"),u.click()}};var Yl=`precision highp float;
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
}`,Hb="varying vec2 vUv;void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}",Vb="varying vec2 vUv;uniform sampler2D tex;uniform vec2 texel;uniform float pre;vec3 f(vec2 u){vec3 c=texture2D(tex,u).rgb;if(isnan(c.r)||isnan(c.g)||isnan(c.b))c=vec3(0.);c=clamp(c,0.,6e3);if(pre>0.){float b=max(max(c.r,c.g),c.b);c*=max(b-1.5,0.)/max(b,1e-4);}return c;}void main(){vec3 c=f(vUv+texel*vec2(-1.,-1.))+f(vUv+texel*vec2(1.,-1.))+f(vUv+texel*vec2(-1.,1.))+f(vUv+texel*vec2(1.,1.));c+=4.*f(vUv);gl_FragColor=vec4(c/8.,1.);}",Gb="varying vec2 vUv;uniform sampler2D tex,add;uniform vec2 texel;void main(){vec3 c=vec3(0.);c+=texture2D(tex,vUv+texel*vec2(-1.,-1.)).rgb+texture2D(tex,vUv+texel*vec2(1.,-1.)).rgb+texture2D(tex,vUv+texel*vec2(-1.,1.)).rgb+texture2D(tex,vUv+texel*vec2(1.,1.)).rgb;c+=2.*(texture2D(tex,vUv+texel*vec2(-1.,0.)).rgb+texture2D(tex,vUv+texel*vec2(1.,0.)).rgb+texture2D(tex,vUv+texel*vec2(0.,-1.)).rgb+texture2D(tex,vUv+texel*vec2(0.,1.)).rgb);c+=4.*texture2D(tex,vUv).rgb;gl_FragColor=vec4(c/16.+texture2D(add,vUv).rgb,1.);}",Wb="varying vec2 vUv;uniform sampler2D tS,tB;uniform vec2 texel,sunUV;uniform float uT,str,rays,sat;uniform vec3 tint;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uT)*43758.5453);}vec3 S(vec2 u){vec3 s=texture2D(tS,u).rgb;if(isnan(s.r)||isnan(s.g)||isnan(s.b))s=vec3(0.);return clamp(s,0.,6e3);}void main(){vec2 uv=vUv,cc=uv-.5;float ca=dot(cc,cc)*.010;vec3 c=vec3(S(uv+cc*ca).r,S(uv).g,S(uv-cc*ca).b);vec3 b=(S(uv+vec2(texel.x,0.))+S(uv-vec2(texel.x,0.))+S(uv+vec2(0.,texel.y))+S(uv-vec2(0.,texel.y)))*.25;c+=(c-b)*.35;c+=texture2D(tB,uv).rgb*str;if(rays>0.){vec3 gr=vec3(0.);vec2 dl=(sunUV-uv)/14.,sq=uv;float wt=1.;for(int i=0;i<14;i++){sq+=dl;gr+=texture2D(tB,sq).rgb*wt;wt*=.93;}c+=gr*rays*.012;}if(isnan(c.r)||isnan(c.g)||isnan(c.b))c=vec3(0.);c=mix(vec3(dot(c,vec3(.299,.587,.114))),c,sat)*tint;c=(c*(2.51*c+.03))/(c*(2.43*c+.59)+.14);c=pow(clamp(c,0.,1.),vec3(.4545));float q=16.*uv.x*uv.y*(1.-uv.x)*(1.-uv.y);c*=.72+.28*pow(q,.25);c+=(h(uv*1500.)-.5)*.025;c*=min(1.,uT/1.5);gl_FragColor=vec4(c,1.);}",qb=`
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
}`,nh="void main(){gl_Position=vec4(position.xy,0.,1.);}",ho=(n,e,t)=>n.map((i,s)=>i+(e[s]-i)*t),ih=(()=>{let n=(s,r)=>s[0]*r[0]+s[1]*r[1]+s[2]*r[2],e=(s,r,o)=>{let a=n(s,r),l=n(s,s)-o*o,u=a*a-l;if(u<0)return[1e9,-1e9];let c=Math.sqrt(u);return[-a-c,-a+c]};return{atmo:(s,r,o,a,l)=>{s=[s[0],Math.max(s[1],0),s[2]];let u=Math.hypot(...s);s=s.map(I=>I/u);let c=[0,6360.25,0],d=e(c,s,6420)[1],h=0,f=0,g=[0,0,0],v=[0,0,0];for(let I=0;I<10;I++){let S=(I+.5)*.1,_=d*.2*S,R=c.map((z,H)=>z+s[H]*d*S*S),x=Math.hypot(...R)-6360,b=Math.exp(-x*.125)*_,E=Math.exp(-x/1.2)*_;h+=b,f+=E;let O=e(R,r,6420)[1]*.25,q=0,U=0,P=!0;for(let z=0;z<4;z++){let H=R.map((X,te)=>X+r[te]*O*(z+.5)),W=Math.hypot(...H)-6360;if(W<0){P=!1;break}q+=Math.exp(-W*.125)*O,U+=Math.exp(-W/1.2)*O}if(P)for(let z=0;z<3;z++){let H=Math.exp(-(o[z]*(h+q)+a*1.1*(f+U)));g[z]+=H*b,v[z]+=H*E}}let m=n(s,r),p=.76,w=p*p,M=.0597*(1+m*m),k=.1194*((1-w)*(1+m*m))/((2+w)*Math.pow(1+w-2*p*m,1.5));return[0,1,2].map(I=>l*(g[I]*o[I]*M+v[I]*a*k))},trans:(s,r,o)=>{let a=[0,6360.25,0],l=e(a,s,6420)[1],u=l/16,c=0,d=0;for(let h=0;h<16;h++){let f=a.map((v,m)=>v+s[m]*u*(h+.5)),g=Math.hypot(...f)-6360;if(g<0)return[0,0,0];c+=Math.exp(-g*.125)*u,d+=Math.exp(-g/1.2)*u}return r.map(h=>Math.exp(-(h*c+o*1.1*d)))}}})(),yr=n=>new ot(...n.map(e=>Math.pow(Math.max(0,Math.min(1,e)),2.2))),Ci=(n,e)=>n.map(t=>t*e);function om(n){let e=((n.desc||"")+" "+(n.title||"")+" "+(n.eyebrow||"")).toLowerCase(),t=H=>H.test(e),i=Al(e),s=ci(n.key||n.title||"x"),r=Gn(s);t(/okyanus (dış )?gezegen|su altı (uygarlık|şehir)/)&&Object.assign(i,{a:[.27,.59,.9],b:[.04,.18,.43],atm:[.43,.7,1],type:2});let o=t(/gaz dev|gaz halka|gaz tabaka|gaz gezegeni|atmosfer gezegeni|bulut/),a=i.type;a===1&&!o&&(a=0);let l=n.key==="obsidian";l&&(a=0);let u=t(/neon|gece|lüminesans|foton|radyant/),c=t(/alacakaranlık|şafak|gün batımı/),d=t(/vakum|boşluk|sessiz/),h={uType:a,uAmp:5,uFreq:.085,uPow:1.5,uSea:-1,uFog:.018,uStars:.9,uNight:0,uCrack:0,uRing:0,uMoons:0,uAur:0,uTwin:0,uSeed:r()*50,uRidge:0,uSnow:0,uClear:2.4,uCloud:.15,uWave:1,uCycle:0,uHeat:1,uPart:0,uFlock:0,uFlash:0,uDive:0,uCity:0,uStruct:0,uForest:0,uErode:.9,speed:1.5},f=ho(i.b,i.a,.25),g=i.a,v=[.2,.5,.6],m=[.02,.1,.2],p=ho(i.atm,[1,1,1],.35),w=Ci(ho(i.atm,i.b,.6),.55),M=[1,.93,.8],k=[-.38,.3,.87];a===0?(t(/çöl|kum/)?(Object.assign(h,{uPow:1,uAmp:3.4,uFreq:.06,uCloud:.05}),f=ho(i.b,i.a,.5),p=[.95,.8,.6],w=[.35,.45,.62]):t(/kristal|prizma|spektr/)?(Object.assign(h,{uRidge:1,uAmp:8,uFreq:.11,uCrack:.55}),v=Ci(i.a,1.3)):Object.assign(h,{uRidge:1,uAmp:6}),d&&(Object.assign(h,{uFog:.002,uStars:2,uCloud:0}),p=[0,0,0],w=[0,0,0],M=[1.2,1.1,1],k=[-.4,.12,.9])):a===1?(Object.assign(h,{uAmp:1.4,uFreq:.06,uPow:1.3,uFog:.04,uClear:4,uStars:0,uCloud:0,speed:2.2}),f=i.b,g=i.a,p=Ci(i.atm,.8),w=Ci(i.atm,.5)):a===2?t(/orman|bitki|ağaç|biyosfer|tarımsal/)?(Object.assign(h,{uSea:.22,uAmp:5.5,uPow:1.7,uCloud:.4,uStars:0,uSnow:.85,uFog:.011}),f=[.1,.3,.08],g=[.36,.34,.2],p=[.62,.78,.95],w=[.16,.38,.78],v=[.15,.45,.5],m=[.02,.12,.2]):(Object.assign(h,{uSea:.55,uAmp:3.2,uPow:1.8,uWave:1.3,uCloud:.5,uStars:0}),f=[.5,.45,.32],g=[.25,.45,.25],v=i.a,m=i.b,p=[.7,.86,.96],w=[.25,.5,.85]):a===3?(Object.assign(h,{uSea:.38,uRidge:1,uAmp:6,uCrack:1.1,uFog:.05,uStars:.3,uCloud:0,uWave:.3}),f=[.05,.04,.04],g=[.22,.12,.09],v=[1,.42,.1],m=[.35,.06,.02],p=[.5,.18,.08],w=[.08,.03,.03],M=[1,.55,.3],k=[-.2,.12,.9]):a===4&&(Object.assign(h,{uRidge:1,uAmp:6,uSea:.22,uSnow:.1,uWave:.06,uCloud:.4}),f=[.7,.82,.92],g=[.95,.98,1],v=[.5,.75,.9],m=[.1,.3,.5],p=[.8,.9,1],w=[.35,.55,.85],M=[.95,.97,1]),l&&(f=[.03,.03,.04],g=[.13,.12,.15],p=[.3,.27,.33],w=[.09,.08,.12],h.uFog=.03,h.uCrack=0,h.uRidge=1,h.uAmp=6.5),c&&(k=[-.5,.07,.85],M=[1,.6,.35],p=[1,.55,.35],w=[.15,.18,.4],h.uCrack=Math.max(h.uCrack,.45),v=Ci(i.a,1.5),h.uStars=1.2),u&&(Object.assign(h,{uNight:1,uStars:1.6,uCloud:0,uCrack:Math.max(h.uCrack,.9)}),k=[-.3,.22,.9],M=[.15,.2,.4],p=[.02,.03,.08],w=[.005,.01,.04],f=Ci(i.b,.8),g=Ci(i.a,.6),v=Ci(i.a,1.5)),t(/ikiz|çift yıldız/)&&(h.uTwin=1);let I=n.key==="dunya";h.uReal=I?1:0;let S={javelin:1,"bio-nexus":2,synapto:3,celestia:4,ferrum:5,obsidian:6,chronos:7,dreamoria:8,nihil:9};h.uSig=S[n.key]||0,t(/aurora|kutup ışık/)&&(h.uAur=1),t(/halka/)&&a!==1&&(h.uRing=1),t(/sis|pus|duman/)&&(h.uFog*=2.2),a!==1&&s%3!==0&&(h.uMoons=1+(s>>3)%2),I&&(h.uMoons=1,h.uTwin=0,h.uRing=0),d&&(h.uHeat=0),a===2&&h.uSea>0&&t(/su altı (şehir|uygarlık)/)&&(h.uCity=1),!d&&a!==1&&t(/kalıntı|tapınak|piramit|şehir|kule|(^|\s)anıt|yapılarla|kompleks/)&&(h.uStruct=t(/piramit/)?1.3:.75),a===2&&h.uSea>0&&h.uSea<.4&&(h.uForest=1),a===3||a===4?h.uErode=1.2:t(/çöl|kum/)&&a===0?h.uErode=.45:a===1&&(h.uErode=.3);let _=!d&&/yağış|yağmur/.test(e.replace(/yağmur orman\S*/g,""));_&&(h.uCloud=1.6,h.uFog*=1.8,p=Ci(p,.5),w=Ci(w,.4),M=Ci(M,.3));let R=!d&&t(/fırtına|şimşek|elektrik|yıldırım|plazma|iyonize/);d||(a===4?h.uPart=1:a===3?h.uPart=2:a===0&&t(/çöl|kum/)||a===1?h.uPart=3:u||c?h.uPart=4:_?h.uPart=5:a===2&&h.uSea<.4&&(h.uPart=6),!u&&t(/uçan|kuş|gökyüzü balina|gök balina|akbaba|kanat|uçma|hava canlı|havada/)&&(h.uFlock=1)),!u&&!d&&!c&&a!==3&&(h.uCycle=1);let x=!u&&!d&&a!==3,b=1;a===0&&t(/çöl|kum|toz/)&&(b=2),a===1&&(b=3),a===2&&(b=h.uForest?1.2:1.5),a===4&&(b=.8),t(/sis|pus|duman/)&&(b*=2.2),_&&(b*=2.5);let E=a===0&&t(/çöl|kum/),O=E?ho([.4,.6,1],i.atm,.08):i.atm;E&&(b=1.3);let q=Math.max(...O,.01),U=O.map(H=>Math.max(.0015,.0331*Math.pow(Math.max(0,H)/q,2)));h.uLights=!d&&t(/şehir|uygarlık|yerleşim|koloni|medeniyet|nüfus|halk|kent|metropol/)?1:0,h.uPhys=x?1:0,n.key==="obsidian"&&(b=1),h.uQ=(()=>{try{let H=localStorage.getItem("qsq");return H==null?window.__qulSafe?0:matchMedia("(pointer:coarse)").matches?1:window.__qulQL>=2?0:window.__qulQL===1?1:2:+H}catch{return 2}})(),h.uBM=.004*b,h.uSI=n.key==="obsidian"?3:11,h.uSig===4&&(h.uAur=1,h.uCycle=0,k=[-.5,.06,.86]),h.uSig===2&&(h.uForest=Math.max(h.uForest,1)),h.uSig===9&&(h.uPhys=0,h.uCloud=0,h.uPart=0,h.uStars=1.4);let P=Math.hypot(...k);return k=k.map(H=>H/P),{scan:(()=>{let H={},W=(n.desc||"")+" "+JSON.stringify(n.card||{}),X=W.toLowerCase(),te=ce=>parseFloat(String(ce).replace(",",".")),ae=W.match(/(\d+(?:[.,]\d+)?)\s*bar\b/i);H.p=ae?[ae[1].replace(".",",")+" bar","kanon"]:null,ae=W.match(/%\s*(\d+(?:[.,]\d+)?)\s*oksijen/i),H.o2=ae?["%"+ae[1],"kanon"]:/oksijen/.test(X)?["var (oran belirtilmemi\u015F)","kanon"]:null,ae=W.match(/(\d+(?:[.,]\d+)?)\s*g\b/),H.g=ae?[ae[1].replace(".",",")+" g","kanon"]:null,H.mag=/zayıf manyetik/.test(X)?["zay\u0131f","kanon",.3]:/manyetik fırtına|manyetik/.test(X)?["g\xFC\xE7l\xFC, f\u0131rt\u0131nal\u0131","kanon",1.3]:["veri yok","temsili",.6],H.rad=/yüksek radyasyon|radyasyon/.test(X)?["y\xFCksek","kanon"]:null;let oe=d&&/vakum|madde içermeyen/.test(X)?3:a===3?900:a===4?190:a===1?160:a===0&&/çöl|kum/.test(X)?315:288;H.t=[oe===3?"\u22483 K (bo\u015Fluk)":"\u2248"+(oe-25)+"\u2013"+(oe+30)+" K","tahmini"],H.tb=oe;let K=[],se=(ce,fe,Re,De)=>{ce.test(X)&&K.push([fe,Re,De])};return se(/oksijen/,"O\u2082","oksijen",[687,760]),se(/nem|buhar|yağış|bulut|okyanus|su altı|\bsu\b/,"H\u2082O","su buhar\u0131",[720,820,940]),se(/metan/,"CH\u2084","metan",[619,727,890]),se(/amonyak/,"NH\u2083","amonyak",[645,790]),se(/karbondioksit|co2|karbon/,"CO\u2082","karbon bile\u015Fikleri",[]),se(/hidrojen/,"H\u2082","hidrojen",[656]),se(/sülfür|kükürt/,"S","s\xFClf\xFCr bile\u015Fikleri",[]),se(/azot|nitrojen/,"N\u2082","azot",[]),se(/aether|eter\b/,"?","tan\u0131mlanamayan bile\u015Fen (aether) \u2014 ard\u0131 bekliyor",[]),H.gas=K,H})(),aco:{harmony:"h",echoes:"e",belvior:"b"}[n.key]||"",seedH:s,bR:U,dive:a===2&&h.uSea>0,storm:R,c:h,col:{uLo:yr(f),uHi:yr(g),uW1:yr(v),uW2:yr(m),uSkyH:yr(p),uSkyZ:yr(w),uSunC:yr(M)},sun:k,type:a,night:u,vac:d,forest:a===2&&h.uSea<.4}}function Xb(n){if(window.__hush)return null;let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t=new e,i=t.createGain();i.gain.value=0;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2e4,i.connect(s),s.connect(t.destination);let r=t.sampleRate*3,o=t.createBuffer(1,r,t.sampleRate),a=o.getChannelData(0);for(let S=0;S<r;S++)a[S]=Math.random()*2-1;let l=()=>{let S=t.createBufferSource();return S.buffer=o,S.loop=!0,S.start(),S},u=(S,_,R,x)=>{let b=t.createOscillator(),E=t.createGain();return b.frequency.value=_,E.gain.value=R,S.value=x,b.connect(E),E.connect(S),b.start(),b},c=(S,_,R,x,b)=>{let E=t.createBiquadFilter(),O=t.createGain();return E.type=_,E.frequency.value=R,E.Q.value=x,O.gain.value=b,S.connect(E),E.connect(O),O.connect(i),{fl:E,gn:O}},d=(S,_,R="sine")=>{let x=t.createOscillator(),b=t.createGain();return x.type=R,x.frequency.value=S,b.gain.value=_,x.connect(b),b.connect(i),x.start(),{o:x,gn:b}},h=null,f=n.type;if(n.vac)d(38,.05);else if(f===1){let S=d(55,.08),_=d(82.4,.05),R=d(110.3,.03);u(S.gn.gain,.07,.03,.08),u(_.gn.gain,.05,.02,.05),c(l(),"lowpass",260,.5,.25)}else if(f===3){c(l(),"lowpass",110,.7,.9),c(l(),"bandpass",380,.6,.12);let S=()=>{let _=t.createBufferSource(),R=t.createGain(),x=t.createBiquadFilter();_.buffer=o,x.type="bandpass",x.frequency.value=2e3+Math.random()*3500,x.Q.value=1.2;let b=t.currentTime,E=.03+Math.random()*.07;R.gain.setValueAtTime(.05+Math.random()*.08,b),R.gain.exponentialRampToValueAtTime(5e-4,b+E),_.connect(x),x.connect(R),R.connect(i),_.start(b,Math.random()*2,E+.02),h=setTimeout(S,140+Math.random()*460)};S()}else{let S=c(l(),"bandpass",f===4?700:420,.7,.5);if(u(S.gn.gain,.07,.25,.5),u(S.fl.frequency,.05,150,f===4?700:420),c(l(),"lowpass",160,.5,.18),f===2){let _=c(l(),"lowpass",520,.6,.25);u(_.gn.gain,.11,.22,.25);let R=c(l(),"bandpass",900,.8,.08);u(R.gn.gain,.083,.07,.08)}}if(!n.vac){let S=c(l(),"bandpass",3200,.9,.5),_=t.currentTime;S.fl.frequency.setValueAtTime(3200,_),S.fl.frequency.exponentialRampToValueAtTime(260,_+7),S.gn.gain.setValueAtTime(.5,_),S.gn.gain.linearRampToValueAtTime(0,_+8)}if(!n.vac){let S=[[0,1,4,5,7,8,11],[0,2,4,5,7,9,10],[0,1,3,5,7,8,10],[0,2,4,7,9],[0,2,4,6,7,9,11],[0,2,3,5,7,8,10]],_=n.seedH>>>0,R=n.aco==="h"?[0,4,7,12,16]:n.aco==="b"?[0,2,3,7,9]:S[_%S.length],x=f===3?98:f===4?392:f===2?196:f===1?130.8:261.6,b=t.createDelay(1.5),E=t.createGain(),O=t.createGain();b.delayTime.value=n.aco==="e"?.18:.37+_%7*.05,E.gain.value=n.aco==="e"?.78:.55,O.gain.value=.5,b.connect(E),E.connect(b),b.connect(O),O.connect(i);let q=0,U=()=>{if(!t||t.state==="closed")return;let P=t.currentTime,z=R[Math.floor(Math.random()*R.length)],H=Math.random()<.3?2:1,W=x*H*Math.pow(2,z/12),X=t.createOscillator(),te=t.createGain();if(X.type="sine",X.frequency.value=W,te.gain.setValueAtTime(0,P),te.gain.linearRampToValueAtTime(.022,P+.02),te.gain.exponentialRampToValueAtTime(4e-4,P+3.5),X.connect(te),te.connect(i),te.connect(b),X.start(P),X.stop(P+3.6),n.aco==="h"){let ae=t.createOscillator(),oe=t.createGain();ae.frequency.value=W*1.5,oe.gain.setValueAtTime(0,P+.12),oe.gain.linearRampToValueAtTime(.012,P+.15),oe.gain.exponentialRampToValueAtTime(4e-4,P+3.2),ae.connect(oe),oe.connect(i),oe.connect(b),ae.start(P+.12),ae.stop(P+3.3)}n.aco==="e"&&(X.frequency.value=W*2),q=setTimeout(U,n.aco==="h"?1400+Math.random()*2200:n.aco==="b"?900+Math.random()*900:2800+Math.random()*5200)};q=setTimeout(U,6e3),n._chimeStop=()=>clearTimeout(q)}if(n.night){let S=d(174.6,.012,"triangle"),_=d(261.6,.008,"triangle");u(S.gn.gain,.09,.008,.012),u(_.gn.gain,.06,.006,.008)}i.gain.linearRampToValueAtTime(.55,t.currentTime+3);let g=()=>{let S=t.currentTime,_=t.createBiquadFilter(),R=t.createGain(),x=t.createBufferSource();x.buffer=o,_.type="lowpass",_.frequency.setValueAtTime(900,S),_.frequency.exponentialRampToValueAtTime(70,S+2.5),R.gain.setValueAtTime(0,S),R.gain.linearRampToValueAtTime(1.3,S+.05),R.gain.exponentialRampToValueAtTime(.001,S+3),x.connect(_),_.connect(R),R.connect(t.destination),x.start(S,Math.random()*.5,3.1)},v=l(),m=t.createBiquadFilter(),p=t.createGain();m.type="highpass",m.frequency.value=900,p.gain.value=0,v.connect(m),m.connect(p),p.connect(i);let w=null,M=0,k=0;return{cave:(S,_)=>{let R=t.currentTime;if(i.gain.cancelScheduledValues(R),i.gain.setTargetAtTime(S?.1:.55,R,.8),S){if(!w){w=t.createGain(),w.gain.value=0;let b=t.createConvolver(),E=t.sampleRate*2.6,O=t.createBuffer(2,E,t.sampleRate);for(let P=0;P<2;P++){let z=O.getChannelData(P);for(let H=0;H<E;H++)z[H]=(Math.random()*2-1)*Math.pow(1-H/E,3.2)}b.buffer=O,w.connect(b),b.connect(t.destination);let q=t.createOscillator(),U=t.createGain();q.frequency.value=_===3?58:46,q.type=_===3?"sawtooth":"sine",U.gain.value=_===3?.006:.015,q.connect(U),U.connect(w),q.start()}w.gain.setTargetAtTime(1,R,.8);let x=()=>{if(!w)return;let b=t.currentTime,E=t.createOscillator(),O=t.createGain(),q=(_===2?1800:900)+Math.random()*1400;E.frequency.setValueAtTime(q,b),E.frequency.exponentialRampToValueAtTime(q*.45,b+.08),O.gain.setValueAtTime(.05,b),O.gain.exponentialRampToValueAtTime(5e-4,b+.12),E.connect(O),O.connect(w),E.start(b),E.stop(b+.15),M=setTimeout(x,600+Math.random()*2600)};if(clearTimeout(M),M=setTimeout(x,800),_===3){let b=()=>{if(!w)return;let E=t.currentTime,O=t.createBufferSource(),q=t.createBiquadFilter(),U=t.createGain();O.buffer=o,q.type="bandpass",q.frequency.value=1500+Math.random()*1500,q.Q.value=8,U.gain.setValueAtTime(.12,E),U.gain.exponentialRampToValueAtTime(5e-4,E+.35),O.connect(q),q.connect(U),U.connect(w),O.start(E,Math.random()*2,.4),k=setTimeout(b,3500+Math.random()*6e3)};clearTimeout(k),k=setTimeout(b,2500)}}else w&&(w.gain.setTargetAtTime(0,R,.6),clearTimeout(M),clearTimeout(k))},rain(S){p.gain.setTargetAtTime(S*.45,t.currentTime,1.5)},thunder:g,uw(S){s.frequency.setTargetAtTime(S?420:2e4,t.currentTime,.6)},stop(){n._chimeStop&&n._chimeStop();try{i.gain.cancelScheduledValues(t.currentTime),i.gain.setValueAtTime(i.gain.value,t.currentTime),i.gain.linearRampToValueAtTime(0,t.currentTime+1.2)}catch{}clearTimeout(h),h={},setTimeout(()=>{try{t.close()}catch{}},1500)}}}var lm=n=>{try{parent.postMessage({qulDuck:n},"*")}catch{}},at=null,Yn={open(n){if(at)return;let e=om(n),t=document.createElement("div");t.id="surf";let i=String(n.desc||"").split(/(?<=[.!?])\s/)[0],s=D=>String(D||"").replace(/[&<>"]/g,G=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[G]);t.innerHTML='<canvas></canvas><div class="sv"></div><div class="sc"><small>'+s(n.eyebrow)+"</small><h2>"+s(n.title)+"</h2><p>"+s(i)+'</p></div><div class="sw"></div><div class="sk" role="status" aria-live="polite"></div><div class="sn" style="text-align:right">'+s(F("surf.note"))+"<br>"+s(F("surf.hint"))+(e.dive?s(F("surf.dive")):"")+'</div><button class="sgz"></button><div class="ssc" role="status" aria-live="polite"></div><button class="sv2" aria-label="video"></button><button class="sca"></button><button class="sb"></button><button class="sq"></button><div class="stc"><button class="su">\u25B2</button><button class="sd">\u25BC</button></div><div class="sj"></div><button class="sp">'+s(F("surf.photo"))+'</button><button class="sx">'+s(F("surf.close"))+"</button>",document.body.appendChild(t);let r;try{r=new Oi({canvas:t.querySelector("canvas"),antialias:!1,powerPreference:"high-performance"})}catch{t.remove();return}r.setPixelRatio(1);let o=!1,a=D=>{if(!o){o=!0;try{localStorage.setItem("qsafe",String(Date.now()))}catch{}try{console.error("[Qul] y\xFCzey ba\u015Flat\u0131lamad\u0131:",D)}catch{}if(window.__qulSurfFail=D,at)Yn.close();else{t.remove();try{r.dispose()}catch{}ve.pause(!1)}window.dispatchEvent(new CustomEvent("qulSurfaceFail",{detail:String(D).slice(0,200)}))}};r.debug.onShaderError=(D,G)=>{let we="";try{we=D.getProgramInfoLog(G)||""}catch{}a("shader: "+we.slice(0,300))},r.domElement.addEventListener("webglcontextlost",D=>{D.preventDefault(),a("ba\u011Flam kayb\u0131 (GPU s\u0131f\u0131rland\u0131)")});let l=document.createElement("div");l.id="surfld",l.innerHTML="<b>"+F("surf.prep")+'</b><i><u></u></i><button type="button" class="go" hidden>'+F("surf.ready")+'</button><button type="button" class="x" aria-label="\u2715">\u2715</button>',document.body.appendChild(l);let u=0;l.querySelector(".x").addEventListener("click",()=>Yn.close());let c={uScan:{value:0},uTb:{value:e.scan.tb},uMag:{value:e.scan.mag[2]},uCave:{value:0},uCS:{value:0},uCX:{value:0},uCYaw:{value:0},uLST:{value:0},uLatR:{value:0},tSky:{value:null},uTide:{value:0},uTideA:{value:0},uGrid:{value:0},uCalm:{value:0},uWind:{value:.3},uEcl:{value:0},uMoon0:{value:new B(.46,.5,.74).normalize()},uWet:{value:0},uLat:{value:0},uSeason:{value:0},uAut:{value:0},uJit:{value:new Oe},uRes:{value:new Oe(1,1)},uLook:{value:new Oe},uT:{value:0},uDist:{value:0},uPos:{value:new Oe},uHead:{value:0},uAlt:{value:0},uSun:{value:new B(...e.sun)}};for(let D in e.c)D!=="speed"&&(c[D]={value:e.c[D]});for(let D in e.col)c[D]={value:e.col[D]};c.uBR={value:new B(...e.bR)},c.uPH={value:new B},c.uPZ={value:new B},c.uPC={value:new B};let d=()=>{if(!e.c.uPhys)return;let D=c.uSun.value,G=[D.x,D.y,D.z],we=e.bR,ie=e.c.uBM,Be=e.c.uSI,Ue=ih.atmo([0,1,0],G,we,ie,Be),ut=[0,0,0];for(let St=0;St<4;St++){let Ot=St*1.5708,$t=ih.atmo([Math.cos(Ot),.06,Math.sin(Ot)],G,we,ie,Be);for(let tn=0;tn<3;tn++)ut[tn]+=$t[tn]*.25}let ft=ih.trans(G,we,ie);c.uPZ.value.set(Ue[0]+.004,Ue[1]+.006,Ue[2]+.012),c.uPH.value.set(ut[0]+.006,ut[1]+.008,ut[2]+.014),c.uPC.value.set(ft[0]*1.25+.02,ft[1]*1.25+.025,ft[2]*1.25+.04)};d();let h=0,f=(()=>{try{return JSON.parse(localStorage.getItem("qlog")||"{}")||{}}catch{return{}}})(),g=f[n.key]=f[n.key]||{v:0,f:[],ph:0};g.t=n.title,g.v=(g.v||0)+1,g.last=Date.now(),g.f=g.f||[];let v=()=>{try{localStorage.setItem("qlog",JSON.stringify(f))}catch{}};v();let m=n.card||{},p=String(n.desc||"").split(/(?<=[.!?])\s/).slice(1).filter(D=>D.trim().length>12);if((m.extra||[]).forEach(D=>(D.items||[]).forEach(G=>p.push((D.h?D.h+": ":"")+G))),m.durum&&p.push(m.durum),m.aksiyom){let D=On.get(),G=D&&D.a&&String(m.aksiyom).startsWith("Aksiyom "+D.a);p.push((m.tahmini?F("row.est",{v:m.aksiyom}):m.aksiyom)+(G?" \xB7 "+F("id.yours"):""))}let w=p.slice(0,4).map((D,G)=>{let we=e.seedH%628/100+G*2.1+.4,ie=60+G*45;return{x:Math.sin(we)*ie,z:Math.cos(we)*ie,txt:D,found:g.f.includes(G)}}),M=window.QUL||{},k=M.galaxies||[],I=k.find(D=>D.id===n.gal)||{pos:[0,0,0]},S=[];(M.planets||[]).filter(D=>D.gal===n.gal&&D.key!==n.key&&!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(D.key)).slice(0,5).forEach(D=>{let G=ci(D.key),we=G%628/100,ie=.14+(G>>>8)%40/100,Be=Al(((D.desc||"")+" "+(D.title||"")).toLowerCase()).a;S.push({type:1,dir:[Math.cos(ie)*Math.sin(we),Math.sin(ie),Math.cos(ie)*Math.cos(we)],col:Be.map(Ue=>Math.pow(Ue,2.2)*1.6),name:D.title,key:D.key})}),k.filter(D=>D.id!==n.gal&&!D.bg&&D.pos).map(D=>({g:D,d:Math.hypot(D.pos[0]-I.pos[0],D.pos[1]-I.pos[1],D.pos[2]-I.pos[2])||1})).sort((D,G)=>D.d-G.d).slice(0,4).forEach(({g:D,d:G})=>{let we=[(D.pos[0]-I.pos[0])/G,(D.pos[1]-I.pos[1])/G,(D.pos[2]-I.pos[2])/G];we[1]=.12+Math.abs(we[1])*.7;let ie=Math.hypot(...we);we=we.map(Be=>Be/ie),S.push({type:2,dir:we,col:(D.tint||[1,1,1]).map(Be=>Be*.35),name:D.name,gal:D.id})}),c.uNb={value:Array.from({length:9},(D,G)=>S[G]?new Ct(...S[G].dir,S[G].type):new Ct)},c.uNc={value:Array.from({length:9},(D,G)=>S[G]?new B(...S[G].col):new B)},c.uOrb={value:2600},e.c.uReal&&new Cs().load("img/gok.png",D=>{D.wrapS=is,D.minFilter=un,D.generateMipmaps=!1,D.colorSpace=hn,c.tSky.value=D}),c.uPoi={value:[0,1,2,3].map(D=>new B(w[D]?w[D].x:0,w[D]?w[D].z:0,w[D]?w[D].found?2:1:0))};let _={jallom:1,kaelum:2,fulgur:3},R=_[n.key]||0,x=R?(()=>{let D=e.seedH%314/50+1.1;return{x:Math.sin(D)*38,z:Math.cos(D)*38}})():null;c.uPoi.value.push(new B(x?x.x:0,x?x.z:0,x?3:0));let b=new vt({vertexShader:nh,fragmentShader:Yl,uniforms:c,depthTest:!1,depthWrite:!1}),E=new Fi,O=new As(-1,1,1,-1,0,1),q=new _t(new ea(2,2),b);q.frustumCulled=!1,E.add(q);let U=1,P=2600,z=0,H=!1,W=0,X=0,te=(D,G,we)=>{let ie=Math.max(0,Math.min(1,(we-D)/(G-D)));return ie*ie*(3-2*ie)},ae=()=>{let D=c.uHead.value+c.uLook.value.x*.85,G=-c.uLook.value.y*.4-.05-.65*te(0,2600,P)-.2*te(0,150,P),we=[Math.sin(D)*Math.cos(G),Math.sin(G),Math.cos(D)*Math.cos(G)],ie=[we[2],0,-we[0]],Be=Math.hypot(ie[0],ie[2])||1;return ie[0]/=Be,ie[2]/=Be,{fw:we,rt:ie,up:[we[1]*ie[2]-we[2]*ie[1],we[2]*ie[0]-we[0]*ie[2],we[0]*ie[1]-we[1]*ie[0]]}},oe=0,K=0,se=0,ce=0,fe=0,Re=!0,De=!1,Ge=0,Pe=0,$e=!1,Z=.6,st=!0,ye=window.__qulSafe?.3:Math.min(.4,[.7,.6,.5,.38][window.__qulQL|0]||.7),ze=0,Ce=performance.now(),Ke=0,ke=0,C=0,T=1,Y={x:0,y:0,lx:0,ly:0},pe=r.extensions.has("EXT_color_buffer_float")||r.extensions.has("EXT_color_buffer_half_float"),ue=(D,G)=>new gn(Math.max(2,D|0),Math.max(2,G|0),{type:pe?Qn:zi,minFilter:un,magFilter:un,depthBuffer:!1}),de=(D,G)=>new vt({vertexShader:Hb,fragmentShader:D,uniforms:G,depthTest:!1,depthWrite:!1}),Te=de(Vb,{tex:{value:null},texel:{value:new Oe},pre:{value:0}}),Se=de(Gb,{tex:{value:null},add:{value:null},texel:{value:new Oe}}),Ee=de(Wb,{tS:{value:null},tB:{value:null},texel:{value:new Oe},uT:c.uT,str:{value:.22},sunUV:{value:new Oe(.5,.5)},rays:{value:0},sat:{value:1},tint:{value:new B(1,1,1)}}),He=null,We=[],N=[],le=[null,null],A=0,y=1,re=pe&&!window.__qulSafe,$=re?new vt({vertexShader:nh,fragmentShader:Yl.slice(0,Yl.indexOf(`void main(){
  gH=uSkyH;`))+qb,uniforms:Object.assign({},c,{tCur:{value:null},tHist:{value:null},uPP:{value:new Oe},uPL:{value:new Oe},uPH0:{value:0},uPA:{value:0},uPT:{value:0},uRst:{value:1},uPO:{value:0}}),depthTest:!1,depthWrite:!1}):null,ne=[[.5,.333],[.25,.667],[.75,.111],[.125,.444],[.625,.778],[.375,.222],[.875,.556],[.0625,.889]],Le=0,Ae=()=>{[He,...We,...N,...le].forEach(D=>D&&D.dispose())},_e=(D,G,we)=>{Ae();let ie=Math.max(2,Math.round(D*we)),Be=Math.max(2,Math.round(G*we));r.setSize(D,G,!1),c.uRes.value.set(ie,Be),He=ue(ie,Be),re&&(le=[ue(ie,Be),ue(ie,Be)],y=1),We=[],N=[];for(let Ue=1;Ue<=4;Ue++)We.push(ue(D/(1<<Ue+1),G/(1<<Ue+1)));for(let Ue=3;Ue>=1;Ue--)N.push(ue(D/(1<<Ue),G/(1<<Ue)));Ee.uniforms.texel.value.set(1/D,1/G)},me=(D,G)=>{q.material=D,r.setRenderTarget(G),r.render(E,O)},V=()=>{if(re){let G=ne[Le++%8];c.uJit.value.set(G[0]-.5,G[1]-.5)}else c.uJit.value.set(0,0);me(b,He);let D=He;if(re){let G=$.uniforms;G.tCur.value=He.texture,G.tHist.value=le[A].texture,G.uRst.value=y||c.uOrb.value>8||c.uCave.value>0?1:0,G.uPO.value=c.uOrb.value,me($,le[1-A]),A=1-A,D=le[A],y=0,G.uPP.value.copy(c.uPos.value),G.uPL.value.copy(c.uLook.value),G.uPH0.value=c.uHead.value,G.uPA.value=c.uAlt.value,G.uPT.value=c.uT.value}Te.uniforms.tex.value=D.texture,Te.uniforms.pre.value=1,Te.uniforms.texel.value.set(1/D.width,1/D.height),me(Te,We[0]),Te.uniforms.pre.value=0;for(let G=1;G<4;G++)Te.uniforms.tex.value=We[G-1].texture,Te.uniforms.texel.value.set(1/We[G-1].width,1/We[G-1].height),me(Te,We[G]);for(let G=0;G<3;G++){let we=G===0?We[3]:N[G-1],ie=We[2-G];Se.uniforms.tex.value=we.texture,Se.uniforms.add.value=ie.texture,Se.uniforms.texel.value.set(1/we.width,1/we.height),me(Se,N[G])}{let G=c.uSun.value,we=ae(),ie=we.fw,Be=we.rt,Ue=we.up,ut=G.x*ie[0]+G.y*ie[1]+G.z*ie[2],ft=(G.x*Be[0]+G.y*Be[1]+G.z*Be[2])/ut/1.25,St=(G.x*Ue[0]+G.y*Ue[1]+G.z*Ue[2])/ut/1.25,Ot=innerHeight/innerWidth;Ee.uniforms.sunUV.value.set(.5+ft*Ot,.5+St),Ee.uniforms.rays.value=ut<.15||G.y<.02||c.uNight.value>.5?0:Math.min(1,(ut-.15)*2.5)*Math.min(1,G.y*5)}Ee.uniforms.tS.value=D.texture,Ee.uniforms.tB.value=N[2].texture,me(Ee,null)},he=()=>_e(Math.min(1920,innerWidth),Math.round(Math.min(1920,innerWidth)*innerHeight/innerWidth),ye);he();let ge=D=>{Y.x=(D.clientX/innerWidth-.5)*2,Y.y=(D.clientY/innerHeight-.5)*2},Ie=D=>{T=Math.max(.3,Math.min(4,T*(D.deltaY<0?1.12:.89)))},xe={},be=D=>{let G=D.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(G)&&D.preventDefault(),xe[G]=!0,G==="escape"?Yn.close():G==="t"?st=!st:G==="p"?tt():G==="k"?t.querySelector(".sq").click():G==="v"?t.querySelector(".sb").click():G==="o"?z=z>0?0:2600:G==="r"?t.querySelector(".sv2").click():G==="m"?ec():G==="l"?t.querySelector(".sgz").click():G==="g"&&R?nt?It():Lt&&Ki():G==="f"?Re=!Re:G==="x"&&e.dive&&(Ge=Ge?0:1)},Xe=D=>{xe[D.key.toLowerCase()]=!1};t.addEventListener("pointerdown",D=>{if(!(D.target.closest("button")||D.pointerType==="touch")){De=!0;try{t.setPointerCapture(D.pointerId)}catch{}}}),t.addEventListener("pointerup",()=>{De=!1}),t.addEventListener("pointermove",D=>{De&&(oe+=(D.movementX||0)*.004)}),t.addEventListener("pointermove",ge),t.addEventListener("wheel",Ie,{passive:!0}),addEventListener("keydown",be),addEventListener("keyup",Xe),addEventListener("resize",he);let tt=()=>{g.ph=(g.ph||0)+1,v();let D=Math.min(window.__qulSafe?1280:2048,Math.round(innerWidth*Math.min(devicePixelRatio||1,2))),G=Math.round(D*innerHeight/innerWidth);_e(D,G,1);for(let St=0;St<(re?6:1);St++){V();try{r.getContext().finish()}catch{}}let we=document.createElement("canvas");we.width=D,we.height=G;let ie=we.getContext("2d");ie.drawImage(r.domElement,0,0,D,G);let Be=ie.createLinearGradient(0,G*.6,0,G);Be.addColorStop(0,"rgba(0,0,0,0)"),Be.addColorStop(1,"rgba(0,0,0,.8)"),ie.fillStyle=Be,ie.fillRect(0,G*.6,D,G*.4);let Ue=Math.round(G*.018);ie.strokeStyle="rgba(232,196,106,.55)",ie.lineWidth=Math.max(1,G*.0018),ie.strokeRect(Ue,Ue,D-Ue*2,G-Ue*2),ie.fillStyle="#e8c46a",ie.font=Math.round(G*.062)+"px Georgia,serif",ie.fillText(n.title||"",D*.05,G*.82);let ut=String(n.desc||"").split(/(?<=[.!?])\s/)[0];ie.fillStyle="#efe6d0",ie.font="italic "+Math.round(G*.024)+"px Georgia,serif";{let St=ut.split(" "),Ot=[],$t="";St.forEach(tn=>{let mi=$t?$t+" "+tn:tn;ie.measureText(mi).width>D*.6&&$t?(Ot.push($t),$t=tn):$t=mi}),$t&&Ot.push($t),Ot.slice(0,3).forEach((tn,mi)=>ie.fillText(tn,D*.05,G*.87+mi*G*.032))}ie.fillStyle="#b8ab8e",ie.font=Math.round(G*.017)+"px Georgia,serif",ie.textAlign="right",ie.fillText("QUL EFSANELER\u0130 \xB7 "+(location.host||"qul"),D*.95,G*.95);{let St=On.label();St&&(ie.fillStyle="#e8c46a",ie.font=Math.round(G*.016)+"px Georgia,serif",ie.fillText(St,D*.95,G*.92))}ie.textAlign="left";try{let St=document.createElement("canvas");St.width=360,St.height=Math.round(360*G/D),St.getContext("2d").drawImage(we,0,0,St.width,St.height);let Ot=[];try{Ot=JSON.parse(localStorage.getItem("qgal")||"[]")||[]}catch{}for(Ot.unshift({k:n.key,t:n.title,d:Date.now(),i:St.toDataURL("image/jpeg",.72)});Ot.length>16;)Ot.pop();localStorage.setItem("qgal",JSON.stringify(Ot))}catch{}let ft=document.createElement("a");ft.download="qul-"+(n.key||"gezegen")+".png",ft.href=we.toDataURL("image/png"),ft.click(),he()};t.querySelector(".sp").onclick=tt;let rt=t.querySelector(".sca"),et=()=>{rt.textContent=(c.uCalm.value?"\u25D0 ":"\u25D1 ")+F(c.uCalm.value?"surf.calmOn":"surf.calm"),rt.setAttribute("aria-pressed",c.uCalm.value?"true":"false")},Fe=D=>{c.uCalm.value=D?1:0;try{localStorage.setItem("qcalm",D?"1":"0")}catch{}et()};{let D=null;try{D=localStorage.getItem("qcalm")}catch{}Fe(D==null?matchMedia("(prefers-reduced-motion: reduce)").matches:D==="1")}rt.onclick=()=>Fe(!c.uCalm.value);let Mt=t.querySelector(".sv2"),At=null;Mt.textContent="\u25CF "+F("surf.video");let di=()=>{if(At){At.stop();return}let D=r.domElement;if(!D.captureStream||!window.MediaRecorder){ki(F("surf.video"),F("surf.videoNo"));return}let G=["video/mp4;codecs=avc1","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(ut=>MediaRecorder.isTypeSupported(ut));if(!G){ki(F("surf.video"),F("surf.videoNo"));return}let we=D.captureStream(30),ie=[];At=new MediaRecorder(we,{mimeType:G,videoBitsPerSecond:12e6}),At.ondataavailable=ut=>{ut.data.size&&ie.push(ut.data)},At.onstop=()=>{let ut=new Blob(ie,{type:G.split(";")[0]}),ft=document.createElement("a");ft.download="qul-"+(n.key||"gezegen")+(G.includes("mp4")?".mp4":".webm"),ft.href=URL.createObjectURL(ut),ft.click(),setTimeout(()=>URL.revokeObjectURL(ft.href),4e3),At=null,Mt.classList.remove("on"),Mt.textContent="\u25CF "+F("surf.video"),g.ph=(g.ph||0)+1,v()},At.start(),Mt.classList.add("on");let Be=10;Mt.textContent="\u25A0 "+Be+" sn";let Ue=setInterval(()=>{if(!At){clearInterval(Ue);return}Be--,Mt.textContent="\u25A0 "+Be+" sn",Be<=0&&(clearInterval(Ue),At.stop())},1e3)};Mt.onclick=di;let gt=t.querySelector(".sgz"),Kn=t.querySelector(".ssc"),Zn=["","surf.scT","surf.scM","surf.scS"],fi=()=>{let D=c.uScan.value,G=e.scan;if(gt.textContent="\u2316 "+(D?F(Zn[D]):F("surf.scan")),gt.classList.toggle("on",D>0),!D){Kn.classList.remove("on");return}let we=(Be,Ue)=>"<tr><td>"+s(F(Be))+"</td><td>"+(Ue?s(Ue[0])+' <i class="'+Ue[1]+'">'+s(F("surf.src."+Ue[1]))+"</i>":'<i class="yok">'+s(F("surf.src.yok"))+"</i>")+"</td></tr>",ie="<small>"+s(F("surf.scan"))+" \xB7 "+s(F(Zn[D]))+"</small><table>"+we("surf.r.t",G.t)+we("surf.r.p",G.p)+we("surf.r.o2",G.o2)+we("surf.r.g",G.g)+we("surf.r.mag",G.mag)+we("surf.r.rad",G.rad)+"</table>";if(D===3){let Ue=ut=>Math.round((ut-380)/620*260);ie+='<div class="spc"><div class="spb"></div>'+G.gas.flatMap(ut=>ut[2].map(ft=>'<i style="left:'+Ue(ft)+'px" title="'+s(ut[0])+" "+ft+' nm"></i>')).join("")+'</div><div class="spl"><span>380 nm</span><span>1000 nm</span></div><p>'+(G.gas.length?G.gas.map(ut=>"<b>"+s(ut[0])+"</b> "+s(ut[1])).join(" \xB7 "):s(F("surf.src.yok")))+"</p>"}ie+='<p class="scn">'+s(F("surf.scNote"+D))+"</p>",Kn.innerHTML=ie,Kn.classList.add("on")};gt.onclick=()=>{c.uScan.value=(c.uScan.value+1)%4,fi()},fi();let Pn=t.querySelector(".sq"),yn=()=>{Pn.textContent=F("surf.q")+": "+F("surf.q"+c.uQ.value)},Wt=D=>{c.uQ.value=D;try{localStorage.setItem("qsq",D)}catch{}yn(),D<1&&ye>.75&&(ye=.75,he())};Pn.onclick=()=>Wt((c.uQ.value+2)%3),yn();let xn=["gezgin","yerli","gozlemci"],L={gezgin:[1,[1,1,1],1,30],yerli:[1.12,[1.07,1,.9],.5,2],gozlemci:[.72,[.9,.98,1.1],1.7,24]},j=0,Q=30,ee=t.querySelector(".sb"),J=D=>{j=D;let G=xn[D],we=L[G];Ee.uniforms.sat.value=we[0],Ee.uniforms.tint.value.set(...we[1]),U=we[2],Q=we[3],G==="yerli"&&(fe=0),G==="gozlemci"&&(fe=Math.max(fe,20)),ee.textContent=F("surf.view")+": "+F("surf.v."+G);let ie=((window.QUL_BAKIS||{})[n.key]||{})[G];ie&&ki(F("surf.v."+G),ie)},Ne=document.createElement("div");Ne.className="snb",t.appendChild(Ne);let Ze=null,Qe=!1,je=null,ct=!1,it=null,nt=!1,Lt=!1,qt=0,Rt=0,Yt=0,wt=0,dt=D=>{let G=document.createElement("div");G.className="sfd",t.appendChild(G),requestAnimationFrame(()=>G.classList.add("on")),setTimeout(()=>{D(),G.classList.remove("on"),setTimeout(()=>G.remove(),700)},650)};var Ki=()=>dt(()=>{nt=!0,qt=2,Rt=0,Yt=0,wt=0,c.uCave.value=R,Ne.style.display="none",g.cave=!0,v(),at&&at.audio&&at.audio.cave&&at.audio.cave(!0,R),ki(F("surf.cave"),F("surf.caveIn2"))}),It=()=>dt(()=>{nt=!1,c.uCave.value=0,Ne.style.display="",at&&at.audio&&at.audio.cave&&at.audio.cave(!1)}),_n=D=>{let G=(xe.w||xe.arrowup?1:0)-(xe.s||xe.arrowdown?1:0)+(Nt.on?-Nt.y:0),we=1-Math.exp(-D*3);wt+=(G*1.7*(xe.shift?2.2:1)-wt)*we,qt+=wt*D,Rt=Math.max(-1.3,Math.min(1.3,Rt+((xe.d?1:0)-(xe.a?1:0))*D*1.2)),Yt=Math.max(-1.3,Math.min(1.3,Yt+((xe.e||xe.arrowright?1:0)-(xe.q||xe.arrowleft?1:0)+(Nt.on?Nt.x:0))*D*1.1)),c.uCS.value=qt,c.uCX.value=Rt,c.uCYaw.value=Yt,qt<0&&wt<0&&It()};let ms=S.map(D=>{let G=document.createElement("button");return G.textContent=D.name,G.className=D.type===1?"np":"ng",G.title=F(D.type===1?"surf.nbP":"surf.nbG"),G.onclick=()=>{D.type===1?(Ze=D.key,z=2600,ki(F("surf.warp"),D.name)):window.dispatchEvent(new CustomEvent("qulGo",{detail:{gal:D.gal}}))},Ne.appendChild(G),G}),kn=(D,G)=>{let we=document.createElement("span");return we.textContent=D,we.className="sml "+G,Ne.appendChild(we),we},pi=kn(F(e.c.uTwin?"surf.sunTwin":"surf.sun"),"ms"),Vt=e.c.uMoons>=1?kn(F("surf.moon"),"ms"):null,Ln=[["surf.cN",[0,.02,1]],["surf.cE",[1,.02,0]],["surf.cS",[0,.02,-1]],["surf.cW",[-1,.02,0]]].map(([D,G])=>({d:G,e:kn(F(D),"mc")})),jn=(D,G,we)=>{let ie=D[0]*G.fw[0]+D[1]*G.fw[1]+D[2]*G.fw[2];if(ie<.2)return null;let Be=(D[0]*G.rt[0]+D[1]*G.rt[1]+D[2]*G.rt[2])/ie/1.25,Ue=(D[0]*G.up[0]+D[1]*G.up[1]+D[2]*G.up[2])/ie/1.25,ut=(.5+Be*we)*innerWidth,ft=(.5-Ue)*innerHeight;return ut<0||ut>innerWidth||ft<0||ft>innerHeight?null:[ut,ft]},Kt=(D,G,we,ie)=>{if(!G||we<=0){D.style.opacity=0,ie&&(D.style.pointerEvents="none");return}D.style.transform="translate("+Math.round(G[0])+"px,"+Math.round(G[1]+12)+"px) translateX(-50%)",D.style.opacity=we.toFixed(2),ie&&(D.style.pointerEvents="auto")},Ws=0;var xa=()=>{if(++Ws%2)return;let D=ae(),G=innerHeight/innerWidth,we=e.c.uPhys?Math.max(0,1-(c.uPZ.value.x+c.uPZ.value.y+c.uPZ.value.z)*1.6):1,ie=Qe?1:.3+.7*Math.max(we,te(150,900,P));S.forEach((Ue,ut)=>Kt(ms[ut],jn(Ue.dir,D,G),ie,!0));let Be=c.uSun.value;if(Kt(pi,Qe?jn([Be.x,Be.y,Be.z],D,G):null,1,!1),Vt){let Ue=c.uMoon0.value;Kt(Vt,Qe&&Ue.y>-.02?jn([Ue.x,Ue.y,Ue.z],D,G):null,1,!1)}if(Ln.forEach(Ue=>Kt(Ue.e,Qe&&P<200?jn(Ue.d,D,G):null,.9,!1)),e.c.uReal&&(Qe&&!it&&(it=eh.c.map(Ue=>({ra:Ue[2]*Math.PI/180,de:Ue[3]*Math.PI/180,e:kn(vn==="tr"?Ue[0]:Ue[1],"mk")})).concat(eh.s.map(Ue=>({ra:Ue[1]*Math.PI/180,de:Ue[2]*Math.PI/180,e:kn(Ue[0],"mst")})))),it)){let Ue=c.uLatR.value,ut=Math.sin(Ue),ft=Math.cos(Ue),St=c.uLST.value;it.forEach(Ot=>{if(!Qe){Ot.e.style.opacity=0;return}let $t=St-Ot.ra,tn=Math.cos(Ot.de),mi=Math.sin(Ot.de),gi=tn*Math.cos($t),gs=[-tn*Math.sin($t),gi*ft+mi*ut,-gi*ut+mi*ft];Kt(Ot.e,gs[1]>.03?jn(gs,D,G):null,.85,!1)})}};let _r=(D,G)=>{let we=ae(),ie=innerHeight,Be=innerWidth,Ue=(D-Be/2)/ie,ut=(ie/2-G)/ie,ft=[0,1,2].map(gs=>we.fw[gs]+(Ue*we.rt[gs]+ut*we.up[gs])*1.25),St=Math.hypot(...ft);ft=ft.map(gs=>gs/St);let Ot=8e3,$t=Ot+P+8,tn=$t*ft[1],mi=$t*$t-Ot*Ot,gi=tn*tn-mi;if(gi<0)return!1;let So=-tn-Math.sqrt(gi);return So<0?!1:(je={x0:c.uPos.value.x,z0:c.uPos.value.y,x1:c.uPos.value.x+ft[0]*So,z1:c.uPos.value.y+ft[2]*So,k:0},z=0,!0)},qs=null;t.addEventListener("pointerdown",D=>{qs=[D.clientX,D.clientY]}),t.addEventListener("pointerup",D=>{if(!qs||D.target.closest("button"))return;let G=Math.hypot(D.clientX-qs[0],D.clientY-qs[1]);qs=null,G<6&&P>300&&z>0&&_r(D.clientX,D.clientY)});var Ql=D=>{if(P>1500&&z>0&&!ct&&!Ze&&(ct=!0,ki(F("surf.orbit"),F("surf.orbitHint"))),Ze&&P>1300){let G=Ze;Ze=null,window.dispatchEvent(new CustomEvent("qulGo",{detail:{planet:G,warp:!0}}))}if(je){je.k=Math.min(1,je.k+D*.2);let G=je.k*je.k*(3-2*je.k);c.uPos.value.set(je.x0+(je.x1-je.x0)*G,je.z0+(je.z1-je.z0)*G),K=0,je.k>=1&&(je=null)}},ec=()=>{Qe=!Qe,c.uGrid.value=Qe?1:0,ki(F("surf.map"),F(Qe?"surf.mapOn":"surf.mapOff"))};ee.onclick=()=>J((j+1)%3),ee.textContent=F("surf.view")+": "+F("surf.v.gezgin");let Nt={on:!1,id:-1,ox:0,oy:0,x:0,y:0},ri={id:-1,x:0,y:0},br=t.querySelector(".sj");t.addEventListener("pointerdown",D=>{D.pointerType!=="touch"||D.target.closest("button")||(D.clientX<innerWidth*.45&&!Nt.on?(Nt.on=!0,Nt.id=D.pointerId,Nt.ox=D.clientX,Nt.oy=D.clientY,Nt.x=Nt.y=0,br.style.left=D.clientX+"px",br.style.top=D.clientY+"px",br.classList.add("on")):(ri.id=D.pointerId,ri.x=D.clientX,ri.y=D.clientY))}),t.addEventListener("pointermove",D=>{D.pointerType==="touch"&&(D.pointerId===Nt.id?(Nt.x=Math.max(-1,Math.min(1,(D.clientX-Nt.ox)/60)),Nt.y=Math.max(-1,Math.min(1,(D.clientY-Nt.oy)/60))):D.pointerId===ri.id&&(Y.x=Math.max(-1,Math.min(1,Y.x+(D.clientX-ri.x)/innerWidth*2.4)),Y.y=Math.max(-1,Math.min(1,Y.y+(D.clientY-ri.y)/innerHeight*2.4)),ri.x=D.clientX,ri.y=D.clientY))});let fh=D=>{D.pointerId===Nt.id&&(Nt.on=!1,Nt.id=-1,Nt.x=Nt.y=0,br.classList.remove("on")),D.pointerId===ri.id&&(ri.id=-1)};t.addEventListener("pointerup",fh),t.addEventListener("pointercancel",fh);let ph=(D,G)=>{D.addEventListener("pointerdown",we=>{we.preventDefault(),xe[G]=!0}),["pointerup","pointerleave","pointercancel"].forEach(we=>D.addEventListener(we,()=>{xe[G]=!1}))};if(ph(t.querySelector(".su")," "),ph(t.querySelector(".sd"),"c"),matchMedia("(pointer:coarse)").matches){t.classList.add("touch");let D=t.querySelector(".sn");D&&(D.textContent=F("surf.touch"))}t.querySelector(".sx").onclick=()=>Yn.close();let bo=e.c.uSea>0?.07*e.c.uAmp*(e.c.uMoons>=1?1:.4):0,mh=0,gh=0;c.uTideA.value=bo;let vh=()=>{if(!bo)return;let D=c.uMoon0.value,G=c.uSun.value,we=e.c.uMoons>=1?2*D.y*D.y-1:0,ie=bo*(we+.46*(2*G.y*G.y-1))/1.46;gh=ie-mh,mh=ie,c.uTide.value=ie},tc=e.c.uPart,Mo=0,yh=0,xh=0,_a=2.2+Math.random()*2,ki=(D,G)=>{let we=t.querySelector(".sk");we&&(we.innerHTML="<small>"+s(D)+"</small><p>"+s(G)+"</p>",we.classList.add("on"),clearTimeout(xh),xh=setTimeout(()=>we.classList.remove("on"),11e3))};w.length&&w.some(D=>!D.found)&&setTimeout(()=>{at&&ki(F("surf.poi"),F("surf.poiHint"))},7e3);let Mr=e.type===0&&e.c.uPart===3,ln=e.c.uPhys&&!e.vac&&e.type!==1?{v:e.c.uPart===5?.8:.15,tg:.15,t:25+Math.random()*30,bm:e.c.uBM}:null,Im=Math.random()*6.283;window.__qulDbg={wx:ln,U:c,setWet:D=>{Mo=D},orb:(D,G)=>{P=D,G!=null&&(z=G)},ecl:D=>{_a=D}};let Dm=D=>{Ql(D);{let ie=Math.log(1+P);P=Math.max(0,Math.exp(ie+(Math.log(1+z)-ie)*(1-Math.exp(-D*.5)))-1),z===0&&P<.05&&(P=0),c.uOrb.value=P,xa()}let G=Math.max(-1,Math.min(1,c.uPos.value.y/1200+(e.c.uReal?39/80:0)));c.uLat.value=G;let we=c.uT.value*6.2832/480+Im+(G<0?Math.PI:0);if(c.uSeason.value=Math.sin(we),c.uAut.value=Math.max(0,-Math.cos(we)),ln){ln.t-=D,ln.t<=0&&(ln.tg=e.storm&&Math.random()<.6?.65+Math.random()*.35:Math.random()<.5?Math.random()*.4:.4+Math.random()*.6,ln.t=50+Math.random()*70),ln.v+=(ln.tg-ln.v)*(1-Math.exp(-D*.03));let ie=ln.v;Mr?(e.c.uBM=ln.bm*(1+3*Math.max(0,ie-.4)/.6),c.uBM.value=e.c.uBM):c.uCloud.value=e.c.uCloud+Math.max(0,ie-.25)/.75*(1.6-e.c.uCloud);let Be=!Mr&&e.type!==4&&ie>.62;tc=Be?5:Mr&&ie>.5?3:e.c.uPart,Mo=Math.max(0,Math.min(1,Mo+(Be?D*.05:-D*.012))),c.uWet.value=Mo,at&&at.audio&&at.audio.rain&&at.audio.rain(Be?(ie-.62)/.38:0),!Mr&&ie>.85&&Math.random()<D*.12&&at&&at.bolt(),ln.w=ie,ln.rain=Be,c.uWind.value=.3+ie*1.1}if(e.c.uMoons>=1){_a+=D*.0175;let ie=c.uSun.value,Be=[ie.x,ie.y,ie.z],Ue=[Be[1]*0-Be[2]*1,Be[2]*0-Be[0]*0,Be[0]*1-Be[1]*0],ut=Math.hypot(...Ue)||1;Ue=Ue.map(gi=>gi/ut);let ft=[Be[1]*Ue[2]-Be[2]*Ue[1],Be[2]*Ue[0]-Be[0]*Ue[2],Be[0]*Ue[1]-Be[1]*Ue[0]],St=.09*Math.sin(_a*.37+1.3),Ot=Math.cos(_a),$t=Math.sin(_a),tn=[0,1,2].map(gi=>Ot*Be[gi]+$t*(Ue[gi]*Math.cos(St)+ft[gi]*Math.sin(St)));c.uMoon0.value.set(...tn).normalize(),vh();let mi=Math.acos(Math.max(-1,Math.min(1,c.uMoon0.value.dot(ie))));c.uEcl.value=ie.y>0?1-te(.018,.085,mi):0}if(e.c.uReal||(c.uLatR.value=G*80*Math.PI/180),e.c.uReal){c.uLatR.value=G*80*Math.PI/180,c.uLST.value=Z*1.0027+1.9;let ie=Math.max(0,1-(c.uPZ.value.x+c.uPZ.value.y+c.uPZ.value.z)*2);c.uAur.value=Math.abs(G)>.72?ie:0}e.c.uMoons<1&&vh();for(let ie=0;ie<w.length;ie++){let Be=w[ie];if(!Be.found&&Math.hypot(c.uPos.value.x-Be.x,c.uPos.value.y-Be.z)<11){Be.found=!0,c.uPoi.value[ie].z=2,g.f.includes(ie)||g.f.push(ie),v();try{window.dispatchEvent(new CustomEvent("qulFound",{detail:n.key}))}catch{}ki(F("surf.poi")+" \xB7 "+w.filter(Ue=>Ue.found).length+"/"+w.length,Be.txt)}}if(x&&!nt){let ie=Math.hypot(c.uPos.value.x-x.x,c.uPos.value.y-x.z)<9;ie&&!Lt&&ki(F("surf.cave"),F("surf.caveHint"+R)),Lt=ie}if((yh-=D)<=0){yh=1;let ie=t.querySelector(".sw");if(ie){let Be=Math.round(Math.abs(G)*80),Ue=(we%6.2832+6.2832)%6.2832,ut=F("surf.s"+Math.floor(Ue/1.5708)),ft="";if(ln){let St=ln.w||0;ft=" \xB7 "+F(Mr?St>.55?"surf.wDust":"surf.w0":ln.rain?St>.85?"surf.w3":"surf.w2":St>.35?"surf.w1":"surf.w0")}ie.textContent=F("surf.lat")+" "+Be+"\xB0 "+F(G>=0?"surf.N":"surf.S")+" \xB7 "+ut+ft+(bo?" \xB7 "+F(gh>=0?"surf.tideUp":"surf.tideDn"):"")+(w.length?" \xB7 "+F("surf.poi")+" "+w.filter(St=>St.found).length+"/"+w.length:""),nt&&(ie.textContent=F("surf.caveIn",{m:Math.round(qt)}))}}},_h=D=>{if(o)return;ze=requestAnimationFrame(_h);let G=Math.min(.1,(D-Ce)/1e3);if(Ce=D,c.uT.value+=G,e.c.uCycle&&st&&++h%3===0&&d(),e.dive){Pe+=(Ge-Pe)*(1-Math.exp(-G*.7)),c.uDive.value=Pe;let ie=Pe>.5;c.uPart.value=ie?7:tc,ie!==$e&&($e=ie,at&&at.audio&&at.audio.uw(ie))}if(at&&(c.uFlash.value=at.flash(),at.decay(Math.exp(-G*5))),e.dive||(c.uPart.value=tc),Dm(G),e.c.uCycle&&st){Z+=G*.03*(e.c.uSig===7?Math.sin(c.uT.value*.07)*2.2+Math.sin(c.uT.value*.031)*1.4:1);let ie=Math.abs(c.uLat.value),Be=.42*Math.cos(Z)*(1-.4*ie)-.15*ie,Ue=Math.sqrt(1-Be*Be);c.uSun.value.set(-.418*Ue,Be,.909*Ue)}if(nt)_n(G);else{let ie=e.c.speed*T*U*(1+P*.03),Be=xe.shift?2:1,Ue=Nt.on?-Nt.y*2.2*ie*Be:xe.w||xe.arrowup?2.2*ie*Be:xe.s||xe.arrowdown?-.6*ie:Re?ie*Be:0,ut=((xe.d?1:0)-(xe.a?1:0))*.9*ie*Be,ft=1-Math.exp(-G*2.5);K+=(Ue-K)*ft,se+=(ut-se)*ft,oe+=((xe.e||xe.arrowright?1:0)-(xe.q||xe.arrowleft?1:0))*G*1.1+(Nt.on?Nt.x*G*1.3:0),c.uPos.value.x+=(Math.sin(oe)*K+Math.cos(oe)*se)*G,c.uPos.value.y+=(Math.cos(oe)*K-Math.sin(oe)*se)*G,c.uHead.value=oe,fe=Math.max(0,Math.min(Q,fe+((xe[" "]?1:0)-(xe.c?1:0))*G*9)),ce+=(fe-ce)*ft,c.uAlt.value=ce}let we=1-Math.exp(-G*3);if(Y.lx+=(Y.x-Y.lx)*we,Y.ly+=(Y.y-Y.ly)*we,c.uLook.value.set(Y.lx,Y.ly),e.c.uSig===8){let ie=c.uT.value*.05;Ee.uniforms.tint.value.set(1+.08*Math.sin(ie),1+.06*Math.sin(ie+2.1),1+.1*Math.sin(ie+4.2)),Ee.uniforms.str.value=.42}if(V(),l.isConnected&&++u===4&&l.remove(),H||(W+=G,X++,W>25&&(H=!0,Tn.measure(Math.round(X/W),c.uQ.value,matchMedia("(pointer:coarse)").matches))),Ke+=G,ke++,C>0&&C--,ke>=30){let ie=Ke/ke;Ke=0,ke=0,!C&&ie>.09&&ye>.2?(ye=Math.max(.2,ye*.6),he(),C=20):!C&&ie>.05&&ye>.2?(ye=Math.max(.2,ye*.75),he(),C=30):!C&&ie>.026&&ye>.3?(ye*=.88,he(),C=45):!C&&ie<.0175&&ye<(c.uQ.value<1?.75:1)&&(ye=Math.min(c.uQ.value<1?.75:1,ye*(ie<.011?1.16:1.06)),he(),C=ie<.011?20:45)}};if(at={mTaa:$,ld:l,kill:Ae,el:t,rdr:r,mat:b,onKey:be,onUp:Xe,onMove:ge,size:he,audio:null,quiet:setTimeout(()=>{let D=t.querySelector(".sc");D&&(D.style.transition="opacity 3s",D.style.opacity="0")},15e3)},o){Yn.close();return}let Sr=0,bh=0;if(e.storm){let D=()=>{bh=setTimeout(()=>{(!ln||!Mr&&ln.w>.6)&&(Sr=1,setTimeout(()=>{Sr=.8},130),at&&at.audio&&setTimeout(()=>{at&&at.audio&&at.audio.thunder()},500+Math.random()*1500)),D()},5e3+Math.random()*8e3)};D()}at.bolt=()=>{Sr=1,setTimeout(()=>{Sr=.8},130),at.audio&&setTimeout(()=>{at&&at.audio&&at.audio.thunder()},500+Math.random()*1500)},at.flashStop=()=>clearTimeout(bh),at.flash=()=>Sr,at.decay=D=>{Sr*=D};let zm=performance.now(),Mh=!1,Sh=l.querySelector("u"),wh=l.querySelector(".go"),Eh=()=>{Mh||!at||o||(Mh=!0,l.remove(),lm(!0),at.audio=Xb(e),at.pz=setTimeout(()=>ve.pause(!0),1700),requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("on"))),ze=requestAnimationFrame(_h))};wh.addEventListener("click",Eh),at.seek=D=>{c.uT.value+=D,Z+=D*.03},setTimeout(()=>{(async()=>{try{if(r.compileAsync){let G=[b,$,Te,Se,Ee].filter(Boolean),we=0,ie=Promise.all(G.map(Be=>{let Ue=new Fi,ut=new _t(q.geometry,Be);return ut.frustumCulled=!1,Ue.add(ut),r.compileAsync(Ue,O).then(()=>{we++,Sh.style.width=Math.round(we/G.length*92)+"%"})}));await Promise.race([ie,new Promise(Be=>setTimeout(Be,4e4))])}}catch{}if(!at||o)return;if(Sh.style.width="100%",l.classList.add("ok"),performance.now()-zm<1500)Eh();else{wh.hidden=!1,l.querySelector("b").textContent=F("surf.ready2");try{navigator.vibrate&&navigator.vibrate(60)}catch{}}})()},150),at.stopLoop=()=>cancelAnimationFrame(ze)},seek(n){at&&at.seek(n)},warm(){if(!(at||Yn._w)){Yn._w=!0;try{let n=om({key:"warm",desc:"",title:"w",eyebrow:""}),e=document.createElement("canvas");e.width=e.height=8;let t=new Oi({canvas:e,antialias:!1}),i={uRes:{value:new Oe(8,8)},uLook:{value:new Oe},uT:{value:5},uDist:{value:0},uPos:{value:new Oe},uHead:{value:0},uAlt:{value:0},uSun:{value:new B(...n.sun)}};for(let a in n.c)a!=="speed"&&(i[a]={value:n.c[a]});for(let a in n.col)i[a]={value:n.col[a]};let s=new Fi,r=new As(-1,1,1,-1,0,1),o=new vt({vertexShader:nh,fragmentShader:Yl,uniforms:i,depthTest:!1});s.add(new _t(new ea(2,2),o)),t.render(s,r),t.getContext().finish(),o.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss()}catch{}}},close(){if(!at)return;let n=at;at=null,n.ld&&n.ld.remove(),clearTimeout(n.pz),clearTimeout(n.quiet),n.flashStop&&n.flashStop(),n.el.classList.remove("on"),ve.pause(!1),n.audio&&n.audio.stop(),lm(!!window.__hush),removeEventListener("keydown",n.onKey),removeEventListener("keyup",n.onUp),removeEventListener("resize",n.size),setTimeout(()=>{n.stopLoop();try{n.kill(),n.rdr.dispose(),n.mat.dispose(),n.mTaa&&n.mTaa.dispose()}catch{}n.el.remove()},1700)}};var cm=n=>{try{parent.postMessage({qulDuck:n},"*")}catch{}},fo=null;function Yb(){if(window.__hush)return null;let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;let e=new n,t=e.createGain(),i=e.createGain(),s=e.createGain();t.gain.value=1,i.gain.value=0,s.gain.value=0,t.connect(s),i.connect(s),s.connect(e.destination);let r=(v,m,p,w="sine")=>{let M=e.createOscillator(),k=e.createGain();return M.type=w,M.frequency.value=m,k.gain.value=p,M.connect(k),k.connect(v),M.start(),{o:M,gn:k}},o=(v,m,p)=>{let w=e.createOscillator(),M=e.createGain();w.frequency.value=m,M.gain.value=p,w.connect(M),M.connect(v),w.start()},a=e.sampleRate*3,l=e.createBuffer(1,a,e.sampleRate),u=l.getChannelData(0);for(let v=0;v<a;v++)u[v]=Math.random()*2-1;let c=(v,m,p)=>{let w=e.createBufferSource();w.buffer=l,w.loop=!0;let M=e.createBiquadFilter(),k=e.createGain();M.type="bandpass",M.frequency.value=m,M.Q.value=.6,k.gain.value=p,w.connect(M),M.connect(k),k.connect(v),w.start(),o(M.frequency,.05,m*.3),o(k.gain,.07,p*.6)},d=r(t,41.2,.14),h=r(t,43.1,.1),f=r(t,82.4,.04,"triangle");o(d.gn.gain,.04,.05),o(f.gn.gain,.07,.02),c(t,320,.22),[[110,.07],[164.8,.05],[220,.04],[329.6,.025],[493.9,.012]].forEach(([v,m],p)=>{let w=r(i,v,m,p>2?"sine":"triangle");o(w.gn.gain,.03+p*.011,m*.5)});let g=r(i,1318.5,.004);return o(g.gn.gain,.17,.004),c(i,900,.05),s.gain.linearRampToValueAtTime(.5,e.currentTime+4),{to(v){let m=e.currentTime;t.gain.cancelScheduledValues(m),i.gain.cancelScheduledValues(m),t.gain.setValueAtTime(t.gain.value,m),i.gain.setValueAtTime(i.gain.value,m),t.gain.linearRampToValueAtTime(v?0:1,m+3.5),i.gain.linearRampToValueAtTime(v?1:0,m+3.5)},stop(){try{s.gain.cancelScheduledValues(e.currentTime),s.gain.setValueAtTime(s.gain.value,e.currentTime),s.gain.linearRampToValueAtTime(0,e.currentTime+1.4)}catch{}setTimeout(()=>{try{e.close()}catch{}},1700)}}}var po=[{id:"araf",img:"img/esik-araf.jpg",gate:[.49,.47],title:"esik.a.t",lines:["esik.a.1"],origin:"50% 55%"},{id:"cherqa",img:"img/esik-cherqa.jpg",gate:[.5,.4],title:"esik.c.t",lines:["esik.c.1","esik.c.2","esik.c.3","esik.c.4"],origin:"50% 45%"}],Kl={open(){if(fo)return;let n=document.createElement("div");n.id="esik",n.innerHTML=po.map(q=>'<div class="es" data-s="'+q.id+'"><div class="far" style="background-image:url('+q.img+')"></div><div class="near" style="background-image:url('+q.img+')"></div></div>').join("")+'<canvas class="em"></canvas><div class="ev"></div><div class="ef"></div><div class="et"><small></small><h2></h2><p></p></div><div class="en">'+F("esik.note")+'</div><button class="ex">'+F("esik.close")+'</button><button class="eg"></button>',document.body.appendChild(n);let e={};n.querySelectorAll(".es").forEach(q=>{e[q.dataset.s]=q});let t=n.querySelector("canvas"),i=t.getContext("2d"),s=n.querySelector(".et"),r=n.querySelector(".ef"),o=n.querySelector(".eg"),a=0,l=0,u=0,c=0,d=0,h=0,f=performance.now(),g=f,v=!1,m=[],p=0,w=0,M=0,k=Yb(),I=()=>{w=t.width=innerWidth,M=t.height=innerHeight};I();let S=Array.from({length:70},()=>({x:Math.random(),y:Math.random(),z:.2+Math.random()*.8,v:.01+Math.random()*.03,ph:Math.random()*6.28})),_=(q,U)=>{let P=setTimeout(q,U);return m.push(P),P},R=()=>{m.forEach(clearTimeout),m=[]},x=q=>{a=q;let U=po[q];n.dataset.cur=U.id,s.classList.remove("on"),_(()=>{s.querySelector("small").textContent=F("esik.eyebrow"),s.querySelector("h2").textContent=F(U.title);let P=s.querySelector("p");P.innerHTML="",s.classList.add("on"),U.lines.forEach((z,H)=>{let W=document.createElement("span");W.textContent=F(z),P.appendChild(W),_(()=>W.classList.add("on"),1800+H*4200)}),_(()=>{o.textContent=F(q?"esik.back":"esik.cross"),o.classList.add("on")},3e3+U.lines.length*2200)},1400),o.classList.remove("on")};o.onclick=()=>{if(v)return;v=!0,o.classList.remove("on"),s.classList.remove("on");let q=a?0:1;R(),n.classList.add("cross"),k&&k.to(q===1),_(()=>{r.style.opacity=1},2600),_(()=>{e[po[a].id].classList.remove("on"),e[po[q].id].classList.add("on"),p=0},3500),_(()=>{r.style.opacity=0,n.classList.remove("cross"),v=!1,x(q)},3700)},e.araf.classList.add("on");let b=q=>{let U=q.touches?q.touches[0]:q;l=U.clientX/innerWidth*2-1,u=U.clientY/innerHeight*2-1},E=q=>{q.key==="Escape"&&Kl.close()};addEventListener("mousemove",b),addEventListener("touchmove",b,{passive:!0}),addEventListener("keydown",E),addEventListener("resize",I),n.querySelector(".ex").onclick=()=>Kl.close();let O=q=>{h=requestAnimationFrame(O);let U=Math.min(.1,(q-g)/1e3),P=(q-f)/1e3;g=q,c+=(l-c)*(1-Math.exp(-U*2.2)),d+=(u-d)*(1-Math.exp(-U*2.2)),v&&(p=Math.min(1,p+U/2.8));let z=po[a],H=e[z.id],W=p*p*(3-2*p),X=1.04+Math.min(P*.0012,.06),te=H.querySelector(".far"),ae=H.querySelector(".near"),oe=X+W*5.2,K=X*1.06+W*7.5,se=z.gate[0]*100+"% "+z.gate[1]*100+"%";te.style.transformOrigin=ae.style.transformOrigin=W>0?se:z.origin,te.style.transform="translate("+-c*1.1+"%,"+-d*.8+"%) scale("+oe+")",ae.style.transform="translate("+-c*2.6+"%,"+-d*1.6+"%) scale("+K+")",i.clearRect(0,0,w,M);let ce=a?"255,214,140":"230,200,150";for(let fe of S){fe.y-=fe.v*U*(a?1:.5),fe.x+=Math.sin(P*.3+fe.ph)*4e-4,fe.y<-.05&&(fe.y=1.05,fe.x=Math.random());let Re=(fe.x-c*.03*fe.z)*w,De=fe.y*M,Ge=(1+fe.z*2.4)*(M/900),Pe=(.18+.5*fe.z)*(.6+.4*Math.sin(P*1.3+fe.ph))*(1-W*.7),$e=i.createRadialGradient(Re,De,0,Re,De,Ge*3);$e.addColorStop(0,"rgba("+ce+","+Pe+")"),$e.addColorStop(1,"rgba("+ce+",0)"),i.fillStyle=$e,i.fillRect(Re-Ge*3,De-Ge*3,Ge*6,Ge*6)}};fo={el:n,audio:k,raf:0,cleanup(){R(),cancelAnimationFrame(h),removeEventListener("mousemove",b),removeEventListener("touchmove",b),removeEventListener("keydown",E),removeEventListener("resize",I)}},cm(!0),ve.pause(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.add("on"),x(0),h=requestAnimationFrame(O)}))},close(){if(!fo)return;let n=fo;fo=null,n.cleanup(),n.el.classList.remove("on"),ve.pause(!1),n.audio&&n.audio.stop(),cm(!!window.__hush),setTimeout(()=>n.el.remove(),1700)}};var Ut=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),sh={open(n,e){let t={};try{t=JSON.parse(localStorage.getItem("qlog")||"{}")||{}}catch{}let i=Object.keys(t).filter(h=>n[h]).sort((h,f)=>(t[f].last||0)-(t[h].last||0)),s=Object.keys(n).length,r=i.reduce((h,f)=>h+(t[f].f||[]).length,0),o=i.reduce((h,f)=>h+(t[f].ph||0),0),a=[];try{a=JSON.parse(localStorage.getItem("qgal")||"[]")||[]}catch{}let l=document.createElement("div");l.id="defter",l.innerHTML='<div class="db"><button class="dx">\u2715</button><small>'+Ut(F("log.eyebrow"))+"</small><h2>"+Ut(F("log.title"))+'</h2><div class="did">'+(On.get()?"<span>"+Ut(On.label())+"</span>":"<span>"+Ut(F("id.none"))+"</span>")+'<button class="dk">'+Ut(F(On.get()?"id.edit":"id.create"))+"</button>"+(On.get()?'<button class="dc">'+Ut(F("id.card"))+"</button>":"")+'</div><div class="ds"><b>'+i.length+"</b> / "+s+" "+Ut(F("log.worlds"))+" \xB7 <b>"+r+"</b> "+Ut(F("log.traces"))+" \xB7 <b>"+o+"</b> "+Ut(F("log.photos"))+"</div>"+(i.length?"<ol>"+i.map(h=>{let f=t[h];return'<li data-k="'+Ut(h)+'"><span>'+Ut(n[h].title)+"</span><i>"+Ut(F("log.row",{v:f.v||1,f:(f.f||[]).length,p:f.ph||0}))+"</i></li>"}).join("")+"</ol>":"<p>"+Ut(F("log.empty"))+"</p>")+((window.__qulTop||[]).length?"<h3>"+Ut(F("log.community"))+'</h3><ol class="dt">'+window.__qulTop.filter(h=>n[h[0]]).map(h=>'<li data-k="'+Ut(h[0])+'"><span>'+Ut(n[h[0]].title)+"</span><i>"+Ut(F("log.found",{n:h[1]}))+"</i></li>").join("")+"</ol>":"")+(a.length?"<h3>"+Ut(F("log.gallery"))+'</h3><div class="dg">'+a.map((h,f)=>'<figure data-i="'+f+'"><img src="'+h.i+'" alt="'+Ut(h.t)+'" loading="lazy"><figcaption>'+Ut(h.t)+"</figcaption></figure>").join("")+"</div>":"")+(Tn.on()?"<h3>"+Ut(F("let.write"))+'</h3><form class="dl"><label>'+Ut(F("let.world"))+'<select name="k">'+Object.values(n).filter(h=>!["eirahoutmoss","araf-cherqa"].includes(h.key)).sort((h,f)=>h.title.localeCompare(f.title,"tr")).map(h=>'<option value="'+Ut(h.key)+'">'+Ut(h.title)+"</option>").join("")+"</select></label><label>"+Ut(F("let.text"))+'<textarea name="m" maxlength="900" minlength="20" required></textarea></label><p class="dn">'+Ut(F("let.note"))+'</p><button type="submit">'+Ut(F("let.send"))+'</button><span class="ds2" role="status"></span></form>':"")+"</div>",document.body.appendChild(l),l.querySelectorAll("figure").forEach(h=>h.onclick=()=>{let f=a[+h.dataset.i],g=document.createElement("div");g.className="dlb",g.innerHTML='<img src="'+f.i+'" alt=""><p>'+Ut(f.t)+" \xB7 "+new Date(f.d).toLocaleDateString()+"</p>",g.onclick=()=>g.remove(),l.appendChild(g)}),requestAnimationFrame(()=>l.classList.add("on"));let u=()=>{l.classList.remove("on"),setTimeout(()=>l.remove(),500)};l.querySelector(".dx").onclick=u;let c=l.querySelector("form.dl");c&&(c.onsubmit=async h=>{h.preventDefault();let f=On.get(),g=c.querySelector(".ds2");g.textContent="\u2026";let v=await Tn.sendLetter(c.k.value,c.m.value,f&&f.n||"").catch(()=>null);g.textContent=v&&v.tamam?F("let.ok"):F("let.err"),v&&v.tamam&&(c.m.value="")}),l.querySelector(".dk").onclick=()=>{u(),On.edit((window.QUL||{}).galaxies||[],()=>sh.open(n,e))};let d=l.querySelector(".dc");d&&(d.onclick=()=>On.card()),l.onclick=h=>{h.target===l&&u()},l.querySelectorAll("li").forEach(h=>h.onclick=()=>{u(),e(h.dataset.k)})}};var rh=[{k:"now",glow:n=>n.id==="home"?1.5:.45,label:n=>n.id==="home"?1:0},{k:"itf",glow:n=>n.id==="home"||n.id==="itf"?1.5:.45,label:n=>n.id==="home"||n.id==="itf"?1:0},{k:"conf",glow:()=>1,label:()=>1}],um=2,hm={init(n){let e=document.createElement("div");e.id="zaman",e.setAttribute("role","radiogroup"),e.setAttribute("aria-label",F("era.label")),e.innerHTML="<small>"+F("era.label")+'</small><div class="zt">'+rh.map((i,s)=>'<button role="radio" data-i="'+s+'"><b>'+F("era."+i.k+".y")+"</b><span>"+F("era."+i.k+".n")+"</span></button>").join("")+"</div>",document.body.appendChild(e);let t=(i,s)=>{um=i;let r=rh[i];ve.setEra(r.glow,r.label),e.querySelectorAll("button").forEach((o,a)=>{o.classList.toggle("on",a===i),o.setAttribute("aria-checked",a===i?"true":"false")}),document.body.dataset.era=r.k,!s&&n&&n(F("era."+r.k+".n"),F("era."+r.k+".d"))};e.querySelectorAll("button").forEach(i=>i.onclick=()=>t(+i.dataset.i)),t(2,!0)},era(){return rh[um].k}};var dm=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Zl=n=>new Promise(e=>setTimeout(e,n)),fm={on:!1,start({planets:n,Interaction:e,Surface:t,UI:i,stopAll:s}){if(this.on)return;this.on=!0,document.body.classList.add("sergi");let r=location.origin+location.pathname.replace(/galaksi\/index\.html$/,"");try{top!==self&&top.location.origin===location.origin&&(r=top.location.origin+top.location.pathname)}catch{}r=r.replace(/index\.html$/,"");let o=Ll(0,"M");o.addData(r),o.make();let a=document.createElement("div");a.id="sergi",a.innerHTML='<div class="sq">'+o.createSvgTag({cellSize:4,margin:2,scalable:!0})+"<span>"+dm(F("sergi.scan"))+'</span></div><div class="sc"><small></small><h2></h2><p></p></div><button class="sr">'+dm(F("sergi.resume"))+"</button>",document.body.appendChild(a);let l=(m,p,w)=>{let M=a.querySelector(".sc");M.classList.remove("on"),setTimeout(()=>{M.querySelector("small").textContent=m||"",M.querySelector("h2").textContent=p||"",M.querySelector("p").textContent=w||"",M.classList.add("on")},600)},u=n.filter(m=>!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(m.key)&&m.kind!=="esik"),c=!1,d=0,h=0,f=()=>{this.on&&(c=!0,a.classList.add("paused"),document.body.classList.add("sergip"),clearTimeout(d),d=setTimeout(g,9e4))},g=()=>{c=!1,a.classList.remove("paused"),document.body.classList.remove("sergip"),v(++h)};a.querySelector(".sr").onclick=m=>{m.stopPropagation(),g()},["pointerdown","keydown","wheel"].forEach(m=>addEventListener(m,p=>{if(!(p.target&&p.target.closest&&p.target.closest("#sergi .sr"))&&!c){f(),h++;try{t.close()}catch{}}},{capture:!0,passive:!0}));let v=async m=>{for(;this.on&&!c&&m===h;){let p=u[Math.floor(Math.random()*u.length)];if(s(),i.closePanel(),e.flyToPlanet(p.key),await Zl(600),await e.whenIdle(),c||m!==h||(l(p.eyebrow,p.title,String(p.desc||"").split(/(?<=[.!?])\s/)[0]),await Zl(7e3),c||m!==h)||(i.closePanel(),t.open(p),await Zl(3e4),c||m!==h))return;t.close(),await Zl(2200)}};setTimeout(()=>v(h),1500)}};var Hs=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),pm=()=>{try{return JSON.parse(localStorage.getItem("qmeclis")||"{}")||{}}catch{return{}}},ah={has(){return(window.QUL_MECLIS||[]).length>0},async open(){let n=window.QUL_MECLIS||[];if(!n.length)return;let e=0,t=Tn.on()?await Tn.results():{},i=document.createElement("div");i.id="meclis",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("on"));let s=()=>{i.classList.remove("on"),setTimeout(()=>i.remove(),400)},r=()=>{let o=n[e],a=pm()[o.id],l=t[o.id]||[],u=l.reduce((h,f)=>h+f,0);i.innerHTML='<div class="mb"><button class="mx" aria-label="'+Hs(F("id.close"))+'">\u2715</button><small>'+Hs(F("mec.eyebrow"))+" \xB7 "+(e+1)+"/"+n.length+"</small><h2>"+Hs(o.baslik)+'</h2><p class="mg">'+Hs(o.baglam)+'</p><p class="mq">'+Hs(o.soru)+'</p><div class="mo">'+o.secenekler.map((h,f)=>'<button data-j="'+f+'" class="'+(a===f?"on":"")+'"'+(a!=null?" disabled":"")+"><span>"+Hs(h)+"</span>"+(a!=null&&u?'<i style="width:'+Math.round(100*(l[f]||0)/u)+'%"></i><b>%'+Math.round(100*(l[f]||0)/u)+"</b>":"")+"</button>").join("")+'</div><p class="mn">'+Hs(a!=null?u?F("mec.total",{n:u}):F("mec.thanks"):F("mec.anon"))+'</p><div class="mr">'+(e>0?'<button class="mp">\u2039</button>':"")+(e<n.length-1?'<button class="mnx">'+Hs(F("mec.next"))+" \u203A</button>":"")+"</div></div>",i.querySelector(".mx").onclick=s;let c=i.querySelector(".mp"),d=i.querySelector(".mnx");c&&(c.onclick=()=>{e--,r()}),d&&(d.onclick=()=>{e++,r()}),i.querySelectorAll(".mo button").forEach(h=>h.onclick=async()=>{let f=+h.dataset.j,g=pm();g[o.id]=f;try{localStorage.setItem("qmeclis",JSON.stringify(g))}catch{}if(Tn.on()){let v=await Tn.vote(o.id,f).catch(()=>null);v&&v.sonuc&&(t[o.id]=v.sonuc)}r()})};i.addEventListener("keydown",o=>{o.key==="Escape"&&s()}),r()}};var mm={1:[1,.62,.3],2:[.45,.65,1],3:[.4,1,.55]},gm={init(n,e){let t={},i={1:0,2:0,3:0},s={1:0,2:0,3:0};n.planets.forEach(l=>{let u=((l.card||{}).aksiyom||"").match(/Aksiyom (\d)/);if(!u)return;let c=+u[1];(t[l.gal]=t[l.gal]||{1:0,2:0,3:0})[c]++,i[c]++,(l.card||{}).tahmini&&s[c]++});let r=l=>{let u=t[l];return u?[1,2,3].sort((c,d)=>u[d]-u[c])[0]:0},o=!1,a=document.createElement("div");a.id="akl",a.setAttribute("aria-live","polite"),a.innerHTML="<small>"+F("aks.title")+"</small>"+[1,2,3].map(l=>'<div><i style="background:rgb('+mm[l].map(u=>Math.round(u*255)).join(",")+')"></i><b>'+F("aks."+l)+"</b><span>"+F("aks.count",{n:i[l],e:s[l]})+"</span></div>").join("")+"<p>"+F("aks.note")+"</p>",document.body.appendChild(a),e.textContent=F("aks.btn"),e.onclick=()=>{o=!o,a.classList.toggle("on",o),e.classList.toggle("on",o),ve.setTint(o?l=>{let u=r(l.id);return u?mm[u]:l.bg?null:[.3,.3,.35]}:null)}}};var vm=document.documentElement.style,Kb=n=>new Promise(e=>setTimeout(e,n)),mo=0,go=[];function jl(){go.forEach(n=>ve.removeObj(n)),go=[],ve.setFov(50),vm.setProperty("--bar","0vh")}var oh={stop(){mo&&(mo++,jl())},async start(){let n=++mo,e=()=>n===mo;if(bt(),jl(),qe.flyToPlanet("dunya"),await qe.whenIdle(),!e()||(bt(),Et(F("pair.1h"),F("pair.1s")),await Kb(9e3),!e()))return;let t=ve.planetWorld("dunya"),i=ve.planetWorld("eirahoutmoss"),s=t.clone().add(i).multiplyScalar(.5),r=t.distanceTo(i),o=ve.getCamera(),a=new B(0,1,0),l=M=>{let k=[];for(let I=0;I<=80;I++){let S=I/80,_=Math.sin(Math.PI*S)*r*.22*M;k.push(new B().lerpVectors(t,i,S).add(new B(0,_,0)))}return k},u=[l(1),l(-1)],c=u.map(M=>{let k=new Bi(new Pt().setFromPoints(M),new Vn({color:12099839,transparent:!0,opacity:0,blending:Ft,depthWrite:!1}));return ve.addObj(k),go.push(k),k}),d=[t,i].map(M=>{let k=ve.makeLight();return k.position.copy(M),k.scale.set(r*.09,r*.09,1),go.push(k),k}),h=[];[0,1].forEach(M=>[0,.5].forEach(k=>[0,1].forEach(I=>{let S=ve.makeLight();S.scale.set(r*.035,r*.035,1),S.material.color.set(I?12099839:8376831),go.push(S),h.push({s:S,ci:M,o:k,dir:I})})));let f=o.position.clone(),g=qe.target().clone(),v=s.clone().add(new B(0,r*.3,r*.95)),m=0,p=0,w=0;vm.setProperty("--bar","7vh"),qe.drive(M=>{w+=M,m=Math.min(1,m+M/16);let k=Vi(m);o.position.lerpVectors(f,v,k),qe.target().lerpVectors(g,s,k),ve.setFov(50+6*Math.sin(Math.PI*k));let I=Math.min(1,m*2.2);if(c.forEach(S=>S.material.opacity=.55*I),d.forEach((S,_)=>S.material.opacity=.9*I),h.forEach(S=>{let _=(w*.06+S.o)%1,R=u[S.ci],x=(S.dir?1-_:_)*80,b=Math.min(79,Math.floor(x));S.s.position.lerpVectors(R[b],R[b+1],x-b),S.s.material.opacity=I*Math.sin(Math.PI*_)}),p<1&&m>.35&&(p=1,Et(F("pair.2h"),F("pair.2s"))),m>=1&&((!p||p<2)&&(p=2),w>27))return!1},async()=>{if(!e()){jl();return}mo=0,jl(),qe.flyToPlanet("eirahoutmoss"),await qe.whenIdle(),Et(F("pair.3h"),F("pair.3s"))})}};var ym=[["Ate\u015F Denizi",9,15],["Co\u015Fkun Deniz",17,35],["Yealem Krall\u0131\u011F\u0131",34,49.5],["Kisura",34.5,62],["Nehi \xC7\xF6lleri",26,71],["Ebed Denizi",60,43],["G\xFCm\xFC\u015F Deniz",89,37],["Ann Da\u011F\u0131 / Pla Tepesi",61,65],["Malu \xC7\xF6lleri",49,68],["Hpohri",55,73.5],["Sessizlik Orman\u0131",64,78],["Luya Kay\u0131p \u015Eehir",54,87]],Jt=null,Pi=1,Vs=0,Gs=0;function Jl(){let n=Jt.querySelector(".mw");n.style.transform=`translate(${Vs}px,${Gs}px) scale(${Pi})`,n.style.setProperty("--z",Pi)}function Zb(){Jt=document.createElement("div"),Jt.id="emap",Jt.innerHTML='<div class="mw"><img src="img/eirahoutmoss.jpg" alt="" draggable="false">'+ym.map((t,i)=>`<i class="hs" data-i="${i}" style="left:${t[1]}%;top:${t[2]}%"></i>`).join("")+'</div><div class="mi"><b></b><span></span><button></button></div><div class="mh"></div><button class="mx"></button>',document.body.appendChild(Jt),Jt.querySelector(".mx").onclick=xm,Jt.querySelector(".mh").textContent=F("map.hint"),Jt.querySelector(".mx").textContent=F("map.close");let n=null,e=0;Jt.addEventListener("pointerdown",t=>{n=[t.clientX,t.clientY,Vs,Gs],e=0}),addEventListener("pointermove",t=>{!n||!Jt.classList.contains("on")||(e=Math.hypot(t.clientX-n[0],t.clientY-n[1]),Vs=n[2]+t.clientX-n[0],Gs=n[3]+t.clientY-n[1],Jl())}),addEventListener("pointerup",()=>{n=null}),Jt.addEventListener("wheel",t=>{t.preventDefault();let i=t.deltaY<0?1.18:1/1.18,s=Math.min(8,Math.max(1,Pi*i)),r=Jt.getBoundingClientRect(),o=t.clientX-r.width/2,a=t.clientY-r.height/2;Vs=o-(o-Vs)*s/Pi,Gs=a-(a-Gs)*s/Pi,Pi=s,Pi===1&&(Vs=0,Gs=0),Jl()},{passive:!1}),Jt.querySelectorAll(".hs").forEach(t=>t.addEventListener("click",i=>{e>5||(i.stopPropagation(),jb(+t.dataset.i))}))}function jb(n){let e=ym[n],t=Jt.querySelector(".mi"),i=Jt.getBoundingClientRect(),s=Jt.querySelector(".mw"),r=s.offsetWidth,o=s.offsetHeight;Pi=2.6,Vs=-((e[1]/100-.5)*r)*Pi,Gs=-((e[2]/100-.5)*o)*Pi,Jl(),t.querySelector("b").textContent=e[0];let a=t.querySelector("span"),l=t.querySelector("button");e[0]==="Kisura"?(a.textContent=F("map.kis"),l.style.display="inline-block",l.textContent=F("map.enter"),l.onclick=()=>{xm(),Gi.kisura()}):(a.textContent=F("map.unwritten"),l.style.display="none"),t.classList.add("on")}function xm(){Jt&&(Jt.classList.remove("on"),Jt.querySelector(".mi").classList.remove("on"))}var _m={open(){Jt||Zb(),Pi=1,Vs=0,Gs=0,Jl(),Jt.classList.add("on")}};var Mm=document.documentElement.style,vo=0;function bm(){ve.setGray(0),ve.setTimeK(1),ve.setWarp(0),ve.setFov(50),Mm.setProperty("--bar","0vh")}var lh={stop(){vo&&(vo++,bm())},start(){let n=++vo;bt();let e=ve.getCamera(),t=ve.galaxy("esik").outer.position.clone(),i=ve.galaxy("eira").outer.position.clone(),s=i.clone().sub(t).normalize(),r=e.position.clone(),o=t.clone().add(new B(0,40,0)),a=i.clone().addScaledVector(s,-ve.galaxy("eira").g.R*2.4).add(new B(0,300,0)),l=0,u=0,c=!1,d=!1;Mm.setProperty("--bar","7vh"),qe.drive(h=>{l=Math.min(1,l+h/46);let f=Vi(l),g=1-f;e.position.set(g*g*r.x+2*g*f*o.x+f*f*a.x,g*g*r.y+2*g*f*o.y+f*f*a.y,g*g*r.z+2*g*f*o.z+f*f*a.z),qe.target().lerpVectors(t,i,Ba.smoothstep(f,.45,.9));let v=e.position.distanceTo(t),m=1-Ba.smoothstep(v,900,2600);if(v<300&&(c=!0),ve.setGray(m),ve.setTimeK(Math.max(0,1-m*1.05)),ve.setWarp(.1*(1-m)),u<1&&m>.3&&(u=1,Et(F("th.1h"),F("th.1s"))),u<2&&v<420&&(u=2,Et(F("th.2h"),F("th.2s"))),c&&!d&&m<.45){d=!0;let p=document.getElementById("flash");p.classList.remove("on"),p.offsetWidth,p.classList.add("on")}if(c&&u<3&&m<.25&&(u=3,Et(F("th.3h"),F("th.3s"))),l>=1)return!1},()=>{bm(),n===vo&&(vo=0,qe.focusGalaxy("eira"))})}};var Sm=document.documentElement.style,Jb=n=>new Promise(e=>setTimeout(e,n)),yo=0;function ch(){ve.setWarp(0),ve.setFov(50),Sm.setProperty("--bar","0vh")}var $l={stop(){yo&&(yo++,Gi.close(),ch())},async start(){let n=++yo,e=()=>n===yo;if(bt(),qe.focusGalaxy("eira"),await qe.whenIdle(),!e()||(qe.flyToPlanet("eirahoutmoss"),await qe.whenIdle(),!e())||(await Jb(1200),!e())||(await Gi.kisura({auto:!0}),!e()))return;let t=ve.getCamera(),i=ve.planetWorld("eirahoutmoss"),s=t.position.clone().sub(i),r=s.length(),o=24e3,a=s.clone().normalize(),l=new B(2600,0,0),u=i.clone(),c=new B(0,1,0),d=0,h=1;bt(),Sm.setProperty("--bar","7vh"),ve.setWarp(.16),Et(F("scale.2h"),F("scale.2s")),qe.drive(f=>{d=Math.min(1,d+f/50);let g=Vi(d),v=r*Math.pow(o/r,g),m=a.clone().applyAxisAngle(c,g*.9);if(t.position.copy(i).addScaledVector(m,v),qe.target().lerpVectors(u,l,Math.pow(g,2.2)),ve.setFov(50+8*Math.sin(Math.PI*g)),h<2&&v>1200&&(h=2,Et(F("scale.3h"),F("scale.3s"))),h<3&&v>6e3&&(h=3,Et(F("scale.4h"),F("scale.4s"))),h<4&&v>16e3&&(h=4,Et(F("scale.5h"),F("scale.5s"))),d>=1)return!1},()=>{if(!e()){ch();return}ch(),yo=0,qe.reset()})}};var Em=document.documentElement.style;function wm(){ve.setFall(0),ve.setSpin(1),ve.setFov(50),Em.setProperty("--bar","0vh")}function Tm(n){let e=ve.galaxy(n);if(!e||!e.bh)return;let t=e.outer.position.clone(),i=e.bh.rh,s=ve.getCamera(),r=s.position.clone().sub(t),o=Math.max(r.length(),i*15),a=Math.atan2(r.z,r.x),l=0,u=!1,c=0;bt(),Et(F("fall.1h"),F("fall.1s")),qe.drive(d=>{l=Math.min(1,l+d/34);let h=Math.pow(l,1.5),f=i*(1.22+(o/i-1.22)*Math.pow(1-h,2.3)),g=a+h*11;if(s.position.set(t.x+Math.cos(g)*f,t.y+f*.2*(1-h)+i*.04,t.z+Math.sin(g)*f),qe.target().copy(t),ve.setFall(Math.pow(Math.max(0,(l-.4)/.6),1.3)),ve.setSpin(1+60*h*h*h),ve.setFov(50+26*h),Em.setProperty("--bar",(7*Math.min(1,l*8)).toFixed(2)+"vh"),c<1&&l>.26&&(c=1,Et(F("fall.2h"),F("fall.2s"))),c<2&&l>.52&&(c=2,Et(F("fall.3h"),F("fall.3s"))),c<3&&l>.8&&(c=3,Et(F("fall.4h"),F("fall.4s"))),l>=1)return u=!0,!1},()=>{if(!u){wm();return}ve.setFall(1),setTimeout(()=>Et(F("fall.5h"),F("fall.5s")),1500),setTimeout(()=>{let d=1,h=setInterval(()=>{d-=.02,ve.setFall(Math.max(0,d)),d<=0&&(clearInterval(h),wm(),qe.focusBH(n))},40)},12e3)})}function Am(n){let e=ve.galaxy(n),t=ve.galaxy("home");if(!e||!t)return;let i=e.outer.position.clone(),s=t.outer.position.clone(),r=s.clone().sub(i).normalize(),o=i.distanceTo(s)*232.6,a=ve.makeLight();a.scale.set(220,220,1);let l=0,u=new B,c=ve.getCamera();bt(),Et(e.g.name,F("light.start",{y:qa(o)}));let d=!0;qe.drive(h=>{if(l=Math.min(1,l+h/18),u.lerpVectors(i,s,Vi(l)),a.position.copy(u),c.position.copy(u).addScaledVector(r,-520).add(new B(0,150,0)),qe.target().copy(u).addScaledVector(r,400),d&&(d=!1,document.documentElement.style.setProperty("--bar","7vh"),ve.setFov(58)),l>=1)return da(null),ve.removeObj(a),Et(F("light.endH"),F("light.endS")),!1},()=>{da(null),ve.removeObj(a)})}function en(){Pl.stop(),$l.stop(),lh.stop(),oh.stop()}var Fn=window.QUL,ht=n=>document.getElementById(n);qf(Fn);var $b=n=>{let e=Fn.galaxies.find(i=>i.id==="home").pos,t=Math.hypot(n.pos[0]-e[0],n.pos[1]-e[1],n.pos[2]-e[2])*232.6;return t>=1e6?(t/1e6).toFixed(1).replace(".",",")+" "+F("dist.million"):qa(t)},ps={};Fn.planets.forEach(n=>ps[n.key]=n);var Qb=n=>{let e=Fn.bh[n];return{key:"bh-"+n,gal:n,bh:!0,title:e.title,eyebrow:e.eyebrow,desc:e.desc,card:{rows:e.rows.concat([["Galaksi",Fn.galaxies.find(t=>t.id===n).name]])}}},xr=n=>{try{window.__crumb&&window.__crumb(n)}catch{}};xr("veri haz\u0131r");Lu(Fn);xr("aray\xFCz haz\u0131r");ve.init(ht("gl"),Fn);xr("Render.init bitti");qe.init(ve.getRenderer(),ve.getCamera(),{titleOf:n=>ps[n].title,bhTitle:n=>Fn.bh[n].title,onUser:()=>en(),onFlight:da,tip:Iu,onPlanet:n=>Cl(ps[n]),onBH:n=>Cl(Qb(n)),onGalaxy:n=>Et(n.name,n.id==="eira"?F("gal.eira"):n.id==="esik"?F("gal.esik"):n.bg?F("gal.unreg"):F("gal.count",{n:ve.planetsOf(n.id).length})+(n.id==="home"?"":" \xB7 "+F("gal.light",{y:$b(n)}))),onFocus:(n,e)=>{try{Tn.where(n&&(n.id||n.key||n.name))}catch{}bt(),Du(n,e,{planet:t=>qe.flyToPlanet(t),bh:t=>qe.focusBH(t),light:t=>{en(),Am(t)}},ps,Fn.bh)}});ht("pc").onclick=bt;ht("back").onclick=()=>{en(),bt(),qe.reset()};document.addEventListener("pointerdown",n=>{n.target.id!=="tour"&&Pl.stop(),n.target.id!=="drift"&&Uu.stop(),n.target.closest("#kis,#scl")||$l.stop()});Pl.init(ht("tour"),Fn);{let n=document.createElement("button");n.id="drift",document.body.appendChild(n),Uu.init(n,Fn),ip(n)}try{Ip(Fn,qe)}catch{}ht("tour").textContent=F("ui.tour");ht("hush").textContent=F("ui.hush");ht("lang").title=F("ui.lang");var e2=$u.ids.filter(n=>n.id!=="earth").map(n=>({t:"sol",id:n.id,label:vn==="en"?n.en:n.tr,sub:"G\xFCne\u015F Sistemi",alias:n.tr+" "+n.en+(n.id==="sun"?" solar system gunes sistemi":"")}));async function Pm(n){en(),bt();try{qe.focusGalaxy("home"),await qe.whenIdle()}catch{}$u.open({focus:n})||ha&&ha(F("solar.fail"))}zu(Fn,n=>{if(n.t==="sol"){Pm(n.id);return}en(),n.t==="planet"?qe.flyToPlanet(n.key):n.t==="bh"?qe.focusBH(n.id):qe.focusGalaxy(n.id)},e2);{let n=document.getElementById("sol0");n&&(n.textContent=F("solar.btn"),n.onclick=()=>Pm("earth"))}var uh=performance.now(),hh=0;(function n(e){let t=Math.min(.1,(e-uh)/1e3);uh=e;let i=performance.now();if(qe.update(t),ve.frame(e,t),hh<6){hh++;try{ve.getRenderer().getContext().finish()}catch{}xr("kare "+hh+": "+Math.round(performance.now()-i)+" ms")}{let s=ve.fx();Qu.update(s.lens,s.warp,s.fall)}requestAnimationFrame(n)})(uh);ht("load").classList.add("hide");var Rm=0;[1,2,3].forEach(n=>{let e=F("intro."+n+".h"),t=F("intro."+n+".s");setTimeout(()=>Et(e,t),Rm),Rm+=Ka(e,t)*1e3*.97});xr("ses ba\u015Fl\u0131yor");Qu.init();xr("ses haz\u0131r");qe.intro();xr("a\xE7\u0131l\u0131\u015F ba\u015Flad\u0131");try{hm.init((n,e)=>Et(n,e)),On.apply()}catch{}/[?&]sergi=1/.test(location.search)&&qe.whenIdle().then(()=>fm.start({planets:Fn.planets,Interaction:qe,Surface:Yn,UI:qi,stopAll:en}));{let n=new URLSearchParams(location.search),e=n.get("planet");e&&ps[e]&&qe.whenIdle().then(()=>{qe.flyToPlanet(e),n.get("yuzey")==="1"&&!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(e)&&setTimeout(()=>qe.whenIdle().then(()=>{en(),bt(),Yn.open(ps[e])}),300)})}window.addEventListener("fall",n=>{en(),bt(),Tm(n.detail)});window.addEventListener("land",n=>{en(),bt(),Gi.land(n.detail)});window.addEventListener("kisura",()=>{en(),bt(),Gi.kisura()});var Cm,km=()=>{document.body.classList.remove("idle"),clearTimeout(Cm),Cm=setTimeout(()=>document.body.classList.add("idle"),7e3)};["pointermove","pointerdown","keydown","wheel"].forEach(n=>addEventListener(n,km));km();var t2=ve.getCamera(),n2=n=>n>=1e6?(n/1e6).toFixed(1).replace(".",",")+" "+F("dist.million"):qa(n);setInterval(()=>{fs&&(ht("carec").innerHTML=F("care.count",{n:ve.careCount()})+"<small>"+F("care.note")+"</small>");let n=t2.position.distanceTo(ve.bhWorld("home"))*232.6;ht("dist").innerHTML=F("dist.label")+"<b>"+n2(n)+" "+F("dist.unit")+"</b><i>2,7 K</i>"},250);var fs=!1;ht("care").textContent=F("care.btn");ht("care").onclick=()=>{fs=!fs,ht("care").textContent=F(fs?"care.btnOn":"care.btn"),ht("carec").classList.toggle("on",fs),ve.setCare(fs),fs&&(en(),bt(),qe.reset(),Et(F("care.1h"),F("care.1s")))};ht("pair").textContent=F("pair.btn");ht("pair").onclick=()=>{en(),oh.start()};window.__Surface=Yn;window.__qul={Interaction:qe,Render:ve};window.addEventListener("esik",()=>{en(),bt(),Kl.open()});var Lm=()=>{let n=document.getElementById("tani");if(n){n.remove();return}n=document.createElement("pre"),n.id="tani",n.style.cssText="position:fixed;left:8px;top:8px;z-index:99;max-width:92vw;max-height:80vh;overflow:auto;margin:0;padding:10px 12px;background:#000d;color:#9fe;font:11px/1.45 monospace;border:1px solid #365;white-space:pre-wrap;user-select:all",n.textContent=`QUL TANI
`+JSON.stringify(window.__qulGpu||{},null,1)+`
hata: `+JSON.stringify(window.__qulErr||[])+`
y\xFCzey: `+(window.__qulSurfFail||"-")+`
(kapatmak i\xE7in F9; bu metni bana g\xF6nder)`,document.body.appendChild(n)};addEventListener("keydown",n=>{n.key==="F9"&&(n.preventDefault(),Lm())});/[?&]tani=1/.test(location.search)&&setTimeout(Lm,2500);window.addEventListener("qulSurfaceFail",()=>{let n=document.getElementById("warp");n&&n.remove();try{ve.pause(!1)}catch{}ha(F("surf.fail"))});window.addEventListener("qulGo",n=>{let e=n.detail||{};if(e.warp){let t=document.createElement("div");t.id="warp",document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("on")),setTimeout(()=>t.classList.remove("on"),4200),setTimeout(()=>t.remove(),5200)}Yn.close(),e.planet&&ps[e.planet]?setTimeout(()=>Yn.open(ps[e.planet]),1900):e.gal&&setTimeout(()=>{try{qe.focusGalaxy(e.gal)}catch{}},400)});window.addEventListener("surface",n=>{en(),bt(),Yn.open(n.detail)});window.addEventListener("emap",()=>{en(),bt(),_m.open()});ht("tt").textContent=F("tools.btn");ht("tt").onclick=()=>ht("tools").classList.toggle("open");ht("tools").addEventListener("click",n=>{let e=n.target.closest("button");e&&e.id!=="tt"&&setTimeout(()=>ht("tools").classList.remove("open"),120)});document.addEventListener("pointerdown",n=>{n.target.closest("#tools")||ht("tools").classList.remove("open")});ht("thr").textContent=F("th.btn");ht("thr").onclick=()=>{en(),lh.start()};var xo=!1,dh=!1;ht("cmd").textContent=F("cmd.btn");ht("cmd").onclick=()=>{xo=!xo,en(),bt(),ve.setHolo(xo?1:0),ht("cmd").textContent=F(xo?"cmd.on":"cmd.btn"),xo?(qe.view([2600,16500,1100],[2600,0,0]),Et(F("cmd.1h"),F("cmd.1s")),fs||(dh=!0,ht("care").click())):(qe.reset(),dh&&fs&&ht("care").click(),dh=!1)};ht("snap").textContent=F("snap.btn");{let n=ht("mec");n&&(ah.has()?(n.textContent=F("mec.btn"),n.onclick=()=>{en(),ah.open()}):n.remove())}{let n=ht("aks");if(n)try{gm.init(Fn,n)}catch{}}ht("log").textContent=F("log.btn");ht("log").onclick=()=>{en(),sh.open(ps,n=>qe.flyToPlanet(n))};try{Tn.start()}catch{}ht("snap").onclick=()=>{let n=new Image;n.onload=()=>{let e=n.width,t=n.height,i=Math.round(e/2.39),s=Math.round((t-i)/2),r=document.createElement("canvas");r.width=e,r.height=i;let o=r.getContext("2d");o.drawImage(n,0,s,e,i,0,0,e,i);let a=e/1600;o.fillStyle="rgba(0,0,0,.4)",o.fillRect(0,i-92*a,e,92*a),o.fillStyle="#e8b84b",o.font=26*a+"px Georgia, serif",o.fillText(F("snap.mark").toUpperCase().split("").join(" "),40*a,i-50*a),o.fillStyle="#d3c7a8",o.font=18*a+"px Georgia, serif",o.fillText((ht("where").textContent||F("ui.title"))+" \xB7 "+ht("dist").innerText.replace(/\n+/g," \xB7 "),40*a,i-18*a);let l=document.createElement("a");l.href=r.toDataURL("image/png"),l.download="qul-efsaneleri.png",l.click(),ha(F("snap.done"))},n.src=ve.snapshot()};ht("nar").textContent=F("nar.btn");Ya.ok||(ht("nar").style.display="none");ht("nar").onclick=()=>{ht("nar").textContent=F(Ya.toggle()?"nar.on":"nar.btn")};ht("scl").textContent=F("scale.btn");ht("scl").onclick=()=>{en(),$l.start()};ht("hush").onclick=()=>{window.__hush=!window.__hush,ht("hush").textContent=F(window.__hush?"ui.hushOn":"ui.hush");try{parent.postMessage({qulDuck:!!window.__hush},"*")}catch{}};var _o=ht("lang");(window.QUL_LANGS||[{c:"tr",n:"T\xFCrk\xE7e"}]).forEach(n=>{let e=document.createElement("option");e.value=n.c,e.textContent=n.n,_o.appendChild(e)});_o.value=window.QUL_CODE||"tr";_o.onchange=()=>{try{localStorage.setItem("qlang",_o.value)}catch{}let n=new URL(location.href);n.searchParams.set("lang",_o.value),location.href=n.toString()};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
