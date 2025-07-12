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
    <div className="layout" data-oid="78b12:v">
      <Sidebar data-oid="iu5u7gq" />

      <main className="content" data-oid="_549v1c">
        <Routes data-oid="279xunp">
          <Route
            path="/"
            element={<Navigate to="/profile" replace data-oid="_sgi7f3" />}
            data-oid="3o:xzkz"
          />

          <Route
            path="/profile"
            element={<ProfilePage data-oid="y4keech" />}
            data-oid="6pn6:29"
          />

          <Route
            path="/events"
            element={<EventsPage data-oid="20hytqi" />}
            data-oid="2_x3ztn"
          />

          <Route
            path="/techniques"
            element={<TechniquesPage data-oid="cqqoq9a" />}
            data-oid="vvgg6hs"
          />

          <Route
            path="/clubs"
            element={<ClubsPage data-oid="tax807w" />}
            data-oid="mhkur5r"
          />

          <Route
            path="/groups"
            element={<GroupsPage data-oid="c::s6-_" />}
            data-oid="o8hj8xd"
          />

          <Route
            path="/log"
            element={<LogPage data-oid="t9-:o04" />}
            data-oid="eqw5.wq"
          />

          <Route
            path="/members"
            element={<MembersPage data-oid="k5eyhgo" />}
            data-oid="wp98uoo"
          />

          <Route
            path="/seminars"
            element={<SeminarsPage data-oid="4bcto:3" />}
            data-oid="8k.zk9e"
          />

          <Route
            path="/statistics"
            element={<StatisticsPage data-oid="yzhnewh" />}
            data-oid="zs2qadn"
          />

          <Route
            path="*"
            element={<h1 data-oid="bp.uxar">404</h1>}
            data-oid="bicdm0k"
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
