import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-signum@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";var c=p.isPrimitive,b=u.isPrimitive,v=h;var x=function(e,t){return!c(e)||v(e)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+e+"`."):b(t)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+t+"`.")},y=j,w=f,N=g;var L=function(e,t,n){var s=e()-.5;return t-n*y(s)*N(1-2*w(s))},E=e,O=t,T=n,P=s,V=r,G=i,R=o,A=m,J=d.factory,M=a,S=l,z=x,k=L;var q=function(){var e,t,n,s,r,i;if(0===arguments.length)t=J();else if(1===arguments.length){if(!P(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(G(e,"prng")){if(!V(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=J(e)}else{if(s=z(r=arguments[0],i=arguments[1]))throw s;if(arguments.length>2){if(!P(e=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(G(e,"prng")){if(!V(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=J(e)}else t=J()}return E(n=void 0===r?j:h,"NAME","laplace"),e&&e.prng?(E(n,"seed",null),E(n,"seedLength",null),T(n,"state",R(null),A),E(n,"stateLength",null),E(n,"byteLength",null),E(n,"toJSON",R(null)),E(n,"PRNG",t)):(O(n,"seed",o),O(n,"seedLength",m),T(n,"state",l,p),O(n,"stateLength",d),O(n,"byteLength",a),E(n,"toJSON",u),E(n,"PRNG",t),t=t.normalized),n;function o(){return t.seed}function m(){return t.seedLength}function d(){return t.stateLength}function a(){return t.byteLength}function l(){return t.state}function p(e){t.state=e}function u(){var e={type:"PRNG"};return e.name=n.NAME,e.state=S(t.state),e.params=void 0===r?[]:[r,i],e}function h(){return k(t,r,i)}function j(e,n){return M(e)||M(n)||n<=0?NaN:k(t,e,n)}},B=q();e(B,"factory",q);var C=B;export{C as default};
