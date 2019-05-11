import React from 'react';

const LymanLibrary = () => {
    return (
        <div>
                <div className='row'>
                    <div className='col-md-8' id='PortfolioText'>
                        <h4 id='titlePortfolio'>
                            Lyman Library
                        </h4>
                        <p id='textPortfolio'>
                            The Lyman Library was completed in July 2010.  Based on design quality and innovation, craftsmanship,
                            and its contribution to the community,
                            the Lyman Library was the Gold winner of the Best of 2010 Awards for Outstanding Cultural Project.
                        </p>
                    </div>
                    <div className='col-md-4' id='PortfolioImg'>
                        <img id='imgPortfolio' src='../CK_Images/ImgTemplate.jpg'></img>
                    </div>
                </div>
        </div>
    )
}
export default LymanLibrary;