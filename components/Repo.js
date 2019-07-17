import TimeAgo from './TimeAgo';
import { truncateOnWord } from '../lib/utils';

export default (props) => {
    return (
        <li className="post-item" title={props.description}>
            <a className="post-item-image-link" href={props.url} target="_blank">
                <img src="//placehold.it/70" alt="" />
            </a>
            <div className="post-item-content">
                <div className="post-item-meta">
                    <a href={`https://github.com/trending/${props.language}`} target="_blank">{props.language}</a>
                    &mdash; <small>{props.currentPeriodStars} stars today</small>
                </div>
                <h2 className="post-item-title">
                    <a className="post-item-title-link" href={props.url} target="_blank">{props.name}</a>
                </h2>
                {props.description &&
                    <p className="post-item-summary">{truncateOnWord(props.description, 100)}</p>
                }
            </div>
        </li>
    );
}