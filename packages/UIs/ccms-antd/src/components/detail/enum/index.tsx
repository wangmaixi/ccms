import React from 'react'
import { DetailEunmField } from '@test/ccms'
import { IEnumProps, EnumDetailConfig } from '@test/ccms/dist/src/components/detail/enum'

export const PropsType = (props: EnumDetailConfig) => { }

export default class EnumDetailComponent extends DetailEunmField {
  renderComponent = (props: IEnumProps) => {
    const { value } = props

    return <div>{value}</div>
  }
}
