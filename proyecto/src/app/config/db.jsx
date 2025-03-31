import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "Fotografia"
});

/*
    Realiza una prueba de conexion al iniciar la aplicación.
    Obtiene una conexión del pool para verificar que la base de datos está disponible.
*/

db.getConnection().then(connection => {
    console.log("Conexión a la base de datos exitosa.");
    connection.release();
}).catch(error => {
    console.error("Error al conectar con la base de datos:", error);
});

export default db;

