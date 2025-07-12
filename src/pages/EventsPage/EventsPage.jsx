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
    <div className="page" data-oid="gxey.mr">
      <h1 className="page-title" data-oid="r74bkyd">
        Мероприятия
      </h1>

      <div className="events-layout" data-oid="n.f7u:u">
        <div className="events-sidebar" data-oid="sq6pfv6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`event-item ${selectedEvent === index ? "active" : ""}`}
              onClick={() => setSelectedEvent(index)}
              data-oid="lf-eu7s"
            >
              <h3 className="event-item-title" data-oid="848dql-">
                {event.title}
              </h3>
              <p className="event-item-date" data-oid="hko_5j2">
                {event.date}
              </p>
            </div>
          ))}
        </div>

        <div className="events-content" data-oid="x9y:.4k">
          <EventCard event={events[selectedEvent]} data-oid="wipz_jy" />
        </div>

        <div className="events-info" data-oid="jp_o36t">
          <div className="event-info-section" data-oid="yblhkz5">
            <h3 className="info-title" data-oid="plcagnl">
              Информация
            </h3>
            <div className="info-item" data-oid="xrf1w9t">
              <span className="info-label" data-oid="4-gsx:l">
                Создатель
              </span>
              <div className="creator-info" data-oid="y26h5r9">
                <div className="creator-avatar" data-oid="9m.-ghj"></div>
                <span className="creator-name" data-oid="zyqs5dh">
                  {events[selectedEvent].creator}
                </span>
              </div>
            </div>
            <div className="info-item" data-oid="c0_rxxm">
              <span className="info-label" data-oid="wht46:y">
                Город
              </span>
              <span className="info-value" data-oid="aim3x:_">
                {events[selectedEvent].city}
              </span>
            </div>
            <div className="info-item" data-oid="xha0kcq">
              <span className="info-label" data-oid="14zr0ts">
                Дата проведения
              </span>
              <span className="info-value" data-oid="c2xx.:i">
                {events[selectedEvent].eventDate}
              </span>
            </div>
            <div className="info-item" data-oid="3fq042e">
              <span className="info-label" data-oid="v:x6px0">
                До начала
              </span>
              <div className="time-left" data-oid="h6y11i_">
                <div className="time-circle" data-oid="gsok498">
                  <span className="time-text" data-oid="q526gno">
                    {events[selectedEvent].timeLeft}
                  </span>
                </div>
              </div>
            </div>
            <div className="info-item" data-oid="ghaqz:7">
              <span className="info-created" data-oid="w-5-a:q">
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
