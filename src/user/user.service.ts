import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Christopher', email: 'christopher@mail.co' };
  }

  create(createUserDTO: CreateUserDTO) {
    return createUserDTO;
  }

  update(updateUserDTO: UpdateUserDTO, param: { userId: number }) {
    return { body: updateUserDTO, param };
  }

  getUser(param: { userId: number }) {
    return param;
  }
  deleteUser(param: { userId: number }) {
    return param;
  }
}
