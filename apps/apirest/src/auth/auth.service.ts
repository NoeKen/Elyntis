import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  // This service will handle user authentication logic
  // For example, user registration, login, JWT token generation, etc.
  // It can also interact with a database through a Prisma service or any other ORM.

  constructor(private prisma: PrismaService) {}

  async validateUser(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return null;

    const isValid = await bcrypt.compare(pass, user.password);
    if (isValid) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(email: string, password: string) {
    console.log('=========> Registering user:', email);
    if (!email || !password) {
      throw new UnauthorizedException('Email and password are required');
    }
    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new UnauthorizedException('Email already in use');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
