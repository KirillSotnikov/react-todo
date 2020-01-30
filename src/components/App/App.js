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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Build Awesome App')
    ],
    term: '',
    filter: 'all' // active, all, done
  }

  createTodoItem (label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  toggleProperty (arr, id, propName){
    const idx = arr.findIndex((el) => el.id === id)

    // update object
    const oldItem = arr[idx]
    const newItem = {
      ...oldItem, [propName]: !oldItem[propName]
    }

    // construct new array
    const newArray = [...arr]
    newArray[idx] = newItem
    
    return newArray
  }


  addItem = (text) => {
    // generate id 
    const newItem = this.createTodoItem(text)

    // add element in array
    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem]
      return {
        todoData: newArray
      }
    })
  }
  deleteItem = (id) => {
    const {todoData} = this.state
    const idx = todoData.findIndex((el) => el.id === id)

    // const newTodoList = todoData.filter((item) => {
    //   if(item.id !== id) return item
    // })
    
    todoData.splice(idx, 1)
    const newTodoList = [...todoData]

    this.setState({todoData: newTodoList})
  }
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }
  search (items, term) {
    if(term.length === 0) {
      return items
    }

    return items.filter(item => {
      const upperLabel = item.label.toLowerCase()
      const upperTerm = term.toLowerCase()
      return upperLabel.indexOf(upperTerm) > -1
    })
  }
  filter (items, filter) {
    switch (filter) {
      case 'all': 
        return items
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default: 
        return items
    }
  }
  onSearchChange = (term) => {
    this.setState({term})
  }
  onFilterChange = (filter) => {
    this.setState({filter})
  }

  render () {
    const { todoData, term , filter} = this.state

    const visibleItems = this.filter(this.search(todoData, term), filter)

    const doneCount = todoData
                        .filter((el) => el.done)
                        .length

    const todoCount = todoData.length - doneCount

    return (
      <div className="container todo-app" key={this.state.key}>
        <AppHeader 
          toDo={todoCount} 
          done={doneCount} 
        />

        <div className="top-panel d-flex">
          <SearchPanel 
            onSearchChange={this.onSearchChange} 
          />
          
          <ItemStatusFilter 
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList 
          todos={visibleItems} 
          onDeleted={ this.deleteItem } 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        
        <ItemAddForm 
          onItemAdded={this.addItem} 
        />
      </div>
    )
  }
}