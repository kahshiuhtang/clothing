import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

function ViewButton() {
  return (
    <div className="Button">
      <button className="ViewButton">
        <h1>View Button</h1>
      </button>
    </div>
  );
}

export default ViewButton;
