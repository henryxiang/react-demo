const Counter = React.createClass({
	// Component state initializer
  getInitialState() {
  	return {count: 0}
  },

  //Rendering component UI
  render() {
  	return (
  		<button 
  			onClick={this.handleClick}
  			onContextMenu={this.handleRightClick}>
  				{this.state.count}
  		</button>
  	)
  },

  //Callback function to update component state
  handleClick() {
  	/** To be implemented **/
  },

  handleRightClick() {

  },
})

// Mounting component onto web page
ReactDOM.render (
  <Counter />
  document.getElementById("app")
)