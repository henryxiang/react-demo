// Definition of a React component
const Counter = React.createClass({
  // Component state initializer
  getInitialState() {
    return {count: 0}
  },

  // Rendering component UI
  render() {
    return (
      <button 
        onClick={this.handleClick}
        onContextMenu={this.handleRightClick}>
          {this.state.count}
      </button>
    )
  },

  // Callback function to handle left-click event
  handleClick(event) {
    event.preventDefault();
    this.setState({count: this.state.count+1})
  },

  // Callback function to handle right-click event
  handleRightClick(event) {
    event.preventDefault();
    this.setState({count: 0})
  },
})

// Rendering component onto web page
ReactDOM.render (
  <Counter />,
  document.getElementById("app")
)