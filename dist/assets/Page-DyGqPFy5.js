import{d as _,r as u,o as r,a as o,c as i,b as t,e as d,t as c,u as h,f as b,g as f,i as y}from"./index-CNOdg1TW.js";const $={class:"row"},v={class:"offset-lg-2 col-lg-3"},k=["src","alt"],x={class:"lead text-center"},B={class:"col-lg-5"},w={class:"display-4 mb-4"},M=_({__name:"Founder",props:{about:{}},setup(l){const n=h(),s=u({}),e=l;return r(async()=>{Object.assign(s,await n.api.getMediaByID(e.about.acf.founder_image))}),(a,g)=>(o(),i("div",$,[t("div",v,[s.guid?(o(),i("img",{key:0,src:s.guid.rendered,alt:s.alt_text},null,8,k)):d("",!0),t("h3",x,c(a.about.acf.founder_name),1)]),t("div",B,[t("h2",w,c(a.about.acf.founding_header),1),t("p",null,c(a.about.acf.founding_excerpt),1)])]))}}),j={class:"row"},I={class:"col-lg-5 offset-lg-2"},P={class:"display-4 mb-4 text-end"},D={class:"text-end"},O={class:"offset-lg-1 col-lg-3"},C=["src","alt"],N=_({__name:"Team",props:{about:{}},setup(l){const n=h(),s=u({}),e=l;return r(async()=>{Object.assign(s,await n.api.getMediaByID(e.about.acf.team_image))}),(a,g)=>(o(),i("div",j,[t("div",I,[t("h2",P,c(a.about.acf.team_section_title),1),t("p",D,c(a.about.acf.team_description),1)]),t("div",O,[s.guid?(o(),i("img",{key:0,src:s.guid.rendered,alt:s.alt_text},null,8,C)):d("",!0)])]))}}),S={class:"container-fluid"},V={class:"row pt-5"},E={class:"d-flex flex-column align-items-center justify-content-center mb-5"},F={class:"display-2 mt-n3"},T={class:"display-6 pb-5"},z=_({__name:"Page",setup(l){const n=y("cta"),s=b(),e=u({});return r(async()=>{Object.assign(e,await s.api.getPageBySlug("about")),n.update(e)}),(a,g)=>{var p,m;return o(),i("div",S,[t("div",V,[t("div",E,[t("h1",F,c((p=e.acf)==null?void 0:p.page_title),1),t("p",T,c((m=e.acf)==null?void 0:m.page_sub_title),1)]),e.acf?(o(),f(M,{key:0,about:e,class:"mt-4 mb-5"},null,8,["about"])):d("",!0),e.acf?(o(),f(N,{key:1,about:e,class:"mt-5 mb-5"},null,8,["about"])):d("",!0)])])}}});export{z as default};