import React, { Component } from 'react';
import CalculatorTitle from './CalculatorTitle.js';
import OutputScreen from './OutputScreen.js';
import Button from './Button.js';
import "../css/Calculator.css";

class Calculator extends Component {
    constructor() { 
        super(); 
        //Setting Default State
        this.state = { 
            question: '',  //Input Value
            answer: ''  //Display Output
        } 
        this.handleClick = this.handleClick.bind(this); 
        }

        handleClick(event){ 
        const value = event.target.value;
        switch (value) { 
            case '=': { 
                if (this.state.question!=='') 
                { 
                    var ans=''; 
                        try
                        {
                            ans = eval(this.state.question);  // eval() Use String as Integer 
                        }
                        catch(err)
                        {
                            this.setState({answer: "Math Error"});  //Set State is used to set the Value according to the condition
                        }

                        if (ans===undefined)
                            this.setState({answer: "Math Error"});
                        else
                            this.setState({ answer: ans , question: ''});
                        break; 
                } 
            }
            case 'CE': {
                this.setState({ question: '', answer: ''}); 
                break;
            }
            case 'C': { 
                var str = this.state.question; 
                str = str.substr(0,str.length-1); 
                this.setState({question: str});
                break;
            }
            default: {
                // for every other command, update the answer in the state 
                this.setState({ question: this.state.question += value})
                break;
                }
            }
        }
    render() {
        return (
            <div className="position-absolute top-50 start-50 translate-middle">
            <div className="align-items-center frame">
                <div className="cal-title">
                    <CalculatorTitle value="Normal Calculator" />
                </div>
                <div className="MainClass">
                    <OutputScreen question={this.state.question} answer={this.state.answer} />
                    <div className="button-row-1"> 
                        <Button label={'CE'} handleClick = {this.handleClick} type='action'/> 
                        <Button label={'C'} handleClick = {this.handleClick} type='action' /> 
                        <Button label={'.'}  handleClick = {this.handleClick} type='action'/> 
                        <Button label={'/'} handleClick = {this.handleClick} type='action'/>
                    </div>
                    <div className="button-row">
                        <Button label={'1'} handleClick = {this.handleClick} type='input'/> 
                        <Button label={'2'} handleClick = {this.handleClick} type='input'/> 
                        <Button label={'3'} handleClick = {this.handleClick} type='input'/>
                        <Button label={'*'} handleClick = {this.handleClick} type='action'/> 
                    </div> 
                    <div className="button-row">
                        <Button label={'4'} handleClick = {this.handleClick} type='input'/> 
                        <Button label={'5'} handleClick = {this.handleClick} type='input'/> 
                        <Button label={'6'} handleClick = {this.handleClick} type='input'/> 
                        <Button label={'-'} handleClick = {this.handleClick} type='action'/> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={'7'} handleClick = {this.handleClick} type='input'/> 
                        <Button label={'8'} handleClick = {this.handleClick} type='input'/> 
                        <Button label={'9'} handleClick = {this.handleClick} type='input'/> 
                        <Button label={'+'} handleClick = {this.handleClick} type='action'/> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={'0'} handleClick = {this.handleClick} type='input'/> 
                        <Button label={'='} handleClick = {this.handleClick} type='action'/> 
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Calculator;
