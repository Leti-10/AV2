# 🛩️ Aeronaves GUI - AV2

<div align="center">
<img src="docs/Banner aerocode.png" alt="Banner Aeronaves GUI" align="center" width="auto">

## Aeronaves GUI
</div>

<p align = "center">
  <a href = "#sobre"> Sobre </a>  |  
  <a href = "#tecnologias"> Tecnologias </a>  | 
  <a href = "#prototipo"> Protótipo </a> |
  <a href = "#funcionalidades"> Funcionalidades </a>  |
  <a href = "#executar"> Instalação </a>
</p>

> **Status do projeto:** Concluído ✅

---

## 📃 Sobre
<a id="sobre"></a>
O **Aeronaves GUI** é um sistema web desenvolvido em **React + TypeScript + Vite**, com o objetivo de **gerenciar aeronaves, peças e relatórios de produção** em uma interface gráfica moderna e intuitiva.  

O sistema apresenta **dashboard com gráficos interativos**, exibição de **estatísticas de produção e desempenho**, além de **integração visual consistente** com um layout responsivo.

---

## ⚙️ Tecnologias
<a id="tecnologias"></a>

<div align="left">
  <img src="https://go-skill-icons.vercel.app/api/icons?i=react,typescript,vite,css,html,git,github,vscode,recharts" />
</div>

---

## 📸 Protótipo / Interface
<a id="prototipo"></a>

<div align="center">
<table>
  <tr>
    <th><img src="docs/Captura de tela 2025-11-03 221145.png" alt="Dashboard"></th>
    <th><img src="docs/aerocode 3.png" alt="Gerenciamento de Peças"></th>
    <th><img src="docs/aerocode 2.png" alt="Modal de Cadastro"></th>
    <th><img src="docs/aerocode 1.png" alt="Modal de Cadastro"></th>
    
  </tr>
  <tr>
    <td align="center">Dashboard</td>
    <td align="center">Cadastro de Aeronaves</td>
    <td align="center">Kanban Testes</td>
    <td align="center">Gestão de funcionários</td>
  </tr>
</table>
</div>

---

## 💻 Funcionalidades
<a id="funcionalidades"></a>

- 📊 **Dashboard interativo** com gráficos de barras, pizza e linha
- 🧩 **Gerenciamento de Peças e Aeronaves**
- 📅 **Visualização de dados de produção**
- 📈 **Indicadores de desempenho**
- 🧠 **Design responsivo e dinâmico**
- 🪄 **Componentização do layout** (Header, Sidebar e Main)
- 💾 **Arquitetura limpa e organizada com pastas separadas**

---
## 🌳 Estrutura do Projeto

Aqui está a arquitetura de pastas principal do projeto:

```
src/
├── assets/
├── components/
├── pages/
├── routes/
├── styles/
├── App.tsx
└── main.tsx
```
---

## 🛠️ Instalação e Execução
<a id="executar"></a>

Siga estas etapas para executar o protótipo em sua máquina local.

### Requisitos
* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* npm (geralmente instalado com o Node.js)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_AQUI]
    cd [NOME_DA_SUA_PASTA_AQUI]
    ```

2.  **Instale as dependências:**
    (Este comando irá instalar o `react-router-dom`, `react-icons`, etc.)
    ```bash
    npm install
    ```

3.  **Execute o projeto:**
    (Este comando inicia o servidor de desenvolvimento do Vite.)
    ```bash
    npm run dev
    ```

4.  Abra `http://localhost:5173` (ou a porta indicada no seu terminal) no seu navegador.

### 🔑 Credenciais de Acesso

Como este é um protótipo "front-end only" (sem back-end), o login é **simulado**.

Use as seguintes credenciais para acessar o dashboard:

* **Usuário:** `admin`
* **Senha:** `admin`

*(Qualquer outra combinação de login também funcionará, e entrará como admin)*
