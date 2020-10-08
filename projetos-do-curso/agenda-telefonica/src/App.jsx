import React from 'react';
import './Geral.css'

import Header from './Components/Header/Header'
import Cadastro from './Components/Cadastro/Cadastro'

export default () => {

  return (
    <div id="app">
          <Header></Header>
          <Cadastro></Cadastro>
    </div>
  )
}