import React from 'react';

const AshGrove = () => {
    return (
        <div>
            
            <div className='container'>
                <div className='row'>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <div className='row'>
                                        <div className='col-md-12' id='PortfolioImg'>
                                            <img id='imgPortfolio' src='../CK_Images/ImgTemplate.jpg' />
                                        </div>
                                        <button class="btn btn-link col-md-12" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapseOne">
                                            <h4>Ash Grove Bag House</h4>
                                        </button>
                                    </div>
                                </h2>
                            </div>
                            <div id="collapse2" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body" id='PortfolioCard'>
                                    <div className='row'>
                                        <div className='col-md-1'></div>
                                        <p className='col-md-5' id='textCardPortfolio'>
                                            The Ashgrove bag house was constructed while the plant was shut down, requiring us to put 50 plus people working 24/7 for 12 weeks.
                                            We saved 3 weeks time by erecting the new structure for the controls off site, then using a Manitowoc crane to move the structure 1000 feet to set it up on the bag superstructure at an elevation of 55 feet.
                                            We also erected the scrubbing tower and sheeted the building. We also demolished the existing bag house.
                                            We had no lost time injuries during this process.
                                            </p>
                                        <div className='col-md-1'></div>
                                        <div className='col-md-4'>
                                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="../CK_Images/ImgTemplate.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="../CK_Images/ImgTemplate.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="../CK_Images/ImgTemplate.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col-md-1'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AshGrove;