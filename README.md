# APP-ESTOQUE-API

## 📌 Sobre o Projeto
O **APP-ESTOQUE-API** é uma API desenvolvida para armazenar e gerenciar informações de produtos de tecnologia, como **equipamentos** (_desktop, mouse, monitor, notebook, etc._).  

## 🛠 Tecnologias Utilizadas
- **Node.js**  
- **Express**  
- **Sequelize**  
- **MySQL**  

## 🚀 Como Rodar o Projeto

1. **Clone o repositório**  
   ```sh
   git clone https://github.com/seu-usuario/app-estoque-api.git
   cd app-estoque-api
   ```


Instale as dependências

npm install

Configure o banco de dados

Crie um banco de dados MySQL

Configure o arquivo .env com as credenciais do banco

Execute a aplicação

npm run dev

🧪 Rodando os Testes

Para executar os testes de integração, use:

npm test

📂 Estrutura do Projeto

app-estoque-api/
│── src/
│   ├── api/            # Controladores da API
│   ├── model/          # Modelos do Sequelize
│   ├── routes/         # Rotas da aplicação
│   ├── service/        # Regras de negócio
│── test/               # Testes de integração
│── .env                # Variáveis de ambiente
│── index.js            # Ponto de entrada da aplicação
│── package.json        # Dependências e scripts
│── README.md           # Documentação

📜 Licença

Este projeto está sob a licença MIT.
