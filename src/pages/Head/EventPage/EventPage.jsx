import React, { useState } from "react";
import EventCard from "../../../components/EventCard/EventCard";
import "./EventPage.css";
import ModalCreateEvent from "./ModalCreateEvent";

function parseRussianDate(dateStr) {
  dateStr = dateStr.replace(/г\.|года|г\s*|года\s*/gi, '').trim();
  if (dateStr.includes("-")) {
    dateStr = dateStr.split("-").pop().trim();
  }
  const months = {
    января: 0, февраля: 1, марта: 2, апреля: 3, мая: 4, июня: 5, июля: 6, августа: 7, сентября: 8, октября: 9, ноября: 10, декабря: 11,
  };
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

function EventPageHead() {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([
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
    // ... другие события ...
  ]);

  const handleCreateEvent = (formData) => {
    const newEvent = {
      id: events.length + 1,
      title: formData.title,
      date: `Создано ${new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}`,
      details: {
        title: formData.title,
        instructor: "-",
        location: formData.city,
        schedule: [formData.date],
        cost: [],
        contacts: [],
      },
      creator: "Вы",
      city: formData.city,
      eventDate: formData.date,
      timeLeft: "-",
      createdDate: `Создано ${new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}`,
    };
    setEvents(prev => [...prev, newEvent]);
    setSelectedEvent(events.length); // выбрать новое событие
    setShowModal(false);
  };

  return (
    <div className="page">
      <h1 className="page-title">Мероприятия</h1>
      <button
        style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '11px 25px 11px 16px', gap: '8px', isolation: 'isolate', position: 'absolute', width: '137px', height: '48px', left: '1263px', top: '20px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 600, fontSize: '16px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
        onClick={() => setShowModal(true)}
      >
        + Создать
      </button>
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
          <EventCard 
            event={events[selectedEvent]} 
            onDelete={() => {
              setEvents(prev => prev.filter((_, idx) => idx !== selectedEvent));
              setSelectedEvent(prev => prev > 0 ? prev - 1 : 0);
            }}
          />
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
      <ModalCreateEvent show={showModal} onClose={() => setShowModal(false)} onSubmit={handleCreateEvent} />
    </div>
  );
}

export default EventPageHead;
