# Backend para API RESTful

Bem-vind(a) ao backend da minha aplicação, desenvolvido para suportar uma API RESTful utilizando Node.js com TypeScript. 

###
https://facilita-b001-deploy-render.onrender.com/tasks

---------------------------

# Documentação de Dependências - facilita-b001

Aqui está a lista de dependências utilizadas no projeto:

## Dependências de Produção

- **@types/cors:** ^2.8.17
  - Tipos de declaração para o pacote cors, fornecendo informações de tipagem para desenvolvimento em TypeScript.

- **cors:** ^2.8.5
  - Middleware para habilitar CORS (Cross-Origin Resource Sharing) em aplicativos Express.

- **express:** ^4.18.2
  - Framework web para Node.js, utilizado para construir APIs RESTful.

- **pg:** ^8.11.3
  - Driver para PostgreSQL, permitindo a conexão e a interação com bancos de dados PostgreSQL.

- **reflect-metadata:** ^0.2.1
  - Biblioteca para habilitar a reflexão de metadados em TypeScript, especialmente útil com o TypeORM.

- **typeorm:** ^0.3.19
  - ORM (Object-Relational Mapping) para TypeScript e JavaScript, facilitando a interação com bancos de dados relacionais.

## Dependências de Desenvolvimento

- **@types/express:** ^4.17.21
  - Tipos de declaração para o pacote express, oferecendo informações de tipagem para desenvolvimento em TypeScript.

- **@types/node:** ^20.10.6
  - Tipos de declaração para o ambiente Node.js, fornecendo informações de tipagem para desenvolvimento em TypeScript.

- **@types/uuid:** ^9.0.7
  - Tipos de declaração para o pacote uuid, oferecendo informações de tipagem para desenvolvimento em TypeScript.

- **ts-node-dev:** ^2.0.0
  - Ferramenta para desenvolvimento em TypeScript que reinicia automaticamente o servidor durante o desenvolvimento.

- **typescript:** ^5.3.3
  - Superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a segurança do desenvolvimento.

## Scripts

- **build:** Executa o transpilador TypeScript (tsc) para compilar o código TypeScript em JavaScript.

- **start:** Inicia o servidor a partir dos arquivos transpilados na pasta 'dist'.

- **dev:server:** Utiliza o ts-node-dev para iniciar o servidor em modo de desenvolvimento, reiniciando-o automaticamente em caso de alterações no código.

- **typeorm:** Utiliza o ts-node-dev para executar comandos relacionados ao TypeORM.

- **migrate:** Executa as migrações do TypeORM para aplicar alterações no banco de dados.

---------------------------

## Como Iniciar

Siga estes passos simples para começar a utilizar o backend:

```bash
# Clone o repositório:
git clone https://github.com/douglassouza-src/facilita-b001.git

# Acesse a pasta do projeto no terminal/cmd:
cd seu-backend

# Instale as dependências:
npm install

# Configure as variáveis de ambiente, se necessário:
# (exemplo: crie um arquivo .env com as configurações)

# Execute o servidor em modo de desenvolvimento:
npm run dev:server


# Para alterações, crie a pasta 'dist' para armazenar os arquivos transpilados:
mkdir dist
