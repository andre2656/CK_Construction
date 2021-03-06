import React from 'react';

const NewHorizen = () => {
    return (
        <div>
                <div className='row'>
                    <div className='col-md-4' id='PortfolioImg'>
                        <img id='imgPortfolio' src='../CK_Images/ImgTemplate.jpg'></img>
                </div>
                    <div className='col-md-8' id='PortfolioText'>
                        <h4 id='titlePortfolio'>
                            The New Horizon Complex
                        </h4>
                        <p id='textPortfolio'>
                            The projects was an extensive renovation and retrofit of a former discount store, at approximately 33,000 sq. ft., and site in Evanston, Wyoming.
                            It will serve as a new alternative middle/high school, a new central kitchen for Uintah County School District, and to house selected school district maintenance functions.
                        </p>
                    </div>
                </div>
        </div>
    )
}
export default NewHorizen;