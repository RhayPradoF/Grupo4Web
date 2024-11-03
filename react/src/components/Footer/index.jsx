import { Copy, LinkRedesSociais, RedesSociais, Rodape } from "./Footer.style";
import iconInstagram from "../../assets/iconInstagram.png";
import iconFacebook from "../../assets/iconFacebook.png";
import iconWhatsapp from "../../assets/iconWhatsapp.png";

export default function Footer() {
  return (
    <Rodape>
      <RedesSociais>
        <LinkRedesSociais href="https://www.instagram.com/serratecoficial/">
          <img src={iconInstagram} alt="instagram icone" />
        </LinkRedesSociais>
        <LinkRedesSociais href="https://www.facebook.com/serratec">
          <img src={iconFacebook} alt="facebook icone" />
        </LinkRedesSociais>
        <LinkRedesSociais href="https://web.whatsapp.com/">
          <img src={iconWhatsapp} alt="whatsapp icone" />
        </LinkRedesSociais>
      </RedesSociais>
      <Copy>&copy;Todos os direitos reservados a Cantina da Pizza</Copy>
    </Rodape>
  );
}
