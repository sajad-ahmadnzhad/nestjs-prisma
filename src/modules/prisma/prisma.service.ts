import { Inject, Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    logger = new Logger('PrismaService')

    async onModuleInit() {
        await this.$connect()
        this.logger.log('Database Connected successfully')
    }

    async onModuleDestroy() {
        await this.$disconnect()
        this.logger.log("Database disconnected successfully")
    }
}
