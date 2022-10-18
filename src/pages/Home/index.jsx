import React from "react";
import Clock from "../../components/Clock";
import Thermometer from "../../components/Thermometer";
import logo from '../../assets/logo-black.png'
import circle from '../../assets/img-home.png'
import RefreshTime from "../../components/RefreshTime";


const Home = () => (
  <div>
    <div>
      <img src={logo} />
      <Clock />
      <Thermometer />
    </div>
    <div>
      <div>
        <span>Our mission is</span>
        <span>Nossa missão é</span>
      </div>
      <div>
        <span>to transform the world</span>
        <span>transformar o mundo</span>
      </div>
      <div>
        <span>building digital experiences</span>
        <span>construindo experiências digitais</span>
      </div>
      <div>
        <span>that enable our client's growth</span>
        <span>que permitam o crescimento dos nossos clientes</span>
      </div>
    </div>
    <div>
      <span>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</span>
      <RefreshTime time="600" unit="seconds" />
      <div>
        <span>Continuar navegeando</span>
        <span>Logout</span>
      </div>
    </div>
    <img img={circle} />
  </div>
);
export default Home;