import{d as _,r,o as u,a as c,c as n,b as e,t as o,e as i,u as b,f as h,g as p,i as y}from"./index-CKTkAJjy.js";const $={class:"row"},x={class:"offset-md-1 col-md-4 offset-lg-2 col-lg-3 mb-3"},k={class:"display-4 d-md-none mb-4 text-center"},v=["src","alt"],B={class:"lead text-center mt-1"},w={class:"col-md-7"},M={class:"display-4 d-none d-md-block mb-4 text-start"},j=_({__name:"Founder",props:{about:{}},setup(l){const d=b(),t=r({}),s=l;return u(async()=>{Object.assign(t,await d.api.getMediaByID(s.about.acf.founder_image))}),(a,m)=>(c(),n("div",$,[e("div",x,[e("h2",k,o(a.about.acf.founding_header),1),t.guid?(c(),n("img",{key:0,src:t.guid.rendered,alt:t.alt_text},null,8,v)):i("",!0),e("h3",B,o(a.about.acf.founder_name),1)]),e("div",w,[e("h2",M,o(a.about.acf.founding_header),1),e("p",null,o(a.about.acf.founding_excerpt),1)])]))}}),I={class:"row"},P={class:"offset-md-1 col-md-5 offset-lg-2"},D={class:"display-4 mb-4 text-center text-lg-end"},O=["src","alt"],C={class:"text-start text-lg-end"},N={class:"d-none d-md-block offset-md-1 col-md-5 col-lg-4"},S=["src","alt"],V=_({__name:"Team",props:{about:{}},setup(l){const d=b(),t=r({}),s=l;return u(async()=>{Object.assign(t,await d.api.getMediaByID(s.about.acf.team_image))}),(a,m)=>(c(),n("div",I,[e("div",P,[e("h2",D,o(a.about.acf.team_section_title),1),t.guid?(c(),n("img",{key:0,class:"d-md-none mb-4",src:t.guid.rendered,alt:t.alt_text},null,8,O)):i("",!0),e("p",C,o(a.about.acf.team_description),1)]),e("div",N,[t.guid?(c(),n("img",{key:0,src:t.guid.rendered,alt:t.alt_text},null,8,S)):i("",!0)])]))}}),E={class:"container-fluid"},F={class:"row pt-5"},T={class:"text-center d-flex flex-column align-items-center justify-content-center mb-5"},q={class:"display-2 mt-n3"},z={class:"display-6 pb-5"},G=_({__name:"Page",setup(l){const d=y("cta"),t=h(),s=r({});return u(async()=>{Object.assign(s,await t.api.getPageBySlug("about")),d.update(s)}),(a,m)=>{var f,g;return c(),n("div",E,[e("div",F,[e("div",T,[e("h1",q,o((f=s.acf)==null?void 0:f.page_title),1),e("p",z,o((g=s.acf)==null?void 0:g.page_sub_title),1)]),s.acf?(c(),p(j,{key:0,about:s,class:"mt-4 mb-5"},null,8,["about"])):i("",!0),s.acf?(c(),p(V,{key:1,about:s,class:"mt-5 mb-5"},null,8,["about"])):i("",!0)])])}}});export{G as default};
