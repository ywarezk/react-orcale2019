/**
 * component that displays hello world
 */

import React from 'react';

export default class Hello extends React.Component {
    state = {
        isVisible: true
    }

    toggleVisiblity = () => {
        // alert('hello');
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    drawH1 = () => {
        return (
            <h1>
                <strong>
                    hello world {this.props.name}
                </strong>                
            </h1>
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.isVisible ? this.drawH1() : null       
                }
                <button onClick={this.toggleVisiblity} >
                    Toggle text
                </button>
            </div>
        );
    }
}

// export const hello = 'stam string';