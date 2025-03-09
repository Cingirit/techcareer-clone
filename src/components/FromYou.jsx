import React from "react";

function FromYou() {
  return (
    <div className=" mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
          style={{width:"200px", height:"200px"}}
            src="/images/Baran_Emre_Bulak.webp"
            className="img-fluid rounded-start img-thumnail p-3"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body mt-3">
            <p
              className="card-text overflow-auto fs-6"
              style={{ fontSize: "15px", height: "120px" }}
            >
              Bu süreçte, benim için en değerli olan şey, programın kolektif
              çalışma ortamıydı. Kendimi genellikle bağımsız bir öğrenici olarak
              görsem de, diğer katılımcıların kararlılığı ve tutkusu beni
              derinden etkiledi ve motivasyonumu artırdı. Bu, öğrenme sürecimi
              zenginleştiren ve sürdürülebilir bir çalışma ritmi oluşturmama
              yardımcı olan bir dayanışma hissi yarattı. Kendi öğrenme
              yolculuğumda karşılaştığım zorluklar, bağımsız problem çözme
              becerilerimi geliştirmeme ve daha dirençli bir öğrenici olmama
              olanak tanıdı. Sonuç olarak, Angular bootcamp'i, kişisel ve
              profesyonel gelişimim için değerli bir adım oldu. Bu deneyim, hem
              bir ekip içinde çalışmanın gücünü hem de kendi kendine öğrenmenin
              önemini bir kez daha hatırlattı. Bootcamp, teknik becerilerimi
              geliştirirken aynı zamanda bana, karşılaştığım zorlukların
              üstesinden gelebileceğim ve hedeflerime ulaşabileceğim konusunda
              güven verdi.
            </p>
            <div className="text-start mt-3" style={{fontSize:"15px"}}>
              <div className="px-3">
                <p className="fw-semibold">Emre Baran Bulak</p>
                <p>Otokoç Otomativ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FromYou;
