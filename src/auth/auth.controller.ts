import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/dto/login-dto';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() login: LoginDto) {
    const userLogin = await this.authService.login(login);
    return userLogin;
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  async profile(@Req() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    return await this.authService.profile(req.user.email);
  }

  @Put('update-profile')
  @UseGuards(AuthGuard)
  async updateProfile(
    @Req() req: any,
    @Body()
    data: { biografia?: string; profilePic?: string; bannerPic?: string },
  ) {
    const updatedUser = await this.userService.updateProfile(req.user.id, data);
    return {
      message: 'Perfil actualizado con éxito',
      user: updatedUser,
    };
  }
}
