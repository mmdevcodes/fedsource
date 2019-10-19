import { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import SecondaryHeader from './SecondaryHeader';
import Posts from './Posts';
import Videos from './Videos';
import TrendingRepos from './TrendingRepos';
import Content from './Content';

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
            initialPosts: [],
            posts: []
        }

        this.setPosts = posts => {
            this.setState({ posts });
        }

        this.queryComplete = posts => {
            if (this.state.isFirstRender) {
                this.setState({
                    isFirstRender: false,
                    initialPosts: posts
                }, () => this.setPosts(this.state.initialPosts));
            }
        }

        this.filterPosts = () => {
            const filteredPosts = this.state.initialPosts.filter(post => {
                const searchTerm = this.state.postFilter.toLowerCase();
                const postTitle = post.title.toLowerCase();

                // Search title
                if (postTitle.includes(searchTerm)) return true;

                // Search keywords
                if (post.keywords.filter(keyword => keyword.toLowerCase().includes(searchTerm)).length > 0) return true;
            });

            this.setPosts(filteredPosts);
        }

        this.handleSearch = event => {
            this.setState({ postFilter: event.target.value }, () => {
                this.filterPosts();
            });
        }
    }

    render() {
        return (
            <Query query={allPostsQuery} variables={allPostsQueryVars} onCompleted={data => this.queryComplete(data.posts)}>
                {({ loading, error, data, fetchMore }) => {
                    if (error) return <ErrorMessage message='Error loading posts. The data server is probably restarting. Please refresh after a few seconds. If this error persists please contact < admin at fedsource.io >' error={error} />
                    if (loading) return <div>Loading</div>

                    const { posts, meta, trendingrepos, videos } = data;
                    const featuredPosts = this.state.posts.filter(item => item.featured === true);
                    const otherPosts = this.state.posts.filter(item => item.featured === false);
                    const areMorePosts = posts.length && posts.length < meta.postCount; // TODO: Hook this up again lol

                    return (
                        <>
                            <SecondaryHeader updated={meta.updated} filter={this.state.postFilter} handleSearch={this.handleSearch} />
                            <div className="site-main-section">
                                <div className="area">
                                    <Posts name="Featured Posts" posts={featuredPosts} featured={true} />
                                    <Posts name="Posts" posts={otherPosts} />
                                    <Content>Have suggestions to add to the site? Email us at {'< admin at fedsource.io >'}</Content>
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