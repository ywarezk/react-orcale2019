import React from 'react';

export default class Login extends React.Component {
    handleLogin = (event) => {
        event.preventDefault();
        this.props.history.push('/dashboard');
        
        // event.stopPropagation();
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1>hello im in the login page</h1>
                <input type="email" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}