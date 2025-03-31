// components/fotos.jsx
import Link from "next/link";

const Fotos = ({ id, imageSrc, altText, title, description, price }) => {
  return (
    <div className="Fotos">
      <Link href={`/ventanas/detalles/${id}`}>
        <img className="imagenes" src={imageSrc} alt={altText} />
      </Link>
      <h2 className="titulos_fotos">{title}</h2>
      <p className="descripcion_fotos">{description}</p>
      <p className="precio_fotos">{price}</p>
    </div>
  );
};

export default Fotos;
