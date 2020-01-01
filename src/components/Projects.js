import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProjectImages from './ProjectImages';

class Projects extends Component {


    render(){

        const beautiGithub = () =>{
            window.open('https://github.com/4006william/4ever21-store', "_blank")
        }
        const beautiApp = () =>{
            window.open('https://4006william.github.io/4ever21-store/#/', "_blank")
        }
        const sushiGithub = () =>{
            window.open('https://github.com/4006william/Sushi-Restaurant', "_blank")
        }
        const calcGithub = () =>{
            window.open('https://github.com/4006william/Scientific-Calculator', "_blank")
        }
        const calcApp = () =>{
            window.open('https://4006william.github.io/Scientific-Calculator/', "_blank")
        }
       

        return (
        <div className="projects">
            <div className="homenav">
                <button><Link to="/">Home</Link></button>
                <button className="active"><Link to="/projects">Projects</Link></button>
                <button><Link to="/resume">Resume</Link></button>
                <button><Link to="/contacts">Contacts</Link></button>
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
                    <h2 className="beauticenter">4ever21</h2>
                    <h3>Stack: <span>React / Redux/ Material-UI / HTML/CSS</span></h3>
                    <p>4ever21 is an online products shopping center. There's all kinds
                        of makeup items for affordable prices. The web app is a light project to
                        showcase a glimpse of my front-end programming skills. Hope you enjoy
                        browsing through it!
                    </p>
                    <button onClick={beautiApp} className="p-btn">View App</button>
                    <button onClick={beautiGithub} className="p-btn">View Source Code</button>
                </div>
                <hr />
                <div>
                    <h2 className="sushi">Sushi Restaurants</h2>
                    <h3>Stack: <span>React / MySQL / Express.js / HTML/CSS</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button onClick={sushiGithub} className="p-btn">View App</button>
                    <button onClick={sushiGithub} className="p-btn">View Source Code</button>         
               </div>
               <hr />
                <div>
                    <h2 className="calc">Scientific Calculator</h2>
                    <h3>Stack: <span> HTML/CSS/JavaScript</span></h3>
                    <p>This application is a scientific calculator that performs more
                        than your basic functions. It has more features and capabilities like
                        finding sin, cos, and tan of geometrical values. Most functions came from the 
                        JavaScript Math library. Click "View App" to use it.
                    </p>
                    <button onClick={calcApp} className="p-btn">View App</button>
                    <button onClick={calcGithub} className="p-btn">View Source Code</button>
                </div>
            </div>
            </div>
            <p className="copyright">&copy; 2019 William Kiyola</p>
        </div>
        )
}
}




export default Projects;