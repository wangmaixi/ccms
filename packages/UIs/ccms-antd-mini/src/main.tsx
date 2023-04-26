import React from 'react'
import { CCMS } from '@test/ccms'
import { ICCMS } from '@test/ccms/dist/src/main'
import { PageHeader, Space } from 'antd'
import StepComponents from './steps'
import styles from './main.less'

export default class CCMSComponent extends CCMS {
  getStepComponent = (key: string) => StepComponents[key]

  renderComponent = (props: ICCMS) => {
    const { title, description, children } = props
    return (
      <div id="ccms-antd-mini" className={styles['ccms-antd-mini']}>
        <Space style={{ width: '100%' }} direction="vertical">
          <PageHeader title={title}>{description}</PageHeader>
          <div style={{ padding: '16px 0', margin: '0 24px', borderTop: '1px solid rgba(0,0,0,.06)' }}>{children}</div>
        </Space>
      </div>
    )
  }
}
