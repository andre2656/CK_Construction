import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Index from './pages/Index';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services/Services';
import Careers from './pages/Careers';
import Steel from './pages/Steel';
import Employees from './pages/Employees';


class App extends Component {
  // state = { user: null }

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   loginController.addUserChangedListener(this.setUser);

  //   loginController.recheckLogin();
  // }

  // componentWillUnmount() {
  //   console.log("WillUnmount");
  //   loginController.removeUserChangedListener(this.setUser);
  // }

  // setUser = (user) => {
  //   console.log("setUser", user);
  //   this.setState({ user: user });
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Index} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Careers" component={Careers} />
          <Route exact path="/Steel" component={Steel} />
          <Route exact path="/Employees" component={Employees} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;