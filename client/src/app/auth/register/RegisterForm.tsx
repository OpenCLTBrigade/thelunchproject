import { h } from 'preact'

import { Form as createForm } from 'neoform'
import { FormValidation } from 'neoform-validation'
import { Form, Button } from 'reactstrap'
import Input from '../../components/form/input'
import Checkbox from '../../components/form/checkbox'
import RequiredValidator from '../../../util/validators/required.validator'

const RegisterForm = ({ onSubmit, validate, onInvalid }) => {
    return (
        <Form
            onSubmit={e => {
                e.preventDefault()
                validate(onSubmit, onInvalid)
            }}>
            <Input label="First name" type="text" name="firstName" validator={RequiredValidator('Required')} />
            <Input label="Last name" type="text" name="lastName" validator={RequiredValidator('Required')} />
            <Input label="Email address" type="email" name="email" validator={RequiredValidator('Required')} />
            <Input label="Password" type="password" name="password" validator={RequiredValidator('Required')} />
            <Input label="School" type="text" name="school" validator={RequiredValidator('Required')} />
            <Input label="Grade Level" type="select" name="gradeLevel" validator={RequiredValidator('Required')}>
                <option value="" />
                <option value="1">K-2</option>
                <option value="2">3-5</option>
                <option value="3">Middle school</option>
                <option value="4">High school</option>
            </Input>
            <Button type="submit">Login</Button>
        </Form>
    )
}

export default createForm(FormValidation(RegisterForm))
