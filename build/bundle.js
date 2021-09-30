var app=function(){"use strict";function e(){}function t(e){return e()}function i(){return Object.create(null)}function a(e){e.forEach(t)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let n,l=!1;function r(e,t,i,a){for(;e<t;){const s=e+(t-e>>1);i(s)<=a?e=s+1:t=s}return e}function c(e,t){l?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,i=new Int32Array(t.length+1),a=new Int32Array(t.length);i[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=r(1,s+1,(e=>t[i[e]].claim_order),t[e].claim_order)-1;a[e]=i[o]+1;const n=o+1;i[n]=e,s=Math.max(n,s)}const o=[],n=[];let l=t.length-1;for(let e=i[s]+1;0!=e;e=a[e-1]){for(o.push(t[e-1]);l>=e;l--)n.push(t[l]);l--}for(;l>=0;l--)n.push(t[l]);o.reverse(),n.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,i=0;t<n.length;t++){for(;i<o.length&&n[t].claim_order>=o[i].claim_order;)i++;const a=i<o.length?o[i]:null;e.insertBefore(n[t],a)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function d(e,t,i){l&&!i?c(e,t):(t.parentNode!==e||i&&t.nextSibling!==i)&&e.insertBefore(t,i||null)}function f(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function m(){return u(" ")}function g(e,t,i){null==i?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function h(e){n=e}const v=[],b=[],x=[],y=[],w=Promise.resolve();let $=!1;function k(e){x.push(e)}let _=!1;const P=new Set;function A(){if(!_){_=!0;do{for(let e=0;e<v.length;e+=1){const t=v[e];h(t),S(t.$$)}for(h(null),v.length=0;b.length;)b.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];P.has(t)||(P.add(t),t())}x.length=0}while(v.length);for(;y.length;)y.pop()();$=!1,_=!1,P.clear()}}function S(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const j=new Set;function I(e,t){e&&e.i&&(j.delete(e),e.i(t))}function M(e,t,i,a){if(e&&e.o){if(j.has(e))return;j.add(e),undefined.c.push((()=>{j.delete(e),a&&(i&&e.d(1),a())})),e.o(t)}}function C(e){e&&e.c()}function L(e,i,o,n){const{fragment:l,on_mount:r,on_destroy:c,after_update:d}=e.$$;l&&l.m(i,o),n||k((()=>{const i=r.map(t).filter(s);c?c.push(...i):a(i),e.$$.on_mount=[]})),d.forEach(k)}function T(e,t){const i=e.$$;null!==i.fragment&&(a(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function z(e,t){-1===e.$$.dirty[0]&&(v.push(e),$||($=!0,w.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(t,s,o,r,c,d,p=[-1]){const u=n;h(t);const m=t.$$={fragment:null,ctx:null,props:d,update:e,not_equal:c,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:s.context||[]),callbacks:i(),dirty:p,skip_bound:!1};let g=!1;if(m.ctx=o?o(t,s.props||{},((e,i,...a)=>{const s=a.length?a[0]:i;return m.ctx&&c(m.ctx[e],m.ctx[e]=s)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](s),g&&z(t,e)),i})):[],m.update(),g=!0,a(m.before_update),m.fragment=!!r&&r(m.ctx),s.target){if(s.hydrate){l=!0;const e=function(e){return Array.from(e.childNodes)}(s.target);m.fragment&&m.fragment.l(e),e.forEach(f)}else m.fragment&&m.fragment.c();s.intro&&I(t.$$.fragment),L(t,s.target,s.anchor,s.customElement),l=!1,A()}h(u)}class E{$destroy(){T(this,1),this.$destroy=e}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function N(t){let i,a,s,o,n,l,r,h,v,b,x,y,w,$,k,_,P,A,S,j,I,M,C,L,T,z,D,E,N,H,F,B,G,q,R;return{c(){i=p("section"),a=p("div"),s=p("div"),s.innerHTML="<h2>About</h2> \n      <p>I am an entusiastic, self-motivated, reliable, responsible and hard\n        working person. I am able to work wll both in a team environment as well\n        as using own initiative. I am able to work under pressure and adhere to\n        strict deadlines.</p>",o=m(),n=p("div"),l=p("div"),l.innerHTML='<img src="/iPortfolio/assets/img/profile.jpg" class="img-fluid" alt=""/>',r=m(),h=p("div"),v=p("h3"),v.textContent="Back-End Engineer & Web Developer.",b=m(),x=p("p"),x.textContent="A little about me, I was born and raised in Indonesia. Now I am still\r\n          living in Indonesia and have completed my bachelor's degree at the end\r\n          of 2020.",y=m(),w=p("div"),$=p("div"),k=p("ul"),_=p("li"),P=p("i"),A=m(),S=p("strong"),S.textContent="Birthday:",j=m(),I=p("span"),M=u(t[0]),C=m(),L=p("li"),T=p("i"),z=m(),D=p("strong"),D.textContent="Age:",E=m(),N=p("span"),N.textContent=`${t[1]}`,H=m(),F=p("li"),F.innerHTML='<i class="bi bi-chevron-right"></i>  <strong>City:</strong> \n                <span>Aceh Tamiang, Indonesia</span>',B=m(),G=p("div"),G.innerHTML='<ul><li><i class="bi bi-chevron-right"></i>  <strong>Degree:</strong> \n                <span>Bachelor</span></li> \n              <li><i class="bi bi-chevron-right"></i>  <strong>Freelance:</strong> \n                <span>Available</span></li></ul>',q=m(),R=p("p"),R.textContent="In my spare time I like to learn new things, experimenting with\r\n          personal projects and the thing that makes me satisfied is when I find\r\n          a problem, I write code to solve it and my code solves the problem and\r\n          turns out I find some other solutions to solve the same problem. And\r\n          that satisfaction makes me eager to learn.",g(s,"class","section-title"),g(l,"class","col-lg-4"),g(l,"data-aos","fade-right"),g(x,"class","fst-italic"),g(P,"class","bi bi-chevron-right"),g(T,"class","bi bi-chevron-right"),g($,"class","col-lg-6"),g(G,"class","col-lg-6"),g(w,"class","row"),g(h,"class","col-lg-8 pt-4 pt-lg-0 content"),g(h,"data-aos","fade-left"),g(n,"class","row"),g(a,"class","container"),g(i,"id","about"),g(i,"class","about")},m(e,t){d(e,i,t),c(i,a),c(a,s),c(a,o),c(a,n),c(n,l),c(n,r),c(n,h),c(h,v),c(h,b),c(h,x),c(h,y),c(h,w),c(w,$),c($,k),c(k,_),c(_,P),c(_,A),c(_,S),c(_,j),c(_,I),c(I,M),c(k,C),c(k,L),c(L,T),c(L,z),c(L,D),c(L,E),c(L,N),c(k,H),c(k,F),c(w,B),c(w,G),c(h,q),c(h,R)},p(e,[t]){1&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(M,e[0])},i:e,o:e,d(e){e&&f(i)}}}function H(e,t,i){var a=new Date(1998,6,11);const s=a.getDate(),o=a.toLocaleString("default",{month:"long"}),n=a.getFullYear();return[a=s+" "+o+" "+n,function(e){var t=new Date,i=t.getFullYear()-e.getFullYear(),a=t.getMonth()-e.getMonth();return(a<0||0===a&&t.getDate()<e.getDate())&&i--,i}(new Date(a))]}class F extends E{constructor(e){super(),D(this,e,H,N,o,{})}}function B(t){let i;return{c(){i=p("section"),i.innerHTML='<div class="container"><div class="section-title"><h2>Resume</h2></div> \n\n    <div class="row"><div class="col-lg-6" data-aos="fade-up"><h3 class="resume-title">Sumary</h3> \n        <div class="resume-item pb-0"><h4>Safrijul Fahreza</h4> \n          <p><em>Deadline-driven Web Developer with 1+ year experience</em></p> \n          <ul><li>Aceh, Indonesia</li> \n            <li>safrijulfahreza@gmail.com</li></ul></div> \n\n        <h3 class="resume-title">Education</h3> \n        <div class="resume-item"><h4>Bachelor of Applied Computer</h4> \n          <h5>2016 - 2020</h5> \n          <p><em>Lhokseumawe State Polytechnic, Lhokseumawe, Indonesia</em></p> \n          <p>I was started my study in 2016 at Lhokseumawe State Polytechnic\n            majoring Information Technology and Computer with study program\n            Informatic Engineering, and I am also active in Departmental Student\n            Association</p></div></div> \n      <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100"><h3 class="resume-title">Work Experience</h3> \n        <div class="resume-item"><h4>Programmer - Intern</h4> \n          <h5>Juli - August</h5> \n          <p><em>PT. Telkom Akses, Medan, Indonesia</em></p> \n          <ul><li>Develop a web app to help other employees to manage incoming\n              report form customer about technical issue from their product.</li> \n            <li>Check income data for repairing process by Technician.</li></ul></div></div></div></div>',g(i,"id","resume"),g(i,"class","resume")},m(e,t){d(e,i,t)},p:e,i:e,o:e,d(e){e&&f(i)}}}class G extends E{constructor(e){super(),D(this,e,null,B,o,{})}}function q(t){let i;return{c(){i=p("section"),i.innerHTML='<div class="container"><div class="section-title"><h2>Portfolio</h2> \n      <p>The following is some project that I have worked on and deployed</p></div> \n\n    <div class="row" data-aos="fade-up"><div class="col-lg-12 d-flex justify-content-center"><ul id="portfolio-flters"><li data-filter="*" class="filter-active">All</li> \n          <li data-filter=".filter-web">Web</li> \n          <li data-filter=".filter-app">Mobile App</li></ul></div></div> \n\n    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100"><div class="col-lg-4 col-md-6 portfolio-item filter-web"><div class="portfolio-wrap"><img src="/iPortfolio/assets/img/ss/Staycations1.png" class="img-fluid" alt=""/> \n          <div class="portfolio-links"><a href="/iPortfolio/assets/img/ss/Staycations1.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="An online hotel or villa reservation using MERN Stack."><i class="bx bx-plus"></i></a></div></div></div> \n\n      <div class="col-lg-4 col-md-6 portfolio-item filter-web"><div class="portfolio-wrap"><img src="/iPortfolio/assets/img/ss/Staycations2.png" class="img-fluid" alt=""/> \n          <div class="portfolio-links"><a href="/iPortfolio/assets/img/ss/Staycations2.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="This web is build using ReactJS"><i class="bx bx-plus"></i></a></div></div></div> \n\n      <div class="col-lg-4 col-md-6 portfolio-item filter-web"><div class="portfolio-wrap"><img src="/iPortfolio/assets/img/ss/Staycations Admin.png" class="img-fluid" alt=""/> \n          <div class="portfolio-links"><a href="/iPortfolio/assets/img/ss/Staycations Admin.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Server side CMS for admin and also provide api for frontend (Staycation) using Express."><i class="bx bx-plus"></i></a></div></div></div> \n\n      <div class="col-lg-4 col-md-6 portfolio-item filter-web"><div class="portfolio-wrap"><img src="/iPortfolio/assets/img/ss/Naez.png" class="img-fluid" alt=""/> \n          <div class="portfolio-links"><a href="/iPortfolio/assets/img/ss/Naez.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="A simple server side rendering web for online games top up."><i class="bx bx-plus"></i></a></div></div></div> \n\n      <div class="col-lg-4 col-md-6 portfolio-item filter-web"><div class="portfolio-wrap"><img src="/iPortfolio/assets/img/ss/Naez1.png" class="img-fluid" alt=""/> \n          <div class="portfolio-links"><a href="/iPortfolio/assets/img/ss/Naez1.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="CMS for admin to manage data, other users and provide api for some operations, I personally prefer fetching api in vanilla JS rather than using Ajax."><i class="bx bx-plus"></i></a></div></div></div> \n\n      <div class="col-lg-4 col-md-6 portfolio-item filter-web"><div class="portfolio-wrap"><img src="/iPortfolio/assets/img/ss/Naez2.png" class="img-fluid" alt=""/> \n          <div class="portfolio-links"><a href="/iPortfolio/assets/img/ss/Naez2.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Registrastion form for new reseller and protected with google recaptha v3 to prevent spam."><i class="bx bx-plus"></i></a></div></div></div> \n\n      <div class="col-lg-4 col-md-6 portfolio-item filter-app"><div class="portfolio-wrap"><img src="/iPortfolio/assets/img/ss/Literasi(Crop).jpg" class="img-fluid" alt=""/> \n          <div class="portfolio-links"><a href="/iPortfolio/assets/img/ss/Literasi.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="A native android app with simple authentications and registration features."><i class="bx bx-plus"></i></a></div></div></div> \n\n      <div class="col-lg-4 col-md-6 portfolio-item filter-app"><div class="portfolio-wrap"><img src="/iPortfolio/assets/img/ss/Literasi1(Crop).jpg" class="img-fluid" alt=""/> \n          <div class="portfolio-links"><a href="/iPortfolio/assets/img/ss/Literasi1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="After login view, and connect to the api from backend build with PHP"><i class="bx bx-plus"></i></a></div></div></div> \n\n      <div class="col-lg-4 col-md-6 portfolio-item filter-app"><div class="portfolio-wrap"><img src="/iPortfolio/assets/img/ss/Literasi2(Crop).jpg" class="img-fluid" alt=""/> \n          <div class="portfolio-links"><a href="/iPortfolio/assets/img/ss/Literasi2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Simple serve data using webview to answer my curiosity"><i class="bx bx-plus"></i></a></div></div></div></div></div>',g(i,"id","portfolio"),g(i,"class","portfolio section-bg")},m(e,t){d(e,i,t)},p:e,i:e,o:e,d(e){e&&f(i)}}}class R extends E{constructor(e){super(),D(this,e,null,q,o,{})}}function Y(t){let i;return{c(){i=p("section"),i.innerHTML='<div class="container"><div class="section-title"><h2>Contact</h2> \n      <p>Have a question? feel free to contact me.</p></div> \n\n    <div class="row" data-aos="fade-in"><div class="col mt-5 mt-lg-0 align-items-stretch"><form role="form" action="https://script.google.com/macros/s/AKfycbx0asgPU7qZai8J9FFOYPSpvg2veMzRlyemAke5F4Gj2va-JwDNMpDAq7Bu_uzRhSKH4Q/exec" method="post" class="php-email-form"><div class="row"><div class="form-group col-md-6"><label for="name">Your Name</label> \n              <input type="text" name="name" class="form-control" id="name" required=""/></div> \n            <div class="form-group col-md-6"><label for="name">Your Email</label> \n              <input type="email" class="form-control" name="email" id="email" required=""/></div></div> \n          <div class="form-group"><label for="name">Subject</label> \n            <input type="text" class="form-control" name="subject" id="subject" required=""/></div> \n          <div class="form-group"><label for="name">Message</label> \n            <textarea class="form-control" name="message" rows="10" required=""></textarea></div> \n          <div class="my-3"><div class="loading">Loading</div> \n            <div class="error-message"></div> \n            <div class="sent-message">Your message has been sent. Thank you!</div></div> \n          <div class="text-center"><button class="btn btn-primary" type="submit">Send Message</button></div></form></div></div></div>',g(i,"id","contact"),g(i,"class","contact")},m(e,t){d(e,i,t)},p:e,i:e,o:e,d(e){e&&f(i)}}}class J extends E{constructor(e){super(),D(this,e,null,Y,o,{})}}function W(t){let i;return{c(){i=p("section"),i.innerHTML='<div class="hero-container" data-aos="fade-in"><h1>Safrijul Fahreza</h1> \n    <p>I&#39;m <span class="typed" data-typed-items="Web Developer, Freelancer, Backend Engineer"></span></p></div>',g(i,"id","hero"),g(i,"class","d-flex flex-column justify-content-center align-items-center")},m(e,t){d(e,i,t)},p:e,i:e,o:e,d(e){e&&f(i)}}}class O extends E{constructor(e){super(),D(this,e,null,W,o,{})}}function K(t){let i,a,s,o,n,l,r,u,h,v,b,x,y,w,$,k,_,P,A;return n=new O({}),u=new F({}),v=new G({}),x=new R({}),w=new J({}),{c(){i=p("i"),a=m(),s=p("header"),s.innerHTML='<div class="d-flex flex-column"><div class="profile"><img src="/iPortfolio/assets/img/profile.jpg" alt="" class="img-fluid rounded-circle"/> \n      <h1 class="text-light"><a href="index.html">Safrijul Fahreza</a></h1> \n      <div class="social-links mt-3 text-center"><a href="https://facebook.com/safrijul.fahreza" target="_blank" class="facebook"><i class="bx bxl-facebook"></i></a> \n        <a href="https://instagram.com/reza.dyk" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a> \n        <a href="https://www.linkedin.com/in/safrijul-fahreza-1478b0209/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a> \n        <a href="https://github.com/safrijulfahreza" target="_blank" class="github"><i class="bx bxl-github"></i></a></div></div> \n\n    <nav id="navbar" class="nav-menu navbar"><ul><li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i>  <span>Home</span></a></li> \n        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i>  <span>About</span></a></li> \n        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i>  <span>Resume</span></a></li> \n        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i>  <span>Portfolio</span></a></li> \n        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i>  <span>Contact</span></a></li></ul></nav></div>',o=m(),C(n.$$.fragment),l=m(),r=p("main"),C(u.$$.fragment),h=m(),C(v.$$.fragment),b=m(),C(x.$$.fragment),y=m(),C(w.$$.fragment),$=m(),k=p("footer"),_=m(),P=p("a"),P.innerHTML='<i class="bi bi-arrow-up-short"></i>',g(i,"class","bi bi-list mobile-nav-toggle d-xl-none"),g(s,"id","header"),g(r,"id","main"),g(k,"id","footer"),g(P,"href","#"),g(P,"class","back-to-top d-flex align-items-center justify-content-center")},m(e,t){d(e,i,t),d(e,a,t),d(e,s,t),d(e,o,t),L(n,e,t),d(e,l,t),d(e,r,t),L(u,r,null),c(r,h),L(v,r,null),c(r,b),L(x,r,null),c(r,y),L(w,r,null),d(e,$,t),d(e,k,t),d(e,_,t),d(e,P,t),A=!0},p:e,i(e){A||(I(n.$$.fragment,e),I(u.$$.fragment,e),I(v.$$.fragment,e),I(x.$$.fragment,e),I(w.$$.fragment,e),A=!0)},o(e){M(n.$$.fragment,e),M(u.$$.fragment,e),M(v.$$.fragment,e),M(x.$$.fragment,e),M(w.$$.fragment,e),A=!1},d(e){e&&f(i),e&&f(a),e&&f(s),e&&f(o),T(n,e),e&&f(l),e&&f(r),T(u),T(v),T(x),T(w),e&&f($),e&&f(k),e&&f(_),e&&f(P)}}}function Q(e){return console.log("Copyright iPortfolio"),console.log("Design By: https://bootstrapmade.com/"),[]}class U extends E{constructor(e){super(),D(this,e,Q,K,o,{})}}function Z(t){let i,a;return i=new U({}),{c(){C(i.$$.fragment)},m(e,t){L(i,e,t),a=!0},p:e,i(e){a||(I(i.$$.fragment,e),a=!0)},o(e){M(i.$$.fragment,e),a=!1},d(e){T(i,e)}}}return new class extends E{constructor(e){super(),D(this,e,null,Z,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
