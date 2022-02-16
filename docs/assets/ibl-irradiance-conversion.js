var Lt=Object.defineProperty;var ht=Object.getOwnPropertySymbols;var Bt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var dt=(o,t,n)=>t in o?Lt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,J=(o,t)=>{for(var n in t||(t={}))Bt.call(t,n)&&dt(o,n,t[n]);if(ht)for(var n of ht(t))Mt.call(t,n)&&dt(o,n,t[n]);return o};var mt=(o,t,n)=>{if(!t.has(o))throw TypeError("Cannot "+n)};var A=(o,t,n)=>(mt(o,t,"read from private field"),n?n.call(o):t.get(o)),b=(o,t,n)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,n)},P=(o,t,n,r)=>(mt(o,t,"write to private field"),r?r.call(o,n):t.set(o,n),n);import{t as St}from"./assets/vendor.19aed32e.js";import{D as ut,O as Nt,P as It,C as Dt,c as yt,a as Ot,S as Ct,b as ot,d as at}from"./assets/index.75855a8b.js";function L(){var o=document.createElement("canvas"),t="t",n=1,r=2.2,i=null,a,l;return o.__defineGetter__("exposure",function(){return n}),o.__defineSetter__("exposure",function(c){n=c,i&&(S(i,n,r,l.data),a.putImageData(l,0,0))}),o.__defineGetter__("gamma",function(){return r}),o.__defineSetter__("gamma",function(c){r=c,i&&(S(i,n,r,l.data),a.putImageData(l,0,0))}),o.__defineGetter__("dataFloat",function(){return tt(i)}),o.__defineGetter__("dataRGBE",function(){return i}),o.toHDRBlob=function(c,s,x){function d(E,q,K){var R=E.createShader(K);return E.shaderSource(R,q),E.compileShader(R),R}function p(E,q,K){var R=E.createProgram(),ct,ft;return E.attachShader(R,ct=d(E,q,E.VERTEX_SHADER)),E.attachShader(R,ft=d(E,K,E.FRAGMENT_SHADER)),E.linkProgram(R),E.deleteShader(ct),E.deleteShader(ft),R}var u=s&&s.match(/rgb9_e5/i)?new Uint8Array(xt(tt(i)).buffer):new Uint8Array(i.buffer),m=`precision highp float;
attribute vec3 position;
varying vec2 tex;
void main() { tex = position.xy/2.0+0.5; gl_Position = vec4(position, 1.0); }`,_=`precision highp float;
precision highp sampler2D;
uniform sampler2D tx;
varying vec2 tex;
void main() { gl_FragColor = texture2D(tx,tex); }`,g=this.width,F=this.height;if(g*F*4<u.byteLength)return console.error("not big enough.");var v=document.createElement("canvas");v.width=g,v.height=F;var h=v.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0}),V=h.createTexture();h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,V),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!0),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MAG_FILTER,h.NEAREST),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MIN_FILTER,h.NEAREST),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_S,h.CLAMP_TO_EDGE),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_T,h.CLAMP_TO_EDGE),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,g,F,0,h.RGBA,h.UNSIGNED_BYTE,new Uint8Array(u.buffer));var w=p(h,m,_),M=h.getUniformLocation(w,"tx"),Pt=new Float32Array([-1,-1,0,1,-1,0,1,1,0,1,1,0,-1,1,0,-1,-1,0]),Ut=h.createBuffer();if(h.enableVertexAttribArray(0),h.bindBuffer(h.ARRAY_BUFFER,Ut),h.bufferData(h.ARRAY_BUFFER,Pt,h.STATIC_DRAW),h.vertexAttribPointer(0,3,h.FLOAT,!1,0,0),h.useProgram(w),h.uniform1i(M,0),h.drawArrays(h.TRIANGLES,0,6),h.deleteTexture(V),h.deleteProgram(w),c)return v.toBlob(c)},o.__defineGetter__("src",function(){return t}),o.__defineSetter__("src",function(c){if(t=c,a&&a.clearRect(0,0,this.width,this.height),c.match(/\.hdr$/i))Ht(c,function(x,d,p){i=x,this.width=this.style.width=d,this.height=this.style.height=p,a=this.getContext("2d"),l=a.getImageData(0,0,d,p),S(x,n,r,l.data),a.putImageData(l,0,0),this.onload&&this.onload()}.bind(o));else if(c.match(/\.rgb9_e5\.png$/i)){var s=new Image;s.src=c,s.onload=function(){var x=document.createElement("canvas"),d=this.width=this.style.width=x.width=s.width,p=this.height=this.style.height=x.height=s.height,u=x.getContext("webgl"),m=u.createTexture();u.bindTexture(u.TEXTURE_2D,m),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,s),fb=u.createFramebuffer(),u.bindFramebuffer(u.FRAMEBUFFER,fb),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,m,0);var _=new Uint8Array(d*p*4);u.readPixels(0,0,d,p,u.RGBA,u.UNSIGNED_BYTE,_),u.deleteTexture(m),u.deleteFramebuffer(fb),this.dataRAW=new Uint32Array(_.buffer),i=vt(pt(this.dataRAW)),a=this.getContext("2d"),l=a.getImageData(0,0,d,p),S(i,n,r,l.data),a.putImageData(l,0,0),this.onload&&this.onload()}.bind(o)}else if(c.match(/\.hdr\.png$|\.rgbe\.png/i)){var s=new Image;s.src=c,s.onload=function(){var d=document.createElement("canvas"),p=this.width=this.style.width=d.width=s.width,u=this.height=this.style.height=d.height=s.height,m=d.getContext("webgl"),_=m.createTexture();m.bindTexture(m.TEXTURE_2D,_),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,m.RGBA,m.UNSIGNED_BYTE,s),fb=m.createFramebuffer(),m.bindFramebuffer(m.FRAMEBUFFER,fb),m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,_,0);var g=new Uint8Array(p*u*4);m.readPixels(0,0,p,u,m.RGBA,m.UNSIGNED_BYTE,g),m.deleteTexture(_),m.deleteFramebuffer(fb),i=g,a=this.getContext("2d"),l=a.getImageData(0,0,p,u),S(i,n,r,l.data),a.putImageData(l,0,0),this.onload&&this.onload()}.bind(o)}}),o}function Gt(o,t){for(var n in t)o[n]=t[n];return o}function Ht(o,t){var n=Gt(new XMLHttpRequest,{responseType:"arraybuffer"});return n.onerror=t.bind(n,!1),n.onload=function(){if(this.status>=400)return this.onerror();for(var r="",i=0,a=new Uint8Array(this.response),l;!r.match(/\n\n[^\n]+\n/g);)r+=String.fromCharCode(a[i++]);if(l=r.match(/FORMAT=(.*)$/m)[1],l!="32-bit_rle_rgbe")return console.warn("unknown format : "+l),this.onerror();for(var c=r.split(/\n/).reverse()[1].split(" "),s=c[3]*1,x=c[1]*1,d=new Uint8Array(s*x*4),p=0,u=0;u<x;u++){var m=a.slice(i,i+=4),_=[];if(m[0]!=2||m[1]!=2||m[2]&128){var g=s,F=0;for(i-=4;g>0;)if(d.set(a.slice(i,i+=4),p),d[p]==1&&d[p+1]==1&&d[p+2]==1){for(d[p+3]<<F;v>0;v--)d.set(d.slice(p-4,p),p),p+=4,g--;F+=8}else g--,p+=4,F=0}else{if((m[2]<<8)+m[3]!=s)return console.warn("HDR line mismatch .."),this.onerror();for(var v=0;v<4;v++)for(var h=v*s,V=(v+1)*s,w,M;h<V;)if(w=a.slice(i,i+=2),w[0]>128)for(M=w[0]-128;M-- >0;)_[h++]=w[1];else for(M=w[0]-1,_[h++]=w[1];M-- >0;)_[h++]=a[i++];for(var v=0;v<s;v++)d[p++]=_[v],d[p++]=_[v+s],d[p++]=_[v+2*s],d[p++]=_[v+3*s]}}t&&t(d,s,x)},n.open("GET",o,!0),n.send(null),n}function xt(o,x){for(var n,r,i,a,l,c,s=o.byteLength/12|0,x=x||new Uint32Array(s),d=0;d<s;d++)n=Math.min(32768,o[d*3]),r=Math.min(32768,o[d*3+1]),i=Math.min(32768,o[d*3+2]),a=Math.max(Math.max(n,r),i),l=Math.max(-16,Math.floor(Math.log2(a)))+16,c=Math.pow(2,l-24),Math.floor(a/c+.5)==511&&(c*=2,l+=1),x[d]=(Math.floor(n/c+.5)<<23)+(Math.floor(r/c+.5)<<14)+(Math.floor(i/c+.5)<<5)+(l|0);return x}function pt(o,a){for(var n,r,i=o.byteLength>>2,a=a||new Float32Array(i*3),l=0;l<i;l++)n=o[l],r=Math.pow(2,(n&31)-24),a[l*3]=(n>>>23)*r,a[l*3+1]=(n>>>14&511)*r,a[l*3+2]=(n>>>5&511)*r;return a}function vt(o,s){for(var n,r,i,a,l,c=o.byteLength/12|0,s=s||new Uint8Array(c*4),x=0;x<c;x++)n=o[x*3],r=o[x*3+1],i=o[x*3+2],a=Math.max(Math.max(n,r),i),e=Math.ceil(Math.log2(a)),l=Math.pow(2,e-8),s[x*4]=n/l|0,s[x*4+1]=r/l|0,s[x*4+2]=i/l|0,s[x*4+3]=e+128;return s}function tt(o,i){for(var n,r=o.byteLength>>2,i=i||new Float32Array(r*3),a=0;a<r;a++)n=Math.pow(2,o[a*4+3]-(128+8)),i[a*3]=o[a*4]*n,i[a*3+1]=o[a*4+1]*n,i[a*3+2]=o[a*4+2]*n;return i}function S(o,t,n,c){t=Math.pow(2,t===void 0?1:t)/2,n===void 0&&(n=2.2);for(var i=1/n,a,l=o.byteLength>>2,c=c||new Uint8ClampedArray(l*4),s=0;s<l;s++)a=t*Math.pow(2,o[s*4+3]-(128+8)),c[s*4]=255*Math.pow(o[s*4]*a,i),c[s*4+1]=255*Math.pow(o[s*4+1]*a,i),c[s*4+2]=255*Math.pow(o[s*4+2]*a,i),c[s*4+3]=255;return c}function Xt(o,t,n,l){t=Math.pow(2,t===void 0?1:t)/2,n===void 0&&(n=2.2);for(var i=1/n,a=o.byteLength/12|0,l=l||new Uint8ClampedArray(a*4),c=0;c<a;c++)l[c*4]=255*Math.pow(o[c*3]*t,i),l[c*4+1]=255*Math.pow(o[c*3+1]*t,i),l[c*4+2]=255*Math.pow(o[c*3+2]*t,i),l[c*4+3]=255;return l}L.floatToRgbe=vt;L.rgbeToFloat=tt;L.floatToRgb9_e5=xt;L.rgb9_e5ToFloat=pt;L.rgbeToLDR=S;L.floatToLDR=Xt;var _t=`#version 300 es

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
}`,Et=`#version 300 es
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
    
    
    vec3 F0 = mix(vec3(0.04), u_albedo, u_metallic);

    
    vec3 Lo = vec3(0.0);
    
    for (int i = 0; i < POINT_LIGHTS_COUNT; i++) {
        
        vec3 L = normalize(pointLightPositions[i] - vWorldPos);
        
        vec3 H = normalize(V + L);

        
        float distance = length(pointLightPositions[i] - vWorldPos);
        
        
        float attenuation = pointLightIntensity / (distance * distance);
        
        
        vec3 radiance = pointLightColors[i] * attenuation;

        float NdotV = max(dot(N, V), 0.0000001); 
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
    
    
    Lo = pow(Lo, vec3(1.0 / 2.2));

    
    vec3 ambient = vec3(0.3) * u_albedo;
    vec3 color = ambient + Lo;
    finalColor = vec4(color, 1.0);
  #else

    finalColor = texture(u_diffuse, vUv, -0.5);
  

  #endif
}`,O,C,G;class Vt extends ut{constructor(t,n,r){super(t,_t,Et,J({USE_PBR:!0,PI:Math.PI},r),"sphere");b(this,O,void 0);b(this,C,void 0);b(this,G,void 0);const{vertexCount:i,vertexStride:a,interleavedArray:l,indicesArray:c}=n;this.vertexCount=i;const s=t.getAttribLocation(this.program,"aPosition"),x=t.getAttribLocation(this.program,"aNormal"),d=t.getAttribLocation(this.program,"aUv"),p=t.createBuffer(),u=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,p),t.bufferData(t.ARRAY_BUFFER,l,t.STATIC_DRAW),t.enableVertexAttribArray(s),t.vertexAttribPointer(s,3,t.FLOAT,!1,a*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(x),t.vertexAttribPointer(x,3,t.FLOAT,!1,a*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,a*Float32Array.BYTES_PER_ELEMENT,6*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,u),t.bufferData(t.ELEMENT_ARRAY_BUFFER,c,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_albedo",{type:t.FLOAT_VEC3,value:new Float32Array([1,0,0])}),P(this,O,t.getUniformBlockIndex(this.program,"Projection")),P(this,C,t.getUniformBlockIndex(this.program,"View")),P(this,G,t.getUniformBlockIndex(this.program,"Lighting"))}render(){this.gl.uniformBlockBinding(this.program,A(this,O),0),this.gl.uniformBlockBinding(this.program,A(this,C),1),this.gl.uniformBlockBinding(this.program,A(this,G),2),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}}O=new WeakMap,C=new WeakMap,G=new WeakMap;var D,H,X;const lt=class extends ut{constructor(t,n,r,i){super(t,_t,Et,J({PI:Math.PI,USE_DIFFUSE_ONLY:!0},i));b(this,D,void 0);b(this,H,void 0);b(this,X,void 0);const{vertexCount:a,vertexStride:l,interleavedArray:c,indicesArray:s}=r;this.vertexCount=a;const x=t.getAttribLocation(this.program,"aPosition"),d=t.getAttribLocation(this.program,"aUv"),p=t.createBuffer(),u=t.createBuffer();this.gl.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,p),t.bufferData(t.ARRAY_BUFFER,c,t.STATIC_DRAW),t.enableVertexAttribArray(x),t.vertexAttribPointer(x,3,t.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,l*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,u),t.bufferData(t.ELEMENT_ARRAY_BUFFER,s,t.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_diffuse",{type:t.INT,value:0});const m=lt.createTextCanvas(n);P(this,D,t.createTexture()),t.bindTexture(t.TEXTURE_2D,A(this,D)),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,m.width,m.height,0,t.RGBA,t.UNSIGNED_BYTE,m),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),P(this,H,t.getUniformBlockIndex(this.program,"Projection")),P(this,X,t.getUniformBlockIndex(this.program,"View"))}static createTextCanvas(t){const n=document.createElement("canvas"),r=n.getContext("2d");n.width=1024,n.height=128;const i=20,a=10,l=100;r.font=`${l}px Helvetica`,r.fillStyle="#fff",r.textBaseline="middle",r.fillText(t,i,n.height/2);const{width:c}=r.measureText(t),s=i+c+40;return r.strokeStyle="#fff",r.lineWidth=5,r.beginPath(),r.moveTo(s,n.height/2),r.lineTo(n.width-a,n.height/2),r.stroke(),r.beginPath(),r.moveTo(n.width-a,n.height/2),r.lineTo(n.width-a-40,n.height/2+30),r.stroke(),r.beginPath(),r.moveTo(n.width-a,n.height/2),r.lineTo(n.width-a-40,n.height/2-30),r.stroke(),n}render(){this.gl.uniformBlockBinding(this.program,A(this,H),0),this.gl.uniformBlockBinding(this.program,A(this,X),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,A(this,D)),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindVertexArray(null)}};let rt=lt;D=new WeakMap,H=new WeakMap,X=new WeakMap;var kt="/14-Hamarikyu_Bridge_B_3k.hdr";const et=new L;et.src=kt;et.src=document.body.appendChild(et);const k=7,nt=7,j=10,$=10,z=4,Q=["aces","filmic","lottes","reinhard","reinhard2","uchimura","uncharted","unreal"],Tt=new Float32Array([2]),gt=new Float32Array([40]),it=new St.exports.Pane;it.element.parentNode.style.setProperty("width","340px");it.addBlade({view:"list",label:"tone mapping mode",options:Q.map(o=>({text:o,value:o})),value:Q[2]}).on("change",({value:o})=>{Tt[0]=Q.indexOf(o)});it.addBlade({view:"slider",label:"point light luminance",min:0,max:50,value:20}).on("change",({value:o})=>{gt[0]=o});const U=document.createElement("canvas");document.body.appendChild(U);const f=U.getContext("webgl2"),st=new Nt(-innerWidth/2,innerWidth/2,innerHeight/2,-innerHeight/2,0,2);st.position=[0,0,1];st.lookAt=[0,0,0];st.updateProjectionViewMatrix();const T=new It(45*Math.PI/180,innerWidth/innerHeight,.1,100);T.position=[5.43,.2,14.06];T.lookAt=[0,0,0];T.updateProjectionMatrix();new Dt(T,U,!1);const Z=yt({radius:.5,widthSegments:32,heightSegments:32}),y=Ot({width:5,height:5/8}),B=new Ct,Wt={POINT_LIGHTS_COUNT:z.toString()},Yt=j/k,zt=$/nt;for(let o=0;o<nt;o++)for(let t=0;t<k;t++){const n=new Vt(f,Z,Wt);n.setPosition([t*Yt-j/2+Z.radius,o*zt-$/2+Z.radius,0]);const r=o/nt;n.setUniform("u_metallic",{type:f.FLOAT,value:r});const i=1/k+t/k;n.setUniform("u_roughness",{type:f.FLOAT,value:i}),B.addChild(n)}const wt=new rt(f,"roughness",y);wt.setPosition([-j/2+y.width/2,-$/2-y.height,0]);B.addChild(wt);const Rt=new rt(f,"metallic",y);Rt.setPosition([-j/2-y.height,-$/2+y.width/2,0]).setRotation([0,0,Math.PI*.5]);B.addChild(Rt);const W=ot(f,B.children[0].program,"Projection",["projMatrix","zNear","zFar"]),jt=at(f,W.blockSize,0),Y=ot(f,B.children[0].program,"View",["viewMatrix","cameraPosition","time"]),$t=at(f,Y.blockSize,1),N=ot(f,B.children[0].program,"Lighting",["pointLightPositions","pointLightColors","pointLightIntensity","tonemappingMode"]),qt=at(f,N.blockSize,2),I=[],At=[];for(let o=0;o<z;o++)I.push(new Float32Array(3)),At.push(new Float32Array([Math.random(),Math.random(),Math.random()]));console.log(I);requestAnimationFrame(Ft);bt();window.addEventListener("resize",bt);function Ft(o){requestAnimationFrame(Ft),T.updateViewMatrix(),f.bindBuffer(f.UNIFORM_BUFFER,jt),f.bufferSubData(f.UNIFORM_BUFFER,W.uniforms.projMatrix.offset,T.projectionMatrix,0),f.bufferSubData(f.UNIFORM_BUFFER,W.uniforms.zNear.offset,new Float32Array([T.near]),0),f.bufferSubData(f.UNIFORM_BUFFER,W.uniforms.zFar.offset,new Float32Array([T.far]),0),f.bindBuffer(f.UNIFORM_BUFFER,$t),f.bufferSubData(f.UNIFORM_BUFFER,Y.uniforms.viewMatrix.offset,T.viewMatrix,0),f.bufferSubData(f.UNIFORM_BUFFER,Y.uniforms.cameraPosition.offset,new Float32Array(T.position),0),f.bufferSubData(f.UNIFORM_BUFFER,Y.uniforms.time.offset,new Float32Array([o]),0),f.bindBuffer(f.UNIFORM_BUFFER,qt);const t=o*.001;for(let n=0;n<z;n++){const r=Math.PI*2/z;I[n][0]=Math.cos(n*r+t)*10,I[n][1]=Math.sin(n*r+t)*10,I[n][2]=Math.cos(t)+2+4,f.bufferSubData(f.UNIFORM_BUFFER,N.uniforms.pointLightPositions.offset+n*N.uniforms.pointLightPositions.size*Float32Array.BYTES_PER_ELEMENT,I[n],0),f.bufferSubData(f.UNIFORM_BUFFER,N.uniforms.pointLightColors.offset+n*4*Float32Array.BYTES_PER_ELEMENT,At[n],0)}f.bufferSubData(f.UNIFORM_BUFFER,N.uniforms.tonemappingMode.offset,Tt,0),f.bufferSubData(f.UNIFORM_BUFFER,N.uniforms.pointLightIntensity.offset,gt,0),f.enable(f.DEPTH_TEST),f.enable(f.BLEND),f.blendFunc(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA),f.viewport(0,0,f.drawingBufferWidth,f.drawingBufferHeight),f.clearColor(.1,.1,.1,1),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT),B.updateWorldMatrix().render()}function bt(){T.aspect=innerWidth/innerHeight,T.updateProjectionMatrix(),U.width=innerWidth*devicePixelRatio,U.height=innerHeight*devicePixelRatio,U.style.setProperty("width",`${innerWidth}px`),U.style.setProperty("height",`${innerHeight}px`)}
