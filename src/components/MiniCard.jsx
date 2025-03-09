import React from "react";

function MiniCard({ title, text }) {
  return (
    <a>
      <div className="card text-center miniCard">
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-body-secondary fs-6">{text}</p>
          <button
            className="btn classic-button d-block"
            style={{ width: "100%" }}
          >
            Hemen Oku
          </button>
        </div>
      </div>
    </a>
  );
}

export default MiniCard;
