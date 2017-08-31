export default abstract class {
    omit(...fields: string[]) {
        fields.forEach(field => delete this[field])

        return this
    }
}
