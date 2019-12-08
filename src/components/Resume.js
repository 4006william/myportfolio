import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Resume extends Component {


    render(){

        const scrollUp = () => {
            window.location.href="#top" 
          }
          
        return (
        <div className="resume">
            <div className="homenav">
            <div className="homenav">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/projects">Projects</Link></button>
                <button className="active"><Link to="/resume">Resume</Link></button>
                <button><Link to="/contacts">Contacts</Link></button>
            </div>
            </div>
            <div className="resumebody">
                <div className="resumetitle">
                    <h1>William E. Kiyola</h1>
                    <hr />
                </div>
                <div className="resumedetails">

                <div className="resumeblocks">
                        <h3 className="resume-header">SKILLS</h3>
                        <ul>
                            <li><span>FRONTEND(UI/UX):</span> HTML/CSS, JavaScript, React, WordPress and Responsive design with Material-UI/Bootstrap etc..</li>
                            <li><span>MIDDLEWARE & BACKEND: </span>Node, MySQL/Mongo, Express, and Firebase.  </li>
                            <li>Great at writing well designed, testable, efficient code by using best software development practices. </li>
                            <li>Can create website layout/user interfaces and integrating data from back-end services, APIs and databases. </li>
                            <li>Possess a strong understanding of UI, cross-browser compatibility, general web functions and standards. </li>
                            <li>Fair knowledge of SEO as well as a decent grasp of security principles and how they apply to E-Commerce applications </li>
                        </ul>
                    </div>
                    
                    <div className="resumeblocks">
                        <h3 className="resume-header">EXPERIENCE</h3>
                        <h4>-Position: SUPPORT ENGINEER</h4>
                        <h4>-Company: CITADEL SECURITIES</h4>
                        <p>Austin, TX</p>
                        <p>08/2019 - Current</p>
                        <ul>
                            <li>Diagnosed and troubleshooted technical issues, including account setup and network configuration. </li>
                            <li>Tracked computer systems, researched and identified solutions to software and hardware issues. </li>
                            <li>Built and updated internal databases of which the support team referred to in order to provide accurate tech solutions. </li>
                            <li>Installed and configured computer systems and applications within the company. </li>
                            <li>Helped company deploy new software and hardware systems to advance workflow and productivity. </li>
                            <li>Acted as the initial point of contact for all computer and system related concerns from clients or other employees. </li>
                        </ul>
                        <h4>-Position: GIS TECHNICIAN</h4>
                        <h4>-Company: APPLE Inc.</h4>
                        <p>Austin, TX</p>
                        <p>01/2019 - 08/2019</p>
                        <ul>
                            <li>Analyzed GIS data to	identify spatial relationships and/or display results of analyses, using maps, graphs,	or tabular	data. </li>
                            <li>Compiled information in the form of aerial photos, geological surveys, and satellite images from a range of different sources, forming the basis of reports and articles. </li>
                            <li>Drew maps using automated drafting software, ensuring that sources are annotated and all information is accurate and up to date. </li>
                            <li>Assured consistency with	company-wide standards and practices for data conversion, data maintenance and upgrades. </li>
                            <li>Provided	technical	support	within	the	company	to	users	regarding	the	maintenance, development,	or	operation	of	GIS	databases,	equipment,	or	applications. </li>
                            <li>Reviewed and QA digitizations done by other teams in the mapping department . </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="resumeblocks">
                        <h3 className="resume-header">EDUCATION</h3>
                        <h4>TEXAS TECH UNIVERSITY (2014 - 2018)</h4>
                        <h4>-Bachelors of General Studies</h4>
                        <p>CONCENTRATIONS: Geographic Information Systems, Chemistry and Geology</p>
                        <h4>AUSTIN CODING ACADEMY (2019)</h4>
                        <h4>-Fullstack Web Development</h4>
                    </div>
                    <button onClick={scrollUp} className="scroll-btn">back to top</button>
                </div>
            </div>
            <p className="copyright">&copy; 2019 William Kiyola</p>
            </div>
        )
}
}




export default Resume;