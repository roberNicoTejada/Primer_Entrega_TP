import React from "react";
import "./home.css";
// import background from '../../images/index/img1.png'

function Home() {
  return (
    <>
      {/* <!-- Estrellas parallax --> */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {/* <div className="display-3 fw-bold title wow animate__animated animate__backInDown" 
                 data-wow-delay="0.5s"
                 data-wow-iteration="1">
                Makeup <br/> En su máxima expresión
            </div> */}

      <main>
        <div className="contenidoPrincipal">
          {/* <!-- Parrafo Maquillaje --> */}
          <section className="m-3 p-4">
            <h1 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
              VESTIMENTA
            </h1>
            <div
              className="text-start wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <p>
                No solo permite cubrir el cuerpo para que el frío del invierno
                no lo afecte sino que también en el plano estético le reportará
                a la persona placer, especialmente si se trata de alguien
                fanático de la moda y del buen parecido físico. la indumentaria
                ya no es tan importante como protección o diferenciación social
                sino como una especie de obra de arte en sí misma en la que
                diseñadores y artistas se unen para darle forma, y hay un
                público consumidor ávido por adquirirla porque la misma los
                ubica dentro del grupo que viste de acuerdo a la moda y las
                tendencias que se usan, hecho que reporta reconocimiento y
                valoración positiva en algunos contextos
              </p>
              <p>
                Los estilos impecables son posibles gracias al mejor maquillaje
                de rostro que ofrecemos. Tonos de rubores perfectos, bases
                sutiles, correctores, prebases y maquillaje para contornear el
                rostro para ayudarte a crear el look perfecto, no importa qué
                lado de ti quieras destacar.
              </p>
            </div>
          </section>

          {/* <!-- Texto sobre imagen 1 --> */}
          {/* <section className="altoParallax">
                        <div className="cont container--full">
                            <div className="content display-3 fw-bold shimmer">
                                Makeup <br/> Style Design
                            </div>
                        </div>
                        <div className="parallax img-fluid" style={{ backgroundImage: `url(${background})` }}></div>
                    </section> */}

          {/* <!-- Parrafo Pestañas --> */}
          <section className="m-3 p-4">
            <h2 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
              ACCESORIOS
            </h2>
            <div
              className="text-start wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <p>
                Los complementos o accesorios son todas esas piezas que no son
                parte de las prendas de vestir, pero que se combinan con ellas
                para completar el atuendo. Estos complementos realzan el estilo,
                lo hacen más casual o más elegante, y destacan sus atributos. La
                importancia de los complementos radica en que pueden cambiar
                totalmente un outfit. Por ejemplo, un mismo vestido puede ser
                considerado para uso de día o de noche, de acuerdo a los
                accesorios que lo acompañen. La magia de los accesorios es que
                no hay que invertir grandes cantidades de dinero en ellos, con
                muy poco se puede lograr mucho, sólo hay que saber escogerlos y
                combinarlos de manera creativa. Otro atributo importante de los
                complementos es que muchos de ellos son atemporales, por lo
                tanto se pueden usar a través de los años, completando la ropa
                de cada temporada. Es el caso de las joyas, que son de los
                accesorios más utilizados, estas piezas son muy versátiles y
                elegantes.
              </p>
              <p>
                Con la gran variedad de extensiones que hay para elegir —de
                diferente longitud, grosor, material y tipo de ondulación,
                podemos transformar tus ojos. “Por ejemplo, en las mujeres de 50
                años o más, las pestañas naturales comienzan a perder volumen y
                los párpados exteriores pueden comenzar a descender levemente”.
                “Mediante el uso de pestañas de diversas longitudes, podemos
                crear volumen donde no existe y realmente levantar los ojos”.
              </p>
            </div>
          </section>

          {/* <!-- Texto sobre imagen 2 --> */}
          {/* <section className="altoParallax">
                        <div className="cont container--full">
                            <div className="content display-3 fw-bold shimmer">
                                Lifting <br/> Pestañas Magneticas
                            </div>
                        </div>
                        <div className="parallax img-fluid indexFoto2"></div>
                    </section> */}

          {/* <!-- Parrafo Maquillaje Artístico --> */}
          <section className="m-3 p-4">
            <h2 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
              Maquillaje Artístico
            </h2>
            <div
              className="text-start wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <p>
                Normalmente, se trabaja con unos bocetos previos y se trata de
                adaptar el dibujo al cuerpo y al rostro. Las técnicas de
                aerógrafo en esta clase de dibujos, son esenciales para que el
                trabajo sea aún más perfecto. El maquillaje de fantasía o
                profesional se diferencia al maquillaje convencional en que en
                este último, se intenta disimular o dar un toque o un aspecto
                natural, sin embargo, en el de fantasía o artístico se busca
                todo lo contrario, se busca realzar y trabajar el surrealismo lo
                máximo posible, figuras de animales, monstruos, unicornios,
                dioses…y un sinfín de figuras más propias del cine y del teatro
                son tratadas con esta clase de maquillaje.
              </p>
              <p>
                {" "}
                Con esta clase de maquillaje, no nos referimos solo a aplicar
                color con pincel, sino también a extensiones de pelo, de piel,
                de telas originales y extravagantes que hagan aparentar lo que
                no se es a diferencia muy notoria del maquillaje natural y
                convencional.
              </p>
            </div>
          </section>

          {/* <!-- Texto sobre imagen 3 -->
                    <section className="altoParallax">
                        <div className="cont container--full">
                            <div className="content display-3 fw-bold shimmer">
                                Makeup <br/>Artístico
                            </div>
                        </div>
                        <div className="parallax img-fluid indexFoto3"></div>
                    </section> */}

          {/* <!-- Parrafo Productos de alta calidad --> */}
          {/* <section className="m-3 p-4">
            <h2 className="text-uppercase text-center pb-3 wow animate__animated animate__fadeInUp">
              Productos de alta calidad
            </h2>
            <p
              className="text-start wow animate__animated animate__fadeInUp "
              data-wow-delay="0.1s"
            >
              Contamos con líneaa de productos profesionales del mercado
              nacional e internacional. Tenemos a disposición más de 400
              productos, los mejores desarrollos en productos HD y Ultra HD, y
              una novedosa línea 100% certificada cruelty free + sin parabenos
              que respeta el cuidado de la piel. Marcas de maquillaje
              profesional a la vanguardia de las últimas tendencias de belleza,
              nuestra misión es ofrecer productos auténticos, con materiales
              genuinos de alto rendimiento que cumplan ampliamente el
              requerimiento de la tecnología 4KCOMPLEX y, los sueños artísticos
              más exigentes.
            </p>
          </section> */}

          {/* <!-- Texto sobre imagen 4 --> */}
          {/* <section className="altoParallax">
                        <div className="cont container--full">
                            <div className="content display-3 fw-bold shimmer">
                                El mejor producto <br/>del Mercado
                            </div>
                        </div>
                        <div className="parallax img-fluid indexFoto4"></div>
                    </section> */}
        </div>
        {/* <!-- contenidoPrincipal --> */}
      </main>
    </>
  );
}

export default Home;
