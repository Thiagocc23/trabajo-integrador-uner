// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="redes">
        <a className="facebook" href="https://www.facebook.com/ihghotels">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <br />
        <a className="instagram" href="https://www.instagram.com/ihg">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <br />
        <a className="twitter" href="https://twitter.com/ihghotels?lang=es">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <br />
        <a className="youtube" href="https://www.youtube.com/ihgplc">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <p>Copyright todos los derechos reservados</p>
      <script src="https://kit.fontawesome.com/de789a8a26.js" crossorigin="anonymous"></script>
    </footer>
  
  );


}

export default Footer;
