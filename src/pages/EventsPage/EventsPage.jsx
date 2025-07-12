import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import "./EventsPage.css";

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(0);

  const events = [
    {
      id: 1,
      title: "Предстоящий семинар",
      date: "Создано 28 мая 2025 г.",
      details: {
        title: "Предстоящий семинара",
        instructor: "Проводит Иоанн Спасович",
        instructorTitle:
          "Президент Международной федерации прикладного айкидо, Черный пояс, 5 дан; Клуб прикладного айкидо «Уча» (г. Белград, Сербия).",
        location:
          "Место проведения: ФОК «СОБОЛЬ», ул. Академика Постовского, 11",
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
          "Место проведения: ФОК «СОБОЛЬ», ул. Академика Постовского, 11",
        schedule: ["Суббота, 25 мая 2025 г.", "15:00 - начало собрания"],
        cost: ["Участие бесплатное"],
        contacts: ["Администрация +7 982 648 77 75"],
      },
      creator: "Администрация",
      city: "Екатеринбург",
      eventDate: "25 мая 2025 г.",
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
        location: "Место проведения: Основной зал",
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
        location: "Место проведения: Горнолыжный курорт",
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
    <div className="page" data-oid="apgaasg">
      <h1 className="page-title" data-oid="9314-ie">
        Мероприятия
      </h1>

      <div className="events-layout" data-oid="sishckh">
        <div className="events-sidebar" data-oid="rs-n6-5">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`event-item ${selectedEvent === index ? "active" : ""}`}
              onClick={() => setSelectedEvent(index)}
              data-oid=".gu8--n"
            >
              <h3 className="event-item-title" data-oid="gfg81vs">
                {event.title}
              </h3>
              <p className="event-item-date" data-oid=".0sbwdx">
                {event.date}
              </p>
            </div>
          ))}
        </div>

        <div className="events-content" data-oid="il71zjx">
          <EventCard event={events[selectedEvent]} data-oid="23pz78b" />
        </div>

        <div className="events-info" data-oid="v_itb6-">
          <div className="event-info-section" data-oid="ggw4.72">
            <h3 className="info-title" data-oid="adcotp8">
              Информация
            </h3>
            <div className="info-item" data-oid="cazoob0">
              <span className="info-label" data-oid="g4to2to">
                Создатель
              </span>
              <div className="creator-info" data-oid="owq4fgl">
                <div className="creator-avatar" data-oid="hwpth.y"></div>
                <span className="creator-name" data-oid=".f2yi8f">
                  {events[selectedEvent].creator}
                </span>
              </div>
            </div>
            <div className="info-item" data-oid="eo:ac6f">
              <span className="info-label" data-oid="d8wnto-">
                Город
              </span>
              <span className="info-value" data-oid="3yyc27h">
                {events[selectedEvent].city}
              </span>
            </div>
            <div className="info-item" data-oid="b2l--fe">
              <span className="info-label" data-oid="n4tl7o1">
                Дата проведения
              </span>
              <span className="info-value" data-oid="mz.nl5c">
                {events[selectedEvent].eventDate}
              </span>
            </div>
            <div className="info-item" data-oid="8a3uu3f">
              <span className="info-label" data-oid="vqy8t8y">
                До начала
              </span>
              <div className="time-left" data-oid="fg83e4w">
                <div className="time-circle" data-oid="jj-gnos">
                  <span className="time-text" data-oid="6aq8k7d">
                    {events[selectedEvent].timeLeft}
                  </span>
                </div>
              </div>
            </div>
            <div className="info-item" data-oid="3co-non">
              <span className="info-created" data-oid=":0:tq6w">
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
