import React from 'react'
import './App.css'

import Mega from './components/ExercicioMegaSena/Mega'
import ContadorFunc from './components/Contador/ContadorFunc'
import Contador from './components/Contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/usuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import Produtos from './components/Repeticao/exercicioTabelaProduto'
import ListaAlunos from './components/Repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import DesafioAleatorio from './components/basicos/Desafio_Aleatorio'

export default _ => (
    <div id="app">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            
            <Card titulo="13 - Exercicio Megasena" color="#424242">
                <Mega qtde={5}></Mega>
            </Card>

            <Card titulo="12.1 - Contador Função" color="#424242">
                <ContadorFunc valorInicial={10}></ContadorFunc>
            </Card>

            <Card titulo="12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="11 - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="08 - Renderização Condicional" color="#982395">
                <ParOuImpar numeros={10}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Mateus'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'mateus@lima.com.br'}}></UsuarioInfo>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
                <UsuarioInfo usuario={{nome: 'Bernardo'}}></UsuarioInfo>
            </Card>

            <Card titulo="07 - Exercicio Repetição" color="#fff6">
                <Produtos></Produtos>
            </Card>

            <Card titulo="06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="05 - Componentes com Filho" color="#00C8F8">
                <Familia sobrenome="Cavalcanti">
                    <FamiliaMembro nome="Mateus"/>
                    <FamiliaMembro nome="Beatriz"/>
                    <FamiliaMembro nome="Ana"/>
                </Familia>
            </Card>

            <Card titulo="04 - Desafio Aleatório" color="#FA6900">
                <DesafioAleatorio min={52} max={100} />
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