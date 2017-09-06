import React, { Component } from 'react';
import GoogleScraper from 'google-scraper';
import * as config from '../urlSearch.js';
import request from 'request';
import cheerio from 'cheerio';

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

  getGoogleLinks() {
    return new Promise((resolve, reject) => {
      this.getHtml().then((body) => {
        return resolve(this.extractLink(body))
      }).catch((err) => {
        return reject(err);
      })
    })
  }

  onSearchSubmit(event) {
    const options = {
      keyword: "{this.state.term}",
      language: "en",
      tld: "com",
      results: 100
    };

    const scrape = new GoogleScraper(options);

    scrape.getGoogleLinks.then(function(value) {
      console.log(value);
    }).catch(function(event) {
      console.log(event);
    })
    this.setState({
      term: ''
    });
  }

  extractLink(html) {
    const $ = cheerio.load(html);
    const linkArray = [];
    $(config.selectorSearch).each((i, link) => {
      const fixLink = $(link).attr('href').match('(?=http|https).*(?=&sa)')
      if (fixLink) {
        linkArray.push(fixLink[0]);
      }
    })
    return linkArray;
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button
          onClick={this.onSearchSubmit}
          type="submit"
          className="btn btn-secondary">
            Submit
        </button>
      </div>
    );
  }
}
