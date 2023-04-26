import React from 'react'
import { Switch } from 'antd'
import { SwitchField } from '@test/ccms'
import { ISwitchField, SwitchFieldConfig } from '@test/ccms/dist/src/components/formFields/switch'

export const PropsType = (props: SwitchFieldConfig) => { }

export default class SwitchFieldComponent extends SwitchField {
  renderComponent = (props: ISwitchField) => {
    const { value, onChange } = props

    return <Switch checked={value} onChange={(checked) => onChange(checked)} />
  }
}
