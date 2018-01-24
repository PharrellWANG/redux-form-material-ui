import DatePicker from 'material-ui-previous/DatePicker'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(DatePicker, ({
  input: { onBlur, ...inputProps },
  defaultDate,
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
