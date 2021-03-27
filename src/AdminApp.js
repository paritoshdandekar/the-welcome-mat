import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Adduser from "./components/admincomponent/Adduser";
import Users from "./components/admincomponent/Users";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function AdminApp() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
         {/* <Users></Users>*/}
         <Adduser></Adduser>
          <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/internet" component={Internet} />
            <Route exact path="/housekeeping" component={Housekeeping} />
            <Route exact path="/laundary" component={Laundary} />
            <Route exact path="/support" component={SupportandMaintaince} />
            <Route exact path="/About" component={About}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Order" component={OrderHistory}/>
            <Route exact path="/Profile" component={Profile}/> */}
          </Switch>
  
  
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
  
  export default AdminApp;
  