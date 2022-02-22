var sn=Object.defineProperty;var z=Object.getOwnPropertySymbols;var cn=Object.prototype.hasOwnProperty,ln=Object.prototype.propertyIsEnumerable;var j=(o,n,t)=>n in o?sn(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,y=(o,n)=>{for(var t in n||(n={}))cn.call(n,t)&&j(o,t,n[t]);if(z)for(var t of z(n))ln.call(n,t)&&j(o,t,n[t]);return o};var $=(o,n,t)=>{if(!n.has(o))throw TypeError("Cannot "+t)};var c=(o,n,t)=>($(o,n,"read from private field"),t?t.call(o):n.get(o)),f=(o,n,t)=>{if(n.has(o))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(o):n.set(o,t)},d=(o,n,t,a)=>($(o,n,"write to private field"),a?a.call(o,t):n.set(o,t),t);import{t as fn}from"./assets/vendor.42929781.js";import{D as q,O as dn,P as mn,C as hn,c as un,a as pn,S as xn,b as G,d as k,L as vn}from"./assets/light-debug.7af984de.js";var K=`#version 300 es

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
}`,J=`#version 300 es
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
  uniform vec3 u_albedo;
  uniform float u_metallic;
  uniform float u_roughness;
  
#endif

#ifdef USE_DIFFUSE_ONLY
  uniform sampler2D u_diffuse;
#endif

in vec3 vNormal;
in vec2 vUv;
in vec3 vWorldPos;

out vec4 finalColor;

void main () {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);

  #ifdef USE_PBR
    vec3 F0 = vec3(0.04); 
    F0 = mix(F0, u_albedo, u_metallic);
    vec3 Lo = vec3(0.0);
    
    for (int i = 0; i < POINT_LIGHTS_COUNT; i++) {
        
        vec3 L = normalize(pointLightPositions[i] - vWorldPos);
        vec3 H = normalize(V + L);
        float distance    = length(pointLightPositions[i] - vWorldPos);
        float attenuation = pointLightIntensity / (distance * distance);
        vec3 radiance     = pointLightColors[i] * attenuation;        
        
        
        float NDF = DistributionGGX(N, H, u_roughness);
        float G   = GeometrySmith(N, V, L, u_roughness);
        vec3 F    = fresnelSchlick(max(dot(H, V), 0.0), F0);
        
        vec3 kS = F;
        vec3 kD = vec3(1.0) - kS;
        kD *= 1.0 - u_metallic;	  
        
        vec3 numerator    = NDF * G * F;
        float denominator = 4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.0001;
        vec3 specular     = numerator / denominator;  
            
        
        float NdotL = max(dot(N, L), 0.0);                
        Lo += (kD * u_albedo / PI + specular) * radiance * NdotL; 
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

    
    vec3 ambient = vec3(0.3) * u_albedo;
    vec3 color = ambient + Lo;
    finalColor = vec4(color, 1.0);
  #else

    finalColor = texture(u_diffuse, vUv, -0.5);
  

  #endif
}`,F,P,T;class En extends q{constructor(n,t,a){super(n,K,J,y({USE_PBR:!0,PI:Math.PI},a),"sphere");f(this,F,void 0);f(this,P,void 0);f(this,T,void 0);const{vertexCount:i,vertexStride:s,interleavedArray:h,indicesArray:E}=t;this.vertexCount=i;const u=n.getAttribLocation(this.program,"aPosition"),_=n.getAttribLocation(this.program,"aNormal"),w=n.getAttribLocation(this.program,"aUv"),I=n.createBuffer(),M=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferData(n.ARRAY_BUFFER,h,n.STATIC_DRAW),n.enableVertexAttribArray(u),n.vertexAttribPointer(u,3,n.FLOAT,!1,s*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,3,n.FLOAT,!1,s*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(w),n.vertexAttribPointer(w,2,n.FLOAT,!1,s*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,M),n.bufferData(n.ELEMENT_ARRAY_BUFFER,E,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_albedo",{type:n.FLOAT_VEC3,value:new Float32Array([1,0,0])}),d(this,F,n.getUniformBlockIndex(this.program,"Projection")),d(this,P,n.getUniformBlockIndex(this.program,"View")),d(this,T,n.getUniformBlockIndex(this.program,"Lighting"))}render(){this.gl.uniformBlockBinding(this.program,c(this,F),0),this.gl.uniformBlockBinding(this.program,c(this,P),1),this.gl.uniformBlockBinding(this.program,c(this,T),2),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}F=new WeakMap,P=new WeakMap,T=new WeakMap;var x,L,b;const X=class extends q{constructor(n,t,a,i){super(n,K,J,y({PI:Math.PI,USE_DIFFUSE_ONLY:!0},i));f(this,x,void 0);f(this,L,void 0);f(this,b,void 0);const{vertexCount:s,vertexStride:h,interleavedArray:E,indicesArray:u}=a;this.vertexCount=s;const _=n.getAttribLocation(this.program,"aPosition"),w=n.getAttribLocation(this.program,"aUv"),I=n.createBuffer(),M=n.createBuffer();this.gl.bindVertexArray(this.vao),n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferData(n.ARRAY_BUFFER,E,n.STATIC_DRAW),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,3,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(w),n.vertexAttribPointer(w,2,n.FLOAT,!1,h*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,M),n.bufferData(n.ELEMENT_ARRAY_BUFFER,u,n.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:n.INT,value:0});const O=X.createTextCanvas(t);d(this,x,n.createTexture()),n.bindTexture(n.TEXTURE_2D,c(this,x)),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,O.width,O.height,0,n.RGBA,n.UNSIGNED_BYTE,O),n.generateMipmap(n.TEXTURE_2D),n.bindTexture(n.TEXTURE_2D,null),d(this,L,n.getUniformBlockIndex(this.program,"Projection")),d(this,b,n.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(n){const t=document.createElement("canvas"),a=t.getContext("2d");t.width=1024,t.height=128;const i=20,s=10,h=100;a.font=`${h}px Helvetica`,a.fillStyle="#fff",a.textBaseline="middle",a.fillText(n,i,t.height/2);const{width:E}=a.measureText(n),u=i+E+40;return a.strokeStyle="#fff",a.lineWidth=5,a.beginPath(),a.moveTo(u,t.height/2),a.lineTo(t.width-s,t.height/2),a.stroke(),a.beginPath(),a.moveTo(t.width-s,t.height/2),a.lineTo(t.width-s-40,t.height/2+30),a.stroke(),a.beginPath(),a.moveTo(t.width-s,t.height/2),a.lineTo(t.width-s-40,t.height/2-30),a.stroke(),t}render(){this.gl.uniformBlockBinding(this.program,c(this,L),0),this.gl.uniformBlockBinding(this.program,c(this,b),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,c(this,x)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}};let V=X;x=new WeakMap,L=new WeakMap,b=new WeakMap;const A=7,H=7,B=10,U=10,N=4,C=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],Q=new Float32Array([2]),Z=new Float32Array([40]),W=new fn.exports.Pane;W.element.parentNode.style.setProperty("width","340px");W.addBlade({view:"list",label:"tone mapping mode",options:C.map(o=>({text:o,value:o})),value:C[2]}).on("change",({value:o})=>{Q[0]=C.indexOf(o)});W.addBlade({view:"slider",label:"point light luminance",min:0,max:50,value:20}).on("change",({value:o})=>{Z[0]=o});const m=document.createElement("canvas");document.body.appendChild(m);const e=m.getContext("webgl2"),Y=new dn(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);Y.position=[0,0,1];Y.lookAt=[0,0,0];Y.updateProjectionViewMatrix();const r=new mn(45*Math.PI/180,innerWidth/innerHeight,.1,100);r.position=[5.43,.2,14.06];r.lookAt=[0,0,0];r.updateProjectionMatrix();new hn(r,m,!1);const D=un({radius:.5,widthSegments:32,heightSegments:32}),v=pn({width:5,height:5/8}),l=new xn,_n={POINT_LIGHTS_COUNT:N.toString()},wn=B/A,gn=U/H;for(let o=0;o<H;o++)for(let n=0;n<A;n++){const t=new En(e,D,_n);t.setPosition([n*wn-B/2+D.radius,o*gn-U/2+D.radius,0]);const a=o/H;t.setUniform("u_metallic",{type:e.FLOAT,value:a});const i=1/A+n/A;t.setUniform("u_roughness",{type:e.FLOAT,value:i}),l.addChild(t)}const nn=new V(e,"roughness",v);nn.setPosition([-B/2+v.width/2,-U/2-v.height,0]);l.addChild(nn);const tn=new V(e,"metallic",v);tn.setPosition([-B/2-v.height,-U/2+v.width/2,0]).setRotation([0,0,Math.PI*.5]);l.addChild(tn);const R=G(e,l.children[0].program,"Projection",["projMatrix","zNear","zFar"]),Fn=k(e,R.blockSize,0),S=G(e,l.children[0].program,"View",["viewMatrix","cameraPosition","time"]),Pn=k(e,S.blockSize,1),p=G(e,l.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","tonemappingMode"]),Tn=k(e,p.blockSize,2),g=[],en=[],on=[];for(let o=0;o<N;o++){g.push(new Float32Array(3));const n=[Math.random(),Math.random(),Math.random()];en.push(new Float32Array(n));const t=new vn(e);t.color=[...n,1],l.addChild(t),on.push(t)}requestAnimationFrame(an);rn();window.addEventListener("resize",rn);function an(o){requestAnimationFrame(an),r.updateViewMatrix(),e.bindBuffer(e.UNIFORM_BUFFER,Fn),e.bufferSubData(e.UNIFORM_BUFFER,R.uniforms.projMatrix.offset,r.projectionMatrix,0),e.bufferSubData(e.UNIFORM_BUFFER,R.uniforms.zNear.offset,new Float32Array([r.near]),0),e.bufferSubData(e.UNIFORM_BUFFER,R.uniforms.zFar.offset,new Float32Array([r.far]),0),e.bindBuffer(e.UNIFORM_BUFFER,Pn),e.bufferSubData(e.UNIFORM_BUFFER,S.uniforms.viewMatrix.offset,r.viewMatrix,0),e.bufferSubData(e.UNIFORM_BUFFER,S.uniforms.cameraPosition.offset,new Float32Array(r.position),0),e.bufferSubData(e.UNIFORM_BUFFER,S.uniforms.time.offset,new Float32Array([o]),0),e.bindBuffer(e.UNIFORM_BUFFER,Tn);const n=o*.001;for(let t=0;t<N;t++){const a=Math.PI*2/N,i=[Math.cos(t*a+n)*10,Math.sin(t*a+n)*10,Math.cos(n)+2+4];g[t][0]=i[0],g[t][1]=i[1],g[t][2]=i[2],on[t].setPosition(i).updateWorldMatrix(),e.bufferSubData(e.UNIFORM_BUFFER,p.uniforms.pointLightPositions.offset+t*p.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,g[t],0),e.bufferSubData(e.UNIFORM_BUFFER,p.uniforms.pointLightColors.offset+t*4*Float32Array.BYTES_PER_ELEMENT,en[t],0)}e.bufferSubData(e.UNIFORM_BUFFER,p.uniforms.tonemappingMode.offset,Q,0),e.bufferSubData(e.UNIFORM_BUFFER,p.uniforms.pointLightIntensity.offset,Z,0),e.enable(e.DEPTH_TEST),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.clearColor(.1,.1,.1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),l.updateWorldMatrix().render()}function rn(){r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix(),m.width=innerWidth*devicePixelRatio,m.height=innerHeight*devicePixelRatio,m.style.setProperty("width",`${innerWidth}px`),m.style.setProperty("height",`${innerHeight}px`)}
