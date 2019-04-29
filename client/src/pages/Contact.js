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
            </div>
        )
    }
}
export default Contact;