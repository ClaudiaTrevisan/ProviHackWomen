# ProviHackWomen  
Todas as linhas de código do presente projeto foram construídas embasadas nos paradigmas de programação orientada a objetos.  
Para construir o back end da aplicação (MVP) cuja funcionalidades exigidas eram:  
Cadastro de candidato(a),  
Cadastro de empresa,  
Inserir projeto desafio,  
Inserir proposta de resolução de desafio,  
pegar todos os desafios.  
Foi utilizado nodeJs e o auxílio poderoso do typescript, sendo possivel garantir assertividade no tratamento de informações.  
Para suprir as necessidades de armazenamento e gestão das informações foi escolhido o banco de dados relacional  mySql.  

link API: https://provi-hack-woman.herokuapp.com  
caminhos:
POST: "/candidate/signup" -- request.body with: {name, area, social, uf, city, email, password}  
POST: "/company/signup" -- request.body with: {recruiter, email, name, uf, city, password}  
POST: "company/project" -- request.body with: {title, area, time, criteria, description}
POST: "candidate/project" -- request.query with: id do projeto e request.body with: {project}
GET: "company/project" -- request.headers.Authorization with: token
