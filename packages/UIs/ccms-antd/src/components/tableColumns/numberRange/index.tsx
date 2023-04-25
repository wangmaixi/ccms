import React from 'react'
import { NumberRangeColumn } from '@test/ccms'
import { INumberRangeColumn, NumberRangeColumnConfig } from '@test/ccms/dist/src/components/tableColumns/numberRange'

export const PropsType = (props: NumberRangeColumnConfig) => { }

export default class NumberRangeColumnComponent extends NumberRangeColumn {
  renderComponent = (props: INumberRangeColumn) => {
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
