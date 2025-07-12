import { useState } from "react";
import viteLogo from "/vite.svg";
import "/src/App.css";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const pages = [
    { to: "/profile", label: "Профиль", icon: "profile.svg" },
    { to: "/events", label: "Мероприятия", icon: "events.svg" },
    { to: "/techniques", label: "Приемы", icon: "techniques.svg" },
    { to: "/log", label: "Журнал", icon: "log.svg" },
  ];

  return (
    <div className="sidebar" data-oid="tfyux1d">
      <img
        className="sidebar__logo"
        src="./src/assets/logo.svg"
        alt="федерация айкидо"
        data-oid="d0v1l8i"
      />

      <ul className="sidebar__list" data-oid="enwz2.5">
        {pages.map(({ to, label, icon }) => (
          <li key={to} className="sidebar__item--wrapper" data-oid="0bgl_1e">
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "sidebar__item sidebar__item--active"
                  : "sidebar__item"
              }
              data-oid="_60kd1y"
            >
              <img
                className="sidebar__item__image"
                src={`../src/assets/sidebar/${icon}`}
                alt={label}
                data-oid="ob4w6df"
              />

              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
