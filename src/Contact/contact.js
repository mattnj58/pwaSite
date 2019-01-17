import React, {Component} from 'react';
import './contact.css';
import gif from './giphy.gif';

class Contact extends Component{

    render() {
        return (
            <div className='contact-section'>
                <div className='padding-top'></div>
                <h2>Contact Information</h2>
                <h1 class="section-subtitle"> Thanks for gracing me with your presence! If you have any questions about me, feel free to contact me at <a href='mailto:mattnj58@gmail.com'>mattnj58@gmail.com</a> </h1>
                <div class="padding--bottom"></div>
            </div>
        );
    }
}


export default Contact;
