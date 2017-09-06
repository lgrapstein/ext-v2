import React, { Component } from 'react';
import GoogleScraper from 'google-scraper';
import * as config from '../urlSearch.js';
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
    const option = {
      url: config.urlSearch(this.options.tld, this.options.language, this.options.results, this.options.keyword),
    }
    return new Promise((resolve, reject) => {
      request(option, (err, res, body) => {
        if (err) {
          return reject(err)
        } else if (res.statusCode !== 200) {
          const error = new Error(`Unexpected status code: ${res.statusCode}`)
          error.res = res
          return reject(error)
        }
        return resolve(body)
      })
    })
    this.setState({
      term: ''
    });
    const options = {
      keyword: this.state.term,
      language: "en",
      tld:"com",
      results: 100
    };

    const scrape = new GoogleScraper(options);
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
