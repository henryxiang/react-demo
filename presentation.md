title: Learning React, The Hacker's Way
output: presentation.html
controls: true
theme: sudodoki/reveal-cleaver-theme

--
# Learning
![react](react.png)
## The Hacker's Way

--
### The Big Picture
<img src="architecture.png" alt="architecture" style="width:761px;height:526px;">

--
### JavaScript Primer

* JavaScript
* Evolving - ECMAScript 6 (ES6)
* `J`ava`S`cript `O`bject `N`otation (JSON)
* Functional Programming

--
### ES6 (1)

* Arrow functions – A short-hand version of an anonymous function.
* Block-level scope – ES6 now supports scoping variables to blocks (if, for, while, etc.) using the let keyword.
* Classes – ES6 classes provide a way to encapsulate and extend code.
* Constants – You can now define constants in ES6 code using the const keyword. 

--
### ES6 (2)

* Default parameters – Ever wished that a function parameter could be assigned a default value? You can do that now in ES6.
* Destructuring – A succinct and flexible way to assign values from arrays or objects into variables.
* Generators – Specialized functions that create iterators using function* and the yield keyword.
* Set – A collection object that can be used to store a list of data values.
* Map – Dictionary type object that can be used to store key/value pairs.

--
### ES6 (3)

* Modules – Provides a modular way of organizing and loading code.
* Promises – Used with async operations.
* Rest parameters – Allows you to get to an array representing “the rest of the parameters”.
* Template Strings – Clean way to build up string values.

--
# ES6 Code Examples

--
### ES6 - Arrow Function
```
  // Arrow Functions are automatically bound to surrounding object
  switchToListView = () => {
    this.setState({viewMode : "list"});
  }

  render = () => {
    return <button onclick={this.switchToListView}>List View</button>;
  }

  // Alternative way, which requires explicit object binding
  switchToListView() {
    this.setState({viewMode : "list"});
  }

  render() {
    return <button onclick={this.switchToListView.bind(this)}>List View</button>;
  }

```

--
### ES6 - Block-level Scope
```
  let i = 100;
  console.log(i);

  for (let i = 0; i < 3; i++) {
    console.log(i);
  }

  console.log(i);

  /*
   *    output:
   *    100
   *    1
   *    2
   *    3
   *    100
   */
```

--
### ES6 - Classes
```
  class App extends React.Component {

    state = {
      title : "Knowledge Base",
      viewMode : "list", // "list", "article", or "new"
      currentArticle : null,
    }

    switchToListView = () => {
      this.setState({
        viewMode : "list"
      });
    }

    ...
  }
```

--
### ES6 - Constants
```
  const LIMIT = 100;
  LIMIT = 10;
  // Error: 'LIMIT' is read-only

```

--
### ES6 - Default Parameters
```
  const Header = ({title = "DEFAULT TITLE"}) => {
    return (
      <div className="page-header"><h1>{title}</h1></div> 
    );
  }

```

--
### ES6 - Destructuring
```
  const {editMode, article} = this.state;

  // Alternative way
  const editMode = this.state.editMode,
        article = this.state.article;


```

--
### ES6 - Set
```
  let set = new Set();
  set.add('red');
  set.add('green');

  set.size; // 2
  set.has('red'); // true

  set.delete('red');
  set.size; // 1
  set.has('red'); // false

```

--
### ES6 - Map
```
  let map = new Map();
    
  map.set('foo', 123);
  map.set('bar', 456);
  map.size; // 2
  map.get('foo'); // 123
  map.has('foo') // true
  
  for (let key of map.keys()) {
    console.log(key);
  }
  /*  Output:
   *   123
   *   456
   */

  map.delete('foo');
  map.size; // 1
  map.has('foo'); // false

```

--
### ES6 - Modules
```
  /* ArticleRow module saved in [app/component/ArticleRow.jsx] */
  const ArticleRow = React.createClass({     
    ...
  });  
  export default ArticleRow;

  /* Import ArticleRow module from App module [app/App.jsx] */
  import ArticleRow from './component/ArticleRow.jsx';
  import $ from 'jquery'; // importing a third-party module

  ...

```

-- 
### ES6 - Rest Paramenters
```
  function count(first, ...rest) {
    let result = first;
    rest.forEach((number) => {
      result += number;
    });
    return result;
  }
  console.log(count(10, 1)); // 11
  console.log(count(10, 1, 2, 3, 4)); // 20

```

--
### ES6 - Template String
```
  let name = 'Tony Stark';
  console.log (`name = ${name}`); // name = Tony Stark

```

--
### JavaScript Object Notation (JSON)

```
  {
    "title" : "Knowledge Base",
    "viewMode" : "list",
    "currentArticle" : null,
    "articles" : [
      {
        "_id" : 1,
        "title" : "Article One",
        "body" : "Main article body - could be very long",
        "viewCount" : 0,
        "articleDate" : new Date(),
        "keywords" : [ "keyword1", "keyword2", "keyword3" ],
        "isFavorite": true
      },
      {
        "_id" : 2,
        "title" : "Article Two",
        "body" : "TWO - Main article body - could be very long",
        "viewCount" : 0,
        "articleDate" : new Date(),
        "keywords" : [ "keyword2" ],
        "isFavorite": false
      }
    ]
  };
```

--
### Functions are Objects

```
var ArticleRow = React.createClass({

  save: function() {
    ...
  },
  onClick: function() {
    ...
    this.save(); // Calling the function referenced by 'save' attribute
  },
  render: function() {
    ... 
    <button onClick={this.onClick}>Save</button>
    ...
  }
});
```

--
### Functional Programming

```
function square(n) {
  return n * n;
}

/* Pass a function reference as parameter */
_.map([4, 8], square);                       // → [16, 64]

/* Using anonymous function */
_.map([4, 8], function(n) { return n*n; });  // → [16, 64]

/* Anonymous function ES6 way */
_.map([4, 8], (n) => (n*n));                 // → [16, 64]
```

--
### React.JS

* A JavaScript library to build user interfaces
* Component Based
* Declarative Presentation
* Virtual DOM
* JSX

--
### React Components

* State
* Properties
* Rendering (whenever state or props change)
* Component Lifecycle Methods

--
### State / Properties

* State: Holds mutable data which affects the display or behavior of the application.
* Properties: The configuration for a component.  Passed in and unchanged for the life of the component.

--
# Example

[JSBin](http://bit.ly/ROWhr)

--
### Exercise 1: React Component State

Create a simple tally-counter app with a React component. <a href="http://jsbin.com/cigebonuhi/edit?html,js,output" target="_blank">(JsBin Link)</a>

Requirements:
- The UI of the app is a button that shows the tally count.
- When the button is left-clicked, the count will increment by 1 and the updated count will be shown in the UI.
- When the button is right-clicked, the counter will be reset to 0.

--
### Exercise 2: React Component Props

Add a functionality to the prior tally-counter app to allow user to configure initial count. <a href="http://jsbin.com/maboxuyaja/edit?html,js,output" target="_blank">(JsBin Link)</a>

Requirements:
- All the requirements of Exercise 1.
- The initial count is configurable by user.

--
### Lifecycle Methods

1. componentWillMount
2. componentDidMount
3. componentWillReceiveProps
4. shouldComponentUpdate
5. componentWillUpdate
6. render
7. componentDidUpdate
8. componentWillUnmount

--
### Lifecycle Methods - How They Work
```
  class Counter extends React.Component {
    state = {
      count: this.props.initialCount || 0
    }

    render() {
      console.log("Calling render()");
      return (
        <button onClick={this.handleClick}>{this.state.count}</button>
      )
    }

    componentWillMount() {
      console.log("Calling componentWillMount()");
    }

    componentDidMount() {
      console.log("Calling componentDidMount()");
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log("Calling shouldComponentUpdate(nextProps, nextState)");
      console.log(nextProps, nextState);
      return true;
    }

    componentWillUpdate(nextProps, nextState) {
      console.log("Calling componentWillUpdate(nextProps, nextState)");
      console.log(nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
      console.log("Calling componentDidUpdate(prevProps, prevState)");
      console.log(prevProps, prevState);
    }

    handleClick = (event) => {
      this.setState({count: this.state.count+1});
    }
  }

  ReactDOM.render(<Counter initialCount={0}/>, document.getElementById("app"));
```

--
### Defining React Component using React.createClass() Function (ES6)

<a href="http://jsbin.com/wibepuhoza/edit?html,js,output" target="_blank">An Example</a>

```
// Definition of a React component
const Counter = React.createClass({
  // Component state initializer
  getInitialState() {
    return {count: this.props.initialCount}
  },
  // Rendering component UI
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    )
  },
  // Callback function to handle Click event
  handleClick(event) {
    this.setState({count: this.state.count+1})
  },
})
// Rendering component onto web page
ReactDOM.render (
  <Counter initialCount={0}/>,
  document.getElementById("app")
)
```

--
### Defining React Component by extending React.Component (ES6)

```
class Counter extends React.Component {
   // Declare prop types
  propTypes: {
    initialCount: React.PropTypes.number
  }
  // Constructor function - called only once when class object is instantiated
  constructor(props) {
    super(props);
    this.state =  {count: this.props.initialCount};
  }
  // Rendering component UI
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    )
  }
  ...
}
```

--
### Defining React Component using ES6 Stateless Function

```
const Counter = ({count, onIncrement}) => (
  <button onClick={onIncrement}>
    {count}
  </button>
);

// Callback function to be passed to Counter component
const handleCounterIncrement = (event) => {
  // update store.count
  ...
};

ReactDOM.render(
  <Counter count={store.count} onIncrement={handleCounterIncrement} />,
  document.getElementById( 'app' )
);
```

--
### Component Composition - Build the App like Lego

```
  /** 
   *   Compose the TodoApp main component with children components such as
   *   Panel, AddTodo, VisibleTodoList, and Footer
   */
  const TodoApp = () => (
    <Panel header={title}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Panel>
  );

  // Render the composite TodoApp component
  ReactDOM.render(<TodoApp />, mountElement);

```

--
### Dynamically Generate A List of Components

```
  render() {
    const todos = this.getTodoList();
    return (
      <ul>
      {
        todos.map( (todo) => {
          return (
            <Todo key={todo.id}
              todo={todo}
              onToggle={this.toggleTodoStatus} 
              onRemove={this.removeTodo}/>
          )
        })
      }
      </ul>
    );
  }

```

--
### Callback Bridging

```
  const ArticleRow = React.createClass({     
    propTypes: {
      article : React.PropTypes.object.isRequired,
      onClick : React.PropTypes.func.isRequired
    },  

    onClick() {
      this.props.onClick( this.props.article._id );
    },

    render() {
      return (
        <tr onClick={this.onClick}><td>{this.props.article.title}</td></tr>
      );
    }
  });

```

--
### React Application Data Flow

![react-data-flow](react-data-flow.jpg)

--
# Exercise Time

--
### Exercise 3

Develop a React app that has a group of counters and calculates the sum of all counters' tally. <a href="http://jsbin.com/gujalameso/edit?html,js,console,output" target="_blank">(JsBin Link)</a>

Requirements:
- A Counter component can be added dynamically to the UI by clicking on a button.
- Another button to allow user to remove all counters.
- Each Counter component can increment and reset its own count independently.
- A Summary component that keeps track of the total of all counters' count.


--
### Exercise 4 - A Todo App
<a href="http://jsbin.com/saxiwunefi/edit?html,js,output" target="_blank">(JsBin Link)</a>

- An input component to allow user add to todo items
- Show a list of Todo components that represent the todo items
- A click on the Todo component will change its status from 'Active' to 'Finished', or vice versa
- Right-clicking on a Todo component will delete its represented todo item
- A Filter component that will show todos based on their status: 'All', 'Active', or 'Finished'

--
### Exercise 5 - A Knowledge Base App
<a href="http://jsbin.com/huzupo/edit?html,js,output" target="_blank">(JsBin Link)</a>

Given a partially finished Knowledge Base application, enhance it by adding the following functionalities:
- Allow user to create new knowledge base article
- Allow user to edit an article and save the changes made
- Allow user to delete an existing article from the knowledge base
