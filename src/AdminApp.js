import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Adminpanel from "./components/AdminComponents/Adminpanel";
import Adduser from "./components/AdminComponents/Adduser";
import Users from "./components/AdminComponents/Users";
import Footer from "./components/Footer";
import Sidenav from "./components/AdminComponents/Sidenav";
import "./AdminApp.css";
import NavbarAdmin from "./components/AdminComponents/NavbarAdmin";
import M from "materialize-css";


function AdminApp() {
  return (
    <Router>
      <div className="App">
        <header className="adminheader">
          <NavbarAdmin />
          <Sidenav/>
        </header>
        <main className="adminmain">
        <Switch>
          <Route exact path="/" component={Adminpanel} />
          <Route exact path="/adduser" component={Adduser} />
          <Route exact path="/users" component={Users} />
        </Switch>
        </main>
        <footer className="adminfooter">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default AdminApp;
