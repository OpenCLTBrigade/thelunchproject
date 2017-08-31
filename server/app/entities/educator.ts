import { ClassEntityChild, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import { User } from './user'
import { Educator as EducatorModel } from '../models/educator'

@ClassEntityChild()
export class Educator extends User {
    @Column() fullName: string
    @Column() school: string
    @Column() empathyTrainingLength: string
    @Column() gradeLevel: string
    @Column() isTeamLead: boolean
}
