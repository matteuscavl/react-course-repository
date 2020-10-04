import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7.5 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>Aluno <strong>{props.aluno}</strong> tem a nota {notaInt} e o status é {status}</p>
        </div>
    )
}