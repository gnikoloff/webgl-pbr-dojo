var Kn=Object.defineProperty;var gn=Object.getOwnPropertySymbols;var qn=Object.prototype.hasOwnProperty,Qn=Object.prototype.propertyIsEnumerable;var ln=(o,t,e)=>t in o?Kn(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,U=(o,t)=>{for(var e in t||(t={}))qn.call(t,e)&&ln(o,e,t[e]);if(gn)for(var e of gn(t))Qn.call(t,e)&&ln(o,e,t[e]);return o};var T=(o,t,e)=>(ln(o,typeof t!="symbol"?t+"":t,e),e),Un=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)};var h=(o,t,e)=>(Un(o,t,"read from private field"),e?e.call(o):t.get(o)),_=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},v=(o,t,e,r)=>(Un(o,t,"write to private field"),r?r.call(o,e):t.set(o,e),e);import{t as $n,T as Jn}from"./assets/vendor.adb55ed6.js";import{s as Zn,a as nt,H as Nn,h as tt,b as et,c as Ln,d as at}from"./assets/Tokyo_BigSight_thumb.4a2a6e4e.js";import{D as O,a as _n,O as vn,P as In,C as ot,c as rt,e as it,S as st,b as en,d as an,L as lt}from"./assets/light-debug.4730310f.js";import{l as cn,al as ct,a as ut,b as ft,c as mt,d as Et,n as dt,e as pt,f as ht,g as Tt,h as _t,m as vt,i as xt,j as Rt,k as Mt,o as At,r as Pt,p as Ft,q as gt,s as Ut,t as bt,u as Ct,v as St,w as Nt,x as Lt,y as It,z as Bt,A as wt,B as Ot,C as Dt,D as Xt,E as yt,F as Vt,G as Ht,H as Gt,I as kt,J as Wt,K as zt,L as Yt,M as jt,N as Kt,O as qt,P as Qt,Q as $t,R as Jt,S as Zt,T as ne,U as te,V as ee,W as ae,X as oe,Y as re,Z as ie,_ as se,$ as le,a0 as ce,a1 as ue,a2 as fe,a3 as me,a4 as Ee,a5 as de,a6 as pe,a7 as he,a8 as Te,a9 as _e,aa as ve,ab as xe,ac as Re,ad as Me,ae as Ae,af as Pe,ag as Fe,ah as ge,ai as Ue,aj as be,ak as Ce}from"./assets/leafy-grass2-roughness_pvrtc.b2dec1f4.js";var H,G,k,W;class bn extends O{constructor(t,e,r,s,l){const u=U({PI:Math.PI,USE_NORMAL:!0,USE_WORLD_POS:!0,USE_PBR:!0,MAX_REFLECTION_LOD:4},l);super(t,r,s,u,"sphere");_(this,H,void 0);_(this,G,void 0);_(this,k,void 0);_(this,W,void 0);T(this,"irradianceMapTexture");T(this,"prefilterMapTexture");T(this,"brdfLutTexture");T(this,"albedoMap");T(this,"normalMap");T(this,"metallicMap");T(this,"roughnessMap");T(this,"aoMap");const{vertexCount:c,vertexStride:f,interleavedArray:E,indicesArray:m}=e;this.vertexCount=c;const d=t.getAttribLocation(this.program,"aPosition"),p=t.getAttribLocation(this.program,"aNormal"),i=t.createBuffer(),M=t.createBuffer();if(this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,E,t.STATIC_DRAW),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(p),t.vertexAttribPointer(p,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),l.USE_PBR_TEXTURES){const F=t.getAttribLocation(this.program,"aUv");t.enableVertexAttribArray(F),t.vertexAttribPointer(F,2,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT)}t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,M),t.bufferData(t.ELEMENT_ARRAY_BUFFER,m,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_irradianceMap",{type:t.INT,value:0}),this.setUniform("u_prefilterMap",{type:t.INT,value:1}),this.setUniform("u_brdfLUT",{type:t.INT,value:2}),l.USE_PBR_TEXTURES?(this.setUniform("u_albedoMap",{type:t.INT,value:3}),this.setUniform("u_normalMap",{type:t.INT,value:4}),this.setUniform("u_metallicMap",{type:t.INT,value:5}),this.setUniform("u_roughnessMap",{type:t.INT,value:6}),this.setUniform("u_aoMap",{type:t.INT,value:7})):this.setUniform("u_albedo",{type:t.FLOAT_VEC3,value:new Float32Array([1,1,1])}),v(this,H,t.getUniformBlockIndex(this.program,"Projection")),v(this,G,t.getUniformBlockIndex(this.program,"View")),v(this,k,t.getUniformBlockIndex(this.program,"Lighting")),v(this,W,t.getUniformBlockIndex(this.program,"PostFX"))}render(){!this.visible||(this.gl.uniformBlockBinding(this.program,h(this,H),0),this.gl.uniformBlockBinding(this.program,h(this,G),1),this.gl.uniformBlockBinding(this.program,h(this,k),2),this.gl.uniformBlockBinding(this.program,h(this,W),3),this.gl.useProgram(this.program),this.irradianceMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.irradianceMapTexture)),this.prefilterMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.prefilterMapTexture)),this.brdfLutTexture&&(this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,this.brdfLutTexture)),this.albedoMap&&(this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,this.albedoMap)),this.normalMap&&(this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,this.normalMap)),this.metallicMap&&(this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,this.metallicMap)),this.roughnessMap&&(this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,this.roughnessMap)),this.aoMap&&(this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,this.aoMap)),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.bindVertexArray(null))}}H=new WeakMap,G=new WeakMap,k=new WeakMap,W=new WeakMap;var B,z,Y;const Fn=class extends O{constructor(t,e,r,s,l,u){super(t,s,l,U({PI:Math.PI,USE_UV:!0},u));_(this,B,void 0);_(this,z,void 0);_(this,Y,void 0);const{vertexCount:c,vertexStride:f,interleavedArray:E,indicesArray:m}=r;this.vertexCount=c;const d=t.getAttribLocation(this.program,"aPosition"),p=t.getAttribLocation(this.program,"aUv"),i=t.createBuffer(),M=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,E,t.STATIC_DRAW),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(p),t.vertexAttribPointer(p,2,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,M),t.bufferData(t.ELEMENT_ARRAY_BUFFER,m,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:t.INT,value:0});const F=Fn.createTextCanvas(e);v(this,B,t.createTexture()),t.bindTexture(t.TEXTURE_2D,h(this,B)),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,F.width,F.height,0,t.RGBA,t.UNSIGNED_BYTE,F),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),v(this,z,t.getUniformBlockIndex(this.program,"Projection")),v(this,Y,t.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(t){const e=document.createElement("canvas"),r=e.getContext("2d");e.width=1024,e.height=128;const s=20,l=10,u=100;r.font=`${u}px Helvetica`,r.fillStyle="#fff",r.textBaseline="middle",r.fillText(t,s,e.height/2);const{width:c}=r.measureText(t),f=s+c+40;return r.strokeStyle="#fff",r.lineWidth=5,r.beginPath(),r.moveTo(f,e.height/2),r.lineTo(e.width-l,e.height/2),r.stroke(),r.beginPath(),r.moveTo(e.width-l,e.height/2),r.lineTo(e.width-l-40,e.height/2+30),r.stroke(),r.beginPath(),r.moveTo(e.width-l,e.height/2),r.lineTo(e.width-l-40,e.height/2-30),r.stroke(),e}render(){this.gl.uniformBlockBinding(this.program,h(this,z),0),this.gl.uniformBlockBinding(this.program,h(this,Y),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,h(this,B)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}};let xn=Fn;B=new WeakMap,z=new WeakMap,Y=new WeakMap;var j,K,q,A;class Se extends O{constructor(t,e,r,s,l={}){super(t,r,s,U({PI:Math.PI,IS_CUBEMAP:!0},l));_(this,j,void 0);_(this,K,void 0);_(this,q,void 0);_(this,A,void 0);const{vertexCount:u,vertexStride:c,interleavedArray:f,indicesArray:E}=e;this.vertexCount=u;const m=t.getAttribLocation(this.program,"aPosition"),d=t.createBuffer(),p=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,f,t.STATIC_DRAW),t.enableVertexAttribArray(m),t.vertexAttribPointer(m,3,t.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,p),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_environmentMap",{type:t.INT,value:0}),v(this,j,t.getUniformBlockIndex(this.program,"Projection")),v(this,K,t.getUniformBlockIndex(this.program,"View")),v(this,q,t.getUniformBlockIndex(this.program,"PostFX"))}get texture(){return h(this,A)}set texture(t){h(this,A)&&this.gl.deleteTexture(h(this,A)),v(this,A,t)}render(){this.gl.uniformBlockBinding(this.program,h(this,j),0),this.gl.uniformBlockBinding(this.program,h(this,K),1),this.gl.uniformBlockBinding(this.program,h(this,q),3),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),h(this,A)&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,h(this,A))),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),h(this,A),this.gl.bindVertexArray(null)}}j=new WeakMap,K=new WeakMap,q=new WeakMap,A=new WeakMap;class Rn extends O{constructor(t,e,r,s,l={}){super(t,r,s,U({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0},l));T(this,"texture");T(this,"envTexture");const{vertexCount:u,vertexStride:c,interleavedArray:f,indicesArray:E}=e;this.vertexCount=u;const m=t.getAttribLocation(this.program,"aPosition"),d=t.createBuffer(),p=t.createBuffer();t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,f,t.STATIC_DRAW),t.enableVertexAttribArray(m),t.vertexAttribPointer(m,3,t.FLOAT,!1,c*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,p),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:t.FLOAT_MAT4})}render(t){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",t.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.envTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envTexture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}let un,X;class Ne extends O{constructor(t,e,r,s,l,u={}){super(t,s,l,U({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0,USE_UV:!0},u));un||(un=_n({width:e,height:r}),X=new vn(-e/2,e/2,r/2,-r/2,0,2),X.position=[0,0,1],X.lookAt=[0,0,0],X.updateProjectionViewMatrix());const{vertexCount:c,vertexStride:f,interleavedArray:E,indicesArray:m}=un;this.vertexCount=c;const d=t.getAttribLocation(this.program,"aPosition"),p=t.getAttribLocation(this.program,"aUv"),i=t.createBuffer(),M=t.createBuffer();t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,E,t.STATIC_DRAW),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(p),t.vertexAttribPointer(p,2,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,M),t.bufferData(t.ELEMENT_ARRAY_BUFFER,m,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:t.FLOAT_MAT4})}render(){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",X.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}var Le=`#version 300 es

uniform mat4 u_projectionViewMatrix;
uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec2 aUv;

out vec2 vUv;

void main () {
  gl_Position = u_projectionViewMatrix * u_worldMatrix * aPosition;

  vUv = aUv;
}`,Ie=`#version 300 es
precision highp float;

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}`;class Be extends O{constructor(t,e,r,s={}){super(t,Le,Ie,s);T(this,"texture");const{vertexCount:l,vertexStride:u,interleavedArray:c,indicesArray:f}=_n({width:e,height:r});this.vertexCount=l;const E=new vn(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);E.position=[0,0,1],E.lookAt=[0,0,0],E.updateProjectionViewMatrix();const m=t.getAttribLocation(this.program,"aPosition"),d=t.getAttribLocation(this.program,"aUv"),p=t.createBuffer(),i=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,p),t.bufferData(t.ARRAY_BUFFER,c,t.STATIC_DRAW),t.enableVertexAttribArray(m),t.vertexAttribPointer(m,3,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,i),t.bufferData(t.ELEMENT_ARRAY_BUFFER,f,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:t.INT,value:0}),this.setUniform("u_projectionViewMatrix",{type:t.FLOAT_MAT4,value:E.projectionViewMatrix})}render(){this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.texture&&this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}var g=`#version 300 es

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
  
}`,Cn=`#version 300 es
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
}`,Bn=`#version 300 es
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
}`,Xe=`#version 300 es
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
}`,ye=`#version 300 es
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
}`;const $=7,dn=7,on=10,rn=10,nn=4,L=512,I=512,b=1024,fn=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],Ve=[{s3tc:a(ct),astc:a(ut),etc1:a(ft),etc2:a(mt),pvrtc:a(Et)},{s3tc:a(dt),astc:a(pt),etc1:a(ht),etc2:a(Tt),pvrtc:a(_t)},{s3tc:a(vt),astc:a(xt),etc1:a(Rt),etc2:a(Mt),pvrtc:a(At)},{s3tc:a(Pt),astc:a(Ft),etc1:a(gt),etc2:a(Ut),pvrtc:a(bt)},{s3tc:a(Ct),astc:a(St),etc1:a(Nt),etc2:a(Lt),pvrtc:a(It)}],He=[{s3tc:a(Bt),astc:a(wt),etc1:a(Ot),etc2:a(Dt),pvrtc:a(Xt)},{s3tc:a(yt),astc:a(Vt),etc1:a(Ht),etc2:a(Gt),pvrtc:a(kt)},{s3tc:a(Wt),astc:a(zt),etc1:a(Yt),etc2:a(jt),pvrtc:a(Kt)},{s3tc:a(qt),astc:a(Qt),etc1:a($t),etc2:a(Jt),pvrtc:a(Zt)},{s3tc:a(ne),astc:a(te),etc1:a(ee),etc2:a(ae),pvrtc:a(oe)}],Ge=[{s3tc:a(re),astc:a(ie),etc1:a(se),etc2:a(le),pvrtc:a(ce)},{s3tc:a(ue),astc:a(fe),etc1:a(me),etc2:a(Ee),pvrtc:a(de)},{s3tc:a(pe),astc:a(he),etc1:a(Te),etc2:a(_e),pvrtc:a(ve)},{s3tc:a(xe),astc:a(Re),etc1:a(Me),etc2:a(Ae),pvrtc:a(Pe)},{s3tc:a(Fe),astc:a(ge),etc1:a(Ue),etc2:a(be),pvrtc:a(Ce)}],mn=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],En=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]],ke=new Map([["mon-valley",tt],["theatre",et],["tokyo",Ln]]),Mn={useEnvDiffuseLight:!0,useEnvSpecularLight:!0,image:"mon-valley"},wn=new Float32Array([2]),pn=new Float32Array([16]),On=new Float32Array([1]),Dn=new Float32Array([1]),N=new $n.exports.Pane;N.registerPlugin(Jn);$e();N.element.parentNode.style.setProperty("width","400px");N.addBlade({view:"list",label:"tone mapping mode",options:fn.map(o=>({text:o,value:o})),value:fn[2]}).on("change",({value:o})=>{wn[0]=fn.indexOf(o)});N.addBlade({view:"slider",label:"point light luminance",min:0,max:50,value:pn[0]}).on("change",({value:o})=>{pn[0]=o});N.addInput(Mn,"useEnvDiffuseLight",{label:"use environment diffuse light"}).on("change",({value:o})=>{On[0]=o?1:0});N.addInput(Mn,"useEnvSpecularLight",{label:"use environment specular light"}).on("change",({value:o})=>{Dn[0]=o});N.addInput(Mn,"image",{label:"environment image",view:"thumbnail-list",options:[{text:"MonValley Lookout",value:"mon-valley",src:a(at)},{text:"Theatre Center",value:"theatre",src:a(Zn)},{text:"Tokyo BigSight",value:"tokyo",src:a(nt)}]}).on("change",({value:{value:o}})=>{const t=new Nn;t.onload=()=>{zn(t)},t.src=a(ke.get(o))});const S=document.createElement("canvas");document.body.appendChild(S);const n=S.getContext("webgl2"),An=new vn(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);An.position=[0,0,1];An.lookAt=[0,0,0];An.updateProjectionViewMatrix();const R=new In(45*Math.PI/180,innerWidth/innerHeight,.1,100);R.position=[10.84,-.17,8.98];R.lookAt=[0,0,0];R.updateProjectionMatrix();new ot(R,S,!1);const x=new In(90*Math.PI/180,1,.1,10).updateProjectionMatrix(),Q=rt({radius:.5,widthSegments:32,heightSegments:32}),w=_n({width:5,height:5/8}),sn=it({flipUVy:!0}),P=new st,Sn={POINT_LIGHTS_COUNT:nn.toString()},tn=[],We=on/$,ze=rn/dn;for(let o=0;o<dn;o++)for(let t=0;t<$;t++){const e=t*We-on/2+Q.radius,r=o*ze-rn/2+Q.radius,s=new bn(n,Q,g,Cn,Sn);s.setPosition([e,r,-5]);const l=o/dn;s.setUniform("u_metallic",{type:n.FLOAT,value:l});const u=1/$+t/$;s.setUniform("u_roughness",{type:n.FLOAT,value:u}),P.addChild(s),tn.push(s);const c=new bn(n,Q,g,Cn,U({USE_PBR_TEXTURES:!0,USE_UV:!0},Sn));c.setPosition([e,r,5]),P.addChild(c),tn.push(c)}const Xn=new xn(n,"roughness",w,g,Bn);Xn.setPosition([-on/2+w.width/2,-rn/2-w.height,-5]);P.addChild(Xn);const yn=new xn(n,"metallic",w,g,Bn);yn.setPosition([-on/2-w.height,-rn/2+w.width/2,-5]).setRotation([0,0,Math.PI*.5]);P.addChild(yn);const J=en(n,P.children[0].program,"Projection",["projMatrix","zNear","zFar"]),Ye=an(n,J.blockSize,0),Z=en(n,P.children[0].program,"View",["viewMatrix","cameraPosition","time"]),je=an(n,Z.blockSize,1),C=en(n,P.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","diffuseEnvLightMixFactor","specularEnvLightMixFactor"]),Ke=an(n,C.blockSize,2),Vn=en(n,P.children[0].program,"PostFX",["tonemappingMode"]),qe=an(n,Vn.blockSize,3),y=[],Hn=[],Gn=[];for(let o=0;o<nn;o++){y.push(new Float32Array(3));const t=[Math.random(),Math.random(),Math.random()];Hn.push(new Float32Array(t));const e=new lt(n);e.color=[...t,1],P.addChild(e),Gn.push(e)}const hn=new Rn(n,sn,g,Oe);hn.setUniform("u_equirectangularMap",{type:n.INT,value:0});const Tn=new Rn(n,sn,g,De);Tn.setUniform("u_environmentMap",{type:n.INT,value:0});const V=new Rn(n,sn,g,Xe,{CUBEMAP_SIDE_SIZE:b});V.setUniform("u_environmentMap",{type:n.INT,value:0});V.setUniform("u_roughness",{type:n.FLOAT,value:0});const Qe=new Ne(n,L,I,g,ye),kn=new Se(n,sn,g,we),Pn=new Be(n,L,I);{const t=L*.2,e=I*.2,r=24;Pn.setPosition([-innerWidth/2+t/2+r,-innerHeight/2+e/2+r,0]).setScale([.2,.2,1]).updateWorldMatrix()}n.getExtension("EXT_color_buffer_half_float");n.getExtension("EXT_color_buffer_float");n.getExtension("OES_texture_half_float");n.getExtension("OES_texture_half_float_linear");Je(Ln).then(o=>{zn([o.width,o.height,o.dataFloat])});Promise.all([Promise.all(Ve.map((o,t)=>cn(n,o))),Promise.all(He.map((o,t)=>cn(n,o))),Promise.all(Ge.map((o,t)=>cn(n,o)))]).then(o=>{let t=0;for(const e of tn){const r=o[t];e.albedoMap=r[0],e.normalMap=r[1],e.metallicMap=r[2],e.roughnessMap=r[3],e.aoMap=r[4],t++,t===3&&(t=0)}});requestAnimationFrame(Wn);Yn();window.addEventListener("resize",Yn);function Wn(o){requestAnimationFrame(Wn),R.updateViewMatrix(),n.bindBuffer(n.UNIFORM_BUFFER,Ye),n.bufferSubData(n.UNIFORM_BUFFER,J.uniforms.projMatrix.offset,R.projectionMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,J.uniforms.zNear.offset,new Float32Array([R.near]),0),n.bufferSubData(n.UNIFORM_BUFFER,J.uniforms.zFar.offset,new Float32Array([R.far]),0),n.bindBuffer(n.UNIFORM_BUFFER,je),n.bufferSubData(n.UNIFORM_BUFFER,Z.uniforms.viewMatrix.offset,R.viewMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,Z.uniforms.cameraPosition.offset,new Float32Array(R.position),0),n.bufferSubData(n.UNIFORM_BUFFER,Z.uniforms.time.offset,new Float32Array([o]),0),n.bindBuffer(n.UNIFORM_BUFFER,Ke);const t=o*.001;for(let e=0;e<nn;e++){const r=Math.PI*2/nn,s=[Math.cos(e*r+t)*(Math.sin(t)*2+4),Math.sin(e*r+t)*(Math.sin(t)*2+4),Math.cos(t)*4];y[e][0]=s[0],y[e][1]=s[1],y[e][2]=s[2],Gn[e].setPosition(s).updateWorldMatrix(),n.bufferSubData(n.UNIFORM_BUFFER,C.uniforms.pointLightPositions.offset+e*C.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,y[e],0),n.bufferSubData(n.UNIFORM_BUFFER,C.uniforms.pointLightColors.offset+e*4*Float32Array.BYTES_PER_ELEMENT,Hn[e],0)}n.bufferSubData(n.UNIFORM_BUFFER,C.uniforms.pointLightIntensity.offset,pn,0),n.bufferSubData(n.UNIFORM_BUFFER,C.uniforms.diffuseEnvLightMixFactor.offset,On,0),n.bufferSubData(n.UNIFORM_BUFFER,C.uniforms.specularEnvLightMixFactor.offset,Dn,0),n.bindBuffer(n.UNIFORM_BUFFER,qe),n.bufferSubData(n.UNIFORM_BUFFER,Vn.uniforms.tonemappingMode.offset,wn),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.clearColor(.1,.1,.1,1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),n.depthFunc(n.LEQUAL),kn.render(),n.depthFunc(n.LESS),P.updateWorldMatrix().render(),Pn.render()}function zn([o,t,e]){const r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGB9_E5,o,t,0,n.RGB,n.FLOAT,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.bindTexture(n.TEXTURE_2D,null),Pn.texture=r,hn.texture=r;const s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s);const l=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,l),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,b,b),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,l);const u=n.createTexture();n.bindTexture(n.TEXTURE_CUBE_MAP,u);for(let i=0;i<6;i++){const M=n.TEXTURE_CUBE_MAP_POSITIVE_X+i;n.texImage2D(M,0,n.RGBA16F,b,b,0,n.RGBA,n.HALF_FLOAT,null)}n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.bindFramebuffer(n.FRAMEBUFFER,s),n.viewport(0,0,b,b);for(let i=0;i<6;i++)n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+i,u,0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),x.lookAt=mn[i],x.upVector=En[i],x.updateViewMatrix().updateProjectionViewMatrix(),hn.render(x);n.generateMipmap(n.TEXTURE_CUBE_MAP),Tn.envTexture=u;const c=32,f=n.createTexture();n.bindTexture(n.TEXTURE_CUBE_MAP,f);for(let i=0;i<6;i++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,n.RGBA16F,c,c,0,n.RGBA,n.HALF_FLOAT,null);n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,c,c),n.viewport(0,0,c,c);for(let i=0;i<6;i++)n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+i,f,0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),x.lookAt=mn[i],x.upVector=En[i],x.updateViewMatrix().updateProjectionViewMatrix(),Tn.render(x);const E=n.createTexture(),m=128;n.bindTexture(n.TEXTURE_CUBE_MAP,E);for(let i=0;i<6;i++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,n.RGBA16F,m,m,0,n.RGBA,n.HALF_FLOAT,null);n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.generateMipmap(n.TEXTURE_CUBE_MAP),V.envTexture=u;const d=5;for(let i=0;i<d;i++){const M=m*Math.pow(.5,i),F=m*Math.pow(.5,i);n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,M,F),n.viewport(0,0,M,F);const jn=i/(d-1);V.updateUniform("u_roughness",jn);for(let D=0;D<6;D++)x.lookAt=mn[D],x.upVector=En[D],x.updateViewMatrix().updateProjectionViewMatrix(),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+D,E,i),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),V.render(x)}const p=n.createTexture();n.bindTexture(n.TEXTURE_2D,p),n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,L,I,0,n.RGBA,n.HALF_FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,L,I),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,p,0),n.viewport(0,0,L,I),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),Qe.render(),n.bindFramebuffer(n.FRAMEBUFFER,null),kn.texture=u;for(const i of tn)i.irradianceMapTexture=f,i.prefilterMapTexture=E,i.brdfLutTexture=p}function Yn(){R.aspect=innerWidth/innerHeight,R.updateProjectionMatrix(),S.width=innerWidth*devicePixelRatio,S.height=innerHeight*devicePixelRatio,S.style.setProperty("width",`${innerWidth}px`),S.style.setProperty("height",`${innerHeight}px`)}function $e(){const o=`
    .tp-thumbv_ovl .tp-thumbv_opt:first-of-type {
      display: none !important;
    }
    .tp-thumbv_thmb, .tp-thumbv_sthmb {
      background-size: cover !important;
    }
  `,t=document.createElement("style");t.setAttribute("type","text/css"),"textContent"in t?t.textContent=o:t.styleSheet.cssText=o,document.getElementsByTagName("head")[0].appendChild(t)}function Je(o){return new Promise(t=>{const e=new Nn;e.src=a(o),e.onload=()=>{t(e)}})}function a(o){return window.BASE_URL?`${window.BASE_URL}/assets/${o}`:o}
