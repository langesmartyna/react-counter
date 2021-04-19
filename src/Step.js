import React, {Component} from 'react';

class Step extends Component {

    render () {

        return (
        <div className="Step">
        <input ref={(data) => { this._inputStep = data} } onChange={()=>this.props.stepMethod( this._inputStep.value)} type="number" />
        </div>

        );
    }
}
      
export default Step;