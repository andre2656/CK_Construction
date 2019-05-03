import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div id='body' className='mx-auto'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div id="homeCarousel" className="carousel slide mx-auto" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#homeCarousel" data-slide-to="1"></li>
                                        <li data-target="#homeCarousel" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src="../CK_Images/homeCarousel1.jpg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="../CK_Images/homeCarousel2.jpg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="../CK_Images/homeCarousel.jpg" alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    <div className='col-lg-8 mx-auto'>
                                        <p id='openText'>
                                            <h3><strong>Count on us!</strong></h3>
                                            At CK Construction, the quality of our relationships is important to us, not the quantity.
                                            That’s why we do whatever it takes to make sure our clients are happy with our work;
                                            The greatest profit we can earn on a project is a referral.
                                            CK will change the way you think about construction.
                                            After all, it truly is the thought that counts.
                                         </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;