class NameField extends React.Component {
  render() {
    return (<div><input onInput={this.value}></input></div>);
  }
}

function App() {
  return (<NameField />);
}
ReactDOM.render(<App/>, document.getElementById("app"));
