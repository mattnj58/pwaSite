import React, {Component} from 'react';
import './projects.css';

class Projects extends Component {

    constructor(props, context) {
        super(props, context);

        this.onClick = this.onClick.bind(this);

        this.state = {
            buttons: [
                {name:'project1', open: false},
                {name:'project2', open: false}
            ]
        };
    }

    onClick(index){
        let temp = this.state.buttons;
        temp[index].open = !temp[index].open;
        this.setState({buttons: temp});
    }

    render() {
        return (
            <div className='projects--section'>
                <div className='padding-top'></div>
                <h1 className='title'>Projects</h1>
                <h3 className='project'> Wall Monitor Control Application</h3>
                    <ul>
                        <li>Worked as part of a 3-person team to design, implement, and test an application to control video sources across several dozen displays</li>
                        <li>Technical Skill: Python, Angular 2, Postgres, TypeScript, Barco CMS </li>
                    </ul>
                <h3 className='project'> Social Media Application </h3>
                <ul>
                    <li>Created a multi-component program that stored users in a database and allowed them to communicate using their phone or pc </li>
                    <li>Technical Skills: Typescript, Maven, Docker, Android Studio, Java, Bootstrap </li>
                </ul>
                <h3 className='project'> Personal Website</h3>
                <ul>
                    <li> Developed a website using modern design and technology </li>
                    <li>Technical Skills: JavaScript, CSS, HTML, Bootstrap, Github</li>

                </ul>
                <h3 className='project'> Car Rental System </h3>
                <ul>
                    <li>Designed and implemented a car rental system that allowed users to login, view what cars were available, the prices, and rent a car for a user determined amount of time </li>
                    <li>Technical Skills: Java, SQL, Oracle</li>
                </ul>
                <div className='padding--bottom'></div>
            </div>
        );
    }
}


export default Projects;
