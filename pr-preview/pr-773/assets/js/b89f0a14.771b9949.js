"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9078],{26289:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=o(74848),i=o(28453),t=o(36289);const r={sidebar_position:1,slug:"/interacting/managing-group-membership",description:"Updating a user's membership to a group by adding and removing them from it"},a="Managing Group Membership",l={id:"content/interacting/managing-group-membership",title:"Managing Group Membership",description:"Updating a user's membership to a group by adding and removing them from it",source:"@site/docs/content/interacting/managing-group-membership.mdx",sourceDirName:"content/interacting",slug:"/interacting/managing-group-membership",permalink:"/pr-preview/pr-773/docs/interacting/managing-group-membership",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/managing-group-membership.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/interacting/managing-group-membership",description:"Updating a user's membership to a group by adding and removing them from it"},sidebar:"docs",previous:{title:"Manage Group Access",permalink:"/pr-preview/pr-773/docs/interacting/managing-group-access"},next:{title:"Manage Relationships Between Objects",permalink:"/pr-preview/pr-773/docs/interacting/managing-relationships-between-objects"}},c={},d=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"Managing Group Access",id:"managing-group-access",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Revoking Group Membership",id:"01-revoking-group-membership",level:3},{value:"02. Validating revoked member no longer has access",id:"02-validating-revoked-member-no-longer-has-access",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"managing-group-membership",children:"Managing Group Membership"}),"\n",(0,s.jsx)(t.ZE,{}),"\n",(0,s.jsx)(n.p,{children:"In this guide you will learn how to update a user's membership to a group by adding and removing them from it."}),"\n",(0,s.jsxs)(t.u6,{title:"When to use",appearance:"filled",children:[(0,s.jsx)(n.p,{children:"Suppose:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An employee is hired at a company and thus gains access to all of the company's resources."}),"\n",(0,s.jsx)(n.li,{children:"An employee quits and thus loses access to all of the company's resources."}),"\n",(0,s.jsx)(n.li,{children:"A user joins a GitHub organization and gains access to the organizations private repositories."}),"\n",(0,s.jsx)(n.li,{children:"A student graduates from school and loses access to the school's facilities."}),"\n"]}),(0,s.jsx)(n.p,{children:"These are cases where using group membership can be helpful as you do not need to iterate over all of the group's resources to add or revoke access to particular objects. You can add a relationship tuple indicating that a user belongs to a group, or delete a tuple to indicate that a user is no longer part of the group."})]}),"\n",(0,s.jsx)(n.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,s.jsxs)(n.p,{children:["In order to understand this guide correctly you must be familiar with some ",(0,s.jsx)(t.OK,{})," and know how to develop the things that we will list below."]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsxs)("summary",{children:[(0,s.jsxs)(n.p,{children:["Assume that you have the following ",(0,s.jsx)(t.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"}),".",(0,s.jsx)("br",{}),"\nYou have two ",(0,s.jsx)(t.OK,{section:"what-is-a-type",linkName:"types"}),":"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"org"})," that can have a ",(0,s.jsx)(n.code,{children:"member"})," relation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"document"})," that can have a ",(0,s.jsx)(n.code,{children:"reader"})," relation."]}),"\n"]})]}),(0,s.jsx)(t.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"org",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{reader:{this:{}}},metadata:{relations:{reader:{directly_related_user_types:[{type:"org",relation:"member"}]}}}}]}}),(0,s.jsxs)(n.p,{children:["Let us also assume that we have an ",(0,s.jsx)(n.code,{children:"org"}),' called "contoso" and a ',(0,s.jsx)(n.code,{children:"document"})," called ",(0,s.jsx)(n.code,{children:"planning"}),", and every ",(0,s.jsx)(n.code,{children:"member"})," of that ",(0,s.jsx)(n.code,{children:"org"})," can read the document. That is represented by having the following ",(0,s.jsx)(n.em,{children:(0,s.jsx)(t.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple"})})," in the store:"]}),(0,s.jsx)(t.AI,{relationshipTuples:[{_description:"Members of the contoso org can read the planning document",user:"org:contoso#member",relation:"reader",object:"document:planning"}]}),(0,s.jsxs)(n.p,{children:["With the above authorization model and relationship tuples, ",(0,s.jsx)(t.bU,{format:t.Ed.ShortForm})," will respond with ",(0,s.jsx)(n.code,{children:'{"allowed":false}'})," when ",(0,s.jsx)(n.em,{children:(0,s.jsx)(t.OK,{section:"what-is-a-check-request",linkName:"check"})})," is called to see if Anne can read ",(0,s.jsx)(n.code,{children:"document:planning"}),"."]}),(0,s.jsx)(t.ou,{user:"anne",relation:"reader",object:"document:planning",allowed:!1}),(0,s.jsxs)(n.p,{children:["Now let's make Anne a ",(0,s.jsx)(n.code,{children:"member"})," of ",(0,s.jsx)(n.code,{children:"org:contoso"})," by adding another tuple:"]}),(0,s.jsx)(t.dp,{relationshipTuples:[{_description:"Anne is a member of the contoso org",user:"user:anne",relation:"member",object:"org:contoso"}]}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(t.bU,{format:t.Ed.ShortForm})," service will now correctly respond with ",(0,s.jsx)(n.code,{children:'{"allowed":true}'})," when check is called to see if Anne can read ",(0,s.jsx)(n.code,{children:"document:planning"}),", but it will still respond with ",(0,s.jsx)(n.code,{children:'{"allowed":false}'})," if we ask the same question for another user called Becky, who is not a member of the group ",(0,s.jsx)(n.code,{children:"org:contoso"}),"."]}),(0,s.jsx)(t.ou,{user:"user:anne",relation:"reader",object:"document:planning",allowed:!0}),(0,s.jsx)(t.ou,{user:"user:becky",relation:"reader",object:"document:planning",allowed:!1}),(0,s.jsx)(n.h3,{id:"modeling-user-groups",children:"Modeling User Groups"}),(0,s.jsxs)(n.p,{children:["You need to know how to add users to groups and grant groups access to an object. ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-773/docs/modeling/user-groups",children:"Learn more \u2192"})]}),(0,s.jsx)(n.h3,{id:"managing-group-access",children:"Managing Group Access"}),(0,s.jsxs)(n.p,{children:["You need to know how to manage group access to an object. ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-773/docs/interacting/managing-group-access",children:"Learn more \u2192"})]}),(0,s.jsxs)(n.h3,{id:"-concepts",children:[(0,s.jsx)(t.bU,{format:t.Ed.ShortForm})," Concepts"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(t.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(t.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(t.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(t.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(t.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,s.jsx)(t.bU,{format:t.Ed.ShortForm})]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,s.jsx)(n.h3,{id:"01-revoking-group-membership",children:"01. Revoking Group Membership"}),"\n",(0,s.jsxs)(n.p,{children:["Imagine that every member of ",(0,s.jsx)(n.code,{children:"org:contoso"})," has a ",(0,s.jsx)(n.code,{children:"reader"})," relationship to 1000 documents. Now imagine that ",(0,s.jsx)(n.code,{children:"anne"})," is no longer a member of ",(0,s.jsx)(n.code,{children:"org:contoso"}),", so we want to revoke her access to all those documents, including ",(0,s.jsx)(n.code,{children:"document:planning"}),". To accomplish this, we can simply ",(0,s.jsx)(n.strong,{children:"delete"})," the tuple in ",(0,s.jsx)(t.bU,{format:t.Ed.ShortForm})," that specifies that Anne is a ",(0,s.jsx)(n.code,{children:"member"})," of ",(0,s.jsx)(n.code,{children:"org:contoso"}),"."]}),"\n",(0,s.jsx)(t.dp,{deleteRelationshipTuples:[{user:"user:anne",relation:"member",object:"org:contoso"}]}),"\n",(0,s.jsx)(n.h3,{id:"02-validating-revoked-member-no-longer-has-access",children:"02. Validating revoked member no longer has access"}),"\n",(0,s.jsxs)(n.p,{children:["Once the above relationship tuple is deleted, we can check if Anne can read ",(0,s.jsx)(n.code,{children:"document:planning"}),". ",(0,s.jsx)(t.bU,{format:t.Ed.ShortForm})," will return ",(0,s.jsx)(n.code,{children:'{ "allowed": false }'}),"."]}),"\n",(0,s.jsx)(t.ou,{user:"user:anne",relation:"reader",object:"document:planning",allowed:!1}),"\n",(0,s.jsx)(n.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,s.jsx)(t.XQ,{description:"Check the following sections for more on how to model group.",relatedLinks:[{title:"Modeling User Groups",description:"Learn about how to model users and groups.",link:"../modeling/user-groups",id:"../modeling/user-groups.mdx"},{title:"Managing Group Access",description:"Learn about managing group access.",link:"./managing-group-access",id:"./managing-group-access.mdx"}]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);