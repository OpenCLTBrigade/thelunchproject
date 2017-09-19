import { h } from 'preact'
import { Checkbox, Field, Control } from 'bloomer'

import { Field as createField } from 'neoform'

const FormCheckbox = ({ label, value = false, onChange, children, name, ...props }) => (
    <Field check>
        <Control>
            <Checkbox id={name} name={name} onChange={e => onChange(e.target.checked)} {...props}>
                {label}
            </Checkbox>
        </Control>
    </Field>
)

export default createField(FormCheckbox)
