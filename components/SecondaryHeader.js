import SiteSearch from './SiteSearch';
import LastUpdated from './LastUpdated';

export default ({ updated, filter, handleSearch }) => (
    <header className="secondary-header">
        <SiteSearch filter={filter} handleSearch={handleSearch} />
        <LastUpdated updated={updated} />
    </header>
);