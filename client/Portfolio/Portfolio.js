import React from 'react';
import Nav from './Nav/Index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row' id= 'row'>
                        <div className='col-md-3'>
                            <Nav />
                        </div>
                        <div className='col-md-6'>
                            <h3 id='titlePortfolio'>
                                Project Portfolio
                            </h3>
                            <p id='textPortfolio'>
                                At CK Construction, we walk the walk, and the results speak for themselves. With projects of all sizes spread across the
                                entire Intermountain West, we believe our portfolio not only stacks up against some of the stuff the “big” guys are
                                doing, but it demonstrates our unique and ongoing commitment to our clients.
                                Click on the links to the left and see what we mean
                            </p>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;