"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[633],{297:function(e,n,t){t.d(n,{i:function(){return s}});var r=t(861),a=t(439),i=t(757),u=t.n(i),c=t(791),s=function(e,n){var t=(0,c.useState)([]),i=(0,a.Z)(t,2),s=i[0],o=i[1],p=(0,c.useState)(!1),l=(0,a.Z)(p,2),d=l[0],h=l[1],f=(0,c.useState)(null),v=(0,a.Z)(f,2),x=v[0],g=v[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,e(n);case 4:r=t.sent,o(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),g(t.t0.message);case 11:return t.prev=11,h(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e,n]),{data:s,error:x,loading:d}}},633:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r,a=t(168),i=t(297),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},c=t(791),s=t(689),o=t(87),p=t(390),l=t(867),d=t(184),h=l.zo.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),f=function(){var e,n=(0,s.UO)().id,t=(0,i.i)(p.TP,n).data,r=t.original_title,a=t.overview,l=t.poster_path,f=t.release_date,v=t.genres,x=(0,s.TH)(),g=(0,c.useRef)((null===(e=x.state)||void 0===e?void 0:e.from)||"/");return(0,d.jsxs)(h,{style:{padding:"0 20px"},children:[(0,d.jsx)(o.rU,{to:g.current,children:"Go back"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{width:280,src:"https://image.tmdb.org/t/p/w500".concat(l),alt:r}),(0,d.jsxs)("h2",{children:[r," ","(".concat(null===f||void 0===f?void 0:f.slice(0,4),")")]}),(0,d.jsx)("h2",{children:"Overview:"}),(0,d.jsx)("p",{children:a}),(0,d.jsx)("h2",{children:"Genres:"}),(0,d.jsx)("p",{children:null===v||void 0===v?void 0:v.map((function(e){return(0,d.jsx)("span",{children:" ".concat(e.name," ")})}))},u()),(0,d.jsx)("hr",{}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)("hr",{})]}),(0,d.jsx)(c.Suspense,{fallback:(0,d.jsx)("h2",{children:"Loading..."}),children:(0,d.jsx)(s.j3,{})})]})}},390:function(e,n,t){t.d(n,{Hg:function(){return s},TP:function(){return p},tx:function(){return d},z1:function(){return o},zv:function(){return l}});var r=t(861),a=t(757),i=t.n(a),u=t(243),c={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDM1OGZmZWM3YzYyYzU2NGFkNGVhZWIwYTg0NzUxZCIsInN1YiI6IjY1MGI0NmNmNTAxY2YyMDBjNmJiYzQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wvamPmbpdrrLWGlyfoVdDeyUlAy0z5h3P12zVjSMD-0"}},s=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",c);case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),c);case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),c);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),c);case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),c);case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=633.db33e9cd.chunk.js.map