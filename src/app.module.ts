import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'leon123',
      database: 'NestJsCRUD',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
