Meu Projeto Full-Stack
Este é um projeto full-stack com autenticação, desenvolvido com Node.js, Express, Prisma, MongoDB no backend e React, TypeScript, Tailwind CSS no frontend. O projeto inclui páginas de Login, Cadastro e Home (protegida por autenticação com JWT).
Tecnologias Utilizadas
Backend

Node.js: Ambiente de execução JavaScript.
Express: Framework para construção de APIs REST.
Prisma: ORM para interação com o banco MongoDB.
MongoDB Atlas: Banco de dados NoSQL na nuvem.
TypeScript: Superset do JavaScript para tipagem estática.
jsonwebtoken: Autenticação com tokens JWT.
bcryptjs: Hashing de senhas.
dotenv: Gerenciamento de variáveis de ambiente.
cors: Suporte a requisições cross-origin.

Frontend

React: Biblioteca para construção de interfaces.
TypeScript: Tipagem estática para o frontend.
React Router: Navegação entre páginas.
Axios: Chamadas HTTP para a API.
jwt-decode: Decodificação de tokens JWT.
Tailwind CSS: Estilização via CDN.

Estrutura do Projeto
meu-projeto-fullstack/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
│   │   ├── controllers/
│   │   │   └── authController.ts
│   │   ├── lib/
│   │   │   └── prisma.ts
│   │   ├── middlewares/
│   │   │   └── authMiddleware.ts
│   │   ├── models/
│   │   │   └── User.ts
│   │   ├── routes/
│   │   │   └── authRoutes.ts
│   │   └── index.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── Home.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
└── README.md

npm install express prisma @prisma/client bcryptjs jsonwebtoken dotenv cors

npm install --save-dev typescript @types/node @types/express @types/bcryptjs @types/jsonwebtoken @types/cors ts-node-dev

npm install axios react-router-dom jwt-decode