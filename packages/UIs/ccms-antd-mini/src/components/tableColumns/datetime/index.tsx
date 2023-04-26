import React from 'react'
import { DatetimeColumn } from '@test/ccms'
import { IDatetimeColumn } from '@test/ccms/dist/src/components/tableColumns/datetime'
import moment from 'moment'

export default class DatetimeColumnComponent extends DatetimeColumn {
  renderComponent = (props: IDatetimeColumn) => {
    const { value } = props
    return <>{moment(value)}</>
  }
}
