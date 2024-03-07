import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from '@nestjs/common/cache/cache.module-definition';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Batch } from 'apps/batches/src/entities/batch.entity';
// import { Card } from 'apps/batches/src/produced/entities/produced.entity';
// import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost' || 'postgres', // You can use environment variables if needed
      port: 5432,
      username: 'card_tracker',
      password: 'card_tracker',
      database: 'card_tracker',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  ],
})
export class DatabaseModule extends ConfigurableModuleClass {
  // static forFeature(models: ModelDefinition[]) {
  //   return MongooseModule.forFeature(models);
  // }
}
