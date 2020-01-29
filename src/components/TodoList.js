import React from 'react'

import TodoListItem from './TodoListItem'

import './TodoList.css'

const TodoElements = ({todos}) => todos.map((item, i) => {

  const { id, ...itemProps } = item
 
  return (
    <TodoListItem 
      key={id} 
      {...itemProps}  
    />
  )
})

const TodoList = ({todos}) => {
  return (
    <ul className="list-group todo-list">
      <TodoElements todos={todos} />
    </ul>
  )
}

export default TodoList
