import React, {Component} from 'react'

import './SearchPanel'

export default class SearchPanel extends Component {
  searchPlaceholder = 'Type here to search'

  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value

    this.setState({term})
    this.props.onSearchChange(term)
  }

  render () {
    return (
      <input 
        type="text"
        className="form-control search-input"
        placeholder={this.searchPlaceholder}
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    )
  }
}