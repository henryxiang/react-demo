// Stateless presentational components
const Counter = ({
  count,
  onIncrease,
  onClear
}) => (
  <button onClick={onIncrease} onContextMenu={onClear}>
    {count}
  </button>
)

const Summary = ({total}) => (
  <div>Total: {total}</div>
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
              <Counter 
                key={i} 
                count={c} 
                onIncrease={this.increaseCounter.bind(this, i)}
                onClear={this.resetCounter.bind(this, i)}/>
            )
          })
        }
        <Summary total={this.getSum()} />
        <div>
          <button onClick={this.addCounter}>Add Counter</button>
          <button onClick={this.removeAllCounters}>Remove All</button>
        </div>
      </div>
    ) 
  },

  increaseCounter(i, event) {
    /* To be implemented */
  },

  resetCounter(i, event) {
    /* To be implemented */
  },

  addCounter(event) {
    /* To be implemented */
  },

  removeAllCounters(event) {
    /* To be implemented */
  },
  
  getSum() {
    /* To be implemented */
  },
})

// Mounting App component onto web page
ReactDOM.render (
  <App />,
  document.getElementById("app")
)