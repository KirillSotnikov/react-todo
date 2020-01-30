import React, {Component} from 'react';

import './ItemStatusFilter';

const Buttons = ({buttons, filter, onFilterChange}) => buttons.map(({name, label}, i) => { 
  const isActive = filter === name
  const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
  return (
    <button 
      type="button"
      className={`btn ${clazz}`}
      key={i}
      onClick={() => onFilterChange(name)}
    >
      {label}
    </button>
  )
})

export default class ItemStatusFilter extends Component {

  buttons = [
    {
      name: 'all',
      label: 'All'
    },
    {
      name: 'active',
      label: 'Active'
    },
    {
      name: 'done',
      label: 'Done'
    }
  ]

  render () {
    const {filter, onFilterChange} = this.props
    return (
      <div className="btn-group">
        <Buttons 
          buttons={this.buttons} 
          filter={filter} 
          onFilterChange={onFilterChange}
        />
      </div>
    )
  }
}
