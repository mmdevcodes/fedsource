import { useState, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default ({ name, videos }) => {
    const featuredVid = videos.filter(item => item.featured === true)[0];
    const [featuredItem, setFeaturedItem] = useState(featuredVid);

    const handleVidClick = useCallback(newFeaturedVid => {
        setFeaturedItem(prevFeatured => newFeaturedVid);
    }, []);

    return (
        <section className="items" aria-label={name || null}>
            {name && <header className="items-header">{name}</header>}
            <div className="player">
                <iframe title={featuredItem.title} src={`https://www.youtube.com/embed/${featuredItem.videoId}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="alt-videos">
                {videos.map(video => (
                    <button onClick={() => handleVidClick(video)} className="alt-video-item" aria-label={video.title} title={video.title} key={video.videoId}>
                        <LazyLoadImage
                            alt={video.title}
                            src={video.thumbnail}
                            effect="blur"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}