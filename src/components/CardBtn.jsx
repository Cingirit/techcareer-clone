import React from "react";

function CardBtn() {
  return (
    <a>
      <div className="card mb-3" style={{wordWrap:"normal"}}>
        <div className="g-0 row">
          <div className="col-3 d-flex justify-content-center align-items-center">
            <img
              src="/images/vodofone.webp"
              className="img-fluid float-start rounded-start"
              style={{
                maxHeight: "56px",
                maxWidth: "56px",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="col-9">
            <div className="card-body">
              <h5 className="card-title">Site Reability Engineer</h5>
              <p className="card-text">Orion Inovation</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  İstanbul/Türkiye(Hibrit)
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CardBtn;
