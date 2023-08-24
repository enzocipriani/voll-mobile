import { FormControl, Input} from 'native-base'


export function Senha ({ children, ...rest}) {
  return (
    <FormControl mt={3}>
          <FormControl.Label {...rest}>
            { children }
          </FormControl.Label>

        </FormControl>
  )
}