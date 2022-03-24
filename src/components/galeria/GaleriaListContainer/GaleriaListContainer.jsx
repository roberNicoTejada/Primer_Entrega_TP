import React from "react";
import { useState, useEffect } from "react";
import { getGaleria } from "../../../utils/getGaleria";
import "../../galeria/galeria.css";
import ItemListGaleria from "../ItemListGaleria/ItemListGaleria";

function GaleriaListContainer() {
  const [galeria, setGaleria] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //api Fetch()
    getGaleria
      .then((data) => {
        setGaleria(data);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    // return () => {
    //     console.log('clean')
    // }
  }, []);

  return (
    <main>
      <section>
        <h1 className="text-center p-4 wow animate__animated animate__fadeInUp">
          Galería
        </h1>

        <div className="container">
          <div className="mainGaleria">
            {/* Pasa a ItemListGaleria el array con las propiedades de galeria */}
            {loading ? (
              <h2>Cargando...</h2>
            ) : (
              <ItemListGaleria galeria={galeria} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default GaleriaListContainer;
