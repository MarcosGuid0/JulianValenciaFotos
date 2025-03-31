import Image from "next/image";
import Link from "next/link";
import "../styles/nav.css";
import Header from "./Header";

export default function Nav() {
  return (
    <nav className="navbar">
      <Header />

      <ul className="navLinks">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/ventanas/informacion">Información</Link>
        </li>
        <li>
          <Link href="/ventanas/portafolio">Portafolio</Link>
        </li>
      </ul>

      <div className="socialIcons">
        <Link href="https://facebook.com">
          <Image
            src="/images/facebook.webp"
            alt="Facebook"
            width={70}
            height={50}
          />
        </Link>
        <Link href="https://instagram.com">
          <Image
            src="/images/Instagram_icon.png.webp"
            alt="Instagram"
            width={30}
            height={35}
          />
        </Link>
        <Link href="https://whatsapp.com">
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            width={45}
            height={40}
          />
        </Link>
        <Link href="https://whatsapp.com">
          <Image src="/images/icono.png" alt="icono" width={60} height={60} />
        </Link>
      </div>
    </nav>
  );
}
