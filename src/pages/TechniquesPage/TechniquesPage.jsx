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
      <div className="load" data-oid="j6cii1r">
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
      <div className="container" data-oid="f.tu.l.">
        <div className="clubs__container" data-oid="3d47m7b">
          <h1 className="clubs__title" data-oid="9m4c..9">
            Клубы
          </h1>
        </div>
        <div className="columns" data-oid="23cpofy">
          <div className="left_block" data-oid="g4v.h-b">
            <ul className="left_block_ul" data-oid="o-d8-8e">
              {techniques.map((technique) => (
                <li
                  key={technique.id}
                  className={`left_block_li ${
                    selectedId === technique.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedId(technique.id)}
                  data-oid="lhp6kp4"
                >
                  <h3 className="left_block_name" data-oid="iaprdnv">
                    {technique.name}
                  </h3>
                  <span className="left_block_city" data-oid="_srxqd6">
                    Прием - {technique.technique}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="mid_block_parts" data-oid="u:23zmd">
            {selectedTechnique.variants.map((variant) => (
              <li
                key={variant.variantID}
                className="mid_block_part"
                data-oid="l5_xcl1"
              >
                <p className="technique__title" data-oid="0.-tfyn">
                  {variant.variantName}
                </p>
                <div className="mid_block_content" data-oid="m11gmv8">
                  {parseText(variant.description).map((line, index) => (
                    <p
                      key={index}
                      className="technique__description"
                      data-oid="bgova_7"
                    >
                      {index + 1}. {line}
                    </p>
                  ))}
                </div>
                <div
                  className="video__container"
                  onClick={openVideo}
                  data-oid=".worue_"
                >
                  <div className="video__player__container" data-oid="3cw5swq">
                    <img
                      className="video__player"
                      src="../src/assets/techniques/video.svg"
                      alt="Play"
                      data-oid="vy6vh2y"
                    />
                  </div>
                  <img
                    className="pre__video"
                    src={variant.preview}
                    alt="Preview "
                    data-oid="fh7zbc:"
                  />
                </div>
                {isVideoOpen && (
                  <VideoModal
                    videoLink={variant.video}
                    closeModal={closeVideo}
                    data-oid="sv6cna."
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
