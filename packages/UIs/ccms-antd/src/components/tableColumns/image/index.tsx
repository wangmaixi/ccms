import React from 'react'
import { ImageColumn } from '@test/ccms'
import { IImageColumn, ImageColumnConfig } from '@test/ccms/dist/src/components/tableColumns/image'
export const PropsType = (props: ImageColumnConfig) => { }

export default class ImageColumnComponent extends ImageColumn {
  renderComponent = (props: IImageColumn) => {
    const { value, width, height } = props
    return (
      value ? <img src={value} style={{ width, height }} /> : <></>
    )
  }
}
