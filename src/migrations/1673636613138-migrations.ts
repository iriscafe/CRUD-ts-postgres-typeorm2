import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class migrations1673636613138 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'produtos',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'category',
                        type: 'varchar',
                    },
                    {
                        name: 'status',
                        type: 'boolean',
                        default: true
                    },
                    {
                        name: 'quantity',
                        type: 'integer',
                    },
                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'update_At',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'deleted_At',
                        type: 'timestamp',
                        default: 'now()',
                    },]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
