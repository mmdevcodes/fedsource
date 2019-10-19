import { Component } from 'react';
import Icon from './Icon';

export default class SiteSearch extends Component {
    constructor(props) {
        super(props);
    }

   render() {
       return (
            <form className="site-search">
                <Icon className="site-search-icon" name="search" />
                <div className="site-search-input">
                    <input id="site-search" type="text" placeholder="Search for..." onChange={this.props.handleSearch} />
                    <label htmlFor="site-search">Search for...</label>
                </div>
            </form>
       );
   }
}