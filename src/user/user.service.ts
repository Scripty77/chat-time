import { Injectable } from '@nestjs/common';
import { Createuser } from 'src/dto/user-dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: Createuser) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    return await this.prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async updateData(
    id: number,
    data: Partial<{ name: string; biografia: string }>,
  ) {
    try {
      const { name, biografia } = data;
      if (!name && !biografia) {
        throw new Error('No hay datos para actualizar');
      }
      return await this.prisma.user.update({
        where: { id },
        data: {
          ...(name && { name }),
          ...(biografia && { biografia }),
        },
      });
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new Error(`Error al actualizar los datos: ${error.message}`);
    }
  }

  async updateProfile(
    id: number,
    data: { biografia?: string; profileImage?: string; bannerImage?: string },
  ) {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }
}
