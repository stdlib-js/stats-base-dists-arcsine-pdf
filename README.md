<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Arcsine][arcsine-distribution] distribution [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for an [arcsine][arcsine-distribution] random variable is

<!-- <equation class="equation" label="eq:arcsine_pdf" align="center" raw="f(x;a,b)=\begin{cases} {\frac{1}{\pi {\sqrt{(x-a)(b-x)}}}} & \text{for } x \in [a,b] \\ 0 & \text{otherwise} \end{cases}" alt="Probability density function (PDF) for an arcsine distribution."> -->

```math
f(x;a,b)=\begin{cases} {\frac{1}{\pi {\sqrt{(x-a)(b-x)}}}} & \text{for } x \in [a,b] \\ 0 & \text{otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;a,b)=\begin{cases} {\frac{1}{\pi {\sqrt{(x-a)(b-x)}}}} &amp; \text{for } x \in [a,b] \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:arcsine_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/arcsine/pdf/docs/img/equation_arcsine_pdf.svg" alt="Probability density function (PDF) for an arcsine distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support of the distribution. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-pdf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-pdf@deno/mod.js';
```

#### pdf( x, a, b )

Evaluates the [probability density function][pdf] (PDF) for an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = pdf( 2.0, 0.0, 4.0 );
// returns ~0.159

y = pdf( 5.0, 0.0, 4.0 );
// returns 0.0

y = pdf( 0.25, 0.0, 1.0 );
// returns ~0.735
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = pdf( 2.5, 3.0, 2.0 );
// returns NaN

y = pdf( 2.5, 3.0, 3.0 );
// returns NaN
```

#### pdf.factory( a, b )

Returns a `function` for evaluating the [PDF][pdf] of an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myPDF = pdf.factory( 6.0, 7.0 );
var y = myPDF( 7.0 );
// returns Infinity

y = myPDF( 5.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-pdf@deno/mod.js';

var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    x = ( randu()*20.0 )- 10.0;
    a = ( randu()*20.0 )- 20.0;
    b = a + ( randu()*40.0 );
    y = pdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, f(x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/arcsine/pdf.h"
```

#### stdlib_base_dists_arcsine_pdf( x, a, b )

Evaluates the probability density function (PDF) for an arcsine distribution.

```c
double out = stdlib_base_dists_arcsine_pdf( 0.5, 0.0, 4.0 );
// returns ~0.159
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] double` minimum support.
-   **b**: `[in] double` maximum support.

```c
double stdlib_base_dists_arcsine_pdf( const double x, const double a, const double b );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/arcsine/pdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double a;
    double b;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( -10.0, 10.0 );
        a = random_uniform( -20.0, 0.0 );
        b = random_uniform( a, a+40.0 );
        y = stdlib_base_dists_arcsine_pdf( x, a, b );
        printf( "x: %lf, a: %lf, b: %lf, f(x;a,b): %lf\n", x, a, b, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- ./c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-arcsine-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-arcsine-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-arcsine-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-arcsine-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-arcsine-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-arcsine-pdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-arcsine-pdf/main/LICENSE

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

</section>

<!-- /.links -->
