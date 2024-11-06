import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ImgSobre, Texto } from "./Sobre.style";
import Pizza1 from "../../assets/pizza1.png";
import Pizza2 from "../../assets/pizza2.png"
import Pizza3 from "../../assets/pizza3.png"
import BotaoFlutuante from '../../components/BotaoFlutuante'

export default function Sobre() {
  return (
    <div>
      <Header />
      <main>
        <title>Sobre nós</title>
        <ImgSobre src={Pizza1}/>
        <Texto>
          <p>
            Bem-vindo à Cantina da Pizza, onde a paixão pela pizza se encontra
            com o sabor autêntico e a tradição! Fundada com o objetivo de trazer
            um pedaço da Itália para nossa comunidade, a Cantina da Pizza é mais
            do que uma simples pizzaria — é um verdadeiro lar para os amantes da
            boa comida
          </p>
        </Texto>
        <ImgSobre src={Pizza2}/>
        <Texto>
          <p>
            Aqui, cada pizza é feita com carinho, utilizando apenas ingredientes
            frescos e selecionados, que refletem a riqueza da culinária
            italiana. Nossa massa é preparada diariamente, garantindo a textura
            perfeita, e nossas coberturas são cuidadosamente escolhidas para
            proporcionar uma explosão de sabores a cada mordida.
          </p>
        </Texto>
        <ImgSobre src={Pizza3}/>
        <Texto>
          <p>
            Além das nossas pizzas clássicas, também oferecemos opções
            exclusivas, criadas por nossos chefs para surpreender o seu paladar.
            Seja você um fã das combinações tradicionais ou alguém que busca
            experimentar algo novo, temos a pizza ideal para você.
          </p>
          <p>
            Na Cantina da Pizza, acreditamos que cada refeição deve ser uma
            experiência memorável. Por isso, nosso ambiente é acolhedor e
            perfeito para reunir amigos e família. Venha nos visitar, desfrute
            de um atendimento caloroso e descubra porque somos o destino
            preferido dos apaixonados por pizza.
          </p>
          <p>
            Estamos ansiosos para receber você e sua família! Buon Appetito! 🍕
          </p>
        </Texto>
      </main>
      <BotaoFlutuante/>
      <Footer />
    </div>
  );
}
