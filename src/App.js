import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './components/Login';
import UserApp from './UserApp';
import AdminApp from './AdminApp';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <Navbar /> */}
        </header>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/user" component={UserApp} />
          <Route exact path="/admin" component={AdminApp} />
        </Switch>

        <footer>
          {/* <Footer /> */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
