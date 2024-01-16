import React from "react";

function MenuBar({selectedPage, onMenuClick}) {
 
  return (
    <div className="ui four item menu">
      <span 
        onClick={() => onMenuClick("Profile")} 
        className={selectedPage === "Profile" ? "item active" : "item"}
        >
        <i className="user large icon" />
      </span>

      <span 
        onClick={() => onMenuClick("Photos")} 
        className={selectedPage === "Photos" ? "item active" : "item"}
        >
        <i className="photo large icon" />
      </span>

      <span 
        onClick={() => onMenuClick("Cocktails")}  
        className={selectedPage === "Cocktails" ? "item active" : "item"}
        >
        <i className="cocktail large icon" />
      </span>

      <span 
        onClick={() => onMenuClick("Pokemon")}  
        className={selectedPage === "Pokemon" ? "item active" : "item"}
        >
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
