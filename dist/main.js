!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="dist/",t(t.s=10)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.plusZedIndex=function(){return s++};document.getElementById("body"),document.getElementById("container");var r,o,i,s=0;var a=-1;function c(e){var n=void 0,t=void 0,s=e.pageX||e.clientX+(document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft),a=e.pageY||e.clientY+(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop);n=s-o<0?0:s+(parseInt(r.style.width)-o)>window.innerWidth?window.innerWidth-parseInt(r.style.width):s-o,t=a-i<0?0:a+(parseInt(r.style.height)-i)>window.innerHeight?window.innerHeight-parseInt(r.style.height):a-i,r.style.left=n+"px",r.style.top=t+"px"}document.addEventListener("mousedown",function(e){if(2===e.button)return!1;if(!e.target.classList.contains("newDiv"))return!1;r=e.target,o=e.offsetX,i=e.offsetY,r.style.zIndex=s++,r.ondragstart=function(){return!1},document.body.style.overflow="hidden",document.addEventListener("mousemove",c)}),document.addEventListener("mouseup",function(e){r=null,document.removeEventListener("mousemove",c),document.body.style.overflow=""});var u=document.querySelector(".menu");var d=document.querySelector(".upDiv"),l=document.querySelector(".downDiv");function f(e){u.classList.remove("show-menu"),document.removeEventListener("mousedown",f)}d.addEventListener("focus",function(){return"DIV"==r.tagName&&!r.classList.contains("container")&&void(r.style.zIndex=s++)}),l.addEventListener("focus",function(){return"DIV"==r.tagName&&(r.classList.contains("container")?(console.log("sss"),!1):void(r.style.zIndex=a--))}),document.addEventListener("contextmenu",function(e){var n,t;e.preventDefault(),r=e.target,n=e.pageX,t=e.pageY,u.style.left=n+"px",u.style.top=t+"px",u.classList.add("show-menu"),document.addEventListener("mousedown",f,!1)},!1)},function(e,n,t){"use strict";e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var n={};return function(e){if("function"==typeof e)return e();if(void 0===n[e]){var t=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}}(),c=null,u=0,d=[],l=t(1);function f(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(g(r.parts[s],n))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(g(r.parts[s],n));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):t.push(r[s]={id:s,parts:[a]})}return t}function m(e,n){var t=a(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertInto+" "+e.insertAt.before);t.insertBefore(n,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function b(e){var n=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),h(n,e.attrs),m(e,n),n}function h(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var s=u++;t=c||(c=b(n)),r=w.bind(null,t,s,!1),o=w.bind(null,t,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(n,e.attrs),m(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,n),o=function(){v(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){v(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return f(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var s=t[o];(a=i[s.id]).refs--,r.push(a)}e&&f(p(e,n),n);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var y,x=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function w(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}},function(e,n,t){e.exports=t.p+"cd7af535dc1d3a8e81bd5f6645e5bc6f.jpg"},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var s;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e,n,t){"use strict";e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,n,t){var r=t(5);(e.exports=t(4)(!1)).push([e.i,"* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    background-image: url("+r(t(3))+");\r\n    background-repeat: no-repeat;\r\n    background-size: auto;\r\n}\r\n\r\n.newDiv {\r\n    position: absolute;\r\n    border: 1px solid black;\r\n    z-index: 0;\r\n}\r\n\r\n#clear,\r\n#newDiv,\r\n#saveDives,\r\n#restoreDives {\r\n    height: 20px;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n}\r\n\r\n#clear {\r\n    left: 100px;\r\n}\r\n\r\n#saveDives {\r\n    left: 185px;\r\n}\r\n\r\n#restoreDives {\r\n    left: 320px;\r\n}\r\n\r\n#container {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: -100000;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.menu {\r\n    position: absolute;\r\n    width: 200px;\r\n    padding: 2px;\r\n    margin: 0;\r\n    border: 1px solid #bbb;\r\n    background: #eee;\r\n    background: linear-gradient(to bottom, rgb(200, 240, 227) 0%, #b8f7a0 100px, #47e938 100%);\r\n    z-index: 999999;\r\n    border-radius: 3px;\r\n    box-shadow: 1px 1px 4px rgba(0, 0, 0, .2);\r\n    opacity: 0;\r\n    transition: transform 0.1s ease-out, opacity 0.1s ease-out;\r\n    pointer-events: none;\r\n}\r\n\r\n.menu-item {\r\n    display: block;\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0;\r\n    white-space: nowrap;\r\n}\r\n\r\n.menu-btn {\r\n    background: none;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    display: block;\r\n    width: 100%;\r\n    color: #444;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 13px;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    border: 1px solid transparent;\r\n    white-space: nowrap;\r\n    padding: 6px 8px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.menu-btn::-moz-focus-inner,\r\n.menu-btn::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n.menu-text {\r\n    margin-left: 25px;\r\n}\r\n\r\n.menu-item:hover>.menu-btn {\r\n    color: rgb(255, 255, 255);\r\n    outline: none;\r\n    background-color: rgb(0, 161, 0);\r\n    background: -webkit-linear-gradient(to bottom, #b8f7a0, rgb(0, 161, 0));\r\n    background: linear-gradient(to bottom, #b8f7a0, rgb(0, 161, 0));\r\n    border: 1px solid rgb(0, 161, 0);\r\n}\r\n\r\n.menu-item.disabled {\r\n    opacity: .5;\r\n    pointer-events: none;\r\n}\r\n\r\n.menu-item.disabled .menu-btn {\r\n    cursor: default;\r\n}\r\n\r\n.menu-item.submenu:hover::after {\r\n    border-left-color: #fff;\r\n}\r\n\r\n.show-menu,\r\n.menu-item:hover>.menu {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0, 0) scale(1);\r\n    transform: translate(0, 0) scale(1);\r\n    pointer-events: auto;\r\n}",""])},function(e,n,t){var r=t(6);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){"use strict";function r(e,n,t){var r=e+"="+n,o=new Date;t&&"number"==typeof t&&(o=o.setDate(o.getDate+t),-1==t&&(o=new Date(0)),r+="; expires="+o),document.cookie=r}Object.defineProperty(n,"__esModule",{value:!0}),n.delTheCookie=function(e){r(e,"",-1)},n.setCookie=r,n.getCookie=function(e){e+="=";for(var n=document.cookie.split(/\s*;\s*/),t=0;t<n.length;t++)if(0==n[t].indexOf(e))return n[t].substring(e.length);return"no-info"}},function(e,n,t){"use strict";var r=t(8),o=t(0);document.getElementById("newDiv").addEventListener("click",function(){var e=document.createElement("div");e.style.top=a(0,window.innerHeight)+"px",e.style.left=a(0,window.innerWidth)+"px",e.style.width=a(0,window.innerWidth-parseInt(e.style.left))+"px",e.style.height=a(0,window.innerHeight-parseInt(e.style.top))+"px",e.classList.add("newDiv"),e.style.backgroundColor="rgba("+a(0,255)+","+a(0,255)+","+a(0,255)+",1)",container.appendChild(e),e.style.zIndex=(0,o.plusZedIndex)(),console.log(e.style.zIndex),i+=.045,container.style.backgroundColor="rgba(0, 0, 0,"+i+")",s++}),document.getElementById("saveDives").addEventListener("focus",function(){s=container.children.length;for(var e=0;e<s;e++)(0,r.setCookie)("div"+e,encodeURIComponent(container.children[e].style.cssText),2);(0,r.setCookie)("numberOfDives",s,2),(0,r.setCookie)("opacity",i,2)}),document.getElementById("restoreDives").addEventListener("focus",function(){for(var e=(0,r.getCookie)("numberOfDives"),n=0;n<e;n++){var t=document.createElement("div");t.style.cssText=decodeURIComponent((0,r.getCookie)("div"+n)),t.classList.add("newDiv"),container.appendChild(t)}i=(0,r.getCookie)("opacity"),container.style.backgroundColor="rgba(0, 0, 0,"+i+")"}),document.getElementById("clear").addEventListener("focus",function(){i=0,container.style.backgroundColor="rgba(0, 0, 0,"+i+")";for(;container.children.length>0;)container.removeChild(container.firstChild)});var i=0,s=0;function a(e,n){return Math.floor(Math.random()*(n-e+1))+e}},function(e,n,t){"use strict";t(0),t(9),t(7)}]);