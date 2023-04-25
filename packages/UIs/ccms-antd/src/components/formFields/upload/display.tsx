import React from 'react'
import { Space, Tooltip } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { UploadDisplay } from '@test/ccms'
import { IUploadField } from '@test/ccms/dist/src/components/formFields/upload/display'
import styles from './index.less'

export default class UploadDisplayComponent extends UploadDisplay {
  renderComponent = (props: IUploadField) => {
    const { mode = 'file', value } = props
    return (
      <>
        {mode === 'image' ? (
          value ? (
            <div className={styles['ccms-antd-upload-image']}>
              <img className={styles.image} src={value} alt={value} />
              <div className={styles.mask}>
                <Tooltip overlay="查看" getPopupContainer={(ele) => ele.parentElement || document.body}>
                  <EyeOutlined
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(value)
                    }}
                  />
                </Tooltip>
              </div>
            </div>
          ) : (
            <div className={styles['ccms-antd-upload-image']}>
              <div className={styles.empty}>
                <span>未上传</span>
              </div>
            </div>
          )
        ) : (
          value
        )}
      </>
    )
  }
}
