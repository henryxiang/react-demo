// Definition of a React component
const Counter = React.createClass({
  // Component state initializer
  getInitialState() {
    return {count: 0}
  },

  // Rendering component UI
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.count}</button>
    )
  },

  // Callback function to handle click event
  handleClick() {
    /** To be implemented **/
  },
})

// Mounting the component onto web page
ReactDOM.render (
  <Counter />
  document.getElementById("app")
)