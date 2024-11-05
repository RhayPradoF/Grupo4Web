import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Card, Icone, Info, Item, Subtitulo, Endereco, Titulo, Banner, Figura, Slogan, AreaSlogan } from './Contatos.style'
import telefone from '../../assets/telefoneIcon.png'
import whatsapp from '../../assets/wppIcon.png';
import email from '../../assets/mailIcon.png';
import cozinheiro from '../../assets/pizzaCozinheiro.png';

export default function Contatos() {
  return (
    <>
      <Header />
      <Titulo>CONTATE-NOS</Titulo>
      <Card>
        <Item>
          <Icone src={telefone} />
          <Info>(24) 2466-0101</Info>
        </Item>
        <Item>
          <Icone src={whatsapp} />
          <Info>(24) 9 8880-0409</Info>
        </Item>
        <Item>
          <Icone src={email} />
          <Info>cantinadapizza@gmail.com</Info>
        </Item>
      </Card>
      <Card>
        <Item>
          <Subtitulo>NOSSO ENDEREÇO:</Subtitulo>
        </Item>
        <Item>
          <Endereco>R.TEREZA, 1500-ALTO DA SERRA-PETRÓPOLIS/RJ
            CEP:25625-000</Endereco>
        </Item>
        <Item>
          <Subtitulo>HORÁRIO DE FUNCIONAMENTO:</Subtitulo>
        </Item>
        <Item>
          <Endereco> SEGUNDA A SÁBADO DAS 17:00 À 00:00</Endereco>
        </Item>
        <Item>
          <Endereco>DOMINGOS E FERIADOS DAS 17:00 À 23:00 </Endereco>
        </Item>
      </Card>
      <Banner>
        <Figura src = {cozinheiro}/>
        <AreaSlogan>
        <Slogan>
          FAÇA-NOS UMA VISITA E
        </Slogan>
        <Slogan>
          BUON APETTITO !
        </Slogan>
        </AreaSlogan>
      </Banner>

      <Footer />
    </>
  );
}
