import React from 'react'
import { MultipleTextDisplay } from '@test/ccms'
import { IMultipleTextField } from '@test/ccms/dist/src/components/formFields/multipleText/display'

export default class MultipleTextDisplayComponent extends MultipleTextDisplay {
  renderComponent = (props: IMultipleTextField) => {
    const { value } = props

    return <>{value && value.length > 0 && value.join('，')}</>
  }
}
