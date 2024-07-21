import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cats')
  getCats(@Req() req: Request): string {
    return `Beautiful pretty kittens. <pre style="max-width: 400px; text-wrap: wrap"> ${JSON.stringify(req.headers)}</pre>`;
  }
}
