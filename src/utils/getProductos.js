import Esponja from '../images/carritoMakeup/Esponja.jpeg'
import Brocha  from '../images/carritoMakeup/brocha.jpg'
import Paleta from '../images/carritoMakeup/paletaSombras2.jpeg'
import Iluminador from '../images/carritoMakeup/iluminador.jpg'
import Paleta2 from '../images/carritoMakeup/paletaSombras.png'
import Micelar from '../images/carritoMakeup/micelar.jpg'
import Corrector from '../images/carritoMakeup/corrector.jpg'
import Paleta3 from '../images/carritoMakeup/paleta.jpg'
import Flame from '../images/carritoMakeup/paletaSombras3.jpg'

const productos = [
                {
                    id:"1000",
                    nombre:"Esponja Soft Blender",
                    precio:503,
                    stock: 5,
                    srcImagen:Esponja,
                    alt:"Esponja de Maquillaje"
                },
                {
                    id:"1001",
                    nombre:"Brocha Powder Blush",
                    precio:534,
                    stock: 100,
                    srcImagen:Brocha,
                    alt:"Brocha de Maquillaje parpados"
                },
                {
                    id:"1002",
                    nombre:"Paleta de sombras Cosmos",
                    precio:2544,
                    stock: 100,
                    srcImagen:Paleta,
                    alt:"Maquillaje casual"
                },
                {
                    id:"1003",
                    nombre:"Iluminador Backet perolado",
                    precio:817,
                    stock: 100,
                    srcImagen:Iluminador,
                    alt:"Iluminador Maquillaje"
                },
                {
                    id:"1004",
                    nombre:"Mini paletas Raimbow",
                    precio:1100,
                    stock: 100,
                    srcImagen:Paleta2,
                    alt:"Paleta Maquillaje"
                },
                {
                    id:"1005",
                    nombre:"Agua Micelar 200ml",
                    precio:800,
                    stock: 100,
                    srcImagen:Micelar,
                    alt:"Micelar Maquillaje"
                },
                {
                    id:"1006",
                    nombre:"Corrector líquido",
                    precio:604,
                    stock: 100,
                    srcImagen:Corrector,
                    alt:"Corrector Maquillaje"
                },
                {
                    id:"1007",
                    nombre:"Paleta Soft Nude",
                    precio:1990,
                    stock: 100,
                    srcImagen:Paleta3,
                    alt:"Paleta de Maquillaje casamiento"
                },
                {
                    id:"1008",
                    nombre:"Paleta Flame",
                    precio:1000,
                    stock: 100,
                    srcImagen:Flame,
                    alt:"Paleta de Maquillaje casamiento"
                }                                                                                                                                
            ];

export const getProductos = new Promise((aceptado, rechazada)=>{
    //Acciones todo ok 
    setTimeout(() => {
        aceptado(productos)        
    }, 2000);
    //rechazada('400 not found')
})

