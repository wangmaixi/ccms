import React from 'react'
import { DescField } from '@test/ccms'
import { IDescField, DescFieldConfig } from '@test/ccms/dist/src/components/formFields/description'

export const PropsType = (props: DescFieldConfig) => { }

export default class DescFieldComponent extends DescField {
  renderComponent = (props: IDescField) => {
    const { desc, link, style } = props
    return <div style={{ ...style }}>{link ? <a href={link}>{desc}</a> : desc}</div>
  }
}
