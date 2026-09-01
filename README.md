# Blog Pessoal — Frontend (React + TypeScript)

Frontend do projeto **Blog Pessoal**, consumindo a [API REST em Java/Spring Boot](https://github.com/guitxc/blog_pessoal) que gerencia usuários, temas e postagens. Este repositório contém a interface web construída em React com TypeScript.

🔗 **Aplicação em produção:** https://blogpessoal-react-zeta-seven.vercel.app
🔗 **API (backend):** https://blogpessoal-83dh.onrender.com/swagger-ui/index.html

## Sobre o projeto

O Blog Pessoal é uma aplicação fullstack de gerenciamento de conteúdo. Este repositório é a camada de frontend, responsável por consumir a API REST do backend (Spring Boot) e oferecer uma interface para o usuário se autenticar e gerenciar seus posts e temas.

## Funcionalidades

- **Autenticação:** tela de login e cadastro de usuário, com token JWT retornado pela API e utilizado nas requisições autenticadas
- **CRUD de Postagens:** criar, listar, editar e excluir postagens
- **Gerenciamento de Temas:** criar, listar, editar e excluir temas usados para categorizar as postagens
- **Integração completa com o backend:** todas as operações são refletidas na API Java/Spring Boot em tempo real

## Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool e dev server
- [Tailwind CSS](https://tailwindcss.com/) — estilização
- [Axios](https://axios-http.com/) — requisições HTTP para a API
- [React Router](https://reactrouter.com/) — navegação entre páginas

## Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm ou yarn
- A [API do Blog Pessoal](https://github.com/guitxc/blog_pessoal) rodando localmente ou acesso à instância em produção

### Passo a passo

```bash
# Clone este repositório
git clone https://github.com/guitxc/blogpessoal_react.git

# Acesse a pasta do projeto
cd blogpessoal_react

# Instale as dependências
npm install

# Configure a variável de ambiente com a URL da API
# Crie um arquivo .env na raiz do projeto com:
# VITE_API_URL=http://localhost:8080

# Rode o projeto em modo de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (porta padrão do Vite).

### Build para produção

```bash
npm run build
```

## Projeto relacionado (Backend)

Este frontend consome a API REST desenvolvida em Java com Spring Boot. Confira o repositório do backend aqui:
👉 [github.com/guitxc/blog_pessoal](https://github.com/guitxc/blog_pessoal)

## Autor

**Guilherme Sandoli**
[LinkedIn](https://www.linkedin.com/in/guisandoli/) | [GitHub](https://github.com/guitxc)
