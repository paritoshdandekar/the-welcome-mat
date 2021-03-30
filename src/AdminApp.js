import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Adminpanel from "./components/AdminComponents/Adminpanel";
import Adduser from "./components/AdminComponents/Adduser";
import Users from "./components/AdminComponents/Users";
import Footer from "./components/Footer";
import "./AdminApp.css";
import NavbarAdmin from "./components/AdminComponents/NavbarAdmin";


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
        
          <Switch>
            <Route exact path="/" component={Adminpanel} />
            <Route exact path="/adduser" component={Adduser} />
            <Route exact path="/users" component={Users} />
            </Switch>
         

          
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
  