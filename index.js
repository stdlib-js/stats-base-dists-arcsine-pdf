// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__,c=r,f=function(e,t,r){var c,f,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(a.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,_="set"in r,f&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),_&&u&&u.call(e,t,r.set),e},p=t()?c:f,_=function(e,t,r){p(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=function(e){return e!=e},b=Math.sqrt,s=3.141592653589793;function y(e,t,r){return d(e)||d(t)||d(r)||t>=r?NaN:e<t||e>r?0:1/(s*b((e-t)*(r-e)))}var v=function(e){return function(){return e}};return _(y,"factory",(function(e,t){return d(e)||d(t)||e>=t?v(NaN):function(r){return d(r)?NaN:r<e||r>t?0:1/(s*b((r-e)*(t-r)))}})),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).pdf=t();
//# sourceMappingURL=index.js.map
