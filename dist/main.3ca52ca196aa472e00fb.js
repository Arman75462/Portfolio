(()=>{var e={711:function(e){e.exports=function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=(n(o(1)),o(6)),a=n(r),c=n(o(7)),s=n(o(8)),u=n(o(9)),d=n(o(10)),l=n(o(11)),f=n(o(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return m=(0,l.default)(m,b),(0,d.default)(m,b.once),m},y=function(){m=(0,f.default)(),v()},g=function(){m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},h=function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){b=i(b,e),m=(0,f.default)();var t=document.all&&!window.atob;return h(b.disable)||t?g():(b.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,d.default)(m,b.once)}),b.throttleDelay)),b.disableMutationObserver||s.default.ready("[data-aos]",y),m)};e.exports={init:w,refresh:v,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,O=t,g=e.apply(n,o)}function r(e){return O=e,h=setTimeout(d,t),L?n(e):g}function a(e){var o=t-(e-w);return _?x(o,y-(e-O)):o}function s(e){var o=e-w;return void 0===w||o>=t||o<0||_&&e-O>=y}function d(){var e=j();return s(e)?l(e):void(h=setTimeout(d,a(e)))}function l(e){return h=void 0,E&&b?n(e):(b=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function m(){return void 0===h?g:l(j())}function p(){var e=j(),o=s(e);if(b=arguments,v=this,w=e,o){if(void 0===h)return r(w);if(_)return h=setTimeout(d,t),n(w)}return void 0===h&&(h=setTimeout(d,t)),g}var b,v,y,g,h,w,O=0,L=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(u);return t=c(t)||0,i(o)&&(L=!!o.leading,y=(_="maxWait"in o)?k(c(o.maxWait)||0,t):y,E="trailing"in o?!!o.trailing:E),p.cancel=f,p.flush=m,p}function n(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(u);return i(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),o(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t=void 0===e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":s(e))}function a(e){return"symbol"==(void 0===e?"undefined":s(e))||r(e)&&w.call(e)==l}function c(e){if("number"==typeof e)return e;if(a(e))return d;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=p.test(e);return o||b.test(e)?v(e.slice(2),o?2:8):m.test(e)?d:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",d=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==(void 0===t?"undefined":s(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype.toString,k=Math.max,x=Math.min,j=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e,t,o){function i(t){var o=b,n=v;return b=v=void 0,O=t,g=e.apply(n,o)}function r(e){return O=e,h=setTimeout(d,t),L?i(e):g}function c(e){var o=t-(e-j);return _?k(o,y-(e-O)):o}function u(e){var o=e-j;return void 0===j||o>=t||o<0||_&&e-O>=y}function d(){var e=x();return u(e)?l(e):void(h=setTimeout(d,c(e)))}function l(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),O=0,b=j=v=h=void 0}function m(){return void 0===h?g:l(x())}function p(){var e=x(),o=u(e);if(b=arguments,v=this,j=e,o){if(void 0===h)return r(j);if(_)return h=setTimeout(d,t),i(j)}return void 0===h&&(h=setTimeout(d,t)),g}var b,v,y,g,h,j,O=0,L=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,n(o)&&(L=!!o.leading,y=(_="maxWait"in o)?w(a(o.maxWait)||0,t):y,E="trailing"in o?!!o.trailing:E),p.cancel=f,p.flush=m,p}function n(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function r(e){return"symbol"==(void 0===e?"undefined":c(e))||i(e)&&h.call(e)==d}function a(e){if("number"==typeof e)return e;if(r(e))return u;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var o=m.test(e);return o||p.test(e)?b(e.slice(2),o?2:8):f.test(e)?u:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",u=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype.toString,w=Math.max,k=Math.min,x=function(){return g.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!n()}function r(e,t){var o=window.document,i=new(n())(a);c=t,i.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(o(t.concat(n)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){o(this,e)}return i(e,[{key:"phone",value:function(){var e=n();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!c.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,r){o(e,i+n,t)}))};t.default=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(o(12)),r=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=r},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(o(13)),r=function(e,t){var o=0,n=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(n=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),o=(0,i.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=r/2;break;case"bottom-center":o+=r/2+e.offsetHeight;break;case"center-center":o+=r/2+e.offsetHeight/2;break;case"top-top":o+=r;break;case"bottom-top":o+=e.offsetHeight+r;break;case"center-top":o+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(n=t),o+n};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=o}])}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o(711),t=o.n(e);const n=document.querySelector(".hamburger-wrapper"),i=document.querySelector(".nav__list"),r=document.querySelector("body"),a=document.querySelector(".cursor-dot"),c=document.querySelector(".cursor-outline"),s=document.querySelector(".nav__language"),u=document.querySelector(".about-me__link"),d=document.querySelector(".theme-toggle"),l=document.querySelector(".skill__icon--github"),f=document.querySelector(".contact__links-image--github"),m=document.querySelector(".scroll-watcher"),p=document.querySelectorAll("[data-lang-en]");function b(){i.classList.remove("show"),i.classList.add("hide"),r.style.overflow="auto"}window.addEventListener("scroll",(function(){const e=(window.scrollY||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;m.style.width=`${e}%`})),window.addEventListener("mousemove",(e=>{const t=e.clientX,o=e.clientY;a.style.left=`${t}px`,a.style.top=`${o}px`,c.animate({left:`${t}px`,top:`${o}px`},{duration:300,fill:"forwards"})})),i.addEventListener("click",(e=>{e.target.classList.contains("nav__link")&&window.innerWidth<800&&(n.classList.toggle("active"),b())})),window.addEventListener("resize",(()=>{window.innerWidth>800&&(n.classList.remove("active"),i.classList.remove("show","hide"),document.body.style.overflow="auto")})),n.addEventListener("click",(()=>{n.classList.toggle("active"),i.classList.contains("show")?b():(i.classList.remove("hide"),i.classList.add("show"),r.style.overflow="hidden")})),document.addEventListener("DOMContentLoaded",(()=>{let e="en";function t(){p.forEach((t=>{t.textContent="en"===e?t.getAttribute("data-lang-en"):t.getAttribute("data-lang-fr")}))}function o(){s.style.backgroundColor="en"===e?"rgba(255, 0, 0, 0.6)":"rgba(0, 0, 255, 0.4)"}function n(){u.href="en"===e?"https://1drv.ms/b/s!Am8jzLlkCjx0p0KgLM2FZ5odEjjb?e=7Xgi1y":"https://1drv.ms/b/s!Am8jzLlkCjx0p0HJzkoxIyKpgm0y?e=cQQYvY"}t(),o(),n(),s.addEventListener("click",(()=>{e="en"===e?"fr":"en",s.textContent=e.toUpperCase(),t(),o(),n()}))})),d.addEventListener("click",(()=>{document.body.classList.toggle("light-mode"),document.body.classList.contains("light-mode")?d.textContent="☀️":d.textContent="🌛",document.body.classList.contains("light-mode")?(l.src="../src/images/GitHub-black.webp",f.src="../src/images/GitHub-black.webp"):(l.src="../src/images/GitHub-white.webp",f.src="../src/images/GitHub-white.webp")})),document.addEventListener("DOMContentLoaded",(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches||t().init({duration:1500,once:!0,offset:350})}))})()})();