import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('Tasks_Table')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'varchar',
    length: 18,
    nullable: false,
    unique: true,
  })
  description!: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
