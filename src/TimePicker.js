import TimePicker from 'material-ui-previous/TimePicker'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(TimePicker, ({
  input: { onBlur, ...inputProps },
  defaultTime,
  onChange,
  ...props
}) => ({
  ...inputProps,
  ...mapError(props),
  onChange: (event, value) => {
    inputProps.onChange(value)
    if (onChange) {
      onChange(value)
    }
  }
}))
