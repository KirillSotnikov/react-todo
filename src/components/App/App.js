import React, {Component} from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css'

// const todoData = [
//   {
//     label: 'Drink Coffee',
//     important: false,
//     id: 1
//   },
//   {
//     label: 'Learn React',
//     important: true,
//     id: 2
//   },
//   {
//     label: 'Build Awesome App',
//     important: false,
//     id: 3
//   }
// ]

export default class App extends Component {

  state = {
    todoData: [
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
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => {
        return el.id === id
      })
      // todoData.splice(idx, 1)

      const before = todoData.slice(0, idx)
      const after  = todoData.slice(idx + 1)

      const newArray = [...before, ...after]

      return {
        todoData: newArray
      }
    })
  }

  render () {
    return (
      <div className="container todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={ this.deleteItem } 
          />
      </div>
    )
  }
}