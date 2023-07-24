# Mytho Blog
### nvmrc
You need nvm installed
Added node version manager files to ui and api. By going to the respective folder and running `nvm use` you will be using the node version. If it is not install it it will request to be installed

## Server

It uses the file at `api/db.json` as the base for its responses.
For more information, check [`json-server`](https://github.com/typicode/json-server) docs.

## Running

#### Dependencies

- yarn or npm

From the project's root folder. First start the server:

```bash
cd api
yarn install # or equivalently: npm install
yarn server # npm run server
```

Then, from the project's root folder, run the app with:

```bash
cd ui
yarn install # or equivalently: npm install
yarn start # npm start
```

### Accessing the app

Access the app in `http://localhost:3000`

And the server resources are available at: `http://localhost:8080/`
