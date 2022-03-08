import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import useSelectMonedas from '../hooks/useSelectMonedas';

import Error from './Error';
import { monedas } from './../data/modenas';


const InputSubmit = styled.input`
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

`

const Formulario = ({ setMonedas }) => {

  const [ criptos, setCriptos ] = useState([]);
  const [ error, setError ] = useState(false);

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elije tu moneda', monedas);
  const [ criptomoneda, SelectCriptomonedas ] = useSelectMonedas('Elije tu Criptomoneda', criptos);


  useEffect( ()=>{
    const consultarAPI = async()=>{
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      
      const resp = await fetch( url );
      const { Data } = await resp.json();

      const criptos = Data.map( cripto => (
        { 
          id: cripto.CoinInfo.Name, 
          nombre: cripto.CoinInfo.FullName 
        }
      ));
      
      setCriptos( criptos );
    }
    consultarAPI();
  },[]);

  const handleSubmit = ( e ) => {
    e.preventDefault();

    if( [moneda, criptomoneda].includes('') ){
      setError(true);
      return;
    }
    
    setError(false);
    setMonedas( { moneda, criptomoneda } );
  }

  
  SelectMonedas();
  return (
    <>
      <form onSubmit={ handleSubmit } >
          <SelectMonedas />
          <SelectCriptomonedas />
          <InputSubmit type="submit" value="Cotizar" />
      </form>
      { error && <Error>Todos los campos son obligatorios</Error> }
    </>

  )
}

export default Formulario