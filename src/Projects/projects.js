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
                        Worked as part of a 3-person team to design, implement, and test an application to control video sources across several dozen displays
                        <div></div>
                        Technical Skill: Python, Angular 2, Postgres, TypeScript, Barco CMS
                    </ul>
                <h3 className='project'> Social Media Application </h3>
                <ul>
                    Created a multi-component program that stored users in a database and allowed them to communicate using their phone or pc
                    <div></div>
                    Technical Skills: Typescript, Maven, Docker, Android Studio, Java, Bootstrap
                </ul>
                <h3 className='project'> Personal Website</h3>
                <ul>
                    Developed a website using modern design and technology
                    <div></div>
                    Technical Skills: JavaScript, CSS, HTML, Bootstrap, Github
                </ul>
                <h3 className='project'> Car Rental System </h3>
                <ul>
                    Designed and implemented a car rental system that allowed users to login, view what cars were available, the prices, and rent a car for a user determined amount of time
                    <div></div>
                    Technical Skills: Java, SQL, Oracle
                </ul>
                <div className='padding--bottom'></div>
            </div>
        );
    }
}


export default Projects;
