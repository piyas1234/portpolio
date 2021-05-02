import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import me from "../../../images/profile4.png";
import SocialConnect from "../UI/SocialConnect";
import "./style.css";
 
import Particlesbg from "../../../particials/Particlesbg";
 
/**
 * @author
 * @function Expertise
 **/

const percentage = 70;

const Expertise = (props) => {
  return (
    <div
      className="e-container shadow-lg col-md-10 offset-md-1"
      
    >
       <Particlesbg></Particlesbg>
      <div className="e-partical">
      <div className="">
        <SmallHeading text="Expertise" />
        <MediumHeading text="Special Skills" />
      </div>
      <div className="row e-row">
        <div data-aos="fade-right" className="col-md-6">
          <div className="w-75 mt-5">
          <img className=" bg-white rounded-circle" width="100%" src={me} alt-="" />
          </div>
        </div>

        <div className="col-md-6 mt-5">
          <Card data-aos="flip-up" >
          <div className="p-4" >
              <div className="w-75">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: colors.primaryColor,
                    pathColor: colors.primaryColor,
                  })}
                />
              </div>
              <h2 className="textColor mlr-10">Development</h2>
            <p className="grey mtb-10 font-12">
              JavaScript is one of the greatest programming language.
            </p>
          </div>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Expertise;
