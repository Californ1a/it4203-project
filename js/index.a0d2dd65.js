(function(e){function t(t){for(var r,i,s=t[0],o=t[1],u=t[2],b=0,p=[];b<s.length;b++)i=s[b],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={index:0},c=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=o;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"018e":function(e,t,a){"use strict";a("0621")},"04a1":function(e,t,a){"use strict";a("5114")},"0621":function(e,t,a){},"0f56":function(e,t,a){},2243:function(e,t,a){"use strict";a("6d5e")},"26b0":function(e,t,a){},5114:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n=a("31bd");function c(e,t,a,n,c,i){var s=Object(r["C"])("NavBar"),o=Object(r["C"])("router-view");return Object(r["v"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(s),Object(r["j"])(o)],64)}var i=function(e){return Object(r["y"])("data-v-3b508159"),e=e(),Object(r["w"])(),e},s={class:"navbar-fixed"},o={class:"nav-wrapper blue darken-3"},u=Object(r["i"])("IT4203 Project"),l={class:"input-field blue darken-1"},b=i((function(){return Object(r["g"])("label",{class:"label-icon",for:"search"},[Object(r["g"])("i",{class:"material-icons"},"search")],-1)})),p=i((function(){return Object(r["g"])("i",{class:"material-icons"},"close",-1)})),v={class:"right hide-on-med-and-down"},d=Object(r["i"])(" Top Rated Movies "),m=Object(r["i"])(" Upcoming Movies ");function j(e,t,a,n,c,i){var j=Object(r["C"])("router-link");return Object(r["v"])(),Object(r["f"])("div",s,[Object(r["g"])("nav",null,[Object(r["g"])("div",o,[Object(r["j"])(j,{to:"/movies/popular",class:"brand-logo"},{default:Object(r["J"])((function(){return[u]})),_:1}),Object(r["g"])("form",{onSubmit:t[2]||(t[2]=Object(r["L"])((function(){return n.updateMovies&&n.updateMovies.apply(n,arguments)}),["prevent"]))},[Object(r["g"])("div",l,[Object(r["K"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.searchTerm=e}),ref:"searchRef",id:"search",onFocus:t[1]||(t[1]=function(){return n.searchFocus&&n.searchFocus.apply(n,arguments)}),placeholder:"Search",type:"search",class:"autocomplete",autocomplete:"off",required:""},null,544),[[r["H"],n.searchTerm]]),b,p])],32),Object(r["g"])("ul",v,[Object(r["g"])("li",null,[Object(r["j"])(j,{to:{name:"Home",params:{type:"top_rated"}}},{default:Object(r["J"])((function(){return[d]})),_:1})]),Object(r["g"])("li",null,[Object(r["j"])(j,{to:{name:"Home",params:{type:"upcoming"}}},{default:Object(r["J"])((function(){return[m]})),_:1})])])])])])}var f=a("1da1"),g=(a("96cf"),a("7db0"),a("d3b7"),a("99af"),a("6c02")),O=a("5502"),h={setup:function(){var e,t,a=Object(O["c"])(),n=Object(g["c"])(),c=Object(r["A"])(""),i=Object(r["A"])("");function s(e){e.target.select()}Object(r["t"])((function(){function s(){return o.apply(this,arguments)}function o(){return o=Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=function(e){return e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://via.placeholder.com/50x50"},!(i.value.length<2)){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,a.dispatch("getSearchSuggestions",i.value);case 5:n=a.state.searchList.data.reduce((function(e,t){return t.original_title&&t.title?t.original_title===t.title?(e[t.title]=r(t),e):(e["".concat(t.title," (").concat(t.original_title,")")]=r(t),e):t.original_title?(e[t.original_title]=r(t),e):t.title?(e[t.title]=r(t),e):e}),{}),e.updateData(n),e.open();case 8:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}e=M.Autocomplete.init(c.value,{data:{},onAutocomplete:function(t){return Object(f["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e&&e.close(),c.value&&c.value.blur(),i=a.state.searchList.data.find((function(e){return e.title===t})),r.next=5,n.push({name:"Movie",params:{id:i.id}});case 5:case"end":return r.stop()}}),r)})))()}}),Object(r["I"])((function(){return i.value}),(function(){clearTimeout(t),t=setTimeout((function(){s()}),500)}))}));var o=function(){var r=Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return clearTimeout(t),e&&e.close(),c.value&&c.value.blur(),r.next=5,n.push({name:"Home",params:{type:"search",query:i.value}});case 5:return r.next=7,a.dispatch("changeType","search");case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{searchRef:c,searchTerm:i,updateMovies:o,searchFocus:s}}},w=(a("04a1"),a("6b0d")),y=a.n(w);const x=y()(h,[["render",j],["__scopeId","data-v-3b508159"]]);var k=x,_={components:{NavBar:k}};a("6f0a");const L=y()(_,[["render",c]]);var E=L,T=(a("b0c0"),{class:"home container"}),P={class:"main-content"},R={class:"main-main"};function S(e,t,a,n,c,i){var s=Object(r["C"])("MovieCard"),o=Object(r["C"])("LoadOrError"),u=Object(r["C"])("Filters");return Object(r["v"])(),Object(r["f"])("div",T,[Object(r["g"])("div",P,[Object(r["g"])("div",R,[Object(r["g"])("div",{class:Object(r["p"])(["movie-list",n.layout])},[(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["B"])(n.movies,(function(e){return Object(r["v"])(),Object(r["d"])(s,{movie:e,key:e.id,layout:n.layout},null,8,["movie","layout"])})),128))],2),Object(r["j"])(o)]),Object(r["j"])(u)])])}var D=function(e){return Object(r["y"])("data-v-6419257a"),e=e(),Object(r["w"])(),e},C={key:0,class:"card-image waves-effect waves-block waves-light"},q=["src"],I={class:"card-content white-text waves-effect waves-block waves-light"},A={class:"card-title activator"},H={class:"card-action"},B=["href"],U=Object(r["i"])("Details"),F={class:"card-reveal"},J={class:"card-title white-text waves-effect waves-block waves-light"},$=D((function(){return Object(r["g"])("i",{class:"material-icons right"},"close",-1)}));function N(e,t,a,n,c,i){var s=Object(r["C"])("router-link");return Object(r["v"])(),Object(r["f"])("div",{class:"movie-card",style:Object(r["q"])(i.cssProps)},[Object(r["g"])("div",{class:Object(r["p"])(["card hoverable movie",i.classObject])},[n.isImage?(Object(r["v"])(),Object(r["f"])("div",C,[Object(r["g"])("img",{class:"activator",src:a.movie.poster},null,8,q)])):Object(r["e"])("",!0),Object(r["g"])("div",I,[Object(r["g"])("span",A,Object(r["E"])(a.movie.title),1)]),Object(r["g"])("div",H,[Object(r["g"])("a",{href:"https://www.themoviedb.org/movie/".concat(a.movie.id)},"TMDB",8,B),Object(r["j"])(s,{to:{name:"Movie",params:{id:a.movie.id}}},{default:Object(r["J"])((function(){return[U]})),_:1},8,["to"])]),Object(r["g"])("div",F,[Object(r["g"])("span",J,[Object(r["i"])(Object(r["E"])(a.movie.title)+" ",1),$]),Object(r["g"])("p",null,Object(r["E"])(a.movie.overview),1)])],2)],4)}a("ac1f"),a("466d");var G={props:{movie:Object,layout:String},setup:function(e){var t=Object(r["b"])((function(){return null!=e.movie.poster.match(/\.(jpeg|jpg|gif|png)$/)}));return{isImage:t}},data:function(){return{isActive:!0,error:null}},computed:{classObject:function(){return{"no-poster":null==this.movie.poster.match(/\.(jpeg|jpg|gif|png)$/),"sticky-action":"grid_on"===this.layout}},cssProps:function(){return{"--card-background-image":"url(".concat(this.movie.backdrop,")")}}}};a("018e");const K=y()(G,[["render",N],["__scopeId","data-v-6419257a"]]);var Q=K,V=function(e){return Object(r["y"])("data-v-e3987f18"),e=e(),Object(r["w"])(),e},z={class:"filters"},W={class:"filter-group"},X={class:"material-icons left"},Y=Object(r["i"])("change layout"),Z={class:"filter-group"},ee=V((function(){return Object(r["g"])("label",null,"Sort by:",-1)})),te=["value"];function ae(e,t,a,n,c,i){return Object(r["v"])(),Object(r["f"])("div",z,[Object(r["g"])("div",W,[Object(r["g"])("a",{class:"waves-effect waves-light btn blue darken-3",onClick:t[0]||(t[0]=function(){return n.changeLayout&&n.changeLayout.apply(n,arguments)})},[Object(r["g"])("i",X,Object(r["E"])("grid_off"===n.layout?"grid_on":"grid_off"),1),Y])]),Object(r["g"])("div",Z,[ee,Object(r["K"])(Object(r["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.type=e}),onInput:t[2]||(t[2]=function(){return n.changeSort&&n.changeSort.apply(n,arguments)})},[(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["B"])(c.sortByOptions,(function(e){return Object(r["v"])(),Object(r["f"])("option",{key:e.value,value:e.value},Object(r["E"])(e.text),9,te)})),128))],544),[[r["G"],i.type]])])])}var re={setup:function(){var e=Object(O["c"])(),t=Object(g["c"])(),a=e.state.movieList,r=function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.target.value===a.params.type){e.next=3;break}return e.next=3,t.push({name:"Home",params:{type:r.target.value}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{layout:a.layout,changeSort:r,changeLayout:function(){e.dispatch("changeLayout")}}},data:function(){return{sortByOptions:[{text:"Popular",value:"popular"},{text:"Now Playing",value:"now_playing"},{text:"Top Rated",value:"top_rated"},{text:"Upcoming",value:"upcoming"}]}},computed:{type:{get:function(){return this.$store.state.movieList.params.type},set:function(){}}}};a("a287");const ne=y()(re,[["render",ae],["__scopeId","data-v-e3987f18"]]);var ce=ne,ie={key:0,class:"progress blue lighten-4"},se=Object(r["g"])("div",{class:"indeterminate blue darken-3"},null,-1),oe=[se],ue={key:1,class:"card red"},le={class:"card-content white-text"},be={class:"card-title"};function pe(e,t,a,n,c,i){return Object(r["v"])(),Object(r["f"])(r["a"],null,[e.loading?(Object(r["v"])(),Object(r["f"])("div",ie,oe)):Object(r["e"])("",!0),e.error?(Object(r["v"])(),Object(r["f"])("div",ue,[Object(r["g"])("div",le,[Object(r["g"])("span",be,Object(r["E"])(e.error),1)])])):Object(r["e"])("",!0)],64)}var ve={computed:Object(O["b"])(["loading","error"])};const de=y()(ve,[["render",pe]]);var me=de,je={components:{MovieCard:Q,Filters:ce,LoadOrError:me},setup:function(){var e=Object(O["c"])();e.dispatch("getMovies");var t=Object(r["b"])((function(){return e.state.route.params.type}));return Object(r["I"])(t,(function(t){t&&e.dispatch("changeType",t)})),window.onscroll=Object(f["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("Home"===e.state.route.name){t.next=2;break}return t.abrupt("return");case 2:if(a=document.documentElement,r=a.scrollTop+window.innerHeight>=a.offsetHeight-200,!r||e.state.loading||e.state.error){t.next=7;break}return t.next=7,e.dispatch("getMoreMovies");case 7:case"end":return t.stop()}}),t)}))),{layout:Object(r["b"])((function(){return e.state.movieList.layout})),movies:Object(r["b"])((function(){return e.state.movieList.data}))}}};a("6788");const fe=y()(je,[["render",S]]);var ge=fe,Oe=function(e){return Object(r["y"])("data-v-39e66294"),e=e(),Object(r["w"])(),e},he={class:"container"},we={key:0,class:"movie"},ye={class:"movie-content container"},xe={class:"movie-main"},ke={class:"movie-poster"},_e=["src"],Le={key:0,class:"movie-tagline"},Me={class:"movie-header"},Ee={class:"movie-title"},Te={class:"movie-rating"},Pe=["innerHTML"],Re=Object(r["i"])(" —  "),Se={class:"movie-rating-label"},De={class:"movie-rating-count"},Ce=Object(r["i"])("  "),qe=Oe((function(){return Object(r["g"])("h5",null,"Overview",-1)})),Ie={class:"movie-description"},Ae={class:"extra-details"},He={class:"extra-details-item"},Be={class:"detail-item-wrapper"},Ue=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Release Date:",-1)})),Fe={class:"extra-details-value"},Je={key:0,class:"extra-details-item"},$e={class:"detail-item-wrapper"},Ne=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Homepage:",-1)})),Ge={class:"extra-details-value"},Ke=["href"],Qe={key:1,class:"extra-details-item"},Ve={class:"detail-item-wrapper"},ze=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"TMDB:",-1)})),We={class:"extra-details-value"},Xe=["href"],Ye={key:2,class:"extra-details-item"},Ze={class:"detail-item-wrapper"},et=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"IMDB:",-1)})),tt={class:"extra-details-value"},at=["href"],rt={key:3,class:"extra-details-item"},nt={class:"detail-item-wrapper"},ct=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Original Title:",-1)})),it={class:"extra-details-value"},st={key:4,class:"extra-details-item"},ot={class:"detail-item-wrapper"},ut=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Runtime:",-1)})),lt={class:"extra-details-value"},bt={key:5,class:"extra-details-item"},pt={class:"detail-item-wrapper"},vt=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Budget:",-1)})),dt={class:"extra-details-value"},mt={key:6,class:"extra-details-item"},jt={class:"detail-item-wrapper"},ft=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Revenue:",-1)})),gt={class:"extra-details-value"},Ot={key:7,class:"extra-details-item"},ht={class:"detail-item-wrapper"},wt=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Status:",-1)})),yt={class:"extra-details-value"},xt={key:8,class:"extra-details-item"},kt={class:"detail-item-wrapper"},_t=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Genres:",-1)})),Lt={class:"extra-details-value"},Mt={key:9,class:"extra-details-item"},Et={class:"detail-item-wrapper"},Tt=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Countries:",-1)})),Pt={class:"extra-details-value"},Rt={key:10,class:"extra-details-item companies"},St={class:"detail-item-wrapper"},Dt=Oe((function(){return Object(r["g"])("span",{class:"extra-details-label"},"Companies:",-1)})),Ct={class:"extra-details-value"},qt={class:"movie-details"},It={class:"cast-and-crew"},At={class:"reviews"};function Ht(e,t,a,n,c,i){var s,o,u=Object(r["C"])("LoadOrError"),l=Object(r["C"])("CastOrCrew"),b=Object(r["C"])("Reviews");return Object(r["v"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",he,[Object(r["j"])(u)]),n.error||n.loading||!n.credits?Object(r["e"])("",!0):(Object(r["v"])(),Object(r["f"])("div",we,[Object(r["g"])("div",{class:"movie-backdrop",style:Object(r["q"])(i.cssProps)},null,4),Object(r["g"])("div",ye,[Object(r["g"])("div",xe,[Object(r["g"])("div",ke,[Object(r["g"])("img",{src:n.movie.poster,alt:""},null,8,_e),n.movie.tagline?(Object(r["v"])(),Object(r["f"])("div",Le,Object(r["E"])(n.movie.tagline),1)):Object(r["e"])("",!0)]),Object(r["g"])("div",Me,[Object(r["g"])("h1",Ee,Object(r["E"])(n.movie.title),1),Object(r["g"])("div",Te,[Object(r["g"])("span",{class:"movie-rating-value",innerHTML:n.rating},null,8,Pe),Re,Object(r["g"])("span",Se,Object(r["E"])(n.ratingLabel),1),Object(r["g"])("span",De,[Ce,Object(r["g"])("small",null,"("+Object(r["E"])(n.movie.vote_count.toLocaleString())+" votes)",1)])]),qe,Object(r["g"])("div",Ie,[Object(r["g"])("p",null,Object(r["E"])(n.movie.overview),1)]),Object(r["g"])("div",Ae,[Object(r["g"])("div",He,[Object(r["g"])("div",Be,[Ue,Object(r["g"])("span",Fe,Object(r["E"])(n.movie.release_date),1)])]),n.movie.homepage?(Object(r["v"])(),Object(r["f"])("div",Je,[Object(r["g"])("div",$e,[Ne,Object(r["g"])("span",Ge,[Object(r["g"])("a",{href:n.movie.homepage,target:"_blank"},Object(r["E"])(n.movie.homepage.match(/^https?:\/\/(www\.)?([^\/]+)/)[2]),9,Ke)])])])):Object(r["e"])("",!0),n.movie.id?(Object(r["v"])(),Object(r["f"])("div",Qe,[Object(r["g"])("div",Ve,[ze,Object(r["g"])("span",We,[Object(r["g"])("a",{href:"https://www.themoviedb.org/movie/".concat(n.movie.id),target:"_blank"},Object(r["E"])(n.movie.id),9,Xe)])])])):Object(r["e"])("",!0),n.movie.imdb_id?(Object(r["v"])(),Object(r["f"])("div",Ye,[Object(r["g"])("div",Ze,[et,Object(r["g"])("span",tt,[Object(r["g"])("a",{href:"https://imdb.com/title/".concat(n.movie.imdb_id),target:"_blank"},Object(r["E"])(n.movie.imdb_id),9,at)])])])):Object(r["e"])("",!0),n.movie.original_title!==n.movie.title?(Object(r["v"])(),Object(r["f"])("div",rt,[Object(r["g"])("div",nt,[ct,Object(r["g"])("span",it,Object(r["E"])(n.movie.original_title),1)])])):Object(r["e"])("",!0),n.runtime?(Object(r["v"])(),Object(r["f"])("div",st,[Object(r["g"])("div",ot,[ut,Object(r["g"])("span",lt,Object(r["E"])(n.runtime),1)])])):Object(r["e"])("",!0),"$0"!==n.budget?(Object(r["v"])(),Object(r["f"])("div",bt,[Object(r["g"])("div",pt,[vt,Object(r["g"])("span",dt,Object(r["E"])(n.budget),1)])])):Object(r["e"])("",!0),"$0"!==n.revenue?(Object(r["v"])(),Object(r["f"])("div",mt,[Object(r["g"])("div",jt,[ft,Object(r["g"])("span",gt,Object(r["E"])(n.revenue),1)])])):Object(r["e"])("",!0),n.movie.status?(Object(r["v"])(),Object(r["f"])("div",Ot,[Object(r["g"])("div",ht,[wt,Object(r["g"])("span",yt,Object(r["E"])(n.movie.status),1)])])):Object(r["e"])("",!0),n.genres?(Object(r["v"])(),Object(r["f"])("div",xt,[Object(r["g"])("div",kt,[_t,Object(r["g"])("span",Lt,Object(r["E"])(n.genres),1)])])):Object(r["e"])("",!0),n.countries?(Object(r["v"])(),Object(r["f"])("div",Mt,[Object(r["g"])("div",Et,[Tt,Object(r["g"])("span",Pt,Object(r["E"])(n.countries),1)])])):Object(r["e"])("",!0),n.companies?(Object(r["v"])(),Object(r["f"])("div",Rt,[Object(r["g"])("div",St,[Dt,Object(r["g"])("span",Ct,Object(r["E"])(n.companies),1)])])):Object(r["e"])("",!0)])])]),Object(r["g"])("div",qt,[Object(r["g"])("div",It,[Object(r["j"])(l,{type:"cast",list:null===(s=n.credits)||void 0===s?void 0:s.cast},null,8,["list"]),Object(r["j"])(l,{type:"crew",list:null===(o=n.credits)||void 0===o?void 0:o.crew},null,8,["list"])]),Object(r["g"])("div",At,[Object(r["j"])(b,{reviews:n.movie.reviews.results},null,8,["reviews"])])])])]))],64)}a("a15b"),a("d81d"),a("fb6a");var Bt=function(e){return Object(r["y"])("data-v-37aa0a2a"),e=e(),Object(r["w"])(),e},Ut={class:"cast-list"},Ft={class:"collection"},Jt=["person"],$t={class:"person-container"},Nt=["onClick"],Gt=["src"],Kt={class:"title"},Qt={key:0},Vt=Bt((function(){return Object(r["g"])("br",null,null,-1)})),zt=Bt((function(){return Object(r["g"])("small",null,"known for",-1)})),Wt={key:1},Xt=Bt((function(){return Object(r["g"])("small",null,"as",-1)})),Yt={class:"secondary-links"},Zt=["href"],ea=Object(r["i"])(" Details ");function ta(e,t,a,n,c,i){var s=Object(r["C"])("router-link");return Object(r["v"])(),Object(r["f"])("div",{class:Object(r["p"])(a.type)},[Object(r["g"])("h3",null,Object(r["E"])(a.type.charAt(0).toUpperCase()+a.type.slice(1)),1),Object(r["g"])("div",Ut,[Object(r["g"])("ul",Ft,[(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["B"])(n.filteredList,(function(e){return Object(r["v"])(),Object(r["f"])("li",{person:e,key:e.id,class:"collection-item hoverable avatar"},[Object(r["g"])("div",$t,[Object(r["g"])("div",{class:"person-info",onClick:function(t){return n.goToPerson(e)}},[Object(r["g"])("img",{src:"http://image.tmdb.org/t/p/w45".concat(e.profile_path),alt:"",class:"circle"},null,8,Gt),Object(r["g"])("p",null,[Object(r["g"])("span",Kt,[Object(r["j"])(s,{to:{name:"Person",params:{id:e.id}}},{default:Object(r["J"])((function(){return[Object(r["i"])(Object(r["E"])(e.name),1)]})),_:2},1032,["to"])]),"crew"===a.type?(Object(r["v"])(),Object(r["f"])("span",Qt,[Object(r["i"])(Object(r["E"])(e.job)+" ",1),Vt,zt,Object(r["i"])(" "+Object(r["E"])(e.known_for_department),1)])):"cast"===a.type?(Object(r["v"])(),Object(r["f"])("span",Wt,[Xt,Object(r["i"])(" "+Object(r["E"])(e.character),1)])):Object(r["e"])("",!0)])],8,Nt)]),Object(r["g"])("div",Yt,[Object(r["g"])("a",{href:"https://www.themoviedb.org/person/".concat(e.id),class:"secondary-content"}," TMDB ",8,Zt),Object(r["j"])(s,{to:{name:"Person",params:{id:e.id}},class:"secondary-content"},{default:Object(r["J"])((function(){return[ea]})),_:2},1032,["to"])])],8,Jt)})),128))])])],2)}a("4ec9"),a("3ca3"),a("ddb0"),a("6062");var aa={props:{list:Array,type:String},setup:function(e){var t=Object(g["c"])(),a=function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("person",a),e.next=3,t.push({name:"Person",params:{id:a.id}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=[];if("crew"===e.type){var c=new Map;n=e.list.reduce((function(e,t){if(!c.has(t.id)){var a=new Set;a.add(t.job),c.set(t.id,a),e.push(t)}var r=c.get(t.id),n=e.map((function(e){return e.id})).indexOf(t.id);return-1!==n&&(r.has(t.job)||(r.add(t.job),e[n].job="".concat(t.job,", ").concat(e[n].job))),e}),[])}return{goToPerson:a,filteredList:Object(r["b"])((function(){return"cast"===e.type?e.list:n}))}}};a("d533");const ra=y()(aa,[["render",ta],["__scopeId","data-v-37aa0a2a"]]);var na=ra,ca=function(e){return Object(r["y"])("data-v-4ac46e1c"),e=e(),Object(r["w"])(),e},ia=ca((function(){return Object(r["g"])("h3",null,"Reviews",-1)})),sa={class:"reviews-container"},oa={class:"collapsible popout"},ua=["review"],la={class:"collapsible-header hoverable"},ba={class:"avatar"},pa=["src"],va={class:"review-author"},da={class:"collapsible-body"},ma=["innerHTML"];function ja(e,t,a,n,c,i){return Object(r["v"])(),Object(r["f"])(r["a"],null,[ia,Object(r["g"])("div",sa,[Object(r["g"])("ul",oa,[(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["B"])(i.filteredReviews,(function(e){return Object(r["v"])(),Object(r["f"])("li",{review:e,key:e.id},[Object(r["g"])("div",la,[Object(r["g"])("div",ba,[Object(r["g"])("img",{src:n.avatar(e)},null,8,pa)]),Object(r["g"])("span",va,Object(r["E"])(e.author),1)]),Object(r["g"])("div",da,[Object(r["g"])("span",{innerHTML:n.parseMarkdown(e.content)},null,8,ma)])],8,ua)})),128))])])],64)}a("9911"),a("caad"),a("2532");var fa={props:{reviews:Array},setup:function(){function e(e){var t=new marked.Renderer;return t.link=function(e,t,a){return'<a target="_blank" href="'.concat(e,'">').concat(a,"</a>")},t.image=function(e,t,a){return'<img src="'.concat(e,'" alt="').concat(a,'">')},t.paragraph=function(e){return"<p>".concat(e,"</p>")},t.code=function(e,t){return'<pre><code class="language-'.concat(t,'">').concat(e,"</code></pre>")},marked.setOptions({renderer:t,gfm:!0,tables:!0,breaks:!0,pedantic:!1,smartLists:!0,smartypants:!1,highlight:function(e){return hljs.highlightAuto(e).value}}),DOMPurify.sanitize(marked.parse(e))}function t(e){var t;return null!==e&&void 0!==e&&null!==(t=e.author_details)&&void 0!==t&&t.avatar_path?e.author_details.avatar_path.includes("gravatar")?e.author_details.avatar_path.slice(1):"https://www.themoviedb.org/t/p/w64_and_h64_face".concat(e.author_details.avatar_path):""}return Object(r["t"])((function(){function e(e){window.scrollTo({top:e.offsetTop-20})}var t,a=document.querySelectorAll(".collapsible");M.Collapsible.init(a,{onOpenStart:function(a){t=setInterval((function(){e(a)}),10)},onOpenEnd:function(){clearInterval(t)}})})),{avatar:function(e){return t(e)},parseMarkdown:e}},computed:{filteredReviews:function(){return this.reviews.slice(0,5)}}};a("5bfe");const ga=y()(fa,[["render",ja],["__scopeId","data-v-4ac46e1c"]]);var Oa=ga,ha={components:{LoadOrError:me,CastOrCrew:na,Reviews:Oa},setup:function(){var e=Object(O["c"])();e.dispatch("getMovieDetails");var t=Object(r["b"])((function(){return e.state.movieDetails})),a=Object(r["b"])((function(){return e.state.route.params.id}));function n(e,t){for(var a=Math.round(e/t*5),r=10*(a-Math.floor(a)),n=[],c=0;c<Math.floor(a);c+=1)n.push('<i class="material-icons">star</i>');if(r&&n.push('<i class="material-icons">star_half</i>'),n.length<5)for(var i=n.length;i<5;i+=1)n.push('<i class="material-icons">star_border</i>');return'<span title="'.concat(a,' stars">').concat(n.join(""),"</span>")}function c(e){var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return t.format(e)}function i(e){return e?e.slice(0,5).map((function(e){return e.iso_3166_1?e.iso_3166_1:e.name})).join(", "):""}function s(e){if(!e)return"";var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}return Object(r["I"])(a,(function(t){t&&"Movie"===e.state.route.name&&e.dispatch("getMovieDetails")})),{movie:Object(r["b"])((function(){return t.value.data})),rating:Object(r["b"])((function(){return n(t.value.data.vote_average,10)})),ratingLabel:Object(r["b"])((function(){return"".concat(t.value.data.vote_average," / 10")})),error:Object(r["b"])((function(){return e.state.error})),loading:Object(r["b"])((function(){return e.state.loading})),credits:Object(r["b"])((function(){return t.value.data.credits})),genres:Object(r["b"])((function(){return i(t.value.data.genres)})),revenue:Object(r["b"])((function(){return c(t.value.data.revenue)})),budget:Object(r["b"])((function(){return c(t.value.data.budget)})),runtime:Object(r["b"])((function(){return s(t.value.data.runtime)})),companies:Object(r["b"])((function(){return i(t.value.data.production_companies)})),countries:Object(r["b"])((function(){return i(t.value.data.production_countries)}))}},computed:{cssProps:function(e){var t,a,r,n,c=null===(t=e.movie)||void 0===t||null===(a=t.images)||void 0===a||null===(r=a.backdrops)||void 0===r||null===(n=r[0])||void 0===n?void 0:n.file_path,i=c?"https://image.tmdb.org/t/p/w1280".concat(c):"none";return{"--movie-background-image":"url(".concat(i,")")}}}};a("2243");const wa=y()(ha,[["render",Ht],["__scopeId","data-v-39e66294"]]);var ya=wa,xa={class:"person-main"},ka=Object(r["h"])('<div class="person-poster"><img src="" alt=""></div><div class="person-header"><h1 class="person-title">Title</h1><div class="person-description"><p>Overview</p></div></div>',2),_a=[ka];function La(e,t,a,n,c,i){return Object(r["v"])(),Object(r["f"])("div",xa,_a)}var Ma={};const Ea=y()(Ma,[["render",La]]);var Ta=Ea,Pa=[{path:"/movie/:id",name:"Movie",component:ya},{path:"/person/:id",name:"Person",component:Ta},{path:"/movies/:type/:query?",name:"Home",component:ge}],Ra=Object(g["a"])({history:Object(g["b"])(),routes:Pa});Ra.beforeEach((function(e,t,a){e.name?a():a({name:"Home",params:{type:"popular"}})}));var Sa=Ra,Da=a("2909"),Ca=a("5530"),qa=a("53ca"),Ia=(a("b64b"),a("5319"),a("9861"),a("25f0"),{getMovies:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function a(){var r,n,c,i,s,o,u,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",Promise.reject(new Error("List type is required")));case 2:if(e.match(/^(latest|now_playing|popular|top_rated|upcoming|search)$/)){a.next=4;break}return a.abrupt("return",Promise.reject(new Error("List type must be one of latest, now_playing, popular, top_rated, or upcoming")));case 4:if("search"!==e||t.query){a.next=6;break}return a.abrupt("return",Promise.reject(new Error("Query is required when type is search")));case 6:return r="https://api.themoviedb.org/3",n="".concat("99143c34ad7753148b146cf5fa760d8f"),c=Object(Ca["a"])(Object(Ca["a"])({},t),{},{api_key:n}),"search"===e&&delete c.type,i=new URLSearchParams(c),s="search"===e?"".concat(r,"/search/movie?").concat(i.toString()):"".concat(r,"/movie/").concat(e,"?").concat(i.toString()),a.next=14,fetch(s,{headers:{accept:"application/json"}});case 14:return o=a.sent,a.next=17,o.json();case 17:if(u=a.sent,!o.ok){a.next=20;break}return a.abrupt("return",u);case 20:throw l=new Error(u.status_message||"Something went wrong"),l.response=u,l;case 23:case"end":return a.stop()}}),a)})))()},getMovieDetails:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var a,r,n,c,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",Promise.reject(new Error("Movie ID is required")));case 2:return a="https://api.themoviedb.org/3",r="".concat("99143c34ad7753148b146cf5fa760d8f"),n="".concat(a,"/movie/").concat(e,"?api_key=").concat(r,"&append_to_response=images,credits,reviews"),t.next=7,fetch(n,{headers:{accept:"application/json"}});case 7:return c=t.sent,t.next=10,c.json();case 10:if(i=t.sent,!c.ok){t.next=13;break}return t.abrupt("return",i);case 13:throw s=new Error(i.status_message||"Something went wrong"),s.response=i,s;case 16:case"end":return t.stop()}}),t)})))()}});function Aa(e){if(!e)return{};if(Array.isArray(e)&&0===e.length)return[];if("object"===Object(qa["a"])(e)&&0===Object.keys(e).length)return{};var t=function(e){return Object(Ca["a"])(Object(Ca["a"])({},e),{},{overview:e.overview?e.overview:"No overview available",poster:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"",backdrop:e.backdrop_path?"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path):""})};return Array.isArray(e)?e.map(t):t(e)}var Ha=Object(O["a"])({state:{loading:!1,error:"",movieList:{data:[],layout:"grid_on",params:{page:1,type:"popular",query:""}},pageTitle:"Movie App",movieDetails:{data:{title:""},id:""},searchList:{data:[]}},mutations:{setMovieList:function(e,t){e.movieList.data=Aa(t.results)},incrementPage:function(e){e.movieList.params.page+=1},addToMovieList:function(e,t){var a;(a=e.movieList.data).push.apply(a,Object(Da["a"])(Aa(t.results)))},setMovieListType:function(e,t){e.movieList.params.type=t,e.movieList.params.page=1,e.movieList.params.query=""},setMovieListQuery:function(e,t){e.movieList.params.query=t},setMovieListLayout:function(e,t){e.movieList.layout=t},toggleLoading:function(e){e.loading=!e.loading},setError:function(e,t){e.error=t},setMovieListParams:function(e,t){var a,r,n;e.movieList.params={page:null!==(a=null===t||void 0===t?void 0:t.page)&&void 0!==a?a:1,type:null!==(r=null===t||void 0===t?void 0:t.type)&&void 0!==r?r:"popular",query:null!==(n=null===t||void 0===t?void 0:t.query)&&void 0!==n?n:""}},setPageTitle:function(e,t){e.pageTitle=t,document.title=e.pageTitle},setMovieDetails:function(e,t){e.movieDetails.data=Aa(t)},setMovieDetailsId:function(e,t){e.movieDetails.id=t},setSearchList:function(e,t){e.searchList.data=Aa(t.results)}},actions:{getMovies:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("toggleLoading"),e.dispatch("fetchParams"),e.dispatch("setPageTitle"),e.commit("setMovieDetails",{}),e.commit("setMovieDetailsId",""),t.prev=5,t.next=8,Ia.getMovies(e.state.movieList.params.type,{query:e.state.movieList.params.query,page:e.state.movieList.params.page});case 8:a=t.sent,e.commit("setMovieList",a),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](5),e.commit("setError",t.t0.message);case 15:return t.prev=15,e.commit("toggleLoading"),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[5,12,15,18]])})))()},getMoreMovies:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("toggleLoading"),e.commit("incrementPage"),t.prev=2,t.next=5,Ia.getMovies(e.state.movieList.params.type,{query:e.state.movieList.params.query,page:e.state.movieList.params.page});case 5:a=t.sent,e.commit("addToMovieList",a),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),e.commit("setError",t.t0.message);case 12:return t.prev=12,e.commit("toggleLoading"),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()},fetchParams:function(e){"Home"===e.state.route.name?e.commit("setMovieListParams",e.state.route.params):"Movie"===e.state.route.name&&e.commit("setMovieDetailsId",e.state.route.params.id)},changeLayout:function(e){var t="grid_off"===e.state.movieList.layout?"grid_on":"grid_off";e.commit("setMovieListLayout",t)},changeType:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.commit("toggleLoading"),e.commit("setMovieListType",t),a.next=4,e.dispatch("getMovies");case 4:e.commit("toggleLoading");case 5:case"end":return a.stop()}}),a)})))()},setPageTitle:function(e){if("Home"===e.state.route.name)if(""===e.state.movieList.params.query&&"search"!==e.state.movieList.params.type){var t=e.state.movieList.params.type.replace("_"," ").replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}));e.commit("setPageTitle","".concat(t," Movies | Movie App"))}else{var a=e.state.movieList.params.query.length>20?"...":"";e.commit("setPageTitle","Search: ".concat(e.state.movieList.params.query).concat(a," | Movie App"))}else"Movie"===e.state.route.name&&e.commit("setPageTitle","".concat(e.state.movieDetails.data.title," | Movie App"))},getMovieDetails:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("toggleLoading"),e.dispatch("fetchParams"),t.prev=2,t.next=5,Ia.getMovieDetails(e.state.movieDetails.id);case 5:a=t.sent,e.commit("setMovieDetails",a),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),e.commit("setError",t.t0.message);case 12:return t.prev=12,e.commit("toggleLoading"),e.dispatch("setPageTitle"),t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[2,9,12,16]])})))()},getSearchSuggestions:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Ia.getMovies("search",{query:t});case 3:r=a.sent,e.commit("setSearchList",r),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),e.commit("setError",a.t0.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()}},getters:{},modules:{}});Object(n["sync"])(Ha,Sa),Object(r["c"])(E).use(Ha).use(Sa).mount("#app")},"5bfe":function(e,t,a){"use strict";a("78be")},6788:function(e,t,a){"use strict";a("26b0")},"6d5e":function(e,t,a){},"6f0a":function(e,t,a){"use strict";a("0f56")},"78be":function(e,t,a){},"7c0b":function(e,t,a){},a287:function(e,t,a){"use strict";a("d1fa")},d1fa:function(e,t,a){},d533:function(e,t,a){"use strict";a("7c0b")}});
//# sourceMappingURL=index.a0d2dd65.js.map