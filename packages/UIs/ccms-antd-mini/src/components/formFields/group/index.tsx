import React from 'react'
import { GroupField } from '@test/ccms'
import { IGroupField, GroupFieldConfig } from '@test/ccms/dist/src/components/formFields/group'
import { IFormItem } from '@test/ccms/dist/src/steps/form'
import { Form } from 'antd'
import { FormItemProps } from 'antd/lib/form'
import getALLComponents from '../'
import styles from './index.less'

export const PropsType = (props: GroupFieldConfig) => { }

export default class GroupFieldComponent extends GroupField {
  getALLComponents = (type: any) => getALLComponents[type]

  renderComponent = (props: IGroupField) => {
    const {
      children
    } = props
    return (
      <div>
        {children}
      </div>
    )
  }

  renderItemComponent = (props: IFormItem) => {
    const {
      key,
      label,
      visitable,
      message,
      extra,
      required,
      fieldType,
      children
    } = props

    const formItemLayout: FormItemProps = { labelAlign: 'left' }
    if (fieldType === 'form' || fieldType === 'group' || fieldType === 'object' || fieldType === 'import_subform') {
      formItemLayout.labelCol = { span: 24 }
      formItemLayout.wrapperCol = { span: 24 }
    } else {
      formItemLayout.labelCol = { span: 6 }
      formItemLayout.wrapperCol = { span: 18 }
    }

    return (
      <Form.Item
        key={key}
        extra={extra ? extra.trim() : ''}
        required={required}
        label={label}
        {...formItemLayout}
        validateStatus={status === 'normal' ? undefined : status === 'error' ? 'error' : 'validating'}
        help={fieldType === 'import_subform' || fieldType === 'group' ? null : message}
        className={styles[`ccms-antd-mini-form-${fieldType}`]}
        style={visitable ? {} : { overflow: 'hidden', width: 0, height: 0 }}
      >
        {children}
      </Form.Item>
    )
  }
}
