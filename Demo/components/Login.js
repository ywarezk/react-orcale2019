import React from 'react';
import { Button } from 'react-native-material-design';
import {View, TextInput} from 'react-native';

export default class Login extends React.Component {
    handleLogin = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <View>
                <TextInput />
                <Button value="Login" onPress={this.handleLogin} />
            </View>
        )
    }
}