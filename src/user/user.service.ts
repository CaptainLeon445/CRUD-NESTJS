import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  get() {
    return { name: 'Christopher', email: 'christopher@mail.co' };
  }

  create(body: any) {
    return body;
  }

  update(body: any, param: { userId: number }) {
    return { body: body, param };
  }

  getUser(param: { userId: number }) {
    return param;
  }
  deleteUser(param: { userId: number }) {
    return param;
  }
}
