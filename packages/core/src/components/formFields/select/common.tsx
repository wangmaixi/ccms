import { ReactNode } from 'react'
import EnumerationHelper, { EnumerationOptionsConfig } from '../../../util/enumeration'
import InterfaceHelper from '../../../util/interface'
import { Field, FieldConfig, FieldProps, IField } from '../common'

export interface SelectFieldConfig extends FieldConfig {
  options?: EnumerationOptionsConfig
  defaultSelect?: boolean | number
}


export interface ISelectFieldOption {
  value: string | number | boolean,
  label: ReactNode,
  children?: Array<ISelectFieldOption>
}

interface SelectSingleFieldState {
  options: Array<{
    value: string | number | boolean
    label: string
    [extra: string]: any
  }>
}

export default class SelectField<C extends SelectFieldConfig, E, T> extends Field<C, E, T, SelectSingleFieldState> implements IField<T> {
  interfaceHelper = new InterfaceHelper()
  
  constructor (props: FieldProps<C, T>) {
    super(props)

    this.state = {
      options: []
    }
  }

  options = (
    config: EnumerationOptionsConfig | undefined
  ) => {
    if (config) {
      EnumerationHelper.options(config, (config, source) => this.interfaceHelper.request(config, source, { record: this.props.record, data: this.props.data, step: this.props.step }, { loadDomain: this.props.loadDomain })).then((options) => {
        if (JSON.stringify(this.state.options) !== JSON.stringify(options)) {
          this.setState({
            options
          })
        }
      })

      return this.state.options
    }
    return []
  }
}
