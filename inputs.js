class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
  }
  firstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  lastNameChange(event) {
    this.setState({lastName: event.target.value})
  }

  render() {
    return (<div>
      <input type="text" value={this.state.firstName} onInput={this.firstNameChange.bind(this)}/>
      <input type="text" value={this.state.lastName} onInput={this.lastNameChange.bind(this)}/>
      <output>test{`${this.state.firstName} ${this.state.lastName}`}</output>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
