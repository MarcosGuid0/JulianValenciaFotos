import { useRouter } from "next/router";
import Nav from "@/components/nav";

const Detalles = ({ paquete }) => {
  const router = useRouter();

  if (!paquete) {
    return <div>Paquete no encontrado</div>;
  }

  const agregarAlCarrito = () => {
    alert(`${paquete.title} ha sido agregado al carrito`);
  };

  return (
    <div style={styles.contenedor}>
      <Nav />
      <h1 style={styles.titulo}>{paquete.title}</h1>
      <div style={styles.imagenContainer}>
        <img style={styles.imagen} src={paquete.imageSrc} alt={paquete.title} />
      </div>
      <p style={styles.descripcion}>{paquete.description}</p>
      <p style={styles.precio}>Precio: {paquete.price}</p>
      <button style={styles.boton} onClick={agregarAlCarrito}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`http://localhost:3000/api/paquetes`);
    const paquetes = await res.json();
    const paquete = paquetes.find((p) => p.id === parseInt(id)) || null;

    return { props: { paquete } };
  } catch (error) {
    console.error("Error al obtener el paquete:", error);
    return { props: { paquete: null } };
  }
}

const styles = {
  contenedor: {
    padding: "20px",
    marginTop: "100px",
    textAlign: "center",
  },
  titulo: {
    fontSize: "36px",
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    marginBottom: "20px",
  },
  imagenContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  imagen: {
    width: "300px",
    height: "auto",
    transition: "transform 0.3s ease",
  },
  descripcion: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  precio: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  boton: {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#0070f3",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Detalles;
