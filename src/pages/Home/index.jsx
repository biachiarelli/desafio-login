import React from "react";
import Clock from "../../components/Clock";
import Thermometer from "../../components/Thermometer";
import logo from '../../assets/logo-black.png';
import circle from '../../assets/img-home.png';
import RefreshTime from "../../components/RefreshTime";
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  document.title = "Compass - Home";

  function logout() {

    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Deseja continuar logado?")) {
      localStorage.clear();
    }
    navigate('/');

  }

  return(
    <div className="Home">
      <div className="Home-menu">
        <img src={logo} alt="Compass UOL" className="Home-menu__logo" />
        <Clock />
        <Thermometer />
      </div>
      <div className="Home-text">
        <div className="Home-text__group">
          <span className="title small">Our mission is</span>
          <span className="text">Nossa missão é</span>
        </div>
        <div className="Home-text__group">
          <span className="title">to transform the world</span>
          <span className="text">transformar o mundo</span>
        </div>
        <div className="Home-text__group">
          <span className="title">building digital experiences</span>
          <span className="text">construindo experiências digitais</span>
        </div>
        <div className="Home-text__group">
          <span className="title">that enable our client's growth</span>
          <span className="text">que permitam o crescimento dos nossos clientes</span>
        </div>
      </div>
      <img src={circle} className="Home-image" alt="Logo" />
      <div className="Home-footer">
        <span className="Home-footer__text">Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</span>
        <RefreshTime time="600" unit="seconds" timeout={logout}/>
        <div className="Home-footer__buttons">
          <span className="primary-button">Continuar navegeando</span>
          <span className="secondary-button" onClick={logout}>Logout</span>
        </div>
      </div>
    </div>
  )
}