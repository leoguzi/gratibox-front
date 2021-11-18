import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../globalStyles';
import {
  TitleContainer,
  SmallButton,
  StyledLink,
} from '../common/commonStyles';
import TitleImage from '../assets/image05.webp';

export default function Main() {
  return (
    <Container>
      <TitleContainer>
        <h1>
          Bem vindo ao <strong>GratiBox</strong>
        </h1>
        <h2>
          Receba em casa um box com chás, produtos organicos, incnsos e muito
          mais...
        </h2>
      </TitleContainer>
      <Image src={TitleImage} />
      <BottomContainer>
        <Link to='/signup'>
          <SmallButton>Quero começar</SmallButton>
        </Link>
        <StyledLink to='/login'>Já sou grato(a)</StyledLink>
      </BottomContainer>
    </Container>
  );
}

const Container = styled.div`
  background-image: ${TitleImage};
`;
const Image = styled.img`
  display: block;
  line-height: 0;
  width: 100vw;
  height: 55vh;
  object-fit: cover;
`;

const BottomContainer = styled.div`
  height: 25vh;
  background-color: ${colors.color5};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
