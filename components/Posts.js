import Post from './Post';
import shuffleSeed from 'shuffle-seed';

export default ({ name, posts, featured }) => {
    const shuffledPosts = shuffleSeed.shuffle(posts, 'fedsource');

    return (
        <section className={`items ${featured ? 'featured' : ''}`} aria-label={name || null}>
            {name && <header className="items-header">{name}</header>}
            {shuffledPosts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
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
            ))}
        </section>
    );
}