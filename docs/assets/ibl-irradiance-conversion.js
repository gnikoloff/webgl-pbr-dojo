var Qt=Object.defineProperty;var Ut=Object.getOwnPropertySymbols;var Jt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable;var dt=(a,t,o)=>t in a?Qt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,X=(a,t)=>{for(var o in t||(t={}))Jt.call(t,o)&&dt(a,o,t[o]);if(Ut)for(var o of Ut(t))Zt.call(t,o)&&dt(a,o,t[o]);return a};var G=(a,t,o)=>(dt(a,typeof t!="symbol"?t+"":t,o),o),bt=(a,t,o)=>{if(!t.has(a))throw TypeError("Cannot "+o)};var T=(a,t,o)=>(bt(a,t,"read from private field"),o?o.call(a):t.get(a)),g=(a,t,o)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,o)},A=(a,t,o,r)=>(bt(a,t,"write to private field"),r?r.call(a,o):t.set(a,o),o);import{t as tn,T as nn}from"./assets/vendor.adb55ed6.js";import{D as it,O as en,P as St,C as on,c as an,a as rn,e as sn,S as ln,b as st,d as lt}from"./assets/index.18c89447.js";function U(){var a=document.createElement("canvas"),t="t",o=1,r=2.2,l=null,i,f;return a.__defineGetter__("exposure",function(){return o}),a.__defineSetter__("exposure",function(c){o=c,l&&(N(l,o,r,f.data),i.putImageData(f,0,0))}),a.__defineGetter__("gamma",function(){return r}),a.__defineSetter__("gamma",function(c){r=c,l&&(N(l,o,r,f.data),i.putImageData(f,0,0))}),a.__defineGetter__("dataFloat",function(){return xt(l)}),a.__defineGetter__("dataRGBE",function(){return l}),a.toHDRBlob=function(c,s,E){function u(R,ht,ut){var F=R.createShader(ut);return R.shaderSource(F,ht),R.compileShader(F),F}function m(R,ht,ut){var F=R.createProgram(),Mt,Ft;return R.attachShader(F,Mt=u(R,ht,R.VERTEX_SHADER)),R.attachShader(F,Ft=u(R,ut,R.FRAGMENT_SHADER)),R.linkProgram(F),R.deleteShader(Mt),R.deleteShader(Ft),F}var d=s&&s.match(/rgb9_e5/i)?new Uint8Array(Bt(xt(l)).buffer):new Uint8Array(l.buffer),x=`precision highp float;
attribute vec3 position;
varying vec2 tex;
void main() { tex = position.xy/2.0+0.5; gl_Position = vec4(position, 1.0); }`,p=`precision highp float;
precision highp sampler2D;
uniform sampler2D tx;
varying vec2 tex;
void main() { gl_FragColor = texture2D(tx,tex); }`,v=this.width,S=this.height;if(v*S*4<d.byteLength)return console.error("not big enough.");var _=document.createElement("canvas");_.width=v,_.height=S;var h=_.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0}),Z=h.createTexture();h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,Z),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!0),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MAG_FILTER,h.NEAREST),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MIN_FILTER,h.NEAREST),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_S,h.CLAMP_TO_EDGE),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_T,h.CLAMP_TO_EDGE),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,v,S,0,h.RGBA,h.UNSIGNED_BYTE,new Uint8Array(d.buffer));var P=m(h,x,p),L=h.getUniformLocation(P,"tx"),qt=new Float32Array([-1,-1,0,1,-1,0,1,1,0,1,1,0,-1,1,0,-1,-1,0]),$t=h.createBuffer();if(h.enableVertexAttribArray(0),h.bindBuffer(h.ARRAY_BUFFER,$t),h.bufferData(h.ARRAY_BUFFER,qt,h.STATIC_DRAW),h.vertexAttribPointer(0,3,h.FLOAT,!1,0,0),h.useProgram(P),h.uniform1i(L,0),h.drawArrays(h.TRIANGLES,0,6),h.deleteTexture(Z),h.deleteProgram(P),c)return _.toBlob(c)},a.__defineGetter__("src",function(){return t}),a.__defineSetter__("src",function(c){if(t=c,i&&i.clearRect(0,0,this.width,this.height),c.match(/\.hdr$/i))fn(c,function(E,u,m){l=E,this.width=this.style.width=u,this.height=this.style.height=m,i=this.getContext("2d"),f=i.getImageData(0,0,u,m),N(E,o,r,f.data),i.putImageData(f,0,0),this.onload&&this.onload()}.bind(a));else if(c.match(/\.rgb9_e5\.png$/i)){var s=new Image;s.src=c,s.onload=function(){var E=document.createElement("canvas"),u=this.width=this.style.width=E.width=s.width,m=this.height=this.style.height=E.height=s.height,d=E.getContext("webgl"),x=d.createTexture();d.bindTexture(d.TEXTURE_2D,x),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,s),fb=d.createFramebuffer(),d.bindFramebuffer(d.FRAMEBUFFER,fb),d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.TEXTURE_2D,x,0);var p=new Uint8Array(u*m*4);d.readPixels(0,0,u,m,d.RGBA,d.UNSIGNED_BYTE,p),d.deleteTexture(x),d.deleteFramebuffer(fb),this.dataRAW=new Uint32Array(p.buffer),l=Lt(It(this.dataRAW)),i=this.getContext("2d"),f=i.getImageData(0,0,u,m),N(l,o,r,f.data),i.putImageData(f,0,0),this.onload&&this.onload()}.bind(a)}else if(c.match(/\.hdr\.png$|\.rgbe\.png/i)){var s=new Image;s.src=c,s.onload=function(){var u=document.createElement("canvas"),m=this.width=this.style.width=u.width=s.width,d=this.height=this.style.height=u.height=s.height,x=u.getContext("webgl"),p=x.createTexture();x.bindTexture(x.TEXTURE_2D,p),x.texImage2D(x.TEXTURE_2D,0,x.RGBA,x.RGBA,x.UNSIGNED_BYTE,s),fb=x.createFramebuffer(),x.bindFramebuffer(x.FRAMEBUFFER,fb),x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,p,0);var v=new Uint8Array(m*d*4);x.readPixels(0,0,m,d,x.RGBA,x.UNSIGNED_BYTE,v),x.deleteTexture(p),x.deleteFramebuffer(fb),l=v,i=this.getContext("2d"),f=i.getImageData(0,0,m,d),N(l,o,r,f.data),i.putImageData(f,0,0),this.onload&&this.onload()}.bind(a)}}),a}function cn(a,t){for(var o in t)a[o]=t[o];return a}function fn(a,t){var o=cn(new XMLHttpRequest,{responseType:"arraybuffer"});return o.onerror=t.bind(o,!1),o.onload=function(){if(this.status>=400)return this.onerror();for(var r="",l=0,i=new Uint8Array(this.response),f;!r.match(/\n\n[^\n]+\n/g);)r+=String.fromCharCode(i[l++]);if(f=r.match(/FORMAT=(.*)$/m)[1],f!="32-bit_rle_rgbe")return console.warn("unknown format : "+f),this.onerror();for(var c=r.split(/\n/).reverse()[1].split(" "),s=c[3]*1,E=c[1]*1,u=new Uint8Array(s*E*4),m=0,d=0;d<E;d++){var x=i.slice(l,l+=4),p=[];if(x[0]!=2||x[1]!=2||x[2]&128){var v=s,S=0;for(l-=4;v>0;)if(u.set(i.slice(l,l+=4),m),u[m]==1&&u[m+1]==1&&u[m+2]==1){for(u[m+3]<<S;_>0;_--)u.set(u.slice(m-4,m),m),m+=4,v--;S+=8}else v--,m+=4,S=0}else{if((x[2]<<8)+x[3]!=s)return console.warn("HDR line mismatch .."),this.onerror();for(var _=0;_<4;_++)for(var h=_*s,Z=(_+1)*s,P,L;h<Z;)if(P=i.slice(l,l+=2),P[0]>128)for(L=P[0]-128;L-- >0;)p[h++]=P[1];else for(L=P[0]-1,p[h++]=P[1];L-- >0;)p[h++]=i[l++];for(var _=0;_<s;_++)u[m++]=p[_],u[m++]=p[_+s],u[m++]=p[_+2*s],u[m++]=p[_+3*s]}}t&&t(u,s,E)},o.open("GET",a,!0),o.send(null),o}function Bt(a,E){for(var o,r,l,i,f,c,s=a.byteLength/12|0,E=E||new Uint32Array(s),u=0;u<s;u++)o=Math.min(32768,a[u*3]),r=Math.min(32768,a[u*3+1]),l=Math.min(32768,a[u*3+2]),i=Math.max(Math.max(o,r),l),f=Math.max(-16,Math.floor(Math.log2(i)))+16,c=Math.pow(2,f-24),Math.floor(i/c+.5)==511&&(c*=2,f+=1),E[u]=(Math.floor(o/c+.5)<<23)+(Math.floor(r/c+.5)<<14)+(Math.floor(l/c+.5)<<5)+(f|0);return E}function It(a,i){for(var o,r,l=a.byteLength>>2,i=i||new Float32Array(l*3),f=0;f<l;f++)o=a[f],r=Math.pow(2,(o&31)-24),i[f*3]=(o>>>23)*r,i[f*3+1]=(o>>>14&511)*r,i[f*3+2]=(o>>>5&511)*r;return i}function Lt(a,s){for(var o,r,l,i,f,c=a.byteLength/12|0,s=s||new Uint8Array(c*4),E=0;E<c;E++)o=a[E*3],r=a[E*3+1],l=a[E*3+2],i=Math.max(Math.max(o,r),l),e=Math.ceil(Math.log2(i)),f=Math.pow(2,e-8),s[E*4]=o/f|0,s[E*4+1]=r/f|0,s[E*4+2]=l/f|0,s[E*4+3]=e+128;return s}function xt(a,l){for(var o,r=a.byteLength>>2,l=l||new Float32Array(r*3),i=0;i<r;i++)o=Math.pow(2,a[i*4+3]-(128+8)),l[i*3]=a[i*4]*o,l[i*3+1]=a[i*4+1]*o,l[i*3+2]=a[i*4+2]*o;return l}function N(a,t,o,c){t=Math.pow(2,t===void 0?1:t)/2,o===void 0&&(o=2.2);for(var l=1/o,i,f=a.byteLength>>2,c=c||new Uint8ClampedArray(f*4),s=0;s<f;s++)i=t*Math.pow(2,a[s*4+3]-(128+8)),c[s*4]=255*Math.pow(a[s*4]*i,l),c[s*4+1]=255*Math.pow(a[s*4+1]*i,l),c[s*4+2]=255*Math.pow(a[s*4+2]*i,l),c[s*4+3]=255;return c}function hn(a,t,o,f){t=Math.pow(2,t===void 0?1:t)/2,o===void 0&&(o=2.2);for(var l=1/o,i=a.byteLength/12|0,f=f||new Uint8ClampedArray(i*4),c=0;c<i;c++)f[c*4]=255*Math.pow(a[c*3]*t,l),f[c*4+1]=255*Math.pow(a[c*3+1]*t,l),f[c*4+2]=255*Math.pow(a[c*3+2]*t,l),f[c*4+3]=255;return f}U.floatToRgbe=Lt;U.rgbeToFloat=xt;U.floatToRgb9_e5=Bt;U.rgb9_e5ToFloat=It;U.rgbeToLDR=N;U.floatToLDR=hn;var V,W,Y,j;class un extends it{constructor(t,o,r,l,i){super(t,r,l,X({PI:Math.PI,USE_NORMAL:!0,USE_WORLD_POS:!0,USE_PBR:!0},i),"sphere");g(this,V,void 0);g(this,W,void 0);g(this,Y,void 0);g(this,j,void 0);G(this,"irradianceMapTexture");G(this,"envMapTexture");const{vertexCount:f,vertexStride:c,interleavedArray:s,indicesArray:E}=o;this.vertexCount=f;const u=t.getAttribLocation(this.program,"aPosition"),m=t.getAttribLocation(this.program,"aNormal"),d=t.createBuffer(),x=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,s,t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,3,t.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(m),t.vertexAttribPointer(m,3,t.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,x),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_albedo",{type:t.FLOAT_VEC3,value:new Float32Array([1,0,0])}),this.setUniform("u_irradianceMap",{type:t.INT,value:0}),A(this,V,t.getUniformBlockIndex(this.program,"Projection")),A(this,W,t.getUniformBlockIndex(this.program,"View")),A(this,Y,t.getUniformBlockIndex(this.program,"Lighting")),A(this,j,t.getUniformBlockIndex(this.program,"PostFX"))}render(){!this.visible||(this.gl.uniformBlockBinding(this.program,T(this,V),0),this.gl.uniformBlockBinding(this.program,T(this,W),1),this.gl.uniformBlockBinding(this.program,T(this,Y),2),this.gl.uniformBlockBinding(this.program,T(this,j),3),this.gl.useProgram(this.program),this.irradianceMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.irradianceMapTexture)),this.envMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envMapTexture)),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.bindVertexArray(null))}}V=new WeakMap,W=new WeakMap,Y=new WeakMap,j=new WeakMap;var D,z,K;const Pt=class extends it{constructor(t,o,r,l,i,f){super(t,l,i,X({PI:Math.PI,USE_UV:!0},f));g(this,D,void 0);g(this,z,void 0);g(this,K,void 0);const{vertexCount:c,vertexStride:s,interleavedArray:E,indicesArray:u}=r;this.vertexCount=c;const m=t.getAttribLocation(this.program,"aPosition"),d=t.getAttribLocation(this.program,"aUv"),x=t.createBuffer(),p=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,x),t.bufferData(t.ARRAY_BUFFER,E,t.STATIC_DRAW),t.enableVertexAttribArray(m),t.vertexAttribPointer(m,3,t.FLOAT,!1,s*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,s*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,p),t.bufferData(t.ELEMENT_ARRAY_BUFFER,u,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:t.INT,value:0});const v=Pt.createTextCanvas(o);A(this,D,t.createTexture()),t.bindTexture(t.TEXTURE_2D,T(this,D)),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,v.width,v.height,0,t.RGBA,t.UNSIGNED_BYTE,v),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),A(this,z,t.getUniformBlockIndex(this.program,"Projection")),A(this,K,t.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(t){const o=document.createElement("canvas"),r=o.getContext("2d");o.width=1024,o.height=128;const l=20,i=10,f=100;r.font=`${f}px Helvetica`,r.fillStyle="#fff",r.textBaseline="middle",r.fillText(t,l,o.height/2);const{width:c}=r.measureText(t),s=l+c+40;return r.strokeStyle="#fff",r.lineWidth=5,r.beginPath(),r.moveTo(s,o.height/2),r.lineTo(o.width-i,o.height/2),r.stroke(),r.beginPath(),r.moveTo(o.width-i,o.height/2),r.lineTo(o.width-i-40,o.height/2+30),r.stroke(),r.beginPath(),r.moveTo(o.width-i,o.height/2),r.lineTo(o.width-i-40,o.height/2-30),r.stroke(),o}render(){this.gl.uniformBlockBinding(this.program,T(this,z),0),this.gl.uniformBlockBinding(this.program,T(this,K),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,T(this,D)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}};let vt=Pt;D=new WeakMap,z=new WeakMap,K=new WeakMap;class dn extends it{constructor(t,o,r,l,i={}){super(t,r,l,X({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0},i));G(this,"texture");G(this,"envTexture");const{vertexCount:f,vertexStride:c,interleavedArray:s,indicesArray:E}=o;this.vertexCount=f;const u=t.getAttribLocation(this.program,"aPosition"),m=t.createBuffer(),d=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,m),t.bufferData(t.ARRAY_BUFFER,s,t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,3,t.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,d),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:t.FLOAT_MAT4})}render(t){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",t.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.envTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envTexture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}var q,$,Q,M;class mn extends it{constructor(t,o,r,l,i={}){super(t,r,l,X({PI:Math.PI,IS_CUBEMAP:!0},i));g(this,q,void 0);g(this,$,void 0);g(this,Q,void 0);g(this,M,void 0);const{vertexCount:f,vertexStride:c,interleavedArray:s,indicesArray:E}=o;this.vertexCount=f;const u=t.getAttribLocation(this.program,"aPosition"),m=t.createBuffer(),d=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,m),t.bufferData(t.ARRAY_BUFFER,s,t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,3,t.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,d),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_environmentMap",{type:t.INT,value:0}),A(this,q,t.getUniformBlockIndex(this.program,"Projection")),A(this,$,t.getUniformBlockIndex(this.program,"View")),A(this,Q,t.getUniformBlockIndex(this.program,"PostFX"))}get texture(){return T(this,M)}set texture(t){T(this,M)&&this.gl.deleteTexture(T(this,M)),A(this,M,t)}render(){this.gl.uniformBlockBinding(this.program,T(this,q),0),this.gl.uniformBlockBinding(this.program,T(this,$),1),this.gl.uniformBlockBinding(this.program,T(this,Q),3),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),T(this,M)&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,T(this,M))),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),T(this,M)&&this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}q=new WeakMap,$=new WeakMap,Q=new WeakMap,M=new WeakMap;var Nt="/MonValley_A_LookoutPoint_Env.hdr",Rt="/MonValley_A_LookoutPoint_8k.jpg",En="/Theatre-Center_Env.hdr",Ct="/Theatre-Center_8k_TMap.jpg",xn="/Tokyo_BigSight_Env.hdr",Dt="/Tokyo_BigSight_8k.jpg",J=`#version 300 es

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

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseLightMixFactor;
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
}`,pn=`#version 300 es
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

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseLightMixFactor;
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
}`,_n=`#version 300 es
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

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseLightMixFactor;
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
}`,Tn=`#version 300 es
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

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseLightMixFactor;
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

uniform vec3 u_albedo;
uniform float u_metallic;
uniform float u_roughness;
uniform samplerCube u_irradianceMap;

in vec3 vNormal;
in vec3 vWorldPos;

out vec4 finalColor;

void main () {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);

  float NdotV = max(dot(N, V), 0.0000001); 

  
  
  vec3 F0 = mix(vec3(0.04), u_albedo, u_metallic);

  
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
      
    
    float D = DistributionGGX(N, H, u_roughness);
    
    float G = GeometrySmith(N, V, L, u_roughness);
    
    
    vec3 F = fresnelSchlick(HdotV, F0);
    
    
    vec3 kS = F;
    vec3 kD = vec3(1.0) - kS;
    kD *= 1.0 - u_metallic;
    
    vec3 specular = D * G * F;
    specular /= 4.0 * NdotV * NdotL;
        
    
    Lo += (kD * u_albedo / PI + specular) * radiance * NdotL; 
  }

  
  vec3 ambient = vec3(0.0);

  
  vec3 kS = fresnelSchlick(max(dot(N, V), 0.0), F0);
  vec3 kD = 1.0 - kS;
  kD *= 1.0 - u_metallic;
  vec3 irradiance = texture(u_irradianceMap, N).rgb;
  vec3 diffuse = irradiance * u_albedo;
  
  
  ambient = mix(vec3(0.03) * u_albedo, kD * diffuse, diffuseLightMixFactor);

  
  
  
  
  vec3 color = ambient + Lo;
    
  
  color = applyTonemapping(color, tonemappingMode);
  
  
  color = pow(color, vec3(1.0 / 2.2));

  finalColor = vec4(color, 1.0);
}`,yt=`#version 300 es
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

uniform PostFX {
  float tonemappingMode;
};

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float diffuseLightMixFactor;
  };
#endif

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}`;const nt=7,pt=7,ct=10,ft=10,at=4,mt=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],vn=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Rn=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]],gn=new Map([["mon-valley",Nt],["theatre",En],["tokyo",xn]]),An=new Map([["mon-valley",Rt],["theatre",Ct],["tokyo",Dt]]),Ot={useDiffuseLight:!0,image:"mon-valley"},Xt=new Float32Array([2]),Gt=new Float32Array([40]),Ht=new Float32Array([1]),O=new tn.exports.Pane;O.registerPlugin(nn);Bn();O.element.parentNode.style.setProperty("width","400px");O.addBlade({view:"list",label:"tone mapping mode",options:mt.map(a=>({text:a,value:a})),value:mt[2]}).on("change",({value:a})=>{Xt[0]=mt.indexOf(a)});O.addBlade({view:"slider",label:"point light luminance",min:0,max:50,value:20}).on("change",({value:a})=>{Gt[0]=a});O.addInput(Ot,"useDiffuseLight",{label:"use environment diffuse light"}).on("change",({value:a})=>{Ht[0]=a?1:0});O.addInput(Ot,"image",{label:"environment image",view:"thumbnail-list",options:[{text:"MonValley Lookout",value:"mon-valley",src:B(Rt)},{text:"Theatre Center",value:"theatre",src:B(Ct)},{text:"Tokyo BigSight",value:"tokyo",src:B(Dt)}]}).on("change",({value:{value:a}})=>{const t=new U;t.onload=()=>{rt(t,256,r=>{for(const l of At)l.irradianceMapTexture=r})},t.src=B(gn.get(a));const o=new Image;o.onload=()=>{rt(o,1024,r=>{wt.texture=r})},o.src=B(An.get(a))});const I=document.createElement("canvas");document.body.appendChild(I);const n=I.getContext("webgl2"),gt=new en(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);gt.position=[0,0,1];gt.lookAt=[0,0,0];gt.updateProjectionViewMatrix();const w=new St(45*Math.PI/180,innerWidth/innerHeight,.1,100);w.position=[5.43,.2,14.06];w.lookAt=[0,0,0];w.updateProjectionMatrix();new on(w,I,!1);const tt=new St(90*Math.PI/180,1,.1,10).updateProjectionMatrix(),Et=an({radius:.5,widthSegments:32,heightSegments:32}),y=rn({width:5,height:5/8}),kt=sn({flipUVy:!0}),b=new ln,wn={POINT_LIGHTS_COUNT:at.toString()},At=[],Pn=ct/nt,Mn=ft/pt;for(let a=0;a<pt;a++)for(let t=0;t<nt;t++){const o=new un(n,Et,J,Tn,wn);o.setPosition([t*Pn-ct/2+Et.radius,a*Mn-ft/2+Et.radius,0]);const r=a/pt;o.setUniform("u_metallic",{type:n.FLOAT,value:r});const l=1/nt+t/nt;o.setUniform("u_roughness",{type:n.FLOAT,value:l}),b.addChild(o),At.push(o)}const Vt=new vt(n,"roughness",y,J,yt);Vt.setPosition([-ct/2+y.width/2,-ft/2-y.height,0]);b.addChild(Vt);const Wt=new vt(n,"metallic",y,J,yt);Wt.setPosition([-ct/2-y.height,-ft/2+y.width/2,0]).setRotation([0,0,Math.PI*.5]);b.addChild(Wt);const et=st(n,b.children[0].program,"Projection",["projMatrix","zNear","zFar"]),Fn=lt(n,et.blockSize,0),ot=st(n,b.children[0].program,"View",["viewMatrix","cameraPosition","time"]),Un=lt(n,ot.blockSize,1),C=st(n,b.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","diffuseLightMixFactor"]),bn=lt(n,C.blockSize,2),Yt=st(n,b.children[0].program,"PostFX",["tonemappingMode"]),Sn=lt(n,Yt.blockSize,3),H=[],jt=[];for(let a=0;a<at;a++)H.push(new Float32Array(3)),jt.push(new Float32Array([Math.random(),Math.random(),Math.random()]));const _t=new dn(n,kt,J,_n);_t.setUniform("u_equirectangularMap",{type:n.INT,value:0});const wt=new mn(n,kt,J,pn);n.getExtension("EXT_color_buffer_float");const Tt=new U;Tt.src=B(Nt);Tt.onload=()=>{rt(Tt,256,a=>{for(const t of At)t.irradianceMapTexture=a})};const k=new Image;k.src=B(Rt);k.onload=()=>{rt(k,1024,a=>{wt.texture=a})};requestAnimationFrame(zt);Kt();window.addEventListener("resize",Kt);function zt(a){requestAnimationFrame(zt),w.updateViewMatrix(),n.bindBuffer(n.UNIFORM_BUFFER,Fn),n.bufferSubData(n.UNIFORM_BUFFER,et.uniforms.projMatrix.offset,w.projectionMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,et.uniforms.zNear.offset,new Float32Array([w.near]),0),n.bufferSubData(n.UNIFORM_BUFFER,et.uniforms.zFar.offset,new Float32Array([w.far]),0),n.bindBuffer(n.UNIFORM_BUFFER,Un),n.bufferSubData(n.UNIFORM_BUFFER,ot.uniforms.viewMatrix.offset,w.viewMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,ot.uniforms.cameraPosition.offset,new Float32Array(w.position),0),n.bufferSubData(n.UNIFORM_BUFFER,ot.uniforms.time.offset,new Float32Array([a]),0),n.bindBuffer(n.UNIFORM_BUFFER,bn);const t=a*.001;for(let o=0;o<at;o++){const r=Math.PI*2/at;H[o][0]=Math.cos(o*r+t)*10,H[o][1]=Math.sin(o*r+t)*10,H[o][2]=Math.cos(t)+2+4,n.bufferSubData(n.UNIFORM_BUFFER,C.uniforms.pointLightPositions.offset+o*C.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,H[o],0),n.bufferSubData(n.UNIFORM_BUFFER,C.uniforms.pointLightColors.offset+o*4*Float32Array.BYTES_PER_ELEMENT,jt[o],0)}n.bufferSubData(n.UNIFORM_BUFFER,C.uniforms.pointLightIntensity.offset,Gt,0),n.bufferSubData(n.UNIFORM_BUFFER,C.uniforms.diffuseLightMixFactor.offset,Ht,0),n.bindBuffer(n.UNIFORM_BUFFER,Sn),n.bufferSubData(n.UNIFORM_BUFFER,Yt.uniforms.tonemappingMode.offset,Xt),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.clearColor(.1,.1,.1,1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),n.depthFunc(n.LEQUAL),wt.render(),n.depthFunc(n.LESS),b.updateWorldMatrix().render()}function rt(a,t,o){const r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),!!a.dataFloat?n.texImage2D(n.TEXTURE_2D,0,n.RGB9_E5,a.width,a.height,0,n.RGB,n.FLOAT,a.dataFloat):n.texImage2D(n.TEXTURE_2D,0,n.SRGB8,k.naturalWidth,k.naturalHeight,0,n.RGB,n.UNSIGNED_BYTE,a),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.bindTexture(n.TEXTURE_2D,null),_t.texture=r;const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i);const f=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,f),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,t,t),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,f);const c=n.createTexture();n.bindTexture(n.TEXTURE_CUBE_MAP,c);for(let s=0;s<6;s++){const E=n.TEXTURE_CUBE_MAP_POSITIVE_X+s;n.texImage2D(E,0,n.RGBA16F,t,t,0,n.RGBA,n.FLOAT,null),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR)}n.bindFramebuffer(n.FRAMEBUFFER,i),n.viewport(0,0,t,t);for(let s=0;s<6;s++)n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+s,c,0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),tt.lookAt=vn[s],tt.upVector=Rn[s],tt.updateViewMatrix().updateProjectionViewMatrix(),_t.render(tt);n.bindFramebuffer(n.FRAMEBUFFER,null),o(c),n.deleteTexture(r),n.deleteFramebuffer(i),n.deleteRenderbuffer(f)}function Kt(){w.aspect=innerWidth/innerHeight,w.updateProjectionMatrix(),I.width=innerWidth*devicePixelRatio,I.height=innerHeight*devicePixelRatio,I.style.setProperty("width",`${innerWidth}px`),I.style.setProperty("height",`${innerHeight}px`)}function Bn(){const a=`
    .tp-thumbv_ovl .tp-thumbv_opt:first-of-type {
      display: none !important;
    }
    .tp-thumbv_thmb, .tp-thumbv_sthmb {
      background-size: cover !important;
    }
  `,t=document.createElement("style");t.setAttribute("type","text/css"),"textContent"in t?t.textContent=a:t.styleSheet.cssText=a,document.getElementsByTagName("head")[0].appendChild(t)}function B(a){return window.BASE_URL?`${window.BASE_URL}/assets/${a}`:a}
