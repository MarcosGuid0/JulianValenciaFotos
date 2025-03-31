export default function handler(req, res) {
  const paquetes = [
    {
      id: 1,
      imageSrc: "/images/imagen1.jpg",
      altText: "imagen1",
      title: "Paquete Boda Básico",
      description:
        "Este paquete está diseñado para capturar los momentos esenciales de tu boda. Incluye una cobertura de 4 horas de fotografía, ideal para las ceremonias más íntimas.",
      price: "$70.00",
    },
    {
      id: 2,
      imageSrc: "/images/imagen2.jpg",
      altText: "imagen2",
      title: "Paquete Boda Oro",
      description:
        "Con una cobertura de 6 horas, el Paquete Boda Oro permite capturar tanto la ceremonia como parte de la recepción. Incluye fotografías en alta resolución entregadas en un álbum físico y una galería digital exclusiva para compartir con amigos y familiares.",
      price: "$100.00",
    },
    {
      id: 3,
      imageSrc: "/images/imagen3.jpg",
      altText: "imagen3",
      title: "Paquete Boda Platino",
      description:
        "El Paquete Boda Platino ofrece una cobertura de hasta 8 horas, incluyendo desde los preparativos hasta la recepción. Recibirás un álbum premium de fotos impresas y una galería digital personalizable.",
      price: "$150.00",
    },
    {
      id: 4,
      imageSrc: "/images/imagen4.jpg",
      altText: "imagen4",
      title: "Paquete Boda Diamante",
      description:
        "Nuestro paquete más exclusivo, con una cobertura total de hasta 12 horas para capturar cada detalle de tu boda. Incluye un álbum de lujo, galería digital, y una sesión pre-boda y post-boda.",
      price: "$200.00",
    },
    {
      id: 5,
      imageSrc: "/images/imagen5.jpg",
      altText: "imagen5",
      title: "Paquete Graduación Clásico",
      description:
        "Este paquete está pensado para capturar la ceremonia de graduación en su momento más importante. Incluye 1 hora de cobertura y un set de fotos entregadas en formato digital.",
      price: "$150.00",
    },
    {
      id: 6,
      imageSrc: "/images/imagen6.jpg",
      altText: "imagen6",
      title: "Paquete Graduación Oro",
      description:
        "Con una cobertura de hasta 3 horas, el Paquete Graduación Oro permite capturar tanto la ceremonia como momentos con familiares y amigos. Recibirás un álbum de fotos físicas y una galería digital.",
      price: "$160.00",
    },
    {
      id: 7,
      imageSrc: "/images/imagen7.jpg",
      altText: "imagen7",
      title: "Paquete Graduación Platino",
      description:
        "Este paquete incluye una cobertura completa de 5 horas, permitiendo capturar cada momento de la ceremonia, la celebración y una sesión fotográfica personalizada.",
      price: "$180.00",
    },
    {
      id: 8,
      imageSrc: "/images/imagen8.jpg",
      altText: "imagen8",
      title: "Fotografía Individual B/N",
      description:
        "Perfecto para quienes buscan un retrato clásico y atemporal. Esta sesión individual en blanco y negro resalta la esencia y los rasgos de la persona, capturando emociones profundas.",
      price: "$20.00",
    },
    {
      id: 9,
      imageSrc: "/images/imagen9.jpg",
      altText: "imagen9",
      title: "Fotografía Individual a Color",
      description:
        "Captura la naturalidad y la vivacidad de cada persona en un retrato a color que resalta cada detalle. Esta sesión individual es ideal para quienes desean un recuerdo vibrante y lleno de vida.",
      price: "$50.00",
    },
    {
      id: 10,
      imageSrc: "/images/imagen10.jpg",
      altText: "imagen10",
      title: "Fotografía Individual Editada",
      description:
        "Esta opción ofrece una sesión de retrato individual con edición profesional, mejorando la imagen con un toque artístico.",
      price: "$80.00",
    },
  ];

  res.status(200).json(paquetes);
}
