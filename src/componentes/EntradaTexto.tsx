import { FormControl, Input } from "native-base"


export function EntradaTexto({ children, ...rest}){
  return (
    <FormControl mt={3}>
          <FormControl.Label>
            { children }
          </FormControl.Label>
          
        </FormControl>
  )
}

