import React from "react";
import "/src/css/home.css";
import { useState } from "react";

function Home() {
  const [active, setActive] = useState(null);
  const [textActive, setTextActive] = useState(null);
  function handleClick(i) {
    setActive(i);
    setTextActive(i);
  }
  return (
    <div>
      <div className="f0f0f0 fdiv">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 order-1 order-md-0">
              <div className="title">
                <span className="c00c26d">Techcareer.net ile </span>
                teknoloji kariyerinde hep ileriye
              </div>
              <div className="subtitle">
                En yenilikçi teknoloji etkinliklerine ve yarışmalarına, heyecan
                verici iş fırsatlarına, eğitimlere ve yetenek belirleme
                testlerine ulaşmak için aramıza katıl.
              </div>
              <div className="mt-3 d-none d-md-block">
                <button className="btn classic-button pe-4 ps-4 pt-2 pb-2">
                  Hemen Üye Ol
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center order-0 order-md-1">
              <img
                className="img"
                src="/images/cta-img.webp"
                alt=""
                loading="lazy"
                width="439"
                height="350"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fdiv">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-align-left mb-4">
              <h1>Etkinliklerimiz</h1>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-4 custom-upper-btn">
                      <button
                        className={`btn btn-outline-light custom-btn fw-medium custom-active fs-3   
                          ${active === 1 ? "custom-btn-active" : ""}`}
                        onClick={() => handleClick(1)}
                        style={{ color: "black" }}
                      >
                        Bootcamp
                      </button>
                    </div>
                    <div className="col-md-4 custom-upper-btn">
                      <button
                        className={`btn btn-outline-light custom-btn fw-medium custom-active fs-3 ${
                          active === 2 ? "custom-btn-active" : ""
                        }`}
                        onClick={() => handleClick(2)}
                        style={{ color: "black" }}
                      >
                        Hackathon
                      </button>
                    </div>
                    <div className="col-md-4 custom-upper-btn">
                      <button
                        className={`btn btn-outline-light custom-btn fw-medium custom-active fs-3 ${
                          active === 3 ? "custom-btn-active" : ""
                        }`}
                        onClick={() => handleClick(3)}
                        style={{ color: "black" }}
                      >
                        Hirin Challenge
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-center mt-5">
                  <div
                    className={`custom-text text-center fs-5 ${
                      textActive === 1 ? "" : "d-none"
                    }`}
                  >
                    <p>
                      Uzman eğitmenler ile farklı yazılım dillerinde eğitimler
                      alıp, projeler üzerinde çalışarak gerçek dünya tecrübesi
                      edin, kariyerinde hızla yüksel.
                    </p>
                    <a className="c00c26d" href="">Hemen Başvur</a>
                  </div>
                  <div
                    className={`custom-text text-center fs-5 ${
                      textActive === 2 ? "" : "d-none"
                    }`}
                  >
                    <p>
                      Gerçek dünya problemlerine yenilikçi çözümler üretmek için
                      Hackathon'lara katıl!
                    </p>
                    <a className="c00c26d" href="">Hemen Başvur</a>
                  </div>
                  <div
                    className={`custom-text text-center fs-5 ${
                      textActive === 3 ? "" : "d-none"
                    }`}
                  >
                    <p>
                      Gerçek iş dünyasından görevlerle becerilerini kanıtla,
                      yetenek avcılarının radarına gir ve hayalindeki işe daha
                      hızlı ulaş.
                    </p>
                    <a className="c00c26d" href="">Hemen Başvur</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
