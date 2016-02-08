//// Stateless presentational components ////
const Counter = ({count, onIncrease, onClear}) => (
  <button onClick={onIncrease} onContextMenu={onClear}>{count}</button>
)

//// Main app component (stateful) ////
const App = React.createClass({
  /**** App state initializer ****/
  getInitialState() {
    return {
      counters: [0],
      total: 0
    }
  },
  
  /**** Rendering main UI ****/
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
        <div>Total: {this.state.total}</div>
        <div>
          <button onClick={this.addCounter}>Add Counter</button>
          <button onClick={this.removeAllCounters}>Remove All</button>
        </div>
      </div>
    )   
  },
  
  /**** Callback functions to update state ****/
  addCounter(event) {
    event.preventDefault();    
    this.setState({counters: this.state.counters.concat(0)});
  },

  removeAllCounters(event) {
    event.preventDefault();
    this.setState({counters: [], total: 0});
  },
    
  increaseCounter(i, event) {
    event.preventDefault();
    let {counters, total} = this.state;
    counters[i] += 1;
    total += 1;
    this.setState({counters:counters, total:total});
    console.log(this.state)
  },
    
  resetCounter(i, event) {
    event.preventDefault();
    let {counters} = this.state;
    counters[i] = 0;
    total = 0;
    for (var i=0; i<counters.length; i++) {
      total += counters[i];
    }
    this.setState({counters:counters, total:total});
    console.log(this.state)
  },
})

//// Mounting App component onto web page ////
ReactDOM.render(
  <App />,
  document.getElementById("app")
)