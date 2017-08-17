import { h } from 'preact'
import { FormGroup, Label, Input as FormInput } from 'reactstrap'

import { Field } from 'neoform'

const Checkbox = ({ label, value = false, onChange, children, name, ...props }) =>
    <FormGroup check>
        <Label for={name} check>
            <FormInput id={name} name={name} onChange={e => onChange(e.target.checked)} type="checkbox" {...props} />
            {label}
        </Label>
    </FormGroup>

export default Field(Checkbox)
