import styled from "styled-components";

const Rodape = styled.footer`
    height: 50vh;
    padding: 10vh 10vw 0 10vw;

    display:  flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const RodapeContainer = styled.div`
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const RedesSociais = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;

    align-self: flex-start;
`;

const Infos = styled.div`
    display: flex;
    gap: 5vw;

    align-self: flex-start;

    @media screen and (min-width: 580px) {
        gap: 100px;
    }

    @media screen and (max-width: 350px) {
        flex-wrap: wrap;
    }
`;

const Lista = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const CopyRight = styled.p`
    align-self: flex-start; 
    margin-top: 40px;

    @media screen and (max-width: 350px) {
        margin-bottom: 40px;
    }
`;

export {
    Rodape,
    RodapeContainer,
    RedesSociais,
    Infos,
    Lista,
    CopyRight
}