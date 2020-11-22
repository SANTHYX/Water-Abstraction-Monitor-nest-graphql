import {MigrationInterface, QueryRunner} from "typeorm";

export class myMigration1606066616788 implements MigrationInterface {
    name = 'myMigration1606066616788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subtraction" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "subtraction" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "subtraction" ADD CONSTRAINT "FK_240ca3301590930757a13275565" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subtraction" DROP CONSTRAINT "FK_240ca3301590930757a13275565"`);
        await queryRunner.query(`ALTER TABLE "subtraction" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "subtraction" DROP COLUMN "createdAt"`);
    }

}
