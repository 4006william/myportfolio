import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Globe from '../images/Globe.png'


class Contacts extends Component {
        
    render(){
        const mail = () =>{
            window.open('mailto:wkiyola@yahoo.com', "_blank")
        }
    const githubPage = () =>{
        window.open('https://github.com/4006william?tab=repositories', "_blank")
    }
    const linkedIn = () => 
    window.open('https://www.linkedin.com/in/william-kiyola-676480161/', "_blank")

    return (
        <div className="contacts">
            <div className="homenav">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/projects">Projects</Link></button>
                <button><Link to="/resume">Resume</Link></button>
                <button className="active"><Link to="/contacts">Contacts</Link></button>
            </div>
            <div className="contactsbody">
                <img src={Globe} alt={<p>globe</p>} />
                <h3>Let's connect!</h3>
                <div className="contactsdetails">
                    <h3>William E. Kiyola</h3>
                    <span>
                        <i className="fas fa-phone"></i>
                        <h4>281-935-4898</h4>
                    </span>
                    <span>
                       <button onClick={mail} className="mail-btn"><i className="far fa-envelope-open"></i></button> 
                        <h4>WKIYOLA@YAHOO.COM</h4>
                    </span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        <h4>AUSTIN, TX </h4>
                    </span>
                    
                </div>
                    <div className="socialmedia">
                        <button onClick={githubPage} className="socialmediabtn">
                            <i className="fab fa-github-square fa-3x"></i>
                        </button>

                        <button onClick={linkedIn}>
                        <i className="fab fa-linkedin fa-3x"></i>
                        </button>
                    </div>
            </div>
            <p className="copyright">&copy; 2019 William Kiyola</p>
        </div>
        )
}
}




export default Contacts;