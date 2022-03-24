import React from "react";
// import ItemCount from '../ItemCount/ItemCount'
import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="col">
      <div className="card h-100 w-75 card-ancho">
        {/* <Link to={`/detalle/${props.producto.id}`}> */}
        <Link to={`/item/${props.producto.id}`}>
          <img
            src={props.producto.srcImagen}
            className="card-img-top img-fluid"
            loading="lazy"
            alt={props.producto.descripcion}
          />
        </Link>
        <div className="card-body">
          {/*Nombre Producto*/}
          <div className="card-title pt-3 fw-bold productoMakeup pb-2">
            {props.producto.nombre}
          </div>

          {/*Precio*/}
          <div className="h6 text-muted">
            {"$" + parseFloat(props.producto.precio).toFixed(2)}
          </div>

          {/*Entrada de cantidad*/}
          {/* <ItemCount stock={props.producto.stock}/> */}

          {/*Stock*/}
          <div className="h6 text-muted">
            Stock {props.producto.stock} disponibles
          </div>

          {/* <button id={props.producto.id} 
                            type="button" 
                            onClick={props.onAddShoppingCart} 
                            className="btn btn-dark w-100 mt-3">
                        
                        Agregar al carrito
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="25"height="25" fill="currentColor" className="bi bi-cart3 ps-2" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    
                    </button> */}
        </div>
      </div>
    </div>
  );
}

export default Item;
