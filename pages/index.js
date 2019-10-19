import { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from '../components/ErrorMessage';
import Content from '../components/Content';
import Layout from '../components/Layout';
import MainListings from '../components/MainListings';

const allPostsQuery = gql`
    query allPosts($limit: Int!, $skip: Int!) {
        posts(limit: $limit, skip: $skip) {
            title
            author
            id
            keywords
            url,
            featured,
            datePosted,
            summary,
            discussion,
            thumbnail,
            source {
                name,
                type,
                url
            }
        }
        trendingrepos {
            id
            name
            author
            url
            description
            language
            stars
            forks
            currentPeriodStars
        }
        meta {
            postCount,
            updated
        }
        videos {
          title
          author
          summary
          datePosted
          videoId
          keywords
          thumbnail
          featured
          source {
              name,
              type,
              url
          }
        }
    }
`;

const allPostsQueryVars = {
    limit: 50,
    skip: 0
}

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <Query query={allPostsQuery} variables={allPostsQueryVars}>
                    {({ loading, error, data, fetchMore }) => {
                        if (error) return <ErrorMessage message='Error loading posts. The data server is probably restarting. Please refresh after a few seconds. If this error persists please contact < admin at fedsource.io >' error={error} />
                        if (loading) return <Content>Loading</Content>

                        return (
                            <MainListings data={data} />
                        );
                    }}
                </Query>
            </Layout>
        );
    }
}