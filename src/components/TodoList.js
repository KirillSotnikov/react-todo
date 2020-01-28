import React from 'react'

import TodoListItem from './TodoListItem'

const TodoElements = ({todos}) => todos.map((item, i) => {
  return <TodoListItem {...item} key={i} />
})

const TodoList = ({todos}) => {
  return (
    <ul>
      <TodoElements todos={todos} />
    </ul>
  )
}

export default TodoList
