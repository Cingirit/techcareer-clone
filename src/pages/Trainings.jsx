import { React, useState } from "react";
import "../css/training.css";
import Bottombtn from "../components/Bottombtn";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

function Trainings() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const allCards = [
    {
      id: 1,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
    {
      id: 2,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
    {
      id: 3,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
    {
      id: 4,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
    {
      id: 5,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
    {
      id: 6,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
    {
      id: 7,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
    {
      id: 8,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
    {
      id: 9,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
    {
      id: 10,
      title: "React Nedir?",
      subtitle: "React, UI oluşturmak için kullanılan bir kütüphanedir.",
      footertype: "type2",
      content: ["bootcamp", "2"],
      date: "10.02.2000",
    },
  ];
  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  const currentCards = allCards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );
  return (
    <div>
      <div
        className="f0f0f0 fdiv"
        style={{ backgroundImage: `url("/images/background.png")` }}
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 order-1 order-md-0">
              <div className="mt-5">
                <h1 style={{ color: "white" }}>Eğitimler</h1>
              </div>
              <div className="subtitle" style={{ color: "white" }}>
                Teknoloji dünyasındaki konular hakkında eğitim almak için doğru
                yerdesin. Eğitimleri takip et, tamamla ve yeteneklerini
                geliştir!
              </div>
              <div className="mt-3 d-none d-md-block">
                <div>
                  <div className="mini-btn p-1 px-3 my-3">Ücretsizdir</div>
                </div>
                <button className="btn classic-button pe-4 ps-4 pt-2 pb-2">
                  Keşfet
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center order-0 order-md-1">
              <img
                className="img"
                src="/images/vector.png"
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
        <div className="container">
          <div className="row">
            <div className="col-12 text-start mt-5 mb-3 fw-bolder fs-2">
              <p>Tüm Eğitimler</p>
            </div>
            {}
            {currentCards.map((card) => (
              <div key={card.id} className="col-4">
                <Card
                  {...card}
                  Bottombtn={card.content.map((cont, i) => (
                    <Bottombtn key={i} content={cont} />
                  ))}
                />
              </div>
            ))}
            <div className="mt-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              ></Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainings;
