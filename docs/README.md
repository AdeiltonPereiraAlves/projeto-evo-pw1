# EVO - Conectando ONGs e Voluntários 🌍

Bem-vindo ao **EVO**, uma plataforma inovadora projetada para conectar ONGs com voluntários dispostos a fazer a diferença no mundo. Utilizando a arquitetura hexagonal, EVO proporciona uma estrutura robusta e flexível para atender às necessidades de ONGs e voluntários de forma eficiente e escalável.

## 🎯 Objetivo

O EVO tem como missão facilitar o encontro entre ONGs e voluntários, promovendo um ambiente colaborativo para iniciativas sociais. O sistema permite que as ONGs publiquem vagas e que voluntários encontrem oportunidades alinhadas com suas habilidades e interesses.

## 🏛️ Arquitetura

O EVO é desenvolvido seguindo a **Arquitetura Hexagonal (Ports and Adapters)**, que promove:

- **Independência de tecnologias**: Módulos podem ser substituídos ou atualizados sem impactar diretamente o sistema.
- **Facilidade de teste**: Componentes bem isolados tornam os testes unitários e de integração mais simples.
- **Escalabilidade**: Suporte para adicionar novas funcionalidades sem comprometer a estrutura existente.

<img src="./img/www.png" alt="Descrição da imagem" width="300" />
  

### Componentes principais da arquitetura:

1. **Domínio**: Regras de negócio e lógica central.
2. **Aplicação**: Serviços que orquestram o domínio.
3. **Adaptações**: Integrações externas (exemplo: bancos de dados, APIs).
4. **Portas**: Interfaces que permitem comunicação entre os módulos.

---

## 🚀 Tecnologias Utilizadas

- **Backend**: TypeScript, Node.js, Prisma, Express.js
- **Banco de Dados**: PostgreSQL .
- **Frontend**: React, Next.js
- **Testes**: Jest
- **Controle de Versão**: Git e GitHub

---

## ⚙️ Funcionalidades

- Cadastro de ONGs e Voluntários
- Publicação e gerenciamento de vagas por ONGs
- Busca de vagas por área de atuação, localização e tipo de trabalho
- Inscrição de voluntários em vagas
- Avaliação de ONGs e voluntários após o término de uma vaga
- Mapa interativo para localização de vagas

---
## Desenvolvedores
[![GitHub](https://img.shields.io/badge/GitHub-AdeiltonPereiraAlves-black?logo=github)](https://github.com/AdeiltonPereiraAlves)

<img src="https://avatars.githubusercontent.com/u/70703098?s=400&u=4394e7f5649e3a899017b3b6532486bc2ac95e44&v=4)" width="150" style="border-radius:50%;" alt="Minha Foto">

### Adeilton Pereira Alves
## Desenvolvedor FullStack
- 💻 Estudante de Análise e Desenvolvimento de Sistemas
- 🚀 Focado em **Node.js**, **React**, **Next.js**, **TypeScript** , **Prisma**, **Express**
- 📚 Interessado em arquitetura hexagonal 

### 📫 Como me encontrar:
- 🌐 [Perfil no GitHub](https://github.com/AdeiltonPereiraAlves)
- 📧 Email: adeutoo@gmail.com


## 🌐 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL
- Docker (opcional para desenvolvimento)

### Passos

1. Clone este repositório:
   ```bash
   git clone https://github.com/AdeiltonPereiraAlves/projeto-evo-pw1
   cd projeto-evo-pw1
   npm install
   Crie um banco de dados PostgreSQL.
---
- Configure o arquivo .env:
- DATABASE_URL=postgresql://usuario:senha@localhost:5432/evo
- Execute as migrações do banco de dados: npx prisma migrate dev
- npm run dev

---
