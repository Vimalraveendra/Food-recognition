(window["webpackJsonpfood-recognition-app"]=window["webpackJsonpfood-recognition-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(78)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),o=(a(36),a(25)),l=a(26),s=a(29),m=a(27),u=a(30),p=(a(37),a(38),function(e){var t=e.onChangeEvent,a=e.onSubmit,n=e.input;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"styles"},"The magic brain will detect the foods in your picture.Give it a try.")),r.a.createElement("div",{className:"center1"},r.a.createElement("div",{className:"center1 pa4 br3 shadow-5 background"},r.a.createElement("input",{className:"f4 pa2 w-70",value:n,type:"text",onChange:t}),r.a.createElement("button",{onClick:a,className:"f5 w-30 pv2 ph3 grow bg-dark-green white link"},"Detect"))))}),d=(a(39),function(e){var t=e.imageUrl,a=e.foods,n=e.error,c=a.map(function(e){return r.a.createElement("li",{className:" f6 bg-near-white br--top  mv2 center3",key:e.id},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.value))});return n?r.a.createElement("h3",{className:"f2 white"},n):r.a.createElement("div",{className:"center2"},r.a.createElement("div",{className:"pa2 "},r.a.createElement("img",{src:t,style:{width:"400px",height:"520px"},alt:""})),c.length>0&&r.a.createElement("div",{className:"ph0 br3 hidden ba b--black-10 display"},r.a.createElement("ul",{className:"mv0 ph0"},r.a.createElement("h2",{className:"center3 br3  f5"},"Name",r.a.createElement("span",{className:"center3 br3 f5"},"Probability")),c)))}),h=a(10),f=a.n(h),v=a(28),b=a.n(v),E={particles:{number:{value:80,density:{enable:!0,value_area:600}}}},g=new f.a.App({apiKey:"d50ae7dfaf2d4c4eb0d8ea23594be1d1"}),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",imageUrl:"",foods:[],error:""},a.onChangeEvent=function(e){a.setState({input:e.target.value})},a.onSubmit=function(){a.setState({imageUrl:a.state.input}),g.models.predict(f.a.FOOD_MODEL,a.state.input).then(function(e){e&&a.setState({foods:e.outputs[0].data.concepts})}).catch(function(e){a.setState({error:"Sorry! Please enter a valid url"})}),a.setState({input:""})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},"Food-Recognition"),r.a.createElement(b.a,{className:"particles",params:E}),r.a.createElement(p,{onChangeEvent:this.onChangeEvent,onSubmit:this.onSubmit,input:this.state.input}),r.a.createElement(d,{imageUrl:this.state.imageUrl,foods:this.state.foods,error:this.state.error}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(77);i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.4ce8152a.chunk.js.map