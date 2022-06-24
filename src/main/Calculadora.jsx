import React from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import './Calculadora.css'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}  

class Calculadora extends React.Component {

state = {...initialState}
    
    clearMemory = () => {
        this.setState({ ...initialState })
        console.log('limpar')
    }
    setOperation = (operation) => {
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e){
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals
            })
        }
        console.log(operation)
    }
    setDigit = (dig) => {
        if (dig === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + dig
        this.setState({
            displayValue,
            clearDisplay: false
        })
        if(dig !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }
    render(){
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
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
