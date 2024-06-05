// src/components/Contact.js
import React from 'react';
import '../styles/Contacto.css'

function Contact() {
  return (
    <section className="section-contacto">
      <div className="texto-ayuda">
        <h1>Estamos para ayudarte</h1>
      </div>
      <form>
        <p>Nombre</p>
        <input className="cuadro-ayuda" type="text" />
        <p>Correo electrónico</p>
        <input className="cuadro-ayuda" type="email" />
        <p>País</p>
        <input className="cuadro-ayuda" type="text" />
        <p>Celular</p>
        <input className="cuadro-ayuda" type="text" />
        <br />
        <br />
        <p>Déjanos aquí tus preguntas</p>
        <textarea className="cuadro-ayuda" cols="70" rows="20"></textarea>
        <input type="button" value="Enviar" className="boton-ayuda" />
      </form>
    </section>
  );
};

export default Contact;
