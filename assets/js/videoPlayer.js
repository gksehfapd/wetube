(()=>{const e=document.querySelector("video"),t=document.getElementById("play"),n=t.querySelector("i"),d=document.getElementById("mute"),u=d.querySelector("i"),a=document.getElementById("volume"),o=document.getElementById("currenTime"),l=document.getElementById("totalTime"),s=document.getElementById("timeline"),i=document.getElementById("fullScreen"),m=i.querySelector("i"),r=document.getElementById("videoContainer"),c=document.getElementById("videoControls"),v=document.getElementById("commentForm");let E=null,f=null,L=.5,y=!1;e.volume=L;const p=()=>{e.paused?e.play():e.pause(),n.classList=e.paused?"fas fa-play":"fas fa-pause"},g=e=>new Date(1e3*e).toISOString().substr(14,5),T=()=>c.classList.remove("showing");window.addEventListener("keydown",(e=>{!1===y?32==e.keyCode&&(e.preventDefault(),p()):e.preventDefault=!1})),t.addEventListener("click",p),e.addEventListener("click",p),d.addEventListener("click",(()=>{e.muted?e.muted=!1:e.muted=!0,u.classList=e.muted?"fas fa-volume-mute":"fas fa-volume-up",a.value=e.muted?0:L})),a.addEventListener("input",(t=>{const{target:{value:n}}=t;e.muted&&(e.muted=!1,d.innerText="Mute"),L=n,e.volume=n})),e.addEventListener("loadeddata",(()=>{l.innerText=g(Math.floor(e.duration)),s.max=Math.floor(e.duration)})),e.addEventListener("timeupdate",(()=>{o.innerText=g(Math.floor(e.currentTime)),s.value=Math.floor(e.currentTime)})),e.addEventListener("ended",(()=>{const{id:e}=r.dataset;fetch("/api/videos/".concat(e,"/view"),{method:"POST"})})),r.addEventListener("mousemove",(()=>{E&&(clearTimeout(E),E=null),f&&(clearTimeout(f),f=null),c.classList.add("showing"),f=setTimeout(T,3e3)})),r.addEventListener("mouseleave",(()=>{E=setTimeout(T,3e3)})),s.addEventListener("input",(t=>{const{target:{value:n}}=t;e.currentTime=n})),i.addEventListener("click",(()=>{document.fullscreenElement?(document.exitFullscreen(),m.classList="fas fa-expand"):(r.requestFullscreen(),m.classList="fas fa-compress")})),v.addEventListener("focusin",(()=>{y=!0})),v.addEventListener("focusout",(()=>{y=!1}))})();