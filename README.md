## 1country API

## Build and deploy
### Run locally
1) Create .env file and setup env variables using .env.example
2) Run app:
```shell
npm i
npm start
```
3) Open Swagger API [http://localhost:3001/api](http://localhost:3001/api)

### Deploy to fly.io
1) Check `fly.toml` configuration. Login to fly.io `flyctl auth login`.
2) Build docker image (M1)
```shell
docker build --platform linux/amd64 -t <username>/stripe-payments-backend:latest .
```
3) Deploy the image
```shell
flyctl deploy --local-only -i <username>/stripe-payments-backend:latest
```
4) Set secrets
```shell
flyctl secrets set DB_HOST=hostname
flyctl secrets set DB_PASSWORD=12345
```
