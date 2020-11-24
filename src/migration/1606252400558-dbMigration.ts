import {MigrationInterface, QueryRunner} from "typeorm";

export class dbMigration1606252400558 implements MigrationInterface {
    name = 'dbMigration1606252400558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "statistics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "avgSubtraction" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c3769cca342381fa827a0f246a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "login" character varying(30) NOT NULL, "password" character varying NOT NULL, "email" character varying(25) NOT NULL, "nationality" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "statisticsId" uuid, CONSTRAINT "REL_0c1c48a4ef37b9c27f7555ba10" UNIQUE ("statisticsId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subtraction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "taskName" character varying NOT NULL, "value" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_97aee57371ef754ffffe54f76ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_0c1c48a4ef37b9c27f7555ba10d" FOREIGN KEY ("statisticsId") REFERENCES "statistics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subtraction" ADD CONSTRAINT "FK_240ca3301590930757a13275565" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subtraction" DROP CONSTRAINT "FK_240ca3301590930757a13275565"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_0c1c48a4ef37b9c27f7555ba10d"`);
        await queryRunner.query(`DROP TABLE "subtraction"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "statistics"`);
    }

}
