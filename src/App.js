import React, { useState } from 'react';
import api from './services/api';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/users', {
      email
    });

    console.log(response);
  }

  return (
    <div className='container'>
      <div className='content'>
        <p>Insira seu e-mail</p>
        <form onSubmit={ handleSubmit }>
          <label htmlFor='email'>E-MAIL*</label>
          <input 
            type='email' 
            id='email' 
            placeholder='Seu melhor e-mail '
            value={email}
            onChange={event => setEmail(event.target.value)}  
          ></input>
          <button type='submit'>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
