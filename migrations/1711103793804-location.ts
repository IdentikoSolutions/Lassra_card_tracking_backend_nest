import { MigrationInterface, QueryRunner } from "typeorm";

export class Location1711103793804 implements MigrationInterface {
    name = 'Location1711103793804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cards" ADD "currentLocation" character varying NOT NULL DEFAULT 'Head office'`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "collectionCenter" character varying`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "pendingRequest" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "pendingRequest"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "collectionCenter"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "currentLocation"`);
    }

}
