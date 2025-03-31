CREACION DE LA BASE DE DATOS PARA JULIANVALENCIAFOTOS
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS PaquetesFotografia;
USE PaquetesFotografia;

-- Crear la tabla Paquetes
CREATE TABLE Paquetes (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- Identificador único
    rutaImagen VARCHAR(255) NOT NULL,           -- Ruta de la imagen
    textoAlternativo VARCHAR(255),              -- Texto alternativo para la imagen
    titulo VARCHAR(255) NOT NULL,               -- Título del paquete
    descripcion TEXT,                           -- Descripción del paquete
    precio DECIMAL(10, 2) NOT NULL              -- Precio del paquete
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- ID único para cada usuario
    correo_electronico VARCHAR(255) NOT NULL UNIQUE,         -- Correo electrónico único
    contrasena VARCHAR(255) NOT NULL,             -- Contraseña cifrada
    nombre_completo VARCHAR(255),                     -- Nombre completo del usuario
    rol VARCHAR(50) DEFAULT 'cliente',          -- Campo para el rol, por defecto 'cliente'
    esta_activo BOOLEAN DEFAULT TRUE,             -- Indica si la cuenta está activa (por defecto está activa)
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha y hora de creación
    actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Fecha y hora de la última actualización
);

INSERT INTO usuarios (correo_electronico, contrasena, nombre_completo, rol)
VALUES ('administrador@gmail.com', 'admin123', 'Usuario Administrador', 'administrador');

-- Insertar los datos en la tabla Paquetes
INSERT INTO Paquetes (rutaImagen, textoAlternativo, titulo, descripcion, precio) VALUES
('/images/imagen1.jpg', 'imagen1', 'Paquete Boda Básico', 
 'Este paquete está diseñado para capturar los momentos esenciales de tu boda. Incluye una cobertura de 4 horas de fotografía, ideal para las ceremonias más íntimas.', 
 70.00),
('/images/imagen2.jpg', 'imagen2', 'Paquete Boda Oro', 
 'Con una cobertura de 6 horas, el Paquete Boda Oro permite capturar tanto la ceremonia como parte de la recepción. Incluye fotografías en alta resolución entregadas en un álbum físico y una galería digital exclusiva para compartir con amigos y familiares.', 
 100.00),
('/images/imagen3.jpg', 'imagen3', 'Paquete Boda Platino', 
 'El Paquete Boda Platino ofrece una cobertura de hasta 8 horas, incluyendo desde los preparativos hasta la recepción. Recibirás un álbum premium de fotos impresas y una galería digital personalizable.', 
 150.00),
('/images/imagen4.jpg', 'imagen4', 'Paquete Boda Diamante', 
 'Nuestro paquete más exclusivo, con una cobertura total de hasta 12 horas para capturar cada detalle de tu boda. Incluye un álbum de lujo, galería digital, y una sesión pre-boda y post-boda.', 
 200.00),
('/images/imagen5.jpg', 'imagen5', 'Paquete Graduación Clásico', 
 'Este paquete está pensado para capturar la ceremonia de graduación en su momento más importante. Incluye 1 hora de cobertura y un set de fotos entregadas en formato digital.', 
 150.00),
('/images/imagen6.jpg', 'imagen6', 'Paquete Graduación Oro', 
 'Con una cobertura de hasta 3 horas, el Paquete Graduación Oro permite capturar tanto la ceremonia como momentos con familiares y amigos. Recibirás un álbum de fotos físicas y una galería digital.', 
 160.00),
('/images/imagen7.jpg', 'imagen7', 'Paquete Graduación Platino', 
 'Este paquete incluye una cobertura completa de 5 horas, permitiendo capturar cada momento de la ceremonia, la celebración y una sesión fotográfica personalizada.', 
 180.00),
('/images/imagen8.jpg', 'imagen8', 'Fotografía Individual B/N', 
 'Perfecto para quienes buscan un retrato clásico y atemporal. Esta sesión individual en blanco y negro resalta la esencia y los rasgos de la persona, capturando emociones profundas.', 
 20.00),
('/images/imagen9.jpg', 'imagen9', 'Fotografía Individual a Color', 
 'Captura la naturalidad y la vivacidad de cada persona en un retrato a color que resalta cada detalle. Esta sesión individual es ideal para quienes desean un recuerdo vibrante y lleno de vida.', 
 50.00),
('/images/imagen10.jpg', 'imagen10', 'Fotografía Individual Editada', 
 'Esta opción ofrece una sesión de retrato individual con edición profesional, mejorando la imagen con un toque artístico.', 
 80.00);

select * from usuarios;
