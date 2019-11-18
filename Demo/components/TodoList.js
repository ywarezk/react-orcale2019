import React from 'react';
import { FlatList, Text } from 'react-native';

export default class TodoList extends React.Component {
    state = {
        tasks: []
    }

    async componentDidMount() {
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const data = await response.json();
        this.setState({
            tasks: data
        })
    }

    render() {
        return (
            <FlatList 
                renderItem={({item}) => {
                    return (
                        <Text>{item.title}</Text>
                    )
                }}
                data={this.state.tasks} />
        )
    }
}