import React from 'react'

import TodoListItem from '../TodoListItem'

import './TodoList.css'

const TodoElements = ({todos, onDeleted, onToggleImportant, onToggleDone}) => todos.map((item, i) => {

  const { id, ...itemProps } = item
 
  return (
    <TodoListItem 
      key={id} 
      {...itemProps}
      onToggleDone={() => onToggleDone(id)}
      onToggleImportant={() => onToggleImportant(id)}
      onDeleted={ () => onDeleted(id) }
    />
  )
})

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
  return (
    <ul className="list-group todo-list">
      <TodoElements 
        todos={todos} 
        onDeleted={onDeleted} 
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
      />
    </ul>
  )
}

export default TodoList
