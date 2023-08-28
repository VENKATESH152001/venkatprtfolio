import React from "react";
import './footer.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faSkype, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export function Footer(){
    return(
        <>
        <div className="footer_box row justify-content-around bg-black mx-auto row p-5">
            
            <div className="col-lg-5 bg-black d-flex flex-column justify-content-center">
                <p className="footer_pg_hds">About Me</p>
                <p className="footer_pg_p small">Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                 <p className="footer_pg_p small"> Copyright ©2023 All rights reserved | This template is made with  by <span className="text-primary">Venkat</span></p>
            </div>
           
            <div className="col-lg-4 bg-black d-flex flex-column justify-content-center">
                <p className="footer_pg_hds">Newsletter</p>
                <p className="footer_pg_p small">Stay Update With our latest trends</p>
                <div class="input-group footer_email_box">
                        <input type="email" className="col-10 bg-black text-white p-1 " name="email" placeholder="Enter Email Address"/>
                       <button class="email_btn col-2 p-2" type="button">→</button>
                        </div>
            </div>
           
            <div className="col-lg-2 bg-black d-flex flex-column justify-content-center">
                <p className="footer_pg_hds">Follow Me</p>
                <p className="footer_pg_p small">Let us be Social</p>
                    <div className=" col-4 col-lg-10 d-flex justify-content-between contact_social_icn">
                   <Link to=""> <FontAwesomeIcon icon={faFacebookF} className="footer_social_icn"/></Link>
                   <Link to="https://www.instagram.com/invites/contact/?i=179kgwij3k4j4&utm_content=96iml1j"> <FontAwesomeIcon icon={faInstagram}  className="footer_social_icn"/></Link>
                  <Link to=" https://wa.me/qr/KAIPDRWSV35GA1"> <FontAwesomeIcon icon={faWhatsapp}  className="footer_social_icn"/></Link> 
                  <Link to=""> <FontAwesomeIcon icon={faSkype}  className="footer_social_icn"/></Link>
                    </div>
            </div>
        </div>
        </>
    );
}