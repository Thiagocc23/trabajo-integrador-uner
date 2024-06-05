
// AboutUs.js
import React from 'react';
import '../styles/QuienesSomos.css'
import imagen1 from "../img/imagenes/quienessomosimg1.jpg"
import imagen2 from "../img/imagenes/quienessomosimg2.avif"
import imagen3 from "../img/imagenes/quienessomosimg3.jpg"
function AboutUs() {
  return (
    <section className="section-quienessomos">
      
      <div className="titulo">
        <h1>¿Quiénes Somos? </h1>
      </div>
      <div className="texto3">
        <p>
          Somos una plataforma dedicada a facilitar la reserva de hoteles para viajeros de todo el mundo. Nuestra misión
          es proporcionar una experiencia de reserva sencilla, segura y cómoda para que nuestros clientes disfruten al
          máximo de sus viajes. Con una amplia selección de hoteles en destinos populares, tarifas competitivas y un
          equipo de atención al cliente disponible las 24 horas del día, estamos aquí para ayudarte en cada paso de tu
          viaje.
        </p>
      </div>
      <div className="imagen2">
      <img src={imagen1} width="800px"  />
      </div>

      <div className="texto3">
        <p>
          Es hora de descubrir el mundo que te rodea. No importa qué tipo de viajero seas, IHG Hotels & Resorts ofrece
          una amplia gama de estadías y experiencias únicas. ¿Eres un viajero amante del lujo o preocupado por tu
          presupuesto? ¿O prefieres descansar junto a la piscina o pasar tiempo de calidad con los niños en un resort
          familiar? IHG tiene algo para ti. Explora las cálidas aguas del Caribe, el rico patrimonio y la arquitectura
          histórica de Europa, los impresionantes paisajes naturales de los parques nacionales de EE. UU. o los
          eclécticos barrios de California. Elija lo que elija, IHG Hotels & Resorts es la puerta de entrada a
          experiencias de viaje extraordinarias.
        </p>
      </div>

      <div className="imagen2">
      <img src={imagen2} width="800px"  />
      </div>

      <div>
        <p className="texto3">
          Busque por sus intereses de viaje. Los hoteles frente a la playa, los hoteles que admiten mascotas, los
          hoteles románticos, las estaciones de esquí o los complejos turísticos con todo incluido son excelentes
          lugares para comenzar. Comienza a planificar tu próximo viaje ahora.
        </p>
      </div>

      <div className="imagen2">
      <img src={imagen3} width="800px"  />
      </div>
    </section>
  );
}

export default AboutUs;
