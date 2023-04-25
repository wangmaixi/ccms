
import { FetchStep } from '@test/ccms'
import { FetchConfig } from '@test/ccms/dist/src/steps/fetch'
import InterfaceHelper from '../../util/interface'

export default class FetchComponent extends FetchStep {
  interfaceHelper = new InterfaceHelper()
}
export const PropsType = (props: FetchConfig) => { };
