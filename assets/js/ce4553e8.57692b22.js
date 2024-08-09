"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(f,c(c({ref:t},p),{},{components:n})):i.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],o={id:"metric-space",title:"Metric Space"},l=void 0,s={unversionedId:"basics/metric-space",id:"basics/metric-space",title:"Metric Space",description:'In this chapter we will start off with a brief explanation of "what are metric spaces".',source:"@site/../cilib-docs/target/mdoc/basics/metric-space.md",sourceDirName:"basics",slug:"/basics/metric-space",permalink:"/docs/basics/metric-space",draft:!1,tags:[],version:"current",frontMatter:{id:"metric-space",title:"Metric Space"}},p={},u=[{value:"Brief Definition of Metric Spaces",id:"brief-definition-of-metric-spaces",level:2},{value:"Metric Spaces in CILib",id:"metric-spaces-in-cilib",level:2},{value:"Implicits",id:"implicits",level:3},{value:"Summary",id:"summary",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'In this chapter we will start off with a brief explanation of "what are metric spaces".\nAfter which we explore CILib\'s implementations of certain metric spaces.\nIt should be noted that the focus of this chapter is learning what and how metric spaces are used in CILib, not actually learning metric spaces.'),(0,a.kt)("h2",{id:"brief-definition-of-metric-spaces"},"Brief Definition of Metric Spaces"),(0,a.kt)("p",null,"A MetricSpace is a set together with a notion of distance between elements.\nThose distances, taken together, are called a metric on the set.\nDistance is computed by a function dist which has the following four laws:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Non-negative: for all x y. dist x y >= 0"),(0,a.kt)("li",{parentName:"ul"},"Identity of indiscernibles: for all x y. dist x y == 0 <=> x == y"),(0,a.kt)("li",{parentName:"ul"},"Symmetry: for all x y. dist x y == dist y x"),(0,a.kt)("li",{parentName:"ul"},"Triangle inequality: for all x y z. dist x z <= dist x y + dist y z")),(0,a.kt)("p",null,"The ","[Wikipedia][metric-space-link]"," article can provide more details on metric spaces if you are unfamiliar."),(0,a.kt)("h2",{id:"metric-spaces-in-cilib"},"Metric Spaces in CILib"),(0,a.kt)("p",null,"Firstly, let's take a look at how CILib defines a metric space."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait MetricSpace[A,B] { self =>\n  def dist(x: A, y: A): B\n\n  def map[C](f: B => C): MetricSpace[A,C] =\n    new MetricSpace[A,C] {\n      def dist(x: A, y: A) = f(self.dist(x, y))\n    }\n\n  def flatMap[C](f: B => MetricSpace[A,C]): MetricSpace[A,C] =\n    new MetricSpace[A,C] {\n      def dist(x: A, y: A) =\n        f(self.dist(x,y)).dist(x, y)\n    }\n}\n")),(0,a.kt)("p",null,"As you can see, it uses a trait to provide am abstract definition of a metric space object.\nThis abstraction becomes fully realized through the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Metric Space")," object (MSO for short).\nThe MSO has several methods, all of which return implementation of the trait ",(0,a.kt)("inlineCode",{parentName:"p"},"MetricSpace"),".\nThus, the following metric spaces are available to us:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Levenshtein"),(0,a.kt)("li",{parentName:"ul"},"Discrete"),(0,a.kt)("li",{parentName:"ul"},"Minkowski"),(0,a.kt)("li",{parentName:"ul"},"Manhattan"),(0,a.kt)("li",{parentName:"ul"},"Euclidean"),(0,a.kt)("li",{parentName:"ul"},"Chebyshev"),(0,a.kt)("li",{parentName:"ul"},"Hamming")),(0,a.kt)("p",null,"Now for formal definitions of the methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"levenshtein[B](implicit B: Integral[B]): MetricSpace[String,B]\n\ndiscrete[A,B](implicit A: scalaz.Equal[A], B: Integral[B]): MetricSpace[A, B]\n\nchebyshev[F[_]:Foldable, A:Order:Signed](implicit ev: Ring[A]): MetricSpace[F[A], A]\n\nminkowski[F[_]:Foldable, A:Signed:Field,B](alpha: Int)(implicit A: Fractional[A], ev: Field[B]): MetricSpace[F[A],B]\n\nmanhattan[F[_]:Foldable, A:Signed:Field:Fractional, B:Fractional:Field] = minkowski[F, A, B](1)\n\neuclidean[F[_]:Foldable, A:Signed:Field:Fractional, B:Fractional:Field] = minkowski[F, A, B](2)\n\nhamming[F[_]:Foldable, A]: MetricSpace[F[A],Int]\n\npoint[A,B](a: B): MetricSpace[A,B]: MetricSpace[A,B]\n")),(0,a.kt)("p",null,"If any of this seems daunting or scary in any way, don't worry.\nThese are methods, just like any other methods, but have strict type parameters.\nSo the code, ",(0,a.kt)("inlineCode",{parentName:"p"},"F[_]:Foldable"),", simply means we require some sort of functor that is an extension of ",(0,a.kt)("inlineCode",{parentName:"p"},"Foldable"),'.\nIf you are still a bit unsure, I recommend looking at the "Scala With Cats" book by the team over at ',"[Underscore][link-underscore]","."),(0,a.kt)("p",null,"Currently ",(0,a.kt)("inlineCode",{parentName:"p"},"MetricSpaces")," are only used within the selection methods in CILib.\nHowever, how you choose to use them is entirely up to you."),(0,a.kt)("h3",{id:"implicits"},"Implicits"),(0,a.kt)("p",null,"Lastly, the MSO provides us with three implicit definitions that which might be useful to know.\nThese being:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"metricSpaceProfunctor: Profunctor[MetricSpace]\n\nmetricSpaceSemiGroup[A,B](implicit B: Semigroup[B]): Semigroup[MetricSpace[A,B]]\n\nmetricSpaceMonad[A]: Monad[MetricSpace[A,*]]\n")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This chapter was one of the shorter ones in this book, but that does not make it any less important.\nArmed with this new theory knowledge we can start putting things putting metric spaces to work in the next chapter,\nwhere we will see how they are used through practical examples."))}d.isMDXComponent=!0}}]);