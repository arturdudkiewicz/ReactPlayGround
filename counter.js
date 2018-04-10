class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sumCount: 0,
      totalCount: 0,
      doubleClickCount: 0
    };
  }

  render() {
    return (<div>
      <button onClick={this.increment.bind(this)}>+</button>
      <div onDoubleClick={this.doubleClick.bind(this)}>
        <output>Suma: {this.state.sumCount}</output>
        <output>Kliknięcia: {this.state.totalCount}</output>
        <output>Podwójne kliknięcia: {this.state.doubleClickCount}</output>
      </div>
      <button onClick={this.decrement.bind(this)}>-</button>
    </div>);
  }

  increment() {
    this.setState({
      sumCount: this.state.sumCount + 1,
      totalCount: this.state.totalCount + 1
    })
  }

  decrement() {
    this.setState({
      sumCount: this.state.sumCount - 1,
      totalCount: this.state.totalCount + 1
    })
  }

  doubleClick() {
    this.setState({
      doubleClickCount: this.state.doubleClickCount + 1
    });
  }
}
ReactDOM.render(<App/>, document.getElementById("app"));
