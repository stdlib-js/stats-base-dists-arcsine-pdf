"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=a(function(O,s){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-sqrt/dist'),N=require('@stdlib/constants-float64-pi/dist');function p(e,r,t){return u(e)||u(r)||u(t)||r>=t?NaN:e<r||e>t?0:1/(N*v((e-r)*(t-e)))}s.exports=p
});var c=a(function(R,q){
var y=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-sqrt/dist'),I=require('@stdlib/constants-float64-pi/dist');function P(e,r){if(n(e)||n(r)||e>=r)return y(NaN);return t;function t(i){return n(i)?NaN:i<e||i>r?0:1/(I*d((i-e)*(r-i)))}}q.exports=P
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=f(),m=c();l(o,"factory",m);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
