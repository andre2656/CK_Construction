import React from 'react';
import axios from 'axios';
import validator from 'validator';
class Contact extends React.Component {
    state= {
        name: '',
        email: '',
        phone: '',
        message: '',
    }
    
    nameOnChange = (event) => {
        this.state({ name: event.target.value.trim() })
    }
    emailOnChange = (event) => {
        this.state({ email: event.target.value.trim() })
    }
    phoneOnChange = (event) => {
        this.state({ phone: event.target.value.trim() })
    }
    messageOnChange = (event) => {
        this.state({ message: event.target.value.trim()})
    }
    handleSubmit = () => {
        if (this.isFormValid()){
            this.createMessage();
        }else {
            console.log('There was an error in your form please fill out the required feilds ')
        }
    }
    isFormValid = () => {
        if (this.state.name === '' || this.state.email === '' || !validator.isEmail(this.state.email) || this.state.message === '' ){
            return false
        }else{
            return true
        }
    }
    createMessage = () => {
        axios.post('api/contact/send',{
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        }).then((response) => {
            console.log(response);
            if (response.code === '400'){
                window.location.pathname = '/Home'
            }else {
                console.log(response.message);
            }
        }).catch((error) => {
            console.log(error)
        })
    };

    render() {
        return (
            <div>
                <form>
                    <div className= 'row'>
                        <input name='Name' type='text' placeholder='Name' onChange= {this.nameOnChange}/>
                    </div>
                    <div className='row'>
                        <input name='Email' type='email' placeholder='Email' onChange={this.emailOnChange}/>
                    </div>
                    <div className='row'>
                        <input name='Phone' type='number' placeholder='Phone (optional)' onChange={this.phoneOnChange}/>
                    </div>
                    <div className='row'>
                        <textarea name='Message' type='text' placeholder='Message' onChange={this.messageOnChange}/>
                    </div>
                    <button type= 'submit' onClick= {this.handleSubmit}>Submit</button>
                </form>

                <h3>CK OFFICE: CK Construction & Service Corp	</h3> 	 	 	 
                <p>619 N 2000 W  Ogden, UT  84404 <br/>	 	 	 
                    801-731-0717<br />	 	 	 	 
                    info@cksrvs.com<br />
                </p>	 	 	 
                                                    
                <h3>STEEL DIVISION	 </h3>	 	 	 	 	 	 	 	 	 
                <p><strong>Project Manager:</strong> Rob Checketts Owner - President <br/> 
                    & Estimating/Scheduling	 	 	 	801-731-0717 	 robc@cksrvs.com	 <br /> 	 	 	 
                    <strong>Job Superintendent:</strong> Jesus Garcia	<br />  	 	 	 	 
                                    801-731-0717	jgarcia@cksrvs.com	<br />  	 	 	 
                </p>   


                <h3> SERVICES/CONSTRUCTION DIVISION	</h3> 	 	 	 	 	 	 
                <p><strong>Project Manager:</strong>
                Ryan Shurtleff	 	 	 	Services - Vice President& Estimating/Scheduling	 
                801-731-0717                 rshurtleff@cksrvs.com	 	 	 	 
                <strong>Job Superintendent:</strong> Chris Kent	 	 	 	 	 
                    801-731-0717	 	 	 	 
                    ckent@cksrvs.com 	
                </p>	 	 		 
                     	 	 	 
                                                    
                <h3>OFFICE</h3> 	
                    
                <p><strong>Controller:</strong> Jan Checketts	 	 	 	 	 
                801-731-0717	 	ext 1		 
                jan@cksrvs.com 	 	 	 	 
                                                    
                   <strong>Accounting:</strong>  AR & AP	 	 	 	ap@cksrvs.com	 	 	 	 
                                                     
                   <strong>Office & Projects Assistant:</strong> Colette Smith	 	 	 	 	 
                    	 	 	 	801-731-0717 ext 2 (receptionist)
                                    csmith@cksrvs.com	 	 	 	 
                 </p>                                   
                <h3>Will work in the following states:</h3>	 	 				
                    <p>
                    <strong>Utah, Neveda, Idaho, Arizona, Wyoming, Colorado</strong>	 	 	 				
                    
                    </p>	 	 	 				
                    <h3>Licenses:</h3>	 	 	 				
                    <p>
                    Utah: License #10362572-5501 B 100	 	 	 				
                    Neveda: #0060099 B General Building, #0079008 C-14 Steel Reinforcing & Erection	 	 	 				
                    Idaho: #RCE-12604 Contractor	 	 	 				
                    Arizona: #ROC 310308  B-1
                    </p>	 	 	 		

            </div>
        )
    }
}
export default Contact;