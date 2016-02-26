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
      filter: 'All'
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
  
  /**** A helper function to get filtered list of todos ****/  
  getFilteredTodos() {
    const {todos, filter} = this.state;
    switch(filter) {
      case 'Active':
        return todos.filter(todo => (todo.active));
      case 'Finished':
        return todos.filter(todo => (!todo.active))
      default:
        return todos;     
    }
  },
   
  /**** Callback functions to update state ****/ 
  addNewTodo(event) {
    if (event.keyCode == 13) {
      const text = event.target.value;
      if (text !== '') {
        const todo = {id:_.uniqueId(), text:text, active:true};
        this.setState({todos: this.state.todos.concat(todo)});
        event.target.value = '';
      }
    }
  },
   
  toggleTodoStatus(id, event) {
    event.preventDefault();
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.active = !todo.active;
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState({todos: todos})
  },
   
  removeTodo(id, event) {
    event.preventDefault();
    const todos = _.reject(this.state.todos, (todo) => {
      return todo.id === id;
    });
    this.setState({todos: todos})
  },

  setTodoFilter(type, event) {
    event.preventDefault();
    this.setState({filter:type});  
  },
    
})

//// Mounting App component onto web page ////
ReactDOM.render(
  <App />,
  document.getElementById("app")
)