import React from "react";

/**
 * @author
 * @function MediumHeading
 **/

const MediumHeading = ({ text, st }) => {
  return (
     <div style={{boxShadow:"0px 0px 10px 0px white",backgroundColor:'#16C79A'}} className="rounded">
       <p
      
      className="font-25 capitalize ls-1 textColor bold-600 text-center text-white  p-2"
    >
      {text}
    </p>
     </div>
  );
};

export default MediumHeading;
