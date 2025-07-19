# 🎮 API de Gerenciamento de Jogos

Uma API RESTful construída com **Node.js**, **Express** e **TypeScript** que permite **criar, listar, editar e excluir jogos** armazenados em um banco de dados SQLite. O projeto adota práticas modernas como validação com **Zod**, **Inversão de Dependência**, uso de **Singletons**, **Prisma ORM**, e uma estrutura organizada por responsabilidade (controllers, use-cases, services, types).

---

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**
- **[Express](https://expressjs.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Zod](https://zod.dev/)** (validação de dados)
- **[Prisma ORM](https://www.prisma.io/)** com **SQLite**
- **[Nodemon](https://nodemon.io/)** (ambiente de desenvolvimento)
- Arquitetura com:
  - **Controllers**
  - **Use Cases**
  - **Services**
  - **DTOs e Schemas**
  - **Singletons**
  - **Inversão de dependência**

---

## 📂 Estrutura de Pastas

src/
│
├── domain/
│ └── use-cases/ # Lógica de negócios (casos de uso)
│
├── http/
│ ├── controllers/ # Camada de entrada (controllers Express)
│ └── routes/ # Definição das rotas da aplicação
│
├── services/ # Serviços utilitários e instâncias
│
├── types/ # Interfaces e schemas Zod
│
└── server.ts # Ponto de entrada da aplicação


---

## 📋 Funcionalidades

- ✅ Criar um novo jogo
- ✅ Listar todos os jogos
- ✅ Buscar um jogo por ID
- ✅ Editar um jogo existente
- ✅ Deletar um jogo
- ✅ Registrar logs para cada operação no banco
- ✅ Validação de payloads com **Zod**
- ✅ Logs persistidos com:
  ```ts
  {
    id: number,
    idjogo: number | null,
    acao: "criacao" | "edicao" | "listagem" | "obtencao" | "exclusao",
    data: Date
  }

🧪 Requisições da API
Método	Rota	Ação
GET	/api/jogo	Listar todos os jogos
GET	/api/jogo/:id	Obter jogo por ID
POST	/api/jogo	Criar novo jogo
PUT	/api/jogo	Editar um jogo existente
DELETE	/api/jogo/:id	Deletar um jogo por ID

🛠️ Como rodar o projeto
Clone o repositório:

bash
Copy
Edit
git clone https://github.com/AlexandreAraujo01/Express-ts-crud.git
cd SEU_REPOSITORIO
Instale as dependências:

bash
Copy
Edit
npm install
Configure o banco SQLite com Prisma:

bash
Copy
Edit
npx prisma migrate dev --name init
Inicie o servidor:

bash
Copy
Edit
npm run start:dev
📬 Importar no Postman
O projeto inclui uma coleção de rotas do Postman:

bash
Copy
Edit
/postman/jogos-api.postman_collection.json
Basta importar no Postman para testar as requisições.

✅ Boas práticas adotadas
Organização em camadas (separação de responsabilidades)

Inversão de dependência com getInstance()

Uso de DTOs com Zod para validação robusta

Criação de logs para cada operação

Tipagem forte com TypeScript

Código limpo e modular

🧠 Autor
Desenvolvido por Alexandre Araújo

"From the river to the sea, Palestine will be free."
