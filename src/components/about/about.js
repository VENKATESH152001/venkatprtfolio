import React from "react";
import './about.css'
import venkat from'./ventak.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEnvelope, } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faGithub, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export function About(){
    return(
        <>
        
            <div className="about_bg mx-auto d-flex flex-column justify-content-center">
                <p className="text-center abt_txt">About Us</p>
                <h5 className="text-center">Home → About</h5>
            </div>

            {/* <div className=" bg-info"> */}
           
         
            <div className="bg-light mt-5 pb-3 about_details_box  row justify-content-around mx-auto content-div">
                <div className="col-lg-5 row justify-content-center">
                    <img src={venkat} className="col-10 venkat_img"/>
                </div>
               
                <div className="col-lg-7">
                  
                   <pre> <h4 className="text-center">Hello Everybody iam,</h4></pre>
                    <p className="text-center venkatesh_name">VENKATESH</p>
                    <h4 className="text-center">Certified MERN stack Developer </h4><br/>
                    <h6 className="text-center text-secondary">Certified and efficient Mern-stack developer with 3
                        months of experience in application layer ,
                        presentation layer and database . Proficient in
                        developing and maintaining websites and
                         application.</h6>
                    <br/>
                    <div className="">
                    <ul className="unorder_list_icon">
                        <li> <FontAwesomeIcon icon={faCalendarDays}/> <a Link="#" className="abt_icon_text">01st May, 2001</a></li>
                        <li>  <FontAwesomeIcon icon= {faPhone} /> <a Link="tel:6374189152" className="abt_icon_text"> 91 6374189152</a></li>
                        <li><FontAwesomeIcon icon={faEnvelope}/> <a Link="#" className="abt_icon_text">venkatsides@gmail.com</a></li>
                        <li><FontAwesomeIcon icon={faHouse} /> <a Link="#" className="abt_icon_text"> Tambaram, Chennai</a></li>
                    </ul>
                    </div>
                      
                    <div className=" mt-4 col-lg-3 d-flex contact_icons_div">
                      <a Link="https://www.linkedin.com/in/venkatesh-b-312674275" className="contact_icons"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                      <a Link="https://github.com/VENKATESH152001" className="contact_icons"><FontAwesomeIcon icon={faGithub} /></a>
                     <a Link="#" className="contact_icons"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                    <div className="p-3 mt-4 ms-3">
                    <a Link="https://drive.google.com/file/d/1In4eFPULSmKJeIMf4TTAxgg1lwykXils/view?usp=sharing" className="resume_btn p-4">view Resume</a>  
                    </div>
                       
                </div>
            </div>
        {/* </div> */}
        

        </>
    );
}

                
                    
                  
                 