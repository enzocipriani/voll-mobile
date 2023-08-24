import { VStack, Image, Text, Box, FormControl, Input, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { TEMAS } from './estilos/temas'
import { EntradaTexto } from './componentes/EntradaTexto';
import { Senha } from './componentes/Senha';
import { Button_page } from './componentes/Button';
import { Titulo } from './componentes/Titulo';


export default function Cadastro() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>   
      <Image source={Logo} alt="Logo Voll" mt={22} mb={22}/>

      <Titulo>
        Insira alguns dados básicos:
      </Titulo>

      <Box>
        <EntradaTexto>
          Nome
        </EntradaTexto>
        <Input
            placeholder='Insira seu nome completo'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
          >
          </Input>

        <EntradaTexto>
          Email
        </EntradaTexto>
        <Input
            placeholder='Insira seu email'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
          >
          </Input>


        <Senha>
          Crie uma senha
        </Senha>
        <Input
            placeholder='Insira sua senha'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
          >
          </Input>

        <Senha>
          Confirmar senha
        </Senha>
        <Input
            placeholder='Repita a senha'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
          >
          </Input>
      </Box>
       
      <Button_page>
        Avançar
      </Button_page>
    </VStack>    
  );
}
