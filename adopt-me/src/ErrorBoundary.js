import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
class ErrorBoundary extends Component {

    state = { hasError: false, redirect: false };

    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.error("Error boundary caught an error", error, info);
        setTimeout(() => this.setState({
            redirect: true
        }), 5000);
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        else if (this.state.hasError) {
            return (
                <h2>
                    This listing has an error <Link to="/">Click here</Link> to go back to homepage or wait five seconds
                </h2>
            )
        }
        //In order to render whatever is inside the ErrorBoundary
        //For example <ErrorBoundary><h1>Hello</h1></ErrorBoundary>
        //So in case there is no error, h1 will be rendered
        return this.props.children;
    }
}

export default ErrorBoundary;