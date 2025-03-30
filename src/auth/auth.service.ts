import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from 'src/dto/login-dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('password is wrong');
    }

    const payload = { email: user.email };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email,
    };
  }

  async profile(email: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Usuario no existente');
    }

    return {
      email: user.email,
      name: user.name,
      biografia: user.biografia,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      profileImage: user.profileImage,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      bannerImage: user.bannerImage,
    };
  }
}
