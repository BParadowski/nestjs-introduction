import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am ready for whatever you bring to me! Yeah so very ready ;;;;;';
  }
}
