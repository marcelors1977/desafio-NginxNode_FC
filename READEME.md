Neste repositório foi diponibilzado todos os arquivos necessários para a entrega do "Nginx com Node.js" .

    Com o arquivo docker-compose.yaml é montado 3 containers, a saber:

    1 - banco de dados MySql (container_name = db), que é levantado já criando o Schema "nodedb" e a tabela people cujo script "data/CreateTablePeople.sql" que é executado como "docker-entrypoint-initdb.d" na inicialização.
    
    2 - um servidor NodeJs (container_name = app), que ao ser inicializado faz o insert de alguns registros no banco de dados. Ao acessar página principal, os nomes inseridos são mostrados no browser, página esta que foi construída através do template engine do PUG.

    3 - e por fim o Nginx (container_name = nginx) como proxy reverso, que irá servir requisições através do host http://localhost:8080 e redirecioná-las ao servidor node

    Para subir todos os containers basta fazer o download de todos os arquivos disponibilizados em https://github.com/marcelors1977/desafio-go_FC.git e executar o seguinte comando:
        
    docker-compose up -d

    Acessar a aplicação através da página http://localhost:8080


att, 
Marcelo marcelo.rds1977@gmail.com