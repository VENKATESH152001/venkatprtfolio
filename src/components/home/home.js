import React from "react";
import './home.css';
import venkat from'./ventak.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEnvelope, } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faGithub, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
export function Home(){
    return(
        <>
        <div className="background_home">
            <div className="home_abt_bg pb-4">
                <div className="bg-light col-11 pb-3 about_details_box  row justify-content-around mx-auto content-div">
                <div className="col-lg-6 row justify-content-center">
                    <img src={venkat} className="col-11 venkat_img"/>
                </div>
               
                <div className="col-lg-6">
                  
                   <pre> <h4 className="text-center mt-4">Hello Everybody iam,</h4></pre>
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
                        <li> <FontAwesomeIcon icon={faCalendarDays}/> < Link to="" className="abt_icon_text">01st May, 2001</Link></li>
                        <li>  <FontAwesomeIcon icon= {faPhone} /> < Link href="tel:6374189152" className="abt_icon_text"> 91 6374189152</Link></li>
                        <li><FontAwesomeIcon icon={faEnvelope}/> < Link to="#" className="abt_icon_text">venkatsides@gmail.com</Link></li>
                        <li><FontAwesomeIcon icon={faHouse} /> < Link to="#" className="abt_icon_text"> Tambaram, Chennai</Link></li>
                    </ul>
                    </div>
                      
                    <div className=" mt-4 ms-4 col-lg-3 d-flex contact_icons_div">
                      <Link to="https://www.linkedin.com/in/venkatesh-b-312674275" target="blank" className="contact_icons"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                      <Link to="https://github.com/VENKATESH152001" target="blank" className="contact_icons"><FontAwesomeIcon icon={faGithub} /></Link>
                     <Link to="#" target="_blank" className="contact_icons"><FontAwesomeIcon icon={faTwitter} /></Link>
                    </div>
                    <div className="p-3 mt-4 ms-3">
                    <Link to="https://drive.google.com/file/d/1In4eFPULSmKJeIMf4TTAxgg1lwykXils/view?usp=sharing" target="blank" className="resume_btn p-4">view Resume</Link>  
                    </div>
                       
                </div>
            </div>
         </div>
         </div>

        </>
    );
}



        
          

            
           
       
        
            