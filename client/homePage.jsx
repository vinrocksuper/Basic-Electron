const React = require('react');
const ReactDOM = require('react-dom');

const HelloUser = (props) => {
    return (
        <div>
            <h1>Hello {props.username}</h1>
            <p>Welcome to Electron!</p>
        </div>
    )
}


const init = () => {
    ReactDOM.render(<HelloUser username='user' />, document.getElementById('content'));
}

window.onload = init;