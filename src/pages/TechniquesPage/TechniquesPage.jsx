import { useEffect, useState } from "react";
import "./TechniquesPage.css";
import VideoModal from "../../components/VideoModal/VideoModal";

function Techniques() {
  const [techniques, setTechniques] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    fetch("/mock/technique.json")
      .then((res) => res.json())
      .then((data) => {
        setTechniques(data);
        setSelectedId(data[0]?.id);
      });
  }, []);

  if (!techniques.length)
    return (
      <div className="load" data-oid="_gbti5r">
        Загрузка...
      </div>
    );

  const selectedTechnique = techniques.find(
    (technique) => technique.id === selectedId,
  );

  const parseText = (text) => {
    const splittedText = text.split(".");
    return splittedText.map((elem) => elem.trim());
  };

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <>
      <div className="container" data-oid="36fzjv2">
        <div className="clubs__container" data-oid="v8ou6e1">
          <h1 className="clubs__title" data-oid="3sqmy.v">
            Клубы
          </h1>
        </div>
        <div className="columns" data-oid="stx4_y.">
          <div className="left_block" data-oid="hv-2npm">
            <ul className="left_block_ul" data-oid="h:_:3id">
              {techniques.map((technique) => (
                <li
                  key={technique.id}
                  className={`left_block_li ${
                    selectedId === technique.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedId(technique.id)}
                  data-oid="2bufm.p"
                >
                  <h3 className="left_block_name" data-oid="27:.jab">
                    {technique.name}
                  </h3>
                  <span className="left_block_city" data-oid="k45k1mx">
                    Прием - {technique.technique}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="mid_block_parts" data-oid="z74l9lp">
            {selectedTechnique.variants.map((variant) => (
              <li
                key={variant.variantID}
                className="mid_block_part"
                data-oid="ostiakp"
              >
                <p className="technique__title" data-oid="3.fkjcp">
                  {variant.variantName}
                </p>
                <div className="mid_block_content" data-oid="r8o13ac">
                  {parseText(variant.description).map((line, index) => (
                    <p
                      key={index}
                      className="technique__description"
                      data-oid="i41bz_p"
                    >
                      {index + 1}. {line}
                    </p>
                  ))}
                </div>
                <div
                  className="video__container"
                  onClick={openVideo}
                  data-oid="x9f484c"
                >
                  <div className="video__player__container" data-oid="njg8kmh">
                    <img
                      className="video__player"
                      src="../src/assets/techniques/video.svg"
                      alt="Play"
                      data-oid=":.s90gp"
                    />
                  </div>
                  <img
                    className="pre__video"
                    src={variant.preview}
                    alt="Preview "
                    data-oid="m_ss5p2"
                  />
                </div>
                {isVideoOpen && (
                  <VideoModal
                    videoLink={variant.video}
                    closeModal={closeVideo}
                    data-oid="onb9751"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Techniques;
