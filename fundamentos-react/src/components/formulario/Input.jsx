import './Input.css'
import React, { useState } from 'react'

export default (props) => {
    const [valor, setValor] = useState('')
    function quandoMudar (e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar} placeholder="Digite algo"/>
                <input value={valor} readOnly/>
            </div>
        </div>
    )
}