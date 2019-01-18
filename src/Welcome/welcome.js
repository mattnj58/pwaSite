import React, { Component } from 'react';
import './welcome.css';
import profile from './profile.jpg'
import Button from '@material-ui/core/Button'
import {Document, Page} from 'react-pdf';

class Welcome extends Component{

    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));


    render() {
        const {pageNumber, numPages} = this.state;

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
                            <a href='https://github.com/mattnj58' target="_blank" rel='noopener'>
                                <Button variant='extendedFab' color='primary'>
                                    Github
                                </Button>
                            </a>
                            <h class="margin"></h>
                            <a href='https://www.linkedin.com/in/matt-wong-01401652/' target='_blank' rel='noopener'>
                                <Button variant='extendedFab' color='primary'>
                                    LinkedIn
                                </Button>
                            </a>
                            <div></div>
                            <a href={process.env.PUBLIC_URL+'/resume.pdf'} target="_blank">
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
