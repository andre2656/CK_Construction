import React from 'react';
import axios from 'axios';
import validator from 'validator';
class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    nameOnChange = (event) => {
        this.setState({ name: event.target.value.trim() })
    }
    emailOnChange = (event) => {
        this.setState({ email: event.target.value.trim() })
    }
    phoneOnChange = (event) => {
        this.setState({ phone: event.target.value.trim() })
    }
    messageOnChange = (event) => {
        this.setState({ message: event.target.value.trim() })
    }
    handleSubmit = () => {
        if (this.isFormValid()) {
            this.createMessage();
        } else {
            console.log('There was an error in your form please fill out the required feilds ')
        }
    }
    isFormValid = () => {
        if (this.state.name === '' || this.state.email === '' || !validator.isEmail(this.state.email) || this.state.message === '') {
            return false
        } else {
            return true
        }
    }
    createMessage = () => {
        axios.post('api/contact/send', {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        }).then((response) => {
            console.log(response);
            if (response.code === '400') {
                window.location.pathname = '/Home'
            } else {
                console.log(response.message);
            }
        }).catch((error) => {
            console.log(error)
        })
    };

    render() {
        return (
            <div className='container'>
                <br />
                <br />
                <div className='row' id="pagetitleContact">
                    <div className='col-md-3'></div>
                    <h3 id='pageTitleContact' className='col-md-6'><strong>CK Construction & Service Corp</strong></h3>
                    <div className='col-md-3'></div>
                </div>
                <div className='row' id='CK_Contact'>
                    <div className='col-md-1'></div>
                    <h6 className='col-md-5'>
                        <h5 id='contactContact'>Contact:</h5><br />
                        <h6 id='licensesContact'><strong>Address:</strong> <a href='https://www.google.com/maps/dir//ck+construction+utah/@41.2183388,-112.053285,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87530e6b6d45261d:0x1f1636531a80735e!2m2!1d-112.0181798!2d41.2182796' target='_blank'>619 N 2000 W  Ogden, UT  84404</a></h6><br />
                        <h6 id='licensesContact'><strong>Email:</strong> <a href='mailto:info@cksrvs.com'>info@cksrvs.com</a></h6><br />
                        <h6 id='licensesContact'><strong>Phone:</strong> 801-731-0717</h6><br />
                    </h6>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <h5 className='col-md-12' id='contactContact'>Will work in the following states:</h5> <br />
                        </div>
                        <div className='row'>
                            <p className='col-md-12' id='licensesContact'>
                                <strong>Utah, Neveda, Idaho, Arizona, Wyoming, Colorado</strong>
                            </p>
                        </div>
                        <div className='row'>
                            <h5 className='col-md-12' id='contactContact'>Licenses:</h5>
                        </div>
                        <div className='row'>
                            <p className="col-md-12" id='licensesContact'>
                                <strong>Utah:</strong> License #10362572-5501 B 100	<br />
                                <strong>Neveda:</strong> #0060099 B General Building, #0079008 C-14 Steel Reinforcing and Erection	<br />
                                <strong>Idaho:</strong> #RCE-12604 Contractor<br />
                                <strong>Arizona:</strong> #ROC 310308  B-1<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row' id='formContact'>
                    <div className='col-md-12'>
                        <form id='form'>
                            <h3 id='formHeadingContact'>Quick Contact</h3>
                            <br />
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <input className='col-md-4' id='inputContact' name='Name' type='text' placeholder='Name' onChange={this.nameOnChange} />
                                <div className='col-md-2'></div>
                                <input className='col-md-4' id='inputContact' name='Email' type='email' placeholder='Email' onChange={this.emailOnChange} />
                                <div className='col-md-1'></div>
                            </div>
                            <br /><br />
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <input className='col-md-4' id='inputContact' name='Name' type='text' placeholder='Company Name' onChange={this.nameOnChange} />
                                <div className='col-md-2'></div>
                                <input className='col-md-4' id='inputContact' name='Phone' type='number' placeholder='Phone (optional)' onChange={this.phoneOnChange} />
                                <div className='col-md-1'></div>
                            </div>
                            <br /><br /><br />
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <textarea id='textareaContact' className='col-md-6' name='Message' type='text' placeholder='Message' onChange={this.messageOnChange} />
                                <div className='col-md-4'><button type='submit' id="submitContact" onClick={this.handleSubmit}><h4>Submit</h4></button></div>
                            </div>
                            <br /><br />

                            <br /><br />
                        </form>
                    </div>
                </div>

                <div className='row' id='titleRowContact'>
                    <div className='col-md-12'>
                        <h4 id='titleContact'>STEEL DIVISION</h4>
                    </div>
                </div>
                <div className='row' id='cardRowContact'>
                    <div className='col-md-1'></div>
                    <div className='col-md-4'>
                        <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header"><strong>Project Manager</strong><br /> Rob Checketts</div>
                            <div className="card-body">
                                <p className="card-title">Owner - President & Estimating/Scheduling</p>
                                <p className="card-text">Phone: 801-731-0717</p>
                                <p className="card-text" >Email: <a href='mailto:robc@cksrvs.com' id='emailContact'>robc@cksrvs.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header"><strong>Job Superintendent</strong><br /> Jesus Garcia</div>
                            <div className="card-body">
                                <p className="card-text" style={{ paddingTop: '20px' }}>Phone: 801-731-0717</p>
                                <p className="card-text" >Email: <a href='mailto:jgarcia@cksrvs.com' id='emailContact'>jgarcia@cksrvs.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>

                <div className='row' id='titleRowContact'>
                    <div className='col-md-12'>
                        <h4 id='titleContact'> SERVICES/CONSTRUCTION DIVISION	</h4>
                    </div>
                </div>
                <div className='row' id='cardRowContact'>
                    <div className='col-md-1'></div>
                    <div className='col-md-4'>
                        <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header"><strong>Project Manager</strong><br /> Ryan Shurtleff</div>
                            <div className="card-body">
                                <p className="card-title">Services - Vice President & Estimating/Scheduling</p>
                                <p className="card-text">Phone: 801-731-0717</p>
                                <p className="card-text" >Email: <a href='mailto:rshurtleff@cksrvs.com' id='emailContact'>rshurtleff@cksrvs.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header"><strong>Job Superintendent</strong><br /> Chris Kent</div>
                            <div className="card-body">
                                <p className="card-text" type='number' style={{ paddingTop: '20px' }}>Phone: 801-731-0717</p>
                                <p className="card-text" type='email' >Email: <a href='mailto:ckent@cksrvs.com' id='emailContact'>ckent@cksrvs.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <div className='row' id='titleRowContact'>
                    <div className='col-md-12'>
                        <h4 id='titleContact'>OFFICE</h4>
                    </div>
                </div>
                <div className='row' id='cardRowContact'>
                    <div className='col-md-4'>
                        <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header"><strong>Controller</strong><br /> Jan Checketts</div>
                            <div className="card-body">
                                <p className="card-title">Owner - President & Estimating/Scheduling</p>
                                <p className="card-text">Phone: 801-731-0717 ext. 1</p>
                                <p className="card-text" >Email: <a href='mailto:jan@cksrvs.com' id='emailContact'>jan@cksrvs.com</a> </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header"><strong>Office and Projects Assistant</strong> <br /> Colette Smith</div>
                            <div className="card-body">
                                <p className="card-text" style={{ paddingTop: '20px' }}>Phone: 801-731-0717 ext 2 (receptionist)</p>
                                <p className="card-text" >Email: <a href='mailto:csmith@cksrvs.com' id='emailContact'>csmith@cksrvs.com</a> </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header"> <strong>Accounting</strong><br /> AR & AP</div>
                            <div className="card-body">
                                <p className="card-text" style={{paddingTop: '20px'}}>Phone: 801-731-0717</p>
                                <p className="card-text" >Email: <a href='mailto:ap@cksrvs.com' id='emailContact'>ap@cksrvs.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= 'ContactPadding'></div>
            </div>
        )
    }
}
export default Contact;