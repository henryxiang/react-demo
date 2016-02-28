class Counter extends React.Component {
	state = {
		count: this.props.initialCount || 0
	}

	render() {
		console.log("Calling render()");
		return (
			<button onClick={this.handleClick}>{this.state.count}</button>
		)
	}

	handleClick = (event) => {
		this.setState({count: this.state.count+1});
	}

	componentWillMount() {
		console.log("Calling componentWillMount()");
	}

	componentDidMount() {
		console.log("Calling componentDidMount()");
	}

	componentWillReceiveProps(nextProps) {
		console.log("Calling componentWillReceiveProps(nextProps)");
		console.log(nextProps);
		return true;
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Calling shouldComponentUpdate(nextProps, nextState)");
		console.log(nextProps, nextState);
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("Calling componentWillUpdate(nextProps, nextState)");
		console.log(nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("Calling componentDidUpdate(prevProps, prevState)");
		console.log(prevProps, prevState);
	}

	componentWillUnmount() {
		console.log("Calling componentWillUnmount()");
	}
}

ReactDOM.render(<Counter initialCount={0}/>, document.getElementById("app"));