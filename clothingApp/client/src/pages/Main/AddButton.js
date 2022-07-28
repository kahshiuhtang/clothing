import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

function AddButton() {
  return (
    <div className="Button">
      <button className="AddButton">
        <h1>Add Button</h1>
      </button>
    </div>
  );
}

export default AddButton;
