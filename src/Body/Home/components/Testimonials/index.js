import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import testimonialsLeft from "../../assets/images/testimonials-01.jpg";
import testimonialsRight from "../../assets/images/testimonials-02.jpg";
import profilePicture from "../../assets/images/testimonial-pic.jpg";

import "./style.css";

/**
 * @author
 * @function Testimonials
 **/

const Testimonials = (props) => {
  return (
    <div className="col-md-10 offset-md-1 bg-shadow-all p-5">
      <div data-aos="fade-down">
        <SmallHeading text="Testimonials" />
        <MediumHeading text="What people say" />
      </div>
      <div
        className="flexRow wrap align-center justify-sb"
        style={{ padding: "50px 0" }}
      >
        <div data-aos="fade-left" className="testimonialImgContainer">
          <img src={testimonialsLeft} alt="" />
        </div>
        <Card data-aos="zoom-in" className="myCard">
          <div className="flexRow align-center">
            <div className="profileImgContainer">
              <img src={profilePicture} alt="" />
            </div>
            <div className="mlr-10">
              <p className="primaryColor font-16">Piyas Talukder</p>
              <p className="textColor font-14 bold-600">Software Developer</p>
            </div>
          </div>
          <p className="mtb-10 grey">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            
        
          </p>
        </Card>
        <div data-aos="fade-right" className="testimonialImgContainer">
          <img src={testimonialsRight} alt="" />
        </div>
      </div>

      <Card className="m-auto contactCard">
        <p className="text-center font-12 mtb-10">
          Have any project in mind?{" "}
          <span className="primaryColor">Say Hello At</span>
        </p>
        <p className="text-center font-25">bussiness.piyas@gmail.com</p>
      </Card>
    </div>
  );
};

export default Testimonials;
