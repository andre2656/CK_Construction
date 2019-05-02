import React from 'react';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div id='bodyPortfolio' class='mx-auto'>
                    <div class='container mx-auto'>
                        <div class='row mx-auto'>
                            <h2 id='portfolioHeader'>Project Portfolio</h2>
                        </div>
                        <div class='row mx-auto'>
                            <p id='portfolioText' class='col-sm-6'> The proof is in our projects. <br />
                                At CK Construction, we walk the walk, and the results speak for themselves. With projects of all sizes spread across the
                                entire Intermountain West, we believe our portfolio not only stacks up against some of the stuff the “big” guys are
                                doing, but it demonstrates our unique and ongoing commitment to our clients.
                                Click on the links to the left and see what we mean
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;