var J=Object.defineProperty;var B=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var E=(o,t,n)=>t in o?J(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,I=(o,t)=>{for(var n in t||(t={}))Z.call(t,n)&&E(o,n,t[n]);if(B)for(var n of B(t))tt.call(t,n)&&E(o,n,t[n]);return o};var O=(o,t,n)=>(E(o,typeof t!="symbol"?t+"":t,n),n),y=(o,t,n)=>{if(!t.has(o))throw TypeError("Cannot "+n)};var h=(o,t,n)=>(y(o,t,"read from private field"),n?n.call(o):t.get(o)),v=(o,t,n)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,n)},S=(o,t,n,r)=>(y(o,t,"write to private field"),r?r.call(o,n):t.set(o,n),n);import{t as nt}from"./assets/vendor.42929781.js";import{D as at,O as ot,P as et,C as rt,c as st,S as it,b as w,d as F,L as ct}from"./assets/light-debug.7af984de.js";import{a as lt,b as mt,c as ft,d as pt,e as dt,n as ut,f as ht,g as vt,h as St,i as xt,m as Mt,j as Tt,k as At,l as Et,o as gt,r as Pt,p as _t,q as Ct,s as wt,t as Ft,u as bt,v as Nt,w as Rt,x as Lt,y as Ut,z as Bt,A as It,B as Ot,C as yt,D as Dt,E as Vt,F as Ht,G as Gt,H as kt,I as Wt,J as zt,K as Xt,L as jt,M as Yt,N as Qt,O as $t,P as qt,Q as Kt,R as Jt,S as Zt,T as tn,U as nn,V as an,W as on,X as en,Y as rn,Z as sn,_ as cn,$ as ln,a0 as mn,a1 as fn,a2 as pn,a3 as dn,a4 as un,a5 as hn,a6 as vn,a7 as Sn,a8 as xn,a9 as Mn,aa as Tn,ab as An,ac as En,ad as gn,ae as Pn,af as _n,ag as Cn,ah as wn,ai as Fn,aj as bn,ak as Nn,al as g}from"./assets/leafy-grass2-roughness_pvrtc.f5f82fe7.js";var Rn=`#version 300 es

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

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float tonemappingMode;
  };
#endif

uniform mat4 u_worldMatrix;

in vec4 aPosition;
in vec3 aNormal;
in vec2 aUv;

out vec3 vNormal;
out vec2 vUv;
out vec3 vWorldPos;

void main () {
  vec4 worldPos = u_worldMatrix * aPosition;
  gl_Position = projMatrix * viewMatrix * worldPos;

  vNormal = mat3(u_worldMatrix) * aNormal;
  vUv = aUv;
  vWorldPos = worldPos.xyz;
}`,Ln=`#version 300 es
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

#ifdef USE_PBR
  uniform Lighting {
    vec3 pointLightPositions[POINT_LIGHTS_COUNT];
    vec3 pointLightColors[POINT_LIGHTS_COUNT];
    float pointLightIntensity;
    float tonemappingMode;
  };
#endif

vec3 fresnelSchlick(float cosTheta, vec3 F0) {
  return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
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

#ifdef USE_PBR
  uniform sampler2D u_albedoMap;
  uniform sampler2D u_normalMap;
  uniform sampler2D u_metallicMap;
  uniform sampler2D u_roughnessMap;
  uniform sampler2D u_aoMap;
#endif

#ifdef USE_DIFFUSE_ONLY
  uniform sampler2D u_diffuse;
#endif

in vec3 vNormal;
in vec2 vUv;
in vec3 vWorldPos;

out vec4 finalColor;

void main () {

  #ifdef USE_PBR
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec3 N = getNormalFromMap(u_normalMap, vUv, normalize(vNormal), vWorldPos);
    vec3 albedo = texture(u_albedoMap, vUv).rgb;
    float metallic = texture(u_metallicMap, vUv).r;
    float roughness = texture(u_roughnessMap, vUv).r;
    float ao = texture(u_aoMap, vUv).r;

    finalColor = vec4(N, 1.0);

    vec3 F0 = vec3(0.04); 
    F0 = mix(F0, albedo, metallic);
    vec3 Lo = vec3(0.0);
    
    for (int i = 0; i < POINT_LIGHTS_COUNT; i++) {
        
        vec3 L = normalize(pointLightPositions[i] - vWorldPos);
        vec3 H = normalize(V + L);
        float distance    = length(pointLightPositions[i] - vWorldPos);
        float attenuation = pointLightIntensity / (distance * distance);
        vec3 radiance     = pointLightColors[i] * attenuation;        
        
        
        float NDF = DistributionGGX(N, H, roughness);
        float G   = GeometrySmith(N, V, L, roughness);
        vec3 F    = fresnelSchlick(max(dot(H, V), 0.0), F0);
        
        vec3 kS = F;
        vec3 kD = vec3(1.0) - kS;
        kD *= 1.0 - metallic;	  
        
        vec3 numerator    = NDF * G * F;
        float denominator = 4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.0001;
        vec3 specular     = numerator / denominator;  
            
        
        float NdotL = max(dot(N, L), 0.0);                
        Lo += (kD * albedo / PI + specular) * radiance * NdotL; 
    }

    
    Lo = mix(
      aces(Lo),
      mix(
        tonemapFilmic(Lo),
        mix(
          lottes(Lo),
          mix(
            reinhard(Lo),
            mix(
              reinhard2(Lo),
              mix(
                uchimura(Lo),
                mix(
                  uncharted2(Lo),
                  unreal(Lo),
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
    
    
    Lo = pow(Lo, vec3(1.0/2.2)); 

    vec3 ambient = vec3(0.1) * albedo * ao;
    
    vec3 color = ambient + Lo;
    finalColor = vec4(color, 1.0);

    
  #else

    finalColor = texture(u_diffuse, vUv, -0.5);
  

  #endif
}`,p,d,u;class Un extends at{constructor(t,n,r){super(t,Rn,Ln,I({USE_PBR:!0,PI:Math.PI},r),"sphere");v(this,p,void 0);v(this,d,void 0);v(this,u,void 0);O(this,"textures",[]);const{vertexCount:i,vertexStride:A,interleavedArray:Q,indicesArray:$}=n;this.vertexCount=i;const R=t.getAttribLocation(this.program,"aPosition"),L=t.getAttribLocation(this.program,"aNormal"),U=t.getAttribLocation(this.program,"aUv"),q=t.createBuffer(),K=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,q),t.bufferData(t.ARRAY_BUFFER,Q,t.STATIC_DRAW),t.enableVertexAttribArray(R),t.vertexAttribPointer(R,3,t.FLOAT,!1,A*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(L),t.vertexAttribPointer(L,3,t.FLOAT,!1,A*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(U),t.vertexAttribPointer(U,2,t.FLOAT,!1,A*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,K),t.bufferData(t.ELEMENT_ARRAY_BUFFER,$,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),S(this,p,t.getUniformBlockIndex(this.program,"Projection")),S(this,d,t.getUniformBlockIndex(this.program,"View")),S(this,u,t.getUniformBlockIndex(this.program,"Lighting"))}render(){this.gl.uniformBlockBinding(this.program,h(this,p),0),this.gl.uniformBlockBinding(this.program,h(this,d),1),this.gl.uniformBlockBinding(this.program,h(this,u),2);for(const[t,n]of this.textures.entries())this.gl.activeTexture(this.gl.TEXTURE0+t),this.gl.bindTexture(this.gl.TEXTURE_2D,n);this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}p=new WeakMap,d=new WeakMap,u=new WeakMap;const D=7,V=7,H=10,G=10,T=1,P=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],Bn=[{s3tc:transformAssetSrc(lt),astc:transformAssetSrc(mt),etc1:transformAssetSrc(ft),etc2:transformAssetSrc(pt),pvrtc:transformAssetSrc(dt)},{s3tc:transformAssetSrc(ut),astc:transformAssetSrc(ht),etc1:transformAssetSrc(vt),etc2:transformAssetSrc(St),pvrtc:transformAssetSrc(xt)},{s3tc:transformAssetSrc(Mt),astc:transformAssetSrc(Tt),etc1:transformAssetSrc(At),etc2:transformAssetSrc(Et),pvrtc:transformAssetSrc(gt)},{s3tc:transformAssetSrc(Pt),astc:transformAssetSrc(_t),etc1:transformAssetSrc(Ct),etc2:transformAssetSrc(wt),pvrtc:transformAssetSrc(Ft)},{s3tc:transformAssetSrc(bt),astc:transformAssetSrc(Nt),etc1:transformAssetSrc(Rt),etc2:transformAssetSrc(Lt),pvrtc:transformAssetSrc(Ut)}],In=[{s3tc:transformAssetSrc(Bt),astc:transformAssetSrc(It),etc1:transformAssetSrc(Ot),etc2:transformAssetSrc(yt),pvrtc:transformAssetSrc(Dt)},{s3tc:transformAssetSrc(Vt),astc:transformAssetSrc(Ht),etc1:transformAssetSrc(Gt),etc2:transformAssetSrc(kt),pvrtc:transformAssetSrc(Wt)},{s3tc:transformAssetSrc(zt),astc:transformAssetSrc(Xt),etc1:transformAssetSrc(jt),etc2:transformAssetSrc(Yt),pvrtc:transformAssetSrc(Qt)},{s3tc:transformAssetSrc($t),astc:transformAssetSrc(qt),etc1:transformAssetSrc(Kt),etc2:transformAssetSrc(Jt),pvrtc:transformAssetSrc(Zt)},{s3tc:transformAssetSrc(tn),astc:transformAssetSrc(nn),etc1:transformAssetSrc(an),etc2:transformAssetSrc(on),pvrtc:transformAssetSrc(en)}],On=[{s3tc:transformAssetSrc(rn),astc:transformAssetSrc(sn),etc1:transformAssetSrc(cn),etc2:transformAssetSrc(ln),pvrtc:transformAssetSrc(mn)},{s3tc:transformAssetSrc(fn),astc:transformAssetSrc(pn),etc1:transformAssetSrc(dn),etc2:transformAssetSrc(un),pvrtc:transformAssetSrc(hn)},{s3tc:transformAssetSrc(vn),astc:transformAssetSrc(Sn),etc1:transformAssetSrc(xn),etc2:transformAssetSrc(Mn),pvrtc:transformAssetSrc(Tn)},{s3tc:transformAssetSrc(An),astc:transformAssetSrc(En),etc1:transformAssetSrc(gn),etc2:transformAssetSrc(Pn),pvrtc:transformAssetSrc(_n)},{s3tc:transformAssetSrc(Cn),astc:transformAssetSrc(wn),etc1:transformAssetSrc(Fn),etc2:transformAssetSrc(bn),pvrtc:transformAssetSrc(Nn)}],k=new Float32Array([1]),C=new Float32Array([48]),b=new nt.exports.Pane;b.element.parentNode.style.setProperty("width","340px");b.addBlade({view:"list",label:"tone mapping mode",options:P.map(o=>({text:o,value:o})),value:P[1]}).on("change",({value:o})=>{k[0]=P.indexOf(o)});b.addBlade({view:"slider",label:"point light luminance",min:0,max:500,value:C[0]}).on("change",({value:o})=>{C[0]=o});const s=document.createElement("canvas");document.body.appendChild(s);const a=s.getContext("webgl2"),N=new ot(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);N.position=[0,0,1];N.lookAt=[0,0,0];N.updateProjectionViewMatrix();const e=new et(45*Math.PI/180,innerWidth/innerHeight,.1,100);e.position=[5.43,.2,14.06];e.lookAt=[0,0,0];e.updateProjectionMatrix();new rt(e,s,!1);const _=st({radius:.5,widthSegments:32,heightSegments:32}),l=new it,W=[],yn={POINT_LIGHTS_COUNT:T.toString()},Dn=H/D,Vn=G/V;for(let o=0;o<V;o++)for(let t=0;t<D;t++){const n=new Un(a,_,yn);n.setPosition([t*Dn-H/2+_.radius,o*Vn-G/2+_.radius,0]),n.setUniform("u_albedoMap",{type:a.INT,value:0}),n.setUniform("u_normalMap",{type:a.INT,value:1}),n.setUniform("u_metallicMap",{type:a.INT,value:2}),n.setUniform("u_roughnessMap",{type:a.INT,value:3}),n.setUniform("u_aoMap",{type:a.INT,value:4}),l.addChild(n),W.push(n)}const x=w(a,l.children[0].program,"Projection",["projMatrix","zNear","zFar"]),Hn=F(a,x.blockSize,0),M=w(a,l.children[0].program,"View",["viewMatrix","cameraPosition","time"]),Gn=F(a,M.blockSize,1),c=w(a,l.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","tonemappingMode"]),kn=F(a,c.blockSize,2);console.log(c);const m=[],z=[],X=[];for(let o=0;o<T;o++){m.push(new Float32Array(3));const t=[1,1,1];z.push(new Float32Array(t));const n=new ct(a);n.color=[...t,1],l.addChild(n),X.push(n)}const f=document.createElement("div");f.setAttribute("style",`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  color: white;
  font-family: monospace;
`);f.textContent="Loading assets...";document.body.appendChild(f);Promise.all([Promise.all(Bn.map((o,t)=>g(a,o))),Promise.all(In.map((o,t)=>g(a,o))),Promise.all(On.map((o,t)=>g(a,o)))]).then(o=>{let t=0;for(const n of W)n.textures=o[t],t++,t===3&&(t=0);f.parentNode.removeChild(f)});requestAnimationFrame(j);Y();window.addEventListener("resize",Y);function j(o){requestAnimationFrame(j),e.updateViewMatrix(),a.bindBuffer(a.UNIFORM_BUFFER,Hn),a.bufferSubData(a.UNIFORM_BUFFER,x.uniforms.projMatrix.offset,e.projectionMatrix,0),a.bufferSubData(a.UNIFORM_BUFFER,x.uniforms.zNear.offset,new Float32Array([e.near]),0),a.bufferSubData(a.UNIFORM_BUFFER,x.uniforms.zFar.offset,new Float32Array([e.far]),0),a.bindBuffer(a.UNIFORM_BUFFER,Gn),a.bufferSubData(a.UNIFORM_BUFFER,M.uniforms.viewMatrix.offset,e.viewMatrix,0),a.bufferSubData(a.UNIFORM_BUFFER,M.uniforms.cameraPosition.offset,new Float32Array(e.position),0),a.bufferSubData(a.UNIFORM_BUFFER,M.uniforms.time.offset,new Float32Array([o]),0),a.bindBuffer(a.UNIFORM_BUFFER,kn);const t=o*.001;for(let n=0;n<T;n++){const r=Math.PI*2/T,i=[Math.cos(n*r+t)*5,Math.sin(n*r+t)*5,5];m[n][0]=i[0],m[n][1]=i[1],m[n][2]=i[2],X[n].setPosition(i).updateWorldMatrix(),a.bufferSubData(a.UNIFORM_BUFFER,c.uniforms.pointLightPositions.offset+n*4*Float32Array.BYTES_PER_ELEMENT,m[n],0),a.bufferSubData(a.UNIFORM_BUFFER,c.uniforms.pointLightColors.offset+n*4*Float32Array.BYTES_PER_ELEMENT,z[n],0)}a.bufferSubData(a.UNIFORM_BUFFER,c.uniforms.tonemappingMode.offset,k,0),a.bufferSubData(a.UNIFORM_BUFFER,c.uniforms.pointLightIntensity.offset,C,0),a.enable(a.DEPTH_TEST),a.enable(a.BLEND),a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA),a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),a.clearColor(.1,.1,.1,1),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),l.updateWorldMatrix().render()}function Y(){e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),s.width=innerWidth*devicePixelRatio,s.height=innerHeight*devicePixelRatio,s.style.setProperty("width",`${innerWidth}px`),s.style.setProperty("height",`${innerHeight}px`)}
