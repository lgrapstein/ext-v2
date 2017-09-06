import React, { Component } from 'react';
import _ from 'lodash';
import logo from '../newtonx.png';
import '../App.css';
import SearchBar from './search_bar.js';
import LinkList from './link_list.js';
import LinkListItem from './link_list_item.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      selectedLink: '',
      term: '',
      value: ''
    };

    this.linkSearch('');
  }

  linkSearch(term, links, selectedLink, value) {
    this.setState({
      links: links,
      selectedLink: selectedLink,
      term: term,
      value: value
    })
  }

  render() {
    const linkSearch = _.debounce((term) => { this.linkSearch(term) }, 300);
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header"><h2>Google Article Scraper</h2></div>
        <SearchBar onSearchChange={linkSearch} />
        <LinkListItem link={this.state.selectedLink} />
        <LinkList
          onClick={selectedLink => this.setState({selectedLink})}
          links={this.state.value} />
      </div>
    );
  }
}
