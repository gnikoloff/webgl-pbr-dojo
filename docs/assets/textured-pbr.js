var nt=Object.defineProperty;var W=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var z=(o,t,e)=>t in o?nt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,y=(o,t)=>{for(var e in t||(t={}))ot.call(t,e)&&z(o,e,t[e]);if(W)for(var e of W(t))it.call(t,e)&&z(o,e,t[e]);return o};var j=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)};var c=(o,t,e)=>(j(o,t,"read from private field"),e?e.call(o):t.get(o)),f=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},h=(o,t,e,i)=>(j(o,t,"write to private field"),i?i.call(o,e):t.set(o,e),e);import{D as q,O as rt,P as at,C as st,c as ct,a as ft,S as ht,b as H,d as G,E as X}from"./assets/index.645cdd9f.js";import"./assets/vendor.032aa3bc.js";var $=`#version 300 es

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
    vec3 lightPositions[POINT_LIGHTS_COUNT];
    vec3 lightColors[POINT_LIGHTS_COUNT];
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

  vNormal = aNormal;
  vUv = aUv;
  vWorldPos = worldPos.xyz;
}`,K=`#version 300 es
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
    vec3 lightPositions[POINT_LIGHTS_COUNT];
    vec3 lightColors[POINT_LIGHTS_COUNT];
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
        
        vec3 L = normalize(lightPositions[i] - vWorldPos);
        vec3 H = normalize(V + L);
        float distance    = length(lightPositions[i] - vWorldPos);
        float attenuation = 20.0 / (distance * distance);
        vec3 radiance     = lightColors[i] * attenuation;        
        
        
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

    Lo = Lo / (Lo + vec3(1.0));
    Lo = pow(Lo, vec3(1.0/2.2)); 

    
    vec3 ambient = vec3(0.3) * u_albedo;
    vec3 color = ambient + Lo;
    finalColor = vec4(color, 1.0);
  #else

    finalColor = texture(u_diffuse, vUv, -0.5);
  

  #endif
}`,N,x,g;class lt extends q{constructor(t,e,i){super(t,$,K,y({USE_PBR:!0,PI:Math.PI},i),"sphere");f(this,N,void 0);f(this,x,void 0);f(this,g,void 0);const{vertexCount:s,vertexStride:a,interleavedArray:u,indicesArray:T}=e;this.vertexCount=s;const m=t.getAttribLocation(this.program,"aPosition"),F=t.getAttribLocation(this.program,"aNormal"),R=t.getAttribLocation(this.program,"aUv"),w=t.createBuffer(),M=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,w),t.bufferData(t.ARRAY_BUFFER,u,t.STATIC_DRAW),t.enableVertexAttribArray(m),t.vertexAttribPointer(m,3,t.FLOAT,!1,a*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(F),t.vertexAttribPointer(F,3,t.FLOAT,!1,a*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(R),t.vertexAttribPointer(R,2,t.FLOAT,!1,a*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,M),t.bufferData(t.ELEMENT_ARRAY_BUFFER,T,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_albedo",{type:t.FLOAT_VEC3,value:new Float32Array([1,0,0])}),h(this,N,t.getUniformBlockIndex(this.program,"Projection")),h(this,x,t.getUniformBlockIndex(this.program,"View")),h(this,g,t.getUniformBlockIndex(this.program,"Lighting"))}render(){this.gl.uniformBlockBinding(this.program,c(this,N),0),this.gl.uniformBlockBinding(this.program,c(this,x),1),this.gl.uniformBlockBinding(this.program,c(this,g),2),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}N=new WeakMap,x=new WeakMap,g=new WeakMap;var _,A,P;const Y=class extends q{constructor(t,e,i,s){super(t,$,K,y({PI:Math.PI,USE_DIFFUSE_ONLY:!0},s));f(this,_,void 0);f(this,A,void 0);f(this,P,void 0);const{vertexCount:a,vertexStride:u,interleavedArray:T,indicesArray:m}=i;this.vertexCount=a;const F=t.getAttribLocation(this.program,"aPosition"),R=t.getAttribLocation(this.program,"aUv"),w=t.createBuffer(),M=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,w),t.bufferData(t.ARRAY_BUFFER,T,t.STATIC_DRAW),t.enableVertexAttribArray(F),t.vertexAttribPointer(F,3,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(R),t.vertexAttribPointer(R,2,t.FLOAT,!1,u*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,M),t.bufferData(t.ELEMENT_ARRAY_BUFFER,m,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:t.INT,value:0});const O=Y.createTextCanvas(e);h(this,_,t.createTexture()),t.bindTexture(t.TEXTURE_2D,c(this,_)),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,O.width,O.height,0,t.RGBA,t.UNSIGNED_BYTE,O),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),h(this,A,t.getUniformBlockIndex(this.program,"Projection")),h(this,P,t.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(t){const e=document.createElement("canvas"),i=e.getContext("2d");e.width=1024,e.height=128;const s=20,a=10,u=100;i.font=`${u}px Helvetica`,i.fillStyle="#fff",i.textBaseline="middle",i.fillText(t,s,e.height/2);const{width:T}=i.measureText(t),m=s+T+40;return i.strokeStyle="#fff",i.lineWidth=5,i.beginPath(),i.moveTo(m,e.height/2),i.lineTo(e.width-a,e.height/2),i.stroke(),i.beginPath(),i.moveTo(e.width-a,e.height/2),i.lineTo(e.width-a-40,e.height/2+30),i.stroke(),i.beginPath(),i.moveTo(e.width-a,e.height/2),i.lineTo(e.width-a-40,e.height/2-30),i.stroke(),e}render(){this.gl.uniformBlockBinding(this.program,c(this,A),0),this.gl.uniformBlockBinding(this.program,c(this,P),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,c(this,_)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}};let V=Y;_=new WeakMap,A=new WeakMap,P=new WeakMap;const U=7,C=7,I=10,L=10,S=4,l=document.createElement("canvas");document.body.appendChild(l);const n=l.getContext("webgl2"),k=new rt(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);k.position=[0,0,1];k.lookAt=[0,0,0];k.updateProjectionViewMatrix();const r=new at(45*Math.PI/180,innerWidth/innerHeight,.1,100);r.position=[5.43,.2,14.06];r.lookAt=[0,0,0];r.updateProjectionMatrix();new st(r,l,!1);const D=ct({radius:.5,widthSegments:32,heightSegments:32}),v=ft({width:5,height:5/8}),d=new ht,dt={POINT_LIGHTS_COUNT:S.toString()},ut=I/U,mt=L/C;for(let o=0;o<C;o++)for(let t=0;t<U;t++){const e=new lt(n,D,dt);e.setPosition([t*ut-I/2+D.radius,o*mt-L/2+D.radius,0]);const i=X.quad_In(o/C);e.setUniform("u_metallic",{type:n.FLOAT,value:i});const s=1/U+X.quad_In(t/U);e.setUniform("u_roughness",{type:n.FLOAT,value:s}),d.addChild(e)}const J=new V(n,"roughness",v);J.setPosition([-I/2+v.width/2,-L/2-v.height,0]);d.addChild(J);const Q=new V(n,"metallic",v);Q.setPosition([-I/2-v.height,-L/2+v.width/2,0]).setRotation([0,0,Math.PI*.5]);d.addChild(Q);const B=H(n,d.children[0].program,"Projection",["projMatrix","zNear","zFar"]),Et=G(n,B.blockSize,0),p=H(n,d.children[0].program,"View",["viewMatrix","cameraPosition","time"]),_t=G(n,p.blockSize,1),b=H(n,d.children[0].program,"Lighting",["lightPositions","lightColors"]),vt=G(n,b.blockSize,2),E=[],Z=[];for(let o=0;o<S;o++)E.push(new Float32Array(3)),Z.push(new Float32Array([Math.random(),Math.random(),Math.random()]));console.log(E);requestAnimationFrame(tt);et();window.addEventListener("resize",et);function tt(o){requestAnimationFrame(tt),r.updateViewMatrix(),n.bindBuffer(n.UNIFORM_BUFFER,Et),n.bufferSubData(n.UNIFORM_BUFFER,B.uniforms.projMatrix.offset,r.projectionMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,B.uniforms.zNear.offset,new Float32Array([r.near]),0),n.bufferSubData(n.UNIFORM_BUFFER,B.uniforms.zFar.offset,new Float32Array([r.far]),0),n.bindBuffer(n.UNIFORM_BUFFER,_t),n.bufferSubData(n.UNIFORM_BUFFER,p.uniforms.viewMatrix.offset,r.viewMatrix,0),n.bufferSubData(n.UNIFORM_BUFFER,p.uniforms.cameraPosition.offset,new Float32Array(r.position),0),n.bufferSubData(n.UNIFORM_BUFFER,p.uniforms.time.offset,new Float32Array([o]),0),n.bindBuffer(n.UNIFORM_BUFFER,vt);const t=o*.001;for(let e=0;e<S;e++){const i=Math.PI*2/S;E[e][0]=Math.cos(e*i+t)*10,E[e][1]=Math.sin(e*i+t)*10,E[e][2]=Math.cos(t)+2+4,n.bufferSubData(n.UNIFORM_BUFFER,b.uniforms.lightPositions.offset+e*b.uniforms.lightPositions.size*Float32Array.BYTES_PER_ELEMENT,E[e],0),n.bufferSubData(n.UNIFORM_BUFFER,b.uniforms.lightColors.offset+e*4*Float32Array.BYTES_PER_ELEMENT,Z[e],0)}n.enable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.clearColor(.1,.1,.1,1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),d.updateWorldMatrix().render()}function et(){r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix(),l.width=innerWidth*devicePixelRatio,l.height=innerHeight*devicePixelRatio,l.style.setProperty("width",`${innerWidth}px`),l.style.setProperty("height",`${innerHeight}px`)}
