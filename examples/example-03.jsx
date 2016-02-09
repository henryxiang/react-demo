// Stateless presentational component
const Counter = (props) => (
  <button 
    onClick={props.onIncrement}
    onContextMenu={props.onClear}>
      {props.count}
  </button>
 )

// Stateful container component
const App = React.createClass({
  getInitialState() {
    return {counters: [0,0]}
  },

  render() {
    return (
      <div>
        {
          this.state.counters.map((c,i) => {
            return (
              <Counter key={i}
                count={c}
                onIncrement={this.incrementCounter}
                onClear={this.resetCounter} />
            )
          })
        }
        <div>Total: {this.getSum()}</div>
      </div>
    )
  },

  incrementCounter() {
    console.log("incrementing...")
  },

  resetCounter() {
    console.log("resetting...");
  },
  
  getSum() {
    return this.state.counters.reduce((pv, cv) => (pv + cv), 0);
  },
})

// Mounting App component onto web page
ReactDOM.render (
  <App />,
  document.getElementById("app")
)