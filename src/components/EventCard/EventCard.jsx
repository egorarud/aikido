import React from "react";
import "./EventCard.css";

function EventCard({ event }) {
  if (!event) return null;

  return (
    <div className="event-card" data-oid="p9nad3g">
      <h2 className="event-title" data-oid="0iu5lzm">
        {event.details.title}
      </h2>

      <div className="event-section" data-oid="ww5__8y">
        <p className="event-instructor" data-oid="qogbm3o">
          {event.details.instructor}
        </p>
        {event.details.instructorTitle && (
          <p className="event-instructor-title" data-oid="twtrkix">
            {event.details.instructorTitle}
          </p>
        )}
      </div>

      <div className="event-section" data-oid="0l32vtb">
        <p className="event-location" data-oid="7kw5s-g">
          {event.details.location}
        </p>
      </div>

      <div className="event-section" data-oid="x93q8_6">
        <h3 className="event-section-title" data-oid="eef3yzp">
          Расписание:
        </h3>
        <div className="event-schedule" data-oid="4q7j20:">
          {event.details.schedule.map((item, index) => (
            <p key={index} className="schedule-item" data-oid="ys:uiwh">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="event-section" data-oid="hv:8p7h">
        <h3 className="event-section-title" data-oid="qrz35pq">
          Стоимость:
        </h3>
        <div className="event-cost" data-oid="62j7_3u">
          {event.details.cost.map((item, index) => (
            <p key={index} className="cost-item" data-oid="tze04e0">
              {item}
            </p>
          ))}
        </div>
      </div>

      {event.details.contacts && (
        <div className="event-section" data-oid="8dmp50y">
          <h3 className="event-section-title" data-oid="1i:e0o4">
            Официальные контакты:
          </h3>
          <div className="event-contacts" data-oid="t7rtmzy">
            {event.details.contacts.map((contact, index) => (
              <p key={index} className="contact-item" data-oid=":coi8ls">
                {contact}
              </p>
            ))}
          </div>
        </div>
      )}

      {event.details.attachment && (
        <div className="event-section" data-oid="1-8:jlw">
          <div className="event-attachment" data-oid="bea3wdy">
            <span className="attachment-icon" data-oid="di-mojz">
              📎
            </span>
            <a href="#" className="attachment-link" data-oid="n9vm..s">
              {event.details.attachment}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventCard;
