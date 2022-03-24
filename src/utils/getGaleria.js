import Imagen1 from "../images/galeria/png/1.png";
import Imagen2 from "../images/galeria/png/2.png";
import Imagen3 from "../images/galeria/png/3.png";
import Imagen4 from "../images/galeria/png/4.png";
import Imagen5 from "../images/galeria/png/5.png";
import Imagen6 from "../images/galeria/png/6.png";
import Imagen7 from "../images/galeria/png/7.png";
import Imagen8 from "../images/galeria/png/8.png";
import Imagen9 from "../images/galeria/png/9.png";
import Imagen10 from "../images/galeria/png/10.png";
import Imagen11 from "../images/galeria/png/11.png";
import Imagen12 from "../images/galeria/png/12.png";
import Imagen13 from "../images/galeria/png/13.png";
import Imagen14 from "../images/galeria/png/14.png";
import Imagen15 from "../images/galeria/png/15.png";
import Imagen16 from "../images/galeria/png/16.png";
import Imagen17 from "../images/galeria/png/17.png";
import Imagen18 from "../images/galeria/png/18.png";

const galeria = [
  {
    id: "1000",
    srcImagen: Imagen1,
    alt: "Maquillaje egipcio",
  },
  {
    id: "1001",
    srcImagen: Imagen2,
    alt: "Maquillaje parpados",
  },
  {
    id: "1002",
    srcImagen: Imagen3,
    alt: "Maquillaje turquesa",
  },
  {
    id: "1003",
    srcImagen: Imagen4,
    alt: "Maquillaje gala",
  },
  {
    id: "1004",
    srcImagen: Imagen5,
    alt: "Maquillaje delineado",
  },
  {
    id: "1005",
    srcImagen: Imagen6,
    alt: "Maquillaje sport",
  },
  {
    id: "1006",
    srcImagen: Imagen7,
    alt: "Maquillaje casamiento",
  },
  {
    id: "1007",
    srcImagen: Imagen8,
    alt: "Maquillaje evento",
  },
  {
    id: "1008",
    srcImagen: Imagen9,
    alt: "Maquillaje verde",
  },
  {
    id: "1009",
    srcImagen: Imagen10,
    alt: "Maquillaje blue",
  },
  {
    id: "1010",
    srcImagen: Imagen11,
    alt: "Maquillaje black",
  },
  {
    id: "1011",
    srcImagen: Imagen12,
    alt: "Maquillaje epoca",
  },
  {
    id: "1012",
    srcImagen: Imagen13,
    alt: "Maquillaje casual",
  },
  {
    id: "1013",
    srcImagen: Imagen14,
    alt: "Maquillaje artístico",
  },
  {
    id: "1014",
    srcImagen: Imagen15,
    alt: "Maquillaje hindu",
  },
  {
    id: "1015",
    srcImagen: Imagen16,
    alt: "Maquillaje casual",
  },
  {
    id: "1016",
    srcImagen: Imagen17,
    alt: "Maquillaje hindu",
  },
  {
    id: "1017",
    srcImagen: Imagen18,
    alt: "Maquillaje delineado",
  },
];

export const getGaleria = new Promise((aceptado, rechazada) => {
  //Acciones todo ok
  setTimeout(() => {
    aceptado(galeria);
  }, 2000);
  //rechazada('400 not found')
});
