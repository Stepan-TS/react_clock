(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),d=(n(12),n(0)),h=function(e){return e.toUTCString().slice(-12,-4)},m=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({date:new Date}),window.console.info(h(e.state.date))}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName;e.clockName!==t&&window.console.debug("Rename from ".concat(e.clockName," to ").concat(t))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.date;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:h(t)})]})}}]),n}(s.Component);function k(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var v=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.handleLeftClick=function(){e.state.hasClock||e.setState({hasClock:!0})},e.handleRightClick=function(t){t.preventDefault(),e.state.hasClock&&e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("click",this.handleLeftClick),document.addEventListener("contextmenu",this.handleRightClick),this.timerId=window.setInterval((function(){e.setState({clockName:k()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleLeftClick),document.removeEventListener("contextmenu",this.handleRightClick),window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),t&&Object(d.jsx)(m,{clockName:n})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9ec1e070.chunk.js.map