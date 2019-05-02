import React from 'react';

class Careers extends React.Component {
 
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h2 className='col-md-5'> WORKING FOR CK </h2>
                </div>

                <div className='row'>
                    <h3 className='col-md-5'>BUILDING PEOPLE.</h3>
                </div>
                <div className='row'>
                    <p className='col-md-5'>Building on your strength is what makes us strong.
                        At CK Construction we believe that investing in our employees is an investment in our future.
                        Unlike bigger contractors who hire and fire every time the economy changes, we value our employees and our industry reputation.
                </p>
                </div>
                <div className='row'>
                <p className= 'col-md-5'>Friends don’t let friends work for anybody else.
                    Competitive wages, benefits, ongoing training and plenty of vacation time. Do you really need another reason? Click on the link to download an application.
                </p>
                </div>
                <div className='row'>
                    <a className= 'btn btn-drk' href='./CK-Construction-Application-of-Employment.pdf' download>Download Application</a>
                </div>
            </div>
        )
    }
}
export default Careers;