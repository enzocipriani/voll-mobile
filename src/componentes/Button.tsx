import { Button } from 'native-base'


export function Button_page ({ children, ...rest}) {
  return (
    <Button
        w="100%"
        bg="blue.800"
        mt={10}
        borderRadius="lg"
        {...rest}
      >
        { children }
      </Button>
  )
}