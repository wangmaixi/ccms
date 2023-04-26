import { InterfaceHelper as _InterfaceHelper } from '@test/ccms'
import { IRenderFailModal, IRenderSuccessModal } from '@test/ccms/dist/src/util/interface'
import { Modal } from 'antd'

export default class InterfaceHelper extends _InterfaceHelper {
  renderSuccessModal: (props: IRenderSuccessModal) => Promise<void> = (props) => {
    return new Promise((resolve) => {
      Modal.success({
        title: props.message,
        onOk: () => {
          resolve()
        }
      })
    })
  }

  renderFailModal: (props: IRenderFailModal) => Promise<void> = (props) => {
    return new Promise<void>((resolve) => {
      Modal.error({
        title: props.message,
        onOk: () => {
          resolve()
        }
      })
    })
  }
}
