import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

function NavBar() {
    return (
        <div className= 'portfolioNavBar'>
            <NavLink id='portfolioNav' to="ProjectPortfolio" activeClassName="selected">Project Portfolio</NavLink> <br/>
            <NavLink id='portfolioNav' to="Manufacturing-Office" activeClassName="selected">Manufacturing / Office</NavLink><br />
            <NavLink id='portfolioNav' to="Retail" activeClassName="selected">Retail</NavLink><br />
            <NavLink id='portfolioNav' to="Industrial" activeClassName="selected">Industrial</NavLink><br />
            <NavLink id='portfolioNav' to="Steel" activeClassName="selected">Steel </NavLink><br />
            <NavLink id='portfolioNav' to="Goverment-Community" activeClassName="selected">Goverment / Community</NavLink><br />
            <NavLink id='portfolioNav' to="Remodels" activeClassName="selected">Remodels</NavLink><br />
        </div>
    )
}
// By wrapping this component in `withRouter`, we get access to props.history
//  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
export default withRouter(NavBar);