import React from 'react'
import { FormattedTextColumn } from '@test/ccms'
import { IFormattedTextColumn } from '@test/ccms/dist/src/components/tableColumns/formattedText'
import styles from './index.less'

export default class FormattedTextColumnComponent extends FormattedTextColumn {
  renderComponent = (props: IFormattedTextColumn) => {
    const { text } = props

    return <div className={styles['ccms-table-formatted-text']}>{text}</div>
  }
}
