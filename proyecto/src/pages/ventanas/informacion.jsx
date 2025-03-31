import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "../../styles/informacion.css";
import Contactar from "@/components/contactar";

export default function Portafolio() {
  return (
    <div>
      <main className="contenedor">
        <Nav />
        <section className="contenido">
          <h1 className="titulo">Acerca de Nosotros</h1>
          <div className="grid">
            <div className="foto">
              <img
                src="/images/julian.jpg"
                alt="foto de julian"
                className="imagenes"
              />
            </div>
            <div className="info">
              <p>
                Julian Valencia es un fotógrafo profesional con más de 10 años
                de experiencia en{" "}
              </p>
              <p>
                la captura de momentos especiales. Desde bodas y graduaciones
                hasta sesiones familiares y retratos individuales,
              </p>
              <p>
                Julian tiene un ojo excepcional para los detalles y una
                habilidad innata para contar historias a través de sus imágenes.
                Su pasión por la fotografía comenzó
              </p>
              <p>
                {" "}
                a una edad temprana, y desde entonces ha trabajado
                incansablemente para perfeccionar su técnica y brindar a sus
                clientes una experiencia inolvidable.
              </p>
            </div>
          </div>
          <h1 className="titulo">Contacto</h1>
          <Contactar />
        </section>
      </main>
      <Footer />
    </div>
  );
}
