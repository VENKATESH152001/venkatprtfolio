import React from "react";
import './education.css'
export function Education(){
    return(
        <>
         <div className="education_bg d-flex flex-column justify-content-center">
                <p className="text-center education_txt">My Education</p>
                <h6 className="text-center">Home → Education</h6>
        </div>    
        <>
          <div className="p-5 education_content">
          
          {/* <p className="text-center education_txt fontnormal">Education</p> */}
          <div className="container  mx-auto row ">
            <div className="containert mt-5 mb-5 col-lg-4">
                  <div className="card-deck">
                    <div className="card ">
                      <div className="card-body text-center">
                        <h4 className="card-title fontnormal mt-3">SSLC</h4>
                        <h5 className="card-text mt-5 fontnormal">St.Joseph's Higher Secondary School</h5>
                        <div className="overlay fontbg">
                        <div className="text fontnormal">Completed the SSLC with - 68% 2015-2016</div>
                        </div>
                      </div>
                      </div>
                    </div>
            </div>
            <div className="containert mt-5 col-lg-4">
            <div className="card-deck">
                      <div className="card ">
                      <div className="card-body text-center">
                        <h4 className="card-title mt-3 fontnormal">HSC</h4>
                        <h5 className="card-text mt-5 fontnormal">Government Boys Higher Secondary School</h5>
                        <div className="overlay">
                        <div className="text fontnormal">Computer Maths Group with - 50% 
                        2016-2018</div>
                        </div>
                      </div>
                      </div>
            </div>
            </div>
            <div className="containert mt-5 col-lg-4">
            <div className="card-deck">
                      <div className="card">
                      <div className="card-body text-center">
                        <h4 className="card-title mt-3 fontnormal">UG Degree</h4>
                        <h5 className="card-text mt-5 fontnormal">Mother Terasa College of Engineering and Techonology</h5>
                        <div className="overlay">
                        <div className="text fontnormal">BE-Computer Science and Engineering  - 74% 2018-2022</div>
                        </div>
                      </div>
                      </div>
            </div>
            </div>
          </div>
          </div>

          
          

        </>
                </>
    );
}