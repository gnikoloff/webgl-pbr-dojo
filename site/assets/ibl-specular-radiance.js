var In=Object.defineProperty;var cn=Object.getOwnPropertySymbols;var Nn=Object.prototype.hasOwnProperty,Cn=Object.prototype.propertyIsEnumerable;var Q=(o,t,e)=>t in o?In(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,U=(o,t)=>{for(var e in t||(t={}))Nn.call(t,e)&&Q(o,e,t[e]);if(cn)for(var e of cn(t))Cn.call(t,e)&&Q(o,e,t[e]);return o};var w=(o,t,e)=>(Q(o,typeof t!="symbol"?t+"":t,e),e),fn=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)};var l=(o,t,e)=>(fn(o,t,"read from private field"),e?e.call(o):t.get(o)),u=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},m=(o,t,e,a)=>(fn(o,t,"write to private field"),a?a.call(o,e):t.set(o,e),e);import{t as On,T as Dn}from"./assets/vendor.adb55ed6.js";import{s as yn,a as Xn,H as dn,h as hn,b as Vn,c as Hn,d as Gn}from"./assets/Tokyo_BigSight_thumb.7fba0df9.js";import{D as W,O as kn,P as pn,C as Wn,c as zn,a as jn,e as Yn,S as Kn,b as z,d as j,L as qn}from"./assets/light-debug.02ff1224.js";var B,L,I,N;class $n extends W{constructor(t,e,a,i,s){super(t,a,i,U({PI:Math.PI,USE_NORMAL:!0,USE_WORLD_POS:!0,USE_PBR:!0},s),"sphere");u(this,B,void 0);u(this,L,void 0);u(this,I,void 0);u(this,N,void 0);w(this,"irradianceMapTexture");w(this,"envMapTexture");const{vertexCount:c,vertexStride:f,interleavedArray:r,indicesArray:E}=e;this.vertexCount=c;const h=t.getAttribLocation(this.program,"aPosition"),x=t.getAttribLocation(this.program,"aNormal"),T=t.createBuffer(),q=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,T),t.bufferData(t.ARRAY_BUFFER,r,t.STATIC_DRAW),t.enableVertexAttribArray(h),t.vertexAttribPointer(h,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(x),t.vertexAttribPointer(x,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,q),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_albedo",{type:t.FLOAT_VEC3,value:new Float32Array([1,0,0])}),this.setUniform("u_irradianceMap",{type:t.INT,value:0}),m(this,B,t.getUniformBlockIndex(this.program,"Projection")),m(this,L,t.getUniformBlockIndex(this.program,"View")),m(this,I,t.getUniformBlockIndex(this.program,"Lighting")),m(this,N,t.getUniformBlockIndex(this.program,"PostFX"))}render(){!this.visible||(this.gl.uniformBlockBinding(this.program,l(this,B),0),this.gl.uniformBlockBinding(this.program,l(this,L),1),this.gl.uniformBlockBinding(this.program,l(this,I),2),this.gl.uniformBlockBinding(this.program,l(this,N),3),this.gl.useProgram(this.program),this.irradianceMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.irradianceMapTexture)),this.envMapTexture&&(this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envMapTexture)),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,null),this.gl.bindVertexArray(null))}}B=new WeakMap,L=new WeakMap,I=new WeakMap,N=new WeakMap;var g,C,O;const ln=class extends W{constructor(t,e,a,i,s,c){super(t,i,s,U({PI:Math.PI,USE_UV:!0},c));u(this,g,void 0);u(this,C,void 0);u(this,O,void 0);const{vertexCount:f,vertexStride:r,interleavedArray:E,indicesArray:h}=a;this.vertexCount=f;const x=t.getAttribLocation(this.program,"aPosition"),T=t.getAttribLocation(this.program,"aUv"),q=t.createBuffer(),Ln=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,q),t.bufferData(t.ARRAY_BUFFER,E,t.STATIC_DRAW),t.enableVertexAttribArray(x),t.vertexAttribPointer(x,3,t.FLOAT,!1,r*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(T),t.vertexAttribPointer(T,2,t.FLOAT,!1,r*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,Ln),t.bufferData(t.ELEMENT_ARRAY_BUFFER,h,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:t.INT,value:0});const $=ln.createTextCanvas(e);m(this,g,t.createTexture()),t.bindTexture(t.TEXTURE_2D,l(this,g)),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,$.width,$.height,0,t.RGBA,t.UNSIGNED_BYTE,$),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),m(this,C,t.getUniformBlockIndex(this.program,"Projection")),m(this,O,t.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(t){const e=document.createElement("canvas"),a=e.getContext("2d");e.width=1024,e.height=128;const i=20,s=10,c=100;a.font=`${c}px Helvetica`,a.fillStyle="#fff",a.textBaseline="middle",a.fillText(t,i,e.height/2);const{width:f}=a.measureText(t),r=i+f+40;return a.strokeStyle="#fff",a.lineWidth=5,a.beginPath(),a.moveTo(r,e.height/2),a.lineTo(e.width-s,e.height/2),a.stroke(),a.beginPath(),a.moveTo(e.width-s,e.height/2),a.lineTo(e.width-s-40,e.height/2+30),a.stroke(),a.beginPath(),a.moveTo(e.width-s,e.height/2),a.lineTo(e.width-s-40,e.height/2-30),a.stroke(),e}render(){this.gl.uniformBlockBinding(this.program,l(this,C),0),this.gl.uniformBlockBinding(this.program,l(this,O),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,l(this,g)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}};let an=ln;g=new WeakMap,C=new WeakMap,O=new WeakMap;class En extends W{constructor(t,e,a,i,s={}){super(t,a,i,U({PI:Math.PI,USE_UNIQUE_PROJECTION_VIEW_MATRIX:!0},s));w(this,"texture");w(this,"envTexture");const{vertexCount:c,vertexStride:f,interleavedArray:r,indicesArray:E}=e;this.vertexCount=c;const h=t.getAttribLocation(this.program,"aPosition"),x=t.createBuffer(),T=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,x),t.bufferData(t.ARRAY_BUFFER,r,t.STATIC_DRAW),t.enableVertexAttribArray(h),t.vertexAttribPointer(h,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,T),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_projectionViewMatrix",{type:t.FLOAT_MAT4})}render(t){this.gl.useProgram(this.program),this.updateUniform("u_projectionViewMatrix",t.projectionViewMatrix),this.gl.bindVertexArray(this.vao),this.texture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)),this.envTexture&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,this.envTexture)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}var D,y,X,p;class Qn extends W{constructor(t,e,a,i,s={}){super(t,a,i,U({PI:Math.PI,IS_CUBEMAP:!0},s));u(this,D,void 0);u(this,y,void 0);u(this,X,void 0);u(this,p,void 0);const{vertexCount:c,vertexStride:f,interleavedArray:r,indicesArray:E}=e;this.vertexCount=c;const h=t.getAttribLocation(this.program,"aPosition"),x=t.createBuffer(),T=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,x),t.bufferData(t.ARRAY_BUFFER,r,t.STATIC_DRAW),t.enableVertexAttribArray(h),t.vertexAttribPointer(h,3,t.FLOAT,!1,f*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,T),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_environmentMap",{type:t.INT,value:0}),m(this,D,t.getUniformBlockIndex(this.program,"Projection")),m(this,y,t.getUniformBlockIndex(this.program,"View")),m(this,X,t.getUniformBlockIndex(this.program,"PostFX"))}get texture(){return l(this,p)}set texture(t){l(this,p)&&this.gl.deleteTexture(l(this,p)),m(this,p,t)}render(){this.gl.uniformBlockBinding(this.program,l(this,D),0),this.gl.uniformBlockBinding(this.program,l(this,y),1),this.gl.uniformBlockBinding(this.program,l(this,X),3),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),l(this,p)&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,l(this,p))),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),l(this,p),this.gl.bindVertexArray(null)}}D=new WeakMap,y=new WeakMap,X=new WeakMap,p=new WeakMap;var M=`#version 300 es

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
}`,Jn=`#version 300 es
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
}`,Zn=`#version 300 es
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
}`,nt=`#version 300 es
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
}`,xn=`#version 300 es
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
}`,tt=`#version 300 es
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
}`;const V=7,nn=7,Y=10,K=10,k=4,J=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],un=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],mn=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]],et=new Map([["mon-valley",hn],["theatre",Vn],["tokyo",Hn]]),_n={useDiffuseLight:!0,image:"mon-valley"},Tn=new Float32Array([2]),vn=new Float32Array([40]),Rn=new Float32Array([1]),F=new On.exports.Pane;F.registerPlugin(Dn);ft();F.element.parentNode.style.setProperty("width","400px");F.addBlade({view:"list",label:"tone mapping mode",options:J.map(o=>({text:o,value:o})),value:J[2]}).on("change",({value:o})=>{Tn[0]=J.indexOf(o)});F.addBlade({view:"slider",label:"point light luminance",min:0,max:50,value:20}).on("change",({value:o})=>{vn[0]=o});F.addInput(_n,"useDiffuseLight",{label:"use environment diffuse light"}).on("change",({value:o})=>{Rn[0]=o?1:0});F.addInput(_n,"image",{label:"environment image",view:"thumbnail-list",options:[{text:"MonValley Lookout",value:"mon-valley",src:b(Gn)},{text:"Theatre Center",value:"theatre",src:b(yn)},{text:"Tokyo BigSight",value:"tokyo",src:b(Xn)}]}).on("change",({value:{value:o}})=>{const t=new dn;t.onload=()=>{bn(t)},t.src=b(et.get(o))});const R=document.createElement("canvas");document.body.appendChild(R);const n=R.getContext("webgl2"),rn=new kn(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);rn.position=[0,0,1];rn.lookAt=[0,0,0];rn.updateProjectionViewMatrix();const d=new pn(45*Math.PI/180,innerWidth/innerHeight,.1,100);d.position=[5.43,.2,14.06];d.lookAt=[0,0,0];d.updateProjectionMatrix();new Wn(d,R,!1);const v=new pn(90*Math.PI/180,1,.1,10).updateProjectionMatrix(),Z=zn({radius:.5,widthSegments:32,heightSegments:32}),A=jn({width:5,height:5/8}),sn=Yn({flipUVy:!0}),_=new Kn,ot={POINT_LIGHTS_COUNT:k.toString()},Pn=[],at=Y/V,rt=K/nn;for(let o=0;o<nn;o++)for(let t=0;t<V;t++){const e=new $n(n,Z,M,nt,ot);e.setPosition([t*at-Y/2+Z.radius,o*rt-K/2+Z.radius,0]);const a=o/nn;e.setUniform("u_metallic",{type:n.FLOAT,value:a});const i=1/V+t/V;e.setUniform("u_roughness",{type:n.FLOAT,value:i}),_.addChild(e),Pn.push(e)}const gn=new an(n,"roughness",A,M,xn);gn.setPosition([-Y/2+A.width/2,-K/2-A.height,0]);_.addChild(gn);const An=new an(n,"metallic",A,M,xn);An.setPosition([-Y/2-A.height,-K/2+A.width/2,0]).setRotation([0,0,Math.PI*.5]);_.addChild(An);const H=z(n,_.children[0].program,"Projection",["projMatrix","zNear","zFar"]),it=j(n,H.blockSize,0),G=z(n,_.children[0].program,"View",["viewMatrix","cameraPosition","time"]),st=j(n,G.blockSize,1),P=z(n,_.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","diffuseLightMixFactor"]),lt=j(n,P.blockSize,2),Mn=z(n,_.children[0].program,"PostFX",["tonemappingMode"]),ct=j(n,Mn.blockSize,3),S=[],Fn=[],Un=[];for(let o=0;o<k;o++){S.push(new Float32Array(3));const t=[Math.random(),Math.random(),Math.random()];Fn.push(new Float32Array(t));const e=new qn(n);e.color=[...t,1],_.addChild(e),Un.push(e)}const tn=new En(n,sn,M,Zn);tn.setUniform("u_equirectangularMap",{type:n.INT,value:0});const en=new En(n,sn,M,tt);en.setUniform("u_environmentMap",{type:n.INT,value:0});const wn=new Qn(n,sn,M,Jn);n.getExtension("EXT_color_buffer_float");const on=new dn;on.src=b(hn);on.onload=()=>{bn(on)};requestAnimationFrame(Sn);Bn();window.addEventListener("resize",Bn);function Sn(o){requestAnimationFrame(Sn),d.updateViewMatrix(),n.bindBuffer(n.UNIFORM_BUFFER,it),n.bufferSubData(n.UNIFORM_BUFFER,H.uniforms.projMatrix.offset,d.projectionMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,H.uniforms.zNear.offset,new Float32Array([d.near]),0),n.bufferSubData(n.UNIFORM_BUFFER,H.uniforms.zFar.offset,new Float32Array([d.far]),0),n.bindBuffer(n.UNIFORM_BUFFER,st),n.bufferSubData(n.UNIFORM_BUFFER,G.uniforms.viewMatrix.offset,d.viewMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,G.uniforms.cameraPosition.offset,new Float32Array(d.position),0),n.bufferSubData(n.UNIFORM_BUFFER,G.uniforms.time.offset,new Float32Array([o]),0),n.bindBuffer(n.UNIFORM_BUFFER,lt);const t=o*.001;for(let e=0;e<k;e++){const a=Math.PI*2/k,i=[Math.cos(e*a+t)*(Math.sin(t)*3+6),Math.sin(e*a+t)*(Math.sin(t)*3+6),Math.cos(t)*10];S[e][0]=i[0],S[e][1]=i[1],S[e][2]=i[2],Un[e].setPosition(i).updateWorldMatrix(),n.bufferSubData(n.UNIFORM_BUFFER,P.uniforms.pointLightPositions.offset+e*P.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,S[e],0),n.bufferSubData(n.UNIFORM_BUFFER,P.uniforms.pointLightColors.offset+e*4*Float32Array.BYTES_PER_ELEMENT,Fn[e],0)}n.bufferSubData(n.UNIFORM_BUFFER,P.uniforms.pointLightIntensity.offset,vn,0),n.bufferSubData(n.UNIFORM_BUFFER,P.uniforms.diffuseLightMixFactor.offset,Rn,0),n.bindBuffer(n.UNIFORM_BUFFER,ct),n.bufferSubData(n.UNIFORM_BUFFER,Mn.uniforms.tonemappingMode.offset,Tn),n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.clearColor(.1,.1,.1,1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),n.depthFunc(n.LEQUAL),wn.render(),n.depthFunc(n.LESS),_.updateWorldMatrix().render()}function bn(o){const t=n.createTexture();n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,n.RGB9_E5,o.width,o.height,0,n.RGB,n.FLOAT,o.dataFloat),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.bindTexture(n.TEXTURE_2D,null),tn.texture=t;const e=n.createFramebuffer(),a=1024;n.bindFramebuffer(n.FRAMEBUFFER,e);const i=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,i),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,a,a),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,i);const s=n.createTexture();n.bindTexture(n.TEXTURE_CUBE_MAP,s);for(let r=0;r<6;r++){const E=n.TEXTURE_CUBE_MAP_POSITIVE_X+r;n.texImage2D(E,0,n.RGBA16F,a,a,0,n.RGBA,n.FLOAT,null),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR)}n.bindFramebuffer(n.FRAMEBUFFER,e),n.viewport(0,0,a,a);for(let r=0;r<6;r++)n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+r,s,0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),v.lookAt=un[r],v.upVector=mn[r],v.updateViewMatrix().updateProjectionViewMatrix(),tn.render(v);en.envTexture=s;const c=32,f=n.createTexture();n.bindTexture(n.TEXTURE_CUBE_MAP,f);for(let r=0;r<6;r++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,n.RGBA16F,c,c,0,n.RGBA,n.FLOAT,null);n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,n.LINEAR),n.bindRenderbuffer(n.RENDERBUFFER,i),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,c,c),n.viewport(0,0,c,c);for(let r=0;r<6;r++)n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+r,f,0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),v.lookAt=un[r],v.upVector=mn[r],v.updateViewMatrix().updateProjectionViewMatrix(),en.render(v);n.bindFramebuffer(n.FRAMEBUFFER,null),wn.texture=s;for(const r of Pn)r.irradianceMapTexture=f;n.deleteTexture(t),n.deleteFramebuffer(e),n.deleteRenderbuffer(i)}function Bn(){d.aspect=innerWidth/innerHeight,d.updateProjectionMatrix(),R.width=innerWidth*devicePixelRatio,R.height=innerHeight*devicePixelRatio,R.style.setProperty("width",`${innerWidth}px`),R.style.setProperty("height",`${innerHeight}px`)}function ft(){const o=`
    .tp-thumbv_ovl .tp-thumbv_opt:first-of-type {
      display: none !important;
    }
    .tp-thumbv_thmb, .tp-thumbv_sthmb {
      background-size: cover !important;
    }
  `,t=document.createElement("style");t.setAttribute("type","text/css"),"textContent"in t?t.textContent=o:t.styleSheet.cssText=o,document.getElementsByTagName("head")[0].appendChild(t)}function b(o){return window.BASE_URL?`${window.BASE_URL}/assets/${o}`:o}
