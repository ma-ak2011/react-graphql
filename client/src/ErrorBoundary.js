// eslint-disable-next-line no-use-before-define
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      // You can render any custom fallback UI
      // eslint-disable-next-line react/jsx-filename-extension
      return <h1>Something went wrong.</h1>;
    }
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    return this.props.children;
  }
}
