# docker-checkpoint


#postgres server
docker run -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $(pwd):/var/lib/postgresql/data --name backend_feathers_postgress  postgres

docker exec -it 0af bash

psql -U postgres



CREATE DATABASE feathers_todo


cp -r /home/efillman/GSCHOOL/feathers-todo-back /home/efillman/GSCHOOL/docker-checkpoint/server


#express server
npm start

npx knex migrate:latest

npx knex seed:run




docker run -d -p 3030:3030 -v $(pwd):/src/app --name feathers_container  feather-back-end8

docker run -d -p 3000:3000 -v ${PWD}:/app feathers-front-end --name feathers-front