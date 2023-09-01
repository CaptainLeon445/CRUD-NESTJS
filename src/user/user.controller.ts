import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
} from '@nestjs/common';
// import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.create(createUserDTO);
  }

  @Patch('/:userId')
  updateUser(
    @Body() updateUserDTO: UpdateUserDTO,
    @Param() param: { userId: number },
  ) {
    return this.userService.update(updateUserDTO, param);
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUser(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.deleteUser(param);
  }
}
