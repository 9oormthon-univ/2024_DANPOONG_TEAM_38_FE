import React from "react";

import gameImage from "../../../../assets/component/category/game.png";
import All from "../../../../assets/component/category/all.png";
import Art from "../../../../assets/component/category/art.png";
import Beauty from "../../../../assets/component/category/beauty.png";
import Business from "../../../../assets/component/category/business.png";
import Item from "../../../../assets/component/category/item.png";
import Music from "../../../../assets/component/category/music.png";
import Popular from "../../../../assets/component/category/popular.png";
import Region from "../../../../assets/component/category/region.png";
import Web from "../../../../assets/component/category/web.png";
import { useNavigate } from "react-router-dom";

const categoryIcons = [
  { id: "all", src: All, path: "/all" },
  { id: "art", src: Art, path: "/art" },
  { id: "beauty", src: Beauty, path: "/beauty" },
  { id: "business", src: Business, path: "/business" },
  { id: "game", src: gameImage, path: "/game" },
  { id: "item", src: Item, path: "/item" },
  { id: "music", src: Music, path: "/music" },
  { id: "popular", src: Popular, path: "/popular" },
  { id: "region", src: Region, path: "/region" },
  { id: "web", src: Web, path: "/web" },
];

const Category = () => {
  const navigate = useNavigate();

  // 카테고리 분류 작업 후 각 페이지 작업 필요 -> 리엑트 쿼리 쓸까 생각중
  const categoryHandler = (path) => {
    navigate(path);
  };

  return (
    <div className="category-container">
      <div className="category-container-box">
        {categoryIcons.map((item) => (
          <div
            key={item.id}
            className="category-btn"
            onClick={() => categoryHandler(item.path)}
          >
            <img src={item.src} alt={item.id} width="82" height="82" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
