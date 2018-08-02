import React, {Component} from 'react';

export default class Appone extends Component {
    constructor(props) {
        super(props);

        this.updateState();
        this.updateState = this.updateState.bind(this);
        this.clickButton = this.setState({data:'Updated...'});
    };

    updateState() {
        this.state = {
            data: 'Initial Data...'
        }
    }


    render() {
        return (
            <div>
                <button onClick = {this.clickButton}>CLICK</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}