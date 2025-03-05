import React from "react";
import "../css/footer.css";
import FooterList from "./FooterList";
import FooterItem from "./FooterItem";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="background">
      <div className="container pt-4">
        <div className="row pt-3">
          <div className="col-md-2 text-center">
            <FooterList title="TECHCAREER">
              <FooterItem item="Hakkımızda" />
              <FooterItem item="Etkinlikler" />
              <FooterItem item="Şirketler İçin" />
              <FooterItem item="Eğitmen Ol" />
              <FooterItem item="İş Birliği" />
              <FooterItem item="Referanslar" />
              <FooterItem item="İletişim" />
            </FooterList>
          </div>
          <div className="col-md-2 text-center">
            <FooterList title="BAŞVUR">
              <FooterItem item="Bootcamp" />
              <FooterItem item="Hackathon" />
              <FooterItem item="Hiring Challenge" />
              <FooterItem item="İş İlanlar" />
            </FooterList>
          </div>
          <div className="col-md-2 text-center">
            <FooterList title="SENİN İÇİN">
              <FooterItem item="Komünite" />
              <FooterItem item="TDC" />
              <FooterItem item="Blog" />
              <FooterItem item="Podcast" />
              <FooterItem item="Kariyer Rehberi" />
              <FooterItem item="Teknik Sözlük" />
              <FooterItem item="Mülakat Soruları" />
            </FooterList>
          </div>
          <div className="col-md-2 text-center">
            <FooterList title="VERİ POLİTİKAMIZ">
              <FooterItem item="Aydınlatma Metni" />
              <FooterItem item="Hizmet Sözleşmesi" />
              <FooterItem item="Açık Rıza Metni" />
              <FooterItem item="Çerez Politikası" />
            </FooterList>
          </div>
          <div className="col-md-4 text-center">
            <div className="logo mb-3">
              <img
                src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg"
                alt=""
              />
            </div>
            <p>Türkiye’nin teknoloji kariyeri platformu</p>
            <div className="socials mt-5">
              <p id="title">SOSYAL MEDYA</p>
              <a className="socials-logo border" href="">
                <FaLinkedinIn />
              </a>
              <a className="socials-logo border" href="">
                <FaXTwitter />
              </a>
              <a className="socials-logo border" href="">
                <FaInstagram />
              </a>
              <a className="socials-logo border" href="">
                <FaYoutube />
              </a>
              <a className="socials-logo border" href="">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2 me-auto text-center">
            <span className="TR language" id="title">
              TR
            </span>
            <span className="EN language" id="title">
              EN
            </span>
          </div>
          <div className="col-md-4 text-center">
            <span className="sağ">Tüm hakları saklıdır</span>
            <span className="sağ">© Copyright 2025</span>
            <span className="sağ">support@techcareer.net</span>
          </div>
        </div>
        <div className="en-alt">
          <div className="row align-items-center">
            <div className="col-md-1 text-center">
              <img
                id="iskur"
                src="/public\images\iskur.webp"
                width="57px"
                height="55px"
              />
            </div>
            <div className="col-md-11">
              <p className="en-alt-paragraph">
                Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş.
                Özel İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri
                arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından
                26/07/2024 tarih ve 16398069 sayılı karar uyarınca 170 nolu
                belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş
                arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir.
                Şikayetleriniz için aşağıdaki telefon numaralarına
                başvurabilirsiniz. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212
                249 29 87 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu
                Ümraniye Hizmet Merkezi : 0216 523 90 26
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
