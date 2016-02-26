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
    event.preventDefault();
    let {counters} = this.state;
    counters[i] += 1;
    this.setState({counters: counters});
  },

  resetCounter(i, event) {
    event.preventDefault();
    let {counters} = this.state;
    counters[i] = 0;
    this.setState({counters: counters});
  },
  
  addCounter(event) {
    event.preventDefault();
    let {counters} = this.state;
    counters.push(0);
    this.setState({counters: counters});
  },

  removeAllCounters(event) {
    event.preventDefault();
    this.setState({counters: []});
  },

  getSum() {
    const {counters} = this.state;
    var sum = 0;
    for (var i = 0; i < counters.length; i++) {
      sum += counters[i]
    }
    return sum;
  },
})

// Mounting App component onto web page
ReactDOM.render (
  <App />,
  document.getElementById("app")
)