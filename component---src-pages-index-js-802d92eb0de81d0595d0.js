"use strict";(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[678,341],{71:function(t,e,s){s.r(e);var n=s(4578),i=s(7294);const o="unmounted",r="exited",a="entering",u="entered",c="exiting",l={entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};let p=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={status:o},s}(0,n.Z)(e,t);var s=e.prototype;return s.componentDidMount=function(){const{show:t}=this.props;t&&this.performEnter()},s.componentDidUpdate=function(t){let e=null;if(t!==this.props){const{status:t}=this.state;this.props.show?t!==a&&t!==u&&(e=a):t!==a&&t!==u||(e=c)}this.updateStatus(e)},s.updateStatus=function(t){null!==t?t===a?this.performEnter():this.performExit():this.state.status===r&&this.setState({status:o})},s.performEnter=function(){this.setState({status:a},(()=>{setTimeout((()=>{this.setState({status:u},(()=>{}))}),0)}))},s.performExit=function(){const{duration:t}=this.props;this.setState({status:c},(()=>{setTimeout((()=>{this.setState({status:r},(()=>{}))}),t)}))},s.render=function(){const{status:t}=this.state;if(t===o)return null;const{children:e,duration:s,className:n,style:r}=this.props;return i.createElement("div",{className:n,style:{...r,transition:`opacity ${s}ms ease-in-out`,opacity:.1,...l[t]}},e)},e}(i.Component);p.defaultProps={show:!1,duration:300},e.default=p},6558:function(t,e,s){s.r(e),s.d(e,{default:function(){return o}});var n=s(7294),i=(s(71),s(8856));function o(){const{0:t,1:e}=(0,n.useState)(0),{0:s,1:o}=(0,n.useState)(!1),{0:r,1:a}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{function s(){e(window.scrollY),console.log("scroll val:"+t),t>=50?(o(!0),r||a(!0),console.log("but it was set?...")):o(!1)}return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}})),n.createElement(n.Fragment,null,n.createElement(i.pQ,{title:"Jed's Portfolio"}),n.createElement(i.T3,{useSplashScreenAnimation:!0},n.createElement(i.DH,{sectionId:"hero"}),n.createElement("div",{style:{height:"20em"}}),n.createElement(i.ez,{sectionId:"about",heading:"About Me"}),n.createElement(i.aS,{sectionId:"details",heading:"Skills"}),n.createElement(i.Au,{sectionId:"projects",heading:"Projects"})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-802d92eb0de81d0595d0.js.map