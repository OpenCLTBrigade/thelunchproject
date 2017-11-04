import { h } from 'preact'

import { Form as createForm } from 'neoform'
import { FormValidation } from 'neoform-validation'
import { Button } from 'bloomer'
import Input from '../../components/form/Input'
import Checkbox from '../../components/form/Checkbox'
import RequiredValidator from '../../../util/validators/required.validator'
import EmailValidator from '../../../util/validators/email.validator'
import compose from '../../../util/validators/composeValidators'

const LoginForm = ({ onSubmit, validate, onInvalid }) => {
    return (
        <form
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
        </form>
    )
}

export default createForm(FormValidation(LoginForm))
