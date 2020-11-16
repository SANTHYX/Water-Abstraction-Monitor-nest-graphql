import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1605556462104 implements MigrationInterface {
    name = 'firstMigration1605556462104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "statistics" DROP CONSTRAINT "FK_744d1ec48fd655f17139c6da62a"`);
        await queryRunner.query(`ALTER TABLE "statistics" DROP CONSTRAINT "REL_744d1ec48fd655f17139c6da62"`);
        await queryRunner.query(`ALTER TABLE "statistics" DROP COLUMN "statisticsId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "statisticsId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_0c1c48a4ef37b9c27f7555ba10d" UNIQUE ("statisticsId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_0c1c48a4ef37b9c27f7555ba10d" FOREIGN KEY ("statisticsId") REFERENCES "statistics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_0c1c48a4ef37b9c27f7555ba10d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_0c1c48a4ef37b9c27f7555ba10d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "statisticsId"`);
        await queryRunner.query(`ALTER TABLE "statistics" ADD "statisticsId" uuid`);
        await queryRunner.query(`ALTER TABLE "statistics" ADD CONSTRAINT "REL_744d1ec48fd655f17139c6da62" UNIQUE ("statisticsId")`);
        await queryRunner.query(`ALTER TABLE "statistics" ADD CONSTRAINT "FK_744d1ec48fd655f17139c6da62a" FOREIGN KEY ("statisticsId") REFERENCES "statistics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
