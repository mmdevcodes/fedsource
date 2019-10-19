import { Component } from 'react';
import SecondaryHeader from './SecondaryHeader';
import Posts from './Posts';
import Videos from './Videos';
import TrendingRepos from './TrendingRepos';
import Content from './Content';

export default class MainListings extends Component {
    constructor(props) {
        super(props);

        this.initialData = this.props.data;

        this.state = {
            isFirstRender: true,
            postFilter: '',
            posts: this.initialData.posts,
            featuredPosts: this.initialData.posts.filter(item => item.featured === true),
            otherPosts: this.initialData.posts.filter(item => item.featured === false)
        }

        this.filterPosts = () => {
            const filteredPosts = this.initialData.posts.filter(post => {
                const searchTerm = this.state.postFilter.toLowerCase();
                const postTitle = post.title.toLowerCase();

                // Search title
                if (postTitle.includes(searchTerm)) return true;

                // Search keywords
                if (post.keywords.filter(keyword => keyword.toLowerCase().includes(searchTerm)).length > 0) return true;
            });

            this.setState({
                posts: filteredPosts,
                featuredPosts: filteredPosts.filter(item => item.featured === true),
                otherPosts: filteredPosts.filter(item => item.featured === false)
            });
        }

        this.handleSearch = event => {
            this.setState({ postFilter: event.target.value }, () => {
                this.filterPosts();
            });
        }
    }

    render() {
        return (
            <>
                <SecondaryHeader updated={this.initialData.meta.updated} filter={this.state.postFilter} handleSearch={this.handleSearch} />
                <div className="site-main-section">
                    <div className="area">
                        <Content>FEDSource is a content aggregator that fetches front-end development resources from around the internet hourly.</Content>
                        <Posts name="Featured Posts" posts={this.state.featuredPosts} featured={true} />
                        <Posts name="Posts" posts={this.state.otherPosts} />
                        <Content>Have suggestions to add to the site? Email us at {'< admin at fedsource.io >'}</Content>
                    </div>
                    <div className="area">
                        <Videos name="Featured Videos" videos={this.initialData.videos} />
                        <TrendingRepos name="Trending Repositories" repos={this.initialData.trendingrepos} />
                    </div>
                </div>
            </>
        );
    }
}