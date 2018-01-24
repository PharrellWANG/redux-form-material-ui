import Toggle from 'material-ui-previous/Toggle'
import createComponent from './createComponent'

export default createComponent(Toggle, ({
  input: { onChange, value, ...inputProps },
  defaultToggled,
  meta,
  ...props
}) => ({
  ...inputProps,
  ...props,
  onToggle: onChange,
  toggled: !!value
}))
