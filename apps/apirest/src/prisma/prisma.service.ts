// prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
// This service extends PrismaClient and implements lifecycle hooks to connect and disconnect from the database when the module is initialized and destroyed, respectively.
// This ensures that the Prisma client is properly managed within the NestJS application lifecycle.