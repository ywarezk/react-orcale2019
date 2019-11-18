import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Hello extends React.Component {
    state = {
        isVisible : true
    }

    toggleVisiblity = () => {
        // alert('hello');


        this.setState({
            isVisible: !this.state.isVisible
        });

        // this is the more correct form to change the state
        // when the state relies on prev state
        // this.setState((prevState) => {
        //       return {isVisible:! prevState.isVisible}
        // })
    }

    render() {
        return (
            <View>
                {
                    this.state.isVisible && (
                        <Text style={ {textAlign: 'center', fontSize: 30} }>
                            Hello world {this.props.name} {this.props.vered}
                        </Text>
                    )
                }
                
                <Button onPress={this.toggleVisiblity} title={'toggle visibility'} />
            </View>
            
        )
    }
}