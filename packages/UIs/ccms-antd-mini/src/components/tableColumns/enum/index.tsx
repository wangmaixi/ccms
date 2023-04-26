import React from 'react'
import { EnumColumn } from '@test/ccms'
import { IEnumColumn } from '@test/ccms/dist/src/components/tableColumns/enum'
import InterfaceHelper from '../../../util/interface'

export default class EnumColumnComponent extends EnumColumn {
  interfaceHelper = new InterfaceHelper()

  renderComponent = (props: IEnumColumn) => {
    const { value } = props
    return <>{value}</>
  }
}
