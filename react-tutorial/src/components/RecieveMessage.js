import React from 'react';
import {connect} from 'react-redux';

class RecieveMessage extends React.Component {
    render() {
        return (
            <h1>{this.props.myMessage}</h1>
        )
    }
}

export default connect(
    function(state) {
        return {
            myMessage: state.message
        }
    }
)(RecieveMessage)