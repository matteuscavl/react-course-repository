import React from 'react'

import './App.css'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import DesafioAleatorio from './components/basicos/Desafio_Aleatorio'

export default _ => (
    <div id="app">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="04 - Desafio Aleatório" color="#FA6900">
                <DesafioAleatorio min={30} max={60} />
            </Card>

            <Card titulo="03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="02 - Com Parametro (Props)" color="#E8B71A">
                <ComParametro
                    titulo="Situação Aluno"
                    aluno="Pedro"
                    nota={5}
                />
            </Card>

            <Card titulo="01 - Fragmento" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
);