const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g

export default (validationMessage: string = 'Not a valid email') => (value: string) => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return Promise.resolve()
    }

    if (regex.test(value)) return Promise.resolve()

    return Promise.reject(validationMessage)
}
