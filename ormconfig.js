// https://github.com/IdentikoSolutions/Lasra_card_tracking/invitationshttps://github.com/IdentikoSolutions/Lasra_card_tracking/invitations
// ormconfig.js
module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'card_tracker',
  password: 'card_tracker',
  database: 'card_tracker',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // In development, set to true; in production, set to false
};
