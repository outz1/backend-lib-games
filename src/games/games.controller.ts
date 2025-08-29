import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo jogo' })
  @ApiResponse({ status: 201, description: 'O jogo foi criado com sucesso.', type: Game })
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os jogos' })
  @ApiResponse({ status: 200, description: 'Lista de jogos retornada com sucesso.', type: [Game] })
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um jogo pelo ID' })
  @ApiResponse({ status: 200, description: 'Jogo encontrado com sucesso.', type: Game })
  @ApiResponse({ status: 404, description: 'Jogo não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um jogo' })
  @ApiResponse({ status: 200, description: 'Jogo atualizado com sucesso.', type: Game })
  @ApiResponse({ status: 404, description: 'Jogo não encontrado.' })
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(+id, updateGameDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um jogo' })
  @ApiResponse({ status: 200, description: 'Jogo removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Jogo não encontrado.' })
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }
}
