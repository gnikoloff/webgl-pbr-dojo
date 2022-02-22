var Wn=Object.defineProperty;var Mn=Object.getOwnPropertySymbols;var zn=Object.prototype.hasOwnProperty,Yn=Object.prototype.propertyIsEnumerable;var rn=(o,n,e)=>n in o?Wn(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e,A=(o,n)=>{for(var e in n||(n={}))zn.call(n,e)&&rn(o,e,n[e]);if(Mn)for(var e of Mn(n))Yn.call(n,e)&&rn(o,e,n[e]);return o};var E=(o,n,e)=>(rn(o,typeof n!="symbol"?n+"":n,e),e),Rn=(o,n,e)=>{if(!n.has(o))throw TypeError("Cannot "+e)};var u=(o,n,e)=>(Rn(o,n,"read from private field"),e?e.call(o):n.get(o)),T=(o,n,e)=>{if(n.has(o))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(o):n.set(o,e)},v=(o,n,e,r)=>(Rn(o,n,"write to private field"),r?r.call(o,e):n.set(o,e),e);import{w as jn,t as Kn,T as qn}from"./assets/vendor.42929781.js";import{s as Qn,a as $n,H as Pn,h as Jn,b as Zn,c as bn,d as nt}from"./assets/Tokyo_BigSight_thumb.4a2a6e4e.js";import{D as w,a as dn,O as hn,P as Un,C as tt,c as et,e as at,S as ot,b as nn,d as tn,L as rt}from"./assets/light-debug.7af984de.js";import{al as sn,a as it,b as st,c as lt,d as ct,e as ft,n as ut,f as mt,g as dt,h as ht,i as pt,m as Et,j as Tt,k as vt,l as xt,o as _t,r as Mt,p as Rt,q as gt,s as At,t as Ft,u as Pt,v as bt,w as Ut,x as St,y as Nt,z as Ct,A as Lt,B as It,C as wt,D as Bt,E as Ot,F as Dt,G as yt,H as Vt,I as Xt,J as Ht,K as Gt,L as kt,M as Wt,N as zt,O as Yt,P as jt,Q as Kt,R as qt,S as Qt,T as $t,U as Jt,V as Zt,W as ne,X as te,Y as ee,Z as ae,_ as oe,$ as re,a0 as ie,a1 as se,a2 as le,a3 as ce,a4 as fe,a5 as ue,a6 as me,a7 as de,a8 as he,a9 as pe,aa as Ee,ab as Te,ac as ve,ad as xe,ae as _e,af as Me,ag as Re,ah as ge,ai as Ae,aj as Fe,ak as Pe}from"./assets/leafy-grass2-roughness_pvrtc.f5f82fe7.js";var y,V,X,H;class gn extends w{constructor(n,e,r,s,l){const f=A({PI:Math.PI,USE_NORMAL:!0,USE_WORLD_POS:!0,USE_PBR:!0,MAX_REFLECTION_LOD:4},l);super(n,r,s,f,"sphere");T(this,y,void 0);T(this,V,void 0);T(this,X,void 0);T(this,H,void 0);E(this,"irradianceMapTexture");E(this,"prefilterMapTexture");E(this,"brdfLutTexture");E(this,"albedoMap");E(this,"normalMap");E(this,"metallicMap");E(this,"roughnessMap");E(this,"aoMap");const{vertexCount:c,vertexStride:i,interleavedArray:m,indicesArray:h}=e;this.vertexCount=c;const d=n.getAttribLocation(this.program,"aPosition"),p=n.getAttribLocation(this.program,"aNormal"),g=n.createBuffer(),B=n.createBuffer();if(this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,g),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,3,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),l.USE_PBR_TEXTURES){const S=n.getAttribLocation(this.program,"aUv");n.enableVertexAttribArray(S),n.vertexAttribPointer(S,2,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT)}n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,B),n.bufferData(n.ELEMENT_ARRAY_BUFFER,h,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_irradianceMap",{type:n.INT,value:0}),this.setUniform("u_prefilterMap",{type:n.INT,value:1}),this.setUniform("u_brdfLUT",{type:n.INT,value:2}),l.USE_PBR_TEXTURES?(this.setUniform("u_albedoMap",{type:n.INT,value:3}),this.setUniform("u_normalMap",{type:n.INT,value:4}),this.setUniform("u_metallicMap",{type:n.INT,value:5}),this.setUniform("u_roughnessMap",{type:n.INT,value:6}),this.setUniform("u_aoMap",{type:n.INT,value:7})):this.setUniform("u_albedo",{type:n.FLOAT_VEC3,value:new Float32Array([1,1,1])}),v(this,y,n.getUniformBlockIndex(this.program,"Projection")),v(this,V,n.getUniformBlockIndex(this.program,"View")),v(this,X,n.getUniformBlockIndex(this.program,"Lighting")),v(this,H,n.getUniformBlockIndex(this.program,"PostFX"))}render(){!this.visible||(this.gl.uniformBlockBinding(this.program,u(this,y),0),this.gl.uniformBlockBinding(this.program,u(this,V),1),this.gl.uniformBlockBinding(this.program,u(this,X),2),this.gl.uniformBlockBinding(this.program,u(this,H),3),this.gl.useProgram(this.program),this.irradianceMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.irradianceMapTexture)),this.prefilterMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.prefilterMapTexture)),this.brdfLutTexture&&(this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,this.brdfLutTexture)),this.albedoMap&&(this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,this.albedoMap)),this.normalMap&&(this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,this.normalMap)),this.metallicMap&&(this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,this.metallicMap)),this.roughnessMap&&(this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,this.roughnessMap)),this.aoMap&&(this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,this.aoMap)),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.bindVertexArray(null))}}y=new WeakMap,V=new WeakMap,X=new WeakMap,H=new WeakMap;var L,G,k;const _n=class extends w{constructor(n,e,r,s,l,f){super(n,s,l,A({PI:Math.PI,USE_UV:!0},f));T(this,L,void 0);T(this,G,void 0);T(this,k,void 0);const{vertexCount:c,vertexStride:i,interleavedArray:m,indicesArray:h}=r;this.vertexCount=c;const d=n.getAttribLocation(this.program,"aPosition"),p=n.getAttribLocation(this.program,"aUv"),g=n.createBuffer(),B=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,g),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,2,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,B),n.bufferData(n.ELEMENT_ARRAY_BUFFER,h,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:n.INT,value:0});const S=_n.createTextCanvas(e);v(this,L,n.createTexture()),n.bindTexture(n.TEXTURE_2D,u(this,L)),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,S.width,S.height,0,n.RGBA,n.UNSIGNED_BYTE,S),n.generateMipmap(n.TEXTURE_2D),n.bindTexture(n.TEXTURE_2D,null),v(this,G,n.getUniformBlockIndex(this.program,"Projection")),v(this,k,n.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(n){const e=document.createElement("canvas"),r=e.getContext("2d");e.width=1024,e.height=128;const s=20,l=10,f=100;r.font=`${f}px Helvetica`,r.fillStyle="#fff",r.textBaseline="middle",r.fillText(n,s,e.height/2);const{width:c}=r.measureText(n),i=s+c+40;return r.strokeStyle="#fff",r.lineWidth=5,r.beginPath(),r.moveTo(i,e.height/2),r.lineTo(e.width-l,e.height/2),r.stroke(),r.beginPath(),r.moveTo(e.width-l,e.height/2),r.lineTo(e.width-l-40,e.height/2+30),r.stroke(),r.beginPath(),r.moveTo(e.width-l,e.height/2),r.lineTo(e.width-l-40,e.height/2-30),r.stroke(),e}render(){this.gl.uniformBlockBinding(this.program,u(this,G),0),this.gl.uniformBlockBinding(this.program,u(this,k),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,u(this,L)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}};let pn=_n;L=new WeakMap,G=new WeakMap,k=new WeakMap;var W,z,Y,_;class be extends w{constructor(n,e,r,s,l={}){super(n,r,s,A({PI:Math.PI,IS_CUBEMAP:!0},l));T(this,W,void 0);T(this,z,void 0);T(this,Y,void 0);T(this,_,void 0);const{vertexCount:f,vertexStride:c,interleavedArray:i,indicesArray:m}=e;this.vertexCount=f;const h=n.getAttribLocation(this.program,"aPosition"),d=n.createBuffer(),p=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,d),n.bufferData(n.ARRAY_BUFFER,i,n.STATIC_DRAW),n.enableVertexAttribArray(h),n.vertexAttribPointer(h,3,n.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,p),n.bufferData(n.ELEMENT_ARRAY_BUFFER,m,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_environmentMap",{type:n.INT,value:0}),v(this,W,n.getUniformBlockIndex(this.program,"Projection")),v(this,z,n.getUniformBlockIndex(this.program,"View")),v(this,Y,n.getUniformBlockIndex(this.program,"PostFX"))}get texture(){return u(this,_)}set texture(n){u(this,_)&&this.gl.deleteTexture(u(this,_)),v(this,_,n)}render(){this.gl.uniformBlockBinding(this.program,u(this,W),0),this.gl.uniformBlockBinding(this.program,u(this,z),1),this.gl.uniformBlockBinding(this.program,u(this,Y),3),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),u(this,_)&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,u(this,_))),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),u(this,_),this.gl.bindVertexArray(null)}}W=new WeakMap,z=new WeakMap,Y=new WeakMap,_=new WeakMap;class En extends w{constructor(n,e,r,s,l={}){super(n,r,s,A({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0},l));E(this,"texture");E(this,"envTexture");const{vertexCount:f,vertexStride:c,interleavedArray:i,indicesArray:m}=e;this.vertexCount=f;const h=n.getAttribLocation(this.program,"aPosition"),d=n.createBuffer(),p=n.createBuffer();n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,d),n.bufferData(n.ARRAY_BUFFER,i,n.STATIC_DRAW),n.enableVertexAttribArray(h),n.vertexAttribPointer(h,3,n.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,p),n.bufferData(n.ELEMENT_ARRAY_BUFFER,m,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4})}render(n){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",n.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.envTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envTexture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}let ln,O;class Ue extends w{constructor(n,e,r,s,l,f={}){super(n,s,l,A({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0,USE_UV:!0},f));ln||(ln=dn({width:e,height:r}),O=new hn(-e/2,e/2,r/2,-r/2,0,2),O.position=[0,0,1],O.lookAt=[0,0,0],O.updateProjectionViewMatrix());const{vertexCount:c,vertexStride:i,interleavedArray:m,indicesArray:h}=ln;this.vertexCount=c;const d=n.getAttribLocation(this.program,"aPosition"),p=n.getAttribLocation(this.program,"aUv"),g=n.createBuffer(),B=n.createBuffer();n.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,g),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,2,n.FLOAT,!1,i*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,B),n.bufferData(n.ELEMENT_ARRAY_BUFFER,h,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4})}render(){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",O.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}var Se=`#version 300 es

uniform mat4 u_projectionViewMatrix;
uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec2 aUv;

out vec2 vUv;

void main () {
  gl_Position = u_projectionViewMatrix * u_worldMatrix * aPosition;

  vUv = aUv;
}`,Ne=`#version 300 es
precision highp float;

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}`;class Ce extends w{constructor(n,e,r,s={}){super(n,Se,Ne,s);E(this,"texture");const{vertexCount:l,vertexStride:f,interleavedArray:c,indicesArray:i}=dn({width:e,height:r});this.vertexCount=l;const m=new hn(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);m.position=[0,0,1],m.lookAt=[0,0,0],m.updateProjectionViewMatrix();const h=n.getAttribLocation(this.program,"aPosition"),d=n.getAttribLocation(this.program,"aUv"),p=n.createBuffer(),g=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,c,n.STATIC_DRAW),n.enableVertexAttribArray(h),n.vertexAttribPointer(h,3,n.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,2,n.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,g),n.bufferData(n.ELEMENT_ARRAY_BUFFER,i,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:n.INT,value:0}),this.setUniform("u_projectionViewMatrix",{type:n.FLOAT_MAT4,value:m.projectionViewMatrix})}render(){this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.texture&&this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}function Le(){return new Worker("/assets/to-half-float-web-worker.28483761.js",{type:"module"})}var R=`#version 300 es

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
}`,Ie=`#version 300 es
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
}`,we=`#version 300 es
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
  
}`,An=`#version 300 es
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
}`,Sn=`#version 300 es
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
    float diffuseEnvLightMixFactor;
    float specularEnvLightMixFactor;
  };
#endif

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}`,Be=`#version 300 es
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
}`,Oe=`#version 300 es
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
}`,De=`#version 300 es
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
}`;const q=7,fn=7,en=10,an=10,J=4,N=512,C=512,F=1024,cn=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],ye=[{s3tc:a(it),astc:a(st),etc1:a(lt),etc2:a(ct),pvrtc:a(ft)},{s3tc:a(ut),astc:a(mt),etc1:a(dt),etc2:a(ht),pvrtc:a(pt)},{s3tc:a(Et),astc:a(Tt),etc1:a(vt),etc2:a(xt),pvrtc:a(_t)},{s3tc:a(Mt),astc:a(Rt),etc1:a(gt),etc2:a(At),pvrtc:a(Ft)},{s3tc:a(Pt),astc:a(bt),etc1:a(Ut),etc2:a(St),pvrtc:a(Nt)}],Ve=[{s3tc:a(Ct),astc:a(Lt),etc1:a(It),etc2:a(wt),pvrtc:a(Bt)},{s3tc:a(Ot),astc:a(Dt),etc1:a(yt),etc2:a(Vt),pvrtc:a(Xt)},{s3tc:a(Ht),astc:a(Gt),etc1:a(kt),etc2:a(Wt),pvrtc:a(zt)},{s3tc:a(Yt),astc:a(jt),etc1:a(Kt),etc2:a(qt),pvrtc:a(Qt)},{s3tc:a($t),astc:a(Jt),etc1:a(Zt),etc2:a(ne),pvrtc:a(te)}],Xe=[{s3tc:a(ee),astc:a(ae),etc1:a(oe),etc2:a(re),pvrtc:a(ie)},{s3tc:a(se),astc:a(le),etc1:a(ce),etc2:a(fe),pvrtc:a(ue)},{s3tc:a(me),astc:a(de),etc1:a(he),etc2:a(pe),pvrtc:a(Ee)},{s3tc:a(Te),astc:a(ve),etc1:a(xe),etc2:a(_e),pvrtc:a(Me)},{s3tc:a(Re),astc:a(ge),etc1:a(Ae),etc2:a(Fe),pvrtc:a(Pe)}],He=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Ge=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]],ke=new Map([["mon-valley",Jn],["theatre",Zn],["tokyo",bn]]),Tn={useEnvDiffuseLight:!0,useEnvSpecularLight:!0,image:"mon-valley"},We=new jn.exports.Spector;We.displayUI();const Nn=new Float32Array([2]),un=new Float32Array([16]),Cn=new Float32Array([1]),Ln=new Float32Array([1]),U=new Kn.exports.Pane;U.registerPlugin(qn);Ze();U.element.parentNode.style.setProperty("width","400px");U.addBlade({view:"list",label:"tone mapping mode",options:cn.map(o=>({text:o,value:o})),value:cn[2]}).on("change",({value:o})=>{Nn[0]=cn.indexOf(o)});U.addBlade({view:"slider",label:"point light luminance",min:0,max:50,value:un[0]}).on("change",({value:o})=>{un[0]=o});U.addInput(Tn,"useEnvDiffuseLight",{label:"use environment diffuse light"}).on("change",({value:o})=>{Cn[0]=o?1:0});U.addInput(Tn,"useEnvSpecularLight",{label:"use environment specular light"}).on("change",({value:o})=>{Ln[0]=o});U.addInput(Tn,"image",{label:"environment image",view:"thumbnail-list",options:[{text:"MonValley Lookout",value:"mon-valley",src:a(nt)},{text:"Theatre Center",value:"theatre",src:a(Qn)},{text:"Tokyo BigSight",value:"tokyo",src:a($n)}]}).on("change",({value:{value:o}})=>{const n=new Pn;n.onload=()=>{Gn(n)},n.src=a(ke.get(o))});const In=new Le,b=document.createElement("canvas");document.body.appendChild(b);const t=b.getContext("webgl2"),vn=new hn(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);vn.position=[0,0,1];vn.lookAt=[0,0,0];vn.updateProjectionViewMatrix();const x=new Un(45*Math.PI/180,innerWidth/innerHeight,.1,100);x.position=[10.84,-.17,8.98];x.lookAt=[0,0,0];x.updateProjectionMatrix();new tt(x,b,!1);const j=new Un(90*Math.PI/180,1,.1,10).updateProjectionMatrix(),K=et({radius:.5,widthSegments:32,heightSegments:32}),I=dn({width:5,height:5/8}),on=at({flipUVy:!0}),M=new ot,Fn={POINT_LIGHTS_COUNT:J.toString()},Z=[],ze=en/q,Ye=an/fn;for(let o=0;o<fn;o++)for(let n=0;n<q;n++){const e=n*ze-en/2+K.radius,r=o*Ye-an/2+K.radius,s=new gn(t,K,R,An,Fn);s.setPosition([e,r,-5]);const l=o/fn;s.setUniform("u_metallic",{type:t.FLOAT,value:l});const f=1/q+n/q;s.setUniform("u_roughness",{type:t.FLOAT,value:f}),M.addChild(s),Z.push(s);const c=new gn(t,K,R,An,A({USE_PBR_TEXTURES:!0,USE_UV:!0},Fn));c.setPosition([e,r,5]),M.addChild(c),Z.push(c)}const wn=new pn(t,"roughness",I,R,Sn);wn.setPosition([-en/2+I.width/2,-an/2-I.height,-5]);M.addChild(wn);const Bn=new pn(t,"metallic",I,R,Sn);Bn.setPosition([-en/2-I.height,-an/2+I.width/2,-5]).setRotation([0,0,Math.PI*.5]);M.addChild(Bn);const Q=nn(t,M.children[0].program,"Projection",["projMatrix","zNear","zFar"]),je=tn(t,Q.blockSize,0),$=nn(t,M.children[0].program,"View",["viewMatrix","cameraPosition","time"]),Ke=tn(t,$.blockSize,1),P=nn(t,M.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","diffuseEnvLightMixFactor","specularEnvLightMixFactor"]),qe=tn(t,P.blockSize,2),On=nn(t,M.children[0].program,"PostFX",["tonemappingMode"]),Qe=tn(t,On.blockSize,3),D=[],Dn=[],yn=[];for(let o=0;o<J;o++){D.push(new Float32Array(3));const n=[Math.random(),Math.random(),Math.random()];Dn.push(new Float32Array(n));const e=new rt(t);e.color=[...n,1],M.addChild(e),yn.push(e)}const mn=new En(t,on,R,we);mn.setUniform("u_equirectangularMap",{type:t.INT,value:0});const $e=new En(t,on,R,Be);$e.setUniform("u_environmentMap",{type:t.INT,value:0});const Vn=new En(t,on,R,Oe,{CUBEMAP_SIDE_SIZE:F});Vn.setUniform("u_environmentMap",{type:t.INT,value:0});Vn.setUniform("u_roughness",{type:t.FLOAT,value:0});const Je=new Ue(t,N,C,R,De),Xn=new be(t,on,R,Ie),xn=new Ce(t,N,C);{const n=N*.2,e=C*.2,r=24;xn.setPosition([-innerWidth/2+n/2+r,-innerHeight/2+e/2+r,0]).setScale([.2,.2,1]).updateWorldMatrix()}t.getExtension("EXT_color_buffer_half_float");t.getExtension("EXT_color_buffer_float");t.getExtension("OES_texture_half_float");t.getExtension("OES_texture_half_float_linear");na(bn).then(o=>{In.postMessage([o.width,o.height,o.dataFloat],[o.dataFloat.buffer])});Promise.all([Promise.all(ye.map((o,n)=>sn(t,o))),Promise.all(Ve.map((o,n)=>sn(t,o))),Promise.all(Xe.map((o,n)=>sn(t,o)))]).then(o=>{let n=0;for(const e of Z){const r=o[n];e.albedoMap=r[0],e.normalMap=r[1],e.metallicMap=r[2],e.roughnessMap=r[3],e.aoMap=r[4],n++,n===3&&(n=0)}});In.onmessage=o=>{Gn(o.data)};requestAnimationFrame(Hn);kn();window.addEventListener("resize",kn);function Hn(o){requestAnimationFrame(Hn),x.updateViewMatrix(),t.bindBuffer(t.UNIFORM_BUFFER,je),t.bufferSubData(t.UNIFORM_BUFFER,Q.uniforms.projMatrix.offset,x.projectionMatrix,0),t.bufferSubData(t.UNIFORM_BUFFER,Q.uniforms.zNear.offset,new Float32Array([x.near]),0),t.bufferSubData(t.UNIFORM_BUFFER,Q.uniforms.zFar.offset,new Float32Array([x.far]),0),t.bindBuffer(t.UNIFORM_BUFFER,Ke),t.bufferSubData(t.UNIFORM_BUFFER,$.uniforms.viewMatrix.offset,x.viewMatrix,0),t.bufferSubData(t.UNIFORM_BUFFER,$.uniforms.cameraPosition.offset,new Float32Array(x.position),0),t.bufferSubData(t.UNIFORM_BUFFER,$.uniforms.time.offset,new Float32Array([o]),0),t.bindBuffer(t.UNIFORM_BUFFER,qe);const n=o*.001;for(let e=0;e<J;e++){const r=Math.PI*2/J,s=[Math.cos(e*r+n)*(Math.sin(n)*2+4),Math.sin(e*r+n)*(Math.sin(n)*2+4),Math.cos(n)*4];D[e][0]=s[0],D[e][1]=s[1],D[e][2]=s[2],yn[e].setPosition(s).updateWorldMatrix(),t.bufferSubData(t.UNIFORM_BUFFER,P.uniforms.pointLightPositions.offset+e*P.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,D[e],0),t.bufferSubData(t.UNIFORM_BUFFER,P.uniforms.pointLightColors.offset+e*4*Float32Array.BYTES_PER_ELEMENT,Dn[e],0)}t.bufferSubData(t.UNIFORM_BUFFER,P.uniforms.pointLightIntensity.offset,un,0),t.bufferSubData(t.UNIFORM_BUFFER,P.uniforms.diffuseEnvLightMixFactor.offset,Cn,0),t.bufferSubData(t.UNIFORM_BUFFER,P.uniforms.specularEnvLightMixFactor.offset,Ln,0),t.bindBuffer(t.UNIFORM_BUFFER,Qe),t.bufferSubData(t.UNIFORM_BUFFER,On.uniforms.tonemappingMode.offset,Nn),t.enable(t.DEPTH_TEST),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.depthFunc(t.LEQUAL),Xn.render(),t.depthFunc(t.LESS),M.updateWorldMatrix().render(),xn.render()}function Gn([o,n,e]){const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGB9_E5,o,n,0,t.RGB,t.HALF_FLOAT,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),xn.texture=r,mn.texture=r;const s=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,s);const l=t.createRenderbuffer();t.bindRenderbuffer(t.RENDERBUFFER,l),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,F,F),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,l);const f=t.createTexture();t.bindTexture(t.TEXTURE_CUBE_MAP,f);for(let i=0;i<6;i++){const m=t.TEXTURE_CUBE_MAP_POSITIVE_X+i;t.texImage2D(m,0,t.RGBA16F,F,F,0,t.RGBA,t.HALF_FLOAT,null)}t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR),t.bindFramebuffer(t.FRAMEBUFFER,s),t.viewport(0,0,F,F);for(let i=0;i<6;i++)t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+i,f,0),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),j.lookAt=He[i],j.upVector=Ge[i],j.updateViewMatrix().updateProjectionViewMatrix(),mn.render(j);const c=t.createTexture();t.bindTexture(t.TEXTURE_2D,c),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,N,C,0,t.RGBA,t.HALF_FLOAT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,N,C),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0),t.viewport(0,0,N,C),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),Je.render(),t.bindFramebuffer(t.FRAMEBUFFER,null),Xn.texture=f;for(const i of Z)i.brdfLutTexture=c}function kn(){x.aspect=innerWidth/innerHeight,x.updateProjectionMatrix(),b.width=innerWidth*devicePixelRatio,b.height=innerHeight*devicePixelRatio,b.style.setProperty("width",`${innerWidth}px`),b.style.setProperty("height",`${innerHeight}px`)}function Ze(){const o=`
    .tp-thumbv_ovl .tp-thumbv_opt:first-of-type {
      display: none !important;
    }
    .tp-thumbv_thmb, .tp-thumbv_sthmb {
      background-size: cover !important;
    }
  `,n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=o:n.styleSheet.cssText=o,document.getElementsByTagName("head")[0].appendChild(n)}function na(o){return new Promise(n=>{const e=new Pn;e.src=a(o),e.onload=()=>{n(e)}})}function a(o){return window.BASE_URL?`${window.BASE_URL}/assets/${o}`:o}
