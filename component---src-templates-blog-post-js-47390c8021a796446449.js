(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("6Gk8"),m=a("Bl7J"),o=a("vrFN"),c=a("p3AD");t.default=function(e){var t=Object(n.useState)({minutes:0}),a=t[0],s=t[1];Object(n.useEffect)((function(){var t=document.createElement("span");t.innerHTML=e.data.markdownRemark.html,s({minutes:t.textContent.split(" ").length/200})}),[e.data.markdownRemark.html]);var d=e.data.markdownRemark,u=e.data.site.siteMetadata.title,p=e.pageContext,f=p.previous,E=p.next;return r.a.createElement(m.a,{location:e.location,title:u},r.a.createElement(o.a,{title:d.frontmatter.title,description:d.frontmatter.description||d.excerpt}),r.a.createElement("h1",null,d.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1),marginTop:Object(c.a)(-1)})},d.frontmatter.date," • ",a.minutes.toFixed(0)," min read"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.html}}),r.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),r.a.createElement(i.a,null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,f&&r.a.createElement(l.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),r.a.createElement("li",null,E&&r.a.createElement(l.Link,{to:E.fields.slug,rel:"next"},E.frontmatter.title," →"))))};var s="1763272984"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-47390c8021a796446449.js.map