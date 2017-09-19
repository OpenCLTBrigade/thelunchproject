import { h, Component } from 'preact'
import { setValue, getValue } from 'neoform-plain-object-helpers'
import { Section, Title } from 'bloomer'
import * as cxs from 'cxs'

import RegisterForm from './RegisterForm'
import Logo from '../../components/logo/Logo'
import Box from '../../components/box/Box'

const logo = cxs({
    marginBottom: '10px'
})

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

    onSubmit() {
        console.log('onSubmit', this.state)
    }
    render() {
        return (
            <Section>
                <Logo containerCls={logo} />
                <Box>
                    <Title>Register</Title>
                    <RegisterForm
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
