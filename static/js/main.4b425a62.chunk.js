(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),d=(n(12),n(0)),m=function(t){return t.toUTCString().slice(-12,-4)},k=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({date:new Date}),window.console.info(m(t.state.date))}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=this.props.clockName;t.clockName!==e&&window.console.debug("Rename from ".concat(t.clockName," to ").concat(e))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.clockName,e=this.state.date;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:m(e)})]})}}]),n}(s.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.timeId=0,t.rightClick=function(e){e.preventDefault(),t.state.hasClock||t.setState({hasClock:!0})},t.leftClick=function(e){e.preventDefault(),t.state.hasClock||t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timeId=window.setInterval((function(){t.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.rightClick),document.addEventListener("click",this.leftClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timeId),document.addEventListener("contextmenu",this.rightClick),document.addEventListener("click",this.leftClick)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),e&&Object(d.jsx)(k,{clockName:n})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4b425a62.chunk.js.map