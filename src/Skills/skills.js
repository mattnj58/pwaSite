import React, { Component } from 'react';
import './skills.css';
import ReactSvgPieChart from 'react-svg-piechart';

class Skills extends Component {

    render() {
        return(
            <div className='skills--section'>
                <h1>Skills</h1>
                <ReactSvgPieChart data={data}
                                  expandOnHover={true}
                                  expandSize={1}
                                  shrinkOnTouchEnd={false}
                                  strokeColor="#fff"
                                  strokeLinejoin="round"
                                  strokeWidth={0}
                                  viewBoxSize={1}/>
            </div>
        )
    }
}

const data = [
    {title: "Data 1", value: 100, color: "#4285F4"},
    {title: "Data 2", value: 60, color: "purple"},
    {title: "Data 3", value: 30, color: "#F4B400"},
    {title: "Data 4", value: 20, color: "#0F9D58"},
    {title: "Data 5", value: 10, color: "#a1d9ce"},
]



export default Skills;
