import React, { useState } from 'react'

export default (props) => {

    const mega = (total) => {
        const nums = []
    
        for (let i = 0; i < total; i++) {
            let aleatorio = parseInt(Math.random() * (60 - 1) + 1)
            nums.push(aleatorio).toFixed(0)
    
            for (let j = 0; j < nums.length-1; j++) {
                if (nums[i] === nums[j]) {
                    nums.pop();
                }
    
                if (nums[i] < nums[j]) {
                    let bubble = 0;
                    bubble = nums[i]
                    nums[i] = nums[j]
                    nums[j] = bubble
                }
            }
        }
        return nums
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = mega(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div>
            <h3>Gerador de Numeros da Mega-sena</h3>
            <h3>{numeros.join(' ')}</h3>
            <input type="number" value={qtde} onChange={e => setQtde(+e.tartget.value)}></input>
            <button> Gerar numero</button>
        </div>
    )
}