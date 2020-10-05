import React from 'react'

export default props => {
    const callback = props.quandoClicar
    const gerarIdade = () => {
        return parseInt(Math.random() * (20)) + 50
    }

    const gerarNerd = () => {
        if (Math.random() > 0.5) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                () => {
                    callback('Pedro', gerarIdade(), gerarNerd())
                }
            }>
                Fornecer Dados
            </button>
        </div>
    )
}