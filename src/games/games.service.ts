import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  private games: Game[] = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-Adventure',
      platform: 'Nintendo Switch',
      releaseDate: new Date('2017-03-03'),
      rating: 9.5,
      price: 59.99,
    },
    {
      id: 2,
      title: 'God of War Ragnarök',
      genre: 'Action-Adventure',
      platform: 'PS5',
      releaseDate: new Date('2022-11-09'),
      rating: 9.4,
      price: 69.99,
    },
    {
      id: 3,
      title: 'Red Dead Redemption 2',
      genre: 'Action',
      platform: 'PS4/Xbox One/PC',
      releaseDate: new Date('2018-10-26'),
      rating: 9.7,
      price: 49.99,
    },
  ];

  create(createGameDto: CreateGameDto) {
    const newGame: Game = {
      id: this.games.length + 1,
      ...createGameDto,
    };
    this.games.push(newGame);
    return newGame;
  }

  findAll() {
    return this.games;
  }

  findOne(id: number) {
    return this.games.find(game => game.id === id);
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    const index = this.games.findIndex(game => game.id === id);
    if (index >= 0) {
      this.games[index] = { ...this.games[index], ...updateGameDto };
      return this.games[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.games.findIndex(game => game.id === id);
    if (index >= 0) {
      const removed = this.games[index];
      this.games.splice(index, 1);
      return removed;
    }
    return null;
  }
}
