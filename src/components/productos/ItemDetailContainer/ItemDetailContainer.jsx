import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../../utils/getProductos";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [itemSeleccionado, setItemSeleccionado] = useState({});
  // const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); //toma el parametro de la url y lo guarda en una variable id.

  // useEffect(() => {

  //     getProductos
  //     .then((data) => {
  //         setProductos(data)
  //     })
  //     .catch(err => console.log(err))
  //     .finally(()=> setLoading(false))

  // }, [])

  useEffect(() => {
    //api Fetch()
    getProductos
      .then((data) => {
        const item = data.find((producto) => producto.id === id);
        setItemSeleccionado(item);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    // return () => {
    //     console.log('clean')
    // }
  }, [id]);

  // useEffect(()=>{

  //     const itemSeleccionadoPromise = new Promise ((aceptado, rechazado)=> {

  //         setTimeout(()=> {
  //             console.log(id)
  //             console.log(productos)
  //               aceptado(productos.find(producto => producto.id === id))
  //         }, 4000)

  //     })

  //     itemSeleccionadoPromise
  //     .then((prodEncontrado)=>{
  //         console.log("ProductoEncontrado")
  //         console.log(prodEncontrado)
  //         setItemSeleccionado(prodEncontrado)
  //     })
  //     .catch(err => console.log(err))
  //     .finally(()=> setLoading(false))

  // },[id])

  return (
    <div className="container-sm container-md container-lg">
      {/* <div style={{display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'}}> */}
      {loading ? <h2>Cargando...</h2> : <ItemDetail item={itemSeleccionado} />}
      {/* </div> */}
    </div>
  );
}

export default ItemDetailContainer;
