☕ CoffeeTech - Sistema de Gestão de Clientes.

Este projeto é um sistema CRUD Completo (Create, Read, Update, Delete) desenvolvido em Node.js com MySQL. Ele serve como o painel administrativo da startup fictícia "CoffeeTech", permitindo o cadastro e gestão de clientes interessados.

🚀 Tecnologias Utilizadas

Backend: Node.js, Express

Banco de Dados: MySQL (biblioteca mysql2)

Frontend: HTML5, CSS3, Vanilla JavaScript

Arquitetura: MVC Simplificado (Separação de Rotas e Configuração)

🛠️ Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

Node.js (Versão 16 ou superior)

MySQL Server (Ou XAMPP/WAMP)

Um cliente MySQL (MySQL Workbench ou similar)

⚙️ Configuração e Instalação

1. Clone o Repositório

git clone [https://github.com/SEU-USUARIO/CoffeeTech.git](https://github.com/SEU-USUARIO/CoffeeTech.git)
cd CoffeeTech



2. Instale as Dependências

No terminal, dentro da pasta do projeto, execute:

npm install



3. Configuração do Banco de Dados (MySQL)

Abra o seu MySQL Workbench (ou terminal MySQL) e execute o seguinte script para criar o banco e a tabela necessária:

-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS coffeetech;
USE coffeetech;

-- Cria a tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- (Opcional) Insere um usuário de teste
INSERT INTO usuarios (nome, email) VALUES ('Admin Coffee', 'admin@coffeetech.com');



4. Configuração de Ambiente (.env)

Crie um arquivo chamado .env na raiz do projeto e configure com as suas credenciais do MySQL:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=SUA_SENHA_AQUI
DB_NAME=coffeetech



Nota: Se você usa XAMPP, a senha (DB_PASSWORD) geralmente é vazia.

▶️ Como Rodar

Inicie o servidor backend:

node server.js



Você deve ver a mensagem: 🚀 Servidor rodando em http://localhost:3000

Abra o navegador e acesse o Painel Administrativo:

URL: http://localhost:3000/admin.html

💻 Usando em Computadores Compartilhados (Escola/SENAI)

Se você estiver usando um computador da escola, siga estes passos para garantir que seus commits fiquem com seu nome e que você consiga enviar o código:

Configure sua Identidade (A cada aula):
Antes de fazer o primeiro commit, rode estes comandos no terminal do VS Code (dentro da pasta do projeto):

git config user.name "Seu Nome"
git config user.email "seu.email@exemplo.com"


Isso garante que o GitHub saiba que foi VOCÊ quem fez as alterações, e não o usuário anterior do computador.

Fazer o Commit e Enviar:
Após fazer suas alterações:

git add .
git commit -m "Mensagem do que você fez"
git push


Autenticação:
Ao rodar o git push, o VS Code pedirá para conectar ao GitHub. Escolha "Sign in with Browser" e autorize o acesso com sua conta logada no navegador.

Ao Sair:
Lembre-se de deslogar do GitHub no navegador e fechar o VS Code.

📂 Estrutura do Projeto

server.js: Ponto de entrada. Inicia o servidor e conecta os componentes.

db.js: Gerencia a conexão com o banco de dados MySQL.

routes.js: Contém todas as rotas da API (GET, POST, PUT, DELETE).

public/: Contém os arquivos do Frontend (HTML, CSS, JS do navegador).

.env: Guarda as senhas e configurações sensíveis (não comitado no Git).

📝 Funcionalidades (CRUD)

$$C$$ reate: Cadastrar novos usuários (Rota POST /usuarios).

$$R$$ ead: Listar todos os usuários na tabela (Rota GET /usuarios).

$$U$$ pdate: Editar nome e e-mail de um usuário existente (Rota PUT /usuarios/:id).

$$D$$ elete: Remover um usuário do sistema (Rota DELETE /usuarios/:id).

👨‍💻 Autor

Desenvolvido para fins educativos na aula de Desenvolvimento Backend.