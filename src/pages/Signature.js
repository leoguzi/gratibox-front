import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { colors } from '../globalStyles';
import { SmallButton, TitleContainer } from '../common/commonStyles';
import weeklyImage from '../assets/image04.jpg';
import MonthlyImage from '../assets/image02.jpg';

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
      <SignatureCard>
        <img src={weeklyImage} alt='Imagem do plano semanal.' />
        <span>
          Você recebe um box por semana. Ideal para quem quer exercer a gratidão
          todos os dias.
        </span>
        <SmallButton>Assinar</SmallButton>
      </SignatureCard>
      <SignatureCard>
        <img src={MonthlyImage} alt='Imagem do plano semanal.' />
        <span>
          Você recebe um box por mês. <br />
          <br />
          Ideal para quem está começando agora.
        </span>
        <SmallButton>Assinar</SmallButton>
      </SignatureCard>
    </>
  );
}

const SignatureCard = styled.div`
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
    margin-bottom: 20px;
  }
`;
