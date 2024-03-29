import React, { Component } from 'react';
import './login.css';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        return this.setState({ error: '' });
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <label style={{ fontSize: '12px', color: 'white' }}>User Name</label>
                    <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

                    <label style={{ fontSize: '12px', color: 'white' }}>Password</label>
                    <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />


                    {/* <input className="logIn" type="submit" value="Log In" data-test="submit" /> */}
                    <button type="button" class="btn btn-primary">   <a style={{ color: "white", textDecoration: "none" }} href="/dashboard">Login</a></button>
                    <br />
                    <br />
                    <p>Do not have an account? Then <a style={{ color: 'black', fontWeight: 'bold' }} href="#">Sign Up</a>... </p>
                </form >
                <br />

            </div >
        );
    }
}

export default LoginPage;