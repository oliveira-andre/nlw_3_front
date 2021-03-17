import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src="#" alt="Logo should be here" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>
        <a className="enter-app" href="">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default Landing;
