import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): object {
    return {
      name: 'John Doe',
      email: 'john@info.com',
    };
  }
}
