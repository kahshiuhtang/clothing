import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
