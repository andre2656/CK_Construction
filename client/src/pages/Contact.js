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
                <div className='row'>
                    <h3>CK Construction & Service Corp	</h3> <br />

                    <p className='col-md-4'>619 N 2000 W  Ogden, UT  84404 <br />
                        Phone: 801-731-0717<br />
                        Email: info@cksrvs.com<br />
                    </p>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <form>
                            <h4>Quick submit</h4>
                            <div className='row'>
                                <input name='Name' type='text' placeholder='Name' onChange={this.nameOnChange} />
                            </div>
                            <div className='row'>
                                <input name='Email' type='email' placeholder='Email' onChange={this.emailOnChange} />
                            </div>
                            <div className='row'>
                                <input name='Phone' type='number' placeholder='Phone (optional)' onChange={this.phoneOnChange} />
                            </div>
                            <div className='row'>
                                <textarea name='Message' type='text' placeholder='Message' onChange={this.messageOnChange} />
                            </div>
                            <button type='submit' onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-5'>
                        <h4>STEEL DIVISION</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-4'>
                        <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header"><strong>Project Manager:</strong><br /> Rob Checketts</div>
                            <div className="card-body">
                                <p className="card-title">Owner - President & Estimating/Scheduling</p>
                                <p className="card-text">Phone: 801-731-0717</p>
                                <p className="card-text">Email: robc@cksrvs.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <div className="card-header"><strong>Job Superintendent:</strong><br /> Jesus Garcia</div>
                            <div className="card-body">
                                <p className="card-text">Phone: 801-731-0717</p>
                                <p className="card-text">Email: jgarcia@cksrvs.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>

                <h4> SERVICES/CONSTRUCTION DIVISION	</h4>
                <div className='row'>
                    <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header"><strong>Project Manager:</strong><br /> Ryan Shurtleff</div>
                        <div className="card-body">
                            <p className="card-title">Services - Vice President & Estimating/Scheduling</p>
                            <p className="card-text">Phone: 801-731-0717</p>
                            <p className="card-text">Email: rshurtleff@cksrvs.com</p>
                        </div>
                    </div>
                    <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header"><strong>Job Superintendent:</strong><br /> Chris Kent</div>
                        <div className="card-body">
                            <p className="card-text" type='number'>Phone: 801-731-0717</p>
                            <p className="card-text" type='email'>Email: ckent@cksrvs.com</p>
                        </div>
                    </div>
                </div>
                <h4>OFFICE</h4>
                <div className='row'>
                    <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header"><strong>Controller:</strong><br /> Jan Checketts</div>
                        <div className="card-body">
                            <p className="card-title">Owner - President & Estimating/Scheduling</p>
                            <p className="card-text">Phone: 801-731-0717 ext. 1</p>
                            <p className="card-text">Email: jan@cksrvs.com </p>
                        </div>
                    </div>
                    <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header"><strong>Office and Projects Assistant</strong> <br /> Colette Smith</div>
                        <div className="card-body">
                            <p className="card-text">Phone: 801-731-0717 ext 2 (receptionist)</p>
                            <p className="card-text">Email: csmith@cksrvs.com </p>
                        </div>
                    </div>
                    <div className="card border-dark mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header"> <strong>Accounting:</strong><br /> AR & AP</div>
                        <div className="card-body">
                            <p className="card-text">Phone: 801-731-0717</p>
                            <p className="card-text">Email: ap@cksrvs.com</p>
                        </div>
                    </div>
                </div>
                <h3>Will work in the following states:</h3>
                <p>
                    <strong>Utah, Neveda, Idaho, Arizona, Wyoming, Colorado</strong>

                </p>
                <h3>Licenses:</h3>
                <p>
                    <strong>Utah:</strong> License #10362572-5501 B 100	<br />
                    <strong>Neveda:</strong> #0060099 B General Building, #0079008 C-14 Steel Reinforcing and Erection	<br />
                    <strong>Idaho:</strong> #RCE-12604 Contractor<br />
                    <strong>Arizona:</strong> #ROC 310308  B-1<br />
                </p>

            </div>
        )
    }
}
export default Contact;