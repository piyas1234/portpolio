import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import me from "../../../images/profile4.png"

import "./style.css";

/**
 * @author
 * @function Qualification
 **/

const Qualification = (props) => {
  const style = {background:'tomato'}
  return (
    <div className="col-md-10 offset-md-1 bg-shadow-all p-5" style={{ padding: "50px 0" }}>
      <SmallHeading st={style} text="Qualifications" />
      <MediumHeading text={"My Education"} />
      <div
        className="flexRow flexCol align-center justify-sb"
        style={{ margin: "50px 0" }}
      >
        <div data-aos="fade-up-right">
          <img width="50%" src={me} alt="" />
          <div
            style={{
              background: "#fff",
              padding: "10px 10px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
           <div>
              <Button link={'https://www.linkedin.com/in/piyas-talukder/'}   label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button link={'https://drive.google.com/u/0/uc?id=15w5G4kNXoocqdq2Z15SkYMpjVSo7PyE1&export=download'} label="Download CV" inverse={true} />
            </div>
          </div>
        </div>
        <div>
          <Tile
            title="online Corse"
            mediumTitle="programming hero"
            desc="lorem ipsum text"
          />
          <Tile
            title="online corse"
            mediumTitle="UDEMY"
            desc="lorem ipsum text"
          />
          <Tile
            title="Dahaka College"
            mediumTitle="economics."
            desc="lorem ipsum text"
          />
        </div>
      </div>
    </div>
  );
};

export default Qualification;
