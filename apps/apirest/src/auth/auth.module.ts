import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, PrismaService],
})
export class AuthModule {}
