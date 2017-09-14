import { h, FunctionalComponent } from 'preact'

import { Input as FormInput, Field, Label, Control, Select, Help } from 'bloomer'

import { Field as createField } from 'neoform'
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
}) => (
    <Field>
        <Label for={name}>{label}</Label>
        <Control>
            <FormInput
                id={name}
                name={name}
                value={value}
                onBlur={validate}
                onChange={e => onChange(e.target.value)}
                isColor={getValidationState(validationStatus)}
                {...props}>
                {children && children}
            </FormInput>
        </Control>
        {validationStatus === false && <Help isColor={getValidationState(validationStatus)}>{validationMessage}</Help>}
    </Field>
)

export default createField(FieldValidation(Input)) as FunctionalComponent<InputProps>
