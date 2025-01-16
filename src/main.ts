import { NestFactory } from '@nestjs/core';
import { Logger } from "@nestjs/common";
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("NestApplication");

  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Application running on port ${process.env.PORT}`);
}
bootstrap();
