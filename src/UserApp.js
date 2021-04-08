import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Food from './components/Food';
import SupportandMaintaince from './components/SupportAndMaintaince';
import Laundary from './components/Laundary';
import Internet from './components/Internet';
import Housekeeping from './components/Housekeeping';
import About from './components/About';
import OrderHistory from './components/OrderHistory';
import Profile from './components/Profile';


function UserApp() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <Switch>
          <Route exact path="/user" component={Home} />
          <Route exact path="/food" component={Food} />
          <Route exact path="/internet" component={Internet} />
          <Route exact path="/housekeeping" component={Housekeeping} />
          <Route exact path="/laundary" component={Laundary} />
          <Route exact path="/support" component={SupportandMaintaince} />
          <Route exact path="/About" component={About}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Order" component={OrderHistory}/>
          <Route exact path="/Profile" component={Profile}/>
        </Switch>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default UserApp;
