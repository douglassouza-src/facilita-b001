import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTasksTable1704564284956 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Tasks_Table",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: "description",
                    type: "varchar",
                    length: "18",
                    isNullable: false,
                    isUnique: true,                    
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Tasks_Table", true, true, true);
    }

}
