import styled from '@emotion/styled';

const ContenedorResultado = styled.div`
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
`

const Imagen = styled.img`
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    color: #b5d2ff;
    span{
        font-weight: bold;
        margin-left: 5px;
        color: #73abff;
    }
` 

const Precio = styled.p`
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    span{
        margin-left: 10px;
    }
`


const Resultado = ({cotizacion}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE  } = cotizacion;

  return (
    <ContenedorResultado>
        <Imagen src={`https://www.cryptocompare.com/${ IMAGEURL }`} alt="" />
        <div className='resultado-info'>
            <div>
            <Precio> Precio: <span>{ PRICE }</span> </Precio>
            <Texto> Precio más alto del día: <span>{ HIGHDAY }</span> </Texto>
            <Texto> Precio más bajo del día: <span>{ LOWDAY }</span> </Texto>
            <Texto> Variación últimas 24 hrs.: <span>{ CHANGEPCT24HOUR }%</span> </Texto>
            <Texto> Última actualización: <span>{ LASTUPDATE }</span> </Texto>
            </div>
        </div>
    </ContenedorResultado>
  )
}

export default Resultado