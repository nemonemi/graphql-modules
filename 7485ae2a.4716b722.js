(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},129:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},131:function(e,t,n){"use strict";var a=n(0),r=n(132);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},132:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},134:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(131),i=n(129),l=n(55),c=n.n(l),s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,u=e.defaultValue,d=e.values,b=e.groupId,m=e.className,h=Object(o.a)(),f=h.tabGroupChoices,y=h.setTabGroupChoices,v=Object(a.useState)(u),O=v[0],g=v[1];if(null!=b){var j=f[b];null!=j&&j!==O&&d.some((function(e){return e.value===j}))&&g(j)}var x=function(e){g(e),null!=b&&y(b,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(a.cloneElement)(l.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},135:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(128)),i=n(134),l=n(135),c={id:"get-started",title:"Get Started",sidebar_label:"Get Started"},s={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Get Started",description:"To start using GraphQL Modules, all you need is to install it's package and graphql.",source:"@site/docs/get-started.md",slug:"/get-started",permalink:"/docs/get-started",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/get-started.md",version:"current",sidebar_label:"Get Started",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/index"},next:{title:"Type Definitions",permalink:"/docs/essentials/type-definitions"}},p=[{value:"Installation",id:"installation",children:[{value:"Your first GraphQL module",id:"your-first-graphql-module",children:[]},{value:"Use your Module",id:"use-your-module",children:[]},{value:"Use your Application",id:"use-your-application",children:[]}]}],u={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To start using GraphQL Modules, all you need is to install it's package and ",Object(o.b)("inlineCode",{parentName:"p"},"graphql"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We highly recommend to use TypeScript for writing your backend, since it provides support for Reflection (if you plan to use dependency injection) and makes it easier to develop API services.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(i.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"yarn add graphql graphql-modules\n"))),Object(o.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm install --save graphql graphql-modules\n")))),Object(o.b)("h3",{id:"your-first-graphql-module"},"Your first GraphQL module"),Object(o.b)("p",null,"To create a Module, use ",Object(o.b)("inlineCode",{parentName:"p"},"createModule"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { createModule } from 'graphql-modules';\n\nexport const myModule = createModule({\n  id: 'my-module',\n  dirname: __dirname,\n  typeDefs: [\n    `type Query {\n      hello: String!\n    }`,\n  ],\n  resolvers: {\n    Query: {\n      hello: () => 'world',\n    },\n  },\n});\n")),Object(o.b)("p",null,"Each module contains GraphQL Type definitions, unique id and optionally resolvers."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"That's not everything it can do, Module accepts also Providers (",Object(o.b)("a",{parentName:"p",href:"./di/introduction"},"Dependency Injection"),") and ",Object(o.b)("a",{parentName:"p",href:"./advanced/middlewares"},"Middlewares"),".")),Object(o.b)("h4",{id:"what-happened-here"},"What happened here?"),Object(o.b)("p",null,"We are using ",Object(o.b)("inlineCode",{parentName:"p"},"createModule")," to declare our module, and name it as ",Object(o.b)("inlineCode",{parentName:"p"},"my-module"),". Naming is important, because it help you to locate issues in your type definition."),Object(o.b)("p",null,"We also added ",Object(o.b)("inlineCode",{parentName:"p"},"dirname")," and pointed it to ",Object(o.b)("inlineCode",{parentName:"p"},"__dirname")," in order to make it simpler later to match exception to the correct file. It's optional, but useful."),Object(o.b)("p",null,"Next, there is ",Object(o.b)("inlineCode",{parentName:"p"},"typeDefs")," and ",Object(o.b)("inlineCode",{parentName:"p"},"resolvers")," which you should already know if you are familiar with GraphQL. It defines the type we have in that module, and the implementation behind it."),Object(o.b)("p",null,'At this point, this module acts like a types "capsule" you can load and import to various GraphQL ',Object(o.b)("inlineCode",{parentName:"p"},"Applications"),"s."),Object(o.b)("h3",{id:"use-your-module"},"Use your Module"),Object(o.b)("p",null,"As mentioned before, Modules create Application, so let's create one. We are importing the module we created earlier, and provide it to the application:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { createApplication } from 'graphql-modules';\nimport { myModule } from './my-module';\n\n// This is your application, it contains your GraphQL schema and the implementation of it.\nconst application = createApplication({\n  modules: [myModule],\n});\n\n// This is your actual GraphQL schema\nconst mySchema = application.schema;\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Application doesn't allow providing schemas or resolvers, since it's only a loader of your various modules.")),Object(o.b)("h3",{id:"use-your-application"},"Use your Application"),Object(o.b)("p",null,"Now that you have ",Object(o.b)("inlineCode",{parentName:"p"},"Module"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," and you got your ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),", you need to make it available to consumption."),Object(o.b)("p",null,"GraphQL-Modules allow you to do much more, like managing the lifecycle of your execution, encapsulate your HTTP request and more. To do that in the most optimal and flexible way, we need to wrap the GraphQL execution flow. Some GraphQL servers implementation allow this kind of flexibility, and some doesn't."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"But we got you covered, and provided solution for all popular GraphQL server implementations.")),Object(o.b)("p",null,"Your GraphQL ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," exposes ",Object(o.b)("inlineCode",{parentName:"p"},"createExecution")," and ",Object(o.b)("inlineCode",{parentName:"p"},"createSubscription")," methods, which are just plug-and-play replacements for the default functions from ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-js"),"."),Object(o.b)(i.a,{defaultValue:"apollo",values:[{label:"Apollo Server",value:"apollo"},{label:"Express GraphQL",value:"express"},{label:"GraphQL-Helix",value:"helix"},{label:"Other servers?",value:"other"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"apollo",mdxType:"TabItem"},Object(o.b)("p",null,"If you are using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-server"},"Apollo-Server"),", you can use ",Object(o.b)("inlineCode",{parentName:"p"},"createSchemaForApollo")," to get a schema that is adapted for this server, and integrates with it perfectly."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/server.ts"',title:'"/src/server.ts"'},"import { ApolloServer } from 'apollo-server';\nimport { application } from './application';\n\nconst schema = application.createSchemaForApollo();\n\nconst server = new ApolloServer({\n  schema,\n});\n\nserver.listen().then(({ url }) => {\n  console.log(`\ud83d\ude80 Server ready at ${url}`);\n});\n"))),Object(o.b)(l.a,{value:"express",mdxType:"TabItem"},Object(o.b)("p",null,"If you are using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/graphql/express-graphql"},"Express-GraphQL"),", here's how you do it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/server.ts"',title:'"/src/server.ts"'},"import express from 'express';\nimport graphqlHTTP from 'express-graphql';\nimport { application } from './application';\n\nconst execute = application.createExecution();\nconst schema = application.schema;\n\nconst server = express();\n\nserver.use(\n  '/',\n  graphqlHTTP({\n    schema,\n    customExecuteFn: execute,\n    graphiql: true,\n  })\n);\n\nserver.listen(4000, () => {\n  console.log(`\ud83d\ude80 Server ready at http://localhost:4000/`);\n});\n"))),Object(o.b)(l.a,{value:"helix",mdxType:"TabItem"},Object(o.b)("p",null,"If you are using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/contrawork/graphql-helix"},"GraphQL-Helix"),", here's how you do it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="/src/server.ts"',title:'"/src/server.ts"'},"import express from 'express';\nimport { getGraphQLParameters, processRequest } from 'graphql-helix';\nimport { application } from './application';\n\nconst app = express();\napp.use(express.json());\n\napp.use('/graphql', async (req, res) => {\n  const request = {\n    body: req.body,\n    headers: req.headers,\n    method: req.method,\n    query: req.query,\n  };\n  const { operationName, query, variables } = getGraphQLParameters(request);\n\n  const result = await processRequest({\n    operationName,\n    query,\n    variables,\n    request,\n    schema: application.schema,\n    execute: application.createExecution(),\n    subscribe: application.createSubscription(),\n  });\n\n  result.headers.forEach(({ name, value }) => res.setHeader(name, value));\n  res.status(result.status);\n  res.json(result.payload);\n});\n\napp.listen(port, () => {\n  console.log(`GraphQL server is running on port ${port}.`);\n});\n"))),Object(o.b)(l.a,{value:"other",mdxType:"TabItem"},Object(o.b)("p",null,"If you are using a different server or setup, you can get the custom ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," and ",Object(o.b)("inlineCode",{parentName:"p"},"subscribe")," functions from your ",Object(o.b)("inlineCode",{parentName:"p"},"Application"),", and provide it to your server:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { createApplication } from 'graphql-modules';\n\nconst application = createApplication({\n  /* ... */\n});\n\nconst schema = application.schema;\nconst execute = application.createExecution();\nconst subscribe = application.createSubscription();\n")),Object(o.b)("p",null,"If you are still having issues, you can always ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules/issues/new"},"report an issue on a missing integration"),", and we'll look into that ;)"))))}d.isMDXComponent=!0}}]);