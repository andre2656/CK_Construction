import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CKServices from './CK-Services';
import Maintenance from './Maintenance';
import NoProjectToSmall from './No-Project-To-Small';
import SelfPerformedServices from './Self-Performed-Services';
import Nav from './Nav'

class Services extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Nav />
                    <Route path="/CK-Services" component={CKServices} />
                    <Route path="/Remodels" component={CKServices} />
                    <Route path="/Maintenance" component={Maintenance} />
                    <Route path="/No-Project-to-Small" component={NoProjectToSmall} />
                    <Route path="/Self-Performed-Services" component={SelfPerformedServices} />
                </Router>
                
            </div>
        )
    }
}
export default Services;