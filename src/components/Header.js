import React from "react";

const Header = ({ name }) => {
  return (
    <div className="header">
      <div className="heading"> Skrate </div>
      <div className="user">
        <img
          className="avatar"
          src="https://user-images.githubusercontent.com/84467090/146555873-da9b5902-5b3f-41c9-b7c6-2eef6079649e.jpg"
          alt="user"
        />
        <h3 className="username">{name}</h3>
      </div>
    </div>
  );
};

export default Header;
