import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import "./EventsPage.css";

function parseRussianDate(dateStr) {
  // Удаляем лишние символы
  dateStr = dateStr.replace(/г\.|года|г\s*|года\s*/gi, '').trim();
  // Если диапазон дат, берем первую
  if (dateStr.includes("-")) {
    dateStr = dateStr.split("-").pop().trim(); // берем последнюю дату (обычно она с месяцем и годом)
    // Например: "15-16 января 2025" -> "16 января 2025"
  }
  // Месяцы на русском
  const months = {
    января: 0,
    февраля: 1,
    марта: 2,
    апреля: 3,
    мая: 4,
    июня: 5,
    июля: 6,
    августа: 7,
    сентября: 8,
    октября: 9,
    ноября: 10,
    декабря: 11,
  };
  // Ищем день, месяц, год
  const match = dateStr.match(/(\d{1,2})\s+(\S+)\s+(\d{4})/);
  if (!match) return null;
  const day = parseInt(match[1], 10);
  const month = months[match[2].toLowerCase()];
  const year = parseInt(match[3], 10);
  if (month === undefined) return null;
  return new Date(year, month, day);
}

function getTimeLeft(eventDateStr) {
  const eventDate = parseRussianDate(eventDateStr);
  if (!eventDate) return "Дата не распознана";
  const now = new Date();
  // Сравниваем только дату (без времени)
  eventDate.setHours(23, 59, 59, 999);
  if (now > eventDate) return "Завершено";
  let diff = eventDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(diff / (1000 * 60));
  let result = "";
  if (days > 0) result += `${days}д `;
  if (hours > 0 || days > 0) result += `${hours}ч `;
  result += `${minutes}м`;
  return result.trim();
}

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(0);

  const events = [
    {
      id: 1,
      title: "Предстоящий семинар",
      date: "Создано 28 мая 2025 г.",
      details: {
        title: "Предстоящий семинар",
        instructor: "Проводит Иоанн Спасович",
        instructorTitle:
          "Президент Международной федерации прикладного айкидо, Черный пояс, 5 дан; Клуб прикладного айкидо «Уча» (г. Белград, Сербия).",
        location:
          "ФОК «СОБОЛЬ», ул. Академика Постовского, 11",
        schedule: [
          "Воскресенье, 6 декабря 2025 г.",
          "10:00 ........аттестация дети",
          "13:00.........аттестация взрослые",
        ],

        cost: [
          "Семинар....................................3000 Р",
          "годовой взнос.........................1000 Р",
          "Будо-паспорт..........................1000 Р",
          "аттестация 5-2 кю ................1500 Р",
          "1 кю.............................................3000 Р",
          "черный пояс.............................5000 Р",
        ],

        contacts: [
          "Толаев Евгений Николаевич +7 982 648 77 75",
          "Домрачев Дмитрий Олегович +7 912 283 29 77",
        ],

        attachment: "положение.pdf",
      },
      creator: "Смирнов Денис",
      city: "Все города",
      eventDate: "6 декабря 2025 г.",
      timeLeft: "19д 3ч 25м",
      createdDate: "Создано 28 ноября 2025 г.",
    },
    {
      id: 2,
      title: "Родительское собрание",
      date: "Создано 20 апреля 2025 г.",
      details: {
        title: "Родительское собрание",
        instructor: "Проводит администрация клуба",
        location:
          "ФОК «СОБОЛЬ», ул. Академика Постовского, 11",
        schedule: ["Суббота, 25 мая 2025 г.", "15:00 - начало собрания"],
        cost: ["Участие бесплатное"],
        contacts: ["Администрация +7 982 648 77 75"],
      },
      creator: "Администрация",
      city: "Екатеринбург",
      eventDate: "25 мая 2026 г.",
      timeLeft: "Завершено",
      createdDate: "Создано 20 апреля 2025 г.",
    },
    {
      id: 3,
      title: "Обсуждение приемов",
      date: "Создано 14 февраля 2025 г.",
      details: {
        title: "Обсуждение приемов",
        instructor: "Проводит старшая группа",
        location: "Основной зал",
        schedule: [
          "Понедельник, 20 февраля 2025 г.",
          "18:00 - начало обсуждения",
        ],

        cost: ["Участие бесплатное для учеников"],
        contacts: ["Старший инструктор +7 982 648 77 75"],
      },
      creator: "Инструктор",
      city: "Екатеринбург",
      eventDate: "20 февраля 2025 г.",
      timeLeft: "Завершено",
      createdDate: "Создано 14 февраля 2025 г.",
    },
    {
      id: 4,
      title: "Выезд на лыжи",
      date: "Создано 9 января 2025 г.",
      details: {
        title: "Выезд на лыжи",
        instructor: "Организует клуб",
        location: "Горнолыжный курорт",
        schedule: ["Суббота-воскресенье, 15-16 января 2025 г.", "Выезд в 8:00"],
        cost: ["Участие 2000 Р", "Питание включено"],
        contacts: ["Организатор +7 982 648 77 75"],
      },
      creator: "Клуб",
      city: "Екатеринбург",
      eventDate: "15-16 января 2025 г.",
      timeLeft: "Завершено",
      createdDate: "Создано 9 января 2025 г.",
    },
  ];

  return (
    <div className="page">
      <h1 className="page-title">Мероприятия</h1>

      <div className="events-layout">
        <div className="left_block">
          <ul className="left_block_ul">
            {events.map((event, index) => (
              <li
                key={event.id}
                className={`left_block_li ${selectedEvent === index ? "active" : ""}`}
                onClick={() => setSelectedEvent(index)}
              >
                <h3 className="left_block_name">{event.title}</h3>
                <span className="left_block_city">{event.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="events-content">
          <EventCard event={events[selectedEvent]} />
        </div>

        <div className="events-info">
          <div className="event-info-section">
            <h3 className="info-title">Информация</h3>
            <div className="info-item">
              <span className="info-label">Создатель</span>
              <div className="creator-info">
                <div className="creator-avatar"></div>
                <span className="creator-name">
                  {events[selectedEvent].creator}
                </span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-label">Город</span>
              <span className="info-value">{events[selectedEvent].city}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Дата проведения</span>
              <span className="info-value">
                {events[selectedEvent].eventDate}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">До начала</span>
              <div className="time-left">
                <div className="time-circle">
                  <span className="time-text">
                    {getTimeLeft(events[selectedEvent].eventDate)}
                  </span>
                </div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-created">
                {events[selectedEvent].createdDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
