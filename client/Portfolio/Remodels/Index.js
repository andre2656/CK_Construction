import React from 'react';
import PhotoLab from './SLCCPhotoLab'
import BlackBox from './SLCCBlackBox'
import RockSprings from './RockSpringsSweetWater'
import Staffing from './StrategicStaffing'
import Wrestling from './WrestlingRoomMS'
import Dubois from './DuboisHS'
import LDS from './LDSRemodels'
import JCPenney from './JCPenney'
import Wendeys from './WendeysRestaurants'
import OgdenArmory from './OgdenArmory'
import OldPinedle from './OldPinedaleClinic'

export default class Govt extends React.Component {
    state = {

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <PhotoLab/>
                        <BlackBox/>
                        <RockSprings/>
                        <Staffing/>
                        <Wrestling/>
                        <Dubois/>
                        <LDS/>
                        <JCPenney/>
                        <Wendeys/>
                        <OgdenArmory/>
                        <OldPinedle/>
                    </div>
                </div>
            </div>
        )
    }
}