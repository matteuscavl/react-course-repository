import React from 'react'

export default (props) => {
    const isPar = props.numeros % 2 === 0 

    return (
        <div>
            { isPar ? 
                <span>É par</span> : <span>É Impar</span>
            }
        </div>
    )
}