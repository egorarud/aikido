import React from "react";
import "./EventCard.css";
import deleteIcon from "../../assets/delete.svg";

function EventCard({ event, onDelete }) {
  if (!event) return null;

  return (
    <div className="event-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h2 className="event-title">{event.details.title}</h2>
        {onDelete && (
          <button
            className="event-delete-btn"
            onClick={onDelete}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            title="Удалить мероприятие"
          >
            <img src={deleteIcon} alt="Удалить" style={{ width: 24, height: 24 }} />
          </button>
        )}
      </div>
      <div className="event-section">
        <p className="event-instructor">{event.details.instructor}</p>
        {event.details.instructorTitle && (
          <p className="event-instructor-title">
            {event.details.instructorTitle}
          </p>
        )}
      </div>
      <div className="event-section">
        <h3 className="event-section-title">Место проведения:</h3>
        <p className="event-location">{event.details.location}</p>
      </div>
      <div className="event-section">
        <h3 className="event-section-title">Расписание:</h3>
        <div className="event-schedule">
          {event.details.schedule.map((item, index) => (
            <p key={index} className="schedule-item">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="event-section">
        <h3 className="event-section-title">Стоимость:</h3>
        <div className="event-cost">
          {event.details.cost.map((item, index) => (
            <p key={index} className="cost-item">
              {item}
            </p>
          ))}
        </div>
      </div>
      {event.details.contacts && (
        <div className="event-section">
          <h3 className="event-section-title">Официальные контакты:</h3>
          <div className="event-contacts">
            {event.details.contacts.map((contact, index) => (
              <p key={index} className="contact-item">
                {contact}
              </p>
            ))}
          </div>
        </div>
      )}
      {event.details.attachment && (
        <div className="event-section">
          <div className="event-attachment">
            <span className="attachment-icon">📎</span>
            <a href="#" className="attachment-link">
              {event.details.attachment}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventCard;
