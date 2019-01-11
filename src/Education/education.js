import React, { Component } from 'react';
import './education.css';
import PageHeader from "react-bootstrap/es/PageHeader";

class Education extends Component{
    render() {
        return(
            <div className='Education'>
                <div className='padding-top'></div>
                <PageHeader className='section--header'> Education </PageHeader>
                <div className='padding-top'></div>
                <header className='school'> Lehigh University </header>
                <div className='padding-top'></div>
                <div className='major'>Computer Science and Business</div>
                <p className='about-major'>
                    Lehigh Computer Science and Business is an accredited major that is both,
                    a full Computer Science Business degree.
                </p>
            </div>
        )
    }
}


export default Education;
