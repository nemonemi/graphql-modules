(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{128:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return y}));var t=n(0),o=n.n(t);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var r=o.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=u(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=t,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?o.a.createElement(y,a(a({ref:r},c),{},{components:n})):o.a.createElement(y,a({ref:r},c))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,s=new Array(l);s[0]=m;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,s[1]=a;for(var c=2;c<l;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return a})),n.d(r,"rightToc",(function(){return i})),n.d(r,"default",(function(){return u}));var t=n(3),o=n(8),l=(n(0),n(128)),s={id:"resolvers",title:"Resolvers"},a={unversionedId:"essentials/resolvers",id:"essentials/resolvers",isDocsHomePage:!1,title:"Resolvers",description:"Let's focus on resolve functions usually called just resolvers.",source:"@site/docs/essentials/resolvers.md",slug:"/essentials/resolvers",permalink:"/docs/essentials/resolvers",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/essentials/resolvers.md",version:"current",sidebar:"docs",previous:{title:"Type Definitions",permalink:"/docs/essentials/type-definitions"},next:{title:"Context",permalink:"/docs/essentials/context"}},i=[{value:"Resolvers Example",id:"resolvers-example",children:[]},{value:"Dynamically Load resolvers files",id:"dynamically-load-resolvers-files",children:[]}],c={rightToc:i};function u(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Let's focus on ",Object(l.b)("inlineCode",{parentName:"p"},"resolve")," functions usually called just ",Object(l.b)("strong",{parentName:"p"},"resolvers"),"."),Object(l.b)("p",null,"With GraphQL-Modules, you implement your resolvers in the same way you do that in any other GraphQL implementation."),Object(l.b)("p",null,"Modules created by GraphQL-Modules are smart enough to detect incorrect resolvers (that don't match type definitions or extensions for example). It helps you to detect duplicate and incorrect resolvers, or old resolvers that shouldn't be there."),Object(l.b)("h2",{id:"resolvers-example"},"Resolvers Example"),Object(l.b)("p",null,"Let's take for an example the following schema for ",Object(l.b)("inlineCode",{parentName:"p"},"User")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Query"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"import { createModule, gql } from 'graphql-modules';\n\nexport const myModule = createModule({\n  id: 'my-module',\n  dirname: __dirname,\n  typeDefs: gql`\n    type Query {\n      user(id: ID!): User\n    }\n\n    type User {\n      id: ID!\n      username: String!\n    }\n  `,\n  resolvers: {\n    Query: {\n      user(root, { id }) {\n        return {\n          _id: id,\n          username: 'jhon',\n        };\n      },\n    },\n    User: {\n      id(user) {\n        return user._id;\n      },\n      username(user) {\n        return user.username;\n      },\n    },\n  },\n});\n")),Object(l.b)("h2",{id:"dynamically-load-resolvers-files"},"Dynamically Load resolvers files"),Object(l.b)("p",null,"If you have many resolvers files in your module, and you wish to load it dynamically, you can use loaders from ",Object(l.b)("inlineCode",{parentName:"p"},"@graphql-tools/load-files"),"!"),Object(l.b)("p",null,"Start by installing this package:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"yarn add @graphql-tools/load-files\n")),Object(l.b)("p",null,"Next, use it to load your files dynamically:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"import MyQueryType from './query.type.graphql';\nimport { createModule } from 'graphql-modules';\nimport { loadFilesSync } from '@graphql-tools/load-files';\n\nexport const myModule = createModule({\n  id: 'my-module',\n  dirname: __dirname,\n  typeDefs: loadFilesSync(join(__dirname, './typeDefs/*.graphql')),\n  resolvers: loadFilesSync(join(__dirname, './resolvers/*.ts')),\n});\n")))}u.isMDXComponent=!0}}]);