import React from "react";

function Nosotros() {
  return (
    // <!--Jerarquia de empleados desde el fundador a empleados-->
    <main>
      <section>
        <h1 className="text-center pt-3 wow animate__animated animate__fadeInUp">
          ¿Quienes Somos?
        </h1>

        <div className="container wow animate__animated animate__fadeInUp">
          <article className="text-center p-4">
            <p>
              Gringa Sotre es una empresa dedicada a la venta online de ropa y
              accesorios de mackup. Nuestro objetivo es ofrecer la moda más
              actual a los mejores precios. Tenemos a su disposición una gran
              variedad de productos, los cuales son renovados cada temporada
              para dar siempre las prendas más trendy. Tenemos un equipo que
              está dedicado a satisfacer tus necesidades y que te contestará a
              tus dudas con la mayor brevedad posible. Para una mejor
              comunicación puedes contactar con nosotros a través de WhatsApp o
              mensaje privado de Facebook y tan sólo en unos minutos tu duda
              será resuelta.
            </p>
          </article>
        </div>
        {/* <!-- container --> */}
      </section>

      <section>
        <h2 className="text-center pt-3 wow animate__animated animate__fadeInUp">
          ¿Donde nos encontramos?
        </h2>

        <div className="separador"></div>

        {/* <!--Google map--> */}
        <div className="container mx-auto wow animate__animated animate__fadeInUp">
          <div className="map-responsive">
            {/* <iframe
              src="https://maps.google.com/maps?q=ingleses%20brasil&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="600"
              height="450"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Nosotros;
