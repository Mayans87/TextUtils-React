(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function s(e){var t;return e.alert&&l.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(t=e.alert.type).charAt(0).toUpperCase()+t.slice(1))," ",e.alert.msg)}function m(e){return l.a.createElement("nav",{className:"navbar navbar-".concat(e.mode," navbar-expand-lg bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler text-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("form",{className:"d-flex",role:"search"}),l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-info",type:"submit"},"Search"),l.a.createElement("div",{className:"form-check form-switch"},l.a.createElement("input",{className:"form-check-input mx-1",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.togglemode}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function i(e){var t=Object(n.useState)("Enter text"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"textform"},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",style:"dark"===e.mode?{backgroundColor:"grey",color:"white"}:{backgroundColor:"white",color:"black"},value:r,onClick:function(){c("")},onChange:function(e){console.log("onchange"),c(e.target.value)},id:"myBox",rows:"8"})),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){console.log("clicked");var t=r.toUpperCase();c(t),e.showalert("Converted!","success")}},"Click to convert"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){c(r.toLowerCase()),e.showalert("Converted!","success")}},"Click to convert"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){c(""),e.showalert("Cleared!","success")}},"Clear"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){var e=new SpeechSynthesisUtterance;e.text=r,window.speechSynthesis.speak(e)}},"Speak"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){var e=document.getElementById("myBox");e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value),alert("Copied the text: "+e.value)}},"Copy"),l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"mb-8"},r.split(" ").length," words and ",r.length," characters have been used and it takes ",.008*r.split(" ").length,"minute/s to read this."),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r))))}m.defaultProps={title:"set title here",About:"here about"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),b=u[0],d=u[1],h=function(e,t){d({msg:e,type:t}),setTimeout(function(){d(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"TextUtils",About:"About",mode:a,togglemode:function(){console.log("clicked!"),"light"===a?(r("dark"),document.body.style.backgroundColor="grey",document.body.style.color="grey",h("darkmode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",document.body.style.color="black",h("darkmode has been disabled","warning"))}}),l.a.createElement(s,{alert:b}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{heading:"Your Text Goes Here:",mode:a,showalert:h})))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),b()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.9fb52c77.chunk.js.map