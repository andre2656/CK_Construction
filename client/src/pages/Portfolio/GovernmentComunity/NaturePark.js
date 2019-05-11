import React from 'react';

const NaturePark = () => {
    return (
        <div>
                <div className='row'>
                    <div className='col-md-4' id='PortfolioImg'>
                        <img id='imgPortfolio' src='../CK_Images/ImgTemplate.jpg'></img>
                    </div>
                    <div className='col-md-8' id='PortfolioText'>
                        <h4 id='titlePortfolio'>
                            South Ogden Nature Park
                        </h4>
                        <p id='textPortfolio'>
                            This project included tennis courts basketball courts and play ground equipment.
                            It is located in the same complex as the city office building, and a private elementary school requiring
                            added public protection.
                        </p>
                    </div>
                </div>
        </div>
    )
}
export default NaturePark;