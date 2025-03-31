import Image from "next/image";
import "../styles/nav.css";
export default function Header() {
  return (
    <div className="barra">
      <div className="logo">
        <Image
          src="/images/logo.png"
          alt="Julian Valencia Fotografía"
          width={100}
          height={100}
        />
        <h1 className="empresa">Julian Valencia Fotografía</h1>
      </div>
    </div>
  );
}
