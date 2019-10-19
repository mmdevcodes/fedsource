import TimeAgo from './TimeAgo';
import { truncateOnWord } from '../lib/utils';

export default (props) => {
    return (
        <article className="item" title={props.description || null} aria-labelledby={props.id}>
            <div className="item-content">
                <header className="item-meta">
                    <a
                        className="item-meta-source"
                        href={`https://github.com/trending/${props.language}`}
                        target="_blank"
                    >{props.language}</a>
                    {' '}&mdash;{' '}
                    <span className="item-meta-small">{props.currentPeriodStars} Stars Today</span>
                </header>
                <h2 id={props.id} className="item-title">
                    <a className="item-title-link" href={props.url} target="_blank">{props.name}</a>
                </h2>
                {props.description &&
                    <p className="item-summary">{truncateOnWord(props.description, 100)}</p>
                }
            </div>
        </article>
    );
}