import Head from 'next/head';
import Header from './Header';
import '../sass/main.scss';

export default (props) => (
    <div className="site-wrapper">
        <Head>
            <title>FEDSource</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script async src={'https://www.googletagmanager.com/gtag/js?id=UA-136751336-1'} />
            <script dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-136751336-1');
                `}}
            />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
            <link rel="manifest" href="/static/site.webmanifest" />
            <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#005e89" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <meta name="msapplication-TileColor" content="#005e89" />
            <meta name="msapplication-config" content="/static/browserconfig.xml" />
            <meta name="theme-color" content="#005e89" />
        </Head>
        <Header />
        <main className="site-main">
            {props.children}
        </main>
    </div>
);