"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8996:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s=void 0,p={unversionedId:"design/step",id:"design/step",title:"step",description:"Apart from tracking the effect of randomness, a computational intelligence",source:"@site/../cilib-docs/target/mdoc/design/step.md",sourceDirName:"design",slug:"/design/step",permalink:"/docs/design/step",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[],h={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"\nmdoc:invisible\nimport cilib._\nimport cilib.pso._\nimport cilib.pso.PSO._\nimport zio.prelude._\n")),(0,o.kt)("h1",{id:"step"},"Step"),(0,o.kt)("p",null,"Apart from tracking the effect of randomness, a computational intelligence\nalgorithm requires some additional information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The optimization scheme (",(0,o.kt)("inlineCode",{parentName:"li"},"Opt"),") required, either minimization or maximization"),(0,o.kt)("li",{parentName:"ul"},"The fitness function evaluation instance, ",(0,o.kt)("inlineCode",{parentName:"li"},"Eval"),", which calculates the quality of\nthe candidate solution")),(0,o.kt)("p",null,"The result is a function, which uses a predefined set of values to generate\na ",(0,o.kt)("inlineCode",{parentName:"p"},"RVar")," computation to which randomness still needs to be applied. The function\nis therefore of the shape"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(Opt,Eval[A]) => RVar[B]\n")),(0,o.kt)("p",null,'The predefined set of values required for input is also referred to as the\n"environment". Given that the environment is decided once, at the beginning of\nthe execution process, we can factor out this common parameter using a Kleisli\narrow, on this case the ',(0,o.kt)("inlineCode",{parentName:"p"},"ReaderT")," monad transformer is applicable, resulting\nin the final type of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ReaderT[RVar, (Opt,Eval[A]), B]\n")),(0,o.kt)("p",null,"Because monad transformers are monads themselves, we can freely compose different\n",(0,o.kt)("inlineCode",{parentName:"p"},"Step"),' instances to create a larger computation. The larger computation, being\ntermed the "algorithm". Due to the sequencing action of monads, ',(0,o.kt)("inlineCode",{parentName:"p"},"Step")," instances\nare analogous to steps in algorithm pseudo-code."),(0,o.kt)("p",null,"Now that the intention of ",(0,o.kt)("inlineCode",{parentName:"p"},"Step"),' is clearer, lets have a look at some usage. Keep\nin mind that even though the final "shape" of the ',(0,o.kt)("inlineCode",{parentName:"p"},"Step")," is defined, this does not\nlimit the manner in which we can create ",(0,o.kt)("inlineCode",{parentName:"p"},"Step")," instances.\nWithin a PSO, each particle has several actions applied to it, in order to create\na new particle that occupies a different location within the problem search space."),(0,o.kt)("p",null,"The canonical PSO algorithm iteratively alters the position (and state data) of each\nparticle to create a new particle for each within the collection. The new collection\nessentially replaces the original collection and this process repeats until some\nkind of stopping condition is met. Stopping condition logic is intentionally not\nincluded within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Step"),". The type for a PSO is then"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"List[Particle[S,A]] => Particle[S,A] => Step[RVar,(Opt,Eval[A]),Particle[A]]\n")),(0,o.kt)("p",null,"and the algorithm definition is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"\nmdoc\ndef pso[S](w: Double, c1: Double, c2: Double,\n  cognitive: Guide[S,Double], social: Guide[S,Double]\n)(implicit M: HasMemory[S,Double], V: HasVelocity[S,Double]\n): NonEmptyList[Particle[S,Double]] => Particle[S,Double] => Step[Particle[S,Double]]  =\n  collection => x => for {\n    cog     <- cognitive(collection, x)\n    soc     <- social(collection, x)\n    vel     <- stdVelocity(x, soc, cog, w, c1, c2)\n    p       <- stdPosition(x, vel)\n    p2      <- evalParticle(p)\n    p3      <- updateVelocity(p2, vel)\n    updated <- updatePBest(p3)\n  } yield updated\n")),(0,o.kt)("p",null,"That sure looks complex! Sure, there are a few things going on there, but it certainly\nis not complex - the syntax just makes the intention a little hidden due to the verbosity.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"pso")," function defines that there are some parameters that it requires\nfor the ",(0,o.kt)("inlineCode",{parentName:"p"},"stdVelocity")," function, namely ",(0,o.kt)("inlineCode",{parentName:"p"},"w"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"c1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"c2"),". Next it requires two individual\n",(0,o.kt)("inlineCode",{parentName:"p"},"Guide")," instances which are the particle attactors for the velocity update equation. In\nthe next parameter group is an implicit parameter that is constraining the types of\ndata elements ",(0,o.kt)("inlineCode",{parentName:"p"},"pso")," can work with. In this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"pso")," requires that all ",(0,o.kt)("inlineCode",{parentName:"p"},"Particle"),"\ninstances (which is just an alias for the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Entity[S,Position[Double]]"),")\nmust have a ",(0,o.kt)("inlineCode",{parentName:"p"},"HasMemory")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HasVelocity")," instance available for the compiler to provide.\nAs mentioned previously, in the section about lenses and optics, these classy lens instances\nprevent ",(0,o.kt)("inlineCode",{parentName:"p"},"Entity")," types that do not have a memory nor a velocity present in their\nstate parameter type. Again, we don't know what the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"S")," is at the definition\nlevel, it will be made concrete when we actually use the ",(0,o.kt)("inlineCode",{parentName:"p"},"pso")," function."),(0,o.kt)("p",null,"Every function within the for-comprehension is a function that yields a ",(0,o.kt)("inlineCode",{parentName:"p"},"Step")," instance\nof the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Step[Double,Particle[S,Double]]")," (in this usage example). The individual\n",(0,o.kt)("inlineCode",{parentName:"p"},"Step"),"s are then composed into a larger composition that ultimately results in the\ncreation of a new piece of data: the particle which replaces the particle identified\nby the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,o.kt)("h1",{id:"iteration"},"Iteration"),(0,o.kt)("p",null,"Algorithms can be executed either synchronously or asynchronously. Given an\nalgorithm definition like the definition of ",(0,o.kt)("inlineCode",{parentName:"p"},"pso")," above, it may be passed into\nan iteration function which converts the signature of ",(0,o.kt)("inlineCode",{parentName:"p"},"pso")," function into the\nshape:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"List[Particle[S,A]] => RVar[A,Particle[S,A]]\n")),(0,o.kt)("p",null,"It is important to note that the manner of execution constrains the amount\nof parallelism that may be applied to the iteration process. The synchronous\nscheme can be completely parallelized as there is no reliance on the currently\nbuilding collection. The asynchronous process on the other hand builds the new\ncollection from a combination of the current and new collections. As a result\nof the manner in which the asynchronous process executes, parallelism is not\npossible due to the shared state that is managed during the execution process."))}d.isMDXComponent=!0}}]);