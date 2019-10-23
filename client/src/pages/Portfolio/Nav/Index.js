import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

function NavBar() {
    return (
        <div id= 'portfolioNavBar' className='container' style= {{height: 400, width: 190}}>
            <div className= 'row' style={{height: 60}}>
                <NavLink id='portfolioNav' to="Portfolio" activeClassName="selected">Project Portfolio</NavLink> 
            </div>
            <div className='row' style={{height: 60}}>
                <NavLink id='portfolioNav' to="Manufacturing-Office" activeClassName="selected">Manufacturing / Office</NavLink> 
            </div>
            <div className='row' style={{height: 60}}>
                <NavLink id='portfolioNav' to="Retail" activeClassName="selected">Retail</NavLink> 
            </div>
            <div className='row' style={{height: 60}}>
                <NavLink id='portfolioNav' to="Industrial" activeClassName="selected">Industrial</NavLink> 
            </div>
            <div className='row' style={{height: 60}}>
                <NavLink id='portfolioNav' to="Steel" activeClassName="selected">Steel </NavLink> 
            </div>
            {/* <div className='row' style={{height: 60}}>
                <NavLink id='portfolioNav' to="Goverment-Community" activeClassName="selected">Goverment / Community</NavLink> 
            </div> */}
            <div className='row' style={{height: 60}}>
                <NavLink id='portfolioNav' to="Remodels" activeClassName="selected">Remodels</NavLink> 
            </div>
        </div>
    )
}
// By wrapping this component in `withRouter`, we get access to props.history
//  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
export default withRouter(NavBar);