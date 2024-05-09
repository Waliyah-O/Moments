import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className={`spinner`}>
      <div className="spinner1"></div>
    </div>
  );
};

export default Spinner;

// const Spinner = ({className}: {className: string}) => {
//   return (
//     <div className={`spinner ${className}`}>
//       <div className="spinner1"></div>
//     </div>
//   );
// };

// export default Spinner;
