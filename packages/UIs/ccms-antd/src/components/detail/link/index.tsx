import React from 'react'
import { DetailLink } from '@test/ccms'
import { ILinkDetail } from '@test/ccms/dist/src/components/detail/link'

export default class LinkDetailComponent extends DetailLink {
  renderComponent = (props: ILinkDetail) => {
    const { url, name } = props
    return url && name ? (
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    ) : (
      <>{name}</>
    )
  }
}
