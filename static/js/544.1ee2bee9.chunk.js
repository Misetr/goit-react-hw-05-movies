"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{297:function(t,e,n){n.d(e,{i:function(){return s}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=function(t,e){var n=(0,i.useState)([]),u=(0,a.Z)(n,2),s=u[0],o=u[1],p=(0,i.useState)(!1),f=(0,a.Z)(p,2),h=f[0],l=f[1],d=(0,i.useState)(null),v=(0,a.Z)(d,2),g=v[0],m=v[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,t(e);case 4:r=n.sent,o(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),m(n.t0.message);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[t,e]),{data:s,error:g,loading:h}}},544:function(t,e,n){n.r(e);var r=n(297),a=(n(791),n(87)),u=n(390),c=n(184);e.default=function(){var t=(0,r.i)(u.Hg),e=t.data,n=t.loading,i=t.error;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Trending"}),n&&(0,c.jsx)("h2",{children:"Loading...."}),i&&(0,c.jsx)("h2",{children:"Smth went wrong, try again!"}),(0,c.jsx)("ol",{children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,n=t.title,r=t.name;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.toString()),children:n||r})},e)}))})]})}},390:function(t,e,n){n.d(e,{Hg:function(){return s},TP:function(){return p},tx:function(){return h},z1:function(){return o},zv:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDM1OGZmZWM3YzYyYzU2NGFkNGVhZWIwYTg0NzUxZCIsInN1YiI6IjY1MGI0NmNmNTAxY2YyMDBjNmJiYzQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wvamPmbpdrrLWGlyfoVdDeyUlAy0z5h3P12zVjSMD-0"}},s=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",i);case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),i);case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),i);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),i);case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),i);case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.1ee2bee9.chunk.js.map