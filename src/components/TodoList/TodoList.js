import React from 'react'

import TodoListItem from '../TodoListItem'

import './TodoList.css'

const TodoElements = ({todos, onDeleted}) => todos.map((item, i) => {

  const { id, ...itemProps } = item
 
  return (
    <TodoListItem 
      key={id} 
      {...itemProps}
      onDeleted={() => onDeleted(id) }
    />
  )
})

const TodoList = ({todos, onDeleted}) => {
  return (
    <ul className="list-group todo-list">
      <TodoElements todos={todos} onDeleted={onDeleted} />
    </ul>
  )
}

export default TodoList
