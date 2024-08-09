"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[824],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"rvar",title:"RVar",hide_title:!0},s="RVar",p={unversionedId:"basics/rvar",id:"basics/rvar",title:"RVar",description:"RVar (the contraction of random variable) is the backbone data structure of CILib.",source:"@site/../cilib-docs/target/mdoc/basics/rvar.md",sourceDirName:"basics",slug:"/basics/rvar",permalink:"/docs/basics/rvar",draft:!1,tags:[],version:"current",frontMatter:{id:"rvar",title:"RVar",hide_title:!0},sidebar:"docs",previous:{title:"Preface",permalink:"/docs/basics/basic-tutorial"},next:{title:"Step",permalink:"/docs/basics/step"}},u={},d=[{value:"The Basics of RVar",id:"the-basics-of-rvar",level:2},{value:"Some example usage",id:"some-example-usage",level:2},{value:"Evaluating RVar instances",id:"evaluating-rvar-instances",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rvar"},"RVar"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," (the contraction of ",(0,r.kt)("em",{parentName:"p"},"random variable"),") is the backbone data structure of CILib."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," allows for the sequenced composition of actions involving randomness, but more importantly tracks the effect of applying randomness to the computed value (which the ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," represents).\nTracking the effect of randomness is important, particularly within Computational Intelligence algorithms, in order to allow for the duplication of the computational process.\nIn other words, even if a computation uses randomness in order to calculate a value, the resulting value will always be the same provided that the provided inputs are unchanged.\nThis ",(0,r.kt)("strong",{parentName:"p"},"purity")," (the same inputs producing the same output) allows allows a stochastic process (one which involves randomness) to be represented as a ",(0,r.kt)("em",{parentName:"p"},"purely deterministic")," and ",(0,r.kt)("em",{parentName:"p"},"declarative")," computation.\nThe stochastic nature of the data structure is, however, only relevant when an ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," instance is evaluated to determine the computed value."),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"rvar-1"},"RVar"),(0,r.kt)("p",{parentName:"blockquote"},"An instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," represents a computation that when evaluated, produces a value with randomness applied.")),(0,r.kt)("h2",{id:"the-basics-of-rvar"},"The Basics of RVar"),(0,r.kt)("p",null,"Instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," cannot be created without making use of the predefined functions, homed within the ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," companion object.\nThese functions allow for the creation of basic types with applied randomness and include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integers (",(0,r.kt)("inlineCode",{parentName:"li"},"Ints")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Long"),")"),(0,r.kt)("li",{parentName:"ul"},"Floating point numbers (",(0,r.kt)("inlineCode",{parentName:"li"},"Float")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Double"),")"),(0,r.kt)("li",{parentName:"ul"},"Booleans (",(0,r.kt)("inlineCode",{parentName:"li"},"True"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"False")," values)"),(0,r.kt)("li",{parentName:"ul"},"Constant values where the randomness is not necessary - useful when a constant value needs to be used within a calculation of ",(0,r.kt)("inlineCode",{parentName:"li"},"RVar"),"s.")),(0,r.kt)("p",null,"Other values are built up using these base instances quite easily.\nAdditionally, functions that operate on the types mentioned above are available.\nThese operations are common operations which would be tedious for the user to maintain and have been included as part of the library.\nIt is recommended to look at the documentation for ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," to become familiar with the available combinator functions."),(0,r.kt)("h2",{id:"some-example-usage"},"Some example usage"),(0,r.kt)("p",null,"To make the statements in the previous section a little more concrete, let's examine some usage examples.\nAssume that you need to create a list of random values.\nNow, because we are using a statically typed language, we cannot mix and match different ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," instances without actually losing information about the list contents."),(0,r.kt)("p",null,"Losing information implies that the type which may represent all the types within the list becomes more and more general.\nThe more general the type becomes, less of the known specific information for the underlying type remains.\nFor example, in Java a list containing several different types within it will be represented as a ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Object>"),".\nThe contents of the list are known to be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),", but not much can be achieved with this knowledge.\n",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.Object")," does not allow for many methods which means that mon many relevant operations are possible.\nSuch situations tend to force the use of reflection, which produces fragile and unverifiable programs."),(0,r.kt)("p",null,"For this reason, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," companion object allows us to create lists of values using the already defined instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val listOfInts = RVar.ints(12)\n// listOfInts: RVar[List[Int]] = FlatMap(\n//   value = FlatMap(\n//     value = FlatMap(\n//       value = Modify(\n//         run0 = cilib.RVar$$$Lambda$14936/0x0000000103dbc040@1f2571a3\n//       ),\n//       continue = zio.prelude.fx.ZPure$$Lambda$14938/0x0000000103dba040@5004add9\n//     ),\n//     continue = zio.prelude.fx.ZPure$$Lambda$14940/0x0000000103dd0840@199dbb26\n//   ),\n//   continue = zio.prelude.fx.ZPure$$Lambda$14940/0x0000000103dd0840@28ca2eec\n// )\n")),(0,r.kt)("p",null,"So ",(0,r.kt)("inlineCode",{parentName:"p"},"listOfInts")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Int]")," of 12 elements that are all randomly generated but contained within a ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," computation.\nIt is important to observe that the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"listOfInt")," is ",(0,r.kt)("em",{parentName:"p"},"not actually")," 12 random integers, but is rather a computation which when evaluated will produce a list of randomised integers.\nInstances of ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," may be combined to produce new ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," values though the predefined combinator functions and the ",(0,r.kt)("em",{parentName:"p"},"for-comprehension")," of Scala."),(0,r.kt)("p",null,"Let's now take ",(0,r.kt)("inlineCode",{parentName:"p"},"listOfInts")," and do something with the internal ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Int]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val doubledListOfInts =\n  for {\n    list <- listOfInts\n  } yield list.map(x => x * 2)\n// doubledListOfInts: zio.prelude.fx.ZPure[Nothing, RNG, RNG, Any, Nothing, List[Int]] = FlatMap(\n//   value = FlatMap(\n//     value = FlatMap(\n//       value = FlatMap(\n//         value = Modify(\n//           run0 = cilib.RVar$$$Lambda$14936/0x0000000103dbc040@1f2571a3\n//         ),\n//         continue = zio.prelude.fx.ZPure$$Lambda$14938/0x0000000103dba040@5004add9\n//       ),\n//       continue = zio.prelude.fx.ZPure$$Lambda$14940/0x0000000103dd0840@199dbb26\n//     ),\n//     continue = zio.prelude.fx.ZPure$$Lambda$14940/0x0000000103dd0840@28ca2eec\n//   ),\n//   continue = zio.prelude.fx.ZPure$$Lambda$14940/0x0000000103dd0840@1b95307d\n// )\n")),(0,r.kt)("p",null,"The value ",(0,r.kt)("inlineCode",{parentName:"p"},"doubledListOfInts")," extracted the list contained within the ",(0,r.kt)("inlineCode",{parentName:"p"},"listOfInts")," and then yielded a result which multiplied each of the elements in the list by 2.\nThe same operation may also be achieved using the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," method on ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val doubledListOfIntsAlternative =\n  listOfInts.map(_.map(x => x * 2))\n// doubledListOfIntsAlternative: zio.prelude.fx.ZPure[Nothing, RNG, RNG, Any, Nothing, List[Int]] = FlatMap(\n//   value = FlatMap(\n//     value = FlatMap(\n//       value = FlatMap(\n//         value = Modify(\n//           run0 = cilib.RVar$$$Lambda$14936/0x0000000103dbc040@1f2571a3\n//         ),\n//         continue = zio.prelude.fx.ZPure$$Lambda$14938/0x0000000103dba040@5004add9\n//       ),\n//       continue = zio.prelude.fx.ZPure$$Lambda$14940/0x0000000103dd0840@199dbb26\n//     ),\n//     continue = zio.prelude.fx.ZPure$$Lambda$14940/0x0000000103dd0840@28ca2eec\n//   ),\n//   continue = zio.prelude.fx.ZPure$$Lambda$14940/0x0000000103dd0840@6e8a2cb3\n// )\n")),(0,r.kt)("p",null,"The result of ",(0,r.kt)("inlineCode",{parentName:"p"},"doubledListOfInts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"doubledListOfIntsAlternative")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," value, nothing else.\nThe actual value of the list is ",(0,r.kt)("em",{parentName:"p"},"still not known")," when the values are transformed.\nEssentially, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," computation became a richer computation which would first generate the randomised values and then apply a transformation on these values to ultimately produce the final result.\nThat's quite convenient.\nWe can now create new ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar"),"s using existing ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," values and use any method to create these values that is the most comfortable."),(0,r.kt)("p",null,"Now that we can create these ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," instances, we would need to evaluate them in order to produce the presented random value."),(0,r.kt)("h2",{id:"evaluating-rvar-instances"},"Evaluating RVar instances"),(0,r.kt)("p",null,"It should be stressed that the internal value of ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar"),' should not be a concern to the user.\nEven though we are playing with these instances now, it should be noted that the library will produce values that should only be evaluated at the "end of the world".\nThe "end of the world" means that the ',(0,r.kt)("inlineCode",{parentName:"p"},"RVar"),"s are evaluated at the entry point to your program (often in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function).\nUp until that evaluation point, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," instances describe the computation including randomness and are often referred to as sub-programs of the main program."),(0,r.kt)("p",null,"Now, to evaulate a ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," instance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," needs to be ",(0,r.kt)("em",{parentName:"p"},"evaluated"),".\nThis evaluation requires a ",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," value.\n",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," is an instance of a pseudo-random number generator (PRNG).\nThe CMWC generator is recommended due to the good performance properties and overall power of the generator itself.\n",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," creation is similar to that of ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar"),", in that the ",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," companion object's functions should be used to create the values.\nPseudo-random number generators require a starting point, or a ",(0,r.kt)("em",{parentName:"p"},"seed")," value.\nThis is the single value that initializes the internal state of the generator, and is the single value required to produce the same result from the same ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," program.\nThe ability to reproduce values, even though randomness is involved, is the most crucial feature of the library.\nReproduction allows others to obtain the same results for a given experiment / algorithm execution, which in turn allows for simplified error correction and validation of results."),(0,r.kt)("p",null,"Let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," value and evaluate one of the previously created ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// Our seed is 1234\nval rng = RNG.init(1234)\n// rng: RNG = cilib.CMWC@1abafecf\n\nval result = doubledListOfInts.run(rng)\n// result: (RNG, List[Int]) = (\n//   cilib.CMWC@30970fc1,\n//   List(\n//     270407222,\n//     -912624788,\n//     1077819590,\n//     854019630,\n//     -970459794,\n//     -1946478236,\n//     -1210620186,\n//     -325849792,\n//     1159678500,\n//     1219035670,\n//     -307371322,\n//     -1513169218\n//   )\n// )\n")),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," is interesting.\nIt is a tuple of two values, a ",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," as well as a ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Int]")," of evaluated randomised integers.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," part of the result is the new state of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RNG"),", after the complete evaluation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," computation.\nBy returning the updated ",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," state, the state may be threaded into a subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," computation."),(0,r.kt)("p",null,"Provided the same ",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," state is used and the same sequence of ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," instances are evaluated, identical solution is produced.\nIt might seem that such threading could be error prone.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"RNG")," threading ",(0,r.kt)("strong",{parentName:"p"},"is")," error prone and also the reason why ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," is responsible for such threading, instead of the user.\n",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," is also a stack-safe computation, meaning that the composition of ",(0,r.kt)("inlineCode",{parentName:"p"},"RVar")," instances will not result in a stack-overflow error which is common in highly recursive logic."))}m.isMDXComponent=!0}}]);