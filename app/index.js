var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

class HelloUser extends React.Component {
    render() {
        return (
            <div>
                Hello World {this.props.name}!
            </div>
        )
    }
}

ReactDom.render(
    <HelloUser name='Willson Acevedo' />,
    document.getElementById('app')
);
