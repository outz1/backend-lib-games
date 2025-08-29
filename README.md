# Games API

API REST desenvolvida com NestJS para gerenciamento de jogos, oferecendo endpoints para operações CRUD e documentação interativa via Swagger.

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)

## 📁 Estrutura do Projeto

```
backend-games/
├── src/
│   ├── games/                    # Módulo de jogos
│   │   ├── dto/                 # Data Transfer Objects
│   │   │   ├── create-game.dto.ts
│   │   │   └── update-game.dto.ts
│   │   ├── entities/
│   │   │   └── game.entity.ts   # Definição da entidade Game
│   │   ├── games.controller.ts   # Controlador com endpoints
│   │   ├── games.service.ts      # Lógica de negócios
│   │   └── games.module.ts       # Módulo NestJS
│   ├── data/
│   │   └── games.mock.json      # Arquivo de mock (simula banco de dados)
│   └── main.ts                  # Arquivo principal com configurações
```

## 🛣️ Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/games` | Lista todos os jogos |
| GET | `/games/:id` | Busca um jogo específico |
| POST | `/games` | Cria um novo jogo |
| PATCH | `/games/:id` | Atualiza um jogo existente |
| DELETE | `/games/:id` | Remove um jogo |

## 📝 Documentação (Swagger)

A documentação completa da API está disponível através do Swagger UI:
- URL: http://localhost:3000/api
- Documentação interativa com todos os endpoints
- Schemas dos DTOs e entidades
- Exemplos de requisições e respostas

## 💾 Mock de Dados

O projeto utiliza um arquivo JSON como mock de banco de dados (`src/data/games.mock.json`):

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

## 🏃‍♂️ Como Executar

1. Clone o repositório
```bash
git clone https://github.com/outz1/backend-games.git
cd backend-games
```

2. Instale as dependências
```bash
npm install
```

3. Execute o servidor
```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod
```

## 🔒 CORS

A API está configurada para aceitar requisições de:
- http://localhost:3000
- http://localhost:3001

## 🧱 Estrutura de Dados

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

// UpdateGameDto (Partial do CreateGameDto)
export class UpdateGameDto extends PartialType(CreateGameDto) {}
```

## 🔄 Fluxo de Dados

1. Cliente faz requisição HTTP
2. Controller processa a requisição
3. Service executa a lógica de negócios
4. Dados são persistidos no arquivo mock
5. Resposta é enviada ao cliente

## 🛠️ Desenvolvimento

Para desenvolver e testar a API:

1. Use o Swagger UI (http://localhost:3000/api)
2. Teste endpoints via Postman/cURL
3. Integre com frontend (Next.js, React, etc.)
4. Monitore logs no console

## 📚 Recursos Adicionais

- [Documentação NestJS](https://docs.nestjs.com/)
- [Documentação Swagger](https://swagger.io/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## 👥 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
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
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

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
