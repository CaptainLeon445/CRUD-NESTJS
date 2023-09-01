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

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() body: any) {
    return this.userService.create(body);
  }

  @Patch('/:userId')
  updateUser(
    @Body() updateUserDTO: { name: string; email: string },
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
