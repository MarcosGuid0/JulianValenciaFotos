import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "../../styles/portafolio.css";
import Fotos from "@/components/fotos";

export default function Portafolio({ paquetes = [] }) {
  return (
    <div>
      <main className="contenedor">
        <Nav />
        <section className="contenido">
          <h1 className="titulo">Nuestros Catálogos</h1>
          <div className="grid">
            {paquetes.map((paquete) => (
              <Fotos
                key={paquete.id}
                id={paquete.id}
                imageSrc={paquete.imageSrc}
                altText={paquete.altText}
                title={paquete.title}
                description={paquete.description}
                price={paquete.price}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/api/paquetes");
    const paquetes = await res.json();

    console.log("Paquetes obtenidos:", paquetes);

    return {
      props: {
        paquetes,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        paquetes: [], 
      },
    };
  }
}
