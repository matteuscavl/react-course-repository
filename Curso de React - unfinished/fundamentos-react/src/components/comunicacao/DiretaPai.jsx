import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={17} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Mateus" idade={22} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Rubala" idade={21} nerd={true}></DiretaFilho>
        </div>
    )
}