class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return <div>
      <label>
        First
      <input type="text" name="last" oninput="{" this.handlechange="" }="" </label <label Last
        <input type="text" <hr <output {this.state.last}/> > > /> > /> >{this.state.first} </output>
    </div>;
  }
}
