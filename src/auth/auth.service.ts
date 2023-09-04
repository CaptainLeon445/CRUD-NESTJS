import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string ) {
    const user = await this.userService.getUserByEmail(email);
    if (user) {
      if (user.password === password) {
        return user;
      }
      return "Password doesn't match";
    }
    return 'Unauthorized';
  }
}
