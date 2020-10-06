import React, { useState } from 'react'

export default (props) => {
    const [valorInicial, setValor] = useState(props.valorInicial)
    const [passoInicial, setPasso] = useState(props.passoInicial || 5)

    const aumentar = () => {
        setValor(valorInicial + passoInicial)
    }

    const diminuir = () => {
        setValor(valorInicial - passoInicial)
    }

    const passo = (e) => {
        setPasso(parseInt(e.target.value))
    }

    return (
        <div>
            <p>Contador</p>
            <p><strong>{valorInicial}</strong></p>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number" value={passoInicial} onChange={passo}></input>
            <button onClick={aumentar}> + </button>
            <button onClick={diminuir}> + </button>
        </div>
    )
}