import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';

import ButtonsPanel from './ButtonsPanel';

import Step from './Step';

import Clock from './Clock';




// let randomNumber = Math.floor(Math.random() * (108 - 1 + 1 ) + 1);

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 3,
        };
    }

    

    // 1 metoda - this.setState - jako parametr - obiekt (counterValue) ------>

    // changeValue = () => {
    //     // console.log('changeValue clicked')
    //     this.setState({
    //         counterValue: this.state.counterValue + 1
    //     });
    // }


    //  2 metoda - this.setState - jako parametr - funkcja ------> 

    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += this.state.stepValue;

            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;

            } else {
                currentCounterValue = 0;

            }

            return ({
                counterValue: currentCounterValue
            })
        });

    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        })
    }

    updateStepValue = (currentValue) => {
        
        this.setState({
            stepValue: parseFloat(currentValue)
        });
    }
   
 
    render() {
        // let randomNumber = Math.floor(Math.random() * (108 - 1 + 1 ) + 1);

        let clockElement = '';
        if (this.state.showClock) {
            clockElement = <Clock toggleClockMethod={this.toggleClock} />
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                <Step stepMethod={this.updateStepValue} />
                {clockElement}
            </div>
        );
    }
}

export default Counter;


// function Counter(props) {

// let randomNumber = Math.floor(Math.random() * (108 - 1 + 1 ) + 1);
//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     )
// }

// export default Counter;
