var Z=Object.defineProperty;var I=Object.getOwnPropertySymbols;var nn=Object.prototype.hasOwnProperty,an=Object.prototype.propertyIsEnumerable;var P=(e,n,t)=>n in e?Z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,O=(e,n)=>{for(var t in n||(n={}))nn.call(n,t)&&P(e,t,n[t]);if(I)for(var t of I(n))an.call(n,t)&&P(e,t,n[t]);return e};var y=(e,n,t)=>(P(e,typeof n!="symbol"?n+"":n,t),t),D=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)};var v=(e,n,t)=>(D(e,n,"read from private field"),t?t.call(e):n.get(e)),x=(e,n,t)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,t)},M=(e,n,t,i)=>(D(e,n,"write to private field"),i?i.call(e,t):n.set(e,t),t);import{t as tn}from"./assets/vendor.42929781.js";import{D as on,O as en,P as rn,C as sn,c as ln,S as cn,b,d as N,L as mn}from"./assets/light-debug.7af984de.js";import{l as C,a as pn,b as fn,c as dn,d as un,n as hn,e as vn,f as xn,g as Mn,h as Tn,m as En,i as gn,j as _n,k as Pn,o as Cn,r as Sn,p as wn,q as Fn,s as bn,t as Nn,u as Rn,v as Ln,w as Un,x as An,y as Bn,z as In,A as On,B as yn,C as Dn,D as Vn,E as Hn,F as Gn,G as kn,H as Wn,I as zn,J as Xn,K as jn,L as Yn,M as $n,N as Qn,O as qn,P as Kn,Q as Jn,R as Zn,S as na,T as aa,U as ta,V as oa,W as ea,X as ra,Y as ia,Z as sa,_ as la,$ as ca,a0 as ma,a1 as pa,a2 as fa,a3 as da,a4 as ua,a5 as ha,a6 as va,a7 as xa,a8 as Ma,a9 as Ta,aa as Ea,ab as ga,ac as _a,ad as Pa,ae as Ca,af as Sa,ag as wa,ah as Fa,ai as ba,aj as Na,ak as Ra,al as La}from"./assets/leafy-grass2-roughness_pvrtc.34b24bc7.js";var Ua=`#version 300 es

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
}`,Aa=`#version 300 es
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
}`,d,u,h;class Ba extends on{constructor(n,t,i){super(n,Ua,Aa,O({USE_PBR:!0,PI:Math.PI},i),"sphere");x(this,d,void 0);x(this,u,void 0);x(this,h,void 0);y(this,"textures",[]);const{vertexCount:l,vertexStride:_,interleavedArray:Q,indicesArray:q}=t;this.vertexCount=l;const U=n.getAttribLocation(this.program,"aPosition"),A=n.getAttribLocation(this.program,"aNormal"),B=n.getAttribLocation(this.program,"aUv"),K=n.createBuffer(),J=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,K),n.bufferData(n.ARRAY_BUFFER,Q,n.STATIC_DRAW),n.enableVertexAttribArray(U),n.vertexAttribPointer(U,3,n.FLOAT,!1,_*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(A),n.vertexAttribPointer(A,3,n.FLOAT,!1,_*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(B),n.vertexAttribPointer(B,2,n.FLOAT,!1,_*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,J),n.bufferData(n.ELEMENT_ARRAY_BUFFER,q,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),M(this,d,n.getUniformBlockIndex(this.program,"Projection")),M(this,u,n.getUniformBlockIndex(this.program,"View")),M(this,h,n.getUniformBlockIndex(this.program,"Lighting"))}render(){this.gl.uniformBlockBinding(this.program,v(this,d),0),this.gl.uniformBlockBinding(this.program,v(this,u),1),this.gl.uniformBlockBinding(this.program,v(this,h),2);for(const[n,t]of this.textures.entries())this.gl.activeTexture(this.gl.TEXTURE0+n),this.gl.bindTexture(this.gl.TEXTURE_2D,t);this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}d=new WeakMap,u=new WeakMap,h=new WeakMap;const V=7,H=7,G=10,k=10,g=1,S=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],Ia=[{s3tc:a(La),astc:a(pn),etc1:a(fn),etc2:a(dn),pvrtc:a(un)},{s3tc:a(hn),astc:a(vn),etc1:a(xn),etc2:a(Mn),pvrtc:a(Tn)},{s3tc:a(En),astc:a(gn),etc1:a(_n),etc2:a(Pn),pvrtc:a(Cn)},{s3tc:a(Sn),astc:a(wn),etc1:a(Fn),etc2:a(bn),pvrtc:a(Nn)},{s3tc:a(Rn),astc:a(Ln),etc1:a(Un),etc2:a(An),pvrtc:a(Bn)}],Oa=[{s3tc:a(In),astc:a(On),etc1:a(yn),etc2:a(Dn),pvrtc:a(Vn)},{s3tc:a(Hn),astc:a(Gn),etc1:a(kn),etc2:a(Wn),pvrtc:a(zn)},{s3tc:a(Xn),astc:a(jn),etc1:a(Yn),etc2:a($n),pvrtc:a(Qn)},{s3tc:a(qn),astc:a(Kn),etc1:a(Jn),etc2:a(Zn),pvrtc:a(na)},{s3tc:a(aa),astc:a(ta),etc1:a(oa),etc2:a(ea),pvrtc:a(ra)}],ya=[{s3tc:a(ia),astc:a(sa),etc1:a(la),etc2:a(ca),pvrtc:a(ma)},{s3tc:a(pa),astc:a(fa),etc1:a(da),etc2:a(ua),pvrtc:a(ha)},{s3tc:a(va),astc:a(xa),etc1:a(Ma),etc2:a(Ta),pvrtc:a(Ea)},{s3tc:a(ga),astc:a(_a),etc1:a(Pa),etc2:a(Ca),pvrtc:a(Sa)},{s3tc:a(wa),astc:a(Fa),etc1:a(ba),etc2:a(Na),pvrtc:a(Ra)}],W=new Float32Array([1]),F=new Float32Array([48]),R=new tn.exports.Pane;R.element.parentNode.style.setProperty("width","340px");R.addBlade({view:"list",label:"tone mapping mode",options:S.map(e=>({text:e,value:e})),value:S[1]}).on("change",({value:e})=>{W[0]=S.indexOf(e)});R.addBlade({view:"slider",label:"point light luminance",min:0,max:500,value:F[0]}).on("change",({value:e})=>{F[0]=e});const s=document.createElement("canvas");document.body.appendChild(s);const o=s.getContext("webgl2"),L=new en(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);L.position=[0,0,1];L.lookAt=[0,0,0];L.updateProjectionViewMatrix();const r=new rn(45*Math.PI/180,innerWidth/innerHeight,.1,100);r.position=[5.43,.2,14.06];r.lookAt=[0,0,0];r.updateProjectionMatrix();new sn(r,s,!1);const w=ln({radius:.5,widthSegments:32,heightSegments:32}),m=new cn,z=[],Da={POINT_LIGHTS_COUNT:g.toString()},Va=G/V,Ha=k/H;for(let e=0;e<H;e++)for(let n=0;n<V;n++){const t=new Ba(o,w,Da);t.setPosition([n*Va-G/2+w.radius,e*Ha-k/2+w.radius,0]),t.setUniform("u_albedoMap",{type:o.INT,value:0}),t.setUniform("u_normalMap",{type:o.INT,value:1}),t.setUniform("u_metallicMap",{type:o.INT,value:2}),t.setUniform("u_roughnessMap",{type:o.INT,value:3}),t.setUniform("u_aoMap",{type:o.INT,value:4}),m.addChild(t),z.push(t)}const T=b(o,m.children[0].program,"Projection",["projMatrix","zNear","zFar"]),Ga=N(o,T.blockSize,0),E=b(o,m.children[0].program,"View",["viewMatrix","cameraPosition","time"]),ka=N(o,E.blockSize,1),c=b(o,m.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","tonemappingMode"]),Wa=N(o,c.blockSize,2);console.log(c);const p=[],X=[],j=[];for(let e=0;e<g;e++){p.push(new Float32Array(3));const n=[1,1,1];X.push(new Float32Array(n));const t=new mn(o);t.color=[...n,1],m.addChild(t),j.push(t)}const f=document.createElement("div");f.setAttribute("style",`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  color: white;
  font-family: monospace;
`);f.textContent="Loading assets...";document.body.appendChild(f);Promise.all([Promise.all(Ia.map((e,n)=>C(o,e))),Promise.all(Oa.map((e,n)=>C(o,e))),Promise.all(ya.map((e,n)=>C(o,e)))]).then(e=>{let n=0;for(const t of z)t.textures=e[n],n++,n===3&&(n=0);f.parentNode.removeChild(f)});requestAnimationFrame(Y);$();window.addEventListener("resize",$);function Y(e){requestAnimationFrame(Y),r.updateViewMatrix(),o.bindBuffer(o.UNIFORM_BUFFER,Ga),o.bufferSubData(o.UNIFORM_BUFFER,T.uniforms.projMatrix.offset,r.projectionMatrix,0),o.bufferSubData(o.UNIFORM_BUFFER,T.uniforms.zNear.offset,new Float32Array([r.near]),0),o.bufferSubData(o.UNIFORM_BUFFER,T.uniforms.zFar.offset,new Float32Array([r.far]),0),o.bindBuffer(o.UNIFORM_BUFFER,ka),o.bufferSubData(o.UNIFORM_BUFFER,E.uniforms.viewMatrix.offset,r.viewMatrix,0),o.bufferSubData(o.UNIFORM_BUFFER,E.uniforms.cameraPosition.offset,new Float32Array(r.position),0),o.bufferSubData(o.UNIFORM_BUFFER,E.uniforms.time.offset,new Float32Array([e]),0),o.bindBuffer(o.UNIFORM_BUFFER,Wa);const n=e*.001;for(let t=0;t<g;t++){const i=Math.PI*2/g,l=[Math.cos(t*i+n)*5,Math.sin(t*i+n)*5,5];p[t][0]=l[0],p[t][1]=l[1],p[t][2]=l[2],j[t].setPosition(l).updateWorldMatrix(),o.bufferSubData(o.UNIFORM_BUFFER,c.uniforms.pointLightPositions.offset+t*4*Float32Array.BYTES_PER_ELEMENT,p[t],0),o.bufferSubData(o.UNIFORM_BUFFER,c.uniforms.pointLightColors.offset+t*4*Float32Array.BYTES_PER_ELEMENT,X[t],0)}o.bufferSubData(o.UNIFORM_BUFFER,c.uniforms.tonemappingMode.offset,W,0),o.bufferSubData(o.UNIFORM_BUFFER,c.uniforms.pointLightIntensity.offset,F,0),o.enable(o.DEPTH_TEST),o.enable(o.BLEND),o.blendFunc(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA),o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight),o.clearColor(.1,.1,.1,1),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),m.updateWorldMatrix().render()}function $(){r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix(),s.width=innerWidth*devicePixelRatio,s.height=innerHeight*devicePixelRatio,s.style.setProperty("width",`${innerWidth}px`),s.style.setProperty("height",`${innerHeight}px`)}function a(e){return window.BASE_URL?`${window.BASE_URL}/assets/${e}`:e}
