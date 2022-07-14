<h1 align="center">Node.JS Online Store</h1>

## Description:

The goal of the project is to create an online store, users can create their personal accounts on the site, they can browse the existing products, and can add these products to the card with numbers in order to buy them.

## To run this project

`Step 1` : To use this project must install [Node.js](https://nodejs.org/en/) and [pgadmin](https://www.pgadmin.org/download/) Then Download the source code

```
git clone https://github.com/MohamedAlabasy/Udacity-Node.JS-Online-Store.git
```

`Step 2` : Enter the project file then install package

```
npm i
```

<h3 align="center">To help you understand the project</h3>

## Folder Structure

```bash
├── src
│   ├── handlers
│   │   ├── authHandlers.ts => `for handel authentication function`
│   │   ├── ordersHandlers.ts => `for handel orders function`
│   │   └── productHandlers.ts => `for handel product function`
│   │
│   │
│   ├── middleware
│   │   ├── morganMiddleware.ts => `for log url, method and statue of requests`
│   │   │── notFoundMiddleware.ts => `for not Found Middleware`
│   │   └── errorMiddleware.ts => `for error Middleware`
│   │
│   │
│   ├── models
│   │   ├── tests
│   │   │   │── .ts => ``
│   │   │   │── .ts => ``
│   │   │   └── .ts => ``
│   │   ├── ordersModels.ts => `for handel email orders Models and functions used in handler`
│   │   │── productModels.ts => `for handel reset product Models and functions used in handler`
│   │   └── userModels.ts => `for handel user Models and functions used in handler`
│   │
│   │
│   ├── routes
│   │   ├── api
│   │   │   │── authRouter.ts => `for handel authentication route`
│   │   │   │── orderRouter.ts => `for handel order route`
│   │   │   └── productRouter.ts => `for handel product route`
│   │   └── routes.ts => `import all routes and exports it to index`
│   │
│   │
│   ├── utilities
│   │   │── checkTokens.ts => `for Request check Tokens`
│   │   └── validateRequest.ts => `for validate Request`
│   │
│   │
│   ├── database.ts => `to handel database driver`
│   └── index.ts => `to run the server`
└──
```

## DataBase ERD

<p align="center">
   <img src="https://user-images.githubusercontent.com/93389016/179023965-33ba66fa-e4ff-4b53-8025-380c0dec9114.jpg" alt="Build Status">

`Step 3` : To run project

```
node run watch
```

`Step 4` : Open the browser and click : [http://localhost:8080](http://localhost:8080)

`Step 5` : Open [postman](https://www.postman.com/downloads/) and import : [API Collation](https://github.com/MohamedAlabasy/Udacity-Node.JS-Online-Store/blob/main/api_collection.json) You will find it in the project file.

<hr>
To run eslint to check error

```
npm run lint
```

To run eslint and auto fixed error

```
npm run lint:f
```

To compile the TS code

```
npm run build
```

To run the JS code

```
node dist/index.js
```

<hr>

Here are the [Command](https://github.com/MohamedAlabasy/Udacity-Node.JS-Online-Store/blob/main/command.txt) that were used in the project, You will find it in the project file.
