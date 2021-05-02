import React from "react";

/**
 * @author
 * @function MediumHeading
 **/

const MediumHeading = ({ text, st }) => {
  return (
    <p
      style={st}
      className="font-25 capitalize ls-1 textColor bold-600 text-center bg-white p-2 shadow-lg"
    >
      {text}
    </p>
  );
};

export default MediumHeading;
