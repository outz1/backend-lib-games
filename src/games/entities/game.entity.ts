import { ApiProperty } from '@nestjs/swagger';

export class Game {
    @ApiProperty({ example: 1, description: 'ID único do jogo' })
    id: number;

    @ApiProperty({ example: 'The Last of Us Part I', description: 'O título do jogo' })
    title: string;

    @ApiProperty({ example: 'Action-Adventure', description: 'O gênero do jogo' })
    genre: string;

    @ApiProperty({ example: 'PS5', description: 'A plataforma em que o jogo está disponível' })
    platform: string;

    @ApiProperty({ example: '2022-09-02', description: 'A data de lançamento do jogo' })
    releaseDate: Date;

    @ApiProperty({ example: 9.5, description: 'A nota do jogo (0-10)', minimum: 0, maximum: 10 })
    rating: number;

    @ApiProperty({ example: 69.99, description: 'O preço do jogo em USD', minimum: 0 })
    price: number;
}
