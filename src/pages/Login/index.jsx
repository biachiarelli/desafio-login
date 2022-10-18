import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import iconInput from '../../assets/icon-user.svg'
import iconPassword from '../../assets/icon-password.svg'
import logo from '../../assets/logo-white.png'
import background from '../../assets/img-login.png'

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  function handleLogin() {
    console.log(username)
    console.log(password)
  }

  return(
    <div className="Login">
      <div>
        <div>
          <h1>Olá,</h1>
          <h3>Para continuar navegando de forma segura, efetue o login na rede.</h3>
        </div>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <Input type="text" onChange={e => setUserName(e.target.value)} value={username}icon={iconInput} />
            <Input type="password" onChange={e => setPassword(e.target.value)} value={password} icon={iconPassword}/>
            <span>Ops, usuário ou senha inválidos. Tente novamente!</span>
          </div>
          <Button type="submit" label="continuar" />
        </form>
        </div>
        <div>
          <img src={logo} />
          <img src={background} />
        </div>
    </div>
  )
}
