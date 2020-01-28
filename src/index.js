import React from 'react'
import ReactDom from 'react-dom'

import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'

const initData = [
  {
    label: 'Drink Coffee',
    important: false
  },
  {
    label: 'Learn React',
    important: true
  },
  {
    label: 'Build Awesome App',
    important: false
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
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))