import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Team from "../Team/Team";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-1 px-1 bg-white fw-bold">
      <p>Founded 17th May, 2015</p>
      <hr />
      <small>Website</small>
      <div className="d-flex">
        <a href="mangoswap.com">mangoswap.com</a>
        <div className="ms-3">
          <a href="#">
            <AiOutlineTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <small>Location</small>
      <p>San Francisco, California</p>
      <small>Team Size</small>
      <p>100-150 People</p>
      <hr />
      <h4>Meet the team</h4>
      <div>
        <Team />
      </div>
      <hr />
      <h3>Tags</h3>
    </div>
  );
};

export default Sidebar;
