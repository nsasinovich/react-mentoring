// @flow
import React from 'react';
import './search_results_error_boundary.scss';

type Props = {
    children: any,
}

type State = {
    hasError: boolean,
  };

export default class SearchResultsErrorBoundary extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="error-boundary">Something went wrong.</h1>;
        }
        return this.props.children;
    }
}
