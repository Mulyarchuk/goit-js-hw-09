const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),i={intervalID:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalID=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3))},stop(){clearInterval(this.intervalID),this.isActive=!1}};t.addEventListener("click",(()=>{i.start(),i&&(t.disabled=!0,e.disabled=!1)})),e.addEventListener("click",(()=>{i.stop(),i&&(e.disabled=!0,t.disabled=!1)}));
//# sourceMappingURL=01-color-switcher.e8e885eb.js.map
