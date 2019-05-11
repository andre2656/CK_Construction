import React from 'react';
import Arien from './ArienNess'
import WyomingWork from './WyomingWork'
import HobbyLobby from './HobbyLobby'
import Lifetime from './LifetimeBackyards'
import RockyMtn from './RockyMtnHome'
import TireDen from './TireDen'
export default class Govt extends React.Component {
    state = {

    }

    render() {
        return (
            <div className= 'container'>
                <div className= 'row'>
                    <div className= 'col-md-12'>
                        <Arien />
                        <WyomingWork />
                        <HobbyLobby />
                        <Lifetime />
                        <RockyMtn />
                        <TireDen />
                    </div>
                </div>
            </div >
        )
    }
}