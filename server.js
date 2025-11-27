const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let connection = null;

const startServer = async () => {
  try {
    connection = await connectDB();
    
    // --- IMPORTAÇÃO DAS ROTAS ---
    // Chamamos o arquivo routes.js e passamos a conexão para ele
    const minhasRotas = require('./routes')(connection);
    
    // Dizemos ao app para usar essas rotas
    app.use(minhasRotas);

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
    
  } catch (error) {
    console.error('Falha ao iniciar:', error);
  }
};

startServer();