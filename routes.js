const express = require('express');
const router = express.Router();

// Exportamos uma FUNÇÃO que recebe a conexão do banco
module.exports = (connection) => {

  // --- ROTA GET ---
  router.get('/usuarios', async (req, res) => {
    const [rows] = await connection.query('SELECT * FROM usuarios');
    res.json(rows);
  });

  // --- ROTA POST ---
  router.post('/usuarios', async (req, res) => {
    const { nome, email } = req.body;
    await connection.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email]);
    res.status(201).send('Criado!');
  });

  // --- ROTA DELETE ---
  router.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    await connection.query('DELETE FROM usuarios WHERE id = ?', [id]);
    res.send('Apagado!');
  });

  // --- ROTA PUT ---
  router.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    await connection.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
    res.send('Atualizado!');
  });

  return router;
};