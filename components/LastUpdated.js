import TimeAgo from './TimeAgo';

export default ({ updated }) => (
    <div className="secondary-header-info">Last updated <TimeAgo date={updated} className="time" /></div>
);