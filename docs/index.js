var Tn=Object.defineProperty;var we=Object.getOwnPropertySymbols;var xn=Object.prototype.hasOwnProperty,vn=Object.prototype.propertyIsEnumerable;var oe=(t,n,a)=>n in t?Tn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,Q=(t,n)=>{for(var a in n||(n={}))xn.call(n,a)&&oe(t,a,n[a]);if(we)for(var a of we(n))vn.call(n,a)&&oe(t,a,n[a]);return t};var u=(t,n,a)=>(oe(t,typeof n!="symbol"?n+"":n,a),a),Se=(t,n,a)=>{if(!n.has(t))throw TypeError("Cannot "+a)};var S=(t,n,a)=>(Se(t,n,"read from private field"),a?a.call(t):n.get(t)),C=(t,n,a)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,a)},D=(t,n,a,i)=>(Se(t,n,"write to private field"),i?i.call(t,a):n.set(t,a),a);import{c as J,s as He,n as ke,p as Rn,o as Mn,a as Ne,b as at,u as An,m as Ve,d as Ge,i as We,t as gn,f as _t,l as Un,e as ie,g as Pn,h as Fn,r as bn,j as wn,k as Sn,q as Nn,A as yn,v as Ln,T as In}from"./assets/vendor.06b00773.js";const Cn=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};Cn();function ot(){var t=document.createElement("canvas"),n="t",a=1,i=2.2,o=null,s,l;return t.__defineGetter__("exposure",function(){return a}),t.__defineSetter__("exposure",function(c){a=c,o&&(ct(o,a,i,l.data),s.putImageData(l,0,0))}),t.__defineGetter__("gamma",function(){return i}),t.__defineSetter__("gamma",function(c){i=c,o&&(ct(o,a,i,l.data),s.putImageData(l,0,0))}),t.__defineGetter__("dataFloat",function(){return fe(o)}),t.__defineGetter__("dataRGBE",function(){return o}),t.toHDRBlob=function(c,h,m){function d(U,F,w){var N=U.createShader(w);return U.shaderSource(N,F),U.compileShader(N),N}function _(U,F,w){var N=U.createProgram(),I,H;return U.attachShader(N,I=d(U,F,U.VERTEX_SHADER)),U.attachShader(N,H=d(U,w,U.FRAGMENT_SHADER)),U.linkProgram(N),U.deleteShader(I),U.deleteShader(H),N}var p=h&&h.match(/rgb9_e5/i)?new Uint8Array(ze(fe(o)).buffer):new Uint8Array(o.buffer),f=`precision highp float;
attribute vec3 position;
varying vec2 tex;
void main() { tex = position.xy/2.0+0.5; gl_Position = vec4(position, 1.0); }`,x=`precision highp float;
precision highp sampler2D;
uniform sampler2D tx;
varying vec2 tex;
void main() { gl_FragColor = texture2D(tx,tex); }`,v=this.width,A=this.height;if(v*A*4<p.byteLength)return console.error("not big enough.");var R=document.createElement("canvas");R.width=v,R.height=A;var T=R.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0}),y=T.createTexture();T.activeTexture(T.TEXTURE0),T.bindTexture(T.TEXTURE_2D,y),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,!0),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MAG_FILTER,T.NEAREST),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MIN_FILTER,T.NEAREST),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_S,T.CLAMP_TO_EDGE),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_T,T.CLAMP_TO_EDGE),T.texImage2D(T.TEXTURE_2D,0,T.RGBA,v,A,0,T.RGBA,T.UNSIGNED_BYTE,new Uint8Array(p.buffer));var b=_(T,f,x),M=T.getUniformLocation(b,"tx"),q=new Float32Array([-1,-1,0,1,-1,0,1,1,0,1,1,0,-1,1,0,-1,-1,0]),g=T.createBuffer();if(T.enableVertexAttribArray(0),T.bindBuffer(T.ARRAY_BUFFER,g),T.bufferData(T.ARRAY_BUFFER,q,T.STATIC_DRAW),T.vertexAttribPointer(0,3,T.FLOAT,!1,0,0),T.useProgram(b),T.uniform1i(M,0),T.drawArrays(T.TRIANGLES,0,6),T.deleteTexture(y),T.deleteProgram(b),c)return R.toBlob(c)},t.__defineGetter__("src",function(){return n}),t.__defineSetter__("src",function(c){if(n=c,s&&s.clearRect(0,0,this.width,this.height),c.match(/\.hdr$/i))Bn(c,function(m,d,_){o=m,this.width=this.style.width=d,this.height=this.style.height=_,s=this.getContext("2d"),l=s.getImageData(0,0,d,_),ct(m,a,i,l.data),s.putImageData(l,0,0),this.onload&&this.onload()}.bind(t));else if(c.match(/\.rgb9_e5\.png$/i)){var h=new Image;h.src=c,h.onload=function(){var m=document.createElement("canvas"),d=this.width=this.style.width=m.width=h.width,_=this.height=this.style.height=m.height=h.height,p=m.getContext("webgl"),f=p.createTexture();p.bindTexture(p.TEXTURE_2D,f),p.texImage2D(p.TEXTURE_2D,0,p.RGBA,p.RGBA,p.UNSIGNED_BYTE,h),fb=p.createFramebuffer(),p.bindFramebuffer(p.FRAMEBUFFER,fb),p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,f,0);var x=new Uint8Array(d*_*4);p.readPixels(0,0,d,_,p.RGBA,p.UNSIGNED_BYTE,x),p.deleteTexture(f),p.deleteFramebuffer(fb),this.dataRAW=new Uint32Array(x.buffer),o=je(Ye(this.dataRAW)),s=this.getContext("2d"),l=s.getImageData(0,0,d,_),ct(o,a,i,l.data),s.putImageData(l,0,0),this.onload&&this.onload()}.bind(t)}else if(c.match(/\.hdr\.png$|\.rgbe\.png/i)){var h=new Image;h.src=c,h.onload=function(){var d=document.createElement("canvas"),_=this.width=this.style.width=d.width=h.width,p=this.height=this.style.height=d.height=h.height,f=d.getContext("webgl"),x=f.createTexture();f.bindTexture(f.TEXTURE_2D,x),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,f.RGBA,f.UNSIGNED_BYTE,h),fb=f.createFramebuffer(),f.bindFramebuffer(f.FRAMEBUFFER,fb),f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,x,0);var v=new Uint8Array(_*p*4);f.readPixels(0,0,_,p,f.RGBA,f.UNSIGNED_BYTE,v),f.deleteTexture(x),f.deleteFramebuffer(fb),o=v,s=this.getContext("2d"),l=s.getImageData(0,0,_,p),ct(o,a,i,l.data),s.putImageData(l,0,0),this.onload&&this.onload()}.bind(t)}}),t}function Dn(t,n){for(var a in n)t[a]=n[a];return t}function Bn(t,n){var a=Dn(new XMLHttpRequest,{responseType:"arraybuffer"});return a.onerror=n.bind(a,!1),a.onload=function(){if(this.status>=400)return this.onerror();for(var i="",o=0,s=new Uint8Array(this.response),l;!i.match(/\n\n[^\n]+\n/g);)i+=String.fromCharCode(s[o++]);if(l=i.match(/FORMAT=(.*)$/m)[1],l!="32-bit_rle_rgbe")return console.warn("unknown format : "+l),this.onerror();for(var c=i.split(/\n/).reverse()[1].split(" "),h=c[3]*1,m=c[1]*1,d=new Uint8Array(h*m*4),_=0,p=0;p<m;p++){var f=s.slice(o,o+=4),x=[];if(f[0]!=2||f[1]!=2||f[2]&128){var v=h,A=0;for(o-=4;v>0;)if(d.set(s.slice(o,o+=4),_),d[_]==1&&d[_+1]==1&&d[_+2]==1){for(d[_+3]<<A;R>0;R--)d.set(d.slice(_-4,_),_),_+=4,v--;A+=8}else v--,_+=4,A=0}else{if((f[2]<<8)+f[3]!=h)return console.warn("HDR line mismatch .."),this.onerror();for(var R=0;R<4;R++)for(var T=R*h,y=(R+1)*h,b,M;T<y;)if(b=s.slice(o,o+=2),b[0]>128)for(M=b[0]-128;M-- >0;)x[T++]=b[1];else for(M=b[0]-1,x[T++]=b[1];M-- >0;)x[T++]=s[o++];for(var R=0;R<h;R++)d[_++]=x[R],d[_++]=x[R+h],d[_++]=x[R+2*h],d[_++]=x[R+3*h]}}n&&n(d,h,m)},a.open("GET",t,!0),a.send(null),a}function ze(t,m){for(var a,i,o,s,l,c,h=t.byteLength/12|0,m=m||new Uint32Array(h),d=0;d<h;d++)a=Math.min(32768,t[d*3]),i=Math.min(32768,t[d*3+1]),o=Math.min(32768,t[d*3+2]),s=Math.max(Math.max(a,i),o),l=Math.max(-16,Math.floor(Math.log2(s)))+16,c=Math.pow(2,l-24),Math.floor(s/c+.5)==511&&(c*=2,l+=1),m[d]=(Math.floor(a/c+.5)<<23)+(Math.floor(i/c+.5)<<14)+(Math.floor(o/c+.5)<<5)+(l|0);return m}function Ye(t,s){for(var a,i,o=t.byteLength>>2,s=s||new Float32Array(o*3),l=0;l<o;l++)a=t[l],i=Math.pow(2,(a&31)-24),s[l*3]=(a>>>23)*i,s[l*3+1]=(a>>>14&511)*i,s[l*3+2]=(a>>>5&511)*i;return s}function je(t,h){for(var a,i,o,s,l,c=t.byteLength/12|0,h=h||new Uint8Array(c*4),m=0;m<c;m++)a=t[m*3],i=t[m*3+1],o=t[m*3+2],s=Math.max(Math.max(a,i),o),e=Math.ceil(Math.log2(s)),l=Math.pow(2,e-8),h[m*4]=a/l|0,h[m*4+1]=i/l|0,h[m*4+2]=o/l|0,h[m*4+3]=e+128;return h}function fe(t,o){for(var a,i=t.byteLength>>2,o=o||new Float32Array(i*3),s=0;s<i;s++)a=Math.pow(2,t[s*4+3]-(128+8)),o[s*3]=t[s*4]*a,o[s*3+1]=t[s*4+1]*a,o[s*3+2]=t[s*4+2]*a;return o}function ct(t,n,a,c){n=Math.pow(2,n===void 0?1:n)/2,a===void 0&&(a=2.2);for(var o=1/a,s,l=t.byteLength>>2,c=c||new Uint8ClampedArray(l*4),h=0;h<l;h++)s=n*Math.pow(2,t[h*4+3]-(128+8)),c[h*4]=255*Math.pow(t[h*4]*s,o),c[h*4+1]=255*Math.pow(t[h*4+1]*s,o),c[h*4+2]=255*Math.pow(t[h*4+2]*s,o),c[h*4+3]=255;return c}function On(t,n,a,l){n=Math.pow(2,n===void 0?1:n)/2,a===void 0&&(a=2.2);for(var o=1/a,s=t.byteLength/12|0,l=l||new Uint8ClampedArray(s*4),c=0;c<s;c++)l[c*4]=255*Math.pow(t[c*3]*n,o),l[c*4+1]=255*Math.pow(t[c*3+1]*n,o),l[c*4+2]=255*Math.pow(t[c*3+2]*n,o),l[c*4+3]=255;return l}ot.floatToRgbe=je;ot.rgbeToFloat=fe;ot.floatToRgb9_e5=ze;ot.rgb9_e5ToFloat=Ye;ot.rgbeToLDR=ct;ot.floatToLDR=On;var Xn=Object.defineProperty,Hn=(t,n,a)=>n in t?Xn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,O=(t,n,a)=>(Hn(t,typeof n!="symbol"?n+"":n,a),a),Ke=(t,n,a)=>{if(!n.has(t))throw TypeError("Cannot "+a)},L=(t,n,a)=>(Ke(t,n,"read from private field"),a?a.call(t):n.get(t)),zt=(t,n,a)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,a)},kn=(t,n,a,i)=>(Ke(t,n,"write to private field"),i?i.call(t,a):n.set(t,a),a),se="-- DEFINES_HOOK --",Vn=(t,n,a,i={})=>{if(Object.keys(i).length&&!a.includes(se))throw new Error(`in order to include defines, you must provide "${se}" in your shader code`);let o="";for(const[c,h]of Object.entries(i)){if(typeof h=="boolean"&&!h)continue;let m=`${h}`;typeof h=="number"&&Number.isInteger(h)&&(m+=".0"),o+=`#define ${c} ${m}
`}a=a.replace(se,o);const s=t.createShader(n);if(t.shaderSource(s,a),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS))return s;const l=`
    Error in ${n===t.VERTEX_SHADER?"Vertex":"Fragment"} shader:
    ${t.getShaderInfoLog(s)}
  `;throw t.deleteShader(s),new Error(l)},ye=Vn,Gn=(t,n,a,i)=>{const o=ye(t,t.VERTEX_SHADER,n,i),s=ye(t,t.FRAGMENT_SHADER,a,i),l=t.createProgram();if(t.attachShader(l,o),t.attachShader(l,s),t.linkProgram(l),t.detachShader(l,o),t.deleteShader(o),t.detachShader(l,s),t.deleteShader(s),t.getProgramParameter(l,t.LINK_STATUS))return l;const c=new Error(`Error linking program: ${t.getProgramInfoLog(l)}`);throw t.deleteProgram(l),c},Wn=Gn,zn=(t,n,a,i)=>{const o=t.getUniformBlockIndex(n,a),s=t.getActiveUniformBlockParameter(n,o,t.UNIFORM_BLOCK_DATA_SIZE),l=t.getActiveUniformBlockParameter(n,o,t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),c=t.getActiveUniformBlockParameter(n,o,t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),h=t.getUniformIndices(n,i),m=t.getActiveUniforms(n,h,t.UNIFORM_OFFSET),d=t.getActiveUniforms(n,h,t.UNIFORM_SIZE),_={};for(let p=0;p<i.length;p++){const f=i[p],x={index:h[p],offset:m[p],size:d[p]};_[f]=x}return{blockIndex:o,blockSize:s,usedInVertexShader:l,usedInFragmentShader:c,uniforms:_}},Jt=zn,Yn=(t,n,a=0,i=t.DYNAMIC_DRAW)=>{const o=t.createBuffer();return t.bindBuffer(t.UNIFORM_BUFFER,o),t.bufferData(t.UNIFORM_BUFFER,n,i),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,a,o),o},te=Yn,jn=(t,n,a,i)=>{let o;switch(n){case t.FLOAT:return t.uniform1f(a,i);case t.FLOAT_VEC2:return o=i,t.uniform2f(a,o[0],o[1]);case t.FLOAT_VEC3:return o=i,t.uniform3f(a,o[0],o[1],o[2]);case t.FLOAT_VEC4:return o=i,t.uniform4f(a,o[0],o[1],o[2],o[3]);case t.BOOL:case t.INT:case t.SAMPLER_2D:case t.SAMPLER_CUBE:return t.uniform1i(a,i);case t.BOOL_VEC2:case t.INT_VEC2:return o=i,t.uniform2i(a,o[0],o[1]);case t.BOOL_VEC3:case t.INT_VEC3:return o=i,t.uniform3i(a,o[0],o[1],o[2]);case t.BOOL_VEC4:case t.INT_VEC4:return o=i,t.uniform4i(a,o[0],o[1],o[2],o[3]);case t.FLOAT_MAT2:return t.uniformMatrix2fv(a,!1,i);case t.FLOAT_MAT3:return t.uniformMatrix3fv(a,!1,i);case t.FLOAT_MAT4:return t.uniformMatrix4fv(a,!1,i);default:throw new Error("wrong type for uniform")}},Le=jn,Kn=(t={})=>{const{radius:n=.5,widthSegments:a=16,heightSegments:i=Math.ceil(a*.5),phiStart:o=0,phiLength:s=Math.PI*2,thetaStart:l=0,thetaLength:c=Math.PI}=t,h=a,m=i,d=o,_=s,p=l,f=c,x=(h+1)*(m+1),v=h*m*6,A=3+3+2,R=new Float32Array(x*A),T=x>65536?new Uint32Array(v):new Uint16Array(v);let y=0,b=0,M=0;const q=p+f,g=[],U=J();for(let F=0;F<=m;F++){const w=[],N=F/m;for(let I=0;I<=h;I++,y++){const H=I/h,z=-n*Math.cos(d+H*_)*Math.sin(p+N*f),kt=n*Math.cos(p+N*f),At=n*Math.sin(d+H*_)*Math.sin(p+N*f);R[y*A+0]=z,R[y*A+1]=kt,R[y*A+2]=At,He(U,z,kt,At),ke(U,U),R[y*A+3]=U[0],R[y*A+4]=U[1],R[y*A+5]=U[2],R[y*A+6]=H,R[y*A+7]=1-N,w.push(b++)}g.push(w)}for(let F=0;F<m;F++)for(let w=0;w<h;w++){const N=g[F][w+1],I=g[F][w],H=g[F+1][w],z=g[F+1][w+1];(F!==0||p>0)&&(T[M*3]=N,T[M*3+1]=I,T[M*3+2]=z,M++),(F!==m-1||q<Math.PI)&&(T[M*3]=I,T[M*3+1]=H,T[M*3+2]=z,M++)}return{radius:n,vertexCount:v,vertexStride:A,interleavedArray:R,indicesArray:T}},$n=Kn,qn=(t={})=>{const{width:n=1,height:a=1,widthSegments:i=1,heightSegments:o=1,flipUVy:s=!1}=t,l=i,c=o,h=(l+1)*(c+1),m=l*c*6,d=new Float32Array(h*3+h*2),_=h>65536?new Uint32Array(m):new Uint16Array(m);let p=0,f=0;const x=p,v=n/l,A=a/c,R=1,T=-1,y=0,b=3+2;for(let M=0;M<=c;M++){const q=M*A-a/2;for(let g=0;g<=l;g++,p++){const U=g*v-n/2;if(d[p*b+0]=U*R,d[p*b+1]=q*T,d[p*b+2]=y/2,d[p*b+3]=g/l,d[p*b+4]=s?1-M/c:M/c,M===c||g===l)continue;const F=x+g+M*(l+1),w=x+g+(M+1)*(l+1),N=x+g+(M+1)*(l+1)+1,I=x+g+M*(l+1)+1;_[f*6]=F,_[f*6+1]=w,_[f*6+2]=I,_[f*6+3]=w,_[f*6+4]=N,_[f*6+5]=I,f++}}return{width:n,height:a,vertexCount:_.length,vertexStride:b,interleavedArray:d,indicesArray:_}},ee=qn,Qn=(t={})=>{const{width:n=1,height:a=1,depth:i=1,widthSegments:o=1,heightSegments:s=1,depthSegments:l=1,uvOffsetEachFace:c=!1,flipUVy:h=!1}=t,m=o,d=s,_=l,p=(m+1)*(d+1)*2+(m+1)*(_+1)*2+(d+1)*(_+1)*2,f=(m*d*2+m*_*2+d*_*2)*6,x=3+3+2,v=new Float32Array(p*x),A=f>65536?new Uint32Array(f):new Uint16Array(f);let R=0,T=0;return it(v,A,i,a,n,_,d,4,2,1,0,-1,-1,R,T,x,c,h),it(v,A,i,a,-n,_,d,2,2,1,0,1,-1,R+=(_+1)*(d+1),T+=_*d,x,c,h),it(v,A,n,i,a,_,d,0,0,2,1,1,1,R+=(_+1)*(d+1),T+=_*d,x,c,h),it(v,A,n,i,-a,_,d,5,0,2,1,1,-1,R+=(m+1)*(_+1),T+=m*_,x,c,h),it(v,A,n,a,-i,m,d,3,0,1,2,-1,-1,R+=(m+1)*(_+1),T+=m*_,x,c,h),it(v,A,n,a,i,m,d,1,0,1,2,1,-1,R+=(m+1)*(d+1),T+=m*d,x,c,h),{width:n,height:a,depth:i,vertexCount:f,vertexStride:x,interleavedArray:v,indicesArray:A}},Zn=Qn;function it(t,n,a,i,o,s,l,c,h=0,m=1,d=2,_=1,p=-1,f=0,x=0,v=8,A=!1,R=!1){const T=f,y=a/s,b=i/l;for(let M=0;M<=l;M++){const q=M*b-i/2;for(let g=0;g<=s;g++,f++){const U=g*y-a/2;t[f*v+0+h]=U*_,t[f*v+0+m]=q*p,t[f*v+0+d]=o/2,t[f*v+3+h]=0,t[f*v+3+m]=0,t[f*v+3+d]=o>=0?1:-1;const F=1/6,w=F*c,N=A?w+g/s*F:g/s,I=A?R?w+F-w+M/l*F:w+M/l*F:R?1-M/l:M/l;if(t[f*v+6+0]=N,t[f*v+6+1]=I,M===l||g===s)continue;const H=T+g+M*(s+1),z=T+g+(M+1)*(s+1),kt=T+g+(M+1)*(s+1)+1,At=T+g+M*(s+1)+1;n[x*6]=H,n[x*6+1]=z,n[x*6+2]=At,n[x*6+3]=z,n[x*6+4]=kt,n[x*6+5]=At,x++}}}var Ie=(t,n,a)=>Math.min(Math.max(t,n),a),$e=class{constructor(){u(this,"upVector",_t(0,1,0));u(this,"position",_t(0,0,0));u(this,"lookAt",_t(0,0,0));u(this,"projectionMatrix",at());u(this,"viewMatrix",at());u(this,"viewMatrixInverse",at());u(this,"projectionViewMatrix",at())}updateViewMatrix(){return Un(this.viewMatrix,this.position,this.lookAt,this.upVector),We(this.viewMatrixInverse,this.viewMatrix),this}updateProjectionMatrix(){return this}updateProjectionViewMatrix(){return this.updateViewMatrix(),this.updateProjectionMatrix(),Ve(this.projectionViewMatrix,this.projectionMatrix,this.viewMatrix),this}},qe=class extends $e{constructor(t,n,a,i){super();u(this,"fieldOfView");u(this,"aspect");u(this,"near");u(this,"far");this.fieldOfView=t,this.aspect=n,this.near=a,this.far=i,this.updateProjectionMatrix()}updateProjectionMatrix(){return Rn(this.projectionMatrix,this.fieldOfView,this.aspect,this.near,this.far),this}},Me=class extends $e{constructor(t,n,a,i,o,s){super();u(this,"left");u(this,"right");u(this,"bottom");u(this,"top");u(this,"near");u(this,"far");this.left=t,this.right=n,this.top=a,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}updateProjectionMatrix(){return Mn(this.projectionMatrix,this.left,this.right,this.bottom,this.top,this.near,this.far),this}},st=class{constructor(){u(this,"value",0);u(this,"damping");this.damping=.5}addForce(t){this.value+=t}update(){return this.value*this.value>1e-6?this.value*=this.damping:this.stop(),this.value}stop(){this.value=0}},Jn=class{constructor(t,n=document.body,a=!1,i=1){u(this,"camera");u(this,"domElement");u(this,"target",J());u(this,"minDistance",0);u(this,"maxDistance",1/0);u(this,"isEnabled",!0);u(this,"isDamping");u(this,"dampingFactor");u(this,"isZoom");u(this,"zoomSpeed");u(this,"isRotate");u(this,"rotateSpeed");u(this,"isPan");u(this,"keyPanSpeed");u(this,"enableKeys");u(this,"keys");u(this,"originTarget");u(this,"originPosition");u(this,"targetXDampedAction",new st);u(this,"targetYDampedAction",new st);u(this,"targetZDampedAction",new st);u(this,"targetThetaDampedAction",new st);u(this,"targetPhiDampedAction",new st);u(this,"targetRadiusDampedAction",new st);u(this,"_isShiftDown",!1);u(this,"_rotateStart",{x:9999,y:9999});u(this,"_rotateEnd",{x:9999,y:9999});u(this,"_roatteDelta",{x:9999,y:9999});u(this,"_spherical");u(this,"_zoomDistanceEnd",0);u(this,"_zoomDistance",0);u(this,"state","");u(this,"loopId",0);u(this,"_panStart",{x:0,y:0});u(this,"_panDelta",{x:0,y:0});u(this,"_panEnd",{x:0,y:0});u(this,"_paused",!1);u(this,"_isDebug",!1);u(this,"_outputEl");u(this,"mouseWheelForce",1);this.mouseWheelForce=i,t||console.error("camera is undefined"),this.camera=t,this.domElement=n,this.isDamping=!1,this.dampingFactor=.25,this.isZoom=!0,this.zoomSpeed=1,this.isRotate=!0,this.rotateSpeed=1,this.isPan=!0,this.keyPanSpeed=7,this.enableKeys=!0,this.keys={LEFT:"37",UP:"38",RIGHT:"39",BOTTOM:"40",SHIFT:"16"},this.originTarget=J(),this.originPosition=J(),this.originPosition[0]=t.position[0],this.originPosition[1]=t.position[0],this.originPosition[2]=t.position[0];const o=this.camera.position[0],s=this.camera.position[1],l=this.camera.position[2],c=Math.sqrt(o*o+s*s+l*l),h=Math.atan2(this.camera.position[0],this.camera.position[2]),m=Math.acos(Ie(this.camera.position[1]/c,-1,1));this._spherical={radius:c,theta:h,phi:m},this._bindEvens(),this.setEventHandler(),this.startTick(),this._isDebug=a,a&&(this._outputEl=document.createElement("div"),this._outputEl.setAttribute("style",`
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
    `),document.body.appendChild(this._outputEl))}lookAt([t,n,a]){return He(this.target,t,n,a),this}setEventHandler(){this.domElement.addEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.addEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.addEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.addEventListener("touchstart",this._touchStartHandler,!1),this.domElement.addEventListener("touchmove",this._touchMoveHandler,!1),window.addEventListener("keydown",this._onKeyDownHandler,!1),window.addEventListener("keyup",this._onKeyUpHandler,!1)}removeEventHandler(){this.domElement.removeEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.removeEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.removeEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1),this.domElement.removeEventListener("touchstart",this._touchStartHandler,!1),this.domElement.removeEventListener("touchmove",this._touchMoveHandler,!1),window.removeEventListener("keydown",this._onKeyDownHandler,!1),window.removeEventListener("keydown",this._onKeyUpHandler,!1)}startTick(){this.loopId=requestAnimationFrame(this.tick)}pause(){this._paused=!0}start(){this._paused=!1}tick(){if(!this._paused&&(this.updateDampedAction(),this.updateCamera(),this._isDebug)){const t=Math.round(this.camera.position[0]*100)/100,n=Math.round(this.camera.position[1]*100)/100,a=Math.round(this.camera.position[2]*100)/100;this._outputEl.textContent=`x: ${t} y: ${n} z: ${a}`}this.loopId=requestAnimationFrame(this.tick)}updateDampedAction(){this.target[0]+=this.targetXDampedAction.update(),this.target[1]+=this.targetYDampedAction.update(),this.target[2]+=this.targetZDampedAction.update(),this._spherical.theta+=this.targetThetaDampedAction.update(),this._spherical.phi+=this.targetPhiDampedAction.update(),this._spherical.radius+=this.targetRadiusDampedAction.update()}updateCamera(){const t=this._spherical,n=Math.sin(t.phi)*t.radius;this.camera.position[0]=n*Math.sin(t.theta)+this.target[0],this.camera.position[1]=Math.cos(t.phi)*t.radius+this.target[1],this.camera.position[2]=n*Math.cos(t.theta)+this.target[2],this.camera.lookAt[0]=this.target[0],this.camera.lookAt[1]=this.target[1],this.camera.lookAt[2]=this.target[2]}_bindEvens(){this.tick=this.tick.bind(this),this._contextMenuHandler=this._contextMenuHandler.bind(this),this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._touchStartHandler=this._touchStartHandler.bind(this),this._touchMoveHandler=this._touchMoveHandler.bind(this),this._onKeyDownHandler=this._onKeyDownHandler.bind(this),this._onKeyUpHandler=this._onKeyUpHandler.bind(this)}_contextMenuHandler(t){!this.isEnabled||t.preventDefault()}_mouseDownHandler(t){!this.isEnabled||(t.button===0?(this.state="rotate",this._rotateStart={x:t.clientX,y:t.clientY}):(this.state="pan",this._panStart={x:t.clientX,y:t.clientY}),this.domElement.addEventListener("mousemove",this._mouseMoveHandler,!1),window.addEventListener("mouseup",this._mouseUpHandler,!1))}_mouseUpHandler(){this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1)}_mouseMoveHandler(t){!this.isEnabled||(this.state==="rotate"?(this._rotateEnd={x:t.clientX,y:t.clientY},this._roatteDelta={x:this._rotateEnd.x-this._rotateStart.x,y:this._rotateEnd.y-this._rotateStart.y},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y}):this.state==="pan"&&(this._panEnd={x:t.clientX,y:t.clientY},this._panDelta={x:-.5*(this._panEnd.x-this._panStart.x),y:.5*(this._panEnd.y-this._panStart.y)},this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y}))}_mouseWheelHandler(t){t.preventDefault();const n=this.mouseWheelForce,a=t.deltaY>0?n:-n;this.targetRadiusDampedAction.value=a}_touchStartHandler(t){let n,a;switch(t.touches.length){case 1:this.state="rotate",this._rotateStart={x:t.touches[0].clientX,y:t.touches[0].clientY};break;case 2:this.state="zoom",n=t.touches[1].clientX-t.touches[0].clientX,a=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistance=Math.sqrt(n*n+a*a);break;case 3:this.state="pan",this._panStart={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3};break}}_touchMoveHandler(t){let n,a,i;switch(t.preventDefault(),t.touches.length){case 1:if(this.state!=="rotate")return;this._rotateEnd={x:t.touches[0].clientX,y:t.touches[0].clientY},this._roatteDelta={x:(this._rotateEnd.x-this._rotateStart.x)*.5,y:(this._rotateEnd.y-this._rotateStart.y)*.5},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y};break;case 2:if(this.state!=="zoom")return;n=t.touches[1].clientX-t.touches[0].clientX,a=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistanceEnd=Math.sqrt(n*n+a*a),i=this._zoomDistanceEnd-this._zoomDistance,i*=.05;let o=this._spherical.radius-i;o=Ie(o,this.minDistance,this.maxDistance),this._zoomDistance=this._zoomDistanceEnd,this._spherical.radius=o;break;case 3:this._panEnd={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3},this._panDelta={x:this._panEnd.x-this._panStart.x,y:this._panEnd.y-this._panStart.y},this._panDelta.x*=-1,this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y};break}}_onKeyDownHandler(t){let n=0,a=0;switch(t.key){case this.keys.SHIFT:this._isShiftDown=!0;break;case this.keys.LEFT:n=-10;break;case this.keys.RIGHT:n=10;break;case this.keys.UP:a=10;break;case this.keys.BOTTOM:a=-10;break}this._isShiftDown?(this._roatteDelta={x:-n,y:a},this._updateRotateHandler()):(this._panDelta={x:n,y:a},this._updatePanHandler())}_onKeyUpHandler(t){switch(t.key){case this.keys.SHIFT:this._isShiftDown=!1;break}}_updatePanHandler(){const t=J(),n=J(),a=J();a[0]=this.target[0]-this.camera.position[0],a[1]=this.target[1]-this.camera.position[1],a[2]=this.target[2]-this.camera.position[2],ke(a,a),Ne(t,a,[0,1,0]),Ne(n,t,a);const i=Math.max(this._spherical.radius/2e3,.001);this.targetXDampedAction.addForce((t[0]*this._panDelta.x+n[0]*this._panDelta.y)*i),this.targetYDampedAction.addForce((t[1]*this._panDelta.x+n[1]*this._panDelta.y)*i),this.targetZDampedAction.addForce((t[2]*this._panDelta.x+n[2]*this._panDelta.y)*i)}_updateRotateHandler(){this.targetThetaDampedAction.addForce(-this._roatteDelta.x/this.domElement.clientWidth*this.mouseWheelForce),this.targetPhiDampedAction.addForce(-this._roatteDelta.y/this.domElement.clientHeight*this.mouseWheelForce)}},ta=class{constructor(){u(this,"position",_t(0,0,0));u(this,"rotation",_t(0,0,0));u(this,"scale",_t(1,1,1));u(this,"modelMatrix",at());u(this,"shouldUpdate",!0)}copyFromMatrix(t){return Ge(this.modelMatrix,t),this.shouldUpdate=!1,this}setPosition(t){return ie(this.position,t),this.shouldUpdate=!0,this}setScale(t){return ie(this.scale,t),this.shouldUpdate=!0,this}setRotation(t){return ie(this.rotation,t),this.shouldUpdate=!0,this}updateModelMatrix(){return Pn(this.modelMatrix),Fn(this.modelMatrix,this.modelMatrix,this.position),bn(this.modelMatrix,this.modelMatrix,this.rotation[0]),wn(this.modelMatrix,this.modelMatrix,this.rotation[1]),Sn(this.modelMatrix,this.modelMatrix,this.rotation[2]),Nn(this.modelMatrix,this.modelMatrix,this.scale),this.shouldUpdate=!1,this}},Qe=class extends ta{constructor(t=void 0){super();u(this,"parentNode",null);u(this,"_children",[]);u(this,"_visible",!0);u(this,"worldMatrix",at());u(this,"normalMatrix",at());u(this,"uid",An(9));u(this,"name");this.name=t}get visible(){return this._visible}set visible(t){this._visible=t}get children(){return this._children}get siblings(){return this.parentNode?this.parentNode._children:[]}get levelIndex(){let t=0,n=this.parentNode;for(;n;)t++,n=n.parentNode;return t}setParent(t=null){if(this.parentNode){const n=this.parentNode._children.indexOf(this);n>=0&&this.parentNode._children.splice(n,1)}return t&&t.addChild(this),this.parentNode=t,this}addChild(t){return this._children.push(t),this}updateWorldMatrix(t=null){this.shouldUpdate&&this.updateModelMatrix(),t?Ve(this.worldMatrix,t,this.modelMatrix):Ge(this.worldMatrix,this.modelMatrix),We(this.normalMatrix,this.worldMatrix),gn(this.normalMatrix,this.normalMatrix);for(let n=0;n<this._children.length;n++)this._children[n].updateWorldMatrix(this.worldMatrix);return this}traverse(t,n=0){t(this,n),n++;for(let a=0;a<this._children.length;a++)this._children[a].traverse(t,n)}findChild(t){if(t(this))return this;let n=null;for(let a=0;a<this._children.length&&!(n=this._children[a].findChild(t));a++);return n}findChildByName(t){if(this.name===t)return this;let n=null;for(let a=0;a<this._children.length&&!(n=this._children[a].findChildByName(t));a++);return n}findParent(t){if(t(this))return this;let n=null,a=this.parentNode;for(;a&&!(n=a.findParent(t));)a=a==null?void 0:a.parentNode;return n}findParentByName(t){if(this.name===t)return this;let n=null,a=this.parentNode;for(;a&&!(n=a.findParentByName(t));)a=a==null?void 0:a.parentNode;return n}render(){if(!!this._visible)for(let t=0;t<this._children.length;t++)this._children[t].render()}},ht,Yt=class extends Qe{constructor(t,n,a,i={},o){super(o);if(O(this,"gl"),O(this,"vao"),O(this,"vertexCount"),zt(this,ht,new Map),O(this,"boundingBox"),O(this,"program"),this.gl=t,this.vao=t.createVertexArray(),this.program=Wn(t,n,a,i),this.program.__SPECTOR_Metadata={name:o,shaderDefines:i},!this.setUniform(Yt.WORLD_MATRIX_UNIFORM_NAME,{type:t.FLOAT_MAT4}))throw new Error(`Each Drawable is expected to have a mat4 ${Yt.WORLD_MATRIX_UNIFORM_NAME} implemented in shader`)}setUniform(t,{type:n,value:a}){const i=this.gl;let o;if(o=L(this,ht).get(t))o.value=a;else{const s=i.getUniformLocation(this.program,t);if(!s)return console.error(`uniform with name ${t} was not found in the program`),!1;o={type:n,location:s,value:a},L(this,ht).set(t,o)}return a!=null&&(i.useProgram(this.program),Le(i,o.type,o.location,a)),!0}updateUniform(t,n){let a;if(a=this.getUniform(t)){a.value=n;const i=this.gl;return i.useProgram(this.program),Le(i,a.type,a.location,n),!0}return!1}getUniform(t){let n;return(n=L(this,ht).get(t))?n:(console.error("can't locate uniform with that name"),null)}updateWorldMatrix(t){return super.updateWorldMatrix(t),this.updateUniform(Yt.WORLD_MATRIX_UNIFORM_NAME,this.worldMatrix),this}destroy(){L(this,ht).clear();const t=this.gl;t.deleteVertexArray(this.vao),t.deleteProgram(this.program)}},K=Yt;ht=new WeakMap;O(K,"WORLD_MATRIX_UNIFORM_NAME","u_worldMatrix");var ea=document.createElement("canvas"),Ze=ea.getContext("webgl2"),Y=Ze.MAX_TEXTURE_SIZE,Vt=Ze.RGB,le,P,me=!1,tt,ut,dt,_e=class{constructor(){if(zt(this,tt,[]),zt(this,ut,[]),zt(this,dt,document.createElement("div")),me){const n=document.createElement("style"),a="hwoa-rang-texture-atlas-debug";n.setAttribute("type","text/css");const i=`
        #${a} {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          transform-origin: 100% 100%;
          width: ${400}px;
          max-height: 100vh;
          overflow: scroll;
        }
        #${a} canvas {
          max-width: 100%;
        }
      `;n.appendChild(document.createTextNode(i)),document.getElementsByTagName("head")[0].appendChild(n),kn(this,dt,document.createElement("div")),L(this,dt).setAttribute("id",a),document.body.appendChild(L(this,dt))}}static set debugMode(t){me=t}static get textureSize(){return Y}static set textureSize(t){Y=t}static set textureFormat(t){Vt=t}static set gl(t){P=t}static getInstance(){if(!P)throw new Error("You must provide a WebGL2RenderingContext first via setting the TextureAtlas.gl property!");return le||(le=new _e),le}pack(t,n,a=1){const i=()=>{const f=document.createElement("canvas");L(this,dt).appendChild(f),f.width=Y,f.height=Y;const x=P.createTexture();P.bindTexture(P.TEXTURE_2D,x),P.texParameterf(P.TEXTURE_2D,P.TEXTURE_MIN_FILTER,P.LINEAR_MIPMAP_LINEAR),P.texImage2D(P.TEXTURE_2D,0,Vt,Y,Y,0,Vt,P.UNSIGNED_BYTE,null),P.generateMipmap(P.TEXTURE_2D),P.bindTexture(P.TEXTURE_2D,null);const v=new yn(f);return L(this,tt).push(v),L(this,ut).push(x),v};let o=L(this,tt)[L(this,tt).length-1];o||(o=i());const s=a===1?n:_e.scaleDownDrawableByFactor(n,a);o.pack(t,s)||(o=i(),o.pack(t,s));const c=o.uv()[t];for(let f=0;f<c.length;f++)c[f][0]*=Y,c[f][1]*=Y;const h=L(this,ut)[L(this,ut).length-1],m=c[0][0],d=c[0][1],_=c[2][0]-c[0][0],p=c[2][1]-c[0][1];return P.bindTexture(P.TEXTURE_2D,h),P.texSubImage2D(P.TEXTURE_2D,0,m,d,_,p,Vt,P.UNSIGNED_BYTE,s),P.generateMipmap(P.TEXTURE_2D),P.bindTexture(P.TEXTURE_2D,null),this}getUv2(t){let n=-1;for(let a=0;a<L(this,tt).length;a++){const o=L(this,tt)[a].uv2()[t];if(o){n=a;const s=L(this,ut)[n];return[o,s]}}throw new Error("Can't get uvs")}},na=_e;tt=new WeakMap;ut=new WeakMap;dt=new WeakMap;O(na,"scaleDownDrawableByFactor",(t,n)=>{const a=document.createElement("canvas"),i=t instanceof HTMLImageElement?t.naturalWidth:t.width,o=t instanceof HTMLImageElement?t.naturalHeight:t.height;a.width=i/n,a.height=o/n,me&&console.log(`Scaled ${i}x${o} project image to ${a.width}x${a.height}`);const s=a.getContext("2d");return s.imageSmoothingQuality="high",s.drawImage(t,0,0,i,o,0,0,a.width,a.height),a});var Ce=class{static getSupportedFormats(t){return{astc:t.getExtension("WEBGL_compressed_texture_astc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),etc2:t.getExtension("WEBGL_compressed_texture_etc"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")}}static async loadCompressed(t,n=!0){const a=await fetch(t).then(o=>o.arrayBuffer()),i=new Mt(a,1);return{mipmaps:i.mipmaps(n),width:i.pixelWidth,height:i.pixelHeight,format:i.glInternalFormat,mipmapCount:i.numberOfMipmapLevels}}},Ee=class{constructor(t,n){u(this,"arrayBuffer");u(this,"glType");u(this,"glTypeSize");u(this,"glFormat");u(this,"glInternalFormat");u(this,"numberOfArrayElements");u(this,"numberOfMipmapLevels");u(this,"bytesOfKeyValueData");u(this,"numberOfFaces");u(this,"loadType");u(this,"pixelWidth");u(this,"pixelHeight");u(this,"pixelDepth");this.arrayBuffer=t;const a=new Uint8Array(this.arrayBuffer,0,12);if(a[0]!==171||a[1]!==75||a[2]!==84||a[3]!==88||a[4]!==32||a[5]!==49||a[6]!==49||a[7]!==187||a[8]!==13||a[9]!==10||a[10]!==26||a[11]!==10){console.error("texture missing KTX identifier");return}const i=Uint32Array.BYTES_PER_ELEMENT,o=new DataView(this.arrayBuffer,12,13*i),l=o.getUint32(0,!0)===67305985;if(this.glType=o.getUint32(1*i,l),this.glTypeSize=o.getUint32(2*i,l),this.glFormat=o.getUint32(3*i,l),this.glInternalFormat=o.getUint32(4*i,l),this.pixelWidth=o.getUint32(6*i,l),this.pixelHeight=o.getUint32(7*i,l),this.pixelDepth=o.getUint32(8*i,l),this.numberOfArrayElements=o.getUint32(9*i,l),this.numberOfFaces=o.getUint32(10*i,l),this.numberOfMipmapLevels=o.getUint32(11*i,l),this.bytesOfKeyValueData=o.getUint32(12*i,l),this.glType!==0){console.warn("only compressed formats currently supported");return}else this.numberOfMipmapLevels=Math.max(1,this.numberOfMipmapLevels);if(this.pixelHeight===0||this.pixelDepth!==0){console.warn("only 2D textures currently supported");return}if(this.numberOfArrayElements!==0){console.warn("texture arrays not currently supported");return}if(this.numberOfFaces!==n){console.warn("number of faces expected"+n+", but found "+this.numberOfFaces);return}this.loadType=Ee.COMPRESSED_2D}mipmaps(t){const n=[];let a=Ee.HEADER_LEN+this.bytesOfKeyValueData,i=this.pixelWidth,o=this.pixelHeight;const s=t?this.numberOfMipmapLevels:1;for(let l=0;l<s;l++){const c=new Int32Array(this.arrayBuffer,a,1)[0];a+=4;for(let h=0;h<this.numberOfFaces;h++){const m=new Uint8Array(this.arrayBuffer,a,c);n.push({data:m,width:i,height:o}),a+=c,a+=3-(c+3)%4}i=Math.max(1,i*.5),o=Math.max(1,o*.5)}return n}},Mt=Ee;O(Mt,"HEADER_LEN",12+13*4);O(Mt,"COMPRESSED_2D",0);O(Mt,"COMPRESSED_3D",1);O(Mt,"TEX_2D",2);O(Mt,"TEX_3D",3);let Z;const ce=async(t,n)=>{Z||(Z=Ce.getSupportedFormats(t));let a,i;if(Z.s3tc?(a=n.s3tc,i="s3tc"):Z.astc?(a=n.astc,i="astc"):Z.etc1?(a=n.etc1,i="etc1"):Z.etc2?(a=n.etc2,i="etc2"):Z.pvrtc&&(a=n.pvrtc,i="pvrtc"),!a)throw console.log(n),new Error(`missing correct format ${i?`for ${i}`:""}`);const o=await Ce.loadCompressed(a),s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);for(const[l,c]of o.mipmaps.entries())t.compressedTexImage2D(t.TEXTURE_2D,l,o.format,c.width,c.height,0,c.data);return o.mipmapCount>1?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),s};let he;function aa(t){return he==null&&(he=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic")),he}var vt,wt,St;const be=class extends K{constructor(n,a,i,o,s,l){super(n,o,s,Q({PI:Math.PI,USE_UV:!0},l));C(this,vt,void 0);C(this,wt,void 0);C(this,St,void 0);const{vertexCount:c,vertexStride:h,interleavedArray:m,indicesArray:d}=i;this.vertexCount=c;const _=n.getAttribLocation(this.program,"aPosition"),p=n.getAttribLocation(this.program,"aUv"),f=n.createBuffer(),x=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,f),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,x),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:n.INT,value:0});const v=be.createTextCanvas(a);D(this,vt,n.createTexture()),n.bindTexture(n.TEXTURE_2D,S(this,vt)),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,v.width,v.height,0,n.RGBA,n.UNSIGNED_BYTE,v),n.generateMipmap(n.TEXTURE_2D);const A=aa(n);if(A!=null){const R=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);n.texParameterf(n.TEXTURE_2D,A.TEXTURE_MAX_ANISOTROPY_EXT,R)}n.bindTexture(n.TEXTURE_2D,null),D(this,wt,n.getUniformBlockIndex(this.program,"Projection")),D(this,St,n.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(n){const a=document.createElement("canvas"),i=a.getContext("2d");a.width=1024,a.height=128;const o=20,s=10,l=100;i.font=`${l}px Helvetica`,i.fillStyle="#fff",i.textBaseline="middle",i.fillText(n,o,a.height/2);const{width:c}=i.measureText(n),h=o+c+40;return i.strokeStyle="#fff",i.lineWidth=5,i.beginPath(),i.moveTo(h,a.height/2),i.lineTo(a.width-s,a.height/2),i.stroke(),i.beginPath(),i.moveTo(a.width-s,a.height/2),i.lineTo(a.width-s-40,a.height/2+30),i.stroke(),i.beginPath(),i.moveTo(a.width-s,a.height/2),i.lineTo(a.width-s-40,a.height/2-30),i.stroke(),a}render(){this.gl.uniformBlockBinding(this.program,S(this,wt),0),this.gl.uniformBlockBinding(this.program,S(this,St),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,S(this,vt)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}};let Ae=be;vt=new WeakMap,wt=new WeakMap,St=new WeakMap;var Nt,yt,Lt,k;class ra extends K{constructor(n,a,i,o,s={}){super(n,i,o,Q({PI:Math.PI,IS_CUBEMAP:!0},s));C(this,Nt,void 0);C(this,yt,void 0);C(this,Lt,void 0);C(this,k,void 0);const{vertexCount:l,vertexStride:c,interleavedArray:h,indicesArray:m}=a;this.vertexCount=l;const d=n.getAttribLocation(this.program,"aPosition"),_=n.createBuffer(),p=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,_),n.bufferData(n.ARRAY_BUFFER,h,n.STATIC_DRAW),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,p),n.bufferData(n.ELEMENT_ARRAY_BUFFER,m,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_environmentMap",{type:n.INT,value:0}),D(this,Nt,n.getUniformBlockIndex(this.program,"Projection")),D(this,yt,n.getUniformBlockIndex(this.program,"View")),D(this,Lt,n.getUniformBlockIndex(this.program,"PostFX"))}get texture(){return S(this,k)}set texture(n){S(this,k)&&this.gl.deleteTexture(S(this,k)),D(this,k,n)}render(){this.gl.uniformBlockBinding(this.program,S(this,Nt),0),this.gl.uniformBlockBinding(this.program,S(this,yt),1),this.gl.uniformBlockBinding(this.program,S(this,Lt),3),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),S(this,k)&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,S(this,k))),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),S(this,k),this.gl.bindVertexArray(null)}}Nt=new WeakMap,yt=new WeakMap,Lt=new WeakMap,k=new WeakMap;var It,Ct,Dt,Bt;class De extends K{constructor(n,a,i,o,s){const l=Q({PI:Math.PI,USE_NORMAL:!0,USE_WORLD_POS:!0,USE_PBR:!0,MAX_REFLECTION_LOD:4},s);super(n,i,o,l,"sphere");C(this,It,void 0);C(this,Ct,void 0);C(this,Dt,void 0);C(this,Bt,void 0);u(this,"irradianceMapTexture");u(this,"prefilterMapTexture");u(this,"brdfLutTexture");u(this,"albedoMap");u(this,"normalMap");u(this,"metallicMap");u(this,"roughnessMap");u(this,"aoMap");const{vertexCount:c,vertexStride:h,interleavedArray:m,indicesArray:d}=a;this.vertexCount=c;const _=n.getAttribLocation(this.program,"aPosition"),p=n.getAttribLocation(this.program,"aNormal"),f=n.createBuffer(),x=n.createBuffer();if(this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,f),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),s.USE_PBR_TEXTURES){const v=n.getAttribLocation(this.program,"aUv");n.enableVertexAttribArray(v),n.vertexAttribPointer(v,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT)}n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,x),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_irradianceMap",{type:n.INT,value:0}),this.setUniform("u_prefilterMap",{type:n.INT,value:1}),this.setUniform("u_brdfLUT",{type:n.INT,value:2}),s.USE_PBR_TEXTURES?(this.setUniform("u_albedoMap",{type:n.INT,value:3}),this.setUniform("u_normalMap",{type:n.INT,value:4}),this.setUniform("u_metallicMap",{type:n.INT,value:5}),this.setUniform("u_roughnessMap",{type:n.INT,value:6}),this.setUniform("u_aoMap",{type:n.INT,value:7})):this.setUniform("u_albedo",{type:n.FLOAT_VEC3,value:new Float32Array([1,1,1])}),D(this,It,n.getUniformBlockIndex(this.program,"Projection")),D(this,Ct,n.getUniformBlockIndex(this.program,"View")),D(this,Dt,n.getUniformBlockIndex(this.program,"Lighting")),D(this,Bt,n.getUniformBlockIndex(this.program,"PostFX"))}render(){!this.visible||(this.gl.uniformBlockBinding(this.program,S(this,It),0),this.gl.uniformBlockBinding(this.program,S(this,Ct),1),this.gl.uniformBlockBinding(this.program,S(this,Dt),2),this.gl.uniformBlockBinding(this.program,S(this,Bt),3),this.gl.useProgram(this.program),this.irradianceMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.irradianceMapTexture)),this.prefilterMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.prefilterMapTexture)),this.brdfLutTexture&&(this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,this.brdfLutTexture)),this.albedoMap&&(this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,this.albedoMap)),this.normalMap&&(this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,this.normalMap)),this.metallicMap&&(this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,this.metallicMap)),this.roughnessMap&&(this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,this.roughnessMap)),this.aoMap&&(this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,this.aoMap)),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.bindVertexArray(null))}}It=new WeakMap,Ct=new WeakMap,Dt=new WeakMap,Bt=new WeakMap;let ue,gt;class oa extends K{constructor(n,a,i,o,s,l={}){super(n,o,s,Q({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0,USE_UV:!0},l));ue||(ue=ee({width:a,height:i}),gt=new Me(-a/2,a/2,i/2,-i/2,0,2),gt.position=[0,0,1],gt.lookAt=[0,0,0],gt.updateProjectionViewMatrix());const{vertexCount:c,vertexStride:h,interleavedArray:m,indicesArray:d}=ue;this.vertexCount=c;const _=n.getAttribLocation(this.program,"aPosition"),p=n.getAttribLocation(this.program,"aUv"),f=n.createBuffer(),x=n.createBuffer();n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,f),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,x),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4})}render(){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",gt.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}class ge extends K{constructor(n,a,i,o,s={}){super(n,i,o,Q({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0},s));u(this,"texture");u(this,"envTexture");const{vertexCount:l,vertexStride:c,interleavedArray:h,indicesArray:m}=a;this.vertexCount=l;const d=n.getAttribLocation(this.program,"aPosition"),_=n.createBuffer(),p=n.createBuffer();n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,_),n.bufferData(n.ARRAY_BUFFER,h,n.STATIC_DRAW),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,p),n.bufferData(n.ELEMENT_ARRAY_BUFFER,m,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4})}render(n){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",n.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.envTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envTexture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}var ia=`#version 300 es
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
}`,sa=`#version 300 es

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
}`;const Be=ee({width:.5,height:.5});var Ot,Xt;class la extends K{constructor(n){super(n,sa,ia,Be);C(this,Ot,void 0);C(this,Xt,void 0);const{vertexCount:a,vertexStride:i,interleavedArray:o,indicesArray:s}=Be;this.vertexCount=a;const l=n.getAttribLocation(this.program,"aPosition"),c=n.getAttribLocation(this.program,"aUv"),h=n.createBuffer(),m=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,o,n.STATIC_DRAW),n.enableVertexAttribArray(l),n.vertexAttribPointer(l,3,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(c),n.vertexAttribPointer(c,2,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,m),n.bufferData(n.ELEMENT_ARRAY_BUFFER,s,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_color",{type:n.FLOAT_VEC4}),D(this,Ot,n.getUniformBlockIndex(this.program,"Projection")),D(this,Xt,n.getUniformBlockIndex(this.program,"View"))}set color(n){this.updateUniform("u_color",n)}render(){this.gl.uniformBlockBinding(this.program,S(this,Ot),0),this.gl.uniformBlockBinding(this.program,S(this,Xt),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}Ot=new WeakMap,Xt=new WeakMap;var ca=`#version 300 es

uniform mat4 u_projectionViewMatrix;
uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec2 aUv;

out vec2 vUv;

void main () {
  gl_Position = u_projectionViewMatrix * u_worldMatrix * aPosition;

  vUv = aUv;
}`,ha=`#version 300 es
precision highp float;

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}`;class ua extends K{constructor(n,a,i,o={}){super(n,ca,ha,o);u(this,"texture");const{vertexCount:s,vertexStride:l,interleavedArray:c,indicesArray:h}=ee({width:a,height:i});this.vertexCount=s;const m=new Me(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);m.position=[0,0,1],m.lookAt=[0,0,0],m.updateProjectionViewMatrix();const d=n.getAttribLocation(this.program,"aPosition"),_=n.getAttribLocation(this.program,"aUv"),p=n.createBuffer(),f=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,c,n.STATIC_DRAW),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,2,n.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,f),n.bufferData(n.ELEMENT_ARRAY_BUFFER,h,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:n.INT,value:0}),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4,value:m.projectionViewMatrix})}render(){this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.texture&&this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}function Gt(t){return t.map(n=>n/255)}function Je(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}var da=`#version 300 es
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
}`,fa=`#version 300 es
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
}`,ma=`#version 300 es
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
}`,_a=`#version 300 es
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
  
}`,tn=`#version 300 es
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
}`,Ea=`#version 300 es
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
}`,Oe=`#version 300 es
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
}`,W=`#version 300 es

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
}`,pa="/A_little_paris_eiffel_tower_1k.hdr",Ta="/A_moonlit_golf_1k.hdr",xa="/A_qwantani_moon_noon_puresky_1k.hdr",va="/little_paris_eiffel_tower.png",Ra="/moonlit_golf.png",Ma="/qwantani_moon_noon_puresky_1k.png",Aa="/worn-shiny-metal-albedo_astc.ktx",ga="/worn-shiny-metal-albedo_etc1.ktx",Ua="/worn-shiny-metal-albedo_etc2.ktx",Pa="/worn-shiny-metal-albedo_pvrtc.ktx",Fa="/worn-shiny-metal-albedo_s3tc.ktx",ba="/worn-shiny-metal-ao_astc.ktx",wa="/worn-shiny-metal-ao_etc1.ktx",Sa="/worn-shiny-metal-ao_etc2.ktx",Na="/worn-shiny-metal-ao_pvrtc.ktx",ya="/worn-shiny-metal-ao_s3tc.ktx",La="/worn-shiny-metal-Normal-ogl_astc.ktx",Ia="/worn-shiny-metal-Normal-ogl_etc1.ktx",Ca="/worn-shiny-metal-Normal-ogl_etc2.ktx",Da="/worn-shiny-metal-Normal-ogl_pvrtc.ktx",Ba="/worn-shiny-metal-Normal-ogl_s3tc.ktx",Oa="/worn-shiny-metal-ao_astc.ktx",Xa="/worn-shiny-metal-ao_etc1.ktx",Ha="/worn-shiny-metal-ao_etc2.ktx",ka="/worn-shiny-metal-ao_pvrtc.ktx",Va="/worn-shiny-metal-ao_s3tc.ktx",Ga="/worn-shiny-metal-Roughness_astc.ktx",Wa="/worn-shiny-metal-Roughness_etc1.ktx",za="/worn-shiny-metal-Roughness_etc2.ktx",Ya="/worn-shiny-metal-Roughness_pvrtc.ktx",ja="/worn-shiny-metal-Roughness_s3tc.ktx",Ka="/rustediron2_basecolor_astc.ktx",$a="/rustediron2_basecolor_etc1.ktx",qa="/rustediron2_basecolor_etc2.ktx",Qa="/rustediron2_basecolor_pvrtc.ktx",Za="/rustediron2_basecolor_s3tc.ktx",Ja="/rustediron2_ao_astc.ktx",tr="/rustediron2_ao_etc1.ktx",er="/rustediron2_ao_etc2.ktx",nr="/rustediron2_ao_pvrtc.ktx",ar="/rustediron2_ao_s3tc.ktx",rr="/rustediron2_normal_astc.ktx",or="/rustediron2_normal_etc1.ktx",ir="/rustediron2_normal_etc2.ktx",sr="/rustediron2_normal_pvrtc.ktx",lr="/rustediron2_normal_s3tc.ktx",cr="/rustediron2_metallic_astc.ktx",hr="/rustediron2_metallic_etc1.ktx",ur="/rustediron2_metallic_etc2.ktx",dr="/rustediron2_metallic_pvrtc.ktx",fr="/rustediron2_metallic_s3tc.ktx",mr="/rustediron2_roughness_astc.ktx",_r="/rustediron2_roughness_etc1.ktx",Er="/rustediron2_roughness_etc2.ktx",pr="/rustediron2_roughness_pvrtc.ktx",Tr="/rustediron2_roughness_s3tc.ktx",xr="/leafy-grass2-albedo_astc.ktx",vr="/leafy-grass2-albedo_etc1.ktx",Rr="/leafy-grass2-albedo_etc2.ktx",Mr="/leafy-grass2-albedo_pvrtc.ktx",Ar="/leafy-grass2-albedo_s3tc.ktx",gr="/leafy-grass2-ao_astc.ktx",Ur="/leafy-grass2-ao_etc1.ktx",Pr="/leafy-grass2-ao_etc2.ktx",Fr="/leafy-grass2-ao_pvrtc.ktx",br="/leafy-grass2-ao_s3tc.ktx",wr="/leafy-grass2-normal-ogl_astc.ktx",Sr="/leafy-grass2-normal-ogl_etc1.ktx",Nr="/leafy-grass2-normal-ogl_etc2.ktx",yr="/leafy-grass2-normal-ogl_pvrtc.ktx",Lr="/leafy-grass2-normal-ogl_s3tc.ktx",Ir="/leafy-grass2-metallic_astc.ktx",Cr="/leafy-grass2-metallic_etc1.ktx",Dr="/leafy-grass2-metallic_etc2.ktx",Br="/leafy-grass2-metallic_pvrtc.ktx",Or="/leafy-grass2-metallic_s3tc.ktx",Xr="/leafy-grass2-roughness_astc.ktx",Hr="/leafy-grass2-roughness_etc1.ktx",kr="/leafy-grass2-roughness_etc2.ktx",Vr="/leafy-grass2-roughness_pvrtc.ktx",Gr="/leafy-grass2-roughness_s3tc.ktx";const pe=7,Te=7,ne=10,ae=10,qt=4,Et=512,pt=512,et=1024,en=600;let G=null,jt=innerWidth>en;const de=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],Wr=[{s3tc:E(Fa),astc:E(Aa),etc1:E(ga),etc2:E(Ua),pvrtc:E(Pa)},{s3tc:E(Ba),astc:E(La),etc1:E(Ia),etc2:E(Ca),pvrtc:E(Da)},{s3tc:E(Va),astc:E(Oa),etc1:E(Xa),etc2:E(Ha),pvrtc:E(ka)},{s3tc:E(ja),astc:E(Ga),etc1:E(Wa),etc2:E(za),pvrtc:E(Ya)},{s3tc:E(ya),astc:E(ba),etc1:E(wa),etc2:E(Sa),pvrtc:E(Na)}],zr=[{s3tc:E(Za),astc:E(Ka),etc1:E($a),etc2:E(qa),pvrtc:E(Qa)},{s3tc:E(lr),astc:E(rr),etc1:E(or),etc2:E(ir),pvrtc:E(sr)},{s3tc:E(fr),astc:E(cr),etc1:E(hr),etc2:E(ur),pvrtc:E(dr)},{s3tc:E(Tr),astc:E(mr),etc1:E(_r),etc2:E(Er),pvrtc:E(pr)},{s3tc:E(ar),astc:E(Ja),etc1:E(tr),etc2:E(er),pvrtc:E(nr)}],Yr=[{s3tc:E(Ar),astc:E(xr),etc1:E(vr),etc2:E(Rr),pvrtc:E(Mr)},{s3tc:E(Lr),astc:E(wr),etc1:E(Sr),etc2:E(Nr),pvrtc:E(yr)},{s3tc:E(Or),astc:E(Ir),etc1:E(Cr),etc2:E(Dr),pvrtc:E(Br)},{s3tc:E(Gr),astc:E(Xr),etc1:E(Hr),etc2:E(kr),pvrtc:E(Vr)},{s3tc:E(br),astc:E(gr),etc1:E(Ur),etc2:E(Pr),pvrtc:E(Fr)}],Ue=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Pe=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]],nn="tokyo",an=new Map([["mon-valley",Ta],["theatre",pa],["tokyo",xa]]),Ht={playAnim:!0,useEnvDiffuseLight:!0,useEnvSpecularLight:!0,image:nn},rn=new Float32Array([2]),xe=new Float32Array([16]),on=new Float32Array([1]),sn=new Float32Array([1]);let ln=document.getElementById("collapsable");const $=new Ln.exports.Pane({title:"Parameters",expanded:innerWidth>en});$.registerPlugin(In);io();$.element.parentNode.style.setProperty("width","400px");$.addInput(Ht,"playAnim",{label:"Play Animation"});$.addBlade({view:"list",label:"tone mapping mode",options:de.map(t=>({text:t,value:t})),value:de[2]}).on("change",({value:t})=>{rn[0]=de.indexOf(t)});$.addBlade({view:"slider",label:"point light luminance",min:0,max:50,value:xe[0]}).on("change",({value:t})=>{xe[0]=t});$.addInput(Ht,"useEnvDiffuseLight",{label:"use environment diffuse light"}).on("change",({value:t})=>{on[0]=t?1:0});$.addInput(Ht,"useEnvSpecularLight",{label:"use environment specular light"}).on("change",({value:t})=>{sn[0]=t});$.addInput(Ht,"image",{label:"environment image",view:"thumbnail-list",options:[{text:"Moonlit Golf",value:"mon-valley",src:E(Ra)},{text:"Little Paris",value:"theatre",src:E(va)},{text:"Qwantani Noon",value:"tokyo",src:E(Ma)}]}).on("change",({value:{value:t}})=>{pn(an.get(t)).then(n=>{bt=n,Zt=!0})});const rt=document.createElement("canvas");document.body.appendChild(rt);const r=rt.getContext("webgl2"),Fe=new Me(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);Fe.position=[0,0,1];Fe.lookAt=[0,0,0];Fe.updateProjectionViewMatrix();const B=new qe(45*Math.PI/180,innerWidth/innerHeight,.1,100);B.position=[10.84,-.17,8.98];B.lookAt=[0,0,0];B.updateProjectionMatrix();new Jn(B,rt,!1,Je()?2:.85);const X=new qe(90*Math.PI/180,1,.1,10).updateProjectionMatrix(),Wt=$n({radius:.5,widthSegments:32,heightSegments:32}),Rt=ee({width:5,height:5/8}),re=Zn({flipUVy:!0}),V=new Qe,Xe={POINT_LIGHTS_COUNT:qt.toString()},Qt=[],jr=ne/pe,Kr=ae/Te;for(let t=0;t<Te;t++)for(let n=0;n<pe;n++){const a=n*jr-ne/2+Wt.radius,i=t*Kr-ae/2+Wt.radius,o=new De(r,Wt,W,Oe,Xe);o.setPosition([a,i,-5]);const s=t/(Te-1);o.setUniform("u_metallic",{type:r.FLOAT,value:s});const l=Math.max(.04,n/(pe-1));o.setUniform("u_roughness",{type:r.FLOAT,value:l}),V.addChild(o),Qt.push(o);const c=new De(r,Wt,W,Oe,Q({USE_PBR_TEXTURES:!0,USE_UV:!0},Xe));c.setPosition([a,i,5]),V.addChild(c),Qt.push(c)}const cn=new Ae(r,"roughness",Rt,W,tn);cn.setPosition([-ne/2+Rt.width/2,-ae/2-Rt.height,-5]);V.addChild(cn);const hn=new Ae(r,"metallic",Rt,W,tn);hn.setPosition([-ne/2-Rt.height,-ae/2+Rt.width/2,-5]).setRotation([0,0,Math.PI*.5]);V.addChild(hn);const Kt=Jt(r,V.children[0].program,"Projection",["projMatrix","zNear","zFar"]),$r=te(r,Kt.blockSize,0),$t=Jt(r,V.children[0].program,"View",["viewMatrix","cameraPosition","time"]),qr=te(r,$t.blockSize,1),nt=Jt(r,V.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","diffuseEnvLightMixFactor","specularEnvLightMixFactor"]),Qr=te(r,nt.blockSize,2),un=Jt(r,V.children[0].program,"PostFX",["tonemappingMode"]),Zr=te(r,un.blockSize,3),Pt=[],dn=[],fn=[],Jr=[Gt([243,156,18]),Gt([41,128,185]),Gt([192,57,43]),Gt([142,68,173])];for(let t=0;t<qt;t++){Pt.push(new Float32Array(3));const n=Jr[t];dn.push(new Float32Array(n));const a=new la(r);a.color=[...n,1],V.addChild(a),fn.push(a)}const ve=new ge(r,re,W,_a);ve.setUniform("u_equirectangularMap",{type:r.INT,value:0});const Re=new ge(r,re,W,fa);Re.setUniform("u_environmentMap",{type:r.INT,value:0});const Ft=new ge(r,re,W,ma,{CUBEMAP_SIDE_SIZE:et});Ft.setUniform("u_environmentMap",{type:r.INT,value:0});Ft.setUniform("u_roughness",{type:r.FLOAT,value:0});const to=new oa(r,Et,pt,W,da),mn=new ra(r,re,W,Ea),eo=new ua(r,Et,pt);{const n=Et*.2,a=pt*.2,i=24;eo.setPosition([-innerWidth/2+n/2+i,-innerHeight/2+a/2+i,0]).setScale([.2,.2,1]).updateWorldMatrix()}r.getExtension("EXT_color_buffer_half_float");r.getExtension("EXT_color_buffer_float");r.getExtension("OES_texture_half_float");r.getExtension("OES_texture_half_float_linear");let Zt=!1,bt;pn(an.get(nn)).then(t=>{bt=t,Zt=!0});Promise.all([Promise.all(Wr.map((t,n)=>ce(r,t))),Promise.all(zr.map((t,n)=>ce(r,t))),Promise.all(Yr.map((t,n)=>ce(r,t)))]).then(t=>{let n=0;for(const a of Qt){const i=t[n];a.albedoMap=i[0],a.normalMap=i[1],a.metallicMap=i[2],a.roughnessMap=i[3],a.aoMap=i[4],n++,n===3&&(n=0)}});requestAnimationFrame(_n);En();window.addEventListener("resize",En);window.addEventListener("DOMContentLoaded",()=>{document.getElementById("header").style.display="block";var t=Je()?document.getElementById("instructions-touch"):document.getElementById("instructions-desktop");t.style.display="block",jt&&(ln.style.display="block")});document.getElementById("info-icon").addEventListener("click",()=>{jt=!jt,ln.style.display=jt?"block":"none"});function _n(t){if(requestAnimationFrame(_n),Zt&&(G={width:bt.width,height:bt.height,imageData:bt.dataFloat,step:0,maxSteps:3},Zt=!1),G){if(G.step===0)no(G);else if(G.step===10)ao();else if(G.step===20)ro();else if(G.step===30){oo(),G=null;return}G.step++;return}if(r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),B.updateViewMatrix(),r.bindBuffer(r.UNIFORM_BUFFER,$r),r.bufferSubData(r.UNIFORM_BUFFER,Kt.uniforms.projMatrix.offset,B.projectionMatrix,0),r.bufferSubData(r.UNIFORM_BUFFER,Kt.uniforms.zNear.offset,new Float32Array([B.near]),0),r.bufferSubData(r.UNIFORM_BUFFER,Kt.uniforms.zFar.offset,new Float32Array([B.far]),0),r.bindBuffer(r.UNIFORM_BUFFER,qr),r.bufferSubData(r.UNIFORM_BUFFER,$t.uniforms.viewMatrix.offset,B.viewMatrix,0),r.bufferSubData(r.UNIFORM_BUFFER,$t.uniforms.cameraPosition.offset,new Float32Array(B.position),0),r.bufferSubData(r.UNIFORM_BUFFER,$t.uniforms.time.offset,new Float32Array([t]),0),r.bindBuffer(r.UNIFORM_BUFFER,Qr),Ht.playAnim){const n=t*.001;for(let a=0;a<qt;a++){const i=Math.PI*2/qt,o=[Math.cos(a*i+n)*(Math.sin(n)*2+4),Math.sin(a*i+n)*(Math.sin(n)*2+4),Math.cos(n)*3];Pt[a][0]=o[0],Pt[a][1]=o[1],Pt[a][2]=o[2],fn[a].setPosition(o).updateWorldMatrix(),r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.pointLightPositions.offset+a*nt.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,Pt[a],0),r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.pointLightColors.offset+a*4*Float32Array.BYTES_PER_ELEMENT,dn[a],0)}}r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.pointLightIntensity.offset,xe,0),r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.diffuseEnvLightMixFactor.offset,on,0),r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.specularEnvLightMixFactor.offset,sn,0),r.bindBuffer(r.UNIFORM_BUFFER,Zr),r.bufferSubData(r.UNIFORM_BUFFER,un.uniforms.tonemappingMode.offset,rn),r.enable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight),r.clearColor(.1,.1,.1,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.depthFunc(r.LEQUAL),mn.render(),r.depthFunc(r.LESS),V.updateWorldMatrix().render()}var Ut,j,ft,mt,lt;let Tt=null,xt=null;function no(t){const{width:n,height:a,imageData:i}=t;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),Ut&&r.deleteTexture(Ut),Ut=r.createTexture(),r.bindTexture(r.TEXTURE_2D,Ut),r.texImage2D(r.TEXTURE_2D,0,r.RGB9_E5,n,a,0,r.RGB,r.FLOAT,i),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.bindTexture(r.TEXTURE_2D,null),ve.texture=Ut,Tt||(Tt=r.createFramebuffer(),xt=r.createRenderbuffer()),r.bindFramebuffer(r.FRAMEBUFFER,Tt),r.bindRenderbuffer(r.RENDERBUFFER,xt),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,et,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,xt),j&&r.deleteTexture(j),j=r.createTexture(),r.bindTexture(r.TEXTURE_CUBE_MAP,j);for(let o=0;o<6;o++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,r.RGBA16F,et,et,0,r.RGBA,r.HALF_FLOAT,null);r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.viewport(0,0,et,et);for(let o=0;o<6;o++)r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+o,j,0),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),X.lookAt=Ue[o],X.upVector=Pe[o],X.updateViewMatrix().updateProjectionViewMatrix(),ve.render(X);r.generateMipmap(r.TEXTURE_CUBE_MAP),r.bindFramebuffer(r.FRAMEBUFFER,null)}function ao(){Re.envTexture=j;const t=32;ft&&r.deleteTexture(ft),ft=r.createTexture(),r.bindTexture(r.TEXTURE_CUBE_MAP,ft);for(let n=0;n<6;n++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,r.RGBA16F,t,t,0,r.RGBA,r.HALF_FLOAT,null);r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.bindFramebuffer(r.FRAMEBUFFER,Tt),r.bindRenderbuffer(r.RENDERBUFFER,xt),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,t,t),r.viewport(0,0,t,t);for(let n=0;n<6;n++)r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+n,ft,0),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),X.lookAt=Ue[n],X.upVector=Pe[n],X.updateViewMatrix().updateProjectionViewMatrix(),Re.render(X);r.bindFramebuffer(r.FRAMEBUFFER,null)}function ro(){mt&&r.deleteTexture(mt);const t=128;mt=r.createTexture(),r.bindTexture(r.TEXTURE_CUBE_MAP,mt);for(let a=0;a<6;a++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,r.RGBA16F,t,t,0,r.RGBA,r.HALF_FLOAT,null);r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.generateMipmap(r.TEXTURE_CUBE_MAP),Ft.envTexture=j,r.bindFramebuffer(r.FRAMEBUFFER,Tt);const n=5;for(let a=0;a<n;a++){const i=t*Math.pow(.5,a),o=t*Math.pow(.5,a);r.bindRenderbuffer(r.RENDERBUFFER,xt),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,i,o),r.viewport(0,0,i,o);const s=a/(n-1);Ft.updateUniform("u_roughness",s);for(let l=0;l<6;l++)X.lookAt=Ue[l],X.upVector=Pe[l],X.updateViewMatrix().updateProjectionViewMatrix(),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+l,mt,a),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),Ft.render(X)}r.bindFramebuffer(r.FRAMEBUFFER,null)}function oo(){lt&&r.deleteTexture(lt),lt=r.createTexture(),r.bindTexture(r.TEXTURE_2D,lt),r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,Et,pt,0,r.RGBA,r.HALF_FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.bindFramebuffer(r.FRAMEBUFFER,Tt),r.bindRenderbuffer(r.RENDERBUFFER,xt),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,Et,pt),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,lt,0),r.viewport(0,0,Et,pt),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),to.render(),r.bindFramebuffer(r.FRAMEBUFFER,null),mn.texture=j;for(const t of Qt)t.irradianceMapTexture=ft,t.prefilterMapTexture=mt,t.brdfLutTexture=lt}function En(){B.aspect=innerWidth/innerHeight,B.updateProjectionMatrix(),rt.width=innerWidth*devicePixelRatio,rt.height=innerHeight*devicePixelRatio,rt.style.setProperty("width",`${innerWidth}px`),rt.style.setProperty("height",`${innerHeight}px`)}function io(){const t=`
    .tp-thumbv_ovl .tp-thumbv_opt:first-of-type {
      display: none !important;
    }
    .tp-thumbv_thmb, .tp-thumbv_sthmb {
      background-size: cover !important;
    }
  `,n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=t:n.styleSheet.cssText=t,document.getElementsByTagName("head")[0].appendChild(n)}function pn(t){return new Promise(n=>{const a=new ot;a.src=E(t),a.onload=()=>{n(a)}})}function E(t){return window.BASE_URL?`${window.BASE_URL}/assets/${t}`:t}
