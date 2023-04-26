import React from 'react'
import { ImageColumn } from '@test/ccms'
import { IImageColumn } from '@test/ccms/dist/src/components/tableColumns/image'

export default class ImageColumnComponent extends ImageColumn {
  renderComponent = (props: IImageColumn) => {
    const { value, width, height } = props
    return <img src={value} style={{ objectFit: 'contain', width, height }} />
  }
}
