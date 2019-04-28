import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div id='body' class='mx-auto'>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-lg-7 mx-auto'>
                                <p id='openText'>
                                    <h3 class='col-sm-4 mx-auto'><strong>Count on us!</strong></h3>
                                    At CK Construction, the quality of our relationships is important to us, not the quantity.
                                    That’s why we do whatever it takes to make sure our clients are happy with our work;
                                    The greatest profit we can earn on a project is a referral.
                                    CK will change the way you think about construction.
                                    After all, it truly is the thought that counts.
                                </p>
                            </div>
                            <div class='col-lg-12'>
                                <div id="homeCarousel" class="carousel slide mx-auto" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#homeCarousel" data-slide-to="1"></li>
                                        <li data-target="#homeCarousel" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src="../CK_Images/homeCarousel1.jpg" alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../CK_Images/homeCarousel2.jpg" alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../CK_Images/homeCarousel.jpg" alt="Third slide" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
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