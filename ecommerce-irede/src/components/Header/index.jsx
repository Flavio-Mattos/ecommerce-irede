import { IoMenu } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";

export default function Header() {
  return (
    <header>
    
        <div className="container flex justify-between p-8 bg-blue-900">
          <button>
            <IoMenu />
          </button>
          <img className="h-7" src="public/logo-erede.png" alt="Logo E-Rede" />
          <button>
            <IoMdCart />
          </button>
        </div>
        <input type="text" placeholder="Buscar" />
    
    </header>
  );
}
