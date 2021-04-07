import React, {Component} from 'react';
import './Step.css';

// changeValue = () => {
//     this.setState((prevState) => {
//         return ({
//             counterValue: prevState.counterValue + 5
//         });
//     });
      
// }

// komponent klasowy --->

class Step extends Component {
    render () {


        return (
            <div className="counter">
            <h1>Licznik :</h1>
            <button>
                Add 1
            </button>
            <button>
                2
            </button>
            <button onClick>
                Reset
            </button>
                <input type="number" />
            </div>
        );    

    }
}

export default Step; 