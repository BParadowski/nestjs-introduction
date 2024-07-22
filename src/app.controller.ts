import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CatsService } from './app.service';
import { CreateCatDto } from './create-cat.dto';

@Controller()
export class AppController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): string {
    return `Look at all these cats: ${this.catsService
      .findAll()
      .map((cat) => cat.name)

      .join(', ')}`;
  }

  @Post()
  addCat(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return `You've just added a kitten to out collection! Name: ${createCatDto.name} Age: ${createCatDto.age}`;
  }
}
