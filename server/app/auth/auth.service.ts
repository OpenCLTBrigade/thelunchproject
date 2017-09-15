import { getEntityManager } from 'typeorm'

import { encodeToken } from '../util/jwt'
import { hashPassword, verifyPassword } from '../util/crypto'
import { User, Educator } from '../entities'
import { User as UserModel } from '../models'
import logger from '../util/logger'

const getRepo = <T>(table: string) => getEntityManager().getRepository<T>(table)

export const getToken = async ({ email, password }) => {
    logger.info('authenticating user', { email })
    try {
        let user = await getRepo<User>('User').findOne({ email })
        let match = await verifyPassword(password, user.password)

        return match ? await encodeToken({ email: user.email }) : undefined
    } catch (error) {
        logger.error(error)
        return undefined
    }
}

export const registerUser = async user => {
    try {
        const repo = getRepo<User>('User')
        user.password = await hashPassword(user.password)
        return await repo.persist(user)
    } catch (error) {
        logger.error(error)

        return undefined
    }
}

export const registerEducator = async educator => {
    try {
        const repo = getRepo<Educator>('Educator')

        educator.password = await hashPassword(educator.password)
        return await repo.persist(educator)
    } catch (error) {
        logger.error(error)

        return undefined
    }
}

export const userExists = async email => {
    try {
        const repo = getRepo<User>('User')

        const existing = await repo.findOne({ email })
        return !!existing
    } catch (error) {
        logger.error(error)

        return false
    }
}
