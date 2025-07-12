import React from "react";
import "./TechniqueCard.css";

function TechniqueCard({ technique }) {
  if (!technique) return null;

  return (
    <div className="technique-card" data-oid="ldn.vtw">
      <h2 className="technique-title" data-oid="fj2sbf8">
        {technique.details.title}
      </h2>

      <div className="technique-content" data-oid="lvzt959">
        <div className="technique-steps" data-oid="0yi:.hu">
          <ol className="steps-list" data-oid=".ubcy8i">
            {technique.details.steps.map((step, index) => (
              <li key={index} className="step-item" data-oid="5x1zhvf">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="technique-video" data-oid=":721b.8">
          <div className="video-placeholder" data-oid="g:h5iv:">
            <div className="video-icon" data-oid="jgp8m0n">
              ▶
            </div>
            <img
              src={technique.details.videoPlaceholder}
              alt="Демонстрация техники"
              className="video-thumbnail"
              data-oid="4llervc"
            />
          </div>
        </div>
      </div>

      <div className="technique-second-variant" data-oid="iy0.t8q">
        <h3 className="variant-title" data-oid="6p60rb-">
          Коса Дори Икке вариант Ура (Тачи Вадза)
        </h3>
        <div className="technique-content" data-oid="upkfn.v">
          <div className="technique-steps" data-oid="i7c_3-d">
            <ol className="steps-list" data-oid="0wed1ki">
              <li className="step-item" data-oid="omxknb9">
                Уке (атакующий) захватывает за одноименную руку
              </li>
              <li className="step-item" data-oid="vxub31l">
                Шаг за спину уке, руки поднимаются вверх
              </li>
              <li className="step-item" data-oid="_r7__2_">
                Тенкан, руки перед центром опускаются вниз
              </li>
              <li className="step-item" data-oid="digaq2w">
                Тенкай, прижимая плечо уке к татами
              </li>
              <li className="step-item" data-oid="v:nybtb">
                Контроль: давление на руку чуть выше локтя
              </li>
            </ol>
          </div>

          <div className="technique-video" data-oid="_r011mm">
            <div className="video-placeholder" data-oid="221.bs0">
              <div className="video-icon" data-oid="usue_sa">
                ▶
              </div>
              <img
                src={technique.details.videoPlaceholder}
                alt="Демонстрация техники вариант Ура"
                className="video-thumbnail"
                data-oid="gib.28p"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechniqueCard;
