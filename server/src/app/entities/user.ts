import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    TableInheritance,
    DiscriminatorColumn
} from 'typeorm'
import Base from './base'

@Entity()
@TableInheritance('class-table')
@DiscriminatorColumn({ name: 'type', type: 'text' })
export class User extends Base {
    @PrimaryGeneratedColumn() id: number
    @Column() email: string
    @Column() password: string
    @CreateDateColumn() created
    @UpdateDateColumn() updated

    roles: string[]
}
