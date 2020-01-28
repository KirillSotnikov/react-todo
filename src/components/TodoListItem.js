import React from 'react'

const TodoListItem = ({ label, important = false }) => {

  const liStyle = {
    color: important ? 'tomato' : 'black'
  }

  return (
    <li style={liStyle}>{label}</li>
  )
}

export default TodoListItem