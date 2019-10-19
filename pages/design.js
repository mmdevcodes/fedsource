import { Component } from 'react';
import SiteSearch from '../components/SiteSearch';

import '../sass/main.scss';

export default class Design extends Component {
    handleScroll(e) {
        if (window.pageYOffset > 50) {
            document.body.classList.add('wide');
        } else {
            document.body.classList.remove('wide');
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className="site-container">
                <main className="site-main">
                    <header className="secondary-header">
                        <SiteSearch />
                        {/*
                            <ul className="secondary-header-links">
                                <li><a href="">Link 1</a></li>
                                <li><a href="">Link 2</a></li>
                                <li><a href="">Link 3</a></li>
                                <li><a href="">Link 4</a></li>
                                <li><a href="">Link 5</a></li>
                            </ul>
                        */}
                        <div className="secondary-header-info">Last updated 2 minutes ago</div>
                    </header>
                    <div className="site-main-section">
                        <div className="area">
                            <section className="items featured" aria-label="Featured Posts">
                                <article className="item">
                                    <a href="#" className="item-link-img">
                                        <img src="//placehold.it/100" alt=""/>
                                    </a>
                                    <div className="item-content">
                                        <header className="item-meta">
                                            <a className="item-meta-source" href="#"> CSS-Tricks</a>
                                            <a href="#" className="item-meta-author"> (Reallylong Name)</a>
                                            <time className="item-meta-small"> - 17 hours ago</time>
                                        </header>
                                        <h2 className="item-title">
                                            <a className="item-title-link" href="#">Create Node App & MetaModules. A way to spin up an Node.js app with services like Redis, Postgres, MongoDB, etc</a>
                                        </h2>
                                        <p className="item-summary">👋 Hey folks! Silvestar pitched this post to us because he is genuinely enthusiastic about JAMstack...</p>
                                    </div>
                                </article>
                                <article className="item">
                                    <a href="#" className="item-link-img">
                                        <img src="//placehold.it/100" alt=""/>
                                    </a>
                                    <div className="item-content">
                                        <header className="item-meta">
                                            <a className="item-meta-source" href="#"> /r/javascript</a>
                                            <a href="#" className="item-meta-author"> (github.com)</a>
                                            <time className="item-meta-small"> - a day ago</time>
                                        </header>
                                        <h2 className="item-title">
                                            <a className="item-title-link" href="#">Made a homebrewed 13kb rendering engine in canvas</a>
                                        </h2>
                                    </div>
                                </article>
                            </section>
                            <section className="items" aria-label="Posts">
                                <article className="item">
                                    <a href="#" className="item-link-img">
                                        <img src="//placehold.it/100" alt=""/>
                                    </a>
                                    <div className="item-content">
                                        <header className="item-meta">
                                            <a className="item-meta-source" href="#"> Devto - DEV Community</a>
                                            <a href="#" className="item-meta-author"> (Aaron Parecki)</a>
                                            <time className="item-meta-time"> - a day ago</time>
                                        </header>
                                        <h2 className="item-title">
                                            <a className="item-title-link" href="#">Add Authentication to your PHP App in 5 Minutes</a>
                                        </h2>
                                        <div className="item-keywords">
                                            <span>#help</span>
                                            <span>#html</span>
                                            <span>#webdev</span>
                                            <span>#beginners</span>
                                        </div>
                                    </div>
                                </article>
                            </section>
                        </div>
                        <div className="area">
                            <section className="section" aria-label="Featured Video">
                                <div className="player">
                                    <iframe src="https://www.youtube.com/embed/1-_OwGncF6c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className="alt-videos">
                                    <button className="alt-video-item">
                                        <img src="//placehold.it/100" alt=""/>
                                    </button>
                                    <button className="alt-video-item">
                                        <img src="//placehold.it/100" alt=""/>
                                    </button>
                                    <button className="alt-video-item">
                                        <img src="//placehold.it/100" alt=""/>
                                    </button>
                                    <button className="alt-video-item">
                                        <img src="//placehold.it/100" alt=""/>
                                    </button>
                                    <button className="alt-video-item">
                                        <img src="//placehold.it/100" alt=""/>
                                    </button>
                                </div>
                            </section>
                            <section className="items" aria-label="Trending Repositories">
                                <article className="item">
                                    <div className="item-content">
                                        <header className="item-meta">
                                            <a className="item-meta-source" href="#">Javascript</a>
                                            <span className="item-meta-small"> - 90 Stars Today</span>
                                        </header>
                                        <h2 className="item-title">
                                            <a className="item-title-link" href="#">WebGL-Fluid-Simulation</a>
                                        </h2>
                                        <div className="item-summary">Play with fluids in your browser (works even on mobile)</div>
                                    </div>
                                </article>
                                <article className="item">
                                    <div className="item-content">
                                        <header className="item-meta">
                                            <a className="item-meta-source" href="#">Javascript</a>
                                            <span className="item-meta-small"> - 90 Stars Today</span>
                                        </header>
                                        <h2 className="item-title">
                                            <a className="item-title-link" href="#">WebGL-Fluid-Simulation</a>
                                        </h2>
                                        <div className="item-summary">Play with fluids in your browser (works even on mobile)</div>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}