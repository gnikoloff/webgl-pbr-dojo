var En=Object.defineProperty;var Pe=Object.getOwnPropertySymbols;var Tn=Object.prototype.hasOwnProperty,xn=Object.prototype.propertyIsEnumerable;var ae=(t,n,r)=>n in t?En(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,q=(t,n)=>{for(var r in n||(n={}))Tn.call(n,r)&&ae(t,r,n[r]);if(Pe)for(var r of Pe(n))xn.call(n,r)&&ae(t,r,n[r]);return t};var u=(t,n,r)=>(ae(t,typeof n!="symbol"?n+"":n,r),r),Fe=(t,n,r)=>{if(!n.has(t))throw TypeError("Cannot "+r)};var F=(t,n,r)=>(Fe(t,n,"read from private field"),r?r.call(t):n.get(t)),L=(t,n,r)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,r)},C=(t,n,r,i)=>(Fe(t,n,"write to private field"),i?i.call(t,r):n.set(t,r),r);import{c as Z,s as Xe,n as He,p as vn,o as gn,a as Se,b as nt,u as Rn,m as ke,d as Ve,i as Ge,t as Mn,f as mt,l as bn,e as oe,g as An,h as Un,r as wn,j as Pn,k as Fn,q as Sn,A as Nn,v as yn,T as In}from"./assets/vendor.06b00773.js";const Ln=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};Ln();function at(){var t=document.createElement("canvas"),n="t",r=1,i=2.2,o=null,s,l;return t.__defineGetter__("exposure",function(){return r}),t.__defineSetter__("exposure",function(c){r=c,o&&(lt(o,r,i,l.data),s.putImageData(l,0,0))}),t.__defineGetter__("gamma",function(){return i}),t.__defineSetter__("gamma",function(c){i=c,o&&(lt(o,r,i,l.data),s.putImageData(l,0,0))}),t.__defineGetter__("dataFloat",function(){return de(o)}),t.__defineGetter__("dataRGBE",function(){return o}),t.toHDRBlob=function(c,h,m){function d(b,U,P){var S=b.createShader(P);return b.shaderSource(S,U),b.compileShader(S),S}function p(b,U,P){var S=b.createProgram(),I,X;return b.attachShader(S,I=d(b,U,b.VERTEX_SHADER)),b.attachShader(S,X=d(b,P,b.FRAGMENT_SHADER)),b.linkProgram(S),b.deleteShader(I),b.deleteShader(X),S}var _=h&&h.match(/rgb9_e5/i)?new Uint8Array(je(de(o)).buffer):new Uint8Array(o.buffer),f=`precision highp float;
attribute vec3 position;
varying vec2 tex;
void main() { tex = position.xy/2.0+0.5; gl_Position = vec4(position, 1.0); }`,T=`precision highp float;
precision highp sampler2D;
uniform sampler2D tx;
varying vec2 tex;
void main() { gl_FragColor = texture2D(tx,tex); }`,x=this.width,R=this.height;if(x*R*4<_.byteLength)return console.error("not big enough.");var v=document.createElement("canvas");v.width=x,v.height=R;var E=v.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0}),N=E.createTexture();E.activeTexture(E.TEXTURE0),E.bindTexture(E.TEXTURE_2D,N),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,!0),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MAG_FILTER,E.NEAREST),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MIN_FILTER,E.NEAREST),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_S,E.CLAMP_TO_EDGE),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_T,E.CLAMP_TO_EDGE),E.texImage2D(E.TEXTURE_2D,0,E.RGBA,x,R,0,E.RGBA,E.UNSIGNED_BYTE,new Uint8Array(_.buffer));var w=p(E,f,T),g=E.getUniformLocation(w,"tx"),$=new Float32Array([-1,-1,0,1,-1,0,1,1,0,1,1,0,-1,1,0,-1,-1,0]),M=E.createBuffer();if(E.enableVertexAttribArray(0),E.bindBuffer(E.ARRAY_BUFFER,M),E.bufferData(E.ARRAY_BUFFER,$,E.STATIC_DRAW),E.vertexAttribPointer(0,3,E.FLOAT,!1,0,0),E.useProgram(w),E.uniform1i(g,0),E.drawArrays(E.TRIANGLES,0,6),E.deleteTexture(N),E.deleteProgram(w),c)return v.toBlob(c)},t.__defineGetter__("src",function(){return n}),t.__defineSetter__("src",function(c){if(n=c,s&&s.clearRect(0,0,this.width,this.height),c.match(/\.hdr$/i))Dn(c,function(m,d,p){o=m,this.width=this.style.width=d,this.height=this.style.height=p,s=this.getContext("2d"),l=s.getImageData(0,0,d,p),lt(m,r,i,l.data),s.putImageData(l,0,0),this.onload&&this.onload()}.bind(t));else if(c.match(/\.rgb9_e5\.png$/i)){var h=new Image;h.src=c,h.onload=function(){var m=document.createElement("canvas"),d=this.width=this.style.width=m.width=h.width,p=this.height=this.style.height=m.height=h.height,_=m.getContext("webgl"),f=_.createTexture();_.bindTexture(_.TEXTURE_2D,f),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,_.RGBA,_.UNSIGNED_BYTE,h),fb=_.createFramebuffer(),_.bindFramebuffer(_.FRAMEBUFFER,fb),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,f,0);var T=new Uint8Array(d*p*4);_.readPixels(0,0,d,p,_.RGBA,_.UNSIGNED_BYTE,T),_.deleteTexture(f),_.deleteFramebuffer(fb),this.dataRAW=new Uint32Array(T.buffer),o=ze(We(this.dataRAW)),s=this.getContext("2d"),l=s.getImageData(0,0,d,p),lt(o,r,i,l.data),s.putImageData(l,0,0),this.onload&&this.onload()}.bind(t)}else if(c.match(/\.hdr\.png$|\.rgbe\.png/i)){var h=new Image;h.src=c,h.onload=function(){var d=document.createElement("canvas"),p=this.width=this.style.width=d.width=h.width,_=this.height=this.style.height=d.height=h.height,f=d.getContext("webgl"),T=f.createTexture();f.bindTexture(f.TEXTURE_2D,T),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,f.RGBA,f.UNSIGNED_BYTE,h),fb=f.createFramebuffer(),f.bindFramebuffer(f.FRAMEBUFFER,fb),f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,T,0);var x=new Uint8Array(p*_*4);f.readPixels(0,0,p,_,f.RGBA,f.UNSIGNED_BYTE,x),f.deleteTexture(T),f.deleteFramebuffer(fb),o=x,s=this.getContext("2d"),l=s.getImageData(0,0,p,_),lt(o,r,i,l.data),s.putImageData(l,0,0),this.onload&&this.onload()}.bind(t)}}),t}function Cn(t,n){for(var r in n)t[r]=n[r];return t}function Dn(t,n){var r=Cn(new XMLHttpRequest,{responseType:"arraybuffer"});return r.onerror=n.bind(r,!1),r.onload=function(){if(this.status>=400)return this.onerror();for(var i="",o=0,s=new Uint8Array(this.response),l;!i.match(/\n\n[^\n]+\n/g);)i+=String.fromCharCode(s[o++]);if(l=i.match(/FORMAT=(.*)$/m)[1],l!="32-bit_rle_rgbe")return console.warn("unknown format : "+l),this.onerror();for(var c=i.split(/\n/).reverse()[1].split(" "),h=c[3]*1,m=c[1]*1,d=new Uint8Array(h*m*4),p=0,_=0;_<m;_++){var f=s.slice(o,o+=4),T=[];if(f[0]!=2||f[1]!=2||f[2]&128){var x=h,R=0;for(o-=4;x>0;)if(d.set(s.slice(o,o+=4),p),d[p]==1&&d[p+1]==1&&d[p+2]==1){for(d[p+3]<<R;v>0;v--)d.set(d.slice(p-4,p),p),p+=4,x--;R+=8}else x--,p+=4,R=0}else{if((f[2]<<8)+f[3]!=h)return console.warn("HDR line mismatch .."),this.onerror();for(var v=0;v<4;v++)for(var E=v*h,N=(v+1)*h,w,g;E<N;)if(w=s.slice(o,o+=2),w[0]>128)for(g=w[0]-128;g-- >0;)T[E++]=w[1];else for(g=w[0]-1,T[E++]=w[1];g-- >0;)T[E++]=s[o++];for(var v=0;v<h;v++)d[p++]=T[v],d[p++]=T[v+h],d[p++]=T[v+2*h],d[p++]=T[v+3*h]}}n&&n(d,h,m)},r.open("GET",t,!0),r.send(null),r}function je(t,m){for(var r,i,o,s,l,c,h=t.byteLength/12|0,m=m||new Uint32Array(h),d=0;d<h;d++)r=Math.min(32768,t[d*3]),i=Math.min(32768,t[d*3+1]),o=Math.min(32768,t[d*3+2]),s=Math.max(Math.max(r,i),o),l=Math.max(-16,Math.floor(Math.log2(s)))+16,c=Math.pow(2,l-24),Math.floor(s/c+.5)==511&&(c*=2,l+=1),m[d]=(Math.floor(r/c+.5)<<23)+(Math.floor(i/c+.5)<<14)+(Math.floor(o/c+.5)<<5)+(l|0);return m}function We(t,s){for(var r,i,o=t.byteLength>>2,s=s||new Float32Array(o*3),l=0;l<o;l++)r=t[l],i=Math.pow(2,(r&31)-24),s[l*3]=(r>>>23)*i,s[l*3+1]=(r>>>14&511)*i,s[l*3+2]=(r>>>5&511)*i;return s}function ze(t,h){for(var r,i,o,s,l,c=t.byteLength/12|0,h=h||new Uint8Array(c*4),m=0;m<c;m++)r=t[m*3],i=t[m*3+1],o=t[m*3+2],s=Math.max(Math.max(r,i),o),e=Math.ceil(Math.log2(s)),l=Math.pow(2,e-8),h[m*4]=r/l|0,h[m*4+1]=i/l|0,h[m*4+2]=o/l|0,h[m*4+3]=e+128;return h}function de(t,o){for(var r,i=t.byteLength>>2,o=o||new Float32Array(i*3),s=0;s<i;s++)r=Math.pow(2,t[s*4+3]-(128+8)),o[s*3]=t[s*4]*r,o[s*3+1]=t[s*4+1]*r,o[s*3+2]=t[s*4+2]*r;return o}function lt(t,n,r,c){n=Math.pow(2,n===void 0?1:n)/2,r===void 0&&(r=2.2);for(var o=1/r,s,l=t.byteLength>>2,c=c||new Uint8ClampedArray(l*4),h=0;h<l;h++)s=n*Math.pow(2,t[h*4+3]-(128+8)),c[h*4]=255*Math.pow(t[h*4]*s,o),c[h*4+1]=255*Math.pow(t[h*4+1]*s,o),c[h*4+2]=255*Math.pow(t[h*4+2]*s,o),c[h*4+3]=255;return c}function Bn(t,n,r,l){n=Math.pow(2,n===void 0?1:n)/2,r===void 0&&(r=2.2);for(var o=1/r,s=t.byteLength/12|0,l=l||new Uint8ClampedArray(s*4),c=0;c<s;c++)l[c*4]=255*Math.pow(t[c*3]*n,o),l[c*4+1]=255*Math.pow(t[c*3+1]*n,o),l[c*4+2]=255*Math.pow(t[c*3+2]*n,o),l[c*4+3]=255;return l}at.floatToRgbe=ze;at.rgbeToFloat=de;at.floatToRgb9_e5=je;at.rgb9_e5ToFloat=We;at.rgbeToLDR=lt;at.floatToLDR=Bn;var On=Object.defineProperty,Xn=(t,n,r)=>n in t?On(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,B=(t,n,r)=>(Xn(t,typeof n!="symbol"?n+"":n,r),r),Ye=(t,n,r)=>{if(!n.has(t))throw TypeError("Cannot "+r)},y=(t,n,r)=>(Ye(t,n,"read from private field"),r?r.call(t):n.get(t)),jt=(t,n,r)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,r)},Hn=(t,n,r,i)=>(Ye(t,n,"write to private field"),i?i.call(t,r):n.set(t,r),r),ie="-- DEFINES_HOOK --",kn=(t,n,r,i={})=>{if(Object.keys(i).length&&!r.includes(ie))throw new Error(`in order to include defines, you must provide "${ie}" in your shader code`);let o="";for(const[c,h]of Object.entries(i)){if(typeof h=="boolean"&&!h)continue;let m=`${h}`;typeof h=="number"&&Number.isInteger(h)&&(m+=".0"),o+=`#define ${c} ${m}
`}r=r.replace(ie,o);const s=t.createShader(n);if(t.shaderSource(s,r),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS))return s;const l=`
    Error in ${n===t.VERTEX_SHADER?"Vertex":"Fragment"} shader:
    ${t.getShaderInfoLog(s)}
  `;throw t.deleteShader(s),new Error(l)},Ne=kn,Vn=(t,n,r,i)=>{const o=Ne(t,t.VERTEX_SHADER,n,i),s=Ne(t,t.FRAGMENT_SHADER,r,i),l=t.createProgram();if(t.attachShader(l,o),t.attachShader(l,s),t.linkProgram(l),t.detachShader(l,o),t.deleteShader(o),t.detachShader(l,s),t.deleteShader(s),t.getProgramParameter(l,t.LINK_STATUS))return l;const c=new Error(`Error linking program: ${t.getProgramInfoLog(l)}`);throw t.deleteProgram(l),c},Gn=Vn,jn=(t,n,r,i)=>{const o=t.getUniformBlockIndex(n,r),s=t.getActiveUniformBlockParameter(n,o,t.UNIFORM_BLOCK_DATA_SIZE),l=t.getActiveUniformBlockParameter(n,o,t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),c=t.getActiveUniformBlockParameter(n,o,t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),h=t.getUniformIndices(n,i),m=t.getActiveUniforms(n,h,t.UNIFORM_OFFSET),d=t.getActiveUniforms(n,h,t.UNIFORM_SIZE),p={};for(let _=0;_<i.length;_++){const f=i[_],T={index:h[_],offset:m[_],size:d[_]};p[f]=T}return{blockIndex:o,blockSize:s,usedInVertexShader:l,usedInFragmentShader:c,uniforms:p}},Zt=jn,Wn=(t,n,r=0,i=t.DYNAMIC_DRAW)=>{const o=t.createBuffer();return t.bindBuffer(t.UNIFORM_BUFFER,o),t.bufferData(t.UNIFORM_BUFFER,n,i),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,r,o),o},Jt=Wn,zn=(t,n,r,i)=>{let o;switch(n){case t.FLOAT:return t.uniform1f(r,i);case t.FLOAT_VEC2:return o=i,t.uniform2f(r,o[0],o[1]);case t.FLOAT_VEC3:return o=i,t.uniform3f(r,o[0],o[1],o[2]);case t.FLOAT_VEC4:return o=i,t.uniform4f(r,o[0],o[1],o[2],o[3]);case t.BOOL:case t.INT:case t.SAMPLER_2D:case t.SAMPLER_CUBE:return t.uniform1i(r,i);case t.BOOL_VEC2:case t.INT_VEC2:return o=i,t.uniform2i(r,o[0],o[1]);case t.BOOL_VEC3:case t.INT_VEC3:return o=i,t.uniform3i(r,o[0],o[1],o[2]);case t.BOOL_VEC4:case t.INT_VEC4:return o=i,t.uniform4i(r,o[0],o[1],o[2],o[3]);case t.FLOAT_MAT2:return t.uniformMatrix2fv(r,!1,i);case t.FLOAT_MAT3:return t.uniformMatrix3fv(r,!1,i);case t.FLOAT_MAT4:return t.uniformMatrix4fv(r,!1,i);default:throw new Error("wrong type for uniform")}},ye=zn,Yn=(t={})=>{const{radius:n=.5,widthSegments:r=16,heightSegments:i=Math.ceil(r*.5),phiStart:o=0,phiLength:s=Math.PI*2,thetaStart:l=0,thetaLength:c=Math.PI}=t,h=r,m=i,d=o,p=s,_=l,f=c,T=(h+1)*(m+1),x=h*m*6,R=3+3+2,v=new Float32Array(T*R),E=T>65536?new Uint32Array(x):new Uint16Array(x);let N=0,w=0,g=0;const $=_+f,M=[],b=Z();for(let U=0;U<=m;U++){const P=[],S=U/m;for(let I=0;I<=h;I++,N++){const X=I/h,j=-n*Math.cos(d+X*p)*Math.sin(_+S*f),Ht=n*Math.cos(_+S*f),Rt=n*Math.sin(d+X*p)*Math.sin(_+S*f);v[N*R+0]=j,v[N*R+1]=Ht,v[N*R+2]=Rt,Xe(b,j,Ht,Rt),He(b,b),v[N*R+3]=b[0],v[N*R+4]=b[1],v[N*R+5]=b[2],v[N*R+6]=X,v[N*R+7]=1-S,P.push(w++)}M.push(P)}for(let U=0;U<m;U++)for(let P=0;P<h;P++){const S=M[U][P+1],I=M[U][P],X=M[U+1][P],j=M[U+1][P+1];(U!==0||_>0)&&(E[g*3]=S,E[g*3+1]=I,E[g*3+2]=j,g++),(U!==m-1||$<Math.PI)&&(E[g*3]=I,E[g*3+1]=X,E[g*3+2]=j,g++)}return{radius:n,vertexCount:x,vertexStride:R,interleavedArray:v,indicesArray:E}},Kn=Yn,$n=(t={})=>{const{width:n=1,height:r=1,widthSegments:i=1,heightSegments:o=1,flipUVy:s=!1}=t,l=i,c=o,h=(l+1)*(c+1),m=l*c*6,d=new Float32Array(h*3+h*2),p=h>65536?new Uint32Array(m):new Uint16Array(m);let _=0,f=0;const T=_,x=n/l,R=r/c,v=1,E=-1,N=0,w=3+2;for(let g=0;g<=c;g++){const $=g*R-r/2;for(let M=0;M<=l;M++,_++){const b=M*x-n/2;if(d[_*w+0]=b*v,d[_*w+1]=$*E,d[_*w+2]=N/2,d[_*w+3]=M/l,d[_*w+4]=s?1-g/c:g/c,g===c||M===l)continue;const U=T+M+g*(l+1),P=T+M+(g+1)*(l+1),S=T+M+(g+1)*(l+1)+1,I=T+M+g*(l+1)+1;p[f*6]=U,p[f*6+1]=P,p[f*6+2]=I,p[f*6+3]=P,p[f*6+4]=S,p[f*6+5]=I,f++}}return{width:n,height:r,vertexCount:p.length,vertexStride:w,interleavedArray:d,indicesArray:p}},te=$n,qn=(t={})=>{const{width:n=1,height:r=1,depth:i=1,widthSegments:o=1,heightSegments:s=1,depthSegments:l=1,uvOffsetEachFace:c=!1,flipUVy:h=!1}=t,m=o,d=s,p=l,_=(m+1)*(d+1)*2+(m+1)*(p+1)*2+(d+1)*(p+1)*2,f=(m*d*2+m*p*2+d*p*2)*6,T=3+3+2,x=new Float32Array(_*T),R=f>65536?new Uint32Array(f):new Uint16Array(f);let v=0,E=0;return ot(x,R,i,r,n,p,d,4,2,1,0,-1,-1,v,E,T,c,h),ot(x,R,i,r,-n,p,d,2,2,1,0,1,-1,v+=(p+1)*(d+1),E+=p*d,T,c,h),ot(x,R,n,i,r,p,d,0,0,2,1,1,1,v+=(p+1)*(d+1),E+=p*d,T,c,h),ot(x,R,n,i,-r,p,d,5,0,2,1,1,-1,v+=(m+1)*(p+1),E+=m*p,T,c,h),ot(x,R,n,r,-i,m,d,3,0,1,2,-1,-1,v+=(m+1)*(p+1),E+=m*p,T,c,h),ot(x,R,n,r,i,m,d,1,0,1,2,1,-1,v+=(m+1)*(d+1),E+=m*d,T,c,h),{width:n,height:r,depth:i,vertexCount:f,vertexStride:T,interleavedArray:x,indicesArray:R}},Qn=qn;function ot(t,n,r,i,o,s,l,c,h=0,m=1,d=2,p=1,_=-1,f=0,T=0,x=8,R=!1,v=!1){const E=f,N=r/s,w=i/l;for(let g=0;g<=l;g++){const $=g*w-i/2;for(let M=0;M<=s;M++,f++){const b=M*N-r/2;t[f*x+0+h]=b*p,t[f*x+0+m]=$*_,t[f*x+0+d]=o/2,t[f*x+3+h]=0,t[f*x+3+m]=0,t[f*x+3+d]=o>=0?1:-1;const U=1/6,P=U*c,S=R?P+M/s*U:M/s,I=R?v?P+U-P+g/l*U:P+g/l*U:v?1-g/l:g/l;if(t[f*x+6+0]=S,t[f*x+6+1]=I,g===l||M===s)continue;const X=E+M+g*(s+1),j=E+M+(g+1)*(s+1),Ht=E+M+(g+1)*(s+1)+1,Rt=E+M+g*(s+1)+1;n[T*6]=X,n[T*6+1]=j,n[T*6+2]=Rt,n[T*6+3]=j,n[T*6+4]=Ht,n[T*6+5]=Rt,T++}}}var Ie=(t,n,r)=>Math.min(Math.max(t,n),r),Ke=class{constructor(){u(this,"upVector",mt(0,1,0));u(this,"position",mt(0,0,0));u(this,"lookAt",mt(0,0,0));u(this,"projectionMatrix",nt());u(this,"viewMatrix",nt());u(this,"viewMatrixInverse",nt());u(this,"projectionViewMatrix",nt())}updateViewMatrix(){return bn(this.viewMatrix,this.position,this.lookAt,this.upVector),Ge(this.viewMatrixInverse,this.viewMatrix),this}updateProjectionMatrix(){return this}updateProjectionViewMatrix(){return this.updateViewMatrix(),this.updateProjectionMatrix(),ke(this.projectionViewMatrix,this.projectionMatrix,this.viewMatrix),this}},$e=class extends Ke{constructor(t,n,r,i){super();u(this,"fieldOfView");u(this,"aspect");u(this,"near");u(this,"far");this.fieldOfView=t,this.aspect=n,this.near=r,this.far=i,this.updateProjectionMatrix()}updateProjectionMatrix(){return vn(this.projectionMatrix,this.fieldOfView,this.aspect,this.near,this.far),this}},ge=class extends Ke{constructor(t,n,r,i,o,s){super();u(this,"left");u(this,"right");u(this,"bottom");u(this,"top");u(this,"near");u(this,"far");this.left=t,this.right=n,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}updateProjectionMatrix(){return gn(this.projectionMatrix,this.left,this.right,this.bottom,this.top,this.near,this.far),this}},it=class{constructor(){u(this,"value",0);u(this,"damping");this.damping=.5}addForce(t){this.value+=t}update(){return this.value*this.value>1e-6?this.value*=this.damping:this.stop(),this.value}stop(){this.value=0}},Zn=class{constructor(t,n=document.body,r=!1,i=1){u(this,"camera");u(this,"domElement");u(this,"target",Z());u(this,"minDistance",0);u(this,"maxDistance",1/0);u(this,"isEnabled",!0);u(this,"isDamping");u(this,"dampingFactor");u(this,"isZoom");u(this,"zoomSpeed");u(this,"isRotate");u(this,"rotateSpeed");u(this,"isPan");u(this,"keyPanSpeed");u(this,"enableKeys");u(this,"keys");u(this,"originTarget");u(this,"originPosition");u(this,"targetXDampedAction",new it);u(this,"targetYDampedAction",new it);u(this,"targetZDampedAction",new it);u(this,"targetThetaDampedAction",new it);u(this,"targetPhiDampedAction",new it);u(this,"targetRadiusDampedAction",new it);u(this,"_isShiftDown",!1);u(this,"_rotateStart",{x:9999,y:9999});u(this,"_rotateEnd",{x:9999,y:9999});u(this,"_roatteDelta",{x:9999,y:9999});u(this,"_spherical");u(this,"_zoomDistanceEnd",0);u(this,"_zoomDistance",0);u(this,"state","");u(this,"loopId",0);u(this,"_panStart",{x:0,y:0});u(this,"_panDelta",{x:0,y:0});u(this,"_panEnd",{x:0,y:0});u(this,"_paused",!1);u(this,"_isDebug",!1);u(this,"_outputEl");u(this,"mouseWheelForce",1);this.mouseWheelForce=i,t||console.error("camera is undefined"),this.camera=t,this.domElement=n,this.isDamping=!1,this.dampingFactor=.25,this.isZoom=!0,this.zoomSpeed=1,this.isRotate=!0,this.rotateSpeed=1,this.isPan=!0,this.keyPanSpeed=7,this.enableKeys=!0,this.keys={LEFT:"37",UP:"38",RIGHT:"39",BOTTOM:"40",SHIFT:"16"},this.originTarget=Z(),this.originPosition=Z(),this.originPosition[0]=t.position[0],this.originPosition[1]=t.position[0],this.originPosition[2]=t.position[0];const o=this.camera.position[0],s=this.camera.position[1],l=this.camera.position[2],c=Math.sqrt(o*o+s*s+l*l),h=Math.atan2(this.camera.position[0],this.camera.position[2]),m=Math.acos(Ie(this.camera.position[1]/c,-1,1));this._spherical={radius:c,theta:h,phi:m},this._bindEvens(),this.setEventHandler(),this.startTick(),this._isDebug=r,r&&(this._outputEl=document.createElement("div"),this._outputEl.setAttribute("style",`
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 999;
      font-family: monospace;
      font-size: 14px;
      user-select: none;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 4px;
      padding: 3px 6px;
    `),document.body.appendChild(this._outputEl))}lookAt([t,n,r]){return Xe(this.target,t,n,r),this}setEventHandler(){this.domElement.addEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.addEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.addEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.addEventListener("touchstart",this._touchStartHandler,!1),this.domElement.addEventListener("touchmove",this._touchMoveHandler,!1),window.addEventListener("keydown",this._onKeyDownHandler,!1),window.addEventListener("keyup",this._onKeyUpHandler,!1)}removeEventHandler(){this.domElement.removeEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.removeEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.removeEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1),this.domElement.removeEventListener("touchstart",this._touchStartHandler,!1),this.domElement.removeEventListener("touchmove",this._touchMoveHandler,!1),window.removeEventListener("keydown",this._onKeyDownHandler,!1),window.removeEventListener("keydown",this._onKeyUpHandler,!1)}startTick(){this.loopId=requestAnimationFrame(this.tick)}pause(){this._paused=!0}start(){this._paused=!1}tick(){if(!this._paused&&(this.updateDampedAction(),this.updateCamera(),this._isDebug)){const t=Math.round(this.camera.position[0]*100)/100,n=Math.round(this.camera.position[1]*100)/100,r=Math.round(this.camera.position[2]*100)/100;this._outputEl.textContent=`x: ${t} y: ${n} z: ${r}`}this.loopId=requestAnimationFrame(this.tick)}updateDampedAction(){this.target[0]+=this.targetXDampedAction.update(),this.target[1]+=this.targetYDampedAction.update(),this.target[2]+=this.targetZDampedAction.update(),this._spherical.theta+=this.targetThetaDampedAction.update(),this._spherical.phi+=this.targetPhiDampedAction.update(),this._spherical.radius+=this.targetRadiusDampedAction.update()}updateCamera(){const t=this._spherical,n=Math.sin(t.phi)*t.radius;this.camera.position[0]=n*Math.sin(t.theta)+this.target[0],this.camera.position[1]=Math.cos(t.phi)*t.radius+this.target[1],this.camera.position[2]=n*Math.cos(t.theta)+this.target[2],this.camera.lookAt[0]=this.target[0],this.camera.lookAt[1]=this.target[1],this.camera.lookAt[2]=this.target[2]}_bindEvens(){this.tick=this.tick.bind(this),this._contextMenuHandler=this._contextMenuHandler.bind(this),this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._touchStartHandler=this._touchStartHandler.bind(this),this._touchMoveHandler=this._touchMoveHandler.bind(this),this._onKeyDownHandler=this._onKeyDownHandler.bind(this),this._onKeyUpHandler=this._onKeyUpHandler.bind(this)}_contextMenuHandler(t){!this.isEnabled||t.preventDefault()}_mouseDownHandler(t){!this.isEnabled||(t.button===0?(this.state="rotate",this._rotateStart={x:t.clientX,y:t.clientY}):(this.state="pan",this._panStart={x:t.clientX,y:t.clientY}),this.domElement.addEventListener("mousemove",this._mouseMoveHandler,!1),window.addEventListener("mouseup",this._mouseUpHandler,!1))}_mouseUpHandler(){this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1)}_mouseMoveHandler(t){!this.isEnabled||(this.state==="rotate"?(this._rotateEnd={x:t.clientX,y:t.clientY},this._roatteDelta={x:this._rotateEnd.x-this._rotateStart.x,y:this._rotateEnd.y-this._rotateStart.y},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y}):this.state==="pan"&&(this._panEnd={x:t.clientX,y:t.clientY},this._panDelta={x:-.5*(this._panEnd.x-this._panStart.x),y:.5*(this._panEnd.y-this._panStart.y)},this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y}))}_mouseWheelHandler(t){t.preventDefault();const n=this.mouseWheelForce,r=t.deltaY>0?n:-n;this.targetRadiusDampedAction.value=r}_touchStartHandler(t){let n,r;switch(t.touches.length){case 1:this.state="rotate",this._rotateStart={x:t.touches[0].clientX,y:t.touches[0].clientY};break;case 2:this.state="zoom",n=t.touches[1].clientX-t.touches[0].clientX,r=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistance=Math.sqrt(n*n+r*r);break;case 3:this.state="pan",this._panStart={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3};break}}_touchMoveHandler(t){let n,r,i;switch(t.preventDefault(),t.touches.length){case 1:if(this.state!=="rotate")return;this._rotateEnd={x:t.touches[0].clientX,y:t.touches[0].clientY},this._roatteDelta={x:(this._rotateEnd.x-this._rotateStart.x)*.5,y:(this._rotateEnd.y-this._rotateStart.y)*.5},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y};break;case 2:if(this.state!=="zoom")return;n=t.touches[1].clientX-t.touches[0].clientX,r=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistanceEnd=Math.sqrt(n*n+r*r),i=this._zoomDistanceEnd-this._zoomDistance,i*=.05;let o=this._spherical.radius-i;o=Ie(o,this.minDistance,this.maxDistance),this._zoomDistance=this._zoomDistanceEnd,this._spherical.radius=o;break;case 3:this._panEnd={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3},this._panDelta={x:this._panEnd.x-this._panStart.x,y:this._panEnd.y-this._panStart.y},this._panDelta.x*=-1,this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y};break}}_onKeyDownHandler(t){let n=0,r=0;switch(t.key){case this.keys.SHIFT:this._isShiftDown=!0;break;case this.keys.LEFT:n=-10;break;case this.keys.RIGHT:n=10;break;case this.keys.UP:r=10;break;case this.keys.BOTTOM:r=-10;break}this._isShiftDown?(this._roatteDelta={x:-n,y:r},this._updateRotateHandler()):(this._panDelta={x:n,y:r},this._updatePanHandler())}_onKeyUpHandler(t){switch(t.key){case this.keys.SHIFT:this._isShiftDown=!1;break}}_updatePanHandler(){const t=Z(),n=Z(),r=Z();r[0]=this.target[0]-this.camera.position[0],r[1]=this.target[1]-this.camera.position[1],r[2]=this.target[2]-this.camera.position[2],He(r,r),Se(t,r,[0,1,0]),Se(n,t,r);const i=Math.max(this._spherical.radius/2e3,.001);this.targetXDampedAction.addForce((t[0]*this._panDelta.x+n[0]*this._panDelta.y)*i),this.targetYDampedAction.addForce((t[1]*this._panDelta.x+n[1]*this._panDelta.y)*i),this.targetZDampedAction.addForce((t[2]*this._panDelta.x+n[2]*this._panDelta.y)*i)}_updateRotateHandler(){this.targetThetaDampedAction.addForce(-this._roatteDelta.x/this.domElement.clientWidth*this.mouseWheelForce),this.targetPhiDampedAction.addForce(-this._roatteDelta.y/this.domElement.clientHeight*this.mouseWheelForce)}},Jn=class{constructor(){u(this,"position",mt(0,0,0));u(this,"rotation",mt(0,0,0));u(this,"scale",mt(1,1,1));u(this,"modelMatrix",nt());u(this,"shouldUpdate",!0)}copyFromMatrix(t){return Ve(this.modelMatrix,t),this.shouldUpdate=!1,this}setPosition(t){return oe(this.position,t),this.shouldUpdate=!0,this}setScale(t){return oe(this.scale,t),this.shouldUpdate=!0,this}setRotation(t){return oe(this.rotation,t),this.shouldUpdate=!0,this}updateModelMatrix(){return An(this.modelMatrix),Un(this.modelMatrix,this.modelMatrix,this.position),wn(this.modelMatrix,this.modelMatrix,this.rotation[0]),Pn(this.modelMatrix,this.modelMatrix,this.rotation[1]),Fn(this.modelMatrix,this.modelMatrix,this.rotation[2]),Sn(this.modelMatrix,this.modelMatrix,this.scale),this.shouldUpdate=!1,this}},qe=class extends Jn{constructor(t=void 0){super();u(this,"parentNode",null);u(this,"_children",[]);u(this,"_visible",!0);u(this,"worldMatrix",nt());u(this,"normalMatrix",nt());u(this,"uid",Rn(9));u(this,"name");this.name=t}get visible(){return this._visible}set visible(t){this._visible=t}get children(){return this._children}get siblings(){return this.parentNode?this.parentNode._children:[]}get levelIndex(){let t=0,n=this.parentNode;for(;n;)t++,n=n.parentNode;return t}setParent(t=null){if(this.parentNode){const n=this.parentNode._children.indexOf(this);n>=0&&this.parentNode._children.splice(n,1)}return t&&t.addChild(this),this.parentNode=t,this}addChild(t){return this._children.push(t),this}updateWorldMatrix(t=null){this.shouldUpdate&&this.updateModelMatrix(),t?ke(this.worldMatrix,t,this.modelMatrix):Ve(this.worldMatrix,this.modelMatrix),Ge(this.normalMatrix,this.worldMatrix),Mn(this.normalMatrix,this.normalMatrix);for(let n=0;n<this._children.length;n++)this._children[n].updateWorldMatrix(this.worldMatrix);return this}traverse(t,n=0){t(this,n),n++;for(let r=0;r<this._children.length;r++)this._children[r].traverse(t,n)}findChild(t){if(t(this))return this;let n=null;for(let r=0;r<this._children.length&&!(n=this._children[r].findChild(t));r++);return n}findChildByName(t){if(this.name===t)return this;let n=null;for(let r=0;r<this._children.length&&!(n=this._children[r].findChildByName(t));r++);return n}findParent(t){if(t(this))return this;let n=null,r=this.parentNode;for(;r&&!(n=r.findParent(t));)r=r==null?void 0:r.parentNode;return n}findParentByName(t){if(this.name===t)return this;let n=null,r=this.parentNode;for(;r&&!(n=r.findParentByName(t));)r=r==null?void 0:r.parentNode;return n}render(){if(!!this._visible)for(let t=0;t<this._children.length;t++)this._children[t].render()}},ct,Wt=class extends qe{constructor(t,n,r,i={},o){super(o);if(B(this,"gl"),B(this,"vao"),B(this,"vertexCount"),jt(this,ct,new Map),B(this,"boundingBox"),B(this,"program"),this.gl=t,this.vao=t.createVertexArray(),this.program=Gn(t,n,r,i),this.program.__SPECTOR_Metadata={name:o,shaderDefines:i},!this.setUniform(Wt.WORLD_MATRIX_UNIFORM_NAME,{type:t.FLOAT_MAT4}))throw new Error(`Each Drawable is expected to have a mat4 ${Wt.WORLD_MATRIX_UNIFORM_NAME} implemented in shader`)}setUniform(t,{type:n,value:r}){const i=this.gl;let o;if(o=y(this,ct).get(t))o.value=r;else{const s=i.getUniformLocation(this.program,t);if(!s)return console.error(`uniform with name ${t} was not found in the program`),!1;o={type:n,location:s,value:r},y(this,ct).set(t,o)}return r!=null&&(i.useProgram(this.program),ye(i,o.type,o.location,r)),!0}updateUniform(t,n){let r;if(r=this.getUniform(t)){r.value=n;const i=this.gl;return i.useProgram(this.program),ye(i,r.type,r.location,n),!0}return!1}getUniform(t){let n;return(n=y(this,ct).get(t))?n:(console.error("can't locate uniform with that name"),null)}updateWorldMatrix(t){return super.updateWorldMatrix(t),this.updateUniform(Wt.WORLD_MATRIX_UNIFORM_NAME,this.worldMatrix),this}destroy(){y(this,ct).clear();const t=this.gl;t.deleteVertexArray(this.vao),t.deleteProgram(this.program)}},Y=Wt;ct=new WeakMap;B(Y,"WORLD_MATRIX_UNIFORM_NAME","u_worldMatrix");var tr=document.createElement("canvas"),Qe=tr.getContext("webgl2"),W=Qe.MAX_TEXTURE_SIZE,kt=Qe.RGB,se,A,fe=!1,J,ht,ut,me=class{constructor(){if(jt(this,J,[]),jt(this,ht,[]),jt(this,ut,document.createElement("div")),fe){const n=document.createElement("style"),r="hwoa-rang-texture-atlas-debug";n.setAttribute("type","text/css");const i=`
        #${r} {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          transform-origin: 100% 100%;
          width: ${400}px;
          max-height: 100vh;
          overflow: scroll;
        }
        #${r} canvas {
          max-width: 100%;
        }
      `;n.appendChild(document.createTextNode(i)),document.getElementsByTagName("head")[0].appendChild(n),Hn(this,ut,document.createElement("div")),y(this,ut).setAttribute("id",r),document.body.appendChild(y(this,ut))}}static set debugMode(t){fe=t}static get textureSize(){return W}static set textureSize(t){W=t}static set textureFormat(t){kt=t}static set gl(t){A=t}static getInstance(){if(!A)throw new Error("You must provide a WebGL2RenderingContext first via setting the TextureAtlas.gl property!");return se||(se=new me),se}pack(t,n,r=1){const i=()=>{const f=document.createElement("canvas");y(this,ut).appendChild(f),f.width=W,f.height=W;const T=A.createTexture();A.bindTexture(A.TEXTURE_2D,T),A.texParameterf(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,A.LINEAR_MIPMAP_LINEAR),A.texImage2D(A.TEXTURE_2D,0,kt,W,W,0,kt,A.UNSIGNED_BYTE,null),A.generateMipmap(A.TEXTURE_2D),A.bindTexture(A.TEXTURE_2D,null);const x=new Nn(f);return y(this,J).push(x),y(this,ht).push(T),x};let o=y(this,J)[y(this,J).length-1];o||(o=i());const s=r===1?n:me.scaleDownDrawableByFactor(n,r);o.pack(t,s)||(o=i(),o.pack(t,s));const c=o.uv()[t];for(let f=0;f<c.length;f++)c[f][0]*=W,c[f][1]*=W;const h=y(this,ht)[y(this,ht).length-1],m=c[0][0],d=c[0][1],p=c[2][0]-c[0][0],_=c[2][1]-c[0][1];return A.bindTexture(A.TEXTURE_2D,h),A.texSubImage2D(A.TEXTURE_2D,0,m,d,p,_,kt,A.UNSIGNED_BYTE,s),A.generateMipmap(A.TEXTURE_2D),A.bindTexture(A.TEXTURE_2D,null),this}getUv2(t){let n=-1;for(let r=0;r<y(this,J).length;r++){const o=y(this,J)[r].uv2()[t];if(o){n=r;const s=y(this,ht)[n];return[o,s]}}throw new Error("Can't get uvs")}},er=me;J=new WeakMap;ht=new WeakMap;ut=new WeakMap;B(er,"scaleDownDrawableByFactor",(t,n)=>{const r=document.createElement("canvas"),i=t instanceof HTMLImageElement?t.naturalWidth:t.width,o=t instanceof HTMLImageElement?t.naturalHeight:t.height;r.width=i/n,r.height=o/n,fe&&console.log(`Scaled ${i}x${o} project image to ${r.width}x${r.height}`);const s=r.getContext("2d");return s.imageSmoothingQuality="high",s.drawImage(t,0,0,i,o,0,0,r.width,r.height),r});var Le=class{static getSupportedFormats(t){return{astc:t.getExtension("WEBGL_compressed_texture_astc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),etc2:t.getExtension("WEBGL_compressed_texture_etc"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")}}static async loadCompressed(t,n=!0){const r=await fetch(t).then(o=>o.arrayBuffer()),i=new gt(r,1);return{mipmaps:i.mipmaps(n),width:i.pixelWidth,height:i.pixelHeight,format:i.glInternalFormat,mipmapCount:i.numberOfMipmapLevels}}},pe=class{constructor(t,n){u(this,"arrayBuffer");u(this,"glType");u(this,"glTypeSize");u(this,"glFormat");u(this,"glInternalFormat");u(this,"numberOfArrayElements");u(this,"numberOfMipmapLevels");u(this,"bytesOfKeyValueData");u(this,"numberOfFaces");u(this,"loadType");u(this,"pixelWidth");u(this,"pixelHeight");u(this,"pixelDepth");this.arrayBuffer=t;const r=new Uint8Array(this.arrayBuffer,0,12);if(r[0]!==171||r[1]!==75||r[2]!==84||r[3]!==88||r[4]!==32||r[5]!==49||r[6]!==49||r[7]!==187||r[8]!==13||r[9]!==10||r[10]!==26||r[11]!==10){console.error("texture missing KTX identifier");return}const i=Uint32Array.BYTES_PER_ELEMENT,o=new DataView(this.arrayBuffer,12,13*i),l=o.getUint32(0,!0)===67305985;if(this.glType=o.getUint32(1*i,l),this.glTypeSize=o.getUint32(2*i,l),this.glFormat=o.getUint32(3*i,l),this.glInternalFormat=o.getUint32(4*i,l),this.pixelWidth=o.getUint32(6*i,l),this.pixelHeight=o.getUint32(7*i,l),this.pixelDepth=o.getUint32(8*i,l),this.numberOfArrayElements=o.getUint32(9*i,l),this.numberOfFaces=o.getUint32(10*i,l),this.numberOfMipmapLevels=o.getUint32(11*i,l),this.bytesOfKeyValueData=o.getUint32(12*i,l),this.glType!==0){console.warn("only compressed formats currently supported");return}else this.numberOfMipmapLevels=Math.max(1,this.numberOfMipmapLevels);if(this.pixelHeight===0||this.pixelDepth!==0){console.warn("only 2D textures currently supported");return}if(this.numberOfArrayElements!==0){console.warn("texture arrays not currently supported");return}if(this.numberOfFaces!==n){console.warn("number of faces expected"+n+", but found "+this.numberOfFaces);return}this.loadType=pe.COMPRESSED_2D}mipmaps(t){const n=[];let r=pe.HEADER_LEN+this.bytesOfKeyValueData,i=this.pixelWidth,o=this.pixelHeight;const s=t?this.numberOfMipmapLevels:1;for(let l=0;l<s;l++){const c=new Int32Array(this.arrayBuffer,r,1)[0];r+=4;for(let h=0;h<this.numberOfFaces;h++){const m=new Uint8Array(this.arrayBuffer,r,c);n.push({data:m,width:i,height:o}),r+=c,r+=3-(c+3)%4}i=Math.max(1,i*.5),o=Math.max(1,o*.5)}return n}},gt=pe;B(gt,"HEADER_LEN",12+13*4);B(gt,"COMPRESSED_2D",0);B(gt,"COMPRESSED_3D",1);B(gt,"TEX_2D",2);B(gt,"TEX_3D",3);let Q;const le=async(t,n)=>{Q||(Q=Le.getSupportedFormats(t));let r,i;if(Q.s3tc?(r=n.s3tc,i="s3tc"):Q.astc?(r=n.astc,i="astc"):Q.etc1?(r=n.etc1,i="etc1"):Q.etc2?(r=n.etc2,i="etc2"):Q.pvrtc&&(r=n.pvrtc,i="pvrtc"),!r)throw console.log(n),new Error(`missing correct format ${i?`for ${i}`:""}`);const o=await Le.loadCompressed(r),s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);for(const[l,c]of o.mipmaps.entries())t.compressedTexImage2D(t.TEXTURE_2D,l,o.format,c.width,c.height,0,c.data);return o.mipmapCount>1?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),s};let ce;function nr(t){return ce==null&&(ce=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic")),ce}var xt,Pt,Ft;const we=class extends Y{constructor(n,r,i,o,s,l){super(n,o,s,q({PI:Math.PI,USE_UV:!0},l));L(this,xt,void 0);L(this,Pt,void 0);L(this,Ft,void 0);const{vertexCount:c,vertexStride:h,interleavedArray:m,indicesArray:d}=i;this.vertexCount=c;const p=n.getAttribLocation(this.program,"aPosition"),_=n.getAttribLocation(this.program,"aUv"),f=n.createBuffer(),T=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,f),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,T),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:n.INT,value:0});const x=we.createTextCanvas(r);C(this,xt,n.createTexture()),n.bindTexture(n.TEXTURE_2D,F(this,xt)),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,x.width,x.height,0,n.RGBA,n.UNSIGNED_BYTE,x),n.generateMipmap(n.TEXTURE_2D);const R=nr(n);if(R!=null){const v=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);n.texParameterf(n.TEXTURE_2D,R.TEXTURE_MAX_ANISOTROPY_EXT,v)}n.bindTexture(n.TEXTURE_2D,null),C(this,Pt,n.getUniformBlockIndex(this.program,"Projection")),C(this,Ft,n.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(n){const r=document.createElement("canvas"),i=r.getContext("2d");r.width=1024,r.height=128;const o=20,s=10,l=100;i.font=`${l}px Helvetica`,i.fillStyle="#fff",i.textBaseline="middle",i.fillText(n,o,r.height/2);const{width:c}=i.measureText(n),h=o+c+40;return i.strokeStyle="#fff",i.lineWidth=5,i.beginPath(),i.moveTo(h,r.height/2),i.lineTo(r.width-s,r.height/2),i.stroke(),i.beginPath(),i.moveTo(r.width-s,r.height/2),i.lineTo(r.width-s-40,r.height/2+30),i.stroke(),i.beginPath(),i.moveTo(r.width-s,r.height/2),i.lineTo(r.width-s-40,r.height/2-30),i.stroke(),r}render(){this.gl.uniformBlockBinding(this.program,F(this,Pt),0),this.gl.uniformBlockBinding(this.program,F(this,Ft),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,F(this,xt)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}};let Re=we;xt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap;var St,Nt,yt,H;class rr extends Y{constructor(n,r,i,o,s={}){super(n,i,o,q({PI:Math.PI,IS_CUBEMAP:!0},s));L(this,St,void 0);L(this,Nt,void 0);L(this,yt,void 0);L(this,H,void 0);const{vertexCount:l,vertexStride:c,interleavedArray:h,indicesArray:m}=r;this.vertexCount=l;const d=n.getAttribLocation(this.program,"aPosition"),p=n.createBuffer(),_=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,h,n.STATIC_DRAW),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,_),n.bufferData(n.ELEMENT_ARRAY_BUFFER,m,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_environmentMap",{type:n.INT,value:0}),C(this,St,n.getUniformBlockIndex(this.program,"Projection")),C(this,Nt,n.getUniformBlockIndex(this.program,"View")),C(this,yt,n.getUniformBlockIndex(this.program,"PostFX"))}get texture(){return F(this,H)}set texture(n){F(this,H)&&this.gl.deleteTexture(F(this,H)),C(this,H,n)}render(){this.gl.uniformBlockBinding(this.program,F(this,St),0),this.gl.uniformBlockBinding(this.program,F(this,Nt),1),this.gl.uniformBlockBinding(this.program,F(this,yt),3),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),F(this,H)&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,F(this,H))),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),F(this,H),this.gl.bindVertexArray(null)}}St=new WeakMap,Nt=new WeakMap,yt=new WeakMap,H=new WeakMap;var It,Lt,Ct,Dt;class Ce extends Y{constructor(n,r,i,o,s){const l=q({PI:Math.PI,USE_NORMAL:!0,USE_WORLD_POS:!0,USE_PBR:!0,MAX_REFLECTION_LOD:4},s);super(n,i,o,l,"sphere");L(this,It,void 0);L(this,Lt,void 0);L(this,Ct,void 0);L(this,Dt,void 0);u(this,"irradianceMapTexture");u(this,"prefilterMapTexture");u(this,"brdfLutTexture");u(this,"albedoMap");u(this,"normalMap");u(this,"metallicMap");u(this,"roughnessMap");u(this,"aoMap");const{vertexCount:c,vertexStride:h,interleavedArray:m,indicesArray:d}=r;this.vertexCount=c;const p=n.getAttribLocation(this.program,"aPosition"),_=n.getAttribLocation(this.program,"aNormal"),f=n.createBuffer(),T=n.createBuffer();if(this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,f),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),s.USE_PBR_TEXTURES){const x=n.getAttribLocation(this.program,"aUv");n.enableVertexAttribArray(x),n.vertexAttribPointer(x,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT)}n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,T),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_irradianceMap",{type:n.INT,value:0}),this.setUniform("u_prefilterMap",{type:n.INT,value:1}),this.setUniform("u_brdfLUT",{type:n.INT,value:2}),s.USE_PBR_TEXTURES?(this.setUniform("u_albedoMap",{type:n.INT,value:3}),this.setUniform("u_normalMap",{type:n.INT,value:4}),this.setUniform("u_metallicMap",{type:n.INT,value:5}),this.setUniform("u_roughnessMap",{type:n.INT,value:6}),this.setUniform("u_aoMap",{type:n.INT,value:7})):this.setUniform("u_albedo",{type:n.FLOAT_VEC3,value:new Float32Array([1,1,1])}),C(this,It,n.getUniformBlockIndex(this.program,"Projection")),C(this,Lt,n.getUniformBlockIndex(this.program,"View")),C(this,Ct,n.getUniformBlockIndex(this.program,"Lighting")),C(this,Dt,n.getUniformBlockIndex(this.program,"PostFX"))}render(){!this.visible||(this.gl.uniformBlockBinding(this.program,F(this,It),0),this.gl.uniformBlockBinding(this.program,F(this,Lt),1),this.gl.uniformBlockBinding(this.program,F(this,Ct),2),this.gl.uniformBlockBinding(this.program,F(this,Dt),3),this.gl.useProgram(this.program),this.irradianceMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.irradianceMapTexture)),this.prefilterMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.prefilterMapTexture)),this.brdfLutTexture&&(this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,this.brdfLutTexture)),this.albedoMap&&(this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,this.albedoMap)),this.normalMap&&(this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,this.normalMap)),this.metallicMap&&(this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,this.metallicMap)),this.roughnessMap&&(this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,this.roughnessMap)),this.aoMap&&(this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,this.aoMap)),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.bindVertexArray(null))}}It=new WeakMap,Lt=new WeakMap,Ct=new WeakMap,Dt=new WeakMap;let he,Mt;class ar extends Y{constructor(n,r,i,o,s,l={}){super(n,o,s,q({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0,USE_UV:!0},l));he||(he=te({width:r,height:i}),Mt=new ge(-r/2,r/2,i/2,-i/2,0,2),Mt.position=[0,0,1],Mt.lookAt=[0,0,0],Mt.updateProjectionViewMatrix());const{vertexCount:c,vertexStride:h,interleavedArray:m,indicesArray:d}=he;this.vertexCount=c;const p=n.getAttribLocation(this.program,"aPosition"),_=n.getAttribLocation(this.program,"aUv"),f=n.createBuffer(),T=n.createBuffer();n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,f),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,T),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4})}render(){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",Mt.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}class Me extends Y{constructor(n,r,i,o,s={}){super(n,i,o,q({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0},s));u(this,"texture");u(this,"envTexture");const{vertexCount:l,vertexStride:c,interleavedArray:h,indicesArray:m}=r;this.vertexCount=l;const d=n.getAttribLocation(this.program,"aPosition"),p=n.createBuffer(),_=n.createBuffer();n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,h,n.STATIC_DRAW),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,_),n.bufferData(n.ELEMENT_ARRAY_BUFFER,m,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4})}render(n){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",n.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.envTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envTexture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}var or=`#version 300 es
precision highp float;

-- DEFINES_HOOK --

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

uniform vec4 u_color;

in vec2 vUv;
out vec4 finalColor;

void main () {
  float d = 1.0 - distance(vUv, vec2(0.5)) * 2.0;
  finalColor = vec4(u_color.rgb * 6.0, u_color.a) * d;
  if (finalColor.a < 0.1) {
    discard;
  }
}`,ir=`#version 300 es

-- DEFINES_HOOK --

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec2 aUv;

out vec2 vUv;

void main () {
  vec3 worldPos = u_worldMatrix[3].xyz;
  
  
  vec3 scale = vec3(
    length(u_worldMatrix[0].xyz),
    length(u_worldMatrix[1].xyz),
    length(u_worldMatrix[2].xyz)
  );
  
  
  vec3 look = normalize(cameraPosition - worldPos);
  vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), look));
  vec3 up = cross(look, right);
  mat4 billboardMatrix = mat4(
    vec4(right * scale.x, 0.0),
    vec4(up * scale.y, 0.0),
    vec4(look * scale.z, 0.0),
    vec4(worldPos, 1.0)
  );
  
  gl_Position = projMatrix * viewMatrix * billboardMatrix * aPosition;
  vUv = aUv;
}`;const De=te({width:.5,height:.5});var Bt,Ot;class sr extends Y{constructor(n){super(n,ir,or,De);L(this,Bt,void 0);L(this,Ot,void 0);const{vertexCount:r,vertexStride:i,interleavedArray:o,indicesArray:s}=De;this.vertexCount=r;const l=n.getAttribLocation(this.program,"aPosition"),c=n.getAttribLocation(this.program,"aUv"),h=n.createBuffer(),m=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,o,n.STATIC_DRAW),n.enableVertexAttribArray(l),n.vertexAttribPointer(l,3,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(c),n.vertexAttribPointer(c,2,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,m),n.bufferData(n.ELEMENT_ARRAY_BUFFER,s,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_color",{type:n.FLOAT_VEC4}),C(this,Bt,n.getUniformBlockIndex(this.program,"Projection")),C(this,Ot,n.getUniformBlockIndex(this.program,"View"))}set color(n){this.updateUniform("u_color",n)}render(){this.gl.uniformBlockBinding(this.program,F(this,Bt),0),this.gl.uniformBlockBinding(this.program,F(this,Ot),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}Bt=new WeakMap,Ot=new WeakMap;var lr=`#version 300 es

uniform mat4 u_projectionViewMatrix;
uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec2 aUv;

out vec2 vUv;

void main () {
  gl_Position = u_projectionViewMatrix * u_worldMatrix * aPosition;

  vUv = aUv;
}`,cr=`#version 300 es
precision highp float;

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}`;class hr extends Y{constructor(n,r,i,o={}){super(n,lr,cr,o);u(this,"texture");const{vertexCount:s,vertexStride:l,interleavedArray:c,indicesArray:h}=te({width:r,height:i});this.vertexCount=s;const m=new ge(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);m.position=[0,0,1],m.lookAt=[0,0,0],m.updateProjectionViewMatrix();const d=n.getAttribLocation(this.program,"aPosition"),p=n.getAttribLocation(this.program,"aUv"),_=n.createBuffer(),f=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,_),n.bufferData(n.ARRAY_BUFFER,c,n.STATIC_DRAW),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,2,n.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,f),n.bufferData(n.ELEMENT_ARRAY_BUFFER,h,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:n.INT,value:0}),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4,value:m.projectionViewMatrix})}render(){this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.texture&&this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}function Vt(t){return t.map(n=>n/255)}function Ze(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}var ur=`#version 300 es
precision highp float;

-- DEFINES_HOOK --

#ifndef USE_UNIQUE_PROJECTION_VIEW_MATRIX

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

#endif

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseEnvLightMixFactor;
    float specularEnvLightMixFactor;
  };
#endif
float radicalInverse_VdC(uint bits) {
    bits = (bits << 16u) | (bits >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    return float(bits) * 2.3283064365386963e-10; 
}

vec2 hammersley(uint i, uint N) {
    return vec2(float(i)/float(N), radicalInverse_VdC(i));
}
vec3 importanceSampleGGX(vec2 Xi, vec3 N, float roughness) {
  float a = roughness*roughness;

  float phi = 2.0 * PI * Xi.x;
  float cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
  float sinTheta = sqrt(1.0 - cosTheta*cosTheta);

  
  vec3 H;
  H.x = cos(phi) * sinTheta;
  H.y = sin(phi) * sinTheta;
  H.z = cosTheta;

  
  vec3 up        = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
  vec3 tangent   = normalize(cross(up, N));
  vec3 bitangent = cross(N, tangent);

  vec3 sampleVec = tangent * H.x + bitangent * H.y + N * H.z;
  return normalize(sampleVec);
}

float GeometrySchlickGGX(float NdotV, float roughness) {
  float a = roughness;
  float k = (a * a) / 2.0;

  float nom   = NdotV;
  float denom = NdotV * (1.0 - k) + k;

  return nom / denom;
}

float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness) {
  float NdotV = max(dot(N, V), 0.0);
  float NdotL = max(dot(N, L), 0.0);
  float ggx2 = GeometrySchlickGGX(NdotV, roughness);
  float ggx1 = GeometrySchlickGGX(NdotL, roughness);

  return ggx1 * ggx2;
}  

vec2 integrateBRDF(float NdotV, float roughness) {
  vec3 V;
  V.x = sqrt(1.0 - NdotV*NdotV);
  V.y = 0.0;
  V.z = NdotV;

  float A = 0.0;
  float B = 0.0;

  vec3 N = vec3(0.0, 0.0, 1.0);

  const uint SAMPLE_COUNT = 1024u;

  for (uint i = 0u; i < SAMPLE_COUNT; ++i) {
    vec2 Xi = hammersley(i, SAMPLE_COUNT);
    vec3 H  = importanceSampleGGX(Xi, N, roughness);
    vec3 L  = normalize(2.0 * dot(V, H) * H - V);

    float NdotL = max(L.z, 0.0);
    float NdotH = max(H.z, 0.0);
    float VdotH = max(dot(V, H), 0.0);

    if (NdotL > 0.0) {
      float G = GeometrySmith(N, V, L, roughness);
      float G_Vis = (G * VdotH) / (NdotH * NdotV);
      float Fc = pow(1.0 - VdotH, 5.0);

      A += (1.0 - Fc) * G_Vis;
      B += Fc * G_Vis;
    }
  }
  A /= float(SAMPLE_COUNT);
  B /= float(SAMPLE_COUNT);
  return vec2(A, B);
}

in vec2 vUv;

out vec4 finalColor;

void main() {
  vec2 integratedBRDF = integrateBRDF(vUv.x, vUv.y);
  finalColor = vec4(integratedBRDF, 0.0, 1.0);
}`,dr=`#version 300 es
precision highp float;

-- DEFINES_HOOK --

#ifndef USE_UNIQUE_PROJECTION_VIEW_MATRIX

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

#endif

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseEnvLightMixFactor;
    float specularEnvLightMixFactor;
  };
#endif

uniform samplerCube u_environmentMap;

in vec3 vLocalPos;

out vec4 finalColor;

void main () {
  vec3 normal = normalize(vLocalPos);
  vec3 irradiance = vec3(0.0);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(up, normal));
  up = normalize(cross(normal, right));

  float sampleDelta = 0.02;
  float nrSamples = 0.0; 
  for (float phi = 0.0; phi < 2.0 * PI; phi += sampleDelta) {
    for (float theta = 0.0; theta < 0.5 * PI; theta += sampleDelta) {
      
      vec3 tangentSample = vec3(sin(theta) * cos(phi),  sin(theta) * sin(phi), cos(theta));

      
      vec3 sampleVec = tangentSample.x * right + tangentSample.y * up + tangentSample.z * normal; 

      irradiance += texture(u_environmentMap, sampleVec).rgb * cos(theta) * sin(theta);
      nrSamples++;
    }
  }
  finalColor = vec4(PI * irradiance * (1.0 / float(nrSamples)), 1.0);
}`,fr=`#version 300 es
precision highp float;

-- DEFINES_HOOK --

#ifndef USE_UNIQUE_PROJECTION_VIEW_MATRIX

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

#endif

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseEnvLightMixFactor;
    float specularEnvLightMixFactor;
  };
#endif
float radicalInverse_VdC(uint bits) {
    bits = (bits << 16u) | (bits >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    return float(bits) * 2.3283064365386963e-10; 
}

vec2 hammersley(uint i, uint N) {
    return vec2(float(i)/float(N), radicalInverse_VdC(i));
}
vec3 importanceSampleGGX(vec2 Xi, vec3 N, float roughness) {
  float a = roughness*roughness;

  float phi = 2.0 * PI * Xi.x;
  float cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
  float sinTheta = sqrt(1.0 - cosTheta*cosTheta);

  
  vec3 H;
  H.x = cos(phi) * sinTheta;
  H.y = sin(phi) * sinTheta;
  H.z = cosTheta;

  
  vec3 up        = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
  vec3 tangent   = normalize(cross(up, N));
  vec3 bitangent = cross(N, tangent);

  vec3 sampleVec = tangent * H.x + bitangent * H.y + N * H.z;
  return normalize(sampleVec);
}
float DistributionGGX(vec3 N, vec3 H, float roughness) {
  float a      = roughness*roughness;
  float a2     = a*a;
  float NdotH  = max(dot(N, H), 0.0);
  float NdotH2 = NdotH*NdotH;

  float num   = a2;
  float denom = (NdotH2 * (a2 - 1.0) + 1.0);
  denom = PI * denom * denom;

  return num / denom;
}

uniform samplerCube u_environmentMap;
uniform float u_roughness;

in vec3 vLocalPos;

out vec4 finalColor;

void main () {
  vec3 N = normalize(vLocalPos);
  vec3 R = N;
  vec3 V = R;

  const uint SAMPLE_COUNT = 1024u;
  float totalWeight = 0.0;   
  vec3 prefilteredColor = vec3(0.0);     
  for(uint i = 0u; i < SAMPLE_COUNT; ++i) {
    vec2 Xi = hammersley(i, SAMPLE_COUNT);
    vec3 H  = importanceSampleGGX(Xi, N, u_roughness);
    vec3 L  = normalize(2.0 * dot(V, H) * H - V);

    float NdotL = max(dot(N, L), 0.0);
    if(NdotL > 0.0) {
      
      float NdotH = max(dot(N, H), 0.0);
      float HdotV = max(dot(H, V), 0.0);
      float D = DistributionGGX(N, H, u_roughness);
      float pdf = (D * NdotH / (4.0 * HdotV)) + 0.0001;

      float resolution = CUBEMAP_SIDE_SIZE; 
      float saTexel  = 4.0 * PI / (6.0 * resolution * resolution);
      float saSample = 1.0 / (float(SAMPLE_COUNT) * pdf + 0.0001);

      float mipLevel = u_roughness == 0.0 ? 0.0 : 0.5 * log2(saSample / saTexel); 
      prefilteredColor += textureLod(u_environmentMap, L, mipLevel).rgb * NdotL;
      totalWeight += NdotL;
    }
  }
  prefilteredColor = prefilteredColor / totalWeight;

  finalColor = vec4(prefilteredColor, 1.0);
}`,mr=`#version 300 es
precision highp float;

-- DEFINES_HOOK --

#ifndef USE_UNIQUE_PROJECTION_VIEW_MATRIX

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

#endif

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseEnvLightMixFactor;
    float specularEnvLightMixFactor;
  };
#endif
const vec2 invAtan = vec2(0.1591, 0.3183);

vec2 sampleSphericalMap(vec3 v) {
  vec2 uv = vec2(atan(v.z, v.x), asin(v.y));
  uv *= invAtan;
  uv += 0.5;
  return uv;
}

uniform sampler2D u_equirectangularMap;

in vec3 vLocalPos;

out vec4 finalColor;

void main () {
  vec2 uv = sampleSphericalMap(normalize(vLocalPos));
  vec3 color = texture(u_equirectangularMap, uv).rgb;
  finalColor = vec4(color, 1.0);
  
}`,Je=`#version 300 es
precision highp float;

-- DEFINES_HOOK --

#ifndef USE_UNIQUE_PROJECTION_VIEW_MATRIX

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

#endif

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseEnvLightMixFactor;
    float specularEnvLightMixFactor;
  };
#endif

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}`,pr=`#version 300 es
precision highp float;

-- DEFINES_HOOK --

#ifndef USE_UNIQUE_PROJECTION_VIEW_MATRIX

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

#endif

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseEnvLightMixFactor;
    float specularEnvLightMixFactor;
  };
#endif
vec3 aces(vec3 x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

float aces(float x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
vec3 tonemapFilmic(vec3 x) {
  vec3 X = max(vec3(0.0), x - 0.004);
  vec3 result = (X * (6.2 * X + 0.5)) / (X * (6.2 * X + 1.7) + 0.06);
  return pow(result, vec3(2.2));
}

float tonemapFilmic(float x) {
  float X = max(0.0, x - 0.004);
  float result = (X * (6.2 * X + 0.5)) / (X * (6.2 * X + 1.7) + 0.06);
  return pow(result, 2.2);
}
vec3 lottes(vec3 x) {
  const vec3 a = vec3(1.6);
  const vec3 d = vec3(0.977);
  const vec3 hdrMax = vec3(8.0);
  const vec3 midIn = vec3(0.18);
  const vec3 midOut = vec3(0.267);

  const vec3 b =
      (-pow(midIn, a) + pow(hdrMax, a) * midOut) /
      ((pow(hdrMax, a * d) - pow(midIn, a * d)) * midOut);
  const vec3 c =
      (pow(hdrMax, a * d) * pow(midIn, a) - pow(hdrMax, a) * pow(midIn, a * d) * midOut) /
      ((pow(hdrMax, a * d) - pow(midIn, a * d)) * midOut);

  return pow(x, a) / (pow(x, a * d) * b + c);
}

float lottes(float x) {
  const float a = 1.6;
  const float d = 0.977;
  const float hdrMax = 8.0;
  const float midIn = 0.18;
  const float midOut = 0.267;

  const float b =
      (-pow(midIn, a) + pow(hdrMax, a) * midOut) /
      ((pow(hdrMax, a * d) - pow(midIn, a * d)) * midOut);
  const float c =
      (pow(hdrMax, a * d) * pow(midIn, a) - pow(hdrMax, a) * pow(midIn, a * d) * midOut) /
      ((pow(hdrMax, a * d) - pow(midIn, a * d)) * midOut);

  return pow(x, a) / (pow(x, a * d) * b + c);
}
vec3 reinhard(vec3 x) {
  return x / (1.0 + x);
}

float reinhard(float x) {
  return x / (1.0 + x);
}
vec3 reinhard2(vec3 x) {
  const float L_white = 4.0;

  return (x * (1.0 + x / (L_white * L_white))) / (1.0 + x);
}

float reinhard2(float x) {
  const float L_white = 4.0;

  return (x * (1.0 + x / (L_white * L_white))) / (1.0 + x);
}
vec3 uchimura(vec3 x, float P, float a, float m, float l, float c, float b) {
  float l0 = ((P - m) * l) / a;
  float L0 = m - m / a;
  float L1 = m + (1.0 - m) / a;
  float S0 = m + l0;
  float S1 = m + a * l0;
  float C2 = (a * P) / (P - S1);
  float CP = -C2 / P;

  vec3 w0 = vec3(1.0 - smoothstep(0.0, m, x));
  vec3 w2 = vec3(step(m + l0, x));
  vec3 w1 = vec3(1.0 - w0 - w2);

  vec3 T = vec3(m * pow(x / m, vec3(c)) + b);
  vec3 S = vec3(P - (P - S1) * exp(CP * (x - S0)));
  vec3 L = vec3(m + a * (x - m));

  return T * w0 + L * w1 + S * w2;
}

vec3 uchimura(vec3 x) {
  const float P = 1.0;  
  const float a = 1.0;  
  const float m = 0.22; 
  const float l = 0.4;  
  const float c = 1.33; 
  const float b = 0.0;  

  return uchimura(x, P, a, m, l, c, b);
}

float uchimura(float x, float P, float a, float m, float l, float c, float b) {
  float l0 = ((P - m) * l) / a;
  float L0 = m - m / a;
  float L1 = m + (1.0 - m) / a;
  float S0 = m + l0;
  float S1 = m + a * l0;
  float C2 = (a * P) / (P - S1);
  float CP = -C2 / P;

  float w0 = 1.0 - smoothstep(0.0, m, x);
  float w2 = step(m + l0, x);
  float w1 = 1.0 - w0 - w2;

  float T = m * pow(x / m, c) + b;
  float S = P - (P - S1) * exp(CP * (x - S0));
  float L = m + a * (x - m);

  return T * w0 + L * w1 + S * w2;
}

float uchimura(float x) {
  const float P = 1.0;  
  const float a = 1.0;  
  const float m = 0.22; 
  const float l = 0.4;  
  const float c = 1.33; 
  const float b = 0.0;  

  return uchimura(x, P, a, m, l, c, b);
}
vec3 uncharted2Tonemap(vec3 x) {
  float A = 0.15;
  float B = 0.50;
  float C = 0.10;
  float D = 0.20;
  float E = 0.02;
  float F = 0.30;
  float W = 11.2;
  return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - E / F;
}

vec3 uncharted2(vec3 color) {
  const float W = 11.2;
  float exposureBias = 2.0;
  vec3 curr = uncharted2Tonemap(exposureBias * color);
  vec3 whiteScale = 1.0 / uncharted2Tonemap(vec3(W));
  return curr * whiteScale;
}

float uncharted2Tonemap(float x) {
  float A = 0.15;
  float B = 0.50;
  float C = 0.10;
  float D = 0.20;
  float E = 0.02;
  float F = 0.30;
  float W = 11.2;
  return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - E / F;
}

float uncharted2(float color) {
  const float W = 11.2;
  const float exposureBias = 2.0;
  float curr = uncharted2Tonemap(exposureBias * color);
  float whiteScale = 1.0 / uncharted2Tonemap(W);
  return curr * whiteScale;
}
vec3 unreal(vec3 x) {
  return x / (x + 0.155) * 1.019;
}

float unreal(float x) {
  return x / (x + 0.155) * 1.019;
}

vec3 applyTonemapping (vec3 color, float tonemappingMode) {
  return mix(
    aces(color),
    mix(
      tonemapFilmic(color),
      mix(
        lottes(color),
        mix(
          reinhard(color),
          mix(
            reinhard2(color),
            mix(
              uchimura(color),
              mix(
                uncharted2(color),
                unreal(color),
                clamp(tonemappingMode, 6.0, 7.0) - 6.0
              ),
              clamp(tonemappingMode, 5.0, 6.0) - 5.0
            ),
            clamp(tonemappingMode, 4.0, 5.0) - 4.0
          ),
          clamp(tonemappingMode, 3.0, 4.0) - 3.0
        ),
        clamp(tonemappingMode, 2.0, 3.0) - 2.0
      ),
      clamp(tonemappingMode, 1.0, 2.0) - 1.0
    ),
    clamp(tonemappingMode, 0.0, 1.0)
  );
}

uniform samplerCube u_environmentMap;

in vec3 vLocalPos;

out vec4 finalColor;

void main () {
  vec3 envColor = texture(u_environmentMap, vLocalPos).rgb;
  envColor = applyTonemapping(envColor, tonemappingMode);
  envColor = pow(envColor, vec3(1.0 / 2.2));
  finalColor = vec4(envColor, 1.0);
}`,Be=`#version 300 es
precision highp float;

-- DEFINES_HOOK --

#ifndef USE_UNIQUE_PROJECTION_VIEW_MATRIX

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

#endif

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseEnvLightMixFactor;
    float specularEnvLightMixFactor;
  };
#endif
vec3 aces(vec3 x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

float aces(float x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
vec3 tonemapFilmic(vec3 x) {
  vec3 X = max(vec3(0.0), x - 0.004);
  vec3 result = (X * (6.2 * X + 0.5)) / (X * (6.2 * X + 1.7) + 0.06);
  return pow(result, vec3(2.2));
}

float tonemapFilmic(float x) {
  float X = max(0.0, x - 0.004);
  float result = (X * (6.2 * X + 0.5)) / (X * (6.2 * X + 1.7) + 0.06);
  return pow(result, 2.2);
}
vec3 lottes(vec3 x) {
  const vec3 a = vec3(1.6);
  const vec3 d = vec3(0.977);
  const vec3 hdrMax = vec3(8.0);
  const vec3 midIn = vec3(0.18);
  const vec3 midOut = vec3(0.267);

  const vec3 b =
      (-pow(midIn, a) + pow(hdrMax, a) * midOut) /
      ((pow(hdrMax, a * d) - pow(midIn, a * d)) * midOut);
  const vec3 c =
      (pow(hdrMax, a * d) * pow(midIn, a) - pow(hdrMax, a) * pow(midIn, a * d) * midOut) /
      ((pow(hdrMax, a * d) - pow(midIn, a * d)) * midOut);

  return pow(x, a) / (pow(x, a * d) * b + c);
}

float lottes(float x) {
  const float a = 1.6;
  const float d = 0.977;
  const float hdrMax = 8.0;
  const float midIn = 0.18;
  const float midOut = 0.267;

  const float b =
      (-pow(midIn, a) + pow(hdrMax, a) * midOut) /
      ((pow(hdrMax, a * d) - pow(midIn, a * d)) * midOut);
  const float c =
      (pow(hdrMax, a * d) * pow(midIn, a) - pow(hdrMax, a) * pow(midIn, a * d) * midOut) /
      ((pow(hdrMax, a * d) - pow(midIn, a * d)) * midOut);

  return pow(x, a) / (pow(x, a * d) * b + c);
}
vec3 reinhard(vec3 x) {
  return x / (1.0 + x);
}

float reinhard(float x) {
  return x / (1.0 + x);
}
vec3 reinhard2(vec3 x) {
  const float L_white = 4.0;

  return (x * (1.0 + x / (L_white * L_white))) / (1.0 + x);
}

float reinhard2(float x) {
  const float L_white = 4.0;

  return (x * (1.0 + x / (L_white * L_white))) / (1.0 + x);
}
vec3 uchimura(vec3 x, float P, float a, float m, float l, float c, float b) {
  float l0 = ((P - m) * l) / a;
  float L0 = m - m / a;
  float L1 = m + (1.0 - m) / a;
  float S0 = m + l0;
  float S1 = m + a * l0;
  float C2 = (a * P) / (P - S1);
  float CP = -C2 / P;

  vec3 w0 = vec3(1.0 - smoothstep(0.0, m, x));
  vec3 w2 = vec3(step(m + l0, x));
  vec3 w1 = vec3(1.0 - w0 - w2);

  vec3 T = vec3(m * pow(x / m, vec3(c)) + b);
  vec3 S = vec3(P - (P - S1) * exp(CP * (x - S0)));
  vec3 L = vec3(m + a * (x - m));

  return T * w0 + L * w1 + S * w2;
}

vec3 uchimura(vec3 x) {
  const float P = 1.0;  
  const float a = 1.0;  
  const float m = 0.22; 
  const float l = 0.4;  
  const float c = 1.33; 
  const float b = 0.0;  

  return uchimura(x, P, a, m, l, c, b);
}

float uchimura(float x, float P, float a, float m, float l, float c, float b) {
  float l0 = ((P - m) * l) / a;
  float L0 = m - m / a;
  float L1 = m + (1.0 - m) / a;
  float S0 = m + l0;
  float S1 = m + a * l0;
  float C2 = (a * P) / (P - S1);
  float CP = -C2 / P;

  float w0 = 1.0 - smoothstep(0.0, m, x);
  float w2 = step(m + l0, x);
  float w1 = 1.0 - w0 - w2;

  float T = m * pow(x / m, c) + b;
  float S = P - (P - S1) * exp(CP * (x - S0));
  float L = m + a * (x - m);

  return T * w0 + L * w1 + S * w2;
}

float uchimura(float x) {
  const float P = 1.0;  
  const float a = 1.0;  
  const float m = 0.22; 
  const float l = 0.4;  
  const float c = 1.33; 
  const float b = 0.0;  

  return uchimura(x, P, a, m, l, c, b);
}
vec3 uncharted2Tonemap(vec3 x) {
  float A = 0.15;
  float B = 0.50;
  float C = 0.10;
  float D = 0.20;
  float E = 0.02;
  float F = 0.30;
  float W = 11.2;
  return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - E / F;
}

vec3 uncharted2(vec3 color) {
  const float W = 11.2;
  float exposureBias = 2.0;
  vec3 curr = uncharted2Tonemap(exposureBias * color);
  vec3 whiteScale = 1.0 / uncharted2Tonemap(vec3(W));
  return curr * whiteScale;
}

float uncharted2Tonemap(float x) {
  float A = 0.15;
  float B = 0.50;
  float C = 0.10;
  float D = 0.20;
  float E = 0.02;
  float F = 0.30;
  float W = 11.2;
  return ((x * (A * x + C * B) + D * E) / (x * (A * x + B) + D * F)) - E / F;
}

float uncharted2(float color) {
  const float W = 11.2;
  const float exposureBias = 2.0;
  float curr = uncharted2Tonemap(exposureBias * color);
  float whiteScale = 1.0 / uncharted2Tonemap(W);
  return curr * whiteScale;
}
vec3 unreal(vec3 x) {
  return x / (x + 0.155) * 1.019;
}

float unreal(float x) {
  return x / (x + 0.155) * 1.019;
}

vec3 applyTonemapping (vec3 color, float tonemappingMode) {
  return mix(
    aces(color),
    mix(
      tonemapFilmic(color),
      mix(
        lottes(color),
        mix(
          reinhard(color),
          mix(
            reinhard2(color),
            mix(
              uchimura(color),
              mix(
                uncharted2(color),
                unreal(color),
                clamp(tonemappingMode, 6.0, 7.0) - 6.0
              ),
              clamp(tonemappingMode, 5.0, 6.0) - 5.0
            ),
            clamp(tonemappingMode, 4.0, 5.0) - 4.0
          ),
          clamp(tonemappingMode, 3.0, 4.0) - 3.0
        ),
        clamp(tonemappingMode, 2.0, 3.0) - 2.0
      ),
      clamp(tonemappingMode, 1.0, 2.0) - 1.0
    ),
    clamp(tonemappingMode, 0.0, 1.0)
  );
}

vec3 fresnelSchlick(float cosTheta, vec3 F0) {
  return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}
vec3 fresnelSchlickRoughness(float cosTheta, vec3 F0, float roughness) {
  return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}
float DistributionGGX(vec3 N, vec3 H, float roughness) {
  float a      = roughness*roughness;
  float a2     = a*a;
  float NdotH  = max(dot(N, H), 0.0);
  float NdotH2 = NdotH*NdotH;

  float num   = a2;
  float denom = (NdotH2 * (a2 - 1.0) + 1.0);
  denom = PI * denom * denom;

  return num / denom;
}
float GeometrySchlickGGX(float NdotV, float roughness) {
  float r = (roughness + 1.0);
  float k = (r*r) / 8.0;

  float num   = NdotV;
  float denom = NdotV * (1.0 - k) + k;

  return num / denom;
}

float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness) {
  float NdotV = max(dot(N, V), 0.0);
  float NdotL = max(dot(N, L), 0.0);
  float ggx2  = GeometrySchlickGGX(NdotV, roughness);
  float ggx1  = GeometrySchlickGGX(NdotL, roughness);

  return ggx1 * ggx2;
}
float radicalInverse_VdC(uint bits) {
    bits = (bits << 16u) | (bits >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    return float(bits) * 2.3283064365386963e-10; 
}

vec2 hammersley(uint i, uint N) {
    return vec2(float(i)/float(N), radicalInverse_VdC(i));
}
vec3 importanceSampleGGX(vec2 Xi, vec3 N, float roughness) {
  float a = roughness*roughness;

  float phi = 2.0 * PI * Xi.x;
  float cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
  float sinTheta = sqrt(1.0 - cosTheta*cosTheta);

  
  vec3 H;
  H.x = cos(phi) * sinTheta;
  H.y = sin(phi) * sinTheta;
  H.z = cosTheta;

  
  vec3 up        = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
  vec3 tangent   = normalize(cross(up, N));
  vec3 bitangent = cross(N, tangent);

  vec3 sampleVec = tangent * H.x + bitangent * H.y + N * H.z;
  return normalize(sampleVec);
}
vec3 getNormalFromMap(sampler2D normalMap, vec2 uv, vec3 normal, vec3 worldPos) {
  vec3 tangentNormal = texture(normalMap, uv).xyz * 2.0 - 1.0;

  vec3 Q1  = dFdx(worldPos);
  vec3 Q2  = dFdy(worldPos);
  vec2 st1 = dFdx(uv);
  vec2 st2 = dFdy(uv);

  vec3 N   = normalize(normal);
  vec3 T  = normalize(Q1 * st2.t - Q2 * st1.t);
  vec3 B  = -normalize(cross(N, T));
  mat3 TBN = mat3(T, B, N);

  return normalize(TBN * tangentNormal);
}

#ifdef USE_PBR_TEXTURES
  uniform sampler2D u_albedoMap;
  uniform sampler2D u_normalMap;
  uniform sampler2D u_metallicMap;
  uniform sampler2D u_roughnessMap;
  uniform sampler2D u_aoMap;
#else
  uniform vec3 u_albedo;
  uniform float u_metallic;
  uniform float u_roughness;
#endif

uniform samplerCube u_irradianceMap;
uniform samplerCube u_prefilterMap;
uniform sampler2D u_brdfLUT;

in vec3 vNormal;
in vec3 vWorldPos;

#ifdef USE_UV
  in vec2 vUv;
#endif

out vec4 finalColor;

void main () {
  vec3 albedo = vec3(0.0);
  float metallic = 0.0;
  float roughness = 0.0;
  float ao = 0.0;
  vec3 N = vec3(0.0);

  #ifdef USE_PBR_TEXTURES
    albedo = texture(u_albedoMap, vUv).rgb;
    metallic = texture(u_metallicMap, vUv).r;
    roughness = texture(u_roughnessMap, vUv).r;
    ao = texture(u_aoMap, vUv).r;
    N = getNormalFromMap(u_normalMap, vUv, normalize(vNormal), vWorldPos);
  #else
    albedo = u_albedo;
    metallic = u_metallic;
    roughness = u_roughness;
    ao = 1.0;
    N = normalize(vNormal);
  #endif

  vec3 V = normalize(cameraPosition - vWorldPos);

  float NdotV = max(dot(N, V), 0.0000001); 

  
  
  vec3 F0 = mix(vec3(0.04), albedo, metallic);

  
  vec3 Lo = vec3(0.0);
  
  for (int i = 0; i < POINT_LIGHTS_COUNT; i++) {
    
    vec3 L = normalize(pointLightPositions[i] - vWorldPos);
    
    vec3 H = normalize(V + L);

    
    float distance = length(pointLightPositions[i] - vWorldPos);
    
    
    float attenuation = pointLightIntensity / (distance * distance);
    
    
    vec3 radiance = pointLightColors[i] * attenuation;

    float NdotL = max(dot(N, L), 0.0000001);
    float HdotV = max(dot(H, V), 0.0);
    float NdotH = max(dot(N, H), 0.0);
      
    
    float D = DistributionGGX(N, H, roughness);
    
    float G = GeometrySmith(N, V, L, roughness);
    
    
    vec3 F = fresnelSchlick(HdotV, F0);
    
    
    vec3 kS = F;
    vec3 kD = vec3(1.0) - kS;
    kD *= 1.0 - metallic;
    
    float denominator = 4.0 * NdotV * NdotL;
    vec3 specular = (D * G * F) / denominator;  
        
    
    Lo += (kD * albedo / PI + specular) * radiance * NdotL; 
  }

  vec3 F = fresnelSchlickRoughness(NdotV, F0, roughness);

  vec3 kS = F;
  vec3 kD = 1.0 - kS;
  kD *= 1.0 - metallic;	  
    
  vec3 irradiance = texture(u_irradianceMap, N).rgb;
  vec3 diffuse = irradiance * albedo;

  vec3 R = reflect(-V, N);
    
  vec3 prefilteredColor = textureLod(u_prefilterMap, R, roughness * MAX_REFLECTION_LOD).rgb;   
  vec2 envBRDF  = texture(u_brdfLUT, vec2(NdotV, roughness)).rg;
  vec3 specular = prefilteredColor * (F * envBRDF.x + envBRDF.y);

  
  

  
  vec3 irradiancekS = fresnelSchlick(max(dot(N, V), 0.0), F0);
  vec3 irradiancekD = 1.0 - irradiancekS;
  irradiancekD *= 1.0 - metallic;
  vec3 irradianceFromMap = texture(u_irradianceMap, N).rgb;
  vec3 diffuseFromMap = irradianceFromMap * albedo;
  
  vec3 ambient = mix(vec3(0.03) * albedo * ao, kD * diffuse * ao, diffuseEnvLightMixFactor);
  ambient = mix(ambient, (irradiancekD * diffuseFromMap + specular) * ao, specularEnvLightMixFactor);

  
  
  
  
  vec3 color = ambient + Lo;
    
  
  color = applyTonemapping(color, tonemappingMode);
  
  
  color = pow(color, vec3(1.0 / 2.2));

  finalColor = vec4(color, 1.0);
}`,G=`#version 300 es

-- DEFINES_HOOK --

#ifndef USE_UNIQUE_PROJECTION_VIEW_MATRIX

uniform Projection {
  mat4 projMatrix;
  float zNear;
  float zFar;
};

uniform View {
  mat4 viewMatrix;
  vec3 cameraPosition;
  float time;
};

#endif

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseEnvLightMixFactor;
    float specularEnvLightMixFactor;
  };
#endif

uniform mat4 u_projectionViewMatrix;
uniform mat4 u_worldMatrix;

in vec4 aPosition;
out vec3 vLocalPos;

#ifdef USE_UV
  in vec2 aUv;
  out vec2 vUv;
#endif

#ifdef USE_NORMAL
  in vec3 aNormal;
  out vec3 vNormal;
#endif

#ifdef USE_WORLD_POS
  out vec3 vWorldPos;
#endif

void main () {
  vec4 worldPos = u_worldMatrix * aPosition;

  #ifdef IS_CUBEMAP
    
    mat4 rotView = mat4(mat3(viewMatrix));
    vec4 clipPos = projMatrix * rotView * worldPos;
    gl_Position = clipPos.xyww;
  #else
    #ifdef USE_UNIQUE_PROJECTION_VIEW_MATRIX
      gl_Position = u_projectionViewMatrix * worldPos;
    #else
      gl_Position = projMatrix * viewMatrix * worldPos;
    #endif
  #endif
  
  #ifdef USE_NORMAL
    vNormal = mat3(u_worldMatrix) * aNormal;
  #endif

  #ifdef USE_UV
    vUv = aUv;
  #endif

  #ifdef USE_WORLD_POS
    vWorldPos = worldPos.xyz;
  #endif
  
  vLocalPos = aPosition.xyz;
}`,_r="/webgl-pbr-dojo/little_paris_eiffel_tower.png",Er="/webgl-pbr-dojo/little_paris_eiffel_tower_1k.hdr",Tr="/webgl-pbr-dojo/moonlit_golf.png",xr="/webgl-pbr-dojo/moonlit_golf_1k.hdr",vr="/webgl-pbr-dojo/qwantani_moon_noon_puresky_1k.hdr",gr="/webgl-pbr-dojo/qwantani_moon_noon_puresky_1k.png",Rr="/webgl-pbr-dojo/studio_small_08.png",Mr="/webgl-pbr-dojo/studio_small_08_1k.hdr",br="/webgl-pbr-dojo/worn-shiny-metal-albedo_astc.ktx",Ar="/webgl-pbr-dojo/worn-shiny-metal-albedo_etc1.ktx",Ur="/webgl-pbr-dojo/worn-shiny-metal-albedo_etc2.ktx",wr="/webgl-pbr-dojo/worn-shiny-metal-albedo_pvrtc.ktx",Pr="/webgl-pbr-dojo/worn-shiny-metal-albedo_s3tc.ktx",Fr="/webgl-pbr-dojo/worn-shiny-metal-ao_astc.ktx",Sr="/webgl-pbr-dojo/worn-shiny-metal-ao_etc1.ktx",Nr="/webgl-pbr-dojo/worn-shiny-metal-ao_etc2.ktx",yr="/webgl-pbr-dojo/worn-shiny-metal-ao_pvrtc.ktx",Ir="/webgl-pbr-dojo/worn-shiny-metal-ao_s3tc.ktx",Lr="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_astc.ktx",Cr="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_etc1.ktx",Dr="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_etc2.ktx",Br="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_pvrtc.ktx",Or="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_s3tc.ktx",Xr="/webgl-pbr-dojo/worn-shiny-metal-ao_astc.ktx",Hr="/webgl-pbr-dojo/worn-shiny-metal-ao_etc1.ktx",kr="/webgl-pbr-dojo/worn-shiny-metal-ao_etc2.ktx",Vr="/webgl-pbr-dojo/worn-shiny-metal-ao_pvrtc.ktx",Gr="/webgl-pbr-dojo/worn-shiny-metal-ao_s3tc.ktx",jr="/webgl-pbr-dojo/worn-shiny-metal-Roughness_astc.ktx",Wr="/webgl-pbr-dojo/worn-shiny-metal-Roughness_etc1.ktx",zr="/webgl-pbr-dojo/worn-shiny-metal-Roughness_etc2.ktx",Yr="/webgl-pbr-dojo/worn-shiny-metal-Roughness_pvrtc.ktx",Kr="/webgl-pbr-dojo/worn-shiny-metal-Roughness_s3tc.ktx",$r="/webgl-pbr-dojo/rustediron2_basecolor_astc.ktx",qr="/webgl-pbr-dojo/rustediron2_basecolor_etc1.ktx",Qr="/webgl-pbr-dojo/rustediron2_basecolor_etc2.ktx",Zr="/webgl-pbr-dojo/rustediron2_basecolor_pvrtc.ktx",Jr="/webgl-pbr-dojo/rustediron2_basecolor_s3tc.ktx",ta="/webgl-pbr-dojo/rustediron2_ao_astc.ktx",ea="/webgl-pbr-dojo/rustediron2_ao_etc1.ktx",na="/webgl-pbr-dojo/rustediron2_ao_etc2.ktx",ra="/webgl-pbr-dojo/rustediron2_ao_pvrtc.ktx",aa="/webgl-pbr-dojo/rustediron2_ao_s3tc.ktx",oa="/webgl-pbr-dojo/rustediron2_normal_astc.ktx",ia="/webgl-pbr-dojo/rustediron2_normal_etc1.ktx",sa="/webgl-pbr-dojo/rustediron2_normal_etc2.ktx",la="/webgl-pbr-dojo/rustediron2_normal_pvrtc.ktx",ca="/webgl-pbr-dojo/rustediron2_normal_s3tc.ktx",ha="/webgl-pbr-dojo/rustediron2_metallic_astc.ktx",ua="/webgl-pbr-dojo/rustediron2_metallic_etc1.ktx",da="/webgl-pbr-dojo/rustediron2_metallic_etc2.ktx",fa="/webgl-pbr-dojo/rustediron2_metallic_pvrtc.ktx",ma="/webgl-pbr-dojo/rustediron2_metallic_s3tc.ktx",pa="/webgl-pbr-dojo/rustediron2_roughness_astc.ktx",_a="/webgl-pbr-dojo/rustediron2_roughness_etc1.ktx",Ea="/webgl-pbr-dojo/rustediron2_roughness_etc2.ktx",Ta="/webgl-pbr-dojo/rustediron2_roughness_pvrtc.ktx",xa="/webgl-pbr-dojo/rustediron2_roughness_s3tc.ktx",va="/webgl-pbr-dojo/leafy-grass2-albedo_astc.ktx",ga="/webgl-pbr-dojo/leafy-grass2-albedo_etc1.ktx",Ra="/webgl-pbr-dojo/leafy-grass2-albedo_etc2.ktx",Ma="/webgl-pbr-dojo/leafy-grass2-albedo_pvrtc.ktx",ba="/webgl-pbr-dojo/leafy-grass2-albedo_s3tc.ktx",Aa="/webgl-pbr-dojo/leafy-grass2-ao_astc.ktx",Ua="/webgl-pbr-dojo/leafy-grass2-ao_etc1.ktx",wa="/webgl-pbr-dojo/leafy-grass2-ao_etc2.ktx",Pa="/webgl-pbr-dojo/leafy-grass2-ao_pvrtc.ktx",Fa="/webgl-pbr-dojo/leafy-grass2-ao_s3tc.ktx",Sa="/webgl-pbr-dojo/leafy-grass2-normal-ogl_astc.ktx",Na="/webgl-pbr-dojo/leafy-grass2-normal-ogl_etc1.ktx",ya="/webgl-pbr-dojo/leafy-grass2-normal-ogl_etc2.ktx",Ia="/webgl-pbr-dojo/leafy-grass2-normal-ogl_pvrtc.ktx",La="/webgl-pbr-dojo/leafy-grass2-normal-ogl_s3tc.ktx",Ca="/webgl-pbr-dojo/leafy-grass2-metallic_astc.ktx",Da="/webgl-pbr-dojo/leafy-grass2-metallic_etc1.ktx",Ba="/webgl-pbr-dojo/leafy-grass2-metallic_etc2.ktx",Oa="/webgl-pbr-dojo/leafy-grass2-metallic_pvrtc.ktx",Xa="/webgl-pbr-dojo/leafy-grass2-metallic_s3tc.ktx",Ha="/webgl-pbr-dojo/leafy-grass2-roughness_astc.ktx",ka="/webgl-pbr-dojo/leafy-grass2-roughness_etc1.ktx",Va="/webgl-pbr-dojo/leafy-grass2-roughness_etc2.ktx",Ga="/webgl-pbr-dojo/leafy-grass2-roughness_pvrtc.ktx",ja="/webgl-pbr-dojo/leafy-grass2-roughness_s3tc.ktx";const _e=7,Ee=7,ee=10,ne=10,$t=4,pt=512,_t=512,tt=1024,tn=600;let V=null,zt=innerWidth>tn;const ue=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],Wa=[{s3tc:Pr,astc:br,etc1:Ar,etc2:Ur,pvrtc:wr},{s3tc:Or,astc:Lr,etc1:Cr,etc2:Dr,pvrtc:Br},{s3tc:Gr,astc:Xr,etc1:Hr,etc2:kr,pvrtc:Vr},{s3tc:Kr,astc:jr,etc1:Wr,etc2:zr,pvrtc:Yr},{s3tc:Ir,astc:Fr,etc1:Sr,etc2:Nr,pvrtc:yr}],za=[{s3tc:Jr,astc:$r,etc1:qr,etc2:Qr,pvrtc:Zr},{s3tc:ca,astc:oa,etc1:ia,etc2:sa,pvrtc:la},{s3tc:ma,astc:ha,etc1:ua,etc2:da,pvrtc:fa},{s3tc:xa,astc:pa,etc1:_a,etc2:Ea,pvrtc:Ta},{s3tc:aa,astc:ta,etc1:ea,etc2:na,pvrtc:ra}],Ya=[{s3tc:ba,astc:va,etc1:ga,etc2:Ra,pvrtc:Ma},{s3tc:La,astc:Sa,etc1:Na,etc2:ya,pvrtc:Ia},{s3tc:Xa,astc:Ca,etc1:Da,etc2:Ba,pvrtc:Oa},{s3tc:ja,astc:Ha,etc1:ka,etc2:Va,pvrtc:Ga},{s3tc:Fa,astc:Aa,etc1:Ua,etc2:wa,pvrtc:Pa}],be=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Ae=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]],en="tokyo",nn=new Map([["mon-valley",xr],["theatre",Er],["tokyo",vr],["studio",Mr]]),Xt={playAnim:!0,useEnvDiffuseLight:!0,useEnvSpecularLight:!0,image:en},rn=new Float32Array([2]),Te=new Float32Array([16]),an=new Float32Array([1]),on=new Float32Array([1]);let sn=document.getElementById("collapsable");const K=new yn.exports.Pane({title:"Parameters",expanded:innerWidth>tn});K.registerPlugin(In);so();K.element.parentNode.style.setProperty("width","400px");K.addInput(Xt,"playAnim",{label:"Play Animation"});K.addBlade({view:"list",label:"Tone Mapping Mode",options:ue.map(t=>({text:t,value:t})),value:ue[2]}).on("change",({value:t})=>{rn[0]=ue.indexOf(t)});K.addBlade({view:"slider",label:"Point Light Luminance",min:0,max:50,value:Te[0]}).on("change",({value:t})=>{Te[0]=t});K.addInput(Xt,"useEnvDiffuseLight",{label:"Use Environment Diffuse Light"}).on("change",({value:t})=>{an[0]=t?1:0});K.addInput(Xt,"useEnvSpecularLight",{label:"Use Environment Specular Light"}).on("change",({value:t})=>{on[0]=t});K.addInput(Xt,"image",{label:"Environment Image",view:"thumbnail-list",options:[{text:"Moonlit Golf",value:"mon-valley",src:Tr},{text:"Little Paris",value:"theatre",src:_r},{text:"Qwantani Noon",value:"tokyo",src:gr},{text:"Studio Small",value:"studio",src:Rr}]}).on("change",({value:{value:t}})=>{_n(nn.get(t)).then(n=>{wt=n,Qt=!0})});const rt=document.createElement("canvas");document.body.appendChild(rt);const a=rt.getContext("webgl2"),Ue=new ge(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);Ue.position=[0,0,1];Ue.lookAt=[0,0,0];Ue.updateProjectionViewMatrix();const D=new $e(45*Math.PI/180,innerWidth/innerHeight,.1,100);D.position=[10.84,-.17,8.98];D.lookAt=[0,0,0];D.updateProjectionMatrix();new Zn(D,rt,!1,Ze()?2:.85);const O=new $e(90*Math.PI/180,1,.1,10).updateProjectionMatrix(),Gt=Kn({radius:.5,widthSegments:32,heightSegments:32}),vt=te({width:5,height:5/8}),re=Qn({flipUVy:!0}),k=new qe,Oe={POINT_LIGHTS_COUNT:$t.toString()},qt=[],Ka=ee/_e,$a=ne/Ee;for(let t=0;t<Ee;t++)for(let n=0;n<_e;n++){const r=n*Ka-ee/2+Gt.radius,i=t*$a-ne/2+Gt.radius,o=new Ce(a,Gt,G,Be,Oe);o.setPosition([r,i,-5]);const s=t/(Ee-1);o.setUniform("u_metallic",{type:a.FLOAT,value:s});const l=Math.max(.04,n/(_e-1));o.setUniform("u_roughness",{type:a.FLOAT,value:l}),k.addChild(o),qt.push(o);const c=new Ce(a,Gt,G,Be,q({USE_PBR_TEXTURES:!0,USE_UV:!0},Oe));c.setPosition([r,i,5]),k.addChild(c),qt.push(c)}const ln=new Re(a,"roughness",vt,G,Je);ln.setPosition([-ee/2+vt.width/2,-ne/2-vt.height,-5]);k.addChild(ln);const cn=new Re(a,"metallic",vt,G,Je);cn.setPosition([-ee/2-vt.height,-ne/2+vt.width/2,-5]).setRotation([0,0,Math.PI*.5]);k.addChild(cn);const Yt=Zt(a,k.children[0].program,"Projection",["projMatrix","zNear","zFar"]),qa=Jt(a,Yt.blockSize,0),Kt=Zt(a,k.children[0].program,"View",["viewMatrix","cameraPosition","time"]),Qa=Jt(a,Kt.blockSize,1),et=Zt(a,k.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","diffuseEnvLightMixFactor","specularEnvLightMixFactor"]),Za=Jt(a,et.blockSize,2),hn=Zt(a,k.children[0].program,"PostFX",["tonemappingMode"]),Ja=Jt(a,hn.blockSize,3),At=[],un=[],dn=[],to=[Vt([243,156,18]),Vt([41,128,185]),Vt([192,57,43]),Vt([142,68,173])];for(let t=0;t<$t;t++){At.push(new Float32Array(3));const n=to[t];un.push(new Float32Array(n));const r=new sr(a);r.color=[...n,1],k.addChild(r),dn.push(r)}const xe=new Me(a,re,G,mr);xe.setUniform("u_equirectangularMap",{type:a.INT,value:0});const ve=new Me(a,re,G,dr);ve.setUniform("u_environmentMap",{type:a.INT,value:0});const Ut=new Me(a,re,G,fr,{CUBEMAP_SIDE_SIZE:tt});Ut.setUniform("u_environmentMap",{type:a.INT,value:0});Ut.setUniform("u_roughness",{type:a.FLOAT,value:0});const eo=new ar(a,pt,_t,G,ur),fn=new rr(a,re,G,pr),no=new hr(a,pt,_t);{const n=pt*.2,r=_t*.2,i=24;no.setPosition([-innerWidth/2+n/2+i,-innerHeight/2+r/2+i,0]).setScale([.2,.2,1]).updateWorldMatrix()}a.getExtension("EXT_color_buffer_half_float");a.getExtension("EXT_color_buffer_float");a.getExtension("OES_texture_half_float");a.getExtension("OES_texture_half_float_linear");let Qt=!1,wt;_n(nn.get(en)).then(t=>{wt=t,Qt=!0});Promise.all([Promise.all(Wa.map((t,n)=>le(a,t))),Promise.all(za.map((t,n)=>le(a,t))),Promise.all(Ya.map((t,n)=>le(a,t)))]).then(t=>{let n=0;for(const r of qt){const i=t[n];r.albedoMap=i[0],r.normalMap=i[1],r.metallicMap=i[2],r.roughnessMap=i[3],r.aoMap=i[4],n++,n===3&&(n=0)}});requestAnimationFrame(mn);pn();window.addEventListener("resize",pn);window.addEventListener("DOMContentLoaded",()=>{document.getElementById("header").style.display="block";var t=Ze()?document.getElementById("instructions-touch"):document.getElementById("instructions-desktop");t.style.display="block",zt&&(sn.style.display="block")});document.getElementById("info-icon").addEventListener("click",()=>{zt=!zt,sn.style.display=zt?"block":"none"});function mn(t){if(requestAnimationFrame(mn),Qt&&(V={width:wt.width,height:wt.height,imageData:wt.dataFloat,step:0,maxSteps:3},Qt=!1),V){if(V.step===0)ro(V);else if(V.step===10)ao();else if(V.step===20)oo();else if(V.step===30){io(),V=null;return}V.step++;return}if(a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),D.updateViewMatrix(),a.bindBuffer(a.UNIFORM_BUFFER,qa),a.bufferSubData(a.UNIFORM_BUFFER,Yt.uniforms.projMatrix.offset,D.projectionMatrix,0),a.bufferSubData(a.UNIFORM_BUFFER,Yt.uniforms.zNear.offset,new Float32Array([D.near]),0),a.bufferSubData(a.UNIFORM_BUFFER,Yt.uniforms.zFar.offset,new Float32Array([D.far]),0),a.bindBuffer(a.UNIFORM_BUFFER,Qa),a.bufferSubData(a.UNIFORM_BUFFER,Kt.uniforms.viewMatrix.offset,D.viewMatrix,0),a.bufferSubData(a.UNIFORM_BUFFER,Kt.uniforms.cameraPosition.offset,new Float32Array(D.position),0),a.bufferSubData(a.UNIFORM_BUFFER,Kt.uniforms.time.offset,new Float32Array([t]),0),a.bindBuffer(a.UNIFORM_BUFFER,Za),Xt.playAnim){const n=t*.001;for(let r=0;r<$t;r++){const i=Math.PI*2/$t,o=[Math.cos(r*i+n)*(Math.sin(n)*2+4),Math.sin(r*i+n)*(Math.sin(n)*2+4),Math.cos(n)*3];At[r][0]=o[0],At[r][1]=o[1],At[r][2]=o[2],dn[r].setPosition(o).updateWorldMatrix(),a.bufferSubData(a.UNIFORM_BUFFER,et.uniforms.pointLightPositions.offset+r*et.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,At[r],0),a.bufferSubData(a.UNIFORM_BUFFER,et.uniforms.pointLightColors.offset+r*4*Float32Array.BYTES_PER_ELEMENT,un[r],0)}}a.bufferSubData(a.UNIFORM_BUFFER,et.uniforms.pointLightIntensity.offset,Te,0),a.bufferSubData(a.UNIFORM_BUFFER,et.uniforms.diffuseEnvLightMixFactor.offset,an,0),a.bufferSubData(a.UNIFORM_BUFFER,et.uniforms.specularEnvLightMixFactor.offset,on,0),a.bindBuffer(a.UNIFORM_BUFFER,Ja),a.bufferSubData(a.UNIFORM_BUFFER,hn.uniforms.tonemappingMode.offset,rn),a.enable(a.DEPTH_TEST),a.enable(a.BLEND),a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA),a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),a.clearColor(.1,.1,.1,1),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),a.depthFunc(a.LEQUAL),fn.render(),a.depthFunc(a.LESS),k.updateWorldMatrix().render()}var bt,z,dt,ft,st;let Et=null,Tt=null;function ro(t){const{width:n,height:r,imageData:i}=t;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,1),bt&&a.deleteTexture(bt),bt=a.createTexture(),a.bindTexture(a.TEXTURE_2D,bt),a.texImage2D(a.TEXTURE_2D,0,a.RGB9_E5,n,r,0,a.RGB,a.FLOAT,i),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.bindTexture(a.TEXTURE_2D,null),xe.texture=bt,Et||(Et=a.createFramebuffer(),Tt=a.createRenderbuffer()),a.bindFramebuffer(a.FRAMEBUFFER,Et),a.bindRenderbuffer(a.RENDERBUFFER,Tt),a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,tt,tt),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,Tt),z&&a.deleteTexture(z),z=a.createTexture(),a.bindTexture(a.TEXTURE_CUBE_MAP,z);for(let o=0;o<6;o++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,a.RGBA16F,tt,tt,0,a.RGBA,a.HALF_FLOAT,null);a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MIN_FILTER,a.LINEAR_MIPMAP_LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAG_FILTER,a.LINEAR),a.viewport(0,0,tt,tt);for(let o=0;o<6;o++)a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+o,z,0),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),O.lookAt=be[o],O.upVector=Ae[o],O.updateViewMatrix().updateProjectionViewMatrix(),xe.render(O);a.generateMipmap(a.TEXTURE_CUBE_MAP),a.bindFramebuffer(a.FRAMEBUFFER,null)}function ao(){ve.envTexture=z;const t=32;dt&&a.deleteTexture(dt),dt=a.createTexture(),a.bindTexture(a.TEXTURE_CUBE_MAP,dt);for(let n=0;n<6;n++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a.RGBA16F,t,t,0,a.RGBA,a.HALF_FLOAT,null);a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAG_FILTER,a.LINEAR),a.bindFramebuffer(a.FRAMEBUFFER,Et),a.bindRenderbuffer(a.RENDERBUFFER,Tt),a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,t,t),a.viewport(0,0,t,t);for(let n=0;n<6;n++)a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+n,dt,0),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),O.lookAt=be[n],O.upVector=Ae[n],O.updateViewMatrix().updateProjectionViewMatrix(),ve.render(O);a.bindFramebuffer(a.FRAMEBUFFER,null)}function oo(){ft&&a.deleteTexture(ft);const t=128;ft=a.createTexture(),a.bindTexture(a.TEXTURE_CUBE_MAP,ft);for(let r=0;r<6;r++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,a.RGBA16F,t,t,0,a.RGBA,a.HALF_FLOAT,null);a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MIN_FILTER,a.LINEAR_MIPMAP_LINEAR),a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAG_FILTER,a.LINEAR),a.generateMipmap(a.TEXTURE_CUBE_MAP),Ut.envTexture=z,a.bindFramebuffer(a.FRAMEBUFFER,Et);const n=5;for(let r=0;r<n;r++){const i=t*Math.pow(.5,r),o=t*Math.pow(.5,r);a.bindRenderbuffer(a.RENDERBUFFER,Tt),a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,i,o),a.viewport(0,0,i,o);const s=r/(n-1);Ut.updateUniform("u_roughness",s);for(let l=0;l<6;l++)O.lookAt=be[l],O.upVector=Ae[l],O.updateViewMatrix().updateProjectionViewMatrix(),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+l,ft,r),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),Ut.render(O)}a.bindFramebuffer(a.FRAMEBUFFER,null)}function io(){st&&a.deleteTexture(st),st=a.createTexture(),a.bindTexture(a.TEXTURE_2D,st),a.texImage2D(a.TEXTURE_2D,0,a.RGBA16F,pt,_t,0,a.RGBA,a.HALF_FLOAT,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.bindFramebuffer(a.FRAMEBUFFER,Et),a.bindRenderbuffer(a.RENDERBUFFER,Tt),a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,pt,_t),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,st,0),a.viewport(0,0,pt,_t),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),eo.render(),a.bindFramebuffer(a.FRAMEBUFFER,null),fn.texture=z;for(const t of qt)t.irradianceMapTexture=dt,t.prefilterMapTexture=ft,t.brdfLutTexture=st}function pn(){D.aspect=innerWidth/innerHeight,D.updateProjectionMatrix(),rt.width=innerWidth*devicePixelRatio,rt.height=innerHeight*devicePixelRatio,rt.style.setProperty("width",`${innerWidth}px`),rt.style.setProperty("height",`${innerHeight}px`)}function so(){const t=`
    .tp-thumbv_ovl .tp-thumbv_opt:first-of-type {
      display: none !important;
    }
    .tp-thumbv_thmb, .tp-thumbv_sthmb {
      background-size: cover !important;
    }
  `,n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=t:n.styleSheet.cssText=t,document.getElementsByTagName("head")[0].appendChild(n)}function _n(t){return new Promise(n=>{const r=new at;r.src=t,r.onload=()=>{n(r)}})}
