import React from 'react';
import Camarillo from './CamarilloHanger';
import FortBliss from './FortBliss'
import Escondido from './EscogndidoSchool'
import Industrial from './IndustrialContainer';
import Interpace from './InterpaceBrick'
import Nutracutical from './Nutracutical'
import OgdenCity from './OgdenCityCenter'
import Lovendahi from './LovendahiRailServiceCenter'

export default class Govt extends React.Component {
    state = {

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Camarillo />
                        <FortBliss />
                        <Escondido />
                        <Industrial />
                        <Interpace />
                        <Nutracutical />
                        <OgdenCity />
                        <Lovendahi />
                    </div>
                </div>
            </div>
        )
    }
}