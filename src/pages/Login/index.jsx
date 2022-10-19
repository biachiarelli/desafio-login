import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import iconInput from '../../assets/icon-user.svg'
import iconPassword from '../../assets/icon-password.svg'
import logo from '../../assets/logo-white.png'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  document.title = "Compass - Login";

  function auth() {
    return username === 'admin' &&  password === 'admin'
  }

  function handleLogin() {

    if(auth()) {
      localStorage.setItem('user', username)
      navigate('/home');
    } else  {
      setError(true)
      setMessage("Ops, usuário ou senha inválidos. Tente novamente!")
    }

  }

  return(
    <div className="Login">
      <div className='Login-group'>
        <div className='Login-group__container'>
          <div className='Login-group__info'>
            <h1 className='title'>Olá,</h1>
            <h3 className='subtitle'>Para continuar navegando de forma segura, efetue o login na rede.</h3>
          </div>
          <div className="Login-group__form">
            <h2 className='title'>Login</h2>
            <div className='inputs'>
              <Input
              type="text"
              onChange={e => setUserName(e.target.value)}
              placeholder="Usuário"
              name="username"
              error={error}
              value={username}
              icon={iconInput} />
              <Input
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Senha"
              name="password"
              error={error}
              value={password}
              icon={iconPassword} />
              <span className='message'>{message}</span>
            </div>
            <Button type="submit" label="Continuar" onClick={handleLogin} />
          </div>
          </div>
        </div>
        <div className='Login-img'>
          <img src={logo} alt="Logo Compass" className="Login-img__logo" />
        </div>
    </div>
  )
}
