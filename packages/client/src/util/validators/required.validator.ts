export default (validationMessage: string = '') => value => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return Promise.reject(validationMessage)
    }

    return Promise.resolve()
}
