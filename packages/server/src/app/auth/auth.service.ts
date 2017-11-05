import { getRepository } from 'typeorm'

import { encodeToken } from '../util/jwt'
import { hashPassword, verifyPassword } from '../util/crypto'
import { User, Educator } from '../entities'
// import { User as UserModel } from '../models'
import logger from '../util/logger'

export const getToken = async ({ email, password }) => {
    logger.info('authenticating user', { email })

    try {
        let user = await getRepository(User).findOne({ email })

        let match = await verifyPassword(password, user.password)

        return match ? await encodeToken({ email: user.email }) : undefined
    } catch (error) {
        logger.error(error)
        return undefined
    }
}

export const registerUser = async user => {
    try {
        const repo = getRepository(User)
        user.password = await hashPassword(user.password)
        return await repo.save(user)
    } catch (error) {
        logger.error(error)

        return undefined
    }
}

export const registerEducator = async educator => {
    try {
        const repo = getRepository(Educator)

        educator.password = await hashPassword(educator.password)
        return await repo.save(educator)
    } catch (error) {
        logger.error(error)

        return undefined
    }
}

export const userExists = async email => {
    try {
        const repo = getRepository(User)

        const existing = await repo.findOne({ email })
        return !!existing
    } catch (error) {
        logger.error(error)

        return false
    }
}
