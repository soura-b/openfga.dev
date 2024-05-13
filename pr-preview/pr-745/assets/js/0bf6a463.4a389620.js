"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9775],{25981:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=i(74848),o=i(28453),a=i(36289);const n={title:"Authorization Concepts",description:"Introduction to Authorization",sidebar_position:1,slug:"/authorization-concepts"},r="Authorization Concepts",c={id:"content/authorization-concepts",title:"Authorization Concepts",description:"Introduction to Authorization",source:"@site/docs/content/authorization-concepts.mdx",sourceDirName:"content",slug:"/authorization-concepts",permalink:"/pr-preview/pr-745/docs/authorization-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/authorization-concepts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Authorization Concepts",description:"Introduction to Authorization",sidebar_position:1,slug:"/authorization-concepts"},sidebar:"docs",previous:{title:"Introduction to FGA",permalink:"/pr-preview/pr-745/docs/fga"},next:{title:"Concepts",permalink:"/pr-preview/pr-745/docs/concepts"}},d={},l=[{value:"Authentication and Authorization",id:"authentication-and-authorization",level:2},{value:"What is Fine-Grained Authorization?",id:"what-is-fine-grained-authorization",level:2},{value:"What is Role-Based Access Control?",id:"what-is-role-based-access-control",level:2},{value:"What is Attribute-Based Access Control?",id:"what-is-attribute-based-access-control",level:2},{value:"What is Policy-Based Access Control?",id:"what-is-policy-based-access-control",level:2},{value:"What is Relationship-Based Access Control?",id:"what-is-relationship-based-access-control",level:2},{value:"What is Zanzibar?",id:"what-is-zanzibar",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"authorization-concepts",children:"Authorization Concepts"}),"\n",(0,s.jsx)(t.h2,{id:"authentication-and-authorization",children:"Authentication and Authorization"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Authentication",children:"Authentication"})," ensures a user's identity. ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Authorization",children:"Authorization"})," determines if a user can perform a certain action on a particular resource."]}),"\n",(0,s.jsx)(t.p,{children:"For example, when you log in to Google, Authentication is the process of verifying that your username and password are correct. Authorization is the process of ensuring that you can access a given Google service or feature."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-fine-grained-authorization",children:"What is Fine-Grained Authorization?"}),"\n",(0,s.jsx)(t.p,{children:"Fine-Grained Authorization (FGA) implies the ability to grant specific users permission to perform certain actions in specific resources."}),"\n",(0,s.jsx)(t.p,{children:"Well-designed FGA systems allow you to manage permissions for millions of objects and users. These permissions can change rapidly as a system continually adds objects and updates access permissions for its users."}),"\n",(0,s.jsx)(t.p,{children:"A notable example of FGA is Google Drive: access can be granted either to documents or to folders, as well as to individual users or users as a group, and access rights regularly change as new documents are created and shared with specific users or groups."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-role-based-access-control",children:"What is Role-Based Access Control?"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Role-based_access_control",children:"Role-Based Access Control"})," (RBAC), permissions are assigned to users based on their role in a system. For example, a user needs the ",(0,s.jsx)(t.code,{children:"editor"})," role to edit content."]}),"\n",(0,s.jsx)(t.p,{children:"RBAC systems enable you to define users, groups, roles, and permissions, then store them in a centralized location. Applications access that information to make authorization decisions."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-attribute-based-access-control",children:"What is Attribute-Based Access Control?"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Attribute-based_access_control",children:"Attribute-Based Access Control"})," (ABAC), permissions are granted based on a set of attributes that a user or resource possesses. For example, a user assigned both ",(0,s.jsx)(t.code,{children:"marketing"})," and ",(0,s.jsx)(t.code,{children:"manager"})," attributes is entitled to publish and delete posts that have a ",(0,s.jsx)(t.code,{children:"marketing"})," attribute."]}),"\n",(0,s.jsx)(t.p,{children:"Applications implementing ABAC need to retrieve information stored in multiple data sources - like RBAC services, user directories, and application-specific data sources - to make authorization decisions."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-policy-based-access-control",children:"What is Policy-Based Access Control?"}),"\n",(0,s.jsx)(t.p,{children:"Policy-Based Access Control (PBAC) is the ability to manage authorization policies in a centralized way that\u2019s external to the application code. Most implementations of ABAC are also PBAC."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-relationship-based-access-control",children:"What is Relationship-Based Access Control?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Relationship-based_access_control",children:"Relationship-Based Access Control"})," (ReBAC) enables user access rules to be conditional on relations that a given user has with a given object ",(0,s.jsx)(t.em,{children:"and"})," that object's relationship with other objects. For example, a given user can view a given document if the user has access to the document's parent folder."]}),"\n",(0,s.jsx)(t.p,{children:"ReBAC is a superset of RBAC: you can fully implement RBAC with ReBAC.\nReBAC also lets you natively solve for ABAC when attributes can be expressed in the form of relationships. For example \u2018a user\u2019s manager\u2019, \u2018the parent folder\u2019,  \u2018the owner of a document\u2019, \u2018the user\u2019s department\u2019 can be defined as relationships."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(a.bU,{format:a.Ed.ShortForm})," extends ReBAC by making it simpler to express additional ABAC scenarios using ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-745/docs/modeling/conditions",children:"Conditions"})," or ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-745/docs/modeling/token-claims-contextual-tuples",children:"Contextual Tuples"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"ReBAC can also be considered PBAC, as authorization policies are centralized."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-zanzibar",children:"What is Zanzibar?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://research.google/pubs/pub48190/",children:"Zanzibar"})," is Google's global authorization system across Google's product suite. It\u2019s based on ReBAC and uses object-relation-user tuples to store relationship data, then checks those relations for a match between a user and an object. For more information, see ",(0,s.jsx)(t.a,{href:"https://zanzibar.academy",children:"Zanzibar Academy"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"ReBAC systems based on Zanzibar store the data necessary to make authorization decisions in a centralized database. Applications only need to call an API to make authorization decisions."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(a.bU,{format:a.Ed.ShortForm})," is an example of a Zanzibar-based authorization system."]}),"\n",(0,s.jsx)(a.XQ,{description:"Learn about {ProductName}.",relatedLinks:[{title:"{ProductName} Concepts",description:"Learn about the {ProductName} Concepts",link:"./concepts",id:"./concepts"},{title:"Modeling: Getting Started",description:"Learn about how to get started with modeling your permission system in {ProductName}.",link:"./getting-started",id:"./getting-started"}]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);