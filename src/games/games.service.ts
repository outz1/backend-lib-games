import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class GamesService implements OnModuleInit {
  private games: Game[] = [];
  private readonly dbPath = path.join(__dirname, '..', 'data', 'games.mock.json');

  async onModuleInit() {
    try {
      const data = await fs.readFile(this.dbPath, 'utf8');
      const parsedData = JSON.parse(data);
      this.games = parsedData.games.map(game => ({
        ...game,
        releaseDate: new Date(game.releaseDate)
      }));
    } catch (error) {
      console.error('Error loading mock data:', error);
      this.games = [];
    }
  }

  private async saveGames() {
    try {
      await fs.writeFile(
        this.dbPath,
        JSON.stringify({ games: this.games }, null, 2),
        'utf8'
      );
    } catch (error) {
      console.error('Error saving mock data:', error);
    }
  }

  async create(createGameDto: CreateGameDto) {
    const newGame: Game = {
      id: this.games.length > 0 ? Math.max(...this.games.map(g => g.id)) + 1 : 1,
      ...createGameDto,
      releaseDate: new Date(createGameDto.releaseDate)
    };
    this.games.push(newGame);
    await this.saveGames();
    return newGame;
  }

  findAll() {
    return this.games;
  }

  findOne(id: number) {
    return this.games.find(game => game.id === id);
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    const index = this.games.findIndex(game => game.id === id);
    if (index >= 0) {
      this.games[index] = {
        ...this.games[index],
        ...updateGameDto,
        releaseDate: updateGameDto.releaseDate ? new Date(updateGameDto.releaseDate) : this.games[index].releaseDate
      };
      await this.saveGames();
      return this.games[index];
    }
    return null;
  }

  async remove(id: number) {
    const index = this.games.findIndex(game => game.id === id);
    if (index >= 0) {
      const removed = this.games[index];
      this.games.splice(index, 1);
      await this.saveGames();
      return removed;
    }
    return null;
  }
}
