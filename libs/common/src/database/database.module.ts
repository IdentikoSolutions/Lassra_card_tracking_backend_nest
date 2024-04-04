import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from '@nestjs/common/cache/cache.module-definition';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../../../../typeorm.config';
// import { Batch } from 'apps/batches/src/entities/batch.entity';
// import { Card } from 'apps/batches/src/produced/entities/produced.entity';
// import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    // TypeOrmModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get('POSTGRES_HOST'), //'localhost' || 'postgres', // You can use environment variables if needed
    //     port: configService.get('POSTGRES_PORT'),
    //     username: configService.get('POSTGRES_USER'),
    //     password: configService.get('POSTGRES_PASSWORD'),
    //     database: configService.get('POSTGRES_DATABASE'),
    //     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    //     // migrations: ['/../**/migrations/*.js'],
    //     // cli: {
    //     //   migrationsDir: '/libs/commom/src/database/migrations',
    //     // },
    //     // migrations: ['dist/batches/migrations/*.js'],
    //     // migrationsTableName: 'task_migrations',
    //     autoLoadEntities: true,
    //     // synchronize: true,
    //     logging: true,
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
})
export class DatabaseModule {
  // static forFeature(models: ModelDefinition[]) {
  //   return MongooseModule.forFeature(models);
  // }
}
