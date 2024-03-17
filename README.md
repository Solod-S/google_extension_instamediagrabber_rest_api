![Version](https://img.shields.io/badge/Version-0.9-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![runs with nodeJs](https://img.shields.io/badge/Runs%20with%20Node.Js-000.svg?style=flat-square&logo=nodedotjs&labelColor=f3f3f3&logoColor=#3C823B)](https://nodejs.org/ru)
[![runs with TS](https://img.shields.io/badge/Runs%20with%20Typescript-000.svg?style=flat-square&logo=typescript&labelColor=f3f3f3&logoColor=#3178C6)](https://www.typescriptlang.org/)
[![runs with NestJS](https://img.shields.io/badge/Runs%20with%20NestJs-000.svg?style=flat-square&logo=nestjs&labelColor=f3f3f3&logoColor=red)](https://nestjs.com/)
[![runs with swagger](https://img.shields.io/badge/Runs%20with%20Swagger-000.svg?style=flat-square&logo=swagger&labelColor=f3f3f3&logoColor=#85EA2D)](https://swagger.io/)
[![runs with PassportJs](https://img.shields.io/badge/Runs%20with%20PassportJs-000.svg?style=flat-square&logo=Passport&labelColor=f3f3f3&logoColor=35DF79)](https://www.passportjs.org/)

<!-- [![runs with jest](https://img.shields.io/badge/Runs%20with%20Jest-000.svg?style=flat-square&logo=jest&labelColor=f3f3f3&logoColor=944058)](https://jestjs.io/ru/) -->

# Instagram Media Graber REST API

![Instagram Media Graber](/public/pictures/about.jpg)

**Project Description:**

This project is a small REST API server built with Nest.js. It features a single endpoint allowing users to retrieve links for downloading videos and photo previews from Instagram. Additionally, the API is documented using Swagger, and it implements security measures through the use of an API key for authentication.

![Instagram Media Graber](/media/main.jpg)

**Main Technologies:**

- Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It simplifies the development process by offering a comprehensive set of tools and features to handle routing, middleware, and HTTP requests. Nest.js leverages TypeScript to bring strong typing and enhanced developer experience, while also providing architectural patterns such as dependency injection for building maintainable and testable codebases.
- Passport: Passport is an authentication middleware for Node.js that offers a variety of authentication strategies. In this project, strategies like passport-facebook, passport-github2, passport-google-oauth2, and passport-linkedin-oauth2 are used to enable social media authentication.
- Swagger-ui-express: Swagger UI Express is used to generate interactive API documentation. It provides a user-friendly interface for developers to understand and test the available API endpoints.

![Instagram Media Graber](/media/rest-api.gif)

## Technologies Used

<!-- ![Instagram Media Graber](/public/pictures/test-min.jpg) -->

    typescript
    nestJS
    swagger
    passport-headerapikey
    nayan-media-downloader

<!-- ![Instagram Media Graber](/public/pictures/email-min.jpg) -->

## Project structure

```sh
.
├── src
│   ├── authorization
│   │   ├── api-key.strategy.ts
│   │   └── authorization.module.ts
│   ├── instagram
│   │   ├── dto
│   |   |   └── videoUrlResponse.dto.ts
│   │   ├── entities
│   |   |   └── instagram.entity.ts
│   │   ├── instagram.controller.spec.ts
│   │   ├── instagram.controller.ts
│   │   ├── instagram.module.ts
│   │   ├── instagram.service.spec.ts
│   │   └── instagram.service.ts
│   ├── middleware
│   |   └── system
│   |       ├── corsMiddleware.middleware.ts
│   |       └── logger.middleware.ts
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .eslintrc.js
├── .prettierrc
├── package.json
├── package-lock.json
├── tsconfig.build.json
├── tsconfig.json
├── nest-cli.json
├── .env
├── .env.example
└── README.md

```

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/Solod-S/google_extension_instamediagrabber_rest_api ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.

## How to build your own..

1. First install all dependencies with npm or Yarn:
   ```javascript
   npm install
   ```
   or
   ```javascript
   yarn;
   ```
2. Exemple of `.env` file. Replace values with yours!!

   ```javascript
   PORT = YOUR_PORT;
   API_KEY = 'api key';
   ```

3. Start the server

   ```javascript
   npm run start
   npm run start:dev
   npm run start:prod
   ```

4. Enjoy!!

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request. For major changes, please open an issue first to discuss the changes.

**_NOTE: PLEASE LET ME KNOW IF YOU DISCOVERED ANY BUG OR YOU HAVE ANY SUGGESTIONS_**
