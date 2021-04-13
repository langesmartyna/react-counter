import React, {Component} from 'react';

import './Clock.css';

class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {date: new Date()};
        console.log(`construktor(props)`);

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {this.tick()},
            1000
        );

    }

    componentDidUpdate() {
        console.log()
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div className="clock">
                <h4>Time: {this.state.date.toLocaleTimeString()} <span onClick={this.props.toggleClockMethod}>X</span></h4>
            </div>
        )
    }

}

export default Clock;
