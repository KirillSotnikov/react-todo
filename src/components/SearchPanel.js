import React from 'react'

import './SearchPanel'

const SearchPanel = () => {
  const searchPlaceholder = 'Type here to search'
  return (
    <input 
      type="text"
      className="form-control search-input"
      placeholder={searchPlaceholder}
    />
  )
}

export default SearchPanel