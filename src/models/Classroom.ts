import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

import { School } from './School';
import { User } from './User';

@Entity()
export class Classroom {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: false })
    name!: string;

    @Column({ nullable: false })
    section!: string;

    @ManyToOne(() => School, school => school.classrooms, { onDelete: 'CASCADE' })
    school!: School;

    @ManyToMany(() => User, { onDelete: 'CASCADE' })
    @JoinTable({ name: 'classroom_user' })
    users!: User[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
