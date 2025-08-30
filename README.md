# Games API

## BackEnd Repository
[https://github.com/outz1/frontend-lib-games]
__________________________________________________________________________________________________________________________________________
<img width="1906" height="865" alt="Screenshot_1" src="https://github.com/user-attachments/assets/0cd0b109-c425-4fb8-8611-77d54965ceed" />

# REST API developed with NestJS for game management, providing CRUD operation endpoints and interactive documentation via Swagger.

## 🚀 Technologies

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)

## 📁 Project Structure

```
backend-games/
├── src/
│   ├── games/                   # Games module
│   │   ├── dto/                 # Data Transfer Objects
│   │   │   ├── create-game.dto.ts
│   │   │   └── update-game.dto.ts
│   │   ├── entities/
│   │   │   └── game.entity.ts   # Game entity definition
│   │   ├── games.controller.ts   # Controller with endpoints
│   │   ├── games.service.ts      # Business logic
│   │   └── games.module.ts       # NestJS module
│   ├── data/
│   │   └── games.mock.json      # Mock file (simulates database)
│   └── main.ts                  # Main file with configurations
```

## 🛣️ Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/games` | Lists all games |
| GET | `/games/:id` | Fetches a specific game |
| POST | `/games` | Creates a new game |
| PATCH | `/games/:id` | Updates an existing game |
| DELETE | `/games/:id` | Removes a game |

## 📝 Documentation (Swagger)

The complete API documentation is available through Swagger UI:
- URL: http://localhost:3000/api
- Interactive documentation with all endpoints
- DTO and entity schemas
- Request and response examples

## 💾 Mock Data

The project uses a JSON file as a mock database (`src/data/games.mock.json`):

```json
{
  "games": [
    {
      "id": 1,
      "title": "The Legend of Zelda: Breath of the Wild",
      "genre": "Action-Adventure",
      "platform": "Nintendo Switch",
      "releaseDate": "2017-03-03",
      "rating": 9.5,
      "price": 59.99
    }
  ]
}
```

## 🏃‍♂️ How to Run

1. Clone the repository
```bash
git clone https://github.com/outz1/backend-games.git
cd backend-games
```

2. Install dependencies
```bash
npm install
```

3. Run the server
```bash
# Development
npm run start:dev

# Production
npm run start:prod
```

## 🔒 CORS

The API is configured to accept requests from:
- http://localhost:3000
- http://localhost:3001

## 🧱 Data Structure

### Game Entity
```typescript
export class Game {
    id: number;
    title: string;
    genre: string;
    platform: string;
    releaseDate: Date;
    rating: number;
    price: number;
}
```

### DTOs
```typescript
// CreateGameDto
export class CreateGameDto {
    title: string;
    genre: string;
    platform: string;
    releaseDate: Date;
    rating: number;
    price: number;
}

// UpdateGameDto (Partial from CreateGameDto)
export class UpdateGameDto extends PartialType(CreateGameDto) {}
```

## 🔄 Data Flow

1. Client sends HTTP request
2. Controller processes the request
3. Service executes the business logic
4. Data is persisted in the mock file
5. Response is sent back to the client

## 🛠️ Development

To develop and test the API:

1. Use Swagger UI (http://localhost:3000/api)
2. Test endpoints via Postman/cURL
3. Integrate with frontend (Next.js, React, etc.)
4. Monitor logs in the console

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Swagger Documentation](https://swagger.io/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## 👥 Contribution

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
