var K=Object.defineProperty;var A=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var P=(o,n,e)=>n in o?K(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e,O=(o,n)=>{for(var e in n||(n={}))J.call(n,e)&&P(o,e,n[e]);if(A)for(var e of A(n))Z.call(n,e)&&P(o,e,n[e]);return o};var y=(o,n,e)=>(P(o,typeof n!="symbol"?n+"":n,e),e),D=(o,n,e)=>{if(!n.has(o))throw TypeError("Cannot "+e)};var h=(o,n,e)=>(D(o,n,"read from private field"),e?e.call(o):n.get(o)),x=(o,n,e)=>{if(n.has(o))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(o):n.set(o,e)},g=(o,n,e,r)=>(D(o,n,"write to private field"),r?r.call(o,e):n.set(o,e),e);import{t as nn}from"./assets/vendor.19aed32e.js";import{D as tn,O as en,P as on,C as an,c as rn,a as ln,S as sn,b,d as S}from"./assets/index.75855a8b.js";var cn=`#version 300 es

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
}`,mn=`#version 300 es
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
}`,d,u,p;class fn extends tn{constructor(n,e,r){super(n,cn,mn,O({USE_PBR:!0,PI:Math.PI},r),"sphere");x(this,d,void 0);x(this,u,void 0);x(this,p,void 0);y(this,"textures",[]);const{vertexCount:i,vertexStride:l,interleavedArray:Y,indicesArray:$}=e;this.vertexCount=i;const B=n.getAttribLocation(this.program,"aPosition"),U=n.getAttribLocation(this.program,"aNormal"),I=n.getAttribLocation(this.program,"aUv"),Q=n.createBuffer(),q=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,Q),n.bufferData(n.ARRAY_BUFFER,Y,n.STATIC_DRAW),n.enableVertexAttribArray(B),n.vertexAttribPointer(B,3,n.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(U),n.vertexAttribPointer(U,3,n.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(I),n.vertexAttribPointer(I,2,n.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,q),n.bufferData(n.ELEMENT_ARRAY_BUFFER,$,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),g(this,d,n.getUniformBlockIndex(this.program,"Projection")),g(this,u,n.getUniformBlockIndex(this.program,"View")),g(this,p,n.getUniformBlockIndex(this.program,"Lighting"))}render(){this.gl.uniformBlockBinding(this.program,h(this,d),0),this.gl.uniformBlockBinding(this.program,h(this,u),1),this.gl.uniformBlockBinding(this.program,h(this,p),2);for(const[n,e]of this.textures.entries())this.gl.activeTexture(this.gl.TEXTURE0+n),this.gl.bindTexture(this.gl.TEXTURE_2D,e);this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}d=new WeakMap,u=new WeakMap,p=new WeakMap;var dn="/vintage-tile1_albedo-min.png",un="/vintage-tile1_ao-min.png",pn="/vintage-tile1_metallic-min.png",vn="/vintage-tile1_normal-ogl-min.png",hn="/vintage-tile1_roughness-min.png",xn="/rustediron2_basecolor-min.png",gn="/rustediron2_ao-min.png",_n="/rustediron2_metallic-min.png",En="/rustediron2_normal-min.png",wn="/rustediron2_roughness-min.png",Pn="/leafy-grass2-albedo-min.png",Fn="/leafy-grass2-ao-min.png",Mn="/vintage-tile1_metallic-min.png",Nn="/leafy-grass2-normal-ogl-min.png",Tn="/leafy-grass2-roughness-min.png";const C=7,G=7,H=10,k=10,w=1,F=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],bn=[dn,vn,pn,hn,un],Sn=[xn,En,_n,wn,gn],Rn=[Pn,Nn,Mn,Tn,Fn],V=new Float32Array([1]),T=new Float32Array([48]),R=new nn.exports.Pane;R.element.parentNode.style.setProperty("width","340px");R.addBlade({view:"list",label:"tone mapping mode",options:F.map(o=>({text:o,value:o})),value:F[1]}).on("change",({value:o})=>{V[0]=F.indexOf(o)});R.addBlade({view:"slider",label:"point light luminance",min:0,max:500,value:T[0]}).on("change",({value:o})=>{T[0]=o});const s=document.createElement("canvas");document.body.appendChild(s);const t=s.getContext("webgl2"),L=new en(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);L.position=[0,0,1];L.lookAt=[0,0,0];L.updateProjectionViewMatrix();const a=new on(45*Math.PI/180,innerWidth/innerHeight,.1,100);a.position=[5.43,.2,14.06];a.lookAt=[0,0,0];a.updateProjectionMatrix();new an(a,s,!1);const M=rn({radius:.5,widthSegments:32,heightSegments:32});ln({width:5,height:5/8});const v=new sn,X=[],Ln={POINT_LIGHTS_COUNT:w.toString()},Bn=H/C,Un=k/G;for(let o=0;o<G;o++)for(let n=0;n<C;n++){const e=new fn(t,M,Ln);e.setPosition([n*Bn-H/2+M.radius,o*Un-k/2+M.radius,0]),e.setUniform("u_albedoMap",{type:t.INT,value:0}),e.setUniform("u_normalMap",{type:t.INT,value:1}),e.setUniform("u_metallicMap",{type:t.INT,value:2}),e.setUniform("u_roughnessMap",{type:t.INT,value:3}),e.setUniform("u_aoMap",{type:t.INT,value:4}),v.addChild(e),X.push(e)}const _=b(t,v.children[0].program,"Projection",["projMatrix","zNear","zFar"]),In=S(t,_.blockSize,0),E=b(t,v.children[0].program,"View",["viewMatrix","cameraPosition","time"]),An=S(t,E.blockSize,1),c=b(t,v.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","tonemappingMode"]),On=S(t,c.blockSize,2);console.log(c);const m=[],W=[];for(let o=0;o<w;o++)m.push(new Float32Array(3)),W.push(new Float32Array([1,1,1]));const f=document.createElement("div");f.setAttribute("style",`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  color: white;
  font-family: monospace;
`);f.textContent="Loading assets...";document.body.appendChild(f);Promise.all([Promise.all(bn.map((o,n)=>N(o,n===0?t.SRGBA:t.RGB))),Promise.all(Sn.map((o,n)=>N(o,n===0?t.SRGBA:t.RGB))),Promise.all(Rn.map((o,n)=>N(o,n===0?t.SRGBA:t.RGB)))]).then(o=>{let n=0;X.forEach((e,r)=>{e.textures=o[n],n++,n===3&&(n=0)}),f.parentNode.removeChild(f)});requestAnimationFrame(z);j();window.addEventListener("resize",j);function z(o){requestAnimationFrame(z),a.updateViewMatrix(),t.bindBuffer(t.UNIFORM_BUFFER,In),t.bufferSubData(t.UNIFORM_BUFFER,_.uniforms.projMatrix.offset,a.projectionMatrix,0),t.bufferSubData(t.UNIFORM_BUFFER,_.uniforms.zNear.offset,new Float32Array([a.near]),0),t.bufferSubData(t.UNIFORM_BUFFER,_.uniforms.zFar.offset,new Float32Array([a.far]),0),t.bindBuffer(t.UNIFORM_BUFFER,An),t.bufferSubData(t.UNIFORM_BUFFER,E.uniforms.viewMatrix.offset,a.viewMatrix,0),t.bufferSubData(t.UNIFORM_BUFFER,E.uniforms.cameraPosition.offset,new Float32Array(a.position),0),t.bufferSubData(t.UNIFORM_BUFFER,E.uniforms.time.offset,new Float32Array([o]),0),t.bindBuffer(t.UNIFORM_BUFFER,On);const n=o*.001;for(let e=0;e<w;e++){const r=Math.PI*2/w;m[e][0]=Math.cos(e*r+n)*3,m[e][1]=Math.sin(e*r+n)*3,m[e][2]=5,t.bufferSubData(t.UNIFORM_BUFFER,c.uniforms.pointLightPositions.offset+e*4*Float32Array.BYTES_PER_ELEMENT,m[e],0),t.bufferSubData(t.UNIFORM_BUFFER,c.uniforms.pointLightColors.offset+e*4*Float32Array.BYTES_PER_ELEMENT,W[e],0)}t.bufferSubData(t.UNIFORM_BUFFER,c.uniforms.tonemappingMode.offset,V,0),t.bufferSubData(t.UNIFORM_BUFFER,c.uniforms.pointLightIntensity.offset,T,0),t.enable(t.DEPTH_TEST),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.clearColor(.1,.1,.1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),v.updateWorldMatrix().render()}function N(o,n=t.RGB){return new Promise((e,r)=>{const i=new Image;i.onload=()=>{const l=t.createTexture();t.bindTexture(t.TEXTURE_2D,l),t.texImage2D(t.TEXTURE_2D,0,n,i.naturalWidth,i.naturalHeight,0,n,t.UNSIGNED_BYTE,i),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),e(l)},i.onerror=l=>r(l),i.src=window.BASE_URL?`${window.BASE_URL}assets${o}`:o})}function j(){a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),s.width=innerWidth*devicePixelRatio,s.height=innerHeight*devicePixelRatio,s.style.setProperty("width",`${innerWidth}px`),s.style.setProperty("height",`${innerHeight}px`)}
