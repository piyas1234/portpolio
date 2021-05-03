import React from "react";
import Card from "../UI/Card";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import latestProject from "../../../images/Screenshot_2.png";

import "./style.css";

/**
 * @author
 * @function LatestProjects
 **/

const LatestProjects = (props) => {
  return (
    <div
      className="col-md-10 offset-md-1 p-5 bg-shadow-all"
      style={{ marginTop: "50px", marginBottom: "50px" }}
      data-aos="zoom-in-up"
    >
      <SmallHeading text="portfolios" />
          <MediumHeading
            style={{ textTransform: "uppercase" }}
            text="Latest Projects"
          />
      <Card className="flexRow flexCol align-center justify-sb">
        <div className="projectPortfolioContainer">
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            <Button label="Portfolios" />
          </div>
        </div>
        <div className="projectImgContainer">
          <img src={latestProject} alt="" />
        </div>
      </Card>
    </div>
  );
};

export default LatestProjects;
