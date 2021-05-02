import React from "react";
import { Link } from "react-router-dom";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
import Button from "../Home/components/UI/Button";
const ProductCard = ({data}) => {
  return (
    <div className="row">
      {data &&
        data.map(({id, name , img , livesite , gitlink}) => {
          return (
            <div className="gx-3 col-md-6 col-lg-4 col-sm-6 mt-4 text-white">
              <div
               className="p-4 productCard"
                
                
              >
                <div className="" style={{ height: "300px" }}>
                  <h3>{name}</h3>
                  <img
                    className="img-fluid w-auto h-100"
                    src={img}
                    alt=""
                    srcset=""
                  />
                </div>
               
                <div className="d-flex mt-5">
                  <Button className="ml-3" link={livesite} inverse={"tomato"} label="live Site"></Button>
                  <Button link={gitlink}  label="github Link"></Button>
                   
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
