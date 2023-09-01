import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
  } from '@nestjs/common';
  import { Request } from 'express';
  

@Controller('user')
export class UserController {

    @Get()
    getUsers() {
      return { name: 'Christopher', email: 'christopher@mail.co' };
    }
  
    @Post()
    store(@Req() req: Request) {
      return req.body;
    }
  
    @Patch('/:userId')
    updateUser(@Req() req: Request) {
      return req.body;
    }
  
    @Get('/:userId')
    getUser(@Param() params: { userId: number }) {
      return params;
    }
  
    @Delete('/:userId')
    deleteUser(@Param() params: { userId: number }) {
      return params;
    }
}
