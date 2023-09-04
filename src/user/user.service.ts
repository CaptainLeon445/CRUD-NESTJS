import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(createUserDTO: CreateUserDTO) {
    return this.userRepository.save(createUserDTO);
  }

  update(updateUserDTO: UpdateUserDTO, userId: number) {
    return this.userRepository.update(userId, updateUserDTO);
  }
  getUser(userId: number) {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  deleteUser(userId: number) {
    return this.userRepository.delete(userId);
  }
}
