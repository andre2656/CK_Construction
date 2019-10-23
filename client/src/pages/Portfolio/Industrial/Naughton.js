import React from 'react';

const Naughton = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                <div className='row'>
                                        <div className='col-md-12' id='PortfolioImg'>
                                            <img id='imgPortfolio' src='../CK_Images/ImgTemplate.jpg' />
                                        </div>
                                        <button className="btn btn-link col-md-12" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h4>Naughton</h4>
                                        </button>
                                </div>
                                </h2>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body" id= 'PortfolioCard'>
                                    <div className= 'row'>
                                        <div className='col-md-1'></div>
                                        <p className='col-md-5' id='textCardPortfolio'>
                                            Located near Kemmerer Wyoming sharing the same site as the coal fired power plant.
                                            It is a Design/build project that has 3 bays to repair heavy equipment, like a D 10 and 1 bay for small repairs, office and restrooms along with storage over the offices.
                                    </p>
                                        <div className='col-md-1'></div>
                                        <div className='col-md-4'>
                                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                                <ol className="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                </ol>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img src="../CK_Images/ImgTemplate.jpg" className="d-block w-100" alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="../CK_Images/ImgTemplate.jpg" className="d-block w-100" alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="../CK_Images/ImgTemplate.jpg" className="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
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
export default Naughton;