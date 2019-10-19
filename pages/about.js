import Head from 'next/head';
import Layout from '../components/Layout';
import Content from '../components/Content';

export default () => (
  <Layout>
      <Head>
        <title>FEDSource - About</title>
      </Head>
      <Content>
        <h2>Keeping up with the front-end development world is hard.</h2>
        <p>So I created FEDSource as a content aggregator that pulls resources from around the internet.</p>
        <p>Only basic functionality is added so far. This is a side project that is still a work in progress.</p>
        <p>Please contact {'< admin at fedsource.io >'} for any questions.</p>
      </Content>
  </Layout>
);