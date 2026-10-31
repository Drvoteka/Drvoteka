
(function(){
  const host=document.getElementById('m3d'),cv=document.getElementById('m3dc');
  if(!host||!window.THREE)return;
  let started=false;
  function start(){
    if(started)return;started=true;
    const T=THREE, rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
    let r;try{r=new T.WebGLRenderer({canvas:cv,antialias:true,alpha:true})}catch(e){host.classList.add('touched');return}
    r.setPixelRatio(Math.min(devicePixelRatio,2));r.outputEncoding=T.sRGBEncoding;r.shadowMap.enabled=true;r.shadowMap.type=T.PCFSoftShadowMap;
    r.toneMapping=T.ACESFilmicToneMapping;r.toneMappingExposure=1.05;
    const sc=new T.Scene(),cam=new T.PerspectiveCamera(32,1,.1,50);
    cam.position.set(0,.95,3.6);cam.lookAt(0,.3,0);
    sc.add(new T.HemisphereLight(0xffe7c4,0x2a1d14,.75));
    const key=new T.DirectionalLight(0xffd8a8,1.2);key.position.set(-2.4,3.2,2.2);key.castShadow=true;key.shadow.mapSize.set(1024,1024);
    Object.assign(key.shadow.camera,{left:-1.5,right:1.5,top:1.5,bottom:-1.5});key.shadow.radius=6;sc.add(key);
    const rim=new T.DirectionalLight(0xc9a877,.55);rim.position.set(2.5,1.5,-2.5);sc.add(rim);
    const floor=new T.Mesh(new T.PlaneGeometry(8,8),new T.ShadowMaterial({opacity:.35}));floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;sc.add(floor);
    const tex=new T.TextureLoader().load(window.__OAK_TEX__,()=>dirty=true);tex.encoding=T.sRGBEncoding;tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.anisotropy=8;tex.repeat.set(.55,.55);tex.offset.set(.22,.22);
    const texV=tex.clone();texV.needsUpdate=true;texV.rotation=Math.PI/2;texV.center.set(.5,.5);texV.repeat.set(.55,.55);texV.offset.set(.22,.22);
    const oak=new T.MeshStandardMaterial({map:tex,roughness:.62,metalness:0,color:0xf7e6cf});
    const oakV=new T.MeshStandardMaterial({map:texV,roughness:.62,color:0xf7e6cf});
    const inner=new T.MeshStandardMaterial({map:tex,roughness:.7,color:0xb89676});
    const dark=new T.MeshStandardMaterial({color:0x140e0a,roughness:.9});
    const edgeM=new T.LineBasicMaterial({color:0xe2c99b,transparent:true,opacity:.22});
    const g=new T.Group();sc.add(g);
    const W=1.5,D=.35,H=.37,L=.15,t=.022,div=-W/2+.6;
    function box(w,h,d,x,y,z,m){const ge=new T.BoxGeometry(w,h,d),me=new T.Mesh(ge,m||oak);me.position.set(x,y,z);me.castShadow=me.receiveShadow=true;g.add(me);
      const e=new T.LineSegments(new T.EdgesGeometry(ge),edgeM);e.position.copy(me.position);g.add(e);return me}
    const y0=L;
    box(W,t,D,0,y0+H-t/2,0);              // top
    box(W-2*t,t,D-.01,0,y0+t/2,0,inner);  // bottom
    box(t,H,D,-W/2+t/2,y0+H/2,0,oak);    // left side
    box(t,H,D,W/2-t/2,y0+H/2,0,oak);     // right side
    box(W-2*t,H-2*t,.008,0,y0+H/2,-D/2+.004,inner); // back
    box(t,H-2*t,D-.01,div,y0+H/2,0,oak); // divider
    box(div-(-W/2+t),t,D-.03,(-W/2+t+div)/2,y0+H/2,-.01,inner); // shelf
    const fx0=div+t/2+.004,fx1=W/2-t-.004,fw=fx1-fx0,fh=(H-2*t-.012)/2;
    [0,1].forEach(i=>{const cy=y0+t+.004+fh/2+i*(fh+.004);box(fw,fh,t,(fx0+fx1)/2,cy,D/2-t/2+.002)});
    // splayed square tapered legs (outward along width)
    const la=.42,ll=L/Math.cos(la);
    [[-1,1],[1,1],[-1,-1],[1,-1]].forEach(([sx,sz])=>{const ge=new T.CylinderGeometry(.03,.019,ll,4,1);ge.rotateY(Math.PI/4);
      const me=new T.Mesh(ge,oak),x0=sx*(W/2-.26);
      me.position.set(x0+sx*Math.sin(la)*ll/2,L-Math.cos(la)*ll/2,sz*(D/2-.07));me.rotation.z=sx*la;me.castShadow=true;g.add(me);
      const ed=new T.LineSegments(new T.EdgesGeometry(ge),edgeM);ed.position.copy(me.position);ed.rotation.copy(me.rotation);g.add(ed)});
    g.position.y=0;
    let rotY=-.55,rotX=0,vY=0,drag=false,lx=0,ly=0,idle=0,dirty=true,vis=false,last=performance.now();
    function size(){const w=host.clientWidth,h=host.clientHeight;r.setSize(w,h,false);cam.aspect=w/h;
      cam.position.z=w/h<.9?3.9:2.85;cam.updateProjectionMatrix();dirty=true}
    new ResizeObserver(size).observe(host);size();
    host.addEventListener('pointerdown',e=>{drag=true;lx=e.clientX;ly=e.clientY;vY=0;host.classList.add('touched');host.setPointerCapture(e.pointerId)});
    host.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-lx,dy=e.clientY-ly;lx=e.clientX;ly=e.clientY;
      rotY+=dx*.009;vY=dx*.009;rotX=Math.max(-.35,Math.min(.5,rotX+dy*.005));idle=0;dirty=true});
    const up=()=>{drag=false;idle=0};host.addEventListener('pointerup',up);host.addEventListener('pointercancel',up);
    new IntersectionObserver(es=>{vis=es[0].isIntersecting;if(vis){last=performance.now();requestAnimationFrame(loop)}},{rootMargin:'100px'}).observe(host);
    function loop(now){if(!vis||document.hidden)return;const dt=Math.min(.05,(now-last)/1000);last=now;idle+=dt;
      if(!drag){if(Math.abs(vY)>.0005){rotY+=vY;vY*=.92;dirty=true}else if(!rm&&idle>1.8){rotY+=dt*.35;dirty=true}
        if(idle>1.8&&Math.abs(rotX)>.001){rotX*=.96;dirty=true}}
      if(dirty){g.rotation.y=rotY;g.rotation.x=rotX;r.render(sc,cam);dirty=false}
      requestAnimationFrame(loop)}
    document.addEventListener('visibilitychange',()=>{if(!document.hidden&&vis){last=performance.now();requestAnimationFrame(loop)}});
  }
  if('IntersectionObserver' in window){const o=new IntersectionObserver(es=>{if(es[0].isIntersecting){o.disconnect();start()}},{rootMargin:'300px'});o.observe(host)}else start();
})();
