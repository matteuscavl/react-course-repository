import React, { Component } from 'react'
import './Calculator.css'

import Button from '../Components/Buttons/Button'
import Display from '../Components/Display/Display'

export default class Calculator extends Component {

    clearMemory () {
        console.log('Limpar')
    }

    setOperation (operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

    render () {
        const addDigit = (n) => this.addDigit(n)
        const setOperation = (n) => this.setOperation(n)

        return (
            <div className="calculator">
                <Display value={100}></Display>
                <Button label="AC" click={() => this.clearMemory()} triple></Button>
                <Button label="/" click={setOperation} operation></Button>
                <Button label="7" click={addDigit}></Button>
                <Button label="8" click={addDigit}></Button>
                <Button label="9" click={addDigit}></Button>
                <Button label="*" click={setOperation} operation></Button>
                <Button label="4" click={addDigit}></Button>
                <Button label="5" click={addDigit}></Button>
                <Button label="6" click={addDigit}></Button>
                <Button label="-" click={setOperation} operation></Button>
                <Button label="1" click={addDigit}></Button>
                <Button label="2" click={addDigit}></Button>
                <Button label="3" click={addDigit}></Button>
                <Button label="+" click={setOperation} operation></Button>
                <Button label="0" click={addDigit}></Button>
                <Button label="." click={addDigit}></Button>
                <Button label="=" click={setOperation} operation></Button>
            </div>
        )
    }
}