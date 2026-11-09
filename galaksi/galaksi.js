(()=>{var kd=Object.create;var Qo=Object.defineProperty;var Dd=Object.getOwnPropertyDescriptor;var Ud=Object.getOwnPropertyNames;var Nd=Object.getPrototypeOf,Od=Object.prototype.hasOwnProperty;var zd=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},Fd=(n,e)=>{for(var t in e)Qo(n,t,{get:e[t],enumerable:!0})},Bd=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ud(e))!Od.call(n,s)&&s!==t&&Qo(n,s,{get:()=>e[s],enumerable:!(i=Dd(e,s))||i.enumerable});return n};var Hd=(n,e,t)=>(t=n!=null?kd(Nd(n)):{},Bd(e||!n||!n.__esModule?Qo(t,"default",{value:n,enumerable:!0}):t,n));var ad=zd((sd,rd)=>{var id=(function(){var n=function(M,x){var w=236,C=17,y=M,S=t[x],A=null,g=0,b=null,R=[],z={},K=function(q,X){g=y*4+17,A=(function(W){for(var $=new Array(W),Q=0;Q<W;Q+=1){$[Q]=new Array(W);for(var le=0;le<W;le+=1)$[Q][le]=null}return $})(g),O(0,0),O(g-7,0),O(0,g-7),G(),H(),Y(q,X),y>=7&&Z(q),b==null&&(b=Se(y,S,R)),ae(b,X)},O=function(q,X){for(var W=-1;W<=7;W+=1)if(!(q+W<=-1||g<=q+W))for(var $=-1;$<=7;$+=1)X+$<=-1||g<=X+$||(0<=W&&W<=6&&($==0||$==6)||0<=$&&$<=6&&(W==0||W==6)||2<=W&&W<=4&&2<=$&&$<=4?A[q+W][X+$]=!0:A[q+W][X+$]=!1)},k=function(){for(var q=0,X=0,W=0;W<8;W+=1){K(!0,W);var $=s.getLostPoint(z);(W==0||q>$)&&(q=$,X=W)}return X},H=function(){for(var q=8;q<g-8;q+=1)A[q][6]==null&&(A[q][6]=q%2==0);for(var X=8;X<g-8;X+=1)A[6][X]==null&&(A[6][X]=X%2==0)},G=function(){for(var q=s.getPatternPosition(y),X=0;X<q.length;X+=1)for(var W=0;W<q.length;W+=1){var $=q[X],Q=q[W];if(A[$][Q]==null)for(var le=-2;le<=2;le+=1)for(var Ae=-2;Ae<=2;Ae+=1)le==-2||le==2||Ae==-2||Ae==2||le==0&&Ae==0?A[$+le][Q+Ae]=!0:A[$+le][Q+Ae]=!1}},Z=function(q){for(var X=s.getBCHTypeNumber(y),W=0;W<18;W+=1){var $=!q&&(X>>W&1)==1;A[Math.floor(W/3)][W%3+g-8-3]=$}for(var W=0;W<18;W+=1){var $=!q&&(X>>W&1)==1;A[W%3+g-8-3][Math.floor(W/3)]=$}},Y=function(q,X){for(var W=S<<3|X,$=s.getBCHTypeInfo(W),Q=0;Q<15;Q+=1){var le=!q&&($>>Q&1)==1;Q<6?A[Q][8]=le:Q<8?A[Q+1][8]=le:A[g-15+Q][8]=le}for(var Q=0;Q<15;Q+=1){var le=!q&&($>>Q&1)==1;Q<8?A[8][g-Q-1]=le:Q<9?A[8][15-Q-1+1]=le:A[8][15-Q-1]=le}A[g-8][8]=!q},ae=function(q,X){for(var W=-1,$=g-1,Q=7,le=0,Ae=s.getMaskFunction(X),V=g-1;V>0;V-=2)for(V==6&&(V-=1);;){for(var Ze=0;Ze<2;Ze+=1)if(A[$][V-Ze]==null){var Ce=!1;le<q.length&&(Ce=(q[le]>>>Q&1)==1);var we=Ae($,V-Ze);we&&(Ce=!Ce),A[$][V-Ze]=Ce,Q-=1,Q==-1&&(le+=1,Q=7)}if($+=W,$<0||g<=$){$-=W,W=-W;break}}},oe=function(q,X){for(var W=0,$=0,Q=0,le=new Array(X.length),Ae=new Array(X.length),V=0;V<X.length;V+=1){var Ze=X[V].dataCount,Ce=X[V].totalCount-Ze;$=Math.max($,Ze),Q=Math.max(Q,Ce),le[V]=new Array(Ze);for(var we=0;we<le[V].length;we+=1)le[V][we]=255&q.getBuffer()[we+W];W+=Ze;var De=s.getErrorCorrectPolynomial(Ce),$e=o(le[V],De.getLength()-1),Ke=$e.mod(De);Ae[V]=new Array(De.getLength()-1);for(var we=0;we<Ae[V].length;we+=1){var L=we+Ke.getLength()-Ae[V].length;Ae[V][we]=L>=0?Ke.getAt(L):0}}for(var E=0,we=0;we<X.length;we+=1)E+=X[we].totalCount;for(var j=new Array(E),_e=0,we=0;we<$;we+=1)for(var V=0;V<X.length;V+=1)we<le[V].length&&(j[_e]=le[V][we],_e+=1);for(var we=0;we<Q;we+=1)for(var V=0;V<X.length;V+=1)we<Ae[V].length&&(j[_e]=Ae[V][we],_e+=1);return j},Se=function(q,X,W){for(var $=a.getRSBlocks(q,X),Q=l(),le=0;le<W.length;le+=1){var Ae=W[le];Q.put(Ae.getMode(),4),Q.put(Ae.getLength(),s.getLengthInBits(Ae.getMode(),q)),Ae.write(Q)}for(var V=0,le=0;le<$.length;le+=1)V+=$[le].dataCount;if(Q.getLengthInBits()>V*8)throw"code length overflow. ("+Q.getLengthInBits()+">"+V*8+")";for(Q.getLengthInBits()+4<=V*8&&Q.put(0,4);Q.getLengthInBits()%8!=0;)Q.putBit(!1);for(;!(Q.getLengthInBits()>=V*8||(Q.put(w,8),Q.getLengthInBits()>=V*8));)Q.put(C,8);return oe(Q,$)};z.addData=function(q,X){X=X||"Byte";var W=null;switch(X){case"Numeric":W=u(q);break;case"Alphanumeric":W=c(q);break;case"Byte":W=f(q);break;case"Kanji":W=h(q);break;default:throw"mode:"+X}R.push(W),b=null},z.isDark=function(q,X){if(q<0||g<=q||X<0||g<=X)throw q+","+X;return A[q][X]},z.getModuleCount=function(){return g},z.make=function(){if(y<1){for(var q=1;q<40;q++){for(var X=a.getRSBlocks(q,S),W=l(),$=0;$<R.length;$++){var Q=R[$];W.put(Q.getMode(),4),W.put(Q.getLength(),s.getLengthInBits(Q.getMode(),q)),Q.write(W)}for(var le=0,$=0;$<X.length;$++)le+=X[$].dataCount;if(W.getLengthInBits()<=le*8)break}y=q}K(!1,k())},z.createTableTag=function(q,X){q=q||2,X=typeof X>"u"?q*4:X;var W="";W+='<table style="',W+=" border-width: 0px; border-style: none;",W+=" border-collapse: collapse;",W+=" padding: 0px; margin: "+X+"px;",W+='">',W+="<tbody>";for(var $=0;$<z.getModuleCount();$+=1){W+="<tr>";for(var Q=0;Q<z.getModuleCount();Q+=1)W+='<td style="',W+=" border-width: 0px; border-style: none;",W+=" border-collapse: collapse;",W+=" padding: 0px; margin: 0px;",W+=" width: "+q+"px;",W+=" height: "+q+"px;",W+=" background-color: ",W+=z.isDark($,Q)?"#000000":"#ffffff",W+=";",W+='"/>';W+="</tr>"}return W+="</tbody>",W+="</table>",W},z.createSvgTag=function(q,X,W,$){var Q={};typeof arguments[0]=="object"&&(Q=arguments[0],q=Q.cellSize,X=Q.margin,W=Q.alt,$=Q.title),q=q||2,X=typeof X>"u"?q*4:X,W=typeof W=="string"?{text:W}:W||{},W.text=W.text||null,W.id=W.text?W.id||"qrcode-description":null,$=typeof $=="string"?{text:$}:$||{},$.text=$.text||null,$.id=$.text?$.id||"qrcode-title":null;var le=z.getModuleCount()*q+X*2,Ae,V,Ze,Ce,we="",De;for(De="l"+q+",0 0,"+q+" -"+q+",0 0,-"+q+"z ",we+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',we+=Q.scalable?"":' width="'+le+'px" height="'+le+'px"',we+=' viewBox="0 0 '+le+" "+le+'" ',we+=' preserveAspectRatio="xMinYMin meet"',we+=$.text||W.text?' role="img" aria-labelledby="'+te([$.id,W.id].join(" ").trim())+'"':"",we+=">",we+=$.text?'<title id="'+te($.id)+'">'+te($.text)+"</title>":"",we+=W.text?'<description id="'+te(W.id)+'">'+te(W.text)+"</description>":"",we+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',we+='<path d="',Ze=0;Ze<z.getModuleCount();Ze+=1)for(Ce=Ze*q+X,Ae=0;Ae<z.getModuleCount();Ae+=1)z.isDark(Ze,Ae)&&(V=Ae*q+X,we+="M"+V+","+Ce+De);return we+='" stroke="transparent" fill="black"/>',we+="</svg>",we},z.createDataURL=function(q,X){q=q||2,X=typeof X>"u"?q*4:X;var W=z.getModuleCount()*q+X*2,$=X,Q=W-X;return d(W,W,function(le,Ae){if($<=le&&le<Q&&$<=Ae&&Ae<Q){var V=Math.floor((le-$)/q),Ze=Math.floor((Ae-$)/q);return z.isDark(Ze,V)?0:1}else return 1})},z.createImgTag=function(q,X,W){q=q||2,X=typeof X>"u"?q*4:X;var $=z.getModuleCount()*q+X*2,Q="";return Q+="<img",Q+=' src="',Q+=z.createDataURL(q,X),Q+='"',Q+=' width="',Q+=$,Q+='"',Q+=' height="',Q+=$,Q+='"',W&&(Q+=' alt="',Q+=te(W),Q+='"'),Q+="/>",Q};var te=function(q){for(var X="",W=0;W<q.length;W+=1){var $=q.charAt(W);switch($){case"<":X+="&lt;";break;case">":X+="&gt;";break;case"&":X+="&amp;";break;case'"':X+="&quot;";break;default:X+=$;break}}return X},de=function(q){var X=1;q=typeof q>"u"?X*2:q;var W=z.getModuleCount()*X+q*2,$=q,Q=W-q,le,Ae,V,Ze,Ce,we={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},De={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},$e="";for(le=0;le<W;le+=2){for(V=Math.floor((le-$)/X),Ze=Math.floor((le+1-$)/X),Ae=0;Ae<W;Ae+=1)Ce="\u2588",$<=Ae&&Ae<Q&&$<=le&&le<Q&&z.isDark(V,Math.floor((Ae-$)/X))&&(Ce=" "),$<=Ae&&Ae<Q&&$<=le+1&&le+1<Q&&z.isDark(Ze,Math.floor((Ae-$)/X))?Ce+=" ":Ce+="\u2588",$e+=q<1&&le+1>=Q?De[Ce]:we[Ce];$e+=`
`}return W%2&&q>0?$e.substring(0,$e.length-W-1)+Array(W+1).join("\u2580"):$e.substring(0,$e.length-1)};return z.createASCII=function(q,X){if(q=q||1,q<2)return de(X);q-=1,X=typeof X>"u"?q*2:X;var W=z.getModuleCount()*q+X*2,$=X,Q=W-X,le,Ae,V,Ze,Ce=Array(q+1).join("\u2588\u2588"),we=Array(q+1).join("  "),De="",$e="";for(le=0;le<W;le+=1){for(V=Math.floor((le-$)/q),$e="",Ae=0;Ae<W;Ae+=1)Ze=1,$<=Ae&&Ae<Q&&$<=le&&le<Q&&z.isDark(V,Math.floor((Ae-$)/q))&&(Ze=0),$e+=Ze?Ce:we;for(V=0;V<q;V+=1)De+=$e+`
`}return De.substring(0,De.length-1)},z.renderTo2dContext=function(q,X){X=X||2;for(var W=z.getModuleCount(),$=0;$<W;$++)for(var Q=0;Q<W;Q++)q.fillStyle=z.isDark($,Q)?"black":"white",q.fillRect($*X,Q*X,X,X)},z};n.stringToBytesFuncs={default:function(M){for(var x=[],w=0;w<M.length;w+=1){var C=M.charCodeAt(w);x.push(C&255)}return x}},n.stringToBytes=n.stringToBytesFuncs.default,n.createStringToBytes=function(M,x){var w=(function(){for(var y=_(M),S=function(){var H=y.read();if(H==-1)throw"eof";return H},A=0,g={};;){var b=y.read();if(b==-1)break;var R=S(),z=S(),K=S(),O=String.fromCharCode(b<<8|R),k=z<<8|K;g[O]=k,A+=1}if(A!=x)throw A+" != "+x;return g})(),C=63;return function(y){for(var S=[],A=0;A<y.length;A+=1){var g=y.charCodeAt(A);if(g<128)S.push(g);else{var b=w[y.charAt(A)];typeof b=="number"?(b&255)==b?S.push(b):(S.push(b>>>8),S.push(b&255)):S.push(C)}}return S}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},t={L:1,M:0,Q:3,H:2},i={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s=(function(){var M=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],x=1335,w=7973,C=21522,y={},S=function(A){for(var g=0;A!=0;)g+=1,A>>>=1;return g};return y.getBCHTypeInfo=function(A){for(var g=A<<10;S(g)-S(x)>=0;)g^=x<<S(g)-S(x);return(A<<10|g)^C},y.getBCHTypeNumber=function(A){for(var g=A<<12;S(g)-S(w)>=0;)g^=w<<S(g)-S(w);return A<<12|g},y.getPatternPosition=function(A){return M[A-1]},y.getMaskFunction=function(A){switch(A){case i.PATTERN000:return function(g,b){return(g+b)%2==0};case i.PATTERN001:return function(g,b){return g%2==0};case i.PATTERN010:return function(g,b){return b%3==0};case i.PATTERN011:return function(g,b){return(g+b)%3==0};case i.PATTERN100:return function(g,b){return(Math.floor(g/2)+Math.floor(b/3))%2==0};case i.PATTERN101:return function(g,b){return g*b%2+g*b%3==0};case i.PATTERN110:return function(g,b){return(g*b%2+g*b%3)%2==0};case i.PATTERN111:return function(g,b){return(g*b%3+(g+b)%2)%2==0};default:throw"bad maskPattern:"+A}},y.getErrorCorrectPolynomial=function(A){for(var g=o([1],0),b=0;b<A;b+=1)g=g.multiply(o([1,r.gexp(b)],0));return g},y.getLengthInBits=function(A,g){if(1<=g&&g<10)switch(A){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:return 8;case e.MODE_KANJI:return 8;default:throw"mode:"+A}else if(g<27)switch(A){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw"mode:"+A}else if(g<41)switch(A){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw"mode:"+A}else throw"type:"+g},y.getLostPoint=function(A){for(var g=A.getModuleCount(),b=0,R=0;R<g;R+=1)for(var z=0;z<g;z+=1){for(var K=0,O=A.isDark(R,z),k=-1;k<=1;k+=1)if(!(R+k<0||g<=R+k))for(var H=-1;H<=1;H+=1)z+H<0||g<=z+H||k==0&&H==0||O==A.isDark(R+k,z+H)&&(K+=1);K>5&&(b+=3+K-5)}for(var R=0;R<g-1;R+=1)for(var z=0;z<g-1;z+=1){var G=0;A.isDark(R,z)&&(G+=1),A.isDark(R+1,z)&&(G+=1),A.isDark(R,z+1)&&(G+=1),A.isDark(R+1,z+1)&&(G+=1),(G==0||G==4)&&(b+=3)}for(var R=0;R<g;R+=1)for(var z=0;z<g-6;z+=1)A.isDark(R,z)&&!A.isDark(R,z+1)&&A.isDark(R,z+2)&&A.isDark(R,z+3)&&A.isDark(R,z+4)&&!A.isDark(R,z+5)&&A.isDark(R,z+6)&&(b+=40);for(var z=0;z<g;z+=1)for(var R=0;R<g-6;R+=1)A.isDark(R,z)&&!A.isDark(R+1,z)&&A.isDark(R+2,z)&&A.isDark(R+3,z)&&A.isDark(R+4,z)&&!A.isDark(R+5,z)&&A.isDark(R+6,z)&&(b+=40);for(var Z=0,z=0;z<g;z+=1)for(var R=0;R<g;R+=1)A.isDark(R,z)&&(Z+=1);var Y=Math.abs(100*Z/g/g-50)/5;return b+=Y*10,b},y})(),r=(function(){for(var M=new Array(256),x=new Array(256),w=0;w<8;w+=1)M[w]=1<<w;for(var w=8;w<256;w+=1)M[w]=M[w-4]^M[w-5]^M[w-6]^M[w-8];for(var w=0;w<255;w+=1)x[M[w]]=w;var C={};return C.glog=function(y){if(y<1)throw"glog("+y+")";return x[y]},C.gexp=function(y){for(;y<0;)y+=255;for(;y>=256;)y-=255;return M[y]},C})();function o(M,x){if(typeof M.length>"u")throw M.length+"/"+x;var w=(function(){for(var y=0;y<M.length&&M[y]==0;)y+=1;for(var S=new Array(M.length-y+x),A=0;A<M.length-y;A+=1)S[A]=M[A+y];return S})(),C={};return C.getAt=function(y){return w[y]},C.getLength=function(){return w.length},C.multiply=function(y){for(var S=new Array(C.getLength()+y.getLength()-1),A=0;A<C.getLength();A+=1)for(var g=0;g<y.getLength();g+=1)S[A+g]^=r.gexp(r.glog(C.getAt(A))+r.glog(y.getAt(g)));return o(S,0)},C.mod=function(y){if(C.getLength()-y.getLength()<0)return C;for(var S=r.glog(C.getAt(0))-r.glog(y.getAt(0)),A=new Array(C.getLength()),g=0;g<C.getLength();g+=1)A[g]=C.getAt(g);for(var g=0;g<y.getLength();g+=1)A[g]^=r.gexp(r.glog(y.getAt(g))+S);return o(A,0).mod(y)},C}var a=(function(){var M=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],x=function(y,S){var A={};return A.totalCount=y,A.dataCount=S,A},w={},C=function(y,S){switch(S){case t.L:return M[(y-1)*4+0];case t.M:return M[(y-1)*4+1];case t.Q:return M[(y-1)*4+2];case t.H:return M[(y-1)*4+3];default:return}};return w.getRSBlocks=function(y,S){var A=C(y,S);if(typeof A>"u")throw"bad rs block @ typeNumber:"+y+"/errorCorrectionLevel:"+S;for(var g=A.length/3,b=[],R=0;R<g;R+=1)for(var z=A[R*3+0],K=A[R*3+1],O=A[R*3+2],k=0;k<z;k+=1)b.push(x(K,O));return b},w})(),l=function(){var M=[],x=0,w={};return w.getBuffer=function(){return M},w.getAt=function(C){var y=Math.floor(C/8);return(M[y]>>>7-C%8&1)==1},w.put=function(C,y){for(var S=0;S<y;S+=1)w.putBit((C>>>y-S-1&1)==1)},w.getLengthInBits=function(){return x},w.putBit=function(C){var y=Math.floor(x/8);M.length<=y&&M.push(0),C&&(M[y]|=128>>>x%8),x+=1},w},u=function(M){var x=e.MODE_NUMBER,w=M,C={};C.getMode=function(){return x},C.getLength=function(A){return w.length},C.write=function(A){for(var g=w,b=0;b+2<g.length;)A.put(y(g.substring(b,b+3)),10),b+=3;b<g.length&&(g.length-b==1?A.put(y(g.substring(b,b+1)),4):g.length-b==2&&A.put(y(g.substring(b,b+2)),7))};var y=function(A){for(var g=0,b=0;b<A.length;b+=1)g=g*10+S(A.charAt(b));return g},S=function(A){if("0"<=A&&A<="9")return A.charCodeAt(0)-48;throw"illegal char :"+A};return C},c=function(M){var x=e.MODE_ALPHA_NUM,w=M,C={};C.getMode=function(){return x},C.getLength=function(S){return w.length},C.write=function(S){for(var A=w,g=0;g+1<A.length;)S.put(y(A.charAt(g))*45+y(A.charAt(g+1)),11),g+=2;g<A.length&&S.put(y(A.charAt(g)),6)};var y=function(S){if("0"<=S&&S<="9")return S.charCodeAt(0)-48;if("A"<=S&&S<="Z")return S.charCodeAt(0)-65+10;switch(S){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+S}};return C},f=function(M){var x=e.MODE_8BIT_BYTE,w=M,C=n.stringToBytes(M),y={};return y.getMode=function(){return x},y.getLength=function(S){return C.length},y.write=function(S){for(var A=0;A<C.length;A+=1)S.put(C[A],8)},y},h=function(M){var x=e.MODE_KANJI,w=M,C=n.stringToBytesFuncs.SJIS;if(!C)throw"sjis not supported.";(function(A,g){var b=C(A);if(b.length!=2||(b[0]<<8|b[1])!=g)throw"sjis not supported."})("\u53CB",38726);var y=C(M),S={};return S.getMode=function(){return x},S.getLength=function(A){return~~(y.length/2)},S.write=function(A){for(var g=y,b=0;b+1<g.length;){var R=(255&g[b])<<8|255&g[b+1];if(33088<=R&&R<=40956)R-=33088;else if(57408<=R&&R<=60351)R-=49472;else throw"illegal char at "+(b+1)+"/"+R;R=(R>>>8&255)*192+(R&255),A.put(R,13),b+=2}if(b<g.length)throw"illegal char at "+(b+1)},S},p=function(){var M=[],x={};return x.writeByte=function(w){M.push(w&255)},x.writeShort=function(w){x.writeByte(w),x.writeByte(w>>>8)},x.writeBytes=function(w,C,y){C=C||0,y=y||w.length;for(var S=0;S<y;S+=1)x.writeByte(w[S+C])},x.writeString=function(w){for(var C=0;C<w.length;C+=1)x.writeByte(w.charCodeAt(C))},x.toByteArray=function(){return M},x.toString=function(){var w="";w+="[";for(var C=0;C<M.length;C+=1)C>0&&(w+=","),w+=M[C];return w+="]",w},x},v=function(){var M=0,x=0,w=0,C="",y={},S=function(g){C+=String.fromCharCode(A(g&63))},A=function(g){if(!(g<0)){if(g<26)return 65+g;if(g<52)return 97+(g-26);if(g<62)return 48+(g-52);if(g==62)return 43;if(g==63)return 47}throw"n:"+g};return y.writeByte=function(g){for(M=M<<8|g&255,x+=8,w+=1;x>=6;)S(M>>>x-6),x-=6},y.flush=function(){if(x>0&&(S(M<<6-x),M=0,x=0),w%3!=0)for(var g=3-w%3,b=0;b<g;b+=1)C+="="},y.toString=function(){return C},y},_=function(M){var x=M,w=0,C=0,y=0,S={};S.read=function(){for(;y<8;){if(w>=x.length){if(y==0)return-1;throw"unexpected end of file./"+y}var g=x.charAt(w);if(w+=1,g=="=")return y=0,-1;if(g.match(/^\s$/))continue;C=C<<6|A(g.charCodeAt(0)),y+=6}var b=C>>>y-8&255;return y-=8,b};var A=function(g){if(65<=g&&g<=90)return g-65;if(97<=g&&g<=122)return g-97+26;if(48<=g&&g<=57)return g-48+52;if(g==43)return 62;if(g==47)return 63;throw"c:"+g};return S},m=function(M,x){var w=M,C=x,y=new Array(M*x),S={};S.setPixel=function(R,z,K){y[z*w+R]=K},S.write=function(R){R.writeString("GIF87a"),R.writeShort(w),R.writeShort(C),R.writeByte(128),R.writeByte(0),R.writeByte(0),R.writeByte(0),R.writeByte(0),R.writeByte(0),R.writeByte(255),R.writeByte(255),R.writeByte(255),R.writeString(","),R.writeShort(0),R.writeShort(0),R.writeShort(w),R.writeShort(C),R.writeByte(0);var z=2,K=g(z);R.writeByte(z);for(var O=0;K.length-O>255;)R.writeByte(255),R.writeBytes(K,O,255),O+=255;R.writeByte(K.length-O),R.writeBytes(K,O,K.length-O),R.writeByte(0),R.writeString(";")};var A=function(R){var z=R,K=0,O=0,k={};return k.write=function(H,G){if(H>>>G)throw"length over";for(;K+G>=8;)z.writeByte(255&(H<<K|O)),G-=8-K,H>>>=8-K,O=0,K=0;O=H<<K|O,K=K+G},k.flush=function(){K>0&&z.writeByte(O)},k},g=function(R){for(var z=1<<R,K=(1<<R)+1,O=R+1,k=b(),H=0;H<z;H+=1)k.add(String.fromCharCode(H));k.add(String.fromCharCode(z)),k.add(String.fromCharCode(K));var G=p(),Z=A(G);Z.write(z,O);var Y=0,ae=String.fromCharCode(y[Y]);for(Y+=1;Y<y.length;){var oe=String.fromCharCode(y[Y]);Y+=1,k.contains(ae+oe)?ae=ae+oe:(Z.write(k.indexOf(ae),O),k.size()<4095&&(k.size()==1<<O&&(O+=1),k.add(ae+oe)),ae=oe)}return Z.write(k.indexOf(ae),O),Z.write(K,O),Z.flush(),G.toByteArray()},b=function(){var R={},z=0,K={};return K.add=function(O){if(K.contains(O))throw"dup key:"+O;R[O]=z,z+=1},K.size=function(){return z},K.indexOf=function(O){return R[O]},K.contains=function(O){return typeof R[O]<"u"},K};return S},d=function(M,x,w){for(var C=m(M,x),y=0;y<x;y+=1)for(var S=0;S<M;S+=1)C.setPixel(S,y,w(S,y));var A=p();C.write(A);for(var g=v(),b=A.toByteArray(),R=0;R<b.length;R+=1)g.writeByte(b[R]);return g.flush(),"data:image/gif;base64,"+g};return n})();(function(){id.stringToBytesFuncs["UTF-8"]=function(n){function e(t){for(var i=[],s=0;s<t.length;s++){var r=t.charCodeAt(s);r<128?i.push(r):r<2048?i.push(192|r>>6,128|r&63):r<55296||r>=57344?i.push(224|r>>12,128|r>>6&63,128|r&63):(s++,r=65536+((r&1023)<<10|t.charCodeAt(s)&1023),i.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63))}return i}return e(n)}})();(function(n){typeof define=="function"&&define.amd?define([],n):typeof sd=="object"&&(rd.exports=n())})(function(){return id})});var bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vd=0,cu=1,Gd=2;var Hh=1,Wd=2,Mi=3,qi=0,qt=1,hn=2;var ii=0,$s=1,Ct=2,uu=3,hu=4,qd=5,hs=100,Xd=101,Yd=102,fu=103,du=104,Kd=200,Zd=201,jd=202,Jd=203,Ll=204,Il=205,$d=206,Qd=207,ep=208,tp=209,np=210,ip=211,sp=212,rp=213,ap=214,op=0,lp=1,cp=2,to=3,up=4,hp=5,fp=6,dp=7,Vh=0,pp=1,mp=2,Wi=0,gp=1,vp=2,yp=3,xp=4,_p=5,bp=6;var Gh=300,tr=301,nr=302,kl=303,Dl=304,So=306,Ei=1e3,Xn=1001,Ul=1002,nn=1003,pu=1004;var el=1005;var en=1006,Mp=1007;var Br=1008;var si=1009,Sp=1010,wp=1011,dc=1012,Wh=1013,Vi=1014,Gi=1015,Rn=1016,qh=1017,Xh=1018,ps=1020,Ep=1021,Yn=1023,Tp=1024,Ap=1025,ms=1026,ir=1027,Rp=1028,Yh=1029,Cp=1030,Kh=1031,Zh=1033,tl=33776,nl=33777,il=33778,sl=33779,mu=35840,gu=35841,vu=35842,yu=35843,jh=36196,xu=37492,_u=37496,bu=37808,Mu=37809,Su=37810,wu=37811,Eu=37812,Tu=37813,Au=37814,Ru=37815,Cu=37816,Pu=37817,Lu=37818,Iu=37819,ku=37820,Du=37821,rl=36492,Uu=36494,Nu=36495,Pp=36283,Ou=36284,zu=36285,Fu=36286;var no=2300,io=2301,al=2302,Bu=2400,Hu=2401,Vu=2402;var Jh=3e3,gs=3001,Lp=3200,Ip=3201,kp=0,Dp=1,tn="",sn="srgb",Ti="srgb-linear",pc="display-p3",wo="display-p3-linear",so="linear",Rt="srgb",ro="rec709",ao="p3";var Ps=7680;var Gu=519,Up=512,Np=513,Op=514,$h=515,zp=516,Fp=517,Bp=518,Hp=519,Nl=35044;var Wu="300 es",Ol=1035,Si=2e3,oo=2001,ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=1234567,Nr=Math.PI/180,Hr=180/Math.PI;function wi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function un(n,e,t){return Math.max(e,Math.min(t,n))}function mc(n,e){return(n%e+e)%e}function Vp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Gp(n,e,t){return n!==e?(t-n)/(e-n):0}function Or(n,e,t){return(1-t)*n+t*e}function Wp(n,e,t,i){return Or(n,e,1-Math.exp(-t*i))}function qp(n,e=1){return e-Math.abs(mc(n,e*2)-e)}function Xp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zp(n,e){return n+Math.random()*(e-n)}function jp(n){return n*(.5-Math.random())}function Jp(n){n!==void 0&&(qu=n);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $p(n){return n*Nr}function Qp(n){return n*Hr}function zl(n){return(n&n-1)===0&&n!==0}function em(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tm(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+i)/2),c=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*v,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*v,a*u);break;case"ZYZ":n.set(l*v,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Zr={DEG2RAD:Nr,RAD2DEG:Hr,generateUUID:wi,clamp:un,euclideanModulo:mc,mapLinear:Vp,inverseLerp:Gp,lerp:Or,damp:Wp,pingpong:qp,smoothstep:Xp,smootherstep:Yp,randInt:Kp,randFloat:Zp,randFloatSpread:jp,seededRandom:Jp,degToRad:$p,radToDeg:Qp,isPowerOfTwo:zl,ceilPowerOfTwo:em,floorPowerOfTwo:lo,setQuaternionFromProperEuler:tm,normalize:bt,denormalize:ni},ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class n{constructor(e,t,i,s,r,o,a,l,u){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u)}set(e,t,i,s,r,o,a,l,u){let c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],v=i[8],_=s[0],m=s[3],d=s[6],M=s[1],x=s[4],w=s[7],C=s[2],y=s[5],S=s[8];return r[0]=o*_+a*M+l*C,r[3]=o*m+a*x+l*y,r[6]=o*d+a*w+l*S,r[1]=u*_+c*M+f*C,r[4]=u*m+c*x+f*y,r[7]=u*d+c*w+f*S,r[2]=h*_+p*M+v*C,r[5]=h*m+p*x+v*y,r[8]=h*d+p*w+v*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*r,p=u*r-o*l,v=t*f+i*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=f*_,e[1]=(s*u-c*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(c*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ol=new ht;function Qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nm(){let n=Vr("canvas");return n.style.display="block",n}var Xu={};function zr(n){n in Xu||(Xu[n]=!0,console.warn(n))}var Yu=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ku=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[Ti]:{transfer:so,primaries:ro,toReference:n=>n,fromReference:n=>n},[sn]:{transfer:Rt,primaries:ro,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wo]:{transfer:so,primaries:ao,toReference:n=>n.applyMatrix3(Ku),fromReference:n=>n.applyMatrix3(Yu)},[pc]:{transfer:Rt,primaries:ao,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ku),fromReference:n=>n.applyMatrix3(Yu).convertLinearToSRGB()}},im=new Set([Ti,wo]),Mt={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!im.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Ta[e].toReference,s=Ta[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ta[n].primaries},getTransfer:function(n){return n===tn?so:Ta[n].transfer}};function Qs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ll(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ls,co=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=Vr("canvas")),Ls.width=e.width,Ls.height=e.height;let i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qs(t[i]/255)*255):t[i]=Qs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sm=0,uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?co.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rm=0,Mn=class n extends ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Xn,s=Xn,r=en,o=Br,a=Yn,l=si,u=n.DEFAULT_ANISOTROPY,c=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=wi(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===gs?sn:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===sn?gs:Jh}set encoding(e){zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gs?sn:tn}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Gh;Mn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(u+1)/2,w=(p+1)/2,C=(d+1)/2,y=(c+h)/4,S=(f+_)/4,A=(v+m)/4;return x>w&&x>C?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=y/i,r=S/i):w>C?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=y/s,r=A/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=S/r,s=A/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(f-_)/M,this.z=(h-c)/M,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends ri{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===gs?sn:tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Fl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ho=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bl=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],f=i[s+3],h=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==h||u!==p||c!==v){let m=1-a,d=l*h+u*p+c*v+f*_,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let C=Math.sqrt(x),y=Math.atan2(C,d*M);m=Math.sin(m*y)/C,a=Math.sin(a*y)/C}let w=a*M;if(l=l*m+h*w,u=u*m+p*w,c=c*m+v*w,f=f*m+_*w,m===1-a){let C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],f=r[o],h=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+c*f+l*p-u*h,e[t+1]=l*v+c*h+u*f-a*p,e[t+2]=u*v+c*p+a*h-l*f,e[t+3]=c*v-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=h*c*f+u*p*v,this._y=u*p*f-h*c*v,this._z=u*c*v+h*p*f,this._w=u*c*f-h*p*v;break;case"YXZ":this._x=h*c*f+u*p*v,this._y=u*p*f-h*c*v,this._z=u*c*v-h*p*f,this._w=u*c*f+h*p*v;break;case"ZXY":this._x=h*c*f-u*p*v,this._y=u*p*f+h*c*v,this._z=u*c*v+h*p*f,this._w=u*c*f-h*p*v;break;case"ZYX":this._x=h*c*f-u*p*v,this._y=u*p*f+h*c*v,this._z=u*c*v-h*p*f,this._w=u*c*f+h*p*v;break;case"YZX":this._x=h*c*f+u*p*v,this._y=u*p*f+h*c*v,this._z=u*c*v-h*p*f,this._w=u*c*f-h*p*v;break;case"XZY":this._x=h*c*f-u*p*v,this._y=u*p*f-h*c*v,this._z=u*c*v+h*p*f,this._w=u*c*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*i),c=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-r*f,this.z=s+l*f+r*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new N,Zu=new Yt,vs=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Ra.subVectors(this.max,Cr),Is.subVectors(e.a,Cr),ks.subVectors(e.b,Cr),Ds.subVectors(e.c,Cr),Oi.subVectors(ks,Is),zi.subVectors(Ds,ks),as.subVectors(Is,Ds);let t=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-as.z,as.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,as.z,0,-as.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-as.y,as.x,0];return!hl(t,Is,ks,Ds,Ra)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,Is,ks,Ds,Ra))?!1:(Ca.crossVectors(Oi,zi),t=[Ca.x,Ca.y,Ca.z],hl(t,Is,ks,Ds,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vi=[new N,new N,new N,new N,new N,new N,new N,new N],Vn=new N,Aa=new vs,Is=new N,ks=new N,Ds=new N,Oi=new N,zi=new N,as=new N,Cr=new N,Ra=new N,Ca=new N,os=new N;function hl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){os.fromArray(n,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),u=t.dot(os),c=i.dot(os);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}var am=new vs,Pr=new N,fl=new N,Ai=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):am.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(fl)),this.expandByPoint(Pr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new N,dl=new N,Pa=new N,Fi=new N,pl=new N,La=new N,ml=new N,Xi=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){dl.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(dl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Pa),a=Fi.dot(this.direction),l=-Fi.dot(Pa),u=Fi.lengthSq(),c=Math.abs(1-o*o),f,h,p,v;if(c>0)if(f=o*l-a,h=o*a-l,v=r*c,f>=0)if(h>=-v)if(h<=v){let _=1/c;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+u):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dl).addScaledVector(Pa,h),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,s=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,s=(e.min.x-h.x)*u),c>=0?(r=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){pl.subVectors(t,e),La.subVectors(i,e),ml.crossVectors(pl,La);let o=this.direction.dot(ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);let l=a*this.direction.dot(La.crossVectors(Fi,La));if(l<0)return null;let u=a*this.direction.dot(pl.cross(Fi));if(u<0||l+u>o)return null;let c=-a*Fi.dot(ml);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class n{constructor(e,t,i,s,r,o,a,l,u,c,f,h,p,v,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u,c,f,h,p,v,_,m)}set(e,t,i,s,r,o,a,l,u,c,f,h,p,v,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*c,p=o*f,v=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+v*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=v+p*u,t[10]=o*l}else if(e.order==="YXZ"){let h=l*c,p=l*f,v=u*c,_=u*f;t[0]=h+_*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-v,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*c,p=l*f,v=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*c,p=o*f,v=a*c,_=a*f;t[0]=l*c,t[4]=v*u-p,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=p*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*u,v=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+v,t[10]=h-_*f}else if(e.order==="XZY"){let h=o*l,p=o*u,v=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(om,e,lm)}lookAt(e,t,i){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Bi.crossVectors(i,Tn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Bi.crossVectors(i,Tn)),Bi.normalize(),Ia.crossVectors(Tn,Bi),s[0]=Bi.x,s[4]=Ia.x,s[8]=Tn.x,s[1]=Bi.y,s[5]=Ia.y,s[9]=Tn.y,s[2]=Bi.z,s[6]=Ia.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],v=i[2],_=i[6],m=i[10],d=i[14],M=i[3],x=i[7],w=i[11],C=i[15],y=s[0],S=s[4],A=s[8],g=s[12],b=s[1],R=s[5],z=s[9],K=s[13],O=s[2],k=s[6],H=s[10],G=s[14],Z=s[3],Y=s[7],ae=s[11],oe=s[15];return r[0]=o*y+a*b+l*O+u*Z,r[4]=o*S+a*R+l*k+u*Y,r[8]=o*A+a*z+l*H+u*ae,r[12]=o*g+a*K+l*G+u*oe,r[1]=c*y+f*b+h*O+p*Z,r[5]=c*S+f*R+h*k+p*Y,r[9]=c*A+f*z+h*H+p*ae,r[13]=c*g+f*K+h*G+p*oe,r[2]=v*y+_*b+m*O+d*Z,r[6]=v*S+_*R+m*k+d*Y,r[10]=v*A+_*z+m*H+d*ae,r[14]=v*g+_*K+m*G+d*oe,r[3]=M*y+x*b+w*O+C*Z,r[7]=M*S+x*R+w*k+C*Y,r[11]=M*A+x*z+w*H+C*ae,r[15]=M*g+x*K+w*G+C*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],v=e[3],_=e[7],m=e[11],d=e[15];return v*(+r*l*f-s*u*f-r*a*h+i*u*h+s*a*p-i*l*p)+_*(+t*l*p-t*u*h+r*o*h-s*o*p+s*u*c-r*l*c)+m*(+t*u*f-t*a*p-r*o*f+i*o*p+r*a*c-i*u*c)+d*(-s*a*c-t*l*f+t*a*h+s*o*f-i*o*h+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],v=e[12],_=e[13],m=e[14],d=e[15],M=f*m*u-_*h*u+_*l*p-a*m*p-f*l*d+a*h*d,x=v*h*u-c*m*u-v*l*p+o*m*p+c*l*d-o*h*d,w=c*_*u-v*f*u+v*a*p-o*_*p-c*a*d+o*f*d,C=v*f*l-c*_*l-v*a*h+o*_*h+c*a*m-o*f*m,y=t*M+i*x+s*w+r*C;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/y;return e[0]=M*S,e[1]=(_*h*r-f*m*r-_*s*p+i*m*p+f*s*d-i*h*d)*S,e[2]=(a*m*r-_*l*r+_*s*u-i*m*u-a*s*d+i*l*d)*S,e[3]=(f*l*r-a*h*r-f*s*u+i*h*u+a*s*p-i*l*p)*S,e[4]=x*S,e[5]=(c*m*r-v*h*r+v*s*p-t*m*p-c*s*d+t*h*d)*S,e[6]=(v*l*r-o*m*r-v*s*u+t*m*u+o*s*d-t*l*d)*S,e[7]=(o*h*r-c*l*r+c*s*u-t*h*u-o*s*p+t*l*p)*S,e[8]=w*S,e[9]=(v*f*r-c*_*r-v*i*p+t*_*p+c*i*d-t*f*d)*S,e[10]=(o*_*r-v*a*r+v*i*u-t*_*u-o*i*d+t*a*d)*S,e[11]=(c*a*r-o*f*r-c*i*u+t*f*u+o*i*p-t*a*p)*S,e[12]=C*S,e[13]=(c*_*s-v*f*s+v*i*h-t*_*h-c*i*m+t*f*m)*S,e[14]=(v*a*s-o*_*s-v*i*l+t*_*l+o*i*m-t*a*m)*S,e[15]=(o*f*s-c*a*s+c*i*l-t*f*l-o*i*h+t*a*h)*S,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,c=o+o,f=a+a,h=r*u,p=r*c,v=r*f,_=o*c,m=o*f,d=a*f,M=l*u,x=l*c,w=l*f,C=i.x,y=i.y,S=i.z;return s[0]=(1-(_+d))*C,s[1]=(p+w)*C,s[2]=(v-x)*C,s[3]=0,s[4]=(p-w)*y,s[5]=(1-(h+d))*y,s[6]=(m+M)*y,s[7]=0,s[8]=(v+x)*S,s[9]=(m-M)*S,s[10]=(1-(h+_))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let u=1/r,c=1/o,f=1/a;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=c,Gn.elements[5]*=c,Gn.elements[6]*=c,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Si){let l=this.elements,u=2*r/(t-e),c=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s),p,v;if(a===Si)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===oo)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Si){let l=this.elements,u=1/(t-e),c=1/(i-s),f=1/(o-r),h=(t+e)*u,p=(i+s)*c,v,_;if(a===Si)v=(o+r)*f,_=-2*f;else if(a===oo)v=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Us=new N,Gn=new Xt,om=new N(0,0,0),lm=new N(1,1,1),Bi=new N,Ia=new N,Tn=new N,ju=new Xt,Ju=new Yt,sr=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sr.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cm=0,$u=new N,Ns=new Yt,xi=new Xt,ka=new N,Lr=new N,um=new N,hm=new Yt,Qu=new N(1,0,0),eh=new N(0,1,0),th=new N(0,0,1),fm={type:"added"},dm={type:"removed"},fn=class n extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new sr,i=new Yt,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ht}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(eh,e)}rotateZ(e){return this.rotateOnAxis(th,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(eh,e)}translateZ(e){return this.translateOnAxis(th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ka.copy(e):ka.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Lr,ka,this.up):xi.lookAt(ka,Lr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(xi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){let l=[];for(let u in a){let c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};fn.DEFAULT_UP=new N(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new N,_i=new N,gl=new N,bi=new N,Os=new N,zs=new N,nh=new N,vl=new N,yl=new N,xl=new N,Da=!1,ds=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),_i.subVectors(i,t),gl.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(_i),l=Wn.dot(gl),u=_i.dot(_i),c=_i.dot(gl),f=o*u-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,i,s,r,o,a,l){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),_i.subVectors(e,t),Wn.cross(_i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,i),zs.subVectors(r,i),vl.subVectors(e,i);let l=Os.dot(vl),u=zs.dot(vl);if(l<=0&&u<=0)return t.copy(i);yl.subVectors(e,s);let c=Os.dot(yl),f=zs.dot(yl);if(c>=0&&f<=c)return t.copy(s);let h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Os,o);xl.subVectors(e,r);let p=Os.dot(xl),v=zs.dot(xl);if(v>=0&&p<=v)return t.copy(r);let _=p*u-l*v;if(_<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(zs,a);let m=c*v-p*f;if(m<=0&&f-c>=0&&p-v>=0)return nh.subVectors(r,s),a=(f-c)/(f-c+(p-v)),t.copy(s).addScaledVector(nh,a);let d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Os,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function _l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Mt.workingColorSpace){if(e=mc(e,1),t=un(t,0,1),i=un(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=_l(o,r,e+1/3),this.g=_l(o,r,e),this.b=_l(o,r,e-1/3)}return Mt.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let i=ef[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=ll(e.r),this.g=ll(e.g),this.b=ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Mt.fromWorkingColorSpace(cn.copy(this),e),Math.round(un(cn.r*255,0,255))*65536+Math.round(un(cn.g*255,0,255))*256+Math.round(un(cn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,u,c=(a+o)/2;if(a===o)l=0,u=0;else{let f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=sn){Mt.fromWorkingColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Ua);let i=Or(Hi.h,Ua.h,t),s=Or(Hi.s,Ua.s,t),r=Or(Hi.l,Ua.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new et;et.NAMES=ef;var pm=0,Ri=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=$s,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Il,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ll&&(i.blendSrc=this.blendSrc),this.blendDst!==Il&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sn=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new N,Na=new ke,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}};var fo=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var po=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Dt=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var mm=0,Nn=new Xt,bl=new fn,Fs=new N,An=new vs,Ir=new vs,Qt=new N,It=class n extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?po:fo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(An.min,Ir.min),An.expandByPoint(Qt),Qt.addVectors(An.max,Ir.max),An.expandByPoint(Qt)):(An.expandByPoint(Ir.min),An.expandByPoint(Ir.max))}An.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Qt.fromBufferAttribute(a,u),l&&(Fs.fromBufferAttribute(e,u),Qt.add(Fs)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,u=[],c=[];for(let b=0;b<a;b++)u[b]=new N,c[b]=new N;let f=new N,h=new N,p=new N,v=new ke,_=new ke,m=new ke,d=new N,M=new N;function x(b,R,z){f.fromArray(s,b*3),h.fromArray(s,R*3),p.fromArray(s,z*3),v.fromArray(o,b*2),_.fromArray(o,R*2),m.fromArray(o,z*2),h.sub(f),p.sub(f),_.sub(v),m.sub(v);let K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(K),M.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(K),u[b].add(d),u[R].add(d),u[z].add(d),c[b].add(M),c[R].add(M),c[z].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,R=w.length;b<R;++b){let z=w[b],K=z.start,O=z.count;for(let k=K,H=K+O;k<H;k+=3)x(i[k+0],i[k+1],i[k+2])}let C=new N,y=new N,S=new N,A=new N;function g(b){S.fromArray(r,b*3),A.copy(S);let R=u[b];C.copy(R),C.sub(S.multiplyScalar(S.dot(R))).normalize(),y.crossVectors(A,R);let K=y.dot(c[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=K}for(let b=0,R=w.length;b<R;++b){let z=w[b],K=z.start,O=z.count;for(let k=K,H=K+O;k<H;k+=3)g(i[k+0]),g(i[k+1]),g(i[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){let v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){let u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c),p=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)h[v++]=u[p++]}return new Nt(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],u=e(l,i);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let l=[],u=r[a];for(let c=0,f=u.length;c<f;c++){let h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let u=i[l];e.data.attributes[l]=u.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){let p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let u in s){let c=s[u];this.setAttribute(u,c.clone(t))}let r=e.morphAttributes;for(let u in r){let c=[],f=r[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,c=o.length;u<c;u++){let f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ih=new Xt,ls=new Xi,Oa=new Ai,sh=new N,Bs=new N,Hs=new N,Vs=new N,Ml=new N,za=new N,Fa=new ke,Ba=new ke,Ha=new ke,rh=new N,ah=new N,oh=new N,Va=new N,Ga=new N,vt=class extends fn{constructor(e=new It,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){za.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let c=a[l],f=r[l];c!==0&&(Ml.fromBufferAttribute(f,e),o?za.addScaledVector(Ml,c):za.addScaledVector(Ml.sub(t),c))}t.add(za)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Oa.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Oa,sh)===null||ls.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),ls.copy(e.ray).applyMatrix4(ih),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){let m=h[v],d=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=M,C=x;w<C;w+=3){let y=a.getX(w),S=a.getX(w+1),A=a.getX(w+2);s=Wa(this,d,e,i,u,c,f,y,S,A),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){let M=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);s=Wa(this,o,e,i,u,c,f,M,x,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){let m=h[v],d=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=M,C=x;w<C;w+=3){let y=w,S=w+1,A=w+2;s=Wa(this,d,e,i,u,c,f,y,S,A),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){let M=m,x=m+1,w=m+2;s=Wa(this,o,e,i,u,c,f,M,x,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function gm(n,e,t,i,s,r,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===qi,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(n.matrixWorld);let u=t.ray.origin.distanceTo(Ga);return u<t.near||u>t.far?null:{distance:u,point:Ga.clone(),object:n}}function Wa(n,e,t,i,s,r,o,a,l,u){n.getVertexPosition(a,Bs),n.getVertexPosition(l,Hs),n.getVertexPosition(u,Vs);let c=gm(n,e,t,i,Bs,Hs,Vs,Va);if(c){s&&(Fa.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,u),c.uv=ds.getInterpolation(Va,Bs,Hs,Vs,Fa,Ba,Ha,new ke)),r&&(Fa.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,u),c.uv1=ds.getInterpolation(Va,Bs,Hs,Vs,Fa,Ba,Ha,new ke),c.uv2=c.uv1),o&&(rh.fromBufferAttribute(o,a),ah.fromBufferAttribute(o,l),oh.fromBufferAttribute(o,u),c.normal=ds.getInterpolation(Va,Bs,Hs,Vs,rh,ah,oh,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let f={a,b:l,c:u,normal:new N,materialIndex:0};ds.getNormal(Bs,Hs,Vs,f.normal),c.face=f}return c}var Wr=class n extends It{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],u=[],c=[],f=[],h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(f,2));function v(_,m,d,M,x,w,C,y,S,A,g){let b=w/S,R=C/A,z=w/2,K=C/2,O=y/2,k=S+1,H=A+1,G=0,Z=0,Y=new N;for(let ae=0;ae<H;ae++){let oe=ae*R-K;for(let Se=0;Se<k;Se++){let te=Se*b-z;Y[_]=te*M,Y[m]=oe*x,Y[d]=O,u.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=y>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(Se/S),f.push(1-ae/A),G+=1}}for(let ae=0;ae<A;ae++)for(let oe=0;oe<S;oe++){let Se=h+oe+k*ae,te=h+oe+k*(ae+1),de=h+(oe+1)+k*(ae+1),q=h+(oe+1)+k*ae;l.push(Se,te,q),l.push(te,de,q),Z+=6}a.addGroup(p,Z,g),p+=Z,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=rr(n[t]);for(let s in i)e[s]=i[s]}return e}function vm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tf(n){return n.getRenderTarget()===null?n.outputColorSpace:Mt.workingColorSpace}var hr={clone:rr,merge:vn},ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},mo=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends mo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=-90,Ws=1,Hl=class extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Gs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new rn(Gs,Ws,e,t);r.layers=this.layers,this.add(r);let o=new rn(Gs,Ws,e,t);o.layers=this.layers,this.add(o);let a=new rn(Gs,Ws,e,t);a.layers=this.layers,this.add(a);let l=new rn(Gs,Ws,e,t);l.layers=this.layers,this.add(l);let u=new rn(Gs,Ws,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let u of t)this.remove(u);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},go=class extends Mn{constructor(e,t,i,s,r,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vl=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gs?sn:tn),this.texture=new go(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wr(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:ii});r.uniforms.tEquirect.value=t;let o=new vt(s,r),a=t.minFilter;return t.minFilter===Br&&(t.minFilter=en),new Hl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Sl=new N,_m=new N,bm=new ht,qn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Sl.subVectors(i,t).cross(_m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Sl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||bm.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new Ai,qa=new N,vo=class{constructor(e=new qn,t=new qn,i=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],f=s[6],h=s[7],p=s[8],v=s[9],_=s[10],m=s[11],d=s[12],M=s[13],x=s[14],w=s[15];if(i[0].setComponents(l-r,h-u,m-p,w-d).normalize(),i[1].setComponents(l+r,h+u,m+p,w+d).normalize(),i[2].setComponents(l+o,h+c,m+v,w+M).normalize(),i[3].setComponents(l-o,h-c,m-v,w-M).normalize(),i[4].setComponents(l-a,h-f,m-_,w-x).normalize(),t===Si)i[5].setComponents(l+a,h+f,m+_,w+x).normalize();else if(t===oo)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Mm(n,e){let t=e.isWebGL2,i=new WeakMap;function s(u,c){let f=u.array,h=u.usage,p=f.byteLength,v=n.createBuffer();n.bindBuffer(c,v),n.bufferData(c,f,h),u.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function r(u,c,f){let h=c.array,p=c._updateRange,v=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&v.length===0&&n.bufferSubData(f,0,h),v.length!==0){for(let _=0,m=v.length;_<m;_++){let d=v[_];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);let c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){let h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);let f=i.get(u);if(f===void 0)i.set(u,s(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}var ar=class n extends It{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,f=e/a,h=t/l,p=[],v=[],_=[],m=[];for(let d=0;d<c;d++){let M=d*h-o;for(let x=0;x<u;x++){let w=x*f-r;v.push(w,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let x=M+u*d,w=M+u*(d+1),C=M+1+u*(d+1),y=M+1+u*d;p.push(x,w,y),p.push(w,C,y)}this.setIndex(p),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xm=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Km=`vec3 transformedNormal = objectNormal;
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
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",e0=`
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
}`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
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
}`,h0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
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
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,v0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
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
#endif`,M0=`struct PhysicalMaterial {
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
}`,S0=`
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
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
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q0=`#ifdef USE_NORMALMAP
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
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,og=`float getShadowMask() {
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
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
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
}`,Cg=`#if DEPTH_PACKING == 3200
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
}`,Pg=`#define DISTANCE
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
}`,Lg=`#define DISTANCE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Og=`uniform vec3 diffuse;
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
}`,zg=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,Vg=`#define NORMAL
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
}`,Gg=`#define NORMAL
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
}`,Wg=`#define PHONG
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
}`,qg=`#define PHONG
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
}`,Xg=`#define STANDARD
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
}`,Yg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,Zg=`#define TOON
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
}`,jg=`uniform float size;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Qg=`uniform vec3 color;
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
}`,ev=`uniform float rotation;
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
}`,tv=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Sm,alphahash_pars_fragment:wm,alphamap_fragment:Em,alphamap_pars_fragment:Tm,alphatest_fragment:Am,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Lm,batching_vertex:Im,begin_vertex:km,beginnormal_vertex:Dm,bsdfs:Um,iridescence_fragment:Nm,bumpmap_pars_fragment:Om,clipping_planes_fragment:zm,clipping_planes_pars_fragment:Fm,clipping_planes_pars_vertex:Bm,clipping_planes_vertex:Hm,color_fragment:Vm,color_pars_fragment:Gm,color_pars_vertex:Wm,color_vertex:qm,common:Xm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:Km,displacementmap_pars_vertex:Zm,displacementmap_vertex:jm,emissivemap_fragment:Jm,emissivemap_pars_fragment:$m,colorspace_fragment:Qm,colorspace_pars_fragment:e0,envmap_fragment:t0,envmap_common_pars_fragment:n0,envmap_pars_fragment:i0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:g0,envmap_vertex:r0,fog_vertex:a0,fog_pars_vertex:o0,fog_fragment:l0,fog_pars_fragment:c0,gradientmap_pars_fragment:u0,lightmap_fragment:h0,lightmap_pars_fragment:f0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:v0,lights_toon_pars_fragment:y0,lights_phong_fragment:x0,lights_phong_pars_fragment:_0,lights_physical_fragment:b0,lights_physical_pars_fragment:M0,lights_fragment_begin:S0,lights_fragment_maps:w0,lights_fragment_end:E0,logdepthbuf_fragment:T0,logdepthbuf_pars_fragment:A0,logdepthbuf_pars_vertex:R0,logdepthbuf_vertex:C0,map_fragment:P0,map_pars_fragment:L0,map_particle_fragment:I0,map_particle_pars_fragment:k0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:U0,morphcolor_vertex:N0,morphnormal_vertex:O0,morphtarget_pars_vertex:z0,morphtarget_vertex:F0,normal_fragment_begin:B0,normal_fragment_maps:H0,normal_pars_fragment:V0,normal_pars_vertex:G0,normal_vertex:W0,normalmap_pars_fragment:q0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:Y0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:Z0,opaque_fragment:j0,packing:J0,premultiplied_alpha_fragment:$0,project_vertex:Q0,dithering_fragment:eg,dithering_pars_fragment:tg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:sg,shadowmap_pars_vertex:rg,shadowmap_vertex:ag,shadowmask_pars_fragment:og,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:ug,skinnormal_vertex:hg,specularmap_fragment:fg,specularmap_pars_fragment:dg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:gg,transmission_pars_fragment:vg,uv_pars_fragment:yg,uv_pars_vertex:xg,uv_vertex:_g,worldpos_vertex:bg,background_vert:Mg,background_frag:Sg,backgroundCube_vert:wg,backgroundCube_frag:Eg,cube_vert:Tg,cube_frag:Ag,depth_vert:Rg,depth_frag:Cg,distanceRGBA_vert:Pg,distanceRGBA_frag:Lg,equirect_vert:Ig,equirect_frag:kg,linedashed_vert:Dg,linedashed_frag:Ug,meshbasic_vert:Ng,meshbasic_frag:Og,meshlambert_vert:zg,meshlambert_frag:Fg,meshmatcap_vert:Bg,meshmatcap_frag:Hg,meshnormal_vert:Vg,meshnormal_frag:Gg,meshphong_vert:Wg,meshphong_frag:qg,meshphysical_vert:Xg,meshphysical_frag:Yg,meshtoon_vert:Kg,meshtoon_frag:Zg,points_vert:jg,points_frag:Jg,shadow_vert:$g,shadow_frag:Qg,sprite_vert:ev,sprite_frag:tv},Oe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ti={basic:{uniforms:vn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:vn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new et(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:vn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:vn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:vn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new et(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:vn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:vn([Oe.points,Oe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:vn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:vn([Oe.common,Oe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:vn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:vn([Oe.sprite,Oe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:vn([Oe.common,Oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:vn([Oe.lights,Oe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ti.physical={uniforms:vn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Xa={r:0,b:0,g:0};function nv(n,e,t,i,s,r,o){let a=new et(0),l=r===!0?0:1,u,c,f=null,h=0,p=null;function v(m,d){let M=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===So)?(c===void 0&&(c=new vt(new Wr(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:rr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,y,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(x.colorSpace)!==Rt,(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new vt(new ar(2,2),new ft({name:"BackgroundMaterial",uniforms:rr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Mt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,d){m.getRGB(Xa,tf(n)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:v}}function iv(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),u=l,c=!1;function f(O,k,H,G,Z){let Y=!1;if(o){let ae=_(G,H,k);u!==ae&&(u=ae,p(u.object)),Y=d(O,G,H,Z),Y&&M(O,G,H,Z)}else{let ae=k.wireframe===!0;(u.geometry!==G.id||u.program!==H.id||u.wireframe!==ae)&&(u.geometry=G.id,u.program=H.id,u.wireframe=ae,Y=!0)}Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(Y||c)&&(c=!1,A(O,k,H,G),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function v(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function _(O,k,H){let G=H.wireframe===!0,Z=a[O.id];Z===void 0&&(Z={},a[O.id]=Z);let Y=Z[k.id];Y===void 0&&(Y={},Z[k.id]=Y);let ae=Y[G];return ae===void 0&&(ae=m(h()),Y[G]=ae),ae}function m(O){let k=[],H=[],G=[];for(let Z=0;Z<s;Z++)k[Z]=0,H[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:G,object:O,attributes:{},index:null}}function d(O,k,H,G){let Z=u.attributes,Y=k.attributes,ae=0,oe=H.getAttributes();for(let Se in oe)if(oe[Se].location>=0){let de=Z[Se],q=Y[Se];if(q===void 0&&(Se==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),Se==="instanceColor"&&O.instanceColor&&(q=O.instanceColor)),de===void 0||de.attribute!==q||q&&de.data!==q.data)return!0;ae++}return u.attributesNum!==ae||u.index!==G}function M(O,k,H,G){let Z={},Y=k.attributes,ae=0,oe=H.getAttributes();for(let Se in oe)if(oe[Se].location>=0){let de=Y[Se];de===void 0&&(Se==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),Se==="instanceColor"&&O.instanceColor&&(de=O.instanceColor));let q={};q.attribute=de,de&&de.data&&(q.data=de.data),Z[Se]=q,ae++}u.attributes=Z,u.attributesNum=ae,u.index=G}function x(){let O=u.newAttributes;for(let k=0,H=O.length;k<H;k++)O[k]=0}function w(O){C(O,0)}function C(O,k){let H=u.newAttributes,G=u.enabledAttributes,Z=u.attributeDivisors;H[O]=1,G[O]===0&&(n.enableVertexAttribArray(O),G[O]=1),Z[O]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,k),Z[O]=k)}function y(){let O=u.newAttributes,k=u.enabledAttributes;for(let H=0,G=k.length;H<G;H++)k[H]!==O[H]&&(n.disableVertexAttribArray(H),k[H]=0)}function S(O,k,H,G,Z,Y,ae){ae===!0?n.vertexAttribIPointer(O,k,H,Z,Y):n.vertexAttribPointer(O,k,H,G,Z,Y)}function A(O,k,H,G){if(i.isWebGL2===!1&&(O.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Z=G.attributes,Y=H.getAttributes(),ae=k.defaultAttributeValues;for(let oe in Y){let Se=Y[oe];if(Se.location>=0){let te=Z[oe];if(te===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),te!==void 0){let de=te.normalized,q=te.itemSize,X=t.get(te);if(X===void 0)continue;let W=X.buffer,$=X.type,Q=X.bytesPerElement,le=i.isWebGL2===!0&&($===n.INT||$===n.UNSIGNED_INT||te.gpuType===Wh);if(te.isInterleavedBufferAttribute){let Ae=te.data,V=Ae.stride,Ze=te.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Se.locationSize;Ce++)C(Se.location+Ce,Ae.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ce=0;Ce<Se.locationSize;Ce++)w(Se.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,W);for(let Ce=0;Ce<Se.locationSize;Ce++)S(Se.location+Ce,q/Se.locationSize,$,de,V*Q,(Ze+q/Se.locationSize*Ce)*Q,le)}else{if(te.isInstancedBufferAttribute){for(let Ae=0;Ae<Se.locationSize;Ae++)C(Se.location+Ae,te.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<Se.locationSize;Ae++)w(Se.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,W);for(let Ae=0;Ae<Se.locationSize;Ae++)S(Se.location+Ae,q/Se.locationSize,$,de,q*Q,q/Se.locationSize*Ae*Q,le)}}else if(ae!==void 0){let de=ae[oe];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(Se.location,de);break;case 3:n.vertexAttrib3fv(Se.location,de);break;case 4:n.vertexAttrib4fv(Se.location,de);break;default:n.vertexAttrib1fv(Se.location,de)}}}}y()}function g(){z();for(let O in a){let k=a[O];for(let H in k){let G=k[H];for(let Z in G)v(G[Z].object),delete G[Z];delete k[H]}delete a[O]}}function b(O){if(a[O.id]===void 0)return;let k=a[O.id];for(let H in k){let G=k[H];for(let Z in G)v(G[Z].object),delete G[Z];delete k[H]}delete a[O.id]}function R(O){for(let k in a){let H=a[k];if(H[O.id]===void 0)continue;let G=H[O.id];for(let Z in G)v(G[Z].object),delete G[Z];delete H[O.id]}}function z(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:K,dispose:g,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:w,disableUnusedAttributes:y}}function sv(n,e,t,i){let s=i.isWebGL2,r;function o(c){r=c}function a(c,f){n.drawArrays(r,c,f),t.update(f,r,1)}function l(c,f,h){if(h===0)return;let p,v;if(s)p=n,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](r,c,f,h),t.update(f,r,h)}function u(c,f,h){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(c[v],f[v]);else{p.multiDrawArraysWEBGL(r,c,0,f,0,h);let v=0;for(let _=0;_<h;_++)v+=f[_];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function rv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,w=o||e.has("OES_texture_float"),C=x&&w,y=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:y}}function av(n){let e=this,t=null,i=0,s=!1,r=!1,o=new qn,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){let v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||v===null||v.length===0||r&&!m)r?c(null):u();else{let M=r?0:i,x=M*4,w=d.clippingState||null;l.value=w,w=c(v,h,x,p);for(let C=0;C!==x;++C)w[C]=t[C];d.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,v){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,v!==!0||m===null){let d=p+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,w=p;x!==_;++x,w+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ov(n){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=tr:a===Dl&&(o.mapping=nr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===kl||a===Dl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let u=new Vl(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Yi=class extends mo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},js=4,lh=[.125,.215,.35,.446,.526,.582],fs=20,wl=new Yi,ch=new et,El=null,Tl=0,Al=0,us=(1+Math.sqrt(5))/2,qs=1/us,uh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,us,qs),new N(0,us,-qs),new N(qs,0,us),new N(-qs,0,us),new N(us,qs,0),new N(-us,qs,0)],yo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(El,Tl,Al),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Rn,format:Yn,colorSpace:Ti,depthBuffer:!1},s=hh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lv(r)),this._blurMaterial=cv(r,e,t)}return s}_compileMaterial(e){let t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,wl)}_sceneToCubeUV(e,t,i,s){let a=new rn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(ch),c.toneMapping=Wi,c.autoClear=!1;let p=new Sn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),v=new vt(new Wr,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(ch),_=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));let x=this._cubeSize;Ya(s,M*x,d>2?x:0,x,x),c.setRenderTarget(s),_&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===tr||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ya(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=uh[(s-1)%uh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,f=new vt(this._lodPlanes[s],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fs-1),_=r/v,m=isFinite(r)?1+Math.floor(c*_):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);let d=[],M=0;for(let S=0;S<fs;++S){let A=S/_,g=Math.exp(-A*A/2);d.push(g),S===0?M+=g:S<m&&(M+=2*g)}for(let S=0;S<d.length;S++)d[S]=d[S]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;let w=this._sizeLods[s],C=3*w*(s>x-js?s-x+js:0),y=4*(this._cubeSize-w);Ya(t,C,y,3*w,2*w),l.setRenderTarget(t),l.render(f,wl)}};function lv(n){let e=[],t=[],i=[],s=n,r=n-js+1+lh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-js?l=lh[o-n+js-1]:o===0&&(l=0),i.push(l);let u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,v=6,_=3,m=2,d=1,M=new Float32Array(_*v*p),x=new Float32Array(m*v*p),w=new Float32Array(d*v*p);for(let y=0;y<p;y++){let S=y%3*2/3-1,A=y>2?0:-1,g=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];M.set(g,_*v*y),x.set(h,m*v*y);let b=[y,y,y,y,y,y];w.set(b,d*v*y)}let C=new It;C.setAttribute("position",new Nt(M,_)),C.setAttribute("uv",new Nt(x,m)),C.setAttribute("faceIndex",new Nt(w,d)),e.push(C),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hh(n,e,t){let i=new an(n,e,t);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cv(n,e,t){let i=new Float32Array(fs),s=new N(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function fh(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function dh(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function uv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,u=l===kl||l===Dl,c=l===tr||l===nr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new yo(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(u&&f&&f.height>0||c&&f&&s(f)){t===null&&(t=new yo(n));let h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0,u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){let l=a.target;l.removeEventListener("dispose",r);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function fv(n,e,t,i){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let v in h.attributes)e.remove(h.attributes[v]);for(let v in h.morphAttributes){let _=h.morphAttributes[v];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let v in h)e.update(h[v],n.ARRAY_BUFFER);let p=f.morphAttributes;for(let v in p){let _=p[v];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){let h=[],p=f.index,v=f.attributes.position,_=0;if(p!==null){let M=p.array;_=p.version;for(let x=0,w=M.length;x<w;x+=3){let C=M[x+0],y=M[x+1],S=M[x+2];h.push(C,y,y,S,S,C)}}else if(v!==void 0){let M=v.array;_=v.version;for(let x=0,w=M.length/3-1;x<w;x+=3){let C=x+0,y=x+1,S=x+2;h.push(C,y,y,S,S,C)}}else return;let m=new(Qh(h)?po:fo)(h,1);m.version=_;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function c(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function dv(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,v){n.drawElements(r,v,a,p*l),t.update(v,r,1)}function f(p,v,_){if(_===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,v,a,p*l,_),t.update(v,r,_)}function h(p,v,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,v[d]);else{m.multiDrawElementsWEBGL(r,v,0,a,p,0,_);let d=0;for(let M=0;M<_;M++)d+=v[M];t.update(d,r,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function pv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function mv(n,e){return n[0]-e[0]}function gv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function vv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new xt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){let h=u.morphTargetInfluences;if(e.isWebGL2===!0){let p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=p!==void 0?p.length:0,_=r.get(c);if(_===void 0||_.count!==v){let O=function(){z.dispose(),r.delete(c),c.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();let M=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,C=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],S=c.morphAttributes.color||[],A=0;M===!0&&(A=1),x===!0&&(A=2),w===!0&&(A=3);let g=c.attributes.position.count*A,b=1;g>e.maxTextureSize&&(b=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let R=new Float32Array(g*b*4*v),z=new ho(R,g,b,v);z.type=Gi,z.needsUpdate=!0;let K=A*4;for(let k=0;k<v;k++){let H=C[k],G=y[k],Z=S[k],Y=g*b*4*k;for(let ae=0;ae<H.count;ae++){let oe=ae*K;M===!0&&(o.fromBufferAttribute(H,ae),R[Y+oe+0]=o.x,R[Y+oe+1]=o.y,R[Y+oe+2]=o.z,R[Y+oe+3]=0),x===!0&&(o.fromBufferAttribute(G,ae),R[Y+oe+4]=o.x,R[Y+oe+5]=o.y,R[Y+oe+6]=o.z,R[Y+oe+7]=0),w===!0&&(o.fromBufferAttribute(Z,ae),R[Y+oe+8]=o.x,R[Y+oe+9]=o.y,R[Y+oe+10]=o.z,R[Y+oe+11]=Z.itemSize===4?o.w:1)}}_={count:v,texture:z,size:new ke(g,b)},r.set(c,_),c.addEventListener("dispose",O)}let m=0;for(let M=0;M<h.length;M++)m+=h[M];let d=c.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let p=h===void 0?0:h.length,v=i[c.id];if(v===void 0||v.length!==p){v=[];for(let x=0;x<p;x++)v[x]=[x,0];i[c.id]=v}for(let x=0;x<p;x++){let w=v[x];w[0]=x,w[1]=h[x]}v.sort(gv);for(let x=0;x<8;x++)x<p&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(mv);let _=c.morphAttributes.position,m=c.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let w=a[x],C=w[0],y=w[1];C!==Number.MAX_SAFE_INTEGER&&y?(_&&c.getAttribute("morphTarget"+x)!==_[C]&&c.setAttribute("morphTarget"+x,_[C]),m&&c.getAttribute("morphNormal"+x)!==m[C]&&c.setAttribute("morphNormal"+x,m[C]),s[x]=y,d+=y):(_&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),m&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),s[x]=0)}let M=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function yv(n,e,t,i){let s=new WeakMap;function r(l){let u=i.render.frame,c=l.geometry,f=e.get(l,c);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function a(l){let u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var xo=class extends Mn{constructor(e,t,i,s,r,o,a,l,u,c){if(c=c!==void 0?c:ms,c!==ms&&c!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ms&&(i=Vi),i===void 0&&c===ir&&(i=ps),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sf=new Mn,rf=new xo(1,1);rf.compareFunction=$h;var af=new ho,of=new Bl,lf=new go,ph=[],mh=[],gh=new Float32Array(16),vh=new Float32Array(9),yh=new Float32Array(4);function fr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ph[s];if(r===void 0&&(r=new Float32Array(s),ph[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Eo(n,e){let t=mh[e];t===void 0&&(t=new Int32Array(e),mh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function Sv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;yh.set(i),n.uniformMatrix2fv(this.addr,!1,yh),Zt(t,i)}}function wv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;vh.set(i),n.uniformMatrix3fv(this.addr,!1,vh),Zt(t,i)}}function Ev(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;gh.set(i),n.uniformMatrix4fv(this.addr,!1,gh),Zt(t,i)}}function Tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function Pv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function Iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function Dv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?rf:sf;t.setTexture2D(e||r,s)}function Uv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||of,s)}function Nv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||lf,s)}function Ov(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||af,s)}function zv(n){switch(n){case 5126:return xv;case 35664:return _v;case 35665:return bv;case 35666:return Mv;case 35674:return Sv;case 35675:return wv;case 35676:return Ev;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return Rv;case 35669:case 35673:return Cv;case 5125:return Pv;case 36294:return Lv;case 36295:return Iv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Ov}}function Fv(n,e){n.uniform1fv(this.addr,e)}function Bv(n,e){let t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function Hv(n,e){let t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function Vv(n,e){let t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function Gv(n,e){let t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wv(n,e){let t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qv(n,e){let t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xv(n,e){n.uniform1iv(this.addr,e)}function Yv(n,e){n.uniform2iv(this.addr,e)}function Kv(n,e){n.uniform3iv(this.addr,e)}function Zv(n,e){n.uniform4iv(this.addr,e)}function jv(n,e){n.uniform1uiv(this.addr,e)}function Jv(n,e){n.uniform2uiv(this.addr,e)}function $v(n,e){n.uniform3uiv(this.addr,e)}function Qv(n,e){n.uniform4uiv(this.addr,e)}function ey(n,e,t){let i=this.cache,s=e.length,r=Eo(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sf,r[o])}function ty(n,e,t){let i=this.cache,s=e.length,r=Eo(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||of,r[o])}function ny(n,e,t){let i=this.cache,s=e.length,r=Eo(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||lf,r[o])}function iy(n,e,t){let i=this.cache,s=e.length,r=Eo(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||af,r[o])}function sy(n){switch(n){case 5126:return Fv;case 35664:return Bv;case 35665:return Hv;case 35666:return Vv;case 35674:return Gv;case 35675:return Wv;case 35676:return qv;case 5124:case 35670:return Xv;case 35667:case 35671:return Yv;case 35668:case 35672:return Kv;case 35669:case 35673:return Zv;case 5125:return jv;case 36294:return Jv;case 36295:return $v;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}var Gl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zv(t.type)}},Wl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sy(t.type)}},ql=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function xh(n,e){n.seq.push(e),n.map[e.id]=e}function ry(n,e,t){let i=n.name,s=i.length;for(Rl.lastIndex=0;;){let r=Rl.exec(i),o=Rl.lastIndex,a=r[1],l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){xh(t,u===void 0?new Gl(a,n,e):new Wl(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ql(a),xh(t,f)),t=f}}}var er=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ry(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function _h(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ay=37297,oy=0;function ly(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function cy(n){let e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(n),i;switch(e===t?i="":e===ao&&t===ro?i="LinearDisplayP3ToLinearSRGB":e===ro&&t===ao&&(i="LinearSRGBToLinearDisplayP3"),n){case Ti:case wo:return[i,"LinearTransferOETF"];case sn:case pc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function bh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ly(n.getShaderSource(e),o)}else return s}function uy(n,e){let t=cy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hy(n,e){let t;switch(e){case gp:t="Linear";break;case vp:t="Reinhard";break;case yp:t="OptimizedCineon";break;case xp:t="ACESFilmic";break;case bp:t="AgX";break;case _p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function dy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Js).join(`
`)}function py(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function my(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Js(n){return n!==""}function Mh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(n){return n.replace(gy,yy)}var vy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yy(n,e){let t=ct[e];if(t===void 0){let i=vy.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xl(t)}var xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(n){return n.replace(xy,_y)}function _y(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function by(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function My(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===nr&&(e="ENVMAP_MODE_REFRACTION"),e}function wy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case pp:e="ENVMAP_BLENDING_MIX";break;case mp:e="ENVMAP_BLENDING_ADD";break}return e}function Ey(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ty(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=by(t),u=My(t),c=Sy(t),f=wy(t),h=Ey(t),p=t.isWebGL2?"":fy(t),v=dy(t),_=py(r),m=s.createProgram(),d,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Js).join(`
`),d.length>0&&(d+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Js).join(`
`),M.length>0&&(M+=`
`)):(d=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),M=[p,Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?ct.tonemapping_pars_fragment:"",t.toneMapping!==Wi?hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,uy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=Xl(o),o=Mh(o,t),o=Sh(o,t),a=Xl(a),a=Mh(a,t),a=Sh(a,t),o=wh(o),a=wh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let w=x+d+o,C=x+M+a,y=_h(s,s.VERTEX_SHADER,w),S=_h(s,s.FRAGMENT_SHADER,C);s.attachShader(m,y),s.attachShader(m,S),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(z){if(n.debug.checkShaderErrors){let K=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(y).trim(),k=s.getShaderInfoLog(S).trim(),H=!0,G=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,y,S);else{let Z=bh(s,y,"vertex"),Y=bh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+Z+`
`+Y)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(O===""||k==="")&&(G=!1);G&&(z.diagnostics={runnable:H,programLog:K,vertexShader:{log:O,prefix:d},fragmentShader:{log:k,prefix:M}})}s.deleteShader(y),s.deleteShader(S),g=new er(s,m),b=my(s,m)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,ay)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}var Ay=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Kl(e),t.set(e,i)),i}},Kl=class{constructor(e){this.id=Ay++,this.code=e,this.usedTimes=0}};function Ry(n,e,t,i,s,r,o){let a=new Gr,l=new Yl,u=[],c=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return g===0?"uv":`uv${g}`}function m(g,b,R,z,K){let O=z.fog,k=K.geometry,H=g.isMeshStandardMaterial?z.environment:null,G=(g.isMeshStandardMaterial?t:e).get(g.envMap||H),Z=G&&G.mapping===So?G.image.height:null,Y=v[g.type];g.precision!==null&&(p=s.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ae!==void 0?ae.length:0,Se=0;k.morphAttributes.position!==void 0&&(Se=1),k.morphAttributes.normal!==void 0&&(Se=2),k.morphAttributes.color!==void 0&&(Se=3);let te,de,q,X;if(Y){let it=ti[Y];te=it.vertexShader,de=it.fragmentShader}else te=g.vertexShader,de=g.fragmentShader,l.update(g),q=l.getVertexShaderID(g),X=l.getFragmentShaderID(g);let W=n.getRenderTarget(),$=K.isInstancedMesh===!0,Q=K.isBatchedMesh===!0,le=!!g.map,Ae=!!g.matcap,V=!!G,Ze=!!g.aoMap,Ce=!!g.lightMap,we=!!g.bumpMap,De=!!g.normalMap,$e=!!g.displacementMap,Ke=!!g.emissiveMap,L=!!g.metalnessMap,E=!!g.roughnessMap,j=g.anisotropy>0,_e=g.clearcoat>0,xe=g.iridescence>0,Ee=g.sheen>0,Be=g.transmission>0,Le=j&&!!g.anisotropyMap,Ue=_e&&!!g.clearcoatMap,qe=_e&&!!g.clearcoatNormalMap,Ye=_e&&!!g.clearcoatRoughnessMap,U=xe&&!!g.iridescenceMap,fe=xe&&!!g.iridescenceThicknessMap,ie=Ee&&!!g.sheenColorMap,ge=Ee&&!!g.sheenRoughnessMap,ye=!!g.specularMap,he=!!g.specularColorMap,T=!!g.specularIntensityMap,ce=Be&&!!g.transmissionMap,Me=Be&&!!g.thicknessMap,me=!!g.gradientMap,ue=!!g.alphaMap,B=g.alphaTest>0,pe=!!g.alphaHash,Re=!!g.extensions,Ve=!!k.attributes.uv1,Pe=!!k.attributes.uv2,Te=!!k.attributes.uv3,He=Wi;return g.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(He=n.toneMapping),{isWebGL2:c,shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:te,fragmentShader:de,defines:g.defines,customVertexShaderID:q,customFragmentShaderID:X,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:Q,instancing:$,instancingColor:$&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ti,map:le,matcap:Ae,envMap:V,envMapMode:V&&G.mapping,envMapCubeUVHeight:Z,aoMap:Ze,lightMap:Ce,bumpMap:we,normalMap:De,displacementMap:h&&$e,emissiveMap:Ke,normalMapObjectSpace:De&&g.normalMapType===Dp,normalMapTangentSpace:De&&g.normalMapType===kp,metalnessMap:L,roughnessMap:E,anisotropy:j,anisotropyMap:Le,clearcoat:_e,clearcoatMap:Ue,clearcoatNormalMap:qe,clearcoatRoughnessMap:Ye,iridescence:xe,iridescenceMap:U,iridescenceThicknessMap:fe,sheen:Ee,sheenColorMap:ie,sheenRoughnessMap:ge,specularMap:ye,specularColorMap:he,specularIntensityMap:T,transmission:Be,transmissionMap:ce,thicknessMap:Me,gradientMap:me,opaque:g.transparent===!1&&g.blending===$s,alphaMap:ue,alphaTest:B,alphaHash:pe,combine:g.combine,mapUv:le&&_(g.map.channel),aoMapUv:Ze&&_(g.aoMap.channel),lightMapUv:Ce&&_(g.lightMap.channel),bumpMapUv:we&&_(g.bumpMap.channel),normalMapUv:De&&_(g.normalMap.channel),displacementMapUv:$e&&_(g.displacementMap.channel),emissiveMapUv:Ke&&_(g.emissiveMap.channel),metalnessMapUv:L&&_(g.metalnessMap.channel),roughnessMapUv:E&&_(g.roughnessMap.channel),anisotropyMapUv:Le&&_(g.anisotropyMap.channel),clearcoatMapUv:Ue&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(g.sheenRoughnessMap.channel),specularMapUv:ye&&_(g.specularMap.channel),specularColorMapUv:he&&_(g.specularColorMap.channel),specularIntensityMapUv:T&&_(g.specularIntensityMap.channel),transmissionMapUv:ce&&_(g.transmissionMap.channel),thicknessMapUv:Me&&_(g.thicknessMap.channel),alphaMapUv:ue&&_(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(De||j),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ve,vertexUv2s:Pe,vertexUv3s:Te,pointsUvs:K.isPoints===!0&&!!k.attributes.uv&&(le||ue),fog:!!O,useFog:g.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,useLegacyLights:n._useLegacyLights,decodeVideoTexture:le&&g.map.isVideoTexture===!0&&Mt.getTransfer(g.map.colorSpace)===Rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===hn,flipSided:g.side===qt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:Re&&g.extensions.derivatives===!0,extensionFragDepth:Re&&g.extensions.fragDepth===!0,extensionDrawBuffers:Re&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&g.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)b.push(R),b.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(M(b,g),x(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function M(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function x(g,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),g.push(a.mask)}function w(g){let b=v[g.type],R;if(b){let z=ti[b];R=hr.clone(z.uniforms)}else R=g.uniforms;return R}function C(g,b){let R;for(let z=0,K=u.length;z<K;z++){let O=u[z];if(O.cacheKey===b){R=O,++R.usedTimes;break}}return R===void 0&&(R=new Ty(n,b,g,r),u.push(R)),R}function y(g){if(--g.usedTimes===0){let b=u.indexOf(g);u[b]=u[u.length-1],u.pop(),g.destroy()}}function S(g){l.remove(g)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:C,releaseProgram:y,releaseShaderCache:S,programs:u,dispose:A}}function Cy(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Py(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Th(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ah(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,p,v,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,v,_,m){let d=o(f,h,p,v,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,h,p,v,_,m){let d=o(f,h,p,v,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||Py),i.length>1&&i.sort(h||Th),s.length>1&&s.sort(h||Th)}function c(){for(let f=e,h=n.length;f<h;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function Ly(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ah,n.set(i,[o])):s>=r.length?(o=new Ah,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Iy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new et};break;case"SpotLight":t={position:new N,direction:new N,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function ky(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Dy=0;function Uy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ny(n,e){let t=new Iy,i=ky(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new N);let r=new N,o=new Xt,a=new Xt;function l(c,f){let h=0,p=0,v=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let _=0,m=0,d=0,M=0,x=0,w=0,C=0,y=0,S=0,A=0,g=0;c.sort(Uy);let b=f===!0?Math.PI:1;for(let z=0,K=c.length;z<K;z++){let O=c[z],k=O.color,H=O.intensity,G=O.distance,Z=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=k.r*H*b,p+=k.g*H*b,v+=k.b*H*b;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(O.sh.coefficients[Y],H);g++}else if(O.isDirectionalLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*b),O.castShadow){let ae=O.shadow,oe=i.get(O);oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,s.directionalShadow[_]=oe,s.directionalShadowMap[_]=Z,s.directionalShadowMatrix[_]=O.shadow.matrix,w++}s.directional[_]=Y,_++}else if(O.isSpotLight){let Y=t.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(k).multiplyScalar(H*b),Y.distance=G,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,s.spot[d]=Y;let ae=O.shadow;if(O.map&&(s.spotLightMap[S]=O.map,S++,ae.updateMatrices(O),O.castShadow&&A++),s.spotLightMatrix[d]=ae.matrix,O.castShadow){let oe=i.get(O);oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,s.spotShadow[d]=oe,s.spotShadowMap[d]=Z,y++}d++}else if(O.isRectAreaLight){let Y=t.get(O);Y.color.copy(k).multiplyScalar(H),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),s.rectArea[M]=Y,M++}else if(O.isPointLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*b),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){let ae=O.shadow,oe=i.get(O);oe.shadowBias=ae.bias,oe.shadowNormalBias=ae.normalBias,oe.shadowRadius=ae.radius,oe.shadowMapSize=ae.mapSize,oe.shadowCameraNear=ae.camera.near,oe.shadowCameraFar=ae.camera.far,s.pointShadow[m]=oe,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=O.shadow.matrix,C++}s.point[m]=Y,m++}else if(O.isHemisphereLight){let Y=t.get(O);Y.skyColor.copy(O.color).multiplyScalar(H*b),Y.groundColor.copy(O.groundColor).multiplyScalar(H*b),s.hemi[x]=Y,x++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=v;let R=s.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==M||R.hemiLength!==x||R.numDirectionalShadows!==w||R.numPointShadows!==C||R.numSpotShadows!==y||R.numSpotMaps!==S||R.numLightProbes!==g)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=M,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=y,s.spotShadowMap.length=y,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=y+S-A,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=A,s.numLightProbes=g,R.directionalLength=_,R.pointLength=m,R.spotLength=d,R.rectAreaLength=M,R.hemiLength=x,R.numDirectionalShadows=w,R.numPointShadows=C,R.numSpotShadows=y,R.numSpotMaps=S,R.numLightProbes=g,s.version=Dy++)}function u(c,f){let h=0,p=0,v=0,_=0,m=0,d=f.matrixWorldInverse;for(let M=0,x=c.length;M<x;M++){let w=c[M];if(w.isDirectionalLight){let C=s.directional[h];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),h++}else if(w.isSpotLight){let C=s.spot[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),v++}else if(w.isRectAreaLight){let C=s.rectArea[_];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(w.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(d),p++}else if(w.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:s}}function Rh(n,e){let t=new Ny(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Oy(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Rh(n,e),t.set(r,[l])):o>=a.length?(l=new Rh(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Zl=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jl=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
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
}`;function By(n,e,t){let i=new vo,s=new ke,r=new ke,o=new xt,a=new Zl({depthPacking:Ip}),l=new jl,u={},c=t.maxTextureSize,f={[qi]:qt,[qt]:qi,[hn]:hn},h=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:zy,fragmentShader:Fy}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let v=new It;v.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new vt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let d=this.type;this.render=function(y,S,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let g=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ii),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let K=d!==Mi&&this.type===Mi,O=d===Mi&&this.type!==Mi;for(let k=0,H=y.length;k<H;k++){let G=y[k],Z=G.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Y=Z.getFrameExtents();if(s.multiply(Y),r.copy(Z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/Y.x),s.x=r.x*Y.x,Z.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/Y.y),s.y=r.y*Y.y,Z.mapSize.y=r.y)),Z.map===null||K===!0||O===!0){let oe=this.type!==Mi?{minFilter:nn,magFilter:nn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new an(s.x,s.y,oe),Z.map.texture.name=G.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let ae=Z.getViewportCount();for(let oe=0;oe<ae;oe++){let Se=Z.getViewport(oe);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),z.viewport(o),Z.updateMatrices(G,oe),i=Z.getFrustum(),w(S,A,Z.camera,G,this.type)}Z.isPointLightShadow!==!0&&this.type===Mi&&M(Z,A),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(g,b,R)};function M(y,S){let A=e.update(_);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new an(s.x,s.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(S,null,A,h,_,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(S,null,A,p,_,null)}function x(y,S,A,g){let b=null,R=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0)b=R;else if(b=A.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let z=b.uuid,K=S.uuid,O=u[z];O===void 0&&(O={},u[z]=O);let k=O[K];k===void 0&&(k=b.clone(),O[K]=k,S.addEventListener("dispose",C)),b=k}if(b.visible=S.visible,b.wireframe=S.wireframe,g===Mi?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:f[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=n.properties.get(b);z.light=A}return b}function w(y,S,A,g,b){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Mi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);let K=e.update(y),O=y.material;if(Array.isArray(O)){let k=K.groups;for(let H=0,G=k.length;H<G;H++){let Z=k[H],Y=O[Z.materialIndex];if(Y&&Y.visible){let ae=x(y,Y,g,b);y.onBeforeShadow(n,y,S,A,K,ae,Z),n.renderBufferDirect(A,null,K,ae,y,Z),y.onAfterShadow(n,y,S,A,K,ae,Z)}}}else if(O.visible){let k=x(y,O,g,b);y.onBeforeShadow(n,y,S,A,K,k,null),n.renderBufferDirect(A,null,K,k,y,null),y.onAfterShadow(n,y,S,A,K,k,null)}}let z=y.children;for(let K=0,O=z.length;K<O;K++)w(z[K],S,A,g,b)}function C(y){y.target.removeEventListener("dispose",C);for(let A in u){let g=u[A],b=y.target.uuid;b in g&&(g[b].dispose(),delete g[b])}}}function Hy(n,e,t){let i=t.isWebGL2;function s(){let B=!1,pe=new xt,Re=null,Ve=new xt(0,0,0,0);return{setMask:function(Pe){Re!==Pe&&!B&&(n.colorMask(Pe,Pe,Pe,Pe),Re=Pe)},setLocked:function(Pe){B=Pe},setClear:function(Pe,Te,He,nt,it){it===!0&&(Pe*=nt,Te*=nt,He*=nt),pe.set(Pe,Te,He,nt),Ve.equals(pe)===!1&&(n.clearColor(Pe,Te,He,nt),Ve.copy(pe))},reset:function(){B=!1,Re=null,Ve.set(-1,0,0,0)}}}function r(){let B=!1,pe=null,Re=null,Ve=null;return{setTest:function(Pe){Pe?Q(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Pe){pe!==Pe&&!B&&(n.depthMask(Pe),pe=Pe)},setFunc:function(Pe){if(Re!==Pe){switch(Pe){case op:n.depthFunc(n.NEVER);break;case lp:n.depthFunc(n.ALWAYS);break;case cp:n.depthFunc(n.LESS);break;case to:n.depthFunc(n.LEQUAL);break;case up:n.depthFunc(n.EQUAL);break;case hp:n.depthFunc(n.GEQUAL);break;case fp:n.depthFunc(n.GREATER);break;case dp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Pe}},setLocked:function(Pe){B=Pe},setClear:function(Pe){Ve!==Pe&&(n.clearDepth(Pe),Ve=Pe)},reset:function(){B=!1,pe=null,Re=null,Ve=null}}}function o(){let B=!1,pe=null,Re=null,Ve=null,Pe=null,Te=null,He=null,nt=null,it=null;return{setTest:function(je){B||(je?Q(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(je){pe!==je&&!B&&(n.stencilMask(je),pe=je)},setFunc:function(je,mt,Ut){(Re!==je||Ve!==mt||Pe!==Ut)&&(n.stencilFunc(je,mt,Ut),Re=je,Ve=mt,Pe=Ut)},setOp:function(je,mt,Ut){(Te!==je||He!==mt||nt!==Ut)&&(n.stencilOp(je,mt,Ut),Te=je,He=mt,nt=Ut)},setLocked:function(je){B=je},setClear:function(je){it!==je&&(n.clearStencil(je),it=je)},reset:function(){B=!1,pe=null,Re=null,Ve=null,Pe=null,Te=null,He=null,nt=null,it=null}}}let a=new s,l=new r,u=new o,c=new WeakMap,f=new WeakMap,h={},p={},v=new WeakMap,_=[],m=null,d=!1,M=null,x=null,w=null,C=null,y=null,S=null,A=null,g=new et(0,0,0),b=0,R=!1,z=null,K=null,O=null,k=null,H=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,Y=0,ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Z=Y>=1):ae.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Z=Y>=2);let oe=null,Se={},te=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),q=new xt().fromArray(te),X=new xt().fromArray(de);function W(B,pe,Re,Ve){let Pe=new Uint8Array(4),Te=n.createTexture();n.bindTexture(B,Te),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<Re;He++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,Ve,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(pe+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return Te}let $={};$[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&($[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Q(n.DEPTH_TEST),l.setFunc(to),Ke(!1),L(cu),Q(n.CULL_FACE),De(ii);function Q(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function le(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Ae(B,pe){return p[B]!==pe?(n.bindFramebuffer(B,pe),p[B]=pe,i&&(B===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=pe),B===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function V(B,pe){let Re=_,Ve=!1;if(B)if(Re=v.get(pe),Re===void 0&&(Re=[],v.set(pe,Re)),B.isWebGLMultipleRenderTargets){let Pe=B.texture;if(Re.length!==Pe.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,He=Pe.length;Te<He;Te++)Re[Te]=n.COLOR_ATTACHMENT0+Te;Re.length=Pe.length,Ve=!0}}else Re[0]!==n.COLOR_ATTACHMENT0&&(Re[0]=n.COLOR_ATTACHMENT0,Ve=!0);else Re[0]!==n.BACK&&(Re[0]=n.BACK,Ve=!0);Ve&&(t.isWebGL2?n.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Ze(B){return m!==B?(n.useProgram(B),m=B,!0):!1}let Ce={[hs]:n.FUNC_ADD,[Xd]:n.FUNC_SUBTRACT,[Yd]:n.FUNC_REVERSE_SUBTRACT};if(i)Ce[fu]=n.MIN,Ce[du]=n.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(Ce[fu]=B.MIN_EXT,Ce[du]=B.MAX_EXT)}let we={[Kd]:n.ZERO,[Zd]:n.ONE,[jd]:n.SRC_COLOR,[Ll]:n.SRC_ALPHA,[np]:n.SRC_ALPHA_SATURATE,[ep]:n.DST_COLOR,[$d]:n.DST_ALPHA,[Jd]:n.ONE_MINUS_SRC_COLOR,[Il]:n.ONE_MINUS_SRC_ALPHA,[tp]:n.ONE_MINUS_DST_COLOR,[Qd]:n.ONE_MINUS_DST_ALPHA,[ip]:n.CONSTANT_COLOR,[sp]:n.ONE_MINUS_CONSTANT_COLOR,[rp]:n.CONSTANT_ALPHA,[ap]:n.ONE_MINUS_CONSTANT_ALPHA};function De(B,pe,Re,Ve,Pe,Te,He,nt,it,je){if(B===ii){d===!0&&(le(n.BLEND),d=!1);return}if(d===!1&&(Q(n.BLEND),d=!0),B!==qd){if(B!==M||je!==R){if((x!==hs||y!==hs)&&(n.blendEquation(n.FUNC_ADD),x=hs,y=hs),je)switch(B){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ct:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ct:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,C=null,S=null,A=null,g.set(0,0,0),b=0,M=B,R=je}return}Pe=Pe||pe,Te=Te||Re,He=He||Ve,(pe!==x||Pe!==y)&&(n.blendEquationSeparate(Ce[pe],Ce[Pe]),x=pe,y=Pe),(Re!==w||Ve!==C||Te!==S||He!==A)&&(n.blendFuncSeparate(we[Re],we[Ve],we[Te],we[He]),w=Re,C=Ve,S=Te,A=He),(nt.equals(g)===!1||it!==b)&&(n.blendColor(nt.r,nt.g,nt.b,it),g.copy(nt),b=it),M=B,R=!1}function $e(B,pe){B.side===hn?le(n.CULL_FACE):Q(n.CULL_FACE);let Re=B.side===qt;pe&&(Re=!Re),Ke(Re),B.blending===$s&&B.transparent===!1?De(ii):De(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);let Ve=B.stencilWrite;u.setTest(Ve),Ve&&(u.setMask(B.stencilWriteMask),u.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),u.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),j(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(B){z!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),z=B)}function L(B){B!==Vd?(Q(n.CULL_FACE),B!==K&&(B===cu?n.cullFace(n.BACK):B===Gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),K=B}function E(B){B!==O&&(Z&&n.lineWidth(B),O=B)}function j(B,pe,Re){B?(Q(n.POLYGON_OFFSET_FILL),(k!==pe||H!==Re)&&(n.polygonOffset(pe,Re),k=pe,H=Re)):le(n.POLYGON_OFFSET_FILL)}function _e(B){B?Q(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function xe(B){B===void 0&&(B=n.TEXTURE0+G-1),oe!==B&&(n.activeTexture(B),oe=B)}function Ee(B,pe,Re){Re===void 0&&(oe===null?Re=n.TEXTURE0+G-1:Re=oe);let Ve=Se[Re];Ve===void 0&&(Ve={type:void 0,texture:void 0},Se[Re]=Ve),(Ve.type!==B||Ve.texture!==pe)&&(oe!==Re&&(n.activeTexture(Re),oe=Re),n.bindTexture(B,pe||$[B]),Ve.type=B,Ve.texture=pe)}function Be(){let B=Se[oe];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function T(B){q.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),q.copy(B))}function ce(B){X.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),X.copy(B))}function Me(B,pe){let Re=f.get(pe);Re===void 0&&(Re=new WeakMap,f.set(pe,Re));let Ve=Re.get(B);Ve===void 0&&(Ve=n.getUniformBlockIndex(pe,B.name),Re.set(B,Ve))}function me(B,pe){let Ve=f.get(pe).get(B);c.get(pe)!==Ve&&(n.uniformBlockBinding(pe,Ve,B.__bindingPointIndex),c.set(pe,Ve))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,Se={},p={},v=new WeakMap,_=[],m=null,d=!1,M=null,x=null,w=null,C=null,y=null,S=null,A=null,g=new et(0,0,0),b=0,R=!1,z=null,K=null,O=null,k=null,H=null,q.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Q,disable:le,bindFramebuffer:Ae,drawBuffers:V,useProgram:Ze,setBlending:De,setMaterial:$e,setFlipSided:Ke,setCullFace:L,setLineWidth:E,setPolygonOffset:j,setScissorTest:_e,activeTexture:xe,bindTexture:Ee,unbindTexture:Be,compressedTexImage2D:Le,compressedTexImage3D:Ue,texImage2D:ye,texImage3D:he,updateUBOMapping:Me,uniformBlockBinding:me,texStorage2D:ie,texStorage3D:ge,texSubImage2D:qe,texSubImage3D:Ye,compressedTexSubImage2D:U,compressedTexSubImage3D:fe,scissor:T,viewport:ce,reset:ue}}function Vy(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,E){return p?new OffscreenCanvas(L,E):Vr("canvas")}function _(L,E,j,_e){let xe=1;if((L.width>_e||L.height>_e)&&(xe=_e/Math.max(L.width,L.height)),xe<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let Ee=E?lo:Math.floor,Be=Ee(xe*L.width),Le=Ee(xe*L.height);f===void 0&&(f=v(Be,Le));let Ue=j?v(Be,Le):f;return Ue.width=Be,Ue.height=Le,Ue.getContext("2d").drawImage(L,0,0,Be,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Be+"x"+Le+")."),Ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return zl(L.width)&&zl(L.height)}function d(L){return a?!1:L.wrapS!==Xn||L.wrapT!==Xn||L.minFilter!==nn&&L.minFilter!==en}function M(L,E){return L.generateMipmaps&&E&&L.minFilter!==nn&&L.minFilter!==en}function x(L){n.generateMipmap(L)}function w(L,E,j,_e,xe=!1){if(a===!1)return E;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ee=E;if(E===n.RED&&(j===n.FLOAT&&(Ee=n.R32F),j===n.HALF_FLOAT&&(Ee=n.R16F),j===n.UNSIGNED_BYTE&&(Ee=n.R8)),E===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(Ee=n.R8UI),j===n.UNSIGNED_SHORT&&(Ee=n.R16UI),j===n.UNSIGNED_INT&&(Ee=n.R32UI),j===n.BYTE&&(Ee=n.R8I),j===n.SHORT&&(Ee=n.R16I),j===n.INT&&(Ee=n.R32I)),E===n.RG&&(j===n.FLOAT&&(Ee=n.RG32F),j===n.HALF_FLOAT&&(Ee=n.RG16F),j===n.UNSIGNED_BYTE&&(Ee=n.RG8)),E===n.RGBA){let Be=xe?so:Mt.getTransfer(_e);j===n.FLOAT&&(Ee=n.RGBA32F),j===n.HALF_FLOAT&&(Ee=n.RGBA16F),j===n.UNSIGNED_BYTE&&(Ee=Be===Rt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(Ee=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(Ee=n.RGB5_A1)}return(Ee===n.R16F||Ee===n.R32F||Ee===n.RG16F||Ee===n.RG32F||Ee===n.RGBA16F||Ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function C(L,E,j){return M(L,j)===!0||L.isFramebufferTexture&&L.minFilter!==nn&&L.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function y(L){return L===nn||L===pu||L===el?n.NEAREST:n.LINEAR}function S(L){let E=L.target;E.removeEventListener("dispose",S),g(E),E.isVideoTexture&&c.delete(E)}function A(L){let E=L.target;E.removeEventListener("dispose",A),R(E)}function g(L){let E=i.get(L);if(E.__webglInit===void 0)return;let j=L.source,_e=h.get(j);if(_e){let xe=_e[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(L),Object.keys(_e).length===0&&h.delete(j)}i.remove(L)}function b(L){let E=i.get(L);n.deleteTexture(E.__webglTexture);let j=L.source,_e=h.get(j);delete _e[E.__cacheKey],o.memory.textures--}function R(L){let E=L.texture,j=i.get(L),_e=i.get(E);if(_e.__webglTexture!==void 0&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(j.__webglFramebuffer[xe]))for(let Ee=0;Ee<j.__webglFramebuffer[xe].length;Ee++)n.deleteFramebuffer(j.__webglFramebuffer[xe][Ee]);else n.deleteFramebuffer(j.__webglFramebuffer[xe]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[xe])}else{if(Array.isArray(j.__webglFramebuffer))for(let xe=0;xe<j.__webglFramebuffer.length;xe++)n.deleteFramebuffer(j.__webglFramebuffer[xe]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let xe=0;xe<j.__webglColorRenderbuffer.length;xe++)j.__webglColorRenderbuffer[xe]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[xe]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let xe=0,Ee=E.length;xe<Ee;xe++){let Be=i.get(E[xe]);Be.__webglTexture&&(n.deleteTexture(Be.__webglTexture),o.memory.textures--),i.remove(E[xe])}i.remove(E),i.remove(L)}let z=0;function K(){z=0}function O(){let L=z;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),z+=1,L}function k(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function H(L,E){let j=i.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){let _e=L.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(j,L,E);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function G(L,E){let j=i.get(L);if(L.version>0&&j.__version!==L.version){q(j,L,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function Z(L,E){let j=i.get(L);if(L.version>0&&j.__version!==L.version){q(j,L,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function Y(L,E){let j=i.get(L);if(L.version>0&&j.__version!==L.version){X(j,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}let ae={[Ei]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[Ul]:n.MIRRORED_REPEAT},oe={[nn]:n.NEAREST,[pu]:n.NEAREST_MIPMAP_NEAREST,[el]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Mp]:n.LINEAR_MIPMAP_NEAREST,[Br]:n.LINEAR_MIPMAP_LINEAR},Se={[Up]:n.NEVER,[Hp]:n.ALWAYS,[Np]:n.LESS,[$h]:n.LEQUAL,[Op]:n.EQUAL,[Bp]:n.GEQUAL,[zp]:n.GREATER,[Fp]:n.NOTEQUAL};function te(L,E,j){if(j?(n.texParameteri(L,n.TEXTURE_WRAP_S,ae[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ae[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ae[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,oe[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,oe[E.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Xn||E.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,y(E.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,y(E.minFilter)),E.minFilter!==nn&&E.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let _e=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===nn||E.minFilter!==el&&E.minFilter!==Br||E.type===Gi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Rn&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(L,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function de(L,E){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",S));let _e=E.source,xe=h.get(_e);xe===void 0&&(xe={},h.set(_e,xe));let Ee=k(E);if(Ee!==L.__cacheKey){xe[Ee]===void 0&&(xe[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),xe[Ee].usedTimes++;let Be=xe[L.__cacheKey];Be!==void 0&&(xe[L.__cacheKey].usedTimes--,Be.usedTimes===0&&b(E)),L.__cacheKey=Ee,L.__webglTexture=xe[Ee].texture}return j}function q(L,E,j){let _e=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=n.TEXTURE_3D);let xe=de(L,E),Ee=E.source;t.bindTexture(_e,L.__webglTexture,n.TEXTURE0+j);let Be=i.get(Ee);if(Ee.version!==Be.__version||xe===!0){t.activeTexture(n.TEXTURE0+j);let Le=Mt.getPrimaries(Mt.workingColorSpace),Ue=E.colorSpace===tn?null:Mt.getPrimaries(E.colorSpace),qe=E.colorSpace===tn||Le===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ye=d(E)&&m(E.image)===!1,U=_(E.image,Ye,!1,s.maxTextureSize);U=Ke(E,U);let fe=m(U)||a,ie=r.convert(E.format,E.colorSpace),ge=r.convert(E.type),ye=w(E.internalFormat,ie,ge,E.colorSpace,E.isVideoTexture);te(_e,E,fe);let he,T=E.mipmaps,ce=a&&E.isVideoTexture!==!0&&ye!==jh,Me=Be.__version===void 0||xe===!0,me=C(E,U,fe);if(E.isDepthTexture)ye=n.DEPTH_COMPONENT,a?E.type===Gi?ye=n.DEPTH_COMPONENT32F:E.type===Vi?ye=n.DEPTH_COMPONENT24:E.type===ps?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:E.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ms&&ye===n.DEPTH_COMPONENT&&E.type!==dc&&E.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Vi,ge=r.convert(E.type)),E.format===ir&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,E.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ps,ge=r.convert(E.type))),Me&&(ce?t.texStorage2D(n.TEXTURE_2D,1,ye,U.width,U.height):t.texImage2D(n.TEXTURE_2D,0,ye,U.width,U.height,0,ie,ge,null));else if(E.isDataTexture)if(T.length>0&&fe){ce&&Me&&t.texStorage2D(n.TEXTURE_2D,me,ye,T[0].width,T[0].height);for(let ue=0,B=T.length;ue<B;ue++)he=T[ue],ce?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,he.width,he.height,ie,ge,he.data):t.texImage2D(n.TEXTURE_2D,ue,ye,he.width,he.height,0,ie,ge,he.data);E.generateMipmaps=!1}else ce?(Me&&t.texStorage2D(n.TEXTURE_2D,me,ye,U.width,U.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,U.width,U.height,ie,ge,U.data)):t.texImage2D(n.TEXTURE_2D,0,ye,U.width,U.height,0,ie,ge,U.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ce&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,T[0].width,T[0].height,U.depth);for(let ue=0,B=T.length;ue<B;ue++)he=T[ue],E.format!==Yn?ie!==null?ce?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,he.width,he.height,U.depth,ie,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,ye,he.width,he.height,U.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,he.width,he.height,U.depth,ie,ge,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,ye,he.width,he.height,U.depth,0,ie,ge,he.data)}else{ce&&Me&&t.texStorage2D(n.TEXTURE_2D,me,ye,T[0].width,T[0].height);for(let ue=0,B=T.length;ue<B;ue++)he=T[ue],E.format!==Yn?ie!==null?ce?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,he.width,he.height,ie,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,he.width,he.height,ie,ge,he.data):t.texImage2D(n.TEXTURE_2D,ue,ye,he.width,he.height,0,ie,ge,he.data)}else if(E.isDataArrayTexture)ce?(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,U.width,U.height,U.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,ie,ge,U.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,U.width,U.height,U.depth,0,ie,ge,U.data);else if(E.isData3DTexture)ce?(Me&&t.texStorage3D(n.TEXTURE_3D,me,ye,U.width,U.height,U.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,ie,ge,U.data)):t.texImage3D(n.TEXTURE_3D,0,ye,U.width,U.height,U.depth,0,ie,ge,U.data);else if(E.isFramebufferTexture){if(Me)if(ce)t.texStorage2D(n.TEXTURE_2D,me,ye,U.width,U.height);else{let ue=U.width,B=U.height;for(let pe=0;pe<me;pe++)t.texImage2D(n.TEXTURE_2D,pe,ye,ue,B,0,ie,ge,null),ue>>=1,B>>=1}}else if(T.length>0&&fe){ce&&Me&&t.texStorage2D(n.TEXTURE_2D,me,ye,T[0].width,T[0].height);for(let ue=0,B=T.length;ue<B;ue++)he=T[ue],ce?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ie,ge,he):t.texImage2D(n.TEXTURE_2D,ue,ye,ie,ge,he);E.generateMipmaps=!1}else ce?(Me&&t.texStorage2D(n.TEXTURE_2D,me,ye,U.width,U.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie,ge,U)):t.texImage2D(n.TEXTURE_2D,0,ye,ie,ge,U);M(E,fe)&&x(_e),Be.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function X(L,E,j){if(E.image.length!==6)return;let _e=de(L,E),xe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+j);let Ee=i.get(xe);if(xe.version!==Ee.__version||_e===!0){t.activeTexture(n.TEXTURE0+j);let Be=Mt.getPrimaries(Mt.workingColorSpace),Le=E.colorSpace===tn?null:Mt.getPrimaries(E.colorSpace),Ue=E.colorSpace===tn||Be===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let qe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,U=[];for(let ue=0;ue<6;ue++)!qe&&!Ye?U[ue]=_(E.image[ue],!1,!0,s.maxCubemapSize):U[ue]=Ye?E.image[ue].image:E.image[ue],U[ue]=Ke(E,U[ue]);let fe=U[0],ie=m(fe)||a,ge=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),he=w(E.internalFormat,ge,ye,E.colorSpace),T=a&&E.isVideoTexture!==!0,ce=Ee.__version===void 0||_e===!0,Me=C(E,fe,ie);te(n.TEXTURE_CUBE_MAP,E,ie);let me;if(qe){T&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,he,fe.width,fe.height);for(let ue=0;ue<6;ue++){me=U[ue].mipmaps;for(let B=0;B<me.length;B++){let pe=me[B];E.format!==Yn?ge!==null?T?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,B,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,B,he,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,B,0,0,pe.width,pe.height,ge,ye,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,B,he,pe.width,pe.height,0,ge,ye,pe.data)}}}else{me=E.mipmaps,T&&ce&&(me.length>0&&Me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,he,U[0].width,U[0].height));for(let ue=0;ue<6;ue++)if(Ye){T?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,U[ue].width,U[ue].height,ge,ye,U[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,U[ue].width,U[ue].height,0,ge,ye,U[ue].data);for(let B=0;B<me.length;B++){let Re=me[B].image[ue].image;T?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,B+1,0,0,Re.width,Re.height,ge,ye,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,B+1,he,Re.width,Re.height,0,ge,ye,Re.data)}}else{T?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ge,ye,U[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,ge,ye,U[ue]);for(let B=0;B<me.length;B++){let pe=me[B];T?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,B+1,0,0,ge,ye,pe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,B+1,he,ge,ye,pe.image[ue])}}}M(E,ie)&&x(n.TEXTURE_CUBE_MAP),Ee.__version=xe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function W(L,E,j,_e,xe,Ee){let Be=r.convert(j.format,j.colorSpace),Le=r.convert(j.type),Ue=w(j.internalFormat,Be,Le,j.colorSpace);if(!i.get(E).__hasExternalTextures){let Ye=Math.max(1,E.width>>Ee),U=Math.max(1,E.height>>Ee);xe===n.TEXTURE_3D||xe===n.TEXTURE_2D_ARRAY?t.texImage3D(xe,Ee,Ue,Ye,U,E.depth,0,Be,Le,null):t.texImage2D(xe,Ee,Ue,Ye,U,0,Be,Le,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),De(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,xe,i.get(j).__webglTexture,0,we(E)):(xe===n.TEXTURE_2D||xe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,xe,i.get(j).__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(L,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer&&!E.stencilBuffer){let _e=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||De(E)){let xe=E.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Gi?_e=n.DEPTH_COMPONENT32F:xe.type===Vi&&(_e=n.DEPTH_COMPONENT24));let Ee=we(E);De(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,_e,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,_e,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(E.depthBuffer&&E.stencilBuffer){let _e=we(E);j&&De(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,n.DEPTH24_STENCIL8,E.width,E.height):De(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{let _e=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let xe=0;xe<_e.length;xe++){let Ee=_e[xe],Be=r.convert(Ee.format,Ee.colorSpace),Le=r.convert(Ee.type),Ue=w(Ee.internalFormat,Be,Le,Ee.colorSpace),qe=we(E);j&&De(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Ue,E.width,E.height):De(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,Ue,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);let _e=i.get(E.depthTexture).__webglTexture,xe=we(E);if(E.depthTexture.format===ms)De(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0);else if(E.depthTexture.format===ir)De(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function le(L){let E=i.get(L),j=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Q(E.__webglFramebuffer,L)}else if(j){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]=n.createRenderbuffer(),$(E.__webglDepthbuffer[_e],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),$(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(L,E,j){let _e=i.get(L);E!==void 0&&W(_e.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&le(L)}function V(L){let E=L.texture,j=i.get(L),_e=i.get(E);L.addEventListener("dispose",A),L.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=E.version,o.memory.textures++);let xe=L.isWebGLCubeRenderTarget===!0,Ee=L.isWebGLMultipleRenderTargets===!0,Be=m(L)||a;if(xe){j.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(a&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Le]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)j.__webglFramebuffer[Le][Ue]=n.createFramebuffer()}else j.__webglFramebuffer[Le]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Le=0;Le<E.mipmaps.length;Le++)j.__webglFramebuffer[Le]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ee)if(s.drawBuffers){let Le=L.texture;for(let Ue=0,qe=Le.length;Ue<qe;Ue++){let Ye=i.get(Le[Ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&De(L)===!1){let Le=Ee?E:[E];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Le.length;Ue++){let qe=Le[Ue];j.__webglColorRenderbuffer[Ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Ue]);let Ye=r.convert(qe.format,qe.colorSpace),U=r.convert(qe.type),fe=w(qe.internalFormat,Ye,U,qe.colorSpace,L.isXRRenderTarget===!0),ie=we(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,fe,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,j.__webglColorRenderbuffer[Ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),$(j.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),te(n.TEXTURE_CUBE_MAP,E,Be);for(let Le=0;Le<6;Le++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)W(j.__webglFramebuffer[Le][Ue],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ue);else W(j.__webglFramebuffer[Le],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);M(E,Be)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){let Le=L.texture;for(let Ue=0,qe=Le.length;Ue<qe;Ue++){let Ye=Le[Ue],U=i.get(Ye);t.bindTexture(n.TEXTURE_2D,U.__webglTexture),te(n.TEXTURE_2D,Ye,Be),W(j.__webglFramebuffer,L,Ye,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,0),M(Ye,Be)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let Le=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?Le=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Le,_e.__webglTexture),te(Le,E,Be),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)W(j.__webglFramebuffer[Ue],L,E,n.COLOR_ATTACHMENT0,Le,Ue);else W(j.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,Le,0);M(E,Be)&&x(Le),t.unbindTexture()}L.depthBuffer&&le(L)}function Ze(L){let E=m(L)||a,j=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let _e=0,xe=j.length;_e<xe;_e++){let Ee=j[_e];if(M(Ee,E)){let Be=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Le=i.get(Ee).__webglTexture;t.bindTexture(Be,Le),x(Be),t.unbindTexture()}}}function Ce(L){if(a&&L.samples>0&&De(L)===!1){let E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],j=L.width,_e=L.height,xe=n.COLOR_BUFFER_BIT,Ee=[],Be=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(L),Ue=L.isWebGLMultipleRenderTargets===!0;if(Ue)for(let qe=0;qe<E.length;qe++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let qe=0;qe<E.length;qe++){Ee.push(n.COLOR_ATTACHMENT0+qe),L.depthBuffer&&Ee.push(Be);let Ye=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(Ye===!1&&(L.depthBuffer&&(xe|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(xe|=n.STENCIL_BUFFER_BIT)),Ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[qe]),Ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Be])),Ue){let U=i.get(E[qe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,j,_e,0,0,j,_e,xe,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ue)for(let qe=0;qe<E.length;qe++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.RENDERBUFFER,Le.__webglColorRenderbuffer[qe]);let Ye=i.get(E[qe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function we(L){return Math.min(s.maxSamples,L.samples)}function De(L){let E=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $e(L){let E=o.render.frame;c.get(L)!==E&&(c.set(L,E),L.update())}function Ke(L,E){let j=L.colorSpace,_e=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Ol||j!==Ti&&j!==tn&&(Mt.getTransfer(j)===Rt?a===!1?e.has("EXT_sRGB")===!0&&_e===Yn?(L.format=Ol,L.minFilter=en,L.generateMipmaps=!1):E=co.sRGBToLinear(E):(_e!==Yn||xe!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}this.allocateTextureUnit=O,this.resetTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=W,this.useMultisampledRTT=De}function Gy(n,e,t){let i=t.isWebGL2;function s(r,o=tn){let a,l=Mt.getTransfer(o);if(r===si)return n.UNSIGNED_BYTE;if(r===qh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Sp)return n.BYTE;if(r===wp)return n.SHORT;if(r===dc)return n.UNSIGNED_SHORT;if(r===Wh)return n.INT;if(r===Vi)return n.UNSIGNED_INT;if(r===Gi)return n.FLOAT;if(r===Rn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ep)return n.ALPHA;if(r===Yn)return n.RGBA;if(r===Tp)return n.LUMINANCE;if(r===Ap)return n.LUMINANCE_ALPHA;if(r===ms)return n.DEPTH_COMPONENT;if(r===ir)return n.DEPTH_STENCIL;if(r===Ol)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Rp)return n.RED;if(r===Yh)return n.RED_INTEGER;if(r===Cp)return n.RG;if(r===Kh)return n.RG_INTEGER;if(r===Zh)return n.RGBA_INTEGER;if(r===tl||r===nl||r===il||r===sl)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===tl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===il)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mu||r===gu||r===vu||r===yu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===mu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===xu||r===_u)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===xu)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===_u)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bu||r===Mu||r===Su||r===wu||r===Eu||r===Tu||r===Au||r===Ru||r===Cu||r===Pu||r===Lu||r===Iu||r===ku||r===Du)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===bu)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mu)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Su)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wu)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Eu)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tu)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Au)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ru)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cu)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pu)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lu)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Iu)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ku)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Du)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rl||r===Uu||r===Nu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===rl)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pp||r===Ou||r===zu||r===Fu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===rl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ou)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ps?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Jl=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},yn=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wy={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$l=class extends ri{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,v=null,_=t.getContextAttributes(),m=null,d=null,M=[],x=[],w=new ke,C=null,y=new rn;y.layers.enable(1),y.viewport=new xt;let S=new rn;S.layers.enable(2),S.viewport=new xt;let A=[y,S],g=new Jl;g.layers.enable(1),g.layers.enable(2);let b=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=M[te];return de===void 0&&(de=new Fr,M[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=M[te];return de===void 0&&(de=new Fr,M[te]=de),de.getGripSpace()},this.getHand=function(te){let de=M[te];return de===void 0&&(de=new Fr,M[te]=de),de.getHandSpace()};function z(te){let de=x.indexOf(te.inputSource);if(de===-1)return;let q=M[de];q!==void 0&&(q.update(te.inputSource,te.frame,u||o),q.dispatchEvent({type:te.type,data:te.inputSource}))}function K(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",O);for(let te=0;te<M.length;te++){let de=x[te];de!==null&&(x[te]=null,M[te].disconnect(de))}b=null,R=null,e.setRenderTarget(m),p=null,h=null,f=null,s=null,d=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let de={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new an(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let de=null,q=null,X=null;_.depth&&(X=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=_.stencil?ir:ms,q=_.stencil?ps:Vi);let W={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(W),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new an(h.textureWidth,h.textureHeight,{format:Yn,type:si,depthTexture:new xo(h.textureWidth,h.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let $=e.properties.get(d);$.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(te){for(let de=0;de<te.removed.length;de++){let q=te.removed[de],X=x.indexOf(q);X>=0&&(x[X]=null,M[X].disconnect(q))}for(let de=0;de<te.added.length;de++){let q=te.added[de],X=x.indexOf(q);if(X===-1){for(let $=0;$<M.length;$++)if($>=x.length){x.push(q),X=$;break}else if(x[$]===null){x[$]=q,X=$;break}if(X===-1)break}let W=M[X];W&&W.connect(q)}}let k=new N,H=new N;function G(te,de,q){k.setFromMatrixPosition(de.matrixWorld),H.setFromMatrixPosition(q.matrixWorld);let X=k.distanceTo(H),W=de.projectionMatrix.elements,$=q.projectionMatrix.elements,Q=W[14]/(W[10]-1),le=W[14]/(W[10]+1),Ae=(W[9]+1)/W[5],V=(W[9]-1)/W[5],Ze=(W[8]-1)/W[0],Ce=($[8]+1)/$[0],we=Q*Ze,De=Q*Ce,$e=X/(-Ze+Ce),Ke=$e*-Ze;de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ke),te.translateZ($e),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let L=Q+$e,E=le+$e,j=we-Ke,_e=De+(X-Ke),xe=Ae*le/E*L,Ee=V*le/E*L;te.projectionMatrix.makePerspective(j,_e,xe,Ee,L,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function Z(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;g.near=S.near=y.near=te.near,g.far=S.far=y.far=te.far,(b!==g.near||R!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),b=g.near,R=g.far);let de=te.parent,q=g.cameras;Z(g,de);for(let X=0;X<q.length;X++)Z(q[X],de);q.length===2?G(g,y,S):g.projectionMatrix.copy(y.projectionMatrix),Y(te,g,de)};function Y(te,de,q){q===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(q.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Hr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)};let ae=null;function oe(te,de){if(c=de.getViewerPose(u||o),v=de,c!==null){let q=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let X=!1;q.length!==g.cameras.length&&(g.cameras.length=0,X=!0);for(let W=0;W<q.length;W++){let $=q[W],Q=null;if(p!==null)Q=p.getViewport($);else{let Ae=f.getViewSubImage(h,$);Q=Ae.viewport,W===0&&(e.setRenderTargetTextures(d,Ae.colorTexture,h.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(d))}let le=A[W];le===void 0&&(le=new rn,le.layers.enable(W),le.viewport=new xt,A[W]=le),le.matrix.fromArray($.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray($.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Q.x,Q.y,Q.width,Q.height),W===0&&(g.matrix.copy(le.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),X===!0&&g.cameras.push(le)}}for(let q=0;q<M.length;q++){let X=x[q],W=M[q];X!==null&&W!==void 0&&W.update(X,de,u||o)}ae&&ae(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}let Se=new nf;Se.setAnimationLoop(oe),this.setAnimationLoop=function(te){ae=te},this.dispose=function(){}}};function qy(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,tf(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,x,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xy(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){let w=x.program;i.uniformBlockBinding(M,w)}function u(M,x){let w=s[M.id];w===void 0&&(v(M),w=c(M),s[M.id]=w,M.addEventListener("dispose",m));let C=x.program;i.updateUBOMapping(M,C);let y=e.render.frame;r[M.id]!==y&&(h(M),r[M.id]=y)}function c(M){let x=f();M.__bindingPointIndex=x;let w=n.createBuffer(),C=M.__size,y=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,w),w}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let x=s[M.id],w=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let y=0,S=w.length;y<S;y++){let A=Array.isArray(w[y])?w[y]:[w[y]];for(let g=0,b=A.length;g<b;g++){let R=A[g];if(p(R,y,g,C)===!0){let z=R.__offset,K=Array.isArray(R.value)?R.value:[R.value],O=0;for(let k=0;k<K.length;k++){let H=K[k],G=_(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,z+O,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,O),O+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,x,w,C){let y=M.value,S=x+"_"+w;if(C[S]===void 0)return typeof y=="number"||typeof y=="boolean"?C[S]=y:C[S]=y.clone(),!0;{let A=C[S];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return C[S]=y,!0}else if(A.equals(y)===!1)return A.copy(y),!0}return!1}function v(M){let x=M.uniforms,w=0,C=16;for(let S=0,A=x.length;S<A;S++){let g=Array.isArray(x[S])?x[S]:[x[S]];for(let b=0,R=g.length;b<R;b++){let z=g[b],K=Array.isArray(z.value)?z.value:[z.value];for(let O=0,k=K.length;O<k;O++){let H=K[O],G=_(H),Z=w%C;Z!==0&&C-Z<G.boundary&&(w+=C-Z),z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=G.storage}}}let y=w%C;return y>0&&(w+=C-y),M.__size=w,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){let x=M.target;x.removeEventListener("dispose",m);let w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:u,dispose:d}}var ai=class{constructor(e={}){let{canvas:t=nm(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let p=new Uint32Array(4),v=new Int32Array(4),_=null,m=null,d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;let x=this,w=!1,C=0,y=0,S=null,A=-1,g=null,b=new xt,R=new xt,z=null,K=new et(0),O=0,k=t.width,H=t.height,G=1,Z=null,Y=null,ae=new xt(0,0,k,H),oe=new xt(0,0,k,H),Se=!1,te=new vo,de=!1,q=!1,X=null,W=new Xt,$=new ke,Q=new N,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return S===null?G:1}let V=i;function Ze(P,J){for(let se=0;se<P.length;se++){let re=P[se],ne=t.getContext(re,J);if(ne!==null)return ne}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",pe,!1),V===null){let J=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&J.shift(),V=Ze(J,P),V===null)throw Ze(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ce,we,De,$e,Ke,L,E,j,_e,xe,Ee,Be,Le,Ue,qe,Ye,U,fe,ie,ge,ye,he,T,ce;function Me(){Ce=new hv(V),we=new rv(V,Ce,e),Ce.init(we),he=new Gy(V,Ce,we),De=new Hy(V,Ce,we),$e=new pv(V),Ke=new Cy,L=new Vy(V,Ce,De,Ke,we,he,$e),E=new ov(x),j=new uv(x),_e=new Mm(V,we),T=new iv(V,Ce,_e,we),xe=new fv(V,_e,$e,T),Ee=new yv(V,xe,_e,$e),ie=new vv(V,we,L),Ye=new av(Ke),Be=new Ry(x,E,j,Ce,we,T,Ye),Le=new qy(x,Ke),Ue=new Ly,qe=new Oy(Ce,we),fe=new nv(x,E,j,De,Ee,h,l),U=new By(x,Ee,we),ce=new Xy(V,$e,we,De),ge=new sv(V,Ce,$e,we),ye=new dv(V,Ce,$e,we),$e.programs=Be.programs,x.capabilities=we,x.extensions=Ce,x.properties=Ke,x.renderLists=Ue,x.shadowMap=U,x.state=De,x.info=$e}Me();let me=new $l(x,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let P=Ce.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Ce.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(k,H,!1))},this.getSize=function(P){return P.set(k,H)},this.setSize=function(P,J,se=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,H=J,t.width=Math.floor(P*G),t.height=Math.floor(J*G),se===!0&&(t.style.width=P+"px",t.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(k*G,H*G).floor()},this.setDrawingBufferSize=function(P,J,se){k=P,H=J,G=se,t.width=Math.floor(P*se),t.height=Math.floor(J*se),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(b)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,J,se,re){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,J,se,re),De.viewport(b.copy(ae).multiplyScalar(G).floor())},this.getScissor=function(P){return P.copy(oe)},this.setScissor=function(P,J,se,re){P.isVector4?oe.set(P.x,P.y,P.z,P.w):oe.set(P,J,se,re),De.scissor(R.copy(oe).multiplyScalar(G).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(P){De.setScissorTest(Se=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(P=!0,J=!0,se=!0){let re=0;if(P){let ne=!1;if(S!==null){let Fe=S.texture.format;ne=Fe===Zh||Fe===Kh||Fe===Yh}if(ne){let Fe=S.texture.type,Ge=Fe===si||Fe===Vi||Fe===dc||Fe===ps||Fe===qh||Fe===Xh,Xe=fe.getClearColor(),We=fe.getClearAlpha(),at=Xe.r,Qe=Xe.g,Je=Xe.b;Ge?(p[0]=at,p[1]=Qe,p[2]=Je,p[3]=We,V.clearBufferuiv(V.COLOR,0,p)):(v[0]=at,v[1]=Qe,v[2]=Je,v[3]=We,V.clearBufferiv(V.COLOR,0,v))}else re|=V.COLOR_BUFFER_BIT}J&&(re|=V.DEPTH_BUFFER_BIT),se&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ue.dispose(),qe.dispose(),Ke.dispose(),E.dispose(),j.dispose(),Ee.dispose(),T.dispose(),ce.dispose(),Be.dispose(),me.dispose(),me.removeEventListener("sessionstart",it),me.removeEventListener("sessionend",je),X&&(X.dispose(),X=null),mt.stop()};function ue(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let P=$e.autoReset,J=U.enabled,se=U.autoUpdate,re=U.needsUpdate,ne=U.type;Me(),$e.autoReset=P,U.enabled=J,U.autoUpdate=se,U.needsUpdate=re,U.type=ne}function pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Re(P){let J=P.target;J.removeEventListener("dispose",Re),Ve(J)}function Ve(P){Pe(P),Ke.remove(P)}function Pe(P){let J=Ke.get(P).programs;J!==void 0&&(J.forEach(function(se){Be.releaseProgram(se)}),P.isShaderMaterial&&Be.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,se,re,ne,Fe){J===null&&(J=le);let Ge=ne.isMesh&&ne.matrixWorld.determinant()<0,Xe=xa(P,J,se,re,ne);De.setMaterial(re,Ge);let We=se.index,at=1;if(re.wireframe===!0){if(We=xe.getWireframeAttribute(se),We===void 0)return;at=2}let Qe=se.drawRange,Je=se.attributes.position,Et=Qe.start*at,Vt=(Qe.start+Qe.count)*at;Fe!==null&&(Et=Math.max(Et,Fe.start*at),Vt=Math.min(Vt,(Fe.start+Fe.count)*at)),We!==null?(Et=Math.max(Et,0),Vt=Math.min(Vt,We.count)):Je!=null&&(Et=Math.max(Et,0),Vt=Math.min(Vt,Je.count));let Lt=Vt-Et;if(Lt<0||Lt===1/0)return;T.setup(ne,re,Xe,se,We);let bn,_t=ge;if(We!==null&&(bn=_e.get(We),_t=ye,_t.setIndex(bn)),ne.isMesh)re.wireframe===!0?(De.setLineWidth(re.wireframeLinewidth*Ae()),_t.setMode(V.LINES)):_t.setMode(V.TRIANGLES);else if(ne.isLine){let ot=re.linewidth;ot===void 0&&(ot=1),De.setLineWidth(ot*Ae()),ne.isLineSegments?_t.setMode(V.LINES):ne.isLineLoop?_t.setMode(V.LINE_LOOP):_t.setMode(V.LINE_STRIP)}else ne.isPoints?_t.setMode(V.POINTS):ne.isSprite&&_t.setMode(V.TRIANGLES);if(ne.isBatchedMesh)_t.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)_t.renderInstances(Et,Lt,ne.count);else if(se.isInstancedBufferGeometry){let ot=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,wr=Math.min(se.instanceCount,ot);_t.renderInstances(Et,Lt,wr)}else _t.render(Et,Lt)};function Te(P,J,se){P.transparent===!0&&P.side===hn&&P.forceSinglePass===!1?(P.side=qt,P.needsUpdate=!0,rs(P,J,se),P.side=qi,P.needsUpdate=!0,rs(P,J,se),P.side=hn):rs(P,J,se)}this.compile=function(P,J,se=null){se===null&&(se=P),m=qe.get(se),m.init(),M.push(m),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(J.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))}),P!==se&&P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(J.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))}),m.setupLights(x._useLegacyLights);let re=new Set;return P.traverse(function(ne){let Fe=ne.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){let Xe=Fe[Ge];Te(Xe,se,ne),re.add(Xe)}else Te(Fe,se,ne),re.add(Fe)}),M.pop(),m=null,re},this.compileAsync=function(P,J,se=null){let re=this.compile(P,J,se);return new Promise(ne=>{function Fe(){if(re.forEach(function(Ge){Ke.get(Ge).currentProgram.isReady()&&re.delete(Ge)}),re.size===0){ne(P);return}setTimeout(Fe,10)}Ce.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let He=null;function nt(P){He&&He(P)}function it(){mt.stop()}function je(){mt.start()}let mt=new nf;mt.setAnimationLoop(nt),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(P){He=P,me.setAnimationLoop(P),P===null?mt.stop():mt.start()},me.addEventListener("sessionstart",it),me.addEventListener("sessionend",je),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(J),J=me.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,J,S),m=qe.get(P,M.length),m.init(),M.push(m),W.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),te.setFromProjectionMatrix(W),q=this.localClippingEnabled,de=Ye.init(this.clippingPlanes,q),_=Ue.get(P,d.length),_.init(),d.push(_),Ut(P,J,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,Y),this.info.render.frame++,de===!0&&Ye.beginShadows();let se=m.state.shadowsArray;if(U.render(se,P,J),de===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(_,P),m.setupLights(x._useLegacyLights),J.isArrayCamera){let re=J.cameras;for(let ne=0,Fe=re.length;ne<Fe;ne++){let Ge=re[ne];jt(_,P,Ge,Ge.viewport)}}else jt(_,P,J);S!==null&&(L.updateMultisampleRenderTarget(S),L.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(x,P,J),T.resetDefaultState(),A=-1,g=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ut(P,J,se,re){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||te.intersectsSprite(P)){re&&Q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(W);let Ge=Ee.update(P),Xe=P.material;Xe.visible&&_.push(P,Ge,Xe,se,Q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||te.intersectsObject(P))){let Ge=Ee.update(P),Xe=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Q.copy(P.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Q.copy(Ge.boundingSphere.center)),Q.applyMatrix4(P.matrixWorld).applyMatrix4(W)),Array.isArray(Xe)){let We=Ge.groups;for(let at=0,Qe=We.length;at<Qe;at++){let Je=We[at],Et=Xe[Je.materialIndex];Et&&Et.visible&&_.push(P,Ge,Et,se,Q.z,Je)}}else Xe.visible&&_.push(P,Ge,Xe,se,Q.z,null)}}let Fe=P.children;for(let Ge=0,Xe=Fe.length;Ge<Xe;Ge++)Ut(Fe[Ge],J,se,re)}function jt(P,J,se,re){let ne=P.opaque,Fe=P.transmissive,Ge=P.transparent;m.setupLightsView(se),de===!0&&Ye.setGlobalState(x.clippingPlanes,se),Fe.length>0&&Ko(ne,Fe,J,se),re&&De.viewport(b.copy(re)),ne.length>0&&Ui(ne,J,se),Fe.length>0&&Ui(Fe,J,se),Ge.length>0&&Ui(Ge,J,se),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ko(P,J,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;let Fe=we.isWebGL2;X===null&&(X=new an(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Rn:si,minFilter:Br,samples:Fe?4:0})),x.getDrawingBufferSize($),Fe?X.setSize($.x,$.y):X.setSize(lo($.x),lo($.y));let Ge=x.getRenderTarget();x.setRenderTarget(X),x.getClearColor(K),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear();let Xe=x.toneMapping;x.toneMapping=Wi,Ui(P,se,re),L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X);let We=!1;for(let at=0,Qe=J.length;at<Qe;at++){let Je=J[at],Et=Je.object,Vt=Je.geometry,Lt=Je.material,bn=Je.group;if(Lt.side===hn&&Et.layers.test(re.layers)){let _t=Lt.side;Lt.side=qt,Lt.needsUpdate=!0,As(Et,se,re,Vt,Lt,bn),Lt.side=_t,Lt.needsUpdate=!0,We=!0}}We===!0&&(L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X)),x.setRenderTarget(Ge),x.setClearColor(K,O),x.toneMapping=Xe}function Ui(P,J,se){let re=J.isScene===!0?J.overrideMaterial:null;for(let ne=0,Fe=P.length;ne<Fe;ne++){let Ge=P[ne],Xe=Ge.object,We=Ge.geometry,at=re===null?Ge.material:re,Qe=Ge.group;Xe.layers.test(se.layers)&&As(Xe,J,se,We,at,Qe)}}function As(P,J,se,re,ne,Fe){P.onBeforeRender(x,J,se,re,ne,Fe),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(x,J,se,re,P,Fe),ne.transparent===!0&&ne.side===hn&&ne.forceSinglePass===!1?(ne.side=qt,ne.needsUpdate=!0,x.renderBufferDirect(se,J,re,ne,P,Fe),ne.side=qi,ne.needsUpdate=!0,x.renderBufferDirect(se,J,re,ne,P,Fe),ne.side=hn):x.renderBufferDirect(se,J,re,ne,P,Fe),P.onAfterRender(x,J,se,re,ne,Fe)}function rs(P,J,se){J.isScene!==!0&&(J=le);let re=Ke.get(P),ne=m.state.lights,Fe=m.state.shadowsArray,Ge=ne.state.version,Xe=Be.getParameters(P,ne.state,Fe,J,se),We=Be.getProgramCacheKey(Xe),at=re.programs;re.environment=P.isMeshStandardMaterial?J.environment:null,re.fog=J.fog,re.envMap=(P.isMeshStandardMaterial?j:E).get(P.envMap||re.environment),at===void 0&&(P.addEventListener("dispose",Re),at=new Map,re.programs=at);let Qe=at.get(We);if(Qe!==void 0){if(re.currentProgram===Qe&&re.lightsStateVersion===Ge)return Sr(P,Xe),Qe}else Xe.uniforms=Be.getUniforms(P),P.onBuild(se,Xe,x),P.onBeforeCompile(Xe,x),Qe=Be.acquireProgram(Xe,We),at.set(We,Qe),re.uniforms=Xe.uniforms;let Je=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Je.clippingPlanes=Ye.uniform),Sr(P,Xe),re.needsLights=jo(P),re.lightsStateVersion=Ge,re.needsLights&&(Je.ambientLightColor.value=ne.state.ambient,Je.lightProbe.value=ne.state.probe,Je.directionalLights.value=ne.state.directional,Je.directionalLightShadows.value=ne.state.directionalShadow,Je.spotLights.value=ne.state.spot,Je.spotLightShadows.value=ne.state.spotShadow,Je.rectAreaLights.value=ne.state.rectArea,Je.ltc_1.value=ne.state.rectAreaLTC1,Je.ltc_2.value=ne.state.rectAreaLTC2,Je.pointLights.value=ne.state.point,Je.pointLightShadows.value=ne.state.pointShadow,Je.hemisphereLights.value=ne.state.hemi,Je.directionalShadowMap.value=ne.state.directionalShadowMap,Je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Je.spotShadowMap.value=ne.state.spotShadowMap,Je.spotLightMatrix.value=ne.state.spotLightMatrix,Je.spotLightMap.value=ne.state.spotLightMap,Je.pointShadowMap.value=ne.state.pointShadowMap,Je.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=Qe,re.uniformsList=null,Qe}function Mr(P){if(P.uniformsList===null){let J=P.currentProgram.getUniforms();P.uniformsList=er.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function Sr(P,J){let se=Ke.get(P);se.outputColorSpace=J.outputColorSpace,se.batching=J.batching,se.instancing=J.instancing,se.instancingColor=J.instancingColor,se.skinning=J.skinning,se.morphTargets=J.morphTargets,se.morphNormals=J.morphNormals,se.morphColors=J.morphColors,se.morphTargetsCount=J.morphTargetsCount,se.numClippingPlanes=J.numClippingPlanes,se.numIntersection=J.numClipIntersection,se.vertexAlphas=J.vertexAlphas,se.vertexTangents=J.vertexTangents,se.toneMapping=J.toneMapping}function xa(P,J,se,re,ne){J.isScene!==!0&&(J=le),L.resetTextureUnits();let Fe=J.fog,Ge=re.isMeshStandardMaterial?J.environment:null,Xe=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ti,We=(re.isMeshStandardMaterial?j:E).get(re.envMap||Ge),at=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Qe=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!se.morphAttributes.position,Et=!!se.morphAttributes.normal,Vt=!!se.morphAttributes.color,Lt=Wi;re.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Lt=x.toneMapping);let bn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,_t=bn!==void 0?bn.length:0,ot=Ke.get(re),wr=m.state.lights;if(de===!0&&(q===!0||P!==g)){let Jt=P===g&&re.id===A;Ye.setState(re,P,Jt)}let Tt=!1;re.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==wr.state.version||ot.outputColorSpace!==Xe||ne.isBatchedMesh&&ot.batching===!1||!ne.isBatchedMesh&&ot.batching===!0||ne.isInstancedMesh&&ot.instancing===!1||!ne.isInstancedMesh&&ot.instancing===!0||ne.isSkinnedMesh&&ot.skinning===!1||!ne.isSkinnedMesh&&ot.skinning===!0||ne.isInstancedMesh&&ot.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ot.instancingColor===!1&&ne.instanceColor!==null||ot.envMap!==We||re.fog===!0&&ot.fog!==Fe||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Ye.numPlanes||ot.numIntersection!==Ye.numIntersection)||ot.vertexAlphas!==at||ot.vertexTangents!==Qe||ot.morphTargets!==Je||ot.morphNormals!==Et||ot.morphColors!==Vt||ot.toneMapping!==Lt||we.isWebGL2===!0&&ot.morphTargetsCount!==_t)&&(Tt=!0):(Tt=!0,ot.__version=re.version);let pi=ot.currentProgram;Tt===!0&&(pi=rs(re,J,ne));let _a=!1,Fn=!1,Er=!1,Gt=pi.getUniforms(),mi=ot.uniforms;if(De.useProgram(pi.program)&&(_a=!0,Fn=!0,Er=!0),re.id!==A&&(A=re.id,Fn=!0),_a||g!==P){Gt.setValue(V,"projectionMatrix",P.projectionMatrix),Gt.setValue(V,"viewMatrix",P.matrixWorldInverse);let Jt=Gt.map.cameraPosition;Jt!==void 0&&Jt.setValue(V,Q.setFromMatrixPosition(P.matrixWorld)),we.logarithmicDepthBuffer&&Gt.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Gt.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),g!==P&&(g=P,Fn=!0,Er=!0)}if(ne.isSkinnedMesh){Gt.setOptional(V,ne,"bindMatrix"),Gt.setOptional(V,ne,"bindMatrixInverse");let Jt=ne.skeleton;Jt&&(we.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Gt.setValue(V,"boneTexture",Jt.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(Gt.setOptional(V,ne,"batchingTexture"),Gt.setValue(V,"batchingTexture",ne._matricesTexture,L));let gi=se.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0&&we.isWebGL2===!0)&&ie.update(ne,se,pi),(Fn||ot.receiveShadow!==ne.receiveShadow)&&(ot.receiveShadow=ne.receiveShadow,Gt.setValue(V,"receiveShadow",ne.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(mi.envMap.value=We,mi.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Fn&&(Gt.setValue(V,"toneMappingExposure",x.toneMappingExposure),ot.needsLights&&Zo(mi,Er),Fe&&re.fog===!0&&Le.refreshFogUniforms(mi,Fe),Le.refreshMaterialUniforms(mi,re,G,H,X),er.upload(V,Mr(ot),mi,L)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(er.upload(V,Mr(ot),mi,L),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Gt.setValue(V,"center",ne.center),Gt.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Gt.setValue(V,"normalMatrix",ne.normalMatrix),Gt.setValue(V,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){let Jt=re.uniformsGroups;for(let Tr=0,Jo=Jt.length;Tr<Jo;Tr++)if(we.isWebGL2){let ba=Jt[Tr];ce.update(ba,pi),ce.bind(ba,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Zo(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function jo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,J,se){Ke.get(P.texture).__webglTexture=J,Ke.get(P.depthTexture).__webglTexture=se;let re=Ke.get(P);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=se===void 0,re.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,J){let se=Ke.get(P);se.__webglFramebuffer=J,se.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(P,J=0,se=0){S=P,C=J,y=se;let re=!0,ne=null,Fe=!1,Ge=!1;if(P){let We=Ke.get(P);We.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(V.FRAMEBUFFER,null),re=!1):We.__webglFramebuffer===void 0?L.setupRenderTarget(P):We.__hasExternalTextures&&L.rebindTextures(P,Ke.get(P.texture).__webglTexture,Ke.get(P.depthTexture).__webglTexture);let at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ge=!0);let Qe=Ke.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qe[J])?ne=Qe[J][se]:ne=Qe[J],Fe=!0):we.isWebGL2&&P.samples>0&&L.useMultisampledRTT(P)===!1?ne=Ke.get(P).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[se]:ne=Qe,b.copy(P.viewport),R.copy(P.scissor),z=P.scissorTest}else b.copy(ae).multiplyScalar(G).floor(),R.copy(oe).multiplyScalar(G).floor(),z=Se;if(De.bindFramebuffer(V.FRAMEBUFFER,ne)&&we.drawBuffers&&re&&De.drawBuffers(P,ne),De.viewport(b),De.scissor(R),De.setScissorTest(z),Fe){let We=Ke.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+J,We.__webglTexture,se)}else if(Ge){let We=Ke.get(P.texture),at=J||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.__webglTexture,se||0,at)}A=-1},this.readRenderTargetPixels=function(P,J,se,re,ne,Fe,Ge){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){De.bindFramebuffer(V.FRAMEBUFFER,Xe);try{let We=P.texture,at=We.format,Qe=We.type;if(at!==Yn&&he.convert(at)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Je=Qe===Rn&&(Ce.has("EXT_color_buffer_half_float")||we.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Qe!==si&&he.convert(Qe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===Gi&&(we.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-re&&se>=0&&se<=P.height-ne&&V.readPixels(J,se,re,ne,he.convert(at),he.convert(Qe),Fe)}finally{let We=S!==null?Ke.get(S).__webglFramebuffer:null;De.bindFramebuffer(V.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(P,J,se=0){let re=Math.pow(2,-se),ne=Math.floor(J.image.width*re),Fe=Math.floor(J.image.height*re);L.setTexture2D(J,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,P.x,P.y,ne,Fe),De.unbindTexture()},this.copyTextureToTexture=function(P,J,se,re=0){let ne=J.image.width,Fe=J.image.height,Ge=he.convert(se.format),Xe=he.convert(se.type);L.setTexture2D(se,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,se.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,se.unpackAlignment),J.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,re,P.x,P.y,ne,Fe,Ge,Xe,J.image.data):J.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,re,P.x,P.y,J.mipmaps[0].width,J.mipmaps[0].height,Ge,J.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,re,P.x,P.y,Ge,Xe,J.image),re===0&&se.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(P,J,se,re,ne=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Fe=P.max.x-P.min.x+1,Ge=P.max.y-P.min.y+1,Xe=P.max.z-P.min.z+1,We=he.convert(re.format),at=he.convert(re.type),Qe;if(re.isData3DTexture)L.setTexture3D(re,0),Qe=V.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)L.setTexture2DArray(re,0),Qe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,re.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,re.unpackAlignment);let Je=V.getParameter(V.UNPACK_ROW_LENGTH),Et=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Vt=V.getParameter(V.UNPACK_SKIP_PIXELS),Lt=V.getParameter(V.UNPACK_SKIP_ROWS),bn=V.getParameter(V.UNPACK_SKIP_IMAGES),_t=se.isCompressedTexture?se.mipmaps[ne]:se.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,_t.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,P.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,P.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,P.min.z),se.isDataTexture||se.isData3DTexture?V.texSubImage3D(Qe,ne,J.x,J.y,J.z,Fe,Ge,Xe,We,at,_t.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Qe,ne,J.x,J.y,J.z,Fe,Ge,Xe,We,_t.data)):V.texSubImage3D(Qe,ne,J.x,J.y,J.z,Fe,Ge,Xe,We,at,_t),V.pixelStorei(V.UNPACK_ROW_LENGTH,Je),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Et),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Vt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Lt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,bn),ne===0&&re.generateMipmaps&&V.generateMipmap(Qe),De.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),De.unbindTexture()},this.resetState=function(){C=0,y=0,S=null,De.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===pc?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===wo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===sn?gs:Jh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gs?sn:Ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ql=class extends ai{};Ql.prototype.isWebGL1Renderer=!0;var oi=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ec=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new N,_o=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cn=class extends Ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xs,kr=new N,Ys=new N,Ks=new N,Zs=new ke,Dr=new ke,cf=new Xt,Ka=new N,Ur=new N,Za=new N,Ch=new ke,Cl=new ke,Ph=new ke,On=class extends fn{constructor(e=new Cn){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ec(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new _o(i,3,0,!1)),Xs.setAttribute("uv",new _o(i,2,3,!1))}this.geometry=Xs,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),cf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-Ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ja(Ka.set(-.5,-.5,0),Ks,o,Ys,s,r),ja(Ur.set(.5,-.5,0),Ks,o,Ys,s,r),ja(Za.set(.5,.5,0),Ks,o,Ys,s,r),Ch.set(0,0),Cl.set(1,0),Ph.set(1,1);let a=e.ray.intersectTriangle(Ka,Ur,Za,!1,kr);if(a===null&&(ja(Ur.set(-.5,.5,0),Ks,o,Ys,s,r),Cl.set(0,1),a=e.ray.intersectTriangle(Ka,Za,Ur,!1,kr),a===null))return;let l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:ds.getInterpolation(kr,Ka,Ur,Za,Ch,Cl,Ph,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ja(n,e,t,i,s,r){Zs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Dr.x=r*Zs.x-s*Zs.y,Dr.y=s*Zs.x+r*Zs.y):Dr.copy(Zs),n.copy(e),n.x+=Dr.x,n.y+=Dr.y,n.applyMatrix4(cf)}var or=class extends Mn{constructor(e=null,t=1,i=1,s,r,o,a,l,u=nn,c=nn,f,h){super(null,o,a,l,u,c,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=class extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lh=new N,Ih=new N,kh=new Xt,Pl=new Xi,Ja=new Ai,ys=class extends fn{constructor(e=new It,t=new Ci){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Lh.fromBufferAttribute(t,s-1),Ih.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Lh.distanceTo(Ih);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;kh.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(kh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new N,c=new N,f=new N,h=new N,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){let d=Math.max(0,o.start),M=Math.min(v.count,o.start+o.count);for(let x=d,w=M-1;x<w;x+=p){let C=v.getX(x),y=v.getX(x+1);if(u.fromBufferAttribute(m,C),c.fromBufferAttribute(m,y),Pl.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let x=d,w=M-1;x<w;x+=p){if(u.fromBufferAttribute(m,x),c.fromBufferAttribute(m,x+1),Pl.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(h);y<e.near||y>e.far||t.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Dh=new N,Uh=new N,bo=class extends ys{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Dh.fromBufferAttribute(t,s),Uh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Dh.distanceTo(Uh);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qr=class extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nh=new Xt,tc=new Xi,$a=new Ai,Qa=new N,lr=class extends fn{constructor(e=new It,t=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Nh.copy(s).invert(),tc.copy(e.ray).applyMatrix4(Nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=h,_=p;v<_;v++){let m=u.getX(v);Qa.fromBufferAttribute(f,m),Oh(Qa,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=h,_=p;v<_;v++)Qa.fromBufferAttribute(f,v),Oh(Qa,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oh(n,e,t,i,s,r,o){let a=tc.distanceSqToPoint(n);if(a<t){let l=new N;tc.closestPointToPoint(n,l),l.applyMatrix4(i);let u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Ki=class extends Mn{constructor(e,t,i,s,r,o,a,l,u){super(e,t,i,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class n extends It{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],u=[],c=[],f=e,h=(t-e)/s,p=new N,v=new ke;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let d=r+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,c.push(v.x,v.y)}f+=h}for(let _=0;_<s;_++){let m=_*(i+1);for(let d=0;d<i;d++){let M=d+m,x=M,w=M+i+1,C=M+i+2,y=M+1;a.push(x,w,y),a.push(w,C,y)}}this.setIndex(a),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Pn=class n extends It{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),u=0,c=[],f=new N,h=new N,p=[],v=[],_=[],m=[];for(let d=0;d<=i;d++){let M=[],x=d/i,w=0;d===0&&o===0?w=.5/t:d===i&&l===Math.PI&&(w=-.5/t);for(let C=0;C<=t;C++){let y=C/t;f.x=-e*Math.cos(s+y*r)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(s+y*r)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(y+w,1-x),M.push(u++)}c.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){let x=c[d][M+1],w=c[d][M],C=c[d+1][M],y=c[d+1][M+1];(d!==0||o>0)&&p.push(x,w,y),(d!==i-1||l<Math.PI)&&p.push(w,C,y)}this.setIndex(p),this.setAttribute("position",new Dt(v,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function eo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Yy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var cr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends cr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hu:r=e,a=2*t-i;break;case Vu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hu:o=e,l=2*i-t;break;case Vu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-t)/(s-t),_=v*v,m=_*v,d=-h*m+2*h*_-h*v,M=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*v+1,x=(-1-p)*m+(1.5+p)*_+.5*v,w=p*m-p*_;for(let C=0;C!==a;++C)r[C]=d*o[c+C]+M*o[u+C]+x*o[l+C]+w*o[f+C];return r}},ic=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(s-t),f=1-c;for(let h=0;h!==a;++h)r[h]=o[u+h]*f+o[l+h]*c;return r}},sc=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case no:t=this.InterpolantFactoryMethodDiscrete;break;case io:t=this.InterpolantFactoryMethodLinear;break;case al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Yy(s))for(let a=0,l=s.length;a!==l;++a){let u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===al,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(s)l=!0;else{let f=a*i,h=f-i,p=f+i;for(let v=0;v!==i;++v){let _=t[f+v];if(_!==t[h+v]||_!==t[p+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=io;var xs=class extends Kn{};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=no;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Kn{};rc.prototype.ValueTypeName="color";var ac=class extends Kn{};ac.prototype.ValueTypeName="number";var oc=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),u=e*a;for(let c=u+a;u!==c;u+=4)Yt.slerpFlat(r,0,o,u-a,o,u,l);return r}},Xr=class extends Kn{InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.DefaultInterpolation=io;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends Kn{};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=no;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Kn{};lc.prototype.ValueTypeName="vector";var zh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},cc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){let f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){let p=u[f],v=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}},Ky=new cc,Yr=class{constructor(e){this.manager=e!==void 0?e:Ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";var uc=class extends Yr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=zh.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Vr("img");function l(){c(),zh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(f){c(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Zi=class extends Yr{constructor(e){super(e)}load(e,t,i,s){let r=new Mn,o=new uc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}};var Mo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Fh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Fh(){return(typeof performance>"u"?Date:performance).now()}var vc="\\[\\]\\.:\\/",Zy=new RegExp("["+vc+"]","g"),yc="[^"+vc+"]",jy="[^"+vc.replace("\\.","")+"]",Jy=/((?:WC+[\/:])*)/.source.replace("WC",yc),$y=/(WCOD+)?/.source.replace("WCOD",jy),Qy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),tx=new RegExp("^"+Jy+$y+Qy+ex+"$"),nx=["material","materials","bones","map"],hc=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zy,"")}static parseTrackName(e){let t=tx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);nx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=hc;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i1=new Float32Array(1);var ur=class{constructor(e,t,i=0,s=1/0){this.ray=new Xi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return fc(e,this,i,t),i.sort(Bh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)fc(e[s],this,i,t);return i.sort(Bh),i}};function Bh(n,e){return n.distance-e.distance}function fc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)fc(s[r],e,t,!0)}}var Kr=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var To={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ix=new Yi(-1,1,1,-1,0,1),xc=class extends It{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},sx=new xc,dr=class{constructor(e){this._mesh=new vt(sx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ix)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ss=class extends Zn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hr.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jr=class extends Zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ao=class extends Zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ro=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ke);this._width=i.width,this._height=i.height,t=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ss(To),this.copyPass.material.blending=ii,this.clock=new Mo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jr!==void 0&&(o instanceof jr?i=!0:o instanceof Ao&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Co=class extends Zn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var uf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var pr=class n extends Zn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new an(r,o,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let h=new an(r,o,{type:Rn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let p=new an(r,o,{type:Rn});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=uf;this.highPassUniforms=hr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=To;this.copyUniforms=hr.clone(c.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Ct,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new et,this.oldClearAlpha=1,this.basic=new Sn,this.fsQuad=new dr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ke(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};pr.BlurDirectionX=new ke(1,0);pr.BlurDirectionY=new ke(0,1);function wn(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ut(n){let e=0,t=0;for(;!e;)e=n();for(;!t;)t=n();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function ui(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function ji(n){return n<0?0:n>1?1:n}function zn(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function _c(n,e,t){let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function hf(n){let e=wn(n.seed);n.twist=3+e()*2.4,n.spin=(.006+e()*.012)*(e()<.5?-1:1),n.clumps=[];for(let t=0;t<4;t++)n.clumps.push([ut(e)*n.R*.35,ut(e)*n.R*.08,ut(e)*n.R*.35]);return n}function ff(n,e,t,i,s){let r=t*2*Math.PI/n.arms+e*n.twist+ut(i)*(.08+.2*e)*s,o=n.R*(.12+.88*e)*(1+ut(i)*.035*s);return[Math.cos(r)*o,ut(i)*n.R*.02*s*(1-.5*e),Math.sin(r)*o]}function df(n,e){let t=wn(n.seed*7+1),i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e);for(let a=0;a<e;a++){let l,u;if(n.kind==="spiral")if(t()<.2){let p=Math.abs(ut(t))*n.R*.13,v=t()*6.283,_=Math.acos(2*t()-1);l=[p*Math.sin(_)*Math.cos(v),p*Math.cos(_)*.7,p*Math.sin(_)*Math.sin(v)],u=p/n.R}else{let p=Math.pow(t(),.75);l=ff(n,p,Math.floor(t()*n.arms),t,1),u=.12+.88*p}else if(n.kind==="elliptical")l=[ut(t)*n.R*.34,ut(t)*n.R*.22,ut(t)*n.R*.3],u=Math.min(1,Math.hypot(l[0],l[1],l[2])/n.R);else{let p=n.clumps[Math.floor(t()*4)];l=[p[0]+ut(t)*n.R*.2,p[1]+ut(t)*n.R*.08,p[2]+ut(t)*n.R*.2],u=Math.min(1,Math.hypot(l[0],l[2])/n.R)}i[a*3]=l[0],i[a*3+1]=l[1],i[a*3+2]=l[2];let c=Math.min(1,u),f=n.tint,h=.45+.4*(1-c*.6);s[a*3]=((1-.38*c)*.72+f[0]*.28)*h,s[a*3+1]=((.84-.08*c+0)*.72+f[1]*.28)*h+.05*c,s[a*3+2]=((.62+.38*c)*.72+f[2]*.28)*h,r[a]=(1.2+t()*2.2)*(1+(1-c)*.3),o[a]=t()*6.283}return{pos:i,col:s,sz:r,ph:o}}function pf(n,e,t,i){let s=wn(zn(e));if(n.kind==="spiral"){let l=.3+.6*((t+.5)/Math.max(i,1));return ff(n,l,t%n.arms,s,.5)}let r=s()*6.283,o=Math.acos(2*s()-1),a=n.R*(.2+.5*s());return[a*Math.sin(o)*Math.cos(r),a*Math.cos(o)*.35,a*Math.sin(o)*Math.sin(r)]}function Po(n){n=n.toLowerCase();let e=t=>t.test(n);return/volkan|lav|magma|pirosferik|ateş/.test(n.replace(/su altı volkan\S*|volkanik kül\S*/g,""))?{a:[1,.47,.16],b:[.35,.07,.04],atm:[1,.58,.27],type:3}:e(/buz|buzul|fiyort|donmuş/)?{a:[.86,.94,1],b:[.43,.63,.8],atm:[.67,.84,1],type:4}:e(/okyanus|su altı|su dünyası|akuatik|sıvı|akışkan/)?{a:[.27,.59,.9],b:[.04,.18,.43],atm:[.43,.7,1],type:2}:e(/çöl|kum/)?{a:[.9,.72,.43],b:[.55,.31,.16],atm:[.92,.75,.5],type:0}:e(/orman|bitki|ağaç|biyosfer|tarımsal/)?{a:[.35,.75,.43],b:[.07,.27,.18],atm:[.55,.9,.6],type:2}:e(/gaz dev|gaz halka|gaz tabaka|gaz gezegeni|atmosfer gezegeni|bulut/)?{a:[.92,.78,.59],b:[.59,.35,.24],atm:[.94,.78,.63],type:1}:e(/kristal|prizma|spektr/)?{a:[.47,.9,.82],b:[.67,.31,.75],atm:[.63,.92,.88],type:0}:e(/neon|ışık|foton|radyant|lüminesans|aurora/)?{a:[.67,.55,1],b:[.16,.24,.59],atm:[.7,.67,1],type:1}:e(/vakum|karanlık|tekillik|boşluk|sessiz/)?{a:[.43,.35,.59],b:[.06,.04,.12],atm:[.55,.43,.75],type:0}:{a:[.59,.63,.73],b:[.12,.16,.27],atm:[.75,.72,.5],type:0}}var mf=`varying vec3 vO;varying vec3 vN;varying vec3 vW;
void main(){vO=position;vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,gf=`precision highp float;varying vec3 vO;varying vec3 vN;varying vec3 vW;
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
}`,rx="varying vec3 vN;varying vec3 vW;void main(){vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",ax=`varying vec3 vN;varying vec3 vW;uniform vec3 uAtm,uL;void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW);float f=pow(max(dot(-N,V)*.5+.5-.18,0.),2.6)*1.6;
 float d=smoothstep(-.35,.5,dot(N,normalize(uL)));gl_FragColor=vec4(uAtm*f*d*1.4,f*d);}`,Mc=new or(new Uint8Array([0,0,0,255]),1,1);Mc.needsUpdate=!0;var $r=null;function yf(n){$r=new Zi().load(n),$r.wrapS=Ei,$r.colorSpace=tn}var bc=new Pn(1,64,40);function xf(n){let e=Po((n.desc||"")+" "+n.title),t=e.type;n.key==="dunya"&&(Object.assign(e,{a:[.27,.59,.9],b:[.04,.18,.43],atm:[.43,.7,1]}),t=2),n.key==="eirahoutmoss"&&$r&&(t=5,e.atm=[.62,.7,1]);let i={uA:{value:new N(...e.a)},uB:{value:new N(...e.b)},uAtm:{value:new N(...e.atm)},uL:{value:new N(1,.3,.2)},uType:{value:t},uSeed:{value:zn(n.key)%997/97},uMap:{value:t===5?$r:Mc},uOc:{value:[new xt,new xt,new xt]},uRg:{value:new xt(1.5,2.7,0,1)},uRn:{value:new N(0,1,0)},uPC:{value:new N}},s=new vt(bc,new ft({uniforms:i,vertexShader:mf,fragmentShader:gf})),r=new vt(bc,new ft({uniforms:{uAtm:i.uAtm,uL:i.uL},vertexShader:rx,fragmentShader:ax,transparent:!0,depthWrite:!1,side:qt,blending:Ct}));r.scale.setScalar(1.09),s.add(r),s.userData.U=i;let o=zn(n.key);if(t!==1&&o%3!==0&&n.key!=="eirahoutmoss"){s.userData.moons=[];for(let l=0;l<1+o%2;l++){let u=new fn;u.rotation.set(.25*l,o%6,.3+.2*l);let c=new vt(bc,new ft({uniforms:{uA:{value:new N(.66,.63,.6)},uB:{value:new N(.27,.26,.28)},uAtm:{value:new N(0,0,0)},uL:i.uL,uType:{value:0},uSeed:{value:l*3.1+o%50},uMap:{value:Mc},uOc:{value:[new xt,new xt,new xt]},uRg:{value:new xt(1.5,2.7,0,1)},uRn:{value:new N(0,1,0)},uPC:{value:new N}},vertexShader:mf,fragmentShader:gf}));c.scale.setScalar(.2+.07*l),c.position.x=2.3+l*1.1,u.rotation.y=o%7,u.add(c),s.add(u),s.userData.moons.push({pivot:u,sp:.055/(1+l*.7),mm:c,U:c.material.uniforms})}}let a=/gaz dev|gaz halka|gaz tabaka|gaz gezegeni/i.test(n.desc||"");if(n.key==="gyrax"||a&&n.key!=="annulon"&&o%3===0){i.uRg.value.set(1.5,2.7,1,1);let u=new vt(new li(1.5,2.7,160,1),new ft({uniforms:{uA:i.uA,uB:i.uB,uL:i.uL,uPC:i.uPC,uRn:i.uRn,uPR:{value:1}},transparent:!0,depthWrite:!1,side:hn,vertexShader:"varying vec3 vP;varying vec3 vW;void main(){vP=position;vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"varying vec3 vP;varying vec3 vW;uniform vec3 uA,uB,uL,uPC,uRn;uniform float uPR;void main(){float t=(length(vP.xy)-1.5)/1.2;float b=.5+.5*sin(t*70.+sin(t*19.)*3.);float gap=1.-.92*smoothstep(.5,.53,t)*(1.-smoothstep(.58,.61,t));float a=.9*(.35+.65*b)*gap*smoothstep(0.,.05,t)*(1.-smoothstep(.93,1.,t));vec3 L=normalize(uL),V=normalize(cameraPosition-vW);float bb=dot(uPC-vW,L);float sh=1.;if(bb>0.){float d=length(uPC-vW-L*bb);sh=smoothstep(uPR*.97,uPR*1.03,d);}float side=dot(uRn,L)*dot(uRn,V)>0.?1.:.38;float lit=(.07+.93*sh)*side;gl_FragColor=vec4(mix(uB,uA,b)*1.15*lit,a);}"})),c=-(1+o%40/100),f=(o>>3)%60/100-.3;u.userData.tilt=new Yt().setFromEuler(new sr(c,0,f)),s.add(u),s.userData.ring=u}s.userData.type=t,s.userData.sizeK=(t===1?1.45:t===3||t===0?.85:1)*(.88+o%25/100);{let l=(o%1e3/1e3-.5)*2.2,u=((o>>5)%100/100-.5)*.8,c=new N(0,.3,.95).normalize();c.applyAxisAngle(new N(1,0,0),-u),c.applyAxisAngle(new N(0,1,0),l),i.uL.value.copy(c)}return s}var vf=new Yt,Jr=new N,ox=new N;function _f(n){let e=n.userData,t=e.U.uniforms||e.U,i=n.getWorldScale(Jr).x;n.getWorldPosition(t.uPC.value);let s=e.moons||[];s.forEach((r,o)=>{r.mm.getWorldPosition(Jr);let a=r.mm.getWorldScale(ox).x;t.uOc.value[o].set(Jr.x,Jr.y,Jr.z,a)});for(let r=s.length;r<3;r++)t.uOc.value[r].set(0,0,0,0);t.uRg.value.w=i,e.ring&&(e.ring.getWorldQuaternion(vf),t.uRn.value.set(0,0,1).applyQuaternion(vf),e.ring.material.uniforms.uPR.value=i),s.forEach((r,o)=>{let a=r.U;a.uL.value.copy(t.uL.value),a.uOc.value[0].set(t.uPC.value.x,t.uPC.value.y,t.uPC.value.z,i),s[1-o]?a.uOc.value[1].copy(t.uOc.value[1-o]):a.uOc.value[1].set(0,0,0,0),a.uOc.value[2].set(0,0,0,0)})}var Sc=["medusa","pillars","ring","ribbon","crab","cloud"],Pi=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t];function lx(n,e,t,i,s,r){let o=t.length,a=new Float32Array(o*3),l=new Float32Array(o*3);t.forEach((f,h)=>{a.set(f.p,h*3),l.set([f.c[0]*f.a*2,f.c[1]*f.a*2,f.c[2]*f.a*2],h*3)});let u=new It;u.setAttribute("position",new Nt(a,3)),u.setAttribute("color",new Nt(l,3));let c=new lr(u,new qr({map:e,size:i*1.6,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:s,depthWrite:!1,blending:Ct}));return c.frustumCulled=!1,r&&(c.onBeforeRender=()=>r(c,performance.now()/1e3)),n.add(c),c}var cx={cloud(n,e,t){let i=Pi(t,[1,.4,.7],.5),s=Pi(t,[.3,.7,1],.5),r=[],o=[],a=[0,1,2].map(()=>[ut(n)*.5,ut(n)*.15,ut(n)*.5]);for(let l=0;l<260;l++){let u=a[l%3];r.push({p:[u[0]+ut(n)*.45,u[1]+ut(n)*.16,u[2]+ut(n)*.45],c:l%2?i:s,a:.2+n()*.25})}for(let l=0;l<120;l++){let u=a[l%3];o.push({p:[u[0]+ut(n)*.5,u[1]+ut(n)*.18,u[2]+ut(n)*.5],c:[1,.95,.9],a:.5+n()*.5})}return[{pts:r,size:.55,op:.5},{pts:o,size:.07,op:.9}]},medusa(n,e,t){let i=[],s=[],r=[],o=[.4,.85,1],a=[1,.45,.8];for(let l=0;l<300;l++){let u=n()*6.283,c=Math.acos(n()),f=.9+ut(n)*.04,h=Math.pow(1-c/1.5708,2);i.push({p:[Math.sin(c)*Math.cos(u)*f,Math.cos(c)*f*.75,Math.sin(c)*Math.sin(u)*f],c:Pi(o,a,h),a:.35+.65*(1-Math.cos(c))})}for(let l=0;l<120;l++){let u=n()*6.283,c=n()*1.4,f=n()*.85;s.push({p:[Math.sin(c)*Math.cos(u)*f,Math.cos(c)*f*.7,Math.sin(c)*Math.sin(u)*f],c:Pi([.5,.4,1],o,n()),a:.18})}for(let l=0;l<16;l++){let u=l/16*6.283+ut(n)*.1,c=.78+n()*.15,f=n()*6.283,h=1.8+n()*1.6;for(let p=0;p<28;p++){let v=p/27;r.push({p:[Math.cos(u)*(c*(1-.4*v))+Math.sin(v*7+f)*.1*v,-v*h*1+.05,Math.sin(u)*(c*(1-.4*v))+Math.cos(v*6+f)*.1*v],c:Pi(a,o,v),a:(1-v)*.85})}}return[{pts:s,size:.7,op:.35},{pts:i,size:.07,op:.95,spin:(l,u)=>{l.scale.y=1+.05*Math.sin(u*.9)}},{pts:r,size:.05,op:.9,spin:(l,u)=>{l.rotation.y=Math.sin(u*.15)*.25}}]},pillars(n,e,t){let i=[],s=[],r=[.75,.4,.25],o=[.3,.8,.7],a=[1,.85,.6];return[[-.5,0,1.3],[0,.2,1.8],[.55,-.1,1.1]].forEach(([l,u,c],f)=>{for(let h=0;h<120;h++){let p=Math.pow(n(),.8),v=.13*(1-.55*p)+.03;i.push({p:[l+ut(n)*v,p*c,u+ut(n)*v],c:Pi(r,o,p*.7),a:.28+.3*(1-p)})}for(let h=0;h<26;h++)s.push({p:[l+ut(n)*.07,c+ut(n)*.05,u+ut(n)*.07],c:a,a:.8})}),[{pts:i,size:.34,op:.6},{pts:s,size:.12,op:.95,spin:(l,u)=>{l.material.opacity=.85+.1*Math.sin(u*1.7)}}]},ring(n,e,t){let i=[],s=[],r=[],o=[.45,.9,.95],a=[1,.45,.35];for(let l=0;l<340;l++){let u=n()*6.283,c=1+ut(n)*.07;i.push({p:[Math.cos(u)*c,ut(n)*.04,Math.sin(u)*c*.78],c:Pi(o,a,Math.min(1,Math.abs(c-1)*7)),a:.3+n()*.4})}for(let l=0;l<46;l++){let u=n()*6.283,c=1.02+ut(n)*.03;s.push({p:[Math.cos(u)*c,ut(n)*.03,Math.sin(u)*c*.78],c:[1,1,1],a:.9})}for(let l=0;l<4;l++)r.push({p:[0,0,0],c:[.85,.92,1],a:1});for(let l=0;l<120;l++){let u=n()*6.283,c=n()*.95;i.push({p:[Math.cos(u)*c,ut(n)*.03,Math.sin(u)*c*.78],c:o,a:.07})}return[{pts:i,size:.2,op:.75},{pts:s,size:.07,op:.95},{pts:r,size:.28,op:1}]},ribbon(n,e,t){let i=[],s=[],r=[1,.8,.45],o=[.4,.65,1];for(let l=0;l<2;l++)for(let u=0;u<220;u++){let c=u/219,f=c*6*Math.PI+l*Math.PI,h=.32+.12*Math.sin(c*9);(l?s:i).push({p:[(c-.5)*3.4,Math.cos(f)*h,Math.sin(f)*h],c:l?o:r,a:.35+.65*Math.sin(Math.PI*c)})}let a=[];for(let l=0;l<110;l++){let u=n();a.push({p:[(u-.5)*3.4+ut(n)*.1,ut(n)*.3,ut(n)*.3],c:Pi(r,o,u),a:.12})}return[{pts:a,size:.5,op:.4},{pts:i.concat(s),size:.07,op:.95,spin:(l,u)=>{l.rotation.x=u*.12}}]},crab(n,e,t){let i=[],s=[],r=[1,.55,.25],o=[.4,.6,1];for(let a=0;a<34;a++){let l=n()*6.283,u=(n()-.5)*1.2,c=.5+n()*.8,f=ut(n)*.5;for(let h=0;h<22;h++){let p=h/21,v=Math.cos(l+f*p)*Math.cos(u)*c*p*1.4,_=Math.sin(u)*c*p*.8,m=Math.sin(l+f*p)*Math.cos(u)*c*p*1.4;i.push({p:[v,_,m],c:Pi(o,r,p),a:.2+.6*(1-Math.abs(p-.5)*1.4)})}}for(let a=0;a<3;a++)s.push({p:[0,0,0],c:[.7,.85,1],a:1});return[{pts:i,size:.1,op:.85},{pts:s,size:.3,op:1,spin:(a,l)=>{a.material.opacity=.6+.4*Math.abs(Math.sin(l*3.3))}}]}};function bf(n,e,t){if(e.bg)return;let i=zn(e.id),s=e.kind==="veil"||e.kind==="mist"?1:1+(i>>3)%3,r=e.tint||[.7,.8,1],o=[];for(let a=0;a<s;a++){let l=(i+a*2+(i>>5)%3*a)%Sc.length,u=0;for(;o.includes(l)&&u++<6;)l=(l+1)%Sc.length;o.push(l);let c=wn((e.seed||1)*13+a*101+7),f=Sc[l],h=new yn,p=c()*6.283,v=e.R*(.28+.5*c());h.position.set(Math.cos(p)*v,(c()-.5)*e.R*.1,Math.sin(p)*v),h.rotation.set((c()-.5)*.7,c()*6.283,(c()-.5)*.7),h.scale.setScalar(e.R*(.1+.09*c())),cx[f](c,e,r).forEach(_=>lx(h,t,_.pts,_.size,_.op,_.spin)),h.userData.neb=f,n.add(h)}}var Mf=new Yt,wc=new N,Ji=new N,W1=new N,q1=new N,ve=(function(){let n,e,t,i,s,r,o,a,l,u=null,c=!1,f=1,h=0,p=0,v=1,_=!1,m=0,d=[],M=[],x={},w=[],C=[],y=[],S={},A={},g=null,b=[],R={sector:15251531,itf:8376750,draft:10132142,home:5227496,eira:12099839,esik:10132152},z="rgba(232,184,75,0.95)",K=`attribute float aSize;attribute float aPhase;attribute vec3 aColor;varying vec3 vC;varying float vT;uniform float uTime;uniform float uPR;
  void main(){vC=aColor;vec4 mv=modelViewMatrix*vec4(position,1.0);vT=0.78+0.22*sin(uTime*0.9+aPhase);
  float s=aSize*uPR*(520.0/max(-mv.z,1.0));gl_PointSize=clamp(s,1.4*uPR,22.0*uPR);gl_Position=projectionMatrix*mv;}`,O=`attribute float aSize;attribute float aPhase;attribute vec3 aColor;varying vec3 vC;varying float vT;uniform float uTime;uniform float uPR;
  void main(){vC=aColor;vT=0.65+0.35*sin(uTime*0.7+aPhase);gl_PointSize=aSize*uPR;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,k="varying vec3 vC;varying float vT;void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=pow(1.0-d,1.7);gl_FragColor=vec4(vC*vT,a*0.85);}",H="varying vec2 vP;void main(){vP=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",G=`varying vec2 vP;uniform float uTime,uIn,uOut;void main(){float r=length(vP);float t=(r-uIn)/(uOut-uIn);float a=atan(vP.y,vP.x);
  float sw=0.5+0.5*sin(a*4.0-t*18.0+uTime*1.6)*(0.6+0.4*sin(a*9.0+t*30.0-uTime*2.3));float beam=0.55+0.45*cos(a-0.6);
  float fall=pow(max(1.0-t,0.0),1.6)*smoothstep(0.0,0.06,t);vec3 hot=mix(vec3(1.0,0.95,0.8),vec3(1.0,0.45,0.1),smoothstep(0.0,0.7,t));hot=mix(hot,vec3(0.5,0.1,0.05),smoothstep(0.6,1.0,t));
  gl_FragColor=vec4(hot*(0.35+0.9*sw)*beam*fall*1.6,fall);}`,Z="varying vec2 vP;uniform float uIn,uOut;void main(){float t=(length(vP)-uIn)/(uOut-uIn);float c=exp(-t*9.0);gl_FragColor=vec4(vec3(1.0,0.78,0.5)*c*1.8,c);}";function Y(){let U=document.createElement("canvas");U.width=U.height=128;let fe=U.getContext("2d"),ie=fe.createRadialGradient(64,64,0,64,64,64);return ie.addColorStop(0,"rgba(255,255,255,1)"),ie.addColorStop(.25,"rgba(255,255,255,.4)"),ie.addColorStop(1,"rgba(255,255,255,0)"),fe.fillStyle=ie,fe.fillRect(0,0,128,128),new Ki(U)}function ae(U){let fe=document.createElement("canvas");fe.width=640,fe.height=96;let ie=fe.getContext("2d");ie.font="44px Georgia, serif",ie.textAlign="center",ie.fillStyle=z,ie.shadowColor="#000",ie.shadowBlur=8,ie.fillText(U,320,60);let ge=new Cn({map:new Ki(fe),transparent:!0,depthWrite:!1,depthTest:!1}),ye=new On(ge);return ye.renderOrder=10,ye}function oe(U,fe){let ie=new It;ie.setAttribute("position",new Nt(U.pos,3)),ie.setAttribute("aColor",new Nt(U.col,3)),ie.setAttribute("aSize",new Nt(U.sz,1)),ie.setAttribute("aPhase",new Nt(U.ph,1));let ge=new lr(ie,fe);return ge.frustumCulled=!1,ge}function Se(U,fe){n=new oi,e=new rn(50,innerWidth/innerHeight,.5,8e4),e.position.set(2600,3400,9600);{let he=[{antialias:!0},{antialias:!1},{antialias:!1,powerPreference:"low-power"},{antialias:!1,powerPreference:"high-performance"}],T=null;window.__qulCtxTry=[];for(let ce of he)try{t=new ai(ce),window.__qulCtxTry.push(JSON.stringify(ce)+" \u2713");break}catch(Me){T=Me,t=null,window.__qulCtxTry.push(JSON.stringify(ce)+" \u2717")}if(!t)throw T}t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setSize(innerWidth,innerHeight),t.setClearColor(263178,1),U.appendChild(t.domElement),t.domElement.addEventListener("webglcontextlost",he=>{he.preventDefault();try{localStorage.setItem("qsafe",String(Date.now()))}catch{}window.__qulCtxLost=(window.__qulCtxLost||0)+1;try{window.__crumb&&window.__crumb("WEBGL BA\u011ELAMI KAYBOLDU")}catch{}});try{let he=t.getContext(),T=he.getExtension("WEBGL_debug_renderer_info");window.__qulGpu={webgl:t.capabilities.isWebGL2?"WebGL2":"WebGL1",gpu:T?he.getParameter(T.UNMASKED_RENDERER_WEBGL):he.getParameter(he.RENDERER),vendor:T?he.getParameter(T.UNMASKED_VENDOR_WEBGL):"",maxPoint:Array.from(he.getParameter(he.ALIASED_POINT_SIZE_RANGE)).join("-"),halfFloat:t.extensions.has("EXT_color_buffer_half_float")||t.extensions.has("EXT_color_buffer_float"),floatLinear:t.extensions.has("OES_texture_float_linear"),dpr:devicePixelRatio,ua:navigator.userAgent.slice(0,120)}}catch{}i=new Ro(t),i.addPass(new Co(n,e)),i.addPass(new Ss({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv;uniform sampler2D tDiffuse;void main(){vec4 c=texture2D(tDiffuse,vUv);if(isnan(c.r)||isnan(c.g)||isnan(c.b)||isnan(c.a))c=vec4(0.,0.,0.,1.);gl_FragColor=vec4(clamp(c.rgb,0.,24.),1.);}"})),a=new pr(new ke(innerWidth,innerHeight),.55,.45,.78),i.addPass(a),l=new Ss({uniforms:{tDiffuse:{value:null},uT:{value:0},uBH:{value:new ke(.5,.5)},uRs:{value:.1},uLens:{value:0},uWarp:{value:0},uFall:{value:0},uGray:{value:0},uHolo:{value:0},uAsp:{value:innerWidth/innerHeight}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv;uniform sampler2D tDiffuse;uniform float uT,uRs,uLens,uWarp,uAsp,uFall,uGray,uHolo;uniform vec2 uBH;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uT)*43758.5453);}void main(){vec2 uv=vUv;if(uLens>0.){vec2 A=vec2(uAsp,1.);vec2 d=(uv-uBH)*A;float r=max(length(d),1e-4);float f=uLens*(1.-smoothstep(1.2*uRs,5.*uRs,r));uv=uBH+(d/r)*(r-f*uRs*uRs/r)/A;}vec4 c;if(uWarp>0.){c=vec4(0.);for(int i=0;i<10;i++){float k=1.-uWarp*.13*float(i)/10.;c+=texture2D(tDiffuse,vec2(.5)+(uv-vec2(.5))*k);}c/=10.;}else c=texture2D(tDiffuse,uv);if(isnan(c.r)||isnan(c.g)||isnan(c.b))c=vec4(0.,0.,0.,1.);float l=dot(c.rgb,vec3(.299,.587,.114));c.rgb=mix(vec3(l),c.rgb,.9*(1.-uGray))*vec3(.95,.985,1.06);float v=distance(vUv,vec2(.5));c.rgb*=1.-smoothstep(.35,.95,v)*.7;c.rgb+=(h(vUv*1500.)-.5)*.022;if(uFall>0.){c.rgb=mix(c.rgb,c.rgb*vec3(1.3,.55,.3),uFall*.85);c.rgb*=1.-uFall*smoothstep(.15,.85,distance(vUv,vec2(.5)))*1.3;c.rgb*=1.-uFall*uFall*.97;}if(uHolo>0.){float lm=dot(c.rgb,vec3(.299,.587,.114));vec3 hc=vec3(.1,.55,.9)*lm*1.7+vec3(0.,.035,.075);float sl=.93+.07*sin(vUv.y*900.);float gr=max(step(.988,fract(vUv.x*uAsp*22.)),step(.988,fract(vUv.y*22.)));hc=hc*sl+vec3(0.,.25,.4)*gr*.4;c.rgb=mix(c.rgb,hc,uHolo);}gl_FragColor=c;}"}),i.addPass(l);let ie=t.getPixelRatio();s=new ft({uniforms:{uTime:{value:0},uPR:{value:ie}},vertexShader:K,fragmentShader:k,transparent:!0,depthWrite:!1,blending:Ct}),r=new ft({uniforms:{uTime:{value:0},uPR:{value:ie}},vertexShader:O,fragmentShader:k,transparent:!0,depthWrite:!1,blending:Ct}),o=new ur,fe.eiraTex&&yf(fe.eiraTex);let ge=Y();te(ge),de(fe.galaxies,ge);let ye={};fe.planets.forEach(he=>{(ye[he.gal]=ye[he.gal]||[]).push(he)}),fe.galaxies.forEach(he=>X(he,ye[he.id]||[],ge)),addEventListener("resize",()=>{e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),i.setSize(innerWidth,innerHeight),l.uniforms.uAsp.value=innerWidth/innerHeight})}function te(U){let fe=wn(99),ie=3200,ge=new Float32Array(ie*3),ye=new Float32Array(ie*3),he=new Float32Array(ie),T=new Float32Array(ie),ce=[[.78,.86,1],[1,.97,.9],[1,.84,.63],[1,.67,.47]];for(let me=0;me<ie;me++){let ue=fe()*6.283,B=Math.acos(2*fe()-1),pe=26e3+fe()*6e3;ge[me*3]=pe*Math.sin(B)*Math.cos(ue),ge[me*3+1]=pe*Math.cos(B),ge[me*3+2]=pe*Math.sin(B)*Math.sin(ue);let Re=ce[me%4],Ve=.35+fe()*.55;ye[me*3]=Re[0]*Ve,ye[me*3+1]=Re[1]*Ve,ye[me*3+2]=Re[2]*Ve,he[me]=1.2+fe()*1.8,T[me]=fe()*6.283}n.add(oe({pos:ge,col:ye,sz:he,ph:T},r)),[[4026296,-9e3,3e3,-9e3],[12076943,1e4,-2e3,-8e3],[4176032,2e3,6e3,-12e3],[8015800,-11e3,-4e3,6e3],[12076943,8e3,-5e3,9e3],[4026296,0,-8e3,-11e3]].forEach(me=>{let ue=new Cn({map:U,color:me[0],transparent:!0,opacity:.16,depthWrite:!1,blending:Ct}),B=new On(ue);B.position.set(me[1],me[2],me[3]),B.scale.set(9e3,9e3,1),n.add(B)})}function de(U,fe){let ie=wn(5),ge=U.filter(Te=>!Te.bg),ye=[],he=[];U.forEach((Te,He)=>{U.map((it,je)=>[je,Math.hypot(it.pos[0]-Te.pos[0],it.pos[1]-Te.pos[1],it.pos[2]-Te.pos[2])]).filter(it=>it[0]!==He).sort((it,je)=>it[1]-je[1]).slice(0,2).forEach(([it,je])=>{if(it<He||je>3800)return;let mt=U[it],Ut=[0,1,2].map(jt=>(Te.pos[jt]+mt.pos[jt])/2+(ie()-.5)*je*.22);[[Te.pos,Ut],[Ut,mt.pos]].forEach(jt=>{ye.push(...jt[0],...jt[1])})})});let T=new It;T.setAttribute("position",new Dt(ye,3)),n.add(new bo(T,new Ci({color:2771578,transparent:!0,opacity:.2,depthWrite:!1,blending:Ct})));let ce=3500,Me=new Float32Array(ce*3),me=new Float32Array(ce*3),ue=new Float32Array(ce),B=new Float32Array(ce);for(let Te=0;Te<ce;Te++){let He=ge[ie()*ge.length|0],nt=ie()*6.283,it=Math.acos(2*ie()-1),je=He.R*(1+ie()*3.5);Me[Te*3]=He.pos[0]+je*Math.sin(it)*Math.cos(nt),Me[Te*3+1]=He.pos[1]+je*Math.cos(it)*.6,Me[Te*3+2]=He.pos[2]+je*Math.sin(it)*Math.sin(nt);let mt=.12+ie()*.2;me[Te*3]=.5*mt,me[Te*3+1]=.7*mt,me[Te*3+2]=mt*1.3,ue[Te]=.35+ie()*.5,B[Te]=ie()*6.283}n.add(oe({pos:Me,col:me,sz:ue,ph:B},s));let pe=[];for(let Te=0;Te<ye.length;Te+=6)pe.push([new N(ye[Te],ye[Te+1],ye[Te+2]),new N(ye[Te+3],ye[Te+4],ye[Te+5])]);let Re=48,Pe={pos:new Float32Array(Re*3),col:new Float32Array(Re*3).fill(.55),sz:new Float32Array(Re).fill(2.2),ph:new Float32Array(Re)};for(let Te=0;Te<Re*3;Te+=3)Pe.col[Te]=.45,Pe.col[Te+1]=.85,Pe.col[Te+2]=1;x.points=oe(Pe,s),x.list=Array.from({length:Re},()=>({s:pe[ie()*pe.length|0],t:ie(),v:.02+ie()*.04})),x.segs=pe,n.add(x.points);for(let Te=0;Te<3;Te++){let He=new On(new Cn({map:fe,color:13624575,transparent:!0,opacity:0,depthWrite:!1,blending:Ct}));n.add(He),w.push({s:He,t:-1,next:3+Te*4})}w.real=ge}function q(U){let fe=x;if(fe.points){let ie=fe.points.geometry.attributes.position;fe.list.forEach((ge,ye)=>{ge.t+=ge.v*U,ge.t>1&&(ge.t=0,ge.s=fe.segs[Math.random()*fe.segs.length|0]),Ji.lerpVectors(ge.s[0],ge.s[1],ge.t),ie.setXYZ(ye,Ji.x,Ji.y,Ji.z)}),ie.needsUpdate=!0}w.forEach(ie=>{if(ie.next-=U,ie.t<0&&ie.next<=0){let ge=w.real[Math.random()*w.real.length|0],ye=Math.random()*6.283,he=ge.R*Math.random()*.8;ie.s.position.set(ge.pos[0]+Math.cos(ye)*he,ge.pos[1]+(Math.random()-.5)*ge.R*.1,ge.pos[2]+Math.sin(ye)*he),ie.t=0,ie.R=ge.R}if(ie.t>=0){ie.t+=U/4.5;let ge=ie.t,ye=ge<.08?ge/.08:Math.pow(1-(ge-.08)/.92,2.2);ie.s.material.opacity=Math.max(0,ye)*.95;let he=ie.R*(.15+.5*Math.sqrt(ge));ie.s.scale.set(he,he,1),ge>=1&&(ie.t=-1,ie.s.material.opacity=0,ie.next=7+Math.random()*9)}})}function X(U,fe,ie){hf(U);let ge=[],ye=new yn;ye.position.set(U.pos[0],U.pos[1],U.pos[2]),ye.rotation.set(U.tilt[0],0,U.tilt[1]);let he=new yn;ye.add(he);let T=U.bg?1300:U.id==="home"?7e3:U.kind==="veil"?700:U.kind==="mist"?300:3600,ce=df(U,T);if(U.kind==="veil"||U.kind==="mist")for(let Te=0;Te<ce.col.length;Te++)ce.col[Te]*=.4;he.add(oe(ce,s));let Me=new On(new Cn({map:ie,color:new et(U.tint[0],U.tint[1],U.tint[2]),transparent:!0,depthWrite:!1,blending:Ct,opacity:.4}));Me.position.copy(ye.position);let me=U.R*(U.bg?2.4:3.2);Me.scale.set(me,me,1),n.add(Me),(U.kind==="veil"||U.kind==="mist")&&[[0,0,0,1],[.35,.1,-.2,.7],[-.3,-.05,.3,.8]].forEach(Te=>{let He=new On(new Cn({map:ie,color:new et(U.tint[0]*.8,U.tint[1]*.7,U.tint[2]),transparent:!0,depthWrite:!1,blending:Ct,opacity:U.kind==="veil"?.22:.14}));He.position.set(U.pos[0]+Te[0]*U.R,U.pos[1]+Te[1]*U.R,U.pos[2]+Te[2]*U.R);let nt=U.R*5.5*Te[3];He.scale.set(nt,nt,1),n.add(He),ge.push(He)}),bf(he,U,ie);let ue=new vt(new Pn(1,12,8),new Sn({visible:!1}));ue.scale.setScalar(U.R*1.05),ue.userData.gid=U.id,ye.add(ue);let B=null;U.bg||(B=ae(U.name),B.position.set(U.pos[0],U.pos[1]+U.R*.62,U.pos[2]),B.scale.set(U.R*2.6,U.R*.39,1),n.add(B)),n.add(ye);let pe={g:U,outer:ye,inner:he,glow:Me,label:B,pick:ue,planets:[],fogs:ge,fogA:ge.map(Te=>Te.material.opacity),eg:1,el:1,egT:1,elT:1};if(y.push(pe),S[U.id]=pe,["itf","unas","eira","esik"].includes(U.id)||W(pe),U.sector!=null||U.id==="home"){let Te=()=>{let He=new vt(new li(1,1.09,128),new Sn({color:9426687,transparent:!0,opacity:0,depthWrite:!1,side:hn,blending:Ct}));return He.rotation.x=-Math.PI/2,He.scale.setScalar(U.R*1.1),He.visible=!1,ye.add(He),He};pe.care={ring:Te(),rip:Te(),ph:(U.id.length*.37+(U.sector||0)*.61)%1,order:U.sector||0,a:0},d.push(pe)}let Re=new Pn(1,14,10),Ve=new Sn({visible:!1}),Pe=Math.max(2.4,U.R*.016);fe.forEach((Te,He)=>{let nt=xf(Te);M.push(nt);let it=pf(U,Te.key,He,fe.length);nt.position.set(it[0],it[1],it[2]),nt.scale.setScalar(Pe*1.25*(nt.userData.sizeK||1)),nt.visible=!1;let je=new On(new Cn({map:ie,color:R[Te.kind]||16777215,transparent:!0,depthWrite:!1,blending:Ct,opacity:.22}));je.scale.set(5,5,1),nt.add(je);let mt=new vt(Re,Ve);mt.scale.setScalar(4.6),nt.add(mt),Object.assign(nt.userData,{key:Te.key,gid:U.id,hit:mt}),he.add(nt),pe.planets.push(nt),A[Te.key]={mesh:nt,gid:U.id}})}function W(U){let fe=U.g,ie=fe.R*.018,ge=new yn,ye=new vt(new Pn(ie,24,16),new Sn({color:0})),he=(me,ue,B)=>new ft({uniforms:{uTime:{value:0},uIn:{value:me},uOut:{value:ue}},vertexShader:H,fragmentShader:B,transparent:!0,depthWrite:!1,side:hn,blending:Ct}),T=new vt(new li(ie*1.7,ie*7,160,1),he(ie*1.7,ie*7,G));T.rotation.x=-Math.PI/2;let ce=new vt(new li(ie*1.02,ie*2.6,96,1),he(ie*1.02,ie*2.6,Z));ge.add(ye,T,ce),ge.visible=!1,U.outer.add(ge);let Me=new vt(new Pn(1,10,8),new Sn({visible:!1}));Me.scale.setScalar(ie*9),Me.userData.bh=fe.id,U.outer.add(Me),C.push(Me),U.bh={grp:ge,disk:T,halo:ce,rh:ie}}function $(U){g=U,b=[],y.forEach(fe=>fe.planets.forEach(ie=>{let ge=fe.g.id===U;ie.visible=ge,ge&&b.push(ie.userData.hit)}))}let Q=new N,le=new N,Ae=Math.min(devicePixelRatio,2),V=[{pr:Ae,b:1},{pr:Math.min(Ae,1.25),b:1},{pr:1,b:1},{pr:.75,b:0}],Ze=(()=>{try{let U=location.search;if(/[?&]guvenli=0/.test(U))return localStorage.removeItem("qsafe"),!1;if(/[?&]guvenli=1/.test(U))return!0;let fe=+localStorage.getItem("qsafe")||0;return fe>0&&Date.now()-fe<7*864e5}catch{return!1}})();window.__qulSafe=Ze;let Ce=0,we=0,De=0,$e=90,Ke=U=>{Ce=U,window.__qulQL=U;let fe=V[U];t.setPixelRatio(fe.pr),i.setPixelRatio(fe.pr),t.setSize(innerWidth,innerHeight),i.setSize(innerWidth,innerHeight),s&&(s.uniforms.uPR.value=fe.pr),r&&(r.uniforms.uPR.value=fe.pr),a.enabled=!!fe.b};window.__qulSetL=Ke;function L(U,fe){if(c)return;fe*=f,h+=fe;{let T=l.uniforms.uHolo;T.value+=(p-T.value)*Math.min(1,.05+fe*2.2)}s.uniforms.uTime.value=h,l.uniforms.uT.value=U/1e3%7,r.uniforms.uTime.value=h;let ie=e.position;y.forEach(T=>{T.inner.rotation.y+=T.g.spin*fe*v;let ce=ie.distanceTo(T.outer.position),Me=T.g.R;{let me=Math.min(1,fe*2.5+.02);T.eg+=(T.egT*(T.g.id===Ue?1.6:1)-T.eg)*me,T.el+=(T.elT-T.el)*me}if(T.glow.material.opacity=.42*(T.g.id===u?1.5:1)*ji((ce-Me*.6)/(Me*1.6))*T.eg,T.fogs.forEach((me,ue)=>{me.material.opacity=T.fogA[ue]*ji((ce-Me*.3)/(Me*2.5))}),T.label&&(T.label.material.opacity=.9*ji((ce-Me*3)/(Me*3))*(g&&g!==T.g.id?.12:1)*T.el),T.bh){let me=ce<Me*14;T.bh.grp.visible=me,me&&(T.bh.disk.material.uniforms.uTime.value=U/1e3,T.outer.getWorldQuaternion(Mf),T.bh.halo.quaternion.copy(Mf.invert().multiply(e.quaternion)))}}),q(fe);{let T=U/1e3-m;d.forEach(ce=>{let Me=ce.care,me=ie.distanceTo(ce.outer.position),ue=ce.g.R,B=ji((me-ue*1.8)/(ue*3)),pe=_?ji((T-Me.order*.28)/1.4):0;Me.a+=(pe-Me.a)*Math.min(1,fe*(_?4:3));let Re=Me.a>.01;if(Me.ring.visible=Me.rip.visible=Re,Re){let Ve=(T*.32+Me.ph)%1;Me.ring.material.opacity=Math.min(1,Me.a*B*(.95+.3*Math.sin(T*1.6+Me.ph*6))),Me.rip.scale.setScalar(ue*(1.1+.75*Ve)),Me.rip.material.opacity=Me.a*B*(1-Ve)*.9}})}let ge=null,ye=1e9;y.forEach(T=>{if(!T.bh)return;let ce=ie.distanceTo(T.outer.position)/T.bh.rh;ce<ye&&(ye=ce,ge=T)});let he=l.uniforms;if(he.uLens.value=0,ge&&ye<60&&(Ji.copy(ge.outer.position).project(e),Ji.z<1)){let T=ge.bh.rh/ie.distanceTo(ge.outer.position)/Math.tan(e.fov*Math.PI/360)/2;he.uBH.value.set(Ji.x*.5+.5,Ji.y*.5+.5),he.uRs.value=Math.min(.3,T*1.7),he.uLens.value=ji((60-ye)/40)*(1+he.uFall.value*1.5)}if(ge&&he.uLens.value>0){let T=ie.distanceTo(ge.outer.position),ce=Math.tan(e.fov*Math.PI/360),Me=he.uAsp.value;M.forEach(me=>{if(!me.visible)return;me.getWorldPosition(wc);let ue=ie.distanceTo(wc);if(ue>=T||(Q.copy(wc).project(e),Q.z>=1))return;me.geometry.boundingSphere||me.geometry.computeBoundingSphere();let B=me.geometry.boundingSphere.radius*me.getWorldScale(le).x*1.12,pe=B/ue/ce/2,Re=(Q.x*.5+.5-he.uBH.value.x)*Me,Ve=Q.y*.5+.5-he.uBH.value.y,Pe=ji((Math.hypot(Re,Ve)-pe)/Math.max(.01,5*he.uRs.value));he.uLens.value*=Pe})}if(M.forEach(T=>{T.visible&&(T.rotation.y+=fe*.04,T.userData.moons&&T.userData.moons.forEach(ce=>{ce.pivot.rotation.y+=fe*ce.sp}),T.userData.ring&&T.userData.ring.quaternion.copy(T.quaternion).invert().multiply(T.userData.ring.userData.tilt),_f(T))}),i.render(),E||(E=!0,window.__qulQL=0,(Ze||/swiftshader|software|llvmpipe|basic render/i.test((window.__qulGpu||{}).gpu||""))&&Ke(3)),we+=fe,De++,$e>0&&$e--,De>=40){let T=we/De;we=0,De=0,!$e&&Ce<3&&T>.034&&(Ke(T>.07?Math.min(3,Ce+2):Ce+1),$e=70)}}let E=!1;function j(U,fe){return o.setFromCamera(new ke(U.x,U.y),e),o.intersectObjects(fe,!1)}function _e(U){let fe=j(U,b);return fe.length?fe[0].object.parent.userData.key:null}function xe(U){let fe=j(U,y.map(ie=>ie.pick));return fe.length?fe[0].object.userData.gid:null}function Ee(U){let fe=j(U,C);return fe.length?fe[0].object.userData.bh:null}function Be(U){return S[U].outer.position.clone()}function Le(U){return A[U].mesh.getWorldPosition(new N)}let Ue=null;function qe(U,fe){y.forEach(ie=>{ie.egT=U(ie.g),ie.elT=fe(ie.g)})}function Ye(U){y.forEach(fe=>{fe.c0||(fe.c0=fe.glow.material.color.clone());let ie=U?U(fe.g):null;fe.glow.material.color.copy(ie?new et(ie[0],ie[1],ie[2]):fe.c0)})}return{setTint:Ye,setEra:qe,setMine:U=>{Ue=U},init:Se,frame:L,setFocus:$,pickPlanet:_e,pickGalaxy:xe,pickBH:Ee,bhWorld:Be,planetWorld:Le,pause:U=>{c=U},setGray:U=>{l.uniforms.uGray.value=U},setTimeK:U=>{f=U},setHolo:U=>{p=U},snapshot:()=>(i.render(),t.domElement.toDataURL("image/png")),setCare:U=>{_=U,m=performance.now()/1e3},careCount:()=>_?d.filter(U=>U.care.a>.95).length:0,fx:()=>({lens:l.uniforms.uLens.value,warp:l.uniforms.uWarp.value,fall:l.uniforms.uFall.value}),setFall:U=>{l.uniforms.uFall.value=U},setSpin:U=>{v=U},makeLight:()=>{let U=new On(new Cn({map:Y(),color:15267071,transparent:!0,depthWrite:!1,blending:Ct}));return n.add(U),U},removeObj:U=>n.remove(U),addObj:U=>n.add(U),setBloom:U=>{a.strength=U},setWarp:U=>{l.uniforms.uWarp.value=U},setFov:U=>{e.fov=U,e.updateProjectionMatrix()},setHover:U=>{u=U},galaxies:()=>y.map(U=>U.g),galaxy:U=>S[U],planetGalaxy:U=>A[U]&&A[U].gid,planetsOf:U=>S[U].planets.map(fe=>fe.userData.key),getCamera:()=>e,getRenderer:()=>t}})();var Sf={type:"change"},Ec={type:"start"},wf={type:"end"},Lo=new Xi,Ef=new qn,ux=Math.cos(70*Zr.DEG2RAD),mr=class extends ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bs.ROTATE,MIDDLE:bs.DOLLY,RIGHT:bs.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",qe),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",qe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Sf),i.update(),r=s.NONE},this.update=(function(){let T=new N,ce=new Yt().setFromUnitVectors(e.up,new N(0,1,0)),Me=ce.clone().invert(),me=new N,ue=new Yt,B=new N,pe=2*Math.PI;return function(Ve=null){let Pe=i.object.position;T.copy(Pe).sub(i.target),T.applyQuaternion(ce),a.setFromVector3(T),i.autoRotate&&r===s.NONE&&z(b(Ve)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Te=i.minAzimuthAngle,He=i.maxAzimuthAngle;isFinite(Te)&&isFinite(He)&&(Te<-Math.PI?Te+=pe:Te>Math.PI&&(Te-=pe),He<-Math.PI?He+=pe:He>Math.PI&&(He-=pe),Te<=He?a.theta=Math.max(Te,Math.min(He,a.theta)):a.theta=a.theta>(Te+He)/2?Math.max(Te,a.theta):Math.min(He,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&y||i.object.isOrthographicCamera?a.radius=ae(a.radius):a.radius=ae(a.radius*u),T.setFromSpherical(a),T.applyQuaternion(Me),Pe.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let nt=!1;if(i.zoomToCursor&&y){let it=null;if(i.object.isPerspectiveCamera){let je=T.length();it=ae(je*u);let mt=je-it;i.object.position.addScaledVector(w,mt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let je=new N(C.x,C.y,0);je.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),nt=!0;let mt=new N(C.x,C.y,0);mt.unproject(i.object),i.object.position.sub(mt).add(je),i.object.updateMatrixWorld(),it=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(it).add(i.object.position):(Lo.origin.copy(i.object.position),Lo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Lo.direction))<ux?e.lookAt(i.target):(Ef.setFromNormalAndCoplanarPoint(i.object.up,i.target),Lo.intersectPlane(Ef,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),nt=!0);return u=1,y=!1,nt||me.distanceToSquared(i.object.position)>o||8*(1-ue.dot(i.object.quaternion))>o||B.distanceToSquared(i.target)>0?(i.dispatchEvent(Sf),me.copy(i.object.position),ue.copy(i.object.quaternion),B.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",fe),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",j),i.domElement.removeEventListener("wheel",Ee),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",j),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",qe),i._domElementKeyEvents=null)};let i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Kr,l=new Kr,u=1,c=new N,f=new ke,h=new ke,p=new ke,v=new ke,_=new ke,m=new ke,d=new ke,M=new ke,x=new ke,w=new N,C=new ke,y=!1,S=[],A={},g=!1;function b(T){return T!==null?2*Math.PI/60*i.autoRotateSpeed*T:2*Math.PI/60/60*i.autoRotateSpeed}function R(T){let ce=Math.abs(T*.01);return Math.pow(.95,i.zoomSpeed*ce)}function z(T){l.theta-=T}function K(T){l.phi-=T}let O=(function(){let T=new N;return function(Me,me){T.setFromMatrixColumn(me,0),T.multiplyScalar(-Me),c.add(T)}})(),k=(function(){let T=new N;return function(Me,me){i.screenSpacePanning===!0?T.setFromMatrixColumn(me,1):(T.setFromMatrixColumn(me,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(Me),c.add(T)}})(),H=(function(){let T=new N;return function(Me,me){let ue=i.domElement;if(i.object.isPerspectiveCamera){let B=i.object.position;T.copy(B).sub(i.target);let pe=T.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),O(2*Me*pe/ue.clientHeight,i.object.matrix),k(2*me*pe/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(Me*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),k(me*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function G(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(T,ce){if(!i.zoomToCursor)return;y=!0;let Me=i.domElement.getBoundingClientRect(),me=T-Me.left,ue=ce-Me.top,B=Me.width,pe=Me.height;C.x=me/B*2-1,C.y=-(ue/pe)*2+1,w.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function ae(T){return Math.max(i.minDistance,Math.min(i.maxDistance,T))}function oe(T){f.set(T.clientX,T.clientY)}function Se(T){Y(T.clientX,T.clientX),d.set(T.clientX,T.clientY)}function te(T){v.set(T.clientX,T.clientY)}function de(T){h.set(T.clientX,T.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);let ce=i.domElement;z(2*Math.PI*p.x/ce.clientHeight),K(2*Math.PI*p.y/ce.clientHeight),f.copy(h),i.update()}function q(T){M.set(T.clientX,T.clientY),x.subVectors(M,d),x.y>0?G(R(x.y)):x.y<0&&Z(R(x.y)),d.copy(M),i.update()}function X(T){_.set(T.clientX,T.clientY),m.subVectors(_,v).multiplyScalar(i.panSpeed),H(m.x,m.y),v.copy(_),i.update()}function W(T){Y(T.clientX,T.clientY),T.deltaY<0?Z(R(T.deltaY)):T.deltaY>0&&G(R(T.deltaY)),i.update()}function $(T){let ce=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),ce=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),ce=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),ce=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),ce=!0;break}ce&&(T.preventDefault(),i.update())}function Q(T){if(S.length===1)f.set(T.pageX,T.pageY);else{let ce=he(T),Me=.5*(T.pageX+ce.x),me=.5*(T.pageY+ce.y);f.set(Me,me)}}function le(T){if(S.length===1)v.set(T.pageX,T.pageY);else{let ce=he(T),Me=.5*(T.pageX+ce.x),me=.5*(T.pageY+ce.y);v.set(Me,me)}}function Ae(T){let ce=he(T),Me=T.pageX-ce.x,me=T.pageY-ce.y,ue=Math.sqrt(Me*Me+me*me);d.set(0,ue)}function V(T){i.enableZoom&&Ae(T),i.enablePan&&le(T)}function Ze(T){i.enableZoom&&Ae(T),i.enableRotate&&Q(T)}function Ce(T){if(S.length==1)h.set(T.pageX,T.pageY);else{let Me=he(T),me=.5*(T.pageX+Me.x),ue=.5*(T.pageY+Me.y);h.set(me,ue)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);let ce=i.domElement;z(2*Math.PI*p.x/ce.clientHeight),K(2*Math.PI*p.y/ce.clientHeight),f.copy(h)}function we(T){if(S.length===1)_.set(T.pageX,T.pageY);else{let ce=he(T),Me=.5*(T.pageX+ce.x),me=.5*(T.pageY+ce.y);_.set(Me,me)}m.subVectors(_,v).multiplyScalar(i.panSpeed),H(m.x,m.y),v.copy(_)}function De(T){let ce=he(T),Me=T.pageX-ce.x,me=T.pageY-ce.y,ue=Math.sqrt(Me*Me+me*me);M.set(0,ue),x.set(0,Math.pow(M.y/d.y,i.zoomSpeed)),G(x.y),d.copy(M);let B=(T.pageX+ce.x)*.5,pe=(T.pageY+ce.y)*.5;Y(B,pe)}function $e(T){i.enableZoom&&De(T),i.enablePan&&we(T)}function Ke(T){i.enableZoom&&De(T),i.enableRotate&&Ce(T)}function L(T){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",j)),ie(T),T.pointerType==="touch"?Ye(T):_e(T))}function E(T){i.enabled!==!1&&(T.pointerType==="touch"?U(T):xe(T))}function j(T){ge(T),S.length===0&&(i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",j)),i.dispatchEvent(wf),r=s.NONE}function _e(T){let ce;switch(T.button){case 0:ce=i.mouseButtons.LEFT;break;case 1:ce=i.mouseButtons.MIDDLE;break;case 2:ce=i.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case bs.DOLLY:if(i.enableZoom===!1)return;Se(T),r=s.DOLLY;break;case bs.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;te(T),r=s.PAN}else{if(i.enableRotate===!1)return;oe(T),r=s.ROTATE}break;case bs.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;oe(T),r=s.ROTATE}else{if(i.enablePan===!1)return;te(T),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ec)}function xe(T){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;de(T);break;case s.DOLLY:if(i.enableZoom===!1)return;q(T);break;case s.PAN:if(i.enablePan===!1)return;X(T);break}}function Ee(T){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(T.preventDefault(),i.dispatchEvent(Ec),W(Be(T)),i.dispatchEvent(wf))}function Be(T){let ce=T.deltaMode,Me={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(ce){case 1:Me.deltaY*=16;break;case 2:Me.deltaY*=100;break}return T.ctrlKey&&!g&&(Me.deltaY*=10),Me}function Le(T){T.key==="Control"&&(g=!0,document.addEventListener("keyup",Ue,{passive:!0,capture:!0}))}function Ue(T){T.key==="Control"&&(g=!1,document.removeEventListener("keyup",Ue,{passive:!0,capture:!0}))}function qe(T){i.enabled===!1||i.enablePan===!1||$(T)}function Ye(T){switch(ye(T),S.length){case 1:switch(i.touches.ONE){case Ms.ROTATE:if(i.enableRotate===!1)return;Q(T),r=s.TOUCH_ROTATE;break;case Ms.PAN:if(i.enablePan===!1)return;le(T),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Ms.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(T),r=s.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ze(T),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ec)}function U(T){switch(ye(T),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ce(T),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;we(T),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$e(T),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ke(T),i.update();break;default:r=s.NONE}}function fe(T){i.enabled!==!1&&T.preventDefault()}function ie(T){S.push(T.pointerId)}function ge(T){delete A[T.pointerId];for(let ce=0;ce<S.length;ce++)if(S[ce]==T.pointerId){S.splice(ce,1);return}}function ye(T){let ce=A[T.pointerId];ce===void 0&&(ce=new ke,A[T.pointerId]=ce),ce.set(T.pageX,T.pageY)}function he(T){let ce=T.pointerId===S[0]?S[1]:S[0];return A[ce]}i.domElement.addEventListener("contextmenu",fe),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",j),i.domElement.addEventListener("wheel",Ee,{passive:!1}),document.addEventListener("keydown",Le,{passive:!0,capture:!0}),this.update()}};var Tf={"solar.btn":"\u2600 G\xFCne\u015F Sistemi","solar.fail":"G\xFCne\u015F Sistemi bu cihazda a\xE7\u0131lamad\u0131.","drift.home":"Evin'e uzakl\u0131k","drift.trav":"Katedilen","drift.seen":"G\xF6r\xFClen gezegen","drift.unit":"\u0131\u015F\u0131k y\u0131l\u0131","ui.drift":"\u26F6 Galaksi Gezintisi","ui.driftStop":"\u25A0 Gezintiyi durdur","drift.t":"Galaksiler","ui.pageTitle":"Galaksi Konfederasyonu \u2014 Qul Efsaneleri","ui.title":"Galaksi Konfederasyonu","ui.sub":"100+ galaksi \xB7 her galaksi bir sekt\xF6r \xB7 s\xFCr\xFCkle, tekerlekle yakla\u015F, galaksiye veya kara deli\u011Fe t\u0131kla","leg.home":"D\xFCnya","leg.sector":"Sekt\xF6r gezegeni","leg.itf":"\u0130TF kolonisi","leg.draft":"Sekt\xF6r\xFC atanmam\u0131\u015F","leg.eira":"E\u015Flenik Evren","ui.search":"Gezegen veya galaksi ara\u2026","ui.tour":"\u25B6 Sinematik Tur","ui.tourStop":"\u25A0 Turu durdur","ui.homeBtn":"\u2302 Ana Sayfa","ui.back":"\u2922 T\xFCm Evren","ui.loading":"Evren y\xFCkleniyor\u2026","ui.hush":"\u25CC Sessizlik","ui.hushOn":"\u25C9 Sessizlik a\xE7\u0131k","ui.lang":"Dil","intro.1.h":"Sessizlik","intro.1.s":"Burada ses yoktur. Yaln\u0131zca \xE7ok eski \u0131\u015F\u0131k.","intro.2.h":"Her \u0131\u015F\u0131k noktas\u0131 bir galaksi","intro.2.s":"Y\xFCz milyarlarca g\xFCne\u015Ften olu\u015Fmu\u015F birer ada \xB7 aralar\u0131nda milyonlarca y\u0131ll\u0131k bo\u015Fluk","intro.3.h":"Galaksi Konfederasyonu","intro.3.s":"100+ galaksi \xB7 her galaksi bir sekt\xF6r \xB7 bug\xFCnden yakla\u015F\u0131k 15.000 y\u0131l sonras\u0131n\u0131n haritas\u0131","tour.t1":"Evren","gal.eira":"Hen\xFCz bir gizem \xB7 bilinen tek gezegen: Eirahoutmoss","gal.esik":"\u0130ki evren aras\u0131ndaki e\u015Fik","gal.unreg":"Hen\xFCz kay\u0131tl\u0131 de\u011Fil","gal.count":"{n} gezegen kay\u0131tl\u0131","gal.light":"I\u015F\u0131\u011F\u0131 Samanyolu'na {y} y\u0131lda ula\u015F\u0131r","tip.bh":"Kara delik \xB7 {name}","tip.gal":"{name} \xB7 {n} gezegen","panel.concept":"Konsept g\xF6rsel","panel.conceptNC":"Konsept g\xF6rsel \xB7 kanon \xE7izimi de\u011Fil","panel.guide":"Konfederasyon Rehberi g\xF6rseli","panel.enlarge":"{note} \xB7 b\xFCy\xFCtmek i\xE7in t\u0131kla","row.colony":"Koloni kodu","row.code":"Kay\u0131t kodu","row.nocode":"Sekt\xF6r kodu hen\xFCz atanmam\u0131\u015F","row.region":"B\xF6lge","row.galaxy":"Galaksi","row.status":"Durum","row.settle":"Yerle\u015Fim durumu","row.dipl":"Diplomatik durum","row.axiom":"Aksiyom","row.est":"{v} (tahmini)","btn.kisura":"\u25B6 Kisura'ya gir \xB7 sinematik","chips.none0":"Hen\xFCz kay\u0131tl\u0131 gezegen yok","chips.none1":"Bu galaksinin gezegenleri hen\xFCz yaz\u0131lmad\u0131","search.bh":"Kara delik","search.gal":"Galaksi","dist.label":"Samanyolu'na uzakl\u0131k","dist.unit":"\u0131\u015F\u0131k y\u0131l\u0131","dist.million":"milyon","cin.c1":"E\u015Flenik Evren \xB7 Eirahoutmoss","cin.h1":"Kisura","cin.p1":"Kronolitler \u015Eehri","cin.c2":"Kisura","cin.h2":"\u015Eehir kronolitlere aittir","cin.p2":"\u0130nsanlar misafir.","cin.h3":"Kronolitler \u015Eehri","cin.p3":"Ta\u015F de\u011Fil de donmu\u015F \u0131\u015F\u0131k.","cin.close":"\u2715 Kapat","btn.land":"\u25BC Y\xFCzeye in","light.btn":"\u2726 I\u015F\u0131\u011F\u0131 izle","light.start":"Bu \u0131\u015F\u0131k {y} y\u0131l \xF6nce yola \xE7\u0131kt\u0131","light.endH":"\u015Eimdi g\xF6rd\xFC\u011F\xFCn\xFCz ge\xE7mi\u015Ftir","light.endS":"I\u015F\u0131k y\u0131ldan y\u0131la sessizce yol al\u0131r; var\u0131\u015Ft\u0131\u011F\u0131nda kayna\u011F\u0131 art\u0131k ba\u015Fkad\u0131r.","row.assign":"Sekt\xF6r atamas\u0131","val.draft":"Taslak \xB7 yazar onay\u0131 bekliyor","fall.btn":"\u25C9 Olay ufkuna d\xFC\u015F","fall.1h":"Olay ufku","fall.1s":"I\u015F\u0131\u011F\u0131n bile geri d\xF6nemedi\u011Fi s\u0131n\u0131r","fall.2h":"Zaman yava\u015Fl\u0131yor","fall.2s":"D\u0131\u015Far\u0131daki galaksi senin i\xE7in h\u0131zlan\u0131yor: senin bir saniyen, onun binlerce y\u0131l\u0131.","fall.3h":"I\u015F\u0131k k\u0131zar\u0131yor","fall.3s":"Her foton geride kal\u0131yor; renkler uzun dalgaya \xE7ekiliyor.","fall.4h":"Buradan sonras\u0131","fall.4s":"Bu e\u015Fi\u011Fin \xF6tesini hi\xE7bir kay\u0131t anlatm\u0131yor.","fall.5h":"Sessizlik","fall.5s":"I\u015F\u0131k geri d\xF6nemedi. Sen d\xF6nebilirsin.","scale.btn":"\u221E \xD6l\xE7ek Yolculu\u011Fu","scale.2h":"Bir gezegen","scale.2s":"Eirahoutmoss: E\u015Flenik Evren'in bilinen tek d\xFCnyas\u0131.","scale.3h":"Bir evren","scale.3s":"Trilyonlarca galaksiden olu\u015Fuyor; yaln\u0131zca tek bir gezegeni biliniyor.","scale.4h":"G\xF6k adalar","scale.4s":"Her \u0131\u015F\u0131k noktas\u0131, y\xFCz milyarlarca g\xFCne\u015Ften olu\u015Fan bir galaksi.","scale.5h":"Galaksi Konfederasyonu","scale.5s":"Hepsi, ayn\u0131 sessizli\u011Fin i\xE7inde.","care.btn":"\u25CE Temsil katman\u0131","care.btnOn":"\u25CE Temsil katman\u0131: a\xE7\u0131k","care.1h":"Sorumluluk","care.1s":"Trilyonlarca galaksi var. Konfederasyon, her birinin sorumlulu\u011Funu \xFCstlenmek i\xE7in ko\u015Fu\u015Fan \xFCst bilin\xE7li t\xFCrlerin a\u011F\u0131d\u0131r.","care.count":"Temsilcisi olan galaksi: {n}","care.note":"Her halka, bir galaksinin sorumlulu\u011Funu \xFCstlenen \xFCst bilin\xE7li bir t\xFCr\xFC g\xF6sterir.","th.btn":"\u27C1 E\u015Fik Ge\xE7i\u015Fi","th.1h":"Araf","th.1s":"Evrenin bitti\u011Fi gri b\xF6lge.","th.2h":"Cherqa","th.2s":"Ge\xE7i\u015F ve ar\u0131nma boyutu. Zaman burada akmaz.","th.3h":"E\u015Flenik Evren","th.3s":"Bilinen tek gezegeni Eirahoutmoss; gerisi hen\xFCz bir gizem.","cmd.btn":"\u25A6 Komuta Masas\u0131","cmd.on":"\u25A6 Komuta Masas\u0131: a\xE7\u0131k","cmd.1h":"Komuta Masas\u0131","cmd.1s":"Konfederasyon, tepeden: her halka bir sekt\xF6r, her sekt\xF6r bir sorumluluk.","snap.btn":"\u25C9 Kare yakala","snap.mark":"Qul Efsaneleri","snap.done":"Kare indirildi (sinema oran\u0131).","nar.btn":"\u266B Anlat\u0131c\u0131: kapal\u0131","nar.on":"\u266B Anlat\u0131c\u0131: a\xE7\u0131k","pair.btn":"\u21CC E\u015Fleme","pair.1h":"Yeremya","pair.1s":"D\xFCnya, Yeremya evreninde. Eirahoutmoss ile e\u015Fleniktir.","pair.2h":"\u0130ki evren, bir e\u015Fleme","pair.2s":"Aralar\u0131nda Araf ve Cherqa var.","pair.3h":"Eirahoutmoss","pair.3s":'Elementlerin ve hen\xFCz bilinmeyen "ard\u0131l bilgiler"in aktif oldu\u011Fu kadim gezegen.',"btn.map":"\u25A6 Haritay\u0131 a\xE7","map.close":"\u2715 Kapat","map.hint":"S\xFCr\xFCkle \xB7 tekerlekle yak\u0131nla\u015F \xB7 bir yere t\u0131kla","map.unwritten":"Bu b\xF6lge i\xE7in kay\u0131t hen\xFCz eklenmedi.","map.kis":"Kronolitlerin g\xF6\u011Fe y\xFCkseldi\u011Fi, g\xF6lgeleri takvim olan \u015Fehir.","map.enter":"\u25B6 Kisura'ya gir","tools.btn":"\u2630 Ara\xE7lar","btn.surface":"\u25C7 Y\xFCzey u\xE7u\u015Fu","surf.fail":"Bu cihazda y\xFCzey g\xF6r\xFCnt\xFCs\xFC ba\u015Flat\u0131lamad\u0131 (grafik s\xFCr\xFCc\xFCs\xFC hatas\u0131). Galaksi haritas\u0131n\u0131 kullanmaya devam edebilirsin.","surf.note":"Prosed\xFCrel konsept y\xFCzey \xB7 kanon \xE7izimi de\u011Fil","surf.hint":"Fare: bak \xB7 s\xFCr\xFCkle / Q E: d\xF6n \xB7 W A S D: y\xFCr\xFC \xB7 Bo\u015Fluk / C: y\xFCkseklik \xB7 Shift: h\u0131zlan \xB7 F: oto-s\xFCz\xFClme \xB7 T: g\xFCn d\xF6ng\xFCs\xFC \xB7 P: foto\u011Fraf \xB7 K: kalite \xB7 V: bak\u0131\u015F \xB7 O: y\xF6r\xFCnge \xB7 R: video \xB7 M: g\xF6k haritas\u0131 \xB7 L: g\xF6zlem arac\u0131","surf.close":"\u2715 Gezegene d\xF6n","surf.dive":" \xB7 X: dal\u0131\u015F","surf.photo":"\u25C9 Foto\u011Fraf","surf.load":"Gezegene ini\u015F yap\u0131l\u0131yor\u2026 ekran birka\xE7 saniye hareketsiz kalabilir, l\xFCtfen bekle.","esik.note":"Fare: derinli\u011Fe bak \xB7 Esc: \xE7\u0131k","esik.close":"\u2715 Gezegene d\xF6n","esik.eyebrow":"E\u015Fik b\xF6lgeleri","esik.a.t":"Araf","esik.a.1":"Evrenin bitti\u011Fi gri b\xF6lge.","esik.c.t":"Cherqa","esik.c.1":"Ge\xE7i\u015F ve ar\u0131nma boyutu.","esik.c.2":"Zaman akmaz.","esik.c.3":"Bilgi Nehri buradan akar.","esik.c.4":"Burada bir se\xE7im yap\u0131l\u0131r.","esik.cross":"E\u015Fi\u011Fi ge\xE7 \u203A","esik.back":"\u2039 Araf'a d\xF6n","btn.esik":"\u25C7 E\u015Fi\u011Fe yakla\u015F","surf.q":"Kalite","surf.q0":"D\xFC\u015F\xFCk","surf.q1":"Orta","surf.q2":"Y\xFCksek","surf.lat":"Enlem","surf.N":"K","surf.S":"G","surf.s0":"\u0130lkbahar","surf.s1":"Yaz","surf.s2":"Sonbahar","surf.s3":"K\u0131\u015F","surf.w0":"A\xE7\u0131k","surf.w1":"Bulutlu","surf.w2":"Ya\u011Fmurlu","surf.w3":"F\u0131rt\u0131na","surf.wDust":"Toz f\u0131rt\u0131nas\u0131","surf.poi":"\u0130z","surf.poiHint":"Ufuktaki \u0131\u015F\u0131k s\xFCtunlar\u0131 bu d\xFCnyaya ait kay\u0131tlar\u0131 ta\u015F\u0131r. Yakla\u015F ve oku.","surf.view":"Bak\u0131\u015F","surf.v.gezgin":"Gezgin","surf.v.yerli":"Yerli","surf.v.gozlemci":"G\xF6zlemci","surf.touch":"Sol taraf: hareket \xB7 Sa\u011F taraf: bak \xB7 \u25B2\u25BC: y\xFCkseklik","log.btn":"\u25C8 K\xE2\u015Fif defteri","log.eyebrow":"Galaksi Konfederasyonu","log.title":"K\xE2\u015Fif Defteri","log.worlds":"d\xFCnya","log.traces":"iz","log.photos":"foto\u011Fraf","log.row":"{v} ziyaret \xB7 {f} iz \xB7 {p} foto\u011Fraf","log.empty":'Hen\xFCz hi\xE7bir d\xFCnyaya inmedin. Bir gezegende "Y\xFCzey u\xE7u\u015Fu"nu dene; ziyaretlerin ve buldu\u011Fun izler burada birikir.',"ortak.n":"\u015Eu an {n} k\xE2\u015Fif g\xF6ky\xFCz\xFCnde","ortak.here":"{n} ki\u015Fi bu sekt\xF6rde","surf.nbP":"Bu sekt\xF6rdeki kom\u015Fu d\xFCnya \u2014 t\u0131kla ve oraya in","surf.nbG":"Kom\u015Fu galaksi \u2014 t\u0131kla ve haritada ona git","surf.calm":"Sakin mod","surf.calmOn":"Sakin mod a\xE7\u0131k","surf.video":"10 sn video","surf.videoNo":"Bu taray\u0131c\u0131 video kayd\u0131n\u0131 desteklemiyor.","surf.warp":"Y\xF6r\xFCngeye \xE7\u0131k\u0131l\u0131yor","surf.orbit":"Y\xF6r\xFCnge","surf.orbitHint":"Gezegenin bir noktas\u0131na t\u0131kla, tam oraya in. O: geri d\xF6n.","surf.map":"G\xF6k haritas\u0131","surf.mapOn":"Y\xF6n \xE7izgileri ve g\xF6k cisimlerinin adlar\u0131 a\xE7\u0131k. M: kapat.","surf.mapOff":"Kapand\u0131.","surf.sun":"G\xFCne\u015F","surf.sunTwin":"\u0130kiz y\u0131ld\u0131z","surf.moon":"Uydu","surf.cN":"K","surf.cE":"D","surf.cS":"G","surf.cW":"B","log.gallery":"Galeri","ui.atlas":"\u2630 Atlas","era.label":"Zaman katman\u0131","era.now.y":"G\xFCn\xFCm\xFCz","era.now.n":"Yeremya \xB7 D\xFCnya","era.now.d":"Maddi d\xFCnya: her \u015Fey frekans ve titre\u015Fim fizi\u011Fiyle i\u015Fler. Hik\xE2yenin ba\u015Flad\u0131\u011F\u0131 yer.","era.itf.y":"+2600 y\u0131l","era.itf.n":"\u0130lk Tohum Filosu","era.itf.d":"\u0130lk koloni gemisi dalgas\u0131. Galaksi Konfederasyonu hen\xFCz yok; koloniciler zorlu d\xFCnyalara genetik uyumla tutunuyor.","era.conf.y":"+15.000 y\u0131l","era.conf.n":"Galaksi Konfederasyonu","era.conf.d":"Yakla\u015F\u0131k 1000 gezegenden olu\u015Fan siyasal yap\u0131; en etkin y\xFCz kadar\u0131 bu haritada.","id.explorer":"K\xE2\u015Fif","id.home":"D\xFCnya (Yeremya)","id.itf":"\u0130lk Tohum Filosu","id.title":"K\xE2\u015Fif Kimli\u011Fi","id.lead":"Konfederasyon kayd\u0131na kendini yaz: bir ad, geldi\u011Fin sekt\xF6r ve sana en yak\u0131n aksiyom. Yaln\u0131zca bu taray\u0131c\u0131da saklan\u0131r.","id.name":"K\xE2\u015Fif ad\u0131 (iste\u011Fe ba\u011Fl\u0131)","id.sector":"K\xF6ken sekt\xF6r\xFC","id.axiom":"Sana en yak\u0131n aksiyom","id.save":"Kaydet","id.card":"Kimlik kart\u0131n\u0131 indir","id.close":"Kapat","id.stats":"{w} d\xFCnya ziyaret edildi \xB7 {f} iz bulundu","id.none":"Hen\xFCz bir k\xE2\u015Fif kimli\u011Fin yok.","id.create":"Kimlik olu\u015Ftur","id.edit":"Kimli\u011Fi d\xFCzenle","id.yours":"senin aksiyomun","surf.tideUp":"Gelgit y\xFCkseliyor","surf.tideDn":"Gelgit \xE7ekiliyor","surf.cave":"Ma\u011Fara giri\u015Fi","surf.caveHint1":"Par\u0131ldayan mantarlar\u0131n ayd\u0131nlatt\u0131\u011F\u0131 yeralt\u0131 ma\u011Faralar\u0131. G: gir.","surf.caveHint2":"Buzullar\u0131n alt\u0131ndaki gizemli ma\u011Faralar. G: gir.","surf.caveHint3":"Yeralt\u0131 madenci kolonicilerin t\xFCnelleri. G: gir.","surf.caveIn":"Ma\u011Fara \xB7 {m} m","surf.caveIn2":"Fener a\xE7\u0131k. W/S: ilerle \xB7 Q/E: d\xF6n \xB7 G ya da geri y\xFCr\xFC: \xE7\u0131k.","sergi.scan":"Telefonunla tara, evreni ke\u015Ffet","sergi.resume":"\u25B6 G\xF6sterimi s\xFCrd\xFCr","log.community":"Topluluk \xB7 bu ay en \xE7ok iz bulunan d\xFCnyalar","log.found":"{n} iz","mec.btn":"\u2696 Meclis","mec.eyebrow":"Konfederasyon Meclisi","mec.next":"Sonraki","mec.total":"{n} k\xE2\u015Fif oy verdi.","mec.thanks":"Tutumun kaydedildi.","mec.anon":"Oylar anonimdir.","let.title":"K\xE2\u015Fif mektuplar\u0131","let.anon":"imzas\u0131z bir k\xE2\u015Fif","let.write":"Konfederasyon'a mektup","let.world":"Hangi d\xFCnyadan yaz\u0131yorsun?","let.text":"Mektubun","let.note":"Mektubun yazara iletilir; onaylan\u0131rsa o d\xFCnyan\u0131n sayfas\u0131nda, k\xE2\u015Fif ad\u0131nla yer al\u0131r.","let.send":"G\xF6nder","let.ok":"\u0130letildi. Te\u015Fekk\xFCrler.","let.err":"G\xF6nderilemedi, sonra yeniden dene.","aks.btn":"\u25D0 Aksiyomlar","aks.title":"Bask\u0131n aksiyom","aks.1":"Anlam, \u0130li\u015Fkiden Do\u011Far","aks.2":"Ger\xE7eklik, Tutarl\u0131l\u0131kt\u0131r","aks.3":"Ama\xE7, De\u011Fer Yaratmakt\u0131r","aks.count":"{n} d\xFCnya ({e} tahmini)","aks.note":"Her galaksi, kay\u0131tl\u0131 d\xFCnyalar\u0131nda en s\u0131k g\xF6r\xFClen aksiyomun rengini al\u0131r. Gri: aksiyomu bilinmeyen.","surf.scan":"G\xF6zlem arac\u0131","surf.scT":"Termal","surf.scM":"Manyetik alan","surf.scS":"Spektrum","surf.r.t":"Y\xFCzey s\u0131cakl\u0131\u011F\u0131","surf.r.p":"Bas\u0131n\xE7","surf.r.o2":"Oksijen","surf.r.g":"Yer\xE7ekimi","surf.r.mag":"Manyetik alan","surf.r.rad":"Radyasyon","surf.src.kanon":"kanon","surf.src.tahmini":"tahmini","surf.src.temsili":"temsili","surf.src.yok":"veri yok","surf.scNote1":"Yapay renkli termal g\xF6r\xFCnt\xFC: s\u0131cakl\u0131klar gezegen t\xFCr\xFCnden ve g\xFCne\u015F alan y\xFCzeyden tahmin edilir.","surf.scNote2":"Manyetik alan \xE7izgileri ve kutup b\xF6lgeleri (temsili). G\xFCc\xFC kanondaki ifadeye g\xF6re ayarlan\u0131r.","surf.scNote3":"Atmosfer so\u011Furma \xE7izgileri: kanonda ad\u0131 ge\xE7en bile\u015Fenlerin ger\xE7ek dalga boylar\u0131."};var Qr=window.QUL_LANG||{code:"tr",dir:"ltr",s:{}},Ln=Qr.code,D=(n,e)=>{let t=Qr.s[n];return t==null&&(t=Tf[n]),t==null&&(t=n),e?t.replace(/\{(\w+)\}/g,(i,s)=>e[s]!=null?e[s]:i):t},ea=n=>Math.round(n).toLocaleString(Ln);function fx(n,e){n.planets.forEach(t=>{let i="planet."+t.key+".";["title","eyebrow","desc","imgNote"].forEach(r=>t[r]!=null&&e(i+r,t,r));let s=t.card||{};["durum","aksiyom"].forEach(r=>s[r]!=null&&e(i+"card."+r,s,r)),(s.extra||[]).forEach((r,o)=>{e(i+"extra."+o+".h",r,"h"),r.items.forEach((a,l)=>e(i+"extra."+o+".i."+l,r.items,l))})}),n.galaxies.forEach(t=>t.name!=null&&e("galaxy."+t.id+".name",t,"name")),Object.keys(n.bh).forEach(t=>{let i=n.bh[t];["title","eyebrow","desc"].forEach(s=>i[s]!=null&&e("bh."+t+"."+s,i,s)),(i.rows||[]).forEach((s,r)=>[0,1].forEach(o=>e("bh."+t+".row."+r+"."+o,s,o)))})}function Af(n){Ln!=="tr"&&(fx(n,(e,t,i)=>{Qr.s[e]!=null&&(t[i]=Qr.s[e])}),document.documentElement.lang=Ln,document.documentElement.dir=Qr.dir||"ltr",document.title=D("ui.pageTitle"),document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=D(e.dataset.i18n)),document.querySelectorAll("[data-i18n-ph]").forEach(e=>e.placeholder=D(e.dataset.i18nPh)))}var ze=(function(){let n,e,t,i={},s=null,r=null,o=[],a=null,l=null;function u(){if(a){a=null;let k=l;l=null,k&&k()}}let c=new N(2600,3400,9600),f=new N(2600,0,0),h={active:!1,t:0,dur:2.4,fromP:new N,fromT:new N,dest:null,arc:0,done:null};function p(k,H,G){e=H,t=k.domElement,i=G,n=new mr(e,t),n.enableDamping=!0,n.dampingFactor=.07,n.minDistance=10,n.maxDistance=3e4,n.target.copy(f);let Z=null;t.addEventListener("pointerdown",Y=>{u(),Z=[Y.clientX,Y.clientY],i.onUser&&i.onUser()}),t.addEventListener("pointerup",Y=>{if(!Z)return;let ae=Math.hypot(Y.clientX-Z[0],Y.clientY-Z[1]);Z=null,ae<5&&C(Y)}),t.addEventListener("pointermove",y),addEventListener("keydown",Y=>{Y.key==="Escape"&&(i.onUser&&i.onUser(),A())})}let v=k=>{let H=t.getBoundingClientRect();return{x:(k.clientX-H.left)/H.width*2-1,y:-((k.clientY-H.top)/H.height)*2+1}};function _(k,H,G,Z){u(),h.fromP.copy(e.position),h.fromT.copy(n.target),h.dest=k,h.t=0,h.dur=Z||Math.min(4,Math.max(2.2,1.9+H/6e3*1.4)),h.arc=H*.08,h.active=!0,h.done=G||null,r=null}let m=(k,H)=>{let G=e.position.clone().sub(k).normalize();return G.y=Math.max(G.y,H),G.normalize()};function d(k){if(k===s)return;s=k,ve.setFocus(k);let H=k&&ve.galaxy(k);i.onFocus&&i.onFocus(H?H.g:null,H?ve.planetsOf(k):[])}function M(k){let H=ve.galaxy(k),G=H.outer.position.clone(),Z=m(G,.3),Y=G.clone().addScaledVector(Z,Math.max(H.g.R*2.6,120));d(k),_(()=>({pos:Y,target:G}),e.position.distanceTo(Y),()=>i.onGalaxy&&i.onGalaxy(H.g))}function x(k){let H=ve.galaxy(k),G=ve.bhWorld(k),Z=m(G,.2),Y=G.clone().addScaledVector(Z,Math.max(H.bh.rh*15,40));d(k),_(()=>({pos:Y,target:G}),e.position.distanceTo(Y),()=>i.onBH&&i.onBH(k))}function w(k){let H=ve.planetGalaxy(k);if(!H)return;d(H);let G=ve.galaxy(H),Z=ve.planetWorld(k),Y=m(Z,.25),ae=Math.max(G.g.R*.16,16);_(()=>{let oe=ve.planetWorld(k);return{pos:oe.clone().addScaledVector(Y,ae),target:oe}},e.position.distanceTo(Z),()=>i.onPlanet&&i.onPlanet(k)),r=k}function C(k){let H=v(k),G=ve.pickPlanet(H);if(G){w(G);return}let Z=ve.pickBH(H);if(Z){x(Z);return}let Y=ve.pickGalaxy(H);Y&&Y!==s&&M(Y)}function y(k){let H=v(k),G=ve.pickPlanet(H),Z=null,Y=null;if(G)Z=i.titleOf(G);else{let ae=ve.pickBH(H);if(ae)Z=D("tip.bh",{name:i.bhTitle(ae)});else{let oe=ve.pickGalaxy(H);if(oe){Y=oe;let Se=ve.galaxy(oe).g;Z=Se.bg?D("gal.unreg"):D("tip.gal",{name:Se.name,n:ve.planetsOf(oe).length})}}}ve.setHover(Y),t.style.cursor=Z?"pointer":"grab",i.tip&&i.tip(Z,k.clientX,k.clientY)}function S(k){if(h.active){h.t=Math.min(1,h.t+k/h.dur);let H=ui(h.t),G=h.dest();if(e.position.lerpVectors(h.fromP,G.pos,H),e.position.y+=Math.sin(Math.PI*H)*h.arc,n.target.lerpVectors(h.fromT,G.target,H),i.onFlight&&i.onFlight(H),h.t>=1){e.position.copy(G.pos),n.target.copy(G.target),h.active=!1,i.onFlight&&i.onFlight(null);let Z=h.done;h.done=null,Z&&Z(),o.splice(0).forEach(Y=>Y())}}else if(a)a(k)===!1&&u();else if(r){let H=ve.planetWorld(r);e.position.add(H.clone().sub(n.target)),n.target.copy(H)}n.update()}function A(){d(null),_(()=>({pos:c,target:f}),e.position.distanceTo(c),()=>i.onHome&&i.onHome())}function g(){e.position.set(2600,6500,22e3),n.target.copy(f),_(()=>({pos:c,target:f}),0,()=>i.onIntroDone&&i.onIntroDone(),16)}let b=()=>n.target;function R(k,H){d(null);let G=new N(...k),Z=new N(...H);_(()=>({pos:G,target:Z}),e.position.distanceTo(G))}function z(k,H){u(),r=null,a=k,l=H||null}function K(k,H){z(G=>{if(h.active)return;if(H){let te=ve.planetWorld(H);e.position.add(te.clone().sub(n.target)),n.target.copy(te)}let Z=n.target,Y=e.position.clone().sub(Z),ae=k*G,oe=Math.cos(ae),Se=Math.sin(ae);e.position.set(Z.x+Y.x*oe-Y.z*Se,Z.y+Y.y+Math.sin(performance.now()/6e3)*k*G*Y.length()*.15,Z.z+Y.x*Se+Y.z*oe)})}return{orbit:K,view:R,target:b,drive:z,init:p,update:S,reset:A,intro:g,focusGalaxy:M,focusBH:x,flyToPlanet:w,whenIdle:()=>new Promise(k=>{h.active?o.push(k):k()})}})();var $i=n=>document.getElementById(n),hi=(function(){let n=null,e=[],t=null,i=(c,f)=>e.push(setTimeout(f,c));function s(c){try{parent.postMessage({qulDuck:c},"*")}catch{}}function r(){n=document.createElement("div"),n.id="kis",n.innerHTML='<div class="kmap"><img src="img/eirahoutmoss.jpg" alt=""></div><video id="kv" playsinline preload="auto" poster="img/kisura-poster.jpg"></video><div class="kvg"></div><div class="kfl"></div><div class="kcap"><small id="kc1"></small><h2 id="kc2"></h2><p id="kc3"></p></div><button id="kx"></button>',document.body.appendChild(n),$i("kx").onclick=u,$i("kx").textContent=D("cin.close")}function o(c,f,h){let p=document.querySelector(".kcap");p.classList.remove("on"),p.offsetWidth,$i("kc1").textContent=c,$i("kc2").textContent=f,$i("kc3").textContent=h||"",p.classList.add("on")}function a(c){return new Promise(f=>{t=f,n||r(),n.classList.remove("land"),n.querySelector(".kmap img").src="img/eirahoutmoss.jpg";let h=$i("kv");h.src="img/kisura.mp4",h.currentTime=0,h.classList.remove("on"),n.classList.remove("vid"),n.classList.add("on"),document.documentElement.style.setProperty("--bar","9vh"),s(!0);let p=n.querySelector(".kmap img");p.style.animation="none",p.offsetWidth,p.style.animation="",o(D("cin.c1"),D("cin.h1"),D("cin.p1")),i(5200,()=>{n.classList.add("vid"),h.classList.add("on"),h.muted=!1;let v=h.play();v&&v.catch&&v.catch(()=>{h.muted=!0,h.play().catch(()=>{})}),o(D("cin.c2"),D("cin.h2"),D("cin.p2"))}),h.onended=()=>{o(D("cin.c2"),D("cin.h3"),D("cin.p3")),c&&c.auto&&i(4500,u)}})}function l(c){n||r(),$i("kv").classList.remove("on"),n.classList.remove("vid"),n.querySelector(".kmap img").src=c.img,n.classList.add("land","on"),document.documentElement.style.setProperty("--bar","9vh"),o(c.eyebrow||"",c.title,(c.desc||"").split(". ")[0].replace(/\.$/,"")+".")}function u(){if(!n||!n.classList.contains("on"))return;if(e.forEach(clearTimeout),e=[],$i("kv").pause(),n.classList.remove("on"),document.documentElement.style.setProperty("--bar","0vh"),s(!!window.__hush),t){let f=t;t=null,f()}}return{kisura:a,land:l,close:u}})();var di={};Fd(di,{chips:()=>Ic,closePanel:()=>pt,flight:()=>yr,initSearch:()=>kc,openItem:()=>Io,setup:()=>Pc,tip:()=>Lc,titleCard:()=>yt,titleDur:()=>ia,toast:()=>vr});var gr=()=>{let n=window.QUL_ORTAK;return n?n.replace(/^wss:/,"https:").replace(/^ws:/,"http:").replace(/\/$/,""):""},Tc=(n,e)=>fetch(gr()+n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(t=>t.json()),Ac={},fi=null,Rc=null,Rf=0,Qi=null,dx=n=>{Qi||(Qi=document.createElement("div"),Qi.id="ortak",document.body.appendChild(Qi)),Qi.textContent=D("ortak.n",{n:n.n})+(n.here>1?" \xB7 "+D("ortak.here",{n:n.here-1}):""),Qi.classList.add("on")},Cf=()=>{try{fi&&fi.readyState===1&&Rc&&fi.send(JSON.stringify({s:Rc}))}catch{}},Pf=()=>{let n=window.QUL_ORTAK;if(n){try{fi=new WebSocket(n)}catch{return}fi.onopen=()=>{Rf=0,Cf()},fi.onmessage=e=>{try{let t=JSON.parse(e.data);t.top&&(window.__qulTop=t.top),dx(t)}catch{}},fi.onclose=()=>{Qi&&Qi.classList.remove("on"),setTimeout(Pf,Math.min(6e4,2e3*Math.pow(2,Rf++)))}}},Lf=n=>{try{fi&&fi.readyState===1&&fi.send(JSON.stringify({f:String(n)}))}catch{}};addEventListener("qulFound",n=>Lf(n.detail));var dn={start(){Pf()},where(n){Rc=String(n||""),Cf()},found:Lf,on:()=>!!gr(),letters(n){return gr()?Ac[n]?Promise.resolve(Ac[n]):fetch(gr()+"/api/mektuplar?k="+encodeURIComponent(n)).then(e=>e.json()).then(e=>Ac[n]=Array.isArray(e)?e:[]).catch(()=>[]):Promise.resolve([])},sendLetter:(n,e,t)=>Tc("/api/mektup",{k:n,m:e,i:t}),vote:(n,e)=>Tc("/api/meclis",{q:n,o:e}),results:()=>fetch(gr()+"/api/meclis").then(n=>n.json()).catch(()=>({})),measure:(n,e,t)=>{if(!(!gr()||navigator.doNotTrack==="1"||window.doNotTrack==="1"))try{Tc("/api/olcum",{fps:n,q:e,m:t}).catch(()=>{})}catch{}}};var ta=!1,Cc=n=>{try{parent.postMessage({qulDuck:n},"*")}catch{}},na={get on(){return ta},ok:!1,toggle(){return ta=!ta,!ta&&window.speechSynthesis&&(speechSynthesis.cancel(),Cc(!!window.__hush)),ta},say(n,e){}};var dt=n=>document.getElementById(n),Li=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),If=n=>"rgb("+n.join(",")+")",kf=(n,e,t)=>n.map((i,s)=>Math.round(i+(e[s]-i)*t)),Uf={};function Pc(n){n.galaxies.forEach(e=>Uf[e.id]=e.name),dt("lb").onclick=()=>dt("lb").classList.remove("on")}function px(n){n=n.toLowerCase();let e=t=>t.test(n);return e(/volkan|lav|magma|pirosferik|ateş/)?{a:[255,120,40],b:[90,18,10],atm:"255,150,70"}:e(/buz|buzul|fiyort|donmuş/)?{a:[220,240,255],b:[110,160,200],atm:"170,215,255"}:e(/okyanus|su altı|su dünyası|akuatik|sıvı|akışkan/)?{a:[70,150,230],b:[10,45,110],atm:"110,180,255"}:e(/çöl|kum/)?{a:[230,185,110],b:[140,80,40],atm:"235,190,130"}:e(/orman|bitki|ağaç|biyosfer|tarımsal/)?{a:[90,190,110],b:[18,70,45],atm:"140,230,150"}:e(/gaz dev|gaz halka|gaz tabaka|gaz gezegeni|atmosfer gezegeni|bulut/)?{a:[235,200,150],b:[150,90,60],atm:"240,200,160",bands:!0}:e(/kristal|prizma|spektr/)?{a:[120,230,210],b:[170,80,190],atm:"160,235,225"}:e(/neon|ışık|foton|radyant|lüminesans|aurora/)?{a:[170,140,255],b:[40,60,150],atm:"180,170,255"}:e(/vakum|karanlık|tekillik|boşluk|sessiz/)?{a:[110,90,150],b:[15,10,30],atm:"140,110,190"}:{a:[150,160,185],b:[30,40,70],atm:"232,184,75"}}function Nf(n,e,t,i){n.fillStyle="#05050a",n.fillRect(0,0,e,t);for(let s=0;s<110;s++)n.fillStyle="rgba(216,201,168,"+(.15+i()*.6)+")",n.fillRect(i()*e,i()*t,1+i()*1.4,1+i()*1.4)}function mx(n,e){let t=n.getContext("2d"),i=n.width,s=n.height,r=wn(zn(e.key)),o=px((e.desc||"")+" "+e.title);Nf(t,i,s,r);let a=i*.5,l=s*.52,u=s*.36;t.save(),t.beginPath(),t.arc(a,l,u,0,6.2832),t.clip();let c=t.createLinearGradient(a-u,l-u,a+u,l+u);if(c.addColorStop(0,If(o.a)),c.addColorStop(1,If(o.b)),t.fillStyle=c,t.fillRect(a-u,l-u,2*u,2*u),o.bands)for(let h=0;h<14;h++)t.fillStyle="rgba("+kf(o.a,o.b,r()).join(",")+","+(.25+r()*.3)+")",t.fillRect(a-u,l-u+h/14*2*u+r()*6,2*u,6+r()*u*.12);for(let h=0;h<46;h++){let p=a+(r()*2-1)*u,v=l+(r()*2-1)*u,_=u*(.08+r()*.3),m=kf(o.a,o.b,r()).join(","),d=t.createRadialGradient(p,v,0,p,v,_);d.addColorStop(0,"rgba("+m+",.30)"),d.addColorStop(1,"rgba("+m+",0)"),t.fillStyle=d,t.fillRect(p-_,v-_,2*_,2*_)}let f=t.createRadialGradient(a-u*.4,l-u*.35,u*.1,a,l,u*1.05);f.addColorStop(0,"rgba(255,255,255,.18)"),f.addColorStop(.45,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,.82)"),t.fillStyle=f,t.fillRect(a-u,l-u,2*u,2*u),t.restore(),t.save(),t.strokeStyle="rgba("+o.atm+",.55)",t.lineWidth=3,t.shadowColor="rgba("+o.atm+",.9)",t.shadowBlur=26,t.beginPath(),t.arc(a,l,u,0,6.2832),t.stroke(),t.restore(),o.bands&&r()<.6&&(t.save(),t.translate(a,l),t.rotate(-.35),t.strokeStyle="rgba(230,210,170,.4)",t.lineWidth=7,t.beginPath(),t.ellipse(0,0,u*1.6,u*.38,0,0,6.2832),t.stroke(),t.restore())}function gx(n){let e=n.getContext("2d"),t=n.width,i=n.height,s=wn(7);Nf(e,t,i,s);let r=t*.5,o=i*.52,a=i*.13,l=e.createRadialGradient(r,o,a*1.1,r,o,a*3.6);l.addColorStop(0,"rgba(255,215,140,.95)"),l.addColorStop(.4,"rgba(255,110,30,.4)"),l.addColorStop(1,"rgba(255,80,20,0)"),e.save(),e.translate(r,o),e.scale(1,.26),e.translate(-r,-o),e.fillStyle=l,e.beginPath(),e.arc(r,o,a*3.6,0,6.2832),e.fill(),e.restore(),e.save(),e.strokeStyle="rgba(255,215,160,.9)",e.lineWidth=a*.1,e.shadowColor="rgba(255,170,80,1)",e.shadowBlur=30,e.beginPath(),e.arc(r,o,a*1.18,0,6.2832),e.stroke(),e.restore(),e.fillStyle="#000",e.beginPath(),e.arc(r,o,a,0,6.2832),e.fill(),e.save(),e.translate(r,o),e.scale(1,.26),e.translate(-r,-o),e.strokeStyle="rgba(255,190,110,.55)",e.lineWidth=a*.5,e.beginPath(),e.arc(r,o,a*1.7,0,Math.PI),e.stroke(),e.restore()}function Io(n){dt("pe").textContent=n.eyebrow,dt("pt").textContent=n.title,dt("pd").textContent=n.desc;let e=dt("cv"),t=dt("img"),i=dt("artnote");n.img?(e.style.display="none",t.style.display="block",t.src=n.img,t.onclick=()=>{dt("lbi").src=n.img,dt("lb").classList.add("on")},i.textContent=D("panel.enlarge",{note:n.imgNote||D("panel.guide")})):(t.style.display="none",e.style.display="block",n.bh?gx(e):mx(e,n),i.textContent=n.bh?D("panel.concept"):D("panel.conceptNC"));let s=n.card||{},r=[];if(n.bh)(s.rows||[]).forEach(o=>r.push(o));else{let o=n.gal==="eira"||n.gal==="esik";!o&&n.key!=="dunya"&&r.push([s.kod&&/^İTF/.test(s.kod)?D("row.colony"):D("row.code"),s.kod||D("row.nocode")]),n.gal!=="unas"&&n.gal!=="itf"&&r.push([o?D("row.region"):D("row.galaxy"),Uf[n.gal]]),s.durum&&r.push([o||n.key==="dunya"?D("row.status"):/^İTF/.test(s.kod||"")?D("row.settle"):D("row.dipl"),s.durum]),s.taslak&&r.length&&r.splice(1,0,[D("row.assign"),D("val.draft")]),s.aksiyom&&r.push([D("row.axiom"),s.tahmini?D("row.est",{v:s.aksiyom}):s.aksiyom])}dt("card").innerHTML=r.map(o=>'<div class="row"><span>'+Li(o[0])+"</span><b>"+Li(o[1])+"</b></div>").join(""),dt("extra").innerHTML=(s.extra||[]).map(o=>"<h3>"+Li(o.h)+"</h3><ul>"+o.items.map(a=>"<li>"+Li(a)+"</li>").join("")+"</ul>").join(""),n.key&&dn.on()&&dn.letters(n.key).then(o=>{!o.length||!dt("extra")||dt("extra").insertAdjacentHTML("beforeend","<h3>"+Li(D("let.title"))+"</h3>"+o.slice(-6).reverse().map(a=>'<blockquote class="klet">'+Li(a.m)+"<cite>\u2014 "+Li(a.i||D("let.anon"))+"</cite></blockquote>").join(""))}),n.key==="eirahoutmoss"&&(dt("extra").insertAdjacentHTML("afterbegin",'<button id="kbtn">'+D("btn.kisura")+'</button><button id="mbtn" class="kb">'+D("btn.map")+"</button>"),dt("kbtn").onclick=()=>window.dispatchEvent(new Event("kisura")),dt("mbtn").onclick=()=>window.dispatchEvent(new Event("emap"))),!n.bh&&n.kind!=="esik"&&!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(n.key)&&(dt("extra").insertAdjacentHTML("afterbegin",'<button id="sbtn" class="kb">'+D("btn.surface")+"</button>"),dt("sbtn").onclick=()=>window.dispatchEvent(new CustomEvent("surface",{detail:n}))),n.key==="araf-cherqa"&&(dt("extra").insertAdjacentHTML("afterbegin",'<button id="sbtn" class="kb">'+D("btn.esik")+"</button>"),dt("sbtn").onclick=()=>window.dispatchEvent(new CustomEvent("esik",{detail:n}))),n.img&&!n.bh&&n.key!=="eirahoutmoss"&&(dt("extra").insertAdjacentHTML("afterbegin",'<button id="lbtn" class="kb">'+D("btn.land")+"</button>"),dt("lbtn").onclick=()=>window.dispatchEvent(new CustomEvent("land",{detail:n}))),n.bh&&n.gal&&(dt("extra").insertAdjacentHTML("afterbegin",'<button id="fbtn" class="kb">'+D("fall.btn")+"</button>"),dt("fbtn").onclick=()=>window.dispatchEvent(new CustomEvent("fall",{detail:n.gal}))),dt("panel").classList.add("open"),dt("panel").scrollTop=0}var pt=()=>dt("panel").classList.remove("open"),ia=(n,e)=>Math.min(17,Math.max(8,6.5+((n||"").length+(e||"").length)*.08));function yt(n,e){dt("th").textContent=n,dt("ts").textContent=e||"";let t=dt("title");return t.classList.remove("on"),t.style.animationDuration=ia(n,e)+"s",t.offsetWidth,t.classList.add("on"),na.say(n,e),ia(n,e)}function vr(n){let e=dt("toast");e.textContent=n,e.classList.add("on"),clearTimeout(e._t),e._t=setTimeout(()=>e.classList.remove("on"),3500)}function yr(n){let e=document.documentElement.style;if(n===null){e.setProperty("--bar","0vh"),ve.setFov(50),ve.setBloom(.55),ve.setWarp(0);return}let t=Math.sin(Math.PI*n),i=_c(0,.12,n)*(1-_c(.88,1,n));e.setProperty("--bar",(i*7).toFixed(2)+"vh"),ve.setFov(50+14*t),ve.setBloom(.55+.55*t),ve.setWarp(.9*t*t)}function Lc(n,e,t){let i=dt("tip");if(!n){i.classList.remove("on");return}i.textContent=n,i.style.left=e+16+"px",i.style.top=t+12+"px",i.classList.add("on")}function Ic(n,e,t,i,s){dt("where").textContent=n?n.name:"";let r=dt("chips");if(r.innerHTML="",!!n){if(s[n.id]){let o=document.createElement("button");o.className="bhc",o.textContent="\u25CF "+s[n.id].title,o.onclick=()=>t.bh(n.id),r.appendChild(o)}if(t.light&&!["home","eira","esik","itf","unas"].includes(n.id)){let o=document.createElement("button");o.className="bhc",o.textContent=D("light.btn"),o.onclick=()=>t.light(n.id),r.appendChild(o)}if(!e.length){let o=document.createElement("span");o.textContent=n.bg?D("chips.none0"):D("chips.none1"),r.appendChild(o);return}e.forEach(o=>{let a=document.createElement("button");a.textContent=i[o].title,a.onclick=()=>t.planet(o),r.appendChild(a)})}}var Df=n=>n.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/ı/g,"i");function kc(n,e,t){let i=n.planets.map(l=>l.key==="dunya"?{t:"sol",id:"earth",key:"dunya",label:l.title,sub:"G\xFCne\u015F Sistemi \xB7 Earth",alias:"earth world dunya yolculuk solar system"}:{t:"planet",key:l.key,label:l.title,sub:l.eyebrow}).concat([{t:"bh",id:"home",label:n.bh.home.title,sub:D("search.bh")}]).concat(n.galaxies.filter(l=>!l.bg&&l.id!=="home").map(l=>({t:"galaxy",id:l.id,label:l.name,sub:D("search.gal")}))).concat(t||[]),s=dt("q"),r=dt("sres"),o=[],a=l=>{r.innerHTML="",s.value="",s.blur(),e(l)};s.addEventListener("input",()=>{let l=Df(s.value.trim());r.innerHTML="",o=[],l&&(o=i.filter(u=>Df(u.label+" "+(u.alias||"")).includes(l)).slice(0,8),o.forEach(u=>{let c=document.createElement("button");c.innerHTML=Li(u.label)+" <small>"+Li(u.sub)+"</small>",c.onclick=()=>a(u),r.appendChild(c)}))}),s.addEventListener("keydown",l=>{l.key==="Enter"&&o[0]&&a(o[0]),l.stopPropagation()})}var ko=(function(){let n=!1,e=null,t=null,i={},s=["aetherium","event-horizon","bio-nexus","javelin","nihil","ethos"],r=c=>new Promise(f=>{e=setTimeout(f,c)}),o=()=>pt();function a(){n&&(n=!1,clearTimeout(e),t.textContent=D("ui.tour"))}async function l(){if(n=!0,t.textContent=D("ui.tourStop"),pt(),ze.reset(),await ze.whenIdle(),!!n&&(yt(D("tour.t1"),D("ui.title")),await r(6500),!!n&&(ze.focusBH("home"),await ze.whenIdle(),!!n))){await r(6500);for(let c of s){if(!n)return;let f=i[c];if(f){if(ze.focusGalaxy(f.gal),await ze.whenIdle(),!n||(await r(6500),!n)||(ze.flyToPlanet(c),await ze.whenIdle(),!n))return;await r(7500)}}n&&(ze.focusGalaxy("eira"),await ze.whenIdle(),n&&(await r(6500),n&&(ze.flyToPlanet("eirahoutmoss"),await ze.whenIdle(),n&&(await r(4e3),n&&(o(),await hi.kisura({auto:!0}),n&&n&&(a(),pt(),ze.reset()))))))}}function u(c,f){t=c,f.planets.forEach(h=>i[h.key]=h),t.onclick=()=>n?a():l()}return{init:u,stop:a}})();var Dc=(function(){let n=!1,e=null,t=null,i=null,s=null,r=null,o=!1,a=!1,l=232.6,u=(y,S)=>{let A=D(y);return A&&A!==y?A:S},c=y=>Math.round(y).toLocaleString(document.documentElement.lang==="en"?"en-US":"tr-TR"),f=y=>new Promise(S=>{let A=0,g=()=>{if(!n||a){S();return}if(o||(A+=200),A>=y){S();return}e=setTimeout(g,200)};g()}),h=()=>document.fullscreenElement||document.webkitFullscreenElement;function p(){try{let y=document.documentElement,S=y.requestFullscreen||y.webkitRequestFullscreen;if(S){let A=S.call(y);A&&A.catch&&A.catch(()=>{})}}catch{}}function v(){try{if(h()){let y=document.exitFullscreen||document.webkitExitFullscreen;if(y){let S=y.call(document);S&&S.catch&&S.catch(()=>{})}}}catch{}}function _(){t.textContent=n?u("ui.driftStop","\u25A0 Gezintiyi durdur"):u("ui.drift","\u26F6 Galaksi Gezintisi")}function m(){if(n){n=!1,o=!1,a=!1,clearTimeout(e),document.body.classList.remove("drift");try{s&&s.release()}catch{}s=null,v(),_()}}let d=(y,S)=>Math.hypot(y.pos[0]-S.pos[0],y.pos[1]-S.pos[1],y.pos[2]-S.pos[2])*l;function M(){let y=i.galaxies.filter(R=>!R.bg&&R.id&&R.pos),S=i.galaxies.find(R=>R.id==="home")||y[0],A=y.filter(R=>R!==S),g=[],b=S;for(y.includes(S)&&g.push(S);A.length;){let R=0,z=1e18;A.forEach((K,O)=>{let k=d(b,K);k<z&&(z=k,R=O)}),b=A.splice(R,1)[0],g.push(b)}return g}function x(y,S,A,g,b){let R=i.galaxies.find(z=>z.id==="home");r.innerHTML="<b>"+(y.name||"")+"</b><span>"+u("drift.home","Evin'e uzakl\u0131k")+": "+c(d(y,R))+" "+u("drift.unit","\u0131\u015F\u0131k y\u0131l\u0131")+"</span><span>"+u("drift.trav","Katedilen")+": "+c(S)+" "+u("drift.unit","\u0131\u015F\u0131k y\u0131l\u0131")+"</span><span>"+u("drift.seen","G\xF6r\xFClen gezegen")+": "+A+"</span><span>"+g+" / "+b+"</span>"}async function w(){n=!0,o=!1,a=!1,_(),p(),document.body.classList.add("drift"),pt();try{navigator.wakeLock&&(s=await navigator.wakeLock.request("screen"))}catch{}if(ze.reset(),await ze.whenIdle(),!n)return;yt(u("drift.t","Galaksiler"),u("ui.title","Qul Efsaneleri")),await f(5e3);let y=M(),S=0,A=0,g=y[0],b=!1;for(;n;){for(let R=0;R<y.length;R++){let z=y[R];if(!n)return;a=!1;try{ze.focusGalaxy(z.id)}catch{continue}if(S+=d(g,z),g=z,x(z,S,A,R+1,y.length),await ze.whenIdle(),!n)return;pt(),ze.orbit(.05),await f(6500);let K=i.planets.filter(k=>k.gal===z.id&&k.desc).sort(()=>Math.random()-.5).slice(0,3),O=!1;for(let k of K){if(a){O=!0;break}try{ze.flyToPlanet(k.key)}catch{continue}if(await ze.whenIdle(),!n||(A++,x(z,S,A,R+1,y.length),ze.orbit(.09,k.key),await f(8e3+Math.min(6e3,String(k.desc).length*18)),!n))return;pt(),await f(900)}if(a&&(O=!0,a=!1),!n)return;if(K.length&&!O){try{ze.focusGalaxy(z.id)}catch{}if(await ze.whenIdle(),!n)return;pt()}}if(!n)return;y=y.slice().reverse(),g=y[0]}}function C(y,S){t=y,i=S,_(),r=document.createElement("div"),r.id="dlog",document.body.appendChild(r),t.onclick=b=>{b.stopPropagation(),n?m():w()},document.addEventListener("keydown",b=>{n&&(b.key==="Escape"?m():b.key===" "?(b.preventDefault(),o=!o):b.key==="ArrowRight"&&(a=!0))});let A=!1,g=()=>{let b=!!h();n&&A&&!b&&m(),A=b};document.addEventListener("fullscreenchange",g),document.addEventListener("webkitfullscreenchange",g)}return{init:C,stop:m,get on(){return n}}})();var on=Ln==="en";var vx="img/sol/",Vf=n=>80*Math.pow(n,.62),Of=14,yx=23.4393*Math.PI/180,ts=[{id:"sun",tr:"G\xFCne\u015F",en:"Sun",r:18,tex:null,blurb:{tr:"G2V t\xFCr\xFC bir y\u0131ld\u0131z. Sistemdeki k\xFCtlenin %99,86's\u0131 onda. Burada boyutu ger\xE7ek orandan (109 D\xFCnya yar\u0131\xE7ap\u0131) k\xFC\xE7\xFClt\xFClm\xFC\u015Ft\xFCr.",en:"A G2V star holding 99.86% of the system's mass. Shown smaller than its true size (109 Earth radii)."},facts:[["diam","1.392.700 km"],["surf",Ln==="en"?"about 5,500 \xB0C":"yakla\u015F\u0131k 5.500 \xB0C"],["age",Ln==="en"?"4.6 billion years":"4,6 milyar y\u0131l"]]},{id:"mercury",tr:"Merk\xFCr",en:"Mercury",r:.383,a:.387,L0:252.2503,n:4.092339,tilt:.03,per:1407.6,tex:"mercury",soft:.08,atm:0,blurb:{tr:"G\xFCne\u015F'e en yak\u0131n, en k\xFC\xE7\xFCk gezegen. Atmosferi yok; y\xFCzeyi kraterlerle kapl\u0131. (Doku: Ay haritas\u0131ndan t\xFCretilmi\u015F yakla\u015F\u0131k g\xF6r\xFCn\xFCm.)",en:"The closest and smallest planet. No real atmosphere; cratered surface. (Texture: approximated from the Moon map.)"},d:{diam:4879,au:.387,mkm:57.9,year:87.97,moons:0,tmin:-173,tmax:427,g:3.7}},{id:"venus",tr:"Ven\xFCs",en:"Venus",r:.949,a:.723,L0:181.9791,n:1.602131,tilt:177.4,per:-5832.5,tex:null,mode:1,soft:.4,atm:.5,atmc:[1,.85,.55],blurb:{tr:"Yo\u011Fun karbondioksit atmosferi ve k\xFCk\xFCrt asidi bulutlar\u0131yla kapl\u0131; y\xFCzeyi kur\u015Funu eritecek kadar s\u0131cak. Ters y\xF6nde d\xF6ner.",en:"Wrapped in a dense CO\u2082 atmosphere and sulfuric-acid clouds; hot enough to melt lead. Spins backwards."},d:{diam:12104,au:.723,mkm:108.2,year:224.7,moons:0,tmean:464,g:8.87}},{id:"earth",tr:"D\xFCnya",en:"Earth",r:1,a:1,L0:100.4646,n:.985609,tilt:23.44,per:23.934,tex:"earth",mode:9,moons:1,blurb:{tr:"Bilinen tek ya\u015Fam ta\u015F\u0131yan d\xFCnya. Y\xFCzeyinin yakla\u015F\u0131k %71'i okyanus. Gece-g\xFCnd\xFCz \xE7izgisi \u015Fu anki ger\xE7ek saate g\xF6redir.",en:"The only world known to host life. About 71% of its surface is ocean. The day/night line follows the real current time."},d:{diam:12742,au:1,mkm:149.6,year:365.26,moons:1,tmean:15,g:9.81}},{id:"moon",tr:"Ay",en:"Moon",r:.2727,tex:"moon",soft:.07,atm:0,blurb:{tr:"D\xFCnya'n\u0131n tek do\u011Fal uydusu. Hep ayn\u0131 y\xFCz\xFCn\xFC D\xFCnya'ya \xE7evirir; \u015Fu anki evresi ger\xE7ektir. G\xF6rsel y\xF6r\xFCnge yar\u0131\xE7ap\u0131 yakla\u015F\u0131k 4 kat s\u0131k\u0131\u015Ft\u0131r\u0131lm\u0131\u015Ft\u0131r.",en:"Earth's only natural satellite. Always shows the same face; its current phase is real. Orbit radius is compressed about 4\xD7."},d:{diam:3474,dist:384400,year:27.32,tmin:-173,tmax:127,g:1.62,per:655.7}},{id:"mars",tr:"Mars",en:"Mars",r:.532,a:1.524,L0:355.4533,n:.524033,tilt:25.2,per:24.623,tex:"mars",soft:.25,atm:.18,atmc:[.9,.6,.4],blurb:{tr:"Demir oksit tozundan k\u0131z\u0131l g\xF6r\xFCn\xFCr. \u0130nce atmosferi ve kutup buzullar\u0131 vard\u0131r; Olympus Mons G\xFCne\u015F Sistemi'nin en y\xFCksek volkan\u0131d\u0131r.",en:"Red from iron-oxide dust. Thin atmosphere and polar caps; Olympus Mons is the tallest volcano in the Solar System."},d:{diam:6779,au:1.524,mkm:227.9,year:686.98,moons:2,tmean:-63,g:3.71}},{id:"jupiter",tr:"J\xFCpiter",en:"Jupiter",r:10.97,a:5.203,L0:34.3964,n:.083091,tilt:3.1,per:9.925,tex:"jupiter",soft:.4,atm:.25,atmc:[.9,.8,.6],blurb:{tr:"En b\xFCy\xFCk gezegen; k\xFCtlesi di\u011Fer t\xFCm gezegenlerin toplam\u0131n\u0131n iki kat\u0131ndan fazla. B\xFCy\xFCk K\u0131rm\u0131z\u0131 Leke y\xFCzy\u0131llard\u0131r s\xFCren bir f\u0131rt\u0131nad\u0131r.",en:"The largest planet, more than twice the mass of all others combined. The Great Red Spot is a storm lasting centuries."},d:{diam:139820,au:5.203,mkm:778.5,year:4332.6,moons:"90+",tmean:-108,tnote:1,g:24.79}},{id:"saturn",tr:"Sat\xFCrn",en:"Saturn",r:9.14,a:9.537,L0:49.9542,n:.033471,tilt:26.7,per:10.656,tex:"saturn",soft:.4,atm:.2,atmc:[.95,.85,.6],ring:!0,blurb:{tr:"Halkalar\u0131 buz ve kaya par\xE7ac\u0131klar\u0131ndan olu\u015Fur; \xE7o\u011Fu birka\xE7 metre kal\u0131nl\u0131\u011F\u0131nda bir d\xFCzlemde toplanm\u0131\u015Ft\u0131r. Yo\u011Funlu\u011Fu sudan d\xFC\u015F\xFCkt\xFCr.",en:"Its rings are ice and rock particles confined to a plane only meters thick. Less dense than water."},d:{diam:116460,au:9.537,mkm:1434,year:10759,moons:"140+",tmean:-139,tnote:1,g:10.44}},{id:"uranus",tr:"Uran\xFCs",en:"Uranus",r:3.98,a:19.19,L0:313.2381,n:.011732,tilt:97.8,per:-17.24,tex:null,mode:2,soft:.4,atm:.3,atmc:[.6,.9,.95],blurb:{tr:"Yan yatm\u0131\u015F h\xE2lde (eksen e\u011Fikli\u011Fi 98\xB0) G\xFCne\u015F'in \xE7evresinde yuvarlan\u0131r. G\xF6r\xFCn\xFCr \u0131\u015F\u0131kta neredeyse \xF6zelliksiz, soluk camg\xF6be\u011Fi bir buz devidir.",en:"Rolls around the Sun on its side (98\xB0 tilt). Nearly featureless pale cyan ice giant in visible light."},d:{diam:50724,au:19.19,mkm:2871,year:30687,moons:28,tmean:-195,tnote:1,g:8.69}},{id:"neptune",tr:"Nept\xFCn",en:"Neptune",r:3.86,a:30.07,L0:304.88,n:.005982,tilt:28.3,per:16.11,tex:"neptune",soft:.4,atm:.3,atmc:[.5,.7,1],blurb:{tr:"En uzak gezegen. G\xFCne\u015F sistemindeki en h\u0131zl\u0131 r\xFCzg\xE2rlar (saatte 2.000 km'ye yak\u0131n) buradad\u0131r. G\xFCne\u015F'in \xE7evresinde bir turu yakla\u015F\u0131k 165 y\u0131lda tamamlar.",en:"The farthest planet, with the fastest winds in the Solar System (nearly 2,000 km/h). One orbit takes about 165 years."},d:{diam:49244,au:30.07,mkm:4495,year:60190,moons:16,tmean:-201,tnote:1,g:11.15}}],No={};ts.forEach(n=>No[n.id]=n);var jn=on?{diam:"Diameter",surf:"Surface",age:"Age",au:"Distance from Sun",year:"Orbital period",day:"Rotation",moons:"Moons",temp:"Temperature",g:"Surface gravity",dist:"Distance from Earth",ret:"retrograde"}:{diam:"\xC7ap",surf:"Y\xFCzey",age:"Ya\u015F",au:"G\xFCne\u015F'e uzakl\u0131k",year:"Y\xF6r\xFCnge s\xFCresi",day:"D\xF6n\xFC\u015F",moons:"Uydu",temp:"S\u0131cakl\u0131k",g:"Y\xFCzey \xE7ekimi",dist:"D\xFCnya'ya uzakl\u0131k",ret:"ters y\xF6nde"},sa=n=>Math.round(n).toLocaleString(on?"en-US":"tr-TR"),_r=(n,e)=>n.toLocaleString(on?"en-US":"tr-TR",{maximumFractionDigits:e});function xx(n){return n>700?_r(n/365.25,1)+(on?" years":" y\u0131l"):_r(n,1)+(on?" days":" g\xFCn")}function _x(n){let e=Math.abs(n),t=Math.floor(e),i=Math.round((e-t)*60);return e>=48?_r(e/24,1)+(on?" days":" g\xFCn")+(n<0?" ("+jn.ret+")":""):t+(on?" h ":" sa ")+i+(on?" min":" dk")+(n<0?" ("+jn.ret+")":"")}function bx(n){if(n.facts)return n.facts.map(([i,s])=>[jn[i]||i,s]);let e=n.d,t=[[jn.diam,sa(e.diam)+" km"]];return e.au&&t.push([jn.au,_r(e.au,3)+" AU ("+_r(e.mkm,1)+(on?" M km)":" mn km)")]),e.dist&&t.push([jn.dist,sa(e.dist)+" km"]),t.push([jn.year,xx(e.year)]),t.push([jn.day,_x(n.per!=null?n.per:e.per)]),e.moons!=null&&t.push([jn.moons,String(e.moons)]),t.push([jn.temp,e.tmean!=null?sa(e.tmean)+" \xB0C"+(e.tnote?on?" (1 bar level)":" (1 bar d\xFCzeyi)":on?" (mean)":" (ortalama)"):sa(e.tmin)+" \u2026 "+sa(e.tmax)+" \xB0C"]),t.push([jn.g,_r(e.g,2)+" m/s\xB2"]),t}var Oc=`float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float n3(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n3(p);p=p*2.03+7.1;a*=.5;}return s;}`,Do=`varying vec3 vN;varying vec3 vW;varying vec3 vO;varying vec2 vUv;
void main(){vO=position;vUv=uv;vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,Mx=`precision highp float;varying vec3 vN;varying vec3 vW;varying vec3 vO;uniform float uT;${Oc}
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW),p=normalize(vO);float g=fbm(p*7.+uT*.05)+.5*fbm(p*19.-uT*.07);
 vec3 c=mix(vec3(1.,.42,.06),vec3(1.,.9,.55),smoothstep(.3,1.,g));float mu=max(dot(N,V),0.);c*=.4+.6*pow(mu,.55);gl_FragColor=vec4(c*1.7,1.);}`,Sx=`precision highp float;varying vec3 vN;varying vec3 vW;varying vec3 vO;varying vec2 vUv;
uniform sampler2D uMap,uRing;uniform vec3 uL,uTint,uAtm,uPC,uAx,uEs;uniform float uPR,uMode,uAtmK,uT,uSoft;uniform vec4 uRg;${Oc}
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW),L=normalize(uL),p=normalize(vO);float d=dot(N,L);
 float diff=smoothstep(-uSoft*.35,uSoft,d);vec3 col;
 if(uMode<.5) col=texture2D(uMap,vUv).rgb*uTint;
 else if(uMode<1.5){float s=fbm(vec3(p.x*1.6,p.y*6.5,p.z*1.6)+uT*.015);col=mix(vec3(.86,.74,.5),vec3(.98,.95,.84),s);col*=.9+.2*fbm(p*10.+uT*.01);}
 else {float lat=abs(p.y);col=mix(vec3(.55,.8,.84),vec3(.7,.9,.9),lat*lat)*(.96+.06*fbm(vec3(p.x*1.4,p.y*9.,p.z*1.4)));}
 float shad=1.;
 if(uRg.z>.5){float dn=dot(L,uAx);if(abs(dn)>.03){float tr=dot(uPC-vW,uAx)/dn;if(tr>0.){vec3 H=vW+L*tr;float rr=length(H-uPC)/uPR;if(rr>uRg.x&&rr<uRg.y){float u=(rr-uRg.x)/(uRg.y-uRg.x);shad*=1.-.88*texture2D(uRing,vec2(u,.5)).a;}}}}
 vec3 c=col*(diff*shad*1.12+.006+.05*max(dot(N,uEs),0.)*(1.-diff));
 float f=pow(1.-max(dot(N,V),0.),3.);c+=uAtm*f*uAtmK*(.08+diff*shad);gl_FragColor=vec4(c,1.);}`,wx=`precision highp float;varying vec3 vN;varying vec3 vW;varying vec3 vO;varying vec2 vUv;
uniform sampler2D tDay,tNight,tWater;uniform vec3 uL;uniform float uT;${Oc}
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW),L=normalize(uL),p=normalize(vO);float d=dot(N,L);
 float day=smoothstep(-.08,.22,d);vec3 base=texture2D(tDay,vUv).rgb;float wat=texture2D(tWater,vUv).r;
 float cl=smoothstep(.5,.74,fbm(p*3.4+vec3(uT*.0015,0.,0.))*(.6+.4*fbm(p*9.+3.)));cl*=1.-.55*smoothstep(.0,.35,abs(p.y)-.82);
 vec3 c=base*(1.-cl*.28)*(max(d,0.)*1.12+.012)*day+vec3(.0);
 vec3 R=reflect(-L,N);float sp=pow(max(dot(R,V),0.),220.)*wat*.55*step(0.,d);c+=vec3(1.,.97,.9)*sp;
 vec3 cloudC=vec3(1.)*(max(d,0.)*1.08+.02);c=mix(c,cloudC*day+vec3(.01),cl*.82);
 vec3 night=texture2D(tNight,vUv).rgb;float nm=1.-smoothstep(-.06,.16,d);c+=night*night.r*0.0+night*1.9*nm*(1.-cl*.8);
 c+=vec3(1.,.45,.2)*exp(-pow(d*5.5,2.))*.1*(1.-cl*.5);
 float f=pow(1.-max(dot(N,V),0.),3.);c+=vec3(.32,.58,1.)*f*(.12+1.1*smoothstep(-.25,.5,d))*1.15;
 gl_FragColor=vec4(c,1.);}`,Ex=`precision highp float;varying vec3 vN;varying vec3 vW;uniform vec3 uAtm,uL;
void main(){vec3 N=normalize(vN),V=normalize(cameraPosition-vW);float f=pow(max(dot(-N,V)*.5+.5-.16,0.),2.6)*1.6;float d=smoothstep(-.3,.45,dot(N,normalize(uL)));gl_FragColor=vec4(uAtm*f*d*1.3,f*d);}`,Tx=`precision highp float;varying vec3 vP;varying vec3 vW;uniform sampler2D uRing;uniform vec3 uL,uPC,uAx;uniform float uPR;uniform vec2 uR;
void main(){float rr=length(vP.xy);float u=(rr-uR.x)/(uR.y-uR.x);vec4 t=texture2D(uRing,vec2(u,.5));
 vec3 L=normalize(uL),V=normalize(cameraPosition-vW);float bb=dot(uPC-vW,L),sh=1.;if(bb>0.){float dd=length(uPC-vW-L*bb);sh=smoothstep(uPR*.985,uPR*1.01,dd);}
 float side=dot(uAx,L)*dot(uAx,V)>0.?1.:.4;float lit=(.05+.95*sh)*side;gl_FragColor=vec4(t.rgb*lit*1.05,t.a);}`;function Ax(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,.55)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Ki(n)}function Rx(){let e=document.createElement("canvas");e.width=1024,e.height=2;let t=e.getContext("2d"),i=t.createImageData(1024,2),s=1.24,r=2.27;for(let a=0;a<1024;a++){let l=s+(r-s)*a/1023,u=0,c=.8;l<1.53?(u=.18+.12*Math.sin(l*90),c=.55):l<1.95?(u=.82+.14*Math.sin(l*140)+.06*Math.sin(l*37),c=.95):l<2.03?(u=.06+.05*Math.sin(l*60),c=.6):(u=.6+.2*Math.sin(l*120),c=.8,l>2.2&&l<2.215&&(u=.03)),u=Math.max(0,Math.min(1,u));let f=[225*c+20,200*c+14,160*c+8];for(let h=0;h<2;h++){let p=(h*1024+a)*4;i.data[p]=f[0],i.data[p+1]=f[1],i.data[p+2]=f[2],i.data[p+3]=u*255}}t.putImageData(i,0,0);let o=new Ki(e);return o.minFilter=en,o}var br=null,Oo,xn,Ot,Uo,xr,kt={},kn={},zc=0,Ii=!1,zo=0,Fo=0,Uc=0,pn=null,es=null,aa=0,E_=new N,Gf=[1,600,21600,259200],zf=on?["real time","1 s = 10 min","1 s = 6 h","1 s = 3 days"]:["ger\xE7ek zaman","1 sn = 10 dk","1 sn = 6 sa","1 sn = 3 g\xFCn"],Cx=new Zi,ra=(n,e)=>{let t=Cx.load(vx+n+".jpg");return t.colorSpace=tn,t.anisotropy=window.__qulSafe?1:8,t.wrapS=Ei,t},Nc=new or(new Uint8Array([90,90,90,255]),1,1);Nc.needsUpdate=!0;var oa=n=>on?n.en:n.tr;function Px(){xr=document.createElement("canvas"),br=new ai({canvas:xr,antialias:!window.__qulSafe,powerPreference:"high-performance"}),br.setPixelRatio(Math.min(devicePixelRatio||1,window.__qulSafe?1:matchMedia("(pointer:coarse)").matches?1.5:2)),Oo=new oi,xn=new rn(42,1,.08,14e3),Uo=new yn,Oo.add(Uo);let n=new vt(new Pn(9e3,48,32),new Sn({map:ra("stars"),side:qt,depthWrite:!1,fog:!1,toneMapped:!1,color:14540253}));n.rotation.x=.45,n.renderOrder=-10,Oo.add(n);let e=Ax();ts.forEach(s=>{let r=new yn,o=new Pn(s.r,s.id==="sun"?64:96,s.id==="sun"?40:64),a={},l;s.id==="sun"?l=new ft({uniforms:{uT:{value:0}},vertexShader:Do,fragmentShader:Mx}):s.id==="earth"?l=new ft({uniforms:{tDay:{value:ra("earth_day")},tNight:{value:ra("earth_night")},tWater:{value:ra("earth_water")},uL:{value:new N(1,0,0)},uT:{value:0}},vertexShader:Do,fragmentShader:wx}):l=new ft({uniforms:{uMap:{value:s.tex?ra(s.tex):Nc},uRing:{value:Nc},uL:{value:new N(1,0,0)},uEs:{value:new N},uTint:{value:new N(1,1,1)},uAtm:{value:new N(...s.atmc||[.5,.6,.8])},uPC:{value:new N},uAx:{value:new N(0,1,0)},uPR:{value:s.r},uMode:{value:s.mode||0},uAtmK:{value:s.atm||0},uT:{value:0},uSoft:{value:s.soft||.3},uRg:{value:new xt(1.24,2.27,s.ring?1:0,1)}},vertexShader:Do,fragmentShader:Sx});let u=new vt(o,l);r.add(u),Uo.add(r);let c={b:s,grp:r,mesh:u,mat:l,pos:new N};if(kn[s.id]=c,s.id==="earth"){let f=new vt(new Pn(1.03,64,48),new ft({uniforms:{uAtm:{value:new N(.35,.6,1)},uL:l.uniforms.uL},vertexShader:Do,fragmentShader:Ex,transparent:!0,depthWrite:!1,side:qt,blending:Ct}));r.add(f),c.atm=f}if(s.id==="sun"&&[[70,16752704,.9],[170,16747056,.35],[420,16742944,.12]].forEach(([f,h,p])=>{let v=new On(new Cn({map:e,color:h,transparent:!0,depthWrite:!1,blending:Ct,opacity:p}));v.scale.set(f,f,1),r.add(v)}),s.ring){let f=Rx();l.uniforms.uRing.value=f;let h=new vt(new li(s.r*1.24,s.r*2.27,192,1),new ft({uniforms:{uRing:{value:f},uL:l.uniforms.uL,uPC:l.uniforms.uPC,uAx:l.uniforms.uAx,uPR:{value:s.r},uR:{value:new ke(s.r*1.24,s.r*2.27)}},vertexShader:"varying vec3 vP;varying vec3 vW;void main(){vP=position;vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:Tx,transparent:!0,depthWrite:!1,side:hn}));h.rotation.x=-Math.PI/2,c.ring=h,u.add(h),h.userData.noSpin=!0}if(s.a){let f=[],h=Vf(s.a);for(let v=0;v<=256;v++){let _=v/256*Math.PI*2;f.push(new N(Math.cos(_)*h,0,-Math.sin(_)*h))}let p=new ys(new It().setFromPoints(f),new Ci({color:8228275,transparent:!0,opacity:.26,depthWrite:!1}));Uo.add(p),c.orbit=p}}),Ot=new mr(xn,xr),Ot.enableDamping=!0,Ot.dampingFactor=.07,Ot.enablePan=!1,Ot.maxDistance=3200,Ot.minDistance=.5,Ot.rotateSpeed=.7,Ot.zoomSpeed=.9;let t=document.createElement("div");t.id="sol",t.innerHTML='<div class="sc0"></div><div class="si"><h2></h2><p class="sb"></p><dl></dl><div class="sn"></div></div><div class="sx"><button class="sclose">\u2715</button><button class="stime"></button><div class="sdate"></div></div><div class="sj"></div><div id="slab"></div><div class="sch"></div><button class="sland"></button>',t.querySelector(".sc0").appendChild(xr),document.body.appendChild(t),kt={el:t,h:t.querySelector("h2"),p:t.querySelector(".sb"),dl:t.querySelector("dl"),nt:t.querySelector(".sn"),time:t.querySelector(".stime"),date:t.querySelector(".sdate"),j:t.querySelector(".sj"),lab:t.querySelector("#slab"),ch:t.querySelector(".sch"),land:t.querySelector(".sland"),close:t.querySelector(".sclose")},kt.close.onclick=Bo,kt.time.onclick=()=>{Fo=(Fo+1)%Gf.length,kt.time.textContent="\u23F1 "+zf[Fo]},kt.time.textContent="\u23F1 "+zf[0],kt.land.textContent=on?"\u2193 Descend to Earth's surface":"\u2193 D\xFCnya y\xFCzeyine in",kt.land.onclick=()=>{let s=(window.QUL&&window.QUL.planets||[]).find(r=>r.key==="dunya");Bo(),s&&window.dispatchEvent(new CustomEvent("surface",{detail:s}))},kt.nt.textContent=on?"Planet sizes are true to each other; distances are compressed. Positions are for the current date.":"Gezegen boyutlar\u0131 birbirine g\xF6re ger\xE7ektir; mesafeler s\u0131k\u0131\u015Ft\u0131r\u0131lm\u0131\u015Ft\u0131r. Konumlar bug\xFCn\xFCn tarihine g\xF6redir.",ts.forEach(s=>{let r=document.createElement("button");if(r.textContent=oa(s),r.dataset.id=s.id,r.onclick=()=>Ho(s.id,4.5),kt.ch.appendChild(r),s.id!=="moon"){let o=document.createElement("button");o.className="slb",o.textContent=oa(s),o.dataset.id=s.id,o.onclick=()=>Ho(s.id,4.5),kt.lab.appendChild(o),kn[s.id].lab=o}});let i=null;xr.addEventListener("pointerdown",s=>{i=[s.clientX,s.clientY],pn=null,Ot.enabled=!0}),xr.addEventListener("pointerup",s=>{if(!i)return;let r=Math.hypot(s.clientX-i[0],s.clientY-i[1]);i=null,r<5&&Lx(s)}),addEventListener("resize",Wf),addEventListener("keydown",s=>{Ii&&s.key==="Escape"&&Bo()})}function Wf(){if(!br)return;let n=innerWidth,e=innerHeight;br.setSize(n,e),xn.aspect=n/e,xn.updateProjectionMatrix()}var Ff=new ur,Bf=new ke,Hf=new Ai,In=new N;function Lx(n){Bf.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),Ff.setFromCamera(Bf,xn);let e=null,t=1e9;ts.forEach(i=>{kn[i.id].grp.getWorldPosition(In);let r=In.distanceTo(xn.position);Hf.set(In,Math.max(i.r*1.15,r*.018)),Ff.ray.intersectSphere(Hf,new N)&&r<t&&(t=r,e=i.id)}),e&&Ho(e,4.5)}var Ix=n=>n/864e5+24405875e-1,ws=n=>n*Math.PI/180;function qf(n){zo+=n*1e3*Gf[Fo],aa+=n;let e=Ix(zo)-2451545,t=kn.sun;t.mat.uniforms.uT.value=aa,ts.forEach(l=>{let u=kn[l.id];if(!l.a)return;let c=ws((l.L0+l.n*e)%360),f=Vf(l.a);u.pos.set(Math.cos(c)*f,0,-Math.sin(c)*f),u.grp.position.copy(u.pos)});let i=kn.earth,s=kn.moon,r=ws((218.316+13.176396*e)%360);s.pos.set(i.pos.x+Math.cos(r)*Of,0,i.pos.z-Math.sin(r)*Of),s.grp.position.copy(s.pos),s.mesh.rotation.y=r+Math.PI;let o=ws(((280.46061837+360.98564736629*e)%360+360)%360);i.mesh.quaternion.setFromAxisAngle(new N(1,0,0),yx).multiply(new Yt().setFromAxisAngle(new N(0,1,0),o)),ts.forEach(l=>{if(l.id==="sun"||l.id==="earth"||l.id==="moon")return;let u=kn[l.id],c=ws(24*e/l.per*360%360)*1;u.mesh.quaternion.setFromAxisAngle(new N(1,0,0),ws(l.tilt)).multiply(new Yt().setFromAxisAngle(new N(0,1,0),c));let f=u.mat.uniforms;f.uL.value.copy(u.pos).negate().normalize(),f.uPC.value.copy(u.pos),f.uAx.value.set(0,Math.cos(ws(l.tilt)),Math.sin(ws(l.tilt))),f.uT.value=aa}),i.mat.uniforms.uL.value.copy(i.pos).negate().normalize(),i.mat.uniforms.uT.value=aa;{let l=s.mat.uniforms;l.uL.value.copy(s.pos).negate().normalize(),l.uPC.value.copy(s.pos),l.uEs.value.copy(i.pos).sub(s.pos).normalize()}let a=new Date(zo);kt.date.textContent=a.toISOString().replace("T"," ").slice(0,16)+" UTC"}function kx(){ts.forEach(n=>{let e=kn[n.id];if(!e.lab)return;In.copy(e.pos);let t=In.distanceTo(xn.position);In.project(xn);let i=In.z<1&&Math.abs(In.x)<1.05&&Math.abs(In.y)<1.05&&t>n.r*3&&!(n.id==="earth"&&es==="moon"&&!1);e.lab.style.display=i?"block":"none",i&&(e.lab.style.transform="translate("+(In.x*.5+.5)*innerWidth+"px,"+(-In.y*.5+.5)*innerHeight+"px)",e.lab.classList.toggle("on",es===n.id),es===n.id&&(e.lab.style.display="none"))}),kt.ch.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.id===es))}function Xf(n){kt.h.textContent=oa(n),kt.p.textContent=on?n.blurb.en:n.blurb.tr,kt.dl.innerHTML=bx(n).map(([e,t])=>"<div><dt>"+e+"</dt><dd>"+t+"</dd></div>").join(""),kt.land.style.display=n.id==="earth"?"block":"none"}var Dx=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Yf(n,e){let t=kn[n],i=t.b,s=t.pos.clone(),r=s.clone().negate();if(r.lengthSq()<1e-6&&r.set(1,0,0),r.normalize(),n==="moon"){let u=kn.earth.pos.clone().sub(s).normalize(),c=new N().crossVectors(u,new N(0,1,0)).normalize(),f=c.dot(r)>=0?1:-1,h=u.clone().multiplyScalar(.62).addScaledVector(new N(0,1,0),.16).addScaledVector(c,.78*f).normalize();return{pos:s.clone().addScaledVector(h,i.r*5.2),target:s}}let o=new N().crossVectors(r,new N(0,1,0)).normalize(),a=r.clone().multiplyScalar(.78).addScaledVector(new N(0,1,0),.28).addScaledVector(o,.5).normalize(),l=i.r*(n==="sun"?3.6:n==="saturn"||n==="moon"?5.2:e);return{pos:s.clone().addScaledVector(a,l),target:s}}function Ho(n,e,t){es=n;let i=kn[n];Xf(i.b);let s=Yf(n,e||4.5);pn={t:0,dur:t||3.2,p0:xn.position.clone(),t0:Ot.target.clone(),id:n,mult:e||4.5,arc:xn.position.distanceTo(s.pos)*.06},Ot.enabled=!1,Ot.minDistance=i.b.r*1.25}function Ux(n){let e=0,t=()=>{if(!Ii||e>=n.length){kt.j.classList.remove("on");return}kt.j.textContent=n[e++],kt.j.classList.remove("on"),kt.j.offsetWidth,kt.j.classList.add("on"),setTimeout(t,2600)};t()}function Kf(n){if(!Ii)return;zc=requestAnimationFrame(Kf);let e=Math.min(.1,(n-Uc)/1e3||.016);if(Uc=n,qf(e),pn){pn.t=Math.min(1,pn.t+e/pn.dur);let t=Dx(pn.t),i=Yf(pn.id,pn.mult);xn.position.lerpVectors(pn.p0,i.pos,t),xn.position.y+=Math.sin(Math.PI*t)*pn.arc,Ot.target.lerpVectors(pn.t0,i.target,t),pn.t>=1&&(pn=null,Ot.enabled=!0)}else if(es){let t=kn[es].pos;In.copy(t).sub(Ot.target),xn.position.add(In),Ot.target.copy(t)}Ot.update(),kx(),br.render(Oo,xn)}function Nx(n){if(n=n||{},Ii)return!0;try{br||Px()}catch(t){try{console.error("[Qul] G\xFCne\u015F Sistemi ba\u015Flat\u0131lamad\u0131:",t)}catch{}return!1}Ii=!0,ve.pause(!0),Wf(),zo=Date.now(),aa=0,qf(0),kt.el.classList.add("on"),document.documentElement.style.setProperty("--bar","0vh");let e=n.focus||"earth";return xn.position.set(0,1250,1750),Ot.target.set(0,0,0),Ot.minDistance=.5,es=null,pn=null,Ot.enabled=!1,Ot.update(),Xf(No[e]),Ux(on?["Milky Way \xB7 Orion Arm","The Solar System \xB7 26,000 light-years from the galactic center","The Sun \xB7 eight planets \xB7 real positions for today",oa(No[e])]:["Samanyolu \xB7 Orion Kolu","G\xFCne\u015F Sistemi \xB7 galaktik merkezden yakla\u015F\u0131k 26.000 \u0131\u015F\u0131k y\u0131l\u0131 uzakta","G\xFCne\u015F \xB7 sekiz gezegen \xB7 bug\xFCn\xFCn ger\xE7ek konumlar\u0131",oa(No[e])]),setTimeout(()=>{Ii&&Ho(e,4.5,7.5)},1800),Uc=performance.now(),zc=requestAnimationFrame(Kf),!0}function Bo(){Ii&&(Ii=!1,cancelAnimationFrame(zc),pn=null,kt.el.classList.remove("on"),ve.pause(!1),window.dispatchEvent(new Event("qulSolarClosed")))}var Fc={open:Nx,close:Bo,get on(){return Ii},ids:ts.map(n=>({id:n.id,tr:n.tr,en:n.en}))};var Zf=window.AudioContext||window.webkitAudioContext,mn=null,la=null,jf=[];function Ox(){if(mn||!Zf)return;mn=new Zf;let n=mn.createGain();n.gain.value=0,n.connect(mn.destination),[[34,"sine",1],[51.2,"sine",.55],[102,"triangle",.12],[68.4,"sine",.3]].forEach(([l,u,c])=>{let f=mn.createOscillator();f.type=u,f.frequency.value=l;let h=mn.createGain();h.gain.value=c,f.connect(h),h.connect(n),f.start(),jf.push(f)});let e=mn.createOscillator();e.frequency.value=.07;let t=mn.createGain();t.gain.value=.25,e.connect(t),t.connect(n.gain),e.start();let i=mn.createBuffer(1,mn.sampleRate*2,mn.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;let r=mn.createBufferSource();r.buffer=i,r.loop=!0;let o=mn.createBiquadFilter();o.type="bandpass",o.frequency.value=300,o.Q.value=.5;let a=mn.createGain();a.gain.value=0,r.connect(o),o.connect(a),a.connect(mn.destination),r.start(),la={hum:n,wg:a,bp:o}}var Bc={init(){["pointerdown","keydown"].forEach(n=>addEventListener(n,Ox,{once:!0}))},update(n,e,t=0){if(!la)return;let i=window.__hush?0:1,s=mn.currentTime;la.hum.gain.setTargetAtTime(.2*n*(1+t*1.8)*i*(1-t*t*.85),s,.35),jf.forEach(r=>r.detune.setTargetAtTime(-1100*t,s,.5)),la.wg.gain.setTargetAtTime(.09*e*i,s,.15),la.bp.frequency.setTargetAtTime(250+1e3*e,s,.2)}};var Hc={c:[["Andromeda","Andromeda",.75,43,1],["Pompa","Antlia",156,-36,3],["Cennetku\u015Fu","Apus",-120,-74,3],["Kova","Aquarius",-22.5,-5,2],["Kartal","Aquila",-69,8,1],["Sunak","Ara",-102,-56,3],["Ko\xE7","Aries",42,22,1],["Arabac\u0131","Auriga",82.5,37,1],["\xC7oban","Bootes",-136.5,35,1],["\xC7elikkalem","Caelum",73.5,-42,3],["Z\xFCrafa","Camelopardalis",84,72,2],["Yenge\xE7","Cancer",128.25,27,2],["Av\u2005K\xF6pekleri","Canes\u2005Venatici",-168,43,2],["B\xFCy\xFCk\u2005K\xF6pek","Canis\u2005Maior",97.5,-26,1],["K\xFC\xE7\xFCk\u2005K\xF6pek","Canis\u2005Minor",109.5,5,2],["O\u011Flak","Capricornus",-45,-22,2],["Karina","Carina",144,-66,1],["Koltuk","Cassiopeia",-6,55.5,1],["Erbo\u011Fa","Centaurus",-160.5,-40,1],["Kral","Cepheus",-22.5,71,2],["Balina","Cetus",28.5,-5,1],["Bukalemun","Chamaeleon",-171,-81,3],["Pergel","Circinus",-142.5,-67,3],["G\xFCvercin","Columba",85.5,-39,3],["Berenis'in\u2005Sa\xE7\u0131","Coma\u2005Berenices",-166.5,24,3],["G\xFCneytac\u0131","Corona\u2005Australis",-78,-40,3],["Kuzeytac\u0131","Corona\u2005Borealis",-121.5,32,2],["Karga","Corvus",-174,-19.5,3],["Kupa","Crater",174.75,-15,3],["Ha\xE7","Crux",-166.5,-62,2],["Ku\u011Fu","Cygnus",-52.5,50,1],["Yunus","Delphinus",-51,6,3],["K\u0131l\u0131\xE7bal\u0131\u011F\u0131","Dorado",76.5,-64,3],["Ejderha","Draco",-91.5,64,2],["Tay","Equuleus",-39.75,11.5,3],["Irmak","Eridanus",52.5,-18,1],["Ocak","Fornax",40.5,-28,3],["\u0130kizler","Gemini",107.25,23.5,1],["Turna","Grus",-18,-41.5,3],["Herk\xFCl","Hercules",-106.5,35,2],["Saat","Horologium",51,-52,3],["Suy\u0131lan\u0131","Hydra",150,-22,2],["K\xFC\xE7\xFCk suy\u0131lan\u0131","Hydrus",34.5,-72,3],["Hintli","Indus",-42,-55.5,3],["Kertenkele","Lacerta",-18,47,3],["Aslan","Leo",159,15,1],["K\xFC\xE7\xFCk\u2005Aslan","Leo\u2005Minor",157.5,30,3],["Tav\u015Fan","Lepus",88.5,-25,3],["Terazi","Libra",-129,-26,2],["Kurt","Lupus",-131.25,-35,3],["Va\u015Fak","Lynx",121.5,49,3],["\xC7alg\u0131","Lyra",-81,30,2],["Masa","Mensa",82.5,-80,3],["Mikroskop","Microscopium",-43.5,-37,3],["Tekboynuz","Monoceros",114.75,-6,2],["Sinek","Musca",-165,-73,3],["Cetvel","Norma",-117,-52,3],["Sekizlik","Octans",-60,-80,3],["Y\u0131lanc\u0131","Ophiuchus",-102,3,2],["Avc\u0131","Orion",84,13,1],["Tavus","Pavo",-63,-62,2],["Kanatl\u0131at","Pegasus",-25.5,16,1],["Kahraman","Perseus",66,45,1],["Anka","Phoenix",16.5,-43,2],["Ressam","Pictor",82.5,-50,3],["Bal\u0131k","Pisces",19.5,15,2],["G\xFCneybal\u0131\u011F\u0131","Piscis\u2005Austrinus",-27,-29,2],["Pupa","Puppis",111,-46,2],["Kumpas","Pyxis",132,-24,3],["A\u011Fc\u0131k","Reticulum",55.5,-61,3],["Ok\xE7uk","Sagitta",-69,18,3],["Yay","Sagittarius",-67.5,-34,1],["Akrep","Scorpius",-111,-38,1],["Heykeltra\u015F","Sculptor",1.5,-33,3],["Kalkan","Scutum",-78,-12.5,3],["Y\u0131lan","Serpens",-127.5,5,3],["Y\u0131lan","Serpens",-79.5,3,3],["Alt\u0131l\u0131k","Sextans",157.5,-7,3],["Bo\u011Fa","Taurus",54,15,1],["D\xFCrb\xFCn","Telescopium",-82.5,-54,3],["\xDC\xE7gen","Triangulum",27,34,3],["G\xFCney\u2005\xDC\xE7geni","Triangulum\u2005Australe",-120,-67.5,2],["Tukan","Tucana",-12,-64,3],["B\xFCy\xFCk\u2005Ay\u0131","Ursa\u2005Maior",165,48,1],["K\xFC\xE7\xFCk\u2005Ay\u0131","Ursa\u2005Minor",-133.5,68,2],["Yelken","Vela",143.25,-46,2],["Ba\u015Fak","Virgo",-160.5,-4,1],["U\xE7anbal\u0131k","Volans",111,-73,3],["Tilkicik","Vulpecula",-64.5,21,3]],s:[["Achernar",24.43,-57.24,.45],["Aldebaran",68.98,16.51,.87],["Rigel",78.63,-8.2,.18],["Capella",79.17,46,.08],["Betelgeuse",88.79,7.41,.45],["Canopus",95.99,-52.7,-.62],["Sirius",101.29,-16.72,-1.44],["Adhara",104.66,-28.97,1.5],["Castor",113.65,31.89,1.58],["Procyon",114.83,5.22,.4],["Pollux",116.33,28.03,1.16],["Regulus",152.09,11.97,1.36],["Acrux",-173.35,-63.1,.77],["Gacrux",-172.21,-57.11,1.59],["Mimosa",-168.07,-59.69,1.25],["Spica",-158.7,-11.16,.98],["Hadar",-149.04,-60.37,.61],["Arcturus",-146.08,19.18,-.05],["Toliman",-140.1,-60.84,1.35],["Rigil Kentaurus",-140.1,-60.83,-.01],["Antares",-112.65,-26.43,1.06],["Vega",-80.77,38.78,.03],["Altair",-62.3,8.87,.76],["Deneb",-49.64,45.28,1.25],["Fomalhaut",-15.59,-29.62,1.17]]};var Dn=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Vc=["Aksiyom 1 \u2014 Anlam, \u0130li\u015Fkiden Do\u011Far","Aksiyom 2 \u2014 Ger\xE7eklik, Tutarl\u0131l\u0131kt\u0131r","Aksiyom 3 \u2014 Ama\xE7, De\u011Fer Yaratmakt\u0131r"],ca=()=>{try{return JSON.parse(localStorage.getItem("qid")||"null")}catch{return null}};function Jf(n,e,t,i,s){n.save(),n.strokeStyle=s,n.lineWidth=Math.max(1,i*.06),n.lineCap="round",n.beginPath(),n.moveTo(e,t-i*1.55),n.lineTo(e,t+i*1.75),n.stroke(),n.beginPath(),n.arc(e,t-i*.35,i*.75,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(e-i*.9,t+i*.55),n.lineTo(e+i*.9,t+i*.55),n.moveTo(e-i*.7,t+i*.8),n.lineTo(e+i*.7,t+i*.8),n.stroke(),n.beginPath(),n.arc(e,t+i*.95,i*.55,Math.PI*.1,Math.PI*.9),n.stroke(),n.restore()}var _n={get:ca,label(){let n=ca();return n?[n.n?D("id.explorer")+" "+n.n:D("id.explorer"),n.sn,n.a?Vc[n.a-1].split(" \u2014 ")[0]:""].filter(Boolean).join(" \xB7 "):""},apply(){let n=ca();ve.setMine(n&&n.s?n.s:null)},edit(n,e){let t=ca()||{},i=[["home",D("id.home")],["itf",D("id.itf")]].concat(n.filter(l=>l.sector!=null).sort((l,u)=>l.sector-u.sector).map(l=>[l.id,l.name])),s=document.createElement("div");s.id="kimlik",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby","kmh"),s.innerHTML='<form class="kb"><button type="button" class="kx" aria-label="'+Dn(D("id.close"))+'">\u2715</button><canvas width="96" height="120" aria-hidden="true"></canvas><small>'+Dn(D("log.eyebrow"))+'</small><h2 id="kmh">'+Dn(D("id.title"))+"</h2><p>"+Dn(D("id.lead"))+"</p><label>"+Dn(D("id.name"))+'<input name="n" maxlength="24" autocomplete="nickname" value="'+Dn(t.n)+'"></label><label>'+Dn(D("id.sector"))+'<select name="s">'+i.map(l=>'<option value="'+Dn(l[0])+'"'+(l[0]===t.s?" selected":"")+">"+Dn(l[1])+"</option>").join("")+"</select></label><fieldset><legend>"+Dn(D("id.axiom"))+"</legend>"+Vc.map((l,u)=>'<label class="ka"><input type="radio" name="a" value="'+(u+1)+'"'+(t.a===u+1?" checked":"")+"><span>"+Dn(l)+"</span></label>").join("")+'</fieldset><div class="kr"><button type="submit" class="ok">'+Dn(D("id.save"))+"</button>"+(t.s?'<button type="button" class="kc">'+Dn(D("id.card"))+"</button>":"")+"</div></form>",document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("on"));let r=s.querySelector("canvas");Jf(r.getContext("2d"),48,52,26,"#e8c46a");let o=()=>{s.classList.remove("on"),setTimeout(()=>s.remove(),400)};s.querySelector(".kx").onclick=o,s.addEventListener("keydown",l=>{l.key==="Escape"&&o()}),s.querySelector("form").onsubmit=l=>{l.preventDefault();let u=l.target,c=u.s.value,f=i.find(p=>p[0]===c),h={n:u.n.value.trim().slice(0,24),s:c,sn:f?f[1]:"",a:u.a.value?+u.a.value:0,since:t.since||Date.now()};try{localStorage.setItem("qid",JSON.stringify(h))}catch{}_n.apply(),o(),e&&e(h)};let a=s.querySelector(".kc");a&&(a.onclick=()=>_n.card()),setTimeout(()=>{let l=s.querySelector("input[name=n]");l&&l.focus()},60)},card(){let n=ca();if(!n)return;let e=1200,t=750,i=document.createElement("canvas");i.width=e,i.height=t;let s=i.getContext("2d"),r=s.createRadialGradient(e*.3,t*.4,40,e*.5,t*.5,e*.75);r.addColorStop(0,"#1b1730"),r.addColorStop(1,"#05050a"),s.fillStyle=r,s.fillRect(0,0,e,t);for(let c=0;c<420;c++){let f=Math.random();s.fillStyle="rgba(255,240,220,"+(.15+f*.6)+")",s.fillRect(Math.random()*e,Math.random()*t,f*2,f*2)}s.strokeStyle="rgba(232,196,106,.6)",s.lineWidth=2,s.strokeRect(24,24,e-48,t-48),Jf(s,e*.18,t*.48,80,"#e8c46a"),s.fillStyle="#8f8570",s.font="22px Georgia,serif",s.fillText(D("log.eyebrow").toUpperCase(),e*.33,t*.26),s.fillStyle="#e8c46a",s.font="64px Georgia,serif",s.fillText(n.n||D("id.explorer"),e*.33,t*.4),s.fillStyle="#efe6d0",s.font="italic 30px Georgia,serif",s.fillText(n.sn||"",e*.33,t*.52),n.a&&(s.fillStyle="#d8c9a8",s.font="26px Georgia,serif",s.fillText(Vc[n.a-1],e*.33,t*.62));let o={};try{o=JSON.parse(localStorage.getItem("qlog")||"{}")||{}}catch{}let a=Object.keys(o).length,l=Object.values(o).reduce((c,f)=>c+(f.f||[]).length,0);s.fillStyle="#9d927a",s.font="22px Georgia,serif",s.fillText(D("id.stats",{w:a,f:l}),e*.33,t*.74),s.textAlign="right",s.fillStyle="#8f8570",s.font="18px Georgia,serif",s.fillText("QUL EFSANELER\u0130 \xB7 "+(location.host||"qul"),e-60,t-56);let u=document.createElement("a");u.download="qul-kasif-kimligi.png",u.href=i.toDataURL("image/png"),u.click()}};var Vo=`precision highp float;
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
}`,Fx="varying vec2 vUv;void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}",Bx="varying vec2 vUv;uniform sampler2D tex;uniform vec2 texel;uniform float pre;vec3 f(vec2 u){vec3 c=texture2D(tex,u).rgb;if(isnan(c.r)||isnan(c.g)||isnan(c.b))c=vec3(0.);c=clamp(c,0.,6e3);if(pre>0.){float b=max(max(c.r,c.g),c.b);c*=max(b-1.5,0.)/max(b,1e-4);}return c;}void main(){vec3 c=f(vUv+texel*vec2(-1.,-1.))+f(vUv+texel*vec2(1.,-1.))+f(vUv+texel*vec2(-1.,1.))+f(vUv+texel*vec2(1.,1.));c+=4.*f(vUv);gl_FragColor=vec4(c/8.,1.);}",Hx="varying vec2 vUv;uniform sampler2D tex,add;uniform vec2 texel;void main(){vec3 c=vec3(0.);c+=texture2D(tex,vUv+texel*vec2(-1.,-1.)).rgb+texture2D(tex,vUv+texel*vec2(1.,-1.)).rgb+texture2D(tex,vUv+texel*vec2(-1.,1.)).rgb+texture2D(tex,vUv+texel*vec2(1.,1.)).rgb;c+=2.*(texture2D(tex,vUv+texel*vec2(-1.,0.)).rgb+texture2D(tex,vUv+texel*vec2(1.,0.)).rgb+texture2D(tex,vUv+texel*vec2(0.,-1.)).rgb+texture2D(tex,vUv+texel*vec2(0.,1.)).rgb);c+=4.*texture2D(tex,vUv).rgb;gl_FragColor=vec4(c/16.+texture2D(add,vUv).rgb,1.);}",Vx="varying vec2 vUv;uniform sampler2D tS,tB;uniform vec2 texel,sunUV;uniform float uT,str,rays,sat;uniform vec3 tint;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uT)*43758.5453);}vec3 S(vec2 u){vec3 s=texture2D(tS,u).rgb;if(isnan(s.r)||isnan(s.g)||isnan(s.b))s=vec3(0.);return clamp(s,0.,6e3);}void main(){vec2 uv=vUv,cc=uv-.5;float ca=dot(cc,cc)*.010;vec3 c=vec3(S(uv+cc*ca).r,S(uv).g,S(uv-cc*ca).b);vec3 b=(S(uv+vec2(texel.x,0.))+S(uv-vec2(texel.x,0.))+S(uv+vec2(0.,texel.y))+S(uv-vec2(0.,texel.y)))*.25;c+=(c-b)*.35;c+=texture2D(tB,uv).rgb*str;if(rays>0.){vec3 gr=vec3(0.);vec2 dl=(sunUV-uv)/14.,sq=uv;float wt=1.;for(int i=0;i<14;i++){sq+=dl;gr+=texture2D(tB,sq).rgb*wt;wt*=.93;}c+=gr*rays*.012;}if(isnan(c.r)||isnan(c.g)||isnan(c.b))c=vec3(0.);c=mix(vec3(dot(c,vec3(.299,.587,.114))),c,sat)*tint;c=(c*(2.51*c+.03))/(c*(2.43*c+.59)+.14);c=pow(clamp(c,0.,1.),vec3(.4545));float q=16.*uv.x*uv.y*(1.-uv.x)*(1.-uv.y);c*=.72+.28*pow(q,.25);c+=(h(uv*1500.)-.5)*.025;c*=min(1.,uT/1.5);gl_FragColor=vec4(c,1.);}",Gx=`
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
}`,Gc="void main(){gl_Position=vec4(position.xy,0.,1.);}",ua=(n,e,t)=>n.map((i,s)=>i+(e[s]-i)*t),Wc=(()=>{let n=(s,r)=>s[0]*r[0]+s[1]*r[1]+s[2]*r[2],e=(s,r,o)=>{let a=n(s,r),l=n(s,s)-o*o,u=a*a-l;if(u<0)return[1e9,-1e9];let c=Math.sqrt(u);return[-a-c,-a+c]};return{atmo:(s,r,o,a,l)=>{s=[s[0],Math.max(s[1],0),s[2]];let u=Math.hypot(...s);s=s.map(C=>C/u);let c=[0,6360.25,0],f=e(c,s,6420)[1],h=0,p=0,v=[0,0,0],_=[0,0,0];for(let C=0;C<10;C++){let y=(C+.5)*.1,S=f*.2*y,A=c.map((H,G)=>H+s[G]*f*y*y),g=Math.hypot(...A)-6360,b=Math.exp(-g*.125)*S,R=Math.exp(-g/1.2)*S;h+=b,p+=R;let z=e(A,r,6420)[1]*.25,K=0,O=0,k=!0;for(let H=0;H<4;H++){let G=A.map((Y,ae)=>Y+r[ae]*z*(H+.5)),Z=Math.hypot(...G)-6360;if(Z<0){k=!1;break}K+=Math.exp(-Z*.125)*z,O+=Math.exp(-Z/1.2)*z}if(k)for(let H=0;H<3;H++){let G=Math.exp(-(o[H]*(h+K)+a*1.1*(p+O)));v[H]+=G*b,_[H]+=G*R}}let m=n(s,r),d=.76,M=d*d,x=.0597*(1+m*m),w=.1194*((1-M)*(1+m*m))/((2+M)*Math.pow(1+M-2*d*m,1.5));return[0,1,2].map(C=>l*(v[C]*o[C]*x+_[C]*a*w))},trans:(s,r,o)=>{let a=[0,6360.25,0],l=e(a,s,6420)[1],u=l/16,c=0,f=0;for(let h=0;h<16;h++){let p=a.map((_,m)=>_+s[m]*u*(h+.5)),v=Math.hypot(...p)-6360;if(v<0)return[0,0,0];c+=Math.exp(-v*.125)*u,f+=Math.exp(-v/1.2)*u}return r.map(h=>Math.exp(-(h*c+o*1.1*f)))}}})(),Es=n=>new et(...n.map(e=>Math.pow(Math.max(0,Math.min(1,e)),2.2))),Jn=(n,e)=>n.map(t=>t*e);function $f(n){let e=((n.desc||"")+" "+(n.title||"")+" "+(n.eyebrow||"")).toLowerCase(),t=G=>G.test(e),i=Po(e),s=zn(n.key||n.title||"x"),r=wn(s);t(/okyanus (dış )?gezegen|su altı (uygarlık|şehir)/)&&Object.assign(i,{a:[.27,.59,.9],b:[.04,.18,.43],atm:[.43,.7,1],type:2});let o=t(/gaz dev|gaz halka|gaz tabaka|gaz gezegeni|atmosfer gezegeni|bulut/),a=i.type;a===1&&!o&&(a=0);let l=n.key==="obsidian";l&&(a=0);let u=t(/neon|gece|lüminesans|foton|radyant/),c=t(/alacakaranlık|şafak|gün batımı/),f=t(/vakum|boşluk|sessiz/),h={uType:a,uAmp:5,uFreq:.085,uPow:1.5,uSea:-1,uFog:.018,uStars:.9,uNight:0,uCrack:0,uRing:0,uMoons:0,uAur:0,uTwin:0,uSeed:r()*50,uRidge:0,uSnow:0,uClear:2.4,uCloud:.15,uWave:1,uCycle:0,uHeat:1,uPart:0,uFlock:0,uFlash:0,uDive:0,uCity:0,uStruct:0,uForest:0,uErode:.9,speed:1.5},p=ua(i.b,i.a,.25),v=i.a,_=[.2,.5,.6],m=[.02,.1,.2],d=ua(i.atm,[1,1,1],.35),M=Jn(ua(i.atm,i.b,.6),.55),x=[1,.93,.8],w=[-.38,.3,.87];a===0?(t(/çöl|kum/)?(Object.assign(h,{uPow:1,uAmp:3.4,uFreq:.06,uCloud:.05}),p=ua(i.b,i.a,.5),d=[.95,.8,.6],M=[.35,.45,.62]):t(/kristal|prizma|spektr/)?(Object.assign(h,{uRidge:1,uAmp:8,uFreq:.11,uCrack:.55}),_=Jn(i.a,1.3)):Object.assign(h,{uRidge:1,uAmp:6}),f&&(Object.assign(h,{uFog:.002,uStars:2,uCloud:0}),d=[0,0,0],M=[0,0,0],x=[1.2,1.1,1],w=[-.4,.12,.9])):a===1?(Object.assign(h,{uAmp:1.4,uFreq:.06,uPow:1.3,uFog:.04,uClear:4,uStars:0,uCloud:0,speed:2.2}),p=i.b,v=i.a,d=Jn(i.atm,.8),M=Jn(i.atm,.5)):a===2?t(/orman|bitki|ağaç|biyosfer|tarımsal/)?(Object.assign(h,{uSea:.22,uAmp:5.5,uPow:1.7,uCloud:.4,uStars:0,uSnow:.85,uFog:.011}),p=[.1,.3,.08],v=[.36,.34,.2],d=[.62,.78,.95],M=[.16,.38,.78],_=[.15,.45,.5],m=[.02,.12,.2]):(Object.assign(h,{uSea:.55,uAmp:3.2,uPow:1.8,uWave:1.3,uCloud:.5,uStars:0}),p=[.5,.45,.32],v=[.25,.45,.25],_=i.a,m=i.b,d=[.7,.86,.96],M=[.25,.5,.85]):a===3?(Object.assign(h,{uSea:.38,uRidge:1,uAmp:6,uCrack:1.1,uFog:.05,uStars:.3,uCloud:0,uWave:.3}),p=[.05,.04,.04],v=[.22,.12,.09],_=[1,.42,.1],m=[.35,.06,.02],d=[.5,.18,.08],M=[.08,.03,.03],x=[1,.55,.3],w=[-.2,.12,.9]):a===4&&(Object.assign(h,{uRidge:1,uAmp:6,uSea:.22,uSnow:.1,uWave:.06,uCloud:.4}),p=[.7,.82,.92],v=[.95,.98,1],_=[.5,.75,.9],m=[.1,.3,.5],d=[.8,.9,1],M=[.35,.55,.85],x=[.95,.97,1]),l&&(p=[.03,.03,.04],v=[.13,.12,.15],d=[.3,.27,.33],M=[.09,.08,.12],h.uFog=.03,h.uCrack=0,h.uRidge=1,h.uAmp=6.5),c&&(w=[-.5,.07,.85],x=[1,.6,.35],d=[1,.55,.35],M=[.15,.18,.4],h.uCrack=Math.max(h.uCrack,.45),_=Jn(i.a,1.5),h.uStars=1.2),u&&(Object.assign(h,{uNight:1,uStars:1.6,uCloud:0,uCrack:Math.max(h.uCrack,.9)}),w=[-.3,.22,.9],x=[.15,.2,.4],d=[.02,.03,.08],M=[.005,.01,.04],p=Jn(i.b,.8),v=Jn(i.a,.6),_=Jn(i.a,1.5)),t(/ikiz|çift yıldız/)&&(h.uTwin=1);let C=n.key==="dunya";h.uReal=C?1:0;let y={javelin:1,"bio-nexus":2,synapto:3,celestia:4,ferrum:5,obsidian:6,chronos:7,dreamoria:8,nihil:9};h.uSig=y[n.key]||0,t(/aurora|kutup ışık/)&&(h.uAur=1),t(/halka/)&&a!==1&&(h.uRing=1),t(/sis|pus|duman/)&&(h.uFog*=2.2),a!==1&&s%3!==0&&(h.uMoons=1+(s>>3)%2),C&&(h.uMoons=1,h.uTwin=0,h.uRing=0),f&&(h.uHeat=0),a===2&&h.uSea>0&&t(/su altı (şehir|uygarlık)/)&&(h.uCity=1),!f&&a!==1&&t(/kalıntı|tapınak|piramit|şehir|kule|(^|\s)anıt|yapılarla|kompleks/)&&(h.uStruct=t(/piramit/)?1.3:.75),a===2&&h.uSea>0&&h.uSea<.4&&(h.uForest=1),a===3||a===4?h.uErode=1.2:t(/çöl|kum/)&&a===0?h.uErode=.45:a===1&&(h.uErode=.3);let S=!f&&/yağış|yağmur/.test(e.replace(/yağmur orman\S*/g,""));S&&(h.uCloud=1.6,h.uFog*=1.8,d=Jn(d,.5),M=Jn(M,.4),x=Jn(x,.3));let A=!f&&t(/fırtına|şimşek|elektrik|yıldırım|plazma|iyonize/);f||(a===4?h.uPart=1:a===3?h.uPart=2:a===0&&t(/çöl|kum/)||a===1?h.uPart=3:u||c?h.uPart=4:S?h.uPart=5:a===2&&h.uSea<.4&&(h.uPart=6),!u&&t(/uçan|kuş|gökyüzü balina|gök balina|akbaba|kanat|uçma|hava canlı|havada/)&&(h.uFlock=1)),!u&&!f&&!c&&a!==3&&(h.uCycle=1);let g=!u&&!f&&a!==3,b=1;a===0&&t(/çöl|kum|toz/)&&(b=2),a===1&&(b=3),a===2&&(b=h.uForest?1.2:1.5),a===4&&(b=.8),t(/sis|pus|duman/)&&(b*=2.2),S&&(b*=2.5);let R=a===0&&t(/çöl|kum/),z=R?ua([.4,.6,1],i.atm,.08):i.atm;R&&(b=1.3);let K=Math.max(...z,.01),O=z.map(G=>Math.max(.0015,.0331*Math.pow(Math.max(0,G)/K,2)));h.uLights=!f&&t(/şehir|uygarlık|yerleşim|koloni|medeniyet|nüfus|halk|kent|metropol/)?1:0,h.uPhys=g?1:0,n.key==="obsidian"&&(b=1),h.uQ=(()=>{try{let G=localStorage.getItem("qsq");return G==null?window.__qulSafe?0:matchMedia("(pointer:coarse)").matches?1:window.__qulQL>=2?0:window.__qulQL===1?1:2:+G}catch{return 2}})(),h.uBM=.004*b,h.uSI=n.key==="obsidian"?3:11,h.uSig===4&&(h.uAur=1,h.uCycle=0,w=[-.5,.06,.86]),h.uSig===2&&(h.uForest=Math.max(h.uForest,1)),h.uSig===9&&(h.uPhys=0,h.uCloud=0,h.uPart=0,h.uStars=1.4);let k=Math.hypot(...w);return w=w.map(G=>G/k),{scan:(()=>{let G={},Z=(n.desc||"")+" "+JSON.stringify(n.card||{}),Y=Z.toLowerCase(),ae=q=>parseFloat(String(q).replace(",",".")),oe=Z.match(/(\d+(?:[.,]\d+)?)\s*bar\b/i);G.p=oe?[oe[1].replace(".",",")+" bar","kanon"]:null,oe=Z.match(/%\s*(\d+(?:[.,]\d+)?)\s*oksijen/i),G.o2=oe?["%"+oe[1],"kanon"]:/oksijen/.test(Y)?["var (oran belirtilmemi\u015F)","kanon"]:null,oe=Z.match(/(\d+(?:[.,]\d+)?)\s*g\b/),G.g=oe?[oe[1].replace(".",",")+" g","kanon"]:null,G.mag=/zayıf manyetik/.test(Y)?["zay\u0131f","kanon",.3]:/manyetik fırtına|manyetik/.test(Y)?["g\xFC\xE7l\xFC, f\u0131rt\u0131nal\u0131","kanon",1.3]:["veri yok","temsili",.6],G.rad=/yüksek radyasyon|radyasyon/.test(Y)?["y\xFCksek","kanon"]:null;let Se=f&&/vakum|madde içermeyen/.test(Y)?3:a===3?900:a===4?190:a===1?160:a===0&&/çöl|kum/.test(Y)?315:288;G.t=[Se===3?"\u22483 K (bo\u015Fluk)":"\u2248"+(Se-25)+"\u2013"+(Se+30)+" K","tahmini"],G.tb=Se;let te=[],de=(q,X,W,$)=>{q.test(Y)&&te.push([X,W,$])};return de(/oksijen/,"O\u2082","oksijen",[687,760]),de(/nem|buhar|yağış|bulut|okyanus|su altı|\bsu\b/,"H\u2082O","su buhar\u0131",[720,820,940]),de(/metan/,"CH\u2084","metan",[619,727,890]),de(/amonyak/,"NH\u2083","amonyak",[645,790]),de(/karbondioksit|co2|karbon/,"CO\u2082","karbon bile\u015Fikleri",[]),de(/hidrojen/,"H\u2082","hidrojen",[656]),de(/sülfür|kükürt/,"S","s\xFClf\xFCr bile\u015Fikleri",[]),de(/azot|nitrojen/,"N\u2082","azot",[]),de(/aether|eter\b/,"?","tan\u0131mlanamayan bile\u015Fen (aether) \u2014 ard\u0131 bekliyor",[]),G.gas=te,G})(),aco:{harmony:"h",echoes:"e",belvior:"b"}[n.key]||"",seedH:s,bR:O,dive:a===2&&h.uSea>0,storm:A,c:h,col:{uLo:Es(p),uHi:Es(v),uW1:Es(_),uW2:Es(m),uSkyH:Es(d),uSkyZ:Es(M),uSunC:Es(x)},sun:w,type:a,night:u,vac:f,forest:a===2&&h.uSea<.4}}function Wx(n){if(window.__hush)return null;let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t=new e,i=t.createGain();i.gain.value=0;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2e4,i.connect(s),s.connect(t.destination);let r=t.sampleRate*3,o=t.createBuffer(1,r,t.sampleRate),a=o.getChannelData(0);for(let y=0;y<r;y++)a[y]=Math.random()*2-1;let l=()=>{let y=t.createBufferSource();return y.buffer=o,y.loop=!0,y.start(),y},u=(y,S,A,g)=>{let b=t.createOscillator(),R=t.createGain();return b.frequency.value=S,R.gain.value=A,y.value=g,b.connect(R),R.connect(y),b.start(),b},c=(y,S,A,g,b)=>{let R=t.createBiquadFilter(),z=t.createGain();return R.type=S,R.frequency.value=A,R.Q.value=g,z.gain.value=b,y.connect(R),R.connect(z),z.connect(i),{fl:R,gn:z}},f=(y,S,A="sine")=>{let g=t.createOscillator(),b=t.createGain();return g.type=A,g.frequency.value=y,b.gain.value=S,g.connect(b),b.connect(i),g.start(),{o:g,gn:b}},h=null,p=n.type;if(n.vac)f(38,.05);else if(p===1){let y=f(55,.08),S=f(82.4,.05),A=f(110.3,.03);u(y.gn.gain,.07,.03,.08),u(S.gn.gain,.05,.02,.05),c(l(),"lowpass",260,.5,.25)}else if(p===3){c(l(),"lowpass",110,.7,.9),c(l(),"bandpass",380,.6,.12);let y=()=>{let S=t.createBufferSource(),A=t.createGain(),g=t.createBiquadFilter();S.buffer=o,g.type="bandpass",g.frequency.value=2e3+Math.random()*3500,g.Q.value=1.2;let b=t.currentTime,R=.03+Math.random()*.07;A.gain.setValueAtTime(.05+Math.random()*.08,b),A.gain.exponentialRampToValueAtTime(5e-4,b+R),S.connect(g),g.connect(A),A.connect(i),S.start(b,Math.random()*2,R+.02),h=setTimeout(y,140+Math.random()*460)};y()}else{let y=c(l(),"bandpass",p===4?700:420,.7,.5);if(u(y.gn.gain,.07,.25,.5),u(y.fl.frequency,.05,150,p===4?700:420),c(l(),"lowpass",160,.5,.18),p===2){let S=c(l(),"lowpass",520,.6,.25);u(S.gn.gain,.11,.22,.25);let A=c(l(),"bandpass",900,.8,.08);u(A.gn.gain,.083,.07,.08)}}if(!n.vac){let y=c(l(),"bandpass",3200,.9,.5),S=t.currentTime;y.fl.frequency.setValueAtTime(3200,S),y.fl.frequency.exponentialRampToValueAtTime(260,S+7),y.gn.gain.setValueAtTime(.5,S),y.gn.gain.linearRampToValueAtTime(0,S+8)}if(!n.vac){let y=[[0,1,4,5,7,8,11],[0,2,4,5,7,9,10],[0,1,3,5,7,8,10],[0,2,4,7,9],[0,2,4,6,7,9,11],[0,2,3,5,7,8,10]],S=n.seedH>>>0,A=n.aco==="h"?[0,4,7,12,16]:n.aco==="b"?[0,2,3,7,9]:y[S%y.length],g=p===3?98:p===4?392:p===2?196:p===1?130.8:261.6,b=t.createDelay(1.5),R=t.createGain(),z=t.createGain();b.delayTime.value=n.aco==="e"?.18:.37+S%7*.05,R.gain.value=n.aco==="e"?.78:.55,z.gain.value=.5,b.connect(R),R.connect(b),b.connect(z),z.connect(i);let K=0,O=()=>{if(!t||t.state==="closed")return;let k=t.currentTime,H=A[Math.floor(Math.random()*A.length)],G=Math.random()<.3?2:1,Z=g*G*Math.pow(2,H/12),Y=t.createOscillator(),ae=t.createGain();if(Y.type="sine",Y.frequency.value=Z,ae.gain.setValueAtTime(0,k),ae.gain.linearRampToValueAtTime(.022,k+.02),ae.gain.exponentialRampToValueAtTime(4e-4,k+3.5),Y.connect(ae),ae.connect(i),ae.connect(b),Y.start(k),Y.stop(k+3.6),n.aco==="h"){let oe=t.createOscillator(),Se=t.createGain();oe.frequency.value=Z*1.5,Se.gain.setValueAtTime(0,k+.12),Se.gain.linearRampToValueAtTime(.012,k+.15),Se.gain.exponentialRampToValueAtTime(4e-4,k+3.2),oe.connect(Se),Se.connect(i),Se.connect(b),oe.start(k+.12),oe.stop(k+3.3)}n.aco==="e"&&(Y.frequency.value=Z*2),K=setTimeout(O,n.aco==="h"?1400+Math.random()*2200:n.aco==="b"?900+Math.random()*900:2800+Math.random()*5200)};K=setTimeout(O,6e3),n._chimeStop=()=>clearTimeout(K)}if(n.night){let y=f(174.6,.012,"triangle"),S=f(261.6,.008,"triangle");u(y.gn.gain,.09,.008,.012),u(S.gn.gain,.06,.006,.008)}i.gain.linearRampToValueAtTime(.55,t.currentTime+3);let v=()=>{let y=t.currentTime,S=t.createBiquadFilter(),A=t.createGain(),g=t.createBufferSource();g.buffer=o,S.type="lowpass",S.frequency.setValueAtTime(900,y),S.frequency.exponentialRampToValueAtTime(70,y+2.5),A.gain.setValueAtTime(0,y),A.gain.linearRampToValueAtTime(1.3,y+.05),A.gain.exponentialRampToValueAtTime(.001,y+3),g.connect(S),S.connect(A),A.connect(t.destination),g.start(y,Math.random()*.5,3.1)},_=l(),m=t.createBiquadFilter(),d=t.createGain();m.type="highpass",m.frequency.value=900,d.gain.value=0,_.connect(m),m.connect(d),d.connect(i);let M=null,x=0,w=0;return{cave:(y,S)=>{let A=t.currentTime;if(i.gain.cancelScheduledValues(A),i.gain.setTargetAtTime(y?.1:.55,A,.8),y){if(!M){M=t.createGain(),M.gain.value=0;let b=t.createConvolver(),R=t.sampleRate*2.6,z=t.createBuffer(2,R,t.sampleRate);for(let k=0;k<2;k++){let H=z.getChannelData(k);for(let G=0;G<R;G++)H[G]=(Math.random()*2-1)*Math.pow(1-G/R,3.2)}b.buffer=z,M.connect(b),b.connect(t.destination);let K=t.createOscillator(),O=t.createGain();K.frequency.value=S===3?58:46,K.type=S===3?"sawtooth":"sine",O.gain.value=S===3?.006:.015,K.connect(O),O.connect(M),K.start()}M.gain.setTargetAtTime(1,A,.8);let g=()=>{if(!M)return;let b=t.currentTime,R=t.createOscillator(),z=t.createGain(),K=(S===2?1800:900)+Math.random()*1400;R.frequency.setValueAtTime(K,b),R.frequency.exponentialRampToValueAtTime(K*.45,b+.08),z.gain.setValueAtTime(.05,b),z.gain.exponentialRampToValueAtTime(5e-4,b+.12),R.connect(z),z.connect(M),R.start(b),R.stop(b+.15),x=setTimeout(g,600+Math.random()*2600)};if(clearTimeout(x),x=setTimeout(g,800),S===3){let b=()=>{if(!M)return;let R=t.currentTime,z=t.createBufferSource(),K=t.createBiquadFilter(),O=t.createGain();z.buffer=o,K.type="bandpass",K.frequency.value=1500+Math.random()*1500,K.Q.value=8,O.gain.setValueAtTime(.12,R),O.gain.exponentialRampToValueAtTime(5e-4,R+.35),z.connect(K),K.connect(O),O.connect(M),z.start(R,Math.random()*2,.4),w=setTimeout(b,3500+Math.random()*6e3)};clearTimeout(w),w=setTimeout(b,2500)}}else M&&(M.gain.setTargetAtTime(0,A,.6),clearTimeout(x),clearTimeout(w))},rain(y){d.gain.setTargetAtTime(y*.45,t.currentTime,1.5)},thunder:v,uw(y){s.frequency.setTargetAtTime(y?420:2e4,t.currentTime,.6)},stop(){n._chimeStop&&n._chimeStop();try{i.gain.cancelScheduledValues(t.currentTime),i.gain.setValueAtTime(i.gain.value,t.currentTime),i.gain.linearRampToValueAtTime(0,t.currentTime+1.2)}catch{}clearTimeout(h),h={},setTimeout(()=>{try{t.close()}catch{}},1500)}}}var Qf=n=>{try{parent.postMessage({qulDuck:n},"*")}catch{}},tt=null,Un={open(n){if(tt)return;let e=$f(n),t=document.createElement("div");t.id="surf";let i=String(n.desc||"").split(/(?<=[.!?])\s/)[0],s=I=>String(I||"").replace(/[&<>"]/g,F=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[F]);t.innerHTML='<canvas></canvas><div class="sv"></div><div class="sc"><small>'+s(n.eyebrow)+"</small><h2>"+s(n.title)+"</h2><p>"+s(i)+'</p></div><div class="sw"></div><div class="sk" role="status" aria-live="polite"></div><div class="sn" style="text-align:right">'+s(D("surf.note"))+"<br>"+s(D("surf.hint"))+(e.dive?s(D("surf.dive")):"")+'</div><button class="sgz"></button><div class="ssc" role="status" aria-live="polite"></div><button class="sv2" aria-label="video"></button><button class="sca"></button><button class="sb"></button><button class="sq"></button><div class="stc"><button class="su">\u25B2</button><button class="sd">\u25BC</button></div><div class="sj"></div><button class="sp">'+s(D("surf.photo"))+'</button><button class="sx">'+s(D("surf.close"))+"</button>",document.body.appendChild(t);let r;try{r=new ai({canvas:t.querySelector("canvas"),antialias:!1,powerPreference:"high-performance"})}catch{t.remove();return}r.setPixelRatio(1);let o=!1,a=I=>{if(!o){o=!0;try{localStorage.setItem("qsafe",String(Date.now()))}catch{}try{console.error("[Qul] y\xFCzey ba\u015Flat\u0131lamad\u0131:",I)}catch{}if(window.__qulSurfFail=I,tt)Un.close();else{t.remove();try{r.dispose()}catch{}ve.pause(!1)}window.dispatchEvent(new CustomEvent("qulSurfaceFail",{detail:String(I).slice(0,200)}))}};r.debug.onShaderError=(I,F)=>{let be="";try{be=I.getProgramInfoLog(F)||""}catch{}a("shader: "+be.slice(0,300))},r.domElement.addEventListener("webglcontextlost",I=>{I.preventDefault(),a("ba\u011Flam kayb\u0131 (GPU s\u0131f\u0131rland\u0131)")});let l=document.createElement("div");l.id="surfld",l.textContent=D("surf.load"),document.body.appendChild(l);let u=0,c={uScan:{value:0},uTb:{value:e.scan.tb},uMag:{value:e.scan.mag[2]},uCave:{value:0},uCS:{value:0},uCX:{value:0},uCYaw:{value:0},uLST:{value:0},uLatR:{value:0},tSky:{value:null},uTide:{value:0},uTideA:{value:0},uGrid:{value:0},uCalm:{value:0},uWind:{value:.3},uEcl:{value:0},uMoon0:{value:new N(.46,.5,.74).normalize()},uWet:{value:0},uLat:{value:0},uSeason:{value:0},uAut:{value:0},uJit:{value:new ke},uRes:{value:new ke(1,1)},uLook:{value:new ke},uT:{value:0},uDist:{value:0},uPos:{value:new ke},uHead:{value:0},uAlt:{value:0},uSun:{value:new N(...e.sun)}};for(let I in e.c)I!=="speed"&&(c[I]={value:e.c[I]});for(let I in e.col)c[I]={value:e.col[I]};c.uBR={value:new N(...e.bR)},c.uPH={value:new N},c.uPZ={value:new N},c.uPC={value:new N};let f=()=>{if(!e.c.uPhys)return;let I=c.uSun.value,F=[I.x,I.y,I.z],be=e.bR,ee=e.c.uBM,Ne=e.c.uSI,Ie=Wc.atmo([0,1,0],F,be,ee,Ne),st=[0,0,0];for(let gt=0;gt<4;gt++){let wt=gt*1.5708,Ft=Wc.atmo([Math.cos(wt),.06,Math.sin(wt)],F,be,ee,Ne);for(let Wt=0;Wt<3;Wt++)st[Wt]+=Ft[Wt]*.25}let lt=Wc.trans(F,be,ee);c.uPZ.value.set(Ie[0]+.004,Ie[1]+.006,Ie[2]+.012),c.uPH.value.set(st[0]+.006,st[1]+.008,st[2]+.014),c.uPC.value.set(lt[0]*1.25+.02,lt[1]*1.25+.025,lt[2]*1.25+.04)};f();let h=0,p=(()=>{try{return JSON.parse(localStorage.getItem("qlog")||"{}")||{}}catch{return{}}})(),v=p[n.key]=p[n.key]||{v:0,f:[],ph:0};v.t=n.title,v.v=(v.v||0)+1,v.last=Date.now(),v.f=v.f||[];let _=()=>{try{localStorage.setItem("qlog",JSON.stringify(p))}catch{}};_();let m=n.card||{},d=String(n.desc||"").split(/(?<=[.!?])\s/).slice(1).filter(I=>I.trim().length>12);if((m.extra||[]).forEach(I=>(I.items||[]).forEach(F=>d.push((I.h?I.h+": ":"")+F))),m.durum&&d.push(m.durum),m.aksiyom){let I=_n.get(),F=I&&I.a&&String(m.aksiyom).startsWith("Aksiyom "+I.a);d.push((m.tahmini?D("row.est",{v:m.aksiyom}):m.aksiyom)+(F?" \xB7 "+D("id.yours"):""))}let M=d.slice(0,4).map((I,F)=>{let be=e.seedH%628/100+F*2.1+.4,ee=60+F*45;return{x:Math.sin(be)*ee,z:Math.cos(be)*ee,txt:I,found:v.f.includes(F)}}),x=window.QUL||{},w=x.galaxies||[],C=w.find(I=>I.id===n.gal)||{pos:[0,0,0]},y=[];(x.planets||[]).filter(I=>I.gal===n.gal&&I.key!==n.key&&!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(I.key)).slice(0,5).forEach(I=>{let F=zn(I.key),be=F%628/100,ee=.14+(F>>>8)%40/100,Ne=Po(((I.desc||"")+" "+(I.title||"")).toLowerCase()).a;y.push({type:1,dir:[Math.cos(ee)*Math.sin(be),Math.sin(ee),Math.cos(ee)*Math.cos(be)],col:Ne.map(Ie=>Math.pow(Ie,2.2)*1.6),name:I.title,key:I.key})}),w.filter(I=>I.id!==n.gal&&!I.bg&&I.pos).map(I=>({g:I,d:Math.hypot(I.pos[0]-C.pos[0],I.pos[1]-C.pos[1],I.pos[2]-C.pos[2])||1})).sort((I,F)=>I.d-F.d).slice(0,4).forEach(({g:I,d:F})=>{let be=[(I.pos[0]-C.pos[0])/F,(I.pos[1]-C.pos[1])/F,(I.pos[2]-C.pos[2])/F];be[1]=.12+Math.abs(be[1])*.7;let ee=Math.hypot(...be);be=be.map(Ne=>Ne/ee),y.push({type:2,dir:be,col:(I.tint||[1,1,1]).map(Ne=>Ne*.35),name:I.name,gal:I.id})}),c.uNb={value:Array.from({length:9},(I,F)=>y[F]?new xt(...y[F].dir,y[F].type):new xt)},c.uNc={value:Array.from({length:9},(I,F)=>y[F]?new N(...y[F].col):new N)},c.uOrb={value:2600},e.c.uReal&&new Zi().load("img/gok.png",I=>{I.wrapS=Ei,I.minFilter=en,I.generateMipmaps=!1,I.colorSpace=tn,c.tSky.value=I}),c.uPoi={value:[0,1,2,3].map(I=>new N(M[I]?M[I].x:0,M[I]?M[I].z:0,M[I]?M[I].found?2:1:0))};let S={jallom:1,kaelum:2,fulgur:3},A=S[n.key]||0,g=A?(()=>{let I=e.seedH%314/50+1.1;return{x:Math.sin(I)*38,z:Math.cos(I)*38}})():null;c.uPoi.value.push(new N(g?g.x:0,g?g.z:0,g?3:0));let b=new ft({vertexShader:Gc,fragmentShader:Vo,uniforms:c,depthTest:!1,depthWrite:!1}),R=new oi,z=new Yi(-1,1,1,-1,0,1),K=new vt(new ar(2,2),b);K.frustumCulled=!1,R.add(K);let O=1,k=2600,H=0,G=!1,Z=0,Y=0,ae=(I,F,be)=>{let ee=Math.max(0,Math.min(1,(be-I)/(F-I)));return ee*ee*(3-2*ee)},oe=()=>{let I=c.uHead.value+c.uLook.value.x*.85,F=-c.uLook.value.y*.4-.05-.65*ae(0,2600,k)-.2*ae(0,150,k),be=[Math.sin(I)*Math.cos(F),Math.sin(F),Math.cos(I)*Math.cos(F)],ee=[be[2],0,-be[0]],Ne=Math.hypot(ee[0],ee[2])||1;return ee[0]/=Ne,ee[2]/=Ne,{fw:be,rt:ee,up:[be[1]*ee[2]-be[2]*ee[1],be[2]*ee[0]-be[0]*ee[2],be[0]*ee[1]-be[1]*ee[0]]}},Se=0,te=0,de=0,q=0,X=0,W=!0,$=!1,Q=0,le=0,Ae=!1,V=.6,Ze=!0,Ce=window.__qulSafe?.3:Math.min(.4,[.7,.6,.5,.38][window.__qulQL|0]||.7),we=0,De=performance.now(),$e=0,Ke=0,L=0,E=1,j={x:0,y:0,lx:0,ly:0},_e=r.extensions.has("EXT_color_buffer_float")||r.extensions.has("EXT_color_buffer_half_float"),xe=(I,F)=>new an(Math.max(2,I|0),Math.max(2,F|0),{type:_e?Rn:si,minFilter:en,magFilter:en,depthBuffer:!1}),Ee=(I,F)=>new ft({vertexShader:Fx,fragmentShader:I,uniforms:F,depthTest:!1,depthWrite:!1}),Be=Ee(Bx,{tex:{value:null},texel:{value:new ke},pre:{value:0}}),Le=Ee(Hx,{tex:{value:null},add:{value:null},texel:{value:new ke}}),Ue=Ee(Vx,{tS:{value:null},tB:{value:null},texel:{value:new ke},uT:c.uT,str:{value:.22},sunUV:{value:new ke(.5,.5)},rays:{value:0},sat:{value:1},tint:{value:new N(1,1,1)}}),qe=null,Ye=[],U=[],fe=[null,null],ie=0,ge=1,ye=_e&&!window.__qulSafe,he=ye?new ft({vertexShader:Gc,fragmentShader:Vo.slice(0,Vo.indexOf(`void main(){
  gH=uSkyH;`))+Gx,uniforms:Object.assign({},c,{tCur:{value:null},tHist:{value:null},uPP:{value:new ke},uPL:{value:new ke},uPH0:{value:0},uPA:{value:0},uPT:{value:0},uRst:{value:1},uPO:{value:0}}),depthTest:!1,depthWrite:!1}):null,T=[[.5,.333],[.25,.667],[.75,.111],[.125,.444],[.625,.778],[.375,.222],[.875,.556],[.0625,.889]],ce=0,Me=()=>{[qe,...Ye,...U,...fe].forEach(I=>I&&I.dispose())},me=(I,F,be)=>{Me();let ee=Math.max(2,Math.round(I*be)),Ne=Math.max(2,Math.round(F*be));r.setSize(I,F,!1),c.uRes.value.set(ee,Ne),qe=xe(ee,Ne),ye&&(fe=[xe(ee,Ne),xe(ee,Ne)],ge=1),Ye=[],U=[];for(let Ie=1;Ie<=4;Ie++)Ye.push(xe(I/(1<<Ie+1),F/(1<<Ie+1)));for(let Ie=3;Ie>=1;Ie--)U.push(xe(I/(1<<Ie),F/(1<<Ie)));Ue.uniforms.texel.value.set(1/I,1/F)},ue=(I,F)=>{K.material=I,r.setRenderTarget(F),r.render(R,z)},B=()=>{if(ye){let F=T[ce++%8];c.uJit.value.set(F[0]-.5,F[1]-.5)}else c.uJit.value.set(0,0);ue(b,qe);let I=qe;if(ye){let F=he.uniforms;F.tCur.value=qe.texture,F.tHist.value=fe[ie].texture,F.uRst.value=ge||c.uOrb.value>8||c.uCave.value>0?1:0,F.uPO.value=c.uOrb.value,ue(he,fe[1-ie]),ie=1-ie,I=fe[ie],ge=0,F.uPP.value.copy(c.uPos.value),F.uPL.value.copy(c.uLook.value),F.uPH0.value=c.uHead.value,F.uPA.value=c.uAlt.value,F.uPT.value=c.uT.value}Be.uniforms.tex.value=I.texture,Be.uniforms.pre.value=1,Be.uniforms.texel.value.set(1/I.width,1/I.height),ue(Be,Ye[0]),Be.uniforms.pre.value=0;for(let F=1;F<4;F++)Be.uniforms.tex.value=Ye[F-1].texture,Be.uniforms.texel.value.set(1/Ye[F-1].width,1/Ye[F-1].height),ue(Be,Ye[F]);for(let F=0;F<3;F++){let be=F===0?Ye[3]:U[F-1],ee=Ye[2-F];Le.uniforms.tex.value=be.texture,Le.uniforms.add.value=ee.texture,Le.uniforms.texel.value.set(1/be.width,1/be.height),ue(Le,U[F])}{let F=c.uSun.value,be=oe(),ee=be.fw,Ne=be.rt,Ie=be.up,st=F.x*ee[0]+F.y*ee[1]+F.z*ee[2],lt=(F.x*Ne[0]+F.y*Ne[1]+F.z*Ne[2])/st/1.25,gt=(F.x*Ie[0]+F.y*Ie[1]+F.z*Ie[2])/st/1.25,wt=innerHeight/innerWidth;Ue.uniforms.sunUV.value.set(.5+lt*wt,.5+gt),Ue.uniforms.rays.value=st<.15||F.y<.02||c.uNight.value>.5?0:Math.min(1,(st-.15)*2.5)*Math.min(1,F.y*5)}Ue.uniforms.tS.value=I.texture,Ue.uniforms.tB.value=U[2].texture,ue(Ue,null)},pe=()=>me(Math.min(1920,innerWidth),Math.round(Math.min(1920,innerWidth)*innerHeight/innerWidth),Ce);pe();let Re=I=>{j.x=(I.clientX/innerWidth-.5)*2,j.y=(I.clientY/innerHeight-.5)*2},Ve=I=>{E=Math.max(.3,Math.min(4,E*(I.deltaY<0?1.12:.89)))},Pe={},Te=I=>{let F=I.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(F)&&I.preventDefault(),Pe[F]=!0,F==="escape"?Un.close():F==="t"?Ze=!Ze:F==="p"?nt():F==="k"?t.querySelector(".sq").click():F==="v"?t.querySelector(".sb").click():F==="o"?H=H>0?0:2600:F==="r"?t.querySelector(".sv2").click():F==="m"?Pd():F==="l"?t.querySelector(".sgz").click():F==="g"&&A?Je?Tt():Et&&wr():F==="f"?W=!W:F==="x"&&e.dive&&(Q=Q?0:1)},He=I=>{Pe[I.key.toLowerCase()]=!1};t.addEventListener("pointerdown",I=>{if(!(I.target.closest("button")||I.pointerType==="touch")){$=!0;try{t.setPointerCapture(I.pointerId)}catch{}}}),t.addEventListener("pointerup",()=>{$=!1}),t.addEventListener("pointermove",I=>{$&&(Se+=(I.movementX||0)*.004)}),t.addEventListener("pointermove",Re),t.addEventListener("wheel",Ve,{passive:!0}),addEventListener("keydown",Te),addEventListener("keyup",He),addEventListener("resize",pe);let nt=()=>{v.ph=(v.ph||0)+1,_();let I=Math.min(window.__qulSafe?1280:2048,Math.round(innerWidth*Math.min(devicePixelRatio||1,2))),F=Math.round(I*innerHeight/innerWidth);me(I,F,1);for(let gt=0;gt<(ye?6:1);gt++){B();try{r.getContext().finish()}catch{}}let be=document.createElement("canvas");be.width=I,be.height=F;let ee=be.getContext("2d");ee.drawImage(r.domElement,0,0,I,F);let Ne=ee.createLinearGradient(0,F*.6,0,F);Ne.addColorStop(0,"rgba(0,0,0,0)"),Ne.addColorStop(1,"rgba(0,0,0,.8)"),ee.fillStyle=Ne,ee.fillRect(0,F*.6,I,F*.4);let Ie=Math.round(F*.018);ee.strokeStyle="rgba(232,196,106,.55)",ee.lineWidth=Math.max(1,F*.0018),ee.strokeRect(Ie,Ie,I-Ie*2,F-Ie*2),ee.fillStyle="#e8c46a",ee.font=Math.round(F*.062)+"px Georgia,serif",ee.fillText(n.title||"",I*.05,F*.82);let st=String(n.desc||"").split(/(?<=[.!?])\s/)[0];ee.fillStyle="#efe6d0",ee.font="italic "+Math.round(F*.024)+"px Georgia,serif";{let gt=st.split(" "),wt=[],Ft="";gt.forEach(Wt=>{let Bn=Ft?Ft+" "+Wt:Wt;ee.measureText(Bn).width>I*.6&&Ft?(wt.push(Ft),Ft=Wt):Ft=Bn}),Ft&&wt.push(Ft),wt.slice(0,3).forEach((Wt,Bn)=>ee.fillText(Wt,I*.05,F*.87+Bn*F*.032))}ee.fillStyle="#b8ab8e",ee.font=Math.round(F*.017)+"px Georgia,serif",ee.textAlign="right",ee.fillText("QUL EFSANELER\u0130 \xB7 "+(location.host||"qul"),I*.95,F*.95);{let gt=_n.label();gt&&(ee.fillStyle="#e8c46a",ee.font=Math.round(F*.016)+"px Georgia,serif",ee.fillText(gt,I*.95,F*.92))}ee.textAlign="left";try{let gt=document.createElement("canvas");gt.width=360,gt.height=Math.round(360*F/I),gt.getContext("2d").drawImage(be,0,0,gt.width,gt.height);let wt=[];try{wt=JSON.parse(localStorage.getItem("qgal")||"[]")||[]}catch{}for(wt.unshift({k:n.key,t:n.title,d:Date.now(),i:gt.toDataURL("image/jpeg",.72)});wt.length>16;)wt.pop();localStorage.setItem("qgal",JSON.stringify(wt))}catch{}let lt=document.createElement("a");lt.download="qul-"+(n.key||"gezegen")+".png",lt.href=be.toDataURL("image/png"),lt.click(),pe()};t.querySelector(".sp").onclick=nt;let it=t.querySelector(".sca"),je=()=>{it.textContent=(c.uCalm.value?"\u25D0 ":"\u25D1 ")+D(c.uCalm.value?"surf.calmOn":"surf.calm"),it.setAttribute("aria-pressed",c.uCalm.value?"true":"false")},mt=I=>{c.uCalm.value=I?1:0;try{localStorage.setItem("qcalm",I?"1":"0")}catch{}je()};{let I=null;try{I=localStorage.getItem("qcalm")}catch{}mt(I==null?matchMedia("(prefers-reduced-motion: reduce)").matches:I==="1")}it.onclick=()=>mt(!c.uCalm.value);let Ut=t.querySelector(".sv2"),jt=null;Ut.textContent="\u25CF "+D("surf.video");let Ko=()=>{if(jt){jt.stop();return}let I=r.domElement;if(!I.captureStream||!window.MediaRecorder){ei(D("surf.video"),D("surf.videoNo"));return}let F=["video/mp4;codecs=avc1","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(st=>MediaRecorder.isTypeSupported(st));if(!F){ei(D("surf.video"),D("surf.videoNo"));return}let be=I.captureStream(30),ee=[];jt=new MediaRecorder(be,{mimeType:F,videoBitsPerSecond:12e6}),jt.ondataavailable=st=>{st.data.size&&ee.push(st.data)},jt.onstop=()=>{let st=new Blob(ee,{type:F.split(";")[0]}),lt=document.createElement("a");lt.download="qul-"+(n.key||"gezegen")+(F.includes("mp4")?".mp4":".webm"),lt.href=URL.createObjectURL(st),lt.click(),setTimeout(()=>URL.revokeObjectURL(lt.href),4e3),jt=null,Ut.classList.remove("on"),Ut.textContent="\u25CF "+D("surf.video"),v.ph=(v.ph||0)+1,_()},jt.start(),Ut.classList.add("on");let Ne=10;Ut.textContent="\u25A0 "+Ne+" sn";let Ie=setInterval(()=>{if(!jt){clearInterval(Ie);return}Ne--,Ut.textContent="\u25A0 "+Ne+" sn",Ne<=0&&(clearInterval(Ie),jt.stop())},1e3)};Ut.onclick=Ko;let Ui=t.querySelector(".sgz"),As=t.querySelector(".ssc"),rs=["","surf.scT","surf.scM","surf.scS"],Mr=()=>{let I=c.uScan.value,F=e.scan;if(Ui.textContent="\u2316 "+(I?D(rs[I]):D("surf.scan")),Ui.classList.toggle("on",I>0),!I){As.classList.remove("on");return}let be=(Ne,Ie)=>"<tr><td>"+s(D(Ne))+"</td><td>"+(Ie?s(Ie[0])+' <i class="'+Ie[1]+'">'+s(D("surf.src."+Ie[1]))+"</i>":'<i class="yok">'+s(D("surf.src.yok"))+"</i>")+"</td></tr>",ee="<small>"+s(D("surf.scan"))+" \xB7 "+s(D(rs[I]))+"</small><table>"+be("surf.r.t",F.t)+be("surf.r.p",F.p)+be("surf.r.o2",F.o2)+be("surf.r.g",F.g)+be("surf.r.mag",F.mag)+be("surf.r.rad",F.rad)+"</table>";if(I===3){let Ie=st=>Math.round((st-380)/620*260);ee+='<div class="spc"><div class="spb"></div>'+F.gas.flatMap(st=>st[2].map(lt=>'<i style="left:'+Ie(lt)+'px" title="'+s(st[0])+" "+lt+' nm"></i>')).join("")+'</div><div class="spl"><span>380 nm</span><span>1000 nm</span></div><p>'+(F.gas.length?F.gas.map(st=>"<b>"+s(st[0])+"</b> "+s(st[1])).join(" \xB7 "):s(D("surf.src.yok")))+"</p>"}ee+='<p class="scn">'+s(D("surf.scNote"+I))+"</p>",As.innerHTML=ee,As.classList.add("on")};Ui.onclick=()=>{c.uScan.value=(c.uScan.value+1)%4,Mr()},Mr();let Sr=t.querySelector(".sq"),xa=()=>{Sr.textContent=D("surf.q")+": "+D("surf.q"+c.uQ.value)},Zo=I=>{c.uQ.value=I;try{localStorage.setItem("qsq",I)}catch{}xa(),I<1&&Ce>.75&&(Ce=.75,pe())};Sr.onclick=()=>Zo((c.uQ.value+2)%3),xa();let jo=["gezgin","yerli","gozlemci"],P={gezgin:[1,[1,1,1],1,30],yerli:[1.12,[1.07,1,.9],.5,2],gozlemci:[.72,[.9,.98,1.1],1.7,24]},J=0,se=30,re=t.querySelector(".sb"),ne=I=>{J=I;let F=jo[I],be=P[F];Ue.uniforms.sat.value=be[0],Ue.uniforms.tint.value.set(...be[1]),O=be[2],se=be[3],F==="yerli"&&(X=0),F==="gozlemci"&&(X=Math.max(X,20)),re.textContent=D("surf.view")+": "+D("surf.v."+F);let ee=((window.QUL_BAKIS||{})[n.key]||{})[F];ee&&ei(D("surf.v."+F),ee)},Fe=document.createElement("div");Fe.className="snb",t.appendChild(Fe);let Ge=null,Xe=!1,We=null,at=!1,Qe=null,Je=!1,Et=!1,Vt=0,Lt=0,bn=0,_t=0,ot=I=>{let F=document.createElement("div");F.className="sfd",t.appendChild(F),requestAnimationFrame(()=>F.classList.add("on")),setTimeout(()=>{I(),F.classList.remove("on"),setTimeout(()=>F.remove(),700)},650)};var wr=()=>ot(()=>{Je=!0,Vt=2,Lt=0,bn=0,_t=0,c.uCave.value=A,Fe.style.display="none",v.cave=!0,_(),tt&&tt.audio&&tt.audio.cave&&tt.audio.cave(!0,A),ei(D("surf.cave"),D("surf.caveIn2"))}),Tt=()=>ot(()=>{Je=!1,c.uCave.value=0,Fe.style.display="",tt&&tt.audio&&tt.audio.cave&&tt.audio.cave(!1)}),pi=I=>{let F=(Pe.w||Pe.arrowup?1:0)-(Pe.s||Pe.arrowdown?1:0)+(At.on?-At.y:0),be=1-Math.exp(-I*3);_t+=(F*1.7*(Pe.shift?2.2:1)-_t)*be,Vt+=_t*I,Lt=Math.max(-1.3,Math.min(1.3,Lt+((Pe.d?1:0)-(Pe.a?1:0))*I*1.2)),bn=Math.max(-1.3,Math.min(1.3,bn+((Pe.e||Pe.arrowright?1:0)-(Pe.q||Pe.arrowleft?1:0)+(At.on?At.x:0))*I*1.1)),c.uCS.value=Vt,c.uCX.value=Lt,c.uCYaw.value=bn,Vt<0&&_t<0&&Tt()};let _a=y.map(I=>{let F=document.createElement("button");return F.textContent=I.name,F.className=I.type===1?"np":"ng",F.title=D(I.type===1?"surf.nbP":"surf.nbG"),F.onclick=()=>{I.type===1?(Ge=I.key,H=2600,ei(D("surf.warp"),I.name)):window.dispatchEvent(new CustomEvent("qulGo",{detail:{gal:I.gal}}))},Fe.appendChild(F),F}),Fn=(I,F)=>{let be=document.createElement("span");return be.textContent=I,be.className="sml "+F,Fe.appendChild(be),be},Er=Fn(D(e.c.uTwin?"surf.sunTwin":"surf.sun"),"ms"),Gt=e.c.uMoons>=1?Fn(D("surf.moon"),"ms"):null,mi=[["surf.cN",[0,.02,1]],["surf.cE",[1,.02,0]],["surf.cS",[0,.02,-1]],["surf.cW",[-1,.02,0]]].map(([I,F])=>({d:F,e:Fn(D(I),"mc")})),gi=(I,F,be)=>{let ee=I[0]*F.fw[0]+I[1]*F.fw[1]+I[2]*F.fw[2];if(ee<.2)return null;let Ne=(I[0]*F.rt[0]+I[1]*F.rt[1]+I[2]*F.rt[2])/ee/1.25,Ie=(I[0]*F.up[0]+I[1]*F.up[1]+I[2]*F.up[2])/ee/1.25,st=(.5+Ne*be)*innerWidth,lt=(.5-Ie)*innerHeight;return st<0||st>innerWidth||lt<0||lt>innerHeight?null:[st,lt]},Jt=(I,F,be,ee)=>{if(!F||be<=0){I.style.opacity=0,ee&&(I.style.pointerEvents="none");return}I.style.transform="translate("+Math.round(F[0])+"px,"+Math.round(F[1]+12)+"px) translateX(-50%)",I.style.opacity=be.toFixed(2),ee&&(I.style.pointerEvents="auto")},Tr=0;var Jo=()=>{if(++Tr%2)return;let I=oe(),F=innerHeight/innerWidth,be=e.c.uPhys?Math.max(0,1-(c.uPZ.value.x+c.uPZ.value.y+c.uPZ.value.z)*1.6):1,ee=Xe?1:.3+.7*Math.max(be,ae(150,900,k));y.forEach((Ie,st)=>Jt(_a[st],gi(Ie.dir,I,F),ee,!0));let Ne=c.uSun.value;if(Jt(Er,Xe?gi([Ne.x,Ne.y,Ne.z],I,F):null,1,!1),Gt){let Ie=c.uMoon0.value;Jt(Gt,Xe&&Ie.y>-.02?gi([Ie.x,Ie.y,Ie.z],I,F):null,1,!1)}if(mi.forEach(Ie=>Jt(Ie.e,Xe&&k<200?gi(Ie.d,I,F):null,.9,!1)),e.c.uReal&&(Xe&&!Qe&&(Qe=Hc.c.map(Ie=>({ra:Ie[2]*Math.PI/180,de:Ie[3]*Math.PI/180,e:Fn(Ln==="tr"?Ie[0]:Ie[1],"mk")})).concat(Hc.s.map(Ie=>({ra:Ie[1]*Math.PI/180,de:Ie[2]*Math.PI/180,e:Fn(Ie[0],"mst")})))),Qe)){let Ie=c.uLatR.value,st=Math.sin(Ie),lt=Math.cos(Ie),gt=c.uLST.value;Qe.forEach(wt=>{if(!Xe){wt.e.style.opacity=0;return}let Ft=gt-wt.ra,Wt=Math.cos(wt.de),Bn=Math.sin(wt.de),Hn=Wt*Math.cos(Ft),Ni=[-Wt*Math.sin(Ft),Hn*lt+Bn*st,-Hn*st+Bn*lt];Jt(wt.e,Ni[1]>.03?gi(Ni,I,F):null,.85,!1)})}};let ba=(I,F)=>{let be=oe(),ee=innerHeight,Ne=innerWidth,Ie=(I-Ne/2)/ee,st=(ee/2-F)/ee,lt=[0,1,2].map(Ni=>be.fw[Ni]+(Ie*be.rt[Ni]+st*be.up[Ni])*1.25),gt=Math.hypot(...lt);lt=lt.map(Ni=>Ni/gt);let wt=8e3,Ft=wt+k+8,Wt=Ft*lt[1],Bn=Ft*Ft-wt*wt,Hn=Wt*Wt-Bn;if(Hn<0)return!1;let Ea=-Wt-Math.sqrt(Hn);return Ea<0?!1:(We={x0:c.uPos.value.x,z0:c.uPos.value.y,x1:c.uPos.value.x+lt[0]*Ea,z1:c.uPos.value.y+lt[2]*Ea,k:0},H=0,!0)},Ar=null;t.addEventListener("pointerdown",I=>{Ar=[I.clientX,I.clientY]}),t.addEventListener("pointerup",I=>{if(!Ar||I.target.closest("button"))return;let F=Math.hypot(I.clientX-Ar[0],I.clientY-Ar[1]);Ar=null,F<6&&k>300&&H>0&&ba(I.clientX,I.clientY)});var Cd=I=>{if(k>1500&&H>0&&!at&&!Ge&&(at=!0,ei(D("surf.orbit"),D("surf.orbitHint"))),Ge&&k>1300){let F=Ge;Ge=null,window.dispatchEvent(new CustomEvent("qulGo",{detail:{planet:F,warp:!0}}))}if(We){We.k=Math.min(1,We.k+I*.2);let F=We.k*We.k*(3-2*We.k);c.uPos.value.set(We.x0+(We.x1-We.x0)*F,We.z0+(We.z1-We.z0)*F),te=0,We.k>=1&&(We=null)}},Pd=()=>{Xe=!Xe,c.uGrid.value=Xe?1:0,ei(D("surf.map"),D(Xe?"surf.mapOn":"surf.mapOff"))};re.onclick=()=>ne((J+1)%3),re.textContent=D("surf.view")+": "+D("surf.v.gezgin");let At={on:!1,id:-1,ox:0,oy:0,x:0,y:0},Qn={id:-1,x:0,y:0},Ma=t.querySelector(".sj");t.addEventListener("pointerdown",I=>{I.pointerType!=="touch"||I.target.closest("button")||(I.clientX<innerWidth*.45&&!At.on?(At.on=!0,At.id=I.pointerId,At.ox=I.clientX,At.oy=I.clientY,At.x=At.y=0,Ma.style.left=I.clientX+"px",Ma.style.top=I.clientY+"px",Ma.classList.add("on")):(Qn.id=I.pointerId,Qn.x=I.clientX,Qn.y=I.clientY))}),t.addEventListener("pointermove",I=>{I.pointerType==="touch"&&(I.pointerId===At.id?(At.x=Math.max(-1,Math.min(1,(I.clientX-At.ox)/60)),At.y=Math.max(-1,Math.min(1,(I.clientY-At.oy)/60))):I.pointerId===Qn.id&&(j.x=Math.max(-1,Math.min(1,j.x+(I.clientX-Qn.x)/innerWidth*2.4)),j.y=Math.max(-1,Math.min(1,j.y+(I.clientY-Qn.y)/innerHeight*2.4)),Qn.x=I.clientX,Qn.y=I.clientY))});let eu=I=>{I.pointerId===At.id&&(At.on=!1,At.id=-1,At.x=At.y=0,Ma.classList.remove("on")),I.pointerId===Qn.id&&(Qn.id=-1)};t.addEventListener("pointerup",eu),t.addEventListener("pointercancel",eu);let tu=(I,F)=>{I.addEventListener("pointerdown",be=>{be.preventDefault(),Pe[F]=!0}),["pointerup","pointerleave","pointercancel"].forEach(be=>I.addEventListener(be,()=>{Pe[F]=!1}))};if(tu(t.querySelector(".su")," "),tu(t.querySelector(".sd"),"c"),matchMedia("(pointer:coarse)").matches){t.classList.add("touch");let I=t.querySelector(".sn");I&&(I.textContent=D("surf.touch"))}t.querySelector(".sx").onclick=()=>Un.close();let Sa=e.c.uSea>0?.07*e.c.uAmp*(e.c.uMoons>=1?1:.4):0,nu=0,iu=0;c.uTideA.value=Sa;let su=()=>{if(!Sa)return;let I=c.uMoon0.value,F=c.uSun.value,be=e.c.uMoons>=1?2*I.y*I.y-1:0,ee=Sa*(be+.46*(2*F.y*F.y-1))/1.46;iu=ee-nu,nu=ee,c.uTide.value=ee},$o=e.c.uPart,wa=0,ru=0,au=0,Rr=2.2+Math.random()*2,ei=(I,F)=>{let be=t.querySelector(".sk");be&&(be.innerHTML="<small>"+s(I)+"</small><p>"+s(F)+"</p>",be.classList.add("on"),clearTimeout(au),au=setTimeout(()=>be.classList.remove("on"),11e3))};M.length&&M.some(I=>!I.found)&&setTimeout(()=>{tt&&ei(D("surf.poi"),D("surf.poiHint"))},7e3);let Rs=e.type===0&&e.c.uPart===3,$t=e.c.uPhys&&!e.vac&&e.type!==1?{v:e.c.uPart===5?.8:.15,tg:.15,t:25+Math.random()*30,bm:e.c.uBM}:null,Ld=Math.random()*6.283;window.__qulDbg={wx:$t,U:c,setWet:I=>{wa=I},orb:(I,F)=>{k=I,F!=null&&(H=F)},ecl:I=>{Rr=I}};let Id=I=>{Cd(I);{let ee=Math.log(1+k);k=Math.max(0,Math.exp(ee+(Math.log(1+H)-ee)*(1-Math.exp(-I*.5)))-1),H===0&&k<.05&&(k=0),c.uOrb.value=k,Jo()}let F=Math.max(-1,Math.min(1,c.uPos.value.y/1200+(e.c.uReal?39/80:0)));c.uLat.value=F;let be=c.uT.value*6.2832/480+Ld+(F<0?Math.PI:0);if(c.uSeason.value=Math.sin(be),c.uAut.value=Math.max(0,-Math.cos(be)),$t){$t.t-=I,$t.t<=0&&($t.tg=e.storm&&Math.random()<.6?.65+Math.random()*.35:Math.random()<.5?Math.random()*.4:.4+Math.random()*.6,$t.t=50+Math.random()*70),$t.v+=($t.tg-$t.v)*(1-Math.exp(-I*.03));let ee=$t.v;Rs?(e.c.uBM=$t.bm*(1+3*Math.max(0,ee-.4)/.6),c.uBM.value=e.c.uBM):c.uCloud.value=e.c.uCloud+Math.max(0,ee-.25)/.75*(1.6-e.c.uCloud);let Ne=!Rs&&e.type!==4&&ee>.62;$o=Ne?5:Rs&&ee>.5?3:e.c.uPart,wa=Math.max(0,Math.min(1,wa+(Ne?I*.05:-I*.012))),c.uWet.value=wa,tt&&tt.audio&&tt.audio.rain&&tt.audio.rain(Ne?(ee-.62)/.38:0),!Rs&&ee>.85&&Math.random()<I*.12&&tt&&tt.bolt(),$t.w=ee,$t.rain=Ne,c.uWind.value=.3+ee*1.1}if(e.c.uMoons>=1){Rr+=I*.0175;let ee=c.uSun.value,Ne=[ee.x,ee.y,ee.z],Ie=[Ne[1]*0-Ne[2]*1,Ne[2]*0-Ne[0]*0,Ne[0]*1-Ne[1]*0],st=Math.hypot(...Ie)||1;Ie=Ie.map(Hn=>Hn/st);let lt=[Ne[1]*Ie[2]-Ne[2]*Ie[1],Ne[2]*Ie[0]-Ne[0]*Ie[2],Ne[0]*Ie[1]-Ne[1]*Ie[0]],gt=.09*Math.sin(Rr*.37+1.3),wt=Math.cos(Rr),Ft=Math.sin(Rr),Wt=[0,1,2].map(Hn=>wt*Ne[Hn]+Ft*(Ie[Hn]*Math.cos(gt)+lt[Hn]*Math.sin(gt)));c.uMoon0.value.set(...Wt).normalize(),su();let Bn=Math.acos(Math.max(-1,Math.min(1,c.uMoon0.value.dot(ee))));c.uEcl.value=ee.y>0?1-ae(.018,.085,Bn):0}if(e.c.uReal||(c.uLatR.value=F*80*Math.PI/180),e.c.uReal){c.uLatR.value=F*80*Math.PI/180,c.uLST.value=V*1.0027+1.9;let ee=Math.max(0,1-(c.uPZ.value.x+c.uPZ.value.y+c.uPZ.value.z)*2);c.uAur.value=Math.abs(F)>.72?ee:0}e.c.uMoons<1&&su();for(let ee=0;ee<M.length;ee++){let Ne=M[ee];if(!Ne.found&&Math.hypot(c.uPos.value.x-Ne.x,c.uPos.value.y-Ne.z)<11){Ne.found=!0,c.uPoi.value[ee].z=2,v.f.includes(ee)||v.f.push(ee),_();try{window.dispatchEvent(new CustomEvent("qulFound",{detail:n.key}))}catch{}ei(D("surf.poi")+" \xB7 "+M.filter(Ie=>Ie.found).length+"/"+M.length,Ne.txt)}}if(g&&!Je){let ee=Math.hypot(c.uPos.value.x-g.x,c.uPos.value.y-g.z)<9;ee&&!Et&&ei(D("surf.cave"),D("surf.caveHint"+A)),Et=ee}if((ru-=I)<=0){ru=1;let ee=t.querySelector(".sw");if(ee){let Ne=Math.round(Math.abs(F)*80),Ie=(be%6.2832+6.2832)%6.2832,st=D("surf.s"+Math.floor(Ie/1.5708)),lt="";if($t){let gt=$t.w||0;lt=" \xB7 "+D(Rs?gt>.55?"surf.wDust":"surf.w0":$t.rain?gt>.85?"surf.w3":"surf.w2":gt>.35?"surf.w1":"surf.w0")}ee.textContent=D("surf.lat")+" "+Ne+"\xB0 "+D(F>=0?"surf.N":"surf.S")+" \xB7 "+st+lt+(Sa?" \xB7 "+D(iu>=0?"surf.tideUp":"surf.tideDn"):"")+(M.length?" \xB7 "+D("surf.poi")+" "+M.filter(gt=>gt.found).length+"/"+M.length:""),Je&&(ee.textContent=D("surf.caveIn",{m:Math.round(Vt)}))}}},ou=I=>{if(o)return;we=requestAnimationFrame(ou);let F=Math.min(.1,(I-De)/1e3);if(De=I,c.uT.value+=F,e.c.uCycle&&Ze&&++h%3===0&&f(),e.dive){le+=(Q-le)*(1-Math.exp(-F*.7)),c.uDive.value=le;let ee=le>.5;c.uPart.value=ee?7:$o,ee!==Ae&&(Ae=ee,tt&&tt.audio&&tt.audio.uw(ee))}if(tt&&(c.uFlash.value=tt.flash(),tt.decay(Math.exp(-F*5))),e.dive||(c.uPart.value=$o),Id(F),e.c.uCycle&&Ze){V+=F*.03*(e.c.uSig===7?Math.sin(c.uT.value*.07)*2.2+Math.sin(c.uT.value*.031)*1.4:1);let ee=Math.abs(c.uLat.value),Ne=.42*Math.cos(V)*(1-.4*ee)-.15*ee,Ie=Math.sqrt(1-Ne*Ne);c.uSun.value.set(-.418*Ie,Ne,.909*Ie)}if(Je)pi(F);else{let ee=e.c.speed*E*O*(1+k*.03),Ne=Pe.shift?2:1,Ie=At.on?-At.y*2.2*ee*Ne:Pe.w||Pe.arrowup?2.2*ee*Ne:Pe.s||Pe.arrowdown?-.6*ee:W?ee*Ne:0,st=((Pe.d?1:0)-(Pe.a?1:0))*.9*ee*Ne,lt=1-Math.exp(-F*2.5);te+=(Ie-te)*lt,de+=(st-de)*lt,Se+=((Pe.e||Pe.arrowright?1:0)-(Pe.q||Pe.arrowleft?1:0))*F*1.1+(At.on?At.x*F*1.3:0),c.uPos.value.x+=(Math.sin(Se)*te+Math.cos(Se)*de)*F,c.uPos.value.y+=(Math.cos(Se)*te-Math.sin(Se)*de)*F,c.uHead.value=Se,X=Math.max(0,Math.min(se,X+((Pe[" "]?1:0)-(Pe.c?1:0))*F*9)),q+=(X-q)*lt,c.uAlt.value=q}let be=1-Math.exp(-F*3);if(j.lx+=(j.x-j.lx)*be,j.ly+=(j.y-j.ly)*be,c.uLook.value.set(j.lx,j.ly),e.c.uSig===8){let ee=c.uT.value*.05;Ue.uniforms.tint.value.set(1+.08*Math.sin(ee),1+.06*Math.sin(ee+2.1),1+.1*Math.sin(ee+4.2)),Ue.uniforms.str.value=.42}if(B(),l.isConnected&&++u===4&&l.remove(),G||(Z+=F,Y++,Z>25&&(G=!0,dn.measure(Math.round(Y/Z),c.uQ.value,matchMedia("(pointer:coarse)").matches))),$e+=F,Ke++,L>0&&L--,Ke>=30){let ee=$e/Ke;$e=0,Ke=0,!L&&ee>.09&&Ce>.2?(Ce=Math.max(.2,Ce*.6),pe(),L=20):!L&&ee>.05&&Ce>.2?(Ce=Math.max(.2,Ce*.75),pe(),L=30):!L&&ee>.026&&Ce>.3?(Ce*=.88,pe(),L=45):!L&&ee<.0175&&Ce<(c.uQ.value<1?.75:1)&&(Ce=Math.min(c.uQ.value<1?.75:1,Ce*(ee<.011?1.16:1.06)),pe(),L=ee<.011?20:45)}};if(tt={mTaa:he,ld:l,kill:Me,el:t,rdr:r,mat:b,onKey:Te,onUp:He,onMove:Re,size:pe,audio:Wx(e),quiet:setTimeout(()=>{let I=t.querySelector(".sc");I&&(I.style.transition="opacity 3s",I.style.opacity="0")},15e3),pz:setTimeout(()=>ve.pause(!0),1700)},o){Un.close();return}let Cs=0,lu=0;if(e.storm){let I=()=>{lu=setTimeout(()=>{(!$t||!Rs&&$t.w>.6)&&(Cs=1,setTimeout(()=>{Cs=.8},130),tt&&tt.audio&&setTimeout(()=>{tt&&tt.audio&&tt.audio.thunder()},500+Math.random()*1500)),I()},5e3+Math.random()*8e3)};I()}tt.bolt=()=>{Cs=1,setTimeout(()=>{Cs=.8},130),tt.audio&&setTimeout(()=>{tt&&tt.audio&&tt.audio.thunder()},500+Math.random()*1500)},tt.flashStop=()=>clearTimeout(lu),tt.flash=()=>Cs,tt.decay=I=>{Cs*=I},Qf(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("on"))),tt.seek=I=>{c.uT.value+=I,V+=I*.03},setTimeout(()=>{(async()=>{try{if(r.compileAsync){let I=[b,he,Be,Le,Ue].filter(Boolean),F=Promise.all(I.map(be=>{let ee=new oi,Ne=new vt(K.geometry,be);return Ne.frustumCulled=!1,ee.add(Ne),r.compileAsync(ee,z)}));await Promise.race([F,new Promise(be=>setTimeout(be,4e4))])}}catch{}tt&&!o&&(we=requestAnimationFrame(ou))})()},150),tt.stopLoop=()=>cancelAnimationFrame(we)},seek(n){tt&&tt.seek(n)},warm(){if(!(tt||Un._w)){Un._w=!0;try{let n=$f({key:"warm",desc:"",title:"w",eyebrow:""}),e=document.createElement("canvas");e.width=e.height=8;let t=new ai({canvas:e,antialias:!1}),i={uRes:{value:new ke(8,8)},uLook:{value:new ke},uT:{value:5},uDist:{value:0},uPos:{value:new ke},uHead:{value:0},uAlt:{value:0},uSun:{value:new N(...n.sun)}};for(let a in n.c)a!=="speed"&&(i[a]={value:n.c[a]});for(let a in n.col)i[a]={value:n.col[a]};let s=new oi,r=new Yi(-1,1,1,-1,0,1),o=new ft({vertexShader:Gc,fragmentShader:Vo,uniforms:i,depthTest:!1});s.add(new vt(new ar(2,2),o)),t.render(s,r),t.getContext().finish(),o.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss()}catch{}}},close(){if(!tt)return;let n=tt;tt=null,n.ld&&n.ld.remove(),clearTimeout(n.pz),clearTimeout(n.quiet),n.flashStop&&n.flashStop(),n.el.classList.remove("on"),ve.pause(!1),n.audio&&n.audio.stop(),Qf(!!window.__hush),removeEventListener("keydown",n.onKey),removeEventListener("keyup",n.onUp),removeEventListener("resize",n.size),setTimeout(()=>{n.stopLoop();try{n.kill(),n.rdr.dispose(),n.mat.dispose(),n.mTaa&&n.mTaa.dispose()}catch{}n.el.remove()},1700)}};var ed=n=>{try{parent.postMessage({qulDuck:n},"*")}catch{}},ha=null;function qx(){if(window.__hush)return null;let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;let e=new n,t=e.createGain(),i=e.createGain(),s=e.createGain();t.gain.value=1,i.gain.value=0,s.gain.value=0,t.connect(s),i.connect(s),s.connect(e.destination);let r=(_,m,d,M="sine")=>{let x=e.createOscillator(),w=e.createGain();return x.type=M,x.frequency.value=m,w.gain.value=d,x.connect(w),w.connect(_),x.start(),{o:x,gn:w}},o=(_,m,d)=>{let M=e.createOscillator(),x=e.createGain();M.frequency.value=m,x.gain.value=d,M.connect(x),x.connect(_),M.start()},a=e.sampleRate*3,l=e.createBuffer(1,a,e.sampleRate),u=l.getChannelData(0);for(let _=0;_<a;_++)u[_]=Math.random()*2-1;let c=(_,m,d)=>{let M=e.createBufferSource();M.buffer=l,M.loop=!0;let x=e.createBiquadFilter(),w=e.createGain();x.type="bandpass",x.frequency.value=m,x.Q.value=.6,w.gain.value=d,M.connect(x),x.connect(w),w.connect(_),M.start(),o(x.frequency,.05,m*.3),o(w.gain,.07,d*.6)},f=r(t,41.2,.14),h=r(t,43.1,.1),p=r(t,82.4,.04,"triangle");o(f.gn.gain,.04,.05),o(p.gn.gain,.07,.02),c(t,320,.22),[[110,.07],[164.8,.05],[220,.04],[329.6,.025],[493.9,.012]].forEach(([_,m],d)=>{let M=r(i,_,m,d>2?"sine":"triangle");o(M.gn.gain,.03+d*.011,m*.5)});let v=r(i,1318.5,.004);return o(v.gn.gain,.17,.004),c(i,900,.05),s.gain.linearRampToValueAtTime(.5,e.currentTime+4),{to(_){let m=e.currentTime;t.gain.cancelScheduledValues(m),i.gain.cancelScheduledValues(m),t.gain.setValueAtTime(t.gain.value,m),i.gain.setValueAtTime(i.gain.value,m),t.gain.linearRampToValueAtTime(_?0:1,m+3.5),i.gain.linearRampToValueAtTime(_?1:0,m+3.5)},stop(){try{s.gain.cancelScheduledValues(e.currentTime),s.gain.setValueAtTime(s.gain.value,e.currentTime),s.gain.linearRampToValueAtTime(0,e.currentTime+1.4)}catch{}setTimeout(()=>{try{e.close()}catch{}},1700)}}}var fa=[{id:"araf",img:"img/esik-araf.jpg",gate:[.49,.47],title:"esik.a.t",lines:["esik.a.1"],origin:"50% 55%"},{id:"cherqa",img:"img/esik-cherqa.jpg",gate:[.5,.4],title:"esik.c.t",lines:["esik.c.1","esik.c.2","esik.c.3","esik.c.4"],origin:"50% 45%"}],Go={open(){if(ha)return;let n=document.createElement("div");n.id="esik",n.innerHTML=fa.map(K=>'<div class="es" data-s="'+K.id+'"><div class="far" style="background-image:url('+K.img+')"></div><div class="near" style="background-image:url('+K.img+')"></div></div>').join("")+'<canvas class="em"></canvas><div class="ev"></div><div class="ef"></div><div class="et"><small></small><h2></h2><p></p></div><div class="en">'+D("esik.note")+'</div><button class="ex">'+D("esik.close")+'</button><button class="eg"></button>',document.body.appendChild(n);let e={};n.querySelectorAll(".es").forEach(K=>{e[K.dataset.s]=K});let t=n.querySelector("canvas"),i=t.getContext("2d"),s=n.querySelector(".et"),r=n.querySelector(".ef"),o=n.querySelector(".eg"),a=0,l=0,u=0,c=0,f=0,h=0,p=performance.now(),v=p,_=!1,m=[],d=0,M=0,x=0,w=qx(),C=()=>{M=t.width=innerWidth,x=t.height=innerHeight};C();let y=Array.from({length:70},()=>({x:Math.random(),y:Math.random(),z:.2+Math.random()*.8,v:.01+Math.random()*.03,ph:Math.random()*6.28})),S=(K,O)=>{let k=setTimeout(K,O);return m.push(k),k},A=()=>{m.forEach(clearTimeout),m=[]},g=K=>{a=K;let O=fa[K];n.dataset.cur=O.id,s.classList.remove("on"),S(()=>{s.querySelector("small").textContent=D("esik.eyebrow"),s.querySelector("h2").textContent=D(O.title);let k=s.querySelector("p");k.innerHTML="",s.classList.add("on"),O.lines.forEach((H,G)=>{let Z=document.createElement("span");Z.textContent=D(H),k.appendChild(Z),S(()=>Z.classList.add("on"),1800+G*4200)}),S(()=>{o.textContent=D(K?"esik.back":"esik.cross"),o.classList.add("on")},3e3+O.lines.length*2200)},1400),o.classList.remove("on")};o.onclick=()=>{if(_)return;_=!0,o.classList.remove("on"),s.classList.remove("on");let K=a?0:1;A(),n.classList.add("cross"),w&&w.to(K===1),S(()=>{r.style.opacity=1},2600),S(()=>{e[fa[a].id].classList.remove("on"),e[fa[K].id].classList.add("on"),d=0},3500),S(()=>{r.style.opacity=0,n.classList.remove("cross"),_=!1,g(K)},3700)},e.araf.classList.add("on");let b=K=>{let O=K.touches?K.touches[0]:K;l=O.clientX/innerWidth*2-1,u=O.clientY/innerHeight*2-1},R=K=>{K.key==="Escape"&&Go.close()};addEventListener("mousemove",b),addEventListener("touchmove",b,{passive:!0}),addEventListener("keydown",R),addEventListener("resize",C),n.querySelector(".ex").onclick=()=>Go.close();let z=K=>{h=requestAnimationFrame(z);let O=Math.min(.1,(K-v)/1e3),k=(K-p)/1e3;v=K,c+=(l-c)*(1-Math.exp(-O*2.2)),f+=(u-f)*(1-Math.exp(-O*2.2)),_&&(d=Math.min(1,d+O/2.8));let H=fa[a],G=e[H.id],Z=d*d*(3-2*d),Y=1.04+Math.min(k*.0012,.06),ae=G.querySelector(".far"),oe=G.querySelector(".near"),Se=Y+Z*5.2,te=Y*1.06+Z*7.5,de=H.gate[0]*100+"% "+H.gate[1]*100+"%";ae.style.transformOrigin=oe.style.transformOrigin=Z>0?de:H.origin,ae.style.transform="translate("+-c*1.1+"%,"+-f*.8+"%) scale("+Se+")",oe.style.transform="translate("+-c*2.6+"%,"+-f*1.6+"%) scale("+te+")",i.clearRect(0,0,M,x);let q=a?"255,214,140":"230,200,150";for(let X of y){X.y-=X.v*O*(a?1:.5),X.x+=Math.sin(k*.3+X.ph)*4e-4,X.y<-.05&&(X.y=1.05,X.x=Math.random());let W=(X.x-c*.03*X.z)*M,$=X.y*x,Q=(1+X.z*2.4)*(x/900),le=(.18+.5*X.z)*(.6+.4*Math.sin(k*1.3+X.ph))*(1-Z*.7),Ae=i.createRadialGradient(W,$,0,W,$,Q*3);Ae.addColorStop(0,"rgba("+q+","+le+")"),Ae.addColorStop(1,"rgba("+q+",0)"),i.fillStyle=Ae,i.fillRect(W-Q*3,$-Q*3,Q*6,Q*6)}};ha={el:n,audio:w,raf:0,cleanup(){A(),cancelAnimationFrame(h),removeEventListener("mousemove",b),removeEventListener("touchmove",b),removeEventListener("keydown",R),removeEventListener("resize",C)}},ed(!0),ve.pause(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.add("on"),g(0),h=requestAnimationFrame(z)}))},close(){if(!ha)return;let n=ha;ha=null,n.cleanup(),n.el.classList.remove("on"),ve.pause(!1),n.audio&&n.audio.stop(),ed(!!window.__hush),setTimeout(()=>n.el.remove(),1700)}};var St=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),qc={open(n,e){let t={};try{t=JSON.parse(localStorage.getItem("qlog")||"{}")||{}}catch{}let i=Object.keys(t).filter(h=>n[h]).sort((h,p)=>(t[p].last||0)-(t[h].last||0)),s=Object.keys(n).length,r=i.reduce((h,p)=>h+(t[p].f||[]).length,0),o=i.reduce((h,p)=>h+(t[p].ph||0),0),a=[];try{a=JSON.parse(localStorage.getItem("qgal")||"[]")||[]}catch{}let l=document.createElement("div");l.id="defter",l.innerHTML='<div class="db"><button class="dx">\u2715</button><small>'+St(D("log.eyebrow"))+"</small><h2>"+St(D("log.title"))+'</h2><div class="did">'+(_n.get()?"<span>"+St(_n.label())+"</span>":"<span>"+St(D("id.none"))+"</span>")+'<button class="dk">'+St(D(_n.get()?"id.edit":"id.create"))+"</button>"+(_n.get()?'<button class="dc">'+St(D("id.card"))+"</button>":"")+'</div><div class="ds"><b>'+i.length+"</b> / "+s+" "+St(D("log.worlds"))+" \xB7 <b>"+r+"</b> "+St(D("log.traces"))+" \xB7 <b>"+o+"</b> "+St(D("log.photos"))+"</div>"+(i.length?"<ol>"+i.map(h=>{let p=t[h];return'<li data-k="'+St(h)+'"><span>'+St(n[h].title)+"</span><i>"+St(D("log.row",{v:p.v||1,f:(p.f||[]).length,p:p.ph||0}))+"</i></li>"}).join("")+"</ol>":"<p>"+St(D("log.empty"))+"</p>")+((window.__qulTop||[]).length?"<h3>"+St(D("log.community"))+'</h3><ol class="dt">'+window.__qulTop.filter(h=>n[h[0]]).map(h=>'<li data-k="'+St(h[0])+'"><span>'+St(n[h[0]].title)+"</span><i>"+St(D("log.found",{n:h[1]}))+"</i></li>").join("")+"</ol>":"")+(a.length?"<h3>"+St(D("log.gallery"))+'</h3><div class="dg">'+a.map((h,p)=>'<figure data-i="'+p+'"><img src="'+h.i+'" alt="'+St(h.t)+'" loading="lazy"><figcaption>'+St(h.t)+"</figcaption></figure>").join("")+"</div>":"")+(dn.on()?"<h3>"+St(D("let.write"))+'</h3><form class="dl"><label>'+St(D("let.world"))+'<select name="k">'+Object.values(n).filter(h=>!["eirahoutmoss","araf-cherqa"].includes(h.key)).sort((h,p)=>h.title.localeCompare(p.title,"tr")).map(h=>'<option value="'+St(h.key)+'">'+St(h.title)+"</option>").join("")+"</select></label><label>"+St(D("let.text"))+'<textarea name="m" maxlength="900" minlength="20" required></textarea></label><p class="dn">'+St(D("let.note"))+'</p><button type="submit">'+St(D("let.send"))+'</button><span class="ds2" role="status"></span></form>':"")+"</div>",document.body.appendChild(l),l.querySelectorAll("figure").forEach(h=>h.onclick=()=>{let p=a[+h.dataset.i],v=document.createElement("div");v.className="dlb",v.innerHTML='<img src="'+p.i+'" alt=""><p>'+St(p.t)+" \xB7 "+new Date(p.d).toLocaleDateString()+"</p>",v.onclick=()=>v.remove(),l.appendChild(v)}),requestAnimationFrame(()=>l.classList.add("on"));let u=()=>{l.classList.remove("on"),setTimeout(()=>l.remove(),500)};l.querySelector(".dx").onclick=u;let c=l.querySelector("form.dl");c&&(c.onsubmit=async h=>{h.preventDefault();let p=_n.get(),v=c.querySelector(".ds2");v.textContent="\u2026";let _=await dn.sendLetter(c.k.value,c.m.value,p&&p.n||"").catch(()=>null);v.textContent=_&&_.tamam?D("let.ok"):D("let.err"),_&&_.tamam&&(c.m.value="")}),l.querySelector(".dk").onclick=()=>{u(),_n.edit((window.QUL||{}).galaxies||[],()=>qc.open(n,e))};let f=l.querySelector(".dc");f&&(f.onclick=()=>_n.card()),l.onclick=h=>{h.target===l&&u()},l.querySelectorAll("li").forEach(h=>h.onclick=()=>{u(),e(h.dataset.k)})}};var Xc=[{k:"now",glow:n=>n.id==="home"?1.5:.45,label:n=>n.id==="home"?1:0},{k:"itf",glow:n=>n.id==="home"||n.id==="itf"?1.5:.45,label:n=>n.id==="home"||n.id==="itf"?1:0},{k:"conf",glow:()=>1,label:()=>1}],td=2,nd={init(n){let e=document.createElement("div");e.id="zaman",e.setAttribute("role","radiogroup"),e.setAttribute("aria-label",D("era.label")),e.innerHTML="<small>"+D("era.label")+'</small><div class="zt">'+Xc.map((i,s)=>'<button role="radio" data-i="'+s+'"><b>'+D("era."+i.k+".y")+"</b><span>"+D("era."+i.k+".n")+"</span></button>").join("")+"</div>",document.body.appendChild(e);let t=(i,s)=>{td=i;let r=Xc[i];ve.setEra(r.glow,r.label),e.querySelectorAll("button").forEach((o,a)=>{o.classList.toggle("on",a===i),o.setAttribute("aria-checked",a===i?"true":"false")}),document.body.dataset.era=r.k,!s&&n&&n(D("era."+r.k+".n"),D("era."+r.k+".d"))};e.querySelectorAll("button").forEach(i=>i.onclick=()=>t(+i.dataset.i)),t(2,!0)},era(){return Xc[td].k}};var ld=Hd(ad());var od=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Wo=n=>new Promise(e=>setTimeout(e,n)),cd={on:!1,start({planets:n,Interaction:e,Surface:t,UI:i,stopAll:s}){if(this.on)return;this.on=!0,document.body.classList.add("sergi");let r=location.origin+location.pathname.replace(/galaksi\/index\.html$/,"");try{top!==self&&top.location.origin===location.origin&&(r=top.location.origin+top.location.pathname)}catch{}r=r.replace(/index\.html$/,"");let o=(0,ld.default)(0,"M");o.addData(r),o.make();let a=document.createElement("div");a.id="sergi",a.innerHTML='<div class="sq">'+o.createSvgTag({cellSize:4,margin:2,scalable:!0})+"<span>"+od(D("sergi.scan"))+'</span></div><div class="sc"><small></small><h2></h2><p></p></div><button class="sr">'+od(D("sergi.resume"))+"</button>",document.body.appendChild(a);let l=(m,d,M)=>{let x=a.querySelector(".sc");x.classList.remove("on"),setTimeout(()=>{x.querySelector("small").textContent=m||"",x.querySelector("h2").textContent=d||"",x.querySelector("p").textContent=M||"",x.classList.add("on")},600)},u=n.filter(m=>!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(m.key)&&m.kind!=="esik"),c=!1,f=0,h=0,p=()=>{this.on&&(c=!0,a.classList.add("paused"),document.body.classList.add("sergip"),clearTimeout(f),f=setTimeout(v,9e4))},v=()=>{c=!1,a.classList.remove("paused"),document.body.classList.remove("sergip"),_(++h)};a.querySelector(".sr").onclick=m=>{m.stopPropagation(),v()},["pointerdown","keydown","wheel"].forEach(m=>addEventListener(m,d=>{if(!(d.target&&d.target.closest&&d.target.closest("#sergi .sr"))&&!c){p(),h++;try{t.close()}catch{}}},{capture:!0,passive:!0}));let _=async m=>{for(;this.on&&!c&&m===h;){let d=u[Math.floor(Math.random()*u.length)];if(s(),i.closePanel(),e.flyToPlanet(d.key),await Wo(600),await e.whenIdle(),c||m!==h||(l(d.eyebrow,d.title,String(d.desc||"").split(/(?<=[.!?])\s/)[0]),await Wo(7e3),c||m!==h)||(i.closePanel(),t.open(d),await Wo(3e4),c||m!==h))return;t.close(),await Wo(2200)}};setTimeout(()=>_(h),1500)}};var ns=n=>String(n||"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ud=()=>{try{return JSON.parse(localStorage.getItem("qmeclis")||"{}")||{}}catch{return{}}},Yc={has(){return(window.QUL_MECLIS||[]).length>0},async open(){let n=window.QUL_MECLIS||[];if(!n.length)return;let e=0,t=dn.on()?await dn.results():{},i=document.createElement("div");i.id="meclis",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("on"));let s=()=>{i.classList.remove("on"),setTimeout(()=>i.remove(),400)},r=()=>{let o=n[e],a=ud()[o.id],l=t[o.id]||[],u=l.reduce((h,p)=>h+p,0);i.innerHTML='<div class="mb"><button class="mx" aria-label="'+ns(D("id.close"))+'">\u2715</button><small>'+ns(D("mec.eyebrow"))+" \xB7 "+(e+1)+"/"+n.length+"</small><h2>"+ns(o.baslik)+'</h2><p class="mg">'+ns(o.baglam)+'</p><p class="mq">'+ns(o.soru)+'</p><div class="mo">'+o.secenekler.map((h,p)=>'<button data-j="'+p+'" class="'+(a===p?"on":"")+'"'+(a!=null?" disabled":"")+"><span>"+ns(h)+"</span>"+(a!=null&&u?'<i style="width:'+Math.round(100*(l[p]||0)/u)+'%"></i><b>%'+Math.round(100*(l[p]||0)/u)+"</b>":"")+"</button>").join("")+'</div><p class="mn">'+ns(a!=null?u?D("mec.total",{n:u}):D("mec.thanks"):D("mec.anon"))+'</p><div class="mr">'+(e>0?'<button class="mp">\u2039</button>':"")+(e<n.length-1?'<button class="mnx">'+ns(D("mec.next"))+" \u203A</button>":"")+"</div></div>",i.querySelector(".mx").onclick=s;let c=i.querySelector(".mp"),f=i.querySelector(".mnx");c&&(c.onclick=()=>{e--,r()}),f&&(f.onclick=()=>{e++,r()}),i.querySelectorAll(".mo button").forEach(h=>h.onclick=async()=>{let p=+h.dataset.j,v=ud();v[o.id]=p;try{localStorage.setItem("qmeclis",JSON.stringify(v))}catch{}if(dn.on()){let _=await dn.vote(o.id,p).catch(()=>null);_&&_.sonuc&&(t[o.id]=_.sonuc)}r()})};i.addEventListener("keydown",o=>{o.key==="Escape"&&s()}),r()}};var hd={1:[1,.62,.3],2:[.45,.65,1],3:[.4,1,.55]},fd={init(n,e){let t={},i={1:0,2:0,3:0},s={1:0,2:0,3:0};n.planets.forEach(l=>{let u=((l.card||{}).aksiyom||"").match(/Aksiyom (\d)/);if(!u)return;let c=+u[1];(t[l.gal]=t[l.gal]||{1:0,2:0,3:0})[c]++,i[c]++,(l.card||{}).tahmini&&s[c]++});let r=l=>{let u=t[l];return u?[1,2,3].sort((c,f)=>u[f]-u[c])[0]:0},o=!1,a=document.createElement("div");a.id="akl",a.setAttribute("aria-live","polite"),a.innerHTML="<small>"+D("aks.title")+"</small>"+[1,2,3].map(l=>'<div><i style="background:rgb('+hd[l].map(u=>Math.round(u*255)).join(",")+')"></i><b>'+D("aks."+l)+"</b><span>"+D("aks.count",{n:i[l],e:s[l]})+"</span></div>").join("")+"<p>"+D("aks.note")+"</p>",document.body.appendChild(a),e.textContent=D("aks.btn"),e.onclick=()=>{o=!o,a.classList.toggle("on",o),e.classList.toggle("on",o),ve.setTint(o?l=>{let u=r(l.id);return u?hd[u]:l.bg?null:[.3,.3,.35]}:null)}}};var dd=document.documentElement.style,Xx=n=>new Promise(e=>setTimeout(e,n)),da=0,pa=[];function qo(){pa.forEach(n=>ve.removeObj(n)),pa=[],ve.setFov(50),dd.setProperty("--bar","0vh")}var Kc={stop(){da&&(da++,qo())},async start(){let n=++da,e=()=>n===da;if(pt(),qo(),ze.flyToPlanet("dunya"),await ze.whenIdle(),!e()||(pt(),yt(D("pair.1h"),D("pair.1s")),await Xx(9e3),!e()))return;let t=ve.planetWorld("dunya"),i=ve.planetWorld("eirahoutmoss"),s=t.clone().add(i).multiplyScalar(.5),r=t.distanceTo(i),o=ve.getCamera(),a=new N(0,1,0),l=x=>{let w=[];for(let C=0;C<=80;C++){let y=C/80,S=Math.sin(Math.PI*y)*r*.22*x;w.push(new N().lerpVectors(t,i,y).add(new N(0,S,0)))}return w},u=[l(1),l(-1)],c=u.map(x=>{let w=new ys(new It().setFromPoints(x),new Ci({color:12099839,transparent:!0,opacity:0,blending:Ct,depthWrite:!1}));return ve.addObj(w),pa.push(w),w}),f=[t,i].map(x=>{let w=ve.makeLight();return w.position.copy(x),w.scale.set(r*.09,r*.09,1),pa.push(w),w}),h=[];[0,1].forEach(x=>[0,.5].forEach(w=>[0,1].forEach(C=>{let y=ve.makeLight();y.scale.set(r*.035,r*.035,1),y.material.color.set(C?12099839:8376831),pa.push(y),h.push({s:y,ci:x,o:w,dir:C})})));let p=o.position.clone(),v=ze.target().clone(),_=s.clone().add(new N(0,r*.3,r*.95)),m=0,d=0,M=0;dd.setProperty("--bar","7vh"),ze.drive(x=>{M+=x,m=Math.min(1,m+x/16);let w=ui(m);o.position.lerpVectors(p,_,w),ze.target().lerpVectors(v,s,w),ve.setFov(50+6*Math.sin(Math.PI*w));let C=Math.min(1,m*2.2);if(c.forEach(y=>y.material.opacity=.55*C),f.forEach((y,S)=>y.material.opacity=.9*C),h.forEach(y=>{let S=(M*.06+y.o)%1,A=u[y.ci],g=(y.dir?1-S:S)*80,b=Math.min(79,Math.floor(g));y.s.position.lerpVectors(A[b],A[b+1],g-b),y.s.material.opacity=C*Math.sin(Math.PI*S)}),d<1&&m>.35&&(d=1,yt(D("pair.2h"),D("pair.2s"))),m>=1&&((!d||d<2)&&(d=2),M>27))return!1},async()=>{if(!e()){qo();return}da=0,qo(),ze.flyToPlanet("eirahoutmoss"),await ze.whenIdle(),yt(D("pair.3h"),D("pair.3s"))})}};var pd=[["Ate\u015F Denizi",9,15],["Co\u015Fkun Deniz",17,35],["Yealem Krall\u0131\u011F\u0131",34,49.5],["Kisura",34.5,62],["Nehi \xC7\xF6lleri",26,71],["Ebed Denizi",60,43],["G\xFCm\xFC\u015F Deniz",89,37],["Ann Da\u011F\u0131 / Pla Tepesi",61,65],["Malu \xC7\xF6lleri",49,68],["Hpohri",55,73.5],["Sessizlik Orman\u0131",64,78],["Luya Kay\u0131p \u015Eehir",54,87]],zt=null,$n=1,is=0,ss=0;function Xo(){let n=zt.querySelector(".mw");n.style.transform=`translate(${is}px,${ss}px) scale(${$n})`,n.style.setProperty("--z",$n)}function Yx(){zt=document.createElement("div"),zt.id="emap",zt.innerHTML='<div class="mw"><img src="img/eirahoutmoss.jpg" alt="" draggable="false">'+pd.map((t,i)=>`<i class="hs" data-i="${i}" style="left:${t[1]}%;top:${t[2]}%"></i>`).join("")+'</div><div class="mi"><b></b><span></span><button></button></div><div class="mh"></div><button class="mx"></button>',document.body.appendChild(zt),zt.querySelector(".mx").onclick=md,zt.querySelector(".mh").textContent=D("map.hint"),zt.querySelector(".mx").textContent=D("map.close");let n=null,e=0;zt.addEventListener("pointerdown",t=>{n=[t.clientX,t.clientY,is,ss],e=0}),addEventListener("pointermove",t=>{!n||!zt.classList.contains("on")||(e=Math.hypot(t.clientX-n[0],t.clientY-n[1]),is=n[2]+t.clientX-n[0],ss=n[3]+t.clientY-n[1],Xo())}),addEventListener("pointerup",()=>{n=null}),zt.addEventListener("wheel",t=>{t.preventDefault();let i=t.deltaY<0?1.18:1/1.18,s=Math.min(8,Math.max(1,$n*i)),r=zt.getBoundingClientRect(),o=t.clientX-r.width/2,a=t.clientY-r.height/2;is=o-(o-is)*s/$n,ss=a-(a-ss)*s/$n,$n=s,$n===1&&(is=0,ss=0),Xo()},{passive:!1}),zt.querySelectorAll(".hs").forEach(t=>t.addEventListener("click",i=>{e>5||(i.stopPropagation(),Kx(+t.dataset.i))}))}function Kx(n){let e=pd[n],t=zt.querySelector(".mi"),i=zt.getBoundingClientRect(),s=zt.querySelector(".mw"),r=s.offsetWidth,o=s.offsetHeight;$n=2.6,is=-((e[1]/100-.5)*r)*$n,ss=-((e[2]/100-.5)*o)*$n,Xo(),t.querySelector("b").textContent=e[0];let a=t.querySelector("span"),l=t.querySelector("button");e[0]==="Kisura"?(a.textContent=D("map.kis"),l.style.display="inline-block",l.textContent=D("map.enter"),l.onclick=()=>{md(),hi.kisura()}):(a.textContent=D("map.unwritten"),l.style.display="none"),t.classList.add("on")}function md(){zt&&(zt.classList.remove("on"),zt.querySelector(".mi").classList.remove("on"))}var gd={open(){zt||Yx(),$n=1,is=0,ss=0,Xo(),zt.classList.add("on")}};var yd=document.documentElement.style,ma=0;function vd(){ve.setGray(0),ve.setTimeK(1),ve.setWarp(0),ve.setFov(50),yd.setProperty("--bar","0vh")}var Zc={stop(){ma&&(ma++,vd())},start(){let n=++ma;pt();let e=ve.getCamera(),t=ve.galaxy("esik").outer.position.clone(),i=ve.galaxy("eira").outer.position.clone(),s=i.clone().sub(t).normalize(),r=e.position.clone(),o=t.clone().add(new N(0,40,0)),a=i.clone().addScaledVector(s,-ve.galaxy("eira").g.R*2.4).add(new N(0,300,0)),l=0,u=0,c=!1,f=!1;yd.setProperty("--bar","7vh"),ze.drive(h=>{l=Math.min(1,l+h/46);let p=ui(l),v=1-p;e.position.set(v*v*r.x+2*v*p*o.x+p*p*a.x,v*v*r.y+2*v*p*o.y+p*p*a.y,v*v*r.z+2*v*p*o.z+p*p*a.z),ze.target().lerpVectors(t,i,Zr.smoothstep(p,.45,.9));let _=e.position.distanceTo(t),m=1-Zr.smoothstep(_,900,2600);if(_<300&&(c=!0),ve.setGray(m),ve.setTimeK(Math.max(0,1-m*1.05)),ve.setWarp(.1*(1-m)),u<1&&m>.3&&(u=1,yt(D("th.1h"),D("th.1s"))),u<2&&_<420&&(u=2,yt(D("th.2h"),D("th.2s"))),c&&!f&&m<.45){f=!0;let d=document.getElementById("flash");d.classList.remove("on"),d.offsetWidth,d.classList.add("on")}if(c&&u<3&&m<.25&&(u=3,yt(D("th.3h"),D("th.3s"))),l>=1)return!1},()=>{vd(),n===ma&&(ma=0,ze.focusGalaxy("eira"))})}};var xd=document.documentElement.style,Zx=n=>new Promise(e=>setTimeout(e,n)),ga=0;function jc(){ve.setWarp(0),ve.setFov(50),xd.setProperty("--bar","0vh")}var Yo={stop(){ga&&(ga++,hi.close(),jc())},async start(){let n=++ga,e=()=>n===ga;if(pt(),ze.focusGalaxy("eira"),await ze.whenIdle(),!e()||(ze.flyToPlanet("eirahoutmoss"),await ze.whenIdle(),!e())||(await Zx(1200),!e())||(await hi.kisura({auto:!0}),!e()))return;let t=ve.getCamera(),i=ve.planetWorld("eirahoutmoss"),s=t.position.clone().sub(i),r=s.length(),o=24e3,a=s.clone().normalize(),l=new N(2600,0,0),u=i.clone(),c=new N(0,1,0),f=0,h=1;pt(),xd.setProperty("--bar","7vh"),ve.setWarp(.16),yt(D("scale.2h"),D("scale.2s")),ze.drive(p=>{f=Math.min(1,f+p/50);let v=ui(f),_=r*Math.pow(o/r,v),m=a.clone().applyAxisAngle(c,v*.9);if(t.position.copy(i).addScaledVector(m,_),ze.target().lerpVectors(u,l,Math.pow(v,2.2)),ve.setFov(50+8*Math.sin(Math.PI*v)),h<2&&_>1200&&(h=2,yt(D("scale.3h"),D("scale.3s"))),h<3&&_>6e3&&(h=3,yt(D("scale.4h"),D("scale.4s"))),h<4&&_>16e3&&(h=4,yt(D("scale.5h"),D("scale.5s"))),f>=1)return!1},()=>{if(!e()){jc();return}jc(),ga=0,ze.reset()})}};var bd=document.documentElement.style;function _d(){ve.setFall(0),ve.setSpin(1),ve.setFov(50),bd.setProperty("--bar","0vh")}function Md(n){let e=ve.galaxy(n);if(!e||!e.bh)return;let t=e.outer.position.clone(),i=e.bh.rh,s=ve.getCamera(),r=s.position.clone().sub(t),o=Math.max(r.length(),i*15),a=Math.atan2(r.z,r.x),l=0,u=!1,c=0;pt(),yt(D("fall.1h"),D("fall.1s")),ze.drive(f=>{l=Math.min(1,l+f/34);let h=Math.pow(l,1.5),p=i*(1.22+(o/i-1.22)*Math.pow(1-h,2.3)),v=a+h*11;if(s.position.set(t.x+Math.cos(v)*p,t.y+p*.2*(1-h)+i*.04,t.z+Math.sin(v)*p),ze.target().copy(t),ve.setFall(Math.pow(Math.max(0,(l-.4)/.6),1.3)),ve.setSpin(1+60*h*h*h),ve.setFov(50+26*h),bd.setProperty("--bar",(7*Math.min(1,l*8)).toFixed(2)+"vh"),c<1&&l>.26&&(c=1,yt(D("fall.2h"),D("fall.2s"))),c<2&&l>.52&&(c=2,yt(D("fall.3h"),D("fall.3s"))),c<3&&l>.8&&(c=3,yt(D("fall.4h"),D("fall.4s"))),l>=1)return u=!0,!1},()=>{if(!u){_d();return}ve.setFall(1),setTimeout(()=>yt(D("fall.5h"),D("fall.5s")),1500),setTimeout(()=>{let f=1,h=setInterval(()=>{f-=.02,ve.setFall(Math.max(0,f)),f<=0&&(clearInterval(h),_d(),ze.focusBH(n))},40)},12e3)})}function Sd(n){let e=ve.galaxy(n),t=ve.galaxy("home");if(!e||!t)return;let i=e.outer.position.clone(),s=t.outer.position.clone(),r=s.clone().sub(i).normalize(),o=i.distanceTo(s)*232.6,a=ve.makeLight();a.scale.set(220,220,1);let l=0,u=new N,c=ve.getCamera();pt(),yt(e.g.name,D("light.start",{y:ea(o)}));let f=!0;ze.drive(h=>{if(l=Math.min(1,l+h/18),u.lerpVectors(i,s,ui(l)),a.position.copy(u),c.position.copy(u).addScaledVector(r,-520).add(new N(0,150,0)),ze.target().copy(u).addScaledVector(r,400),f&&(f=!1,document.documentElement.style.setProperty("--bar","7vh"),ve.setFov(58)),l>=1)return yr(null),ve.removeObj(a),yt(D("light.endH"),D("light.endS")),!1},()=>{yr(null),ve.removeObj(a)})}function Ht(){ko.stop(),Yo.stop(),Zc.stop(),Kc.stop()}var En=window.QUL,rt=n=>document.getElementById(n);Af(En);var jx=n=>{let e=En.galaxies.find(i=>i.id==="home").pos,t=Math.hypot(n.pos[0]-e[0],n.pos[1]-e[1],n.pos[2]-e[2])*232.6;return t>=1e6?(t/1e6).toFixed(1).replace(".",",")+" "+D("dist.million"):ea(t)},Di={};En.planets.forEach(n=>Di[n.key]=n);var Jx=n=>{let e=En.bh[n];return{key:"bh-"+n,gal:n,bh:!0,title:e.title,eyebrow:e.eyebrow,desc:e.desc,card:{rows:e.rows.concat([["Galaksi",En.galaxies.find(t=>t.id===n).name]])}}},Ts=n=>{try{window.__crumb&&window.__crumb(n)}catch{}};Ts("veri haz\u0131r");Pc(En);Ts("aray\xFCz haz\u0131r");ve.init(rt("gl"),En);Ts("Render.init bitti");ze.init(ve.getRenderer(),ve.getCamera(),{titleOf:n=>Di[n].title,bhTitle:n=>En.bh[n].title,onUser:()=>Ht(),onFlight:yr,tip:Lc,onPlanet:n=>Io(Di[n]),onBH:n=>Io(Jx(n)),onGalaxy:n=>yt(n.name,n.id==="eira"?D("gal.eira"):n.id==="esik"?D("gal.esik"):n.bg?D("gal.unreg"):D("gal.count",{n:ve.planetsOf(n.id).length})+(n.id==="home"?"":" \xB7 "+D("gal.light",{y:jx(n)}))),onFocus:(n,e)=>{try{dn.where(n&&(n.id||n.key||n.name))}catch{}pt(),Ic(n,e,{planet:t=>ze.flyToPlanet(t),bh:t=>ze.focusBH(t),light:t=>{Ht(),Sd(t)}},Di,En.bh)}});rt("pc").onclick=pt;rt("back").onclick=()=>{Ht(),pt(),ze.reset()};document.addEventListener("pointerdown",n=>{n.target.id!=="tour"&&ko.stop(),n.target.id!=="drift"&&Dc.stop(),n.target.closest("#kis,#scl")||Yo.stop()});ko.init(rt("tour"),En);{let n=document.createElement("button");n.id="drift",document.body.appendChild(n),Dc.init(n,En)}rt("tour").textContent=D("ui.tour");rt("hush").textContent=D("ui.hush");rt("lang").title=D("ui.lang");var $x=Fc.ids.filter(n=>n.id!=="earth").map(n=>({t:"sol",id:n.id,label:Ln==="en"?n.en:n.tr,sub:"G\xFCne\u015F Sistemi",alias:n.tr+" "+n.en+(n.id==="sun"?" solar system gunes sistemi":"")}));async function Td(n){Ht(),pt();try{ze.focusGalaxy("home"),await ze.whenIdle()}catch{}Fc.open({focus:n})||vr&&vr(D("solar.fail"))}kc(En,n=>{if(n.t==="sol"){Td(n.id);return}Ht(),n.t==="planet"?ze.flyToPlanet(n.key):n.t==="bh"?ze.focusBH(n.id):ze.focusGalaxy(n.id)},$x);{let n=document.getElementById("sol0");n&&(n.textContent=D("solar.btn"),n.onclick=()=>Td("earth"))}var Jc=performance.now(),$c=0;(function n(e){let t=Math.min(.1,(e-Jc)/1e3);Jc=e;let i=performance.now();if(ze.update(t),ve.frame(e,t),$c<6){$c++;try{ve.getRenderer().getContext().finish()}catch{}Ts("kare "+$c+": "+Math.round(performance.now()-i)+" ms")}{let s=ve.fx();Bc.update(s.lens,s.warp,s.fall)}requestAnimationFrame(n)})(Jc);rt("load").classList.add("hide");var wd=0;[1,2,3].forEach(n=>{let e=D("intro."+n+".h"),t=D("intro."+n+".s");setTimeout(()=>yt(e,t),wd),wd+=ia(e,t)*1e3*.97});Ts("ses ba\u015Fl\u0131yor");Bc.init();Ts("ses haz\u0131r");ze.intro();Ts("a\xE7\u0131l\u0131\u015F ba\u015Flad\u0131");try{nd.init((n,e)=>yt(n,e)),_n.apply()}catch{}/[?&]sergi=1/.test(location.search)&&ze.whenIdle().then(()=>cd.start({planets:En.planets,Interaction:ze,Surface:Un,UI:di,stopAll:Ht}));{let n=new URLSearchParams(location.search),e=n.get("planet");e&&Di[e]&&ze.whenIdle().then(()=>{ze.flyToPlanet(e),n.get("yuzey")==="1"&&!["eirahoutmoss","araf-cherqa","event-horizon","concordia"].includes(e)&&setTimeout(()=>ze.whenIdle().then(()=>{Ht(),pt(),Un.open(Di[e])}),300)})}window.addEventListener("fall",n=>{Ht(),pt(),Md(n.detail)});window.addEventListener("land",n=>{Ht(),pt(),hi.land(n.detail)});window.addEventListener("kisura",()=>{Ht(),pt(),hi.kisura()});var Ed,Ad=()=>{document.body.classList.remove("idle"),clearTimeout(Ed),Ed=setTimeout(()=>document.body.classList.add("idle"),7e3)};["pointermove","pointerdown","keydown","wheel"].forEach(n=>addEventListener(n,Ad));Ad();var Qx=ve.getCamera(),e1=n=>n>=1e6?(n/1e6).toFixed(1).replace(".",",")+" "+D("dist.million"):ea(n);setInterval(()=>{ki&&(rt("carec").innerHTML=D("care.count",{n:ve.careCount()})+"<small>"+D("care.note")+"</small>");let n=Qx.position.distanceTo(ve.bhWorld("home"))*232.6;rt("dist").innerHTML=D("dist.label")+"<b>"+e1(n)+" "+D("dist.unit")+"</b><i>2,7 K</i>"},250);var ki=!1;rt("care").textContent=D("care.btn");rt("care").onclick=()=>{ki=!ki,rt("care").textContent=D(ki?"care.btnOn":"care.btn"),rt("carec").classList.toggle("on",ki),ve.setCare(ki),ki&&(Ht(),pt(),ze.reset(),yt(D("care.1h"),D("care.1s")))};rt("pair").textContent=D("pair.btn");rt("pair").onclick=()=>{Ht(),Kc.start()};window.__Surface=Un;window.__qul={Interaction:ze,Render:ve};window.addEventListener("esik",()=>{Ht(),pt(),Go.open()});var Rd=()=>{let n=document.getElementById("tani");if(n){n.remove();return}n=document.createElement("pre"),n.id="tani",n.style.cssText="position:fixed;left:8px;top:8px;z-index:99;max-width:92vw;max-height:80vh;overflow:auto;margin:0;padding:10px 12px;background:#000d;color:#9fe;font:11px/1.45 monospace;border:1px solid #365;white-space:pre-wrap;user-select:all",n.textContent=`QUL TANI
`+JSON.stringify(window.__qulGpu||{},null,1)+`
hata: `+JSON.stringify(window.__qulErr||[])+`
y\xFCzey: `+(window.__qulSurfFail||"-")+`
(kapatmak i\xE7in F9; bu metni bana g\xF6nder)`,document.body.appendChild(n)};addEventListener("keydown",n=>{n.key==="F9"&&(n.preventDefault(),Rd())});/[?&]tani=1/.test(location.search)&&setTimeout(Rd,2500);window.addEventListener("qulSurfaceFail",()=>{let n=document.getElementById("warp");n&&n.remove();try{ve.pause(!1)}catch{}vr(D("surf.fail"))});window.addEventListener("qulGo",n=>{let e=n.detail||{};if(e.warp){let t=document.createElement("div");t.id="warp",document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("on")),setTimeout(()=>t.classList.remove("on"),4200),setTimeout(()=>t.remove(),5200)}Un.close(),e.planet&&Di[e.planet]?setTimeout(()=>Un.open(Di[e.planet]),1900):e.gal&&setTimeout(()=>{try{ze.focusGalaxy(e.gal)}catch{}},400)});window.addEventListener("surface",n=>{Ht(),pt(),Un.open(n.detail)});window.addEventListener("emap",()=>{Ht(),pt(),gd.open()});rt("tt").textContent=D("tools.btn");rt("tt").onclick=()=>rt("tools").classList.toggle("open");rt("thr").textContent=D("th.btn");rt("thr").onclick=()=>{Ht(),Zc.start()};var va=!1,Qc=!1;rt("cmd").textContent=D("cmd.btn");rt("cmd").onclick=()=>{va=!va,Ht(),pt(),ve.setHolo(va?1:0),rt("cmd").textContent=D(va?"cmd.on":"cmd.btn"),va?(ze.view([2600,16500,1100],[2600,0,0]),yt(D("cmd.1h"),D("cmd.1s")),ki||(Qc=!0,rt("care").click())):(ze.reset(),Qc&&ki&&rt("care").click(),Qc=!1)};rt("snap").textContent=D("snap.btn");{let n=rt("mec");n&&(Yc.has()?(n.textContent=D("mec.btn"),n.onclick=()=>{Ht(),Yc.open()}):n.remove())}{let n=rt("aks");if(n)try{fd.init(En,n)}catch{}}rt("log").textContent=D("log.btn");rt("log").onclick=()=>{Ht(),qc.open(Di,n=>ze.flyToPlanet(n))};try{dn.start()}catch{}rt("snap").onclick=()=>{let n=new Image;n.onload=()=>{let e=n.width,t=n.height,i=Math.round(e/2.39),s=Math.round((t-i)/2),r=document.createElement("canvas");r.width=e,r.height=i;let o=r.getContext("2d");o.drawImage(n,0,s,e,i,0,0,e,i);let a=e/1600;o.fillStyle="rgba(0,0,0,.4)",o.fillRect(0,i-92*a,e,92*a),o.fillStyle="#e8b84b",o.font=26*a+"px Georgia, serif",o.fillText(D("snap.mark").toUpperCase().split("").join(" "),40*a,i-50*a),o.fillStyle="#d3c7a8",o.font=18*a+"px Georgia, serif",o.fillText((rt("where").textContent||D("ui.title"))+" \xB7 "+rt("dist").innerText.replace(/\n+/g," \xB7 "),40*a,i-18*a);let l=document.createElement("a");l.href=r.toDataURL("image/png"),l.download="qul-efsaneleri.png",l.click(),vr(D("snap.done"))},n.src=ve.snapshot()};rt("nar").textContent=D("nar.btn");na.ok||(rt("nar").style.display="none");rt("nar").onclick=()=>{rt("nar").textContent=D(na.toggle()?"nar.on":"nar.btn")};rt("scl").textContent=D("scale.btn");rt("scl").onclick=()=>{Ht(),Yo.start()};rt("hush").onclick=()=>{window.__hush=!window.__hush,rt("hush").textContent=D(window.__hush?"ui.hushOn":"ui.hush");try{parent.postMessage({qulDuck:!!window.__hush},"*")}catch{}};var ya=rt("lang");(window.QUL_LANGS||[{c:"tr",n:"T\xFCrk\xE7e"}]).forEach(n=>{let e=document.createElement("option");e.value=n.c,e.textContent=n.n,ya.appendChild(e)});ya.value=window.QUL_CODE||"tr";ya.onchange=()=>{try{localStorage.setItem("qlang",ya.value)}catch{}let n=new URL(location.href);n.searchParams.set("lang",ya.value),location.href=n.toString()};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
