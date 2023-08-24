import { Text } from "native-base"


export function Titulo({ children, ...rest }){
  return (
    <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        mt={5}
        mb={22}
        {...rest}
      >
        {children}
      </Text>
  )
}