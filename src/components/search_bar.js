import React, { Component } from 'react';
import { googleSearcher } from '../google_searcher.js';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      links: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value });
  }

  fetchResults(googleSearcher) {
    googleSearcher(query, start, callback);
    // console.log(title)
  }

  onSearchSubmit(event) {
    event.preventDefault();

    this.fetchResults(googleSearcher);
    // this.fetchResults(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSearchSubmit} className="input-group">
        <input
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button
            onClick={this.fetchResults}
            type="submit"
            className="btn btn-secondary">
              Submit
          </button>
        </span>
      </form>
    );
  }
}
