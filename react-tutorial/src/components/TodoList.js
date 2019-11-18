import React from 'react';

export default class TodoList extends React.Component {
    state = {
        tasks: []
    }

    // constructor(props) {
    //     super(props);
    // }

    async componentDidMount() {
        // fetch('https://nztodo.herokuapp.com/api/task/?format=json')
        //     .then((response) => {
        //         response.json().then((data) => {
        //             this.setState({
        //                 tasks: data
        //             })
        //         })
        //     })

        // fetch('https://nztodo.herokuapp.com/api/task/?format=json')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             tasks: data
        //         })
        //     });

        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const data = await response.json();
        this.setState({
            tasks: data
        })
    }

    render() {
        return (
            <ul>
                {
                    /*[<li></li>, <li></li>]*/
                    this.state.tasks.map((singleTask) => {
                        return <li>{singleTask.title}</li>
                    })
                }
                
                    
            </ul>
        )
    }
}