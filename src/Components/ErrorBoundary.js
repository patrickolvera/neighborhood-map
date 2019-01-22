import React, {Component} from 'react';
import ErrorImage from '../Images/error-sign.png'

class ErrorBoundary extends Component {
state = {
    hasError: false
}

// Catch errors from child components and update state
componentDidCatch(error, info) {
    this.setState({hasError: true });
}

// If child component throws error, render error page
render() {
    if (this.state.hasError) {
        return (
        <div id="error-message">
            <img id="error-sign" src={ErrorImage} alt="Error Sign" />
            <h1>Something broke...</h1>
        </div>
        );
    } else {
        return this.props.children;
        }
    }
}

export default ErrorBoundary;
