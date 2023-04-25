import React from 'react'
import { NumberDisplay } from '@test/ccms'
import { INumberField } from '@test/ccms/dist/src/components/formFields/number/display'

export default class NumberDisplayComponent extends NumberDisplay {
  renderComponent = (props: INumberField) => {
    const { value } = props
    return <>{value}</>
  }
}
