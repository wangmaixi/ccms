import React from 'react'
import { TextColumn } from '@test/ccms'
import { ITextColumn } from '@test/ccms/dist/src/components/tableColumns/text'

export default class TextColumnComponent extends TextColumn {
  renderComponent = (props: ITextColumn) => {
    const { value } = props
    return <>{value}</>
  }
}
