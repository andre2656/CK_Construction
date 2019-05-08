import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import History from './History';
import Culture from './Culture';
import Saftey from './Saftey';
import Nav from './Nav'
class About extends React.Component {
    componentDidMount= () => {
        
    }
    render(){
        return(
            <div>
                <Router>
                    <Nav />
                    <Route exact path="/History" component={History} />
                    <Route exact path="/Culture" component={Culture} />
                    <Route exact path="/Saftey" component={Saftey} />
                </Router>
            </div>
        )
    }
}
export default About;