import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className= 'row'>
                        <input name='Name' type='text' placeholder='Name' />
                    </div>
                    <div className='row'>
                        <input name='Email' type='email' placeholder='Email' />
                    </div>
                    <div className='row'>
                        <input name='Phone' type='number' placeholder='Phone (optional)' />
                    </div>
                    <div className='row'>
                        <textarea name='message' type='text' placeholder='Message' />
                    </div>
                </form>
            </div>
        )
    }
}
export default Contact;