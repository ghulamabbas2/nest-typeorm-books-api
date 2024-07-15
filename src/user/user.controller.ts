import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.findAll();
  }

  @Post()
  async createUser(@Body() body) {
    const { name, email, password } = body;
    return this.userService.create(name, email, password);
  }
}
