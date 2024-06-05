// src/components/Section.js
import React from 'react';
import '../styles/Inicio.css'
import imagen1 from "../img/imagenes/tipos-de-alojamiento.jpg"
import hotel1 from "../img/imagenes/147634412.webp"
import hotel2 from "../img/imagenes/249506873.webp"
import hotel3 from "../img/imagenes/20340821.webp"
import hotel4 from "../img/imagenes/hotel4.webp"


function Section() {
  return (

   
    <section className="estilos-section">
      <div className="texto">
        <p>Los mejores hoteles al alcance tus manos</p>
      </div>
      <div className="imagen1">
      <img src={imagen1}   height="1118px"/>
      </div>
      <div className="texto2">
        <p>Busca y reserva tu lugar perfecto</p>
      </div>
      <div className="imagenes">
        <article className="articulo">
        <img src={hotel1} alt="hotel1" className="articulo-img"width="300px"/>
          <h2 className="articulo-titulo">
            Unique Executive Central
            <br />
            Centro de Buenos Aires
          </h2>
          <span className="precio">
            $52.612.71
            <br />
            por noche
          </span>
          <button className="boton">Reservar ahora</button>
        </article>
        <article className="articulo">
        <img src={hotel2} alt="hotel2"className="articulo-img"width="300px"/>
          <h2 className="articulo-titulo">
            Gran Hotel Argentino
            <br />
            Microcentro de Buenos Aires
          </h2>
          <span className="precio">
            $25.391.39
            <br />
            por noche
          </span>
          <button className="boton">Reservar ahora</button>
        </article>
        <article className="articulo">
          <img src={hotel3} alt="hotel3"className="articulo-img"width="300px"/>
          <h2 className="articulo-titulo">
            Exe Hotel Colón
            <br />
            Microcentro de Buenos Aires
          </h2>
          <span className="precio">
            $75.000.00
            <br />
            por noche
          </span>
          <button className="boton">Reservar ahora</button>
        </article>
        <article className="articulo">
        <img src={hotel4} alt="hotel4"className="articulo-img"width="300px"/>
          <h2 className="articulo-titulo">
            Hotel Cristoforo Colombo
            <br />
            Palermo
          </h2>
          <span className="precio">
            $49.631.54
            <br />
            por noche
          </span>
          <button className="boton">Reservar ahora</button>
        </article>
      </div>
    </section>
  );
}

export default Section;
