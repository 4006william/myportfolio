import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Home extends Component {


    render(){
    return (
        <div className="home">
            <div className="homenav">
                <button className="active"><Link to="/">Home</Link></button>
                <button><Link to="/projects">Projects</Link></button>
                <button><Link to="/resume">Resume</Link></button>
                <button><Link to="/contacts">Contacts</Link></button>
            </div>
            <div className="homebody">
                
                <h1>William E. Kiyola</h1>
                <div className="homedetails">
                <h2>Full Stack Web Developer</h2>
                <h3>JavaScript/jQuery </h3>
                <h4>React, Node.js, Express.js, MySQL, MongoDB, HTML/CSS </h4>
                <h4>Austin, TX</h4>
                </div>
            </div>
             <p className="copyright">&copy; 2019 William Kiyola</p>
        </div>
        )
}
}



export default Home;