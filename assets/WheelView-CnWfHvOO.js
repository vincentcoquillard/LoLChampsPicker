import{d as v,r as i,o as f,c as a,a as u,b as l,F as g,e as C,n as m,f as t,_ as k}from"./index-Cd8hCwwL.js";const y={class:"wheel"},w={key:0},b={key:1,class:"roulette-container"},x=["src"],V={key:2,class:"result"},j=["src"],z=v({__name:"WheelView",setup(B){const s=i([]),e=i(null),c=i(!1);async function h(){const o=await(await fetch("https://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json")).json();s.value=Object.values(o.data).map(n=>`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/champion/${n.image.full}`),d()}function d(){e.value=null,c.value=!0,setTimeout(p,3e3)}function p(){c.value=!1;const r=Math.floor(Math.random()*s.value.length);e.value=s.value[r]}return f(h),(r,o)=>(t(),a("div",y,[e.value?u("",!0):(t(),a("h1",w,"Randomizing...")),e.value?u("",!0):(t(),a("div",b,[l("div",{class:m(["roulette",{rolling:c.value}])},[(t(!0),a(g,null,C(s.value,(n,_)=>(t(),a("img",{key:_,src:n,alt:"Champion",class:m({hidden:e.value&&e.value!==n})},null,10,x))),128))],2)])),e.value?(t(),a("div",V,[o[0]||(o[0]=l("h2",{style:{"margin-bottom":"1rem"}},"Selected Champion",-1)),l("img",{src:e.value,alt:"Selected Champion"},null,8,j),l("button",{onClick:d,class:"start",style:{"font-size":"0.8rem"}},"Pick a New Champion")])):u("",!0)]))}}),N=k(z,[["__scopeId","data-v-11d2aa2c"]]);export{N as default};