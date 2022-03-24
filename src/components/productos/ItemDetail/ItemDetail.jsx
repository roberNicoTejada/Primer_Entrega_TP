import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'
import {onAddShoppingCart} from '../../../utils/events'
import {onAddComprarAhora} from '../../../utils/events'

function ItemDetail(props) {
    return (
        <div className="row m-5">
            
            <div className="col">
                <img src={props.item.srcImagen} alt={props.item.alt} className="img-fluid"/>        
            </div>
            
            <div className="col ms-5 ps-4">

                <div className="fw-bold fs-2 productoMakeup">
                    {props.item.nombre}
                </div>
                
                <div className="fs-3 text-muted mt-4">
                    {'$ ' + parseFloat(props.item.precio).toFixed(2)}
                </div>

                <div className="w-75 mt-3">
                    <ItemCount stock={props.item.stock}/>
                </div>

                <div className="mt-3">
                    <div className="fw-bold fs-5 productoMakeup">
                        Stock Disponible
                    </div>

                    <div className="text-muted">
                        {props.item.stock + ' Unidades'}
                    </div>
                </div>

                <div className="mt-4">
                    <div className="w-75">
                        <button id={props.item.id} 
                                type="button" 
                                onClick={onAddComprarAhora} 
                                className="btn btn-dark w-100 mt-3">
                            
                            Comprar Ahora
                        
                        </button>
                    </div>

                    <div className="w-75">
                        <button id={props.item.id} 
                                type="button" 
                                onClick={onAddShoppingCart} 
                                className="btn btn-dark w-100 mt-3">
                            
                            Agregar al carrito
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="25"height="25" fill="currentColor" className="bi bi-cart3 ps-2" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail
