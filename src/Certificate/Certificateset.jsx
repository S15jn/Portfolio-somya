import React, { useState } from "react";
import "./Certificateset.css";
import notfound from "./Cert-assest/notfound.png";

export default function Certificateset({ certificates }) {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [popupData, setPopupData] = useState(null); 

  const handleNext = () => {
    if (currentIndex < certificates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlePopupOpen = (certificate) => {
    setPopupData(certificate); 
  };

  const handlePopupClose = () => {
    setPopupData(null); 
  };

  return (
    <div className="slider-container">
     
      <button
        onClick={handlePrev}
        className="nav-button"
        disabled={currentIndex === 0}
      >
        ◀
      </button>

   
      <div className="slider  place-items-center justify-center">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "visible" : "inactive"}`}
          >
            <div className="card place-items-center justify-center">
              <img
                src={certificate.Cimg || notfound}
                alt="Certificate Thumbnail"
                className="card-image"
              />
              <div className="content">
                <h3 className="text-center text-2xl underline italic uppercase">
                  {certificate.Cname}
                </h3>
              </div>
              <div className="btn-container">
                <button
                  onClick={() => handlePopupOpen(certificate)}
                  className="button"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="nav-button"
        disabled={currentIndex >= certificates.length - 1}
      >
        ▶
      </button>

     
      {popupData && (
        <div className="popup-overlay">
          <div className="popup-window">
            <h2>{popupData.Cname}</h2>
            <img
              src={popupData.Cimg || notfound}
              alt="Certificate"
              className="popup-image"
            />
            <p>{popupData.Cdes}</p>
            <button onClick={handlePopupClose} className="popup-close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
