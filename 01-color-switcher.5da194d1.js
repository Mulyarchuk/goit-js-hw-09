!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),i={intervalID:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalID=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3))},stop:function(){clearInterval(this.intervalID),this.isActive=!1}};t.addEventListener("click",(function(){i.start(),i&&(t.disabled=!0,e.disabled=!1)})),e.addEventListener("click",(function(){i.stop(),i&&(e.disabled=!0,t.disabled=!1)}))}();
//# sourceMappingURL=01-color-switcher.5da194d1.js.map
