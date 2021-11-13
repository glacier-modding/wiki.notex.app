"use strict";(self.webpackChunkwiki_notex_app=self.webpackChunkwiki_notex_app||[]).push([[797],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3,description:"A walkthrough of Glacier 2 and modding."},l="Glacier 2 Modding Basics",c={unversionedId:"glacier2/modding_basics",id:"glacier2/modding_basics",isDocsHomePage:!1,title:"Glacier 2 Modding Basics",description:"A walkthrough of Glacier 2 and modding.",source:"@site/docs/glacier2/modding_basics.md",sourceDirName:"glacier2",slug:"/glacier2/modding_basics",permalink:"/glacier2/modding_basics",editUrl:"https://github.com/glacier-modding/wiki.notex.app/blob/main/docs/glacier2/modding_basics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"A walkthrough of Glacier 2 and modding."},sidebar:"tutorialSidebar",previous:{title:"RPKG",permalink:"/glacier2/rpkg"},next:{title:"Chunk Data",permalink:"/glacier2/chunkdata"}},p=[{value:"Background",id:"background",children:[],level:2},{value:"Game Assets",id:"game-assets",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glacier-2-modding-basics"},"Glacier 2 Modding Basics"),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"The Glacier 2 Engine is IO Interactive's proprietary custom game engine designed to run Hitman games. What is known about the engine is a result of reverse-engineering the files provided to the community via the games themselves."),(0,i.kt)("h2",{id:"game-assets"},"Game Assets"),(0,i.kt)("p",null,"In order to understand the basics of Glacier 2 modding, there are a few core concepts to grasp. First, navigate to the Hitman 3 game directory."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime")," folder contains files with the ",(0,i.kt)("inlineCode",{parentName:"p"},"rpkg")," file extension. These are the game's assets, listed in a set order and separated by chunks. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"chunk0")," contains the global assets used in all of the game's missions. You can view what each chunk represents ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.notex.app/glacier2/chunkdata"},"here"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),': You may also notice chunk "patch" files corresponding to the chunk files. These are updates to the original files. You\'ll be using chunk patches to mod the game.')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rpkg")," files contain unique asset types within them. Assets contained in these files have a hash (an alphanumeric sequence generated from the asset's name) and the asset data itself. You can view the different file formats names and their details ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.notex.app/glacier2/fileformats/"},"here"),"."),(0,i.kt)("p",null,"Asset data formats are diverse, but both readable and editable when using the proper tools. To make sense of these files, download the fittingly-named ",(0,i.kt)("inlineCode",{parentName:"p"},"rpkg")," tool ",(0,i.kt)("a",{parentName:"p",href:"https://www.notex.app/rpkg"},"here"),".",(0,i.kt)("sup",null,"1")," Make sure you have the ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet-framework"},".NET Framework")," installed on your machine."),(0,i.kt)("p",null,"Also included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime")," folder is a ",(0,i.kt)("inlineCode",{parentName:"p"},"packagedefinition.txt")," file. This file tracks the patches - updates and mod additions - to the game's content. The included file in a retail installation limits the amount of patches that the file can contain, so it itself also needs to be patched! You can find the patched version as well as a decoder and encoder ",(0,i.kt)("a",{parentName:"p",href:"https://www.notex.app/tools/online/xtea"},"here"),"."))}u.isMDXComponent=!0}}]);