import React from 'react'
import { useState, useEffect } from 'react'
import { getProductos } from '../../../utils/getProductos'
import { onAddShoppingCart } from '../../../utils/events'
// import Item from '../Item/Item'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        //api Fetch()
        getProductos    
        .then(data => {   
            setProductos(data) 
            console.log(data)  
        })
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
        
        // return () => {
        //     console.log('clean')
        // }
    },[])

    return (
        <main>
            <section>

                <h1 className="text-center p-4">
                    Productos Makeup
                </h1>

                <div className="container-sm container-md container-lg">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 g-md-3 g-sm-2 ms-md-5">
                        
                        {/* Arma lista de items de producto */}
                        { 
                            loading ? <h2>Cargando...</h2> 
                                    : <ItemList productos={productos} onAddShoppingCart={onAddShoppingCart}/>
                        }

                    </div>
                </div>

            </section>
        </main>
    )
}

export default ItemListContainer
