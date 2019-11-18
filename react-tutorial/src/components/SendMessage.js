import React from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../redux/action';

class SendMessage extends React.Component {
    state = {
        message: ''
    }

    sendMessage = (event) => {
        event.preventDefault();
        console.log(this.state.message);
        this.props.changeMessagePlease(this.state.message);
    }

    handleChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.sendMessage}>
                <input 
                    value={this.state.message} 
                    type="text" 
                    onChange={this.handleChange} />
                <button type="submit">send message</button>
            </form>
        )
    }
}

export default connect(
    null,
    {
        changeMessagePlease: setMessage
    }
)(SendMessage);