import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [selectedPage, setSelectedPage] = useState("Profile");

  let detailsToDisplay;
  if (selectedPage === "Profile") {
    detailsToDisplay = <Profile />;
  } else if (selectedPage === "Photos") {
    detailsToDisplay = <Photos/>;
  } else if (selectedPage === "Cocktails") {
    detailsToDisplay = <Cocktails/>;
} else if (selectedPage === "Pokemon") {
  detailsToDisplay = <Pokemon/>;
}
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  return (
    <div>
      <MenuBar selectedPage={selectedPage} onMenuClick={setSelectedPage}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
