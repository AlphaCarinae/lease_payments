(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),u=(a(22),a(3)),s=a(4),i=a(7),o=a(5),d=a(6),m=a(2),h=a(16),p=a.n(h),b=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).state={leaseId:""},e._handleInput=e._handleInput.bind(Object(m.a)(Object(m.a)(e))),e._handleSubmit=e._handleSubmit.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"_handleInput",value:function(e){this.setState({leaseId:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.fetchLease()}},{key:"fetchLease",value:function(){var e=this;p.a.get("https://hiring-task-api.herokuapp.com/v1/leases/"+this.state.leaseId).then(function(t){e.props.updateLease({currentLease:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("img",{className:"logo",src:"logo.svg",alt:"Different Logo"}),r.a.createElement("form",{className:"searchForm",onSubmit:this._handleSubmit},r.a.createElement("label",null,"Find payment details of a specific lease id "),r.a.createElement("input",{type:"number",name:"",value:this.state.leaseId,placeholder:"enter lease id here",onChange:this._handleInput}),r.a.createElement("button",{type:"submit",name:"button"},"Search")))}}]),t}(n.Component),f=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],E=["January","February","March","April","May","June","July","August","September","October","November","December"],y=function(e){var t=new Date(e),a=t.getDay(t);return f[a]},v=function(e,t){var a=new Date(e+" 00:00 GMT");return(new Date(t+" 00:00 GMT")-a)/864e5},g=function(e,t){var a=new Date(e+" 00:00 GMT"),n=24*t*60*60*1e3;return a.setTime(a.getTime()+n),"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate())},O=function(e){var t,a=new Date(e);return E[a.getMonth()]+", "+(t=a.getDate(),isNaN(t)?"entry must be a number":t>3&&t<21?t+"th":t%10===1?t+"st":t%10===2?t+"nd":t%10===3?t+"rd":t+"th")+" "+a.getFullYear()},j=function(e,t,a,n,r){var l,c,u=y(e),s=y(t);switch(n){case"weekly":l=r/7,c=7;break;case"fortnightly":l=r/14,c=14;break;case"monthly":l=r/28,c=28}var i=[],o=[],d=f.indexOf(u)-f.indexOf(a);f.indexOf(s),f.indexOf(a);d<0?d=-d:d>0&&(d=7-d);var m=g(e,d);for(o.push([e,m]);v(g(m,c),t)>=0;){var h=m;m=g(m,c),o.push([h,m])}return o.push([m,g(t,1)]),o.map(function(e){return i.push(function(e,t,a){var n=[];n.push(O(e)),n.push(O(g(t,-1)));var r=v(e,t);n.push(r.toString());var l="$"+(a*r).toFixed(1);return n.push(l),n}(e[0],e[1],l))}),i},w=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.currentLease,a=t.start_date,n=t.end_date,l=t.rent,c=t.frequency,u=t.payment_day,s=this.props.currentLease;return s.start_date&&(e=r.a.createElement("div",null,r.a.createElement("table",{className:"leaseInfo"},r.a.createElement("thead",{className:"leaseInfoHead"},r.a.createElement("tr",null,r.a.createElement("td",null,"Lease id"),r.a.createElement("td",null,"Start date"),r.a.createElement("td",null,"End date"),r.a.createElement("td",null,"Payment day"),r.a.createElement("td",null,"Rent"),r.a.createElement("td",null,"Rent frequency"))),r.a.createElement("tbody",{className:"leaseInfoBody"},r.a.createElement("tr",null,r.a.createElement("td",null,s.id),r.a.createElement("td",null,s.start_date),r.a.createElement("td",null,s.end_date),r.a.createElement("td",null,s.payment_day),r.a.createElement("td",null,s.rent),r.a.createElement("td",null,s.frequency)))),r.a.createElement("table",{className:"resultTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"From"),r.a.createElement("th",null,"To"),r.a.createElement("th",null,"Days"),r.a.createElement("th",null,"Amount"))),r.a.createElement("tbody",null,j(a,n,u,c,l).map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e[0]),r.a.createElement("td",null,e[1]),r.a.createElement("td",null,e[2]),r.a.createElement("td",null,e[3]))}))))),r.a.createElement("div",{className:"results"},e)}}]),t}(n.Component),k=(a(43),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).state={currentLease:{}},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"updateLease",value:function(e){this.setState(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,Object.assign({},this.state,{updateLease:this.updateLease.bind(this)})),r.a.createElement(w,this.state))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.be29d7df.chunk.js.map