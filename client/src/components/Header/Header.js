import React from 'react'
import NavBar from '../NavBar/index'
import { NavLink } from 'react-router-dom';
class Header extends React.Component {


    render() {
        return (
            <div className="header">
                <div className='jumbotron'>
                    <div className='row'>
                        <div className='col-sm-2'><NavLink id='videoPage' to= '/'><img id='logo' src='../CK_Images/logo-Title.jpg' alt='logo' /></NavLink></div>
                    </div>
                    <NavBar />
                </div>
            </div>
        )
    }
}
export default Header;