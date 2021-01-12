import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('string')
  code: string;

  @Column('string')
  name: string;

  @Column('number')
  price: number;

  @Column('string', { nullable: true })
  type: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true, select: false })
  deletedAt: Date;

  setAttributes(object: any) {
    if (object.code) this.code = object.code;
    if (object.name) this.name = object.name;
    if (object.price) this.price = object.price;
    if (object.type) this.type = object.type;
  }
}
