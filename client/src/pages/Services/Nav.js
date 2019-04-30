import React from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';

export default class Nav extends React.Component{
    render(){
        return(
            <div>
                <NavLink to= '/CK-Services'>CK Services</NavLink>
                <NavLink to='/No-Project-to-Small'>No Project To Small</NavLink>
                <NavLink to='/Remodels'>Remodels</NavLink>
                <NavLink to='/Maintenance'>Maintenance</NavLink>
                <NavLink to='/Self-Performed-Services'>Self Performed Services</NavLink>
            </div>
        )
    }
}