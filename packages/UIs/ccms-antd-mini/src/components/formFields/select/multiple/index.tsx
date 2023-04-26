import React from 'react'
import { SelectMultipleField } from '@test/ccms'
import { Checkbox, Select } from 'antd'
import { ISelectMultipleField } from '@test/ccms/dist/src/components/formFields/select/multiple'
import InterfaceHelper from '../../../../util/interface'

export default class SelectSingleFieldComponent extends SelectMultipleField {
  interfaceHelper = new InterfaceHelper()

  renderDorpdownComponent = (props: ISelectMultipleField) => {
    const { value, options, onChange, onClear, disabled, placeholder } = props

    return (
      <Select
        getPopupContainer={(ele) => ele.parentElement || document.body}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(value) => onChange(value)}
        mode="multiple"
        allowClear={onClear !== undefined}
        onClear={() => onClear !== undefined && onClear()}
      >
        {options.map((option) => (
          <Select.Option key={option.value as any} value={option.value as any}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    )
  }

  renderCheckboxComponent = (props: ISelectMultipleField) => {
    const { value, options, onChange, disabled } = props

    return (
      <Checkbox.Group
        disabled={disabled}
        value={value}
        onChange={(value) => onChange(value as Array<string | number>)}
        options={options}
      />
    )
  }
}
