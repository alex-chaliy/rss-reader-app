# RSS Reader App

## Swagger Api Docs
http://localhost:3000/api-docs/


## Instruction how to run the app:

1) Install MongoDB
    MacOS
    https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#std-label-install-mdb-community-macos

    or other systems
    https://www.mongodb.com/docs/manual/administration/install-community/

2) Run MongoDB on `mongodb://127.0.0.1:27017/rssreader`,
    where "rssreader" is db name, "27017" is port in which db will run

3) Install Front-end packages
  `cd apps/front`
  `npm i`

4) Install Back-end packages
  `cd apps/back`
  `npm i`

5) Install data to MongoDB
  run file setup/install-db-data.js 
  `node setup/install-db-data.js`

6) Stop process from step 3 inited with `node setup/install-db-data.js`

7) Build frontend app
  `cd apps/front`
  `npm run build`

8) Run server on port 3000
  `cd apps/back`
  `npm run dev`

9) (optional) To run server with real-time update after code changes in apps/back folder
  you need to install `nodemon` package globally in operating system

  `sudo npm i -g nodemon`

  after that restart server once, as it described in step 7

10) open http://localhost:3000 to access UI


## MongoDB

DB name : rssreader

Mongo DB Collecrions : 
  posts
  users


## References

GitHub: crate monorepo
https://gist.github.com/itsmikita/2727e94ed874b1a9bbc518826741ecae 


Generate sha-256
https://emn178.github.io/online-tools/sha256.html
