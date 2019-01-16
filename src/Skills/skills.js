import React, { Component } from 'react';
import './skills.css';
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

/**
 * TODO: change this to a 3D pie chart
 * https://www.amcharts.com/demos/3d-pie-chart/?theme=moonrisekingdom
 */
class Skills extends Component {

    state={
        dataPie: {
            labels: ["Java", "C/C++", "Scala", "Python", "Javascript/Typescript", "Git", "React"],
            datasets: [
                {
                    data: [100, 60, 40, 90, 40, 80, 40],
                    backgroundColor: [
                        "#90EE90",
                        "#46BFBD",
                        "#FDB45C",
                        "#949FB1",
                        "#DB4437",
                        "#4D5360",
                        "#ac64ad",
                    ],
                    hoverBackgroundColor: [
                        "#90EE90",
                        "#46BFBD",
                        "#FDB45C",
                        "#949FB1",
                        "#DB4437",
                        "#4D5360",
                        "#ac64ad",
                    ]
                }
            ]
        }
    }

    render() {
        return(
            <div className='skills--section'>
                <div className='padding-top'></div>
                <h1>Skills</h1>
                <div className='chart'>
                    <MDBContainer>
                        <Pie data={this.state.dataPie} options={{ responsive: true }} />
                    </MDBContainer>
                </div>
            </div>
        )
    }
}




export default Skills;
