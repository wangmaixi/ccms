import React from 'react'
import { SelectSingleField } from '@test/ccms'
import { ISelectSingleField } from '@test/ccms/dist/src/components/formFields/select/single'
import { Radio, Select } from 'antd'
import InterfaceHelper from '../../../../util/interface'

export default class SelectSingleFieldComponent extends SelectSingleField {
  interfaceHelper = new InterfaceHelper()

  renderDorpdownComponent = (props: ISelectSingleField) => {
    const { value, options, onChange, onClear, disabled, placeholder } = props

    return (
      <Select
        getPopupContainer={(ele) => ele.parentElement || document.body}
        disabled={disabled}
        placeholder={placeholder}
        value={value as any}
        onChange={(value) => onChange(value)}
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

  renderRadioComponent = (props: ISelectSingleField) => {
    const { value, options, onChange, disabled } = props

    return (
      <Radio.Group disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)} options={options} />
    )
  }

  renderButtonComponent = (props: ISelectSingleField) => {
    const { value, options, onChange, disabled } = props

    return (
      <Radio.Group
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        options={options}
        optionType="button"
      />
    )
  }
}
