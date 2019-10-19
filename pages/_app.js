import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo';

class FEDSource extends App {
    handleScroll(e) {
        if (window.pageYOffset > 50) {
            document.body.classList.add('wide');
        } else {
            document.body.classList.remove('wide');
        }
    }

    componentDidMount() {
        if (process.browser) {
            window.addEventListener('scroll', this.handleScroll);
            window.FocusOverlay = require('focus-overlay').default;
            new window.FocusOverlay();
        }
    }

    render() {
        const { Component, pageProps, apolloClient } = this.props;

        return (
            <Container>
                <ApolloProvider client={apolloClient}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        );
    }
}

export default withApolloClient(FEDSource);