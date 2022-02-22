var Dt=Object.defineProperty;var wt=(t,e,i)=>e in t?Dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var a=(t,e,i)=>(wt(t,typeof e!="symbol"?e+"":e,i),i),ht=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var J=(t,e,i)=>(ht(t,e,"read from private field"),i?i.call(t):e.get(t)),tt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},et=(t,e,i,r)=>(ht(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i);import{c as L,s as pt,n as ft,p as At,o as Tt,a as ct,b as N,u as bt,m as _t,d as Et,i as xt,e as St,f as W,l as Ut,g as it,h as Rt,j as Ft,r as Ht,k as Ot,q as It,v as Lt,A as Pt}from"./vendor.42929781.js";var Nt=Object.defineProperty,Bt=(t,e,i)=>e in t?Nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,b=(t,e,i)=>(Bt(t,typeof e!="symbol"?e+"":e,i),i),vt=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},A=(t,e,i)=>(vt(t,e,"read from private field"),i?i.call(t):e.get(t)),q=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},kt=(t,e,i,r)=>(vt(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),rt="-- DEFINES_HOOK --",Ct=(t,e,i,r={})=>{if(Object.keys(r).length&&!i.includes(rt))throw new Error(`in order to include defines, you must provide "${rt}" in your shader code`);let s="";for(const[h,d]of Object.entries(r)){if(typeof d=="boolean"&&!d)continue;let l=`${d}`;typeof d=="number"&&Number.isInteger(d)&&(l+=".0"),s+=`#define ${h} ${l}
`}i=i.replace(rt,s);const o=t.createShader(e);if(t.shaderSource(o,i),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS))return o;const n=`
    Error in ${e===t.VERTEX_SHADER?"Vertex":"Fragment"} shader:
    ${t.getShaderInfoLog(o)}
  `;throw t.deleteShader(o),new Error(n)},dt=Ct,Xt=(t,e,i,r)=>{const s=dt(t,t.VERTEX_SHADER,e,r),o=dt(t,t.FRAGMENT_SHADER,i,r),n=t.createProgram();if(t.attachShader(n,s),t.attachShader(n,o),t.linkProgram(n),t.detachShader(n,s),t.deleteShader(s),t.detachShader(n,o),t.deleteShader(o),t.getProgramParameter(n,t.LINK_STATUS))return n;const h=new Error(`Error linking program: ${t.getProgramInfoLog(n)}`);throw t.deleteProgram(n),h},Vt=Xt,Wt=(t,e,i,r)=>{const s=t.getUniformBlockIndex(e,i),o=t.getActiveUniformBlockParameter(e,s,t.UNIFORM_BLOCK_DATA_SIZE),n=t.getActiveUniformBlockParameter(e,s,t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),h=t.getActiveUniformBlockParameter(e,s,t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),d=t.getUniformIndices(e,r),l=t.getActiveUniforms(e,d,t.UNIFORM_OFFSET),m=t.getActiveUniforms(e,d,t.UNIFORM_SIZE),u={};for(let _=0;_<r.length;_++){const c=r[_],f={index:d[_],offset:l[_],size:m[_]};u[c]=f}return{blockIndex:s,blockSize:o,usedInVertexShader:n,usedInFragmentShader:h,uniforms:u}},se=Wt,Yt=(t,e,i=0,r=t.DYNAMIC_DRAW)=>{const s=t.createBuffer();return t.bindBuffer(t.UNIFORM_BUFFER,s),t.bufferData(t.UNIFORM_BUFFER,e,r),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,i,s),s},ae=Yt,zt=(t,e,i,r)=>{let s;switch(e){case t.FLOAT:return t.uniform1f(i,r);case t.FLOAT_VEC2:return s=r,t.uniform2f(i,s[0],s[1]);case t.FLOAT_VEC3:return s=r,t.uniform3f(i,s[0],s[1],s[2]);case t.FLOAT_VEC4:return s=r,t.uniform4f(i,s[0],s[1],s[2],s[3]);case t.BOOL:case t.INT:case t.SAMPLER_2D:case t.SAMPLER_CUBE:return t.uniform1i(i,r);case t.BOOL_VEC2:case t.INT_VEC2:return s=r,t.uniform2i(i,s[0],s[1]);case t.BOOL_VEC3:case t.INT_VEC3:return s=r,t.uniform3i(i,s[0],s[1],s[2]);case t.BOOL_VEC4:case t.INT_VEC4:return s=r,t.uniform4i(i,s[0],s[1],s[2],s[3]);case t.FLOAT_MAT2:return t.uniformMatrix2fv(i,!1,r);case t.FLOAT_MAT3:return t.uniformMatrix3fv(i,!1,r);case t.FLOAT_MAT4:return t.uniformMatrix4fv(i,!1,r);default:throw new Error("wrong type for uniform")}},lt=zt,Kt=(t={})=>{const{radius:e=.5,widthSegments:i=16,heightSegments:r=Math.ceil(i*.5),phiStart:s=0,phiLength:o=Math.PI*2,thetaStart:n=0,thetaLength:h=Math.PI}=t,d=i,l=r,m=s,u=o,_=n,c=h,f=(d+1)*(l+1),x=d*l*6,M=3+3+2,y=new Float32Array(f*M),g=f>65536?new Uint32Array(x):new Uint16Array(x);let T=0,U=0,p=0;const z=_+c,E=[],R=L();for(let D=0;D<=l;D++){const w=[],F=D/l;for(let S=0;S<=d;S++,T++){const I=S/d,H=-e*Math.cos(m+I*u)*Math.sin(_+F*c),j=e*Math.cos(_+F*c),K=e*Math.sin(m+I*u)*Math.sin(_+F*c);y[T*M+0]=H,y[T*M+1]=j,y[T*M+2]=K,pt(R,H,j,K),ft(R,R),y[T*M+3]=R[0],y[T*M+4]=R[1],y[T*M+5]=R[2],y[T*M+6]=I,y[T*M+7]=1-F,w.push(U++)}E.push(w)}for(let D=0;D<l;D++)for(let w=0;w<d;w++){const F=E[D][w+1],S=E[D][w],I=E[D+1][w],H=E[D+1][w+1];(D!==0||_>0)&&(g[p*3]=F,g[p*3+1]=S,g[p*3+2]=H,p++),(D!==l-1||z<Math.PI)&&(g[p*3]=S,g[p*3+1]=I,g[p*3+2]=H,p++)}return{radius:e,vertexCount:x,vertexStride:M,interleavedArray:y,indicesArray:g}},$t=Kt,Gt=(t={})=>{const{width:e=1,height:i=1,widthSegments:r=1,heightSegments:s=1,flipUVy:o=!1}=t,n=r,h=s,d=(n+1)*(h+1),l=n*h*6,m=new Float32Array(d*3+d*2),u=d>65536?new Uint32Array(l):new Uint16Array(l);let _=0,c=0;const f=_,x=e/n,M=i/h,y=1,g=-1,T=0,U=3+2;for(let p=0;p<=h;p++){const z=p*M-i/2;for(let E=0;E<=n;E++,_++){const R=E*x-e/2;if(m[_*U+0]=R*y,m[_*U+1]=z*g,m[_*U+2]=T/2,m[_*U+3]=E/n,m[_*U+4]=o?1-p/h:p/h,p===h||E===n)continue;const D=f+E+p*(n+1),w=f+E+(p+1)*(n+1),F=f+E+(p+1)*(n+1)+1,S=f+E+p*(n+1)+1;u[c*6]=D,u[c*6+1]=w,u[c*6+2]=S,u[c*6+3]=w,u[c*6+4]=F,u[c*6+5]=S,c++}}return{width:e,height:i,vertexCount:u.length,vertexStride:U,interleavedArray:m,indicesArray:u}},ne=Gt,jt=(t={})=>{const{width:e=1,height:i=1,depth:r=1,widthSegments:s=1,heightSegments:o=1,depthSegments:n=1,uvOffsetEachFace:h=!1,flipUVy:d=!1}=t,l=s,m=o,u=n,_=(l+1)*(m+1)*2+(l+1)*(u+1)*2+(m+1)*(u+1)*2,c=(l*m*2+l*u*2+m*u*2)*6,f=3+3+2,x=new Float32Array(_*f),M=c>65536?new Uint32Array(c):new Uint16Array(c);let y=0,g=0;return B(x,M,r,i,e,u,m,4,2,1,0,-1,-1,y,g,f,h,d),B(x,M,r,i,-e,u,m,2,2,1,0,1,-1,y+=(u+1)*(m+1),g+=u*m,f,h,d),B(x,M,e,r,i,u,m,0,0,2,1,1,1,y+=(u+1)*(m+1),g+=u*m,f,h,d),B(x,M,e,r,-i,u,m,5,0,2,1,1,-1,y+=(l+1)*(u+1),g+=l*u,f,h,d),B(x,M,e,i,-r,l,m,3,0,1,2,-1,-1,y+=(l+1)*(u+1),g+=l*u,f,h,d),B(x,M,e,i,r,l,m,1,0,1,2,1,-1,y+=(l+1)*(m+1),g+=l*m,f,h,d),{width:e,height:i,depth:r,vertexCount:c,vertexStride:f,interleavedArray:x,indicesArray:M}},oe=jt;function B(t,e,i,r,s,o,n,h,d=0,l=1,m=2,u=1,_=-1,c=0,f=0,x=8,M=!1,y=!1){const g=c,T=i/o,U=r/n;for(let p=0;p<=n;p++){const z=p*U-r/2;for(let E=0;E<=o;E++,c++){const R=E*T-i/2;t[c*x+0+d]=R*u,t[c*x+0+l]=z*_,t[c*x+0+m]=s/2,t[c*x+3+d]=0,t[c*x+3+l]=0,t[c*x+3+m]=s>=0?1:-1;const D=1/6,w=D*h,F=M?w+E/o*D:E/o,S=M?y?w+D-w+p/n*D:w+p/n*D:y?1-p/n:p/n;if(t[c*x+6+0]=F,t[c*x+6+1]=S,p===n||E===o)continue;const I=g+E+p*(o+1),H=g+E+(p+1)*(o+1),j=g+E+(p+1)*(o+1)+1,K=g+E+p*(o+1)+1;e[f*6]=I,e[f*6+1]=H,e[f*6+2]=K,e[f*6+3]=H,e[f*6+4]=j,e[f*6+5]=K,f++}}}var ut=(t,e,i)=>Math.min(Math.max(t,e),i),Mt=class{constructor(){a(this,"upVector",W(0,1,0));a(this,"position",W(0,0,0));a(this,"lookAt",W(0,0,0));a(this,"projectionMatrix",N());a(this,"viewMatrix",N());a(this,"viewMatrixInverse",N());a(this,"projectionViewMatrix",N())}updateViewMatrix(){return Ut(this.viewMatrix,this.position,this.lookAt,this.upVector),xt(this.viewMatrixInverse,this.viewMatrix),this}updateProjectionViewMatrix(){return _t(this.projectionViewMatrix,this.projectionMatrix,this.viewMatrix),this}},he=class extends Mt{constructor(t,e,i,r){super();a(this,"fieldOfView");a(this,"aspect");a(this,"near");a(this,"far");this.fieldOfView=t,this.aspect=e,this.near=i,this.far=r}updateProjectionMatrix(){return At(this.projectionMatrix,this.fieldOfView,this.aspect,this.near,this.far),this}},ce=class extends Mt{constructor(t,e,i,r,s,o){super();a(this,"left");a(this,"right");a(this,"bottom");a(this,"top");a(this,"near");a(this,"far");this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}updateProjectionMatrix(){return Tt(this.projectionMatrix,this.left,this.right,this.bottom,this.top,this.near,this.far),this}},k=class{constructor(){a(this,"value",0);a(this,"damping");this.damping=.5}addForce(t){this.value+=t}update(){return this.value*this.value>1e-6?this.value*=this.damping:this.stop(),this.value}stop(){this.value=0}},de=class{constructor(t,e=document.body,i=!1,r=1){a(this,"camera");a(this,"domElement");a(this,"target",L());a(this,"minDistance",0);a(this,"maxDistance",1/0);a(this,"isEnabled",!0);a(this,"isDamping");a(this,"dampingFactor");a(this,"isZoom");a(this,"zoomSpeed");a(this,"isRotate");a(this,"rotateSpeed");a(this,"isPan");a(this,"keyPanSpeed");a(this,"enableKeys");a(this,"keys");a(this,"originTarget");a(this,"originPosition");a(this,"targetXDampedAction",new k);a(this,"targetYDampedAction",new k);a(this,"targetZDampedAction",new k);a(this,"targetThetaDampedAction",new k);a(this,"targetPhiDampedAction",new k);a(this,"targetRadiusDampedAction",new k);a(this,"_isShiftDown",!1);a(this,"_rotateStart",{x:9999,y:9999});a(this,"_rotateEnd",{x:9999,y:9999});a(this,"_roatteDelta",{x:9999,y:9999});a(this,"_spherical");a(this,"_zoomDistanceEnd",0);a(this,"_zoomDistance",0);a(this,"state","");a(this,"loopId",0);a(this,"_panStart",{x:0,y:0});a(this,"_panDelta",{x:0,y:0});a(this,"_panEnd",{x:0,y:0});a(this,"_paused",!1);a(this,"_isDebug",!1);a(this,"_outputEl");a(this,"mouseWheelForce",1);this.mouseWheelForce=r,t||console.error("camera is undefined"),this.camera=t,this.domElement=e,this.isDamping=!1,this.dampingFactor=.25,this.isZoom=!0,this.zoomSpeed=1,this.isRotate=!0,this.rotateSpeed=1,this.isPan=!0,this.keyPanSpeed=7,this.enableKeys=!0,this.keys={LEFT:"37",UP:"38",RIGHT:"39",BOTTOM:"40",SHIFT:"16"},this.originTarget=L(),this.originPosition=L(),this.originPosition[0]=t.position[0],this.originPosition[1]=t.position[0],this.originPosition[2]=t.position[0];const s=this.camera.position[0],o=this.camera.position[1],n=this.camera.position[2],h=Math.sqrt(s*s+o*o+n*n),d=Math.atan2(this.camera.position[0],this.camera.position[2]),l=Math.acos(ut(this.camera.position[1]/h,-1,1));this._spherical={radius:h,theta:d,phi:l},this._bindEvens(),this.setEventHandler(),this.startTick(),this._isDebug=i,i&&(this._outputEl=document.createElement("div"),this._outputEl.setAttribute("style",`
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 999;
      font-family: monospace;
      font-size: 14px;
      user-select: none;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 4px;
      padding: 3px 6px;
    `),document.body.appendChild(this._outputEl))}lookAt([t,e,i]){return pt(this.target,t,e,i),this}setEventHandler(){this.domElement.addEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.addEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.addEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.addEventListener("touchstart",this._touchStartHandler,!1),this.domElement.addEventListener("touchmove",this._touchMoveHandler,!1),window.addEventListener("keydown",this._onKeyDownHandler,!1),window.addEventListener("keyup",this._onKeyUpHandler,!1)}removeEventHandler(){this.domElement.removeEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.removeEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.removeEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1),this.domElement.removeEventListener("touchstart",this._touchStartHandler,!1),this.domElement.removeEventListener("touchmove",this._touchMoveHandler,!1),window.removeEventListener("keydown",this._onKeyDownHandler,!1),window.removeEventListener("keydown",this._onKeyUpHandler,!1)}startTick(){this.loopId=requestAnimationFrame(this.tick)}pause(){this._paused=!0}start(){this._paused=!1}tick(){if(!this._paused&&(this.updateDampedAction(),this.updateCamera(),this._isDebug)){const t=Math.round(this.camera.position[0]*100)/100,e=Math.round(this.camera.position[1]*100)/100,i=Math.round(this.camera.position[2]*100)/100;this._outputEl.textContent=`x: ${t} y: ${e} z: ${i}`}this.loopId=requestAnimationFrame(this.tick)}updateDampedAction(){this.target[0]+=this.targetXDampedAction.update(),this.target[1]+=this.targetYDampedAction.update(),this.target[2]+=this.targetZDampedAction.update(),this._spherical.theta+=this.targetThetaDampedAction.update(),this._spherical.phi+=this.targetPhiDampedAction.update(),this._spherical.radius+=this.targetRadiusDampedAction.update()}updateCamera(){const t=this._spherical,e=Math.sin(t.phi)*t.radius;this.camera.position[0]=e*Math.sin(t.theta)+this.target[0],this.camera.position[1]=Math.cos(t.phi)*t.radius+this.target[1],this.camera.position[2]=e*Math.cos(t.theta)+this.target[2],this.camera.lookAt[0]=this.target[0],this.camera.lookAt[1]=this.target[1],this.camera.lookAt[2]=this.target[2]}_bindEvens(){this.tick=this.tick.bind(this),this._contextMenuHandler=this._contextMenuHandler.bind(this),this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._touchStartHandler=this._touchStartHandler.bind(this),this._touchMoveHandler=this._touchMoveHandler.bind(this),this._onKeyDownHandler=this._onKeyDownHandler.bind(this),this._onKeyUpHandler=this._onKeyUpHandler.bind(this)}_contextMenuHandler(t){!this.isEnabled||t.preventDefault()}_mouseDownHandler(t){!this.isEnabled||(t.button===0?(this.state="rotate",this._rotateStart={x:t.clientX,y:t.clientY}):(this.state="pan",this._panStart={x:t.clientX,y:t.clientY}),this.domElement.addEventListener("mousemove",this._mouseMoveHandler,!1),window.addEventListener("mouseup",this._mouseUpHandler,!1))}_mouseUpHandler(){this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1)}_mouseMoveHandler(t){!this.isEnabled||(this.state==="rotate"?(this._rotateEnd={x:t.clientX,y:t.clientY},this._roatteDelta={x:this._rotateEnd.x-this._rotateStart.x,y:this._rotateEnd.y-this._rotateStart.y},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y}):this.state==="pan"&&(this._panEnd={x:t.clientX,y:t.clientY},this._panDelta={x:-.5*(this._panEnd.x-this._panStart.x),y:.5*(this._panEnd.y-this._panStart.y)},this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y}))}_mouseWheelHandler(t){const e=this.mouseWheelForce;t.deltaY>0?this.targetRadiusDampedAction.addForce(e):this.targetRadiusDampedAction.addForce(-e)}_touchStartHandler(t){let e,i;switch(t.touches.length){case 1:this.state="rotate",this._rotateStart={x:t.touches[0].clientX,y:t.touches[0].clientY};break;case 2:this.state="zoom",e=t.touches[1].clientX-t.touches[0].clientX,i=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistance=Math.sqrt(e*e+i*i);break;case 3:this.state="pan",this._panStart={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3};break}}_touchMoveHandler(t){let e,i,r;switch(t.preventDefault(),t.touches.length){case 1:if(this.state!=="rotate")return;this._rotateEnd={x:t.touches[0].clientX,y:t.touches[0].clientY},this._roatteDelta={x:(this._rotateEnd.x-this._rotateStart.x)*.5,y:(this._rotateEnd.y-this._rotateStart.y)*.5},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y};break;case 2:if(this.state!=="zoom")return;e=t.touches[1].clientX-t.touches[0].clientX,i=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistanceEnd=Math.sqrt(e*e+i*i),r=this._zoomDistanceEnd-this._zoomDistance,r*=1.5;let s=this._spherical.radius-r;s=ut(s,this.minDistance,this.maxDistance),this._zoomDistance=this._zoomDistanceEnd,this._spherical.radius=s;break;case 3:this._panEnd={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3},this._panDelta={x:this._panEnd.x-this._panStart.x,y:this._panEnd.y-this._panStart.y},this._panDelta.x*=-1,this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y};break}}_onKeyDownHandler(t){let e=0,i=0;switch(t.key){case this.keys.SHIFT:this._isShiftDown=!0;break;case this.keys.LEFT:e=-10;break;case this.keys.RIGHT:e=10;break;case this.keys.UP:i=10;break;case this.keys.BOTTOM:i=-10;break}this._isShiftDown?(this._roatteDelta={x:-e,y:i},this._updateRotateHandler()):(this._panDelta={x:e,y:i},this._updatePanHandler())}_onKeyUpHandler(t){switch(t.key){case this.keys.SHIFT:this._isShiftDown=!1;break}}_updatePanHandler(){const t=L(),e=L(),i=L();i[0]=this.target[0]-this.camera.position[0],i[1]=this.target[1]-this.camera.position[1],i[2]=this.target[2]-this.camera.position[2],ft(i,i),ct(t,i,[0,1,0]),ct(e,t,i);const r=Math.max(this._spherical.radius/2e3,.001);this.targetXDampedAction.addForce((t[0]*this._panDelta.x+e[0]*this._panDelta.y)*r),this.targetYDampedAction.addForce((t[1]*this._panDelta.x+e[1]*this._panDelta.y)*r),this.targetZDampedAction.addForce((t[2]*this._panDelta.x+e[2]*this._panDelta.y)*r)}_updateRotateHandler(){this.targetThetaDampedAction.addForce(-this._roatteDelta.x/this.domElement.clientWidth),this.targetPhiDampedAction.addForce(-this._roatteDelta.y/this.domElement.clientHeight)}},Zt=class{constructor(){a(this,"position",W(0,0,0));a(this,"rotation",W(0,0,0));a(this,"scale",W(1,1,1));a(this,"modelMatrix",N());a(this,"shouldUpdate",!0)}copyFromMatrix(t){return Et(this.modelMatrix,t),this.shouldUpdate=!1,this}setPosition(t){return it(this.position,t),this.shouldUpdate=!0,this}setScale(t){return it(this.scale,t),this.shouldUpdate=!0,this}setRotation(t){return it(this.rotation,t),this.shouldUpdate=!0,this}updateModelMatrix(){return Rt(this.modelMatrix),Ft(this.modelMatrix,this.modelMatrix,this.position),Ht(this.modelMatrix,this.modelMatrix,this.rotation[0]),Ot(this.modelMatrix,this.modelMatrix,this.rotation[1]),It(this.modelMatrix,this.modelMatrix,this.rotation[2]),Lt(this.modelMatrix,this.modelMatrix,this.scale),this.shouldUpdate=!1,this}},qt=class extends Zt{constructor(t=void 0){super();a(this,"parentNode",null);a(this,"_children",[]);a(this,"_visible",!0);a(this,"worldMatrix",N());a(this,"normalMatrix",N());a(this,"uid",bt(9));a(this,"name");this.name=t}get visible(){return this._visible}set visible(t){this._visible=t}get children(){return this._children}get siblings(){return this.parentNode?this.parentNode._children:[]}get levelIndex(){let t=0,e=this.parentNode;for(;e;)t++,e=e.parentNode;return t}setParent(t=null){if(this.parentNode){const e=this.parentNode._children.indexOf(this);e>=0&&this.parentNode._children.splice(e,1)}return t&&t.addChild(this),this.parentNode=t,this}addChild(t){return this._children.push(t),this}updateWorldMatrix(t=null){this.shouldUpdate&&this.updateModelMatrix(),t?_t(this.worldMatrix,t,this.modelMatrix):Et(this.worldMatrix,this.modelMatrix),xt(this.normalMatrix,this.worldMatrix),St(this.normalMatrix,this.normalMatrix);for(let e=0;e<this._children.length;e++)this._children[e].updateWorldMatrix(this.worldMatrix);return this}traverse(t,e=0){t(this,e),e++;for(let i=0;i<this._children.length;i++)this._children[i].traverse(t,e)}findChild(t){if(t(this))return this;let e=null;for(let i=0;i<this._children.length&&!(e=this._children[i].findChild(t));i++);return e}findChildByName(t){if(this.name===t)return this;let e=null;for(let i=0;i<this._children.length&&!(e=this._children[i].findChildByName(t));i++);return e}findParent(t){if(t(this))return this;let e=null,i=this.parentNode;for(;i&&!(e=i.findParent(t));)i=i==null?void 0:i.parentNode;return e}findParentByName(t){if(this.name===t)return this;let e=null,i=this.parentNode;for(;i&&!(e=i.findParentByName(t));)i=i==null?void 0:i.parentNode;return e}render(){if(!!this._visible)for(let t=0;t<this._children.length;t++)this._children[t].render()}},C,Q=class extends qt{constructor(t,e,i,r={},s){super(s);if(b(this,"gl"),b(this,"vao"),b(this,"vertexCount"),q(this,C,new Map),b(this,"boundingBox"),b(this,"program"),this.gl=t,this.vao=t.createVertexArray(),this.program=Vt(t,e,i,r),this.program.__SPECTOR_Metadata={name:s,shaderDefines:r},!this.setUniform(Q.WORLD_MATRIX_UNIFORM_NAME,{type:t.FLOAT_MAT4}))throw new Error(`Each Drawable is expected to have a mat4 ${Q.WORLD_MATRIX_UNIFORM_NAME} implemented in shader`)}setUniform(t,{type:e,value:i}){const r=this.gl;let s;if(s=A(this,C).get(t))s.value=i;else{const o=r.getUniformLocation(this.program,t);if(!o)return console.error(`uniform with name ${t} was not found in the program`),!1;s={type:e,location:o,value:i},A(this,C).set(t,s)}return i!=null&&(r.useProgram(this.program),lt(r,s.type,s.location,i)),!0}updateUniform(t,e){let i;if(i=this.getUniform(t)){i.value=e;const r=this.gl;return r.useProgram(this.program),lt(r,i.type,i.location,e),!0}return!1}getUniform(t){let e;return(e=A(this,C).get(t))?e:(console.error("can't locate uniform with that name"),null)}updateWorldMatrix(t){return super.updateWorldMatrix(t),this.updateUniform(Q.WORLD_MATRIX_UNIFORM_NAME,this.worldMatrix),this}destroy(){A(this,C).clear();const t=this.gl;t.deleteVertexArray(this.vao),t.deleteProgram(this.program)}},yt=Q;C=new WeakMap;b(yt,"WORLD_MATRIX_UNIFORM_NAME","u_worldMatrix");var Qt=document.createElement("canvas"),gt=Qt.getContext("webgl2"),O=gt.MAX_TEXTURE_SIZE,Z=gt.RGB,st,v,at=!1,P,X,V,nt=class{constructor(){if(q(this,P,[]),q(this,X,[]),q(this,V,document.createElement("div")),at){const e=document.createElement("style"),i="hwoa-rang-texture-atlas-debug";e.setAttribute("type","text/css");const r=`
        #${i} {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          transform-origin: 100% 100%;
          width: ${400}px;
          max-height: 100vh;
          overflow: scroll;
        }
        #${i} canvas {
          max-width: 100%;
        }
      `;e.appendChild(document.createTextNode(r)),document.getElementsByTagName("head")[0].appendChild(e),kt(this,V,document.createElement("div")),A(this,V).setAttribute("id",i),document.body.appendChild(A(this,V))}}static set debugMode(t){at=t}static get textureSize(){return O}static set textureSize(t){O=t}static set textureFormat(t){Z=t}static set gl(t){v=t}static getInstance(){if(!v)throw new Error("You must provide a WebGL2RenderingContext first via setting the TextureAtlas.gl property!");return st||(st=new nt),st}pack(t,e,i=1){const r=()=>{const c=document.createElement("canvas");A(this,V).appendChild(c),c.width=O,c.height=O;const f=v.createTexture();v.bindTexture(v.TEXTURE_2D,f),v.texParameterf(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.LINEAR_MIPMAP_LINEAR),v.texImage2D(v.TEXTURE_2D,0,Z,O,O,0,Z,v.UNSIGNED_BYTE,null),v.generateMipmap(v.TEXTURE_2D),v.bindTexture(v.TEXTURE_2D,null);const x=new Pt(c);return A(this,P).push(x),A(this,X).push(f),x};let s=A(this,P)[A(this,P).length-1];s||(s=r());const o=i===1?e:nt.scaleDownDrawableByFactor(e,i);s.pack(t,o)||(s=r(),s.pack(t,o));const h=s.uv()[t];for(let c=0;c<h.length;c++)h[c][0]*=O,h[c][1]*=O;const d=A(this,X)[A(this,X).length-1],l=h[0][0],m=h[0][1],u=h[2][0]-h[0][0],_=h[2][1]-h[0][1];return v.bindTexture(v.TEXTURE_2D,d),v.texSubImage2D(v.TEXTURE_2D,0,l,m,u,_,Z,v.UNSIGNED_BYTE,o),v.generateMipmap(v.TEXTURE_2D),v.bindTexture(v.TEXTURE_2D,null),this}getUv2(t){let e=-1;for(let i=0;i<A(this,P).length;i++){const s=A(this,P)[i].uv2()[t];if(s){e=i;const o=A(this,X)[e];return[s,o]}}throw new Error("Can't get uvs")}},Jt=nt;P=new WeakMap;X=new WeakMap;V=new WeakMap;b(Jt,"scaleDownDrawableByFactor",(t,e)=>{const i=document.createElement("canvas"),r=t instanceof HTMLImageElement?t.naturalWidth:t.width,s=t instanceof HTMLImageElement?t.naturalHeight:t.height;i.width=r/e,i.height=s/e,at&&console.log(`Scaled ${r}x${s} project image to ${i.width}x${i.height}`);const o=i.getContext("2d");return o.imageSmoothingQuality="high",o.drawImage(t,0,0,r,s,0,0,i.width,i.height),i});var le=class{static getSupportedFormats(t){return{astc:t.getExtension("WEBGL_compressed_texture_astc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),etc2:t.getExtension("WEBGL_compressed_texture_etc"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")}}static async loadCompressed(t,e=!0){const i=await fetch(t).then(s=>s.arrayBuffer()),r=new Y(i,1);return{mipmaps:r.mipmaps(e),width:r.pixelWidth,height:r.pixelHeight,format:r.glInternalFormat,mipmapCount:r.numberOfMipmapLevels}}},ot=class{constructor(t,e){a(this,"arrayBuffer");a(this,"glType");a(this,"glTypeSize");a(this,"glFormat");a(this,"glInternalFormat");a(this,"numberOfArrayElements");a(this,"numberOfMipmapLevels");a(this,"bytesOfKeyValueData");a(this,"numberOfFaces");a(this,"loadType");a(this,"pixelWidth");a(this,"pixelHeight");a(this,"pixelDepth");this.arrayBuffer=t;var i=new Uint8Array(this.arrayBuffer,0,12);if(i[0]!==171||i[1]!==75||i[2]!==84||i[3]!==88||i[4]!==32||i[5]!==49||i[6]!==49||i[7]!==187||i[8]!==13||i[9]!==10||i[10]!==26||i[11]!==10){console.error("texture missing KTX identifier");return}var r=Uint32Array.BYTES_PER_ELEMENT,s=new DataView(this.arrayBuffer,12,13*r),o=s.getUint32(0,!0),n=o===67305985;if(this.glType=s.getUint32(1*r,n),this.glTypeSize=s.getUint32(2*r,n),this.glFormat=s.getUint32(3*r,n),this.glInternalFormat=s.getUint32(4*r,n),this.pixelWidth=s.getUint32(6*r,n),this.pixelHeight=s.getUint32(7*r,n),this.pixelDepth=s.getUint32(8*r,n),this.numberOfArrayElements=s.getUint32(9*r,n),this.numberOfFaces=s.getUint32(10*r,n),this.numberOfMipmapLevels=s.getUint32(11*r,n),this.bytesOfKeyValueData=s.getUint32(12*r,n),this.glType!==0){console.warn("only compressed formats currently supported");return}else this.numberOfMipmapLevels=Math.max(1,this.numberOfMipmapLevels);if(this.pixelHeight===0||this.pixelDepth!==0){console.warn("only 2D textures currently supported");return}if(this.numberOfArrayElements!==0){console.warn("texture arrays not currently supported");return}if(this.numberOfFaces!==e){console.warn("number of faces expected"+e+", but found "+this.numberOfFaces);return}this.loadType=ot.COMPRESSED_2D}mipmaps(t){for(var e=[],i=ot.HEADER_LEN+this.bytesOfKeyValueData,r=this.pixelWidth,s=this.pixelHeight,o=t?this.numberOfMipmapLevels:1,n=0;n<o;n++){var h=new Int32Array(this.arrayBuffer,i,1)[0];i+=4;for(var d=0;d<this.numberOfFaces;d++){var l=new Uint8Array(this.arrayBuffer,i,h);e.push({data:l,width:r,height:s}),i+=h,i+=3-(h+3)%4}r=Math.max(1,r*.5),s=Math.max(1,s*.5)}return e}},Y=ot;b(Y,"HEADER_LEN",12+13*4);b(Y,"COMPRESSED_2D",0);b(Y,"COMPRESSED_3D",1);b(Y,"TEX_2D",2);b(Y,"TEX_3D",3);var te=`#version 300 es

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

uniform mat4 u_worldMatrix;

in vec4 aPosition;

void main () {
  gl_Position = projMatrix * viewMatrix * u_worldMatrix * aPosition;
}`,ee=`#version 300 es
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

uniform vec4 u_color;

out vec4 finalColor;

void main () {
  finalColor = u_color;
}`;const mt=$t({radius:.2,widthSegments:20,heightSegments:20});var $,G;class ue extends yt{constructor(e){super(e,te,ee,mt);tt(this,$,void 0);tt(this,G,void 0);const{vertexCount:i,vertexStride:r,interleavedArray:s,indicesArray:o}=mt;this.vertexCount=i;const n=e.getAttribLocation(this.program,"aPosition"),h=e.createBuffer(),d=e.createBuffer();this.gl.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,3,e.FLOAT,!1,r*Float32Array.BYTES_PER_ELEMENT,0*Float32Array.BYTES_PER_ELEMENT),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,d),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.gl.bindVertexArray(null),this.updateUniform("u_worldMatrix",this.worldMatrix),this.setUniform("u_color",{type:e.FLOAT_VEC4}),et(this,$,e.getUniformBlockIndex(this.program,"Projection")),et(this,G,e.getUniformBlockIndex(this.program,"View"))}set color(e){this.updateUniform("u_color",e)}render(){this.gl.uniformBlockBinding(this.program,J(this,$),0),this.gl.uniformBlockBinding(this.program,J(this,G),1),this.gl.useProgram(this.program),this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.vertexCount,this.gl.UNSIGNED_SHORT,0),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindVertexArray(null)}}$=new WeakMap,G=new WeakMap;export{de as C,yt as D,ue as L,ce as O,he as P,qt as S,le as T,ne as a,se as b,$t as c,ae as d,oe as e};