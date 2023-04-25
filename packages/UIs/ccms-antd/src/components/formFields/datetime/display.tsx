import React from 'react'
import { DatetimeDisplay } from '@test/ccms'
import { IDatetimeField } from '@test/ccms/dist/src/components/formFields/datetime/display'

export default class DatetimeDisplayComponent extends DatetimeDisplay {
  renderComponent = (props: IDatetimeField) => {
    const { value, format } = props
    return <>{value ? value.format(format) : ''}</>
  }
}
