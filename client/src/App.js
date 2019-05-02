import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Index from './pages/Index';
import Home from './pages/Home';
import About from './pages/About/About';
import Contact from './pages/Contact';
import Services from './pages/Services/Index';
import Careers from './pages/Careers/Careers';
import Steel from './pages/Steel';
import Portfolio from './pages/Portfolio'
// import Employees from './pages/Employees';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Index} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Careers" component={Careers} />
          <Route exact path="/Steel" component={Steel} />
          <Route exact path="/Portfolio" component={Portfolio}/>
          {/* <Route exact path="/Employees" component={Employees} /> */}
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;