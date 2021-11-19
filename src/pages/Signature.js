import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { colors } from '../globalStyles';
import { SmallButton, TitleContainer } from '../common/commonStyles';
import weeklyImage from '../assets/image04.jpg';
import monthlyImage from '../assets/image02.jpg';
import signatureInfoImage from '../assets/image03.jpg';

export default function Signature() {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ signature: false });
  }, []);

  return (
    <>
      <TitleContainer>
        <h1>Bom te ver por aqui, @user</h1>
        <h2>
          {user.signature
            ? '"Agradecer é a arte de atrair coisas boas"'
            : 'Você ainda não assinou nenhum plano, que tal começar agora?'}
        </h2>
      </TitleContainer>
      {user.signature ? (
        <Container>
          <SignatureInfoCard>
            <img src={signatureInfoImage} alt='Mulher meditando.' />
            <InfoLabel>
              Plano: <Info>{user.signature}</Info>
            </InfoLabel>
            <InfoLabel>
              Data da assinatura: <Info>{}</Info>
            </InfoLabel>
            <InfoLabel>
              Proximas entregas: <Info>{}</Info>
            </InfoLabel>
            <div>
              <Product>Chás</Product>
              <Product>Produtos organicos</Product>
              <Product>Incensos</Product>
            </div>
          </SignatureInfoCard>
          <SmallButton>Avaliar Entregas</SmallButton>
        </Container>
      ) : (
        <Container>
          <SignatureOptionCard>
            <img src={weeklyImage} alt='Mulher meditando com plantas.' />
            <span>
              Você recebe um box por semana. Ideal para quem quer exercer a
              gratidão todos os dias.
            </span>
            <SmallButton>Assinar</SmallButton>
          </SignatureOptionCard>
          <SignatureOptionCard>
            <img src={monthlyImage} alt='Mulher meditando no quarto.' />
            <span>
              Você recebe um box por mês. <br />
              <br />
              Ideal para quem está começando agora.
            </span>
            <SmallButton>Assinar</SmallButton>
          </SignatureOptionCard>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignatureOptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.color3};
  padding: 0 20px 0 20px;
  margin: 10px;
  border-radius: 10px;
  margin-bottom: 50px;
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  span {
    color: ${colors.color0};
    font-weight: bold;
    font-size: 18px;
    margin: 15px 0 20px 0;
  }
`;

const SignatureInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.color4};
  padding: 0 20px 0 20px;
  margin: 10px;
  border-radius: 10px;
  margin-bottom: 30px;
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0 5px 0;
  }
  span {
    margin-bottom: 5px;
  }
`;

const Product = styled.span`
  color: ${colors.color8};
`;

const InfoLabel = styled.span`
  color: ${colors.color0};
`;
const Info = styled.span`
  color: ${colors.color8};
`;