import React from 'react'

const SearchPanel = () => {
  const searchPlaceholder = 'Type here to search'
  const searchStyle = {
    fontSize: '20px'
  }
  
  return (
    <input 
      style={searchStyle}
      placeholder={searchPlaceholder}
    />
  )
}

export default SearchPanel