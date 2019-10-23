import React from 'react';
import Naughton from './Naughton'
import AshGrove from './AshGroveBagHouse'
import Nav from '../Nav/Index'
export default class Govt extends React.Component {
    state = {

    }

    render() {
        return (
            <div className='container' id='PortfolioContainer'>
                <div className='row'>
                {/* <div className= 'col-md-2'>
                    <Nav/> 
                </div> */}
                        <Naughton />
                        <AshGrove />
                </div>
            </div>
        )
    }
}