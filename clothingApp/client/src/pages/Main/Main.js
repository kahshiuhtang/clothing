import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ViewButton from "./ViewButton";
import AddButton from "./AddButton";
import ExploreButton from "./ExploreButton";
import StatsButton from "./StatsButton";
import NavBar from "./NavBar";

function Main() {
  return (
    <div className="mainContainer">
      <NavBar></NavBar>
      <div className="buttonContainer">
        <ViewButton></ViewButton>
        <div className="rightButtonContainer">
          <AddButton></AddButton>
          <ExploreButton></ExploreButton>
          <StatsButton></StatsButton>
        </div>
      </div>
    </div>
  );
}

export default Main;
