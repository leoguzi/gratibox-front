import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { colors } from '../globalStyles';
import weeklyImage from '../assets/image04.jpg';
import monthlyImage from '../assets/image02.jpg';
import signatureInfoImage from '../assets/image03.jpg';
import { getSignature } from '../services/api.service';
import {
  SmallButton,
  TitleContainer,
  ContentContainer,
  SignatureInfoCard,
} from '../common/commonStyles';

export default function Signature() {
  const navigate = useNavigate();
  const [signatureInfo, setSignatureInfo] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user.token) {
      navigate('/');
    }
    getSignature(user.token).then((r) => setSignatureInfo(r.data));
  });

  return (
    <>
      <TitleContainer>
        <h1>Bom te ver por aqui, {user.name?.split(' ')[0]}</h1>
        <h2>
          {signatureInfo?.startDate
            ? '"Agradecer é a arte de atrair coisas boas"'
            : 'Você ainda não assinou nenhum plano, que tal começar agora?'}
        </h2>
      </TitleContainer>
      {signatureInfo?.startDate ? (
        <ContentContainer>
          <SignatureInfoCard>
            <img src={signatureInfoImage} alt='Mulher meditando.' />
            <InfoLabel>
              Plano:
              <Info>
                {signatureInfo.signatureType === 'monthly'
                  ? ' Mensal'
                  : ' Semanal'}
              </Info>
            </InfoLabel>
            <InfoLabel>
              Data da assinatura: <Info>{signatureInfo.startDate}</Info>
            </InfoLabel>
            <InfoLabel>
              Proximas entregas:
              <DatesContainer>
                {signatureInfo.nextDeliveries?.map((delivery, index) => (
                  <Info key={index}>{delivery}</Info>
                ))}
              </DatesContainer>
            </InfoLabel>
            <ProductsContainer>
              <span>{signatureInfo.tea && 'Chás'}</span>
              <span>
                {signatureInfo.organicProducts && 'Produtos organicos'}
              </span>
              <span>{signatureInfo.incense && 'Incensos'}</span>
            </ProductsContainer>
          </SignatureInfoCard>
          <SmallButton>Avaliar Entregas</SmallButton>
        </ContentContainer>
      ) : (
        <ContentContainer>
          <SignatureOptionCard>
            <img src={weeklyImage} alt='Mulher meditando com plantas.' />
            <span>
              Você recebe um box por semana. Ideal para quem quer exercer a
              gratidão todos os dias.
            </span>
            <SmallButton onClick={() => navigate('/form')}>Assinar</SmallButton>
          </SignatureOptionCard>
          <SignatureOptionCard>
            <img src={monthlyImage} alt='Mulher meditando no quarto.' />
            <span>
              Você recebe um box por mês. <br />
              <br />
              Ideal para quem está começando agora.
            </span>
            <SmallButton onClick={() => navigate('/form')}>Assinar</SmallButton>
          </SignatureOptionCard>
        </ContentContainer>
      )}
    </>
  );
}

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

const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 5px 0;

  span {
    color: ${colors.color8};
  }
`;

const InfoLabel = styled.span`
  color: ${colors.color0};
`;
const Info = styled.span`
  color: ${colors.color8};
`;

const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  padding-left: 50px;
`;
