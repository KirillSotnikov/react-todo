import React, {Component} from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

import './App.css'

export default class App extends Component {

  maxId = 100

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

  addItem = (text) => {
    // generate id 
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    // add element in array
    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem]
      return {
        todoData: newArray
      }
    })
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
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    )
  }
}