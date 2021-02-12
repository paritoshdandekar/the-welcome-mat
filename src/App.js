import logo from './logo.svg';
//import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import ProductsGrid from './components/ProductsGrid';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Food from './components/Food';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        
        <Navbar></Navbar>
      </header>
      <Switch>
        <Route path="/" exact path component={Home}></Route>
        <Route path="/food" path component={Food}></Route>
      </Switch>
      {/* <Home></Home>
      <ProductsGrid></ProductsGrid> */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
    </Router>
  );
}

export default App;
