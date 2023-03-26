import React from "react";
import "./Header.css";
import '../Styles/main.scss'
import { NavLink } from "react-router-dom";
import { Slider } from "../Slider";

export const Header = () => {


  return (
    <div>
      <Slider />
      <ul className="list">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active--link link" : "link"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) =>
              isActive ? "active--link link" : "link"
            } to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
              isActive ? "active--link link" : "link"
            } to={"/users"}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
              isActive ? "active--link link" : "link"
            } to={"/todos"}>
            Todos
          </NavLink>
        </li>
      </ul>

      <p className="lorem">
        Lorem.
      </p>
    </div>
  );
};
