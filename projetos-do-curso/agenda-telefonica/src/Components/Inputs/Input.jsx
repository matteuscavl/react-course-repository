import React, { useState } from 'react'
import './Input.css'

export default props => {
    const [nomeContato, setNomeContato] = useState('')
    const [numberContato, setNumberContato] = useState('')
    const [lista, setLista] = useState([{}])

    const addContact = () => {
        setLista([...lista, {key: Math.random(), nome: nomeContato, numero: numberContato}])
    }

    const limparLista = () => {
        setLista([{}])
    }



    return (
        <div className="divInput">
            <input type="name" 
            placeholder="Digite o nome do Usuário" 
            value={nomeContato} 
            onChange={e => setNomeContato(e.target.value)}>
            </input>

            <input type="number" 
            placeholder="Digite o telefone do Usuario" 
            value={numberContato} 
            onChange={e => setNumberContato(e.target.value)}></input>
            <button onClick={addContact}> Cadastrar ! </button>

            <ul className="lista">
                {lista.map(repo => (
                    <li key={repo.key++}>Nome: {repo.nome} - Numero: {repo.numero} </li>
                ))}
            </ul>

            <button onClick={limparLista}> Limpar Lista </button>
        </div>
    )
}