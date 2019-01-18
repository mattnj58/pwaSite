import React, { Component } from 'react';
import './welcome.css';
import profile from './profile.jpg'
import Button from '@material-ui/core/Button'

class Welcome extends Component{
    render() {
        return(
            <div className='welcome'>
                <div className='profile--section'>
                    <div className='padding-top'></div>
                    <img src={profile} alt='profile' margin="10px"/>
                </div>
                <div className="name--section">
                    Matthew Wong
                </div>
                <div className='aboutMe--section'>
                    Hello! Welcome to my site! I'm Matthew Wong, a senior at Lehigh University
                    <div class="row">
                        <div className='center'>
                            <a href='https://github.com/mattnj58'>
                                <Button variant='extendedFab' color='primary'>
                                    Github
                                </Button>
                            </a>
                            <h class="margin"></h>
                            <a href='https://www.linkedin.com/in/matt-wong-01401652/'>
                                <Button variant='extendedFab' color='primary'>
                                    LinkedIn
                                </Button>
                            </a>
                            <div></div>
                            <a href='/Resume.pdf' class="view-pdf" target="_blank">
                                <Button variant='extendedFab' color='primary'>
                                    Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className='padding--bottom'></div>
                </div>
            </div>
        )
    }
}



export default Welcome;
