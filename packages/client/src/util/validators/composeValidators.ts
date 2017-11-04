export default (...validators) => value => Promise.all(validators.map(validator => validator(value)))
