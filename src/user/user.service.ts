import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  get() {
    return { name: 'Christopher', email: 'christopher@mail.co' };
  }

  create(req: Request) {
    return req.body;
  }

  update(req: Request, param: { userId: number }) {
    return { body: req.body, param };
  }

  getUser(param: { userId: number }) {
    return param;
  }
  deleteUser(param: { userId: number }) {
    return param;
  }
}
