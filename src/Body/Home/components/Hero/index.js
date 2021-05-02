import React from "react";
import me from "../../../images/profile4.png";
import Button from "../UI/Button";
import "./style.css";
import ParticlesBackground from "./ParticlesBackground";
import AnimatedTitle from "./AnimatedTitle";

 
const Hero = (props) => {
   

  return (
    <div className="main">
      <ParticlesBackground></ParticlesBackground>
      <div
        className=" col-md-10 offset-md-1 hero-container"
        style={{ marginTop: "70px", display: "" }}
      >
        <div className="flexRow flexCol justify-sb align-center">
          <div data-aos="fade-right">
           <div className="m-auto text-center meRightImgContainer">
           <img className="text-center" style={{width:"100px", borderRadius:"200px",backgroundColor:"#16C79A",boxShadow:"0px 0px 100px 0px white"}} src={me} alt="" srcset=""/>
           </div>
         <AnimatedTitle></AnimatedTitle>





            <p className="font-12 grey mtb-10">FullStack Developer using JS.</p>
            <div className="flexRow" style={{ margin: "30px 0" }}>
              <div>
                <Button
                  link={"https://www.linkedin.com/in/piyas-talukder/"}
                  label="Hire Me"
                />
              </div>
              <div className="mlr-10">
                <Button
                  link={
                    "https://drive.google.com/u/0/uc?id=15w5G4kNXoocqdq2Z15SkYMpjVSo7PyE1&export=download"
                  }
                  label="Download CV"
                  inverse={true}
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="meRightImgContainer ">
              <img style={{width:"300px", borderRadius:"200px",backgroundColor:"",boxShadow:"0px 0px 100px 0px rgba(255, 0, 149, 1.24)"}} src={me} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
