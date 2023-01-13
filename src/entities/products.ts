import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, BaseEntity, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('produto')
export default class Produto extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: String;

    @Column()
    category: String;

    @Column({default: true})
    status: boolean;

    @Column()
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}