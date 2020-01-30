import React, { Component } from 'react'

import './ItemAddForm.css'

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  clearLabel = () => {
    this.setState({
      label: ''
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label)
    
    this.clearLabel()
  }

  render () {
    return (
      <form 
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
      >
        <input 
          type="text"
          value={this.state.label}
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
        />
        <button 
          style={{whiteSpace: "nowrap"}}
          className="btn btn-outline-secondary"
          // onClick={() => this.props.onItemAdded('Hello world')}
        >
          Add Item
        </button>
      </form>
    )
  }
}