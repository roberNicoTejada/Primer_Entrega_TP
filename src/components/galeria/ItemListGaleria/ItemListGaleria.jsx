import React from 'react'
import ItemGaleria from '../ItemGaleria/ItemGaleria'

function ItemListGaleria(props) {
    return (

        // Llama a ItemGaleria para renderizar cada imagen y le pasa parametros   
        props.galeria.map(galeria => <ItemGaleria key={galeria.id}
                                                  urlInstagram={galeria.urlInstagram} 
                                                  srcImagen={galeria.srcImagen}
                                                  alt={galeria.alt}/>)
    )
}

export default ItemListGaleria
