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
      <div className="video__modal" data-oid="xv7sbzx">
        <button
          className="close__video__button"
          onClick={closeModal}
          data-oid="1iwj_lr"
        >
          x
        </button>
        <div className="video__content" data-oid="nhnr6q1">
          <video className="technique__video" controls data-oid="8txhabd">
            <source src={videoLink} type="video/mp4" data-oid=":5vguo6" />
          </video>
        </div>
      </div>
    </>
  );
}

export default VideoModal;
