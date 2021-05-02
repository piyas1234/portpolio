import React, { useContext, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import NavProfile from "./NavProfile";
import img from "../images/idea (1).png";
const Navbody = () => {
  const [inputData, setinputData] = useContext(UserContext);
  const [navBg, setnavBg] = useState({backgroundColor:"#0F0A54",zIndex:"100"});
  const { displayName, email } = inputData;
  const path = useLocation().pathname;
  const [color, setcolor] = useState("white");

  const navStyle = {
    backgroundColor: "rgb(255, 101, 191)",
    color: "white",
    boxShadow: `0px 0px 30px 0px ${color}`,
    borderColor:"transparent",
    border: "1px solid",
    fontWeight: "bold",
    margin: "10px",
    padding: "10px",
    borderRadius: "50px",
  };

  const navStyle2 = {
    color: color,
    boxShadow: `0px 0px 10px 0px ${color}`,
    borderColor:"transparent",
    border: "1px solid",
    fontWeight: "bold",
    margin: "10px",
    padding: "10px",
    borderRadius: "50px",
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 25 ||
        document.documentElement.scrollTop > 25
      ) {
        setnavBg({
          backgroundColor: "white",
          position: "fixed",
          zIndex: "100",
          width: "100%",
          transition: "1.2s",
          paddingBottom: "20px",
          zIndex:"100"
        });
        setcolor("gray");
      } else {
        setnavBg({backgroundColor:"#0F0A54",zIndex:"100" });

        if (path === "/login" || path === "/signup") {
          setcolor("gray");
        } else {
          setcolor("white");
        }
      }
    };
  }, [path]);

  return (
    <div>
      <Navbar style={navBg} expand="lg">
        <Navbar.Brand>
          {" "}
          <Link style={navStyle} to="/">
            <img width="50px" src={img} alt="" srcset="" />
            Piyas Talukder
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link style={navStyle2} to="/">
              Home
            </Link>
            <Link style={navStyle2} to="/projects">
              Projects
            </Link>
            
            <Link style={navStyle2} to="/blog">
              Blog
            </Link>
            <Link style={navStyle2} to="/mycv">
              myCv
            </Link>
            <Link style={navStyle2} to="/about">
              About
            </Link>
            <Link style={navStyle2} to="/contact">
              Contact us
            </Link>
            <Link style={navStyle2} to="/contact">
              Deshboard
            </Link>
            {!displayName && !email ? (
              <Link style={navStyle} to="/login">
                Login
              </Link>
            ) : (
              ""
            )}
            <Link style={{ marginTop: "10px" }}>
              <NavProfile value={inputData}></NavProfile>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbody;
