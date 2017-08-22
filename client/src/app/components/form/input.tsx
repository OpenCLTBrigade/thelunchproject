import { h, FunctionalComponent } from 'preact'
import { FormGroup, Label, Input as FormInput, FormText, FormFeedback } from 'reactstrap'

import { Field } from 'neoform'
import { FieldValidation } from 'neoform-validation'

const getValidationState = validationStatus => {
    if (validationStatus === false) {
        return 'danger'
    }
    if (validationStatus) {
        return 'success'
    }

    return null
}

interface InputProps {
    label: string
    name: string
    value?: any
    onChange?: Function
    validate?: Function
    validationMessage?: string
    [index: string]: any
}

const Input: FunctionalComponent<InputProps> = ({
    label,
    value = '',
    onChange,
    validate,
    validationStatus,
    validationMessage,
    children,
    name,
    ...props
}) =>
    <FormGroup color={getValidationState(validationStatus)}>
        <Label for={name}>
            {label}
        </Label>
        <FormInput
            id={name}
            name={name}
            value={value}
            onBlur={validate}
            onChange={e => onChange(e.target.value)}
            {...props}>
            {children && children}
        </FormInput>
        {validationStatus === false &&
            <FormFeedback>
                {validationMessage}
            </FormFeedback>}
    </FormGroup>

export default Field(FieldValidation(Input)) as FunctionalComponent<InputProps>
