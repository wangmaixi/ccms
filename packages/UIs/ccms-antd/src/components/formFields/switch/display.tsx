import React from 'react'
import { SwitchDisplay } from '@test/ccms'
import { ISwitchField } from '@test/ccms/dist/src/components/formFields/switch/display'

export default class SwitchDisplayComponent extends SwitchDisplay {
  renderComponent = (props: ISwitchField) => {
    const { value } = props
    return <>{value ? '是' : '否'}</>
  }
}
