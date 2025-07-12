import React from "react";
import "./TechniqueCard.css";

function TechniqueCard({ technique }) {
  if (!technique) return null;

  return (
    <div className="technique-card" data-oid="_o.l4rd">
      <h2 className="technique-title" data-oid="frsqjr2">
        {technique.details.title}
      </h2>

      <div className="technique-content" data-oid="sxaunv:">
        <div className="technique-steps" data-oid="lm2994n">
          <ol className="steps-list" data-oid="jsr9b0f">
            {technique.details.steps.map((step, index) => (
              <li key={index} className="step-item" data-oid="8n3205f">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="technique-video" data-oid="ubh60yt">
          <div className="video-placeholder" data-oid="7helwq4">
            <div className="video-icon" data-oid="5r2b.-.">
              ▶
            </div>
            <img
              src={technique.details.videoPlaceholder}
              alt="Демонстрация техники"
              className="video-thumbnail"
              data-oid=".81e715"
            />
          </div>
        </div>
      </div>

      <div className="technique-second-variant" data-oid="l7um2gi">
        <h3 className="variant-title" data-oid="hblucrc">
          Коса Дори Икке вариант Ура (Тачи Вадза)
        </h3>
        <div className="technique-content" data-oid="lu8xhah">
          <div className="technique-steps" data-oid="mr6tevz">
            <ol className="steps-list" data-oid="_a.1sml">
              <li className="step-item" data-oid="xp7qj:4">
                Уке (атакующий) захватывает за одноименную руку
              </li>
              <li className="step-item" data-oid="udvlx.:">
                Шаг за спину уке, руки поднимаются вверх
              </li>
              <li className="step-item" data-oid="7_bn0j-">
                Тенкан, руки перед центром опускаются вниз
              </li>
              <li className="step-item" data-oid="ks8wr3:">
                Тенкай, прижимая плечо уке к татами
              </li>
              <li className="step-item" data-oid="4qmf94a">
                Контроль: давление на руку чуть выше локтя
              </li>
            </ol>
          </div>

          <div className="technique-video" data-oid="f457k3.">
            <div className="video-placeholder" data-oid=".88k688">
              <div className="video-icon" data-oid="c7zcbzy">
                ▶
              </div>
              <img
                src={technique.details.videoPlaceholder}
                alt="Демонстрация техники вариант Ура"
                className="video-thumbnail"
                data-oid="c00po63"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechniqueCard;
