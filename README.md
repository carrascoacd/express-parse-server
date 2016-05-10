# :zap: express-parse-server :zap:
A smart express.js application based on the official parse-server documentaion ready to be lauched as standalone server or mounted in Docker.

Install dependencies 
```sh
npm install
```

## Standalone
You need to specify a config.yml file in the root of the project, check config.example.yml.

#### Run your node js app
```sh
node server.js
```

## In Docker
```sh
You need to specify a config.yml file in your host machine, then mount it when launching the container, check config.example.yml.
```
#### Build your image
```sh
docker build -t <aluxion-labs>/express-parse-server .
```
#### Remove your image
```sh
docker rmi [-f] <IMAGE ID>
```
#### Run your image (remove the daemon option in order to check for launching errors -d)
```sh
docker run -d -p 33033:33033 -v <path/to/your/config.yml>:/usr/src/app/config.yml <aluxion-labs>/express-parse-server
```
