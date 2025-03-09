import React from "react";
import "../css/card.css";

function Card({ title, subtitle, date, footertype = "type1" }) {
  return (
    <div>
      <div className="card p-3" style={{ width: "auto" }}>
        <img
          src="/images/1200x628_v1_1_416fe3fc53.webp"
          className="card-img-top"
        />
        <div className="card-body align-items-center text-center">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text">{subtitle}</p>
          <div className="mini-btn text-center">Bootcamp</div>
          <hr />
          {footertype === "type1" ? (
            <div className="row">
              <div className="col-6 text-start">
                <div className="fw-medium sonBasvuru">SON BAŞVURU</div>
                <div className="fs-6 fw-semibold">{date}</div>
              </div>
              <div className="col-6">
                <a href="#" className="btn classic-button d-block">
                  Başvur
                </a>
              </div>
            </div>
          ) : (
            <div className="row">
              <div
                className="col-4 text-start fs-md-5 fs-lg-6"
                style={{ whiteSpace: "nowrap",fontSize:"1rem" }}
              >
                Başlangıç
              </div>
              <div
                className="col-4 text-center"  
                style={{ whiteSpace: "nowrap",fontSize:"1rem" }}
              >
                13 Saat
              </div>
              <div className="col-4" style={{ whiteSpace: "nowrap",fontSize:"1rem" }}>
                Var
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
