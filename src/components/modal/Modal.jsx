import React, { useState } from "react";
import { dataGallery } from "../../data/gallery";
import "./modalElements.css";

const Modal = () => {
  const [surce, setSurce] = useState("");
  const [open, setOpen] = useState(false);

  const data = (src) => {
    setSurce(src);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <div className={open ? "container-open" : "container"} onClick={close}>
          <div className="modal">
            <img src={surce} alt="image gallery" onClick={close} />
          </div>
        </div>
      )}
      <div className="gallery">
        <div className="img">
          {dataGallery.map((item) => (
            <img
              src={item.src}
              alt={item.alt}
              className="image-selected"
              onClick={() => data(item.src)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Modal;
