"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[2110],{91087:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=i(74848),s=i(28453),a=i(82879);const o={sidebar_position:2,slug:"/interacting/transactional-writes",description:"Updating multiple relationship tuples in a single transaction"},l="Transactional Writes",r={id:"content/interacting/transactional-writes",title:"Transactional Writes",description:"Updating multiple relationship tuples in a single transaction",source:"@site/docs/content/interacting/transactional-writes.mdx",sourceDirName:"content/interacting",slug:"/interacting/transactional-writes",permalink:"/pr-preview/pr-726/docs/interacting/transactional-writes",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/transactional-writes.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/interacting/transactional-writes",description:"Updating multiple relationship tuples in a single transaction"},sidebar:"docs",previous:{title:"Managing Relationships Between Objects",permalink:"/pr-preview/pr-726/docs/interacting/managing-relationships-between-objects"},next:{title:"Relationship Queries: Check, Read, Expand, and ListObjects",permalink:"/pr-preview/pr-726/docs/interacting/relationship-queries"}},c={},d=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"Modeling Public Access",id:"modeling-public-access",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Adding And Removing Relationship Tuples In The Same Transaction",id:"01-adding-and-removing-relationship-tuples-in-the-same-transaction",level:3},{value:"02. Adding Multiple Related Relationship Tuples In The Same Transaction",id:"02-adding-multiple-related-relationship-tuples-in-the-same-transaction",level:3},{value:"Related Sections",id:"related-sections",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"transactional-writes",children:"Transactional Writes"}),"\n",(0,n.jsx)(a.ZE,{}),"\n",(0,n.jsxs)(t.p,{children:["In this guide you will learn how to update multiple ",(0,n.jsx)(a.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"})," in a single transaction."]}),"\n",(0,n.jsx)(a.u6,{title:"When to use",appearance:"filled",children:(0,n.jsx)(t.p,{children:"Updating multiple relationship tuples is useful to keep system state consistent."})}),"\n",(0,n.jsx)(t.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,n.jsxs)(t.p,{children:["In order to understand this guide correctly you must be familiar with some ",(0,n.jsx)(a.OK,{})," and know how to develop the things that we will list below."]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)(t.p,{children:["Assume that you have the following ",(0,n.jsx)(a.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"}),".",(0,n.jsx)("br",{}),"\nYou have a ",(0,n.jsx)(a.OK,{section:"what-is-a-type",linkName:"type"})," called ",(0,n.jsx)(t.code,{children:"tweet"})," that can have a ",(0,n.jsx)(t.code,{children:"reader"}),".\nYou have another type called ",(0,n.jsx)(t.code,{children:"user"})," that can have a ",(0,n.jsx)(t.code,{children:"follower"})," and ",(0,n.jsx)(t.code,{children:"followed_by"})," relationship."]})}),(0,n.jsx)(a.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"tweet",relations:{viewer:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"},{type:"user",wildcard:{}},{type:"user",relation:"follower"}]}}}},{type:"user",relations:{follower:{this:{}},followed_by:{this:{}}},metadata:{relations:{follower:{directly_related_user_types:[{type:"user"}]},followed_by:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,n.jsx)("hr",{}),(0,n.jsx)(t.p,{children:"In addition, you will need to know the following:"}),(0,n.jsx)(t.h3,{id:"direct-access",children:"Direct Access"}),(0,n.jsxs)(t.p,{children:["You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-726/docs/modeling/direct-access",children:"Learn more \u2192"})]}),(0,n.jsx)(t.h3,{id:"modeling-public-access",children:"Modeling Public Access"}),(0,n.jsxs)(t.p,{children:["You need to know how to grant public access to an object. ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-726/docs/modeling/public-access",children:"Learn more \u2192"})]}),(0,n.jsxs)(t.h3,{id:"-concepts",children:[(0,n.jsx)(a.bU,{format:a.Ed.ShortForm})," Concepts"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(a.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(a.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(a.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,n.jsxs)(t.li,{children:["An ",(0,n.jsx)(a.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(a.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,n.jsx)(a.bU,{format:a.Ed.ShortForm})]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,n.jsx)(t.h3,{id:"01-adding-and-removing-relationship-tuples-in-the-same-transaction",children:"01. Adding And Removing Relationship Tuples In The Same Transaction"}),"\n",(0,n.jsxs)(t.p,{children:["When you need to add or delete tuples in your store, you can do so by calling the Write API. For example, if you want to make ",(0,n.jsx)(t.code,{children:"tweet:1"})," public by making everyone a ",(0,n.jsx)(t.code,{children:"viewer"}),", you write one tuple:"]}),"\n",(0,n.jsx)(a.dp,{relationshipTuples:[{user:"user:*",relation:"viewer",object:"tweet:1"}]}),"\n",(0,n.jsxs)(t.p,{children:["And if you want to convert this ",(0,n.jsx)(t.code,{children:"tweet"})," to private, you would need to delete that tuple:"]}),"\n",(0,n.jsx)(a.dp,{deleteRelationshipTuples:[{user:"user:*",relation:"viewer",object:"tweet:1"}]}),"\n",(0,n.jsx)(t.p,{children:"By removing the tuple, we made the tweet visible to no-one, which may not be what we want."}),"\n",(0,n.jsxs)(t.p,{children:["The Write API allows you to send up to 10 unique tuples in the request. (This limit applies to the sum of both writes and deletes in that request). This means we can submit one API call that converts the ",(0,n.jsx)(t.code,{children:"tweet"})," from public to visible to only the ",(0,n.jsx)(t.code,{children:"user"}),"'s followers."]}),"\n",(0,n.jsx)(a.dp,{relationshipTuples:[{_description:"Anne's followers can view tweet:1",user:"user:anne#follower",relation:"viewer",object:"tweet:1"}],deleteRelationshipTuples:[{_description:"tweet:1 is no longer viewable by everyone (*)",user:"user:*",relation:"viewer",object:"tweet:1"}],allowedLanguages:[a.NH.JS_SDK,a.NH.GO_SDK,a.NH.DOTNET_SDK,a.NH.PYTHON_SDK,a.NH.JAVA_SDK,a.NH.CURL,a.NH.RPC]}),"\n",(0,n.jsx)(t.h3,{id:"02-adding-multiple-related-relationship-tuples-in-the-same-transaction",children:"02. Adding Multiple Related Relationship Tuples In The Same Transaction"}),"\n",(0,n.jsxs)(t.p,{children:["Having the ability to send multiple tuples per request is also useful when you want to maintain consistency. For example, if ",(0,n.jsx)(t.code,{children:"anne"})," starts following ",(0,n.jsx)(t.code,{children:"becky"}),", we want to be able to save the following two tuples, or neither of them:"]}),"\n",(0,n.jsx)(a.AI,{relationshipTuples:[{_description:"Anne is a follower of Becky",user:"user:anne",relation:"follower",object:"user:becky"},{_description:"Becky is followed by Anne",user:"user:becky",relation:"followed_by",object:"user:anne"}]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"We have a type called user in this case because users can be related to each other, so the users now are a type in the system"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(a.bU,{format:a.Ed.LongForm})," service will attempt to perform all the changes sent in a single Write API call in one transaction. If it can't (for example, if any of the requested changes fails), it will reject all of the changes."]}),"\n",(0,n.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,n.jsx)(a.XQ,{description:"Check the following sections for more on how to update tuples.",relatedLinks:[{title:"Update relationship tuples in SDK",description:"Learn about how to update relationship tuples in SDK.",link:"../getting-started/update-tuples",id:"../getting-started/update-tuples"},{title:"{ProductName} API",description:"Details on the write API in the {ProductName} reference guide.",link:"/api/service#Relationship%20Tuples/Write"}]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);