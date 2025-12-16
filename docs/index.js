var En=Object.defineProperty;var Ue=Object.getOwnPropertySymbols;var _n=Object.prototype.hasOwnProperty,Tn=Object.prototype.propertyIsEnumerable;var re=(t,n,a)=>n in t?En(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,Q=(t,n)=>{for(var a in n||(n={}))_n.call(n,a)&&re(t,a,n[a]);if(Ue)for(var a of Ue(n))Tn.call(n,a)&&re(t,a,n[a]);return t};var d=(t,n,a)=>(re(t,typeof n!="symbol"?n+"":n,a),a),we=(t,n,a)=>{if(!n.has(t))throw TypeError("Cannot "+a)};var P=(t,n,a)=>(we(t,n,"read from private field"),a?a.call(t):n.get(t)),I=(t,n,a)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,a)},C=(t,n,a,i)=>(we(t,n,"write to private field"),i?i.call(t,a):n.set(t,a),a);import{c as J,s as Be,n as Oe,p as vn,o as xn,a as Fe,b as at,u as gn,m as Xe,d as He,i as ke,t as Mn,f as pt,l as bn,e as oe,g as Rn,h as An,r as Un,j as wn,k as Fn,q as Pn,A as Sn,v as yn,T as Ln}from"./assets/vendor.06b00773.js";const Nn=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};Nn();function rt(){var t=document.createElement("canvas"),n="t",a=1,i=2.2,o=null,s,l;return t.__defineGetter__("exposure",function(){return a}),t.__defineSetter__("exposure",function(c){a=c,o&&(lt(o,a,i,l.data),s.putImageData(l,0,0))}),t.__defineGetter__("gamma",function(){return i}),t.__defineSetter__("gamma",function(c){i=c,o&&(lt(o,a,i,l.data),s.putImageData(l,0,0))}),t.__defineGetter__("dataFloat",function(){return ue(o)}),t.__defineGetter__("dataRGBE",function(){return o}),t.toHDRBlob=function(c,h,f){function u(R,U,F){var S=R.createShader(F);return R.shaderSource(S,U),R.compileShader(S),S}function p(R,U,F){var S=R.createProgram(),N,X;return R.attachShader(S,N=u(R,U,R.VERTEX_SHADER)),R.attachShader(S,X=u(R,F,R.FRAGMENT_SHADER)),R.linkProgram(S),R.deleteShader(N),R.deleteShader(X),S}var m=h&&h.match(/rgb9_e5/i)?new Uint8Array(Ve(ue(o)).buffer):new Uint8Array(o.buffer),E=`precision highp float;
attribute vec3 position;
varying vec2 tex;
void main() { tex = position.xy/2.0+0.5; gl_Position = vec4(position, 1.0); }`,T=`precision highp float;
precision highp sampler2D;
uniform sampler2D tx;
varying vec2 tex;
void main() { gl_FragColor = texture2D(tx,tex); }`,x=this.width,M=this.height;if(x*M*4<m.byteLength)return console.error("not big enough.");var v=document.createElement("canvas");v.width=x,v.height=M;var _=v.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0}),y=_.createTexture();_.activeTexture(_.TEXTURE0),_.bindTexture(_.TEXTURE_2D,y),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,!0),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.NEAREST),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.NEAREST),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,x,M,0,_.RGBA,_.UNSIGNED_BYTE,new Uint8Array(m.buffer));var w=p(_,E,T),g=_.getUniformLocation(w,"tx"),q=new Float32Array([-1,-1,0,1,-1,0,1,1,0,1,1,0,-1,1,0,-1,-1,0]),b=_.createBuffer();if(_.enableVertexAttribArray(0),_.bindBuffer(_.ARRAY_BUFFER,b),_.bufferData(_.ARRAY_BUFFER,q,_.STATIC_DRAW),_.vertexAttribPointer(0,3,_.FLOAT,!1,0,0),_.useProgram(w),_.uniform1i(g,0),_.drawArrays(_.TRIANGLES,0,6),_.deleteTexture(y),_.deleteProgram(w),c)return v.toBlob(c)},t.__defineGetter__("src",function(){return n}),t.__defineSetter__("src",function(c){if(n=c,s&&s.clearRect(0,0,this.width,this.height),c.match(/\.hdr$/i))Cn(c,function(f,u,p){o=f,this.width=this.style.width=u,this.height=this.style.height=p,s=this.getContext("2d"),l=s.getImageData(0,0,u,p),lt(f,a,i,l.data),s.putImageData(l,0,0),this.onload&&this.onload()}.bind(t));else if(c.match(/\.rgb9_e5\.png$/i)){var h=new Image;h.src=c,h.onload=function(){var f=document.createElement("canvas"),u=this.width=this.style.width=f.width=h.width,p=this.height=this.style.height=f.height=h.height,m=f.getContext("webgl"),E=m.createTexture();m.bindTexture(m.TEXTURE_2D,E),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,m.RGBA,m.UNSIGNED_BYTE,h),fb=m.createFramebuffer(),m.bindFramebuffer(m.FRAMEBUFFER,fb),m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,E,0);var T=new Uint8Array(u*p*4);m.readPixels(0,0,u,p,m.RGBA,m.UNSIGNED_BYTE,T),m.deleteTexture(E),m.deleteFramebuffer(fb),this.dataRAW=new Uint32Array(T.buffer),o=je(Ge(this.dataRAW)),s=this.getContext("2d"),l=s.getImageData(0,0,u,p),lt(o,a,i,l.data),s.putImageData(l,0,0),this.onload&&this.onload()}.bind(t)}else if(c.match(/\.hdr\.png$|\.rgbe\.png/i)){var h=new Image;h.src=c,h.onload=function(){var u=document.createElement("canvas"),p=this.width=this.style.width=u.width=h.width,m=this.height=this.style.height=u.height=h.height,E=u.getContext("webgl"),T=E.createTexture();E.bindTexture(E.TEXTURE_2D,T),E.texImage2D(E.TEXTURE_2D,0,E.RGBA,E.RGBA,E.UNSIGNED_BYTE,h),fb=E.createFramebuffer(),E.bindFramebuffer(E.FRAMEBUFFER,fb),E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,T,0);var x=new Uint8Array(p*m*4);E.readPixels(0,0,p,m,E.RGBA,E.UNSIGNED_BYTE,x),E.deleteTexture(T),E.deleteFramebuffer(fb),o=x,s=this.getContext("2d"),l=s.getImageData(0,0,p,m),lt(o,a,i,l.data),s.putImageData(l,0,0),this.onload&&this.onload()}.bind(t)}}),t}function In(t,n){for(var a in n)t[a]=n[a];return t}function Cn(t,n){var a=In(new XMLHttpRequest,{responseType:"arraybuffer"});return a.onerror=n.bind(a,!1),a.onload=function(){if(this.status>=400)return this.onerror();for(var i="",o=0,s=new Uint8Array(this.response),l;!i.match(/\n\n[^\n]+\n/g);)i+=String.fromCharCode(s[o++]);if(l=i.match(/FORMAT=(.*)$/m)[1],l!="32-bit_rle_rgbe")return console.warn("unknown format : "+l),this.onerror();for(var c=i.split(/\n/).reverse()[1].split(" "),h=c[3]*1,f=c[1]*1,u=new Uint8Array(h*f*4),p=0,m=0;m<f;m++){var E=s.slice(o,o+=4),T=[];if(E[0]!=2||E[1]!=2||E[2]&128){var x=h,M=0;for(o-=4;x>0;)if(u.set(s.slice(o,o+=4),p),u[p]==1&&u[p+1]==1&&u[p+2]==1){for(u[p+3]<<M;v>0;v--)u.set(u.slice(p-4,p),p),p+=4,x--;M+=8}else x--,p+=4,M=0}else{if((E[2]<<8)+E[3]!=h)return console.warn("HDR line mismatch .."),this.onerror();for(var v=0;v<4;v++)for(var _=v*h,y=(v+1)*h,w,g;_<y;)if(w=s.slice(o,o+=2),w[0]>128)for(g=w[0]-128;g-- >0;)T[_++]=w[1];else for(g=w[0]-1,T[_++]=w[1];g-- >0;)T[_++]=s[o++];for(var v=0;v<h;v++)u[p++]=T[v],u[p++]=T[v+h],u[p++]=T[v+2*h],u[p++]=T[v+3*h]}}n&&n(u,h,f)},a.open("GET",t,!0),a.send(null),a}function Ve(t,f){for(var a,i,o,s,l,c,h=t.byteLength/12|0,f=f||new Uint32Array(h),u=0;u<h;u++)a=Math.min(32768,t[u*3]),i=Math.min(32768,t[u*3+1]),o=Math.min(32768,t[u*3+2]),s=Math.max(Math.max(a,i),o),l=Math.max(-16,Math.floor(Math.log2(s)))+16,c=Math.pow(2,l-24),Math.floor(s/c+.5)==511&&(c*=2,l+=1),f[u]=(Math.floor(a/c+.5)<<23)+(Math.floor(i/c+.5)<<14)+(Math.floor(o/c+.5)<<5)+(l|0);return f}function Ge(t,s){for(var a,i,o=t.byteLength>>2,s=s||new Float32Array(o*3),l=0;l<o;l++)a=t[l],i=Math.pow(2,(a&31)-24),s[l*3]=(a>>>23)*i,s[l*3+1]=(a>>>14&511)*i,s[l*3+2]=(a>>>5&511)*i;return s}function je(t,h){for(var a,i,o,s,l,c=t.byteLength/12|0,h=h||new Uint8Array(c*4),f=0;f<c;f++)a=t[f*3],i=t[f*3+1],o=t[f*3+2],s=Math.max(Math.max(a,i),o),e=Math.ceil(Math.log2(s)),l=Math.pow(2,e-8),h[f*4]=a/l|0,h[f*4+1]=i/l|0,h[f*4+2]=o/l|0,h[f*4+3]=e+128;return h}function ue(t,o){for(var a,i=t.byteLength>>2,o=o||new Float32Array(i*3),s=0;s<i;s++)a=Math.pow(2,t[s*4+3]-(128+8)),o[s*3]=t[s*4]*a,o[s*3+1]=t[s*4+1]*a,o[s*3+2]=t[s*4+2]*a;return o}function lt(t,n,a,c){n=Math.pow(2,n===void 0?1:n)/2,a===void 0&&(a=2.2);for(var o=1/a,s,l=t.byteLength>>2,c=c||new Uint8ClampedArray(l*4),h=0;h<l;h++)s=n*Math.pow(2,t[h*4+3]-(128+8)),c[h*4]=255*Math.pow(t[h*4]*s,o),c[h*4+1]=255*Math.pow(t[h*4+1]*s,o),c[h*4+2]=255*Math.pow(t[h*4+2]*s,o),c[h*4+3]=255;return c}function Dn(t,n,a,l){n=Math.pow(2,n===void 0?1:n)/2,a===void 0&&(a=2.2);for(var o=1/a,s=t.byteLength/12|0,l=l||new Uint8ClampedArray(s*4),c=0;c<s;c++)l[c*4]=255*Math.pow(t[c*3]*n,o),l[c*4+1]=255*Math.pow(t[c*3+1]*n,o),l[c*4+2]=255*Math.pow(t[c*3+2]*n,o),l[c*4+3]=255;return l}rt.floatToRgbe=je;rt.rgbeToFloat=ue;rt.floatToRgb9_e5=Ve;rt.rgb9_e5ToFloat=Ge;rt.rgbeToLDR=lt;rt.floatToLDR=Dn;var Bn=Object.defineProperty,On=(t,n,a)=>n in t?Bn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,B=(t,n,a)=>(On(t,typeof n!="symbol"?n+"":n,a),a),We=(t,n,a)=>{if(!n.has(t))throw TypeError("Cannot "+a)},L=(t,n,a)=>(We(t,n,"read from private field"),a?a.call(t):n.get(t)),jt=(t,n,a)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,a)},Xn=(t,n,a,i)=>(We(t,n,"write to private field"),i?i.call(t,a):n.set(t,a),a),ie="-- DEFINES_HOOK --",Hn=(t,n,a,i={})=>{if(Object.keys(i).length&&!a.includes(ie))throw new Error(`in order to include defines, you must provide "${ie}" in your shader code`);let o="";for(let[c,h]of Object.entries(i)){if(typeof h=="boolean"&&!h)continue;let f=`${h}`;typeof h=="number"&&Number.isInteger(h)&&(f+=".0"),o+=`#define ${c} ${f}
`}a=a.replace(ie,o);let s=t.createShader(n);if(t.shaderSource(s,a),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS))return s;let l=`
    Error in ${n===t.VERTEX_SHADER?"Vertex":"Fragment"} shader:
    ${t.getShaderInfoLog(s)}
  `;throw t.deleteShader(s),new Error(l)},Pe=Hn,kn=(t,n,a,i)=>{let o=Pe(t,t.VERTEX_SHADER,n,i),s=Pe(t,t.FRAGMENT_SHADER,a,i),l=t.createProgram();if(t.attachShader(l,o),t.attachShader(l,s),t.linkProgram(l),t.detachShader(l,o),t.deleteShader(o),t.detachShader(l,s),t.deleteShader(s),t.getProgramParameter(l,t.LINK_STATUS))return l;let c=new Error(`Error linking program: ${t.getProgramInfoLog(l)}`);throw t.deleteProgram(l),c},Vn=kn,Gn=(t,n,a,i)=>{let o=t.getUniformBlockIndex(n,a),s=t.getActiveUniformBlockParameter(n,o,t.UNIFORM_BLOCK_DATA_SIZE),l=t.getActiveUniformBlockParameter(n,o,t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),c=t.getActiveUniformBlockParameter(n,o,t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),h=t.getUniformIndices(n,i),f=t.getActiveUniforms(n,h,t.UNIFORM_OFFSET),u=t.getActiveUniforms(n,h,t.UNIFORM_SIZE),p={};for(let m=0;m<i.length;m++){let E=i[m],T={index:h[m],offset:f[m],size:u[m]};p[E]=T}return{blockIndex:o,blockSize:s,usedInVertexShader:l,usedInFragmentShader:c,uniforms:p}},Zt=Gn,jn=(t,n,a=0,i=t.DYNAMIC_DRAW)=>{let o=t.createBuffer();return t.bindBuffer(t.UNIFORM_BUFFER,o),t.bufferData(t.UNIFORM_BUFFER,n,i),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,a,o),o},Jt=jn,Wn=(t,n,a,i)=>{let o;switch(n){case t.FLOAT:return t.uniform1f(a,i);case t.FLOAT_VEC2:return o=i,t.uniform2f(a,o[0],o[1]);case t.FLOAT_VEC3:return o=i,t.uniform3f(a,o[0],o[1],o[2]);case t.FLOAT_VEC4:return o=i,t.uniform4f(a,o[0],o[1],o[2],o[3]);case t.BOOL:case t.INT:case t.SAMPLER_2D:case t.SAMPLER_CUBE:return t.uniform1i(a,i);case t.BOOL_VEC2:case t.INT_VEC2:return o=i,t.uniform2i(a,o[0],o[1]);case t.BOOL_VEC3:case t.INT_VEC3:return o=i,t.uniform3i(a,o[0],o[1],o[2]);case t.BOOL_VEC4:case t.INT_VEC4:return o=i,t.uniform4i(a,o[0],o[1],o[2],o[3]);case t.FLOAT_MAT2:return t.uniformMatrix2fv(a,!1,i);case t.FLOAT_MAT3:return t.uniformMatrix3fv(a,!1,i);case t.FLOAT_MAT4:return t.uniformMatrix4fv(a,!1,i);default:throw new Error("wrong type for uniform")}},Se=Wn,zn=(t={})=>{let{radius:n=.5,widthSegments:a=16,heightSegments:i=Math.ceil(a*.5),phiStart:o=0,phiLength:s=Math.PI*2,thetaStart:l=0,thetaLength:c=Math.PI}=t,h=a,f=i,u=o,p=s,m=l,E=c,T=(h+1)*(f+1),x=h*f*6,M=3+3+2,v=new Float32Array(T*M),_=T>65536?new Uint32Array(x):new Uint16Array(x),y=0,w=0,g=0,q=m+E,b=[],R=J();for(let U=0;U<=f;U++){let F=[],S=U/f;for(let N=0;N<=h;N++,y++){let X=N/h,j=-n*Math.cos(u+X*p)*Math.sin(m+S*E),Ht=n*Math.cos(m+S*E),Mt=n*Math.sin(u+X*p)*Math.sin(m+S*E);v[y*M+0]=j,v[y*M+1]=Ht,v[y*M+2]=Mt,Be(R,j,Ht,Mt),Oe(R,R),v[y*M+3]=R[0],v[y*M+4]=R[1],v[y*M+5]=R[2],v[y*M+6]=X,v[y*M+7]=1-S,F.push(w++)}b.push(F)}for(let U=0;U<f;U++)for(let F=0;F<h;F++){let S=b[U][F+1],N=b[U][F],X=b[U+1][F],j=b[U+1][F+1];(U!==0||m>0)&&(_[g*3]=S,_[g*3+1]=N,_[g*3+2]=j,g++),(U!==f-1||q<Math.PI)&&(_[g*3]=N,_[g*3+1]=X,_[g*3+2]=j,g++)}return{radius:n,vertexCount:x,vertexStride:M,interleavedArray:v,indicesArray:_}},Yn=zn,Kn=(t={})=>{let{width:n=1,height:a=1,widthSegments:i=1,heightSegments:o=1,flipUVy:s=!1}=t,l=i,c=o,h=(l+1)*(c+1),f=l*c*6,u=new Float32Array(h*3+h*2),p=h>65536?new Uint32Array(f):new Uint16Array(f),m=0,E=0,T=m,x=n/l,M=a/c,v=1,_=-1,y=0,w=3+2;for(let g=0;g<=c;g++){let q=g*M-a/2;for(let b=0;b<=l;b++,m++){let R=b*x-n/2;if(u[m*w+0]=R*v,u[m*w+1]=q*_,u[m*w+2]=y/2,u[m*w+3]=b/l,u[m*w+4]=s?1-g/c:g/c,g===c||b===l)continue;let U=T+b+g*(l+1),F=T+b+(g+1)*(l+1),S=T+b+(g+1)*(l+1)+1,N=T+b+g*(l+1)+1;p[E*6]=U,p[E*6+1]=F,p[E*6+2]=N,p[E*6+3]=F,p[E*6+4]=S,p[E*6+5]=N,E++}}return{width:n,height:a,vertexCount:p.length,vertexStride:w,interleavedArray:u,indicesArray:p}},te=Kn,$n=(t={})=>{let{width:n=1,height:a=1,depth:i=1,widthSegments:o=1,heightSegments:s=1,depthSegments:l=1,uvOffsetEachFace:c=!1,flipUVy:h=!1}=t,f=o,u=s,p=l,m=(f+1)*(u+1)*2+(f+1)*(p+1)*2+(u+1)*(p+1)*2,E=(f*u*2+f*p*2+u*p*2)*6,T=3+3+2,x=new Float32Array(m*T),M=E>65536?new Uint32Array(E):new Uint16Array(E),v=0,_=0;return ot(x,M,i,a,n,p,u,4,2,1,0,-1,-1,v,_,T,c,h),ot(x,M,i,a,-n,p,u,2,2,1,0,1,-1,v+=(p+1)*(u+1),_+=p*u,T,c,h),ot(x,M,n,i,a,p,u,0,0,2,1,1,1,v+=(p+1)*(u+1),_+=p*u,T,c,h),ot(x,M,n,i,-a,p,u,5,0,2,1,1,-1,v+=(f+1)*(p+1),_+=f*p,T,c,h),ot(x,M,n,a,-i,f,u,3,0,1,2,-1,-1,v+=(f+1)*(p+1),_+=f*p,T,c,h),ot(x,M,n,a,i,f,u,1,0,1,2,1,-1,v+=(f+1)*(u+1),_+=f*u,T,c,h),{width:n,height:a,depth:i,vertexCount:E,vertexStride:T,interleavedArray:x,indicesArray:M}},qn=$n;function ot(t,n,a,i,o,s,l,c,h=0,f=1,u=2,p=1,m=-1,E=0,T=0,x=8,M=!1,v=!1){let _=E,y=a/s,w=i/l;for(let g=0;g<=l;g++){let q=g*w-i/2;for(let b=0;b<=s;b++,E++){let R=b*y-a/2;t[E*x+0+h]=R*p,t[E*x+0+f]=q*m,t[E*x+0+u]=o/2,t[E*x+3+h]=0,t[E*x+3+f]=0,t[E*x+3+u]=o>=0?1:-1;let U=1/6,F=U*c,S=M?F+b/s*U:b/s,N=M?v?F+U-F+g/l*U:F+g/l*U:v?1-g/l:g/l;if(t[E*x+6+0]=S,t[E*x+6+1]=N,g===l||b===s)continue;let X=_+b+g*(s+1),j=_+b+(g+1)*(s+1),Ht=_+b+(g+1)*(s+1)+1,Mt=_+b+g*(s+1)+1;n[T*6]=X,n[T*6+1]=j,n[T*6+2]=Mt,n[T*6+3]=j,n[T*6+4]=Ht,n[T*6+5]=Mt,T++}}}var ye=(t,n,a)=>Math.min(Math.max(t,n),a),ze=class{constructor(){d(this,"upVector",pt(0,1,0));d(this,"position",pt(0,0,0));d(this,"lookAt",pt(0,0,0));d(this,"projectionMatrix",at());d(this,"viewMatrix",at());d(this,"viewMatrixInverse",at());d(this,"projectionViewMatrix",at())}updateViewMatrix(){return bn(this.viewMatrix,this.position,this.lookAt,this.upVector),ke(this.viewMatrixInverse,this.viewMatrix),this}updateProjectionMatrix(){return this}updateProjectionViewMatrix(){return this.updateViewMatrix(),this.updateProjectionMatrix(),Xe(this.projectionViewMatrix,this.projectionMatrix,this.viewMatrix),this}},Ye=class extends ze{constructor(t,n,a,i){super();d(this,"fieldOfView");d(this,"aspect");d(this,"near");d(this,"far");this.fieldOfView=t,this.aspect=n,this.near=a,this.far=i,this.updateProjectionMatrix()}updateProjectionMatrix(){return vn(this.projectionMatrix,this.fieldOfView,this.aspect,this.near,this.far),this}},Ke=class extends ze{constructor(t,n,a,i,o,s){super();d(this,"left");d(this,"right");d(this,"bottom");d(this,"top");d(this,"near");d(this,"far");this.left=t,this.right=n,this.top=a,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}updateProjectionMatrix(){return xn(this.projectionMatrix,this.left,this.right,this.bottom,this.top,this.near,this.far),this}},it=class{constructor(){d(this,"value",0);d(this,"damping");this.damping=.5}addForce(t){this.value+=t}update(){return this.value*this.value>1e-6?this.value*=this.damping:this.stop(),this.value}stop(){this.value=0}},Qn=class{constructor(t,n=document.body,a=!1,i=1){d(this,"camera");d(this,"domElement");d(this,"target",J());d(this,"minDistance",0);d(this,"maxDistance",1/0);d(this,"isEnabled",!0);d(this,"isDamping");d(this,"dampingFactor");d(this,"isZoom");d(this,"zoomSpeed");d(this,"isRotate");d(this,"rotateSpeed");d(this,"isPan");d(this,"keyPanSpeed");d(this,"enableKeys");d(this,"keys");d(this,"originTarget");d(this,"originPosition");d(this,"targetXDampedAction",new it);d(this,"targetYDampedAction",new it);d(this,"targetZDampedAction",new it);d(this,"targetThetaDampedAction",new it);d(this,"targetPhiDampedAction",new it);d(this,"targetRadiusDampedAction",new it);d(this,"_isShiftDown",!1);d(this,"_rotateStart",{x:9999,y:9999});d(this,"_rotateEnd",{x:9999,y:9999});d(this,"_roatteDelta",{x:9999,y:9999});d(this,"_spherical");d(this,"_zoomDistanceEnd",0);d(this,"_zoomDistance",0);d(this,"state","");d(this,"loopId",0);d(this,"_panStart",{x:0,y:0});d(this,"_panDelta",{x:0,y:0});d(this,"_panEnd",{x:0,y:0});d(this,"_paused",!1);d(this,"_isDebug",!1);d(this,"_outputEl");d(this,"mouseWheelForce",1);this.mouseWheelForce=i,t||console.error("camera is undefined"),this.camera=t,this.domElement=n,this.isDamping=!1,this.dampingFactor=.25,this.isZoom=!0,this.zoomSpeed=1,this.isRotate=!0,this.rotateSpeed=1,this.isPan=!0,this.keyPanSpeed=7,this.enableKeys=!0,this.keys={LEFT:"37",UP:"38",RIGHT:"39",BOTTOM:"40",SHIFT:"16"},this.originTarget=J(),this.originPosition=J(),this.originPosition[0]=t.position[0],this.originPosition[1]=t.position[0],this.originPosition[2]=t.position[0];let o=this.camera.position[0],s=this.camera.position[1],l=this.camera.position[2],c=Math.sqrt(o*o+s*s+l*l),h=Math.atan2(this.camera.position[0],this.camera.position[2]),f=Math.acos(ye(this.camera.position[1]/c,-1,1));this._spherical={radius:c,theta:h,phi:f},this._bindEvens(),this.setEventHandler(),this.startTick(),this._isDebug=a,a&&(this._outputEl=document.createElement("div"),this._outputEl.setAttribute("style",`
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
    `),document.body.appendChild(this._outputEl))}lookAt([t,n,a]){return Be(this.target,t,n,a),this}setEventHandler(){this.domElement.addEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.addEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.addEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.addEventListener("touchstart",this._touchStartHandler,!1),this.domElement.addEventListener("touchmove",this._touchMoveHandler,!1),window.addEventListener("keydown",this._onKeyDownHandler,!1),window.addEventListener("keyup",this._onKeyUpHandler,!1)}removeEventHandler(){this.domElement.removeEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.removeEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.removeEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1),this.domElement.removeEventListener("touchstart",this._touchStartHandler,!1),this.domElement.removeEventListener("touchmove",this._touchMoveHandler,!1),window.removeEventListener("keydown",this._onKeyDownHandler,!1),window.removeEventListener("keydown",this._onKeyUpHandler,!1)}startTick(){this.loopId=requestAnimationFrame(this.tick)}pause(){this._paused=!0}start(){this._paused=!1}tick(){if(!this._paused&&(this.updateDampedAction(),this.updateCamera(),this._isDebug)){let t=Math.round(this.camera.position[0]*100)/100,n=Math.round(this.camera.position[1]*100)/100,a=Math.round(this.camera.position[2]*100)/100;this._outputEl.textContent=`x: ${t} y: ${n} z: ${a}`}this.loopId=requestAnimationFrame(this.tick)}updateDampedAction(){this.target[0]+=this.targetXDampedAction.update(),this.target[1]+=this.targetYDampedAction.update(),this.target[2]+=this.targetZDampedAction.update(),this._spherical.theta+=this.targetThetaDampedAction.update(),this._spherical.phi+=this.targetPhiDampedAction.update(),this._spherical.radius+=this.targetRadiusDampedAction.update()}updateCamera(){let t=this._spherical,n=Math.sin(t.phi)*t.radius;this.camera.position[0]=n*Math.sin(t.theta)+this.target[0],this.camera.position[1]=Math.cos(t.phi)*t.radius+this.target[1],this.camera.position[2]=n*Math.cos(t.theta)+this.target[2],this.camera.lookAt[0]=this.target[0],this.camera.lookAt[1]=this.target[1],this.camera.lookAt[2]=this.target[2]}_bindEvens(){this.tick=this.tick.bind(this),this._contextMenuHandler=this._contextMenuHandler.bind(this),this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._touchStartHandler=this._touchStartHandler.bind(this),this._touchMoveHandler=this._touchMoveHandler.bind(this),this._onKeyDownHandler=this._onKeyDownHandler.bind(this),this._onKeyUpHandler=this._onKeyUpHandler.bind(this)}_contextMenuHandler(t){!this.isEnabled||t.preventDefault()}_mouseDownHandler(t){!this.isEnabled||(t.button===0?(this.state="rotate",this._rotateStart={x:t.clientX,y:t.clientY}):(this.state="pan",this._panStart={x:t.clientX,y:t.clientY}),this.domElement.addEventListener("mousemove",this._mouseMoveHandler,!1),window.addEventListener("mouseup",this._mouseUpHandler,!1))}_mouseUpHandler(){this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1)}_mouseMoveHandler(t){!this.isEnabled||(this.state==="rotate"?(this._rotateEnd={x:t.clientX,y:t.clientY},this._roatteDelta={x:this._rotateEnd.x-this._rotateStart.x,y:this._rotateEnd.y-this._rotateStart.y},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y}):this.state==="pan"&&(this._panEnd={x:t.clientX,y:t.clientY},this._panDelta={x:-.5*(this._panEnd.x-this._panStart.x),y:.5*(this._panEnd.y-this._panStart.y)},this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y}))}_mouseWheelHandler(t){t.preventDefault();let n=this.mouseWheelForce,a=t.deltaY>0?n:-n;this.targetRadiusDampedAction.value=a}_touchStartHandler(t){let n,a;switch(t.touches.length){case 1:this.state="rotate",this._rotateStart={x:t.touches[0].clientX,y:t.touches[0].clientY};break;case 2:this.state="zoom",n=t.touches[1].clientX-t.touches[0].clientX,a=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistance=Math.sqrt(n*n+a*a);break;case 3:this.state="pan",this._panStart={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3};break}}_touchMoveHandler(t){let n,a,i;switch(t.preventDefault(),t.touches.length){case 1:if(this.state!=="rotate")return;this._rotateEnd={x:t.touches[0].clientX,y:t.touches[0].clientY},this._roatteDelta={x:(this._rotateEnd.x-this._rotateStart.x)*.5,y:(this._rotateEnd.y-this._rotateStart.y)*.5},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y};break;case 2:if(this.state!=="zoom")return;n=t.touches[1].clientX-t.touches[0].clientX,a=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistanceEnd=Math.sqrt(n*n+a*a),i=this._zoomDistanceEnd-this._zoomDistance,i*=.05;let o=this._spherical.radius-i;o=ye(o,this.minDistance,this.maxDistance),this._zoomDistance=this._zoomDistanceEnd,this._spherical.radius=o;break;case 3:this._panEnd={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3},this._panDelta={x:this._panEnd.x-this._panStart.x,y:this._panEnd.y-this._panStart.y},this._panDelta.x*=-1,this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y};break}}_onKeyDownHandler(t){let n=0,a=0;switch(t.key){case this.keys.SHIFT:this._isShiftDown=!0;break;case this.keys.LEFT:n=-10;break;case this.keys.RIGHT:n=10;break;case this.keys.UP:a=10;break;case this.keys.BOTTOM:a=-10;break}this._isShiftDown?(this._roatteDelta={x:-n,y:a},this._updateRotateHandler()):(this._panDelta={x:n,y:a},this._updatePanHandler())}_onKeyUpHandler(t){switch(t.key){case this.keys.SHIFT:this._isShiftDown=!1;break}}_updatePanHandler(){let t=J(),n=J(),a=J();a[0]=this.target[0]-this.camera.position[0],a[1]=this.target[1]-this.camera.position[1],a[2]=this.target[2]-this.camera.position[2],Oe(a,a),Fe(t,a,[0,1,0]),Fe(n,t,a);let i=Math.max(this._spherical.radius/2e3,.001);this.targetXDampedAction.addForce((t[0]*this._panDelta.x+n[0]*this._panDelta.y)*i),this.targetYDampedAction.addForce((t[1]*this._panDelta.x+n[1]*this._panDelta.y)*i),this.targetZDampedAction.addForce((t[2]*this._panDelta.x+n[2]*this._panDelta.y)*i)}_updateRotateHandler(){this.targetThetaDampedAction.addForce(-this._roatteDelta.x/this.domElement.clientWidth*this.mouseWheelForce),this.targetPhiDampedAction.addForce(-this._roatteDelta.y/this.domElement.clientHeight*this.mouseWheelForce)}},Zn=class{constructor(){d(this,"position",pt(0,0,0));d(this,"rotation",pt(0,0,0));d(this,"scale",pt(1,1,1));d(this,"modelMatrix",at());d(this,"shouldUpdate",!0)}copyFromMatrix(t){return He(this.modelMatrix,t),this.shouldUpdate=!1,this}setPosition(t){return oe(this.position,t),this.shouldUpdate=!0,this}setScale(t){return oe(this.scale,t),this.shouldUpdate=!0,this}setRotation(t){return oe(this.rotation,t),this.shouldUpdate=!0,this}updateModelMatrix(){return Rn(this.modelMatrix),An(this.modelMatrix,this.modelMatrix,this.position),Un(this.modelMatrix,this.modelMatrix,this.rotation[0]),wn(this.modelMatrix,this.modelMatrix,this.rotation[1]),Fn(this.modelMatrix,this.modelMatrix,this.rotation[2]),Pn(this.modelMatrix,this.modelMatrix,this.scale),this.shouldUpdate=!1,this}},$e=class extends Zn{constructor(t=void 0){super();d(this,"parentNode",null);d(this,"_children",[]);d(this,"_visible",!0);d(this,"worldMatrix",at());d(this,"normalMatrix",at());d(this,"uid",gn(9));d(this,"name");this.name=t}get visible(){return this._visible}set visible(t){this._visible=t}get children(){return this._children}get siblings(){return this.parentNode?this.parentNode._children:[]}get levelIndex(){let t=0,n=this.parentNode;for(;n;)t++,n=n.parentNode;return t}setParent(t=null){if(this.parentNode){let n=this.parentNode._children.indexOf(this);n>=0&&this.parentNode._children.splice(n,1)}return t&&t.addChild(this),this.parentNode=t,this}addChild(t){return this._children.push(t),this}updateWorldMatrix(t=null){this.shouldUpdate&&this.updateModelMatrix(),t?Xe(this.worldMatrix,t,this.modelMatrix):He(this.worldMatrix,this.modelMatrix),ke(this.normalMatrix,this.worldMatrix),Mn(this.normalMatrix,this.normalMatrix);for(let n=0;n<this._children.length;n++)this._children[n].updateWorldMatrix(this.worldMatrix);return this}traverse(t,n=0){t(this,n),n++;for(let a=0;a<this._children.length;a++)this._children[a].traverse(t,n)}findChild(t){if(t(this))return this;let n=null;for(let a=0;a<this._children.length&&!(n=this._children[a].findChild(t));a++);return n}findChildByName(t){if(this.name===t)return this;let n=null;for(let a=0;a<this._children.length&&!(n=this._children[a].findChildByName(t));a++);return n}findParent(t){if(t(this))return this;let n=null,a=this.parentNode;for(;a&&!(n=a.findParent(t));)a=a==null?void 0:a.parentNode;return n}findParentByName(t){if(this.name===t)return this;let n=null,a=this.parentNode;for(;a&&!(n=a.findParentByName(t));)a=a==null?void 0:a.parentNode;return n}render(){if(this._visible)for(let t=0;t<this._children.length;t++)this._children[t].render()}},ct,Wt=class extends $e{constructor(t,n,a,i={},o){super(o);if(B(this,"gl"),B(this,"vao"),B(this,"vertexCount"),jt(this,ct,new Map),B(this,"boundingBox"),B(this,"program"),this.gl=t,this.vao=t.createVertexArray(),this.program=Vn(t,n,a,i),this.program.__SPECTOR_Metadata={name:o,shaderDefines:i},!this.setUniform(Wt.WORLD_MATRIX_UNIFORM_NAME,{type:t.FLOAT_MAT4}))throw new Error(`Each Drawable is expected to have a mat4 ${Wt.WORLD_MATRIX_UNIFORM_NAME} implemented in shader`)}setUniform(t,{type:n,value:a}){let i=this.gl,o;if(o=L(this,ct).get(t))o.value=a;else{let s=i.getUniformLocation(this.program,t);if(!s)return console.error(`uniform with name ${t} was not found in the program`),!1;o={type:n,location:s,value:a},L(this,ct).set(t,o)}return a!=null&&(i.useProgram(this.program),Se(i,o.type,o.location,a)),!0}updateUniform(t,n){let a;if(a=this.getUniform(t)){a.value=n;let i=this.gl;return i.useProgram(this.program),Se(i,a.type,a.location,n),!0}return!1}getUniform(t){let n;return(n=L(this,ct).get(t))?n:(console.error("can't locate uniform with that name"),null)}updateWorldMatrix(t){return super.updateWorldMatrix(t),this.updateUniform(Wt.WORLD_MATRIX_UNIFORM_NAME,this.worldMatrix),this}destroy(){L(this,ct).clear();let t=this.gl;t.deleteVertexArray(this.vao),t.deleteProgram(this.program)}},K=Wt;ct=new WeakMap,B(K,"WORLD_MATRIX_UNIFORM_NAME","u_worldMatrix");var Jn=document.createElement("canvas"),qe=Jn.getContext("webgl2"),W=qe.MAX_TEXTURE_SIZE,kt=qe.RGB,se,A,fe=!1,tt,ht,dt,me=class{constructor(){if(jt(this,tt,[]),jt(this,ht,[]),jt(this,dt,document.createElement("div")),fe){let t=400,n=document.createElement("style"),a="hwoa-rang-texture-atlas-debug";n.setAttribute("type","text/css");let i=`
        #${a} {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          transform-origin: 100% 100%;
          width: ${t}px;
          max-height: 100vh;
          overflow: scroll;
        }
        #${a} canvas {
          max-width: 100%;
        }
      `;n.appendChild(document.createTextNode(i)),document.getElementsByTagName("head")[0].appendChild(n),Xn(this,dt,document.createElement("div")),L(this,dt).setAttribute("id",a),document.body.appendChild(L(this,dt))}}static set debugMode(t){fe=t}static get textureSize(){return W}static set textureSize(t){W=t}static set textureFormat(t){kt=t}static set gl(t){A=t}static getInstance(){if(!A)throw new Error("You must provide a WebGL2RenderingContext first via setting the TextureAtlas.gl property!");return se||(se=new me),se}pack(t,n,a=1){let i=()=>{let m=document.createElement("canvas");L(this,dt).appendChild(m),m.width=W,m.height=W;let E=A.createTexture();A.bindTexture(A.TEXTURE_2D,E),A.texParameterf(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,A.LINEAR_MIPMAP_LINEAR),A.texImage2D(A.TEXTURE_2D,0,kt,W,W,0,kt,A.UNSIGNED_BYTE,null),A.generateMipmap(A.TEXTURE_2D),A.bindTexture(A.TEXTURE_2D,null);let T=new Sn(m);return L(this,tt).push(T),L(this,ht).push(E),T},o=L(this,tt)[L(this,tt).length-1];o||(o=i());let s=a===1?n:me.scaleDownDrawableByFactor(n,a);o.pack(t,s)||(o=i(),o.pack(t,s));let l=o.uv()[t];for(let m=0;m<l.length;m++)l[m][0]*=W,l[m][1]*=W;let c=L(this,ht)[L(this,ht).length-1],h=l[0][0],f=l[0][1],u=l[2][0]-l[0][0],p=l[2][1]-l[0][1];return A.bindTexture(A.TEXTURE_2D,c),A.texSubImage2D(A.TEXTURE_2D,0,h,f,u,p,kt,A.UNSIGNED_BYTE,s),A.generateMipmap(A.TEXTURE_2D),A.bindTexture(A.TEXTURE_2D,null),this}getUv2(t){let n=-1;for(let a=0;a<L(this,tt).length;a++){let i=L(this,tt)[a].uv2()[t];if(i){n=a;let o=L(this,ht)[n];return[i,o]}}throw new Error("Can't get uvs")}},ta=me;tt=new WeakMap,ht=new WeakMap,dt=new WeakMap,B(ta,"scaleDownDrawableByFactor",(t,n)=>{let a=document.createElement("canvas"),i=t instanceof HTMLImageElement?t.naturalWidth:t.width,o=t instanceof HTMLImageElement?t.naturalHeight:t.height;a.width=i/n,a.height=o/n,fe&&console.log(`Scaled ${i}x${o} project image to ${a.width}x${a.height}`);let s=a.getContext("2d");return s.imageSmoothingQuality="high",s.drawImage(t,0,0,i,o,0,0,a.width,a.height),a});var Le=class{static getSupportedFormats(t){return{astc:t.getExtension("WEBGL_compressed_texture_astc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),etc2:t.getExtension("WEBGL_compressed_texture_etc"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")}}static async loadCompressed(t,n=!0){let a=await fetch(t).then(o=>o.arrayBuffer()),i=new ut(a,1);return{mipmaps:i.mipmaps(n),width:i.pixelWidth,height:i.pixelHeight,format:i.glInternalFormat,mipmapCount:i.numberOfMipmapLevels}}},pe=class{constructor(t,n){d(this,"arrayBuffer");d(this,"glType");d(this,"glTypeSize");d(this,"glFormat");d(this,"glInternalFormat");d(this,"numberOfArrayElements");d(this,"numberOfMipmapLevels");d(this,"bytesOfKeyValueData");d(this,"numberOfFaces");d(this,"loadType");d(this,"pixelWidth");d(this,"pixelHeight");d(this,"pixelDepth");this.arrayBuffer=t;let a=new Uint8Array(this.arrayBuffer,0,12);if(a[0]!==171||a[1]!==75||a[2]!==84||a[3]!==88||a[4]!==32||a[5]!==49||a[6]!==49||a[7]!==187||a[8]!==13||a[9]!==10||a[10]!==26||a[11]!==10){console.error("texture missing KTX identifier");return}let i=Uint32Array.BYTES_PER_ELEMENT,o=new DataView(this.arrayBuffer,12,13*i),s=o.getUint32(0,!0)===67305985;if(this.glType=o.getUint32(1*i,s),this.glTypeSize=o.getUint32(2*i,s),this.glFormat=o.getUint32(3*i,s),this.glInternalFormat=o.getUint32(4*i,s),this.pixelWidth=o.getUint32(6*i,s),this.pixelHeight=o.getUint32(7*i,s),this.pixelDepth=o.getUint32(8*i,s),this.numberOfArrayElements=o.getUint32(9*i,s),this.numberOfFaces=o.getUint32(10*i,s),this.numberOfMipmapLevels=o.getUint32(11*i,s),this.bytesOfKeyValueData=o.getUint32(12*i,s),this.glType!==0){console.warn("only compressed formats currently supported");return}else this.numberOfMipmapLevels=Math.max(1,this.numberOfMipmapLevels);if(this.pixelHeight===0||this.pixelDepth!==0){console.warn("only 2D textures currently supported");return}if(this.numberOfArrayElements!==0){console.warn("texture arrays not currently supported");return}if(this.numberOfFaces!==n){console.warn("number of faces expected"+n+", but found "+this.numberOfFaces);return}this.loadType=pe.COMPRESSED_2D}mipmaps(t){let n=[],a=pe.HEADER_LEN+this.bytesOfKeyValueData,i=this.pixelWidth,o=this.pixelHeight,s=t?this.numberOfMipmapLevels:1;for(let l=0;l<s;l++){let c=new Int32Array(this.arrayBuffer,a,1)[0];a+=4;for(let h=0;h<this.numberOfFaces;h++){let f=new Uint8Array(this.arrayBuffer,a,c);n.push({data:f,width:i,height:o}),a+=c,a+=3-(c+3)%4}i=Math.max(1,i*.5),o=Math.max(1,o*.5)}return n}},ut=pe;B(ut,"HEADER_LEN",12+13*4),B(ut,"COMPRESSED_2D",0),B(ut,"COMPRESSED_3D",1),B(ut,"TEX_2D",2),B(ut,"TEX_3D",3);let Z;const le=async(t,n)=>{Z||(Z=Le.getSupportedFormats(t));let a,i;if(Z.s3tc?(a=n.s3tc,i="s3tc"):Z.astc?(a=n.astc,i="astc"):Z.etc1?(a=n.etc1,i="etc1"):Z.etc2?(a=n.etc2,i="etc2"):Z.pvrtc&&(a=n.pvrtc,i="pvrtc"),!a)throw console.log(n),new Error(`missing correct format ${i?`for ${i}`:""}`);const o=await Le.loadCompressed(a),s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);for(const[l,c]of o.mipmaps.entries())t.compressedTexImage2D(t.TEXTURE_2D,l,o.format,c.width,c.height,0,c.data);return o.mipmapCount>1?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),s};let ce;function ea(t){return ce==null&&(ce=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic")),ce}var xt,Ft,Pt;const Ae=class extends K{constructor(n,a,i,o,s,l){super(n,o,s,Q({PI:Math.PI,USE_UV:!0},l));I(this,xt,void 0);I(this,Ft,void 0);I(this,Pt,void 0);const{vertexCount:c,vertexStride:h,interleavedArray:f,indicesArray:u}=i;this.vertexCount=c;const p=n.getAttribLocation(this.program,"aPosition"),m=n.getAttribLocation(this.program,"aUv"),E=n.createBuffer(),T=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,E),n.bufferData(n.ARRAY_BUFFER,f,n.STATIC_DRAW),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(m),n.vertexAttribPointer(m,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,T),n.bufferData(n.ELEMENT_ARRAY_BUFFER,u,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:n.INT,value:0});const x=Ae.createTextCanvas(a);C(this,xt,n.createTexture()),n.bindTexture(n.TEXTURE_2D,P(this,xt)),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,x.width,x.height,0,n.RGBA,n.UNSIGNED_BYTE,x),n.generateMipmap(n.TEXTURE_2D);const M=ea(n);if(M!=null){const v=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT);n.texParameterf(n.TEXTURE_2D,M.TEXTURE_MAX_ANISOTROPY_EXT,v)}n.bindTexture(n.TEXTURE_2D,null),C(this,Ft,n.getUniformBlockIndex(this.program,"Projection")),C(this,Pt,n.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(n){const a=document.createElement("canvas"),i=a.getContext("2d");a.width=1024,a.height=128;const o=20,s=10,l=100;i.font=`${l}px Helvetica`,i.fillStyle="#fff",i.textBaseline="middle",i.fillText(n,o,a.height/2);const{width:c}=i.measureText(n),h=o+c+40;return i.strokeStyle="#fff",i.lineWidth=5,i.beginPath(),i.moveTo(h,a.height/2),i.lineTo(a.width-s,a.height/2),i.stroke(),i.beginPath(),i.moveTo(a.width-s,a.height/2),i.lineTo(a.width-s-40,a.height/2+30),i.stroke(),i.beginPath(),i.moveTo(a.width-s,a.height/2),i.lineTo(a.width-s-40,a.height/2-30),i.stroke(),a}render(){this.gl.uniformBlockBinding(this.program,P(this,Ft),0),this.gl.uniformBlockBinding(this.program,P(this,Pt),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,P(this,xt)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}};let ge=Ae;xt=new WeakMap,Ft=new WeakMap,Pt=new WeakMap;var St,yt,Lt,H;class na extends K{constructor(n,a,i,o,s={}){super(n,i,o,Q({PI:Math.PI,IS_CUBEMAP:!0},s));I(this,St,void 0);I(this,yt,void 0);I(this,Lt,void 0);I(this,H,void 0);const{vertexCount:l,vertexStride:c,interleavedArray:h,indicesArray:f}=a;this.vertexCount=l;const u=n.getAttribLocation(this.program,"aPosition"),p=n.createBuffer(),m=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,h,n.STATIC_DRAW),n.enableVertexAttribArray(u),n.vertexAttribPointer(u,3,n.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,m),n.bufferData(n.ELEMENT_ARRAY_BUFFER,f,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_environmentMap",{type:n.INT,value:0}),C(this,St,n.getUniformBlockIndex(this.program,"Projection")),C(this,yt,n.getUniformBlockIndex(this.program,"View")),C(this,Lt,n.getUniformBlockIndex(this.program,"PostFX"))}get texture(){return P(this,H)}set texture(n){P(this,H)&&this.gl.deleteTexture(P(this,H)),C(this,H,n)}render(){this.gl.uniformBlockBinding(this.program,P(this,St),0),this.gl.uniformBlockBinding(this.program,P(this,yt),1),this.gl.uniformBlockBinding(this.program,P(this,Lt),3),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),P(this,H)&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,P(this,H))),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),P(this,H),this.gl.bindVertexArray(null)}}St=new WeakMap,yt=new WeakMap,Lt=new WeakMap,H=new WeakMap;var Nt,It,Ct,Dt;class Ne extends K{constructor(n,a,i,o,s){const l=Q({PI:Math.PI,USE_NORMAL:!0,USE_WORLD_POS:!0,USE_PBR:!0,MAX_REFLECTION_LOD:4},s);super(n,i,o,l,"sphere");I(this,Nt,void 0);I(this,It,void 0);I(this,Ct,void 0);I(this,Dt,void 0);d(this,"irradianceMapTexture");d(this,"prefilterMapTexture");d(this,"brdfLutTexture");d(this,"albedoMap");d(this,"normalMap");d(this,"metallicMap");d(this,"roughnessMap");d(this,"aoMap");const{vertexCount:c,vertexStride:h,interleavedArray:f,indicesArray:u}=a;this.vertexCount=c;const p=n.getAttribLocation(this.program,"aPosition"),m=n.getAttribLocation(this.program,"aNormal"),E=n.createBuffer(),T=n.createBuffer();if(this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,E),n.bufferData(n.ARRAY_BUFFER,f,n.STATIC_DRAW),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(m),n.vertexAttribPointer(m,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),s.USE_PBR_TEXTURES){const x=n.getAttribLocation(this.program,"aUv");n.enableVertexAttribArray(x),n.vertexAttribPointer(x,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT)}n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,T),n.bufferData(n.ELEMENT_ARRAY_BUFFER,u,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_irradianceMap",{type:n.INT,value:0}),this.setUniform("u_prefilterMap",{type:n.INT,value:1}),this.setUniform("u_brdfLUT",{type:n.INT,value:2}),s.USE_PBR_TEXTURES?(this.setUniform("u_albedoMap",{type:n.INT,value:3}),this.setUniform("u_normalMap",{type:n.INT,value:4}),this.setUniform("u_metallicMap",{type:n.INT,value:5}),this.setUniform("u_roughnessMap",{type:n.INT,value:6}),this.setUniform("u_aoMap",{type:n.INT,value:7})):this.setUniform("u_albedo",{type:n.FLOAT_VEC3,value:new Float32Array([1,1,1])}),C(this,Nt,n.getUniformBlockIndex(this.program,"Projection")),C(this,It,n.getUniformBlockIndex(this.program,"View")),C(this,Ct,n.getUniformBlockIndex(this.program,"Lighting")),C(this,Dt,n.getUniformBlockIndex(this.program,"PostFX"))}render(){!this.visible||(this.gl.uniformBlockBinding(this.program,P(this,Nt),0),this.gl.uniformBlockBinding(this.program,P(this,It),1),this.gl.uniformBlockBinding(this.program,P(this,Ct),2),this.gl.uniformBlockBinding(this.program,P(this,Dt),3),this.gl.useProgram(this.program),this.irradianceMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.irradianceMapTexture)),this.prefilterMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.prefilterMapTexture)),this.brdfLutTexture&&(this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,this.brdfLutTexture)),this.albedoMap&&(this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,this.albedoMap)),this.normalMap&&(this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,this.normalMap)),this.metallicMap&&(this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,this.metallicMap)),this.roughnessMap&&(this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,this.roughnessMap)),this.aoMap&&(this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,this.aoMap)),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.bindVertexArray(null))}}Nt=new WeakMap,It=new WeakMap,Ct=new WeakMap,Dt=new WeakMap;let he,bt;class aa extends K{constructor(n,a,i,o,s,l={}){super(n,o,s,Q({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0,USE_UV:!0},l));he||(he=te({width:a,height:i}),bt=new Ke(-a/2,a/2,i/2,-i/2,0,2),bt.position=[0,0,1],bt.lookAt=[0,0,0],bt.updateProjectionViewMatrix());const{vertexCount:c,vertexStride:h,interleavedArray:f,indicesArray:u}=he;this.vertexCount=c;const p=n.getAttribLocation(this.program,"aPosition"),m=n.getAttribLocation(this.program,"aUv"),E=n.createBuffer(),T=n.createBuffer();n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,E),n.bufferData(n.ARRAY_BUFFER,f,n.STATIC_DRAW),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(m),n.vertexAttribPointer(m,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,T),n.bufferData(n.ELEMENT_ARRAY_BUFFER,u,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4})}render(){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",bt.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}class Me extends K{constructor(n,a,i,o,s={}){super(n,i,o,Q({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0},s));d(this,"texture");d(this,"envTexture");const{vertexCount:l,vertexStride:c,interleavedArray:h,indicesArray:f}=a;this.vertexCount=l;const u=n.getAttribLocation(this.program,"aPosition"),p=n.createBuffer(),m=n.createBuffer();n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,h,n.STATIC_DRAW),n.enableVertexAttribArray(u),n.vertexAttribPointer(u,3,n.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,m),n.bufferData(n.ELEMENT_ARRAY_BUFFER,f,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4})}render(n){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",n.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.envTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envTexture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}var ra=`#version 300 es
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
}`,oa=`#version 300 es

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
}`;const Ie=te({width:.5,height:.5});var Bt,Ot;class ia extends K{constructor(n){super(n,oa,ra,Ie);I(this,Bt,void 0);I(this,Ot,void 0);const{vertexCount:a,vertexStride:i,interleavedArray:o,indicesArray:s}=Ie;this.vertexCount=a;const l=n.getAttribLocation(this.program,"aPosition"),c=n.getAttribLocation(this.program,"aUv"),h=n.createBuffer(),f=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,o,n.STATIC_DRAW),n.enableVertexAttribArray(l),n.vertexAttribPointer(l,3,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(c),n.vertexAttribPointer(c,2,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,f),n.bufferData(n.ELEMENT_ARRAY_BUFFER,s,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_color",{type:n.FLOAT_VEC4}),C(this,Bt,n.getUniformBlockIndex(this.program,"Projection")),C(this,Ot,n.getUniformBlockIndex(this.program,"View"))}set color(n){this.updateUniform("u_color",n)}render(){this.gl.uniformBlockBinding(this.program,P(this,Bt),0),this.gl.uniformBlockBinding(this.program,P(this,Ot),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}Bt=new WeakMap,Ot=new WeakMap;var sa=`#version 300 es

uniform mat4 u_projectionViewMatrix;
uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec2 aUv;

out vec2 vUv;

void main () {
  gl_Position = u_projectionViewMatrix * u_worldMatrix * aPosition;

  vUv = aUv;
}`,la=`#version 300 es
precision highp float;

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}`;class ca extends K{constructor(n,a,i,o={}){super(n,sa,la,o);d(this,"texture");const{vertexCount:s,vertexStride:l,interleavedArray:c,indicesArray:h}=te({width:a,height:i});this.vertexCount=s;const f=new Ke(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);f.position=[0,0,1],f.lookAt=[0,0,0],f.updateProjectionViewMatrix();const u=n.getAttribLocation(this.program,"aPosition"),p=n.getAttribLocation(this.program,"aUv"),m=n.createBuffer(),E=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,m),n.bufferData(n.ARRAY_BUFFER,c,n.STATIC_DRAW),n.enableVertexAttribArray(u),n.vertexAttribPointer(u,3,n.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,2,n.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,E),n.bufferData(n.ELEMENT_ARRAY_BUFFER,h,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:n.INT,value:0}),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4,value:f.projectionViewMatrix})}render(){this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.texture&&this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}function Vt(t){return t.map(n=>n/255)}function Qe(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}var ha=`#version 300 es
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
}`,da=`#version 300 es
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
}`,ua=`#version 300 es
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
  
}`,Ze=`#version 300 es
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
}`,Ce=`#version 300 es
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
}`,pa="/webgl-pbr-dojo/little_paris_eiffel_tower.png",Ea="/webgl-pbr-dojo/little_paris_eiffel_tower_1k.hdr",_a="/webgl-pbr-dojo/moonlit_golf.png",Ta="/webgl-pbr-dojo/moonlit_golf_1k.hdr",va="/webgl-pbr-dojo/qwantani_moon_noon_puresky_1k.hdr",xa="/webgl-pbr-dojo/qwantani_moon_noon_puresky_1k.png",ga="/webgl-pbr-dojo/studio_small_08.png",Ma="/webgl-pbr-dojo/studio_small_08_1k.hdr",ba="/webgl-pbr-dojo/worn-shiny-metal-albedo_astc.ktx",Ra="/webgl-pbr-dojo/worn-shiny-metal-albedo_etc1.ktx",Aa="/webgl-pbr-dojo/worn-shiny-metal-albedo_etc2.ktx",Ua="/webgl-pbr-dojo/worn-shiny-metal-albedo_pvrtc.ktx",wa="/webgl-pbr-dojo/worn-shiny-metal-albedo_s3tc.ktx",Fa="/webgl-pbr-dojo/worn-shiny-metal-ao_astc.ktx",Pa="/webgl-pbr-dojo/worn-shiny-metal-ao_etc1.ktx",Sa="/webgl-pbr-dojo/worn-shiny-metal-ao_etc2.ktx",ya="/webgl-pbr-dojo/worn-shiny-metal-ao_pvrtc.ktx",La="/webgl-pbr-dojo/worn-shiny-metal-ao_s3tc.ktx",Na="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_astc.ktx",Ia="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_etc1.ktx",Ca="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_etc2.ktx",Da="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_pvrtc.ktx",Ba="/webgl-pbr-dojo/worn-shiny-metal-Normal-ogl_s3tc.ktx",Oa="/webgl-pbr-dojo/worn-shiny-metal-ao_astc.ktx",Xa="/webgl-pbr-dojo/worn-shiny-metal-ao_etc1.ktx",Ha="/webgl-pbr-dojo/worn-shiny-metal-ao_etc2.ktx",ka="/webgl-pbr-dojo/worn-shiny-metal-ao_pvrtc.ktx",Va="/webgl-pbr-dojo/worn-shiny-metal-ao_s3tc.ktx",Ga="/webgl-pbr-dojo/worn-shiny-metal-Roughness_astc.ktx",ja="/webgl-pbr-dojo/worn-shiny-metal-Roughness_etc1.ktx",Wa="/webgl-pbr-dojo/worn-shiny-metal-Roughness_etc2.ktx",za="/webgl-pbr-dojo/worn-shiny-metal-Roughness_pvrtc.ktx",Ya="/webgl-pbr-dojo/worn-shiny-metal-Roughness_s3tc.ktx",Ka="/webgl-pbr-dojo/rustediron2_basecolor_astc.ktx",$a="/webgl-pbr-dojo/rustediron2_basecolor_etc1.ktx",qa="/webgl-pbr-dojo/rustediron2_basecolor_etc2.ktx",Qa="/webgl-pbr-dojo/rustediron2_basecolor_pvrtc.ktx",Za="/webgl-pbr-dojo/rustediron2_basecolor_s3tc.ktx",Ja="/webgl-pbr-dojo/rustediron2_ao_astc.ktx",tr="/webgl-pbr-dojo/rustediron2_ao_etc1.ktx",er="/webgl-pbr-dojo/rustediron2_ao_etc2.ktx",nr="/webgl-pbr-dojo/rustediron2_ao_pvrtc.ktx",ar="/webgl-pbr-dojo/rustediron2_ao_s3tc.ktx",rr="/webgl-pbr-dojo/rustediron2_normal_astc.ktx",or="/webgl-pbr-dojo/rustediron2_normal_etc1.ktx",ir="/webgl-pbr-dojo/rustediron2_normal_etc2.ktx",sr="/webgl-pbr-dojo/rustediron2_normal_pvrtc.ktx",lr="/webgl-pbr-dojo/rustediron2_normal_s3tc.ktx",cr="/webgl-pbr-dojo/rustediron2_metallic_astc.ktx",hr="/webgl-pbr-dojo/rustediron2_metallic_etc1.ktx",dr="/webgl-pbr-dojo/rustediron2_metallic_etc2.ktx",ur="/webgl-pbr-dojo/rustediron2_metallic_pvrtc.ktx",fr="/webgl-pbr-dojo/rustediron2_metallic_s3tc.ktx",mr="/webgl-pbr-dojo/rustediron2_roughness_astc.ktx",pr="/webgl-pbr-dojo/rustediron2_roughness_etc1.ktx",Er="/webgl-pbr-dojo/rustediron2_roughness_etc2.ktx",_r="/webgl-pbr-dojo/rustediron2_roughness_pvrtc.ktx",Tr="/webgl-pbr-dojo/rustediron2_roughness_s3tc.ktx",vr="/webgl-pbr-dojo/leafy-grass2-albedo_astc.ktx",xr="/webgl-pbr-dojo/leafy-grass2-albedo_etc1.ktx",gr="/webgl-pbr-dojo/leafy-grass2-albedo_etc2.ktx",Mr="/webgl-pbr-dojo/leafy-grass2-albedo_pvrtc.ktx",br="/webgl-pbr-dojo/leafy-grass2-albedo_s3tc.ktx",Rr="/webgl-pbr-dojo/leafy-grass2-ao_astc.ktx",Ar="/webgl-pbr-dojo/leafy-grass2-ao_etc1.ktx",Ur="/webgl-pbr-dojo/leafy-grass2-ao_etc2.ktx",wr="/webgl-pbr-dojo/leafy-grass2-ao_pvrtc.ktx",Fr="/webgl-pbr-dojo/leafy-grass2-ao_s3tc.ktx",Pr="/webgl-pbr-dojo/leafy-grass2-normal-ogl_astc.ktx",Sr="/webgl-pbr-dojo/leafy-grass2-normal-ogl_etc1.ktx",yr="/webgl-pbr-dojo/leafy-grass2-normal-ogl_etc2.ktx",Lr="/webgl-pbr-dojo/leafy-grass2-normal-ogl_pvrtc.ktx",Nr="/webgl-pbr-dojo/leafy-grass2-normal-ogl_s3tc.ktx",Ir="/webgl-pbr-dojo/leafy-grass2-metallic_astc.ktx",Cr="/webgl-pbr-dojo/leafy-grass2-metallic_etc1.ktx",Dr="/webgl-pbr-dojo/leafy-grass2-metallic_etc2.ktx",Br="/webgl-pbr-dojo/leafy-grass2-metallic_pvrtc.ktx",Or="/webgl-pbr-dojo/leafy-grass2-metallic_s3tc.ktx",Xr="/webgl-pbr-dojo/leafy-grass2-roughness_astc.ktx",Hr="/webgl-pbr-dojo/leafy-grass2-roughness_etc1.ktx",kr="/webgl-pbr-dojo/leafy-grass2-roughness_etc2.ktx",Vr="/webgl-pbr-dojo/leafy-grass2-roughness_pvrtc.ktx",Gr="/webgl-pbr-dojo/leafy-grass2-roughness_s3tc.ktx";const Ee=7,_e=7,ee=10,ne=10,$t=4,Et=512,_t=512,et=1024,Je=600;let V=null,zt=innerWidth>Je;const de=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],jr=[{s3tc:wa,astc:ba,etc1:Ra,etc2:Aa,pvrtc:Ua},{s3tc:Ba,astc:Na,etc1:Ia,etc2:Ca,pvrtc:Da},{s3tc:Va,astc:Oa,etc1:Xa,etc2:Ha,pvrtc:ka},{s3tc:Ya,astc:Ga,etc1:ja,etc2:Wa,pvrtc:za},{s3tc:La,astc:Fa,etc1:Pa,etc2:Sa,pvrtc:ya}],Wr=[{s3tc:Za,astc:Ka,etc1:$a,etc2:qa,pvrtc:Qa},{s3tc:lr,astc:rr,etc1:or,etc2:ir,pvrtc:sr},{s3tc:fr,astc:cr,etc1:hr,etc2:dr,pvrtc:ur},{s3tc:Tr,astc:mr,etc1:pr,etc2:Er,pvrtc:_r},{s3tc:ar,astc:Ja,etc1:tr,etc2:er,pvrtc:nr}],zr=[{s3tc:br,astc:vr,etc1:xr,etc2:gr,pvrtc:Mr},{s3tc:Nr,astc:Pr,etc1:Sr,etc2:yr,pvrtc:Lr},{s3tc:Or,astc:Ir,etc1:Cr,etc2:Dr,pvrtc:Br},{s3tc:Gr,astc:Xr,etc1:Hr,etc2:kr,pvrtc:Vr},{s3tc:Fr,astc:Rr,etc1:Ar,etc2:Ur,pvrtc:wr}],be=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Re=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]],tn="tokyo",en=new Map([["mon-valley",Ta],["theatre",Ea],["tokyo",va],["studio",Ma]]),Xt={playAnim:!0,useEnvDiffuseLight:!0,useEnvSpecularLight:!0,image:tn},nn=new Float32Array([2]),Te=new Float32Array([16]),an=new Float32Array([1]),rn=new Float32Array([1]);let on=document.getElementById("collapsable");const $=new yn.exports.Pane({title:"Parameters",expanded:innerWidth>Je});$.registerPlugin(Ln);io();$.element.parentNode.style.setProperty("width","400px");$.addInput(Xt,"playAnim",{label:"Play Animation"});$.addBlade({view:"list",label:"Tone Mapping Mode",options:de.map(t=>({text:t,value:t})),value:de[2]}).on("change",({value:t})=>{nn[0]=de.indexOf(t)});$.addBlade({view:"slider",label:"Point Light Luminance",min:0,max:50,value:Te[0]}).on("change",({value:t})=>{Te[0]=t});$.addInput(Xt,"useEnvDiffuseLight",{label:"Use Environment Diffuse Light"}).on("change",({value:t})=>{an[0]=t?1:0});$.addInput(Xt,"useEnvSpecularLight",{label:"Use Environment Specular Light"}).on("change",({value:t})=>{rn[0]=t});$.addInput(Xt,"image",{label:"Environment Image",view:"thumbnail-list",options:[{text:"Moonlit Golf",value:"mon-valley",src:_a},{text:"Little Paris",value:"theatre",src:pa},{text:"Qwantani Noon",value:"tokyo",src:xa},{text:"Studio Small",value:"studio",src:ga}]}).on("change",({value:{value:t}})=>{pn(en.get(t)).then(n=>{wt=n,Qt=!0})});const Y=document.createElement("canvas");Y.setAttribute("id","c");document.body.appendChild(Y);const r=Y.getContext("webgl2"),D=new Ye(45*Math.PI/180,innerWidth/innerHeight,.1,100);D.position=[10.84,-.17,8.98];D.lookAt=[0,0,0];D.updateProjectionMatrix();new Qn(D,Y,!1,Qe()?2:1.2);const O=new Ye(90*Math.PI/180,1,.1,10).updateProjectionMatrix(),Gt=Yn({radius:.5,widthSegments:32,heightSegments:32}),gt=te({width:5,height:5/8}),ae=qn({flipUVy:!0}),k=new $e,De={POINT_LIGHTS_COUNT:$t.toString()},qt=[],Yr=ee/Ee,Kr=ne/_e;for(let t=0;t<_e;t++)for(let n=0;n<Ee;n++){const a=n*Yr-ee/2+Gt.radius,i=t*Kr-ne/2+Gt.radius,o=new Ne(r,Gt,G,Ce,De);o.setPosition([a,i,-5]);const s=t/(_e-1);o.setUniform("u_metallic",{type:r.FLOAT,value:s});const l=Math.max(.04,n/(Ee-1));o.setUniform("u_roughness",{type:r.FLOAT,value:l}),k.addChild(o),qt.push(o);const c=new Ne(r,Gt,G,Ce,Q({USE_PBR_TEXTURES:!0,USE_UV:!0},De));c.setPosition([a,i,5]),k.addChild(c),qt.push(c)}const sn=new ge(r,"roughness",gt,G,Ze);sn.setPosition([-ee/2+gt.width/2,-ne/2-gt.height,-5]);k.addChild(sn);const ln=new ge(r,"metallic",gt,G,Ze);ln.setPosition([-ee/2-gt.height,-ne/2+gt.width/2,-5]).setRotation([0,0,Math.PI*.5]);k.addChild(ln);const Yt=Zt(r,k.children[0].program,"Projection",["projMatrix","zNear","zFar"]),$r=Jt(r,Yt.blockSize,0),Kt=Zt(r,k.children[0].program,"View",["viewMatrix","cameraPosition","time"]),qr=Jt(r,Kt.blockSize,1),nt=Zt(r,k.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","diffuseEnvLightMixFactor","specularEnvLightMixFactor"]),Qr=Jt(r,nt.blockSize,2),cn=Zt(r,k.children[0].program,"PostFX",["tonemappingMode"]),Zr=Jt(r,cn.blockSize,3),At=[],hn=[],dn=[],Jr=[Vt([243,156,18]),Vt([41,128,185]),Vt([192,57,43]),Vt([142,68,173])];for(let t=0;t<$t;t++){At.push(new Float32Array(3));const n=Jr[t];hn.push(new Float32Array(n));const a=new ia(r);a.color=[...n,1],k.addChild(a),dn.push(a)}const ve=new Me(r,ae,G,fa);ve.setUniform("u_equirectangularMap",{type:r.INT,value:0});const xe=new Me(r,ae,G,da);xe.setUniform("u_environmentMap",{type:r.INT,value:0});const Ut=new Me(r,ae,G,ua,{CUBEMAP_SIDE_SIZE:et});Ut.setUniform("u_environmentMap",{type:r.INT,value:0});Ut.setUniform("u_roughness",{type:r.FLOAT,value:0});const to=new aa(r,Et,_t,G,ha),un=new na(r,ae,G,ma),eo=new ca(r,Et,_t);{const n=Et*.2,a=_t*.2,i=24;eo.setPosition([-innerWidth/2+n/2+i,-innerHeight/2+a/2+i,0]).setScale([.2,.2,1]).updateWorldMatrix()}r.getExtension("EXT_color_buffer_half_float");r.getExtension("EXT_color_buffer_float");r.getExtension("OES_texture_half_float");r.getExtension("OES_texture_half_float_linear");let Qt=!1,wt;pn(en.get(tn)).then(t=>{wt=t,Qt=!0});Promise.all([Promise.all(jr.map((t,n)=>le(r,t))),Promise.all(Wr.map((t,n)=>le(r,t))),Promise.all(zr.map((t,n)=>le(r,t)))]).then(t=>{let n=0;for(const a of qt){const i=t[n];a.albedoMap=i[0],a.normalMap=i[1],a.metallicMap=i[2],a.roughnessMap=i[3],a.aoMap=i[4],n++,n===3&&(n=0)}});requestAnimationFrame(fn);mn();window.addEventListener("resize",mn);window.addEventListener("DOMContentLoaded",()=>{document.getElementById("header").style.display="block";var t=Qe()?document.getElementById("instructions-touch"):document.getElementById("instructions-desktop");t.style.display="block",zt&&(on.style.display="block")});document.getElementById("info-icon").addEventListener("click",()=>{zt=!zt,on.style.display=zt?"block":"none"});function fn(t){if(requestAnimationFrame(fn),Qt&&(V={width:wt.width,height:wt.height,imageData:wt.dataFloat,step:0,maxSteps:3},Qt=!1),V){if(V.step===75*0)Y.classList.remove("visible"),no(V);else if(V.step===75*1)ao();else if(V.step===75*2)ro();else if(V.step===75*3){oo(),V=null,Y.classList.add("visible");return}V.step++;return}if(r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),D.updateViewMatrix(),r.bindBuffer(r.UNIFORM_BUFFER,$r),r.bufferSubData(r.UNIFORM_BUFFER,Yt.uniforms.projMatrix.offset,D.projectionMatrix,0),r.bufferSubData(r.UNIFORM_BUFFER,Yt.uniforms.zNear.offset,new Float32Array([D.near]),0),r.bufferSubData(r.UNIFORM_BUFFER,Yt.uniforms.zFar.offset,new Float32Array([D.far]),0),r.bindBuffer(r.UNIFORM_BUFFER,qr),r.bufferSubData(r.UNIFORM_BUFFER,Kt.uniforms.viewMatrix.offset,D.viewMatrix,0),r.bufferSubData(r.UNIFORM_BUFFER,Kt.uniforms.cameraPosition.offset,new Float32Array(D.position),0),r.bufferSubData(r.UNIFORM_BUFFER,Kt.uniforms.time.offset,new Float32Array([t]),0),r.bindBuffer(r.UNIFORM_BUFFER,Qr),Xt.playAnim){const n=t*.001;for(let a=0;a<$t;a++){const i=Math.PI*2/$t,o=[Math.cos(a*i+n)*(Math.sin(n)*2+4),Math.sin(a*i+n)*(Math.sin(n)*2+4),Math.cos(n)*3];At[a][0]=o[0],At[a][1]=o[1],At[a][2]=o[2],dn[a].setPosition(o).updateWorldMatrix(),r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.pointLightPositions.offset+a*nt.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,At[a],0),r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.pointLightColors.offset+a*4*Float32Array.BYTES_PER_ELEMENT,hn[a],0)}}r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.pointLightIntensity.offset,Te,0),r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.diffuseEnvLightMixFactor.offset,an,0),r.bufferSubData(r.UNIFORM_BUFFER,nt.uniforms.specularEnvLightMixFactor.offset,rn,0),r.bindBuffer(r.UNIFORM_BUFFER,Zr),r.bufferSubData(r.UNIFORM_BUFFER,cn.uniforms.tonemappingMode.offset,nn),r.enable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight),r.clearColor(.1,.1,.1,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.depthFunc(r.LEQUAL),un.render(),r.depthFunc(r.LESS),k.updateWorldMatrix().render()}var Rt,z,ft,mt,st;let Tt=null,vt=null;function no(t){const{width:n,height:a,imageData:i}=t;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),Rt&&r.deleteTexture(Rt),Rt=r.createTexture(),r.bindTexture(r.TEXTURE_2D,Rt),r.texImage2D(r.TEXTURE_2D,0,r.RGB9_E5,n,a,0,r.RGB,r.FLOAT,i),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.bindTexture(r.TEXTURE_2D,null),ve.texture=Rt,Tt||(Tt=r.createFramebuffer(),vt=r.createRenderbuffer()),r.bindFramebuffer(r.FRAMEBUFFER,Tt),r.bindRenderbuffer(r.RENDERBUFFER,vt),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,et,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,vt),z&&r.deleteTexture(z),z=r.createTexture(),r.bindTexture(r.TEXTURE_CUBE_MAP,z);for(let o=0;o<6;o++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,r.RGBA16F,et,et,0,r.RGBA,r.HALF_FLOAT,null);r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.viewport(0,0,et,et);for(let o=0;o<6;o++)r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+o,z,0),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),O.lookAt=be[o],O.upVector=Re[o],O.updateViewMatrix().updateProjectionViewMatrix(),ve.render(O);r.generateMipmap(r.TEXTURE_CUBE_MAP),r.bindFramebuffer(r.FRAMEBUFFER,null)}function ao(){xe.envTexture=z;const t=32;ft&&r.deleteTexture(ft),ft=r.createTexture(),r.bindTexture(r.TEXTURE_CUBE_MAP,ft);for(let n=0;n<6;n++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,r.RGBA16F,t,t,0,r.RGBA,r.HALF_FLOAT,null);r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.bindFramebuffer(r.FRAMEBUFFER,Tt),r.bindRenderbuffer(r.RENDERBUFFER,vt),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,t,t),r.viewport(0,0,t,t);for(let n=0;n<6;n++)r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+n,ft,0),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),O.lookAt=be[n],O.upVector=Re[n],O.updateViewMatrix().updateProjectionViewMatrix(),xe.render(O);r.bindFramebuffer(r.FRAMEBUFFER,null)}function ro(){mt&&r.deleteTexture(mt);const t=128;mt=r.createTexture(),r.bindTexture(r.TEXTURE_CUBE_MAP,mt);for(let a=0;a<6;a++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,r.RGBA16F,t,t,0,r.RGBA,r.HALF_FLOAT,null);r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.generateMipmap(r.TEXTURE_CUBE_MAP),Ut.envTexture=z,r.bindFramebuffer(r.FRAMEBUFFER,Tt);const n=5;for(let a=0;a<n;a++){const i=t*Math.pow(.5,a),o=t*Math.pow(.5,a);r.bindRenderbuffer(r.RENDERBUFFER,vt),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,i,o),r.viewport(0,0,i,o);const s=a/(n-1);Ut.updateUniform("u_roughness",s);for(let l=0;l<6;l++)O.lookAt=be[l],O.upVector=Re[l],O.updateViewMatrix().updateProjectionViewMatrix(),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+l,mt,a),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),Ut.render(O)}r.bindFramebuffer(r.FRAMEBUFFER,null)}function oo(){st&&r.deleteTexture(st),st=r.createTexture(),r.bindTexture(r.TEXTURE_2D,st),r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,Et,_t,0,r.RGBA,r.HALF_FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.bindFramebuffer(r.FRAMEBUFFER,Tt),r.bindRenderbuffer(r.RENDERBUFFER,vt),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,Et,_t),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0),r.viewport(0,0,Et,_t),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),to.render(),r.bindFramebuffer(r.FRAMEBUFFER,null),un.texture=z;for(const t of qt)t.irradianceMapTexture=ft,t.prefilterMapTexture=mt,t.brdfLutTexture=st}function mn(){D.aspect=innerWidth/innerHeight,D.updateProjectionMatrix(),Y.width=innerWidth*devicePixelRatio,Y.height=innerHeight*devicePixelRatio}function io(){const t=`
    .tp-thumbv_ovl .tp-thumbv_opt:first-of-type {
      display: none !important;
    }
    .tp-thumbv_thmb, .tp-thumbv_sthmb {
      background-size: cover !important;
    }
  `,n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=t:n.styleSheet.cssText=t,document.getElementsByTagName("head")[0].appendChild(n)}function pn(t){return new Promise(n=>{const a=new rt;a.src=t,a.onload=()=>{n(a)}})}
