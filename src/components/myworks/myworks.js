import React from "react";
import './myworks.css'
import Carousel from "react-multi-carousel";
import img1 from './layout img (1).png';
import img2 from './layout img (2).png';
import img3 from './layout img (3).png';
import img4 from './layout img (4).png';
import img5 from './layout img (5).png';
import 'react-multi-carousel/lib/styles.css';
export function Myworks(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
    return(
        <>
       
        <div className="myworks_bg d-flex flex-column justify-content-center">
                <p className="text-center myworks_txt">My Works</p>
                <h6 className="text-center">Home → Myworks</h6>
        </div>   
    <div className="myworks_content mb-5 d-flex flex-column justify-content-center">
        <Carousel responsive={responsive}>
  <div><div class="card p-3 col-11">
      <img src={img1} class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h2 class="card-title">Rental Home</h2>
        {/* <p class="card-text">Even the all power full pointing has no control about the blind texts it is on almost un arthography</p> */}
        <a Link="#" class="btn btn-outline-light hvr">READ MORE</a>
      </div>
    </div>
    </div>
  <div><div class="card p-3 col-11">
      <img src={img2} class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h2 class="card-title">BBQ Shop</h2>
        {/* <p class="card-text">Even the all power full pointing has no control about the blind texts it is on almost un arthography</p> */}
        <a Link="#" class="btn btn-outline-light hvr">READ MORE</a>
      </div>
    </div></div>
  <div><div class="card  p-3 col-11">
      <img src={img3} class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h2 class="card-title">Gym Fitness</h2>
        {/* <p class="card-text">Even the all power full pointing has no control about the blind texts it is on almost un arthography</p> */}
        <a Link="#" class="btn btn-outline-light hvr">READ MORE</a>
      </div>
    </div></div>
  <div>
    <div class="card  p-3 col-11">
      <img src={img4} class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h2 class="card-title">Robotics Layout</h2>
        {/* <p class="card-text">Even the all power full pointing has no control about the blind texts it is on almost un arthography</p> */}
        <a Link="#" class="btn btn-outline-light hvr">READ MORE</a>
      </div>
    </div>
    </div>
    <div>
    <div class="card  p-3 col-11">
      <img src={img5} class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h2 class="card-title">Digitals</h2>
        {/* <p class="card-text">Even the all power full pointing has no control about the blind texts it is on almost un arthography</p> */}
        <a Link="#" class="btn btn-outline-light hvr">READ MORE</a>
      </div>
    </div>
    </div>
    <div>
    <div class="card  p-3">
      <img src="" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Map Direction</h5>
        {/* <p class="card-text">Even the all power full pointing has no control about the blind texts it is on almost un arthography</p> */}
        <a Link="#" class="btn btn-outline-light hvr">READ MORE</a>
      </div>
    </div>
    </div>
    <div>
    <div class="card  p-3">
      <img src="" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Map Direction</h5>
        {/* <p class="card-text">Even the all power full pointing has no control about the blind texts it is on almost un arthography</p> */}
        <a Link="#" class="btn btn-outline-light hvr">READ MORE</a>
      </div>
    </div>
    </div>
    <div>
    <div class="card  p-3">
      <img src="" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Map Direction</h5>
        {/* <p class="card-text">Even the all power full pointing has no control about the blind texts it is on almost un arthography</p> */}
        <a Link="#" class="btn btn-outline-light hvr">READ MORE</a>
      </div>
    </div>
    </div>
</Carousel>
</div>

        </>
    );
}