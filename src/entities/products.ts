import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, BaseEntity, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('product')
export default class Product extends BaseEntity{
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