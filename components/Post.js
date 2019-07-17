import TimeAgo from './TimeAgo';
import { rootDomain } from '../lib/utils';
import { truncateOnWord } from '../lib/utils';

export default (props) => {
    return (
        <li className="post-item" title={props.summary}>
            <a className="post-item-image-link" href={props.postUrl} target="_blank">
                <img src={props.thumbnail || "//placehold.it/70"} alt="" />
            </a>
            <div className="post-item-content">
                <div className="post-item-meta">
                    {props.sourceType === 'reddit' ?
                        <>
                            <a href={props.discussion} target="_blank">
                                {props.sourceName}
                            </a>&nbsp;
                            <a href={`https://reddit.com${props.sourceName}`} target="_blank">
                                <small>({rootDomain(props.postUrl)})</small>
                            </a>
                        </> :
                        <a href={props.sourceUrl} target="_blank">{props.sourceName} <small>({props.author})</small></a>
                     }
                    &mdash; <TimeAgo date={props.time} />
                </div>
                <h2 className="post-item-title">
                    <a className="post-item-title-link" target="_blank" href={props.postUrl}>
                        <span>{props.title}</span>
                        {props.featured === true &&
                            <svg aria-hidden="true" focusable="false" title="featured">
                                <use xlinkHref="/static/svg-legend.svg#icon-star" />
                            </svg>
                        }
                    </a>
                </h2>
                {props.summary &&
                    <p className="post-item-summary">{truncateOnWord(props.summary, 100)}</p>
                }
                {
                    props.keywords.length > 0 &&
                    <div className="post-item-keywords">
                        {props.keywords.map((keyword, i) => (
                            <span key={i}>{keyword}</span>
                        ))}
                    </div>
                }
            </div>
        </li>
    );
}