import React, {Component} from 'react';

import {Button} from './Button';

import config from './config.json';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isLoaded: false,
            error: null
        }

    }

    componentWillMount() {
        fetch(config.BACKEND_URL + "/count")
            .then(res => {console.log(res); return res})
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    count: parseInt(result.value)
                })
            })
            .catch(err => {
                this.setState({
                    isLoaded: true,
                    error: err
                })
            })
    }

    handleCount(value) {
        console.log(this.state)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ counter: this.state.count + 1 })
        };
        fetch(config.BACKEND_URL + '/count', requestOptions)
            .then(() => {
                this.setState((prevState) => ({count: prevState.count + 1}));
            })
            .catch(console.error)
    }

    render() {
        const { count, isLoaded, error } = this.state;

        if (error) {
            return (<div>Error: {error.message}</div>);
        } else if (!isLoaded) {
            return (<div>Loading..</div>);
        } else {
            return (
                <div>
                    Current count: {count}
                    <hr/>
                    <Button sign="+" count={count} updateCount={this.handleCount.bind(this)}/>
                </div>
            );
        }
    }
}

export default App;