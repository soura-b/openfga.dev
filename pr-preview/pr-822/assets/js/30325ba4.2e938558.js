"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[8667],{767:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=i(74848),n=i(28453),o=i(36289);const a={sidebar_position:1,slug:"/modeling/direct-access",description:"Granting a user access to an object"},r="Direct Access",c={id:"content/modeling/direct-access",title:"Direct Access",description:"Granting a user access to an object",source:"@site/docs/content/modeling/direct-access.mdx",sourceDirName:"content/modeling",slug:"/modeling/direct-access",permalink:"/pr-preview/pr-822/docs/modeling/direct-access",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/direct-access.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/modeling/direct-access",description:"Granting a user access to an object"},sidebar:"docs",previous:{title:"Get Started with Modeling",permalink:"/pr-preview/pr-822/docs/modeling/getting-started"},next:{title:"User Groups",permalink:"/pr-preview/pr-822/docs/modeling/user-groups"}},l={},d=[{value:"Before you start",id:"before-you-start",level:2},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Create A Relationship Tuple",id:"01-create-a-relationship-tuple",level:3},{value:"02. Check That The Relationship Exists",id:"02-check-that-the-relationship-exists",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"direct-access",children:"Direct Access"})}),"\n",(0,s.jsx)(o.ZE,{}),"\n",(0,s.jsxs)(t.p,{children:["This article describes how to grant a ",(0,s.jsx)(o.OK,{section:"what-is-a-user",linkName:"user"})," access to an ",(0,s.jsx)(o.OK,{section:"what-is-an-object",linkName:"object"})," in ",(0,s.jsx)(o.bU,{format:o.Ed.ProductLink}),"."]}),"\n",(0,s.jsxs)(o.u6,{title:"When to use",appearance:"filled",children:[(0,s.jsxs)(t.p,{children:["Granting access with ",(0,s.jsx)(o.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"})," is a core part of ",(0,s.jsx)(o.bU,{format:o.Ed.ShortForm}),". Without relationship tuples, any ",(0,s.jsx)(o.OK,{section:"what-is-a-check-request",linkName:"checks"}),"_ will fail. You should use:"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"authorization model"})," to represent what relations are possible between the users and objects in the system"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"relationship tuples"})," to represent the facts about the relationships between users and objects in your system."]}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,s.jsxs)(t.p,{children:["Familiarize yourself with ",(0,s.jsx)(o.OK,{})," to understand how to develop a relationship tuple and authorization model."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)(t.p,{children:["Assume that you have the following ",(0,s.jsx)(o.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"}),".",(0,s.jsx)("br",{}),"\nYou have a ",(0,s.jsx)(o.OK,{section:"what-is-a-type",linkName:"type"})," called ",(0,s.jsx)(t.code,{children:"document"})," that can have a ",(0,s.jsx)(t.code,{children:"viewer"})," and/or an ",(0,s.jsx)(t.code,{children:"editor"}),"."]})}),(0,s.jsx)(o.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{viewer:{this:{}},editor:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"}]},editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,s.jsx)("hr",{}),(0,s.jsx)(t.p,{children:"In addition, you will need to know the following:"}),(0,s.jsxs)(t.h3,{id:"-concepts",children:[(0,s.jsx)(o.bU,{format:o.Ed.ShortForm})," Concepts"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(o.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(o.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(o.OK,{section:"what-is-a-relation",linkName:"Relation"}),": a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,s.jsxs)(t.li,{children:["An ",(0,s.jsx)(o.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(o.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,s.jsx)(o.bU,{format:o.Ed.ShortForm})]}),"\n"]})]}),"\n",(0,s.jsx)(o.QF,{}),"\n",(0,s.jsx)(t.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,s.jsxs)(t.p,{children:["For an application to understand that ",(0,s.jsx)(t.strong,{children:"user x"})," has access to ",(0,s.jsx)(t.strong,{children:"document y"}),", it must provide ",(0,s.jsx)(o.bU,{format:o.Ed.LongForm})," that information with ",(0,s.jsx)(o.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"}),".\nEach relationship tuple has three basic parameters: a ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(o.OK,{section:"what-is-a-user",linkName:"user"})}),", a ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(o.OK,{section:"what-is-a-relation",linkName:"relation"})})," and an ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(o.OK,{section:"what-is-an-object",linkName:"object"})}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"01-create-a-relationship-tuple",children:"01. Create A Relationship Tuple"}),"\n",(0,s.jsxs)(t.p,{children:["Below, you'll add a ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(o.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple"})})," to indicate that ",(0,s.jsx)(t.code,{children:"bob"})," is an ",(0,s.jsx)(t.code,{children:"editor"})," of ",(0,s.jsx)(t.code,{children:"document:meeting_notes.doc"})," by adding the following:"]}),"\n",(0,s.jsx)(o.dp,{relationshipTuples:[{user:"user:bob",relation:"editor",object:"document:meeting_notes.doc"}]}),"\n",(0,s.jsx)(t.h3,{id:"02-check-that-the-relationship-exists",children:"02. Check That The Relationship Exists"}),"\n",(0,s.jsxs)(t.p,{children:["Once you add that relationship tuple to ",(0,s.jsx)(o.bU,{format:o.Ed.ShortForm}),", you can ",(0,s.jsx)(o.OK,{section:"what-is-a-check-request",linkName:"check"})," if the relationship is valid by asking if bob is an editor of document",":meeting_notes",".doc:"]}),"\n",(0,s.jsx)(o.ou,{user:"user:bob",relation:"editor",object:"document:meeting_notes.doc",allowed:!0}),"\n",(0,s.jsxs)(t.p,{children:["Checking whether ",(0,s.jsx)(t.code,{children:"bob"})," is an ",(0,s.jsx)(t.code,{children:"viewer"})," of ",(0,s.jsx)(t.code,{children:"document:meeting_notes.doc"})," returns ",(0,s.jsx)(t.strong,{children:"false"})," because that relationship tuple does not exist in ",(0,s.jsx)(o.bU,{format:o.Ed.ShortForm})," yet."]}),"\n",(0,s.jsx)(o.ou,{user:"user:bob",relation:"viewer",object:"document:meeting_notes.doc",allowed:!1}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["When creating relationship tuples for ",(0,s.jsx)(o.bU,{format:o.Ed.LongForm}),", use unique ids for each object and user within your application domain. We're using first names and simple ids to as an easy-to-follow example."]})}),"\n",(0,s.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,s.jsx)(o.XQ,{description:"Check the following sections for more on how to model with {ProductName}.",relatedLinks:[{title:"{ProductName} Concepts",description:"Learn about the {ProductName} Concepts.",link:"../concepts",id:"../fga-concepts"},{title:"Modeling: Getting Started",description:"Learn about how to get started with modeling.",link:"./getting-started",id:"./getting-started"},{title:"Configuration Language",description:"Learn about {ProductName} Configuration Language.",link:"../configuration-language",id:"../configuration-language"}]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);