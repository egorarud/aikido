import React, { useState } from "react";
import styles from "./ModalCreateEvent.module.css";

const ModalCreateEvent = ({ show, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("Все города");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      city,
      date,
      description,
    });
    setTitle("");
    setCity("Все города");
    setDate("");
    setDescription("");
  };

  return (
    <div className={styles["add-task-overlay"]}>
      <div className={styles["add-task-modal"]}>
        <button
          className={styles["add-task-close-btn"]}
          onClick={onClose}
          aria-label="Закрыть форму"
        >
          <span>×</span>
        </button>
        <div className={styles["add-task-title"]}>Создать мероприятие</div>
        <form className={styles["add-task-form"]} onSubmit={handleSubmit}>
          <div>
            <label className={styles["add-task-input-label"] + ' ' + styles["add-task-font"]}>Название</label>
            <input
              type="text"
              className={styles["add-task-input-full"] + ' ' + styles["add-task-input"]}
              placeholder="Название мероприятия"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className={styles["add-task-fields-row"]}>
            <div className={styles["add-task-field-col"]}>
              <label className={styles["add-task-input-label"] + ' ' + styles["add-task-font"]}>Город</label>
              <select
                className={styles["add-task-select"]}
                value={city}
                onChange={e => setCity(e.target.value)}
              >
                <option>Все города</option>
                <option>Екатеринбург</option>
                <option>Москва</option>
              </select>
            </div>
            <div className={styles["add-task-field-col"]}>
              <label className={styles["add-task-input-label"] + ' ' + styles["add-task-font"]}>Дата проведения</label>
              <input
                type="date"
                className={styles["add-task-input"]}
                value={date}
                onChange={e => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className={styles["add-task-input-label"] + ' ' + styles["add-task-font"]}>Описание</label>
            <textarea
              className={styles["add-task-textarea"]}
              placeholder="Добавьте описание мероприятия"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <button type="button" className={styles["add-task-attach-btn"]}>
            <span style={{ fontSize: 18 }}>📎</span> Прикрепить файл
          </button>
          <button type="submit" className={styles["add-task-save-btn"]}>Создать</button>
        </form>
      </div>
    </div>
  );
};

export default ModalCreateEvent; 