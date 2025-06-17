# Sistema de Gerenciamento de Tarefas

## Descrição
Sistema web para gerenciamento de tarefas em formato Kanban, desenvolvido para uma indústria do ramo alimentício. O sistema permite o cadastro de usuários e tarefas, além do gerenciamento visual das tarefas em três colunas: "A Fazer", "Fazendo" e "Pronto".

## Tecnologias Utilizadas

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **MySQL2** - Driver MySQL para Node.js
- **CORS** - Habilitação de CORS para integração frontend/backend

### Frontend
- **HTML5** - Estrutura da página
- **CSS3** - Estilização
- **JavaScript (Puro)** - Lógica de interação e consumo da API

## Estrutura do Projeto

```
gerenciamento-tarefas/
├── api/
│   └── server/
│       ├── db.js                  # Configuração e inicialização do banco de dados MySQL
│       ├── routes/                # Rotas da API
│       │   ├── usuarios.js        # Rotas para usuários
│       │   └── tarefas.js         # Rotas para tarefas
│       ├── server.js              # Arquivo principal do servidor Node.js
│       └── package.json           # Dependências Node.js
├── web/
│   └── index.html                 # Frontend completo (HTML, CSS, JavaScript puro)
└── docs/
    ├── database_mysql.sql         # Script de criação do banco (MySQL)
    ├── diagrama_entidade_relacionamento.png
    └── diagrama_casos_uso.png
```

## Funcionalidades

### 1. Cadastro de Usuários
- Formulário com campos: Nome e Email
- Validação de email
- Mensagem de confirmação de cadastro
- Verificação de email único

### 2. Cadastro de Tarefas
- Formulário com campos:
  - Descrição da tarefa
  - Setor
  - Usuário (seleção a partir dos usuários cadastrados)
  - Prioridade (Baixa, Média, Alta)
- Status padrão: "A Fazer"
- Data de cadastro automática

### 3. Gerenciamento de Tarefas (Kanban)
- Visualização em três colunas: "A Fazer", "Fazendo", "Pronto"
- Cada tarefa exibe:
  - Descrição
  - Setor
  - Prioridade (com cores diferenciadas)
  - Usuário vinculado
- Funcionalidades por tarefa:
  - Editar tarefa (alerta de funcionalidade futura)
  - Excluir tarefa (com confirmação)
  - Alterar status via dropdown

## Instalação e Configuração

### Pré-requisitos
- Node.js 14+ (ou versão LTS recomendada)
- MySQL Server (XAMPP, WAMP, MAMP ou instalação avulsa)

### 1. Configuração do Banco de Dados MySQL

1. **Crie um banco de dados** chamado `gerenciamento_tarefas` no seu servidor MySQL (ex: via phpMyAdmin).
2. **Importe o script SQL** `docs/database_mysql.sql` para este banco de dados. Ele criará as tabelas `usuarios` e `tarefas` e inserirá dados de exemplo.

### 2. Configuração do Backend (API Node.js)

1. **Navegue para o diretório do backend**:
   ```bash
   cd api/server
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor backend**:
   ```bash
   npm start
   ```
   O backend estará disponível em: `http://localhost:5000`

### 3. Configuração do Frontend (HTML/CSS/JavaScript Puro)

1. **Abra o arquivo `web/index.html`** diretamente no seu navegador web preferido.
   Alternativamente, você pode usar uma extensão de "Live Server" no VSCode para servi-lo.

### 4. Testando o Sistema

1. **Certifique-se de que o backend está rodando** (passo 2.3 acima).
2. **Abra o `web/index.html`** no seu navegador.
3. **Cadastre usuários** clicando em "Cadastro de Usuários" e preenchendo o formulário.
4. **Cadastre tarefas** clicando em "Cadastro de Tarefas" e preenchendo o formulário.
5. **Gerencie tarefas** na tela principal (Kanban).
6. **Teste as funcionalidades**:
   - Alterar status das tarefas
   - Excluir tarefas

## APIs Disponíveis

### Base URL
```
http://localhost:5000/api
```

#### Usuários
- `GET /usuarios` - Listar usuários
- `POST /usuarios` - Cadastrar usuário
- `GET /usuarios/{id}` - Obter usuário específico

#### Tarefas
- `GET /tarefas` - Listar tarefas
- `POST /tarefas` - Cadastrar tarefa
- `GET /tarefas/{id}` - Obter tarefa específica
- `PUT /tarefas/{id}` - Atualizar tarefa
- `DELETE /tarefas/{id}` - Excluir tarefa

## Especificações de Design

- **Fonte**: Arial, sans-serif
- **Cores**:
  - Azul principal: #0056b3 (RGB: 0, 86, 179)
  - Branco: #FFFFFF (RGB: 255, 255, 255)
  - Preto: #000000 (RGB: 0, 0, 0)

## Banco de Dados

### Tabela: usuarios
- `id` (INT AUTO_INCREMENT PRIMARY KEY)
- `nome` (VARCHAR(255) NOT NULL)
- `email` (VARCHAR(255) NOT NULL UNIQUE)

### Tabela: tarefas
- `id_tarefa` (INT AUTO_INCREMENT PRIMARY KEY)
- `id_usuario` (INT NOT NULL, FOREIGN KEY)
- `descricao_tarefa` (TEXT NOT NULL)
- `nome_setor` (VARCHAR(255) NOT NULL)
- `prioridade` (VARCHAR(50) NOT NULL) - (`baixa`, `média`, `alta`)
- `data_cadastro` (DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)
- `status` (VARCHAR(50) NOT NULL) - (`a fazer`, `fazendo`, `pronto`)

## Observações

- O sistema utiliza MySQL como banco de dados.
- O backend possui CORS habilitado para permitir requisições do frontend.
- Todas as validações são realizadas tanto no frontend quanto no backend.
- O sistema é responsivo e funciona em dispositivos móveis e desktop.

## Autor

- Passberg


