import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { TEMAS } from './estilos/temas'
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Senha } from './componentes/Senha';


export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>   
      <Image source={Logo} alt="Logo Voll" mt={22} mb={22}/>

      <Titulo>
        Faça login em sua conta
      </Titulo>

      <Box>
        <EntradaTexto />
        <Senha>
          apagar o de cima
        </Senha>
        
      </Box>

      <Button
        w="100%"
        bg="blue.800"
        mt={10}
        borderRadius="lg"
      >
        Entrar
      </Button>

      <Link
        href='https://www.alura.com.br'
        color="blue.800"
        mt={2}
        mb={8}
      >
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt="20">
        <Text>Ainda não tem conta? </Text>
        <TouchableOpacity>
          <Text color="blue.500" fontWeight="bold">
            Faça seu Cadastro!
          </Text>
        </TouchableOpacity>
      </Box>

    </VStack>    
  );
}
