import React, { Component } from 'react';

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

  fetchResults(response) {
    for (var i = 0; i < response.items.length; i++) {
      var item = response.items[i];
      document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
    }
  }

  onSearchSubmit(event) {
    event.preventDefault();

    this.fetchResults(this.state.term);
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
