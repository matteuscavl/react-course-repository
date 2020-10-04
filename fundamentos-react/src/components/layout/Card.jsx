import './Card.css'
import React from 'react'

export default (props) => {
    
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="Card" style={cardStyle}>
        <div className="title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}