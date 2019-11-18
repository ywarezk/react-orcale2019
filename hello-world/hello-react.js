

const container = document.getElementById('container')

// <h1><strong><u>hello world</u></strong></h1>

// const h1 = React.createElement(
//     'h1', 
//     null, 
//     React.createElement(
//         'strong', 
//         null, 
//         React.createElement(
//             'u', 
//             null, 
//             'hello world with underline'
//         )
//     )
// );

// jsx
const h1 = (
    <h1>
        <strong>
            <u>hello world</u>
        </strong>
        <span> { Math.random() } </span>
    </h1>
)

function Hello() {
    return (
        <h1>
            <strong>
                <u>hello world</u>
            </strong>
            <span> { Math.random() } </span>
        </h1>
    )
}

class Hello2 extends React.Component {
    render() {
        return (
            <h1>
                <strong>
                    <u>hello world</u>
                </strong>
                <span> { Math.random() } </span>
            </h1>
        )
    }
}

ReactDOM.render(<Hello />, container);