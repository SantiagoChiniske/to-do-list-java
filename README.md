# ✅ TO-DO LIST API | Back-End

Projeto desenvolvido com **Java + Spring Boot** com o objetivo de praticar conceitos fundamentais do desenvolvimento de APIs REST, organização de código e boas práticas de programação.

## 📚 Objetivo

Este projeto foi criado para consolidar conhecimentos em desenvolvimento backend utilizando **Java** e **Spring Boot**, aplicando conceitos como:

- Criação de APIs REST;
- Injeção de Dependência;
- Controllers e Services;
- Manipulação de requisições HTTP;
- Organização em camadas;
- Tratamento de exceções;
- Validações;
- Persistência de dados;
- Boas práticas de desenvolvimento.

---

## 🚀 Tecnologias Utilizadas

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Maven
- Lombok
- Banco de Dados (H2/MySQL)
- Jakarta Validation

---

## 📂 Estrutura do Projeto

```text
src
└── main
    ├── java
    │   └── com.todolist.project
    │       ├── controller
    │       ├── service
    │       ├── repository
    │       ├── model
    │       ├── exception
    └── resources
        ├── application.yml
```

---

## ⚙️ Funcionalidades

- ✅ Criar tarefas
- ✅ Listar todas as tarefas
- ✅ Buscar tarefa por ID
- ✅ Atualizar tarefas
- ✅ Remover tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Validação de dados
- ✅ Tratamento de exceções
- ✅ Retorno padronizado para a API

---

## 📌 Endpoints

| Método | Endpoint | Descrição |
|----------|----------|------------|
| `POST` | `/tasks` | Criar uma nova tarefa |
| `GET` | `/tasks` | Listar todas as tarefas |
| `GET` | `/tasks/{id}` | Buscar tarefa por ID |
| `PUT` | `/tasks/{id}` | Atualizar uma tarefa |
| `DELETE` | `/tasks/{id}` | Excluir uma tarefa |

---

## 📥 Exemplo de Requisição

### Criar uma tarefa

**POST** `/tasks`

```json
{
  "titulo":"Novo Projeto 2",
  "descricao": "Informacao sobre o projeto 1" ,
  "responsavel":"Santiago Chiniske"
}
```

### Resposta

```json
{
  "descricao": "Informacao sobre o projeto 1",
  "id": 1,
  "responsavel": "Santiago Chiniske",
  "titulo": "Novo Projeto 2"
}
```

---

## 🛠 Como Executar o Projeto

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/todo-list-api.git
```

### Acesse a pasta do projeto

```bash
cd todo-list-api
```

### Execute a aplicação

```bash
./mvnw spring-boot:run
```

A aplicação estará disponível em:

```text
http://localhost:8080
```

---

## 🎯 Conceitos Praticados

- Arquitetura em camadas;
- Injeção de dependência com Spring;
- Desenvolvimento de APIs REST;
- Manipulação dos métodos HTTP (`GET`, `POST`, `PUT`, `DELETE` e `PATCH`);
- Persistência de dados com Spring Data JPA;
- Tratamento global de exceções;
- Organização e boas práticas de código.

---

## 📈 Próximas Melhorias

- [ ] Implementar autenticação com Spring Security + JWT
- [ ] Adicionar paginação nas consultas
- [ ] Criar documentação com Swagger/OpenAPI
- [ ] Implementar testes unitários com JUnit e Mockito
- [ ] Adicionar Docker ao projeto
- [ ] Implementar perfis de ambiente (dev, prod)
- [ ] Configurar CI/CD com GitHub Actions

---

## 👨‍💻 Autor

**Santiago Chiniske**

Projeto desenvolvido para fins de estudo e aperfeiçoamento em **Java + Spring Boot**. 🚀