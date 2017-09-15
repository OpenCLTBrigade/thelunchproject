import { h, Component } from 'preact'
import LoginForm from './LoginForm'
import { setValue, getValue } from 'neoform-plain-object-helpers'
import AuthService from '../../services/auth/auth'
import { Section, Title } from 'bloomer'
import Logo from '../../components/logo/Logo'
import Box from '../../components/box/Box'

import * as cxs from 'cxs'

const logo = cxs({
    marginBottom: '10px'
})

export default class Login extends Component<any, any> {
    history: any
    constructor({ history }) {
        super()

        this.state = {}

        this.history = history

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(name, value) {
        this.setState(prevState => setValue(prevState, name, value))
    }

    onInvalid() {
        console.log('onInvalid')
    }

    onSubmit() {
        console.log(this.history)
        AuthService.login(this.state).then(() => this.history.push('/'))
    }
    render() {
        return (
            <Section>
                <Logo className={logo} />
                <Box>
                    <Title>Login</Title>
                    <LoginForm
                        data={this.state}
                        getValue={getValue}
                        onChange={this.onChange}
                        onInvalid={this.onInvalid}
                        onSubmit={this.onSubmit}
                    />
                </Box>
            </Section>
        )
    }
}
