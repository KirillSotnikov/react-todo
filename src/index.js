import React from 'react'
import ReactDom from 'react-dom'

import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'
import ItemStatusFilter from './components/ItemStatusFilter';

import './index.css';

const initData = [
  {
    label: 'Drink Coffee',
    important: false,
    id: 1
  },
  {
    label: 'Learn React',
    important: true,
    id: 2
  },
  {
    label: 'Build Awesome App',
    important: false,
    id: 3
  }
]

const App = () => {
  const [todoData] = React.useState(initData)
  
  // const [todoData, setTodoData] = React.useState(initData)

  // const handleAdd = () => {
  //   const newToDo = [...todoData]
  //   newToDo.push({
  //     label: 'Build Awesome App 22',
  //     important: true
  //   })
    
  //   setTodoData(newToDo)
  // }

  return (
    <div className="container todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))