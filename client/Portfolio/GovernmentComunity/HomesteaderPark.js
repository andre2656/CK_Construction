import React from 'react';

const Homesteader = () => {
    return (
        <div>
                <div className='row'>
                <div className='col-md-4' id='PortfolioImg'>
                    <img id='imgPortfolio' src='../CK_Images/ImgTemplate.jpg'></img>
                    </div>
                <div className='col-md-8' id='PortfolioText'>
                        <h4 id='titlePortfolio'>
                            Homesteader Park Rest Area
                        </h4>
                        <p id='textPortfolio'>
                            The Homesteader project spans more than 10 acres and includes picnic structures, walking paths,
                            renovations to the park's east-end road system, irrigation, landscaping, new rv areas, parking lots, and exterior lighting.
                        </p>
                    </div>
                </div>
        </div>
    )
}
export default Homesteader;