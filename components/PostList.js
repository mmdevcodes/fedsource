import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './Post';
import Repo from './Repo';
import TimeAgo from './TimeAgo';;
import ErrorMessage from './ErrorMessage';
import shuffleSeed from 'shuffle-seed';

export const allPostsQuery = gql`
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
    }
`;

export const allPostsQueryVars = {
    limit: 50,
    skip: 0
}

export default function PostList() {
    return (
        <Query query={allPostsQuery} variables={allPostsQueryVars}>
            {({ loading, error, data, fetchMore }) => {
                if (error) return <ErrorMessage message='Error loading posts. The data server is probably restarting. Please refresh after a few seconds. If this error persists please contact < admin at fedsource.io >' error={error} />
                if (loading) return <div>Loading</div>

                const { posts, meta, trendingrepos } = data;
                const areMorePosts = posts.length && posts.length < meta.postCount;

                return (
                    <>
                        <p className="last-updated">Last updated <TimeAgo date={meta.updated} /></p>
                        <section className="post-list-section" aria-label="Post Listing">
                            <h2>Posts</h2>
                            <ul className="post-list">
                                {listPosts(posts)}
                            </ul>
                            {areMorePosts && (
                                <>
                                    <br/>
                                    <button onClick={() => loadMorePosts(posts, fetchMore)}>
                                        {' '}
                                        {loading ? 'Loading...' : 'Show More'}{' '}
                                    </button>
                                </>
                            )}
                        </section>
                        <section className="git-trending-section" aria-label="Github Trending">
                            <h2>Github Trending</h2>
                            <ul className="post-list">
                                {trendingrepos.map((repo, i) => (
                                    <Repo
                                        key={i}
                                        name={repo.name}
                                        author={repo.author}
                                        url={repo.url}
                                        description={repo.description}
                                        language={repo.language}
                                        stars={repo.stars}
                                        forks={repo.forks}
                                        currentPeriodStars={repo.currentPeriodStars}
                                    />
                                ))}
                            </ul>
                        </section>
                    </>
                );
            }}
        </Query>
    )
}

function listPosts(arr) {
    const featuredPosts = arr.filter(item => item.featured === true);
    const normalPosts = arr.filter(item => item.featured === false);

    function sortAndMap(posts) {
        return posts
            .sort((a, b) => {
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }

                return 0;
            })
            .map(post => (
                <Post
                    key={post.id}
                    sourceUrl={post.source.url}
                    sourceType={post.source.type}
                    sourceName={post.source.name}
                    time={post.datePosted}
                    postUrl={post.url}
                    title={post.title}
                    author={post.author}
                    discussion={post.discussion}
                    keywords={post.keywords}
                    thumbnail={post.thumbnail}
                    featured={post.featured}
                    summary={post.summary}
                />
            ));
    }

    return [
        sortAndMap(featuredPosts),
        sortAndMap(normalPosts)
    ];
}

function loadMorePosts(allPosts, fetchMore) {
    fetchMore({
        variables: {
            skip: allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
                return previousResult
            }

            return Object.assign({}, previousResult, {
                // Append the new post results to the old one
                posts: [...previousResult.posts, ...fetchMoreResult.posts]
            })
        }
    })
}