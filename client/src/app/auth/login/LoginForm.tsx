import { h } from 'preact'

import { Form as createForm } from 'neoform'
import { FormValidation } from 'neoform-validation'
import { Form, Button } from 'reactstrap'
import Input from '../../components/form/input'
import Checkbox from '../../components/form/checkbox'
import RequiredValidator from '../../../util/validators/required.validator'
import EmailValidator from '../../../util/validators/email.validator'
import compose from '../../../util/validators/composeValidators'

const LoginForm = ({ onSubmit, validate, onInvalid }) => {
    return (
        <Form
            onSubmit={e => {
                e.preventDefault()
                validate(onSubmit, onInvalid)
            }}>
            <Input
                label="Email address"
                type="email"
                name="email"
                validator={compose(RequiredValidator('Required'), EmailValidator())}
            />
            <Input label="Password" type="password" name="password" validator={RequiredValidator('Required')} />
            <Checkbox label="Remember me" name="rememberMe" />
            <Button type="submit">Login</Button>
        </Form>
    )
}

export default createForm(FormValidation(LoginForm))
