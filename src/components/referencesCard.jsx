import React from "react";

function referencesCard() {
  return (
    <div>
      <div className="p-4" style={{ width: "19rem;" }}>
        <img src="/images/Otokoc.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="text-start card-text overflow-auto" style={{ fontSize: "15px",height:"120px" }}>
            IT recruiter alanında bilgi birikimi sağlayan, çok besleyici ve
            kariyer yolculuğuma ışık tutan bir eğitim oldu. Teknoloji alanındaki
            dile, yeni teknolojilere ve alanda gelişim odaklı ilerlemek için
            neler yapabileceğime dair birçok sorunun yanıtını cevaplayan dolu
            dolu bir eğitimdi. Eğitimle beraber pratik yapabileceğimiz birçok
            case sayesinde deneyim kazanmış oldum. Bu fırsatı sunan
            techcareer.net ailesine çok teşekkür ederim.
          </p>
        </div>
        <div
          className="card-footer text-start mt-3"
          style={{ fontSize: "13px" }}
        >
          <div>
            <p> Nazlıcan Aslan, Recruitment Project Manager</p>
            <p className="fw-semibold">Otokoç Otomativ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default referencesCard;
