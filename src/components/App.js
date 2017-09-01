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
      selectedLink: '',
      term: ''
    };

    this.linkSearch('cats');
  }

  linkSearch(term, links, selectedLink) {
    this.setState({
      links: links,
      selectedLink: selectedLink,
      // selectedLink: links[0],
      term: term
    })
  }

  render() {
    const linkSearch = _.debounce((term) => { this.linkSearch(term) }, 300);
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header"><h2>Welcome to React</h2></div>
        <SearchBar onSearchChange={linkSearch} />
        <LinkListItem link={this.state.selectedLink} />
        <LinkList
          onLinkSelect={selectedLink => this.setState({selectedLink})}
          links={this.state.links} />
      </div>
    );
  }
}
