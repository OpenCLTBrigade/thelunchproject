import { h, Component } from 'preact'
import LoginForm from './LoginForm'
import { setValue, getValue } from 'neoform-plain-object-helpers'
import AuthService from '../../services/auth/auth'
import { Section } from 'bloomer'

export default class Login extends Component<any, any> {
    constructor() {
        super()

        this.state = {}

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(name, value) {
        this.setState(prevState => setValue(prevState, name, value))
    }

    onInvalid() {
        console.log('onInvalid')
    }

    onSubmit(e) {
        AuthService.login(this.state)
        console.log('onSubmit', this.state)
    }
    render() {
        return (
            <Section>
                <LoginForm
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
