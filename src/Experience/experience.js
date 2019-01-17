import React, { Component } from 'react';
import './experience.css';

class Experience extends Component{
    render() {
        return(
            <div className='experience--section'>
                <div className='padding-top'></div>
                <h1 className='experience'>Experiences</h1>
                <h3 className='jobs'>Assistant Manager</h3>
                <ul>
                    <li> Maintained safe pool health through monitoring 6 chemical tests weekly and providing any needed additions to the pool such as adding salt, chlorine, and backwashing the pumps </li>
                    <li>Recommended and applied new methods of keeping track of patrons that enter the pool </li>
                </ul>
                <h3 className='jobs'>Lifeguard</h3>
                <ul>
                    <li>Communicated with a team of 3-4 lifeguards to ensure safety by reporting information to teammates, paying close attention to detail </li>
                </ul>
                <h3 className='jobs'> Swim Instructor </h3>
                <ul>
                    <li>Taught local kinds ranging from 3-8 years old swimming skills, dramatically improving ability to swim and comfort in the water </li>
                </ul>
            </div>
        )
    }
}


export default Experience;
