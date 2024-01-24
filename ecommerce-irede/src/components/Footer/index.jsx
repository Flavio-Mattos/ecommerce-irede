import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-96 py-11 inset-x-0 bottom-0 bg-blue-900 text-white">
      <footer className="w-5/6 m-auto">
        <div className="flex justify-around">
          <div className="footer-left flex gap-x-4">
            <div className="w-24">
              <img src="/public/logo-erede.png" alt="Logo E-rede Store" />
              <div className="flex justify-between mt-7">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <p className="w-48">
              Lorem ipsum lorem ipsum lorem lorem ipsum lorem loram lorem lorem
              lorem ipsum ipsum ipsum
            </p>
          </div>
          <div className="footer-pt1 flex flex-col">
            <p className="font-bold pb-2.5">Informações</p>
            <a href="#">Sobre o E-Rede Store</a>
            <a href="#">Segurança</a>
            <a href="#">Lista de desejos</a>
            <a href="#">Trabalhe Conosco</a>
          </div>
          <div className="footer-pt2 flex flex-col">
            <p className="font-bold pb-2.5">Informações</p>
            <a href="#">Tênis</a>
            <a href="#">Camiseta</a>
            <a href="#">Acessórios</a>
            <a href="#">Esportivo</a>
          </div>
          <div className="footer-pt3">
            <p className="font-bold pb-2.5">Localização</p>
            <p>Rua Martinho Rodrigues, 331</p>
            <p>Bairro de Fátima, Fortaleza-CE</p>
          </div>
        </div>

        <div className="footer-pt4">
          <div className="border-b-2 pt-28 m-auto"></div>
          <p className="text-center pt-9">2023 Irede</p>
        </div>
      </footer>
    </div>
  );
}
