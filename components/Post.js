import { LazyLoadImage } from 'react-lazy-load-image-component';
import TimeAgo from './TimeAgo';
import { rootDomain } from '../lib/utils';
import { truncateOnWord } from '../lib/utils';

export default (props) => {
    return (
        <article className={`item ${props.featured ? 'featured' : ''}`} title={props.summary || null} aria-labelledby={props.id}>
            {props.thumbnail &&
                <a href={props.postUrl} className="item-link-img" aria-hidden="true">
                    <LazyLoadImage
                        alt=""
                        src={props.thumbnail}
                        effect="blur"
                    />
                </a>
            }
            <div className="item-content">
                <header className="item-meta">
                    <a
                        className="item-meta-source"
                        href={props.sourceType === 'reddit' ? props.discussion : props.sourceUrl}
                        target="_blank"
                    >{props.sourceName}</a>

                    {props.sourceType === 'reddit' ?
                        <a href={`https://reddit.com${props.sourceName}`} target="_blank" className="item-meta-author"> ({rootDomain(props.postUrl)})</a> :
                        <span className="item-meta-author"> ({props.author})</span>
                    }
                    {' '}&mdash;{' '}
                    <TimeAgo className="item-meta-small" date={props.time} />
                </header>
                <h2 id={props.id} className="item-title">
                    <a className="item-title-link" href={props.postUrl} target="_blank">{props.title}</a>
                </h2>
                {props.summary &&
                    <p className="item-summary">{truncateOnWord(props.summary, 100)}</p>
                }
                {
                    props.keywords.length > 0 &&
                    <div className="item-keywords">
                        {props.keywords.map((keyword, i) => (
                            <span key={i}>{keyword}</span>
                        ))}
                    </div>
                }
            </div>
        </article>
    );
}