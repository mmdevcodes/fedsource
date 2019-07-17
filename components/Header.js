import Link from 'next/link'

const Header = () => (
    <header className="site-header">
        <h1 className="site-logo">
            <Link href="/">
                <a>
                    <svg aria-hidden="true" focusable="false">
                        <use xlinkHref="/static/svg-legend.svg#logo" />
                    </svg>
                    <span className="visually-hidden">FEDSource</span>
                </a>
            </Link>
        </h1>
        <nav className="site-nav">
            <div className="site-search">
                <label className="site-search-label" htmlFor="search">
                    <span className="sr-only">Search</span>
                    <svg className="site-search-icon" aria-hidden="true">
                        <use xlinkHref="/static/svg-legend.svg#icon-search" />
                    </svg>
                </label>
                <input className="site-search-input" id="search" type="text" placeholder="Search (doesn't work yet)" />
            </div>
            <div className="site-links">
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        </nav>
    </header>
);

export default Header;