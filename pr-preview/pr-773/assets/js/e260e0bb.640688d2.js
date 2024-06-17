"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[6679],{1002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(74848),i=n(28453),s=n(36289);const o={sidebar_position:8,slug:"/modeling/contextual-time-based-authorization",description:"Checking relations that depends on certain dynamic or contextual data (such as time, location, ip address, weather) that have not been written"},r="Contextual and Time-Based Authorization",c={id:"content/modeling/contextual-time-based-authorization",title:"Contextual and Time-Based Authorization",description:"Checking relations that depends on certain dynamic or contextual data (such as time, location, ip address, weather) that have not been written",source:"@site/docs/content/modeling/contextual-time-based-authorization.mdx",sourceDirName:"content/modeling",slug:"/modeling/contextual-time-based-authorization",permalink:"/pr-preview/pr-773/docs/modeling/contextual-time-based-authorization",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/contextual-time-based-authorization.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/modeling/contextual-time-based-authorization",description:"Checking relations that depends on certain dynamic or contextual data (such as time, location, ip address, weather) that have not been written"},sidebar:"docs",previous:{title:"Token claims as Contextual Tuples",permalink:"/pr-preview/pr-773/docs/modeling/token-claims-contextual-tuples"},next:{title:"Authorization Through Organization Context",permalink:"/pr-preview/pr-773/docs/modeling/organization-context-authorization"}},l={},d=[{value:"Before You Start",id:"before-you-start",level:2},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Scenario",id:"scenario",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"Understand Relationships Without Contextual Data",id:"understand-relationships-without-contextual-data",level:3},{value:"Take Time And IP Address Into Consideration",id:"take-time-and-ip-address-into-consideration",level:3},{value:"Extend The Authorization Model",id:"extend-the-authorization-model",level:5},{value:"Add The Required Tuples To Mark That Anne Is In An Approved Context",id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context",level:5},{value:"Use Contextual Tuples For Context Related Checks",id:"use-contextual-tuples-for-context-related-checks",level:3},{value:"Summary",id:"summary",level:2},{value:"Taking It A Step Further: Banks As A Service Authorization",id:"taking-it-a-step-further-banks-as-a-service-authorization",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"contextual-and-time-based-authorization",children:"Contextual and Time-Based Authorization"}),"\n",(0,a.jsx)(s.ZE,{}),"\n",(0,a.jsxs)(t.p,{children:["This section explores some methods available to you to tackle some use-cases where the expected authorization check may depend on certain dynamic or contextual data (such as time, location, ip address, weather) that have not been written to the ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm})," store."]}),"\n",(0,a.jsxs)(s.u6,{title:"When to use",appearance:"filled",children:[(0,a.jsx)(t.p,{children:"Contextual Tuples should be used when modeling cases where a user's access to an object depends on the context of their request. For example:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"An employee\u2019s ability to access a document when they are connected to the company VPN or the api call is originating from an internal IP address."}),"\n",(0,a.jsx)(t.li,{children:"A support engineer is only able to access a user's account during office hours."}),"\n",(0,a.jsx)(t.li,{children:"If a user belongs to multiple organizations, they are only able to access a resource if they set a specific organization in their current context."}),"\n"]})]}),"\n",(0,a.jsx)(t.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,a.jsxs)(t.p,{children:["To follow this guide, you should be familiar with some ",(0,a.jsx)(s.OK,{}),"."]}),"\n",(0,a.jsxs)(t.h3,{id:"-concepts",children:[(0,a.jsx)(s.bU,{format:s.Ed.ShortForm})," Concepts"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(s.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system."]}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(s.OK,{section:"what-is-a-check-request",linkName:"Check Request"}),": is a call to the ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm})," check endpoint that returns whether the user has a certain relationship with an object."]}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(s.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm})]}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(s.OK,{section:"what-are-contextual-tuples",linkName:"Contextual Tuple"}),": a tuple that can be added to a Check request, and only exists within the context of that particular request."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You also need to be familiar with:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Modeling Object-to-Object Relationships"}),": You need to know how to create relationships between objects and how that might affect a user's relationships to those objects. ",(0,a.jsx)(t.a,{href:"/pr-preview/pr-773/docs/modeling/building-blocks/object-to-object-relationships",children:"Learn more \u2192"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Modeling Multiple Restrictions"}),": You need to know how to model requiring multiple authorizations before allowing users to perform certain actions. ",(0,a.jsx)(t.a,{href:"/pr-preview/pr-773/docs/modeling/multiple-restrictions",children:"Learn more \u2192"})]}),"\n"]}),"\n",(0,a.jsx)(s.QF,{}),"\n",(0,a.jsx)(t.h3,{id:"scenario",children:"Scenario"}),"\n",(0,a.jsx)(t.p,{children:"For the scope of this guide, we are going to consider the following scenario."}),"\n",(0,a.jsx)(t.p,{children:"Consider you are building the authorization model for WeBank Inc."}),"\n",(0,a.jsx)(t.p,{children:"In order for an Account Manager at WeBank Inc. to be able to access a customer's account and its transactions, they would need to be:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"An account manager at the same branch as the customer's account"}),"\n",(0,a.jsx)(t.li,{children:"Connected via the branch's internal network or through the branch's VPN"}),"\n",(0,a.jsx)(t.li,{children:"Connected during this particular branch's office hours"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"We will start with the following Authorization Model"}),"\n",(0,a.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"branch",relations:{account_manager:{this:{}}},metadata:{relations:{account_manager:{directly_related_user_types:[{type:"user"}]}}}},{type:"account",relations:{branch:{this:{}},account_manager:{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"account_manager"}}},customer:{this:{}},viewer:{union:{child:[{computedUserset:{object:"",relation:"customer"}},{computedUserset:{object:"",relation:"account_manager"}}]}},can_view:{computedUserset:{object:"",relation:"viewer"}}},metadata:{relations:{branch:{directly_related_user_types:[{type:"branch"}]},customer:{directly_related_user_types:[{type:"user"}]}}}},{type:"transaction",relations:{account:{this:{}},can_view:{tupleToUserset:{tupleset:{object:"",relation:"account"},computedUserset:{object:"",relation:"viewer"}}}},metadata:{relations:{account:{directly_related_user_types:[{type:"account"}]}}}}]}}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)(t.p,{children:"We are considering the case that:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Anne is the Account Manager at the West-Side branch"}),"\n",(0,a.jsx)(t.li,{children:"Caroline is the customer for checking account number 526"}),"\n",(0,a.jsx)(t.li,{children:"The West-Side branch is the branch that the checking account number 526 has been created at"}),"\n",(0,a.jsx)(t.li,{children:"Checking account number 526 has a transaction, we'll call it transaction A"}),"\n",(0,a.jsx)(t.li,{children:"The West-Side branch\u2019s office hours is from 8am-3pm UTC"}),"\n"]})]}),(0,a.jsx)(t.p,{children:"The above state translates to the following relationship tuples:"}),(0,a.jsx)(s.dp,{relationshipTuples:[{_description:"Anne is the Account Manager at the West-Side branch",user:"user:anne",relation:"account_manager",object:"branch:west-side"},{_description:"Caroline is the customer for checking account number 526",user:"user:caroline",relation:"customer",object:"account:checking-526"},{_description:"The West-Side branch is the branch that the Checking account number 526 has been created at",user:"branch:west-side",relation:"branch",object:"account:checking-526"},{_description:"Checking account number 526 is the account for transaction A",user:"account:checking-526",relation:"account",object:"transaction:A"}]})]}),"\n",(0,a.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(t.p,{children:"By the end of this guide we would like to validate that:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If Anne is at the branch, and it is 12pm UTC, Anne should be able to view transaction A"}),"\n",(0,a.jsx)(t.li,{children:"If Anne is connecting remotely at 12pm UTC but is not connected to the VPN, Anne should not be able to view transaction A"}),"\n",(0,a.jsxs)(t.li,{children:["If Anne is connecting remotely and is connected to the VPN","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"at 12pm UTC, should be able to view transaction A"}),"\n",(0,a.jsx)(t.li,{children:"at 6pm UTC, should not be able to view transaction A"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,a.jsx)(t.p,{children:"In order to solve for the requirements above, we will break the problem down to three steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#understand-relationships-without-contextual-data",children:"Understand relationships without contextual tuples"}),". We will want to ensure that"]}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"the customer can view a transaction tied to their account"}),"\n",(0,a.jsx)(t.li,{children:"the account manager can view a transaction whose account is at the same branch"}),"\n"]}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Extend the Authorization Model to ",(0,a.jsx)(t.a,{href:"#take-time-and-ip-address-into-consideration",children:"take time and ip address into consideration"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#use-contextual-tuples-for-context-related-checks",children:"Use contextual tuples for context related checks"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"understand-relationships-without-contextual-data",children:"Understand Relationships Without Contextual Data"}),"\n",(0,a.jsxs)(t.p,{children:["With the Authorization Model and relationship tuples shown above, ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm})," has all the information needed to"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Ensure that the customer can view a transaction tied to their account"}),"\n",(0,a.jsx)(t.li,{children:"Ensure that the account manager can view a transaction whose account is at the same branch"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"We can verify that using the following checks"}),"\n",(0,a.jsxs)(t.p,{children:["Anne can view transaction",":A"," because she is an account manager of an account that is at the same branch."]}),"\n",(0,a.jsx)(s.ou,{user:"user:anne",relation:"can_view",object:"transaction:A",allowed:!0}),"\n",(0,a.jsxs)(t.p,{children:["Caroline can view transaction",":A"," because she is a customer and the transaction is tied to her account."]}),"\n",(0,a.jsx)(s.ou,{user:"user:caroline",relation:"can_view",object:"transaction:A",allowed:!0}),"\n",(0,a.jsxs)(t.p,{children:["Additionally, we will check that Mary, an account manager at a different branch ",(0,a.jsx)(t.em,{children:"cannot"})," view transaction A."]}),"\n",(0,a.jsx)(s.dp,{relationshipTuples:[{_description:"Mary is an account manager at the East-Side branch",user:"user:mary",relation:"account_manager",object:"branch:east-side"}]}),"\n",(0,a.jsx)(s.ou,{user:"user:mary",relation:"can_view",object:"transaction:A",allowed:!1}),"\n",(0,a.jsx)(t.p,{children:"Note that so far, we have not prevented Anne from viewing the transaction outside office hours, let's see if we can do better."}),"\n",(0,a.jsx)(t.h3,{id:"take-time-and-ip-address-into-consideration",children:"Take Time And IP Address Into Consideration"}),"\n",(0,a.jsx)(t.h5,{id:"extend-the-authorization-model",children:"Extend The Authorization Model"}),"\n",(0,a.jsx)(t.p,{children:'In order to add time and ip address to our authorization model, we will add appropriate types for them. We will have a "timeslot" and an "ip-address-range" as types, and each can have users related to it as a user.'}),"\n",(0,a.jsx)(s.pB,{configuration:{schema_version:"1.1",type:"timeslot",relations:{user:{this:{}}},metadata:{relations:{user:{directly_related_user_types:[{type:"user"}]}}}},skipVersion:!0}),"\n",(0,a.jsx)(s.pB,{configuration:{schema_version:"1.1",type:"ip-address-range",relations:{user:{this:{}}},metadata:{relations:{user:{directly_related_user_types:[{type:"user"}]}}}},skipVersion:!0}),"\n",(0,a.jsx)(t.p,{children:"We'll also need to introduce some new relations, and modify some others."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'On the "branch" type:'}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Add "approved_timeslot" relation to mark than a certain timeslot is approved to view transactions for accounts in this branch'}),"\n",(0,a.jsx)(t.li,{children:'Add "approved_ip_address_range" relation to mark than an ip address range is approved to view transactions for accounts in this branch'}),"\n",(0,a.jsxs)(t.li,{children:['Add "approved_context" relation to combine the two authorizations above (',(0,a.jsx)(t.code,{children:"user from approved_timeslot and user from approved_ip_address_range"}),"), and indicate that the user is in an approved context"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The branch type definition then becomes:"}),"\n",(0,a.jsx)(s.pB,{configuration:{schema_version:"1.1",type:"branch",relations:{account_manager:{this:{}},approved_ip_address_range:{this:{}},approved_timeslot:{this:{}},approved_context:{intersection:{child:[{tupleToUserset:{tupleset:{object:"",relation:"approved_timeslot"},computedUserset:{object:"",relation:"user"}}},{tupleToUserset:{tupleset:{object:"",relation:"approved_ip_address_range"},computedUserset:{object:"",relation:"user"}}}]}}},metadata:{relations:{account_manager:{directly_related_user_types:[{type:"user"}]},approved_ip_address_range:{directly_related_user_types:[{type:"ip-address-range"}]},approved_timeslot:{directly_related_user_types:[{type:"timeslot"}]}}}},skipVersion:!0}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:'On the "account" type:'}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Add "account_manager_viewer" relation to combine the "account_manager" relationship and the new "approved_context" relation from the branch'}),"\n",(0,a.jsxs)(t.li,{children:['Update the "viewer" relation definition to ',(0,a.jsx)(t.code,{children:"customer or account_manager_viewer"}),' where "customer" can view without being subjected to contextual authorization, while "account_manager_viewer" needs to be within the branch allowed context to view']}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The account type definition then becomes:"}),"\n",(0,a.jsx)(s.pB,{configuration:{schema_version:"1.1",type:"account",relations:{branch:{this:{}},account_manager:{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"account_manager"}}},customer:{this:{}},account_manager_viewer:{intersection:{child:[{computedUserset:{object:"",relation:"account_manager"}},{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"approved_context"}}}]}},viewer:{union:{child:[{computedUserset:{object:"",relation:"customer"}},{computedUserset:{object:"",relation:"account_manager_viewer"}}]}},can_view:{computedUserset:{object:"",relation:"viewer"}}},metadata:{relations:{branch:{directly_related_user_types:[{type:"branch"}]},customer:{directly_related_user_types:[{type:"user"}]}}}},skipVersion:!0}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:'On the "transaction" type:'}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Nothing will need to be done, as it will inherit the updated "viewer" relation definition from "account"'}),"\n"]})]}),"\n",(0,a.jsx)(t.h5,{id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context",children:"Add The Required Tuples To Mark That Anne Is In An Approved Context"}),"\n",(0,a.jsx)(t.p,{children:"Now that we have updated our authorization model to take time and ip address into consideration, you will notice that Anne has lost access because nothing indicates that Anne is connecting from an approved ip address and time. You can verify that by issuing the following check:"}),"\n",(0,a.jsx)(s.ou,{user:"user:anne",relation:"can_view",object:"transaction:A",allowed:!1}),"\n",(0,a.jsx)(t.p,{children:"We need to add relationship tuples to mark some approved timeslots and ip address ranges:"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Here we added the time slots in increments of 1 hour periods, but this is not a requirement."}),"\n",(0,a.jsx)(t.li,{children:"We did not add all the office hours to keep this guide shorter."}),"\n"]})}),"\n",(0,a.jsx)(s.dp,{relationshipTuples:[{_description:"11am to 12pm is within the office hours of the West-Side branch",user:"timeslot:11_12",relation:"approved_timeslot",object:"branch:west-side"},{_description:"12pm to 1pm is within the office hours of the West-Side branch",user:"timeslot:12_13",relation:"approved_timeslot",object:"branch:west-side"},{_description:"The office VPN w/ the 10.0.0.0/16 address range is approved for the West-Side branch",user:"ip-address-range:10.0.0.0/16",relation:"approved_ip_address_range",object:"branch:west-side"}]}),"\n",(0,a.jsx)(t.p,{children:"Now that we have added the allowed timeslots and ip address ranges we need to add the following relationship tuples to give Anne access."}),"\n",(0,a.jsx)(s.dp,{relationshipTuples:[{_description:"Anne is connecting from within the 10.0.0.0/16 ip address range",user:"user:anne",relation:"user",object:"ip-address-range:10.0.0.0/16"},{_description:"Anne is connecting between 12pm and 1pm",user:"user:anne",relation:"user",object:"timeslot:12_13"}]}),"\n",(0,a.jsx)(t.p,{children:"If we have the above two tuples in the system, when checking whether Anne can view transaction A we should get a response stating that Anne can view it."}),"\n",(0,a.jsx)(s.ou,{user:"user:anne",relation:"can_view",object:"transaction:A",allowed:!0}),"\n",(0,a.jsx)(t.h3,{id:"use-contextual-tuples-for-context-related-checks",children:"Use Contextual Tuples For Context Related Checks"}),"\n",(0,a.jsxs)(t.p,{children:["Now that we know we can authorize based on present state, we have a different problem to solve. We are storing the tuples in the state in order for ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm})," to evaluate them, which means that:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["For the case of the IP Address, we are not able to truly authorize based on the context of the request. E.g. if Anne was trying to connect from the phone and from the PC at the same time, and only the PC was connected to the VPN, how would ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm})," know to deny one and allow the other if the data is stored in the state?"]}),"\n",(0,a.jsx)(t.li,{children:"On every check call we have to first write the correct tuples, then call the Check api, then clean up those tuples. This causes a substantial increase in latency as well as incorrect answers for requests happening in parallel (they could write/delete each other's tuples)."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"How do we solve this? How do we tie the above two tuples to the context of the request instead of the system state?"}),"\n",(0,a.jsx)(t.p,{children:"First, we will need to undo adding the stored relationship tuples where Anne is connecting from within the 10.0.0.0/16 ip address range and Anne connecting between 12pm and 1pm"}),"\n",(0,a.jsx)(s.dp,{deleteRelationshipTuples:[{_description:"Remove stored tuples where Anne is connecting from within the 10.0.0.0/16 ip address range",user:"user:anne",relation:"user",object:"ip-address-range:10.0.0.0/16"},{_description:"Remove stored tuples where Anne is connecting between 12pm and 1pm",user:"user:anne",relation:"user",object:"timeslot:12_13"}]}),"\n",(0,a.jsxs)(t.p,{children:["For Check calls, ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm}),' has a concept called "',(0,a.jsx)(s.OK,{section:"what-are-contextual-tuples",linkName:"Contextual Tuples"}),'". Contextual Tuples are tuples that do ',(0,a.jsx)(t.strong,{children:"not"})," exist in the system state and are not written beforehand to ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm}),". They are tuples that are sent alongside the Check request and will be treated as ",(0,a.jsx)(t.em,{children:"if"})," they already exist in the state for the context of that particular Check call."]}),"\n",(0,a.jsxs)(t.p,{children:["When Anne is connecting from an allowed ip address range and timeslot, ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm})," will return ",(0,a.jsx)(t.code,{children:'{"allowed":true}'}),":"]}),"\n",(0,a.jsx)(s.ou,{user:"user:anne",relation:"can_view",object:"transaction:A",allowed:!0,contextualTuples:[{_description:"Anne is connecting from within the 10.0.0.0/16 ip address range",user:"user:anne",relation:"user",object:"ip-address-range:10.0.0.0/16"},{_description:"Anne is connecting between 12pm and 1pm",user:"user:anne",relation:"user",object:"timeslot:12_13"}]}),"\n",(0,a.jsxs)(t.p,{children:["When Anne is connecting from a denied ip address range or timeslot, ",(0,a.jsx)(s.bU,{format:s.Ed.ShortForm})," will return ",(0,a.jsx)(t.code,{children:'{"allowed":false}'}),":"]}),"\n",(0,a.jsx)(s.ou,{user:"user:anne",relation:"can_view",object:"transaction:A",allowed:!1,contextualTuples:[{_description:"Anne is connecting from within the 10.0.0.0/16 ip address range",user:"user:anne",relation:"user",object:"ip-address-range:10.0.0.0/16"},{_description:"Anne is connecting between 6pm and 7pm",user:"user:anne",relation:"user",object:"timeslot:18_19"}]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)(t.p,{children:"Final version of the Authorization Model and Relationship tuples"})}),(0,a.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"branch",relations:{account_manager:{this:{}},approved_ip_address_range:{this:{}},approved_timeslot:{this:{}},approved_context:{intersection:{child:[{tupleToUserset:{tupleset:{object:"",relation:"approved_timeslot"},computedUserset:{object:"",relation:"user"}}},{tupleToUserset:{tupleset:{object:"",relation:"approved_ip_address_range"},computedUserset:{object:"",relation:"user"}}}]}}},metadata:{relations:{account_manager:{directly_related_user_types:[{type:"user"}]},approved_ip_address_range:{directly_related_user_types:[{type:"ip-address-range"}]},approved_timeslot:{directly_related_user_types:[{type:"timeslot"}]}}}},{type:"account",relations:{branch:{this:{}},account_manager:{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"account_manager"}}},customer:{this:{}},account_manager_viewer:{intersection:{child:[{computedUserset:{object:"",relation:"account_manager"}},{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"approved_context"}}}]}},viewer:{union:{child:[{computedUserset:{object:"",relation:"customer"}},{computedUserset:{object:"",relation:"account_manager_viewer"}}]}},can_view:{computedUserset:{object:"",relation:"viewer"}}},metadata:{relations:{branch:{directly_related_user_types:[{type:"branch"}]},customer:{directly_related_user_types:[{type:"user"}]}}}},{type:"transaction",relations:{account:{this:{}},can_view:{tupleToUserset:{tupleset:{object:"",relation:"account"},computedUserset:{object:"",relation:"viewer"}}}},metadata:{relations:{account:{directly_related_user_types:[{type:"account"}]}}}},{type:"timeslot",relations:{user:{this:{}}},metadata:{relations:{user:{directly_related_user_types:[{type:"user"}]}}}},{type:"ip-address-range",relations:{user:{this:{}}},metadata:{relations:{user:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,a.jsx)(s.dp,{relationshipTuples:[{_description:"Anne is the Account Manager at the West-Side branch",user:"user:anne",relation:"account_manager",object:"branch:west-side"},{_description:"Caroline is the customer for checking account number 526",user:"user:caroline",relation:"customer",object:"account:checking-526"},{_description:"The West-Side branch is the branch that the Checking account number 526 has been created at",user:"branch:west-side",relation:"branch",object:"account:checking-526"},{_description:"Checking account number 526 is the account for transaction A",user:"account:checking-526",relation:"account",object:"transaction:A"},{_description:"8am to 9am is within the office hours of the West-Side branch",user:"timeslot:8_9",relation:"approved_timeslot",object:"branch:west-side"},{_description:"9am to 10am is within the office hours of the West-Side branch",user:"timeslot:9_10",relation:"approved_timeslot",object:"branch:west-side"},{_description:"10am to 11am is within the office hours of the West-Side branch",user:"timeslot:10_11",relation:"approved_timeslot",object:"branch:west-side"},{_description:"11am to 12pm is within the office hours of the West-Side branch",user:"timeslot:11_12",relation:"approved_timeslot",object:"branch:west-side"},{_description:"12pm to 1pm is within the office hours of the West-Side branch",user:"timeslot:12_13",relation:"approved_timeslot",object:"branch:west-side"},{_description:"1pm to 2pm is within the office hours of the West-Side branch",user:"timeslot:13_14",relation:"approved_timeslot",object:"branch:west-side"},{_description:"2pm to 3pm is within the office hours of the West-Side branch",user:"timeslot:14_15",relation:"approved_timeslot",object:"branch:west-side"},{_description:"The office VPN w/ the 10.0.0.0/16 address range is approved for the West-Side branch",user:"ip-address-range:10.0.0.0/16",relation:"approved_ip_address_range",object:"branch:west-side"}]})]}),"\n",(0,a.jsxs)(t.admonition,{title:"Warning",type:"caution",children:[(0,a.jsx)(t.p,{children:"Contextual tuples:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Are not persisted in the store."}),"\n",(0,a.jsxs)(t.li,{children:["Are only supported on the ",(0,a.jsx)(s.Oe,{link:"/api/service#Relationship%20Queries/Check",name:"Check API endpoint"})," and ",(0,a.jsx)(s.Oe,{link:"/api/service#Relationship%20Queries/ListObjects",name:"ListObjects API endpoint"}),". They are not supported on read, expand and other endpoints."]}),"\n",(0,a.jsxs)(t.li,{children:["If you are using the ",(0,a.jsx)(s.Oe,{link:"/api/service#Relationship%20Tuples/ReadChanges",name:"Read Changes API endpoint"})," to build a permission aware search index, note that it will not be trivial to take contextual tuples into account."]}),"\n"]})]}),"\n",(0,a.jsx)(t.h3,{id:"taking-it-a-step-further-banks-as-a-service-authorization",children:"Taking It A Step Further: Banks As A Service Authorization"}),"\n",(0,a.jsx)(t.p,{children:"In order to keep this guide concise, we assumed you were modeling for a single bank. What if you were offering a multi-tenant service where each bank is a single tenant?"}),"\n",(0,a.jsx)(t.p,{children:"In that case, we can extend the model like so:"}),"\n",(0,a.jsx)(s.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"bank",relations:{admin:{this:{}}},metadata:{relations:{admin:{directly_related_user_types:[{type:"user"}]}}}},{type:"branch",relations:{bank:{this:{}},account_manager:{this:{}},approved_ip_address_range:{this:{}},approved_timeslot:{this:{}},approved_context:{intersection:{child:[{tupleToUserset:{tupleset:{object:"",relation:"approved_timeslot"},computedUserset:{object:"",relation:"user"}}},{tupleToUserset:{tupleset:{object:"",relation:"approved_ip_address_range"},computedUserset:{object:"",relation:"user"}}}]}}},metadata:{relations:{bank:{directly_related_user_types:[{type:"bank"}]},account_manager:{directly_related_user_types:[{type:"user"}]},approved_ip_address_range:{directly_related_user_types:[{type:"ip-address-range"}]},approved_timeslot:{directly_related_user_types:[{type:"timeslot"}]}}}},{type:"account",relations:{branch:{this:{}},account_manager:{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"account_manager"}}},customer:{this:{}},account_manager_viewer:{intersection:{child:[{computedUserset:{object:"",relation:"account_manager"}},{tupleToUserset:{tupleset:{object:"",relation:"branch"},computedUserset:{object:"",relation:"approved_context"}}}]}},viewer:{union:{child:[{computedUserset:{object:"",relation:"customer"}},{computedUserset:{object:"",relation:"account_manager_viewer"}}]}},can_view:{computedUserset:{object:"",relation:"viewer"}}},metadata:{relations:{branch:{directly_related_user_types:[{type:"branch"}]},customer:{directly_related_user_types:[{type:"user"}]}}}},{type:"transaction",relations:{account:{this:{}},can_view:{tupleToUserset:{tupleset:{object:"",relation:"account"},computedUserset:{object:"",relation:"viewer"}}}},metadata:{relations:{account:{directly_related_user_types:[{type:"account"}]}}}},{type:"timeslot",relations:{user:{this:{}}},metadata:{relations:{user:{directly_related_user_types:[{type:"user"}]}}}},{type:"ip-address-range",relations:{user:{this:{}}},metadata:{relations:{user:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,a.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,a.jsx)(s.XQ,{description:"Check the following sections for more on how user groups can be used.",relatedLinks:[{title:"Object to Object Relationships",description:"Learn how objects can relate to one another and how that can affect user's access.",link:"./building-blocks/object-to-object-relationships",id:"./building-blocks/object-to-object-relationships.mdx"},{title:"Modeling with Multiple Restrictions",description:"Learn how to model requiring multiple relationships before users are authorized to perform certain actions.",link:"./multiple-restrictions",id:"./multiple-restrictions.mdx"},{title:"{ProductName} API",description:"Details on the Check API in the {ProductName} reference guide.",link:"/api/service#Relationship%20Queries/Check"}]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);