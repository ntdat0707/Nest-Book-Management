import { MigrationInterface, QueryRunner } from 'typeorm';

export class TestV011610535275537 implements MigrationInterface {
  name = 'testV011610535275537';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`COMMENT ON COLUMN "book"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "book"."updatedAt" IS NULL`);
    await queryRunner.query(
      `COMMENT ON COLUMN "customer_books"."createdAt" IS NULL`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "customer_books"."updatedAt" IS NULL`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "customer"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "customer"."updatedAt" IS NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`COMMENT ON COLUMN "customer"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "customer"."createdAt" IS NULL`);
    await queryRunner.query(
      `COMMENT ON COLUMN "customer_books"."updatedAt" IS NULL`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "customer_books"."createdAt" IS NULL`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "book"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "book"."createdAt" IS NULL`);
  }
}
