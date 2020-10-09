import React from 'react'

export default (props) => {
    const { min , max } = props
    const aleatorio = Math.random() * (max - min) + min
    return (
        <>
            <h1>O numero gerado foi: {aleatorio.toFixed(0)}</h1>
        </>
    );
}