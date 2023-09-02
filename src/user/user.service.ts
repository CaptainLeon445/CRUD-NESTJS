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

  update(updateUserDTO: UpdateUserDTO, userId: number) {
    return { body: updateUserDTO, userId };
  }

  getUser(userId: number) {
    return userId;
  }
  deleteUser(userId: number) {
    return userId;
  }
}
