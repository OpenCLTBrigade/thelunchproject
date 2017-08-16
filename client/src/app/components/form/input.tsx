import { h } from 'preact'
import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'

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

const Input = ({
    label,
    controlId,
    value = '',
    onChange,
    validate,
    validationStatus,
    validationMessage,
    children,
    ...props
}) =>
    <FormGroup controlId={controlId} danger={getValidationState(validationStatus)}>
        <Label>
            {label}
        </Label>
        <Input value={value} onBlur={validate} onChange={e => onChange(e.target.value)} {...props}>
            {children && children}
        </Input>
        {validationStatus === false &&
            <FormFeedback>
                {validationMessage}
            </FormFeedback>}
    </FormGroup>

export default Field(FieldValidation(Input))
