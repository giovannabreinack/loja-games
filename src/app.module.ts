import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234567',
      database: 'db_lojagames',
      // entities: [Postagem, Tema],
      synchronize: true,
      logging: true,
    }),
    // PostagemModule,
    // TemaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
