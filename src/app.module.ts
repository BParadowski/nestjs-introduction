import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CatsService],
})
export class AppModule {}
