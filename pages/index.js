import { Component } from 'react';
import Layout from '../components/Layout';
import MainListings from '../components/MainListings';

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <MainListings />
            </Layout>
        );
    }
}