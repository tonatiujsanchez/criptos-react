import { useState, useEffect } from 'react';

import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

import ImagenCriptos from './img/imagen-criptos.png';

import styled from '@emotion/styled'



const Contenedor = styled.div`
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
`

const Imagen = styled.img`
  display: block;
  max-width: 80%;
  width: 400px;
  margin: 100px auto 0 auto;
`

const Heading = styled.h1`
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
`

const Contraste = styled.span`
  color: #66A2FE;
`

const LoadignContent = styled.div`
  text-align: center;
  margin: 200px auto 0 auto;

`

const Loading = styled.div`
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
`

function App() {

  const [ monedas, setMonedas ] = useState({});
  const [ cotizacion, setCotizacion ] = useState({});
  const [ cargando, setCargando ] = useState(false);
  
  useEffect( ()=>{
    if( Object.keys( monedas ).length > 0 ){
      
      const cotizarCripto = async() => {
        setCargando(true);
        const { moneda, criptomoneda } = monedas;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptomoneda }&tsyms=${ moneda }`;
        
        const resp = await fetch( url );
        const result = await resp.json();

        setCotizacion( result.DISPLAY[criptomoneda][moneda] );
         
        setCargando(false);
      }

      cotizarCripto();

    }
  },[monedas]);


  return (
    <Contenedor>
      <div>
        {
          ( !cotizacion.PRICE && !cargando )
          ? <Imagen 
              src={ ImagenCriptos } 
              alt="Imagen de criptomonedas" 
              title='Imagen complementaria de Criptomonedas'>
            </Imagen>

          : <>
              { cargando && <LoadignContent><Loading><div></div><div></div></Loading></LoadignContent> }
              { cotizacion.PRICE && !cargando && <Resultado cotizacion = { cotizacion } /> }
            </>
        }
      </div>

      <div>
        <Heading>Contiza <Contraste>criptomonedas</Contraste> al instante</Heading>
        <Formulario setMonedas = { setMonedas } />
      </div>
    </Contenedor>
  )
}

export default App
