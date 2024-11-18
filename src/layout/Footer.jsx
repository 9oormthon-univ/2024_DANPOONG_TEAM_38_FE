import React from "react";
import { useNavigate } from "react-router-dom";

const content = [
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Terms of Use", path: "/terms" },
];

const Footer = () => {
  const navigate = useNavigate();

  const aboutHandler = (path) => {
    navigate(path);
  };
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        {content.map((menu) => (
          <div
            className="footer-contents"
            onClick={() => aboutHandler(menu.path)}
          >
            {menu.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
