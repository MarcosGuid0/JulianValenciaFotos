import { useState, useEffect } from "react";
import Nav from "./nav";
import Footer from "./footer";
import Servicios from "./servicios";
import "../styles/page.css";

export default function Page() {
  const [backgroundClass, setBackgroundClass] = useState("carousel-image-1");

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundClass((prevClass) => {
        if (prevClass === "carousel-image-1") return "carousel-image-2";
        if (prevClass === "carousel-image-2") return "carousel-image-3";
        return "carousel-image-1";
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main className={`content ${backgroundClass}`}>
        <Nav />
      </main>
      <Servicios />
      <Footer />
    </div>
  );
}
