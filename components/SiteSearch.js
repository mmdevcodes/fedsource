import { Component } from 'react';
import Icon from './Icon';

export default class SiteSearch extends Component {
    constructor(props) {
        super(props);

        this.toggleSearch = this.toggleSearch.bind(this);

        this.state = {
            active: false
        }
    }

    toggleSearch(e) {
        e.preventDefault();

        this.setState({
            active: !this.state.active
        }, function () {
            if (this.state.active) {
                this.searchInput.focus();
            }
        });
    }

   render() {
       return (
            <div className={`site-search ${this.state.active ? 'active' : ''}`}>
                <button type="button" className={`site-search-toggle ${this.state.active ? 'active' : ''}`} onClick={this.toggleSearch}>
                    <Icon name="search" desc="Toggle Search" />
                </button>
                <div className={`site-search-input ${this.state.active ? 'active' : ''}`}>
                    <input ref={(input) => { this.searchInput = input; }} type="text" placeholder="Search for..." />
                </div>
            </div>
       );
   }
}