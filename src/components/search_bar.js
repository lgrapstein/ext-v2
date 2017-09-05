import React, { Component } from 'react';
import GoogleScraper from 'google-scraper';

const options = {
  keyword: "",
  language: "en",
  tld:"com",
  results: 100
};

const scrape = new GoogleScraper(options);

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      links: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onSearchSubmit(event) {
    scrape.getGoogleLinks.then(function(value) {
      console.log(value);
    }).catch(function(event) {
      console.log(event);
    })
    this.setState({
      term: ''
    });
  }

  componentDidMount() {
    this.onSearchSubmit();
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
            onClick={this.componentDidMount}
            type="submit"
            className="btn btn-secondary">
              Submit
          </button>
        </span>
      </form>
    );
  }
}
