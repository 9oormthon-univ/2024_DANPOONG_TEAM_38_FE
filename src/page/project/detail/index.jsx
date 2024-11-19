import React from "react";
import Search from "../../main/components/Search";
import ComBoost from "./ComBoost";
import Show from "./Show";

const Detail = () => {
  return (
    <div className="pj-detail-container">
      <Search />
      <div className="pj-detail-main-container">
        <Show />
        <ComBoost />
      </div>
    </div>
  );
};

export default Detail;
