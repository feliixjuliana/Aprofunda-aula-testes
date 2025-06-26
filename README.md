
## 🏗️ Arquitetura do Projeto

A estrutura do projeto segue os princípios da **Clean Architecture**, separando responsabilidades em diferentes camadas:

```
├── app
│   ├── controllers
│   └── routes
├── core
│   ├── entities
│   └── usecases
├── infra
│   ├── database
│   └── server
├── tests
└── main.ts
```

### Descrição das Camadas

- **app**: Camada de aplicação, responsável pelos controllers e rotas da API.
- **core**: Camada de domínio, onde ficam as entidades e os casos de uso (regras de negócio).
- **infra**: Camada de infraestrutura, responsável pela comunicação com banco de dados e configuração do servidor.
- **tests**: Testes automatizados do sistema.
- **main.ts**: Ponto de entrada da aplicação.

---


#### Coleções
- Usuário: `user`
```json
{
  "id": "4d72aece-424c-498d-98b6-5cbdba1fdfe7",
  "name": "Dandara da Silva",
  "login": "dandara1995",
  "email": "dandara@example.com",
  "password": "123456"
}
```

- Publicação: `post`

```json
{
  "id": "a5c8a309-25cd-49c3-a41f-a7afb100b5e4",
  "date": "2025-05-30T16:25:09",
  "title": "Resenha sobre Ponciá Vicêncio",
  "content": "O Livro 'Ponciá Vicêncio' de Conceição Evaristo traz uma abordagem...",
  "user_id": "4d72aece-424c-498d-98b6-5cbdba1fdfe7"
}
```

---

### Endpoints

#### Usuários `/users`
- Endpoint para adicionar um novo usuário

 **POST** `/users`

 Corpo da requisição:
```json
{
  "name": "Dandara da Silva",
  "login": "dandara1995",
  "email": "dandara@example.com",
  "password": "123456"
}
```

  **Resposta esperada em caso de sucesso** (status code: 200)
```json
{
  "id": "a5c8a309-25cd-49c3-a41f-a7afb100b5e4",
  "name": "Dandara da Silva",
  "login": "dandara1995",
  "email": "dandara@example.com",
  "password": "123456"
}
```
 **Resposta esperada em caso de erro** (status code: 500)
```json
{
  "error": "Houve um erro ao tentar cadastrar o usuário"
}
```

---

- Endpoint para obter um usuário através do id

 **GET** `/users/a5c8a309-25cd-49c3-a41f-a7afb100b5e4`

  **Resposta esperada em caso de sucesso** (status code: 200)
```json
{
  "id": "a5c8a309-25cd-49c3-a41f-a7afb100b5e4",
  "name": "Dandara da Silva",
  "login": "dandara1995",
  "email": "dandara@example.com",
  "password": "123456"
}
```
 **Resposta esperada em caso de erro. Usuário não encontrado** (status code: 404)
```json
{
  "error": "Usuário não encontrado"
}
```

---

- Endpoint para modificar um usuário existente

 **PATCH** `/users/a5c8a309-25cd-49c3-a41f-a7afb100b5e4`

 Corpo da requisição:
```json
{
  "name": "Dandara Oliveira da Silva"
}
```

  **Resposta esperada em caso de sucesso** (status code: 200)
```json
{
  "id": "a5c8a309-25cd-49c3-a41f-a7afb100b5e4",
  "name": "Dandara Oliveira da Silva",
  "login": "dandara1995",
  "email": "dandara@example.com",
  "password": "123456"
}
```

 **Resposta esperada em caso de erro** (status code: 500)
```json
{
  "error": "Houve um erro ao tentar atualizar o usuário"
}
```

- Endpoint para deletar um usuário através do id

 **DELETE** `/users/a5c8a309-25cd-49c3-a41f-a7afb100b5e4`

  **Resposta esperada em caso de sucesso** (status code: 204)
```json
{}
```
 **Resposta esperada em caso de erro. Usuário não encontrado** (status code: 404)
```json
{
  "error": "Usuário não encontrado"
}
```

**Resposta esperada em caso de erro.** (status code: 500)
```json
{
  "error": "Erro ao deletar o usuário."
}
```

---

#### Publicações `/posts`

- Endpoint para cadastro de publicações.

 **POST** `/posts`

 Corpo da requisição:
```json
{
  "title": "Resenha sobre Ponciá Vicêncio",
  "content": "O Livro 'Ponciá Vicêncio' de Conceição Evaristo traz uma abordagem..."
}
```

Resposta em caso de sucesso:
```json
{
    "id": "a5c8a309-25cd-49c3-a41f-a7afb100b5e4",
    "date": "2025-05-30T16:25:09",
    "title": "Resenha sobre Ponciá Vicêncio",
    "content": "O Livro 'Ponciá Vicêncio' de Conceição Evaristo traz uma abordagem...",
    "user_id": "4d72aece-424c-498d-98b6-5cbdba1fdfe7"
}

```
**Resposta esperada em caso de erro.** (status code: 500) 
  ```json
  {
    "error": "Erro ao cadastrar publicação."
  }
  ```

---  
- Endpoint para listagem das publicações.

 **GET** `/posts`

Resposta em caso de sucesso (com uma publicação cadastrada): (status 200)
```json
    [
        {
            "id": "a5c8a309-25cd-49c3-a41f-a7afb100b5e4",
            "date": "2025-05-30T16:25:09",
            "title": "Resenha sobre Ponciá Vicêncio",
            "content": "O Livro 'Fundamentacao da metafísica dos costumes' de Conceição Evaristo traz uma abordagem...",
            "user_id": "4d72aece-424c-498d-98b6-5cbdba1fdfe7"
        }
    ]
```

Resposta em caso de sucesso (sem publicações cadastradas): (status 200)
```json
    []
```

---  

- Endpoint para obtenção de uma única publicação por id.

 **GET** `/posts/a5c8a309-25cd-49c3-a41f-a7afb100b5e4`

Resposta em caso de sucesso: 
```json
{
    "id": "a5c8a309-25cd-49c3-a41f-a7afb100b5e4",
    "date": "2025-05-30T16:25:09",
    "title": "Resenha sobre Ponciá Vicêncio",
    "content": "O Livro 'Fundamentacao da metafísica dos costumes' de Conceição Evaristo traz uma abordagem...",
    "user_id": "4d72aece-424c-498d-98b6-5cbdba1fdfe7"
}
```

 **Resposta esperada em caso de erro. Publicação não encontrada** (status code: 404) 
  ```json
  {
    "error": "Publicação não encontrada."
  }
  ```

---  
- Endpoint para modificação de publicações.

**PATCH** `/posts/a5c8a309-25cd-49c3-a41f-a7afb100b5e4`

 Corpo da requisição:
  ```json
  {
      "title": "O que diz o livro 'Ponciá Vicêncio'"
  }
  ```

Resposta em caso de sucesso: 
  ```json
  {
      "id": "a5c8a309-25cd-49c3-a41f-a7afb100b5e4",
      "date": "2025-05-30T16:25:09",
      "title": "O que diz o livro 'Ponciá Vicêncio'",
      "content": "O Livro 'Fundamentacao da metafísica dos costumes' de Conceição Evaristo traz uma abordagem...",
      "user_id": "4d72aece-424c-498d-98b6-5cbdba1fdfe7"
  }
  ```

 **Resposta esperada em caso de erro. Publicação não encontrada** (status code: 404) 
  ```json
  {
    "error": "Publicação não encontrada."
  }
  ```

---  

- Endpoint para exclusão de publicações.

 **DELETE** `/posts/a5c8a309-25cd-49c3-a41f-a7afb100b5e4`

Resposta em caso de sucesso: (status code 204) 
  ```json
  {}
  ```

 **Resposta esperada em caso de erro. Publicação não encontrada** (status code: 404) 
  ```json
  {
    "error": "Publicação não encontrada"
  }
  ```

--- 

#### Login `/login`
- Endpoint para realizar login.

 **POST** `/login `

 Corpo da requisição:
  ```json
  {
    "login": "dandara1995",
    "password": "123456"
  }
  ```
**Resposta esperada em caso de sucesso.** (status code: 200) 
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
  }
  ```

**Resposta esperada em caso de erro. Usuário ou senha incorretos** (status code: 400) 
  ```json
  {
    "error": "Usuário ou senha incorretos."
  }
  ```
