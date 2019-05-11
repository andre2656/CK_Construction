import React from 'react';
import Sweetwater from './SweetwaterCounty';
import CombinedCom from './CombinedCom';
import UTACentral from './UTACenteralRest';
import NewHorizon from './NewHorizen';
import HeberCity from './HeberCityEquipment';
import ManilaFire from './ManilaFireStation';
import LoganRiver from './LoganRiver';
import WellsCityHall from './WellsCityHall';
import ParkAdmin from './ParkAdmin';
import LittlePeople from './LittlePeople';
import Escalante from './EscalanteHeritage';
import Homesteader from './HomesteaderPark';
import Trax from './TraxUTA';
import UTARail from './UTARailCenter';
import Lyman from './LymanLibrary';
import NaturePark from './NaturePark';
import Timpanogos from './TimpanogosHS';
import UDOT from './UDOTGreendale';
import SandyFire from './SandyFireStation';
import Pavillions from './SaltLakePavillions';
import UnionStation from './UnionStation';
import Nav from '../Nav/Index'
export default class Govt extends React.Component {
    state = {

    }

    render() {
        return (
            <div  id= 'PortfolioContainer'>
            <div className='row'>
                    <h3 className= 'mx-auto' id= 'PortfolioTitle'>Our Goverment and Community </h3>
            </div>
            <div className= 'row' id= 'GovtRow'>
                    <div className='col-md-2'><Nav /></div>
                    <div className='col-md-10'>
                        <Sweetwater />
                        <CombinedCom />
                        <UTACentral />
                        <NewHorizon />
                        <HeberCity />
                        <ManilaFire />
                        <LoganRiver />
                        <WellsCityHall />
                        <ParkAdmin />
                        <LittlePeople />
                        <Escalante />
                        <Homesteader />
                        <Trax />
                        <UTARail />
                        <Lyman />
                        <NaturePark />
                        <Timpanogos />
                        <UDOT />
                        <SandyFire />
                        <Pavillions />
                        <UnionStation />
                    </div>
            </div>

                    
            </div>

        )
    }
}