import "./LogPage.css";
import React, { useState } from "react";

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const matrix = [];
  let week = [];
  let dayOfWeek = (firstDay.getDay() + 6) % 7; // Пн=0, Вс=6

  // Заполняем пустые ячейки до первого дня месяца
  for (let i = 0; i < dayOfWeek; i++) week.push(null);

  for (let date = 1; date <= lastDay.getDate(); date++) {
    week.push(date);
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }
  // Заполняем пустые ячейки после последнего дня месяца
  if (week.length) {
    while (week.length < 7) week.push(null);
    matrix.push(week);
  }
  return matrix;
}

const GROUPS = [
  {
    name: "Детская вечер",
    type: "Дети",
    attendance: [
      "2025-07-02", "2025-07-04", "2024-07-07", "2024-07-09", "2024-07-11",
      "2025-07-14", "2024-07-16", "2024-07-18", "2024-07-23", "2024-07-28"
    ],
    trainer: {
      name: "Смирнов Денис",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    club: "Прайм",
    address: "ФОК «СОБОЛЬ», ул. Академика Постовского, 11",
    schedule: [
      "пн: 19.00-20.30",
      "ср: 19.00-20.30",
      "пт: 19.00-20.30"
    ],
    age: "Дети"
  },
  {
    name: "Детская утро",
    type: "Дети",
    attendance: [
      "2025-07-01", "2025-07-03", "2024-07-08", "2024-07-10", "2024-07-12",
      "2025-07-15", "2024-07-17", "2024-07-19", "2024-07-24", "2024-07-29"
    ],
    trainer: {
      name: "Иванова Мария",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    club: "Прайм",
    address: "ФОК «СОБОЛЬ», ул. Академика Постовского, 11",
    schedule: [
      "вт: 08.00-09.30",
      "чт: 08.00-09.30"
    ],
    age: "Дети"
  }
];

function Log() {
  const [current, setCurrent] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const [selectedGroupIdx, setSelectedGroupIdx] = useState(0);
  const group = GROUPS[selectedGroupIdx];
  const monthMatrix = getMonthMatrix(current.year, current.month);

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
    return group.attendance.includes(iso);
  }

  return (
    <div className="page">
      <h1 className="page-title">Журнал</h1>
      <div className="log-layout">
        <div className="log-left_block">
          <div className="log-groups-title">Группы</div>
          <ul className="log-groups-list">
            {GROUPS.map((g, idx) => (
              <li
                key={g.name}
                className={
                  "log-group-item" + (selectedGroupIdx === idx ? " active" : "")
                }
                onClick={() => setSelectedGroupIdx(idx)}
                style={{ cursor: "pointer" }}
              >
                <div className="log-group-name">{g.name}</div>
                <div className="log-group-type">{g.type}</div>
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
              <img className="log-info-avatar" src={group.trainer.avatar} alt="avatar" />
              {group.trainer.name}
            </div>
          </div>
          <div className="log-info-section">
            <div className="log-info-label">Возрастная группа</div>
            <div className="log-info-value">{group.age}</div>
          </div>
          <div className="log-info-section">
            <div className="log-info-label">Клуб</div>
            <div className="log-info-value">{group.club}</div>
          </div>
          <div className="log-info-section">
            <div className="log-info-label">Адрес клуба</div>
            <div className="log-info-value">{group.address}</div>
          </div>
          <div className="log-info-section">
            <div className="log-info-label">Расписание</div>
            <div className="log-info-value">
              {group.schedule.map((s, i) => (
                <React.Fragment key={i}>
                  {s}<br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;
