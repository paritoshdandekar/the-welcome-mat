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
        

       
          <Route exact path="/user/:id" component={Home} />
          <Route path="/user/:id/food" component={Food} />
          <Route path="/user/:id/internet" component={Internet} />
          <Route path="/user/:id/housekeeping" component={Housekeeping} />
          <Route path="/user/:id/laundary" component={Laundary} />
          <Route path="/user/:id/support" component={SupportandMaintaince} />
          <Route path="/user/:id/About" component={About}/>
          <Route path="/user/:id/Order" component={OrderHistory}/>
          <Route path="/user/:id/Profile" component={Profile}/>
        </Switch>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default UserApp;
