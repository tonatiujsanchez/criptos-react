import{j as h,n as r,r as l,R as C,a as S}from"./vendor.fc1b8121.js";const I=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};I();const o=h.exports.jsx,n=h.exports.jsxs,g=h.exports.Fragment,A=r.label`
    display: block;
    color: #FFF;
    font-family: 'lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`,P=r.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 16px;
`,w=(i,s)=>{const[a,c]=l.exports.useState("");return[a,()=>n(g,{children:[o(A,{children:i}),n(P,{value:a,onChange:t=>c(t.target.value),children:[o("option",{value:"",children:"Selecciones"}),s.map(t=>o("option",{value:t.id,children:t.nombre},t.id))]})]})]},z=r.div`
    font-family: 'lato', sans-serif;
    /* background-color: #B7322C; */
    background-color: none;
    border: 2px solid #fa2317;
    color: #fa2317;
    padding: 8px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-top: 25px;
    border-radius: 4px;
    word-spacing: 4px;
`,j=({children:i})=>o(z,{children:i}),D=[{id:"USD",nombre:"Dolar de Estados Unidos"},{id:"MXN",nombre:"Peso Mexicano"},{id:"EUR",nombre:"Euro"},{id:"GBP",nombre:"Libra Esterlina"}],k=r.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 12px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }

`,L=({setMonedas:i})=>{const[s,a]=l.exports.useState([]),[c,e]=l.exports.useState(!1),[t,d]=w("Elije tu moneda",D),[p,m]=w("Elije tu Criptomoneda",s);l.exports.useEffect(()=>{(async()=>{const v=await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"),{Data:E}=await v.json(),F=E.map(y=>({id:y.CoinInfo.Name,nombre:y.CoinInfo.FullName}));a(F)})()},[]);const f=x=>{if(x.preventDefault(),[t,p].includes("")){e(!0);return}e(!1),i({moneda:t,criptomoneda:p})};return d(),n(g,{children:[n("form",{onSubmit:f,children:[o(d,{}),o(m,{}),o(k,{type:"submit",value:"Cotizar"})]}),c&&o(j,{children:"Todos los campos son obligatorios"})]})},M=r.div`
    color: #FFF;
    font-family: 'lato', sans-serif;
    text-align: center;
    margin: 50px auto 0 auto;

    .resultado-info{
        display: flex;
        justify-content: center;

        div{
            text-align: left;
            max-width: 340px;
        }
    }

  @media screen and ( min-width: 900px ){
        margin: 100px auto 0 auto;
  }
`,R=r.img`
    width: 120px;
`,u=r.p`
    font-size: 18px;
    color: #b5d2ff;
    span{
        font-weight: bold;
        margin-left: 5px;
        color: #73abff;
    }
`,N=r.p`
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    span{
        margin-left: 10px;
    }
`,O=({cotizacion:i})=>{const{PRICE:s,HIGHDAY:a,LOWDAY:c,CHANGEPCT24HOUR:e,IMAGEURL:t,LASTUPDATE:d}=i;return n(M,{children:[o(R,{src:`https://www.cryptocompare.com/${t}`,alt:""}),o("div",{className:"resultado-info",children:n("div",{children:[n(N,{children:[" Precio: ",o("span",{children:s})," "]}),n(u,{children:[" Precio m\xE1s alto del d\xEDa: ",o("span",{children:a})," "]}),n(u,{children:[" Precio m\xE1s bajo del d\xEDa: ",o("span",{children:c})," "]}),n(u,{children:[" Variaci\xF3n \xFAltimas 24 hrs.: ",n("span",{children:[e,"%"]})," "]}),n(u,{children:[" \xDAltima actualizaci\xF3n: ",o("span",{children:d})," "]})]})})]})};var U="./assets/imagen-criptos.c0430b0f.png";const H=r.div`
  max-width: 900px;
  margin: auto;
  width: 90%;
  display: grid;
  div:nth-of-type(2){
      grid-row: 1/2;
  }


  @media screen and ( min-width: 900px ){
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    column-gap: 2rem;

    div:nth-of-type(2){
      grid-column: 2/3;
  }
  }
`,T=r.img`
  display: block;
  max-width: 80%;
  width: 400px;
  margin: 100px auto 0 auto;
`,G=r.h1`
  font-family: 'lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 36px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;

    display: block;
    margin: 10px auto 0 auto;
  }
`,$=r.span`
  color: #66A2FE;
`,B=r.div`
  text-align: center;
  margin: 200px auto 0 auto;

`,Y=r.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
      position: absolute;
      border: 4px solid #77aeff;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-of-type(2) {
      animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
      0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
      }
    }
`;function q(){const[i,s]=l.exports.useState({}),[a,c]=l.exports.useState({}),[e,t]=l.exports.useState(!1);return l.exports.useEffect(()=>{Object.keys(i).length>0&&(async()=>{t(!0);const{moneda:p,criptomoneda:m}=i,f=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${m}&tsyms=${p}`,b=await(await fetch(f)).json();c(b.DISPLAY[m][p]),t(!1)})()},[i]),n(H,{children:[o("div",{children:!a.PRICE&&!e?o(T,{src:U,alt:"Imagen de criptomonedas",title:"Imagen complementaria de Criptomonedas"}):n(g,{children:[e&&o(B,{children:n(Y,{children:[o("div",{}),o("div",{})]})}),a.PRICE&&!e&&o(O,{cotizacion:a})]})}),n("div",{children:[n(G,{children:["Contiza ",o($,{children:"criptomonedas"})," al instante"]}),o(L,{setMonedas:s})]})]})}C.render(o(S.StrictMode,{children:o(q,{})}),document.getElementById("root"));
