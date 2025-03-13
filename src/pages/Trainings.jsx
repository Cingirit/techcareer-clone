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
      content: ["bootcamp", "FrameWork"],
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
              <div key={card.id} className="col-lg-4 col-md-12 mb-4">
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
      <div className="fdiv">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <img src="/images/quizzes-icon.png" alt="" />
            </div>
            <div className="col-9">
              <h3>Testlerimizi Gördünüz Mü?</h3>
              <p className="fs-5" style={{ color: "rgb(135, 135, 135)" }}>
                Teknoloji sektörüne özel hazırlanan ücretsiz teknoloji testleri
                ile teknik yetkinlikleri ölçmeye anında başla.
              </p>
            </div>
            <div className="col-2">
              <button className="classic-button btn px-4 py-2">
                Hemen Keşfet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fdiv">
        <div className="container">
          <div className="row">
            <div
              className="accordion accordion-flush border"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <h4>Eğitimler Hakkında</h4>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="my-4">
                      Techcareer.net olarak, hem teknoloji paydaşları hem yeni
                      başlayanlar hem de meraklıları için özel olarak
                      tasarlanmış, geniş yelpazede, ücretsiz eğitim modülleri
                      sunmaktayız. Amacımız, katılımcılara sektörde en çok talep
                      gören bilgi ve yetkinlikleri kazandırarak, onların
                      profesyonel dünyada başarılı bir kariyer inşa etmelerine
                      katkı sağlamaktır. Eğitimlerimiz, alanında uzman ve
                      deneyimli eğitmenler tarafından verilen kapsamlı
                      içeriklerle desteklenmektedir.
                    </p>
                    <h3 className="my-4">
                      Neden Techcareer.net Eğitim Modülleri?
                    </h3>
                    <p className="my-4">
                      Techcareer.net’in eğitim modülleri, sadece teorik bilgi
                      sunmakla kalmaz, aynı zamanda katılımcıların
                      öğrendiklerini pratik uygulamalarla pekiştirmelerine
                      olanak tanır. Her bir eğitim, başlangıç seviyesinden ileri
                      düzeye kadar geniş bir skalada içerikler sunarak, farklı
                      bilgi seviyelerindeki katılımcılar için uygun hale
                      getirilmiştir. Bu sayede, teknoloji dünyasında yeni
                      olanlar da, mevcut becerilerini bir üst seviyeye taşımak
                      isteyenler de ihtiyaçlarına yönelik eğitim bulabilir.
                    </p>
                    <h3 className="my-4">Eğitim İçeriklerimiz</h3>
                    <p className="my-4">
                      Back-end'den front-end'e, DevOps'dan mobil uygulama
                      geliştirmeye kadar pek çok farklı alanda, derin öğrenme
                      sağlayacağınız ve edindiğiniz blgileri gerçek hayatta
                      pratiğe dönüştürebileceğiniz pek çok eğitime ücretsiz bir
                      şekilde techcareer.net'den erişebilirsiniz. Programlama
                      dilleri arasında Java, Python ve JavaScript gibi dillerin
                      yanı sıra, web geliştirme, veri bilimi, yapay zeka,
                      yazılım mühendisliği ve siber güvenlik gibi çeşitli
                      uzmanlık alanlarına yönelik eğitimler sunmaktayız.
                    </p>
                    <h3 className="my-4">Başarıya Giden Yolda Yanınızdayız</h3>
                    <p className="my-4">
                      Techcareer.net, eğitim modüllerini katılımcıların kariyer
                      hedeflerine ulaşmalarına destek olmak amacıyla
                      tasarlamıştır. Sunduğumuz eğitimlerle, sektörde rekabet
                      avantajı elde edebilir, teknolojinin hızla gelişen
                      dünyasında kendinizi güncel tutabilir ve kariyerinizde
                      yeni zirvelere ulaşabilirsiniz. Eğitim programlarımız,
                      sadece bilgi aktarmakla kalmaz, aynı zamanda
                      katılımcıların kariyer yolculuklarında onlara rehberlik
                      eder ve onları teknoloji sektörünün gelecekteki liderleri
                      haline getirir.
                    </p>
                    <h3 className="my-4">
                      Eğitimlere Katılmak İçin Hemen Kayıt Ol!
                    </h3>
                    <p className="my-4">
                      Techcareer.net olarak, teknoloji ve yazılım alanında
                      kariyer yapmayı hedefleyen katılımcılara, ihtiyaç
                      duydukları bilgi ve becerileri kazandırmayı taahhüt
                      ediyoruz. Eğitimlerimiz hakkında daha fazla bilgi almak ve
                      kayıt olmak için lütfen eğitimler sayfamızı ziyaret edin.
                      Techcareer.net ile teknoloji kariyerinizde sağlam
                      adımlarla ilerleyin ve geleceğinizi inşa edin. Üstelik
                      techcareer.net bünyesinde, uzaman eğitmenler tarafından
                      hazırlanan tüm eğitimler hem sertifikalı hem de ücretsiz.
                      Kayıt olup, hemen eğitimlere başlayabilirsin.{" "}
                    </p>
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

export default Trainings;
