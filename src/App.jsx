import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import "./App.css";

import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EventsPage from "./pages/EventsPage/EventsPage";
import TechniquesPage from "./pages/TechniquesPage/TechniquesPage";
import ClubsPage from "./pages/ClubsPage.jsx";
import GroupsPage from "./pages/GroupsPage.jsx";
import LogPage from "./pages/LogPage.jsx";
import MembersPage from "./pages/MembersPage.jsx";
import SeminarsPage from "./pages/SeminarsPage.jsx";
import StatisticsPage from "./pages/StatisticsPage.jsx";

function App() {
  return (
    <div className="layout" data-oid="xxgmn-5">
      <Sidebar data-oid="jfy9l9." />

      <main className="content" data-oid="1o73545">
        <Routes data-oid="sg_42re">
          <Route
            path="/"
            element={<Navigate to="/profile" replace data-oid="-pwu40-" />}
            data-oid="byk5v6."
          />

          <Route
            path="/profile"
            element={<ProfilePage data-oid="hkjgk3y" />}
            data-oid="06ikep1"
          />

          <Route
            path="/events"
            element={<EventsPage data-oid="_:-e2ut" />}
            data-oid="oanod9g"
          />

          <Route
            path="/techniques"
            element={<TechniquesPage data-oid="eqyp7sd" />}
            data-oid="r9egwrc"
          />

          <Route
            path="/clubs"
            element={<ClubsPage data-oid="oq_eir8" />}
            data-oid="a4qiw39"
          />

          <Route
            path="/groups"
            element={<GroupsPage data-oid="k:4q9wu" />}
            data-oid="yr090ol"
          />

          <Route
            path="/log"
            element={<LogPage data-oid="1go5e_h" />}
            data-oid="6:ir2l6"
          />

          <Route
            path="/members"
            element={<MembersPage data-oid="fs::up1" />}
            data-oid="41rri12"
          />

          <Route
            path="/seminars"
            element={<SeminarsPage data-oid="s4-9qao" />}
            data-oid="-nrd3ej"
          />

          <Route
            path="/statistics"
            element={<StatisticsPage data-oid="e9_793_" />}
            data-oid="2ll_:7s"
          />

          <Route
            path="*"
            element={<h1 data-oid="___5pe3">404</h1>}
            data-oid="pidakre"
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
