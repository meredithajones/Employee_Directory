(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(2),r=s.n(c),n=s(12),o=s.n(n);s(24),s(25);var l=function(){return Object(a.jsx)("div",{className:"jumbotron jumbotron-fluid header",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(a.jsxs)("p",{className:"lead",children:["View All Employees",Object(a.jsx)("br",{}),"Sort Employees alphebetically by First Name",Object(a.jsx)("br",{}),"or search for specific employees by name"]})]})})},i=s(13),d=s(14),h=s(15),j=s(18),u=s(17),m=(s(26),s(16)),b=s.n(m),f=function(){return b.a.get("https://randomuser.me/api/?results=10")};var O=function(e){return Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead-striped",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Photo"}),Object(a.jsxs)("th",{onClick:function(){e.handleSort(e.class)},scope:"col",children:["Name",Object(a.jsx)("i",{id:"name",className:e.class})]}),Object(a.jsxs)("th",{scope:"col",children:["Phone",Object(a.jsx)("span",{onClick:e.handleSort,children:Object(a.jsx)("i",{id:"phone",className:e.class})})]}),Object(a.jsxs)("th",{scope:"col",children:["Email",Object(a.jsx)("span",{onClick:e.handleSort,children:Object(a.jsx)("i",{id:"email",className:e.class})})]}),Object(a.jsxs)("th",{scope:"col",children:["City",Object(a.jsx)("span",{onClick:e.handleSort,children:Object(a.jsx)("i",{id:"city",className:e.class})})]})]})}),Object(a.jsx)("tbody",{children:e.users.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.picture.medium,alt:"employeePhoto"})}),Object(a.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.location.city})]},e.email)}))})]})};s(45);var p=function(e){return Object(a.jsx)("nav",{className:"",children:Object(a.jsx)("input",{onChange:e.handleChange,className:"form-control mr-sm-2",type:"text",placeholder:"Search for Employee","aria-label":"Search",name:"search",value:e.search})})},x=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={search:"",className:"fas fa-chevron-circle-up",originalUsers:[],filteredUsers:[],order:"descend"},e.usersArr=function(){f().then((function(t){return e.setState({originalUsers:t.data.results,filteredUsers:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var s=t.target,a=s.name,c=s.value;if(e.setState(Object(i.a)({},a,c)),""===c)e.setState({filteredUsers:e.state.originalUsers});else if(""!==c){var r=e.state.originalUsers.filter((function(e){return e.name.first.toLowerCase().startsWith(c.toLowerCase())||e.name.last.toLowerCase().startsWith(c.toLowerCase())||"".concat(e.name.first," ").concat(e.name.last).toLowerCase().startsWith(c.toLowerCase())}));e.setState({filteredUsers:r})}},e.className=function(t){"fas fa-chevron-circle-up"===t?e.setState({className:"fas fa-chevron-circle-down"}):"fas fa-chevron-circle-down"===t&&e.setState({className:"fas fa-chevron-circle-up"})},e.handleSort=function(t){console.log("WORKING"),"ascend"===e.state.order?e.setState({order:"descend"}):e.setState({order:"ascend"}),console.log(e.state.order);var s=e.state.originalUsers.sort((function(t,s){return t=t.name.first.toLowerCase(),s=s.name.first.toLowerCase(),"ascend"===e.state.order?t.localeCompare(s):s.localeCompare(t)}));console.log(s)},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.usersArr()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{search:this.state.search,handleChange:this.handleChange}),Object(a.jsx)(O,{users:this.state.filteredUsers,handleSort:this.handleSort,class:this.state.className})]})}}]),s}(r.a.Component),v=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(l,{}),Object(a.jsx)(x,{})]})},y=(s(46),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),r(e),n(e)}))});o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),y()}},[[47,1,2]]]);
//# sourceMappingURL=main.83d12cf8.chunk.js.map