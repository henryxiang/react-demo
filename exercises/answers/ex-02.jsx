const Counter = React.createClass({
  // Component state initializer
  getInitialState() {
    return {count: this.props.initialCount}
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
    this.setState({count: this.props.initialCount});
    console.log(this.state); 
  },
})

// Mounting component onto web page
ReactDOM.render (
  <div>
    <Counter initialCount={0}/>
    <Counter initialCount={10}/>
    <Counter initialCount={100}/>
  </div>,
  document.getElementById("app")
)