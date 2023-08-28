import React from "react";
import './skills.css';
import html from './certificates (3).png';
import css from './certificates (1).png';
import techf from './certificates (2).png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3Alt, faHtml5, faJava, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
// import sass from 'sass'
export function Skills(){
    return(
        <>
            <div className="skills_bg d-flex flex-column justify-content-center">
                <p className="text-center skills_txt">My Skills</p>
                <h6 className="text-center">Home → Skills</h6>
            </div>     
            <div className="container-fluid row mt-4 skills_container">
                <h1 className="text-center">_What I Know_</h1>
                <div className="col-lg-5 mt-4 p-2 mern_box">
                    <u><p className="h4 text-center text-black">My Creative skills & Experience</p></u><br/>
                    <p className="mern_text"><span className="h4 text-primary">M</span>ySQL: I am familiar with databases and understand how to create, read, update, and delete data using MySQL.<br /><hr/>
                        <span className="h4 text-primary">E</span>xpress.js: I have experience in building RESTful APIs and handling HTTP requests using the Express.js framework.<br /><hr/>
                        <span className="h4 text-primary">R</span>eact.js: I am well-versed in creating interactive and dynamic user interfaces using React.js, including component-based development, state management, and handling user events.<br /><hr/>
                        <span className="h4 text-primary"> N</span>ode.js: I have a strong grasp of server-side development with Node.js, enabling me to build scalable and efficient web applications.</p>
                </div>
                
                
                <div className="col-lg-7 mt-4 progress_container ms-2 container-fluid row  p-2">
                    <u><h4 className="text-center text-white">_Technical Skills_</h4></u>
                        <div className="col-lg-6">
                            <div class="tools_expert">
                            <div class="skill_item mt-3">
                            <h5  className="text-white"><FontAwesomeIcon icon={faHtml5} /> HTML <span class="counter">88</span>%</h5>
                            <div class="progress_br">
                            <div class="progress progress_br_h">
                            <div class="progress-bar progress_html" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                            </div>

                            <div class="skill_item mt-5">
                            <h5 className="text-white"><FontAwesomeIcon icon={faCss3Alt} /> CSS <span class="counter">79</span>%</h5>
                            <div class="progress_br">
                            <div class="progress progress_br_h">
                            <div class="progress-bar progress_css" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                            </div>

                            <div class="skill_item mt-5">
                            <h5 className="text-white"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap <span class="counter">66</span>%</h5>
                            <div class="progress_br">
                            <div class="progress progress_br_h">
                            <div class="progress-bar progress_btstrp" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                            </div>

                            <div class="skill_item mt-5 mb-1"> 
                            <h5 className="text-white"><FontAwesomeIcon icon={faJs} /> JavaScript <span class="counter">75</span>%</h5>
                            <div class="progress_br">
                            <div class="progress progress_br_h">
                            <div class="progress-bar progress_js" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                            </div>
                        </div>


                </div>
                        <div className="col-lg-6">
                            <div class="skill_item mt-4">
                            <h5 className="text-white"><FontAwesomeIcon icon={faReact} /> ReactJS <span class="counter">82</span>%</h5>
                            <div class="progress_br">
                            <div class="progress progress_br_h">
                            <div class="progress-bar progress_rjs" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                            </div>


                            <div class="skill_item mt-5">
                            <h5 className="text-white">MySQL <span class="counter">68</span>%</h5>
                            <div class="progress_br">
                            <div class="progress progress_br_h">
                            <div class="progress-bar progress_sql" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                            </div>
                                
                            <div class="skill_item mt-5">
                            <h5 className="text-white"> <FontAwesomeIcon icon={faNodeJs} /> NodeJS <span class="counter">83</span>%</h5>
                            <div class="progress_br">
                            <div class="progress progress_br_h">
                            <div class="progress-bar progress_njs" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                            </div>

                            <div class="skill_item mt-5">
                            <h5 className="text-white"><FontAwesomeIcon icon={faJava} /> Core Java <span class="counter">60</span>%</h5>
                            <div class="progress_br">
                            <div class="progress progress_br_h">
                            <div class="progress-bar progress_java" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                            </div>
                            </div>
                    </div>
            </div>
            {/*-------------------------------certificate section---------------------------------------- */}
            <div className="certific_bg bg-secondary mx-auto pt-5">
                <p className="h1 text-white text-center">And my Certificates<span className="text-black">_</span></p>_
                <div className="col-10 bg-black mx-auto pb-4 d-flex row justify-content-between p-3">
                    <img src={html} className="col-12 col-sm-12 col-lg-4 mt-4"/>
                    <img src={css} className="col-12 col-sm-12 col-lg-4 mt-4"/>
                    <img src={techf} className="col-12 col-sm-12 col-lg-4 mt-4"/>
                </div>
            </div>
        </>
    );
}