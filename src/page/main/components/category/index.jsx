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

import GetCategory from "../../../../apis/project/GetCategory";
import GetPopular from "../../../../apis/project/GetPopular";

const categoryIcons = [
  // { id: "all", src: All, path: "/list" },
  { id: "ART", src: Art, path: "/category" },
  { id: "BEAUTY", src: Beauty, path: "/category" },
  // { id: "business", src: Business, path: "/category" },
  { id: "GAME", src: gameImage, path: "/category" },
  { id: "ACCESSORY", src: Item, path: "/category" },
  { id: "MUSIC", src: Music, path: "/category" },
  // { id: "popular", src: Popular, path: "/category" },
  // { id: "ACCESSORY", src: Region, path: "/category" },
  { id: "WEB_APP", src: Web, path: "/category" },
];

const Category = () => {
  const navigate = useNavigate();

  // 카테고리 분류 작업 후 각 페이지 작업 필요 -> 리엑트 쿼리 쓸까 생각중

  const categoryHandler = async (category) => {
    try {
      const cate = category.id;

      const response = await GetCategory(cate); // GetCategory 함수 호출
      navigate("/category", {
        state: { projects: response }, // 상태로 카테고리와 프로젝트 목록 전달
      });
      console.log("확인", response);
    } catch (error) {
      console.error("API 호출 중 오류가 발생했습니다.", error);
    }
  };
  const popularHandler = async () => {
    try {
      const popular = await GetPopular();

      navigate("/category", {
        state: { projects: popular }, // 상태로 카테고리와 프로젝트 목록 전달
      });
      console.log("확인", popular);
    } catch (error) {
      console.error("API 호출 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <div className="category-container">
      <div className="category-container-box">
        <div className="category-btn" onClick={() => navigate("/list")}>
          <img src={All} width="82" height="82" />
        </div>
        {categoryIcons.map((item) => (
          <div
            key={item.id}
            className="category-btn"
            onClick={() => categoryHandler(item)}
          >
            <img src={item.src} alt={item.id} width="82" height="82" />
          </div>
        ))}
        {/* 전체 지역이랑 기업 관련 카테고리가 없음 */}
        {/* <div className="category-btn" >
          <img src={Business} width="82" height="82" />
        </div> */}
        <div className="category-btn" onClick={popularHandler}>
          <img src={Popular} width="82" height="82" onClick={popularHandler} />
        </div>
        {/* <div
          className="category-btn"
          // onClick={() => categoryHandler(item)}
        >
          <img src={Region} width="82" height="82" />
        </div> */}
      </div>
    </div>
  );
};

export default Category;
