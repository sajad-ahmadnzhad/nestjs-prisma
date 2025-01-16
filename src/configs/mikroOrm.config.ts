import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export const mikroOrmConfig = (): MikroOrmModuleOptions => {
  const {
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
  } = process.env;

  return {
    driver: PostgreSqlDriver,
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USERNAME,
    password: DB_PASSWORD,
    dbName: DB_NAME,
    autoLoadEntities: false,
    entities: ["./dist/**/*.entity.js"],
    entitiesTs: ['./src/**/*.entity.ts'],
    discovery: {
      warnWhenNoEntities: false
    }
  };
};
