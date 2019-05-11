import React from 'react';
import Baker from './BakerCorp'
import Darren from './DarrenKlienTile'
import Moneyhun from './Moneyhun'
import SMESteel from './SMESteel'
import CKConstruction from './CkConstructionHQ'
import WolfPeak from './WolfPeak'
import Streamline from './StreamlinePlastics'
export default class Govt extends React.Component {
    state = {

    }

    render() {
        return (
            <div className= 'container'>
                <div className= 'row'>
                    <div className='col-md-12'>
                        <Baker />
                        <Darren />
                        <Moneyhun />
                        <SMESteel />
                        <CKConstruction />
                        <WolfPeak />
                        <Streamline />
                    </div>
                </div>
            </div>
        )
    }
}