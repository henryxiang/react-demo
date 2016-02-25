//// Stateless presentational components ////
const TodoInputer = ({onEnter}) => (
  <input placeholder="Enter todo text" onKeyDown={onEnter} />
)

const Todo = ({text, active, onToggle, onRemove}) => (
  <li style={{textDecoration:active?'none':'line-through'}}
    onClick={onToggle}
    onContextMenu={onRemove}>
      {text}
  </li>
)

const TodoFilter = ({type, filter, onSetFilter}) => (
  <button onClick={onSetFilter} disabled={type===filter}>{type}</button>
)  

//// Main app component (stateful) ////
const App = React.createClass({
  /**** App state initializer ****/
  getInitialState() {
    return {
      todos: [
        {id:_.uniqueId(), text:'Learn React JS', active:true},
        {id:_.uniqueId(), text:'Learn Java', active:false},
      ],
      filter: 'All' // can be 'All', 'Active', or 'Finished'
    }
  },
  
  /**** Rendering main UI ****/
  render() {
    const todos = this.getFilteredTodos();
    return (
      <div>
        <TodoInputer onEnter={this.addNewTodo} />
        <ul>
        {
          todos.map(todo => {
            return (
              <Todo key={todo.id}
                text={todo.text}
                active={todo.active}
                onToggle={this.toggleTodoStatus.bind(this,todo.id)} 
                onRemove={this.removeTodo.bind(this,todo.id)}/>
            )
          })
        }
        </ul>
        <div>
          {'Show: '}
          <TodoFilter type='All'
            filter={this.state.filter}
            onSetFilter={this.setTodoFilter.bind(this, 'All')} />
          <TodoFilter type='Active'
            filter={this.state.filter}
            onSetFilter={this.setTodoFilter.bind(this, 'Active')} />
          <TodoFilter type='Finished'
            filter={this.state.filter}
            onSetFilter={this.setTodoFilter.bind(this, 'Finished')} />
        </div>
      </div>
    )
  },
  
  /**** A helper function to get list of filtered todos, i.e. 'All' todos, 'Active' todos, or 'Finished' todos ****/  
  getFilteredTodos() {
    // Change me
    return this.state.todos
  },
   
  /**** Callback functions to update state ****/ 
  addNewTodo(event) {
    if (event.keyCode == 13) {
      /* To be implemented */
    }
  },
   
  toggleTodoStatus(id, event) {
    event.preventDefault();
    /* To be implemented */
  },
   
  removeTodo(id, event) {
    event.preventDefault();
    /* To be implemented */
  },

  setTodoFilter(type, event) {
    event.preventDefault();
    /* To be implemented */
  },
    
})

//// Mounting App component onto web page ////
ReactDOM.render(
  <App />,
  document.getElementById("app")
)