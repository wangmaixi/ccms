import React from 'react'
import { RadioDisplay } from '@test/ccms'
import { IRadioField } from '@test/ccms/dist/src/components/formFields/radio/display'

export default class RadioDisplayComponent extends RadioDisplay {
  renderComponent = (props: IRadioField) => {
    const { value, options } = props
    return (
      <>
        {
          options && options.length > 0 && options.find((item: any) => item.value === value)?.label
        }
      </>
    )
  }
}
