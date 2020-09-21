(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{361:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"github-stats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-stats"}},[t._v("#")]),t._v(" Github Stats")]),t._v(" "),a("p",[t._v("We can leverage "),a("a",{attrs:{href:"https://docs.github.com/en/graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github graphql API"),a("OutboundLink")],1),t._v(" to query the github stats using the plugin.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/93736971-c3392a80-fbd9-11ea-8597-dac9c0f9641b.png",alt:"image"}})]),t._v(" "),a("p",[t._v("Sample Query given in the below example. You can customize your query to bring the stats you needed.")]),t._v(" "),a("h3",{attrs:{id:"query-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-editor"}},[t._v("#")]),t._v(" Query Editor")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/93736996-d3510a00-fbd9-11ea-8c05-065758d66e82.png",alt:"image"}}),t._v(" "),a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/93737011-e1068f80-fbd9-11ea-8c82-ea516f83cf3d.png",alt:"image"}})]),t._v(" "),a("p",[t._v("Query Used:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  repository(owner:"$GithubUser", name:"$GithubRepo") {\n    issues(last:20) {\n      edges {\n        node {\n          author{\n            login\n          }\n          state\n          title\n          url\n        }\n      }\n    }\n  }\n}\n')])])]),a("h3",{attrs:{id:"datasource-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datasource-configuration"}},[t._v("#")]),t._v(" Datasource Configuration")]),t._v(" "),a("p",[t._v("Select "),a("strong",[t._v("Advanced")]),t._v(" mode and use your github username and PAT token as password")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/93736929-b1578780-fbd9-11ea-9413-5585ff79d3a8.png",alt:"image"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);