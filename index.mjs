// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function i(t,r,i){return s(t)||s(r)||s(i)||r>=i?NaN:t<r||t>i?0:1/(e*n((t-r)*(i-t)))}function d(t,i){return s(t)||s(i)||t>=i?r(NaN):function(r){if(s(r))return NaN;if(r<t||r>i)return 0;return 1/(e*n((r-t)*(i-r)))}}t(i,"factory",d);export{i as default,d as factory};
//# sourceMappingURL=index.mjs.map
