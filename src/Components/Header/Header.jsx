import React from "react";
import LoHomer from "../../assets/LogoSimp.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={LoHomer} alt="Face Homer" id="image-title" />
      </Link>

      <h1 id="Text">The Simpsons web API</h1>

    </header>
  );
};

export default Header;
