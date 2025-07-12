import { useEffect } from "react";
import "./VideoModal.css";

function VideoModal({ videoLink, closeModal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <>
      <div className="video__modal" data-oid="nf-rbc9">
        <button
          className="close__video__button"
          onClick={closeModal}
          data-oid="3:bhw5:"
        >
          x
        </button>
        <div className="video__content" data-oid="lhq6i_q">
          <video className="technique__video" controls data-oid="gp9ou7s">
            <source src={videoLink} type="video/mp4" data-oid="at8mcxp" />
          </video>
        </div>
      </div>
    </>
  );
}

export default VideoModal;
