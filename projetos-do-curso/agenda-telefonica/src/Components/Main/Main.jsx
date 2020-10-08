import React, { useState } from 'react'
import Input from '../Inputs/Input'

export default props => {
    const [lista, setLista] = useState([{}])

    return (
        <ul className="lista">
        {lista.map(repo => (
            <li key={props.repo.key++}>Nome: {props.repo.nome} - Numero: {props.repo.numero} </li>
        ))}
    </ul>
    )
}