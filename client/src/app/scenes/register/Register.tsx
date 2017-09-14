import { h, Component } from 'preact'
import RegisterForm from './RegisterForm'
import { setValue, getValue } from 'neoform-plain-object-helpers'
import { Section } from 'bloomer'

export default class Register extends Component<any, any> {
    constructor() {
        super()

        this.state = {}

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(name, value) {
        console.log(name, value)
        this.setState(prevState => setValue(prevState, name, value))
    }

    onInvalid() {
        console.log('onInvalid')
    }

    onSubmit(e) {
        console.log('onSubmit', this.state)
    }
    render() {
        return (
            <Section>
                <RegisterForm
                    data={this.state}
                    getValue={getValue}
                    onChange={this.onChange}
                    onInvalid={this.onInvalid}
                    onSubmit={this.onSubmit}
                />
            </Section>
        )
    }
}
