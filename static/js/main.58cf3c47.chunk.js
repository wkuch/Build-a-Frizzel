(this["webpackJsonpbuild-a-frizzel"]=this["webpackJsonpbuild-a-frizzel"]||[]).push([[0],{168:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n.n(a),o=n(23),c=n.n(o),i=(n(70),n(4)),r=n(6),s=n(5),u=n(7),d=n(8),f=n(37),p=n(179),h=n(50),m=function(){return l.a.createElement(h.HashLoader,{color:"6793c8"})},b=n(180),S=n(31),v=n.n(S),g=n(52),k=n.n(g),E=n(53),x=n.n(E),O=(n(54),n(181)),w=n(58),y=function(e){return l.a.createElement(f.a,{display:"flex",padding:8,background:"tint2",borderRadius:3},l.a.createElement(f.a,{flex:1,alignItems:"center",display:"flex"},l.a.createElement(p.a,null,e.label)),l.a.createElement(f.a,null,l.a.createElement(f.a,null,l.a.createElement(O.a,{title:e.label,options:e.options,selected:e.selected,onSelect:function(t){return e.onSelect(t.value)}},l.a.createElement(w.a,null,e.useSelectedAsButtonText&&e.selected||e.fallbackButtonText)))))},C=n(57),j={width:"80%",position:"relative"},B={width:"80%",position:"absolute"},z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={size:void 0,filling:void 0,mainColor:void 0,firstSpotColor:void 0,secondSpotColor:void 0,firstSpots:void 0,secondSpots:void 0},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=v.a,t=[{selected:!1,location:"Rechtes Ohr",src:"rechtesOhr.svg"},{selected:!1,location:"Linkes Ohr",src:"linkesOhr.svg"},{selected:!1,location:"Bauch",src:"bauch.svg"},{selected:!1,location:"Schwanz",src:"schwanz.svg"}];this.setState({filling:e,firstSpots:t,secondSpots:Object(C.cloneDeep)(t)})}},{key:"changeColor",value:function(){this.state.filling===v.a?this.setState({filling:k.a}):this.setState({filling:v.a})}},{key:"onExportClick",value:function(e){console.log(e)}},{key:"renderSpotSelection",value:function(e,t){var n=this;return l.a.createElement(b.a,{label:e.location,checked:e.selected,onChange:function(a){n.setState((function(n){return 0===t?n.firstSpots[n.firstSpots.indexOf(e)].selected=!e.selected:n.secondSpots[n.secondSpots.indexOf(e)].selected=!e.selected,n}))}})}},{key:"render",value:function(){var e=this;return this.state.filling?l.a.createElement(f.a,{className:"container"},l.a.createElement(f.a,{style:{position:"relative"},display:"flex",direction:"column",alignItems:"center",justifyContent:"center"},l.a.createElement("img",{src:this.state.filling,style:B}),l.a.createElement("img",{src:x.a,style:j})),l.a.createElement(p.a,{size:600},"Farben"),l.a.createElement(y,{label:"Hauptfarbe",options:["rot","rosa","hellblau","dunkelblau","hellgr\xfcn"].map((function(e){return{label:e,value:e}})),selected:this.state.mainColor,useSelectedAsButtonText:!0,fallbackButtonText:"Auswahl ...",onSelect:function(t){return e.setState({mainColor:t})}}),l.a.createElement(y,{label:"Fleckenfarbe 1",options:["rot","rosa","hellblau","dunkelblau","hellgr\xfcn"].map((function(e){return{label:e,value:e}})),selected:this.state.firstSpotColor,useSelectedAsButtonText:!0,fallbackButtonText:"Auswahl ...",onSelect:function(t){return e.setState({firstSpotColor:t})}}),l.a.createElement(y,{label:"Fleckenfarbe 2",options:["rot","rosa","hellblau","dunkelblau","hellgr\xfcn"].map((function(e){return{label:e,value:e}})),selected:this.state.secondSpotColor,useSelectedAsButtonText:!0,fallbackButtonText:"Auswahl ...",onSelect:function(t){return e.setState({secondSpotColor:t})}}),l.a.createElement(p.a,{size:600},"Flecken 1"),this.state.firstSpots.map((function(t){return e.renderSpotSelection(t,0)})),l.a.createElement(p.a,{size:600},"Flecken 2"),this.state.secondSpots.map((function(t){return e.renderSpotSelection(t,1)}))):l.a.createElement(m,null)}}]),t}(a.Component),T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={showSidebar:!1},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(p.a,null,"Heading"),l.a.createElement(z,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,t,n){e.exports=n.p+"static/media/fill.da223547.png"},52:function(e,t,n){e.exports=n.p+"static/media/fill_2.0abe6435.png"},53:function(e,t,n){e.exports=n.p+"static/media/siluette.ce29c02a.png"},65:function(e,t,n){e.exports=n(168)},70:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.58cf3c47.chunk.js.map