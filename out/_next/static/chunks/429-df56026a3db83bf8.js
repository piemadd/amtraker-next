(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{4655:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),a=r(9986),o=function(e){var t=e.error,r=e.errorDetails,a=void 0===r?"Whoever was in charge of making this error didn't provide any details so we're just going to be in the dark abou this one...":r;return(0,n.jsx)("article",{className:"card trainCard",children:(0,n.jsxs)("div",{className:"meta",children:[(0,n.jsx)("div",{className:"title",children:(0,n.jsx)("h3",{children:t})}),(0,n.jsx)("p",{className:"route",children:(0,n.jsx)("span",{className:"tag",children:a})})]})})},i=r(7294),l=r(1664),c=function(e){var t=e.trainNum,r=e.trainDate,c=e.clickable,s=(0,i.useState)(null),u=s[0],f=s[1],d=(0,i.useState)(!1),h=(d[0],d[1]);return(0,i.useEffect)((function(){h(!0),fetch("https://api.amtraker.com/v1/trains/".concat(t)).then((function(e){return e.json()})).then((function(e){for(var t={},n=0;n<e.length;n++)e[n].origSchDep!=r&&new Date(e[n].origSchDep).getDate()!=r||(t=e[n]);f(t),h(!1)}))}),[]),null==u||void 0==u?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o,{error:"Train not found!",errorDetails:"Whatever train should have existed doesn't (at least from what I can tell), and if you're seeing this, that means something has terribly wrong within my code."})}):"false"==c?(0,n.jsx)(a.Z,{trainObj:u,clickable:c}):(0,n.jsx)(l.default,{href:"../trains/".concat(t,"?d=").concat(r),className:"trainBoxLink",children:(0,n.jsx)("a",{className:"trainBoxLink",children:(0,n.jsx)(a.Z,{trainObj:u,clickable:c})})})}},9986:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.trainObj,r=e.clickable,a=new Date(t.origSchDep),o="";"false"!=r&&(o=" clickableThing");var i=t.velocity?t.velocity:0,l=t.trainTimely?t.trainTimely:"No Data";return(0,n.jsxs)("article",{className:"card trainCard"+o,children:[(0,n.jsxs)("div",{className:"meta",children:[(0,n.jsxs)("div",{className:"title",children:[(0,n.jsx)("h3",{children:t.routeName}),(0,n.jsx)("div",{className:"status "+l.toLowerCase().split(" ").join("-"),children:l})]}),(0,n.jsxs)("p",{className:"route",children:[["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()]," ",a.getDate(),", ",a.getFullYear()," - ",t.origCode," --\x3e ",t.destCode]}),(0,n.jsxs)("p",{className:"route",children:[(0,n.jsx)("span",{className:"tag",children:"Speed: "}),i.toFixed(2)," mph"]}),(0,n.jsxs)("p",{className:"location",children:[(0,n.jsx)("span",{className:"tag",children:"Next Stop:"})," ",t.eventName," (",t.eventCode,")"]})]}),(0,n.jsx)("div",{className:"number number-small",children:t.trainNum})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),c=r(387),s=r(7190);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=i.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,h=o.as,p=e.children,v=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,j=a(s.useIntersection({rootMargin:"200px"}),2),x=j[0],N=j[1],w=i.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);i.default.useEffect((function(){var e=N&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(n,d,h,{locale:t})}),[h,d,N,b,r,n]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:i}))}(e,n,d,h,v,m,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof b?b:n&&n.locale,C=n&&n.isLocaleDomain&&l.getDomainLocale(h,S,n&&n.locales,n&&n.domainLocales);k.href=C||l.addBasePath(l.addLocale(h,S,n&&n.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,s=o.useRef(),u=a(o.useState(!1),2),f=u[0],d=u[1],h=a(o.useState(t?t.current:null),2),p=h[0],v=h[1],m=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:r}))}),[n,p,r,f]);return o.useEffect((function(){if(!l&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&v(t.current)}),[t]),[m,f]};var o=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},4298:function(e,t,r){e.exports=r(699)}}]);