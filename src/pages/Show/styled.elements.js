import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;

    @media screen and (min-width: 960px) {
        flex-direction: row;
    }
`;

const ShowImg = styled.div`
    order: 2;
    @media screen and (min-width: 960px) {
        margin: 0 2vw;

        order: 1;
    }
`;

const Image = styled.img`
    width: 200px;
`;

const ShowDetails = styled.section`
    order: 1;
    @media screen and (min-width: 960px) {
        order: 2;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 10px;

    @media screen and (min-width: 960px) {
        margin-bottom: 10px;
        
        font-size: 3rem;
    }
`;

const AddShowButton = styled.button`
    background-color: rgb(114 50 242);
    border: none;
    border-radius: 3px;
    height: 30px;
    font-weight: 600;

    font-family: 'Roboto', sans-serif;
    color: rgb(214 218 218);

    cursor: pointer;
`;

const Sinopsis = styled.article`
    margin: 20px 10px 0 0;


    p {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 960px) {
        p {
            margin-bottom: 10px;
        }
    }

`;

export {
    Container,
    ShowImg,
    Image,
    ShowDetails,
    Title,
    AddShowButton,
    Sinopsis
}
