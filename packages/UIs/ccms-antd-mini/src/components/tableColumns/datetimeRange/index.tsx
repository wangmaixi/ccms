import React from 'react'
import { DatetimeRangeColumn } from '@test/ccms'
import { IDatetimeRangeColumn, DatetimeRangeColumnConfig } from '@test/ccms/dist/src/components/tableColumns/datetimeRange'

export const PropsType = (props: DatetimeRangeColumnConfig) => { }

export default class DatetimeRangeColumnComponent extends DatetimeRangeColumn {
  renderComponent = (props: IDatetimeRangeColumn) => {
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
