import React, { useState } from "react";
import Show from "../detail/Show";
import { useLocation } from "react-router-dom";
import Search from "../../main/components/Search";
import ComBoost from "../detail/ComBoost";

const Boost = () => {
  const location = useLocation();

  console.log("넘어온 location 확인", location, location.state);
  return (
    <div className="pj-detail-container">
      <Search />
      <div className="pj-detail-main-container">
        <Show project={location.state} />
        <ComBoost project={location.state} />
        {/* <div className="pj-detail-boost-sub-main">
          
        </div> */}
      </div>
    </div>
  );
};

export default Boost;
