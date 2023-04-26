import React from 'react'
import { NumberColumn } from '@test/ccms'
import { INumberColumn, NumberColumnConfig } from '@test/ccms/dist/src/components/tableColumns/number'

export const PropsType = (props: NumberColumnConfig) => { }

export default class NumberColumnComponent extends NumberColumn {
  renderComponent = (props: INumberColumn) => {
    const { value } = props
    return <>{value}</>
  }
}
