import "./LogPage.css";
import React, { useState, useEffect } from "react";

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const matrix = [];
  let week = [];
  let dayOfWeek = (firstDay.getDay() + 6) % 7; // Пн=0, Вс=6
  for (let i = 0; i < dayOfWeek; i++) week.push(null);
  for (let date = 1; date <= lastDay.getDate(); date++) {
    week.push(date);
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    matrix.push(week);
  }
  return matrix;
}

const USER_ID = 2;

function Log() {
  const [current, setCurrent] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const [groups, setGroups] = useState([]);
  const [selectedGroupIdx, setSelectedGroupIdx] = useState(0);
  const [ageGroupEnum, setAgeGroupEnum] = useState({});
  const [attendance, setAttendance] = useState([]);
  const [coach, setCoach] = useState(null);
  const [club, setClub] = useState({ name: "", address: "" });
  const [schedule, setSchedule] = useState([]);

  const group = groups[selectedGroupIdx] || null;
  const monthMatrix = getMonthMatrix(current.year, current.month);

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const enumsRes = await fetch("http://158.160.168.25:5000/api/additionaldata/get/enums");
        const enumsData = await enumsRes.json();
        setAgeGroupEnum(enumsData.AgeGroup || {});
        const groupsRes = await fetch(`http://158.160.168.25:5000/api/coachlog/get/groups-by-user/${USER_ID}`);
        const groupsData = await groupsRes.json();
        setGroups(groupsData);
      } catch {
        setGroups([]);
        setAgeGroupEnum({});
      }
    }
    fetchInitialData();
  }, []);

  useEffect(() => {
    async function fetchAttendance() {
      if (!group) return;
      const monthStr = `${current.year}-${String(current.month + 1).padStart(2, '0')}`;
      try {
        const url = `http://158.160.168.25:5000/api/coachlog/get/data/student?userId=${USER_ID}&groupId=${group.id}&month=${monthStr}`;
        const res = await fetch(url);
        const data = await res.json();
        setAttendance(Array.isArray(data.attendance) ? data.attendance.map(a => a.visitDate.slice(0, 10)) : []);
        setCoach(data.coach || null);
        setClub(data.club && typeof data.club === 'object' ? data.club : { name: "", address: "" });
        setSchedule(data.schedule && typeof data.schedule === 'object'
          ? Object.entries(data.schedule).map(([day, time]) => `${day}: ${time}`)
          : []);
      } catch {
        setAttendance([]);
        setCoach(null);
        setClub({ name: "", address: "" });
        setSchedule([]);
      }
    }
    fetchAttendance();
  }, [group, current]);

  function prevMonth() {
    setCurrent(({ year, month }) =>
      month === 0 ? { year: year - 1, month: 11 } : { year, month: month - 1 }
    );
  }
  function nextMonth() {
    setCurrent(({ year, month }) =>
      month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 }
    );
  }
  function isVisited(day) {
    if (!day) return false;
    const date = new Date(current.year, current.month, day);
    const iso = date.toISOString().slice(0, 10);
    return attendance.includes(iso);
  }
  function getCoachAvatar() {
    if (coach && coach.photo) {
      if (coach.photo.length > 100) {
        return `data:image/jpeg;base64,${coach.photo}`;
      }
      return coach.photo;
    }
    return "";
  }

  return (
    <div className="page">
      <h1 className="page-title">Журнал</h1>
      <div className="log-layout">
        <div className="log-left_block">
          <div className="log-groups-title">Группы</div>
          <ul className="log-groups-list">
            {groups.map((g, idx) => (
              <li
                key={g.id}
                className={
                  "log-group-item" + (selectedGroupIdx === idx ? " active" : "")
                }
                onClick={() => setSelectedGroupIdx(idx)}
                style={{ cursor: "pointer" }}
              >
                <div className="log-group-name">{g.name}</div>
                <div className="log-group-type">{ageGroupEnum[String(g.ageGroup)] || g.ageGroup}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="log-content">
          <div className="log-content-title">Посещаемость</div>
          <div className="log-calendar log-calendar--custom">
            <div className="custom-calendar">
              <div className="react-calendar__navigation">
                <button onClick={prevMonth} className="calendar-nav-btn">&#8592;</button>
                <span className="react-calendar__navigation__label">
                  {new Date(current.year, current.month).toLocaleString('ru-RU', { month: 'long', year: 'numeric' })}
                </span>
                <button onClick={nextMonth} className="calendar-nav-btn">&#8594;</button>
              </div>
              <div className="react-calendar__month-view__weekdays">
                {WEEKDAYS.map((w) => (
                  <div key={w} className="react-calendar__month-view__weekdays__weekday">{w}</div>
                ))}
              </div>
              <div className="react-calendar__month-view__days">
                {monthMatrix.map((week, i) =>
                  week.map((date, j) =>
                    date ? (
                      <div
                        key={i + '-' + j}
                        className={
                          'react-calendar__tile' +
                          (isVisited(date) ? ' calendar-visited' : '')
                        }
                      >
                        {date}
                      </div>
                    ) : (
                      <div key={i + '-' + j} className="react-calendar__tile" />
                    )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="log-info">
          <div className="log-info-title">Информация</div>
          <div className="log-info-section">
            <div className="log-info-label">Тренер</div>
            <div className="log-info-value log-info-trainer">
              {coach && coach.photo && (
                <img className="log-info-avatar" src={getCoachAvatar()} alt="avatar" />
              )}
              {coach ? coach.name : "-"}
            </div>
          </div>
          <div className="log-info-section">
            <div className="log-info-label">Возрастная группа</div>
            <div className="log-info-value">{ageGroupEnum[String(group?.ageGroup)] || group?.ageGroup}</div>
          </div>
          <div className="log-info-section">
            <div className="log-info-label">Клуб</div>
            <div className="log-info-value">{club.name}</div>
          </div>
          <div className="log-info-section">
            <div className="log-info-label">Адрес клуба</div>
            <div className="log-info-value">{club.address}</div>
          </div>
          <div className="log-info-section">
            <div className="log-info-label">Расписание</div>
            <div className="log-info-value">
              {Array.isArray(schedule) ? schedule.map((s, i) => (
                <React.Fragment key={i}>
                  {s}<br />
                </React.Fragment>
              )) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;
