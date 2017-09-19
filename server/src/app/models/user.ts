import { MinLength, IsEmail } from 'class-validator'

export class User {
    id: number
    @IsEmail() email: string

    @MinLength(6)
    password: string
}
