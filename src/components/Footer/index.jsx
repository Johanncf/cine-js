import { Rodape, RedesSociais, RodapeContainer, Infos, Lista, CopyRight } from "./styled.elements"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

export default function Footer() {
    return (
        <Rodape>
            <RodapeContainer>
                <RedesSociais>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </RedesSociais>
                <Infos>
                    <Lista>
                        <li>Idiomas e Legenda</li>
                        <li>Privacidade</li>
                        <li>Entre em contato</li>
                    </Lista>
                    <Lista>
                        <li>Centro de ajuda</li>
                        <li>Avisos Legais</li>
                        <li>Preferência de Cookies</li>
                    </Lista>
                    <Lista>
                        <li>Termos de uso</li>
                        <li>Informações corporativas</li>
                    </Lista>
                </Infos>
                <CopyRight>© 2021 Copyright - Johann Carlos</CopyRight>
            </RodapeContainer>
        </Rodape>
    )
}