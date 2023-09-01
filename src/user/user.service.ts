import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  get() {
    return { name: 'Christopher', email: 'christopher@mail.co' };
  }

  create(body: any) {
    return body;
  }

  update(
    updateUserDTO: { name: string; email: string },
    param: { userId: number },
  ) {
    return { body: updateUserDTO, param };
  }

  getUser(param: { userId: number }) {
    return param;
  }
  deleteUser(param: { userId: number }) {
    return param;
  }
}
