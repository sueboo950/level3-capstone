import React from 'react';
import NavBar from '../components/Navbar';
import AboutImage from '../components/AboutImage';
import AboutContent from '../components/AboutContent';
import HelpResources from '../components/HelpfulResources';
import 'bootstrap/dist/css/bootstrap.min.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

const About = () => (
    <ErrorBoundary>
        <div style={{ backgroundColor: 'violet', height: '100vh' }}>
            <NavBar />
            <div className="container" style={{ paddingTop: '5%' }}>
                <h1>About the Designer</h1>
                <div className="row">
                    <AboutImage />
                    <AboutContent />
                    <HelpResources />
                </div>
            </div>
        </div>
    </ErrorBoundary>
);

export default About;
