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

![Instagram Media Graber](/public/pictures/passport-js-min.jpg)

**Main Technologies:**

- Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It simplifies the development process by offering a comprehensive set of tools and features to handle routing, middleware, and HTTP requests. Nest.js leverages TypeScript to bring strong typing and enhanced developer experience, while also providing architectural patterns such as dependency injection for building maintainable and testable codebases.
- Passport: Passport is an authentication middleware for Node.js that offers a variety of authentication strategies. In this project, strategies like passport-facebook, passport-github2, passport-google-oauth2, and passport-linkedin-oauth2 are used to enable social media authentication.
- Swagger-ui-express: Swagger UI Express is used to generate interactive API documentation. It provides a user-friendly interface for developers to understand and test the available API endpoints.

## Technologies Used

![Instagram Media Graber](/public/pictures/test-min.jpg)

    typescript
    nestJS
    swagger
    passport-headerapikey
    nayan-media-downloader

![Instagram Media Graber](/public/pictures/email-min.jpg)

## Project structure

```sh
.
├── .eslintrc.js
├── .prettierrc
├── package.json
├── package-lock.json
├── tsconfig.build.json
├── tsconfig.json
├── nest-cli.json
├── .env
├── .env.example
├── README.md
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
└── src
    ├── authorization
    │   ├── api-key.strategy.ts
    │   └── authorization.module.ts
    ├── instagram
    │   ├── dto
    |   |   └── videoUrlResponse.dto.ts
    │   ├── entities
    |   |   └── instagram.entity.ts
    │   ├── instagram.controller.spec.ts
    │   ├── instagram.controller.ts
    │   ├── instagram.module.ts
    │   ├── instagram.service.spec.ts
    │   └── instagram.service.ts
    ├── middleware
    |   └── system
    |       ├── corsMiddleware.middleware.ts
    |       └── logger.middleware.ts
    ├── app.controller.spec.ts
    ├── app.controller.ts
    ├── app.module.ts
    ├── app.service.ts
    └── main.ts


```

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/Solod-S/LinkedInClone-backend.git ./myproject
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
   DB_HOST = 'mongo db';
   BASE_URL = 'api url';
   ACCES_SECRET_KEY = 'anything-secret';
   REFRESH_SECRET_KEY = 'anything-secret';
   FRONTEND_BASE_URL = 'frontend url';
   SENDGRID_API_KEY = 'sendgrid api key';
   GOOGLE_CLIENT_ID = 'google client id from google_console=>credentials';
   GOOGLE_CLIENT_SECRET =
     'google client secret from google console=>credentials';
   MAILER_EMAIL = 'email for sending emails';
   WRONG_TOKEN = 'tokens for tests';
   ADMINS = ['admin email'];
   GOOGLE_CLIENT_ID = 'client id';
   GOOGLE_CLIENT_SECRET = 'client secret';
   LINKEDIN_CLIENT_ID = 'client id';
   LINKEDIN_CLIENT_SECRET = 'client secret';
   FACEBOOK_CLIENT_ID = 'client id';
   FACEBOOK_CLIENT_SECRET = 'client secret';
   GITHUB_CLIENT_ID = 'client id';
   GITHUB_CLIENT_SECRET = 'client secret';
   ```

3. Start the server

   ```javascript
   npx nodemon server(serverhttps)
   ```

4. Enjoy!!

## Features and Fuctionality

#### User account operations

![Instagram Media Graber](/public/pictures/structure.gif)

#### Auth operations

- Register user
- Verify user by email
- Login user by email
- Login user by google
- Login user by github
- Login user by facebook
- Login user by linkedin
- Change user password
- Reset user password
- Get current logined user information
- Logout user

#### User operations

- Add/Change User Information (education/skills/expiriences/etc..)
- Get current user information by id
- Get all users information
- Users search
- Delete account

#### User experiences operations

- Create experience
- Update experience
- Get own experiences
- Delete experience

#### User educations operations

- Create education
- Update education
- Get own educations
- Delete education

#### User languages operations

- Create language
- Update language
- Get own languages
- Delete language

#### User skills operations

- Create skill
- Update skill
- Get all skills
- Get own skill
- Get skill by id
- Skills search
- Add user to skill
- Remove user from skill
- Delete skill

#### User posts operations

- Create post
- Update post
- Get own posts
- Delete post
- Get all posts
- Get all popular skill
- Search post by query
- Get post by id

#### User favorites operations

- Get all favorites
- Add to favorites
- Remove from favorites

#### User subsciptions operations

- Get all subsciptions
- Add to subsciptions
- Remove from subsciptions

#### Media files operations

- Create media file (for posts, publications, avatars and etc)
- Update media file
- Get media files
- Get own media files
- Get media files by id
- Delete media file

#### Comments operations

- Create comment
- Update comment
- Get own comments
- Delete comment

#### Likes operations

- Add like
- Remove like

#### Company operations

- Create company
- Update company
- Add worker to company
- Remove worker from company
- Add owner to company
- Remove owner from company
- Get all companies
- Companies search
- Get company by id
- Delete company
- Create company publication
- Update company publication
- Get own company publications
- Delete company publication

#### Company publications operations

- Get all companies publications
- Get all popular companies publications
- Search companies publications by query
- Get company publication by id

#### Company jobs operations

- Create company job (vacancy)
- Update company job (vacancy)
- Get own company jobs (vacancies)
- Delete company job (vacancy)
- Get all companies jobs (vacancy)
- Get all popular companies jobs (vacancy)
- Get all applied companies jobs (vacancy)
- Search companies jobs (vacancy) by query
- Get company jobs (vacancy) by id
- Apply for a job
- Unapply from a job

## Future Plans

- Write SPA (React/Redux/Axios/...)
- Write mobile aplication (ReactNative/ExpoCLI/...)
- Add chat functionality aplication (Socket.io)

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request. For major changes, please open an issue first to discuss the changes.

**_NOTE: PLEASE LET ME KNOW IF YOU DISCOVERED ANY BUG OR YOU HAVE ANY SUGGESTIONS_**

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
