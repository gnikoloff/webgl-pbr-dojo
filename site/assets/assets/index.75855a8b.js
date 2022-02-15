var mt=Object.defineProperty;var pt=(t,i,e)=>i in t?mt(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var a=(t,i,e)=>(pt(t,typeof i!="symbol"?i+"":i,e),e);import{f as X,c as F,s as rt,n as nt,p as _t,o as ft,a as et,b as k,u as xt,m as ot,d as ht,i as dt,e as Et,l as Mt,g as K,h as vt,j as wt,r as yt,k as gt,q as Dt,v as St,A as At}from"./vendor.19aed32e.js";var Tt=Object.defineProperty,bt=(t,i,e)=>i in t?Tt(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,I=(t,i,e)=>(bt(t,typeof i!="symbol"?i+"":i,e),e),ct=(t,i,e)=>{if(!i.has(t))throw TypeError("Cannot "+e)},f=(t,i,e)=>(ct(t,i,"read from private field"),e?e.call(t):i.get(t)),V=(t,i,e)=>{if(i.has(t))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(t):i.set(t,e)},Rt=(t,i,e,r)=>(ct(t,i,"write to private field"),r?r.call(t,e):i.set(t,e),e),Z="-- DEFINES_HOOK --",Ut=(t,i,e,r={})=>{if(Object.keys(r).length&&!e.includes(Z))throw new Error(`in order to include defines, you must provide "${Z}" in your shader code`);let s="";for(const[h,l]of Object.entries(r)){if(typeof l=="boolean"&&!l)continue;let p=`${l}`;typeof l=="number"&&Number.isInteger(l)&&(p+=".0"),s+=`#define ${h} ${p}
`}e=e.replace(Z,s);const n=t.createShader(i);if(t.shaderSource(n,e),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS))return n;const o=`
    Error in ${i===t.VERTEX_SHADER?"Vertex":"Fragment"} shader:
    ${t.getShaderInfoLog(n)}
  `;throw t.deleteShader(n),new Error(o)},it=Ut,Ht=(t,i,e,r)=>{const s=it(t,t.VERTEX_SHADER,i,r),n=it(t,t.FRAGMENT_SHADER,e,r),o=t.createProgram();if(t.attachShader(o,s),t.attachShader(o,n),t.linkProgram(o),t.detachShader(o,s),t.deleteShader(s),t.detachShader(o,n),t.deleteShader(n),t.getProgramParameter(o,t.LINK_STATUS))return o;const h=new Error(`Error linking program: ${t.getProgramInfoLog(o)}`);throw t.deleteProgram(o),h},It=Ht,Ft=(t,i,e,r)=>{const s=t.getUniformBlockIndex(i,e),n=t.getActiveUniformBlockParameter(i,s,t.UNIFORM_BLOCK_DATA_SIZE),o=t.getActiveUniformBlockParameter(i,s,t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),h=t.getActiveUniformBlockParameter(i,s,t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),l=t.getUniformIndices(i,r),p=t.getActiveUniforms(i,l,t.UNIFORM_OFFSET),M=t.getActiveUniforms(i,l,t.UNIFORM_SIZE),_={};for(let u=0;u<r.length;u++){const c=r[u],v={index:l[u],offset:p[u],size:M[u]};_[c]=v}return{blockIndex:s,blockSize:n,usedInVertexShader:o,usedInFragmentShader:h,uniforms:_}},zt=Ft,Pt=(t,i,e=0,r=t.DYNAMIC_DRAW)=>{const s=t.createBuffer();return t.bindBuffer(t.UNIFORM_BUFFER,s),t.bufferData(t.UNIFORM_BUFFER,i,r),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,e,s),s},$t=Pt,kt=(t,i,e,r)=>{let s;switch(i){case t.FLOAT:return t.uniform1f(e,r);case t.FLOAT_VEC2:return s=r,t.uniform2f(e,s[0],s[1]);case t.FLOAT_VEC3:return s=r,t.uniform3f(e,s[0],s[1],s[2]);case t.FLOAT_VEC4:return s=r,t.uniform4f(e,s[0],s[1],s[2],s[3]);case t.BOOL:case t.INT:case t.SAMPLER_2D:case t.SAMPLER_CUBE:return t.uniform1i(e,r);case t.BOOL_VEC2:case t.INT_VEC2:return s=r,t.uniform2i(e,s[0],s[1]);case t.BOOL_VEC3:case t.INT_VEC3:return s=r,t.uniform3i(e,s[0],s[1],s[2]);case t.BOOL_VEC4:case t.INT_VEC4:return s=r,t.uniform4i(e,s[0],s[1],s[2],s[3]);case t.FLOAT_MAT2:return t.uniformMatrix2fv(e,!1,r);case t.FLOAT_MAT3:return t.uniformMatrix3fv(e,!1,r);case t.FLOAT_MAT4:return t.uniformMatrix4fv(e,!1,r);default:throw new Error("wrong type for uniform")}},st=kt,Nt=(t={})=>{const{radius:i=.5,widthSegments:e=16,heightSegments:r=Math.ceil(e*.5),phiStart:s=0,phiLength:n=Math.PI*2,thetaStart:o=0,thetaLength:h=Math.PI}=t,l=e,p=r,M=s,_=n,u=o,c=h,v=(l+1)*(p+1),T=l*p*6,w=3+3+2,g=new Float32Array(v*w),S=v>65536?new Uint32Array(T):new Uint16Array(T);let D=0,b=0,m=0;const $=u+c,x=[],R=F();for(let E=0;E<=p;E++){const y=[],U=E/p;for(let A=0;A<=l;A++,D++){const B=A/l,Y=-i*Math.cos(M+B*_)*Math.sin(u+U*c),J=i*Math.cos(u+U*c),tt=i*Math.sin(M+B*_)*Math.sin(u+U*c);g[D*w+0]=Y,g[D*w+1]=J,g[D*w+2]=tt,rt(R,Y,J,tt),nt(R,R),g[D*w+3]=R[0],g[D*w+4]=R[1],g[D*w+5]=R[2],g[D*w+6]=B,g[D*w+7]=1-U,y.push(b++)}x.push(y)}for(let E=0;E<p;E++)for(let y=0;y<l;y++){const U=x[E][y+1],A=x[E][y],B=x[E+1][y],Y=x[E+1][y+1];(E!==0||u>0)&&(S[m*3]=U,S[m*3+1]=A,S[m*3+2]=Y,m++),(E!==p-1||$<Math.PI)&&(S[m*3]=A,S[m*3+1]=B,S[m*3+2]=Y,m++)}return{radius:i,vertexCount:T,vertexStride:w,interleavedArray:g,indicesArray:S}},Kt=Nt,Ot=(t={})=>{const{width:i=1,height:e=1,widthSegments:r=1,heightSegments:s=1,flipUVy:n=!1}=t,o=r,h=s,l=(o+1)*(h+1),p=o*h*6,M=new Float32Array(l*3+l*2),_=l>65536?new Uint32Array(p):new Uint16Array(p);let u=0,c=0;const v=u,T=i/o,w=e/h,g=1,S=-1,D=0,b=3+2;for(let m=0;m<=h;m++){const $=m*w-e/2;for(let x=0;x<=o;x++,u++){const R=x*T-i/2;if(M[u*b+0]=R*g,M[u*b+1]=$*S,M[u*b+2]=D/2,M[u*b+3]=x/o,M[u*b+4]=n?1-m/h:m/h,m===h||x===o)continue;const E=v+x+m*(o+1),y=v+x+(m+1)*(o+1),U=v+x+(m+1)*(o+1)+1,A=v+x+m*(o+1)+1;_[c*6]=E,_[c*6+1]=y,_[c*6+2]=A,_[c*6+3]=y,_[c*6+4]=U,_[c*6+5]=A,c++}}return{width:i,height:e,vertexCount:_.length,vertexStride:b,interleavedArray:M,indicesArray:_}},Zt=Ot,at=(t,i,e)=>Math.min(Math.max(t,i),e),lt=class{constructor(){a(this,"position",X(1,2,3));a(this,"lookAt",X(0,0,0));a(this,"projectionMatrix",k());a(this,"viewMatrix",k());a(this,"viewMatrixInverse",k());a(this,"projectionViewMatrix",k())}updateViewMatrix(){return Mt(this.viewMatrix,this.position,this.lookAt,lt.UP_VECTOR),dt(this.viewMatrixInverse,this.viewMatrix),this}updateProjectionViewMatrix(){return ot(this.projectionViewMatrix,this.projectionMatrix,this.viewMatrix),this}},Q=lt;I(Q,"UP_VECTOR",X(0,1,0));var Gt=class extends Q{constructor(t,i,e,r){super();a(this,"fieldOfView");a(this,"aspect");a(this,"near");a(this,"far");this.fieldOfView=t,this.aspect=i,this.near=e,this.far=r,this.updateProjectionMatrix()}updateProjectionMatrix(){return _t(this.projectionMatrix,this.fieldOfView,this.aspect,this.near,this.far),this}},jt=class extends Q{constructor(t,i,e,r,s,n){super();a(this,"left");a(this,"right");a(this,"bottom");a(this,"top");a(this,"near");a(this,"far");this.left=t,this.right=i,this.top=e,this.bottom=r,this.near=s,this.far=n,this.updateProjectionMatrix()}updateProjectionMatrix(){return ft(this.projectionMatrix,this.left,this.right,this.bottom,this.top,this.near,this.far),this}},N=class{constructor(){a(this,"value",0);a(this,"damping");this.damping=.5}addForce(t){this.value+=t}update(){return this.value*this.value>1e-6?this.value*=this.damping:this.stop(),this.value}stop(){this.value=0}},qt=class{constructor(t,i=document.body,e=!1,r=1){a(this,"camera");a(this,"domElement");a(this,"target",F());a(this,"minDistance",0);a(this,"maxDistance",1/0);a(this,"isEnabled",!0);a(this,"isDamping");a(this,"dampingFactor");a(this,"isZoom");a(this,"zoomSpeed");a(this,"isRotate");a(this,"rotateSpeed");a(this,"isPan");a(this,"keyPanSpeed");a(this,"enableKeys");a(this,"keys");a(this,"originTarget");a(this,"originPosition");a(this,"targetXDampedAction",new N);a(this,"targetYDampedAction",new N);a(this,"targetZDampedAction",new N);a(this,"targetThetaDampedAction",new N);a(this,"targetPhiDampedAction",new N);a(this,"targetRadiusDampedAction",new N);a(this,"_isShiftDown",!1);a(this,"_rotateStart",{x:9999,y:9999});a(this,"_rotateEnd",{x:9999,y:9999});a(this,"_roatteDelta",{x:9999,y:9999});a(this,"_spherical");a(this,"_zoomDistanceEnd",0);a(this,"_zoomDistance",0);a(this,"state","");a(this,"loopId",0);a(this,"_panStart",{x:0,y:0});a(this,"_panDelta",{x:0,y:0});a(this,"_panEnd",{x:0,y:0});a(this,"_paused",!1);a(this,"_isDebug",!1);a(this,"_outputEl");a(this,"mouseWheelForce",1);this.mouseWheelForce=r,t||console.error("camera is undefined"),this.camera=t,this.domElement=i,this.isDamping=!1,this.dampingFactor=.25,this.isZoom=!0,this.zoomSpeed=1,this.isRotate=!0,this.rotateSpeed=1,this.isPan=!0,this.keyPanSpeed=7,this.enableKeys=!0,this.keys={LEFT:"37",UP:"38",RIGHT:"39",BOTTOM:"40",SHIFT:"16"},this.originTarget=F(),this.originPosition=F(),this.originPosition[0]=t.position[0],this.originPosition[1]=t.position[0],this.originPosition[2]=t.position[0];const s=this.camera.position[0],n=this.camera.position[1],o=this.camera.position[2],h=Math.sqrt(s*s+n*n+o*o),l=Math.atan2(this.camera.position[0],this.camera.position[2]),p=Math.acos(at(this.camera.position[1]/h,-1,1));this._spherical={radius:h,theta:l,phi:p},this._bindEvens(),this.setEventHandler(),this.startTick(),this._isDebug=e,e&&(this._outputEl=document.createElement("div"),this._outputEl.setAttribute("style",`
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
    `),document.body.appendChild(this._outputEl))}lookAt([t,i,e]){return rt(this.target,t,i,e),this}setEventHandler(){this.domElement.addEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.addEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.addEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.addEventListener("touchstart",this._touchStartHandler,!1),this.domElement.addEventListener("touchmove",this._touchMoveHandler,!1),window.addEventListener("keydown",this._onKeyDownHandler,!1),window.addEventListener("keyup",this._onKeyUpHandler,!1)}removeEventHandler(){this.domElement.removeEventListener("contextmenu",this._contextMenuHandler,!1),this.domElement.removeEventListener("mousedown",this._mouseDownHandler,!1),this.domElement.removeEventListener("wheel",this._mouseWheelHandler,!1),this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1),this.domElement.removeEventListener("touchstart",this._touchStartHandler,!1),this.domElement.removeEventListener("touchmove",this._touchMoveHandler,!1),window.removeEventListener("keydown",this._onKeyDownHandler,!1),window.removeEventListener("keydown",this._onKeyUpHandler,!1)}startTick(){this.loopId=requestAnimationFrame(this.tick)}pause(){this._paused=!0}start(){this._paused=!1}tick(){if(!this._paused&&(this.updateDampedAction(),this.updateCamera(),this._isDebug)){const t=Math.round(this.camera.position[0]*100)/100,i=Math.round(this.camera.position[1]*100)/100,e=Math.round(this.camera.position[2]*100)/100;this._outputEl.textContent=`x: ${t} y: ${i} z: ${e}`}this.loopId=requestAnimationFrame(this.tick)}updateDampedAction(){this.target[0]+=this.targetXDampedAction.update(),this.target[1]+=this.targetYDampedAction.update(),this.target[2]+=this.targetZDampedAction.update(),this._spherical.theta+=this.targetThetaDampedAction.update(),this._spherical.phi+=this.targetPhiDampedAction.update(),this._spherical.radius+=this.targetRadiusDampedAction.update()}updateCamera(){const t=this._spherical,i=Math.sin(t.phi)*t.radius;this.camera.position[0]=i*Math.sin(t.theta)+this.target[0],this.camera.position[1]=Math.cos(t.phi)*t.radius+this.target[1],this.camera.position[2]=i*Math.cos(t.theta)+this.target[2],this.camera.lookAt[0]=this.target[0],this.camera.lookAt[1]=this.target[1],this.camera.lookAt[2]=this.target[2]}_bindEvens(){this.tick=this.tick.bind(this),this._contextMenuHandler=this._contextMenuHandler.bind(this),this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._touchStartHandler=this._touchStartHandler.bind(this),this._touchMoveHandler=this._touchMoveHandler.bind(this),this._onKeyDownHandler=this._onKeyDownHandler.bind(this),this._onKeyUpHandler=this._onKeyUpHandler.bind(this)}_contextMenuHandler(t){!this.isEnabled||t.preventDefault()}_mouseDownHandler(t){!this.isEnabled||(t.button===0?(this.state="rotate",this._rotateStart={x:t.clientX,y:t.clientY}):(this.state="pan",this._panStart={x:t.clientX,y:t.clientY}),this.domElement.addEventListener("mousemove",this._mouseMoveHandler,!1),window.addEventListener("mouseup",this._mouseUpHandler,!1))}_mouseUpHandler(){this.domElement.removeEventListener("mousemove",this._mouseMoveHandler,!1),window.removeEventListener("mouseup",this._mouseUpHandler,!1)}_mouseMoveHandler(t){!this.isEnabled||(this.state==="rotate"?(this._rotateEnd={x:t.clientX,y:t.clientY},this._roatteDelta={x:this._rotateEnd.x-this._rotateStart.x,y:this._rotateEnd.y-this._rotateStart.y},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y}):this.state==="pan"&&(this._panEnd={x:t.clientX,y:t.clientY},this._panDelta={x:-.5*(this._panEnd.x-this._panStart.x),y:.5*(this._panEnd.y-this._panStart.y)},this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y}))}_mouseWheelHandler(t){const i=this.mouseWheelForce;t.deltaY>0?this.targetRadiusDampedAction.addForce(i):this.targetRadiusDampedAction.addForce(-i)}_touchStartHandler(t){let i,e;switch(t.touches.length){case 1:this.state="rotate",this._rotateStart={x:t.touches[0].clientX,y:t.touches[0].clientY};break;case 2:this.state="zoom",i=t.touches[1].clientX-t.touches[0].clientX,e=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistance=Math.sqrt(i*i+e*e);break;case 3:this.state="pan",this._panStart={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3};break}}_touchMoveHandler(t){let i,e,r;switch(t.preventDefault(),t.touches.length){case 1:if(this.state!=="rotate")return;this._rotateEnd={x:t.touches[0].clientX,y:t.touches[0].clientY},this._roatteDelta={x:(this._rotateEnd.x-this._rotateStart.x)*.5,y:(this._rotateEnd.y-this._rotateStart.y)*.5},this._updateRotateHandler(),this._rotateStart={x:this._rotateEnd.x,y:this._rotateEnd.y};break;case 2:if(this.state!=="zoom")return;i=t.touches[1].clientX-t.touches[0].clientX,e=t.touches[1].clientY-t.touches[0].clientY,this._zoomDistanceEnd=Math.sqrt(i*i+e*e),r=this._zoomDistanceEnd-this._zoomDistance,r*=1.5;let s=this._spherical.radius-r;s=at(s,this.minDistance,this.maxDistance),this._zoomDistance=this._zoomDistanceEnd,this._spherical.radius=s;break;case 3:this._panEnd={x:(t.touches[0].clientX+t.touches[1].clientX+t.touches[2].clientX)/3,y:(t.touches[0].clientY+t.touches[1].clientY+t.touches[2].clientY)/3},this._panDelta={x:this._panEnd.x-this._panStart.x,y:this._panEnd.y-this._panStart.y},this._panDelta.x*=-1,this._updatePanHandler(),this._panStart={x:this._panEnd.x,y:this._panEnd.y};break}}_onKeyDownHandler(t){let i=0,e=0;switch(t.key){case this.keys.SHIFT:this._isShiftDown=!0;break;case this.keys.LEFT:i=-10;break;case this.keys.RIGHT:i=10;break;case this.keys.UP:e=10;break;case this.keys.BOTTOM:e=-10;break}this._isShiftDown?(this._roatteDelta={x:-i,y:e},this._updateRotateHandler()):(this._panDelta={x:i,y:e},this._updatePanHandler())}_onKeyUpHandler(t){switch(t.key){case this.keys.SHIFT:this._isShiftDown=!1;break}}_updatePanHandler(){const t=F(),i=F(),e=F();e[0]=this.target[0]-this.camera.position[0],e[1]=this.target[1]-this.camera.position[1],e[2]=this.target[2]-this.camera.position[2],nt(e,e),et(t,e,[0,1,0]),et(i,t,e);const r=Math.max(this._spherical.radius/2e3,.001);this.targetXDampedAction.addForce((t[0]*this._panDelta.x+i[0]*this._panDelta.y)*r),this.targetYDampedAction.addForce((t[1]*this._panDelta.x+i[1]*this._panDelta.y)*r),this.targetZDampedAction.addForce((t[2]*this._panDelta.x+i[2]*this._panDelta.y)*r)}_updateRotateHandler(){this.targetThetaDampedAction.addForce(-this._roatteDelta.x/this.domElement.clientWidth),this.targetPhiDampedAction.addForce(-this._roatteDelta.y/this.domElement.clientHeight)}},Lt=class{constructor(){a(this,"position",X(0,0,0));a(this,"rotation",X(0,0,0));a(this,"scale",X(1,1,1));a(this,"modelMatrix",k());a(this,"shouldUpdate",!0)}copyFromMatrix(t){return ht(this.modelMatrix,t),this.shouldUpdate=!1,this}setPosition(t){return K(this.position,t),this.shouldUpdate=!0,this}setScale(t){return K(this.scale,t),this.shouldUpdate=!0,this}setRotation(t){return K(this.rotation,t),this.shouldUpdate=!0,this}updateModelMatrix(){return vt(this.modelMatrix),wt(this.modelMatrix,this.modelMatrix,this.position),yt(this.modelMatrix,this.modelMatrix,this.rotation[0]),gt(this.modelMatrix,this.modelMatrix,this.rotation[1]),Dt(this.modelMatrix,this.modelMatrix,this.rotation[2]),St(this.modelMatrix,this.modelMatrix,this.scale),this.shouldUpdate=!1,this}},Ct=class extends Lt{constructor(t=void 0){super();a(this,"parentNode",null);a(this,"_children",[]);a(this,"_visible",!0);a(this,"worldMatrix",k());a(this,"normalMatrix",k());a(this,"uid",xt(9));a(this,"name");this.name=t}get visible(){return this._visible}set visible(t){this._visible=t}get children(){return this._children}get siblings(){return this.parentNode?this.parentNode._children:[]}get levelIndex(){let t=0,i=this.parentNode;for(;i;)t++,i=i.parentNode;return t}setParent(t=null){if(this.parentNode){const i=this.parentNode._children.indexOf(this);i>=0&&this.parentNode._children.splice(i,1)}return t&&t.addChild(this),this.parentNode=t,this}addChild(t){return this._children.push(t),this}updateWorldMatrix(t=null){this.shouldUpdate&&this.updateModelMatrix(),t?ot(this.worldMatrix,t,this.modelMatrix):ht(this.worldMatrix,this.modelMatrix),dt(this.normalMatrix,this.worldMatrix),Et(this.normalMatrix,this.normalMatrix);for(let i=0;i<this._children.length;i++)this._children[i].updateWorldMatrix(this.worldMatrix);return this}traverse(t,i=0){t(this,i),i++;for(let e=0;e<this._children.length;e++)this._children[e].traverse(t,i)}findChild(t){if(t(this))return this;let i=null;for(let e=0;e<this._children.length&&!(i=this._children[e].findChild(t));e++);return i}findChildByName(t){if(this.name===t)return this;let i=null;for(let e=0;e<this._children.length&&!(i=this._children[e].findChildByName(t));e++);return i}findParent(t){if(t(this))return this;let i=null,e=this.parentNode;for(;e&&!(i=e.findParent(t));)e=e==null?void 0:e.parentNode;return i}findParentByName(t){if(this.name===t)return this;let i=null,e=this.parentNode;for(;e&&!(i=e.findParentByName(t));)e=e==null?void 0:e.parentNode;return i}render(){if(!!this._visible)for(let t=0;t<this._children.length;t++)this._children[t].render()}},O,z=class extends Ct{constructor(t,i,e,r={},s){super(s);if(I(this,"gl"),I(this,"vao"),I(this,"vertexCount"),V(this,O,new Map),I(this,"boundingBox"),I(this,"program"),this.gl=t,this.vao=t.createVertexArray(),this.program=It(t,i,e,r),this.program.__SPECTOR_Metadata={name:s,shaderDefines:r},!this.setUniform(z.WORLD_MATRIX_UNIFORM_NAME,{type:t.FLOAT_MAT4}))throw new Error(`Each Drawable is expected to have a mat4 ${z.WORLD_MATRIX_UNIFORM_NAME} implemented in shader`)}setUniform(t,{type:i,value:e}){const r=this.gl;let s;if(s=f(this,O).get(t))s.value=e;else{const n=r.getUniformLocation(this.program,t);if(!n)return console.error(`uniform with name ${t} was not found in the program`),!1;s={type:i,location:n,value:e},f(this,O).set(t,s)}return e!=null&&(r.useProgram(this.program),st(r,s.type,s.location,e)),!0}updateUniform(t,i){let e;if(e=this.getUniform(t)){e.value=i;const r=this.gl;return r.useProgram(this.program),st(r,e.type,e.location,i),!0}return!1}getUniform(t){let i;return(i=f(this,O).get(t))?i:(console.error("can't locate uniform with that name"),null)}updateWorldMatrix(t){return super.updateWorldMatrix(t),this.updateUniform(z.WORLD_MATRIX_UNIFORM_NAME,this.worldMatrix),this}destroy(){f(this,O).clear();const t=this.gl;t.deleteVertexArray(this.vao),t.deleteProgram(this.program)}},Xt=z;O=new WeakMap;I(Xt,"WORLD_MATRIX_UNIFORM_NAME","u_worldMatrix");var Bt=document.createElement("canvas"),ut=Bt.getContext("webgl2"),H=ut.MAX_TEXTURE_SIZE,W=ut.RGB,G,d,j=!1,P,L,C,q=class{constructor(){if(V(this,P,[]),V(this,L,[]),V(this,C,document.createElement("div")),j){const i=document.createElement("style"),e="hwoa-rang-texture-atlas-debug";i.setAttribute("type","text/css");const r=`
        #${e} {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          transform-origin: 100% 100%;
          width: ${400}px;
          max-height: 100vh;
          overflow: scroll;
        }
        #${e} canvas {
          max-width: 100%;
        }
      `;i.appendChild(document.createTextNode(r)),document.getElementsByTagName("head")[0].appendChild(i),Rt(this,C,document.createElement("div")),f(this,C).setAttribute("id",e),document.body.appendChild(f(this,C))}}static set debugMode(t){j=t}static get textureSize(){return H}static set textureSize(t){H=t}static set textureFormat(t){W=t}static set gl(t){d=t}static getInstance(){if(!d)throw new Error("You must provide a WebGL2RenderingContext first via setting the TextureAtlas.gl property!");return G||(G=new q),G}pack(t,i,e=1){const r=()=>{const c=document.createElement("canvas");f(this,C).appendChild(c),c.width=H,c.height=H;const v=d.createTexture();d.bindTexture(d.TEXTURE_2D,v),d.texParameterf(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR_MIPMAP_LINEAR),d.texImage2D(d.TEXTURE_2D,0,W,H,H,0,W,d.UNSIGNED_BYTE,null),d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null);const T=new At(c);return f(this,P).push(T),f(this,L).push(v),T};let s=f(this,P)[f(this,P).length-1];s||(s=r());const n=e===1?i:q.scaleDownDrawableByFactor(i,e);s.pack(t,n)||(s=r(),s.pack(t,n));const h=s.uv()[t];for(let c=0;c<h.length;c++)h[c][0]*=H,h[c][1]*=H;const l=f(this,L)[f(this,L).length-1],p=h[0][0],M=h[0][1],_=h[2][0]-h[0][0],u=h[2][1]-h[0][1];return d.bindTexture(d.TEXTURE_2D,l),d.texSubImage2D(d.TEXTURE_2D,0,p,M,_,u,W,d.UNSIGNED_BYTE,n),d.generateMipmap(d.TEXTURE_2D),d.bindTexture(d.TEXTURE_2D,null),this}getUv2(t){let i=-1;for(let e=0;e<f(this,P).length;e++){const s=f(this,P)[e].uv2()[t];if(s){i=e;const n=f(this,L)[i];return[s,n]}}throw new Error("Can't get uvs")}},Yt=q;P=new WeakMap;L=new WeakMap;C=new WeakMap;I(Yt,"scaleDownDrawableByFactor",(t,i)=>{const e=document.createElement("canvas"),r=t instanceof HTMLImageElement?t.naturalWidth:t.width,s=t instanceof HTMLImageElement?t.naturalHeight:t.height;e.width=r/i,e.height=s/i,j&&console.log(`Scaled ${r}x${s} project image to ${e.width}x${e.height}`);const n=e.getContext("2d");return n.imageSmoothingQuality="high",n.drawImage(t,0,0,r,s,0,0,e.width,e.height),e});export{qt as C,Xt as D,jt as O,Gt as P,Ct as S,Zt as a,zt as b,Kt as c,$t as d};