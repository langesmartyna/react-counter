import React, {Component} from 'react';
import './Counter.css';

import Display from './Display';

import ButtonsPanel from '.ButtonsPanel';


let randomNumber = Math.floor(Math.random() * (108 - 1 + 1 ) + 1);

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue : this.props.initValue
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

    changeValue = () => {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue + 1
            });
        });
          
    }

    render() {
        // let randomNumber = Math.floor(Math.random() * (108 - 1 + 1 ) + 1);

        return (
            <div className="counter">
            Counter:
            <Display displayValue={this.state.counterValue} />
            <button onClick={this.changeValue}>
                Add 1
            </button>
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
