import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./Contact.scss";

const Contact = () => {
  return (
    <main id="contact">
      <div className="Container_contact">
        <div className="info_contact">
          <h2>Estamos abertos</h2>
          <p>Segunda à Sexta</p>
          <p>Dàs 11:00 às 14:00</p>

          <h2>Liga pra gente</h2>
          <div className="info_contact-phone">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
            <p>(47) 99988-2401</p>
          </div>

          <h2>Venha conhecer nosso restaurante</h2>
          <div className="info_contact-location">
            <FontAwesomeIcon icon={faLocationDot} size="2x" color="red" />
            <p>
              Rodovia Duque de Caxias, 9942 - Ubatuba São Francisco do Sul / SC{" "}
            </p>
          </div>
        </div>

        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              title="myFrame"
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Rodovia%20Duque%20de%20Caxias%209942&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://123movies-to.org"> </a>
            <br />
            <a href="https://www.embedgooglemap.net"> </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
