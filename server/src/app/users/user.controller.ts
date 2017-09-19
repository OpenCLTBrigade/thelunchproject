import { JsonController, Get } from 'routing-controllers'

@JsonController('/users')
export default class UserController {
    @Get()
    async getAll() {
        return await { users: [] }
    }
}
