import React, { Component } from 'react';
import './welcome.css';
import profile from '../profile.jpg'


class Welcome extends Component{
    render() {
        return(
            <div className='welcome'>
                <div className='profile--section'>
                    <img src={profile} alt='profile' margin="10px"/>
                </div>
                <div className="name--section">
                    Matthew Wong
                </div>
                <div className='aboutMe--section'>
                    Hello! Welcome to my site. My name is Matthew Wong
                </div>
            </div>
        )
    }
}

export default Welcome;
