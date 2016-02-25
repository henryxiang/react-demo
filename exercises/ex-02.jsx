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
    this.setState({count: this.state.count+1});
    console.log(this.state); 
  },

  // Callback function to handle right-click event
  handleRightClick(event) {
    event.preventDefault();
    this.setState({count: 0});
    console.log(this.state); 
  },
})

// Mounting component onto web page
ReactDOM.render (
  <Counter initialCount={100}/>,
  document.getElementById("app")
)