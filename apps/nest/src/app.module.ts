import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.DB.HOSTNAME,
      port: config.DB.PORT,
      username: config.DB.USERNAME,
      password: config.DB.PASSWORD,
      database: config.DB.DB_NAME,
      entities: [],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
