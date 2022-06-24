import React from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import './Calculadora.css'


const initialState = {
    display: '0',
    clearDisplay: false,
    operation: null,
    value: [0,0],
    current: 0
}  

class Calculadora extends React.Component {

state = {...initialState}
    
    clearMemory = () => {
        console.log('limpar')
    }
    setOperation = (operation) => {
        console.log(operation)
    }
    setDigit = (dig) => {
        console.log(dig)
    }
    render(){
        return (
            <div className="calculator">
                <Display value={100}/>
                <Button label="AC" clickPropsFunc={() => this.clearMemory()} triple='triple'/>
                <Button label="/"clickPropsFunc={this.setOperation} operation='operation'/>
                <Button label="7"clickPropsFunc={this.setDigit}/>
                <Button label="8"clickPropsFunc={this.setDigit}/>
                <Button label="9"clickPropsFunc={this.setDigit}/>
                <Button label="*"clickPropsFunc={this.setOperation} operation='operation'/>
                <Button label="4"clickPropsFunc={this.setDigit}/>
                <Button label="5"clickPropsFunc={this.setDigit}/>
                <Button label="6"clickPropsFunc={this.setDigit}/>
                <Button label="-"clickPropsFunc={this.setOperation} operation='operation'/>
                <Button label="1"clickPropsFunc={this.setDigit}/>
                <Button label="2"clickPropsFunc={this.setDigit}/>
                <Button label="3"clickPropsFunc={this.setDigit}/>
                <Button label="+"clickPropsFunc={this.setOperation} operation='operation'/>
                <Button label="0"clickPropsFunc={this.setDigit} double='double'/>
                <Button label="."clickPropsFunc={this.setDigit}/>
                <Button label="="clickPropsFunc={this.setOperation} operation='operation'/>

            </div>    
        )
    }
}

export default Calculadora
