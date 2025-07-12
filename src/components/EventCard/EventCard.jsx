import React from "react";
import "./EventCard.css";

function EventCard({ event }) {
  if (!event) return null;

  return (
    <div className="event-card" data-oid="75pfnv1">
      <h2 className="event-title" data-oid="apia8hd">
        {event.details.title}
      </h2>

      <div className="event-section" data-oid="snhlfj0">
        <p className="event-instructor" data-oid="yp.rxlq">
          {event.details.instructor}
        </p>
        {event.details.instructorTitle && (
          <p className="event-instructor-title" data-oid="l1ytuc7">
            {event.details.instructorTitle}
          </p>
        )}
      </div>

      <div className="event-section" data-oid="7izi1:d">
        <p className="event-location" data-oid="m0ak20i">
          {event.details.location}
        </p>
      </div>

      <div className="event-section" data-oid="-_u63zj">
        <h3 className="event-section-title" data-oid="36sw4ov">
          Расписание:
        </h3>
        <div className="event-schedule" data-oid="z8kkcib">
          {event.details.schedule.map((item, index) => (
            <p key={index} className="schedule-item" data-oid="-41p3.4">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="event-section" data-oid="k7exmvh">
        <h3 className="event-section-title" data-oid="5mivl_f">
          Стоимость:
        </h3>
        <div className="event-cost" data-oid="-pb8k:7">
          {event.details.cost.map((item, index) => (
            <p key={index} className="cost-item" data-oid="4:0ocu5">
              {item}
            </p>
          ))}
        </div>
      </div>

      {event.details.contacts && (
        <div className="event-section" data-oid="_2d07rw">
          <h3 className="event-section-title" data-oid="gqpain9">
            Официальные контакты:
          </h3>
          <div className="event-contacts" data-oid="g7v1lwx">
            {event.details.contacts.map((contact, index) => (
              <p key={index} className="contact-item" data-oid="rvaudv7">
                {contact}
              </p>
            ))}
          </div>
        </div>
      )}

      {event.details.attachment && (
        <div className="event-section" data-oid="mokkve9">
          <div className="event-attachment" data-oid="t1ge_:7">
            <span className="attachment-icon" data-oid="3ixq4xg">
              📎
            </span>
            <a href="#" className="attachment-link" data-oid="szbmx0s">
              {event.details.attachment}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventCard;
