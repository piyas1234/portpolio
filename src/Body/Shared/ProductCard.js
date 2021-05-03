import React from "react";
import './style.css'
import Button from  './Button'
import ModalLg from "./ModalLg";
const ProductCard = ({data}) => {
  return (
    <div className="row">
      {data &&
        data.map(({id, name , img , livesite , gitlink, description}) => {
          return (
            <div className="gx-3 col-md-6 col-lg-4 col-sm-6 mt-4 text-white">
              <div
               className="p-4 productCard"
                
                
              >
                <div>
                  <h3>{name}</h3>
                  <img
                    className="img-fluid w-auto"
                    src={img}
                    alt=""
                    srcset=""
                  />
                  
                </div>
               
                <div className="d-flex mt-5">
                  <Button className="ml-3" link={livesite} inverse={" "} label="live Site"></Button>
                  <Button link={gitlink}  label="github Link" inverse={"black"}></Button>
                  <ModalLg data={{id, name , img , livesite , gitlink,description}}></ModalLg>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
