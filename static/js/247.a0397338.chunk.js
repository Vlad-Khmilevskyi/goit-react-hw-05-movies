"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(7757),o=e.n(c),u=e(2791),i=e(7689),s=e(4390),p=e(9098),f=e(184);t.default=function(){var n=(0,i.UO)().movieId,t=(0,u.useState)([]),e=(0,a.Z)(t,2),c=e[0],d=e[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.uV)(n);case 3:e=t.sent,r=e.cast,d(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,f.jsxs)(p.im,{children:[(0,f.jsx)(p.Cd,{children:"Cast"}),c.length?(0,f.jsx)(p.ds,{children:c.map((function(n){return(0,f.jsxs)(p.JF,{className:"cast-card",children:[n.profile_path?(0,f.jsx)(p.Mg,{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name," profile")}):(0,f.jsx)(p.Mg,{src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(n.name," profile")}),(0,f.jsxs)(p.RV,{children:[(0,f.jsx)(p.xl,{children:n.name}),(0,f.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))}):(0,f.jsx)(p.TD,{children:"We don't have any information about the cast yet."})]})}},9098:function(n,t,e){e.d(t,{Cd:function(){return x},JF:function(){return g},Mg:function(){return Z},RV:function(){return v},TD:function(){return b},ds:function(){return h},im:function(){return l},xl:function(){return m}});var r,a,c,o,u,i,s,p,f=e(168),d=e(6444),l=d.ZP.div(r||(r=(0,f.Z)(["\n  text-align: center;\n"]))),x=d.ZP.h3(a||(a=(0,f.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n\n  margin-bottom: 20px;\n"]))),h=d.ZP.ul(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n  padding: 0;\n"]))),g=d.ZP.li(o||(o=(0,f.Z)(["\n  backdrop-filter: blur(10px);\n  padding: 10px;\n\n  width: 150px;\n  background-color: #fff;\n  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 18px;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 10px 0px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    scale: 1.03;\n  }\n"]))),v=d.ZP.div(u||(u=(0,f.Z)(["\n"]))),m=d.ZP.h3(i||(i=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),b=d.ZP.p(s||(s=(0,f.Z)(["\n  margin: 30px auto 0 auto;\n  text-align: center;\n  padding: 20px;\n  background-color: #f8f8f8;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n"]))),Z=d.ZP.img(p||(p=(0,f.Z)(["\n  display: block;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  display: block;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n"])))},4390:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return l},Mc:function(){return f},_k:function(){return s},uV:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),o=e(1243),u="https://api.themoviedb.org",i="04e4af1b30c05d104e5298e1179d6dc9",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/3/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/3/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/3/movie/").concat(t,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.a0397338.chunk.js.map