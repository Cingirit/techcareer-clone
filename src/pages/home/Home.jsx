import React from "react";
import "/src/css/home.css";
import { useState } from "react";
import Card from "../../components/Card.jsx";
import CardBtn from "../../components/CardBtn.jsx";
import Carousel from "../../components/Carousel.jsx";
import MiniCard from "../../components/MiniCard.jsx";

function Home() {
  const [active, setActive] = useState(1);
  const [textActive, setTextActive] = useState(1);
  function handleClick(i) {
    setActive(i);
    setTextActive(i);
  }
  return (
    <div>
      {/* First Section Start */}
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
      {/* First Section End */}
      {/* Events Section Start */}
      <div className="fdiv mb-5">
        <div className="container mt-4">
          <div className="d-none d-lg-block">
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
                          Hiring Challenge
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
                      <a className="c00c26d" href="">
                        Hemen Başvur
                      </a>
                    </div>
                    <div
                      className={`custom-text text-center fs-5 ${
                        textActive === 2 ? "" : "d-none"
                      }`}
                    >
                      <p>
                        Gerçek dünya problemlerine yenilikçi çözümler üretmek
                        için Hackathon'lara katıl!
                      </p>
                      <a className="c00c26d" href="">
                        Hemen Başvur
                      </a>
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
                      <a className="c00c26d" href="">
                        Hemen Başvur
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-lg-none">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h2 className="fw-semibold fs-5 mt-3">Bootcamp</h2>
                  <p className="fs-6">
                    Uzman eğitmenler ile farklı yazılım dillerinde eğitimler
                    alıp, projeler üzerinde çalışarak gerçek dünya tecrübesi
                    edin, kariyerinde hızla yüksel.
                  </p>
                  <a className="c00c26d" href="">
                    Hemen Başvur
                  </a>
                  <h2 className="fw-semibold fs-5 mt-3">Hackathon</h2>
                  <p className="fs-6">
                    Gerçek dünya problemlerine yenilikçi çözümler üretmek için
                    Hackathon'lara katıl!
                  </p>
                  <a className="c00c26d" href="">
                    Hemen Başvur
                  </a>
                  <h2 className="fw-semibold fs-5 mt-3">Hiring Challenge</h2>
                  <p className="fs-6">
                    Gerçek iş dünyasından görevlerle becerilerini kanıtla,
                    yetenek avcılarının radarına gir ve hayalindeki işe daha
                    hızlı ulaş.
                  </p>
                  <a className="c00c26d" href="">
                    Hemen Başvur
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Events Cards */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-5 mb-3 fw-bolder fs-3">
              <h2>Başvuruya Açık Etkinlikler</h2>
            </div>
            <div className="col-lg-4">
              <Card
                title="Pendik Yetkinlik Geliştirme ve İstihdam Merkezi Endüstriyel Yazılım Bootcamp Programı"
                subtitle="Ücretsiz öğren, Mezun ol, Sertifikanı al!"
                date="09.03.2025"
                footertype="type1"
              />{" "}
            </div>
            <div className="col-lg-4">
              <Card
                title="Pendik Yetkinlik Geliştirme ve İstihdam Merkezi Endüstriyel Yazılım Bootcamp Programı"
                subtitle="Ücretsiz öğren, Mezun ol, Sertifikanı al!"
                date="09.03.2025"
                footertype="type1"
              />{" "}
            </div>
            <div className="col-lg-4">
              <Card
                title="Pendik Yetkinlik Geliştirme ve İstihdam Merkezi Endüstriyel Yazılım Bootcamp Programı"
                subtitle="Ücretsiz öğren, Mezun ol, Sertifikanı al!"
                footertype="type1"
                date="09.03.2025"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Events Section End */}
      {/*Job Hiring Section Start*/}
      <div className="f0f0f0 fdiv">
        <div className="container mt-4">
          <div className="col-12">
            <h1 className="fw-semibold">İş İlanlarımız</h1>
            <p className="fs-5" style={{ color: "#878787" }}>
              Teknoloji kariyerinde ilerlemek için doğru yerdesin. Teknoloji iş
              ilanlarını keşfetmeye hemen başla!
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <CardBtn></CardBtn>
            </div>
            <div className="col-lg-4">
              <CardBtn></CardBtn>
            </div>
            <div className="col-lg-4">
              <CardBtn></CardBtn>
            </div>
            <div className="col-lg-4">
              <CardBtn></CardBtn>
            </div>
            <div className="col-lg-4">
              <CardBtn></CardBtn>
            </div>
            <div className="col-lg-4">
              <CardBtn></CardBtn>
            </div>
          </div>
          <div
            className="classic-button-outline text-center"
            style={{ width: "8rem" }}
          >
            Tümünü Gör
          </div>
        </div>
      </div>
      {/*Job Hiring Section End*/}
      {/* Education Seciton Start */}
      <div className="fdiv mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="fw-semibold">Eğitimlerimiz</h2>
              <p className="fs-5" style={{ color: "#878787" }}>
                Teknoloji sektörüne özel hazırlanan ücretsiz yazılım
                eğitimlerini takip et, tamamla ve video eğitimler sonunda
                alacağın sertifikan ile özgeçmişini zenginleştir!
              </p>
            </div>
            <div className="col-lg-4">
              <Card
                title={"Docker Temelden İleri Seviyeye"}
                subtitle={
                  "Docker, uygulamaların her ortamda tutarlı bir şekilde çalışmasını sağlayan bir konteyner platformudur. Bu eğitimde, Docker'ın temel prensiplerini ve pratik uygulamalarını öğreneceksiniz."
                }
                footertype="type2"
              />
            </div>
            <div className="col-lg-4">
              <Card
                title={"Docker Temelden İleri Seviyeye"}
                subtitle={
                  "Docker, uygulamaların her ortamda tutarlı bir şekilde çalışmasını sağlayan bir konteyner platformudur. Bu eğitimde, Docker'ın temel prensiplerini ve pratik uygulamalarını öğreneceksiniz."
                }
                footertype="type2"
              />
            </div>
            <div className="col-lg-4">
              <Card
                title={"Docker Temelden İleri Seviyeye"}
                subtitle={
                  "Docker, uygulamaların her ortamda tutarlı bir şekilde çalışmasını sağlayan bir konteyner platformudur. Bu eğitimde, Docker'ın temel prensiplerini ve pratik uygulamalarını öğreneceksiniz."
                }
                footertype="type2"
              />
            </div>
            <div
              className="classic-button-outline text-center mt-3 ms-2"
              style={{ width: "8rem" }}
            >
              Tümünü Gör
            </div>
          </div>
        </div>
      </div>
      {/* Education Section End */}
      {/* Carousel Start */}
      <div className="fdiv p-5" style={{ backgroundColor: "#293349" }}>
        <Carousel></Carousel>
      </div>
      {/* Carousel End */}
      {/* Mini Card Section Start */}
      <div className="fdiv my-5">
        <div className="container d-flex flex-column align-items-center">
          <div className="row">
            <div className="col-lg-4">
              <MiniCard
                title="BLOG"
                text=" Teknoloji haberlerine dair son gelişmeleri ve yenilikleri takip
            edebileceğin teknoloji bloğu sayfamızı hemen ziyaret edebilirsin."
              ></MiniCard>
            </div>
            <div className="col-lg-4">
              <MiniCard
                title="BLOG"
                text=" Teknoloji haberlerine dair son gelişmeleri ve yenilikleri takip
            edebileceğin teknoloji bloğu sayfamızı hemen ziyaret edebilirsin."
              ></MiniCard>
            </div>
            <div className="col-lg-4">
              <MiniCard
                title="BLOG"
                text=" Teknoloji haberlerine dair son gelişmeleri ve yenilikleri takip
            edebileceğin teknoloji bloğu sayfamızı hemen ziyaret edebilirsin."
              ></MiniCard>
            </div>
            
          </div>
        </div>
      </div>
      {/* Mini Card Section End*/}
    </div>
  );
}

export default Home;
