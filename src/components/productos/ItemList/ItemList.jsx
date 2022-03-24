import React from 'react'
import Item from '../Item/Item'

function ItemList(props) {
    
    return (

        // Llama a Itemproducto para renderizar cada imagen y le pasa parametros   
        props.productos.map(producto => <Item key={producto.id}
                                              producto={producto}
                                              onAddShoppingCart={props.onAddShoppingCart}/>)    
    )
}

export default ItemList
