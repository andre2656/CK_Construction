import React from 'react';
import Naughton from './Naughton'
import AshGrove from './AshGroveBagHouse'
export default class Govt extends React.Component {
    state = {

    }

    render() {
        return (
            <div className='container' id='PortfolioContainer'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Naughton />
                        <AshGrove />
                    </div>
                </div>
            </div>
        )
    }
}