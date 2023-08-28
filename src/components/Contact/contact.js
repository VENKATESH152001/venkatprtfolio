import React from "react";
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export function Contact(){
    return(
        <>
        <div className="contact_bg  d-flex flex-column justify-content-center">
                <p className="text-center contact_txt">Contact Us</p>
                <h6 className="text-center">Home → Contact</h6>
            </div>   
            <div className="map_location_container col-9 mx-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7772.828439035779!2d80.22177799999996!3d13.072914099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692625872024!5m2!1sen!2sin" className="col-12 mt-5 contact_maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>  
            <div className="container-fluid row contact_body mx-auto p-4 mt-5">
                <div className="col-lg-3 mt-2 mb-2 ms-3 bg-white">
                        <div class="contct_icn_row">
                            <FontAwesomeIcon icon={faHouse} className="contct_icn_clr"/>
                            <div class="contct_icon_info">
                                <div class="head fw-bold">TamilNadu,India</div>
                                <div class="sub-title small">Chennai</div>
                            </div>
                        </div>
                        <div class="contct_icn_row">
                            <FontAwesomeIcon icon={faPhone} className="contct_icn_clr"/>
                            <div class="contct_icon_info">
                                <div class="head fw-bold">+91 6374189152</div>
                                <div class="sub-title small">Mon to Fri 9am to 6 pm</div>
                            </div>
                        </div>
                        <div class="contct_icn_row">
                            <FontAwesomeIcon icon={faEnvelope} className="contct_icn_clr"/>
                            <div class="contct_icon_info">
                                <div class="head fw-bold">venkatsides@gmail.com</div>
                                <div class="sub-title small">Send us your query anytime!</div>
                            </div>
                        </div>
                
        
                </div>
                
                <div className="col-lg-4  mt-1 mx-auto ms-1 p-1">
                    <input type="text"  className="m-2 ms-3 p-2 col-12 " name="" id="name" placeholder="Enter Your Name" required/>
                    <input type="email" className="m-2 ms-3 p-2 col-12 "  name="" id="email" placeholder="Enter Email Address" required/>
                    <input type="text"  className="m-2 ms-3 p-2 col-12 " name="" id="subject" placeholder="Enter Subject" required/>
                </div>
                
                <div className="col-lg-4 mt-3" >
                    <textarea placeholder="Describe Projects..." className="row" cols={50} rows={6}></textarea>
                  
                        <button className="snd_msg_btn mx-auto mt-3 small d-flex"> Send Message</button>
                  
                </div>
 
            </div>
        
        </>
    );
}