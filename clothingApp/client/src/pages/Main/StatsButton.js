import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

function StatsButton() {
  return (
    <div className="Button">
      <button className="StatsButton">
        <h1>Stats Button</h1>
      </button>
    </div>
  );
}

export default StatsButton;
