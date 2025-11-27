const mysql = require('mysql2/promise');
require('dotenv').config(); // Correção Bug 8

const connectDB = async () => {
  try {
    // Correção Bug 9: Usando os nomes que estão no .env (DB_...)
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('🔌 MySQL Conectado com Sucesso!');
    return connection;

  } catch (error) {
    console.error('Erro ao conectar ao MySQL:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB; // Correção Bug 10