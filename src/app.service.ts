import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World1!!1!';
  }

  getAuthor(): string {
    return 'Хватов Сергей';
  }
}
