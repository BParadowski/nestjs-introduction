import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './create-cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cats/:name')
  getCats(@Param('name') name: string): string {
    return `Beautiful pretty kittens. You have selected name ${name}`;
  }

  @Post()
  addCat(@Body() createCatDto: CreateCatDto) {
    return `You've just added a kitten to out collection! Name: ${createCatDto.name} Age: ${createCatDto.age}`;
  }
}
