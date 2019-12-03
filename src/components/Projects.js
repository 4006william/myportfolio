import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProjectImages from './ProjectImages';

class Projects extends Component {


    render(){

        const beautiGithub = () =>{
            window.open('https://github.com/4006william/BeautiCenter', "_blank")
        }
        const sushiGithub = () =>{
            window.open('https://github.com/4006william/Sushi-Restaurant', "_blank")
        }
        const calcGithub = () =>{
            window.open('https://github.com/4006william/Scientific-Calculator', "_blank")
        }
        const scrollUp = () => {
            window.location.href="#top" 
          }

        return (
        <div className="projects">
            <div className="homenav">
                <button><Link to="/resume">Resume</Link></button>
                <button><Link to="/contacts">Contacts</Link></button>
                <button className="active"><Link to="/projects">Projects</Link></button>
                <button id="top"><Link to="/">Home</Link></button>
            </div>
            <div className="projectsbody">
                <div className="projectstitle">
                    <h1>PROJECTS</h1>
                    <hr />
                </div>
            <div className="project-canvas">
                <ProjectImages />
                <hr />
                <div className="project-details">
                    <h2 id="beauticenter">BeautiCenter</h2>
                    <h3>Stack: <span>React / MySQL / Express.js / HTML/CSS</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button onClick={sushiGithub} className="p-btn">View App</button>
                    <button onClick={beautiGithub} className="p-btn">View Source Code</button>
                </div>
                <hr />
                <div>
                    <h2 id="sushi">Sushi Restaurants</h2>
                    <h3>Stack: <span>React / MySQL / Express.js / HTML/CSS</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button onClick={sushiGithub} className="p-btn">View App</button>
                    <button onClick={sushiGithub} className="p-btn">View Source Code</button>         
               </div>
                <div>
                    <h2 id="vball">Scientific Calculator</h2>
                    <h3>Stack: <span>React / MySQL / Express.js / HTML/CSS</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button onClick={sushiGithub} className="p-btn">View App</button>
                    <button onClick={calcGithub} className="p-btn">View Source Code</button>
                </div>
                <button onClick={scrollUp} className="scroll-btn">back to top</button>
            </div>
            </div>
            <p className="copyright">&copy; 2019 William Kiyola</p>
        </div>
        )
}
}




export default Projects;