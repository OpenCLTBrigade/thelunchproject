import { ClassEntityChild, Column } from 'typeorm'

import { User } from './user'

@ClassEntityChild()
export class Educator extends User {
    @Column() fullName: string
    @Column() school: string
    @Column() empathyTrainingLength: string
    @Column() gradeLevel: string
    @Column() isTeamLead: boolean
}
