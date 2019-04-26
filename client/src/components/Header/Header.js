import React from 'react'
import NavBar from '../NavBar/index'
class Header extends React.Component {
    

    render() {
        return (
            <div class="header">
                <div class='jumbotron'>
                    <div class='row'>
                        <div class='col-sm-2'><button id='videoPage'><img id='logo' src='../CK_Images/logo-Title.jpg' alt='logo' /></button></div>
                    </div>
                    <NavBar />
                </div>
            </div>
        )
    }
}