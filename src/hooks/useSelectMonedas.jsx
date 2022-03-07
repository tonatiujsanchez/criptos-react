
import { useState } from 'react';

import styled from '@emotion/styled'


const Label = styled.label`
    display: block;
    color: #FFF;
    font-family: 'lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 16px;
`


const useSelectMonedas = ( label, opciones ) => {
    const [ state, setState ] = useState('');
  
    
    const SelectMonedas = ()=> (
        <>
            <Label>{label}</Label>
            <Select 
                value={ state } 
                onChange={ ( e )=> setState( e.target.value ) }>
                <option value="">Selecciones</option>
                {
                    opciones.map( ( option )=>(
                        <option key={ option.id } value={ option.id }>
                            { option.nombre }
                        </option>)
                    )
                }
            </Select>
        </>
    )




  

    return [ state, SelectMonedas ]

}

export default useSelectMonedas