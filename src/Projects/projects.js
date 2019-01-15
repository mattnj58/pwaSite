import React, {Component} from 'react';
import './projects.css';
import {Well, Button, NavItem, Nav, Fade} from "react-bootstrap";

class Projects extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className='projects--section'>
                <h1 className='title'>Projects</h1>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    click
                </Button>
                <Fade in={this.state.open}>
                    <div>
                        <Well>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </Well>
                    </div>
                </Fade>

                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    click
                </Button>
                <Fade in={this.state.open}>
                    <div>
                        <Well>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </Well>
                    </div>
                </Fade>


            </div>
        );
    }
}


export default Projects;
