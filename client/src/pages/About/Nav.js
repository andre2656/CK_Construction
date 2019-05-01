import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {
    render(){
        return(
            <div class='container mx-auto'>
                <div class='row'>
                    <div class="dropdown" id='aboutDropdown'>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About CK </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <NavLink class="dropdown-item" id='history'to= '/History'>Our History</NavLink>
                            <NavLink class="dropdown-item" id='culture'to= '/Culture'>The CK Culture</NavLink>
                            <NavLink class="dropdown-item" id='safety' to= '/Saftey'>Saftey</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}