(this.webpackJsonpuntitled28=this.webpackJsonpuntitled28||[]).push([[0],{62:function(e,t,n){},64:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(28),o=n.n(r),i=n(20),s=n(32),u=n(18),d=n(49),l=n(48),h=n(7),f="94187e3f-9890-4855-9d47-1415a650589f",j="http://88.198.64.26:5000",b="CHANGE_PAGE_REQUEST",p="DELETE_PAGE_REQUEST",O="CREATE_PAGE_REQUEST",g="CREATE_PAGE_SUCCESS",v="DRAGGABLE_BLOCK",A="GET_PAGES_REQUEST",m="GET_PAGES_SUCCESS",x="FOCUS_BLOCK",C="CHANGE_PAGE_TITLE_REQUEST",k="CHANGE_PAGE_TITLE_SUCCESS",B={title:"Untitled",content:[{data:""}]},E={focusBlockId:null},_=n(8),w=n.n(_),y=n(9),N=n(50),I=["id"],S=w.a.mark(T),P=w.a.mark(D),L=function(e){var t=e.id,n=Object(N.a)(e,I);return fetch("".concat(j,"/pages/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(Object(h.a)({},n))}).then((function(e){return e.json()}))};function T(e){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(y.b)(L,e.payload);case 2:if(t=n.sent,e.type!==C){n.next=6;break}return n.next=6,Object(y.c)({type:k,payload:t});case 6:case"end":return n.stop()}}),S)}function D(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)(b,T);case 2:return e.next=4,Object(y.d)(C,T);case 4:case"end":return e.stop()}}),P)}var R=w.a.mark(V),U=w.a.mark(H),M=function(e){return fetch("".concat(j,"/pages/").concat(e),{method:"DELETE"})};function V(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.b)(M,e.payload);case 2:case"end":return t.stop()}}),R)}function H(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)(p,V);case 2:case"end":return e.stop()}}),U)}var G=w.a.mark(z),F=w.a.mark(X),Q=function(e){return fetch("".concat(j,"/pages"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json()}))};function z(e){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(y.b)(Q,e.payload);case 2:return t=n.sent,n.next=5,Object(y.c)((c=t.page,{type:g,payload:c}));case 5:case"end":return n.stop()}var c}),G)}function X(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)(O,z);case 2:case"end":return e.stop()}}),F)}var Y=w.a.mark(Z),K=w.a.mark(J),q=function(){return fetch("".concat(j,"/pages")).then((function(e){return e.json()}))};function Z(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.b)(q);case 2:return e=t.sent,t.next=5,Object(y.c)({type:m,payload:e});case 5:case"end":return t.stop()}}),Y)}function J(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)(A,Z);case 2:case"end":return e.stop()}}),K)}var W=w.a.mark($);function $(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([Object(y.b)(D),Object(y.b)(H),Object(y.b)(X),Object(y.b)(J)]);case 2:case"end":return e.stop()}}),W)}var ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.b,te=Object(d.a)(),ne=Object(u.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(h.a)(Object(h.a)({},e),{},{focusBlockId:t.payload});case p:return Object(h.a)(Object(h.a)({},e),{},{pages:e.pages.filter((function(e){return e.id!==t.payload}))});case g:return Object(h.a)(Object(h.a)({},e),{},{pages:[].concat(Object(l.a)(e.pages),[t.payload])});case m:return Object(h.a)(Object(h.a)({},e),{},{pages:t.payload});case k:return Object(h.a)(Object(h.a)({},e),{},{pages:e.pages.map((function(e){return e.id===t.payload.id?t.payload:e}))});default:return e}}),ee(Object(u.a)(te)));te.run($);var ce=ne,ae=n(17),re=n(10),oe=n(37),ie=n.n(oe),se=n(85),ue=(n(62),n(2)),de=function(e){var t=e.value,n=e.onChange,c=e.placeholder,a=e.className;return Object(ue.jsxs)("div",{className:"search ".concat(a||""),children:[Object(ue.jsx)("svg",{className:"search_icon",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(ue.jsx)("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",fill:"#E9E8E5"})}),Object(ue.jsx)("input",{className:"search__input",type:"text",value:t,onChange:n,placeholder:c})]})},le=(n(64),function(e){var t=e.handleMenu,n=Object(c.useState)(""),a=Object(ae.a)(n,2),r=a[0],o=a[1];return Object(ue.jsxs)("header",{className:"header",children:[Object(ue.jsxs)(i.b,{to:"/",className:"header__logo",children:[Object(ue.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgB7ZQ9CsJAEEa/MZEUW6URPYIQsBY8iI338CrewjuIhak8gJZRIWAIIRAMZB0vMK6Qn8J5kFQPHgu7H6EDbJ5f4fsTUYrjkNBFvCjuIJqKkjHjEQZE4xr/n/igOI+MzbIFgmAtS/ZExuzhiO8q8lzO0TRbyPEd/53jets1rvFecH/nnndEXW++WBf8ANk0nfGABKKVJDeKohdahmxZHniZVoJT8YmXFIZntIzedo1rvBc+C/fk7yE4FY9QjQ54A4dvL3W0YQdYAAAAAElFTkSuQmCC",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(ue.jsx)("h1",{className:"header__logo-text",children:"RC.APP"})]}),Object(ue.jsx)(de,{value:r,onChange:function(e){o(e.target.value)},className:"header__search"}),Object(ue.jsx)("div",{children:Object(ue.jsx)("svg",{className:"header_icon",viewBox:"0 0 14 14",onClick:t,children:Object(ue.jsx)("path",{d:"M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z"})})})]})}),he=(n(68),function(e){var t=e.pages,n=e.children,a=e.onDeletePage,r=e.onCreatePage,o=Object(c.useState)((function(){return!1})),s=Object(ae.a)(o,2),u=s[0],d=s[1];return Object(ue.jsxs)("div",{className:"layout",children:[Object(ue.jsx)(le,{handleMenu:function(){d(!u)}}),Object(ue.jsxs)("div",{className:"layout__body",children:[Object(ue.jsxs)("div",{className:"menu".concat(u?" menu_active":""),children:[Object(ue.jsxs)("div",{className:"client-info",children:[Object(ue.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOZSURBVHgB1Vm7UttAFL2SDbTOF4R8AZqBoUV8AeQLwAUzPAr0B9hfEKvhMRSQLh1QZVJFdJmBIeILcLp0EaUB2zlHWXlkRcbG8mN1ZjS7Xq21R1d3796HIRmxtbVlFYtF2zCMBVxWu90uYXg+NiXAuI/xANf1y8uLd3p66ksGGDIEtre3503T3EDXISlcV61Wy282m36hUAiOj4/r8blo5kGcL7OOdkXd8vCfanzuWEiTAEidQWIWfrrPz8+Xw0iNzwH5inqBN5MfiLTjOKWnp6d9+SdZd3Z2tgYEMgLs7Ow4IM9nnx8eHlYH+U9f0koVvkO6/tzcXHlUZJNrRJKH1Ff7Sd3o8zAbhKkO7tHRUU3GDCX1A6xXxnqXveYVet3Y29vbwANq0NuPJycnPR8wStze3v6wLOsb983y8nJwc3NznzYvVdJ4Y+7yT4N8qnEgUkmsX8b6XvK+0eMPPyHh1az2NAto/2dmZi7SBGcmJ6tNV50mYYLrcy+RD61X/F4X6d3d3QM03iQ23SAgD1otmFsnPt4hrU6uTRp60Qg0s2j2Fb8QHdL4DDQ17jQ23mtQ54ILw3AWjYWk1VvYuqhFEjyB6YxF0g5JU8poPNEUkbTBc5O/I/WwddPlFPCAo48iBiwGPbYLOCsfRHOA6wNPaBObzxaNVSOBKwYcJj0rEL+SHICBBiMkki4xFJIcABuRp7RF9bDgVT1IDgBJU7glKndbcgTyNSWHyC3pOqKU95IDqGM8oPUI4Pq9k3yAAbBvYkfeI0KwJAegeUZC6LGIfmj7JAcA6TU0HtXDQ2dN8gGbucCwB9v3h4GkaAxuQjpM7Ecmz4Ver4vGiPv8IWlsxnM0+8moVzN0fP6QNOPCtKhXF0At6Px7UfzaORGZPxMNpa0OFCceWXVIq7dwG43GmWgEpcuf41mCLt8jinqZvRQNoNTCRihYiY93kWbUy9wZk9zTNoFq/Qr5JO/95+XxMzBbyeRfPKszSXBdrs99lpY8Ss1PI09cX1xcfGRCHfni67u7u98yIahq2Vd0q0gefUmb0zOpDuL+0tLSL4RiF2gbTHjLmEEdxno1funXKgED11wkQwmtH2hmabVoBDLXXOKAFCpoNkZZfxm2avbmOmKW+l8EleWnZ8nCEIum5ZHXEZNIkCc8JnxU/qSerNiCVAm6ylTFAubQMeOp69LnGXvFNg2x2viKSvxYilSEOkM6+ja47kdRG/8L0F0HRlf+BWcAAAAASUVORK5CYII=",alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(ue.jsxs)("div",{className:"client-info__body",children:[Object(ue.jsx)("p",{className:"client-info__name",children:"\u041a\u043b\u0438\u0435\u043d\u0442 \u041a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"}),Object(ue.jsx)("p",{children:"\u0414\u043e\u043c\u0435\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u0430"})]})]}),Object(ue.jsxs)("div",{className:"menu__pages",children:[Object(ue.jsx)("div",{children:t.map((function(e){return Object(ue.jsxs)(i.c,{to:"/".concat(e.id),className:"menu_link",activeClassName:"menu_link-hovered",children:[Object(ue.jsxs)("div",{className:"menu_link-content",children:[Object(ue.jsx)("svg",{viewBox:"0 0 30 30",className:"menu_icon",children:Object(ue.jsx)("g",{children:Object(ue.jsx)("path",{d:"M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"})})}),Object(ue.jsx)("div",{className:"menu_link-content-text",children:e.title})]}),Object(ue.jsx)("div",{className:"layout_row",children:Object(ue.jsx)("svg",{onClick:function(t){return function(e,t){e.preventDefault(),a(t)}(t,e.id)},viewBox:"0 0 30 30",className:"menu_hidden-icon",children:Object(ue.jsx)("path",{d:"M21,5c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4H2v2h2v22h22V7h2V5H21z M13,3h4c1.104,0,2,0.897,2,2h-8C11,3.897,11.897,3,13,3zM24,27H6V7h18V27z M16,11h-2v12h2V11z M20,11h-2v12h2V11z M12,11h-2v12h2V11z"})})})]},e.id)}))}),Object(ue.jsxs)("div",{className:"layout__new-page",onClick:r,children:[Object(ue.jsx)("svg",{viewBox:"0 0 16 16",className:"layout__new-page-icon",children:Object(ue.jsx)("path",{d:"M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"})}),Object(ue.jsx)("p",{children:"New page"})]})]})]}),Object(ue.jsx)("div",{className:"layout__content".concat(u?" layout_bg-dark":""),children:n})]})]})}),fe=n(82),je=n(46),be=n(47),pe=n(44),Oe=n.n(pe),ge=(n(69),function(e){var t=e.value,n=e.onChange,c=e.className,a=e.onKeyDown,r=e.fieldRef;return Object(ue.jsx)(Oe.a,{ref:r,html:t,onChange:n,onKeyDown:a,className:"field ".concat(c||"")})}),ve=n(83),Ae=(n(70),function(e){var t=e.handleChangeBlockPosition,n=e.exceptions,c=Object(ve.a)((function(){return{accept:v,canDrop:function(e){var t=e.draggableBlockId;return-1===n.indexOf(t)},drop:function(e){var n=e.draggableBlockId;return t(n)},collect:function(e){return{isOver:!!e.isOver()}}}}),[t]),a=Object(ae.a)(c,2),r=a[0].isOver,o=a[1];return Object(ue.jsx)("div",{ref:o,className:"drop-area".concat(r?" drop-area_over":"")})}),me=n(84),xe=(n(71),function(e){var t=e.block,n=e.onChangeBlock,a=e.onCreateBlock,r=e.isFocusing,o=e.onDeleteBlock,i=Object(c.useRef)(t.data),s=Object(c.useRef)(),u=Object(me.a)((function(){return{type:v,item:{draggableBlockId:t.id},collect:function(e){return{isDragging:!!e.isDragging()}}}})),d=Object(ae.a)(u,3),l=d[0].isDragging,h=d[1],f=d[2];return Object(c.useEffect)((function(){r&&s.current.el.current.focus()}),[r]),Object(ue.jsxs)("div",{className:"block",ref:f,children:[!l&&Object(ue.jsxs)("div",{className:"block__handlers-group",children:[Object(ue.jsx)("span",{className:"block_plus",onClick:function(){a(t,{data:""})},children:"+"}),Object(ue.jsx)("span",{ref:h,className:"block_drag",children:"::"})]}),Object(ue.jsx)(ge,{value:i.current,onChange:function(e){var c=e.target.value;i.current=c,n(t.id,c)},onKeyDown:function(e){var n=window.getSelection();switch(e.key){case"Enter":if(!e.shiftKey&&!e.ctrlKey){e.preventDefault();var c=i.current.slice(n.baseOffset),r=i.current.replace(c,"");a({id:t.id,data:r},{data:c})}break;case"Backspace":0===i.current.length&&o(t.id)}},fieldRef:s})]})}),Ce=(n(72),function(e){var t=e.content,n=e.onDeleteBlock,c=e.onCreateBlock,r=e.onChangeBlock,o=e.onChangeBlockPosition,i=e.focusBlockId;return Object(ue.jsx)("div",{className:"column-content",children:t.map((function(e,s){var u,d=null===(u=t[s+1])||void 0===u?void 0:u.id,l=e.id;return void 0!==d&&(l="".concat(e.id,"-").concat(d)),Object(ue.jsxs)(a.a.Fragment,{children:[0===s&&Object(ue.jsx)(Ae,{handleChangeBlockPosition:function(t){return o(t,null,e.id)},exceptions:[e.id]}),Object(ue.jsx)(xe,{block:e,onCreateBlock:c,onDeleteBlock:n,onChangeBlock:r,isFocusing:i===e.id}),Object(ue.jsx)(Ae,{handleChangeBlockPosition:function(t){return o(t,e.id)},exceptions:[e.id,d]})]},l)}))})}),ke=(n(73),function(e){var t=e.page,n=e.handleChangePage,a=e.handleCreateBlock,r=e.focusBlockId,o=e.handleFocusBlock,i=e.handleChangeTitle,s=e.debouncedOnChangePage,u=Object(c.useState)(window.innerWidth<568),d=Object(ae.a)(u,1)[0],l=Object(c.useCallback)((function(e){"Enter"===e.key&&(e.preventDefault(),n((function(e){var t=e.content[0].id;return o(t),e})))}),[]);return Object(ue.jsxs)("div",{className:"page",children:[Object(ue.jsx)("header",{className:"page__header",children:Object(ue.jsx)(ge,{className:"field_heading",isHeading:!0,value:t.title,onKeyDown:l,onChange:i})}),Object(ue.jsx)(fe.a,{backend:d?be.a:je.a,children:Object(ue.jsx)(Ce,{content:t.content,onDeleteBlock:function(e){n((function(t){if(t.content.length>1){var n=t.content.find((function(t){return t.id===e})),c=t.content.indexOf(n),a=Object(h.a)(Object(h.a)({},t),{},{content:t.content.filter((function(t){return t.id!==e}))});return o(t.content[c-1].id),s(a),a}return t}))},onCreateBlock:a,onChangeBlock:function(e,t){return n((function(n){var c=Object(h.a)(Object(h.a)({},n),{},{content:n.content.map((function(n){return n.id===e?Object(h.a)(Object(h.a)({},n),{},{data:t}):n}))});return s(c),c}))},onChangeBlockPosition:function(e,t,c){n((function(n){var a=n.content.find((function(t){return t.id===e})),r=Object(h.a)(Object(h.a)({},n),{},{content:n.content.filter((function(t){return t.id!==e})).map((function(e){return c&&e.id===c?[a,e]:t&&e.id===t?[e,a]:e})).flat()});return s(r),r}))},focusBlockId:r})})]})}),Be=Object(s.b)((function(e){return{pages:e.pages,focusBlockId:e.focusBlockId}}),(function(e){return{handleChangePage:function(t){return e(function(e){return{type:b,payload:e}}(t))},handleGetPages:function(){return e({type:A})},handleDeletePage:function(t){return e(function(e){return{type:p,payload:e}}(t))},handleCreatePage:function(t){return e(function(e){return{type:O,payload:e}}(t))},handleFocusBlock:function(t){return e(function(e){return{type:x,payload:e}}(t))},handleChangePageTitle:function(t){return e(function(e){return{type:C,payload:e}}(t))}}}))((function(e){var t,n=e.pages,a=e.focusBlockId,r=e.handleChangePage,o=e.handleGetPages,i=e.handleDeletePage,s=e.handleCreatePage,u=e.handleFocusBlock,d=e.handleChangePageTitle,l=Object(re.g)(),f=Object(re.h)("/:pageId"),j=null===f||void 0===f||null===(t=f.params)||void 0===t?void 0:t.pageId,b=Object(c.useState)(),p=Object(ae.a)(b,2),O=p[0],g=p[1];Object(c.useEffect)((function(){if(j&&n){var e=n.find((function(e){return e.id===j}));e?g(e):0!==n.length&&l.push("/".concat(n[0].id))}}),[j,n]),Object(c.useEffect)((function(){o()}),[]);var v=Object(c.useCallback)((function(e){i(e),f.params.currentPageId===e&&0!==n.length&&l.push("/".concat(n[0].id))}),[n,null===f||void 0===f?void 0:f.params]),A=Object(c.useCallback)((function(){return s(B)}),[]),m=Object(c.useCallback)(ie()(r,2500),[]),x=Object(c.useCallback)(ie()(d,2500),[]),C=Object(c.useCallback)((function(e,t){var n=Object(se.a)();u(n),g((function(c){var a=Object(h.a)(Object(h.a)({},c),{},{content:c.content.map((function(c){return c.id===e.id?[e,Object(h.a)(Object(h.a)({},t),{},{id:n})]:c})).flat()});return m(a),a}))}),[m]);return n?Object(ue.jsx)(he,{pages:n,onDeletePage:v,onCreatePage:A,children:0!==n.length?Object(ue.jsxs)(re.d,{children:[Object(ue.jsx)(re.b,{exact:!0,path:"/",children:Object(ue.jsx)(re.a,{to:"/".concat(n[0].id)})}),Object(ue.jsx)(re.b,{path:"/:pageId",children:O&&Object(ue.jsx)(ke,{page:O,focusBlockId:a,handleFocusBlock:u,handleChangeTitle:function(e){g((function(t){var n=Object(h.a)(Object(h.a)({},t),{},{title:e.target.value});return x(n),n}))},handleChangePage:g,handleCreateBlock:C,debouncedOnChangePage:m})})]}):Object(ue.jsx)("p",{children:"No pages"})}):null})),Ee=n(45);function _e(){this.guid="",this.reqid="",this.page="",this.additional={},this._inited=!1,this._indexes={},this._countersBatchData=[],this._counterTimerId=null,this.counterUrl="https://shri.yandex/hw/stat/send"}_e.prototype.init=function(e,t,n){e&&t&&n&&(this.guid=e,this.reqid=t,this.page=n,this._inited=!0)},_e.prototype.setAdditionalParams=function(e){this.additional=Object.assign({},e)},_e.prototype.send=function(e,t){if(this._inited){clearTimeout(this._counterTimerId),this._indexes[e]||(this._indexes[e]=0);var n={counterId:this.guid,requestId:this.reqid,page:this.page,name:e,value:t,index:this._indexes[e],additional:this.additional},c=this;this._countersBatchData.push(n),this._indexes[e]++,this._countersBatchData.length<42?this._counterTimerId=setTimeout((function(){c.sendBatchRequest()}),15):c.sendBatchRequest()}else console.warn("counter is not inited")},_e.prototype.sendBatchRequest=function(){var e=JSON.stringify(this._countersBatchData);if(this._countersBatchData=[],this._counterTimerId=null,!(navigator.sendBeacon&&navigator.sendBeacon(this.counterUrl,new Blob([e],{type:"application/json"})))){var t=new XMLHttpRequest;t.open("POST",this.counterUrl),t.send(e)}};var we=_e,ye=function(e){var t=new we;t.init(f,String(Math.random()).substr(2,12),"Start page"),function(e,t){var n=Date.now();t(),requestAnimationFrame((function(){e.send("render",Date.now()-n)}))}(t,e),setTimeout((function(){!function(e){var t,n=performance.getEntriesByType("resource"),c=Object(Ee.a)(n);try{for(c.s();!(t=c.n()).done;){var a=t.value;a.name==="".concat(j,"/pages")&&(e.send("connect",a.connectEnd-a.connectStart),e.send("ttfb",a.responseEnd-a.requestStart),e.send("dns",a.domainLookupEnd-a.domainLookupStart))}}catch(r){c.e(r)}finally{c.f()}}(t)}),1e3*Math.random()+500)},Ne=function(e,t){var n=e.sort((function(e,t){return e-t})),c=(n.length-1)*t,a=Math.floor(c),r=c-a;return void 0!==n[a+1]?Math.floor(n[a]+r*(n[a+1]-n[a])):Math.floor(n[a])},Ie=function(e){var t={};return t.hits=e.length,t.p25=Ne(e,.25),t.p50=Ne(e,.5),t.p75=Ne(e,.75),t.p95=Ne(e,.95),t},Se=function(e,t){return e.filter((function(e){return e.name===t})).map((function(e){return e.value}))},Pe=function(e){var t={},n=Se(e,"connect"),c=Se(e,"ttfb"),a=Se(e,"dns"),r=Se(e,"render");t.connect=Ie(n),t.ttfb=Ie(c),t.dns=Ie(a),t.render=Ie(r),console.table(t)},Le=function(e,t,n){console.log("All metrics for ".concat(n,":"));var c=e.filter((function(e){return e.page===t&&e.date===n}));Pe(c)};n(74),n(75);ye((function(){return o.a.render(Object(ue.jsx)(i.a,{children:Object(ue.jsx)(s.a,{store:ce,children:Object(ue.jsx)(Be,{})})}),document.getElementById("root"))})),fetch("https://shri.yandex/hw/stat/data?counterId=".concat(f)).then((function(e){return e.json()})).then((function(e){var t=function(e){return e.data.map((function(e){return e.date=e.timestamp.split("T")[0],e}))}(e),n=t.filter((function(e){return"382773058991"===e.requestId})),c=t.filter((function(e){return"897758255011"===e.requestId}));Le(t,"Start page","2021-10-30"),function(e,t,n,c){for(var a=new Date(n),r=(new Date(c)-a)/864e5,o=0;o<r;o++){a.setDate(a.getDate()+o+1);var i=a.toLocaleString().replace(/,.*/,"").split(".").reverse().join("-");Le(e,t,i)}}(t,"Start page","2021-10-29","2021-10-30"),function(e,t,n){console.log("All metrics for ".concat(t,":"));var c=e.filter((function(e){return e.requestId===t&&e.date===n}));Pe(c)}(t,"382773058991","2021-10-30"),function(e,t,n){console.log("Compared metrics for ".concat(n,":"));var c=Se(e,n),a=Se(t,n),r={};r.first=Ie(c),r.second=Ie(a),console.table(r)}(n,c,"render")}))}},[[76,1,2]]]);
//# sourceMappingURL=main.92942c74.chunk.js.map