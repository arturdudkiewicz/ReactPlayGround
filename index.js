function AppHeader() {
  return (
    <header className="ui fixed menu">
      <nav className="ui container">
        <a href="#" className="header item">
          <img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
          Lista kontaktów
        </a>
        <div className="header item">
          <button className="ui button">Dodaj</button>
        </div>
      </nav>
    </header>
  );
}
function ContactList() {
  return (
    <ul className="ui relaxed divided list selection">
    <ContactItem login="typeofweb1" name="Lena" department="QA Spec" />
    <ContactItem login="typeofweb2" name="Arek" department="JS Spec" />
    <ContactItem login="typeofweb3" name="Janusz" department="React Spec" />
    </ul>
  );
}

class AvatarDisplay extends React.Component {
  render() {
    const {login} = this.props;
    const imgURL = `https://api.adorable.io/avatars/55/${login}.png`;
    return (
        <img src={imgURL} className="ui mini rounded image" />
        );
  }
}
function ContactItem({login, name, department}) {
  return (
  <li className="item">
  <AvatarDisplay login={login} />
  <div className="content">
    <h4 className="header">{name}</h4>
    <div className="description">{department}</div>
  </div>
</li>
  );
}

function App() {
  return (
    <div>
    <AppHeader />
    <main className="ui main text container">
    <ContactList />
    </main>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
