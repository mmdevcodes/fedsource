import Link from 'next/link'
import Icon from './Icon';

export default () => (
    <header className="site-header">
        <h1 className="site-header-logo">
            <Link href="/">
                <a>
                    <img src="/static/logo.svg" alt="FEDSource"/>
                </a>
            </Link>
        </h1>
        <ul className="site-header-link-list">
            <li className="site-header-link-item">
                <Link href="/about">
                    <a className="site-header-link">
                        <Icon name="info" className="site-header-link-icon" />
                        <span className="site-header-link-text">About</span>
                    </a>
                </Link>
            </li>
            <li className="site-header-link-item">
                <a className="site-header-link" href="#">
                    <Icon name="github" className="site-header-link-icon" />
                    <span className="site-header-link-text">Github</span>
                </a>
            </li>
        </ul>
    </header>
);