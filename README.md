### Criação iniciando a API

yarn init -y

### Adicionar Express e o driver do banco utilizado

yarn add express mysql2 sequelize

### Para rodar comandos sequelize

yarn sequelize-cli -D

### Instalar o nodemon

yarn add nodemon -D

### Criar base de dados

yarn sequelize db:create

### Cria a  migrations da Tabelas

yarn sequelize migration:create --name=create-users

### Cria Tabela

yarn sequelize db:migrate

### Desfazer a ultima vez que rodou o comando migrate

yarn sequelize db:migrate:undo