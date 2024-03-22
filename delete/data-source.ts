// import { DataSource, DataSourceOptions } from 'typeorm';

// export const dataSourceOptions: DataSourceOptions = {
//   type: 'postgres',
//   host: 'localhost', //configService.get('POSTGRES_HOST'), //'localhost' || 'postgres', // You can use environment variables if needed
//   port: 5432, //configService.get('POSTGRES_PORT'),
//   username: 'card_tracker', // configService.get('POSTGRES_USER'),
//   password: 'card_tracker', //configService.get('POSTGRES_PASSWORD'),
//   database: 'card_tracker', // configService.get('POSTGRES_DATABASE'),
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   //   migrations: ['/../**/migrations/*.js'],
//   // cli: {
//   //   migrationsDir: '/libs/commom/src/database/migrations',
//   // },
//   migrations: ['db/migrations/*{.js,.ts}'],
//   // migrationsTableName: 'task_migrations',
// //   autoLoadEntities: true,
// //   synchronize: false,
//   logging: true,
// };
// const dataSource = new DataSource(dataSourceOptions);
// export default dataSource;
