


const Resultado = ({cotizacion}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE  } = cotizacion;

  return (
    <div style={ {width: '300px'} }>
        <p> Precio: <span>{ PRICE }</span> </p>
        <p> Precio más alto del día: <span>{ HIGHDAY }</span> </p>
        <p> Precio más bajo del día: <span>{ LOWDAY }</span> </p>
        <p> Variación últimas 24 hrs.: <span>{ CHANGEPCT24HOUR }</span> </p>
        <p> Última actizalización: <span>{ LASTUPDATE }</span> </p>
    </div>
  )
}

export default Resultado