"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[881],{48880:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(74848),s=n(28453),o=n(82879);const r={sidebar_position:4,description:"Modeling Concepts: Concentric Relationships",slug:"/modeling/building-blocks/concentric-relationships"},d="Concentric Relationships",l={id:"content/modeling/building-blocks/concentric-relationships",title:"Concentric Relationships",description:"Modeling Concepts: Concentric Relationships",source:"@site/docs/content/modeling/building-blocks/concentric-relationships.mdx",sourceDirName:"content/modeling/building-blocks",slug:"/modeling/building-blocks/concentric-relationships",permalink:"/pr-preview/pr-706/docs/modeling/building-blocks/concentric-relationships",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/building-blocks/concentric-relationships.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Modeling Concepts: Concentric Relationships",slug:"/modeling/building-blocks/concentric-relationships"},sidebar:"docs",previous:{title:"Direct Relationships",permalink:"/pr-preview/pr-706/docs/modeling/building-blocks/direct-relationships"},next:{title:"Object to Object Relationships",permalink:"/pr-preview/pr-706/docs/modeling/building-blocks/object-to-object-relationships"}},a={},c=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Modify Our Model To Imply Editor As Viewer",id:"01-modify-our-model-to-imply-editor-as-viewer",level:3},{value:"02. Check That Editors Are Viewers",id:"02-check-that-editors-are-viewers",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"concentric-relationships",children:"Concentric Relationships"}),"\n",(0,t.jsx)(o.ZE,{}),"\n",(0,t.jsxs)(i.p,{children:["In this short guide, you'll learn how to represent a concentric ",(0,t.jsx)(o.OK,{section:"what-is-a-relationship",linkName:"relationships"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"For example, if you want to have all editors of a document also be viewers of said document."}),"\n",(0,t.jsxs)(o.u6,{title:"When to use",appearance:"filled",children:[(0,t.jsx)(i.p,{children:"Concentric relations make the most sense when your domain logic has nested relations, where one having relation implies having another relation."}),(0,t.jsx)(i.p,{children:"For example:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["all ",(0,t.jsx)(i.code,{children:"editors"})," are ",(0,t.jsx)(i.code,{children:"viewers"})]}),"\n",(0,t.jsxs)(i.li,{children:["all ",(0,t.jsx)(i.code,{children:"managers"})," are ",(0,t.jsx)(i.code,{children:"members"})]}),"\n",(0,t.jsxs)(i.li,{children:["all ",(0,t.jsx)(i.code,{children:"device_managers"})," are ",(0,t.jsx)(i.code,{children:"device_renamers"})]}),"\n"]}),(0,t.jsxs)(i.p,{children:["This allows you to only create a single ",(0,t.jsx)(i.em,{children:"relationship tuple"})," rather than creating n ",(0,t.jsx)(i.em,{children:"relationship tuples"})," for each relation."]})]}),"\n",(0,t.jsx)(i.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,t.jsxs)(i.p,{children:["To better understand this guide, you should be familiar with some ",(0,t.jsx)(o.OK,{})," and know how to develop the things listed below."]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsxs)(i.p,{children:["You will start with the ",(0,t.jsx)(i.em,{children:(0,t.jsx)(o.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"})})," below, it represents a ",(0,t.jsx)(i.code,{children:"document"})," ",(0,t.jsx)(i.em,{children:(0,t.jsx)(o.OK,{section:"what-is-a-type",linkName:"type"})})," that can have users ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(o.OK,{section:"what-is-a-relation",linkName:"related"})})," as ",(0,t.jsx)(i.code,{children:"editor"})," and ",(0,t.jsx)(i.code,{children:"viewer"}),"."]}),(0,t.jsxs)(i.p,{children:["Let us also assume that we have a ",(0,t.jsx)(i.code,{children:"document"}),' called "meeting_notes.doc" and bob is assigned as editor to this document.']})]}),(0,t.jsx)(o.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{viewer:{this:{}},editor:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"}]},editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,t.jsx)(i.p,{children:"The current state of the system is represented by the following relationship tuples being in the system already:"}),(0,t.jsx)(o.AI,{relationshipTuples:[{user:"user:bob",relation:"editor",object:"document:meeting_notes.doc"}]}),(0,t.jsx)("hr",{}),(0,t.jsx)(i.p,{children:"In addition, you will need to know the following:"}),(0,t.jsx)(i.h3,{id:"modeling-user-groups",children:"Modeling User Groups"}),(0,t.jsxs)(i.p,{children:["You need to know how to add users to groups and grant groups access to resources. ",(0,t.jsx)(i.a,{href:"/pr-preview/pr-706/docs/modeling/user-groups",children:"Learn more \u2192"})]}),(0,t.jsxs)(i.h3,{id:"-concepts",children:[(0,t.jsx)(o.bU,{format:o.Ed.ShortForm})," Concepts"]}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A ",(0,t.jsx)(o.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,t.jsxs)(i.li,{children:["A ",(0,t.jsx)(o.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,t.jsxs)(i.li,{children:["A ",(0,t.jsx)(o.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,t.jsxs)(i.li,{children:["An ",(0,t.jsx)(o.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,t.jsxs)(i.li,{children:["A ",(0,t.jsx)(o.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,t.jsx)(o.bU,{format:o.Ed.ShortForm})]}),"\n"]})]}),"\n",(0,t.jsx)(o.QF,{}),"\n",(0,t.jsx)(i.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,t.jsxs)(i.p,{children:["With the current type definition, there isn't a way to indicate that all ",(0,t.jsx)(i.code,{children:"editors"})," of a certain ",(0,t.jsx)(i.code,{children:"document"})," are also automatically ",(0,t.jsx)(i.code,{children:"viewers"})," of that document. So for a certain user, in order to indicate that they can both ",(0,t.jsx)(i.code,{children:"edit"})," and ",(0,t.jsx)(i.code,{children:"view"})," a certain ",(0,t.jsx)(i.code,{children:"document"}),", two ",(0,t.jsx)(i.em,{children:(0,t.jsx)(o.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"})})," need to be created (one for ",(0,t.jsx)(i.code,{children:"editor"}),", and another for ",(0,t.jsx)(i.code,{children:"viewer"}),")."]}),"\n",(0,t.jsx)(i.h3,{id:"01-modify-our-model-to-imply-editor-as-viewer",children:"01. Modify Our Model To Imply Editor As Viewer"}),"\n",(0,t.jsxs)(i.p,{children:["Instead of creating two ",(0,t.jsx)(i.em,{children:"relationship tuples"}),", we can leverage concentric relationships by defining editors are viewers."]}),"\n",(0,t.jsx)(i.p,{children:"Our authorization model becomes the following:"}),"\n",(0,t.jsx)(o.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"}]},editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"viewer"})," of a ",(0,t.jsx)(i.code,{children:"document"})," are any of:"]}),(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["users that are directly assigned as ",(0,t.jsx)(i.code,{children:"viewer"})]}),"\n",(0,t.jsxs)(i.li,{children:["users that have ",(0,t.jsx)(i.code,{children:"editor"})," of the document"]}),"\n"]})]}),"\n",(0,t.jsxs)(i.p,{children:["With this authorization model change, having an ",(0,t.jsx)(i.code,{children:"editor"})," relationship with a certain document implies having a ",(0,t.jsx)(i.code,{children:"viewer"})," relationship with that same document."]}),"\n",(0,t.jsx)(i.h3,{id:"02-check-that-editors-are-viewers",children:"02. Check That Editors Are Viewers"}),"\n",(0,t.jsxs)(i.p,{children:["Since we had a ",(0,t.jsx)(i.em,{children:"relationship tuple"})," that indicates that ",(0,t.jsx)(i.strong,{children:"bob"})," is an ",(0,t.jsx)(i.code,{children:"editor"})," of ",(0,t.jsxs)(i.strong,{children:["document",":meeting_notes",".doc"]}),", this means ",(0,t.jsx)(i.strong,{children:"bob"})," is now implicitly a ",(0,t.jsx)(i.code,{children:"viewer"})," of ",(0,t.jsxs)(i.strong,{children:["document",":meeting_notes",".doc"]}),".\nIf we now check: ",(0,t.jsxs)(i.strong,{children:["is bob a viewer of document",":meeting_notes",".doc?"]})," we would get the following:"]}),"\n",(0,t.jsx)(o.ou,{user:"user:bob",relation:"viewer",object:"document:meeting_notes.doc",allowed:!0}),"\n",(0,t.jsx)(i.admonition,{title:"Note",type:"caution",children:(0,t.jsxs)(i.p,{children:["When creating relationship tuples for ",(0,t.jsx)(o.bU,{format:o.Ed.ShortForm})," make sure to use unique ids for each object and user within your application domain. We're using first names and simple ids to just illustrate an easy-to-follow example."]})}),"\n",(0,t.jsx)(i.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,t.jsx)(o.XQ,{description:"Check the following sections for more on how concentric relationships can be used.",relatedLinks:[{title:"Modeling Google Drive",description:"See how to indicate that editors are commenters and viewers in Google Drive.",link:"../advanced/gdrive#01-individual-permissions",id:"../advanced/gdrive.mdx#01-individual-permissions"},{title:"Modeling GitHub",description:"See how to indicate that repository admins are writers and readers in GitHub.",link:"../advanced/github#01-permissions-for-individuals-in-an-org",id:"../advanced/github.mdx#01-permissions-for-individuals-in-an-org"}]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);