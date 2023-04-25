import React from 'react'
import { DetailStatementField } from '@test/ccms'
import { IStatementProps, StatementDetailConfig } from '@test/ccms/dist/src/components/detail/statement'

export const PropsType = (props: StatementDetailConfig) => { }

export default class StatementDetailComponent extends DetailStatementField {
  renderComponent = (props: IStatementProps) => {
    const { content } = props
    return <>{content}</>
  }
}
