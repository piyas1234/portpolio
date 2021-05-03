import React from 'react';
import './style.css'
import me from '../images/profile4.png'
import SocialConnect from '../Home/components/UI/SocialConnect';
import Button from '../Home/components/UI/Button';
const MyResume = () => {
    return (
        <div className="myResume col-md-10 offset-md-1 bg-dark">
         <div className="row p-5">
             <div className="col-md-4 bg-primary">
                 <img width="200px" src={me} alt="" srcset=""/>
                 <h1 className=""> Piyas Talukder </h1>
                 <h2>full stack web developer </h2>
                 <SocialConnect></SocialConnect>
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
             <div className="col-md-6 p-3">

             </div>
         </div>
        </div>
    );
};

export default MyResume;