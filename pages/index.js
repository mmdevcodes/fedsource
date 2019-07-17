import { Component } from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

class Index extends Component {
    render() {
        return (
            <Layout>
                <PostList />
            </Layout>
        );
    }
}

export default Index;