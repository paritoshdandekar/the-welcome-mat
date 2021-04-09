import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './components/Login';
import UserApp from './UserApp';
import AdminApp from './AdminApp';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/user" component={UserApp} />
          <Route path="/admin" component={AdminApp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
