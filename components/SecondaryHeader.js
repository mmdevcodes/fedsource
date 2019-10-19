import SiteSearch from './SiteSearch';
import LastUpdated from './LastUpdated';

export default ({ updated }) => (
    <header className="secondary-header">
        <SiteSearch />
        <LastUpdated updated={updated} />
    </header>
);