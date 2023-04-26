import React from 'react'
import { TextField } from '@test/ccms'
import { Input } from 'antd'
import { ITextField } from '@test/ccms/dist/src/components/formFields/text'

export default class TextFieldComponent extends TextField {
  renderComponent = (props: ITextField) => {
    const { value, onChange } = props

    return (
      <Input
        value={value}
        onChange={async (e) => {
          await onChange(e.currentTarget.value)
        }}
      />
    )
  }
}
