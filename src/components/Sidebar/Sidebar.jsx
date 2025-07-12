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
    <div className="sidebar w-[200px]" data-oid="uur9dxq">
      <img
        className="sidebar__logo"
        src="./src/assets/logo.svg"
        alt="федерация айкидо"
        data-oid="tk..y-p"
      />

      <ul className="sidebar__list" data-oid="-76.e53">
        {pages.map(({ to, label, icon }) => (
          <li key={to} className="sidebar__item--wrapper" data-oid="_54v2tx">
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "sidebar__item sidebar__item--active"
                  : "sidebar__item"
              }
              data-oid="m6zyw1t"
            >
              <img
                className="sidebar__item__image"
                src={`../src/assets/sidebar/${icon}`}
                alt={label}
                data-oid="nphlw3i"
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
