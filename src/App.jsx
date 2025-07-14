import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import "./App.css";

import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EventsPage from "./pages/EventsPage/EventsPage";
import TechniquesPage from "./pages/TechniquesPage/TechniquesPage";
import ClubsPage from "./pages/ClubsPage.jsx";
import EventPageHead from "./pages/Head/EventPage/EventPage.jsx";
import GroupsPage from "./pages/GroupsPage.jsx";
import LogPage from "./pages/LogPage/LogPage.jsx";
import MembersPage from "./pages/MembersPage.jsx";
import SeminarsPage from "./pages/SeminarsPage.jsx";
import StatisticsPage from "./pages/StatisticsPage.jsx";

function App() {
  return (
    <div className="layout" data-oid="ju.zls8">
      <Sidebar data-oid="45v3lac" />

      <main className="content" data-oid="7r:2wn_">
        <Routes data-oid="10r2e4t">
          <Route
            path="/"
            element={<Navigate to="/profile" replace data-oid="z:hy9l6" />}
            data-oid="d0ge9p-"
          />

          <Route
            path="/profile"
            element={<ProfilePage data-oid="0jdx.qd" />}
            data-oid="vmrefm7"
          />

          <Route
            path="/events"
            element={<EventsPage data-oid="nr.ewkz" />}
            data-oid="l.s:s11"
          />

          <Route
            path="/techniques"
            element={<TechniquesPage data-oid="0qkid9a" />}
            data-oid="mqyc36h"
          />

          <Route
            path="/clubs"
            element={<EventPageHead />}
            data-oid="..60u85"
          />

          <Route
            path="/groups"
            element={<GroupsPage data-oid="yn.6wdv" />}
            data-oid="_u30o9:"
          />

          <Route
            path="/log"
            element={<LogPage data-oid="-w0hre_" />}
            data-oid="37pkthr"
          />

          <Route
            path="/members"
            element={<MembersPage data-oid="t3msc2v" />}
            data-oid="88fzm4d"
          />

          <Route
            path="/seminars"
            element={<SeminarsPage data-oid="_uck3fj" />}
            data-oid="bc5yjcf"
          />

          <Route
            path="/statistics"
            element={<StatisticsPage data-oid="98jp6ho" />}
            data-oid="-4rda63"
          />

          <Route
            path="*"
            element={<h1 data-oid="wi66r.m">404</h1>}
            data-oid="8bs-st5"
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
