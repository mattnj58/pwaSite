import React, { Component } from 'react';
import './education.css';
//import PageHeader from "react-bootstrap/es/PageHeader";
import {ListGroup, ListGroupItem, Table, tbody} from "react-bootstrap";

class Education extends Component{
    render() {
        return(
            <div className='Education'>
                <div className='padding-top'></div>
                <h1 className='section--header'> Education </h1>
                <header className='school'> <a href='https://www.lehigh.edu' className='school'> Lehigh University </a> </header>
                <ListGroup className='classes'>
                    <ListGroupItem header="Bachelor of Science in Computer Science and Business">
                        Computer Science and Business is a unique major that is, both, a full Computer Science and a full Business degree.
                        Using my knowledge from both degrees, I am able to apply my computer science skills in a business environment
                    </ListGroupItem>
                    <ListGroupItem header="Computer Science">
                        As a Computer Scientist, I learned and applied coding skills to create all sorts of programs.
                        These programs can range from finding a solution to a crossword puzzle to creating filesystem from scratch.
                        Furthermore, I learned a lot of algorithms and data structures throughout my time at Lehigh such
                        as quick sort, merge sort, red black trees, and Dykstra's projection algorithm.
                    </ListGroupItem>
                    <ListGroupItem header='Business'>
                        As a Business student, I learned the in's and out's of how a business operates. This includes
                        the basics for Accounting, Finance, Supply Chain Operations, and Management. My business education
                        also allows me to learn how certain changes to internal and external environments of the company
                        that I am working can change the decisions that the company will make.
                    </ListGroupItem>
                    <ListGroupItem header='Classes'>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th>Computer Science </th>
                                <th>Business</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Operating Systems</td>
                                <td>Financial Accounting</td>
                            </tr>
                            <tr>
                                <td>Database Systems and Applications </td>
                                <td>Applied Microeconomics Analysis</td>
                            </tr>
                            <tr>
                               <td>Algorithms</td>
                                <td>Finance</td>
                            </tr>
                            <tr>
                                <td>Computer Application in Business</td>
                                <td>Strategic Management in a  Global Environment</td>
                            </tr>
                            </tbody>
                        </Table>
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}


export default Education;
