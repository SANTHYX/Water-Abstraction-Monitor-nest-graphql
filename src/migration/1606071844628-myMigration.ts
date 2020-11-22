import {MigrationInterface, QueryRunner} from "typeorm";

export class myMigration1606071844628 implements MigrationInterface {
    name = 'myMigration1606071844628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subtraction" ADD "task" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subtraction" ADD "value" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subtraction" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "subtraction" DROP COLUMN "task"`);
    }

}
