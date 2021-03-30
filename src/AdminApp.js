import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Adminpanel from "./components/AdminComponents/Adminpanel";
import Adduser from "./components/AdminComponents/Adduser";
import Users from "./components/AdminComponents/Users";
import Footer from "./components/Footer";
import Sidenav from "./components/Sidenav";
import "./AdminApp.css";
import NavbarAdmin from "./components/NavbarAdmin";
//import "./Sidenav.css"


import Navbar from "./components/Navbar";
import AdminPanel from "./components/AdminComponents/Adminpanel";

function AdminApp() {
    return (
      <Router>
        <div className="App">
          <div>
          <header className="App-header">
              <NavbarAdmin/>
          </header>
          </div>
          
          <div>
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
          <div className="App">  
          <main className="App-main">
            <Sidenav /> 
          </main>
          </div>

          
          <footer className="App-footer">
            <Footer />
          </footer>
          </div>
          
          <div>
          </div>
        </div>
      </Router>
    );
  }
  
  export default AdminApp;
  