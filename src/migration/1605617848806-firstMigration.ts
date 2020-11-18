import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1605617848806 implements MigrationInterface {
    name = 'firstMigration1605617848806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "statistics" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "statistics" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "statistics" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "statistics" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statistics" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "statistics" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "statistics" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "statistics" ADD "createdAt" date NOT NULL`);
    }

}
