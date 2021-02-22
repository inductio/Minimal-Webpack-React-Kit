import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.greeting = 'Hello World';
    }

    render() {
        return <p>
            {this.greeting} - from ReactComponent
        </p>;
    }
}

export default App;
