import { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import SecondaryHeader from './SecondaryHeader';
import Posts from './Posts';
import Videos from './Videos';
import TrendingRepos from './TrendingRepos';
import ContentBlock from './ContentBlock';

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

export default class MainListings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFirstRender: true,
            postFilter: '',
            postData: []
        }

        this.setPosts = posts => {
            console.log('fsimdofisofimsdoifsdiosmf', posts);

            if (this.state.isFirstRender) {
                this.setState({ postData: posts, isFirstRender: false });
            }
        }
    }

    render() {
        return (
            <Query query={allPostsQuery} variables={allPostsQueryVars} onCompleted={data => console.log('what', data)}>
                {({ loading, error, data, fetchMore }) => {
                    if (error) return <ErrorMessage message='Error loading posts. The data server is probably restarting. Please refresh after a few seconds. If this error persists please contact < admin at fedsource.io >' error={error} />
                    if (loading) return <div>Loading</div>

                    const { posts, meta, trendingrepos, videos } = data;
                    // const featuredPosts = this.state.postData.filter(item => item.featured === true);
                    // const otherPosts = this.state.postData.filter(item => item.featured === false);
                    // const areMorePosts = posts.length && posts.length < meta.postCount; // TODO: Hook this up again lol

                    return (
                        <>
                            <SecondaryHeader updated={meta.updated} />
                            <div className="site-main-section">
                                <div className="area">
                                    {/* <Posts name="Featured Posts" posts={featuredPosts} featured={true} />
                                    <Posts name="Posts" posts={otherPosts} /> */}
                                    <ContentBlock>Have suggestions to add to the site? Email us at {'< admin at fedsource.io >'}</ContentBlock>
                                </div>
                                <div className="area">
                                    <Videos name="Featured Videos" videos={videos} />
                                    <TrendingRepos name="Trending Repositories" repos={trendingrepos} />
                                </div>
                            </div>
                        </>
                    );
                }}
            </Query>
        );
    }
}