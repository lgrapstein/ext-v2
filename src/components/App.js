import React, { Component } from 'react';
import _ from 'lodash';
import logo from '../lauren.png';
import '../App.css';
import SearchBar from './search_bar.js';
import LinkList from './link_list.js';
import LinkListItem from './link_list_item.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      selectedLink: null
    };

    this.linkSearch('cats');
  }

  linkSearch(term) {
    this.setState({
      links: links,
      selectedLink: links[0]
    })
  }

  render() {
    const linkSearch = _.debounce((term) => { this.linkSearch(term) }, 300);
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header"><h2>Welcome to React</h2></div>
        <SearchBar onSearchChange={linkSearch} />
        <LinkList />
        <LinkListItem link={this.state.selectedLink} />
      </div>
    );
  }
}
