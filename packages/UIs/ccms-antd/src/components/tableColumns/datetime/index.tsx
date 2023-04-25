import React from 'react'
import { DatetimeColumn } from '@test/ccms'
import { IDatetimeColumn, DatetimeColumnConfig } from '@test/ccms/dist/src/components/tableColumns/datetime'

export const PropsType = (props: DatetimeColumnConfig) => { };

export default class DatetimeColumnComponent extends DatetimeColumn {
  renderComponent = (props: IDatetimeColumn) => {
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
