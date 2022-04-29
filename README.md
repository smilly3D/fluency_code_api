# Api-Docs

BASE-URL

```URL
https://castone-q4-node.herokuapp.com
```

---

# Desenvolvedores

| Imagem                                                                 | Nome             | Status        | Linkedin                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------- | ---------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Felipe](https://avatars.githubusercontent.com/u/48024940?s=200&v=4)  | Felipe Larson    | Product Owner | [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe-larson-da-silveira/)](https://www.linkedin.com/in/felipe-larson-da-silveira/)   |
| ![Smilly](https://avatars.githubusercontent.com/u/86039525?s=200&v=4)  | Smilly Aguilar   | Tech Leader   | [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/smillyaguilar/)](https://www.linkedin.com/in/smillyaguilar/)                           |
| ![Julia](https://avatars.githubusercontent.com/u/86054348?s=200&v=4)   | Julia Gama       | Scrum Master  | [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/juliagamadeoliveira/)](https://www.linkedin.com/in/juliagamadeoliveira/)               |
| ![Wallace](https://avatars.githubusercontent.com/u/73260587?s=200&v=4) | Wallace Oliveira | Dev           | [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wallace-oliveira-702497209/)](https://www.linkedin.com/in/wallace-oliveira-702497209/) |
| ![Matheus](https://avatars.githubusercontent.com/u/65559844?s=200&v=4) | Matheus Burei    | Dev           | [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheus-h-burei/)](https://www.linkedin.com/in/matheus-h-burei/)                       |
| ![Arthur](https://avatars.githubusercontent.com/u/85639170?s=200&v=4)  | Arthur Sarmento  | Dev           | [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/arthur-sarmento/)](https://www.linkedin.com/in/arthur-sarmento/)                       |

---

Botão para criar o workflow do insomnia e testar a api

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Teste-api&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fsmilly3D%2Ffluency_code_api%2Fmain%2Fsrc%2Finsomnia%2Ffluency-code.json%3Ftoken%3DGHSAT0AAAAAABT6XSOZUWDVKMH3PMQEGXZAYTL3CBQ)

---

LEGENDA

| Status       | Icon Status |
| ------------ | ----------- |
| ONLY ADMIN   | 🔶           |
| ONLY TEACHER | 🔷           |

# Students

- **/students /**
    - GET 🔶
        
        Listar todos os estudantes cadastrados (Somente Admin)
        
        - Com header de autorização.
            - Retorno da Requisição - 200 (OK)
        
        ```json
        [
        	{
        		"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        		"name":"john doe",
        		"email": "johndoe@gmail.com",
        		"cpf": "00000000000",
        		"phone": "999999999",
        		"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        		"photo_url": "http://www.photo.com.br/johndoe",
        		"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        	},
        ]
        ```
        
        - Sem header de autorização.
        - retorno da requisição - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers"
        }
        ```
        
        - Sem ser administrador
        - retorno da requisição - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing permisison admin"
        }
        ```
        
        - Query Params:
            
            page: int, per_page: int, courses: couser_id
            
    - POST - Registro.
        
        Cadastrar novo estudante
        
        - Rota não protegida
        - Corpo da requisição
        
        ```json
        {
        	"name":"julia",
        	"email":"juliat2i@mail.com",
        	"password":"12345"
        }
        ```
        
        - Retorno da requisição - 201(Created)
        
        ```json
        {
        	"message": "User created successfully"
        }
        ```
        
        - Cadastrar com o email existente - 409 (Conflict)
        
        ```json
        {
        	"error": "User already exists"
        } 
        ```
        
        - Campo inválido ou inexistente - 400 (Bad Request)
        
        ```json
        {
        	"error": [
        		"name is a required field",
        		"email is a required field",
        		"password is a required field"
        	]
        }
        ```
        
        - Corpo da requisição (Campo password inválido)
        
        ```json
        {
        	"name":"julia",
        	"password": 2315435,
        	"email":"juliat2i@mail.com"
        }
        ```
        
        - Retorno da requisição - 400 (Bad Request)
        
        ```json
        {
        	"error": [
        		"password must be a `string` type, but the final value was: `2315435`."
        	]
        }
        ```
        
        - Corpo da requisição (Campo password inexistente)
        
        ```json
        {
        	"name":"julia",
        	"email":"juliat2i@mail.com"
        }
        ```
        
        - Retorno da requisição - 400 (Bad Request)
        
        ```json
        {
        	"error": "password is a required field"
        }
        ```
        
- /students/<id> 🔶
    - GET 🔷🔶
        
        Lista um estudante específico (Admin/ Teacher(o aluno tem que fazer parte da turma do mesmo) 
        
        - Com header de autorização - 200  (OK)
        - Corpo da retorno
        
        ```json
        {
        	"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        	"name":"john doe",
        	"email": "johndoe@gmail.com",
        	"cpf": "",
        	"phone": "",
        	"bigraphy": "",
        	"photo_url": "",
        	"description": ""
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
        - Id inválido - 404 ( Not Found)
        
        ```json
        {
          "message": "Student not found",
        }
        ```
        
    - PATCH 🔶
        
        Alterar dados do student (Admin)
        
        - Com header de autorização
        - Corpo da requisição
        
        ```json
        {
        	"cpf": "00000000000",
        	"phone": "999999999",
        	"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "http://www.photo.com.br/johndoe",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        ```
        
        - Retorno da requisição - 200 (OK)
        
        ```json
        {
        	"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        	"name":"john doe",
        	"email": "johndoe@gmail.com",
        	"cpf": "00000000000",
        	"phone": "999999999",
        	"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "http://www.photo.com.br/johndoe",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing admin permissions",
        }
        ```
        
    - DELETE 🔶
        
        Deletar student (Admin)
        
        - Com header de autorização.
        - Retorno da requisão - 200 (OK)
        
        ```json
        {
          "message": "User deleted with success",
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing admin permissions",
        }
        ```
        
- /students/login
    - LOGIN
        
        Login do estudante
        
        - Rota não protegida
        - Corpo da requisição
        
        ```json
        {
        	"email":"juliat2i@mail.com",
        	"password":"12345"
        }
        ```
        
        - Retorno da requisição - 201 (CREATED)
        
        ```json
        {
          "token": "4b72c6f34b72c6f3-6d0a-6a1-86c6-687d52de4fc7-6d0a-6a1-86c6-687d2c6f3-6d0a-6a1-86c6-687d52de4fc74b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
        }
        ```
        
        - Login inválido - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Wrong email/password",
        }
        ```
        
- /students/profile
    - GET
        
        Lista seus próprios dados
        
        - Com header de autorização - 200  (OK)
        - Corpo da requisição
        
        ```json
        {
        	"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        	"name":"john doe",
        	"email": "johndoe@gmail.com",
        	"cpf": "",
        	"phone": "",
        	"bigraphy": "",
        	"photo_url": "",
        	"description": ""
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
    - PATCH PHOTO
        
        Altera seus próprios dados
        
        - Com header de autorização
        - Corpo da requisição
        
        ```json
        {
        	"cpf": "00000000000",
        	"phone": "999999999",
        	"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "http://www.photo.com.br/johndoe",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        ```
        
        - Retorno da requisição - 200 (OK)
        
        ```json
        {
        	"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        	"name":"john doe",
        	"email": "johndoe@gmail.com",
        	"cpf": "00000000000",
        	"phone": "999999999",
        	"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "http://www.photo.com.br/johndoe",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing permissions headers",
        }
        ```
        
    - PATCH
        
        Altera seus próprios dados
        
        - Com header de autorização
        - Corpo da requisição
        
        ```json
        {
        	"cpf": "00000000001",
        	"phone": "999999991",
        	"biography": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "http://www.photo.com.br/johndo1",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        ```
        
        - Retorno da requisição - 200 (OK)
        
        ```json
        {
        	"message": "Updated Success"
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
        	"message": "Token missing"
        }
        ```
        
    - DELETE
        
        Deleta sua conta
        
        - Com header de autorização.
        - Retorno da requisição - 200 (OK)
        
        ```json
        {
          "message": "Student deleted with success",
        }
        ```
        
        - Retorno da requisição not found - 404(Not Found)
        
        ```json
        {
        	"message": "Student not exists"
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing permissions headers",
        }
        ```
        

---

# Courses

- /courses
    - GET
        
        Listar todos os cursos disponíveis (Sem restrições). OBS não precisa estar logado
        
        - Retorno da requisição - 200 (OK)
        
        ```json
        [
        	{
        		"id": "",
        		"name": "javascript do zero ao avançado",
        		"description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        		"knowledge": "",
        		"students_total": 0,
        		"trainingFor": "",
        		"teacher_id": "",
        		"price": 120.52,
        		"content_id": "diasjhdsad123321",
        		"photo_url": "",
        		"isPublished": false
        	},
        ]
        ```
        
        - Parâmetros:
            
            page: int, per_page: int, course: course_id, name: string, knowledge: string
            
    - POST🔶🔷
        
        Cadastro de novo curso (Teacher, admin tem que liberar a aprovação)
        
        - Corpo da requisição
        
        ```json
        {
        	"name": "javascript do zero ao avançado",
        	"description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        	"knowledge": "",
        	"students_total": 0,
        	"trainingFor": "",
        	"teacher_id": "",
        	"price": 120.52,
        	"content_id": "diasjhdsad123321",
        	"photo_url": ""
        }
        ```
        
        - Retorno da requisição - 201(Created)
        
        ```json
        {
        	"message": "User created successfully"
        }
        ```
        
        - Corpo da requisição (Campo password inválido)
        - Campo inválido ou inexistente - 400 (Bad Request)
        
        ```json
        {
        	"name": "javascript do zero ao avançado",
        	"description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        	"knowledge": "",
        	"students_total": 0,
        	"trainingFor": "",
        	"teacher_id": "",
        	"price": 120.52,
        	"content_id": "diasjhdsad123321",
        	"photo_url": ""
        }
        ```
        
        - Retorno da requisição
        
        ```json
        {
        	"error": "Required all fields"
        }
        ```
        
- /courses/<id>
    - GET
        
        Página do curso específico
        
        - Retorno da requisição - 200  (OK)
        
        ```json
        {
        		"id": "",
        		"name": "javascript do zero ao avançado",
        		"description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        		"knowledge": "",
        		"students_total": 0,
        		"trainingFor": "",
        		"teacher_id": "",
        		"price": 120.52,
        		"content_id": "diasjhdsad123321",
        		"photo_url": "",
        		"isPublished": false
        	}
        ```
        
    - PATCH🔶🔷
        
        Alterar informações (Admin / Teacher)
        
        - Com header de autorização
        - Corpo da requisição
        
        ```json
        {
        	"price": 220.52,
        }
        ```
        
        - Retorno da requisição - 200  (OK)
        
        ```json
        "id": "",
        		"name": "javascript do zero ao avançado",
        		"description": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        		"knowledge": "",
        		"students_total": 0,
        		"trainingFor": "",
        		"teacher_id": "",
        		"price": 220.52,
        		"content_id": "diasjhdsad123321",
        		"photo_url": "",
        		"isPublished": false
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
    - DELETE🔶🔷
        
        Deletar curso(Admin/ Teacher)
        
        - Com header de autorização.
        - Retorno da requisão - 200 (OK)
        
        ```json
        {
          "message": "Teacher deleted with success",
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing permissions headers",
        }
        ```
        

---

# Admin🔶

- /admin
    - POST
        
        Cadastro de admin (Admin
        
        - Com header de autorização.
        - Corpo da requisição
        
        ```json
        {
        	"name":"john doe",
        	"email": "johndoe@gmail.com",
          "password":"123456788",
        	"cpf": "00000000000",
        	"phone": "999999999",
        	"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        ```
        
        - Retorno da requisição - 201(Created)
        
        ```json
        {
        	"message": "Admin created successfully"
        }
        ```
        
        - Cadastrar com o email ou CPF existente - 409 (Conflict)
        
        ```json
        {
        	"error": "Email ou CPF already exists"
        } 
        ```
        
        - Corpo da requisição (Campo password inválido)
        - Campo inválido ou inexistente - 400 (Bad Request)
        
        ```json
        {
        	"name":"John Doe",
        	"email":"johndoe@mail.com",
        	"pasword": 12345
        }
        ```
        
        - Retorno da requisição
        
        ```json
        {
        	"error": [
        		"password must be a `string` type, but the final value was: `2315435`."
        	]
        }
        ```
        
        - Corpo da requisição (Campos não inexistente)
        
        ```json
        {
        	"cpf": "00000000000",
        	"phone": "999999999",
        	"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        ```
        
        - Retorno da requisição
        
        ```json
        {
        	"error": [
        		"name is a required field",
        		"email is a required field",
        		"password is a required field"
        	]
        }
        ```
        
- /admin/login
    - POST
        
        Login do admin
        
        - Com header de autorização.
        - Corpo de requisição
        
        ```json
        {
          "email": "johndoe@kenzie.com",
          "password": "123456",
        }
        ```
        
        - Retorno da requisição - 201 (CREATED)
        
        ```json
        {
          "token": "4b72c6f34b72c6f3-6d0a-6a1-86c6-687d52de4fc7-6d0a-6a1-86c6-687d2c6f3-6d0a-6a1-86c6-687d52de4fc74b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
        }
        ```
        
        - Login inválido - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Wrong email/password",
        }
        ```
        
- /admin/<id>
    - PATCH
        
        Alterar as informações (Admin)
        
        - Com header de autorização.
        - Corpo da requisição
        
        ```json
        {
        	"cpf": "12345678900",
        }
        ```
        
        - Retorno da requisição - 200 (OK)
        
        ```json
        {
        	"message": "Updated Success"
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
    - DELETE
        
        Deletar as informações(Admin)
        
        - Com header de autorização.
        - Retorno da requisão - 200 (OK)
        
        ```json
        {
          "message": "Admin deleted with success",
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing permissions headers",
        }
        ```
        
        - Se não for administrador - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Unauthorized",
        }
        ```
        
        - Se o token estiver expirado ou inválido - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Invalid token!",
        }
        ```
        

---

# Teacher

- /teacher/profile
    - POST
        
        Cadastrar professor/ email para validar(Teacher -> Admin muda propriedade isAproved)
        
        - Com header de autorização.
        - Corpo da requisição
        
        ```json
        {
        		"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        		"name":"john doe",
        		"email": "johndoe@gmail.com",
        		"cpf": "00000000000",
        		"phone": "999999999",
        		"biography": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        		"photo_url": "",
        		"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        		"github": "https://www.github.com/john-doe",
        		"hour": 20.00,
        		"isApproved": false
        	}
        ```
        
        - Retorno da requisição - 201(Created)
        
        ```json
        {
        	"message": "Teacher created successfully"
        }
        ```
        
        - Cadastrar com o email existente - 409 (Conflict)
        
        ```json
        {
        	"error": "Email ou CPF already exists"
        } 
        ```
        
        - Corpo da requisição (Campo password inválido)
        - Campo inválido ou inexistente - 400 (Bad Request)
        
        ```json
        {
        	"name":"John Doe",
        	"email":"johndoe@mail.com",
        	"pasword":"12345"
        }
        ```
        
        - Retorno da requisição
        
        ```json
        {
        	"error": [
        		"cpf is a required field",
        		"phone is a required field",
        		"biography is a required field",
        		"description is a required field",
        		"github is a required field",
        		"hour is a required field"
        	]
        }
        ```
        
- /teacher
    - GET 🔶🔷
        
        Listar todos professores  (Admin, Teacher, Student) 
        
        - Com header de autorização.
        - Retorno da Requisição - 200 (OK)
        
        ```json
        [
        	{
        		"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        		"name":"john doe",
        		"email": "johndoe@gmail.com",
        		"cpf": "00000000000",
        		"phone": "999999999",
        		"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        		"photo_url": "http://www.photo.com.br/johndoe",
        		"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        		"github": "https://www.github.com/john-doe",
        		"hour": 20.00,
        		"isApproved": false
        	},
        ]
        ```
        
        - Sem header de autorização.
        - retorno da requisição - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
- /teacher/aprove/<id> 🔶
    - PATCH (body id)🔶
        
        Valida o professor
        
        - Com header de autorização.
        - Retorno da Requisição - 200 (OK)
        
        ```json
        {
        	"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        	"name":"john doe",
        	"email": "johndoe@gmail.com",
        	"cpf": "00000000000",
        	"phone": "999999999",
        	"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "http://www.photo.com.br/johndoe",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        	"github": "https://www.github.com/john-doe",
        	"hour": 20.00,
        	"isApproved": true
        }
        ```
        
        - Sem header de autorização.
        - retorno da requisição - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
- /teacher/login
    - POST
        
        Login do professor
        
        - Com header de autorização.
        - Corpo de requisição
        
        ```json
        {
          "email": "johndoe@kenzie.com",
          "password": "123456",
        }
        ```
        
        - Retorno da requisição - 201 (CREATED)
        
        ```json
        {
          "token": "4b72c6f34b72c6f3-6d0a-6a1-86c6-687d52de4fc7-6d0a-6a1-86c6-687d2c6f3-6d0a-6a1-86c6-687d52de4fc74b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
        }
        ```
        
        - Login inválido - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Wrong email/password",
        }
        ```
        
- /teacher/<id>
    - GET
        
        Listar funcionário específico (Admin, Teacher, Student)
        
        - Com header de autorização - 200  (OK)
        - retorno da requisição
        
        ```json
        {
        	"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        	"name":"john doe",
        	"email": "johndoe@gmail.com",
        	"cpf": "00000000000",
        	"phone": "999999999",
        	"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        	"github": "https://www.github.com/john-doe",
        	"hour": 20.00,
        	"isApproved": false
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
        - Id inválido - 404 ( Not Found)
        
        ```json
        {
          "message": "teacher not found",
        }
        ```
        
    - PATCH
        
        Alterar dados professor (Teacher/Admin)
        
        - Com header de autorização
        - Corpo da requisição
        
        ```json
        {
        	"cpf": "12345678900",
        }
        ```
        
        - Retorno da requisição - 200  (OK)
        
        ```json
        {
        	"id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7"
        	"name":"john doe",
        	"email": "johndoe@gmail.com",
        	"cpf": "12345678900",
        	"phone": "999999999",
        	"bigraphy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        	"photo_url": "",
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        	"github": "https://www.github.com/john-doe",
        	"hour": 20.00,
        	"isApproved": false
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
    - DELETE
        
        Deletar professor (Teacher/Admin)
        
        - Com header de autorização.
        - Retorno da requisão - 200 (OK)
        
        ```json
        {
          "message": "Teacher deleted with success",
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing admin permissions",
        }
        ```
        

---

# Reviews

- /reviews/course_id
    - GET
        
        Listar todos reviews do curso
        
        - Com header de autorização
        - Corpo de requisição - 200  (OK)
        
        ```json
        [
        	{
        		"id": "",
        		"student_id": "",
        		"course_id": "", 
        		"note": 5,
        		"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        	}
        ]
        ```
        
        - retorno da requisição - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
    - POST
        
        Cadastrar novo review (Student)
        
        - Com header de autorização
        - Corpo de requisição
        
        ```json
        {
        	"note": 5,
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
        ```
        
        Retorno da requisição - 200  (OK)
        
        ```json
        {
        	"id": "",
        	"student_id": "",
        	"course_id": "", 
        	"note": 5,
        	"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
        ```
        
        - retorno da requisição - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing authorization headers",
        }
        ```
        
    - DELETE
        
        Deletar review (Admin)
        
        - Com header de autorização.
        - Retorno da requisão - 200 (OK)
        
        ```json
        {
          "message": "Review deleted with success",
        }
        ```
        
        - Sem header de autorização - 401 (UNAUTHORIZED)
        
        ```json
        {
          "message": "Missing admin permissions",
        }
        ```
