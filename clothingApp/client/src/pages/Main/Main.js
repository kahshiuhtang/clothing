import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ViewButton from "./ViewButton";
import AddButton from "./AddButton";
import ExploreButton from "./ExploreButton";
import StatsButton from "./StatsButton";

function Main() {
  return (
    <div className="mainContainer">
      <ViewButton></ViewButton>
      <div>
        <AddButton></AddButton>
        <ExploreButton></ExploreButton>
        <StatsButton></StatsButton>
      </div>
    </div>
  );
}

export default Main;
