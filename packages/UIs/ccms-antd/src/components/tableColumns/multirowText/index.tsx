import React from 'react'
import { MultirowTextColumn } from '@test/ccms'
import { IMultirowColumn, MultirowColumnConfig } from '@test/ccms/dist/src/components/tableColumns/multirowText'
export const PropsType = (props: MultirowColumnConfig) => { }

export default class MultirowColumnComponent extends MultirowTextColumn {
  renderComponent = (props: IMultirowColumn) => {
    const {
      value
    } = props
    return (
      <React.Fragment>
        {value}
      </React.Fragment>
    )
  }
}
