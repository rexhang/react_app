import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.hrefs = this.hrefs.bind(this);
        this.state = {
            redirect: false
        }
    }
    hrefs(){
        this.setState({ redirect: true });  
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/index" />;
        }
        return (
            <div>
                <p>
                    user: <input type="text" />
                </p>
                <p>
                    pass: <input type="text" />
                </p>
                <button onClick={this.hrefs}>login in</button>
            </div>
        )
    }
}

export default Login;