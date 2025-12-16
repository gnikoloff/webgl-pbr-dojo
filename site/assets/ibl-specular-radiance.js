var ct=Object.defineProperty;var Xn=Object.getOwnPropertySymbols;var ft=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var xn=(a,t,e)=>t in a?ct(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,b=(a,t)=>{for(var e in t||(t={}))ft.call(t,e)&&xn(a,e,t[e]);if(Xn)for(var e of Xn(t))ut.call(t,e)&&xn(a,e,t[e]);return a};var p=(a,t,e)=>(xn(a,typeof t!="symbol"?t+"":t,e),e),yn=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)};var c=(a,t,e)=>(yn(a,t,"read from private field"),e?e.call(a):t.get(a)),h=(a,t,e)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,e)},_=(a,t,e,r)=>(yn(a,t,"write to private field"),r?r.call(a,e):t.set(a,e),e);import{t as Et,T as mt}from"./assets/vendor.6bba9758.js";import{s as dt,a as Tt,H as pt,h as ht,b as _t,c as vt,d as xt}from"./assets/qwantani_moon_noon_puresky_1k.f9b864b5.js";import{D as G,a as Nn,O as Sn,P as kn,C as Rt,c as Mt,e as At,S as Pt,b as dn,d as Tn,L as Ft}from"./assets/light-debug.d2e766b9.js";import{l as Rn,al as Ut,a as gt,b as bt,c as Ct,d as Nt,n as St,e as Lt,f as It,g as Bt,h as wt,m as Ot,i as Dt,j as Xt,k as yt,o as Vt,r as Ht,p as Gt,q as kt,s as Wt,t as zt,u as Yt,v as jt,w as Kt,x as Qt,y as qt,z as Jt,A as $t,B as Zt,C as ne,D as te,E as ee,F as ae,G as oe,H as re,I as ie,J as se,K as le,L as ce,M as fe,N as ue,O as Ee,P as me,Q as de,R as Te,S as pe,T as he,U as _e,V as ve,W as xe,X as Re,Y as Me,Z as Ae,_ as Pe,$ as Fe,a0 as Ue,a1 as ge,a2 as be,a3 as Ce,a4 as Ne,a5 as Se,a6 as Le,a7 as Ie,a8 as Be,a9 as we,aa as Oe,ab as De,ac as Xe,ad as ye,ae as Ve,af as He,ag as Ge,ah as ke,ai as We,aj as ze,ak as Ye}from"./assets/leafy-grass2-roughness_pvrtc.0e9fd94f.js";let Mn;function je(a){return Mn==null&&(Mn=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic")),Mn}var V,Q,q;const Dn=class extends G{constructor(t,e,r,i,s,l){super(t,i,s,b({PI:Math.PI,USE_UV:!0},l));h(this,V,void 0);h(this,Q,void 0);h(this,q,void 0);const{vertexCount:f,vertexStride:u,interleavedArray:m,indicesArray:d}=r;this.vertexCount=f;const E=t.getAttribLocation(this.program,"aPosition"),T=t.getAttribLocation(this.program,"aUv"),g=t.createBuffer(),k=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,g),t.bufferData(t.ARRAY_BUFFER,m,t.STATIC_DRAW),t.enableVertexAttribArray(E),t.vertexAttribPointer(E,3,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(T),t.vertexAttribPointer(T,2,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,k),t.bufferData(t.ELEMENT_ARRAY_BUFFER,d,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:t.INT,value:0});const L=Dn.createTextCanvas(e);_(this,V,t.createTexture()),t.bindTexture(t.TEXTURE_2D,c(this,V)),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,L.width,L.height,0,t.RGBA,t.UNSIGNED_BYTE,L),t.generateMipmap(t.TEXTURE_2D);const vn=je(t);if(vn!=null){const lt=t.getParameter(vn.MAX_TEXTURE_MAX_ANISOTROPY_EXT);t.texParameterf(t.TEXTURE_2D,vn.TEXTURE_MAX_ANISOTROPY_EXT,lt)}t.bindTexture(t.TEXTURE_2D,null),_(this,Q,t.getUniformBlockIndex(this.program,"Projection")),_(this,q,t.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(t){const e=document.createElement("canvas"),r=e.getContext("2d");e.width=1024,e.height=128;const i=20,s=10,l=100;r.font=`${l}px Helvetica`,r.fillStyle="#fff",r.textBaseline="middle",r.fillText(t,i,e.height/2);const{width:f}=r.measureText(t),u=i+f+40;return r.strokeStyle="#fff",r.lineWidth=5,r.beginPath(),r.moveTo(u,e.height/2),r.lineTo(e.width-s,e.height/2),r.stroke(),r.beginPath(),r.moveTo(e.width-s,e.height/2),r.lineTo(e.width-s-40,e.height/2+30),r.stroke(),r.beginPath(),r.moveTo(e.width-s,e.height/2),r.lineTo(e.width-s-40,e.height/2-30),r.stroke(),e}render(){this.gl.uniformBlockBinding(this.program,c(this,Q),0),this.gl.uniformBlockBinding(this.program,c(this,q),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,c(this,V)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}};let Ln=Dn;V=new WeakMap,Q=new WeakMap,q=new WeakMap;var J,$,Z,R;class Ke extends G{constructor(t,e,r,i,s={}){super(t,r,i,b({PI:Math.PI,IS_CUBEMAP:!0},s));h(this,J,void 0);h(this,$,void 0);h(this,Z,void 0);h(this,R,void 0);const{vertexCount:l,vertexStride:f,interleavedArray:u,indicesArray:m}=e;this.vertexCount=l;const d=t.getAttribLocation(this.program,"aPosition"),E=t.createBuffer(),T=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,E),t.bufferData(t.ARRAY_BUFFER,u,t.STATIC_DRAW),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,T),t.bufferData(t.ELEMENT_ARRAY_BUFFER,m,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_environmentMap",{type:t.INT,value:0}),_(this,J,t.getUniformBlockIndex(this.program,"Projection")),_(this,$,t.getUniformBlockIndex(this.program,"View")),_(this,Z,t.getUniformBlockIndex(this.program,"PostFX"))}get texture(){return c(this,R)}set texture(t){c(this,R)&&this.gl.deleteTexture(c(this,R)),_(this,R,t)}render(){this.gl.uniformBlockBinding(this.program,c(this,J),0),this.gl.uniformBlockBinding(this.program,c(this,$),1),this.gl.uniformBlockBinding(this.program,c(this,Z),3),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),c(this,R)&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,c(this,R))),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),c(this,R),this.gl.bindVertexArray(null)}}J=new WeakMap,$=new WeakMap,Z=new WeakMap,R=new WeakMap;var nn,tn,en,an;class Vn extends G{constructor(t,e,r,i,s){const l=b({PI:Math.PI,USE_NORMAL:!0,USE_WORLD_POS:!0,USE_PBR:!0,MAX_REFLECTION_LOD:4},s);super(t,r,i,l,"sphere");h(this,nn,void 0);h(this,tn,void 0);h(this,en,void 0);h(this,an,void 0);p(this,"irradianceMapTexture");p(this,"prefilterMapTexture");p(this,"brdfLutTexture");p(this,"albedoMap");p(this,"normalMap");p(this,"metallicMap");p(this,"roughnessMap");p(this,"aoMap");const{vertexCount:f,vertexStride:u,interleavedArray:m,indicesArray:d}=e;this.vertexCount=f;const E=t.getAttribLocation(this.program,"aPosition"),T=t.getAttribLocation(this.program,"aNormal"),g=t.createBuffer(),k=t.createBuffer();if(this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,g),t.bufferData(t.ARRAY_BUFFER,m,t.STATIC_DRAW),t.enableVertexAttribArray(E),t.vertexAttribPointer(E,3,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(T),t.vertexAttribPointer(T,3,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),s.USE_PBR_TEXTURES){const L=t.getAttribLocation(this.program,"aUv");t.enableVertexAttribArray(L),t.vertexAttribPointer(L,2,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT)}t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,k),t.bufferData(t.ELEMENT_ARRAY_BUFFER,d,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_irradianceMap",{type:t.INT,value:0}),this.setUniform("u_prefilterMap",{type:t.INT,value:1}),this.setUniform("u_brdfLUT",{type:t.INT,value:2}),s.USE_PBR_TEXTURES?(this.setUniform("u_albedoMap",{type:t.INT,value:3}),this.setUniform("u_normalMap",{type:t.INT,value:4}),this.setUniform("u_metallicMap",{type:t.INT,value:5}),this.setUniform("u_roughnessMap",{type:t.INT,value:6}),this.setUniform("u_aoMap",{type:t.INT,value:7})):this.setUniform("u_albedo",{type:t.FLOAT_VEC3,value:new Float32Array([1,1,1])}),_(this,nn,t.getUniformBlockIndex(this.program,"Projection")),_(this,tn,t.getUniformBlockIndex(this.program,"View")),_(this,en,t.getUniformBlockIndex(this.program,"Lighting")),_(this,an,t.getUniformBlockIndex(this.program,"PostFX"))}render(){!this.visible||(this.gl.uniformBlockBinding(this.program,c(this,nn),0),this.gl.uniformBlockBinding(this.program,c(this,tn),1),this.gl.uniformBlockBinding(this.program,c(this,en),2),this.gl.uniformBlockBinding(this.program,c(this,an),3),this.gl.useProgram(this.program),this.irradianceMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.irradianceMapTexture)),this.prefilterMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.prefilterMapTexture)),this.brdfLutTexture&&(this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,this.brdfLutTexture)),this.albedoMap&&(this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,this.albedoMap)),this.normalMap&&(this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,this.normalMap)),this.metallicMap&&(this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,this.metallicMap)),this.roughnessMap&&(this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,this.roughnessMap)),this.aoMap&&(this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,this.aoMap)),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.bindVertexArray(null))}}nn=new WeakMap,tn=new WeakMap,en=new WeakMap,an=new WeakMap;let An,W;class Qe extends G{constructor(t,e,r,i,s,l={}){super(t,i,s,b({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0,USE_UV:!0},l));An||(An=Nn({width:e,height:r}),W=new Sn(-e/2,e/2,r/2,-r/2,0,2),W.position=[0,0,1],W.lookAt=[0,0,0],W.updateProjectionViewMatrix());const{vertexCount:f,vertexStride:u,interleavedArray:m,indicesArray:d}=An;this.vertexCount=f;const E=t.getAttribLocation(this.program,"aPosition"),T=t.getAttribLocation(this.program,"aUv"),g=t.createBuffer(),k=t.createBuffer();t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,g),t.bufferData(t.ARRAY_BUFFER,m,t.STATIC_DRAW),t.enableVertexAttribArray(E),t.vertexAttribPointer(E,3,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(T),t.vertexAttribPointer(T,2,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,k),t.bufferData(t.ELEMENT_ARRAY_BUFFER,d,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:t.FLOAT_MAT4})}render(){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",W.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}class In extends G{constructor(t,e,r,i,s={}){super(t,r,i,b({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0},s));p(this,"texture");p(this,"envTexture");const{vertexCount:l,vertexStride:f,interleavedArray:u,indicesArray:m}=e;this.vertexCount=l;const d=t.getAttribLocation(this.program,"aPosition"),E=t.createBuffer(),T=t.createBuffer();t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,E),t.bufferData(t.ARRAY_BUFFER,u,t.STATIC_DRAW),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,T),t.bufferData(t.ELEMENT_ARRAY_BUFFER,m,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:t.FLOAT_MAT4})}render(t){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",t.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.envTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envTexture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}var qe=`#version 300 es

uniform mat4 u_projectionViewMatrix;
uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec2 aUv;

out vec2 vUv;

void main () {
  gl_Position = u_projectionViewMatrix * u_worldMatrix * aPosition;

  vUv = aUv;
}`,Je=`#version 300 es
precision highp float;

uniform sampler2D u_diffuse;

in vec2 vUv;

out vec4 finalColor;

void main () {
  finalColor = texture(u_diffuse, vUv);
}`;class $e extends G{constructor(t,e,r,i={}){super(t,qe,Je,i);p(this,"texture");const{vertexCount:s,vertexStride:l,interleavedArray:f,indicesArray:u}=Nn({width:e,height:r});this.vertexCount=s;const m=new Sn(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);m.position=[0,0,1],m.lookAt=[0,0,0],m.updateProjectionViewMatrix();const d=t.getAttribLocation(this.program,"aPosition"),E=t.getAttribLocation(this.program,"aUv"),T=t.createBuffer(),g=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,T),t.bufferData(t.ARRAY_BUFFER,f,t.STATIC_DRAW),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,3,t.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(E),t.vertexAttribPointer(E,2,t.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,g),t.bufferData(t.ELEMENT_ARRAY_BUFFER,u,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:t.INT,value:0}),this.setUniform("u_projectionViewMatrix",{type:t.FLOAT_MAT4,value:m.projectionViewMatrix})}render(){this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.texture&&this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}function rn(a){return a.map(t=>t/255)}function Wn(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}var Ze=`#version 300 es
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
}`,na=`#version 300 es
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
}`,ta=`#version 300 es
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
}`,ea=`#version 300 es
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
  
}`,zn=`#version 300 es
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
}`,aa=`#version 300 es
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
}`,Hn=`#version 300 es
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
}`,P=`#version 300 es

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
}`;const Fn=7,Un=7,pn=10,hn=10,un=4,O=512,D=512,C=1024,Yn=600;let A=null,ln=innerWidth>Yn;const Pn=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],oa=[{s3tc:o(Ut),astc:o(gt),etc1:o(bt),etc2:o(Ct),pvrtc:o(Nt)},{s3tc:o(St),astc:o(Lt),etc1:o(It),etc2:o(Bt),pvrtc:o(wt)},{s3tc:o(Ot),astc:o(Dt),etc1:o(Xt),etc2:o(yt),pvrtc:o(Vt)},{s3tc:o(Ht),astc:o(Gt),etc1:o(kt),etc2:o(Wt),pvrtc:o(zt)},{s3tc:o(Yt),astc:o(jt),etc1:o(Kt),etc2:o(Qt),pvrtc:o(qt)}],ra=[{s3tc:o(Jt),astc:o($t),etc1:o(Zt),etc2:o(ne),pvrtc:o(te)},{s3tc:o(ee),astc:o(ae),etc1:o(oe),etc2:o(re),pvrtc:o(ie)},{s3tc:o(se),astc:o(le),etc1:o(ce),etc2:o(fe),pvrtc:o(ue)},{s3tc:o(Ee),astc:o(me),etc1:o(de),etc2:o(Te),pvrtc:o(pe)},{s3tc:o(he),astc:o(_e),etc1:o(ve),etc2:o(xe),pvrtc:o(Re)}],ia=[{s3tc:o(Me),astc:o(Ae),etc1:o(Pe),etc2:o(Fe),pvrtc:o(Ue)},{s3tc:o(ge),astc:o(be),etc1:o(Ce),etc2:o(Ne),pvrtc:o(Se)},{s3tc:o(Le),astc:o(Ie),etc1:o(Be),etc2:o(we),pvrtc:o(Oe)},{s3tc:o(De),astc:o(Xe),etc1:o(ye),etc2:o(Ve),pvrtc:o(He)},{s3tc:o(Ge),astc:o(ke),etc1:o(We),etc2:o(ze),pvrtc:o(Ye)}],Bn=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],wn=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]],jn="tokyo",Kn=new Map([["mon-valley",ht],["theatre",_t],["tokyo",vt]]),on={playAnim:!0,useEnvDiffuseLight:!0,useEnvSpecularLight:!0,image:jn},Qn=new Float32Array([2]),gn=new Float32Array([16]),qn=new Float32Array([1]),Jn=new Float32Array([1]);let $n=document.getElementById("collapsable");const U=new Et.exports.Pane({title:"Parameters",expanded:innerWidth>Yn});U.registerPlugin(mt);xa();U.element.parentNode.style.setProperty("width","400px");U.addInput(on,"playAnim",{label:"Play Animation"});U.addBlade({view:"list",label:"tone mapping mode",options:Pn.map(a=>({text:a,value:a})),value:Pn[2]}).on("change",({value:a})=>{Qn[0]=Pn.indexOf(a)});U.addBlade({view:"slider",label:"point light luminance",min:0,max:50,value:gn[0]}).on("change",({value:a})=>{gn[0]=a});U.addInput(on,"useEnvDiffuseLight",{label:"use environment diffuse light"}).on("change",({value:a})=>{qn[0]=a?1:0});U.addInput(on,"useEnvSpecularLight",{label:"use environment specular light"}).on("change",({value:a})=>{Jn[0]=a});U.addInput(on,"image",{label:"environment image",view:"thumbnail-list",options:[{text:"Moonlit Golf",value:"mon-valley",src:o(xt)},{text:"Little Paris",value:"theatre",src:o(dt)},{text:"Qwantani Noon",value:"tokyo",src:o(Tt)}]}).on("change",({value:{value:a}})=>{st(Kn.get(a)).then(t=>{K=t,mn=!0})});const S=document.createElement("canvas");document.body.appendChild(S);const n=S.getContext("webgl2"),On=new Sn(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);On.position=[0,0,1];On.lookAt=[0,0,0];On.updateProjectionViewMatrix();const v=new kn(45*Math.PI/180,innerWidth/innerHeight,.1,100);v.position=[10.84,-.17,8.98];v.lookAt=[0,0,0];v.updateProjectionMatrix();new Rt(v,S,!1,Wn()?2:.85);const x=new kn(90*Math.PI/180,1,.1,10).updateProjectionMatrix(),sn=Mt({radius:.5,widthSegments:32,heightSegments:32}),H=Nn({width:5,height:5/8}),_n=At({flipUVy:!0}),M=new Pt,Gn={POINT_LIGHTS_COUNT:un.toString()},En=[],sa=pn/Fn,la=hn/Un;for(let a=0;a<Un;a++)for(let t=0;t<Fn;t++){const e=t*sa-pn/2+sn.radius,r=a*la-hn/2+sn.radius,i=new Vn(n,sn,P,Hn,Gn);i.setPosition([e,r,-5]);const s=a/(Un-1);i.setUniform("u_metallic",{type:n.FLOAT,value:s});const l=Math.max(.04,t/(Fn-1));i.setUniform("u_roughness",{type:n.FLOAT,value:l}),M.addChild(i),En.push(i);const f=new Vn(n,sn,P,Hn,b({USE_PBR_TEXTURES:!0,USE_UV:!0},Gn));f.setPosition([e,r,5]),M.addChild(f),En.push(f)}const Zn=new Ln(n,"roughness",H,P,zn);Zn.setPosition([-pn/2+H.width/2,-hn/2-H.height,-5]);M.addChild(Zn);const nt=new Ln(n,"metallic",H,P,zn);nt.setPosition([-pn/2-H.height,-hn/2+H.width/2,-5]).setRotation([0,0,Math.PI*.5]);M.addChild(nt);const cn=dn(n,M.children[0].program,"Projection",["projMatrix","zNear","zFar"]),ca=Tn(n,cn.blockSize,0),fn=dn(n,M.children[0].program,"View",["viewMatrix","cameraPosition","time"]),fa=Tn(n,fn.blockSize,1),N=dn(n,M.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","diffuseEnvLightMixFactor","specularEnvLightMixFactor"]),ua=Tn(n,N.blockSize,2),tt=dn(n,M.children[0].program,"PostFX",["tonemappingMode"]),Ea=Tn(n,tt.blockSize,3),Y=[],et=[],at=[],ma=[rn([243,156,18]),rn([41,128,185]),rn([192,57,43]),rn([142,68,173])];for(let a=0;a<un;a++){Y.push(new Float32Array(3));const t=ma[a];et.push(new Float32Array(t));const e=new Ft(n);e.color=[...t,1],M.addChild(e),at.push(e)}const bn=new In(n,_n,P,ea);bn.setUniform("u_equirectangularMap",{type:n.INT,value:0});const Cn=new In(n,_n,P,na);Cn.setUniform("u_environmentMap",{type:n.INT,value:0});const j=new In(n,_n,P,ta,{CUBEMAP_SIDE_SIZE:C});j.setUniform("u_environmentMap",{type:n.INT,value:0});j.setUniform("u_roughness",{type:n.FLOAT,value:0});const da=new Qe(n,O,D,P,Ze),ot=new Ke(n,_n,P,aa),Ta=new $e(n,O,D);{const t=O*.2,e=D*.2,r=24;Ta.setPosition([-innerWidth/2+t/2+r,-innerHeight/2+e/2+r,0]).setScale([.2,.2,1]).updateWorldMatrix()}n.getExtension("EXT_color_buffer_half_float");n.getExtension("EXT_color_buffer_float");n.getExtension("OES_texture_half_float");n.getExtension("OES_texture_half_float_linear");let mn=!1,K;st(Kn.get(jn)).then(a=>{K=a,mn=!0});Promise.all([Promise.all(oa.map((a,t)=>Rn(n,a))),Promise.all(ra.map((a,t)=>Rn(n,a))),Promise.all(ia.map((a,t)=>Rn(n,a)))]).then(a=>{let t=0;for(const e of En){const r=a[t];e.albedoMap=r[0],e.normalMap=r[1],e.metallicMap=r[2],e.roughnessMap=r[3],e.aoMap=r[4],t++,t===3&&(t=0)}});requestAnimationFrame(rt);it();window.addEventListener("resize",it);window.addEventListener("DOMContentLoaded",()=>{document.getElementById("header").style.display="block";var a=Wn()?document.getElementById("instructions-touch"):document.getElementById("instructions-desktop");a.style.display="block",ln&&($n.style.display="block")});document.getElementById("info-icon").addEventListener("click",()=>{ln=!ln,$n.style.display=ln?"block":"none"});function rt(a){if(requestAnimationFrame(rt),mn&&(A={width:K.width,height:K.height,imageData:K.dataFloat,step:0,maxSteps:3},mn=!1),A){if(A.step===0)pa(A);else if(A.step===10)ha();else if(A.step===20)_a();else if(A.step===30){va(),A=null;return}A.step++;return}if(n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),v.updateViewMatrix(),n.bindBuffer(n.UNIFORM_BUFFER,ca),n.bufferSubData(n.UNIFORM_BUFFER,cn.uniforms.projMatrix.offset,v.projectionMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,cn.uniforms.zNear.offset,new Float32Array([v.near]),0),n.bufferSubData(n.UNIFORM_BUFFER,cn.uniforms.zFar.offset,new Float32Array([v.far]),0),n.bindBuffer(n.UNIFORM_BUFFER,fa),n.bufferSubData(n.UNIFORM_BUFFER,fn.uniforms.viewMatrix.offset,v.viewMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,fn.uniforms.cameraPosition.offset,new Float32Array(v.position),0),n.bufferSubData(n.UNIFORM_BUFFER,fn.uniforms.time.offset,new Float32Array([a]),0),n.bindBuffer(n.UNIFORM_BUFFER,ua),on.playAnim){const t=a*.001;for(let e=0;e<un;e++){const r=Math.PI*2/un,i=[Math.cos(e*r+t)*(Math.sin(t)*2+4),Math.sin(e*r+t)*(Math.sin(t)*2+4),Math.cos(t)*3];Y[e][0]=i[0],Y[e][1]=i[1],Y[e][2]=i[2],at[e].setPosition(i).updateWorldMatrix(),n.bufferSubData(n.UNIFORM_BUFFER,N.uniforms.pointLightPositions.offset+e*N.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,Y[e],0),n.bufferSubData(n.UNIFORM_BUFFER,N.uniforms.pointLightColors.offset+e*4*Float32Array.BYTES_PER_ELEMENT,et[e],0)}}n.bufferSubData(n.UNIFORM_BUFFER,N.uniforms.pointLightIntensity.offset,gn,0),n.bufferSubData(n.UNIFORM_BUFFER,N.uniforms.diffuseEnvLightMixFactor.offset,qn,0),n.bufferSubData(n.UNIFORM_BUFFER,N.uniforms.specularEnvLightMixFactor.offset,Jn,0),n.bindBuffer(n.UNIFORM_BUFFER,Ea),n.bufferSubData(n.UNIFORM_BUFFER,tt.uniforms.tonemappingMode.offset,Qn),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.clearColor(.1,.1,.1,1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),n.depthFunc(n.LEQUAL),ot.render(),n.depthFunc(n.LESS),M.updateWorldMatrix().render()}var z,F,B,w,I;let X=null,y=null;function pa(a){const{width:t,height:e,imageData:r}=a;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),z&&n.deleteTexture(z),z=n.createTexture(),n.bindTexture(n.TEXTURE_2D,z),n.texImage2D(n.TEXTURE_2D,0,n.RGB9_E5,t,e,0,n.RGB,n.FLOAT,r),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.bindTexture(n.TEXTURE_2D,null),bn.texture=z,X||(X=n.createFramebuffer(),y=n.createRenderbuffer()),n.bindFramebuffer(n.FRAMEBUFFER,X),n.bindRenderbuffer(n.RENDERBUFFER,y),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,C,C),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y),F&&n.deleteTexture(F),F=n.createTexture(),n.bindTexture(n.TEXTURE_CUBE_MAP,F);for(let i=0;i<6;i++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,n.RGBA16F,C,C,0,n.RGBA,n.HALF_FLOAT,null);n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.viewport(0,0,C,C);for(let i=0;i<6;i++)n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+i,F,0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),x.lookAt=Bn[i],x.upVector=wn[i],x.updateViewMatrix().updateProjectionViewMatrix(),bn.render(x);n.generateMipmap(n.TEXTURE_CUBE_MAP),n.bindFramebuffer(n.FRAMEBUFFER,null)}function ha(){Cn.envTexture=F;const a=32;B&&n.deleteTexture(B),B=n.createTexture(),n.bindTexture(n.TEXTURE_CUBE_MAP,B);for(let t=0;t<6;t++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,n.RGBA16F,a,a,0,n.RGBA,n.HALF_FLOAT,null);n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.bindFramebuffer(n.FRAMEBUFFER,X),n.bindRenderbuffer(n.RENDERBUFFER,y),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,a,a),n.viewport(0,0,a,a);for(let t=0;t<6;t++)n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+t,B,0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),x.lookAt=Bn[t],x.upVector=wn[t],x.updateViewMatrix().updateProjectionViewMatrix(),Cn.render(x);n.bindFramebuffer(n.FRAMEBUFFER,null)}function _a(){w&&n.deleteTexture(w);const a=128;w=n.createTexture(),n.bindTexture(n.TEXTURE_CUBE_MAP,w);for(let e=0;e<6;e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,n.RGBA16F,a,a,0,n.RGBA,n.HALF_FLOAT,null);n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.generateMipmap(n.TEXTURE_CUBE_MAP),j.envTexture=F,n.bindFramebuffer(n.FRAMEBUFFER,X);const t=5;for(let e=0;e<t;e++){const r=a*Math.pow(.5,e),i=a*Math.pow(.5,e);n.bindRenderbuffer(n.RENDERBUFFER,y),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,r,i),n.viewport(0,0,r,i);const s=e/(t-1);j.updateUniform("u_roughness",s);for(let l=0;l<6;l++)x.lookAt=Bn[l],x.upVector=wn[l],x.updateViewMatrix().updateProjectionViewMatrix(),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+l,w,e),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),j.render(x)}n.bindFramebuffer(n.FRAMEBUFFER,null)}function va(){I&&n.deleteTexture(I),I=n.createTexture(),n.bindTexture(n.TEXTURE_2D,I),n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,O,D,0,n.RGBA,n.HALF_FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.bindFramebuffer(n.FRAMEBUFFER,X),n.bindRenderbuffer(n.RENDERBUFFER,y),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,O,D),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0),n.viewport(0,0,O,D),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),da.render(),n.bindFramebuffer(n.FRAMEBUFFER,null),ot.texture=F;for(const a of En)a.irradianceMapTexture=B,a.prefilterMapTexture=w,a.brdfLutTexture=I}function it(){v.aspect=innerWidth/innerHeight,v.updateProjectionMatrix(),S.width=innerWidth*devicePixelRatio,S.height=innerHeight*devicePixelRatio,S.style.setProperty("width",`${innerWidth}px`),S.style.setProperty("height",`${innerHeight}px`)}function xa(){const a=`
    .tp-thumbv_ovl .tp-thumbv_opt:first-of-type {
      display: none !important;
    }
    .tp-thumbv_thmb, .tp-thumbv_sthmb {
      background-size: cover !important;
    }
  `,t=document.createElement("style");t.setAttribute("type","text/css"),"textContent"in t?t.textContent=a:t.styleSheet.cssText=a,document.getElementsByTagName("head")[0].appendChild(t)}function st(a){return new Promise(t=>{const e=new pt;e.src=o(a),e.onload=()=>{t(e)}})}function o(a){return window.BASE_URL?`${window.BASE_URL}/assets/${a}`:a}
