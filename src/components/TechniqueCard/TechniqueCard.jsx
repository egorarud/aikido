import React from "react";
import "./TechniqueCard.css";

function TechniqueCard({ technique }) {
  if (!technique) return null;

  return (
    <div className="technique-card">
      <h2 className="technique-title">{technique.details.title}</h2>

      <div className="technique-content">
        <div className="technique-steps">
          <ol className="steps-list">
            {technique.details.steps.map((step, index) => (
              <li key={index} className="step-item">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="technique-video">
          <div className="video-placeholder">
            <div className="video-icon">▶</div>
            <img
              src={technique.details.videoPlaceholder}
              alt="Демонстрация техники"
              className="video-thumbnail"
            />
          </div>
        </div>
      </div>

      <div className="technique-second-variant">
        <h3 className="variant-title">
          Коса Дори Икке вариант Ура (Тачи Вадза)
        </h3>
        <div className="technique-content">
          <div className="technique-steps">
            <ol className="steps-list">
              <li className="step-item">
                Уке (атакующий) захватывает за одноименную руку
              </li>
              <li className="step-item">
                Шаг за спину уке, руки поднимаются вверх
              </li>
              <li className="step-item">
                Тенкан, руки перед центром опускаются вниз
              </li>
              <li className="step-item">Тенкай, прижимая плечо уке к татами</li>
              <li className="step-item">
                Контроль: давление на руку чуть выше локтя
              </li>
            </ol>
          </div>

          <div className="technique-video">
            <div className="video-placeholder">
              <div className="video-icon">▶</div>
              <img
                src={technique.details.videoPlaceholder}
                alt="Демонстрация техники вариант Ура"
                className="video-thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechniqueCard;
