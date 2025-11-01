# 🌳 JSON Tree Viewer

Um visualizador interativo de JSON construído com **React**, projetado para facilitar a leitura e exploração de estruturas JSON de forma simples e elegante.

Permite inserir um JSON manualmente, visualizar em formato de árvore e expandir automaticamente os nós para uma inspeção mais rápida.

---

## 🚀 Demonstração

> 💡 Cole ou digite um JSON no campo de texto e clique em **"Visualizar"** para gerar a árvore.

![Preview do app](https://tree-node-xi.vercel.app/)

---

## 🧠 Funcionalidades

- ✍️ Inserção manual de JSON em uma área de texto  
- 🌲 Visualização hierárquica (em árvore) dos dados  
- ⚡ Expansão automática de todos os nós ao visualizar  
- ❌ Mensagens claras para JSON inválido  
- 🎨 Tema escuro moderno e responsivo  
- 💾 (Opcional) Salvamento do último JSON no `localStorage`

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|-------------|-----|
| ⚛️ **React** | Base da aplicação |
| 💅 **CSS Puro** | Estilização leve e responsiva |
| 🧩 **Hooks (useState, useEffect)** | Gerenciamento de estado e interação |
| 📂 **Componentização** | Estrutura simples e modular (`App` + `TreeView`) |

---

## 📦 Instalação e Execução

```bash
# 1️⃣ Clone este repositório
git clone https://github.com/Miqueias92/tree-node.git

# 2️⃣ Acesse o diretório
cd tree-node

# 3️⃣ Instale as dependências
npm install

# 4️⃣ Rode o app em modo de desenvolvimento
npm start

# 5️⃣ Acesse no navegador
http://localhost:3000
