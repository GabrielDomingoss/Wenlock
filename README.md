# 📌 Teste Técnico – Wenlock

## 📖 Sobre o Projeto

A aplicação contém:

- Listagem de usuários com paginação
- Busca com debounce
- Criação de usuário
- Edição de usuário
- Exclusão de usuário
- Estados de loading e empty state

---

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- React Hook Form
- Zod
- Material UI (MUI)
- Axios
- React Router DOM

---

## 🧠 Arquitetura e Organização

O projeto foi estruturado da seguinte forma:

```
src/
├── assets/
│
├── components/
│ ├── table/
│ ├── pagination/
│
├── hooks/
│ ├── common/
│ ├── users/
│
├── layout/
│
├── models/
│
├── pages/
│ ├── home/
│ ├── user/
│ │ ├── user-create/
│ │ ├── user-edit/
│ │ ├── user-list/
│ │ ├── user-read/
│
├── schemas/
│
├── services/
│
└── styles/
```

## ▶️ Como Rodar o Projeto

### 1 - Clonar o repositório

```
git clone https://github.com/GabrielDomingoss/Wenlock.git
```

### 2 - Instalar dependências

```
npm install
```

### 3 - Executar o JSON Server

```
npm run mock
```

### 4 - Executar o app

```
npm run dev
```