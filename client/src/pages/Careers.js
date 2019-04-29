import React from 'react';

class Careers extends React.Component {
    state= {
        jobs: ''
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h2> WORKING FOR CK </h2>
                </div>

                <div className='row'>
                    <h3>BUILDING PEOPLE.</h3>
                </div>
                <div className='row'>
                    <p>Building on your strength is what makes us strong.
                        At CK Construction we believe that investing in our employees is an investment in our future.
                        Unlike bigger contractors who hire and fire every time the economy changes, we value our employees and our industry reputation.
                </p>
                </div>
                <div className='row'>
                    Friends don’t let friends work for anybody else.
                    Competitive wages, benefits, ongoing training and plenty of vacation time. Do you really need another reason? Click on the link to download an application.
                </div>
                <div className='row'>
                Download: Employment_Application.pdf
                </div>

                <div className= 'row'>
                    CURRENTLY HIRING FOR: {this.state.jobs}
                </div>
            </div>
        )
    }
}
export default Careers;