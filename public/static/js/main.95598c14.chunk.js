(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/bomb.b4f7aa9c.png"},32:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),l=a.n(o),c=a(12),i=(a(41),a(5)),s=a(6),u=a(8),m=a(7),p=a(9),v=function(e){var t=e.children;return r.a.createElement("div",{className:"grid-col"},t)},d=a(28),b=a.n(d),g=function(e){e.children;var t=e.onClick,a=e.data,n=e.forceReveal,o=void 0!==n&&n;return r.a.createElement("div",{className:"grid-cell",onClick:function(){return t(a)}},a.hasBomb?r.a.createElement("span",null,o||a.reveal?r.a.createElement("img",{src:b.a,alt:"bomb!",width:40,height:40}):""):r.a.createElement("span",null,o||a.reveal?a.value:""))},h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onCellClicked=function(e){if(!e.reveal){var t=a.props;(0,t.onRevealCell)(t.gameId,e)}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.revealAll;return r.a.createElement("div",{className:"grid"},a.map(function(t,a){return r.a.createElement(v,{key:a},t.map(function(t,a){return r.a.createElement(g,{onClick:e.onCellClicked,key:a,data:t,forceReveal:n})}))}))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={colsSize:0,rowsSize:0,totalBombs:0},a.onColsSizeChange=function(e){a.setState({colsSize:e})},a.onRowsSizeChange=function(e){a.setState({rowsSize:e})},a.onTotalBombsSizeChange=function(e){a.setState({totalBombs:e})},a.onCreateNewGame=function(){(0,a.props.onCreateGame)({colsSize:a.state.colsSize,rowsSize:a.state.rowsSize,totalBombs:a.state.totalBombs})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.colsSize,a=e.rowsSize,n=e.totalBombs;this.setState({colsSize:t,rowsSize:a,totalBombs:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form"},r.a.createElement("label",{className:"form-label"},"Columns: ",r.a.createElement("input",{className:"numeric-input",type:"text",value:this.state.colsSize,onChange:function(t){return e.onColsSizeChange(t.target.value)}})),r.a.createElement("label",{className:"form-label"},"Rows: ",r.a.createElement("input",{className:"numeric-input",type:"text",value:this.state.rowsSize,onChange:function(t){return e.onRowsSizeChange(t.target.value)}})),r.a.createElement("label",{className:"form-label"},"Total Bombs: ",r.a.createElement("input",{className:"numeric-input",type:"text",value:this.state.totalBombs,onChange:function(t){return e.onTotalBombsSizeChange(t.target.value)}})),r.a.createElement("button",{onClick:this.onCreateNewGame}," Create New Game "))}}]),t}(n.Component),w=a(2),E=a(11),y=a.n(E),O=a(17),S="GAME_LOADING",C="GAME_CREATED",z="GAME_REVEAL_CELL",j="GAME_OVER",k="GAME_UPDATING",N=a(18),B=a.n(N),A="/api/minesweeper",G=(a(64),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.createGame)({colsSize:5,rowsSize:5,totalBombs:15})}},{key:"render",value:function(){var e=this.props,t=e.game,a=e.revealCell;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," MineSweeper "),t.gameOver&&r.a.createElement("h3",{className:"game-over-message"}," GAME OVER "),r.a.createElement(f,{colsSize:t.colsSize,rowsSize:t.rowsSize,totalBombs:t.totalBombs,onCreateGame:this.props.createGame}),r.a.createElement("div",{className:"game-wrapper"},t.loading&&r.a.createElement("div",null,"Loading ..."),!t.loading&&r.a.createElement(n.Fragment,null,t.updating&&r.a.createElement("div",{className:"mask"},"Revealing cell ..."),t.gameOver&&r.a.createElement("div",{className:"mask"}),r.a.createElement(h,{gameId:t._id,data:t.grid,revealAll:t.revealAll,onRevealCell:a}))))}}]),t}(n.Component)),x=Object(c.b)(function(e){return{game:e.game}},{createGame:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=Object(O.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:S,payload:!0}),t.next=4,B.a.post("".concat(A),{colsSize:e.colsSize,rowsSize:e.rowsSize,totalBombs:e.totalBombs});case 4:n=t.sent,a({type:C,payload:n.data}),a({type:S,payload:!1}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},revealCell:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var a=Object(O.a)(y.a.mark(function a(n){var r;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:k,payload:!0}),a.next=4,B.a.post("".concat(A,"/").concat(e,"/reveal-cell"),Object(w.a)({},t));case 4:if(!(r=a.sent).data.gameOver){a.next=10;break}return n({type:j}),n({type:k,payload:!1}),a.abrupt("return");case 10:n({type:k,payload:!1}),n({type:z,payload:r.data}),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),console.log(a.t0);case 17:case"end":return a.stop()}},a,this,[[0,14]])}));return function(e){return a.apply(this,arguments)}}()}})(G),R=a(3),M=a(29),_=a(30),L=a(31),D={gameOver:!1,loading:!1,updating:!1,grid:[],revealAll:!1,colsSize:5,rowsSize:5,totalBombs:10};var I=Object(R.c)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(w.a)({},e,t.payload);case S:return Object(w.a)({},e,{loading:t.payload});case k:return Object(w.a)({},e,{updating:t.payload});case z:var a=t.payload,n=Object(L.a)(e.grid);return n[a.coords.x][a.coords.y]=Object(w.a)({},a,{reveal:!0}),Object(w.a)({},e,{grid:n});case j:return Object(w.a)({},e,{revealAll:!0,gameOver:!0});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=function(){var e=Object(_.createLogger)({});return Object(R.d)(I,Object(R.a)(M.a,e))}();l.a.render(r.a.createElement(c.a,{store:T},r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.95598c14.chunk.js.map