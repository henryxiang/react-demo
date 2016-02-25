title: Learning React the Fun Way
output: presentation.html
controls: true

--
# Learning
![react](react.png)

## The Hacker's Way

--
### JavaScript Primer

* JavaScript - What about It?
* Evolving - ECMAScript 6 (ES6)
* Functional Programming
* Async Programming (callback functions)

--
### React JS

* A JavaScript library to build UI
* Based on component not template
* Virtual DOM

--
### React Component

* State
* Props
* Rendering (whenever state or props change)
* Component life cycle events
  - component initialize
  - component render
  - componentWillMount
  - componentDidMount
  - componentWillUnmount

--
### React Component - An Example

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

  // Callback function to handle left-click event
  handleClick(event) {
    /** To be implemented: increment counter by 1 **/
  },
})

// Rendering component onto web page
ReactDOM.render (
  <Counter initialCount={0}/>,
  document.getElementById("app")
)

```

--
### Defining React Component using React.createClass() Function

```
const Counter = React.createClass({
  // Declare prop types
  propTypes: {
    initialCount: React.PropTypes.number
  },

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
  }
  
  ...

})
  
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
)

// Callback function to be passed to Counter component
const handleCounterIncrement = (event) => {
  // update store.count
  ...
}

ReactDOM.render(
  <Counter count={store.count} onIncrement={handleCounterIncrement} />,
  mountingElement
)

```

--
### JsBin - The Playground for JavaScript Developer
