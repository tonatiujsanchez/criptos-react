import { useState, useEffect } from 'react';

import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

import ImagenCriptos from './img/imagen-criptos.png';

import styled from '@emotion/styled'



const Contenedor = styled.div`
  max-width: 900px;
  margin: auto;
  width: 90%;

  @media screen and ( min-width: 900px ){
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    column-gap: 2rem;
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


function App() {

  const [ monedas, setMonedas ] = useState({});
  const [ cotizacion, setCotizacion ] = useState({});
  
  useEffect( ()=>{
    if( Object.keys( monedas ).length > 0 ){
      
      const cotizarCripto = async() => {

        const { moneda, criptomoneda } = monedas;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptomoneda }&tsyms=${ moneda }`;
        
        const resp = await fetch( url );
        const result = await resp.json();

        setCotizacion( result.DISPLAY[criptomoneda][moneda] );

      }

      cotizarCripto();

    }
  },[monedas]);


  return (
    <Contenedor>
      <Imagen 
        src={ ImagenCriptos } 
        alt="Imagen de criptomonedas" 
        title='Imagen complementaria de Criptomonedas'>
      </Imagen>
      <div>
        <Heading>Contiza <Contraste>criptomonedas</Contraste> al instante</Heading>
        <Formulario setMonedas = { setMonedas } />

        { cotizacion.PRICE && <Resultado cotizacion = { cotizacion } /> }

      </div>
    </Contenedor>
  )
}

export default App
