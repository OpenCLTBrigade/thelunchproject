import { h } from 'preact'

import { Field, Label, Control, Select } from 'bloomer'
import { Field as createField } from 'neoform'

const SelectField = ({ label, value = false, onChange, children, name, ...props }) => (
    <Field>
        <Label for={name}>
            {label}
            <Control>
                <Select id={name} name={name} onChange={e => onChange(e.target.value)} {...props}>
                    {children && children}
                </Select>
            </Control>
        </Label>
    </Field>
)

export default createField(SelectField)
