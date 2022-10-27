"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[4752],{2422:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(87462),o=(i(67294),i(3905)),a=i(5270);const r={sidebar_position:4,description:"Modeling Concepts: Concentric Relationships",slug:"/modeling/building-blocks/concentric-relationships"},s="Concentric Relationships",l={unversionedId:"content/modeling/building-blocks/concentric-relationships",id:"content/modeling/building-blocks/concentric-relationships",title:"Concentric Relationships",description:"Modeling Concepts: Concentric Relationships",source:"@site/docs/content/modeling/building-blocks/concentric-relationships.mdx",sourceDirName:"content/modeling/building-blocks",slug:"/modeling/building-blocks/concentric-relationships",permalink:"/docs/modeling/building-blocks/concentric-relationships",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/building-blocks/concentric-relationships.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Modeling Concepts: Concentric Relationships",slug:"/modeling/building-blocks/concentric-relationships"},sidebar:"docs",previous:{title:"Direct Relationships",permalink:"/docs/modeling/building-blocks/direct-relationships"},next:{title:"Object to Object Relationships",permalink:"/docs/modeling/building-blocks/object-to-object-relationships"}},d={},p=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Modify Our Model To Imply Editor As Viewer",id:"01-modify-our-model-to-imply-editor-as-viewer",level:3},{value:"02. Check That Editors Are Viewers",id:"02-check-that-editors-are-viewers",level:3},{value:"Related Sections",id:"related-sections",level:2}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concentric-relationships"},"Concentric Relationships"),(0,o.kt)(a.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"In this short guide, you'll learn how to represent a concentric ",(0,o.kt)(a.uH,{section:"what-is-a-relationship",linkName:"relationships",mdxType:"ProductConcept"}),"."),(0,o.kt)("p",null,"For example, if you want to have all editors of a document also be viewers of said document."),(0,o.kt)(a.S1,{title:"When to use",appearance:"filled",description:(0,o.kt)("div",null,(0,o.kt)("p",null,"Concentric relations make the most sense when your domain logic has nested relations, where one having relation implies having another relation."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all ",(0,o.kt)("inlineCode",{parentName:"li"},"editors")," are ",(0,o.kt)("inlineCode",{parentName:"li"},"viewers")),(0,o.kt)("li",{parentName:"ul"},"all ",(0,o.kt)("inlineCode",{parentName:"li"},"managers")," are ",(0,o.kt)("inlineCode",{parentName:"li"},"members")),(0,o.kt)("li",{parentName:"ul"},"all ",(0,o.kt)("inlineCode",{parentName:"li"},"device_managers")," are ",(0,o.kt)("inlineCode",{parentName:"li"},"device_renamers"))),(0,o.kt)("p",null,"This allows you to only create a single ",(0,o.kt)("em",{parentName:"p"},"relationship tuple")," rather than creating n ",(0,o.kt)("em",{parentName:"p"},"relationship tuples")," for each relation.")),mdxType:"CardBox"}),(0,o.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"To better understand this guide, you should be familiar with some ",(0,o.kt)(a.uH,{mdxType:"ProductConcept"})," and know how to develop the things listed below."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"You will start with the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)(a.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}))," below, it represents a ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)(a.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"}))," that can have users ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(a.uH,{section:"what-is-a-relation",linkName:"related",mdxType:"ProductConcept"}))," as ",(0,o.kt)("inlineCode",{parentName:"p"},"editor")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer"),"."),(0,o.kt)("p",null,"Let us also assume that we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),' called "meeting_notes.doc" and bob is assigned as editor to this document.')),(0,o.kt)(a.lG,{configuration:{type_definitions:[{type:"user"},{type:"document",relations:{viewer:{this:{}},editor:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("p",null,"The current state of the system is represented by the following relationship tuples being in the system already:"),(0,o.kt)(a.Wz,{relationshipTuples:[{user:"user:bob",relation:"editor",object:"document:meeting_notes.doc"}],mdxType:"RelationshipTuplesViewer"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In addition, you will need to know the following:"),(0,o.kt)("h3",{id:"modeling-user-groups"},"Modeling User Groups"),(0,o.kt)("p",null,"You need to know how to add users to groups and grant groups access to resources. ",(0,o.kt)("a",{parentName:"p",href:"/docs/modeling/user-groups"},"Learn more \u2192")),(0,o.kt)("h3",{id:"-concepts"},(0,o.kt)(a.rZ,{format:a.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(a.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(a.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(a.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)(a.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(a.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,o.kt)(a.rZ,{format:a.v7.ShortForm,mdxType:"ProductName"})))),(0,o.kt)(a.XQ,{mdxType:"Playground"}),(0,o.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,o.kt)("p",null,"With the current type definition, there isn't a way to indicate that all ",(0,o.kt)("inlineCode",{parentName:"p"},"editors")," of a certain ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," are also automatically ",(0,o.kt)("inlineCode",{parentName:"p"},"viewers")," of that document. So for a certain user, in order to indicate that they can both ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," a certain ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),", two ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)(a.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples",mdxType:"ProductConcept"}))," need to be created (one for ",(0,o.kt)("inlineCode",{parentName:"p"},"editor"),", and another for ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer"),")."),(0,o.kt)("h3",{id:"01-modify-our-model-to-imply-editor-as-viewer"},"01. Modify Our Model To Imply Editor As Viewer"),(0,o.kt)("p",null,"Instead of creating two ",(0,o.kt)("em",{parentName:"p"},"relationship tuples"),", we can leverage concentric relationships by defining editors are viewers."),(0,o.kt)("p",null,"Our authorization model becomes the following:"),(0,o.kt)(a.lG,{configuration:{type_definitions:[{type:"user"},{type:"document",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"viewer")," of a ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," are any of:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"users that are directly assigned as ",(0,o.kt)("inlineCode",{parentName:"li"},"viewer")),(0,o.kt)("li",{parentName:"ol"},"users that have ",(0,o.kt)("inlineCode",{parentName:"li"},"editor")," of the document"))),(0,o.kt)("p",null,"With this authorization model change, having an ",(0,o.kt)("inlineCode",{parentName:"p"},"editor")," relationship with a certain document implies having a ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer")," relationship with that same document."),(0,o.kt)("h3",{id:"02-check-that-editors-are-viewers"},"02. Check That Editors Are Viewers"),(0,o.kt)("p",null,"Since we had a ",(0,o.kt)("em",{parentName:"p"},"relationship tuple")," that indicates that ",(0,o.kt)("strong",{parentName:"p"},"bob")," is an ",(0,o.kt)("inlineCode",{parentName:"p"},"editor")," of ",(0,o.kt)("strong",{parentName:"p"},"document:meeting_notes.doc"),", this means ",(0,o.kt)("strong",{parentName:"p"},"bob")," is now implicitly a ",(0,o.kt)("inlineCode",{parentName:"p"},"viewer")," of ",(0,o.kt)("strong",{parentName:"p"},"document:meeting_notes.doc"),".\nIf we now check: ",(0,o.kt)("strong",{parentName:"p"},"is bob a viewer of document:meeting_notes.doc?")," we would get the following:"),(0,o.kt)(a.uT,{user:"user:bob",relation:"viewer",object:"document:meeting_notes.doc",allowed:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When creating relationship tuples for ",(0,o.kt)(a.rZ,{format:a.v7.ShortForm,mdxType:"ProductName"})," make sure to use unique ids for each object and user within your application domain. We're using first names and simple ids to just illustrate an easy-to-follow example.")),(0,o.kt)("h2",{id:"related-sections"},"Related Sections"),(0,o.kt)(a.$q,{description:"Check the following sections for more on how concentric relationships can be used.",relatedLinks:[{title:"Modeling Google Drive",description:"See how to indicate that editors are commenters and viewers in Google Drive.",link:"../advanced/gdrive#01-individual-permissions",id:"../advanced/gdrive.mdx#01-individual-permissions"},{title:"Modeling GitHub",description:"See how to indicate that repository admins are writers and readers in GitHub.",link:"../advanced/github#01-permissions-for-individuals-in-an-org",id:"../advanced/github.mdx#01-permissions-for-individuals-in-an-org"}],mdxType:"RelatedSection"}))}m.isMDXComponent=!0}}]);