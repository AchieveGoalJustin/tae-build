import{c as C}from"./index-7d534c50.js";import{R as I,T as P,B as m}from"./index-046e7f35.js";const n={$(t){return typeof t=="string"?document.querySelector(t):t},extend(...t){return Object.assign(...t)},cumulativeOffset(t){let o=0,e=0;do o+=t.offsetTop||0,e+=t.offsetLeft||0,t=t.offsetParent;while(t);return{top:o,left:e}},directScroll(t){return t&&t!==document&&t!==document.body},scrollTop(t,o){let e=o!==void 0;return this.directScroll(t)?e?t.scrollTop=o:t.scrollTop:e?document.documentElement.scrollTop=document.body.scrollTop=o:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(t,o){let e=o!==void 0;return this.directScroll(t)?e?t.scrollLeft=o:t.scrollLeft:e?document.documentElement.scrollLeft=document.body.scrollLeft=o:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},R={container:"body",duration:500,delay:0,offset:0,easing:C,onStart:m,onDone:m,onAborting:m,scrollX:!1,scrollY:!0},X=t=>{let{offset:o,duration:e,delay:T,easing:x,x:c=0,y:f=0,scrollX:w,scrollY:E,onStart:_,onDone:h,container:s,onAborting:$,element:l}=t;typeof o=="function"&&(o=o());var y=n.cumulativeOffset(s),g=l?n.cumulativeOffset(l):{top:f,left:c},L=n.scrollLeft(s),O=n.scrollTop(s),A=g.left-y.left+o,D=g.top-y.top+o,j=A-L,k=D-O;let b=!0,i=!1,u=I()+T,q=u+e;function B(r,d,p){w&&n.scrollLeft(r,p),E&&n.scrollTop(r,d)}function v(r){r||(i=!0,_(l,{x:c,y:f}))}function a(r){B(s,O+k*r,L+j*r)}function S(){b=!1}return P(r=>{if(!i&&r>=u&&v(!1),i&&r>=q&&(a(1),S(),h(l,{x:c,y:f})),!b)return $(l,{x:c,y:f}),!1;if(i){const d=r-u,p=0+1*x(d/e);a(p)}return!0}),v(T),a(0),S},Y=t=>{let o=n.extend({},R,t);return o.container=n.$(o.container),o.element=n.$(o.element),o},G=t=>X(Y(t)),H=t=>(t=Y(t),X(n.extend(t,{element:null,y:0})));export{H as a,G as s};
