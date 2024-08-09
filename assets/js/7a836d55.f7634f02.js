"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[282],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),b=a,f=m["".concat(l,".").concat(b)]||m[b]||p[b]||o;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5843:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={id:"benchmarks",title:"Benchmarks"},l=void 0,s={unversionedId:"basics/benchmarks",id:"basics/benchmarks",title:"Benchmarks",description:"Often in computational intelligence we will need to test algorithms on",source:"@site/../cilib-docs/target/mdoc/basics/benchmarks.md",sourceDirName:"basics",slug:"/basics/benchmarks",permalink:"/docs/basics/benchmarks",draft:!1,tags:[],version:"current",frontMatter:{id:"benchmarks",title:"Benchmarks"}},u={},p=[],m={toc:p};function b(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Often in computational intelligence we will need to test algorithms on\nstandard problems. It should be noted that CIRG contains a library of\nbenchmarks that we can use with CILib. The benchmarks can be found\n","[here][benchmarks]"," as well as a list of available benchmarks. To\nimport benchmarks into your build you need the following dependency\nadded to your sbt.build."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'    "net.cilib"  %% "benchmarks"        % "0.1.1"')),(0,o.kt)("p",null,"The following snippets of code will demonstrate how to include\nbenchmarks in your program as an example use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala",metastring:":silent",":silent":!0},"import cilib._\nimport cilib.benchmarks._ // Import for benchmarks\n\n// Example use\nval bounds = Interval(-5.12,5.12)^30\nval env =\n    Environment(\n        cmp = Comparison.dominance(Min),\n        eval = Eval.unconstrained(Benchmarks.spherical[NonEmptyList, Double]).eval)\n")),(0,o.kt)("p",null,"That's all there is to it! Be sure to check out the list of\nbenchmarks that are included and can be accessed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Benchmark"),"\nobject."))}b.isMDXComponent=!0}}]);