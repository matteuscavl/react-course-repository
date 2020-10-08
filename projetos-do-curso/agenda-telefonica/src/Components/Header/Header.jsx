import React from 'react'
import './Header.css'

export default props => {
    const date = new Date()
    const anoAtual = date.getFullYear();

    return (
        <header className="main-header">
            <h2>Agenda Telefonica {anoAtual}</h2>
        </header>
    )
}