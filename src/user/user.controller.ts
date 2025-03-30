import { Controller, Post, Body, Param } from '@nestjs/common';
import { Createuser } from '../dto/user-dto';
import { UserService } from './user.service';
import { updatedUser } from 'src/dto/updateUser-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // route to create a new user
  @Post('/create')
  async createUser(@Body() user: Createuser) {
    const newUser = await this.userService.createUser(user);
    return { message: 'User creado', user: newUser };
  }

  @Post(':user/settings')
  async updateUser(@Param('id') id: string, @Body() data: updatedUser) {
    return await this.userService.updateData(Number(id), data);
  }
}
