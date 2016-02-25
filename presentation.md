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

* Component not template
* Composable to build complex UI

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
### Defining React Component using React.createClass() function

```
const Counter = React.createClass({
  propTypes: {
    initialCount: React.PropTypes.number
  },

  getInitialState() {
    return {}
  }
  
})
  
```

--
### Defining React Component by extending React.Component (ES6 way)

```
const Counter = () => {
  
}

```

--
### Defining React Component using ES6 Stateless Function

```
const Counter = () => {
  
}

```

--
### JsBin - The Playground for JavaScript Developer
